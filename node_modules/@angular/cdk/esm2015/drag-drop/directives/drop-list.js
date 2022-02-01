/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceArray, coerceNumberProperty, coerceBooleanProperty, } from '@angular/cdk/coercion';
import { ElementRef, EventEmitter, Input, Output, Optional, Directive, ChangeDetectorRef, SkipSelf, Inject, InjectionToken, } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { CDK_DROP_LIST_GROUP, CdkDropListGroup } from './drop-list-group';
import { DragDrop } from '../drag-drop';
import { CDK_DRAG_CONFIG } from './config';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { assertElementNode } from './assertions';
/** Counter used to generate unique ids for drop zones. */
let _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const CDK_DROP_LIST = new InjectionToken('CdkDropList');
const ɵ0 = undefined;
/** Container that wraps a set of draggable items. */
export class CdkDropList {
    constructor(
    /** Element that the drop list is attached to. */
    element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._dir = _dir;
        this._group = _group;
        /** Emits when the list has been destroyed. */
        this._destroyed = new Subject();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = () => true;
        /** Functions that is used to determine whether an item can be sorted into a particular index. */
        this.sortPredicate = () => true;
        /** Emits when the user drops an item inside the container. */
        this.dropped = new EventEmitter();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new EventEmitter();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new EventEmitter();
        /** Emits as the user is swapping items while actively dragging. */
        this.sorted = new EventEmitter();
        /**
         * Keeps track of the items that are registered with this container. Historically we used to
         * do this with a `ContentChildren` query, however queries don't handle transplanted views very
         * well which means that we can't handle cases like dragging the headers of a `mat-table`
         * correctly. What we do instead is to have the items register themselves with the container
         * and then we sort them based on their position in the DOM.
         */
        this._unsortedItems = new Set();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            assertElementNode(element.nativeElement, 'cdkDropList');
        }
        this._dropListRef = dragDrop.createDropList(element);
        this._dropListRef.data = this;
        if (config) {
            this._assignDefaults(config);
        }
        this._dropListRef.enterPredicate = (drag, drop) => {
            return this.enterPredicate(drag.data, drop.data);
        };
        this._dropListRef.sortPredicate =
            (index, drag, drop) => {
                return this.sortPredicate(index, drag.data, drop.data);
            };
        this._setupInputSyncSubscription(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    /** Whether starting a dragging sequence from this container is disabled. */
    get disabled() {
        return this._disabled || (!!this._group && this._group.disabled);
    }
    set disabled(value) {
        // Usually we sync the directive and ref state right before dragging starts, in order to have
        // a single point of failure and to avoid having to use setters for everything. `disabled` is
        // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
        // the user in a disabled state, so we also need to sync it as it's being set.
        this._dropListRef.disabled = this._disabled = coerceBooleanProperty(value);
    }
    /** Registers an items with the drop list. */
    addItem(item) {
        this._unsortedItems.add(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /** Removes an item from the drop list. */
    removeItem(item) {
        this._unsortedItems.delete(item);
        if (this._dropListRef.isDragging()) {
            this._syncItemsWithRef();
        }
    }
    /** Gets the registered items in the list, sorted by their position in the DOM. */
    getSortedItems() {
        return Array.from(this._unsortedItems).sort((a, b) => {
            const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
            // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
            // tslint:disable-next-line:no-bitwise
            return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
    }
    ngOnDestroy() {
        const index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._unsortedItems.clear();
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    _setupInputSyncSubscription(ref) {
        if (this._dir) {
            this._dir.change
                .pipe(startWith(this._dir.value), takeUntil(this._destroyed))
                .subscribe(value => ref.withDirection(value));
        }
        ref.beforeStarted.subscribe(() => {
            const siblings = coerceArray(this.connectedTo).map(drop => {
                if (typeof drop === 'string') {
                    const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);
                    if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                        console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
                    }
                    return correspondingDropList;
                }
                return drop;
            });
            if (this._group) {
                this._group._items.forEach(drop => {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            // Note that we resolve the scrollable parents here so that we delay the resolution
            // as long as possible, ensuring that the element is in its final place in the DOM.
            if (!this._scrollableParentsResolved) {
                const scrollableParents = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map(scrollable => scrollable.getElementRef().nativeElement);
                this._dropListRef.withScrollableParents(scrollableParents);
                // Only do this once since it involves traversing the DOM and the parents
                // shouldn't be able to change without the drop list being destroyed.
                this._scrollableParentsResolved = true;
            }
            ref.disabled = this.disabled;
            ref.lockAxis = this.lockAxis;
            ref.sortingDisabled = coerceBooleanProperty(this.sortingDisabled);
            ref.autoScrollDisabled = coerceBooleanProperty(this.autoScrollDisabled);
            ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
            ref
                .connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef))
                .withOrientation(this.orientation);
        });
    }
    /** Handles events from the underlying DropListRef. */
    _handleEvents(ref) {
        ref.beforeStarted.subscribe(() => {
            this._syncItemsWithRef();
            this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(event => {
            this.entered.emit({
                container: this,
                item: event.item.data,
                currentIndex: event.currentIndex
            });
        });
        ref.exited.subscribe(event => {
            this.exited.emit({
                container: this,
                item: event.item.data
            });
            this._changeDetectorRef.markForCheck();
        });
        ref.sorted.subscribe(event => {
            this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(event => {
            this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer,
                distance: event.distance
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Assigns the default input values based on a provided config object. */
    _assignDefaults(config) {
        const { lockAxis, draggingDisabled, sortingDisabled, listAutoScrollDisabled, listOrientation } = config;
        this.disabled = draggingDisabled == null ? false : draggingDisabled;
        this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
        this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
        this.orientation = listOrientation || 'vertical';
        if (lockAxis) {
            this.lockAxis = lockAxis;
        }
    }
    /** Syncs up the registered drag items with underlying drop list ref. */
    _syncItemsWithRef() {
        this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
    }
}
/** Keeps track of the drop lists that are currently on the page. */
CdkDropList._dropLists = [];
CdkDropList.decorators = [
    { type: Directive, args: [{
                selector: '[cdkDropList], cdk-drop-list',
                exportAs: 'cdkDropList',
                providers: [
                    // Prevent child drop lists from picking up the same group as their parent.
                    { provide: CDK_DROP_LIST_GROUP, useValue: ɵ0 },
                    { provide: CDK_DROP_LIST, useExisting: CdkDropList },
                ],
                host: {
                    'class': 'cdk-drop-list',
                    '[attr.id]': 'id',
                    '[class.cdk-drop-list-disabled]': 'disabled',
                    '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                    '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                }
            },] }
];
CdkDropList.ctorParameters = () => [
    { type: ElementRef },
    { type: DragDrop },
    { type: ChangeDetectorRef },
    { type: ScrollDispatcher },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: CdkDropListGroup, decorators: [{ type: Optional }, { type: Inject, args: [CDK_DROP_LIST_GROUP,] }, { type: SkipSelf }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_DRAG_CONFIG,] }] }
];
CdkDropList.propDecorators = {
    connectedTo: [{ type: Input, args: ['cdkDropListConnectedTo',] }],
    data: [{ type: Input, args: ['cdkDropListData',] }],
    orientation: [{ type: Input, args: ['cdkDropListOrientation',] }],
    id: [{ type: Input }],
    lockAxis: [{ type: Input, args: ['cdkDropListLockAxis',] }],
    disabled: [{ type: Input, args: ['cdkDropListDisabled',] }],
    sortingDisabled: [{ type: Input, args: ['cdkDropListSortingDisabled',] }],
    enterPredicate: [{ type: Input, args: ['cdkDropListEnterPredicate',] }],
    sortPredicate: [{ type: Input, args: ['cdkDropListSortPredicate',] }],
    autoScrollDisabled: [{ type: Input, args: ['cdkDropListAutoScrollDisabled',] }],
    autoScrollStep: [{ type: Input, args: ['cdkDropListAutoScrollStep',] }],
    dropped: [{ type: Output, args: ['cdkDropListDropped',] }],
    entered: [{ type: Output, args: ['cdkDropListEntered',] }],
    exited: [{ type: Output, args: ['cdkDropListExited',] }],
    sorted: [{ type: Output, args: ['cdkDropListSorted',] }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZGlyZWN0aXZlcy9kcm9wLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUVMLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIscUJBQXFCLEdBRXRCLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixRQUFRLEVBQ1IsU0FBUyxFQUNULGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsTUFBTSxFQUNOLGNBQWMsR0FDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHeEUsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQWdELGVBQWUsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN4RixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLDBEQUEwRDtBQUMxRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQVN6Qjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFjLGFBQWEsQ0FBQyxDQUFDO1dBUS9CLFNBQVM7QUFOdEQscURBQXFEO0FBaUJyRCxNQUFNLE9BQU8sV0FBVztJ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QUFFLFdBQVcsRUFBQztpQkFDbkQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsSUFBSTtvQkFDakIsZ0NBQWdDLEVBQUUsVUFBVTtvQkFDNUMsZ0NBQWdDLEVBQUUsMkJBQTJCO29CQUM3RCxpQ0FBaUMsRUFBRSw0QkFBNEI7aUJBQ2hFO2FBQ0Y7OztZQTFEQyxVQUFVO1lBbUJKLFFBQVE7WUFaZCxpQkFBaUI7WUFNWCxnQkFBZ0I7WUFEaEIsY0FBYyx1QkEySmYsUUFBUTtZQXZKYyxnQkFBZ0IsdUJBd0p0QyxRQUFRLFlBQUksTUFBTSxTQUFDLG1CQUFtQixjQUFHLFFBQVE7NENBRWpELFFBQVEsWUFBSSxNQUFNLFNBQUMsZUFBZTs7OzBCQTdGdEMsS0FBSyxTQUFDLHdCQUF3QjttQkFJOUIsS0FBSyxTQUFDLGlCQUFpQjswQkFHdkIsS0FBSyxTQUFDLHdCQUF3QjtpQkFNOUIsS0FBSzt1QkFHTCxLQUFLLFNBQUMscUJBQXFCO3VCQUczQixLQUFLLFNBQUMscUJBQXFCOzhCQWMzQixLQUFLLFNBQUMsNEJBQTRCOzZCQU9sQyxLQUFLLFNBQUMsMkJBQTJCOzRCQUlqQyxLQUFLLFNBQUMsMEJBQTBCO2lDQUloQyxLQUFLLFNBQUMsK0JBQStCOzZCQUlyQyxLQUFLLFNBQUMsMkJBQTJCO3NCQUlqQyxNQUFNLFNBQUMsb0JBQW9CO3NCQU0zQixNQUFNLFNBQUMsb0JBQW9CO3FCQU8zQixNQUFNLFNBQUMsbUJBQW1CO3FCQUkxQixNQUFNLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIEJvb2xlYW5JbnB1dCxcbiAgY29lcmNlQXJyYXksXG4gIGNvZXJjZU51bWJlclByb3BlcnR5LFxuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXG4gIE51bWJlcklucHV0LFxufSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIE9wdGlvbmFsLFxuICBEaXJlY3RpdmUsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTa2lwU2VsZixcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1Njcm9sbERpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtDZGtEcmFnfSBmcm9tICcuL2RyYWcnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgQ2RrRHJhZ0VudGVyLCBDZGtEcmFnRXhpdCwgQ2RrRHJhZ1NvcnRFdmVudH0gZnJvbSAnLi4vZHJhZy1ldmVudHMnO1xuaW1wb3J0IHtDREtfRFJPUF9MSVNUX0dST1VQLCBDZGtEcm9wTGlzdEdyb3VwfSBmcm9tICcuL2Ryb3AtbGlzdC1ncm91cCc7XG5pbXBvcnQge0Ryb3BMaXN0UmVmfSBmcm9tICcuLi9kcm9wLWxpc3QtcmVmJztcbmltcG9ydCB7RHJhZ1JlZn0gZnJvbSAnLi4vZHJhZy1yZWYnO1xuaW1wb3J0IHtEcmFnRHJvcH0gZnJvbSAnLi4vZHJhZy1kcm9wJztcbmltcG9ydCB7RHJvcExpc3RPcmllbnRhdGlvbiwgRHJhZ0F4aXMsIERyYWdEcm9wQ29uZmlnLCBDREtfRFJBR19DT05GSUd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge2Fzc2VydEVsZW1lbnROb2RlfSBmcm9tICcuL2Fzc2VydGlvbnMnO1xuXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBpZHMgZm9yIGRyb3Agem9uZXMuICovXG5sZXQgX3VuaXF1ZUlkQ291bnRlciA9IDA7XG5cbi8qKlxuICogSW50ZXJuYWwgY29tcGlsZS10aW1lLW9ubHkgcmVwcmVzZW50YXRpb24gb2YgYSBgQ2RrRHJvcExpc3RgLlxuICogVXNlZCB0byBhdm9pZCBjaXJjdWxhciBpbXBvcnQgaXNzdWVzIGJldHdlZW4gdGhlIGBDZGtEcm9wTGlzdGAgYW5kIHRoZSBgQ2RrRHJhZ2AuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2RrRHJvcExpc3RJbnRlcm5hbCBleHRlbmRzIENka0Ryb3BMaXN0IHt9XG5cbi8qKlxuICogSW5qZWN0aW9uIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmZXJlbmNlIGluc3RhbmNlcyBvZiBgQ2RrRHJvcExpc3RgLiBJdCBzZXJ2ZXMgYXNcbiAqIGFsdGVybmF0aXZlIHRva2VuIHRvIHRoZSBhY3R1YWwgYENka0Ryb3BMaXN0YCBjbGFzcyB3aGljaCBjb3VsZCBjYXVzZSB1bm5lY2Vzc2FyeVxuICogcmV0ZW50aW9uIG9mIHRoZSBjbGFzcyBhbmQgaXRzIGRpcmVjdGl2ZSBtZXRhZGF0YS5cbiAqL1xuZXhwb3J0IGNvbnN0IENES19EUk9QX0xJU1QgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q2RrRHJvcExpc3Q+KCdDZGtEcm9wTGlzdCcpO1xuXG4vKiogQ29udGFpbmVyIHRoYXQgd3JhcHMgYSBzZXQgb2YgZHJhZ2dhYmxlIGl0ZW1zLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0Ryb3BMaXN0XSwgY2RrLWRyb3AtbGlzdCcsXG4gIGV4cG9ydEFzOiAnY2RrRHJvcExpc3QnLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBQcmV2ZW50IGNoaWxkIGRyb3AgbGlzdHMgZnJvbSBwaWNraW5nIHVwIHRoZSBzYW1lIGdyb3VwIGFzIHRoZWlyIHBhcmVudC5cbiAgICB7cHJvdmlkZTogQ0RLX0RST1BfTElTVF9HUk9VUCwgdXNlVmFsdWU6IHVuZGVmaW5lZH0sXG4gICAge3Byb3ZpZGU6IENES19EUk9QX0xJU1QsIHVzZUV4aXN0aW5nOiBDZGtEcm9wTGlzdH0sXG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLWRyb3AtbGlzdCcsXG4gICAgJ1thdHRyLmlkXSc6ICdpZCcsXG4gICAgJ1tjbGFzcy5jZGstZHJvcC1saXN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5jZGstZHJvcC1saXN0LWRyYWdnaW5nXSc6ICdfZHJvcExpc3RSZWYuaXNEcmFnZ2luZygpJyxcbiAgICAnW2NsYXNzLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nXSc6ICdfZHJvcExpc3RSZWYuaXNSZWNlaXZpbmcoKScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJvcExpc3Q8VCA9IGFueT4gaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogRW1pdHMgd2hlbiB0aGUgbGlzdCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQncyBzY3JvbGxhYmxlIHBhcmVudHMgaGF2ZSBiZWVuIHJlc29sdmVkLiAqL1xuICBwcml2YXRlIF9zY3JvbGxhYmxlUGFyZW50c1Jlc29sdmVkOiBib29sZWFuO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZHJvcCBsaXN0cyB0aGF0IGFyZSBjdXJyZW50bHkgb24gdGhlIHBhZ2UuICovXG4gIHByaXZhdGUgc3RhdGljIF9kcm9wTGlzdHM6IENka0Ryb3BMaXN0W10gPSBbXTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIGRyb3AgbGlzdCBpbnN0YW5jZS4gKi9cbiAgX2Ryb3BMaXN0UmVmOiBEcm9wTGlzdFJlZjxDZGtEcm9wTGlzdDxUPj47XG5cbiAgLyoqXG4gICAqIE90aGVyIGRyYWdnYWJsZSBjb250YWluZXJzIHRoYXQgdGhpcyBjb250YWluZXIgaXMgY29ubmVjdGVkIHRvIGFuZCBpbnRvIHdoaWNoIHRoZVxuICAgKiBjb250YWluZXIncyBpdGVtcyBjYW4gYmUgdHJhbnNmZXJyZWQuIENhbiBlaXRoZXIgYmUgcmVmZXJlbmNlcyB0byBvdGhlciBkcm9wIGNvbnRhaW5lcnMsXG4gICAqIG9yIHRoZWlyIHVuaXF1ZSBJRHMuXG4gICAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0Q29ubmVjdGVkVG8nKVxuICBjb25uZWN0ZWRUbzogKENka0Ryb3BMaXN0IHwgc3RyaW5nKVtdIHwgQ2RrRHJvcExpc3QgfCBzdHJpbmcgPSBbXTtcblxuICAvKiogQXJiaXRyYXJ5IGRhdGEgdG8gYXR0YWNoIHRvIHRoaXMgY29udGFpbmVyLiAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0RGF0YScpIGRhdGE6IFQ7XG5cbiAgLyoqIERpcmVjdGlvbiBpbiB3aGljaCB0aGUgbGlzdCBpcyBvcmllbnRlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdE9yaWVudGF0aW9uJykgb3JpZW50YXRpb246IERyb3BMaXN0T3JpZW50YXRpb247XG5cbiAgLyoqXG4gICAqIFVuaXF1ZSBJRCBmb3IgdGhlIGRyb3Agem9uZS4gQ2FuIGJlIHVzZWQgYXMgYSByZWZlcmVuY2VcbiAgICogaW4gdGhlIGBjb25uZWN0ZWRUb2Agb2YgYW5vdGhlciBgQ2RrRHJvcExpc3RgLlxuICAgKi9cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGBjZGstZHJvcC1saXN0LSR7X3VuaXF1ZUlkQ291bnRlcisrfWA7XG5cbiAgLyoqIExvY2tzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgY29udGFpbmVyIGFsb25nIHRoZSBzcGVjaWZpZWQgYXhpcy4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdExvY2tBeGlzJykgbG9ja0F4aXM6IERyYWdBeGlzO1xuXG4gIC8qKiBXaGV0aGVyIHN0YXJ0aW5nIGEgZHJhZ2dpbmcgc2VxdWVuY2UgZnJvbSB0aGlzIGNvbnRhaW5lciBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdERpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCAoISF0aGlzLl9ncm91cCAmJiB0aGlzLl9ncm91cC5kaXNhYmxlZCk7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgLy8gVXN1YWxseSB3ZSBzeW5jIHRoZSBkaXJlY3RpdmUgYW5kIHJlZiBzdGF0ZSByaWdodCBiZWZvcmUgZHJhZ2dpbmcgc3RhcnRzLCBpbiBvcmRlciB0byBoYXZlXG4gICAgLy8gYSBzaW5nbGUgcG9pbnQgb2YgZmFpbHVyZSBhbmQgdG8gYXZvaWQgaGF2aW5nIHRvIHVzZSBzZXR0ZXJzIGZvciBldmVyeXRoaW5nLiBgZGlzYWJsZWRgIGlzXG4gICAgLy8gYSBzcGVjaWFsIGNhc2UsIGJlY2F1c2UgaXQgY2FuIHByZXZlbnQgdGhlIGBiZWZvcmVTdGFydGVkYCBldmVudCBmcm9tIGZpcmluZywgd2hpY2ggY2FuIGxvY2tcbiAgICAvLyB0aGUgdXNlciBpbiBhIGRpc2FibGVkIHN0YXRlLCBzbyB3ZSBhbHNvIG5lZWQgdG8gc3luYyBpdCBhcyBpdCdzIGJlaW5nIHNldC5cbiAgICB0aGlzLl9kcm9wTGlzdFJlZi5kaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBzb3J0aW5nIHdpdGhpbiB0aGlzIGRyb3AgbGlzdCBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdFNvcnRpbmdEaXNhYmxlZCcpXG4gIHNvcnRpbmdEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGl0ZW1cbiAgICogaXMgYWxsb3dlZCB0byBiZSBtb3ZlZCBpbnRvIGEgZHJvcCBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0RW50ZXJQcmVkaWNhdGUnKVxuICBlbnRlclByZWRpY2F0ZTogKGRyYWc6IENka0RyYWcsIGRyb3A6IENka0Ryb3BMaXN0KSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZVxuXG4gIC8qKiBGdW5jdGlvbnMgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGl0ZW0gY2FuIGJlIHNvcnRlZCBpbnRvIGEgcGFydGljdWxhciBpbmRleC4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdFNvcnRQcmVkaWNhdGUnKVxuICBzb3J0UHJlZGljYXRlOiAoaW5kZXg6IG51bWJlciwgZHJhZzogQ2RrRHJhZywgZHJvcDogQ2RrRHJvcExpc3QpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlXG5cbiAgLyoqIFdoZXRoZXIgdG8gYXV0by1zY3JvbGwgdGhlIHZpZXcgd2hlbiB0aGUgdXNlciBtb3ZlcyB0aGVpciBwb2ludGVyIGNsb3NlIHRvIHRoZSBlZGdlcy4gKi9cbiAgQElucHV0KCdjZGtEcm9wTGlzdEF1dG9TY3JvbGxEaXNhYmxlZCcpXG4gIGF1dG9TY3JvbGxEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogTnVtYmVyIG9mIHBpeGVscyB0byBzY3JvbGwgZm9yIGVhY2ggZnJhbWUgd2hlbiBhdXRvLXNjcm9sbGluZyBhbiBlbGVtZW50LiAqL1xuICBASW5wdXQoJ2Nka0Ryb3BMaXN0QXV0b1Njcm9sbFN0ZXAnKVxuICBhdXRvU2Nyb2xsU3RlcDogbnVtYmVyO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSB1c2VyIGRyb3BzIGFuIGl0ZW0gaW5zaWRlIHRoZSBjb250YWluZXIuICovXG4gIEBPdXRwdXQoJ2Nka0Ryb3BMaXN0RHJvcHBlZCcpXG4gIGRyb3BwZWQ6IEV2ZW50RW1pdHRlcjxDZGtEcmFnRHJvcDxULCBhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0Ryb3A8VCwgYW55Pj4oKTtcblxuICAvKipcbiAgICogRW1pdHMgd2hlbiB0aGUgdXNlciBoYXMgbW92ZWQgYSBuZXcgZHJhZyBpdGVtIGludG8gdGhpcyBjb250YWluZXIuXG4gICAqL1xuICBAT3V0cHV0KCdjZGtEcm9wTGlzdEVudGVyZWQnKVxuICBlbnRlcmVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0VudGVyPFQ+PiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0VudGVyPFQ+PigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB3aGVuIHRoZSB1c2VyIHJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBjb250YWluZXJcbiAgICogYnkgZHJhZ2dpbmcgaXQgaW50byBhbm90aGVyIGNvbnRhaW5lci5cbiAgICovXG4gIEBPdXRwdXQoJ2Nka0Ryb3BMaXN0RXhpdGVkJylcbiAgZXhpdGVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ0V4aXQ8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxDZGtEcmFnRXhpdDxUPj4oKTtcblxuICAvKiogRW1pdHMgYXMgdGhlIHVzZXIgaXMgc3dhcHBpbmcgaXRlbXMgd2hpbGUgYWN0aXZlbHkgZHJhZ2dpbmcuICovXG4gIEBPdXRwdXQoJ2Nka0Ryb3BMaXN0U29ydGVkJylcbiAgc29ydGVkOiBFdmVudEVtaXR0ZXI8Q2RrRHJhZ1NvcnRFdmVudDxUPj4gPSBuZXcgRXZlbnRFbWl0dGVyPENka0RyYWdTb3J0RXZlbnQ8VD4+KCk7XG5cbiAgLyoqXG4gICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBpdGVtcyB0aGF0IGFyZSByZWdpc3RlcmVkIHdpdGggdGhpcyBjb250YWluZXIuIEhpc3RvcmljYWxseSB3ZSB1c2VkIHRvXG4gICAqIGRvIHRoaXMgd2l0aCBhIGBDb250ZW50Q2hpbGRyZW5gIHF1ZXJ5LCBob3dldmVyIHF1ZXJpZXMgZG9uJ3QgaGFuZGxlIHRyYW5zcGxhbnRlZCB2aWV3cyB2ZXJ5XG4gICAqIHdlbGwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBjYW4ndCBoYW5kbGUgY2FzZXMgbGlrZSBkcmFnZ2luZyB0aGUgaGVhZGVycyBvZiBhIGBtYXQtdGFibGVgXG4gICAqIGNvcnJlY3RseS4gV2hhdCB3ZSBkbyBpbnN0ZWFkIGlzIHRvIGhhdmUgdGhlIGl0ZW1zIHJlZ2lzdGVyIHRoZW1zZWx2ZXMgd2l0aCB0aGUgY29udGFpbmVyXG4gICAqIGFuZCB0aGVuIHdlIHNvcnQgdGhlbSBiYXNlZCBvbiB0aGVpciBwb3NpdGlvbiBpbiB0aGUgRE9NLlxuICAgKi9cbiAgcHJpdmF0ZSBfdW5zb3J0ZWRJdGVtcyA9IG5ldyBTZXQ8Q2RrRHJhZz4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIC8qKiBFbGVtZW50IHRoYXQgdGhlIGRyb3AgbGlzdCBpcyBhdHRhY2hlZCB0by4gKi9cbiAgICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgZHJhZ0Ryb3A6IERyYWdEcm9wLFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgcHJpdmF0ZSBfc2Nyb2xsRGlzcGF0Y2hlcjogU2Nyb2xsRGlzcGF0Y2hlcixcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2Rpcj86IERpcmVjdGlvbmFsaXR5LFxuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChDREtfRFJPUF9MSVNUX0dST1VQKSBAU2tpcFNlbGYoKVxuICAgICAgcHJpdmF0ZSBfZ3JvdXA/OiBDZGtEcm9wTGlzdEdyb3VwPENka0Ryb3BMaXN0PixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ0RLX0RSQUdfQ09ORklHKSBjb25maWc/OiBEcmFnRHJvcENvbmZpZykge1xuXG4gICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgYXNzZXJ0RWxlbWVudE5vZGUoZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2RrRHJvcExpc3QnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kcm9wTGlzdFJlZiA9IGRyYWdEcm9wLmNyZWF0ZURyb3BMaXN0KGVsZW1lbnQpO1xuICAgIHRoaXMuX2Ryb3BMaXN0UmVmLmRhdGEgPSB0aGlzO1xuXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgdGhpcy5fYXNzaWduRGVmYXVsdHMoY29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kcm9wTGlzdFJlZi5lbnRlclByZWRpY2F0ZSA9IChkcmFnOiBEcmFnUmVmPENka0RyYWc+LCBkcm9wOiBEcm9wTGlzdFJlZjxDZGtEcm9wTGlzdD4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVudGVyUHJlZGljYXRlKGRyYWcuZGF0YSwgZHJvcC5kYXRhKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fZHJvcExpc3RSZWYuc29ydFByZWRpY2F0ZSA9XG4gICAgICAoaW5kZXg6IG51bWJlciwgZHJhZzogRHJhZ1JlZjxDZGtEcmFnPiwgZHJvcDogRHJvcExpc3RSZWY8Q2RrRHJvcExpc3Q+KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRQcmVkaWNhdGUoaW5kZXgsIGRyYWcuZGF0YSwgZHJvcC5kYXRhKTtcbiAgICAgIH07XG5cbiAgICB0aGlzLl9zZXR1cElucHV0U3luY1N1YnNjcmlwdGlvbih0aGlzLl9kcm9wTGlzdFJlZik7XG4gICAgdGhpcy5faGFuZGxlRXZlbnRzKHRoaXMuX2Ryb3BMaXN0UmVmKTtcbiAgICBDZGtEcm9wTGlzdC5fZHJvcExpc3RzLnB1c2godGhpcyk7XG5cbiAgICBpZiAoX2dyb3VwKSB7XG4gICAgICBfZ3JvdXAuX2l0ZW1zLmFkZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVnaXN0ZXJzIGFuIGl0ZW1zIHdpdGggdGhlIGRyb3AgbGlzdC4gKi9cbiAgYWRkSXRlbShpdGVtOiBDZGtEcmFnKTogdm9pZCB7XG4gICAgdGhpcy5fdW5zb3J0ZWRJdGVtcy5hZGQoaXRlbSk7XG5cbiAgICBpZiAodGhpcy5fZHJvcExpc3RSZWYuaXNEcmFnZ2luZygpKSB7XG4gICAgICB0aGlzLl9zeW5jSXRlbXNXaXRoUmVmKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIHRoZSBkcm9wIGxpc3QuICovXG4gIHJlbW92ZUl0ZW0oaXRlbTogQ2RrRHJhZyk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc29ydGVkSXRlbXMuZGVsZXRlKGl0ZW0pO1xuXG4gICAgaWYgKHRoaXMuX2Ryb3BMaXN0UmVmLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgdGhpcy5fc3luY0l0ZW1zV2l0aFJlZigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSByZWdpc3RlcmVkIGl0ZW1zIGluIHRoZSBsaXN0LCBzb3J0ZWQgYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIERPTS4gKi9cbiAgZ2V0U29ydGVkSXRlbXMoKTogQ2RrRHJhZ1tdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl91bnNvcnRlZEl0ZW1zKS5zb3J0KChhOiBDZGtEcmFnLCBiOiBDZGtEcmFnKSA9PiB7XG4gICAgICBjb25zdCBkb2N1bWVudFBvc2l0aW9uID1cbiAgICAgICAgICBhLl9kcmFnUmVmLmdldFZpc2libGVFbGVtZW50KCkuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYi5fZHJhZ1JlZi5nZXRWaXNpYmxlRWxlbWVudCgpKTtcblxuICAgICAgLy8gYGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uYCByZXR1cm5zIGEgYml0bWFzayBzbyB3ZSBoYXZlIHRvIHVzZSBhIGJpdHdpc2Ugb3BlcmF0b3IuXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9jb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgIHJldHVybiBkb2N1bWVudFBvc2l0aW9uICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkcgPyAtMSA6IDE7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBpbmRleCA9IENka0Ryb3BMaXN0Ll9kcm9wTGlzdHMuaW5kZXhPZih0aGlzKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBDZGtEcm9wTGlzdC5fZHJvcExpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2dyb3VwKSB7XG4gICAgICB0aGlzLl9ncm91cC5faXRlbXMuZGVsZXRlKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuX3Vuc29ydGVkSXRlbXMuY2xlYXIoKTtcbiAgICB0aGlzLl9kcm9wTGlzdFJlZi5kaXNwb3NlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBTeW5jcyB0aGUgaW5wdXRzIG9mIHRoZSBDZGtEcm9wTGlzdCB3aXRoIHRoZSBvcHRpb25zIG9mIHRoZSB1bmRlcmx5aW5nIERyb3BMaXN0UmVmLiAqL1xuICBwcml2YXRlIF9zZXR1cElucHV0U3luY1N1YnNjcmlwdGlvbihyZWY6IERyb3BMaXN0UmVmPENka0Ryb3BMaXN0Pikge1xuICAgIGlmICh0aGlzLl9kaXIpIHtcbiAgICAgIHRoaXMuX2Rpci5jaGFuZ2VcbiAgICAgICAgLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2Rpci52YWx1ZSksIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHJlZi53aXRoRGlyZWN0aW9uKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmVmLmJlZm9yZVN0YXJ0ZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHNpYmxpbmdzID0gY29lcmNlQXJyYXkodGhpcy5jb25uZWN0ZWRUbykubWFwKGRyb3AgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGRyb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29uc3QgY29ycmVzcG9uZGluZ0Ryb3BMaXN0ID0gQ2RrRHJvcExpc3QuX2Ryb3BMaXN0cy5maW5kKGxpc3QgPT4gbGlzdC5pZCA9PT0gZHJvcCk7XG5cbiAgICAgICAgICBpZiAoIWNvcnJlc3BvbmRpbmdEcm9wTGlzdCAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDZGtEcm9wTGlzdCBjb3VsZCBub3QgZmluZCBjb25uZWN0ZWQgZHJvcCBsaXN0IHdpdGggaWQgXCIke2Ryb3B9XCJgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29ycmVzcG9uZGluZ0Ryb3BMaXN0ITtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkcm9wO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLl9ncm91cCkge1xuICAgICAgICB0aGlzLl9ncm91cC5faXRlbXMuZm9yRWFjaChkcm9wID0+IHtcbiAgICAgICAgICBpZiAoc2libGluZ3MuaW5kZXhPZihkcm9wKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goZHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gTm90ZSB0aGF0IHdlIHJlc29sdmUgdGhlIHNjcm9sbGFibGUgcGFyZW50cyBoZXJlIHNvIHRoYXQgd2UgZGVsYXkgdGhlIHJlc29sdXRpb25cbiAgICAgIC8vIGFzIGxvbmcgYXMgcG9zc2libGUsIGVuc3VyaW5nIHRoYXQgdGhlIGVsZW1lbnQgaXMgaW4gaXRzIGZpbmFsIHBsYWNlIGluIHRoZSBET00uXG4gICAgICBpZiAoIXRoaXMuX3Njcm9sbGFibGVQYXJlbnRzUmVzb2x2ZWQpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsYWJsZVBhcmVudHMgPSB0aGlzLl9zY3JvbGxEaXNwYXRjaGVyXG4gICAgICAgICAgLmdldEFuY2VzdG9yU2Nyb2xsQ29udGFpbmVycyh0aGlzLmVsZW1lbnQpXG4gICAgICAgICAgLm1hcChzY3JvbGxhYmxlID0+IHNjcm9sbGFibGUuZ2V0RWxlbWVudFJlZigpLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9kcm9wTGlzdFJlZi53aXRoU2Nyb2xsYWJsZVBhcmVudHMoc2Nyb2xsYWJsZVBhcmVudHMpO1xuXG4gICAgICAgIC8vIE9ubHkgZG8gdGhpcyBvbmNlIHNpbmNlIGl0IGludm9sdmVzIHRyYXZlcnNpbmcgdGhlIERPTSBhbmQgdGhlIHBhcmVudHNcbiAgICAgICAgLy8gc2hvdWxkbid0IGJlIGFibGUgdG8gY2hhbmdlIHdpdGhvdXQgdGhlIGRyb3AgbGlzdCBiZWluZyBkZXN0cm95ZWQuXG4gICAgICAgIHRoaXMuX3Njcm9sbGFibGVQYXJlbnRzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZWYuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgcmVmLmxvY2tBeGlzID0gdGhpcy5sb2NrQXhpcztcbiAgICAgIHJlZi5zb3J0aW5nRGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodGhpcy5zb3J0aW5nRGlzYWJsZWQpO1xuICAgICAgcmVmLmF1dG9TY3JvbGxEaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh0aGlzLmF1dG9TY3JvbGxEaXNhYmxlZCk7XG4gICAgICByZWYuYXV0b1Njcm9sbFN0ZXAgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0aGlzLmF1dG9TY3JvbGxTdGVwLCAyKTtcbiAgICAgIHJlZlxuICAgICAgICAuY29ubmVjdGVkVG8oc2libGluZ3MuZmlsdGVyKGRyb3AgPT4gZHJvcCAmJiBkcm9wICE9PSB0aGlzKS5tYXAobGlzdCA9PiBsaXN0Ll9kcm9wTGlzdFJlZikpXG4gICAgICAgIC53aXRoT3JpZW50YXRpb24odGhpcy5vcmllbnRhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKiogSGFuZGxlcyBldmVudHMgZnJvbSB0aGUgdW5kZXJseWluZyBEcm9wTGlzdFJlZi4gKi9cbiAgcHJpdmF0ZSBfaGFuZGxlRXZlbnRzKHJlZjogRHJvcExpc3RSZWY8Q2RrRHJvcExpc3Q+KSB7XG4gICAgcmVmLmJlZm9yZVN0YXJ0ZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX3N5bmNJdGVtc1dpdGhSZWYoKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgcmVmLmVudGVyZWQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuZW50ZXJlZC5lbWl0KHtcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLFxuICAgICAgICBpdGVtOiBldmVudC5pdGVtLmRhdGEsXG4gICAgICAgIGN1cnJlbnRJbmRleDogZXZlbnQuY3VycmVudEluZGV4XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlZi5leGl0ZWQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuZXhpdGVkLmVtaXQoe1xuICAgICAgICBjb250YWluZXI6IHRoaXMsXG4gICAgICAgIGl0ZW06IGV2ZW50Lml0ZW0uZGF0YVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcblxuICAgIHJlZi5zb3J0ZWQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuc29ydGVkLmVtaXQoe1xuICAgICAgICBwcmV2aW91c0luZGV4OiBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICBjdXJyZW50SW5kZXg6IGV2ZW50LmN1cnJlbnRJbmRleCxcbiAgICAgICAgY29udGFpbmVyOiB0aGlzLFxuICAgICAgICBpdGVtOiBldmVudC5pdGVtLmRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVmLmRyb3BwZWQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRoaXMuZHJvcHBlZC5lbWl0KHtcbiAgICAgICAgcHJldmlvdXNJbmRleDogZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgY3VycmVudEluZGV4OiBldmVudC5jdXJyZW50SW5kZXgsXG4gICAgICAgIHByZXZpb3VzQ29udGFpbmVyOiBldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICBjb250YWluZXI6IGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICBpdGVtOiBldmVudC5pdGVtLmRhdGEsXG4gICAgICAgIGlzUG9pbnRlck92ZXJDb250YWluZXI6IGV2ZW50LmlzUG9pbnRlck92ZXJDb250YWluZXIsXG4gICAgICAgIGRpc3RhbmNlOiBldmVudC5kaXN0YW5jZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIE1hcmsgZm9yIGNoZWNrIHNpbmNlIGFsbCBvZiB0aGVzZSBldmVudHMgcnVuIG91dHNpZGUgb2YgY2hhbmdlXG4gICAgICAvLyBkZXRlY3Rpb24gYW5kIHdlJ3JlIG5vdCBndWFyYW50ZWVkIGZvciBzb21ldGhpbmcgZWxzZSB0byBoYXZlIHRyaWdnZXJlZCBpdC5cbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEFzc2lnbnMgdGhlIGRlZmF1bHQgaW5wdXQgdmFsdWVzIGJhc2VkIG9uIGEgcHJvdmlkZWQgY29uZmlnIG9iamVjdC4gKi9cbiAgcHJpdmF0ZSBfYXNzaWduRGVmYXVsdHMoY29uZmlnOiBEcmFnRHJvcENvbmZpZykge1xuICAgIGNvbnN0IHtcbiAgICAgIGxvY2tBeGlzLCBkcmFnZ2luZ0Rpc2FibGVkLCBzb3J0aW5nRGlzYWJsZWQsIGxpc3RBdXRvU2Nyb2xsRGlzYWJsZWQsIGxpc3RPcmllbnRhdGlvblxuICAgIH0gPSBjb25maWc7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gZHJhZ2dpbmdEaXNhYmxlZCA9PSBudWxsID8gZmFsc2UgOiBkcmFnZ2luZ0Rpc2FibGVkO1xuICAgIHRoaXMuc29ydGluZ0Rpc2FibGVkID0gc29ydGluZ0Rpc2FibGVkID09IG51bGwgPyBmYWxzZSA6IHNvcnRpbmdEaXNhYmxlZDtcbiAgICB0aGlzLmF1dG9TY3JvbGxEaXNhYmxlZCA9IGxpc3RBdXRvU2Nyb2xsRGlzYWJsZWQgPT0gbnVsbCA/IGZhbHNlIDogbGlzdEF1dG9TY3JvbGxEaXNhYmxlZDtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gbGlzdE9yaWVudGF0aW9uIHx8ICd2ZXJ0aWNhbCc7XG5cbiAgICBpZiAobG9ja0F4aXMpIHtcbiAgICAgIHRoaXMubG9ja0F4aXMgPSBsb2NrQXhpcztcbiAgICB9XG4gIH1cblxuICAvKiogU3luY3MgdXAgdGhlIHJlZ2lzdGVyZWQgZHJhZyBpdGVtcyB3aXRoIHVuZGVybHlpbmcgZHJvcCBsaXN0IHJlZi4gKi9cbiAgcHJpdmF0ZSBfc3luY0l0ZW1zV2l0aFJlZigpIHtcbiAgICB0aGlzLl9kcm9wTGlzdFJlZi53aXRoSXRlbXModGhpcy5nZXRTb3J0ZWRJdGVtcygpLm1hcChpdGVtID0+IGl0ZW0uX2RyYWdSZWYpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc29ydGluZ0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvU2Nyb2xsRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9TY3JvbGxTdGVwOiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==