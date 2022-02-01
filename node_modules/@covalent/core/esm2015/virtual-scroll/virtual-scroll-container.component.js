/**
 * @fileoverview added by tsickle
 * Generated from: virtual-scroll-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, QueryList, ViewChildren, ElementRef, HostListener, Renderer2, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
/** @type {?} */
const TD_VIRTUAL_OFFSET = 2;
/** @type {?} */
const SCROLL_DEBOUNCE = 200;
/**
 * @record
 */
export function ITdVirtualScrollBottomEvent() { }
if (false) {
    /** @type {?} */
    ITdVirtualScrollBottomEvent.prototype.lastRow;
    /** @type {?} */
    ITdVirtualScrollBottomEvent.prototype.lastIndex;
}
export class TdVirtualScrollContainerComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._subs = [];
        this._bottom = new Subject();
        this._initialized = false;
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
        this._fromRow = 0;
        this._toRow = 0;
        /**
         * bottom: function
         * Method to be executed when user scrolled to the last item of the list.
         * An [ITdVirtualScrollBottomEvent] event is emitted
         */
        this.bottom = new EventEmitter();
        /**
         * trackBy?: TrackByFunction
         * This accepts the same trackBy function [ngFor] does.
         * https://angular.io/api/core/TrackByFunction
         */
        this.trackBy = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => {
            return item;
        });
    }
    /**
     * data: any[]
     * List of items to virtually iterate on.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        if (this._initialized) {
            this._calculateVirtualRows();
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get virtualData() {
        return this._virtualData;
    }
    /**
     * @return {?}
     */
    get rowHeight() {
        if (this._rows && this._rows.toArray()[0]) {
            return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    get totalHeight() {
        return this._totalHeight;
    }
    /**
     * @return {?}
     */
    get fromRow() {
        return this._fromRow;
    }
    /**
     * @return {?}
     */
    get toRow() {
        return this._toRow;
    }
    /**
     * @return {?}
     */
    get offsetTransform() {
        return this._offsetTransform;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._subs.push(this._rows.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this._calculateVirtualRows();
        })));
        this._initialized = true;
        this._calculateVirtualRows();
        this._subs.push(this._bottom.pipe(debounceTime(SCROLL_DEBOUNCE)).subscribe((/**
         * @return {?}
         */
        () => {
            this.bottom.emit({
                lastRow: this._data[this._data.length - 1],
                lastIndex: this.toRow,
            });
        })));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
        if (this._hostHeight !== newHostHeight) {
            this._hostHeight = newHostHeight;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subs) {
            this._subs.forEach((/**
             * @param {?} sub
             * @return {?}
             */
            (sub) => {
                sub.unsubscribe();
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.target));
        if (element) {
            /** @type {?} */
            const verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
            if (this._initialized && this._data.length * this.rowHeight - (verticalScroll + this._hostHeight) === 0) {
                // check to see if bottom was hit to throw the bottom event
                this._bottom.next();
            }
        }
    }
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     * @return {?}
     */
    refresh() {
        this._calculateVirtualRows();
    }
    /**
     * Method to scroll to a specific row of the list.
     * @param {?} row
     * @return {?}
     */
    scrollTo(row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to scroll to the start of the list.
     * @return {?}
     */
    scrollToStart() {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to scroll to the end of the list.
     * @return {?}
     */
    scrollToEnd() {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateVirtualRows() {
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            /** @type {?} */
            const fromRow = Math.floor(this._scrollVerticalOffset / this.rowHeight) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            const range = Math.floor(this._hostHeight / this.rowHeight) + TD_VIRTUAL_OFFSET * 2;
            /** @type {?} */
            let toRow = range + this.fromRow;
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        /** @type {?} */
        let offset = 0;
        if (this._scrollVerticalOffset > TD_VIRTUAL_OFFSET * this.rowHeight) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
}
TdVirtualScrollContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-virtual-scroll-container',
                template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [style.width.%]=\"100\">\n  <ng-template let-row let-index=\"index\" ngFor [ngForOf]=\"virtualData\" [ngForTrackBy]=\"trackBy\">\n    <div #rowElement [style.width.%]=\"100\">\n      <ng-template\n        *ngIf=\"_rowTemplate\"\n        [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n        [ngTemplateOutletContext]=\"{\n          row: row,\n          index: fromRow + index,\n          first: fromRow + index === 0,\n          last: fromRow + index === data.length - 1,\n          odd: (fromRow + index + 1) % 2 === 1,\n          even: (fromRow + index + 1) % 2 === 0\n        }\"\n      ></ng-template>\n    </div>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;height:100%;overflow:auto;position:relative;width:100%}"]
            }] }
];
/** @nocollapse */
TdVirtualScrollContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdVirtualScrollContainerComponent.propDecorators = {
    data: [{ type: Input, args: ['data',] }],
    bottom: [{ type: Output }],
    _rows: [{ type: ViewChildren, args: ['rowElement',] }],
    _rowTemplate: [{ type: ContentChild, args: [TdVirtualScrollRowDirective,] }],
    trackBy: [{ type: Input }],
    handleScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._bottom;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._totalHeight;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._hostHeight;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._scrollVerticalOffset;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._offsetTransform;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._fromRow;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._toRow;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._virtualData;
    /**
     * bottom: function
     * Method to be executed when user scrolled to the last item of the list.
     * An [ITdVirtualScrollBottomEvent] event is emitted
     * @type {?}
     */
    TdVirtualScrollContainerComponent.prototype.bottom;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rows;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rowTemplate;
    /**
     * trackBy?: TrackByFunction
     * This accepts the same trackBy function [ngFor] does.
     * https://angular.io/api/core/TrackByFunction
     * @type {?}
     */
    TdVirtualScrollContainerComponent.prototype.trackBy;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._domSanitizer;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS92aXJ0dWFsLXNjcm9sbC8iLCJzb3VyY2VzIjpbInZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFHWix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEdBSVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBYSxNQUFNLDJCQUEyQixDQUFDO0FBRXBFLE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7TUFFdkUsaUJBQWlCLEdBQVcsQ0FBQzs7TUFDN0IsZUFBZSxHQUFXLEdBQUc7Ozs7QUFFbkMsaURBR0M7OztJQUZDLDhDQUFhOztJQUNiLGdEQUFrQjs7QUFTcEIsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7OztJQXNFNUMsWUFDVSxXQUF1QixFQUN2QixhQUEyQixFQUMzQixTQUFvQixFQUNwQixrQkFBcUM7UUFIckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBekV2QyxVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUMzQixZQUFPLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdEMsaUJBQVksR0FBWSxL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SyxTQUFDLE1BQU07cUJBcUJaLE1BQU07b0JBRU4sWUFBWSxTQUFDLFlBQVk7MkJBRXpCLFlBQVksU0FBQywyQkFBMkI7c0JBMEV4QyxLQUFLOzJCQUlMLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUExSGxDLGtEQUFtQzs7Ozs7SUFDbkMsb0RBQThDOzs7OztJQUM5Qyx5REFBc0M7Ozs7O0lBRXRDLHlEQUFpQzs7Ozs7SUFDakMsd0RBQWdDOzs7OztJQUNoQyxrRUFBMEM7Ozs7O0lBQzFDLDZEQUFvQzs7Ozs7SUFFcEMscURBQTZCOzs7OztJQUM3QixtREFBMkI7Ozs7O0lBRTNCLGtEQUFxQjs7Ozs7SUFDckIseURBQTRCOzs7Ozs7O0lBMkI1QixtREFBOEc7O0lBRTlHLGtEQUF5RDs7SUFFekQseURBQXFGOzs7Ozs7O0lBMEVyRixvREFFRTs7Ozs7SUFsREEsd0RBQStCOzs7OztJQUMvQiwwREFBbUM7Ozs7O0lBQ25DLHNEQUE0Qjs7Ozs7SUFDNUIsK0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkLFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdDaGVja2VkLFxuICBPbkRlc3Ryb3ksXG4gIFRyYWNrQnlGdW5jdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlIH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC1yb3cuZGlyZWN0aXZlJztcblxuY29uc3QgVERfVklSVFVBTF9PRkZTRVQ6IG51bWJlciA9IDI7XG5jb25zdCBTQ1JPTExfREVCT1VOQ0U6IG51bWJlciA9IDIwMDtcblxuZXhwb3J0IGludGVyZmFjZSBJVGRWaXJ0dWFsU2Nyb2xsQm90dG9tRXZlbnQge1xuICBsYXN0Um93OiBhbnk7XG4gIGxhc3RJbmRleDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC12aXJ0dWFsLXNjcm9sbC1jb250YWluZXInLFxuICBzdHlsZVVybHM6IFsnLi92aXJ0dWFsLXNjcm9sbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpcnR1YWwtc2Nyb2xsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFZpcnR1YWxTY3JvbGxDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF9ib3R0b206IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfdG90YWxIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2hvc3RIZWlnaHQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX3Njcm9sbFZlcnRpY2FsT2Zmc2V0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9vZmZzZXRUcmFuc2Zvcm06IFNhZmVTdHlsZTtcblxuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcbiAgcHJpdmF0ZSBfdmlydHVhbERhdGE6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBkYXRhOiBhbnlbXVxuICAgKiBMaXN0IG9mIGl0ZW1zIHRvIHZpcnR1YWxseSBpdGVyYXRlIG9uLlxuICAgKi9cbiAgQElucHV0KCdkYXRhJylcbiAgc2V0IGRhdGEoZGF0YTogYW55W10pIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCB2aXJ0dWFsRGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIGJvdHRvbTogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdXNlciBzY3JvbGxlZCB0byB0aGUgbGFzdCBpdGVtIG9mIHRoZSBsaXN0LlxuICAgKiBBbiBbSVRkVmlydHVhbFNjcm9sbEJvdHRvbUV2ZW50XSBldmVudCBpcyBlbWl0dGVkXG4gICAqL1xuICBAT3V0cHV0KCkgYm90dG9tOiBFdmVudEVtaXR0ZXI8SVRkVmlydHVhbFNjcm9sbEJvdHRvbUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkVmlydHVhbFNjcm9sbEJvdHRvbUV2ZW50PigpO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ3Jvd0VsZW1lbnQnKSBfcm93czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRWaXJ0dWFsU2Nyb2xsUm93RGlyZWN0aXZlKSBfcm93VGVtcGxhdGU6IFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZTtcblxuICBnZXQgcm93SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3Jvd3MgJiYgdGhpcy5fcm93cy50b0FycmF5KClbMF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb3dzLnRvQXJyYXkoKVswXS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXQgdG90YWxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWxIZWlnaHQ7XG4gIH1cblxuICBnZXQgZnJvbVJvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9mcm9tUm93O1xuICB9XG5cbiAgZ2V0IHRvUm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvUm93O1xuICB9XG5cbiAgZ2V0IG9mZnNldFRyYW5zZm9ybSgpOiBTYWZlU3R5bGUge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUcmFuc2Zvcm07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2RvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3Jvd3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcblxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX2JvdHRvbS5waXBlKGRlYm91bmNlVGltZShTQ1JPTExfREVCT1VOQ0UpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmJvdHRvbS5lbWl0KHtcbiAgICAgICAgICBsYXN0Um93OiB0aGlzLl9kYXRhW3RoaXMuX2RhdGEubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgbGFzdEluZGV4OiB0aGlzLnRvUm93LFxuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3SG9zdEhlaWdodDogbnVtYmVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBpZiAodGhpcy5faG9zdEhlaWdodCAhPT0gbmV3SG9zdEhlaWdodCkge1xuICAgICAgdGhpcy5faG9zdEhlaWdodCA9IG5ld0hvc3RIZWlnaHQ7XG4gICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vicykge1xuICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0cmFja0J5PzogVHJhY2tCeUZ1bmN0aW9uXG4gICAqIFRoaXMgYWNjZXB0cyB0aGUgc2FtZSB0cmFja0J5IGZ1bmN0aW9uIFtuZ0Zvcl0gZG9lcy5cbiAgICogaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL1RyYWNrQnlGdW5jdGlvblxuICAgKi9cbiAgQElucHV0KCkgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPGFueT4gPSAoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlU2Nyb2xsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3QgdmVydGljYWxTY3JvbGw6IG51bWJlciA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ICE9PSB2ZXJ0aWNhbFNjcm9sbCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxWZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2Nyb2xsO1xuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQgJiYgdGhpcy5fZGF0YS5sZW5ndGggKiB0aGlzLnJvd0hlaWdodCAtICh2ZXJ0aWNhbFNjcm9sbCArIHRoaXMuX2hvc3RIZWlnaHQpID09PSAwKSB7XG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBib3R0b20gd2FzIGhpdCB0byB0aHJvdyB0aGUgYm90dG9tIGV2ZW50XG4gICAgICAgIHRoaXMuX2JvdHRvbS5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byByZWZyZXNoIGFuZCByZWNhbGN1bGF0ZSB0aGUgdmlydHVhbCByb3dzXG4gICAqIGUuZy4gYWZ0ZXIgY2hhbmdpbmcgdGhlIFtkYXRhXSBjb250ZW50XG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byBhIHNwZWNpZmljIHJvdyBvZiB0aGUgbGlzdC5cbiAgICovXG4gIHNjcm9sbFRvKHJvdzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHJvdyAqIHRoaXMucm93SGVpZ2h0O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzY3JvbGwgdG8gdGhlIHN0YXJ0IG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG9TdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvKDApO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzY3JvbGwgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIHNjcm9sbFRvRW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG8odGhpcy50b3RhbEhlaWdodCAvIHRoaXMucm93SGVpZ2h0KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IHRoaXMuX2RhdGEubGVuZ3RoICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgICBjb25zdCBmcm9tUm93OiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0IC8gdGhpcy5yb3dIZWlnaHQpIC0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gZnJvbVJvdyA+IDAgPyBmcm9tUm93IDogMDtcbiAgICAgIGNvbnN0IHJhbmdlOiBudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuX2hvc3RIZWlnaHQgLyB0aGlzLnJvd0hlaWdodCkgKyBURF9WSVJUVUFMX09GRlNFVCAqIDI7XG4gICAgICBsZXQgdG9Sb3c6IG51bWJlciA9IHJhbmdlICsgdGhpcy5mcm9tUm93O1xuICAgICAgaWYgKGlzRmluaXRlKHRvUm93KSAmJiB0b1JvdyA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgIHRvUm93ID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh0b1JvdykpIHtcbiAgICAgICAgdG9Sb3cgPSBURF9WSVJUVUFMX09GRlNFVDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RvUm93ID0gdG9Sb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RvdGFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMuX2Zyb21Sb3cgPSAwO1xuICAgICAgdGhpcy5fdG9Sb3cgPSAwO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgaWYgKHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID4gVERfVklSVFVBTF9PRkZTRVQgKiB0aGlzLnJvd0hlaWdodCkge1xuICAgICAgb2Zmc2V0ID0gdGhpcy5mcm9tUm93ICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fb2Zmc2V0VHJhbnNmb3JtID0gdGhpcy5fZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgICd0cmFuc2xhdGVZKCcgKyAob2Zmc2V0IC0gdGhpcy50b3RhbEhlaWdodCkgKyAncHgpJyxcbiAgICApO1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsRGF0YSA9IHRoaXMuZGF0YS5zbGljZSh0aGlzLmZyb21Sb3csIHRoaXMudG9Sb3cpO1xuICAgIH1cblxuICAgIC8vIG1hcmsgZm9yIGNoZWNrIGF0IHRoZSBlbmQgb2YgdGhlIHF1ZXVlIHNvIHdlIGFyZSBzdXJlXG4gICAgLy8gdGhhdCB0aGUgY2hhbmdlcyB3aWxsIGJlIG1hcmtlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==