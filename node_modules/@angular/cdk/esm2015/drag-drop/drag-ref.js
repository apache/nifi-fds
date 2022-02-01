/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { normalizePassiveListenerOptions, _getShadowRoot } from '@angular/cdk/platform';
import { coerceBooleanProperty, coerceElement } from '@angular/cdk/coercion';
import { Subscription, Subject } from 'rxjs';
import { extendStyles, toggleNativeDragInteractions, toggleVisibility } from './drag-styling';
import { getTransformTransitionDurationInMs } from './transition-duration';
import { getMutableClientRect, adjustClientRect } from './client-rect';
import { ParentPositionTracker } from './parent-position-tracker';
import { deepCloneNode } from './clone-node';
/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = normalizePassiveListenerOptions({ passive: true });
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = normalizePassiveListenerOptions({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
export class DragRef {
    constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /** CSS `transform` that is applied to the element while it's being dragged. */
        this._activeTransform = { x: 0, y: 0 };
        /** Emits when the item is being moved. */
        this._moveEvents = new Subject();
        /** Subscription to pointer movement events. */
        this._pointerMoveSubscription = Subscription.EMPTY;
        /** Subscription to the event that is dispatched when the user lifts their pointer. */
        this._pointerUpSubscription = Subscription.EMPTY;
        /** Subscription to the viewport being scrolled. */
        this._scrollSubscription = Subscription.EMPTY;
        /** Subscription to the viewport being resized. */
        this._resizeSubscription = Subscription.EMPTY;
        /** Cached reference to the boundary element. */
        this._boundaryElement = null;
        /** Whether the native dragging interactions have been enabled on the root element. */
        this._nativeInteractionsEnabled = true;
        /** Elements that can be used to drag the draggable item. */
        this._handles = [];
        /** Registered handles that are currently disabled. */
        this._disabledHandles = new Set();
        /** Layout direction of the item. */
        this._direction = 'ltr';
        /**
         * Amount of milliseconds to wait after the user has put their
         * pointer down before starting to drag the element.
         */
        this.dragStartDelay = 0;
        this._disabled = false;
        /** Emits as the drag sequence is being prepared. */
        this.beforeStarted = new Subject();
        /** Emits when the user starts dragging the item. */
        this.started = new Subject();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new Subject();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new Subject();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new Subject();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new Subject();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new Subject();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = this._moveEvents;
        /** Handler for the `mousedown`/`touchstart` events. */
        this._pointerDown = (event) => {
            this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (this._handles.length) {
                const targetHandle = this._handles.find(handle => {
                    const target = event.target;
                    return !!target && (target === handle || handle.contains(target));
                });
                if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
                    this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!this.disabled) {
                this._initializeDragSequence(this._rootElement, event);
            }
        };
        /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
        this._pointerMove = (event) => {
            const pointerPosition = this._getPointerPositionOnPage(event);
            if (!this._hasStartedDragging) {
                const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
                const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
                const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (isOverThreshold) {
                    const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
                    const container = this._dropContainer;
                    if (!isDelayElapsed) {
                        this._endDragSequence(event);
                        return;
                    }
                    // Prevent other drag sequences from starting while something in the container is still
                    // being dragged. This can happen while we're waiting for the drop animation to finish
                    // and can cause errors, because some elements might still be moving around.
                    if (!container || (!container.isDragging() && !container.isReceiving())) {
                        // Prevent the default action as soon as the dragging sequence is considered as
                        // "started" since waiting for the next event can allow the device to begin scrolling.
                        event.preventDefault();
                        this._hasStartedDragging = true;
                        this._ngZone.run(() => this._startDragSequence(event));
                    }
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!this._previewRect || (!this._previewRect.width && !this._previewRect.height)) {
                    this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
                }
            }
            // We prevent the default action down here so that we know that dragging has started. This is
            // important for touch devices where doing this too early can unnecessarily block scrolling,
            // if there's a dragging delay.
            event.preventDefault();
            const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
            this._hasMoved = true;
            this._lastKnownPointerPosition = pointerPosition;
            this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (this._dropContainer) {
                this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
            }
            else {
                const activeTransform = this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;
                this._applyRootElementTransform(activeTransform.x, activeTransform.y);
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
                    const appliedTransform = `translate(${activeTransform.x} ${activeTransform.y})`;
                    this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (this._moveEvents.observers.length) {
                this._ngZone.run(() => {
                    this._moveEvents.next({
                        source: this,
                        pointerPosition: constrainedPointerPosition,
                        event,
                        distance: this._getDragDistance(constrainedPointerPosition),
                        delta: this._pointerDirectionDelta
                    });
                });
            }
        };
        /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
        this._pointerUp = (event) => {
            this._endDragSequence(event);
        };
        this.withRootElement(element).withParent(_config.parentDragRef || null);
        this._parentPositions = new ParentPositionTracker(_document, _viewportRuler);
        _dragDropRegistry.registerDragItem(this);
    }
    /** Whether starting to drag this element is disabled. */
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._toggleNativeDragInteractions();
            this._handles.forEach(handle => toggleNativeDragInteractions(handle, newValue));
        }
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement() {
        return this._placeholder;
    }
    /** Returns the root draggable element. */
    getRootElement() {
        return this._rootElement;
    }
    /**
     * Gets the currently-visible element that represents the drag item.
     * While dragging this is the placeholder, otherwise it's the root element.
     */
    getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
    }
    /** Registers the handles that can be used to drag the element. */
    withHandles(handles) {
        this._handles = handles.map(handle => coerceElement(handle));
        this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));
        this._toggleNativeDragInteractions();
        // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
        // the set, rather than iterate over it and filter out the destroyed handles, because while
        // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
        // use an array internally which may throw an error.
        const disabledHandles = new Set();
        this._disabledHandles.forEach(handle => {
            if (this._handles.indexOf(handle) > -1) {
                disabledHandles.add(handle);
            }
        });
        this._disabledHandles = disabledHandles;
        return this;
    }
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    withPreviewTemplate(template) {
        this._previewTemplate = template;
        return this;
    }
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    withPlaceholderTemplate(template) {
        this._placeholderTemplate = template;
        return this;
    }
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    withRootElement(rootElement) {
        const element = coerceElement(rootElement);
        if (element !== this._rootElement) {
            if (this._rootElement) {
                this._removeRootElementListeners(this._rootElement);
            }
            this._ngZone.runOutsideAngular(() => {
                element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
                element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
            });
            this._initialTransform = undefined;
            this._rootElement = element;
        }
        if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
            this._ownerSVGElement = this._rootElement.ownerSVGElement;
        }
        return this;
    }
    /**
     * Element to which the draggable's position will be constrained.
     */
    withBoundaryElement(boundaryElement) {
        this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
        this._resizeSubscription.unsubscribe();
        if (boundaryElement) {
            this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize());
        }
        return this;
    }
    /** Sets the parent ref that the ref is nested in.  */
    withParent(parent) {
        this._parentDragRef = parent;
        return this;
    }
    /** Removes the dragging functionality from the DOM element. */
    dispose() {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeNode(this._rootElement);
        }
        removeNode(this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._resizeSubscription.unsubscribe();
        this._parentPositions.clear();
        this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate =
            this._previewTemplate = this._anchor = this._parentDragRef = null;
    }
    /** Checks whether the element is currently being dragged. */
    isDragging() {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    }
    /** Resets a standalone drag item to its initial position. */
    reset() {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    }
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    disableHandle(handle) {
        if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
            toggleNativeDragInteractions(handle, true);
        }
    }
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    enableHandle(handle) {
        if (this._disabledHandles.has(handle)) {
            this._disabledHandles.delete(handle);
            toggleNativeDragInteractions(handle, this.disabled);
        }
    }
    /** Sets the layout direction of the draggable item. */
    withDirection(direction) {
        this._direction = direction;
        return this;
    }
    /** Sets the container that the item is part of. */
    _withDropContainer(container) {
        this._dropContainer = container;
    }
    /**
     * Gets the current position in pixels the draggable outside of a drop container.
     */
    getFreeDragPosition() {
        const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return { x: position.x, y: position.y };
    }
    /**
     * Sets the current position in pixels the draggable outside of a drop container.
     * @param value New position to be set.
     */
    setFreeDragPosition(value) {
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform.x = value.x;
        this._passiveTransform.y = value.y;
        if (!this._dropContainer) {
            this._applyRootElementTransform(value.x, value.y);
        }
        return this;
    }
    /** Updates the item's sort order based on the last-known pointer position. */
    _sortFromLastPointerPosition() {
        const position = this._lastKnownPointerPosition;
        if (position && this._dropContainer) {
            this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
        }
    }
    /** Unsubscribes from the global subscriptions. */
    _removeSubscriptions() {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
        this._scrollSubscription.unsubscribe();
    }
    /** Destroys the preview element and its ViewRef. */
    _destroyPreview() {
        if (this._preview) {
            removeNode(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = null;
    }
    /** Destroys the placeholder element and its ViewRef. */
    _destroyPlaceholder() {
        if (this._placeholder) {
            removeNode(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = null;
    }
    /**
     * Clears subscriptions and stops the dragging sequence.
     * @param event Browser event object that ended the sequence.
     */
    _endDragSequence(event) {
        // Note that here we use `isDragging` from the service, rather than from `this`.
        // The difference is that the one from the service reflects whether a dragging sequence
        // has been initiated, whereas the one on `this` includes whether the user has passed
        // the minimum dragging threshold.
        if (!this._dragDropRegistry.isDragging(this)) {
            return;
        }
        this._removeSubscriptions();
        this._dragDropRegistry.stopDragging(this);
        this._toggleNativeDragInteractions();
        if (this._handles) {
            this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
        }
        if (!this._hasStartedDragging) {
            return;
        }
        this.released.next({ source: this });
        if (this._dropContainer) {
            // Stop scrolling immediately, instead of waiting for the animation to finish.
            this._dropContainer._stopScrolling();
            this._animatePreviewToPlaceholder().then(() => {
                this._cleanupDragArtifacts(event);
                this._cleanupCachedDimensions();
                this._dragDropRegistry.stopDragging(this);
            });
        }
        else {
            // Convert the active transform into a passive one. This means that next time
            // the user starts dragging the item, its position will be calculated relatively
            // to the new passive transform.
            this._passiveTransform.x = this._activeTransform.x;
            this._passiveTransform.y = this._activeTransform.y;
            this._ngZone.run(() => {
                this.ended.next({
                    source: this,
                    distance: this._getDragDistance(this._getPointerPositionOnPage(event))
                });
            });
            this._cleanupCachedDimensions();
            this._dragDropRegistry.stopDragging(this);
        }
    }
    /** Starts the dragging sequence. */
    _startDragSequence(event) {
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        this._toggleNativeDragInteractions();
        const dropContainer = this._dropContainer;
        if (dropContainer) {
            const element = this._rootElement;
            const parent = element.parentNode;
            const preview = this._preview = this._createPreviewElement();
            const placeholder = this._placeholder = this._createPlaceholderElement();
            const anchor = this._anchor = this._anchor || this._document.createComment('');
            // Needs to happen before the root element is moved.
            const shadowRoot = this._getShadowRoot();
            // Insert an anchor node so that we can restore the element's position in the DOM.
            parent.insertBefore(anchor, element);
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            toggleVisibility(element, false);
            this._document.body.appendChild(parent.replaceChild(placeholder, element));
            getPreviewInsertionPoint(this._document, shadowRoot).appendChild(preview);
            this.started.next({ source: this }); // Emit before notifying the container.
            dropContainer.start();
            this._initialContainer = dropContainer;
            this._initialIndex = dropContainer.getItemIndex(this);
        }
        else {
            this.started.next({ source: this });
            this._initialContainer = this._initialIndex = undefined;
        }
        // Important to run after we've called `start` on the parent container
        // so that it has had time to resolve its scrollable parents.
        this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
    }
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    _initializeDragSequence(referenceElement, event) {
        // Stop propagation if the item is inside another
        // draggable so we don't start multiple drag sequences.
        if (this._parentDragRef) {
            event.stopPropagation();
        }
        const isDragging = this.isDragging();
        const isTouchSequence = isTouchEvent(event);
        const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
        const rootElement = this._rootElement;
        const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && event.target.draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor || '';
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._hasStartedDragging = this._hasMoved = false;
        // Avoid multiple subscriptions and memory leaks when multi touch
        // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
        this._removeSubscriptions();
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(scrollEvent => {
            this._updateOnScroll(scrollEvent);
        });
        if (this._boundaryElement) {
            this._boundaryRect = getMutableClientRect(this._boundaryElement);
        }
        // If we have a custom preview we can't know ahead of time how large it'll be so we position
        // it next to the cursor. The exception is when the consumer has opted into making the preview
        // the same size as the root element, in which case we do know the size.
        const previewTemplate = this._previewTemplate;
        this._pickupPositionInElement = previewTemplate && previewTemplate.template &&
            !previewTemplate.matchSize ? { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition =
            this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragStartTime = Date.now();
        this._dragDropRegistry.startDragging(this, event);
    }
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    _cleanupDragArtifacts(event) {
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        toggleVisibility(this._rootElement, true);
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(() => {
            const container = this._dropContainer;
            const currentIndex = container.getItemIndex(this);
            const pointerPosition = this._getPointerPositionOnPage(event);
            const distance = this._getDragDistance(this._getPointerPositionOnPage(event));
            const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
            this.ended.next({ source: this, distance });
            this.dropped.next({
                item: this,
                currentIndex,
                previousIndex: this._initialIndex,
                container: container,
                previousContainer: this._initialContainer,
                isPointerOverContainer,
                distance
            });
            container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance);
            this._dropContainer = this._initialContainer;
        });
    }
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    _updateActiveDropContainer({ x, y }, { x: rawX, y: rawY }) {
        // Drop container that draggable has been moved into.
        let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left its
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(() => {
                // Notify the old container that the item has left.
                this.exited.next({ item: this, container: this._dropContainer });
                this._dropContainer.exit(this);
                // Notify the new container that the item has entered.
                this._dropContainer = newContainer;
                this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
                    // If we're re-entering the initial container and sorting is disabled,
                    // put item the into its starting index to begin with.
                    newContainer.sortingDisabled ? this._initialIndex : undefined);
                this.entered.next({
                    item: this,
                    container: newContainer,
                    currentIndex: newContainer.getItemIndex(this)
                });
            });
        }
        this._dropContainer._startScrollingIfNecessary(rawX, rawY);
        this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    _createPreviewElement() {
        const previewConfig = this._previewTemplate;
        const previewClass = this.previewClass;
        const previewTemplate = previewConfig ? previewConfig.template : null;
        let preview;
        if (previewTemplate && previewConfig) {
            // Measure the element before we've inserted the preview
            // since the insertion could throw off the measurement.
            const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
            const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
            viewRef.detectChanges();
            preview = getRootNode(viewRef, this._document);
            this._previewRef = viewRef;
            if (previewConfig.matchSize) {
                matchElementSize(preview, rootRect);
            }
            else {
                preview.style.transform =
                    getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
            }
        }
        else {
            const element = this._rootElement;
            preview = deepCloneNode(element);
            matchElementSize(preview, element.getBoundingClientRect());
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            // We have to reset the margin, because it can throw off positioning relative to the viewport.
            margin: '0',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: `${this._config.zIndex || 1000}`
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        if (previewClass) {
            if (Array.isArray(previewClass)) {
                previewClass.forEach(className => preview.classList.add(className));
            }
            else {
                preview.classList.add(previewClass);
            }
        }
        return preview;
    }
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    _animatePreviewToPlaceholder() {
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        const placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        const duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(() => {
            return new Promise(resolve => {
                const handler = ((event) => {
                    if (!event || (event.target === this._preview && event.propertyName === 'transform')) {
                        this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                });
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                const timeout = setTimeout(handler, duration * 1.5);
                this._preview.addEventListener('transitionend', handler);
            });
        });
    }
    /** Creates an element that will be shown instead of the current element while dragging. */
    _createPlaceholderElement() {
        const placeholderConfig = this._placeholderTemplate;
        const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        let placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
            this._placeholderRef.detectChanges();
            placeholder = getRootNode(this._placeholderRef, this._document);
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    }
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    _getPointerPositionInElement(referenceElement, event) {
        const elementRect = this._rootElement.getBoundingClientRect();
        const handleElement = referenceElement === this._rootElement ? null : referenceElement;
        const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        const point = isTouchEvent(event) ? event.targetTouches[0] : event;
        const scrollPosition = this._getViewportScrollPosition();
        const x = point.pageX - referenceRect.left - scrollPosition.left;
        const y = point.pageY - referenceRect.top - scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    }
    /** Determines the point of the page that was touched by the user. */
    _getPointerPositionOnPage(event) {
        const scrollPosition = this._getViewportScrollPosition();
        const point = isTouchEvent(event) ?
            // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
            // to have a value, but Firefox in device emulation mode has a bug where both can be empty
            // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
            // throwing an error. The value returned here will be incorrect, but since this only
            // breaks inside a developer tool and the value is only used for secondary information,
            // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
            (event.touches[0] || event.changedTouches[0] || { pageX: 0, pageY: 0 }) : event;
        const x = point.pageX - scrollPosition.left;
        const y = point.pageY - scrollPosition.top;
        // if dragging SVG element, try to convert from the screen coordinate system to the SVG
        // coordinate system
        if (this._ownerSVGElement) {
            const svgMatrix = this._ownerSVGElement.getScreenCTM();
            if (svgMatrix) {
                const svgPoint = this._ownerSVGElement.createSVGPoint();
                svgPoint.x = x;
                svgPoint.y = y;
                return svgPoint.matrixTransform(svgMatrix.inverse());
            }
        }
        return { x, y };
    }
    /** Gets the pointer position on the page, accounting for any position constraints. */
    _getConstrainedPointerPosition(point) {
        const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        let { x, y } = this.constrainPosition ? this.constrainPosition(point, this) : point;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            const { x: pickupX, y: pickupY } = this._pickupPositionInElement;
            const boundaryRect = this._boundaryRect;
            const previewRect = this._previewRect;
            const minY = boundaryRect.top + pickupY;
            const maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            const minX = boundaryRect.left + pickupX;
            const maxX = boundaryRect.right - (previewRect.width - pickupX);
            x = clamp(x, minX, maxX);
            y = clamp(y, minY, maxY);
        }
        return { x, y };
    }
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    _updatePointerDirectionDelta(pointerPositionOnPage) {
        const { x, y } = pointerPositionOnPage;
        const delta = this._pointerDirectionDelta;
        const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        const changeX = Math.abs(x - positionSinceLastChange.x);
        const changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    }
    /** Toggles the native drag interactions, based on how many handles are registered. */
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles) {
            return;
        }
        const shouldEnable = this._handles.length > 0 || !this.isDragging();
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    }
    /** Removes the manually-added event listeners from the root element. */
    _removeRootElementListeners(element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    }
    /**
     * Applies a `transform` to the root element, taking into account any existing transforms on it.
     * @param x New transform value along the X axis.
     * @param y New transform value along the Y axis.
     */
    _applyRootElementTransform(x, y) {
        const transform = getTransform(x, y);
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // Preserve the previous `transform` value, if there was one. Note that we apply our own
        // transform before the user's, because things like rotation can affect which direction
        // the element will be translated towards.
        this._rootElement.style.transform = this._initialTransform ?
            transform + ' ' + this._initialTransform : transform;
    }
    /**
     * Gets the distance that the user has dragged during the current drag sequence.
     * @param currentPosition Current position of the user's pointer.
     */
    _getDragDistance(currentPosition) {
        const pickupPosition = this._pickupPositionOnPage;
        if (pickupPosition) {
            return { x: currentPosition.x - pickupPosition.x, y: currentPosition.y - pickupPosition.y };
        }
        return { x: 0, y: 0 };
    }
    /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = undefined;
        this._parentPositions.clear();
    }
    /**
     * Checks whether the element is still inside its boundary after the viewport has been resized.
     * If not, the position is adjusted so that the element fits again.
     */
    _containInsideBoundaryOnResize() {
        let { x, y } = this._passiveTransform;
        if ((x === 0 && y === 0) || this.isDragging() || !this._boundaryElement) {
            return;
        }
        const boundaryRect = this._boundaryElement.getBoundingClientRect();
        const elementRect = this._rootElement.getBoundingClientRect();
        // It's possible that the element got hidden away after dragging (e.g. by switching to a
        // different tab). Don't do anything in this case so we don't clear the user's position.
        if ((boundaryRect.width === 0 && boundaryRect.height === 0) ||
            (elementRect.width === 0 && elementRect.height === 0)) {
            return;
        }
        const leftOverflow = boundaryRect.left - elementRect.left;
        const rightOverflow = elementRect.right - boundaryRect.right;
        const topOverflow = boundaryRect.top - elementRect.top;
        const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
        // If the element has become wider than the boundary, we can't
        // do much to make it fit so we just anchor it to the left.
        if (boundaryRect.width > elementRect.width) {
            if (leftOverflow > 0) {
                x += leftOverflow;
            }
            if (rightOverflow > 0) {
                x -= rightOverflow;
            }
        }
        else {
            x = 0;
        }
        // If the element has become taller than the boundary, we can't
        // do much to make it fit so we just anchor it to the top.
        if (boundaryRect.height > elementRect.height) {
            if (topOverflow > 0) {
                y += topOverflow;
            }
            if (bottomOverflow > 0) {
                y -= bottomOverflow;
            }
        }
        else {
            y = 0;
        }
        if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
            this.setFreeDragPosition({ y, x });
        }
    }
    /** Gets the drag start delay, based on the event type. */
    _getDragStartDelay(event) {
        const value = this.dragStartDelay;
        if (typeof value === 'number') {
            return value;
        }
        else if (isTouchEvent(event)) {
            return value.touch;
        }
        return value ? value.mouse : 0;
    }
    /** Updates the internal state of the draggable element when scrolling has occurred. */
    _updateOnScroll(event) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
            const target = event.target;
            // ClientRect dimensions are based on the scroll position of the page and its parent node so
            // we have to update the cached boundary ClientRect if the user has scrolled. Check for
            // the `document` specifically since IE doesn't support `contains` on it.
            if (this._boundaryRect && (target === this._document ||
                (target !== this._boundaryElement && target.contains(this._boundaryElement)))) {
                adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
            }
            this._pickupPositionOnPage.x += scrollDifference.left;
            this._pickupPositionOnPage.y += scrollDifference.top;
            // If we're in free drag mode, we have to update the active transform, because
            // it isn't relative to the viewport like the preview inside a drop list.
            if (!this._dropContainer) {
                this._activeTransform.x -= scrollDifference.left;
                this._activeTransform.y -= scrollDifference.top;
                this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
            }
        }
    }
    /** Gets the scroll position of the viewport. */
    _getViewportScrollPosition() {
        const cachedPosition = this._parentPositions.positions.get(this._document);
        return cachedPosition ? cachedPosition.scrollPosition :
            this._viewportRuler.getViewportScrollPosition();
    }
    /**
     * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
     * than saving it in property directly on init, because we want to resolve it as late as possible
     * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
     * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
     */
    _getShadowRoot() {
        if (this._cachedShadowRoot === undefined) {
            this._cachedShadowRoot = _getShadowRoot(this._rootElement);
        }
        return this._cachedShadowRoot;
    }
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/** Clamps a value between a minimum and a maximum. */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove a node from the DOM and to do all the necessary null checks.
 * @param node Node to be removed.
 */
