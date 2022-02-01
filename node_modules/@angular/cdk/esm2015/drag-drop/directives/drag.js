/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';
import { ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, QueryList, SkipSelf, ViewContainerRef, ChangeDetectorRef, Self, } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty, coerceElement } from '@angular/cdk/coercion';
import { Observable, Subject, merge } from 'rxjs';
import { startWith, take, map, takeUntil, switchMap, tap } from 'rxjs/operators';
import { CDK_DRAG_HANDLE, CdkDragHandle } from './drag-handle';
import { CDK_DRAG_PLACEHOLDER, CdkDragPlaceholder } from './drag-placeholder';
import { CDK_DRAG_PREVIEW, CdkDragPreview } from './drag-preview';
import { CDK_DRAG_PARENT } from '../drag-parent';
import { CDK_DROP_LIST } from './drop-list';
import { DragDrop } from '../drag-drop';
import { CDK_DRAG_CONFIG } from './config';
import { assertElementNode } from './assertions';
const DRAG_HOST_CLASS = 'cdk-drag';
/** Element that can be moved inside a CdkDropList container. */
export class CdkDrag {
    constructor(
    /** Element that the draggable is attached to. */
    element, 
    /** Droppable container that the draggable is a part of. */
    dropContainer, 
    /**
     * @deprecated `_document` parameter no longer being used and will be removed.
     * @breaking-change 12.0.0
     */
    _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
        this.element = element;
        this.dropContainer = dropContainer;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._selfHandle = _selfHandle;
        this._parentDrag = _parentDrag;
        this._destroyed = new Subject();
        /** Emits when the user starts dragging the item. */
        this.started = new EventEmitter();
        /** Emits when the user has released a drag item, before any animations have started. */
        this.released = new EventEmitter();
        /** Emits when the user stops dragging an item in the container. */
        this.ended = new EventEmitter();
        /** Emits when the user has moved the item into a new container. */
        this.entered = new EventEmitter();
        /** Emits when the user removes the item its container by dragging it into another container. */
        this.exited = new EventEmitter();
        /** Emits when the user drops the item inside a container. */
        this.dropped = new EventEmitter();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new Observable((observer) => {
            const subscription = this._dragRef.moved.pipe(map(movedEvent => ({
                source: this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta,
                distance: movedEvent.distance
            }))).subscribe(observer);
            return () => {
                subscription.unsubscribe();
            };
        });
        this._dragRef = dragDrop.createDrag(element, {
            dragStartThreshold: config && config.dragStartThreshold != null ?
                config.dragStartThreshold : 5,
            pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ?
                config.pointerDirectionChangeThreshold : 5,
            zIndex: config === null || config === void 0 ? void 0 : config.zIndex,
        });
        this._dragRef.data = this;
        // We have to keep track of the drag instances in order to be able to match an element to
        // a drag instance. We can't go through the global registry of `DragRef`, because the root
        // element could be different.
        CdkDrag._dragInstances.push(this);
        if (config) {
            this._assignDefaults(config);
        }
        // Note that usually the container is assigned when the drop list is picks up the item, but in
        // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
        // where there are no items on the first change detection pass, but the items get picked up as
        // soon as the user triggers another pass by dragging. This is a problem, because the item would
        // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
        // is too late since the two modes save different kinds of information. We work around it by
        // assigning the drop container both from here and the list.
        if (dropContainer) {
            this._dragRef._withDropContainer(dropContainer._dropListRef);
            dropContainer.addItem(this);
        }
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    /** Whether starting to drag this element is disabled. */
    get disabled() {
        return this._disabled || (this.dropContainer && this.dropContainer.disabled);
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._dragRef.disabled = this._disabled;
    }
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    getPlaceholderElement() {
        return this._dragRef.getPlaceholderElement();
    }
    /** Returns the root draggable element. */
    getRootElement() {
        return this._dragRef.getRootElement();
    }
    /** Resets a standalone drag item to its initial position. */
    reset() {
        this._dragRef.reset();
    }
    /**
     * Gets the pixel coordinates of the draggable outside of a drop container.
     */
    getFreeDragPosition() {
        return this._dragRef.getFreeDragPosition();
    }
    ngAfterViewInit() {
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable
            .pipe(take(1), takeUntil(this._destroyed))
            .subscribe(() => {
            this._updateRootElement();
            // Listen for any newly-added handles.
            this._handles.changes.pipe(startWith(this._handles), 
            // Sync the new handles with the DragRef.
            tap((handles) => {
                const childHandleElements = handles
                    .filter(handle => handle._parentDrag === this)
                    .map(handle => handle.element);
                // Usually handles are only allowed to be a descendant of the drag element, but if
                // the consumer defined a different drag root, we should allow the drag element
                // itself to be a handle too.
                if (this._selfHandle && this.rootElementSelector) {
                    childHandleElements.push(this.element);
                }
                this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            switchMap((handles) => {
                return merge(...handles.map(item => {
                    return item._stateChanges.pipe(startWith(item));
                }));
            }), takeUntil(this._destroyed)).subscribe(handleInstance => {
                // Enabled/disable the handle that changed in the DragRef.
                const dragRef = this._dragRef;
                const handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
            if (this.freeDragPosition) {
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
            }
        });
    }
    ngOnChanges(changes) {
        const rootSelectorChange = changes['rootElementSelector'];
        const positionChange = changes['freeDragPosition'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
        // Skip the first change since it's being handled in `ngAfterViewInit`.
        if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
            this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
    }
    ngOnDestroy() {
        if (this.dropContainer) {
            this.dropContainer.removeItem(this);
        }
        const index = CdkDrag._dragInstances.indexOf(this);
        if (index > -1) {
            CdkDrag._dragInstances.splice(index, 1);
        }
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    }
    /** Syncs the root element with the `DragRef`. */
    _updateRootElement() {
        const element = this.element.nativeElement;
        const rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            assertElementNode(rootElement, 'cdkDrag');
        }
        this._dragRef.withRootElement(rootElement || element);
    }
    /** Gets the boundary element, based on the `boundaryElement` value. */
    _getBoundaryElement() {
        const boundary = this.boundaryElement;
        if (!boundary) {
            return null;
        }
        if (typeof boundary === 'string') {
            return getClosestMatchingAncestor(this.element.nativeElement, boundary);
        }
        const element = coerceElement(boundary);
        if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
            !element.contains(this.element.nativeElement)) {
            throw Error('Draggable element is not inside of the node passed into cdkDragBoundary.');
        }
        return element;
    }
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    _syncInputs(ref) {
        ref.beforeStarted.subscribe(() => {
            if (!ref.isDragging()) {
                const dir = this._dir;
                const dragStartDelay = this.dragStartDelay;
                const placeholder = this._placeholderTemplate ? {
                    template: this._placeholderTemplate.templateRef,
                    context: this._placeholderTemplate.data,
                    viewContainer: this._viewContainerRef
                } : null;
                const preview = this._previewTemplate ? {
                    template: this._previewTemplate.templateRef,
                    context: this._previewTemplate.data,
                    matchSize: this._previewTemplate.matchSize,
                    viewContainer: this._viewContainerRef
                } : null;
                ref.disabled = this.disabled;
                ref.lockAxis = this.lockAxis;
                ref.dragStartDelay = (typeof dragStartDelay === 'object' && dragStartDelay) ?
                    dragStartDelay : coerceNumberProperty(dragStartDelay);
                ref.constrainPosition = this.constrainPosition;
                ref.previewClass = this.previewClass;
                ref
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
        // This only needs to be resolved once.
        ref.beforeStarted.pipe(take(1)).subscribe(() => {
            var _a, _b;
            // If we managed to resolve a parent through DI, use it.
            if (this._parentDrag) {
                ref.withParent(this._parentDrag._dragRef);
                return;
            }
            // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
            // the item was projected into another item by something like `ngTemplateOutlet`.
            let parent = this.element.nativeElement.parentElement;
            while (parent) {
                // `classList` needs to be null checked, because IE doesn't have it on some elements.
                if ((_a = parent.classList) === null || _a === void 0 ? void 0 : _a.contains(DRAG_HOST_CLASS)) {
                    ref.withParent(((_b = CdkDrag._dragInstances.find(drag => {
                        return drag.element.nativeElement === parent;
                    })) === null || _b === void 0 ? void 0 : _b._dragRef) || null);
                    break;
                }
                parent = parent.parentElement;
            }
        });
    }
    /** Handles the events from the underlying `DragRef`. */
    _handleEvents(ref) {
        ref.started.subscribe(() => {
            this.started.emit({ source: this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.released.subscribe(() => {
            this.released.emit({ source: this });
        });
        ref.ended.subscribe(event => {
            this.ended.emit({ source: this, distance: event.distance });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(event => {
            this.entered.emit({
                container: event.container.data,
                item: this,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(event => {
            this.exited.emit({
                container: event.container.data,
                item: this
            });
        });
        ref.dropped.subscribe(event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: this,
                distance: event.distance
            });
        });
    }
    /** Assigns the default input values based on a provided config object. */
    _assignDefaults(config) {
        const { lockAxis, dragStartDelay, constrainPosition, previewClass, boundaryElement, draggingDisabled, rootElementSelector } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.dragStartDelay = dragStartDelay || 0;
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
        if (constrainPosition) {
            this.constrainPosition = constrainPosition;
        }
        if (previewClass) {
            this.previewClass = previewClass;
        }
        if (boundaryElement) {
            this.boundaryElement = boundaryElement;
        }
        if (rootElementSelector) {
            this.rootElementSelector = rootElementSelector;
        }
    }
}
CdkDrag._dragInstances = [];
CdkDrag.decorators = [
    { type: Directive, args: [{
                selector: '[cdkDrag]',
                exportAs: 'cdkDrag',
                host: {
                    'class': DRAG_HOST_CLASS,
                    '[class.cdk-drag-disabled]': 'disabled',
                    '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                },
                providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
            },] }
];
CdkDrag.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_DROP_LIST,] }, { type: Optional }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_DRAG_CONFIG,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: DragDrop },
    { type: ChangeDetectorRef },
    { type: CdkDragHandle, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [CDK_DRAG_HANDLE,] }] },
    { type: CdkDrag, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [CDK_DRAG_PARENT,] }] }
];
CdkDrag.propDecorators = {
    _handles: [{ type: ContentChildren, args: [CDK_DRAG_HANDLE, { descendants: true },] }],
    _previewTemplate: [{ type: ContentChild, args: [CDK_DRAG_PREVIEW,] }],
    _placeholderTemplate: [{ type: ContentChild, args: [CDK_DRAG_PLACEHOLDER,] }],
    data: [{ type: Input, args: ['cdkDragData',] }],
    lockAxis: [{ type: Input, args: ['cdkDragLockAxis',] }],
    rootElementSelector: [{ type: Input, args: ['cdkDragRootElement',] }],
    boundaryElement: [{ type: Input, args: ['cdkDragBoundary',] }],
    dragStartDelay: [{ type: Input, args: ['cdkDragStartDelay',] }],
    freeDragPosition: [{ type: Input, args: ['cdkDragFreeDragPosition',] }],
    disabled: [{ type: Input, args: ['cdkDragDisabled',] }],
    constrainPosition: [{ type: Input, args: ['cdkDragConstrainPosition',] }],
    previewClass: [{ type: Input, args: ['cdkDragPreviewClass',] }],
    started: [{ type: Output, args: ['cdkDragStarted',] }],
    released: [{ type: Output, args: ['cdkDragReleased',] }],
    ended: [{ type: Output, args: ['cdkDragEnded',] }],
    entered: [{ type: Output, args: ['cdkDragEntered',] }],
    exited: [{ type: Output, args: ['cdkDragExited',] }],
    dropped: [{ type: Output, args: ['cdkDragDropped',] }],
    moved: [{ type: Output, args: ['cdkDragMoved',] }]
};
/** Gets the closest ancestor of an element that matches a selector. */
function getClosestMatchingAncestor(element, selector) {
    let currentElement = element.parentElement;
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            currentElement.msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvZHJhZy1kcm9wL2RpcmVjdGl2ZXMvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCxZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixnQkFBZ0IsRUFHaEIsaUJBQWlCLEVBQ2pCLElBQUksR0FDTCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixhQUFhLEVBRWQsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUMsVUFBVSxFQUFZLE9BQU8sRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFVL0UsT0FBTyxFQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFFLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDNUUsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQUMsYUFBYSxFQUFxQyxNQUFNLGFBQWEsQ0FBQztB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QkFPdkIsTUFBTSxTQUFDLGNBQWM7O0FBMFZ4Qix1RUFBdUU7QUFDdkUsU0FBUywwQkFBMEIsQ0FBQyxPQUFvQixFQUFFLFFBQWdCO0lBQ3hFLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxhQUFtQyxDQUFDO0lBRWpFLE9BQU8sY0FBYyxFQUFFO1FBQ3JCLCtFQUErRTtRQUMvRSxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxRCxjQUFzQixDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZELE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUM7S0FDL0M7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2tpcFNlbGYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBjb2VyY2VOdW1iZXJQcm9wZXJ0eSxcbiAgY29lcmNlRWxlbWVudCxcbiAgQm9vbGVhbklucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0LCBtZXJnZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgdGFrZSwgbWFwLCB0YWtlVW50aWwsIHN3aXRjaE1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcCxcbiAgQ2RrRHJhZ0VuZCxcbiAgQ2RrRHJhZ0VudGVyLFxuICBDZGtEcmFnRXhpdCxcbiAgQ2RrRHJhZ01vdmUsXG4gIENka0RyYWdTdGFydCxcbiAgQ2RrRHJhZ1JlbGVhc2UsXG59IGZyb20gJy4uL2RyYWctZXZlbnRzJztcbmltcG9ydCB7Q0RLX0RSQUdfSEFORExFLCBDZGtEcmFnSGFuZGxlfSBmcm9tICcuL2RyYWctaGFuZGxlJztcbmltcG9ydCB7Q0RLX0RSQUdfUExBQ0VIT0xERVIsIENka0RyYWdQbGFjZWhvbGRlcn0gZnJvbSAnLi9kcmFnLXBsYWNlaG9sZGVyJztcbmltcG9ydCB7Q0RLX0RSQUdfUFJFVklFVywgQ2RrRHJhZ1ByZXZpZXd9IGZyb20gJy4vZHJhZy1wcmV2aWV3JztcbmltcG9ydCB7Q0RLX0RSQUdfUEFSRU5UfSBmcm9tICcuLi9kcmFnLXBhcmVudCc7XG5pbXBvcnQge0RyYWdSZWYsIFBvaW50fSBmcm9tICcuLi9kcmFnLXJlZic7XG5pbXBvcnQge0NES19EUk9QX0xJU1QsIENka0Ryb3BMaXN0SW50ZXJuYWwgYXMgQ2RrRHJvcExpc3R9IGZyb20gJy4vZHJvcC1saXN0JztcbmltcG9ydCB7RHJhZ0Ryb3B9IGZyb20gJy4uL2RyYWctZHJvcCc7XG5pbXBvcnQge0NES19EUkFHX0NPTkZJRywgRHJhZ0Ryb3BDb25maWcsIERyYWdTdGFydERlbGF5LCBEcmFnQXhpc30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHthc3NlcnRFbGVtZW50Tm9kZX0gZnJvbSAnLi9hc3NlcnRpb25zJztcblxuY29uc3QgRFJBR19IT1NUX0NMQVNTID0gJ2Nkay1kcmFnJztcblxuLyoqIEVsZW1lbnQgdGhhdCBjYW4gYmUgbW92ZWQgaW5zaWRlIGEgQ2RrRHJvcExpc3QgY29udGFpbmVyLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0RyYWddJyxcbiAgZXhwb3J0QXM6ICdjZGtEcmFnJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6IERSQUdfSE9TVF9DTEFTUyxcbiAgICAnW2NsYXNzLmNkay1kcmFnLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5jZGstZHJhZy1kcmFnZ2luZ10nOiAnX2RyYWdSZWYuaXNEcmFnZ2luZygpJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENES19EUkFHX1BBUkVOVCwgdXNlRXhpc3Rpbmc6IENka0RyYWd9XVxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnPFQgPSBhbnk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHN0YXRpYyBfZHJhZ0luc3RhbmNlczogQ2RrRHJhZ1tdID0gW107XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBkcmFnIGluc3RhbmNlLiAqL1xuICBfZHJhZ1JlZjogRHJhZ1JlZjxDZGtEcmFnPFQ+PjtcblxuICAvKiogRWxlbWVudHMgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmFnIHRoZSBkcmFnZ2FibGUgaXRlbS4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDREtfRFJBR19IQU5ETEUsIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9oYW5kbGVzOiBRdWVyeUxpc3Q8Q2RrRHJhZ0hhbmRsZT47XG5cbiAgLyoqIEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgYSB0ZW1wbGF0ZSB0byBjcmVhdGUgdGhlIGRyYWdnYWJsZSBpdGVtJ3MgcHJldmlldy4gKi9cbiAgQENvbnRlbnRDaGlsZChDREtfRFJBR19QUkVWSUVXKSBfcHJldmlld1RlbXBsYXRlOiBDZGtEcmFnUHJldmlldztcblxuICAvKiogVGVtcGxhdGUgZm9yIHBsYWNlaG9sZGVyIGVsZW1lbnQgcmVuZGVyZWQgdG8gc2hvdyB3aGVyZSBhIGRyYWdnYWJsZSB3b3VsZCBiZSBkcm9wcGVkLiAqL1xuICBAQ29udGVudENoaWxkKENES19EUkFHX1BMQUNFSE9MREVSKSBfcGxhY2Vob2xkZXJUZW1wbGF0ZTogQ2RrRHJhZ1BsYWNlaG9sZGVyO1xuXG4gIC8qKiBBcmJpdHJhcnkgZGF0YSB0byBhdHRhY2ggdG8gdGhpcyBkcmFnIGluc3RhbmNlLiAqL1xuICBASW5wdXQoJ2Nka0RyYWdEYXRhJykgZGF0YTogVDtcblxuICAvKiogTG9ja3MgdGhlIHBvc2l0aW9uIG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgYWxvbmcgdGhlIHNwZWNpZmllZCBheGlzLiAqL1xuICBASW5wdXQoJ2Nka0RyYWdMb2NrQXhpcycpIGxvY2tBeGlzOiBEcmFnQXhpcztcblxuICAvKipcbiAgICogU2VsZWN0b3IgdGhhdCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSByb290IGRyYWdnYWJsZSBlbGVtZW50LCBzdGFydGluZyBmcm9tXG4gICAqIHRoZSBgY2RrRHJhZ2AgZWxlbWVudCBhbmQgZ29pbmcgdXAgdGhlIERPTS4gUGFzc2luZyBhbiBhbHRlcm5hdGUgcm9vdCBlbGVtZW50IGlzIHVzZWZ1bFxuICAgKiB3aGVuIHRyeWluZyB0byBlbmFibGUgZHJhZ2dpbmcgb24gYW4gZWxlbWVudCB0aGF0IHlvdSBtaWdodCBub3QgaGF2ZSBhY2Nlc3MgdG8uXG4gICAqL1xuICBASW5wdXQoJ2Nka0RyYWdSb290RWxlbWVudCcpIHJvb3RFbGVtZW50U2VsZWN0b3I6IHN0cmluZztcblxuICAvKipcbiAgICogTm9kZSBvciBzZWxlY3RvciB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIGRyYWdnYWJsZSdzXG4gICAqIHBvc2l0aW9uIHdpbGwgYmUgY29uc3RyYWluZWQuIElmIGEgc3RyaW5nIGlzIHBhc3NlZCBpbiwgaXQnbGwgYmUgdXNlZCBhcyBhIHNlbGVjdG9yIHRoYXRcbiAgICogd2lsbCBiZSBtYXRjaGVkIHN0YXJ0aW5nIGZyb20gdGhlIGVsZW1lbnQncyBwYXJlbnQgYW5kIGdvaW5nIHVwIHRoZSBET00gdW50aWwgYSBtYXRjaFxuICAgKiBoYXMgYmVlbiBmb3VuZC5cbiAgICovXG4gIEBJbnB1dCgnY2RrRHJhZ0JvdW5kYXJ5JykgYm91bmRhcnlFbGVtZW50OiBzdHJpbmcgfCBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYWZ0ZXIgdGhlIHVzZXIgaGFzIHB1dCB0aGVpclxuICAgKiBwb2ludGVyIGRvd24gYmVmb3JlIHN0YXJ0aW5nIHRvIGRyYWcgdGhlIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ2Nka0RyYWdTdGFydERlbGF5JykgZHJhZ1N0YXJ0RGVsYXk6IERyYWdTdGFydERlbGF5O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwb3NpdGlvbiBvZiBhIGBDZGtEcmFnYCB0aGF0IGlzIG91dHNpZGUgb2YgYSBkcm9wIGNvbnRhaW5lci5cbiAgICogQ2FuIGJlIHVzZWQgdG8gcmVzdG9yZSB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIGZvciBhIHJldHVybmluZyB1c2VyLlxuICAgKi9cbiAgQElucHV0KCdjZGtEcmFnRnJlZURyYWdQb3NpdGlvbicpIGZyZWVEcmFnUG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG5cbiAgLyoqIFdoZXRoZXIgc3RhcnRpbmcgdG8gZHJhZyB0aGlzIGVsZW1lbnQgaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgnY2RrRHJhZ0Rpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAodGhpcy5kcm9wQ29udGFpbmVyICYmIHRoaXMuZHJvcENvbnRhaW5lci5kaXNhYmxlZCk7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX2RyYWdSZWYuZGlzYWJsZWQgPSB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIGxvZ2ljIG9mIGhvdyB0aGUgcG9zaXRpb24gb2YgdGhlIGRyYWcgaXRlbVxuICAgKiBpcyBsaW1pdGVkIHdoaWxlIGl0J3MgYmVpbmcgZHJhZ2dlZC4gR2V0cyBjYWxsZWQgd2l0aCBhIHBvaW50IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICogb2YgdGhlIHVzZXIncyBwb2ludGVyIG9uIHRoZSBwYWdlIGFuZCBzaG91bGQgcmV0dXJuIGEgcG9pbnQgZGVzY3JpYmluZyB3aGVyZSB0aGUgaXRlbSBzaG91bGRcbiAgICogYmUgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2Nka0RyYWdDb25zdHJhaW5Qb3NpdGlvbicpIGNvbnN0cmFpblBvc2l0aW9uPzogKHBvaW50OiBQb2ludCwgZHJhZ1JlZjogRHJhZ1JlZikgPT4gUG9pbnQ7XG5cbiAgLyoqIENsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBwcmV2aWV3IGVsZW1lbnQuICovXG4gIEBJbnB1dCgnY2RrRHJhZ1ByZXZpZXdDbGFzcycpIHByZXZpZXdDbGFzczogc3RyaW5nIHwgc3RyaW5nW107XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIHRoZSBpdGVtLiAqL1xuICBAT3V0cHV0KCdjZGtEcmFnU3RhcnRlZCcpIHN0YXJ0ZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnU3RhcnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnU3RhcnQ+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgaGFzIHJlbGVhc2VkIGEgZHJhZyBpdGVtLCBiZWZvcmUgYW55IGFuaW1hdGlvbnMgaGF2ZSBzdGFydGVkLiAqL1xuICBAT3V0cHV0KCdjZGtEcmFnUmVsZWFzZWQnKSByZWxlYXNlZDogRXZlbnRFbWl0dGVyPENka0RyYWdSZWxlYXNlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdSZWxlYXNlPigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIHN0b3BzIGRyYWdnaW5nIGFuIGl0ZW0gaW4gdGhlIGNvbnRhaW5lci4gKi9cbiAgQE91dHB1dCgnY2RrRHJhZ0VuZGVkJykgZW5kZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRW5kPiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0VuZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgdXNlciBoYXMgbW92ZWQgdGhlIGl0ZW0gaW50byBhIG5ldyBjb250YWluZXIuICovXG4gIEBPdXRwdXQoJ2Nka0RyYWdFbnRlcmVkJykgZW50ZXJlZDogRXZlbnRFbWl0dGVyPENka0RyYWdFbnRlcjxhbnk+PiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdFbnRlcjxhbnk+PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIHJlbW92ZXMgdGhlIGl0ZW0gaXRzIGNvbnRhaW5lciBieSBkcmFnZ2luZyBpdCBpbnRvIGFub3RoZXIgY29udGFpbmVyLiAqL1xuICBAT3V0cHV0KCdjZGtEcmFnRXhpdGVkJykgZXhpdGVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0V4aXQ8YW55Pj4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnRXhpdDxhbnk+PigpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGRyb3BzIHRoZSBpdGVtIGluc2lkZSBhIGNvbnRhaW5lci4gKi9cbiAgQE91dHB1dCgnY2RrRHJhZ0Ryb3BwZWQnKSBkcm9wcGVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0Ryb3A8YW55Pj4gPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnRHJvcDxhbnk+PigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhcyB0aGUgdXNlciBpcyBkcmFnZ2luZyB0aGUgaXRlbS4gVXNlIHdpdGggY2F1dGlvbixcbiAgICogYmVjYXVzZSB0aGlzIGV2ZW50IHdpbGwgZmlyZSBmb3IgZXZlcnkgcGl4ZWwgdGhhdCB0aGUgdXNlciBoYXMgZHJhZ2dlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2Nka0RyYWdNb3ZlZCcpIG1vdmVkOiBPYnNlcnZhYmxlPENka0RyYWdNb3ZlPFQ+PiA9XG4gICAgICBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPENka0RyYWdNb3ZlPFQ+PikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLl9kcmFnUmVmLm1vdmVkLnBpcGUobWFwKG1vdmVkRXZlbnQgPT4gKHtcbiAgICAgICAgICBzb3VyY2U6IHRoaXMsXG4gICAgICAgICAgcG9pbnRlclBvc2l0aW9uOiBtb3ZlZEV2ZW50LnBvaW50ZXJQb3NpdGlvbixcbiAgICAgICAgICBldmVudDogbW92ZWRFdmVudC5ldmVudCxcbiAgICAgICAgICBkZWx0YTogbW92ZWRFdmVudC5kZWx0YSxcbiAgICAgICAgICBkaXN0YW5jZTogbW92ZWRFdmVudC5kaXN0YW5jZVxuICAgICAgICB9KSkpLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEVsZW1lbnQgdGhhdCB0aGUgZHJhZ2dhYmxlIGlzIGF0dGFjaGVkIHRvLiAqL1xuICAgICAgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgICAgLyoqIERyb3BwYWJsZSBjb250YWluZXIgdGhhdCB0aGUgZHJhZ2dhYmxlIGlzIGEgcGFydCBvZi4gKi9cbiAgICAgIEBJbmplY3QoQ0RLX0RST1BfTElTVCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGRyb3BDb250YWluZXI6IENka0Ryb3BMaXN0LFxuICAgICAgLyoqXG4gICAgICAgKiBAZGVwcmVjYXRlZCBgX2RvY3VtZW50YCBwYXJhbWV0ZXIgbm8gbG9uZ2VyIGJlaW5nIHVzZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgICAqIEBicmVha2luZy1jaGFuZ2UgMTIuMC4wXG4gICAgICAgKi9cbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KENES19EUkFHX0NPTkZJRykgY29uZmlnOiBEcmFnRHJvcENvbmZpZyxcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksIGRyYWdEcm9wOiBEcmFnRHJvcCxcbiAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgQEluamVjdChDREtfRFJBR19IQU5ETEUpIHByaXZhdGUgX3NlbGZIYW5kbGU/OiBDZGtEcmFnSGFuZGxlLFxuICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgQEluamVjdChDREtfRFJBR19QQVJFTlQpIHByaXZhdGUgX3BhcmVudERyYWc/OiBDZGtEcmFnKSB7XG4gICAgdGhpcy5fZHJhZ1JlZiA9IGRyYWdEcm9wLmNyZWF0ZURyYWcoZWxlbWVudCwge1xuICAgICAgZHJhZ1N0YXJ0VGhyZXNob2xkOiBjb25maWcgJiYgY29uZmlnLmRyYWdTdGFydFRocmVzaG9sZCAhPSBudWxsID9cbiAgICAgICAgICBjb25maWcuZHJhZ1N0YXJ0VGhyZXNob2xkIDogNSxcbiAgICAgIHBvaW50ZXJEaXJlY3Rpb25DaGFuZ2VUaHJlc2hvbGQ6IGNvbmZpZyAmJiBjb25maWcucG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZCAhPSBudWxsID9cbiAgICAgICAgICBjb25maWcucG9pbnRlckRpcmVjdGlvbkNoYW5nZVRocmVzaG9sZCA6IDUsXG4gICAgICB6SW5kZXg6IGNvbmZpZz8uekluZGV4LFxuICAgIH0pO1xuICAgIHRoaXMuX2RyYWdSZWYuZGF0YSA9IHRoaXM7XG5cbiAgICAvLyBXZSBoYXZlIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGRyYWcgaW5zdGFuY2VzIGluIG9yZGVyIHRvIGJlIGFibGUgdG8gbWF0Y2ggYW4gZWxlbWVudCB0b1xuICAgIC8vIGEgZHJhZyBpbnN0YW5jZS4gV2UgY2FuJ3QgZ28gdGhyb3VnaCB0aGUgZ2xvYmFsIHJlZ2lzdHJ5IG9mIGBEcmFnUmVmYCwgYmVjYXVzZSB0aGUgcm9vdFxuICAgIC8vIGVsZW1lbnQgY291bGQgYmUgZGlmZmVyZW50LlxuICAgIENka0RyYWcuX2RyYWdJbnN0YW5jZXMucHVzaCh0aGlzKTtcblxuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuX2Fzc2lnbkRlZmF1bHRzKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8gTm90ZSB0aGF0IHVzdWFsbHkgdGhlIGNvbnRhaW5lciBpcyBhc3NpZ25lZCB3aGVuIHRoZSBkcm9wIGxpc3QgaXMgcGlja3MgdXAgdGhlIGl0ZW0sIGJ1dCBpblxuICAgIC8vIHNvbWUgY2FzZXMgKG1haW5seSB0cmFuc3BsYW50ZWQgdmlld3Mgd2l0aCBPblB1c2gsIHNlZSAjMTgzNDEpIHdlIG1heSBlbmQgdXAgaW4gYSBzaXR1YXRpb25cbiAgICAvLyB3aGVyZSB0aGVyZSBhcmUgbm8gaXRlbXMgb24gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gcGFzcywgYnV0IHRoZSBpdGVtcyBnZXQgcGlja2VkIHVwIGFzXG4gICAgLy8gc29vbiBhcyB0aGUgdXNlciB0cmlnZ2VycyBhbm90aGVyIHBhc3MgYnkgZHJhZ2dpbmcuIFRoaXMgaXMgYSBwcm9ibGVtLCBiZWNhdXNlIHRoZSBpdGVtIHdvdWxkXG4gICAgLy8gaGF2ZSB0byBzd2l0Y2ggZnJvbSBzdGFuZGFsb25lIG1vZGUgdG8gZHJhZyBtb2RlIGluIHRoZSBtaWRkbGUgb2YgdGhlIGRyYWdnaW5nIHNlcXVlbmNlIHdoaWNoXG4gICAgLy8gaXMgdG9vIGxhdGUgc2luY2UgdGhlIHR3byBtb2RlcyBzYXZlIGRpZmZlcmVudCBraW5kcyBvZiBpbmZvcm1hdGlvbi4gV2Ugd29yayBhcm91bmQgaXQgYnlcbiAgICAvLyBhc3NpZ25pbmcgdGhlIGRyb3AgY29udGFpbmVyIGJvdGggZnJvbSBoZXJlIGFuZCB0aGUgbGlzdC5cbiAgICBpZiAoZHJvcENvbnRhaW5lcikge1xuICAgICAgdGhpcy5fZHJhZ1JlZi5fd2l0aERyb3BDb250YWluZXIoZHJvcENvbnRhaW5lci5fZHJvcExpc3RSZWYpO1xuICAgICAgZHJvcENvbnRhaW5lci5hZGRJdGVtKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX3N5bmNJbnB1dHModGhpcy5fZHJhZ1JlZik7XG4gICAgdGhpcy5faGFuZGxlRXZlbnRzKHRoaXMuX2RyYWdSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyB1c2VkIGFzIGEgcGxhY2Vob2xkZXJcbiAgICogd2hpbGUgdGhlIGN1cnJlbnQgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkLlxuICAgKi9cbiAgZ2V0UGxhY2Vob2xkZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZHJhZ1JlZi5nZXRQbGFjZWhvbGRlckVsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSByb290IGRyYWdnYWJsZSBlbGVtZW50LiAqL1xuICBnZXRSb290RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYWdSZWYuZ2V0Um9vdEVsZW1lbnQoKTtcbiAgfVxuXG4gIC8qKiBSZXNldHMgYSBzdGFuZGFsb25lIGRyYWcgaXRlbSB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbi4gKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fZHJhZ1JlZi5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHBpeGVsIGNvb3JkaW5hdGVzIG9mIHRoZSBkcmFnZ2FibGUgb3V0c2lkZSBvZiBhIGRyb3AgY29udGFpbmVyLlxuICAgKi9cbiAgZ2V0RnJlZURyYWdQb3NpdGlvbigpOiB7cmVhZG9ubHkgeDogbnVtYmVyLCByZWFkb25seSB5OiBudW1iZXJ9IHtcbiAgICByZXR1cm4gdGhpcy5fZHJhZ1JlZi5nZXRGcmVlRHJhZ1Bvc2l0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gV2UgbmVlZCB0byB3YWl0IGZvciB0aGUgem9uZSB0byBzdGFiaWxpemUsIGluIG9yZGVyIGZvciB0aGUgcmVmZXJlbmNlXG4gICAgLy8gZWxlbWVudCB0byBiZSBpbiB0aGUgcHJvcGVyIHBsYWNlIGluIHRoZSBET00uIFRoaXMgaXMgbW9zdGx5IHJlbGV2YW50XG4gICAgLy8gZm9yIGRyYWdnYWJsZSBlbGVtZW50cyBpbnNpZGUgcG9ydGFscyBzaW5jZSB0aGV5IGdldCBzdGFtcGVkIG91dCBpblxuICAgIC8vIHRoZWlyIG9yaWdpbmFsIERPTSBwb3NpdGlvbiBhbmQgdGhlbiB0aGV5IGdldCB0cmFuc2ZlcnJlZCB0byB0aGUgcG9ydGFsLlxuICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZVxuICAgICAgLnBpcGUodGFrZSgxKSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUm9vdEVsZW1lbnQoKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGFueSBuZXdseS1hZGRlZCBoYW5kbGVzLlxuICAgICAgICB0aGlzLl9oYW5kbGVzLmNoYW5nZXMucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgodGhpcy5faGFuZGxlcyksXG4gICAgICAgICAgLy8gU3luYyB0aGUgbmV3IGhhbmRsZXMgd2l0aCB0aGUgRHJhZ1JlZi5cbiAgICAgICAgICB0YXAoKGhhbmRsZXM6IFF1ZXJ5TGlzdDxDZGtEcmFnSGFuZGxlPikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRIYW5kbGVFbGVtZW50cyA9IGhhbmRsZXNcbiAgICAgICAgICAgICAgLmZpbHRlcihoYW5kbGUgPT4gaGFuZGxlLl9wYXJlbnREcmFnID09PSB0aGlzKVxuICAgICAgICAgICAgICAubWFwKGhhbmRsZSA9PiBoYW5kbGUuZWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIFVzdWFsbHkgaGFuZGxlcyBhcmUgb25seSBhbGxvd2VkIHRvIGJlIGEgZGVzY2VuZGFudCBvZiB0aGUgZHJhZyBlbGVtZW50LCBidXQgaWZcbiAgICAgICAgICAgIC8vIHRoZSBjb25zdW1lciBkZWZpbmVkIGEgZGlmZmVyZW50IGRyYWcgcm9vdCwgd2Ugc2hvdWxkIGFsbG93IHRoZSBkcmFnIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0c2VsZiB0byBiZSBhIGhhbmRsZSB0b28uXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZkhhbmRsZSAmJiB0aGlzLnJvb3RFbGVtZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgY2hpbGRIYW5kbGVFbGVtZW50cy5wdXNoKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2RyYWdSZWYud2l0aEhhbmRsZXMoY2hpbGRIYW5kbGVFbGVtZW50cyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gTGlzdGVuIGlmIHRoZSBzdGF0ZSBvZiBhbnkgb2YgdGhlIGhhbmRsZXMgY2hhbmdlcy5cbiAgICAgICAgICBzd2l0Y2hNYXAoKGhhbmRsZXM6IFF1ZXJ5TGlzdDxDZGtEcmFnSGFuZGxlPikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlKC4uLmhhbmRsZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5fc3RhdGVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKGl0ZW0pKTtcbiAgICAgICAgICAgIH0pKSBhcyBPYnNlcnZhYmxlPENka0RyYWdIYW5kbGU+O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpXG4gICAgICAgICkuc3Vic2NyaWJlKGhhbmRsZUluc3RhbmNlID0+IHtcbiAgICAgICAgICAvLyBFbmFibGVkL2Rpc2FibGUgdGhlIGhhbmRsZSB0aGF0IGNoYW5nZWQgaW4gdGhlIERyYWdSZWYuXG4gICAgICAgICAgY29uc3QgZHJhZ1JlZiA9IHRoaXMuX2RyYWdSZWY7XG4gICAgICAgICAgY29uc3QgaGFuZGxlID0gaGFuZGxlSW5zdGFuY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGhhbmRsZUluc3RhbmNlLmRpc2FibGVkID8gZHJhZ1JlZi5kaXNhYmxlSGFuZGxlKGhhbmRsZSkgOiBkcmFnUmVmLmVuYWJsZUhhbmRsZShoYW5kbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5mcmVlRHJhZ1Bvc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHRoaXMuZnJlZURyYWdQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHJvb3RTZWxlY3RvckNoYW5nZSA9IGNoYW5nZXNbJ3Jvb3RFbGVtZW50U2VsZWN0b3InXTtcbiAgICBjb25zdCBwb3NpdGlvbkNoYW5nZSA9IGNoYW5nZXNbJ2ZyZWVEcmFnUG9zaXRpb24nXTtcblxuICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gcmVhY3QgdG8gdGhlIGZpcnN0IGNoYW5nZSBzaW5jZSBpdCdzIGJlaW5nXG4gICAgLy8gaGFuZGxlZCBpbiBgbmdBZnRlclZpZXdJbml0YCB3aGVyZSBpdCBuZWVkcyB0byBiZSBkZWZlcnJlZC5cbiAgICBpZiAocm9vdFNlbGVjdG9yQ2hhbmdlICYmICFyb290U2VsZWN0b3JDaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJvb3RFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgLy8gU2tpcCB0aGUgZmlyc3QgY2hhbmdlIHNpbmNlIGl0J3MgYmVpbmcgaGFuZGxlZCBpbiBgbmdBZnRlclZpZXdJbml0YC5cbiAgICBpZiAocG9zaXRpb25DaGFuZ2UgJiYgIXBvc2l0aW9uQ2hhbmdlLmZpcnN0Q2hhbmdlICYmIHRoaXMuZnJlZURyYWdQb3NpdGlvbikge1xuICAgICAgdGhpcy5fZHJhZ1JlZi5zZXRGcmVlRHJhZ1Bvc2l0aW9uKHRoaXMuZnJlZURyYWdQb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZHJvcENvbnRhaW5lcikge1xuICAgICAgdGhpcy5kcm9wQ29udGFpbmVyLnJlbW92ZUl0ZW0odGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBDZGtEcmFnLl9kcmFnSW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIENka0RyYWcuX2RyYWdJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kcmFnUmVmLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIC8qKiBTeW5jcyB0aGUgcm9vdCBlbGVtZW50IHdpdGggdGhlIGBEcmFnUmVmYC4gKi9cbiAgcHJpdmF0ZSBfdXBkYXRlUm9vdEVsZW1lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gdGhpcy5yb290RWxlbWVudFNlbGVjdG9yID9cbiAgICAgICAgZ2V0Q2xvc2VzdE1hdGNoaW5nQW5jZXN0b3IoZWxlbWVudCwgdGhpcy5yb290RWxlbWVudFNlbGVjdG9yKSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAocm9vdEVsZW1lbnQgJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIGFzc2VydEVsZW1lbnROb2RlKHJvb3RFbGVtZW50LCAnY2RrRHJhZycpO1xuICAgIH1cblxuICAgIHRoaXMuX2RyYWdSZWYud2l0aFJvb3RFbGVtZW50KHJvb3RFbGVtZW50IHx8IGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIGJvdW5kYXJ5IGVsZW1lbnQsIGJhc2VkIG9uIHRoZSBgYm91bmRhcnlFbGVtZW50YCB2YWx1ZS4gKi9cbiAgcHJpdmF0ZSBfZ2V0Qm91bmRhcnlFbGVtZW50KCkge1xuICAgIGNvbnN0IGJvdW5kYXJ5ID0gdGhpcy5ib3VuZGFyeUVsZW1lbnQ7XG5cbiAgICBpZiAoIWJvdW5kYXJ5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJvdW5kYXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGdldENsb3Nlc3RNYXRjaGluZ0FuY2VzdG9yKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBib3VuZGFyeSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGNvZXJjZUVsZW1lbnQoYm91bmRhcnkpO1xuXG4gICAgaWYgKCh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpICYmXG4gICAgICAhZWxlbWVudC5jb250YWlucyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRocm93IEVycm9yKCdEcmFnZ2FibGUgZWxlbWVudCBpcyBub3QgaW5zaWRlIG9mIHRoZSBub2RlIHBhc3NlZCBpbnRvIGNka0RyYWdCb3VuZGFyeS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8qKiBTeW5jcyB0aGUgaW5wdXRzIG9mIHRoZSBDZGtEcmFnIHdpdGggdGhlIG9wdGlvbnMgb2YgdGhlIHVuZGVybHlpbmcgRHJhZ1JlZi4gKi9cbiAgcHJpdmF0ZSBfc3luY0lucHV0cyhyZWY6IERyYWdSZWY8Q2RrRHJhZzxUPj4pIHtcbiAgICByZWYuYmVmb3JlU3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCFyZWYuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX2RpcjtcbiAgICAgICAgY29uc3QgZHJhZ1N0YXJ0RGVsYXkgPSB0aGlzLmRyYWdTdGFydERlbGF5O1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMuX3BsYWNlaG9sZGVyVGVtcGxhdGUgPyB7XG4gICAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3BsYWNlaG9sZGVyVGVtcGxhdGUudGVtcGxhdGVSZWYsXG4gICAgICAgICAgY29udGV4dDogdGhpcy5fcGxhY2Vob2xkZXJUZW1wbGF0ZS5kYXRhLFxuICAgICAgICAgIHZpZXdDb250YWluZXI6IHRoaXMuX3ZpZXdDb250YWluZXJSZWZcbiAgICAgICAgfSA6IG51bGw7XG4gICAgICAgIGNvbnN0IHByZXZpZXcgPSB0aGlzLl9wcmV2aWV3VGVtcGxhdGUgPyB7XG4gICAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3ByZXZpZXdUZW1wbGF0ZS50ZW1wbGF0ZVJlZixcbiAgICAgICAgICBjb250ZXh0OiB0aGlzLl9wcmV2aWV3VGVtcGxhdGUuZGF0YSxcbiAgICAgICAgICBtYXRjaFNpemU6IHRoaXMuX3ByZXZpZXdUZW1wbGF0ZS5tYXRjaFNpemUsXG4gICAgICAgICAgdmlld0NvbnRhaW5lcjogdGhpcy5fdmlld0NvbnRhaW5lclJlZlxuICAgICAgICB9IDogbnVsbDtcblxuICAgICAgICByZWYuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICByZWYubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xuICAgICAgICByZWYuZHJhZ1N0YXJ0RGVsYXkgPSAodHlwZW9mIGRyYWdTdGFydERlbGF5ID09PSAnb2JqZWN0JyAmJiBkcmFnU3RhcnREZWxheSkgP1xuICAgICAgICAgICAgZHJhZ1N0YXJ0RGVsYXkgOiBjb2VyY2VOdW1iZXJQcm9wZXJ0eShkcmFnU3RhcnREZWxheSk7XG4gICAgICAgIHJlZi5jb25zdHJhaW5Qb3NpdGlvbiA9IHRoaXMuY29uc3RyYWluUG9zaXRpb247XG4gICAgICAgIHJlZi5wcmV2aWV3Q2xhc3MgPSB0aGlzLnByZXZpZXdDbGFzcztcbiAgICAgICAgcmVmXG4gICAgICAgICAgLndpdGhCb3VuZGFyeUVsZW1lbnQodGhpcy5fZ2V0Qm91bmRhcnlFbGVtZW50KCkpXG4gICAgICAgICAgLndpdGhQbGFjZWhvbGRlclRlbXBsYXRlKHBsYWNlaG9sZGVyKVxuICAgICAgICAgIC53aXRoUHJldmlld1RlbXBsYXRlKHByZXZpZXcpO1xuXG4gICAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgICByZWYud2l0aERpcmVjdGlvbihkaXIudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIG9ubHkgbmVlZHMgdG8gYmUgcmVzb2x2ZWQgb25jZS5cbiAgICByZWYuYmVmb3JlU3RhcnRlZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyBJZiB3ZSBtYW5hZ2VkIHRvIHJlc29sdmUgYSBwYXJlbnQgdGhyb3VnaCBESSwgdXNlIGl0LlxuICAgICAgaWYgKHRoaXMuX3BhcmVudERyYWcpIHtcbiAgICAgICAgcmVmLndpdGhQYXJlbnQodGhpcy5fcGFyZW50RHJhZy5fZHJhZ1JlZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIGZhbGwgYmFjayB0byByZXNvbHZpbmcgdGhlIHBhcmVudCBieSBsb29raW5nIHVwIHRoZSBET00uIFRoaXMgY2FuIGhhcHBlbiBpZlxuICAgICAgLy8gdGhlIGl0ZW0gd2FzIHByb2plY3RlZCBpbnRvIGFub3RoZXIgaXRlbSBieSBzb21ldGhpbmcgbGlrZSBgbmdUZW1wbGF0ZU91dGxldGAuXG4gICAgICBsZXQgcGFyZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgLy8gYGNsYXNzTGlzdGAgbmVlZHMgdG8gYmUgbnVsbCBjaGVja2VkLCBiZWNhdXNlIElFIGRvZXNuJ3QgaGF2ZSBpdCBvbiBzb21lIGVsZW1lbnRzLlxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdD8uY29udGFpbnMoRFJBR19IT1NUX0NMQVNTKSkge1xuICAgICAgICAgIHJlZi53aXRoUGFyZW50KENka0RyYWcuX2RyYWdJbnN0YW5jZXMuZmluZChkcmFnID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkcmFnLmVsZW1lbnQubmF0aXZlRWxlbWVudCA9PT0gcGFyZW50O1xuICAgICAgICAgIH0pPy5fZHJhZ1JlZiB8fCBudWxsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIHRoZSBldmVudHMgZnJvbSB0aGUgdW5kZXJseWluZyBgRHJhZ1JlZmAuICovXG4gIHByaXZhdGUgX2hhbmRsZUV2ZW50cyhyZWY6IERyYWdSZWY8Q2RrRHJhZzxUPj4pIHtcbiAgICByZWYuc3RhcnRlZC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydGVkLmVtaXQoe3NvdXJjZTogdGhpc30pO1xuXG4gICAgICAvLyBTaW5jZSBhbGwgb2YgdGhlc2UgZXZlbnRzIHJ1biBvdXRzaWRlIG9mIGNoYW5nZSBkZXRlY3Rpb24sXG4gICAgICAvLyB3ZSBuZWVkIHRvIGVuc3VyZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgbWFya2VkIGNvcnJlY3RseS5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgcmVmLnJlbGVhc2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbGVhc2VkLmVtaXQoe3NvdXJjZTogdGhpc30pO1xuICAgIH0pO1xuXG4gICAgcmVmLmVuZGVkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICB0aGlzLmVuZGVkLmVtaXQoe3NvdXJjZTogdGhpcywgZGlzdGFuY2U6IGV2ZW50LmRpc3RhbmNlfSk7XG5cbiAgICAgIC8vIFNpbmNlIGFsbCBvZiB0aGVzZSBldmVudHMgcnVuIG91dHNpZGUgb2YgY2hhbmdlIGRldGVjdGlvbixcbiAgICAgIC8vIHdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgZXZlcnl0aGluZyBpcyBtYXJrZWQgY29ycmVjdGx5LlxuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICByZWYuZW50ZXJlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5lbnRlcmVkLmVtaXQoe1xuICAgICAgICBjb250YWluZXI6IGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICBpdGVtOiB0aGlzLFxuICAgICAgICBjdXJyZW50SW5kZXg6IGV2ZW50LmN1cnJlbnRJbmRleFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZWYuZXhpdGVkLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICB0aGlzLmV4aXRlZC5lbWl0KHtcbiAgICAgICAgY29udGFpbmVyOiBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgaXRlbTogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZWYuZHJvcHBlZC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5kcm9wcGVkLmVtaXQoe1xuICAgICAgICBwcmV2aW91c0luZGV4OiBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICBjdXJyZW50SW5kZXg6IGV2ZW50LmN1cnJlbnRJbmRleCxcbiAgICAgICAgcHJldmlvdXNDb250YWluZXI6IGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgIGNvbnRhaW5lcjogZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGV2ZW50LmlzUG9pbnRlck92ZXJDb250YWluZXIsXG4gICAgICAgIGl0ZW06IHRoaXMsXG4gICAgICAgIGRpc3RhbmNlOiBldmVudC5kaXN0YW5jZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQXNzaWducyB0aGUgZGVmYXVsdCBpbnB1dCB2YWx1ZXMgYmFzZWQgb24gYSBwcm92aWRlZCBjb25maWcgb2JqZWN0LiAqL1xuICBwcml2YXRlIF9hc3NpZ25EZWZhdWx0cyhjb25maWc6IERyYWdEcm9wQ29uZmlnKSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9ja0F4aXMsIGRyYWdTdGFydERlbGF5LCBjb25zdHJhaW5Qb3NpdGlvbiwgcHJldmlld0NsYXNzLFxuICAgICAgYm91bmRhcnlFbGVtZW50LCBkcmFnZ2luZ0Rpc2FibGVkLCByb290RWxlbWVudFNlbGVjdG9yXG4gICAgfSA9IGNvbmZpZztcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBkcmFnZ2luZ0Rpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IGRyYWdnaW5nRGlzYWJsZWQ7XG4gICAgdGhpcy5kcmFnU3RhcnREZWxheSA9IGRyYWdTdGFydERlbGF5IHx8IDA7XG5cbiAgICBpZiAobG9ja0F4aXMpIHtcbiAgICAgIHRoaXMubG9ja0F4aXMgPSBsb2NrQXhpcztcbiAgICB9XG5cbiAgICBpZiAoY29uc3RyYWluUG9zaXRpb24pIHtcbiAgICAgIHRoaXMuY29uc3RyYWluUG9zaXRpb24gPSBjb25zdHJhaW5Qb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocHJldmlld0NsYXNzKSB7XG4gICAgICB0aGlzLnByZXZpZXdDbGFzcyA9IHByZXZpZXdDbGFzcztcbiAgICB9XG5cbiAgICBpZiAoYm91bmRhcnlFbGVtZW50KSB7XG4gICAgICB0aGlzLmJvdW5kYXJ5RWxlbWVudCA9IGJvdW5kYXJ5RWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAocm9vdEVsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgdGhpcy5yb290RWxlbWVudFNlbGVjdG9yID0gcm9vdEVsZW1lbnRTZWxlY3RvcjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cblxuLyoqIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3Igb2YgYW4gZWxlbWVudCB0aGF0IG1hdGNoZXMgYSBzZWxlY3Rvci4gKi9cbmZ1bmN0aW9uIGdldENsb3Nlc3RNYXRjaGluZ0FuY2VzdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIGxldCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cbiAgd2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IGBtYXRjaGVzYCBzbyB3ZSBoYXZlIHRvIGZhbGwgYmFjayB0byBgbXNNYXRjaGVzU2VsZWN0b3JgLlxuICAgIGlmIChjdXJyZW50RWxlbWVudC5tYXRjaGVzID8gY3VycmVudEVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgOlxuICAgICAgICAoY3VycmVudEVsZW1lbnQgYXMgYW55KS5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuIl19