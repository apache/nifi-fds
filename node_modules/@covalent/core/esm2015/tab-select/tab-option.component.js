/**
 * @fileoverview added by tsickle
 * Generated from: tab-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, ViewContainerRef, } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { mixinDisabled } from '@covalent/core/common';
export class TdTabOptionBase {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _changeDetectorRef
     */
    constructor(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdTabOptionBase.prototype._viewContainerRef;
    /** @type {?} */
    TdTabOptionBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
export class TdTabOptionComponent extends _TdTabOptionMixinBase {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _changeDetectorRef
     */
    constructor(_viewContainerRef, _changeDetectorRef) {
        super(_viewContainerRef, _changeDetectorRef);
    }
    /**
     * @return {?}
     */
    get content() {
        return this._contentPortal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
}
TdTabOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-tab-option',
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                inputs: ['disabled'],
                styles: [""]
            }] }
];
/** @nocollapse */
TdTabOptionComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
TdTabOptionComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    value: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTabOptionComponent.prototype._contentPortal;
    /** @type {?} */
    TdTabOptionComponent.prototype._content;
    /**
     * Value to which the option will be binded to.
     * @type {?}
     */
    TdTabOptionComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvdGFiLXNlbGVjdC8iLCJzb3VyY2VzIjpbInRhYi1vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRW5FLE1BQU0sT0FBTyxlQUFlOzs7OztJQUMxQixZQUFtQixpQkFBbUMsRUFBUyxrQkFBcUM7UUFBakYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0NBQ3pHOzs7SUFEYSw0Q0FBMEM7O0lBQUUsNkNBQTRDOzs7O0FBSXRHLE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBVW5FLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7O0lBYTdELFlBQVksaUJBQW1DLEVBQUUsa0JBQXFDO1FBQ3BGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFiRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7OztJQWFELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEYsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsd0VBQTBDO2dCQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQzs7YUFDckI7Ozs7WUFwQkMsZ0JBQWdCO1lBSmhCLGlCQUFpQjs7O3VCQStCaEIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBS3ZDLEtBQUs7Ozs7Ozs7SUFWTiw4Q0FBNEM7O0lBSzVDLHdDQUFxRTs7Ozs7SUFLckUscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgbWl4aW5EaXNhYmxlZCwgSUNhbkRpc2FibGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRUYWJPcHRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkVGFiT3B0aW9uTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChUZFRhYk9wdGlvbkJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC10YWItb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItb3B0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGFiT3B0aW9uQ29tcG9uZW50IGV4dGVuZHMgX1RkVGFiT3B0aW9uTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIE9uSW5pdCB7XG4gIHByaXZhdGUgX2NvbnRlbnRQb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50UG9ydGFsO1xuICB9XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgX2NvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gd2lsbCBiZSBiaW5kZWQgdG8uXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX3ZpZXdDb250YWluZXJSZWYsIF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2NvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG4iXX0=