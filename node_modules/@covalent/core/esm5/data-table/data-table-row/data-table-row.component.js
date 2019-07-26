/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
var TdDataTableColumnRowComponent = /** @class */ (function () {
    function TdDataTableColumnRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
    TdDataTableColumnRowComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable-next-line */
                    selector: 'tr[td-data-table-column-row]',
                    template: "<ng-content></ng-content>",
                    styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableColumnRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return TdDataTableColumnRowComponent;
}());
export { TdDataTableColumnRowComponent };
if (false) {
    /** @type {?} */
    TdDataTableColumnRowComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableColumnRowComponent.prototype._renderer;
}
var TdDataTableRowComponent = /** @class */ (function () {
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            if (selected) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
            }
            this._selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var height = 48;
            if (this._elementRef.nativeElement) {
                height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event to explicitly focus the row element.
     */
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    TdDataTableRowComponent.prototype.clickListener = /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    function () {
        this.focus();
    };
    /**
     * @return {?}
     */
    TdDataTableRowComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    TdDataTableRowComponent.decorators = [
        { type: Component, args: [{
                    /* tslint:disable-next-line */
                    selector: 'tr[td-data-table-row]',
                    template: "<ng-content></ng-content>",
                    styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                }] }
    ];
    /** @nocollapse */
    TdDataTableRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TdDataTableRowComponent.propDecorators = {
        selected: [{ type: Input, args: ['selected',] }],
        clickListener: [{ type: HostListener, args: ['click',] }]
    };
    return TdDataTableRowComponent;
}());
export { TdDataTableRowComponent };
if (false) {
    /** @type {?} */
    TdDataTableRowComponent.prototype._selected;
    /** @type {?} */
    TdDataTableRowComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableRowComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBOEIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFIO0lBUUUsdUNBQXNCLFdBQXVCLEVBQVksU0FBb0I7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsOEJBQThCO29CQUV4QyxxQ0FBOEM7O2lCQUMvQzs7OztnQkFWNkMsVUFBVTtnQkFBckIsU0FBUzs7SUFpQjVDLG9DQUFDO0NBQUEsQUFaRCxJQVlDO1NBTlksNkJBQTZCOzs7SUFFNUIsb0RBQWlDOztJQUFFLGtEQUE4Qjs7QUFNL0U7SUErQkUsaUNBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdkJqRSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBd0JqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUF2QkQsc0JBQ0ksNkNBQVE7Ozs7UUFRWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQVhELFVBQ2EsUUFBaUI7WUFDNUIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDeEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLDJDQUFNOzs7O1FBQVY7O2dCQUNNLE1BQU0sR0FBVyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xDLE1BQU0sR0FBRyxDQUFDLG1CQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN2RjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBTUQ7O09BRUc7Ozs7O0lBRUgsK0NBQWE7Ozs7SUFEYjtRQUVFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCx1Q0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsdUJBQXVCO29CQUVqQyxxQ0FBOEM7O2lCQUMvQzs7OztnQkF4QjZDLFVBQVU7Z0JBQXJCLFNBQVM7OzsyQkE2QnpDLEtBQUssU0FBQyxVQUFVO2dDQTRCaEIsWUFBWSxTQUFDLE9BQU87O0lBU3ZCLDhCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0F6Q1ksdUJBQXVCOzs7SUFFbEMsNENBQW1DOztJQXVCdkIsOENBQStCOztJQUFFLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RyW3RkLWRhdGEtdGFibGUtY29sdW1uLXJvd10nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jb2x1bW4tcm93Jyk7XG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1yb3ddJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlUm93Q29tcG9uZW50IHtcblxuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gIH1cbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSA0ODtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBoZWlnaHQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtcm93Jyk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuaW5nIHRvIGNsaWNrIGV2ZW50IHRvIGV4cGxpY2l0bHkgZm9jdXMgdGhlIHJvdyBlbGVtZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBjbGlja0xpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbn1cbiJdfQ==