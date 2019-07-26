/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, QueryList, ViewChildren, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
/** @type {?} */
var TD_VIRTUAL_OFFSET = 2;
/** @type {?} */
var SCROLL_DEBOUNCE = 200;
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
var TdVirtualScrollContainerComponent = /** @class */ (function () {
    function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
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
        this.trackBy = function (index, item) {
            return item;
        };
    }
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        /**
         * data: any[]
         * List of items to virtually iterate on.
         */
        set: /**
         * data: any[]
         * List of items to virtually iterate on.
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "virtualData", {
        get: /**
         * @return {?}
         */
        function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._rows && this._rows.toArray()[0]) {
                return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subs.push(this._rows.changes.subscribe(function () {
            _this._calculateVirtualRows();
        }));
        this._initialized = true;
        this._calculateVirtualRows();
        this._subs.push(this._bottom.pipe(debounceTime(SCROLL_DEBOUNCE)).subscribe(function () {
            _this.bottom.emit({
                lastRow: _this._data[_this._data.length - 1],
                lastIndex: _this.toRow,
            });
        }));
    };
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
        if (this._hostHeight !== newHostHeight) {
            this._hostHeight = newHostHeight;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
        }
    };
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subs) {
            this._subs.forEach(function (sub) {
                sub.unsubscribe();
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.handleScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            var verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
            if (this._initialized) {
                // check to see if bottom was hit to throw the bottom event
                if ((this._data.length * this.rowHeight) - (verticalScroll + this._hostHeight) === 0) {
                    this._bottom.next();
                }
            }
        }
    };
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     */
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.refresh = /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     * @return {?}
     */
    function () {
        this._calculateVirtualRows();
    };
    /**
     * Method to scroll to a specific row of the list.
     */
    /**
     * Method to scroll to a specific row of the list.
     * @param {?} row
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.scrollTo = /**
     * Method to scroll to a specific row of the list.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the start of the list.
     */
    /**
     * Method to scroll to the start of the list.
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.scrollToStart = /**
     * Method to scroll to the start of the list.
     * @return {?}
     */
    function () {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the end of the list.
     */
    /**
     * Method to scroll to the end of the list.
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.scrollToEnd = /**
     * Method to scroll to the end of the list.
     * @return {?}
     */
    function () {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            /** @type {?} */
            var fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            var range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
            /** @type {?} */
            var toRow = range + this.fromRow;
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
        var offset = 0;
        if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(function () {
            _this._changeDetectorRef.markForCheck();
        });
    };
    TdVirtualScrollContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-virtual-scroll-container',
                    template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"]
                }] }
    ];
    /** @nocollapse */
    TdVirtualScrollContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    TdVirtualScrollContainerComponent.propDecorators = {
        data: [{ type: Input, args: ['data',] }],
        bottom: [{ type: Output }],
        _rows: [{ type: ViewChildren, args: ['rowElement',] }],
        _rowTemplate: [{ type: ContentChild, args: [TdVirtualScrollRowDirective,] }],
        trackBy: [{ type: Input, args: ['trackBy',] }],
        handleScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
    };
    return TdVirtualScrollContainerComponent;
}());
export { TdVirtualScrollContainerComponent };
if (false) {
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._subs;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._bottom;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._initialized;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._totalHeight;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._hostHeight;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._scrollVerticalOffset;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._offsetTransform;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._fromRow;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._toRow;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._data;
    /** @type {?} */
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
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._elementRef;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._domSanitizer;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._renderer;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsidmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQy9ELHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFDN0YsU0FBUyxFQUFnRCxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFFcEUsT0FBTyxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQUV2RSxpQkFBaUIsR0FBVyxDQUFDOztJQUM3QixlQUFlLEdBQVcsR0FBRzs7OztBQUVuQyxpREFHQzs7O0lBRkMsOENBQWE7O0lBQ2IsZ0RBQWtCOztBQUdwQjtJQTZFRSwyQ0FBb0IsV0FBdUIsRUFDdkIsYUFBMkIsRUFDM0IsU0FBb0IsRUFDcEIsa0JBQXFDO1FBSHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXhFakQsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBRTlCLGlCQUFZLEdBQVcsQ0FBQyxDQUFD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QUNyQixLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBRXZDLHEvQkFBd0Q7b0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBdEI2RSxVQUFVO2dCQUUvRSxZQUFZO2dCQURaLFNBQVM7Z0JBRGdCLGlCQUFpQjs7O3VCQTRDaEQsS0FBSyxTQUFDLE1BQU07eUJBcUJaLE1BQU07d0JBRU4sWUFBWSxTQUFDLFlBQVk7K0JBRXpCLFlBQVksU0FBQywyQkFBMkI7MEJBc0V4QyxLQUFLLFNBQUMsU0FBUzsrQkFJZixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQXVGcEMsd0NBQUM7Q0FBQSxBQXJORCxJQXFOQztTQS9NWSxpQ0FBaUM7OztJQUU1QyxrREFBbUM7O0lBQ25DLG9EQUE4Qzs7SUFDOUMseURBQXNDOztJQUV0Qyx5REFBaUM7O0lBQ2pDLHdEQUFnQzs7SUFDaEMsa0VBQTBDOztJQUMxQyw2REFBb0M7O0lBRXBDLHFEQUE2Qjs7SUFDN0IsbURBQTJCOztJQUUzQixrREFBcUI7O0lBQ3JCLHlEQUE0Qjs7Ozs7OztJQTJCNUIsbURBQThHOztJQUU5RyxrREFBeUQ7O0lBRXpELHlEQUFxRjs7Ozs7OztJQXNFckYsb0RBRUM7O0lBL0NXLHdEQUErQjs7SUFDL0IsMERBQW1DOztJQUNuQyxzREFBNEI7O0lBQzVCLCtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLFxuICAgICAgICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLFxuICAgICAgICAgUmVuZGVyZXIyLCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3ksIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtcm93LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX1ZJUlRVQUxfT0ZGU0VUOiBudW1iZXIgPSAyO1xuY29uc3QgU0NST0xMX0RFQk9VTkNFOiBudW1iZXIgPSAyMDA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVmlydHVhbFNjcm9sbEJvdHRvbUV2ZW50IHtcbiAgbGFzdFJvdzogYW55O1xuICBsYXN0SW5kZXg6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdmlydHVhbC1zY3JvbGwtY29udGFpbmVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlydHVhbC1zY3JvbGwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkVmlydHVhbFNjcm9sbENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfYm90dG9tOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3RvdGFsSGVpZ2h0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9ob3N0SGVpZ2h0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9zY3JvbGxWZXJ0aWNhbE9mZnNldDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfb2Zmc2V0VHJhbnNmb3JtOiBTYWZlU3R5bGU7XG5cbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBfZGF0YTogYW55W107XG4gIHByaXZhdGUgX3ZpcnR1YWxEYXRhOiBhbnlbXTtcblxuICAvKipcbiAgICogZGF0YTogYW55W11cbiAgICogTGlzdCBvZiBpdGVtcyB0byB2aXJ0dWFsbHkgaXRlcmF0ZSBvbi5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9jYWxjdWxhdGVWaXJ0dWFsUm93cygpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgdmlydHVhbERhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBib3R0b206IGZ1bmN0aW9uXG4gICAqIE1ldGhvZCB0byBiZSBleGVjdXRlZCB3aGVuIHVzZXIgc2Nyb2xsZWQgdG8gdGhlIGxhc3QgaXRlbSBvZiB0aGUgbGlzdC5cbiAgICogQW4gW0lUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudF0gZXZlbnQgaXMgZW1pdHRlZFxuICAgKi9cbiAgQE91dHB1dCgpIGJvdHRvbTogRXZlbnRFbWl0dGVyPElUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPElUZFZpcnR1YWxTY3JvbGxCb3R0b21FdmVudD4oKTtcblxuICBAVmlld0NoaWxkcmVuKCdyb3dFbGVtZW50JykgX3Jvd3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBAQ29udGVudENoaWxkKFRkVmlydHVhbFNjcm9sbFJvd0RpcmVjdGl2ZSkgX3Jvd1RlbXBsYXRlOiBUZFZpcnR1YWxTY3JvbGxSb3dEaXJlY3RpdmU7XG5cbiAgZ2V0IHJvd0hlaWdodCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9yb3dzICYmIHRoaXMuX3Jvd3MudG9BcnJheSgpWzBdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm93cy50b0FycmF5KClbMF0ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0IHRvdGFsSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGZyb21Sb3coKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbVJvdztcbiAgfVxuXG4gIGdldCB0b1JvdygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b1JvdztcbiAgfVxuXG4gIGdldCBvZmZzZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VHJhbnNmb3JtO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc3Vicy5wdXNoKHRoaXMuX3Jvd3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY2FsY3VsYXRlVmlydHVhbFJvd3MoKTtcbiAgICB9KSk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG5cbiAgICB0aGlzLl9zdWJzLnB1c2godGhpcy5fYm90dG9tLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoU0NST0xMX0RFQk9VTkNFKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmJvdHRvbS5lbWl0KHtcbiAgICAgICAgbGFzdFJvdzogdGhpcy5fZGF0YVt0aGlzLl9kYXRhLmxlbmd0aCAtIDFdLFxuICAgICAgICBsYXN0SW5kZXg6IHRoaXMudG9Sb3csXG4gICAgICB9KTtcbiAgICB9KSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgbGV0IG5ld0hvc3RIZWlnaHQ6IG51bWJlciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgaWYgKHRoaXMuX2hvc3RIZWlnaHQgIT09IG5ld0hvc3RIZWlnaHQpIHtcbiAgICAgIHRoaXMuX2hvc3RIZWlnaHQgPSBuZXdIb3N0SGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdHJhY2tCeT86IFRyYWNrQnlGdW5jdGlvblxuICAgKiBUaGlzIGFjY2VwdHMgdGhlIHNhbWUgdHJhY2tCeSBmdW5jdGlvbiBbbmdGb3JdIGRvZXMuXG4gICAqIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29yZS9UcmFja0J5RnVuY3Rpb25cbiAgICovXG4gIEBJbnB1dCgndHJhY2tCeScpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+ID0gIChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVNjcm9sbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCB2ZXJ0aWNhbFNjcm9sbDogbnVtYmVyID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgIT09IHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZlcnRpY2FsT2Zmc2V0ID0gdmVydGljYWxTY3JvbGw7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgYm90dG9tIHdhcyBoaXQgdG8gdGhyb3cgdGhlIGJvdHRvbSBldmVudFxuICAgICAgICBpZiAoKHRoaXMuX2RhdGEubGVuZ3RoICogdGhpcy5yb3dIZWlnaHQpIC0gKHZlcnRpY2FsU2Nyb2xsICsgdGhpcy5faG9zdEhlaWdodCkgPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ib3R0b20ubmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byByZWZyZXNoIGFuZCByZWNhbGN1bGF0ZSB0aGUgdmlydHVhbCByb3dzXG4gICAqIGUuZy4gYWZ0ZXIgY2hhbmdpbmcgdGhlIFtkYXRhXSBjb250ZW50XG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNjcm9sbCB0byBhIHNwZWNpZmljIHJvdyBvZiB0aGUgbGlzdC5cbiAgICovXG4gIHNjcm9sbFRvKHJvdzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHJvdyAqIHRoaXMucm93SGVpZ2h0O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzY3JvbGwgdG8gdGhlIHN0YXJ0IG9mIHRoZSBsaXN0LlxuICAgKi9cbiAgc2Nyb2xsVG9TdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnNjcm9sbFRvKDApO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzY3JvbGwgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIHNjcm9sbFRvRW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc2Nyb2xsVG8odGhpcy50b3RhbEhlaWdodCAvIHRoaXMucm93SGVpZ2h0KTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpcnR1YWxSb3dzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl90b3RhbEhlaWdodCA9IHRoaXMuX2RhdGEubGVuZ3RoICogdGhpcy5yb3dIZWlnaHQ7XG4gICAgICBsZXQgZnJvbVJvdzogbnVtYmVyID0gTWF0aC5mbG9vcigodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgLyB0aGlzLnJvd0hlaWdodCkpIC0gVERfVklSVFVBTF9PRkZTRVQ7XG4gICAgICB0aGlzLl9mcm9tUm93ID0gZnJvbVJvdyA+IDAgPyBmcm9tUm93IDogMDtcbiAgICAgIGxldCByYW5nZTogbnVtYmVyID0gTWF0aC5mbG9vcigodGhpcy5faG9zdEhlaWdodCAvIHRoaXMucm93SGVpZ2h0KSkgKyAoVERfVklSVFVBTF9PRkZTRVQgKiAyKTtcbiAgICAgIGxldCB0b1JvdzogbnVtYmVyID0gcmFuZ2UgKyB0aGlzLmZyb21Sb3c7XG4gICAgICBpZiAoaXNGaW5pdGUodG9Sb3cpICYmIHRvUm93ID4gdGhpcy5fZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgdG9Sb3cgPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHRvUm93KSkge1xuICAgICAgICB0b1JvdyA9IFREX1ZJUlRVQUxfT0ZGU0VUO1xuICAgICAgfVxuICAgICAgdGhpcy5fdG9Sb3cgPSB0b1JvdztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdG90YWxIZWlnaHQgPSAwO1xuICAgICAgdGhpcy5fZnJvbVJvdyA9IDA7XG4gICAgICB0aGlzLl90b1JvdyA9IDA7XG4gICAgfVxuXG4gICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcbiAgICBpZiAodGhpcy5fc2Nyb2xsVmVydGljYWxPZmZzZXQgPiAoVERfVklSVFVBTF9PRkZTRVQgKiB0aGlzLnJvd0hlaWdodCkpIHtcbiAgICAgIG9mZnNldCA9IHRoaXMuZnJvbVJvdyAqIHRoaXMucm93SGVpZ2h0O1xuICAgIH1cblxuICAgIHRoaXMuX29mZnNldFRyYW5zZm9ybSA9IHRoaXMuX2RvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3RyYW5zbGF0ZVkoJyArIChvZmZzZXQgLSB0aGlzLnRvdGFsSGVpZ2h0KSArICdweCknKTtcbiAgICBpZiAodGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fdmlydHVhbERhdGEgPSB0aGlzLmRhdGEuc2xpY2UodGhpcy5mcm9tUm93LCB0aGlzLnRvUm93KTtcbiAgICB9XG5cbiAgICAvLyBtYXJrIGZvciBjaGVjayBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZSBzbyB3ZSBhcmUgc3VyZVxuICAgIC8vIHRoYXQgdGhlIGNoYW5nZXMgd2lsbCBiZSBtYXJrZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=