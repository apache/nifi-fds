/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, TemplateRef, ViewContainerRef, } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { mixinDisabled } from '@covalent/core/common';
var TdTabOptionBase = /** @class */ (function () {
    function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabOptionBase;
}());
export { TdTabOptionBase };
if (false) {
    /** @type {?} */
    TdTabOptionBase.prototype._viewContainerRef;
    /** @type {?} */
    TdTabOptionBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
var TdTabOptionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdTabOptionComponent, _super);
    function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
        return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
    }
    Object.defineProperty(TdTabOptionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdTabOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    };
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
    TdTabOptionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    TdTabOptionComponent.propDecorators = {
        _content: [{ type: ViewChild, args: [TemplateRef,] }],
        value: [{ type: Input, args: ['value',] }]
    };
    return TdTabOptionComponent;
}(_TdTabOptionMixinBase));
export { TdTabOptionComponent };
if (false) {
    /** @type {?} */
    TdTabOptionComponent.prototype._contentPortal;
    /** @type {?} */
    TdTabOptionComponent.prototype._content;
    /**
     * Value to which the option will be binded to.
     * @type {?}
     */
    TdTabOptionComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS90YWItc2VsZWN0LyIsInNvdXJjZXMiOlsidGFiLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBRVgsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFFbkU7SUFDRSx5QkFBbUIsaUJBQW1DLEVBQ25DLGtCQUFxQztRQURyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0lBQzlELHNCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGYSw0Q0FBMEM7O0lBQzFDLDZDQUE0Qzs7OztBQUkxRCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUVuRTtJQVEwQyxnREFBcUI7SUFjN0QsOEJBQVksaUJBQW1DLEVBQ25DLGtCQUFxQztlQUMvQyxrQkFBTSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQztJQUM5QyxDQUFDO0lBZEQsc0JBQUkseUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7OztJQWNELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3RUFBMEM7b0JBRTFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztvQkFFL0MsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDOztpQkFDckI7Ozs7Z0JBckJDLGdCQUFnQjtnQkFKaEIsaUJBQWlCOzs7MkJBaUNoQixTQUFTLFNBQUMsV0FBVzt3QkFLckIsS0FBSyxTQUFDLE9BQU87O0lBV2hCLDJCQUFDO0NBQUEsQUEvQkQsQ0FRMEMscUJBQXFCLEdBdUI5RDtTQXZCWSxvQkFBb0I7OztJQUUvQiw4Q0FBNEM7O0lBSzVDLHdDQUFtRDs7Ozs7SUFLbkQscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgbWl4aW5EaXNhYmxlZCwgSUNhbkRpc2FibGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRUYWJPcHRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkVGFiT3B0aW9uTWl4aW5CYXNlID0gbWl4aW5EaXNhYmxlZChUZFRhYk9wdGlvbkJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC10YWItb3B0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItb3B0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkVGFiT3B0aW9uQ29tcG9uZW50IGV4dGVuZHMgX1RkVGFiT3B0aW9uTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWw8YW55PjtcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWw8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRQb3J0YWw7XG4gIH1cblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBfY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogVmFsdWUgdG8gd2hpY2ggdGhlIG9wdGlvbiB3aWxsIGJlIGJpbmRlZCB0by5cbiAgICovXG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX3ZpZXdDb250YWluZXJSZWYsIF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2NvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbn1cbiJdfQ==