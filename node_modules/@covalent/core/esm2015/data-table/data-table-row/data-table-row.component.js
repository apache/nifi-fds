/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
export class TdDataTableColumnRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
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
TdDataTableColumnRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /** @type {?} */
    TdDataTableColumnRowComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableColumnRowComponent.prototype._renderer;
}
export class TdDataTableRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (selected) {
            this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
        }
        this._selected = selected;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        let height = 48;
        if (this._elementRef.nativeElement) {
            height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return height;
    }
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    clickListener() {
        this.focus();
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
TdDataTableRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-row]',
                template: "<ng-content></ng-content>",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableRowComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    clickListener: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    TdDataTableRowComponent.prototype._selected;
    /** @type {?} */
    TdDataTableRowComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableRowComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUtcm93L2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBOEIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVzFILE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBRXhDLFlBQXNCLFdBQXVCLEVBQVksU0FBb0I7UUFBdkQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDdEYsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsOEJBQThCO2dCQUV4QyxxQ0FBOEM7O2FBQy9DOzs7O1lBVjZDLFVBQVU7WUFBckIsU0FBUzs7OztJQWE5QixvREFBaUM7O0lBQUUsa0RBQThCOztBQVkvRSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQXlCbEMsWUFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF2QmpFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUF3QmpDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUF2QkQsSUFDSSxRQUFRLENBQUMsUUFBaUI7UUFDNUIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDOzs7O0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07O1lBQ0osTUFBTSxHQUFXLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtZQUNsQyxNQUFNLEdBQUcsQ0FBQyxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7U0FDdkY7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQVVELGFBQWE7UUFDWCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7OztZQTdDRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSx1QkFBdUI7Z0JBRWpDLHFDQUE4Qzs7YUFDL0M7Ozs7WUF4QjZDLFVBQVU7WUFBckIsU0FBUzs7O3VCQTZCekMsS0FBSyxTQUFDLFVBQVU7NEJBNEJoQixZQUFZLFNBQUMsT0FBTzs7OztJQTlCckIsNENBQW1DOztJQXVCdkIsOENBQStCOztJQUFFLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY2VsbC9kYXRhLXRhYmxlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBzZWxlY3RvcjogJ3RyW3RkLWRhdGEtdGFibGUtY29sdW1uLXJvd10nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jb2x1bW4tcm93Jyk7XG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndHJbdGQtZGF0YS10YWJsZS1yb3ddJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlUm93Q29tcG9uZW50IHtcblxuICBwcml2YXRlIF9zZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnc2VsZWN0ZWQnKVxuICBzZXQgc2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLXNlbGVjdGVkJyk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gIH1cbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSA0ODtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBoZWlnaHQgPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtcm93Jyk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuaW5nIHRvIGNsaWNrIGV2ZW50IHRvIGV4cGxpY2l0bHkgZm9jdXMgdGhlIHJvdyBlbGVtZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBjbGlja0xpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbn1cbiJdfQ==