function removeNode(node) {
    if (node && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/** Gets the element into which the drag preview should be inserted. */
function getPreviewInsertionPoint(documentRef, shadowRoot) {
    // We can't use the body if the user is in fullscreen mode,
    // because the preview will render under the fullscreen element.
    // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
    return shadowRoot ||
        documentRef.fullscreenElement ||
        documentRef.webkitFullscreenElement ||
        documentRef.mozFullScreenElement ||
        documentRef.msFullscreenElement ||
        documentRef.body;
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */
function getRootNode(viewRef, _document) {
    const rootNodes = viewRef.rootNodes;
    if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
        return rootNodes[0];
    }
    const wrapper = _document.createElement('div');
    rootNodes.forEach(node => wrapper.appendChild(node));
    return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
    target.style.width = `${sourceRect.width}px`;
    target.style.height = `${sourceRect.height}px`;
    target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kcmFnLXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsK0JBQStCLEVBQUUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdEYsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUUsT0FBTyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBR3ZELE9BQU8sRUFBQyxZQUFZLEVBQUUsNEJBQTRCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQXVCM0MsaUVBQWlFO0FBQ2pFLE1BQU0sMkJBQTJCLEdBQUcsK0JBQStCLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUVyRixpRUFBaUU7QUFDakUsTUFBTSwwQkFBMEIsR0FBRywrQkFBK0IsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBRXJGOzs7OztHQUtHO0FBQ0gsTUFBTSx1QkFBdUIsR0FBRyxHQUFHLENBQUM7QUE4QnBDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUF5T2xCLFlBQ0UsT0FBOEMsRUFDdEMsT0FBc0IsRUFDdEIsU0FBbUIsRUFDbkIsT0FBZSxFQUNmLGNBQTZCLEVBQzdCLGlCQUF5RDtRQUp6RCxZQUFPLEdB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TUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7SUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFbWJlZGRlZFZpZXdSZWYsIEVsZW1lbnRSZWYsIE5nWm9uZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7RGlyZWN0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge25vcm1hbGl6ZVBhc3NpdmVMaXN0ZW5lck9wdGlvbnMsIF9nZXRTaGFkb3dSb290fSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZUVsZW1lbnR9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Ryb3BMaXN0UmVmSW50ZXJuYWwgYXMgRHJvcExpc3RSZWZ9IGZyb20gJy4vZHJvcC1saXN0LXJlZic7XG5pbXBvcnQge0RyYWdEcm9wUmVnaXN0cnl9IGZyb20gJy4vZHJhZy1kcm9wLXJlZ2lzdHJ5JztcbmltcG9ydCB7ZXh0ZW5kU3R5bGVzLCB0b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zLCB0b2dnbGVWaXNpYmlsaXR5fSBmcm9tICcuL2RyYWctc3R5bGluZyc7XG5pbXBvcnQge2dldFRyYW5zZm9ybVRyYW5zaXRpb25EdXJhdGlvbkluTXN9IGZyb20gJy4vdHJhbnNpdGlvbi1kdXJhdGlvbic7XG5pbXBvcnQge2dldE11dGFibGVDbGllbnRSZWN0LCBhZGp1c3RDbGllbnRSZWN0fSBmcm9tICcuL2NsaWVudC1yZWN0JztcbmltcG9ydCB7UGFyZW50UG9zaXRpb25UcmFja2VyfSBmcm9tICcuL3BhcmVudC1wb3NpdGlvbi10cmFja2VyJztcbmltcG9ydCB7ZGVlcENsb25lTm9kZX0gZnJvbSAnLi9jbG9uZS1ub2RlJztcblxuLyoqIE9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSB0aGUgYmVoYXZpb3Igb2YgRHJhZ1JlZi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1JlZkNvbmZpZyB7XG4gIC8qKlxuICAgKiBNaW5pbXVtIGFtb3VudCBvZiBwaXhlbHMgdGhhdCB0aGUgdXNlciBzaG91bGRcbiAgICogZHJhZywgYmVmb3JlIHRoZSBDREsgaW5pdGlhdGVzIGEgZHJhZyBzZXF1ZW5jZS5cbiAgICovXG4gIGRyYWdTdGFydFRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBbW91bnQgdGhlIHBpeGVscyB0aGUgdXNlciBzaG91bGQgZHJhZyBiZWZvcmUgdGhlIENES1xuICAgKiBjb25zaWRlcnMgdGhlbSB0byBoYXZlIGNoYW5nZWQgdGhlIGRyYWcgZGlyZWN0aW9uLlxuICAgKi9cbiAgcG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKiBgei1pbmRleGAgZm9yIHRoZSBhYnNvbHV0ZWx5LXBvc2l0aW9uZWQgZWxlbWVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSB0aGUgZHJhZyBpdGVtLiAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIFJlZiB0aGF0IHRoZSBjdXJyZW50IGRyYWcgaXRlbSBpcyBuZXN0ZWQgaW4uICovXG4gIHBhcmVudERyYWdSZWY/OiBEcmFnUmVmO1xufVxuXG4vKiogT3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGJpbmQgYSBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyLiAqL1xuY29uc3QgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25zID0gbm9ybWFsaXplUGFzc2l2ZUxpc3RlbmVyT3B0aW9ucyh7cGFzc2l2ZTogdHJ1ZX0pO1xuXG4vKiogT3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGJpbmQgYW4gYWN0aXZlIGV2ZW50IGxpc3RlbmVyLiAqL1xuY29uc3QgYWN0aXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMgPSBub3JtYWxpemVQYXNzaXZlTGlzdGVuZXJPcHRpb25zKHtwYXNzaXZlOiBmYWxzZX0pO1xuXG4vKipcbiAqIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBpZ25vcmUgbW91c2UgZXZlbnRzLCBhZnRlclxuICogcmVjZWl2aW5nIGEgdG91Y2ggZXZlbnQuIFVzZWQgdG8gYXZvaWQgZG9pbmcgZG91YmxlIHdvcmsgZm9yXG4gKiB0b3VjaCBkZXZpY2VzIHdoZXJlIHRoZSBicm93c2VyIGZpcmVzIGZha2UgbW91c2UgZXZlbnRzLCBpblxuICogYWRkaXRpb24gdG8gdG91Y2ggZXZlbnRzLlxuICovXG5jb25zdCBNT1VTRV9FVkVOVF9JR05PUkVfVElNRSA9IDgwMDtcblxuLy8gVE9ETyhjcmlzYmV0byk6IGFkZCBhbiBBUEkgZm9yIG1vdmluZyBhIGRyYWdnYWJsZSB1cC9kb3duIHRoZVxuLy8gbGlzdCBwcm9ncmFtbWF0aWNhbGx5LiBVc2VmdWwgZm9yIGtleWJvYXJkIGNvbnRyb2xzLlxuXG4vKipcbiAqIEludGVybmFsIGNvbXBpbGUtdGltZS1vbmx5IHJlcHJlc2VudGF0aW9uIG9mIGEgYERyYWdSZWZgLlxuICogVXNlZCB0byBhdm9pZCBjaXJjdWxhciBpbXBvcnQgaXNzdWVzIGJldHdlZW4gdGhlIGBEcmFnUmVmYCBhbmQgdGhlIGBEcm9wTGlzdFJlZmAuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1JlZkludGVybmFsIGV4dGVuZHMgRHJhZ1JlZiB7fVxuXG4vKiogVGVtcGxhdGUgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgYSBkcmFnIGhlbHBlciBlbGVtZW50IChlLmcuIGEgcHJldmlldyBvciBhIHBsYWNlaG9sZGVyKS4gKi9cbmludGVyZmFjZSBEcmFnSGVscGVyVGVtcGxhdGU8VCA9IGFueT4ge1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8VD4gfCBudWxsO1xuICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBjb250ZXh0OiBUO1xufVxuXG4vKiogVGVtcGxhdGUgdGhhdCBjYW4gYmUgdXNlZCB0byBjcmVhdGUgYSBkcmFnIHByZXZpZXcgZWxlbWVudC4gKi9cbmludGVyZmFjZSBEcmFnUHJldmlld1RlbXBsYXRlPFQgPSBhbnk+IGV4dGVuZHMgRHJhZ0hlbHBlclRlbXBsYXRlPFQ+IHtcbiAgbWF0Y2hTaXplPzogYm9vbGVhbjtcbn1cblxuLyoqIFBvaW50IG9uIHRoZSBwYWdlIG9yIHdpdGhpbiBhbiBlbGVtZW50LiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG4vKipcbiAqIFJlZmVyZW5jZSB0byBhIGRyYWdnYWJsZSBpdGVtLiBVc2VkIHRvIG1hbmlwdWxhdGUgb3IgZGlzcG9zZSBvZiB0aGUgaXRlbS5cbiAqL1xuZXhwb3J0IGNsYXNzIERyYWdSZWY8VCA9IGFueT4ge1xuICAvKiogRWxlbWVudCBkaXNwbGF5ZWQgbmV4dCB0byB0aGUgdXNlcidzIHBvaW50ZXIgd2hpbGUgdGhlIGVsZW1lbnQgaXMgZHJhZ2dlZC4gKi9cbiAgcHJpdmF0ZSBfcHJldmlldzogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgdmlldyBvZiB0aGUgcHJldmlldyBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9wcmV2aWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8YW55PiB8IG51bGw7XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgdmlldyBvZiB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJSZWY6IEVtYmVkZGVkVmlld1JlZjxhbnk+IHwgbnVsbDtcblxuICAvKiogRWxlbWVudCB0aGF0IGlzIHJlbmRlcmVkIGluc3RlYWQgb2YgdGhlIGRyYWdnYWJsZSBpdGVtIHdoaWxlIGl0IGlzIGJlaW5nIHNvcnRlZC4gKi9cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IEhUTUxFbGVtZW50O1xuXG4gIC8qKiBDb29yZGluYXRlcyB3aXRoaW4gdGhlIGVsZW1lbnQgYXQgd2hpY2ggdGhlIHVzZXIgcGlja2VkIHVwIHRoZSBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9waWNrdXBQb3NpdGlvbkluRWxlbWVudDogUG9pbnQ7XG5cbiAgLyoqIENvb3JkaW5hdGVzIG9uIHRoZSBwYWdlIGF0IHdoaWNoIHRoZSB1c2VyIHBpY2tlZCB1cCB0aGUgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfcGlja3VwUG9zaXRpb25PblBhZ2U6IFBvaW50O1xuXG4gIC8qKlxuICAgKiBBbmNob3Igbm9kZSB1c2VkIHRvIHNhdmUgdGhlIHBsYWNlIGluIHRoZSBET00gd2hlcmUgdGhlIGVsZW1lbnQgd2FzXG4gICAqIHBpY2tlZCB1cCBzbyB0aGF0IGl0IGNhbiBiZSByZXN0b3JlZCBhdCB0aGUgZW5kIG9mIHRoZSBkcmFnIHNlcXVlbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfYW5jaG9yOiBDb21tZW50O1xuXG4gIC8qKlxuICAgKiBDU1MgYHRyYW5zZm9ybWAgYXBwbGllZCB0byB0aGUgZWxlbWVudCB3aGVuIGl0IGlzbid0IGJlaW5nIGRyYWdnZWQuIFdlIG5lZWQgYVxuICAgKiBwYXNzaXZlIHRyYW5zZm9ybSBpbiBvcmRlciBmb3IgdGhlIGRyYWdnZWQgZWxlbWVudCB0byByZXRhaW4gaXRzIG5ldyBwb3NpdGlvblxuICAgKiBhZnRlciB0aGUgdXNlciBoYXMgc3RvcHBlZCBkcmFnZ2luZyBhbmQgYmVjYXVzZSB3ZSBuZWVkIHRvIGtub3cgdGhlIHJlbGF0aXZlXG4gICAqIHBvc2l0aW9uIGluIGNhc2UgdGhleSBzdGFydCBkcmFnZ2luZyBhZ2Fpbi4gVGhpcyBjb3JyZXNwb25kcyB0byBgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1gLlxuICAgKi9cbiAgcHJpdmF0ZSBfcGFzc2l2ZVRyYW5zZm9ybTogUG9pbnQgPSB7eDogMCwgeTogMH07XG5cbiAgLyoqIENTUyBgdHJhbnNmb3JtYCB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnQgd2hpbGUgaXQncyBiZWluZyBkcmFnZ2VkLiAqL1xuICBwcml2YXRlIF9hY3RpdmVUcmFuc2Zvcm06IFBvaW50ID0ge3g6IDAsIHk6IDB9O1xuXG4gIC8qKiBJbmxpbmUgYHRyYW5zZm9ybWAgdmFsdWUgdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHRoZSBmaXJzdCBkcmFnZ2luZyBzZXF1ZW5jZS4gKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbFRyYW5zZm9ybT86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZHJhZ2dpbmcgc2VxdWVuY2UgaGFzIGJlZW4gc3RhcnRlZC4gRG9lc24ndFxuICAgKiBuZWNlc3NhcmlseSBtZWFuIHRoYXQgdGhlIGVsZW1lbnQgaGFzIGJlZW4gbW92ZWQuXG4gICAqL1xuICBwcml2YXRlIF9oYXNTdGFydGVkRHJhZ2dpbmc6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaGFzIG1vdmVkIHNpbmNlIHRoZSB1c2VyIHN0YXJ0ZWQgZHJhZ2dpbmcgaXQuICovXG4gIHByaXZhdGUgX2hhc01vdmVkOiBib29sZWFuO1xuXG4gIC8qKiBEcm9wIGNvbnRhaW5lciBpbiB3aGljaCB0aGUgRHJhZ1JlZiByZXNpZGVkIHdoZW4gZHJhZ2dpbmcgYmVnYW4uICovXG4gIHByaXZhdGUgX2luaXRpYWxDb250YWluZXI6IERyb3BMaXN0UmVmO1xuXG4gIC8qKiBJbmRleCBhdCB3aGljaCB0aGUgaXRlbSBzdGFydGVkIGluIGl0cyBpbml0aWFsIGNvbnRhaW5lci4gKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbEluZGV4OiBudW1iZXI7XG5cbiAgLyoqIENhY2hlZCBwb3NpdGlvbnMgb2Ygc2Nyb2xsYWJsZSBwYXJlbnQgZWxlbWVudHMuICovXG4gIHByaXZhdGUgX3BhcmVudFBvc2l0aW9uczogUGFyZW50UG9zaXRpb25UcmFja2VyO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBpdGVtIGlzIGJlaW5nIG1vdmVkLiAqL1xuICBwcml2YXRlIF9tb3ZlRXZlbnRzID0gbmV3IFN1YmplY3Q8e1xuICAgIHNvdXJjZTogRHJhZ1JlZjtcbiAgICBwb2ludGVyUG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xuICAgIGRpc3RhbmNlOiBQb2ludDtcbiAgICBkZWx0YToge3g6IC0xIHwgMCB8IDEsIHk6IC0xIHwgMCB8IDF9O1xuICB9PigpO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSB1c2VyIGlzIGRyYWdnaW5nIGFsb25nIGVhY2ggYXhpcy4gKi9cbiAgcHJpdmF0ZSBfcG9pbnRlckRpcmVjdGlvbkRlbHRhOiB7eDogLTEgfCAwIHwgMSwgeTogLTEgfCAwIHwgMX07XG5cbiAgLyoqIFBvaW50ZXIgcG9zaXRpb24gYXQgd2hpY2ggdGhlIGxhc3QgY2hhbmdlIGluIHRoZSBkZWx0YSBvY2N1cnJlZC4gKi9cbiAgcHJpdmF0ZSBfcG9pbnRlclBvc2l0aW9uQXRMYXN0RGlyZWN0aW9uQ2hhbmdlOiBQb2ludDtcblxuICAvKiogUG9zaXRpb24gb2YgdGhlIHBvaW50ZXIgYXQgdGhlIGxhc3QgcG9pbnRlciBldmVudC4gKi9cbiAgcHJpdmF0ZSBfbGFzdEtub3duUG9pbnRlclBvc2l0aW9uOiBQb2ludDtcblxuICAvKipcbiAgICogUm9vdCBET00gbm9kZSBvZiB0aGUgZHJhZyBpbnN0YW5jZS4gVGhpcyBpcyB0aGUgZWxlbWVudCB0aGF0IHdpbGxcbiAgICogYmUgbW92ZWQgYXJvdW5kIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBfcm9vdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBOZWFyZXN0IGFuY2VzdG9yIFNWRywgcmVsYXRpdmUgdG8gd2hpY2ggY29vcmRpbmF0ZXMgYXJlIGNhbGN1bGF0ZWQgaWYgZHJhZ2dpbmcgU1ZHRWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBfb3duZXJTVkdFbGVtZW50OiBTVkdTVkdFbGVtZW50IHwgbnVsbDtcblxuICAvKipcbiAgICogSW5saW5lIHN0eWxlIHZhbHVlIG9mIGAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3JgIGF0IHRoZSB0aW1lIHRoZVxuICAgKiBkcmFnZ2luZyB3YXMgc3RhcnRlZC4gVXNlZCB0byByZXN0b3JlIHRoZSB2YWx1ZSBvbmNlIHdlJ3JlIGRvbmUgZHJhZ2dpbmcuXG4gICAqL1xuICBwcml2YXRlIF9yb290RWxlbWVudFRhcEhpZ2hsaWdodDogc3RyaW5nO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gcG9pbnRlciBtb3ZlbWVudCBldmVudHMuICovXG4gIHByaXZhdGUgX3BvaW50ZXJNb3ZlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGhlIGV2ZW50IHRoYXQgaXMgZGlzcGF0Y2hlZCB3aGVuIHRoZSB1c2VyIGxpZnRzIHRoZWlyIHBvaW50ZXIuICovXG4gIHByaXZhdGUgX3BvaW50ZXJVcFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRvIHRoZSB2aWV3cG9ydCBiZWluZyBzY3JvbGxlZC4gKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBTdWJzY3JpcHRpb24gdG8gdGhlIHZpZXdwb3J0IGJlaW5nIHJlc2l6ZWQuICovXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKipcbiAgICogVGltZSBhdCB3aGljaCB0aGUgbGFzdCB0b3VjaCBldmVudCBvY2N1cnJlZC4gVXNlZCB0byBhdm9pZCBmaXJpbmcgdGhlIHNhbWVcbiAgICogZXZlbnRzIG11bHRpcGxlIHRpbWVzIG9uIHRvdWNoIGRldmljZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBmaXJlIGEgZmFrZVxuICAgKiBtb3VzZSBldmVudCBmb3IgZWFjaCB0b3VjaCBldmVudCwgYWZ0ZXIgYSBjZXJ0YWluIHRpbWUuXG4gICAqL1xuICBwcml2YXRlIF9sYXN0VG91Y2hFdmVudFRpbWU6IG51bWJlcjtcblxuICAvKiogVGltZSBhdCB3aGljaCB0aGUgbGFzdCBkcmFnZ2luZyBzZXF1ZW5jZSB3YXMgc3RhcnRlZC4gKi9cbiAgcHJpdmF0ZSBfZHJhZ1N0YXJ0VGltZTogbnVtYmVyO1xuXG4gIC8qKiBDYWNoZWQgcmVmZXJlbmNlIHRvIHRoZSBib3VuZGFyeSBlbGVtZW50LiAqL1xuICBwcml2YXRlIF9ib3VuZGFyeUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG5hdGl2ZSBkcmFnZ2luZyBpbnRlcmFjdGlvbnMgaGF2ZSBiZWVuIGVuYWJsZWQgb24gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfbmF0aXZlSW50ZXJhY3Rpb25zRW5hYmxlZCA9IHRydWU7XG5cbiAgLyoqIENhY2hlZCBkaW1lbnNpb25zIG9mIHRoZSBwcmV2aWV3IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3ByZXZpZXdSZWN0PzogQ2xpZW50UmVjdDtcblxuICAvKiogQ2FjaGVkIGRpbWVuc2lvbnMgb2YgdGhlIGJvdW5kYXJ5IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX2JvdW5kYXJ5UmVjdD86IENsaWVudFJlY3Q7XG5cbiAgLyoqIEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0ZW1wbGF0ZSB0byBjcmVhdGUgdGhlIGRyYWdnYWJsZSBpdGVtJ3MgcHJldmlldy4gKi9cbiAgcHJpdmF0ZSBfcHJldmlld1RlbXBsYXRlPzogRHJhZ1ByZXZpZXdUZW1wbGF0ZSB8IG51bGw7XG5cbiAgLyoqIFRlbXBsYXRlIGZvciBwbGFjZWhvbGRlciBlbGVtZW50IHJlbmRlcmVkIHRvIHNob3cgd2hlcmUgYSBkcmFnZ2FibGUgd291bGQgYmUgZHJvcHBlZC4gKi9cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJUZW1wbGF0ZT86IERyYWdIZWxwZXJUZW1wbGF0ZSB8IG51bGw7XG5cbiAgLyoqIEVsZW1lbnRzIHRoYXQgY2FuIGJlIHVzZWQgdG8gZHJhZyB0aGUgZHJhZ2dhYmxlIGl0ZW0uICovXG4gIHByaXZhdGUgX2hhbmRsZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAvKiogUmVnaXN0ZXJlZCBoYW5kbGVzIHRoYXQgYXJlIGN1cnJlbnRseSBkaXNhYmxlZC4gKi9cbiAgcHJpdmF0ZSBfZGlzYWJsZWRIYW5kbGVzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcblxuICAvKiogRHJvcHBhYmxlIGNvbnRhaW5lciB0aGF0IHRoZSBkcmFnZ2FibGUgaXMgYSBwYXJ0IG9mLiAqL1xuICBwcml2YXRlIF9kcm9wQ29udGFpbmVyPzogRHJvcExpc3RSZWY7XG5cbiAgLyoqIExheW91dCBkaXJlY3Rpb24gb2YgdGhlIGl0ZW0uICovXG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgLyoqIFJlZiB0aGF0IHRoZSBjdXJyZW50IGRyYWcgaXRlbSBpcyBuZXN0ZWQgaW4uICovXG4gIHByaXZhdGUgX3BhcmVudERyYWdSZWY6IERyYWdSZWY8dW5rbm93bj4gfCBudWxsO1xuXG4gIC8qKlxuICAgKiBDYWNoZWQgc2hhZG93IHJvb3QgdGhhdCB0aGUgZWxlbWVudCBpcyBwbGFjZWQgaW4uIGBudWxsYCBtZWFucyB0aGF0IHRoZSBlbGVtZW50IGlzbid0IGluXG4gICAqIHRoZSBzaGFkb3cgRE9NIGFuZCBgdW5kZWZpbmVkYCBtZWFucyB0aGF0IGl0IGhhc24ndCBiZWVuIHJlc29sdmVkIHlldC4gU2hvdWxkIGJlIHJlYWQgdmlhXG4gICAqIGBfZ2V0U2hhZG93Um9vdGAsIG5vdCBkaXJlY3RseS5cbiAgICovXG4gIHByaXZhdGUgX2NhY2hlZFNoYWRvd1Jvb3Q6IFNoYWRvd1Jvb3QgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBBeGlzIGFsb25nIHdoaWNoIGRyYWdnaW5nIGlzIGxvY2tlZC4gKi9cbiAgbG9ja0F4aXM6ICd4JyB8ICd5JztcblxuICAvKipcbiAgICogQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGFmdGVyIHRoZSB1c2VyIGhhcyBwdXQgdGhlaXJcbiAgICogcG9pbnRlciBkb3duIGJlZm9yZSBzdGFydGluZyB0byBkcmFnIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgZHJhZ1N0YXJ0RGVsYXk6IG51bWJlciB8IHt0b3VjaDogbnVtYmVyLCBtb3VzZTogbnVtYmVyfSA9IDA7XG5cbiAgLyoqIENsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBwcmV2aWV3IGVsZW1lbnQuICovXG4gIHByZXZpZXdDbGFzczogc3RyaW5nfHN0cmluZ1tdfHVuZGVmaW5lZDtcblxuICAvKiogV2hldGhlciBzdGFydGluZyB0byBkcmFnIHRoaXMgZWxlbWVudCBpcyBkaXNhYmxlZC4gKi9cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAhISh0aGlzLl9kcm9wQ29udGFpbmVyICYmIHRoaXMuX2Ryb3BDb250YWluZXIuZGlzYWJsZWQpO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLl90b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKCk7XG4gICAgICB0aGlzLl9oYW5kbGVzLmZvckVhY2goaGFuZGxlID0+IHRvZ2dsZU5hdGl2ZURyYWdJbnRlcmFjdGlvbnMoaGFuZGxlLCBuZXdWYWx1ZSkpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBFbWl0cyBhcyB0aGUgZHJhZyBzZXF1ZW5jZSBpcyBiZWluZyBwcmVwYXJlZC4gKi9cbiAgYmVmb3JlU3RhcnRlZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBpdGVtLiAqL1xuICBzdGFydGVkID0gbmV3IFN1YmplY3Q8e3NvdXJjZTogRHJhZ1JlZn0+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgaGFzIHJlbGVhc2VkIGEgZHJhZyBpdGVtLCBiZWZvcmUgYW55IGFuaW1hdGlvbnMgaGF2ZSBzdGFydGVkLiAqL1xuICByZWxlYXNlZCA9IG5ldyBTdWJqZWN0PHtzb3VyY2U6IERyYWdSZWZ9PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIGFuIGl0ZW0gaW4gdGhlIGNvbnRhaW5lci4gKi9cbiAgZW5kZWQgPSBuZXcgU3ViamVjdDx7c291cmNlOiBEcmFnUmVmLCBkaXN0YW5jZTogUG9pbnR9PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGhhcyBtb3ZlZCB0aGUgaXRlbSBpbnRvIGEgbmV3IGNvbnRhaW5lci4gKi9cbiAgZW50ZXJlZCA9IG5ldyBTdWJqZWN0PHtjb250YWluZXI6IERyb3BMaXN0UmVmLCBpdGVtOiBEcmFnUmVmLCBjdXJyZW50SW5kZXg6IG51bWJlcn0+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgcmVtb3ZlcyB0aGUgaXRlbSBpdHMgY29udGFpbmVyIGJ5IGRyYWdnaW5nIGl0IGludG8gYW5vdGhlciBjb250YWluZXIuICovXG4gIGV4aXRlZCA9IG5ldyBTdWJqZWN0PHtjb250YWluZXI6IERyb3BMaXN0UmVmLCBpdGVtOiBEcmFnUmVmfT4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBkcm9wcyB0aGUgaXRlbSBpbnNpZGUgYSBjb250YWluZXIuICovXG4gIGRyb3BwZWQgPSBuZXcgU3ViamVjdDx7XG4gICAgcHJldmlvdXNJbmRleDogbnVtYmVyO1xuICAgIGN1cnJlbnRJbmRleDogbnVtYmVyO1xuICAgIGl0ZW06IERyYWdSZWY7XG4gICAgY29udGFpbmVyOiBEcm9wTGlzdFJlZjtcbiAgICBwcmV2aW91c0NvbnRhaW5lcjogRHJvcExpc3RSZWY7XG4gICAgZGlzdGFuY2U6IFBvaW50O1xuICAgIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGJvb2xlYW47XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFzIHRoZSB1c2VyIGlzIGRyYWdnaW5nIHRoZSBpdGVtLiBVc2Ugd2l0aCBjYXV0aW9uLFxuICAgKiBiZWNhdXNlIHRoaXMgZXZlbnQgd2lsbCBmaXJlIGZvciBldmVyeSBwaXhlbCB0aGF0IHRoZSB1c2VyIGhhcyBkcmFnZ2VkLlxuICAgKi9cbiAgbW92ZWQ6IE9ic2VydmFibGU8e1xuICAgIHNvdXJjZTogRHJhZ1JlZjtcbiAgICBwb2ludGVyUG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50O1xuICAgIGRpc3RhbmNlOiBQb2ludDtcbiAgICBkZWx0YToge3g6IC0xIHwgMCB8IDEsIHk6IC0xIHwgMCB8IDF9O1xuICB9PiA9IHRoaXMuX21vdmVFdmVudHM7XG5cbiAgLyoqIEFyYml0cmFyeSBkYXRhIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBkcmFnIGl0ZW0uICovXG4gIGRhdGE6IFQ7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBsb2dpYyBvZiBob3cgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmFnIGl0ZW1cbiAgICogaXMgbGltaXRlZCB3aGlsZSBpdCdzIGJlaW5nIGRyYWdnZWQuIEdldHMgY2FsbGVkIHdpdGggYSBwb2ludCBjb250YWluaW5nIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqIG9mIHRoZSB1c2VyJ3MgcG9pbnRlciBvbiB0aGUgcGFnZSBhbmQgc2hvdWxkIHJldHVybiBhIHBvaW50IGRlc2NyaWJpbmcgd2hlcmUgdGhlIGl0ZW0gc2hvdWxkXG4gICAqIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgY29uc3RyYWluUG9zaXRpb24/OiAocG9pbnQ6IFBvaW50LCBkcmFnUmVmOiBEcmFnUmVmKSA9PiBQb2ludDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgX2NvbmZpZzogRHJhZ1JlZkNvbmZpZyxcbiAgICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnQsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcbiAgICBwcml2YXRlIF9kcmFnRHJvcFJlZ2lzdHJ5OiBEcmFnRHJvcFJlZ2lzdHJ5PERyYWdSZWYsIERyb3BMaXN0UmVmPikge1xuXG4gICAgdGhpcy53aXRoUm9vdEVsZW1lbnQoZWxlbWVudCkud2l0aFBhcmVudChfY29uZmlnLnBhcmVudERyYWdSZWYgfHwgbnVsbCk7XG4gICAgdGhpcy5fcGFyZW50UG9zaXRpb25zID0gbmV3IFBhcmVudFBvc2l0aW9uVHJhY2tlcihfZG9jdW1lbnQsIF92aWV3cG9ydFJ1bGVyKTtcbiAgICBfZHJhZ0Ryb3BSZWdpc3RyeS5yZWdpc3RlckRyYWdJdGVtKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyB1c2VkIGFzIGEgcGxhY2Vob2xkZXJcbiAgICogd2hpbGUgdGhlIGN1cnJlbnQgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkLlxuICAgKi9cbiAgZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cblxuICAvKiogUmV0dXJucyB0aGUgcm9vdCBkcmFnZ2FibGUgZWxlbWVudC4gKi9cbiAgZ2V0Um9vdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9yb290RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50bHktdmlzaWJsZSBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGUgZHJhZyBpdGVtLlxuICAgKiBXaGlsZSBkcmFnZ2luZyB0aGlzIGlzIHRoZSBwbGFjZWhvbGRlciwgb3RoZXJ3aXNlIGl0J3MgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGdldFZpc2libGVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5pc0RyYWdnaW5nKCkgPyB0aGlzLmdldFBsYWNlaG9sZGVyRWxlbWVudCgpIDogdGhpcy5nZXRSb290RWxlbWVudCgpO1xuICB9XG5cbiAgLyoqIFJlZ2lzdGVycyB0aGUgaGFuZGxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGRyYWcgdGhlIGVsZW1lbnQuICovXG4gIHdpdGhIYW5kbGVzKGhhbmRsZXM6IChIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KVtdKTogdGhpcyB7XG4gICAgdGhpcy5faGFuZGxlcyA9IGhhbmRsZXMubWFwKGhhbmRsZSA9PiBjb2VyY2VFbGVtZW50KGhhbmRsZSkpO1xuICAgIHRoaXMuX2hhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4gdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucyhoYW5kbGUsIHRoaXMuZGlzYWJsZWQpKTtcbiAgICB0aGlzLl90b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKCk7XG5cbiAgICAvLyBEZWxldGUgYW55IGxpbmdlcmluZyBkaXNhYmxlZCBoYW5kbGVzIHRoYXQgbWF5IGhhdmUgYmVlbiBkZXN0cm95ZWQuIE5vdGUgdGhhdCB3ZSByZS1jcmVhdGVcbiAgICAvLyB0aGUgc2V0LCByYXRoZXIgdGhhbiBpdGVyYXRlIG92ZXIgaXQgYW5kIGZpbHRlciBvdXQgdGhlIGRlc3Ryb3llZCBoYW5kbGVzLCBiZWNhdXNlIHdoaWxlXG4gICAgLy8gdGhlIEVTIHNwZWMgYWxsb3dzIGZvciBzZXRzIHRvIGJlIG1vZGlmaWVkIHdoaWxlIHRoZXkncmUgYmVpbmcgaXRlcmF0ZWQgb3Zlciwgc29tZSBwb2x5ZmlsbHNcbiAgICAvLyB1c2UgYW4gYXJyYXkgaW50ZXJuYWxseSB3aGljaCBtYXkgdGhyb3cgYW4gZXJyb3IuXG4gICAgY29uc3QgZGlzYWJsZWRIYW5kbGVzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgICB0aGlzLl9kaXNhYmxlZEhhbmRsZXMuZm9yRWFjaChoYW5kbGUgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXMuaW5kZXhPZihoYW5kbGUpID4gLTEpIHtcbiAgICAgICAgZGlzYWJsZWRIYW5kbGVzLmFkZChoYW5kbGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2Rpc2FibGVkSGFuZGxlcyA9IGRpc2FibGVkSGFuZGxlcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIHRlbXBsYXRlIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkcmFnIHByZXZpZXcuXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSBUZW1wbGF0ZSB0aGF0IGZyb20gd2hpY2ggdG8gc3RhbXAgb3V0IHRoZSBwcmV2aWV3LlxuICAgKi9cbiAgd2l0aFByZXZpZXdUZW1wbGF0ZSh0ZW1wbGF0ZTogRHJhZ1ByZXZpZXdUZW1wbGF0ZSB8IG51bGwpOiB0aGlzIHtcbiAgICB0aGlzLl9wcmV2aWV3VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIHRlbXBsYXRlIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBkcmFnIHBsYWNlaG9sZGVyLlxuICAgKiBAcGFyYW0gdGVtcGxhdGUgVGVtcGxhdGUgdGhhdCBmcm9tIHdoaWNoIHRvIHN0YW1wIG91dCB0aGUgcGxhY2Vob2xkZXIuXG4gICAqL1xuICB3aXRoUGxhY2Vob2xkZXJUZW1wbGF0ZSh0ZW1wbGF0ZTogRHJhZ0hlbHBlclRlbXBsYXRlIHwgbnVsbCk6IHRoaXMge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuIGFsdGVybmF0ZSBkcmFnIHJvb3QgZWxlbWVudC4gVGhlIHJvb3QgZWxlbWVudCBpcyB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgbW92ZWQgYXNcbiAgICogdGhlIHVzZXIgaXMgZHJhZ2dpbmcuIFBhc3NpbmcgYW4gYWx0ZXJuYXRlIHJvb3QgZWxlbWVudCBpcyB1c2VmdWwgd2hlbiB0cnlpbmcgdG8gZW5hYmxlXG4gICAqIGRyYWdnaW5nIG9uIGFuIGVsZW1lbnQgdGhhdCB5b3UgbWlnaHQgbm90IGhhdmUgYWNjZXNzIHRvLlxuICAgKi9cbiAgd2l0aFJvb3RFbGVtZW50KHJvb3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50KTogdGhpcyB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQocm9vdEVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUm9vdEVsZW1lbnRMaXN0ZW5lcnModGhpcy5fcm9vdEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX3BvaW50ZXJEb3duLCBhY3RpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX3BvaW50ZXJEb3duLCBwYXNzaXZlRXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9pbml0aWFsVHJhbnNmb3JtID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgU1ZHRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fcm9vdEVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9vd25lclNWR0VsZW1lbnQgPSB0aGlzLl9yb290RWxlbWVudC5vd25lclNWR0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogRWxlbWVudCB0byB3aGljaCB0aGUgZHJhZ2dhYmxlJ3MgcG9zaXRpb24gd2lsbCBiZSBjb25zdHJhaW5lZC5cbiAgICovXG4gIHdpdGhCb3VuZGFyeUVsZW1lbnQoYm91bmRhcnlFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50IHwgbnVsbCk6IHRoaXMge1xuICAgIHRoaXMuX2JvdW5kYXJ5RWxlbWVudCA9IGJvdW5kYXJ5RWxlbWVudCA/IGNvZXJjZUVsZW1lbnQoYm91bmRhcnlFbGVtZW50KSA6IG51bGw7XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKGJvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gdGhpcy5fdmlld3BvcnRSdWxlclxuICAgICAgICAuY2hhbmdlKDEwKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NvbnRhaW5JbnNpZGVCb3VuZGFyeU9uUmVzaXplKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBwYXJlbnQgcmVmIHRoYXQgdGhlIHJlZiBpcyBuZXN0ZWQgaW4uICAqL1xuICB3aXRoUGFyZW50KHBhcmVudDogRHJhZ1JlZjx1bmtub3duPiB8IG51bGwpOiB0aGlzIHtcbiAgICB0aGlzLl9wYXJlbnREcmFnUmVmID0gcGFyZW50O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFJlbW92ZXMgdGhlIGRyYWdnaW5nIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgRE9NIGVsZW1lbnQuICovXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fcmVtb3ZlUm9vdEVsZW1lbnRMaXN0ZW5lcnModGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgLy8gRG8gdGhpcyBjaGVjayBiZWZvcmUgcmVtb3ZpbmcgZnJvbSB0aGUgcmVnaXN0cnkgc2luY2UgaXQnbGxcbiAgICAvLyBzdG9wIGJlaW5nIGNvbnNpZGVyZWQgYXMgZHJhZ2dlZCBvbmNlIGl0IGlzIHJlbW92ZWQuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZygpKSB7XG4gICAgICAvLyBTaW5jZSB3ZSBtb3ZlIG91dCB0aGUgZWxlbWVudCB0byB0aGUgZW5kIG9mIHRoZSBib2R5IHdoaWxlIGl0J3MgYmVpbmdcbiAgICAgIC8vIGRyYWdnZWQsIHdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgaXQncyByZW1vdmVkIGlmIGl0IGdldHMgZGVzdHJveWVkLlxuICAgICAgcmVtb3ZlTm9kZSh0aGlzLl9yb290RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZSh0aGlzLl9hbmNob3IpO1xuICAgIHRoaXMuX2Rlc3Ryb3lQcmV2aWV3KCk7XG4gICAgdGhpcy5fZGVzdHJveVBsYWNlaG9sZGVyKCk7XG4gICAgdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeS5yZW1vdmVEcmFnSXRlbSh0aGlzKTtcbiAgICB0aGlzLl9yZW1vdmVTdWJzY3JpcHRpb25zKCk7XG4gICAgdGhpcy5iZWZvcmVTdGFydGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5zdGFydGVkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5yZWxlYXNlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZW5kZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmVudGVyZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmV4aXRlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZHJvcHBlZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX21vdmVFdmVudHMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9oYW5kbGVzID0gW107XG4gICAgdGhpcy5fZGlzYWJsZWRIYW5kbGVzLmNsZWFyKCk7XG4gICAgdGhpcy5fZHJvcENvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9wYXJlbnRQb3NpdGlvbnMuY2xlYXIoKTtcbiAgICB0aGlzLl9ib3VuZGFyeUVsZW1lbnQgPSB0aGlzLl9yb290RWxlbWVudCA9IHRoaXMuX293bmVyU1ZHRWxlbWVudCA9IHRoaXMuX3BsYWNlaG9sZGVyVGVtcGxhdGUgPVxuICAgICAgICB0aGlzLl9wcmV2aWV3VGVtcGxhdGUgPSB0aGlzLl9hbmNob3IgPSB0aGlzLl9wYXJlbnREcmFnUmVmID0gbnVsbCE7XG4gIH1cblxuICAvKiogQ2hlY2tzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIGRyYWdnZWQuICovXG4gIGlzRHJhZ2dpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1N0YXJ0ZWREcmFnZ2luZyAmJiB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LmlzRHJhZ2dpbmcodGhpcyk7XG4gIH1cblxuICAvKiogUmVzZXRzIGEgc3RhbmRhbG9uZSBkcmFnIGl0ZW0gdG8gaXRzIGluaXRpYWwgcG9zaXRpb24uICovXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jvb3RFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuX2luaXRpYWxUcmFuc2Zvcm0gfHwgJyc7XG4gICAgdGhpcy5fYWN0aXZlVHJhbnNmb3JtID0ge3g6IDAsIHk6IDB9O1xuICAgIHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0gPSB7eDogMCwgeTogMH07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIGhhbmRsZSBhcyBkaXNhYmxlZC4gV2hpbGUgYSBoYW5kbGUgaXMgZGlzYWJsZWQsIGl0J2xsIGNhcHR1cmUgYW5kIGludGVycnVwdCBkcmFnZ2luZy5cbiAgICogQHBhcmFtIGhhbmRsZSBIYW5kbGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVIYW5kbGUoaGFuZGxlOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICghdGhpcy5fZGlzYWJsZWRIYW5kbGVzLmhhcyhoYW5kbGUpICYmIHRoaXMuX2hhbmRsZXMuaW5kZXhPZihoYW5kbGUpID4gLTEpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkSGFuZGxlcy5hZGQoaGFuZGxlKTtcbiAgICAgIHRvZ2dsZU5hdGl2ZURyYWdJbnRlcmFjdGlvbnMoaGFuZGxlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBhIGhhbmRsZSwgaWYgaXQgaGFzIGJlZW4gZGlzYWJsZWQuXG4gICAqIEBwYXJhbSBoYW5kbGUgSGFuZGxlIGVsZW1lbnQgdG8gYmUgZW5hYmxlZC5cbiAgICovXG4gIGVuYWJsZUhhbmRsZShoYW5kbGU6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSGFuZGxlcy5oYXMoaGFuZGxlKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZWRIYW5kbGVzLmRlbGV0ZShoYW5kbGUpO1xuICAgICAgdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucyhoYW5kbGUsIHRoaXMuZGlzYWJsZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBsYXlvdXQgZGlyZWN0aW9uIG9mIHRoZSBkcmFnZ2FibGUgaXRlbS4gKi9cbiAgd2l0aERpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbik6IHRoaXMge1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjb250YWluZXIgdGhhdCB0aGUgaXRlbSBpcyBwYXJ0IG9mLiAqL1xuICBfd2l0aERyb3BDb250YWluZXIoY29udGFpbmVyOiBEcm9wTGlzdFJlZikge1xuICAgIHRoaXMuX2Ryb3BDb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiBwaXhlbHMgdGhlIGRyYWdnYWJsZSBvdXRzaWRlIG9mIGEgZHJvcCBjb250YWluZXIuXG4gICAqL1xuICBnZXRGcmVlRHJhZ1Bvc2l0aW9uKCk6IFJlYWRvbmx5PFBvaW50PiB7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmlzRHJhZ2dpbmcoKSA/IHRoaXMuX2FjdGl2ZVRyYW5zZm9ybSA6IHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm07XG4gICAgcmV0dXJuIHt4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHBpeGVscyB0aGUgZHJhZ2dhYmxlIG91dHNpZGUgb2YgYSBkcm9wIGNvbnRhaW5lci5cbiAgICogQHBhcmFtIHZhbHVlIE5ldyBwb3NpdGlvbiB0byBiZSBzZXQuXG4gICAqL1xuICBzZXRGcmVlRHJhZ1Bvc2l0aW9uKHZhbHVlOiBQb2ludCk6IHRoaXMge1xuICAgIHRoaXMuX2FjdGl2ZVRyYW5zZm9ybSA9IHt4OiAwLCB5OiAwfTtcbiAgICB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtLnggPSB2YWx1ZS54O1xuICAgIHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0ueSA9IHZhbHVlLnk7XG5cbiAgICBpZiAoIXRoaXMuX2Ryb3BDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2FwcGx5Um9vdEVsZW1lbnRUcmFuc2Zvcm0odmFsdWUueCwgdmFsdWUueSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgaXRlbSdzIHNvcnQgb3JkZXIgYmFzZWQgb24gdGhlIGxhc3Qta25vd24gcG9pbnRlciBwb3NpdGlvbi4gKi9cbiAgX3NvcnRGcm9tTGFzdFBvaW50ZXJQb3NpdGlvbigpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX2xhc3RLbm93blBvaW50ZXJQb3NpdGlvbjtcblxuICAgIGlmIChwb3NpdGlvbiAmJiB0aGlzLl9kcm9wQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVEcm9wQ29udGFpbmVyKHRoaXMuX2dldENvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uKHBvc2l0aW9uKSwgcG9zaXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBVbnN1YnNjcmliZXMgZnJvbSB0aGUgZ2xvYmFsIHN1YnNjcmlwdGlvbnMuICovXG4gIHByaXZhdGUgX3JlbW92ZVN1YnNjcmlwdGlvbnMoKSB7XG4gICAgdGhpcy5fcG9pbnRlck1vdmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9wb2ludGVyVXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zY3JvbGxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKiBEZXN0cm95cyB0aGUgcHJldmlldyBlbGVtZW50IGFuZCBpdHMgVmlld1JlZi4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveVByZXZpZXcoKSB7XG4gICAgaWYgKHRoaXMuX3ByZXZpZXcpIHtcbiAgICAgIHJlbW92ZU5vZGUodGhpcy5fcHJldmlldyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3ByZXZpZXdSZWYpIHtcbiAgICAgIHRoaXMuX3ByZXZpZXdSZWYuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZXZpZXcgPSB0aGlzLl9wcmV2aWV3UmVmID0gbnVsbCE7XG4gIH1cblxuICAvKiogRGVzdHJveXMgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgYW5kIGl0cyBWaWV3UmVmLiAqL1xuICBwcml2YXRlIF9kZXN0cm95UGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BsYWNlaG9sZGVyKSB7XG4gICAgICByZW1vdmVOb2RlKHRoaXMuX3BsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXJSZWYpIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyUmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHRoaXMuX3BsYWNlaG9sZGVyUmVmID0gbnVsbCE7XG4gIH1cblxuICAvKiogSGFuZGxlciBmb3IgdGhlIGBtb3VzZWRvd25gL2B0b3VjaHN0YXJ0YCBldmVudHMuICovXG4gIHByaXZhdGUgX3BvaW50ZXJEb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xuICAgIHRoaXMuYmVmb3JlU3RhcnRlZC5uZXh0KCk7XG5cbiAgICAvLyBEZWxlZ2F0ZSB0aGUgZXZlbnQgYmFzZWQgb24gd2hldGhlciBpdCBzdGFydGVkIGZyb20gYSBoYW5kbGUgb3IgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICAgIGlmICh0aGlzLl9oYW5kbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgdGFyZ2V0SGFuZGxlID0gdGhpcy5faGFuZGxlcy5maW5kKGhhbmRsZSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgcmV0dXJuICEhdGFyZ2V0ICYmICh0YXJnZXQgPT09IGhhbmRsZSB8fCBoYW5kbGUuY29udGFpbnModGFyZ2V0IGFzIEhUTUxFbGVtZW50KSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRhcmdldEhhbmRsZSAmJiAhdGhpcy5fZGlzYWJsZWRIYW5kbGVzLmhhcyh0YXJnZXRIYW5kbGUpICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVEcmFnU2VxdWVuY2UodGFyZ2V0SGFuZGxlLCBldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZURyYWdTZXF1ZW5jZSh0aGlzLl9yb290RWxlbWVudCwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIG1vdmVzIHRoZWlyIHBvaW50ZXIgYWZ0ZXIgdGhleSd2ZSBpbml0aWF0ZWQgYSBkcmFnLiAqL1xuICBwcml2YXRlIF9wb2ludGVyTW92ZSA9IChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICBjb25zdCBwb2ludGVyUG9zaXRpb24gPSB0aGlzLl9nZXRQb2ludGVyUG9zaXRpb25PblBhZ2UoZXZlbnQpO1xuXG4gICAgaWYgKCF0aGlzLl9oYXNTdGFydGVkRHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlWCA9IE1hdGguYWJzKHBvaW50ZXJQb3NpdGlvbi54IC0gdGhpcy5fcGlja3VwUG9zaXRpb25PblBhZ2UueCk7XG4gICAgICBjb25zdCBkaXN0YW5jZVkgPSBNYXRoLmFicyhwb2ludGVyUG9zaXRpb24ueSAtIHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnkpO1xuICAgICAgY29uc3QgaXNPdmVyVGhyZXNob2xkID0gZGlzdGFuY2VYICsgZGlzdGFuY2VZID49IHRoaXMuX2NvbmZpZy5kcmFnU3RhcnRUaHJlc2hvbGQ7XG5cbiAgICAgIC8vIE9ubHkgc3RhcnQgZHJhZ2dpbmcgYWZ0ZXIgdGhlIHVzZXIgaGFzIG1vdmVkIG1vcmUgdGhhbiB0aGUgbWluaW11bSBkaXN0YW5jZSBpbiBlaXRoZXJcbiAgICAgIC8vIGRpcmVjdGlvbi4gTm90ZSB0aGF0IHRoaXMgaXMgcHJlZmVycmFibGUgb3ZlciBkb2luZyBzb21ldGhpbmcgbGlrZSBgc2tpcChtaW5pbXVtRGlzdGFuY2UpYFxuICAgICAgLy8gaW4gdGhlIGBwb2ludGVyTW92ZWAgc3Vic2NyaXB0aW9uLCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRvIGhhdmUgb25lIG1vdmUgZXZlbnRcbiAgICAgIC8vIHBlciBwaXhlbCBvZiBtb3ZlbWVudCAoZS5nLiBpZiB0aGUgdXNlciBtb3ZlcyB0aGVpciBwb2ludGVyIHF1aWNrbHkpLlxuICAgICAgaWYgKGlzT3ZlclRocmVzaG9sZCkge1xuICAgICAgICBjb25zdCBpc0RlbGF5RWxhcHNlZCA9IERhdGUubm93KCkgPj0gdGhpcy5fZHJhZ1N0YXJ0VGltZSArIHRoaXMuX2dldERyYWdTdGFydERlbGF5KGV2ZW50KTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZHJvcENvbnRhaW5lcjtcblxuICAgICAgICBpZiAoIWlzRGVsYXlFbGFwc2VkKSB7XG4gICAgICAgICAgdGhpcy5fZW5kRHJhZ1NlcXVlbmNlKGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IG90aGVyIGRyYWcgc2VxdWVuY2VzIGZyb20gc3RhcnRpbmcgd2hpbGUgc29tZXRoaW5nIGluIHRoZSBjb250YWluZXIgaXMgc3RpbGxcbiAgICAgICAgLy8gYmVpbmcgZHJhZ2dlZC4gVGhpcyBjYW4gaGFwcGVuIHdoaWxlIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSBkcm9wIGFuaW1hdGlvbiB0byBmaW5pc2hcbiAgICAgICAgLy8gYW5kIGNhbiBjYXVzZSBlcnJvcnMsIGJlY2F1c2Ugc29tZSBlbGVtZW50cyBtaWdodCBzdGlsbCBiZSBtb3ZpbmcgYXJvdW5kLlxuICAgICAgICBpZiAoIWNvbnRhaW5lciB8fCAoIWNvbnRhaW5lci5pc0RyYWdnaW5nKCkgJiYgIWNvbnRhaW5lci5pc1JlY2VpdmluZygpKSkge1xuICAgICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYWN0aW9uIGFzIHNvb24gYXMgdGhlIGRyYWdnaW5nIHNlcXVlbmNlIGlzIGNvbnNpZGVyZWQgYXNcbiAgICAgICAgICAvLyBcInN0YXJ0ZWRcIiBzaW5jZSB3YWl0aW5nIGZvciB0aGUgbmV4dCBldmVudCBjYW4gYWxsb3cgdGhlIGRldmljZSB0byBiZWdpbiBzY3JvbGxpbmcuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9oYXNTdGFydGVkRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy5fc3RhcnREcmFnU2VxdWVuY2UoZXZlbnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2Ugb25seSBuZWVkIHRoZSBwcmV2aWV3IGRpbWVuc2lvbnMgaWYgd2UgaGF2ZSBhIGJvdW5kYXJ5IGVsZW1lbnQuXG4gICAgaWYgKHRoaXMuX2JvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgLy8gQ2FjaGUgdGhlIHByZXZpZXcgZWxlbWVudCByZWN0IGlmIHdlIGhhdmVuJ3QgY2FjaGVkIGl0IGFscmVhZHkgb3IgaWZcbiAgICAgIC8vIHdlIGNhY2hlZCBpdCB0b28gZWFybHkgYmVmb3JlIHRoZSBlbGVtZW50IGRpbWVuc2lvbnMgd2VyZSBjb21wdXRlZC5cbiAgICAgIGlmICghdGhpcy5fcHJldmlld1JlY3QgfHwgKCF0aGlzLl9wcmV2aWV3UmVjdC53aWR0aCAmJiAhdGhpcy5fcHJldmlld1JlY3QuaGVpZ2h0KSkge1xuICAgICAgICB0aGlzLl9wcmV2aWV3UmVjdCA9ICh0aGlzLl9wcmV2aWV3IHx8IHRoaXMuX3Jvb3RFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiBkb3duIGhlcmUgc28gdGhhdCB3ZSBrbm93IHRoYXQgZHJhZ2dpbmcgaGFzIHN0YXJ0ZWQuIFRoaXMgaXNcbiAgICAvLyBpbXBvcnRhbnQgZm9yIHRvdWNoIGRldmljZXMgd2hlcmUgZG9pbmcgdGhpcyB0b28gZWFybHkgY2FuIHVubmVjZXNzYXJpbHkgYmxvY2sgc2Nyb2xsaW5nLFxuICAgIC8vIGlmIHRoZXJlJ3MgYSBkcmFnZ2luZyBkZWxheS5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24gPSB0aGlzLl9nZXRDb25zdHJhaW5lZFBvaW50ZXJQb3NpdGlvbihwb2ludGVyUG9zaXRpb24pO1xuICAgIHRoaXMuX2hhc01vdmVkID0gdHJ1ZTtcbiAgICB0aGlzLl9sYXN0S25vd25Qb2ludGVyUG9zaXRpb24gPSBwb2ludGVyUG9zaXRpb247XG4gICAgdGhpcy5fdXBkYXRlUG9pbnRlckRpcmVjdGlvbkRlbHRhKGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl9kcm9wQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVEcm9wQ29udGFpbmVyKGNvbnN0cmFpbmVkUG9pbnRlclBvc2l0aW9uLCBwb2ludGVyUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhY3RpdmVUcmFuc2Zvcm0gPSB0aGlzLl9hY3RpdmVUcmFuc2Zvcm07XG4gICAgICBhY3RpdmVUcmFuc2Zvcm0ueCA9XG4gICAgICAgICAgY29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24ueCAtIHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnggKyB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtLng7XG4gICAgICBhY3RpdmVUcmFuc2Zvcm0ueSA9XG4gICAgICAgICAgY29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24ueSAtIHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnkgKyB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtLnk7XG5cbiAgICAgIHRoaXMuX2FwcGx5Um9vdEVsZW1lbnRUcmFuc2Zvcm0oYWN0aXZlVHJhbnNmb3JtLngsIGFjdGl2ZVRyYW5zZm9ybS55KTtcblxuICAgICAgLy8gQXBwbHkgdHJhbnNmb3JtIGFzIGF0dHJpYnV0ZSBpZiBkcmFnZ2luZyBhbmQgc3ZnIGVsZW1lbnQgdG8gd29yayBmb3IgSUVcbiAgICAgIGlmICh0eXBlb2YgU1ZHRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fcm9vdEVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGFwcGxpZWRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7YWN0aXZlVHJhbnNmb3JtLnh9ICR7YWN0aXZlVHJhbnNmb3JtLnl9KWA7XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYXBwbGllZFRyYW5zZm9ybSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhpcyBldmVudCBnZXRzIGZpcmVkIGZvciBldmVyeSBwaXhlbCB3aGlsZSBkcmFnZ2luZywgd2Ugb25seVxuICAgIC8vIHdhbnQgdG8gZmlyZSBpdCBpZiB0aGUgY29uc3VtZXIgb3B0ZWQgaW50byBpdC4gQWxzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmUtZW50ZXIgdGhlIHpvbmUgYmVjYXVzZSB3ZSBydW4gYWxsIG9mIHRoZSBldmVudHMgb24gdGhlIG91dHNpZGUuXG4gICAgaWYgKHRoaXMuX21vdmVFdmVudHMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuX21vdmVFdmVudHMubmV4dCh7XG4gICAgICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgICAgIHBvaW50ZXJQb3NpdGlvbjogY29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24sXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZGlzdGFuY2U6IHRoaXMuX2dldERyYWdEaXN0YW5jZShjb25zdHJhaW5lZFBvaW50ZXJQb3NpdGlvbiksXG4gICAgICAgICAgZGVsdGE6IHRoaXMuX3BvaW50ZXJEaXJlY3Rpb25EZWx0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIGxpZnRzIHRoZWlyIHBvaW50ZXIgdXAsIGFmdGVyIGluaXRpYXRpbmcgYSBkcmFnLiAqL1xuICBwcml2YXRlIF9wb2ludGVyVXAgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgdGhpcy5fZW5kRHJhZ1NlcXVlbmNlKGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgc3Vic2NyaXB0aW9ucyBhbmQgc3RvcHMgdGhlIGRyYWdnaW5nIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0gZXZlbnQgQnJvd3NlciBldmVudCBvYmplY3QgdGhhdCBlbmRlZCB0aGUgc2VxdWVuY2UuXG4gICAqL1xuICBwcml2YXRlIF9lbmREcmFnU2VxdWVuY2UoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7XG4gICAgLy8gTm90ZSB0aGF0IGhlcmUgd2UgdXNlIGBpc0RyYWdnaW5nYCBmcm9tIHRoZSBzZXJ2aWNlLCByYXRoZXIgdGhhbiBmcm9tIGB0aGlzYC5cbiAgICAvLyBUaGUgZGlmZmVyZW5jZSBpcyB0aGF0IHRoZSBvbmUgZnJvbSB0aGUgc2VydmljZSByZWZsZWN0cyB3aGV0aGVyIGEgZHJhZ2dpbmcgc2VxdWVuY2VcbiAgICAvLyBoYXMgYmVlbiBpbml0aWF0ZWQsIHdoZXJlYXMgdGhlIG9uZSBvbiBgdGhpc2AgaW5jbHVkZXMgd2hldGhlciB0aGUgdXNlciBoYXMgcGFzc2VkXG4gICAgLy8gdGhlIG1pbmltdW0gZHJhZ2dpbmcgdGhyZXNob2xkLlxuICAgIGlmICghdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeS5pc0RyYWdnaW5nKHRoaXMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlU3Vic2NyaXB0aW9ucygpO1xuICAgIHRoaXMuX2RyYWdEcm9wUmVnaXN0cnkuc3RvcERyYWdnaW5nKHRoaXMpO1xuICAgIHRoaXMuX3RvZ2dsZU5hdGl2ZURyYWdJbnRlcmFjdGlvbnMoKTtcblxuICAgIGlmICh0aGlzLl9oYW5kbGVzKSB7XG4gICAgICB0aGlzLl9yb290RWxlbWVudC5zdHlsZS53ZWJraXRUYXBIaWdobGlnaHRDb2xvciA9IHRoaXMuX3Jvb3RFbGVtZW50VGFwSGlnaGxpZ2h0O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5faGFzU3RhcnRlZERyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZWxlYXNlZC5uZXh0KHtzb3VyY2U6IHRoaXN9KTtcblxuICAgIGlmICh0aGlzLl9kcm9wQ29udGFpbmVyKSB7XG4gICAgICAvLyBTdG9wIHNjcm9sbGluZyBpbW1lZGlhdGVseSwgaW5zdGVhZCBvZiB3YWl0aW5nIGZvciB0aGUgYW5pbWF0aW9uIHRvIGZpbmlzaC5cbiAgICAgIHRoaXMuX2Ryb3BDb250YWluZXIuX3N0b3BTY3JvbGxpbmcoKTtcbiAgICAgIHRoaXMuX2FuaW1hdGVQcmV2aWV3VG9QbGFjZWhvbGRlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9jbGVhbnVwRHJhZ0FydGlmYWN0cyhldmVudCk7XG4gICAgICAgIHRoaXMuX2NsZWFudXBDYWNoZWREaW1lbnNpb25zKCk7XG4gICAgICAgIHRoaXMuX2RyYWdEcm9wUmVnaXN0cnkuc3RvcERyYWdnaW5nKHRoaXMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbnZlcnQgdGhlIGFjdGl2ZSB0cmFuc2Zvcm0gaW50byBhIHBhc3NpdmUgb25lLiBUaGlzIG1lYW5zIHRoYXQgbmV4dCB0aW1lXG4gICAgICAvLyB0aGUgdXNlciBzdGFydHMgZHJhZ2dpbmcgdGhlIGl0ZW0sIGl0cyBwb3NpdGlvbiB3aWxsIGJlIGNhbGN1bGF0ZWQgcmVsYXRpdmVseVxuICAgICAgLy8gdG8gdGhlIG5ldyBwYXNzaXZlIHRyYW5zZm9ybS5cbiAgICAgIHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0ueCA9IHRoaXMuX2FjdGl2ZVRyYW5zZm9ybS54O1xuICAgICAgdGhpcy5fcGFzc2l2ZVRyYW5zZm9ybS55ID0gdGhpcy5fYWN0aXZlVHJhbnNmb3JtLnk7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbmRlZC5uZXh0KHtcbiAgICAgICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICAgICAgZGlzdGFuY2U6IHRoaXMuX2dldERyYWdEaXN0YW5jZSh0aGlzLl9nZXRQb2ludGVyUG9zaXRpb25PblBhZ2UoZXZlbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2xlYW51cENhY2hlZERpbWVuc2lvbnMoKTtcbiAgICAgIHRoaXMuX2RyYWdEcm9wUmVnaXN0cnkuc3RvcERyYWdnaW5nKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTdGFydHMgdGhlIGRyYWdnaW5nIHNlcXVlbmNlLiAqL1xuICBwcml2YXRlIF9zdGFydERyYWdTZXF1ZW5jZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcbiAgICBpZiAoaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgICAgdGhpcy5fbGFzdFRvdWNoRXZlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG5cbiAgICB0aGlzLl90b2dnbGVOYXRpdmVEcmFnSW50ZXJhY3Rpb25zKCk7XG5cbiAgICBjb25zdCBkcm9wQ29udGFpbmVyID0gdGhpcy5fZHJvcENvbnRhaW5lcjtcblxuICAgIGlmIChkcm9wQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdEVsZW1lbnQ7XG4gICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUhO1xuICAgICAgY29uc3QgcHJldmlldyA9IHRoaXMuX3ByZXZpZXcgPSB0aGlzLl9jcmVhdGVQcmV2aWV3RWxlbWVudCgpO1xuICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLl9wbGFjZWhvbGRlciA9IHRoaXMuX2NyZWF0ZVBsYWNlaG9sZGVyRWxlbWVudCgpO1xuICAgICAgY29uc3QgYW5jaG9yID0gdGhpcy5fYW5jaG9yID0gdGhpcy5fYW5jaG9yIHx8IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG4gICAgICAvLyBOZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSByb290IGVsZW1lbnQgaXMgbW92ZWQuXG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5fZ2V0U2hhZG93Um9vdCgpO1xuXG4gICAgICAvLyBJbnNlcnQgYW4gYW5jaG9yIG5vZGUgc28gdGhhdCB3ZSBjYW4gcmVzdG9yZSB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIGluIHRoZSBET00uXG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGFuY2hvciwgZWxlbWVudCk7XG5cbiAgICAgIC8vIFdlIG1vdmUgdGhlIGVsZW1lbnQgb3V0IGF0IHRoZSBlbmQgb2YgdGhlIGJvZHkgYW5kIHdlIG1ha2UgaXQgaGlkZGVuLCBiZWNhdXNlIGtlZXBpbmcgaXQgaW5cbiAgICAgIC8vIHBsYWNlIHdpbGwgdGhyb3cgb2ZmIHRoZSBjb25zdW1lcidzIGA6bGFzdC1jaGlsZGAgc2VsZWN0b3JzLiBXZSBjYW4ndCByZW1vdmUgdGhlIGVsZW1lbnRcbiAgICAgIC8vIGZyb20gdGhlIERPTSBjb21wbGV0ZWx5LCBiZWNhdXNlIGlPUyB3aWxsIHN0b3AgZmlyaW5nIGFsbCBzdWJzZXF1ZW50IGV2ZW50cyBpbiB0aGUgY2hhaW4uXG4gICAgICB0b2dnbGVWaXNpYmlsaXR5KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgIHRoaXMuX2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFyZW50LnJlcGxhY2VDaGlsZChwbGFjZWhvbGRlciwgZWxlbWVudCkpO1xuICAgICAgZ2V0UHJldmlld0luc2VydGlvblBvaW50KHRoaXMuX2RvY3VtZW50LCBzaGFkb3dSb290KS5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICAgIHRoaXMuc3RhcnRlZC5uZXh0KHtzb3VyY2U6IHRoaXN9KTsgLy8gRW1pdCBiZWZvcmUgbm90aWZ5aW5nIHRoZSBjb250YWluZXIuXG4gICAgICBkcm9wQ29udGFpbmVyLnN0YXJ0KCk7XG4gICAgICB0aGlzLl9pbml0aWFsQ29udGFpbmVyID0gZHJvcENvbnRhaW5lcjtcbiAgICAgIHRoaXMuX2luaXRpYWxJbmRleCA9IGRyb3BDb250YWluZXIuZ2V0SXRlbUluZGV4KHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0ZWQubmV4dCh7c291cmNlOiB0aGlzfSk7XG4gICAgICB0aGlzLl9pbml0aWFsQ29udGFpbmVyID0gdGhpcy5faW5pdGlhbEluZGV4ID0gdW5kZWZpbmVkITtcbiAgICB9XG5cbiAgICAvLyBJbXBvcnRhbnQgdG8gcnVuIGFmdGVyIHdlJ3ZlIGNhbGxlZCBgc3RhcnRgIG9uIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgLy8gc28gdGhhdCBpdCBoYXMgaGFkIHRpbWUgdG8gcmVzb2x2ZSBpdHMgc2Nyb2xsYWJsZSBwYXJlbnRzLlxuICAgIHRoaXMuX3BhcmVudFBvc2l0aW9ucy5jYWNoZShkcm9wQ29udGFpbmVyID8gZHJvcENvbnRhaW5lci5nZXRTY3JvbGxhYmxlUGFyZW50cygpIDogW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgdGhlIGRpZmZlcmVudCB2YXJpYWJsZXMgYW5kIHN1YnNjcmlwdGlvbnNcbiAgICogdGhhdCB3aWxsIGJlIG5lY2Vzc2FyeSBmb3IgdGhlIGRyYWdnaW5nIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0gcmVmZXJlbmNlRWxlbWVudCBFbGVtZW50IHRoYXQgc3RhcnRlZCB0aGUgZHJhZyBzZXF1ZW5jZS5cbiAgICogQHBhcmFtIGV2ZW50IEJyb3dzZXIgZXZlbnQgb2JqZWN0IHRoYXQgc3RhcnRlZCB0aGUgc2VxdWVuY2UuXG4gICAqL1xuICBwcml2YXRlIF9pbml0aWFsaXplRHJhZ1NlcXVlbmNlKHJlZmVyZW5jZUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpIHtcbiAgICAvLyBTdG9wIHByb3BhZ2F0aW9uIGlmIHRoZSBpdGVtIGlzIGluc2lkZSBhbm90aGVyXG4gICAgLy8gZHJhZ2dhYmxlIHNvIHdlIGRvbid0IHN0YXJ0IG11bHRpcGxlIGRyYWcgc2VxdWVuY2VzLlxuICAgIGlmICh0aGlzLl9wYXJlbnREcmFnUmVmKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0RyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG4gICAgY29uc3QgaXNUb3VjaFNlcXVlbmNlID0gaXNUb3VjaEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBpc0F1eGlsaWFyeU1vdXNlQnV0dG9uID0gIWlzVG91Y2hTZXF1ZW5jZSAmJiAoZXZlbnQgYXMgTW91c2VFdmVudCkuYnV0dG9uICE9PSAwO1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gdGhpcy5fcm9vdEVsZW1lbnQ7XG4gICAgY29uc3QgaXNTeW50aGV0aWNFdmVudCA9ICFpc1RvdWNoU2VxdWVuY2UgJiYgdGhpcy5fbGFzdFRvdWNoRXZlbnRUaW1lICYmXG4gICAgICB0aGlzLl9sYXN0VG91Y2hFdmVudFRpbWUgKyBNT1VTRV9FVkVOVF9JR05PUkVfVElNRSA+IERhdGUubm93KCk7XG5cbiAgICAvLyBJZiB0aGUgZXZlbnQgc3RhcnRlZCBmcm9tIGFuIGVsZW1lbnQgd2l0aCB0aGUgbmF0aXZlIEhUTUwgZHJhZyZkcm9wLCBpdCdsbCBpbnRlcmZlcmVcbiAgICAvLyB3aXRoIG91ciBvd24gZHJhZ2dpbmcgKGUuZy4gYGltZ2AgdGFncyBkbyBpdCBieSBkZWZhdWx0KS4gUHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb25cbiAgICAvLyB0byBzdG9wIGl0IGZyb20gaGFwcGVuaW5nLiBOb3RlIHRoYXQgcHJldmVudGluZyBvbiBgZHJhZ3N0YXJ0YCBhbHNvIHNlZW1zIHRvIHdvcmssIGJ1dFxuICAgIC8vIGl0J3MgZmxha3kgYW5kIGl0IGZhaWxzIGlmIHRoZSB1c2VyIGRyYWdzIGl0IGF3YXkgcXVpY2tseS4gQWxzbyBub3RlIHRoYXQgd2Ugb25seSB3YW50XG4gICAgLy8gdG8gZG8gdGhpcyBmb3IgYG1vdXNlZG93bmAgc2luY2UgZG9pbmcgdGhlIHNhbWUgZm9yIGB0b3VjaHN0YXJ0YCB3aWxsIHN0b3AgYW55IGBjbGlja2BcbiAgICAvLyBldmVudHMgZnJvbSBmaXJpbmcgb24gdG91Y2ggZGV2aWNlcy5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmRyYWdnYWJsZSAmJiBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGRyYWdnaW5nIG9yIGlzIHVzaW5nIGEgbW91c2UgYnV0dG9uIG90aGVyIHRoYW4gdGhlIHByaW1hcnkgb25lLlxuICAgIGlmIChpc0RyYWdnaW5nIHx8IGlzQXV4aWxpYXJ5TW91c2VCdXR0b24gfHwgaXNTeW50aGV0aWNFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3ZlIGdvdCBoYW5kbGVzLCB3ZSBuZWVkIHRvIGRpc2FibGUgdGhlIHRhcCBoaWdobGlnaHQgb24gdGhlIGVudGlyZSByb290IGVsZW1lbnQsXG4gICAgLy8gb3RoZXJ3aXNlIGlPUyB3aWxsIHN0aWxsIGFkZCBpdCwgZXZlbiB0aG91Z2ggYWxsIHRoZSBkcmFnIGludGVyYWN0aW9ucyBvbiB0aGUgaGFuZGxlXG4gICAgLy8gYXJlIGRpc2FibGVkLlxuICAgIGlmICh0aGlzLl9oYW5kbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnRUYXBIaWdobGlnaHQgPSByb290RWxlbWVudC5zdHlsZS53ZWJraXRUYXBIaWdobGlnaHRDb2xvciB8fCAnJztcbiAgICAgIHJvb3RFbGVtZW50LnN0eWxlLndlYmtpdFRhcEhpZ2hsaWdodENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB9XG5cbiAgICB0aGlzLl9oYXNTdGFydGVkRHJhZ2dpbmcgPSB0aGlzLl9oYXNNb3ZlZCA9IGZhbHNlO1xuXG4gICAgLy8gQXZvaWQgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucyBhbmQgbWVtb3J5IGxlYWtzIHdoZW4gbXVsdGkgdG91Y2hcbiAgICAvLyAoaXNEcmFnZ2luZyBjaGVjayBhYm92ZSBpc24ndCBlbm91Z2ggYmVjYXVzZSBvZiBwb3NzaWJsZSB0ZW1wb3JhbCBhbmQvb3IgZGltZW5zaW9uYWwgZGVsYXlzKVxuICAgIHRoaXMuX3JlbW92ZVN1YnNjcmlwdGlvbnMoKTtcbiAgICB0aGlzLl9wb2ludGVyTW92ZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2RyYWdEcm9wUmVnaXN0cnkucG9pbnRlck1vdmUuc3Vic2NyaWJlKHRoaXMuX3BvaW50ZXJNb3ZlKTtcbiAgICB0aGlzLl9wb2ludGVyVXBTdWJzY3JpcHRpb24gPSB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnBvaW50ZXJVcC5zdWJzY3JpYmUodGhpcy5fcG9pbnRlclVwKTtcbiAgICB0aGlzLl9zY3JvbGxTdWJzY3JpcHRpb24gPSB0aGlzLl9kcmFnRHJvcFJlZ2lzdHJ5LnNjcm9sbC5zdWJzY3JpYmUoc2Nyb2xsRXZlbnQgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlT25TY3JvbGwoc2Nyb2xsRXZlbnQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2JvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgdGhpcy5fYm91bmRhcnlSZWN0ID0gZ2V0TXV0YWJsZUNsaWVudFJlY3QodGhpcy5fYm91bmRhcnlFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgY3VzdG9tIHByZXZpZXcgd2UgY2FuJ3Qga25vdyBhaGVhZCBvZiB0aW1lIGhvdyBsYXJnZSBpdCdsbCBiZSBzbyB3ZSBwb3NpdGlvblxuICAgIC8vIGl0IG5leHQgdG8gdGhlIGN1cnNvci4gVGhlIGV4Y2VwdGlvbiBpcyB3aGVuIHRoZSBjb25zdW1lciBoYXMgb3B0ZWQgaW50byBtYWtpbmcgdGhlIHByZXZpZXdcbiAgICAvLyB0aGUgc2FtZSBzaXplIGFzIHRoZSByb290IGVsZW1lbnQsIGluIHdoaWNoIGNhc2Ugd2UgZG8ga25vdyB0aGUgc2l6ZS5cbiAgICBjb25zdCBwcmV2aWV3VGVtcGxhdGUgPSB0aGlzLl9wcmV2aWV3VGVtcGxhdGU7XG4gICAgdGhpcy5fcGlja3VwUG9zaXRpb25JbkVsZW1lbnQgPSBwcmV2aWV3VGVtcGxhdGUgJiYgcHJldmlld1RlbXBsYXRlLnRlbXBsYXRlICYmXG4gICAgICAhcHJldmlld1RlbXBsYXRlLm1hdGNoU2l6ZSA/IHt4OiAwLCB5OiAwfSA6XG4gICAgICB0aGlzLl9nZXRQb2ludGVyUG9zaXRpb25JbkVsZW1lbnQocmVmZXJlbmNlRWxlbWVudCwgZXZlbnQpO1xuICAgIGNvbnN0IHBvaW50ZXJQb3NpdGlvbiA9IHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlID0gdGhpcy5fbGFzdEtub3duUG9pbnRlclBvc2l0aW9uID1cbiAgICAgICAgdGhpcy5fZ2V0UG9pbnRlclBvc2l0aW9uT25QYWdlKGV2ZW50KTtcbiAgICB0aGlzLl9wb2ludGVyRGlyZWN0aW9uRGVsdGEgPSB7eDogMCwgeTogMH07XG4gICAgdGhpcy5fcG9pbnRlclBvc2l0aW9uQXRMYXN0RGlyZWN0aW9uQ2hhbmdlID0ge3g6IHBvaW50ZXJQb3NpdGlvbi54LCB5OiBwb2ludGVyUG9zaXRpb24ueX07XG4gICAgdGhpcy5fZHJhZ1N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeS5zdGFydERyYWdnaW5nKHRoaXMsIGV2ZW50KTtcbiAgfVxuXG4gIC8qKiBDbGVhbnMgdXAgdGhlIERPTSBhcnRpZmFjdHMgdGhhdCB3ZXJlIGFkZGVkIHRvIGZhY2lsaXRhdGUgdGhlIGVsZW1lbnQgYmVpbmcgZHJhZ2dlZC4gKi9cbiAgcHJpdmF0ZSBfY2xlYW51cERyYWdBcnRpZmFjdHMoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSB7XG4gICAgLy8gUmVzdG9yZSB0aGUgZWxlbWVudCdzIHZpc2liaWxpdHkgYW5kIGluc2VydCBpdCBhdCBpdHMgb2xkIHBvc2l0aW9uIGluIHRoZSBET00uXG4gICAgLy8gSXQncyBpbXBvcnRhbnQgdGhhdCB3ZSBtYWludGFpbiB0aGUgcG9zaXRpb24sIGJlY2F1c2UgbW92aW5nIHRoZSBlbGVtZW50IGFyb3VuZCBpbiB0aGUgRE9NXG4gICAgLy8gY2FuIHRocm93IG9mZiBgTmdGb3JgIHdoaWNoIGRvZXMgc21hcnQgZGlmZmluZyBhbmQgcmUtY3JlYXRlcyBlbGVtZW50cyBvbmx5IHdoZW4gbmVjZXNzYXJ5LFxuICAgIC8vIHdoaWxlIG1vdmluZyB0aGUgZXhpc3RpbmcgZWxlbWVudHMgaW4gYWxsIG90aGVyIGNhc2VzLlxuICAgIHRvZ2dsZVZpc2liaWxpdHkodGhpcy5fcm9vdEVsZW1lbnQsIHRydWUpO1xuICAgIHRoaXMuX2FuY2hvci5wYXJlbnROb2RlIS5yZXBsYWNlQ2hpbGQodGhpcy5fcm9vdEVsZW1lbnQsIHRoaXMuX2FuY2hvcik7XG5cbiAgICB0aGlzLl9kZXN0cm95UHJldmlldygpO1xuICAgIHRoaXMuX2Rlc3Ryb3lQbGFjZWhvbGRlcigpO1xuICAgIHRoaXMuX2JvdW5kYXJ5UmVjdCA9IHRoaXMuX3ByZXZpZXdSZWN0ID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gUmUtZW50ZXIgdGhlIE5nWm9uZSBzaW5jZSB3ZSBib3VuZCBgZG9jdW1lbnRgIGV2ZW50cyBvbiB0aGUgb3V0c2lkZS5cbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2Ryb3BDb250YWluZXIhO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY29udGFpbmVyLmdldEl0ZW1JbmRleCh0aGlzKTtcbiAgICAgIGNvbnN0IHBvaW50ZXJQb3NpdGlvbiA9IHRoaXMuX2dldFBvaW50ZXJQb3NpdGlvbk9uUGFnZShldmVudCk7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuX2dldERyYWdEaXN0YW5jZSh0aGlzLl9nZXRQb2ludGVyUG9zaXRpb25PblBhZ2UoZXZlbnQpKTtcbiAgICAgIGNvbnN0IGlzUG9pbnRlck92ZXJDb250YWluZXIgPSBjb250YWluZXIuX2lzT3ZlckNvbnRhaW5lcihcbiAgICAgICAgcG9pbnRlclBvc2l0aW9uLngsIHBvaW50ZXJQb3NpdGlvbi55KTtcblxuICAgICAgdGhpcy5lbmRlZC5uZXh0KHtzb3VyY2U6IHRoaXMsIGRpc3RhbmNlfSk7XG4gICAgICB0aGlzLmRyb3BwZWQubmV4dCh7XG4gICAgICAgIGl0ZW06IHRoaXMsXG4gICAgICAgIGN1cnJlbnRJbmRleCxcbiAgICAgICAgcHJldmlvdXNJbmRleDogdGhpcy5faW5pdGlhbEluZGV4LFxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgcHJldmlvdXNDb250YWluZXI6IHRoaXMuX2luaXRpYWxDb250YWluZXIsXG4gICAgICAgIGlzUG9pbnRlck92ZXJDb250YWluZXIsXG4gICAgICAgIGRpc3RhbmNlXG4gICAgICB9KTtcbiAgICAgIGNvbnRhaW5lci5kcm9wKHRoaXMsIGN1cnJlbnRJbmRleCwgdGhpcy5faW5pdGlhbEluZGV4LCB0aGlzLl9pbml0aWFsQ29udGFpbmVyLFxuICAgICAgICBpc1BvaW50ZXJPdmVyQ29udGFpbmVyLCBkaXN0YW5jZSk7XG4gICAgICB0aGlzLl9kcm9wQ29udGFpbmVyID0gdGhpcy5faW5pdGlhbENvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBpdGVtJ3MgcG9zaXRpb24gaW4gaXRzIGRyb3AgY29udGFpbmVyLCBvciBtb3ZlcyBpdFxuICAgKiBpbnRvIGEgbmV3IG9uZSwgZGVwZW5kaW5nIG9uIGl0cyBjdXJyZW50IGRyYWcgcG9zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVBY3RpdmVEcm9wQ29udGFpbmVyKHt4LCB5fTogUG9pbnQsIHt4OiByYXdYLCB5OiByYXdZfTogUG9pbnQpIHtcbiAgICAvLyBEcm9wIGNvbnRhaW5lciB0aGF0IGRyYWdnYWJsZSBoYXMgYmVlbiBtb3ZlZCBpbnRvLlxuICAgIGxldCBuZXdDb250YWluZXIgPSB0aGlzLl9pbml0aWFsQ29udGFpbmVyLl9nZXRTaWJsaW5nQ29udGFpbmVyRnJvbVBvc2l0aW9uKHRoaXMsIHgsIHkpO1xuXG4gICAgLy8gSWYgd2UgY291bGRuJ3QgZmluZCBhIG5ldyBjb250YWluZXIgdG8gbW92ZSB0aGUgaXRlbSBpbnRvLCBhbmQgdGhlIGl0ZW0gaGFzIGxlZnQgaXRzXG4gICAgLy8gaW5pdGlhbCBjb250YWluZXIsIGNoZWNrIHdoZXRoZXIgdGhlIGl0J3Mgb3ZlciB0aGUgaW5pdGlhbCBjb250YWluZXIuIFRoaXMgaGFuZGxlcyB0aGVcbiAgICAvLyBjYXNlIHdoZXJlIHR3byBjb250YWluZXJzIGFyZSBjb25uZWN0ZWQgb25lIHdheSBhbmQgdGhlIHVzZXIgdHJpZXMgdG8gdW5kbyBkcmFnZ2luZyBhblxuICAgIC8vIGl0ZW0gaW50byBhIG5ldyBjb250YWluZXIuXG4gICAgaWYgKCFuZXdDb250YWluZXIgJiYgdGhpcy5fZHJvcENvbnRhaW5lciAhPT0gdGhpcy5faW5pdGlhbENvbnRhaW5lciAmJlxuICAgICAgICB0aGlzLl9pbml0aWFsQ29udGFpbmVyLl9pc092ZXJDb250YWluZXIoeCwgeSkpIHtcbiAgICAgIG5ld0NvbnRhaW5lciA9IHRoaXMuX2luaXRpYWxDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKG5ld0NvbnRhaW5lciAmJiBuZXdDb250YWluZXIgIT09IHRoaXMuX2Ryb3BDb250YWluZXIpIHtcbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyBOb3RpZnkgdGhlIG9sZCBjb250YWluZXIgdGhhdCB0aGUgaXRlbSBoYXMgbGVmdC5cbiAgICAgICAgdGhpcy5leGl0ZWQubmV4dCh7aXRlbTogdGhpcywgY29udGFpbmVyOiB0aGlzLl9kcm9wQ29udGFpbmVyIX0pO1xuICAgICAgICB0aGlzLl9kcm9wQ29udGFpbmVyIS5leGl0KHRoaXMpO1xuICAgICAgICAvLyBOb3RpZnkgdGhlIG5ldyBjb250YWluZXIgdGhhdCB0aGUgaXRlbSBoYXMgZW50ZXJlZC5cbiAgICAgICAgdGhpcy5fZHJvcENvbnRhaW5lciA9IG5ld0NvbnRhaW5lciE7XG4gICAgICAgIHRoaXMuX2Ryb3BDb250YWluZXIuZW50ZXIodGhpcywgeCwgeSwgbmV3Q29udGFpbmVyID09PSB0aGlzLl9pbml0aWFsQ29udGFpbmVyICYmXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSByZS1lbnRlcmluZyB0aGUgaW5pdGlhbCBjb250YWluZXIgYW5kIHNvcnRpbmcgaXMgZGlzYWJsZWQsXG4gICAgICAgICAgICAvLyBwdXQgaXRlbSB0aGUgaW50byBpdHMgc3RhcnRpbmcgaW5kZXggdG8gYmVnaW4gd2l0aC5cbiAgICAgICAgICAgIG5ld0NvbnRhaW5lci5zb3J0aW5nRGlzYWJsZWQgPyB0aGlzLl9pbml0aWFsSW5kZXggOiB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLmVudGVyZWQubmV4dCh7XG4gICAgICAgICAgaXRlbTogdGhpcyxcbiAgICAgICAgICBjb250YWluZXI6IG5ld0NvbnRhaW5lciEsXG4gICAgICAgICAgY3VycmVudEluZGV4OiBuZXdDb250YWluZXIhLmdldEl0ZW1JbmRleCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2Ryb3BDb250YWluZXIhLl9zdGFydFNjcm9sbGluZ0lmTmVjZXNzYXJ5KHJhd1gsIHJhd1kpO1xuICAgIHRoaXMuX2Ryb3BDb250YWluZXIhLl9zb3J0SXRlbSh0aGlzLCB4LCB5LCB0aGlzLl9wb2ludGVyRGlyZWN0aW9uRGVsdGEpO1xuICAgIHRoaXMuX3ByZXZpZXcuc3R5bGUudHJhbnNmb3JtID1cbiAgICAgICAgZ2V0VHJhbnNmb3JtKHggLSB0aGlzLl9waWNrdXBQb3NpdGlvbkluRWxlbWVudC54LCB5IC0gdGhpcy5fcGlja3VwUG9zaXRpb25JbkVsZW1lbnQueSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgbmV4dCB0byB0aGUgdXNlcidzIHBvaW50ZXJcbiAgICogYW5kIHdpbGwgYmUgdXNlZCBhcyBhIHByZXZpZXcgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyBkcmFnZ2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUHJldmlld0VsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHByZXZpZXdDb25maWcgPSB0aGlzLl9wcmV2aWV3VGVtcGxhdGU7XG4gICAgY29uc3QgcHJldmlld0NsYXNzID0gdGhpcy5wcmV2aWV3Q2xhc3M7XG4gICAgY29uc3QgcHJldmlld1RlbXBsYXRlID0gcHJldmlld0NvbmZpZyA/IHByZXZpZXdDb25maWcudGVtcGxhdGUgOiBudWxsO1xuICAgIGxldCBwcmV2aWV3OiBIVE1MRWxlbWVudDtcblxuICAgIGlmIChwcmV2aWV3VGVtcGxhdGUgJiYgcHJldmlld0NvbmZpZykge1xuICAgICAgLy8gTWVhc3VyZSB0aGUgZWxlbWVudCBiZWZvcmUgd2UndmUgaW5zZXJ0ZWQgdGhlIHByZXZpZXdcbiAgICAgIC8vIHNpbmNlIHRoZSBpbnNlcnRpb24gY291bGQgdGhyb3cgb2ZmIHRoZSBtZWFzdXJlbWVudC5cbiAgICAgIGNvbnN0IHJvb3RSZWN0ID0gcHJldmlld0NvbmZpZy5tYXRjaFNpemUgPyB0aGlzLl9yb290RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG4gICAgICBjb25zdCB2aWV3UmVmID0gcHJldmlld0NvbmZpZy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhwcmV2aWV3VGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3Q29uZmlnLmNvbnRleHQpO1xuICAgICAgdmlld1JlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBwcmV2aWV3ID0gZ2V0Um9vdE5vZGUodmlld1JlZiwgdGhpcy5fZG9jdW1lbnQpO1xuICAgICAgdGhpcy5fcHJldmlld1JlZiA9IHZpZXdSZWY7XG4gICAgICBpZiAocHJldmlld0NvbmZpZy5tYXRjaFNpemUpIHtcbiAgICAgICAgbWF0Y2hFbGVtZW50U2l6ZShwcmV2aWV3LCByb290UmVjdCEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlldy5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICAgICAgZ2V0VHJhbnNmb3JtKHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLngsIHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdEVsZW1lbnQ7XG4gICAgICBwcmV2aWV3ID0gZGVlcENsb25lTm9kZShlbGVtZW50KTtcbiAgICAgIG1hdGNoRWxlbWVudFNpemUocHJldmlldywgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG4gICAgfVxuXG4gICAgZXh0ZW5kU3R5bGVzKHByZXZpZXcuc3R5bGUsIHtcbiAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRoYXQgd2UgZGlzYWJsZSB0aGUgcG9pbnRlciBldmVudHMgb24gdGhlIHByZXZpZXcsIGJlY2F1c2VcbiAgICAgIC8vIGl0IGNhbiB0aHJvdyBvZmYgdGhlIGBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50YCBjYWxscyBpbiB0aGUgYENka0Ryb3BMaXN0YC5cbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIC8vIFdlIGhhdmUgdG8gcmVzZXQgdGhlIG1hcmdpbiwgYmVjYXVzZSBpdCBjYW4gdGhyb3cgb2ZmIHBvc2l0aW9uaW5nIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydC5cbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHpJbmRleDogYCR7dGhpcy5fY29uZmlnLnpJbmRleCB8fCAxMDAwfWBcbiAgICB9KTtcblxuICAgIHRvZ2dsZU5hdGl2ZURyYWdJbnRlcmFjdGlvbnMocHJldmlldywgZmFsc2UpO1xuICAgIHByZXZpZXcuY2xhc3NMaXN0LmFkZCgnY2RrLWRyYWctcHJldmlldycpO1xuICAgIHByZXZpZXcuc2V0QXR0cmlidXRlKCdkaXInLCB0aGlzLl9kaXJlY3Rpb24pO1xuXG4gICAgaWYgKHByZXZpZXdDbGFzcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJldmlld0NsYXNzKSkge1xuICAgICAgICBwcmV2aWV3Q2xhc3MuZm9yRWFjaChjbGFzc05hbWUgPT4gcHJldmlldy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlldy5jbGFzc0xpc3QuYWRkKHByZXZpZXdDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZpZXc7XG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0ZXMgdGhlIHByZXZpZXcgZWxlbWVudCBmcm9tIGl0cyBjdXJyZW50IHBvc2l0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgZHJvcCBwbGFjZWhvbGRlci5cbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAqL1xuICBwcml2YXRlIF9hbmltYXRlUHJldmlld1RvUGxhY2Vob2xkZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gSWYgdGhlIHVzZXIgaGFzbid0IG1vdmVkIHlldCwgdGhlIHRyYW5zaXRpb25lbmQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBpZiAoIXRoaXMuX2hhc01vdmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2Vob2xkZXJSZWN0ID0gdGhpcy5fcGxhY2Vob2xkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAvLyBBcHBseSB0aGUgY2xhc3MgdGhhdCBhZGRzIGEgdHJhbnNpdGlvbiB0byB0aGUgcHJldmlldy5cbiAgICB0aGlzLl9wcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2Nkay1kcmFnLWFuaW1hdGluZycpO1xuXG4gICAgLy8gTW92ZSB0aGUgcHJldmlldyB0byB0aGUgcGxhY2Vob2xkZXIgcG9zaXRpb24uXG4gICAgdGhpcy5fcHJldmlldy5zdHlsZS50cmFuc2Zvcm0gPSBnZXRUcmFuc2Zvcm0ocGxhY2Vob2xkZXJSZWN0LmxlZnQsIHBsYWNlaG9sZGVyUmVjdC50b3ApO1xuXG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgYHRyYW5zaXRpb25gLCB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IHdvbid0IGZpcmUuIFNpbmNlXG4gICAgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIGEgc3R5bGUgcmVjYWxjdWxhdGlvbiBpbiBvcmRlciBmb3IgdGhlIGBjZGstZHJhZy1hbmltYXRpbmdgIGNsYXNzIHRvXG4gICAgLy8gYXBwbHkgaXRzIHN0eWxlLCB3ZSB0YWtlIGFkdmFudGFnZSBvZiB0aGUgYXZhaWxhYmxlIGluZm8gdG8gZmlndXJlIG91dCB3aGV0aGVyIHdlIG5lZWQgdG9cbiAgICAvLyBiaW5kIHRoZSBldmVudCBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRUcmFuc2Zvcm1UcmFuc2l0aW9uRHVyYXRpb25Jbk1zKHRoaXMuX3ByZXZpZXcpO1xuXG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoIWV2ZW50IHx8IChldmVudC50YXJnZXQgPT09IHRoaXMuX3ByZXZpZXcgJiYgZXZlbnQucHJvcGVydHlOYW1lID09PSAndHJhbnNmb3JtJykpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZXIpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdDtcblxuICAgICAgICAvLyBJZiBhIHRyYW5zaXRpb24gaXMgc2hvcnQgZW5vdWdoLCB0aGUgYnJvd3NlciBtaWdodCBub3QgZmlyZSB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50LlxuICAgICAgICAvLyBTaW5jZSB3ZSBrbm93IGhvdyBsb25nIGl0J3Mgc3VwcG9zZWQgdG8gdGFrZSwgYWRkIGEgdGltZW91dCB3aXRoIGEgNTAlIGJ1ZmZlciB0aGF0J2xsXG4gICAgICAgIC8vIGZpcmUgaWYgdGhlIHRyYW5zaXRpb24gaGFzbid0IGNvbXBsZXRlZCB3aGVuIGl0IHdhcyBzdXBwb3NlZCB0by5cbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciBhcyBGdW5jdGlvbiwgZHVyYXRpb24gKiAxLjUpO1xuICAgICAgICB0aGlzLl9wcmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYW4gZWxlbWVudCB0aGF0IHdpbGwgYmUgc2hvd24gaW5zdGVhZCBvZiB0aGUgY3VycmVudCBlbGVtZW50IHdoaWxlIGRyYWdnaW5nLiAqL1xuICBwcml2YXRlIF9jcmVhdGVQbGFjZWhvbGRlckVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyQ29uZmlnID0gdGhpcy5fcGxhY2Vob2xkZXJUZW1wbGF0ZTtcbiAgICBjb25zdCBwbGFjZWhvbGRlclRlbXBsYXRlID0gcGxhY2Vob2xkZXJDb25maWcgPyBwbGFjZWhvbGRlckNvbmZpZy50ZW1wbGF0ZSA6IG51bGw7XG4gICAgbGV0IHBsYWNlaG9sZGVyOiBIVE1MRWxlbWVudDtcblxuICAgIGlmIChwbGFjZWhvbGRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZiA9IHBsYWNlaG9sZGVyQ29uZmlnIS52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgcGxhY2Vob2xkZXJUZW1wbGF0ZSxcbiAgICAgICAgcGxhY2Vob2xkZXJDb25maWchLmNvbnRleHRcbiAgICAgICk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBwbGFjZWhvbGRlciA9IGdldFJvb3ROb2RlKHRoaXMuX3BsYWNlaG9sZGVyUmVmLCB0aGlzLl9kb2N1bWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gZGVlcENsb25lTm9kZSh0aGlzLl9yb290RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgnY2RrLWRyYWctcGxhY2Vob2xkZXInKTtcbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH1cblxuICAvKipcbiAgICogRmlndXJlcyBvdXQgdGhlIGNvb3JkaW5hdGVzIGF0IHdoaWNoIGFuIGVsZW1lbnQgd2FzIHBpY2tlZCB1cC5cbiAgICogQHBhcmFtIHJlZmVyZW5jZUVsZW1lbnQgRWxlbWVudCB0aGF0IGluaXRpYXRlZCB0aGUgZHJhZ2dpbmcuXG4gICAqIEBwYXJhbSBldmVudCBFdmVudCB0aGF0IGluaXRpYXRlZCB0aGUgZHJhZ2dpbmcuXG4gICAqL1xuICBwcml2YXRlIF9nZXRQb2ludGVyUG9zaXRpb25JbkVsZW1lbnQocmVmZXJlbmNlRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBQb2ludCB7XG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSB0aGlzLl9yb290RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoYW5kbGVFbGVtZW50ID0gcmVmZXJlbmNlRWxlbWVudCA9PT0gdGhpcy5fcm9vdEVsZW1lbnQgPyBudWxsIDogcmVmZXJlbmNlRWxlbWVudDtcbiAgICBjb25zdCByZWZlcmVuY2VSZWN0ID0gaGFuZGxlRWxlbWVudCA/IGhhbmRsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBlbGVtZW50UmVjdDtcbiAgICBjb25zdCBwb2ludCA9IGlzVG91Y2hFdmVudChldmVudCkgPyBldmVudC50YXJnZXRUb3VjaGVzWzBdIDogZXZlbnQ7XG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLl9nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgeCA9IHBvaW50LnBhZ2VYIC0gcmVmZXJlbmNlUmVjdC5sZWZ0IC0gc2Nyb2xsUG9zaXRpb24ubGVmdDtcbiAgICBjb25zdCB5ID0gcG9pbnQucGFnZVkgLSByZWZlcmVuY2VSZWN0LnRvcCAtIHNjcm9sbFBvc2l0aW9uLnRvcDtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiByZWZlcmVuY2VSZWN0LmxlZnQgLSBlbGVtZW50UmVjdC5sZWZ0ICsgeCxcbiAgICAgIHk6IHJlZmVyZW5jZVJlY3QudG9wIC0gZWxlbWVudFJlY3QudG9wICsgeVxuICAgIH07XG4gIH1cblxuICAvKiogRGV0ZXJtaW5lcyB0aGUgcG9pbnQgb2YgdGhlIHBhZ2UgdGhhdCB3YXMgdG91Y2hlZCBieSB0aGUgdXNlci4gKi9cbiAgcHJpdmF0ZSBfZ2V0UG9pbnRlclBvc2l0aW9uT25QYWdlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IFBvaW50IHtcbiAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMuX2dldFZpZXdwb3J0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICBjb25zdCBwb2ludCA9IGlzVG91Y2hFdmVudChldmVudCkgP1xuICAgICAgICAvLyBgdG91Y2hlc2Agd2lsbCBiZSBlbXB0eSBmb3Igc3RhcnQvZW5kIGV2ZW50cyBzbyB3ZSBoYXZlIHRvIGZhbGwgYmFjayB0byBgY2hhbmdlZFRvdWNoZXNgLlxuICAgICAgICAvLyBBbHNvIG5vdGUgdGhhdCBvbiByZWFsIGRldmljZXMgd2UncmUgZ3VhcmFudGVlZCBmb3IgZWl0aGVyIGB0b3VjaGVzYCBvciBgY2hhbmdlZFRvdWNoZXNgXG4gICAgICAgIC8vIHRvIGhhdmUgYSB2YWx1ZSwgYnV0IEZpcmVmb3ggaW4gZGV2aWNlIGVtdWxhdGlvbiBtb2RlIGhhcyBhIGJ1ZyB3aGVyZSBib3RoIGNhbiBiZSBlbXB0eVxuICAgICAgICAvLyBmb3IgYHRvdWNoc3RhcnRgIGFuZCBgdG91Y2hlbmRgIHNvIHdlIGZhbGwgYmFjayB0byBhIGR1bW15IG9iamVjdCBpbiBvcmRlciB0byBhdm9pZFxuICAgICAgICAvLyB0aHJvd2luZyBhbiBlcnJvci4gVGhlIHZhbHVlIHJldHVybmVkIGhlcmUgd2lsbCBiZSBpbmNvcnJlY3QsIGJ1dCBzaW5jZSB0aGlzIG9ubHlcbiAgICAgICAgLy8gYnJlYWtzIGluc2lkZSBhIGRldmVsb3BlciB0b29sIGFuZCB0aGUgdmFsdWUgaXMgb25seSB1c2VkIGZvciBzZWNvbmRhcnkgaW5mb3JtYXRpb24sXG4gICAgICAgIC8vIHdlIGNhbiBnZXQgYXdheSB3aXRoIGl0LiBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTYxNTgyNC5cbiAgICAgICAgKGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gfHwge3BhZ2VYOiAwLCBwYWdlWTogMH0pIDogZXZlbnQ7XG5cbiAgICBjb25zdCB4ID0gcG9pbnQucGFnZVggLSBzY3JvbGxQb3NpdGlvbi5sZWZ0O1xuICAgIGNvbnN0IHkgPSBwb2ludC5wYWdlWSAtIHNjcm9sbFBvc2l0aW9uLnRvcDtcblxuICAgIC8vIGlmIGRyYWdnaW5nIFNWRyBlbGVtZW50LCB0cnkgdG8gY29udmVydCBmcm9tIHRoZSBzY3JlZW4gY29vcmRpbmF0ZSBzeXN0ZW0gdG8gdGhlIFNWR1xuICAgIC8vIGNvb3JkaW5hdGUgc3lzdGVtXG4gICAgaWYgKHRoaXMuX293bmVyU1ZHRWxlbWVudCkge1xuICAgICAgY29uc3Qgc3ZnTWF0cml4ID0gdGhpcy5fb3duZXJTVkdFbGVtZW50LmdldFNjcmVlbkNUTSgpO1xuICAgICAgaWYgKHN2Z01hdHJpeCkge1xuICAgICAgICBjb25zdCBzdmdQb2ludCA9IHRoaXMuX293bmVyU1ZHRWxlbWVudC5jcmVhdGVTVkdQb2ludCgpO1xuICAgICAgICBzdmdQb2ludC54ID0geDtcbiAgICAgICAgc3ZnUG9pbnQueSA9IHk7XG4gICAgICAgIHJldHVybiBzdmdQb2ludC5tYXRyaXhUcmFuc2Zvcm0oc3ZnTWF0cml4LmludmVyc2UoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt4LCB5fTtcbiAgfVxuXG5cbiAgLyoqIEdldHMgdGhlIHBvaW50ZXIgcG9zaXRpb24gb24gdGhlIHBhZ2UsIGFjY291bnRpbmcgZm9yIGFueSBwb3NpdGlvbiBjb25zdHJhaW50cy4gKi9cbiAgcHJpdmF0ZSBfZ2V0Q29uc3RyYWluZWRQb2ludGVyUG9zaXRpb24ocG9pbnQ6IFBvaW50KTogUG9pbnQge1xuICAgIGNvbnN0IGRyb3BDb250YWluZXJMb2NrID0gdGhpcy5fZHJvcENvbnRhaW5lciA/IHRoaXMuX2Ryb3BDb250YWluZXIubG9ja0F4aXMgOiBudWxsO1xuICAgIGxldCB7eCwgeX0gPSB0aGlzLmNvbnN0cmFpblBvc2l0aW9uID8gdGhpcy5jb25zdHJhaW5Qb3NpdGlvbihwb2ludCwgdGhpcykgOiBwb2ludDtcblxuICAgIGlmICh0aGlzLmxvY2tBeGlzID09PSAneCcgfHwgZHJvcENvbnRhaW5lckxvY2sgPT09ICd4Jykge1xuICAgICAgeSA9IHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvY2tBeGlzID09PSAneScgfHwgZHJvcENvbnRhaW5lckxvY2sgPT09ICd5Jykge1xuICAgICAgeCA9IHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLng7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2JvdW5kYXJ5UmVjdCkge1xuICAgICAgY29uc3Qge3g6IHBpY2t1cFgsIHk6IHBpY2t1cFl9ID0gdGhpcy5fcGlja3VwUG9zaXRpb25JbkVsZW1lbnQ7XG4gICAgICBjb25zdCBib3VuZGFyeVJlY3QgPSB0aGlzLl9ib3VuZGFyeVJlY3Q7XG4gICAgICBjb25zdCBwcmV2aWV3UmVjdCA9IHRoaXMuX3ByZXZpZXdSZWN0ITtcbiAgICAgIGNvbnN0IG1pblkgPSBib3VuZGFyeVJlY3QudG9wICsgcGlja3VwWTtcbiAgICAgIGNvbnN0IG1heFkgPSBib3VuZGFyeVJlY3QuYm90dG9tIC0gKHByZXZpZXdSZWN0LmhlaWdodCAtIHBpY2t1cFkpO1xuICAgICAgY29uc3QgbWluWCA9IGJvdW5kYXJ5UmVjdC5sZWZ0ICsgcGlja3VwWDtcbiAgICAgIGNvbnN0IG1heFggPSBib3VuZGFyeVJlY3QucmlnaHQgLSAocHJldmlld1JlY3Qud2lkdGggLSBwaWNrdXBYKTtcblxuICAgICAgeCA9IGNsYW1wKHgsIG1pblgsIG1heFgpO1xuICAgICAgeSA9IGNsYW1wKHksIG1pblksIG1heFkpO1xuICAgIH1cblxuICAgIHJldHVybiB7eCwgeX07XG4gIH1cblxuXG4gIC8qKiBVcGRhdGVzIHRoZSBjdXJyZW50IGRyYWcgZGVsdGEsIGJhc2VkIG9uIHRoZSB1c2VyJ3MgY3VycmVudCBwb2ludGVyIHBvc2l0aW9uIG9uIHRoZSBwYWdlLiAqL1xuICBwcml2YXRlIF91cGRhdGVQb2ludGVyRGlyZWN0aW9uRGVsdGEocG9pbnRlclBvc2l0aW9uT25QYWdlOiBQb2ludCkge1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvaW50ZXJQb3NpdGlvbk9uUGFnZTtcbiAgICBjb25zdCBkZWx0YSA9IHRoaXMuX3BvaW50ZXJEaXJlY3Rpb25EZWx0YTtcbiAgICBjb25zdCBwb3NpdGlvblNpbmNlTGFzdENoYW5nZSA9IHRoaXMuX3BvaW50ZXJQb3NpdGlvbkF0TGFzdERpcmVjdGlvbkNoYW5nZTtcblxuICAgIC8vIEFtb3VudCBvZiBwaXhlbHMgdGhlIHVzZXIgaGFzIGRyYWdnZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGlyZWN0aW9uIGNoYW5nZWQuXG4gICAgY29uc3QgY2hhbmdlWCA9IE1hdGguYWJzKHggLSBwb3NpdGlvblNpbmNlTGFzdENoYW5nZS54KTtcbiAgICBjb25zdCBjaGFuZ2VZID0gTWF0aC5hYnMoeSAtIHBvc2l0aW9uU2luY2VMYXN0Q2hhbmdlLnkpO1xuXG4gICAgLy8gQmVjYXVzZSB3ZSBoYW5kbGUgcG9pbnRlciBldmVudHMgb24gYSBwZXItcGl4ZWwgYmFzaXMsIHdlIGRvbid0IHdhbnQgdGhlIGRlbHRhXG4gICAgLy8gdG8gY2hhbmdlIGZvciBldmVyeSBwaXhlbCwgb3RoZXJ3aXNlIGFueXRoaW5nIHRoYXQgZGVwZW5kcyBvbiBpdCBjYW4gbG9vayBlcnJhdGljLlxuICAgIC8vIFRvIG1ha2UgdGhlIGRlbHRhIG1vcmUgY29uc2lzdGVudCwgd2UgdHJhY2sgaG93IG11Y2ggdGhlIHVzZXIgaGFzIG1vdmVkIHNpbmNlIHRoZSBsYXN0XG4gICAgLy8gZGVsdGEgY2hhbmdlIGFuZCB3ZSBvbmx5IHVwZGF0ZSBpdCBhZnRlciBpdCBoYXMgcmVhY2hlZCBhIGNlcnRhaW4gdGhyZXNob2xkLlxuICAgIGlmIChjaGFuZ2VYID4gdGhpcy5fY29uZmlnLnBvaW50ZXJEaXJlY3Rpb25DaGFuZ2VUaHJlc2hvbGQpIHtcbiAgICAgIGRlbHRhLnggPSB4ID4gcG9zaXRpb25TaW5jZUxhc3RDaGFuZ2UueCA/IDEgOiAtMTtcbiAgICAgIHBvc2l0aW9uU2luY2VMYXN0Q2hhbmdlLnggPSB4O1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VZID4gdGhpcy5fY29uZmlnLnBvaW50ZXJEaXJlY3Rpb25DaGFuZ2VUaHJlc2hvbGQpIHtcbiAgICAgIGRlbHRhLnkgPSB5ID4gcG9zaXRpb25TaW5jZUxhc3RDaGFuZ2UueSA/IDEgOiAtMTtcbiAgICAgIHBvc2l0aW9uU2luY2VMYXN0Q2hhbmdlLnkgPSB5O1xuICAgIH1cblxuICAgIHJldHVybiBkZWx0YTtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBuYXRpdmUgZHJhZyBpbnRlcmFjdGlvbnMsIGJhc2VkIG9uIGhvdyBtYW55IGhhbmRsZXMgYXJlIHJlZ2lzdGVyZWQuICovXG4gIHByaXZhdGUgX3RvZ2dsZU5hdGl2ZURyYWdJbnRlcmFjdGlvbnMoKSB7XG4gICAgaWYgKCF0aGlzLl9yb290RWxlbWVudCB8fCAhdGhpcy5faGFuZGxlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZEVuYWJsZSA9IHRoaXMuX2hhbmRsZXMubGVuZ3RoID4gMCB8fCAhdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoc2hvdWxkRW5hYmxlICE9PSB0aGlzLl9uYXRpdmVJbnRlcmFjdGlvbnNFbmFibGVkKSB7XG4gICAgICB0aGlzLl9uYXRpdmVJbnRlcmFjdGlvbnNFbmFibGVkID0gc2hvdWxkRW5hYmxlO1xuICAgICAgdG9nZ2xlTmF0aXZlRHJhZ0ludGVyYWN0aW9ucyh0aGlzLl9yb290RWxlbWVudCwgc2hvdWxkRW5hYmxlKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVtb3ZlcyB0aGUgbWFudWFsbHktYWRkZWQgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlUm9vdEVsZW1lbnRMaXN0ZW5lcnMoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX3BvaW50ZXJEb3duLCBhY3RpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fcG9pbnRlckRvd24sIHBhc3NpdmVFdmVudExpc3RlbmVyT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhIGB0cmFuc2Zvcm1gIHRvIHRoZSByb290IGVsZW1lbnQsIHRha2luZyBpbnRvIGFjY291bnQgYW55IGV4aXN0aW5nIHRyYW5zZm9ybXMgb24gaXQuXG4gICAqIEBwYXJhbSB4IE5ldyB0cmFuc2Zvcm0gdmFsdWUgYWxvbmcgdGhlIFggYXhpcy5cbiAgICogQHBhcmFtIHkgTmV3IHRyYW5zZm9ybSB2YWx1ZSBhbG9uZyB0aGUgWSBheGlzLlxuICAgKi9cbiAgcHJpdmF0ZSBfYXBwbHlSb290RWxlbWVudFRyYW5zZm9ybSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGdldFRyYW5zZm9ybSh4LCB5KTtcblxuICAgIC8vIENhY2hlIHRoZSBwcmV2aW91cyB0cmFuc2Zvcm0gYW1vdW50IG9ubHkgYWZ0ZXIgdGhlIGZpcnN0IGRyYWcgc2VxdWVuY2UsIGJlY2F1c2VcbiAgICAvLyB3ZSBkb24ndCB3YW50IG91ciBvd24gdHJhbnNmb3JtcyB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICBpZiAodGhpcy5faW5pdGlhbFRyYW5zZm9ybSA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9pbml0aWFsVHJhbnNmb3JtID0gdGhpcy5fcm9vdEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xuICAgIH1cblxuICAgIC8vIFByZXNlcnZlIHRoZSBwcmV2aW91cyBgdHJhbnNmb3JtYCB2YWx1ZSwgaWYgdGhlcmUgd2FzIG9uZS4gTm90ZSB0aGF0IHdlIGFwcGx5IG91ciBvd25cbiAgICAvLyB0cmFuc2Zvcm0gYmVmb3JlIHRoZSB1c2VyJ3MsIGJlY2F1c2UgdGhpbmdzIGxpa2Ugcm90YXRpb24gY2FuIGFmZmVjdCB3aGljaCBkaXJlY3Rpb25cbiAgICAvLyB0aGUgZWxlbWVudCB3aWxsIGJlIHRyYW5zbGF0ZWQgdG93YXJkcy5cbiAgICB0aGlzLl9yb290RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLl9pbml0aWFsVHJhbnNmb3JtID9cbiAgICAgIHRyYW5zZm9ybSArICcgJyArIHRoaXMuX2luaXRpYWxUcmFuc2Zvcm0gIDogdHJhbnNmb3JtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRpc3RhbmNlIHRoYXQgdGhlIHVzZXIgaGFzIGRyYWdnZWQgZHVyaW5nIHRoZSBjdXJyZW50IGRyYWcgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSBjdXJyZW50UG9zaXRpb24gQ3VycmVudCBwb3NpdGlvbiBvZiB0aGUgdXNlcidzIHBvaW50ZXIuXG4gICAqL1xuICBwcml2YXRlIF9nZXREcmFnRGlzdGFuY2UoY3VycmVudFBvc2l0aW9uOiBQb2ludCk6IFBvaW50IHtcbiAgICBjb25zdCBwaWNrdXBQb3NpdGlvbiA9IHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlO1xuXG4gICAgaWYgKHBpY2t1cFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4ge3g6IGN1cnJlbnRQb3NpdGlvbi54IC0gcGlja3VwUG9zaXRpb24ueCwgeTogY3VycmVudFBvc2l0aW9uLnkgLSBwaWNrdXBQb3NpdGlvbi55fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3g6IDAsIHk6IDB9O1xuICB9XG5cbiAgLyoqIENsZWFucyB1cCBhbnkgY2FjaGVkIGVsZW1lbnQgZGltZW5zaW9ucyB0aGF0IHdlIGRvbid0IG5lZWQgYWZ0ZXIgZHJhZ2dpbmcgaGFzIHN0b3BwZWQuICovXG4gIHByaXZhdGUgX2NsZWFudXBDYWNoZWREaW1lbnNpb25zKCkge1xuICAgIHRoaXMuX2JvdW5kYXJ5UmVjdCA9IHRoaXMuX3ByZXZpZXdSZWN0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3BhcmVudFBvc2l0aW9ucy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHN0aWxsIGluc2lkZSBpdHMgYm91bmRhcnkgYWZ0ZXIgdGhlIHZpZXdwb3J0IGhhcyBiZWVuIHJlc2l6ZWQuXG4gICAqIElmIG5vdCwgdGhlIHBvc2l0aW9uIGlzIGFkanVzdGVkIHNvIHRoYXQgdGhlIGVsZW1lbnQgZml0cyBhZ2Fpbi5cbiAgICovXG4gIHByaXZhdGUgX2NvbnRhaW5JbnNpZGVCb3VuZGFyeU9uUmVzaXplKCkge1xuICAgIGxldCB7eCwgeX0gPSB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtO1xuXG4gICAgaWYgKCh4ID09PSAwICYmIHkgPT09IDApIHx8IHRoaXMuaXNEcmFnZ2luZygpIHx8ICF0aGlzLl9ib3VuZGFyeUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBib3VuZGFyeVJlY3QgPSB0aGlzLl9ib3VuZGFyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSB0aGlzLl9yb290RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGUgZWxlbWVudCBnb3QgaGlkZGVuIGF3YXkgYWZ0ZXIgZHJhZ2dpbmcgKGUuZy4gYnkgc3dpdGNoaW5nIHRvIGFcbiAgICAvLyBkaWZmZXJlbnQgdGFiKS4gRG9uJ3QgZG8gYW55dGhpbmcgaW4gdGhpcyBjYXNlIHNvIHdlIGRvbid0IGNsZWFyIHRoZSB1c2VyJ3MgcG9zaXRpb24uXG4gICAgaWYgKChib3VuZGFyeVJlY3Qud2lkdGggPT09IDAgJiYgYm91bmRhcnlSZWN0LmhlaWdodCA9PT0gMCkgfHxcbiAgICAgICAgKGVsZW1lbnRSZWN0LndpZHRoID09PSAwICYmIGVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0T3ZlcmZsb3cgPSBib3VuZGFyeVJlY3QubGVmdCAtIGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgY29uc3QgcmlnaHRPdmVyZmxvdyA9IGVsZW1lbnRSZWN0LnJpZ2h0IC0gYm91bmRhcnlSZWN0LnJpZ2h0O1xuICAgIGNvbnN0IHRvcE92ZXJmbG93ID0gYm91bmRhcnlSZWN0LnRvcCAtIGVsZW1lbnRSZWN0LnRvcDtcbiAgICBjb25zdCBib3R0b21PdmVyZmxvdyA9IGVsZW1lbnRSZWN0LmJvdHRvbSAtIGJvdW5kYXJ5UmVjdC5ib3R0b207XG5cbiAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYmVjb21lIHdpZGVyIHRoYW4gdGhlIGJvdW5kYXJ5LCB3ZSBjYW4ndFxuICAgIC8vIGRvIG11Y2ggdG8gbWFrZSBpdCBmaXQgc28gd2UganVzdCBhbmNob3IgaXQgdG8gdGhlIGxlZnQuXG4gICAgaWYgKGJvdW5kYXJ5UmVjdC53aWR0aCA+IGVsZW1lbnRSZWN0LndpZHRoKSB7XG4gICAgICBpZiAobGVmdE92ZXJmbG93ID4gMCkge1xuICAgICAgICB4ICs9IGxlZnRPdmVyZmxvdztcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0T3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIHggLT0gcmlnaHRPdmVyZmxvdztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IDA7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGJlY29tZSB0YWxsZXIgdGhhbiB0aGUgYm91bmRhcnksIHdlIGNhbid0XG4gICAgLy8gZG8gbXVjaCB0byBtYWtlIGl0IGZpdCBzbyB3ZSBqdXN0IGFuY2hvciBpdCB0byB0aGUgdG9wLlxuICAgIGlmIChib3VuZGFyeVJlY3QuaGVpZ2h0ID4gZWxlbWVudFJlY3QuaGVpZ2h0KSB7XG4gICAgICBpZiAodG9wT3ZlcmZsb3cgPiAwKSB7XG4gICAgICAgIHkgKz0gdG9wT3ZlcmZsb3c7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3R0b21PdmVyZmxvdyA+IDApIHtcbiAgICAgICAgeSAtPSBib3R0b21PdmVyZmxvdztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHggIT09IHRoaXMuX3Bhc3NpdmVUcmFuc2Zvcm0ueCB8fCB5ICE9PSB0aGlzLl9wYXNzaXZlVHJhbnNmb3JtLnkpIHtcbiAgICAgIHRoaXMuc2V0RnJlZURyYWdQb3NpdGlvbih7eSwgeH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBkcmFnIHN0YXJ0IGRlbGF5LCBiYXNlZCBvbiB0aGUgZXZlbnQgdHlwZS4gKi9cbiAgcHJpdmF0ZSBfZ2V0RHJhZ1N0YXJ0RGVsYXkoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZHJhZ1N0YXJ0RGVsYXk7XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvdWNoO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLm1vdXNlIDogMDtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgd2hlbiBzY3JvbGxpbmcgaGFzIG9jY3VycmVkLiAqL1xuICBwcml2YXRlIF91cGRhdGVPblNjcm9sbChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxEaWZmZXJlbmNlID0gdGhpcy5fcGFyZW50UG9zaXRpb25zLmhhbmRsZVNjcm9sbChldmVudCk7XG5cbiAgICBpZiAoc2Nyb2xsRGlmZmVyZW5jZSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIE5vZGU7XG5cbiAgICAgIC8vIENsaWVudFJlY3QgZGltZW5zaW9ucyBhcmUgYmFzZWQgb24gdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgcGFnZSBhbmQgaXRzIHBhcmVudCBub2RlIHNvXG4gICAgICAvLyB3ZSBoYXZlIHRvIHVwZGF0ZSB0aGUgY2FjaGVkIGJvdW5kYXJ5IENsaWVudFJlY3QgaWYgdGhlIHVzZXIgaGFzIHNjcm9sbGVkLiBDaGVjayBmb3JcbiAgICAgIC8vIHRoZSBgZG9jdW1lbnRgIHNwZWNpZmljYWxseSBzaW5jZSBJRSBkb2Vzbid0IHN1cHBvcnQgYGNvbnRhaW5zYCBvbiBpdC5cbiAgICAgIGlmICh0aGlzLl9ib3VuZGFyeVJlY3QgJiYgKHRhcmdldCA9PT0gdGhpcy5fZG9jdW1lbnQgfHxcbiAgICAgICAgICAodGFyZ2V0ICE9PSB0aGlzLl9ib3VuZGFyeUVsZW1lbnQgJiYgdGFyZ2V0LmNvbnRhaW5zKHRoaXMuX2JvdW5kYXJ5RWxlbWVudCkpKSkge1xuICAgICAgICBhZGp1c3RDbGllbnRSZWN0KHRoaXMuX2JvdW5kYXJ5UmVjdCwgc2Nyb2xsRGlmZmVyZW5jZS50b3AsIHNjcm9sbERpZmZlcmVuY2UubGVmdCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BpY2t1cFBvc2l0aW9uT25QYWdlLnggKz0gc2Nyb2xsRGlmZmVyZW5jZS5sZWZ0O1xuICAgICAgdGhpcy5fcGlja3VwUG9zaXRpb25PblBhZ2UueSArPSBzY3JvbGxEaWZmZXJlbmNlLnRvcDtcblxuICAgICAgLy8gSWYgd2UncmUgaW4gZnJlZSBkcmFnIG1vZGUsIHdlIGhhdmUgdG8gdXBkYXRlIHRoZSBhY3RpdmUgdHJhbnNmb3JtLCBiZWNhdXNlXG4gICAgICAvLyBpdCBpc24ndCByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQgbGlrZSB0aGUgcHJldmlldyBpbnNpZGUgYSBkcm9wIGxpc3QuXG4gICAgICBpZiAoIXRoaXMuX2Ryb3BDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVHJhbnNmb3JtLnggLT0gc2Nyb2xsRGlmZmVyZW5jZS5sZWZ0O1xuICAgICAgICB0aGlzLl9hY3RpdmVUcmFuc2Zvcm0ueSAtPSBzY3JvbGxEaWZmZXJlbmNlLnRvcDtcbiAgICAgICAgdGhpcy5fYXBwbHlSb290RWxlbWVudFRyYW5zZm9ybSh0aGlzLl9hY3RpdmVUcmFuc2Zvcm0ueCwgdGhpcy5fYWN0aXZlVHJhbnNmb3JtLnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHZpZXdwb3J0LiAqL1xuICBwcml2YXRlIF9nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IGNhY2hlZFBvc2l0aW9uID0gdGhpcy5fcGFyZW50UG9zaXRpb25zLnBvc2l0aW9ucy5nZXQodGhpcy5fZG9jdW1lbnQpO1xuICAgIHJldHVybiBjYWNoZWRQb3NpdGlvbiA/IGNhY2hlZFBvc2l0aW9uLnNjcm9sbFBvc2l0aW9uIDpcbiAgICAgICAgdGhpcy5fdmlld3BvcnRSdWxlci5nZXRWaWV3cG9ydFNjcm9sbFBvc2l0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogTGF6aWx5IHJlc29sdmVzIGFuZCByZXR1cm5zIHRoZSBzaGFkb3cgcm9vdCBvZiB0aGUgZWxlbWVudC4gV2UgZG8gdGhpcyBpbiBhIGZ1bmN0aW9uLCByYXRoZXJcbiAgICogdGhhbiBzYXZpbmcgaXQgaW4gcHJvcGVydHkgZGlyZWN0bHkgb24gaW5pdCwgYmVjYXVzZSB3ZSB3YW50IHRvIHJlc29sdmUgaXQgYXMgbGF0ZSBhcyBwb3NzaWJsZVxuICAgKiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgZWxlbWVudCBoYXMgYmVlbiBtb3ZlZCBpbnRvIHRoZSBzaGFkb3cgRE9NLiBEb2luZyBpdCBpbnNpZGUgdGhlXG4gICAqIGNvbnN0cnVjdG9yIG1pZ2h0IGJlIHRvbyBlYXJseSBpZiB0aGUgZWxlbWVudCBpcyBpbnNpZGUgb2Ygc29tZXRoaW5nIGxpa2UgYG5nRm9yYCBvciBgbmdJZmAuXG4gICAqL1xuICBwcml2YXRlIF9nZXRTaGFkb3dSb290KCk6IFNoYWRvd1Jvb3QgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkU2hhZG93Um9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9jYWNoZWRTaGFkb3dSb290ID0gX2dldFNoYWRvd1Jvb3QodGhpcy5fcm9vdEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRTaGFkb3dSb290O1xuICB9XG59XG5cbi8qKlxuICogR2V0cyBhIDNkIGB0cmFuc2Zvcm1gIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB4IERlc2lyZWQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgYWxvbmcgdGhlIFggYXhpcy5cbiAqIEBwYXJhbSB5IERlc2lyZWQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgYWxvbmcgdGhlIFkgYXhpcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtKHg6IG51bWJlciwgeTogbnVtYmVyKTogc3RyaW5nIHtcbiAgLy8gUm91bmQgdGhlIHRyYW5zZm9ybXMgc2luY2Ugc29tZSBicm93c2VycyB3aWxsXG4gIC8vIGJsdXIgdGhlIGVsZW1lbnRzIGZvciBzdWItcGl4ZWwgdHJhbnNmb3Jtcy5cbiAgcmV0dXJuIGB0cmFuc2xhdGUzZCgke01hdGgucm91bmQoeCl9cHgsICR7TWF0aC5yb3VuZCh5KX1weCwgMClgO1xufVxuXG4vKiogQ2xhbXBzIGEgdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bS4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIHJlbW92ZSBhIG5vZGUgZnJvbSB0aGUgRE9NIGFuZCB0byBkbyBhbGwgdGhlIG5lY2Vzc2FyeSBudWxsIGNoZWNrcy5cbiAqIEBwYXJhbSBub2RlIE5vZGUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlOiBOb2RlIHwgbnVsbCkge1xuICBpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn1cblxuLyoqIERldGVybWluZXMgd2hldGhlciBhbiBldmVudCBpcyBhIHRvdWNoIGV2ZW50LiAqL1xuZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IGV2ZW50IGlzIFRvdWNoRXZlbnQge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgZXZlcnkgcGl4ZWwgdGhhdCB0aGUgdXNlciBoYXMgZHJhZ2dlZCBzbyB3ZSBuZWVkIGl0IHRvIGJlXG4gIC8vIGFzIGZhc3QgYXMgcG9zc2libGUuIFNpbmNlIHdlIG9ubHkgYmluZCBtb3VzZSBldmVudHMgYW5kIHRvdWNoIGV2ZW50cywgd2UgY2FuIGFzc3VtZVxuICAvLyB0aGF0IGlmIHRoZSBldmVudCdzIG5hbWUgc3RhcnRzIHdpdGggYHRgLCBpdCdzIGEgdG91Y2ggZXZlbnQuXG4gIHJldHVybiBldmVudC50eXBlWzBdID09PSAndCc7XG59XG5cbi8qKiBHZXRzIHRoZSBlbGVtZW50IGludG8gd2hpY2ggdGhlIGRyYWcgcHJldmlldyBzaG91bGQgYmUgaW5zZXJ0ZWQuICovXG5mdW5jdGlvbiBnZXRQcmV2aWV3SW5zZXJ0aW9uUG9pbnQoZG9jdW1lbnRSZWY6IGFueSwgc2hhZG93Um9vdDogU2hhZG93Um9vdCB8IG51bGwpOiBIVE1MRWxlbWVudCB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGUgYm9keSBpZiB0aGUgdXNlciBpcyBpbiBmdWxsc2NyZWVuIG1vZGUsXG4gIC8vIGJlY2F1c2UgdGhlIHByZXZpZXcgd2lsbCByZW5kZXIgdW5kZXIgdGhlIGZ1bGxzY3JlZW4gZWxlbWVudC5cbiAgLy8gVE9ETyhjcmlzYmV0byk6IGRlZHVwZSB0aGlzIHdpdGggdGhlIGBGdWxsc2NyZWVuT3ZlcmxheUNvbnRhaW5lcmAgZXZlbnR1YWxseS5cbiAgcmV0dXJuIHNoYWRvd1Jvb3QgfHxcbiAgICAgICAgIGRvY3VtZW50UmVmLmZ1bGxzY3JlZW5FbGVtZW50IHx8XG4gICAgICAgICBkb2N1bWVudFJlZi53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCB8fFxuICAgICAgICAgZG9jdW1lbnRSZWYubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgIGRvY3VtZW50UmVmLm1zRnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgIGRvY3VtZW50UmVmLmJvZHk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgcm9vdCBIVE1MIGVsZW1lbnQgb2YgYW4gZW1iZWRkZWQgdmlldy5cbiAqIElmIHRoZSByb290IGlzIG5vdCBhbiBIVE1MIGVsZW1lbnQgaXQgZ2V0cyB3cmFwcGVkIGluIG9uZS5cbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdE5vZGUodmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPGFueT4sIF9kb2N1bWVudDogRG9jdW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IHJvb3ROb2RlczogTm9kZVtdID0gdmlld1JlZi5yb290Tm9kZXM7XG5cbiAgaWYgKHJvb3ROb2Rlcy5sZW5ndGggPT09IDEgJiYgcm9vdE5vZGVzWzBdLm5vZGVUeXBlID09PSBfZG9jdW1lbnQuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0IHdyYXBwZXIgPSBfZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvb3ROb2Rlcy5mb3JFYWNoKG5vZGUgPT4gd3JhcHBlci5hcHBlbmRDaGlsZChub2RlKSk7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG4vKipcbiAqIE1hdGNoZXMgdGhlIHRhcmdldCBlbGVtZW50J3Mgc2l6ZSB0byB0aGUgc291cmNlJ3Mgc2l6ZS5cbiAqIEBwYXJhbSB0YXJnZXQgRWxlbWVudCB0aGF0IG5lZWRzIHRvIGJlIHJlc2l6ZWQuXG4gKiBAcGFyYW0gc291cmNlUmVjdCBEaW1lbnNpb25zIG9mIHRoZSBzb3VyY2UgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hFbGVtZW50U2l6ZSh0YXJnZXQ6IEhUTUxFbGVtZW50LCBzb3VyY2VSZWN0OiBDbGllbnRSZWN0KTogdm9pZCB7XG4gIHRhcmdldC5zdHlsZS53aWR0aCA9IGAke3NvdXJjZVJlY3Qud2lkdGh9cHhgO1xuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7c291cmNlUmVjdC5oZWlnaHR9cHhgO1xuICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gZ2V0VHJhbnNmb3JtKHNvdXJjZVJlY3QubGVmdCwgc291cmNlUmVjdC50b3ApO1xufVxuIl19