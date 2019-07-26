/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostBinding } from '@angular/core';
export class TdDataTableCellComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    /**
     * align?: 'start' | 'center' | 'end'
     * Makes cell content align on demand
     * Defaults to 'left', overrides numeric
     * @param {?} align
     * @return {?}
     */
    set align(align) {
        this._align = align;
    }
    /**
     * @return {?}
     */
    get align() {
        return this._align;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
}
TdDataTableCellComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td[td-data-table-cell]',
                template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\"\n     [class.td-data-table-cell-align-center]=\"align === 'center'\"\n     [class.td-data-table-cell-align-end]=\"align === 'end'\"\n     [class.td-data-table-cell-align-start]=\"align === 'start'\"\n     >\n  <ng-content></ng-content>\n</div>",
                styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableCellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableCellComponent.propDecorators = {
    numeric: [{ type: Input, args: ['numeric',] }],
    align: [{ type: Input }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }]
};
if (false) {
    /** @type {?} */
    TdDataTableCellComponent.prototype._align;
    /**
     * numeric?: boolean
     * Makes cell follow the numeric data-table specs.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableCellComponent.prototype.numeric;
    /** @type {?} */
    TdDataTableCellComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableCellComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVckYsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUE2Qm5DLFlBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOzs7Ozs7UUFwQnZELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFxQnpDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7Ozs7SUFmRCxJQUNJLEtBQUssQ0FBQyxLQUEyQjtRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHdCQUF3QjtnQkFFbEMsc1dBQStDOzthQUNoRDs7OztZQVRxQyxVQUFVO1lBQXJCLFNBQVM7OztzQkFtQmpDLEtBQUssU0FBQyxTQUFTO29CQU9mLEtBQUs7MEJBUUwsV0FBVyxTQUFDLG1CQUFtQjs7OztJQXRCaEMsMENBQXFDOzs7Ozs7O0lBT3JDLDJDQUEyQzs7SUFvQi9CLCtDQUErQjs7SUFBRSw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRkRGF0YVRhYmxlQ2VsbEFsaWduID0gJ3N0YXJ0JyB8ICdjZW50ZXInIHwgJ2VuZCc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZFt0ZC1kYXRhLXRhYmxlLWNlbGxdJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5zY3NzJyBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDZWxsQ29tcG9uZW50IHtcblxuICBwcml2YXRlIF9hbGlnbjogVGREYXRhVGFibGVDZWxsQWxpZ247XG5cbiAgLyoqXG4gICAqIG51bWVyaWM/OiBib29sZWFuXG4gICAqIE1ha2VzIGNlbGwgZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnbnVtZXJpYycpIG51bWVyaWM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogYWxpZ24/OiAnc3RhcnQnIHwgJ2NlbnRlcicgfCAnZW5kJ1xuICAgKiBNYWtlcyBjZWxsIGNvbnRlbnQgYWxpZ24gb24gZGVtYW5kXG4gICAqIERlZmF1bHRzIHRvICdsZWZ0Jywgb3ZlcnJpZGVzIG51bWVyaWNcbiAgICovXG4gIEBJbnB1dCgpIFxuICBzZXQgYWxpZ24oYWxpZ246IFRkRGF0YVRhYmxlQ2VsbEFsaWduKSB7XG4gICAgdGhpcy5fYWxpZ24gPSBhbGlnbjtcbiAgfVxuICBnZXQgYWxpZ24oKTogVGREYXRhVGFibGVDZWxsQWxpZ24ge1xuICAgIHJldHVybiB0aGlzLl9hbGlnbjsgICAgXG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1udW1lcmljJylcbiAgZ2V0IGJpbmROdW1lcmljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm51bWVyaWM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1jZWxsJyk7XG4gIH1cblxufVxuIl19