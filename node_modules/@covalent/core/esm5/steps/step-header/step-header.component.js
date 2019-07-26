/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { mixinDisabled, mixinDisableRipple } from '@covalent/core/common';
import { StepState } from '../step.component';
var TdStepHeaderBase = /** @class */ (function () {
    function TdStepHeaderBase() {
    }
    return TdStepHeaderBase;
}());
export { TdStepHeaderBase };
/* tslint:disable-next-line */
/** @type {?} */
export var _TdStepHeaderMixinBase = mixinDisableRipple(mixinDisabled(TdStepHeaderBase));
var TdStepHeaderComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdStepHeaderComponent, _super);
    function TdStepHeaderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets styles for state of header.
         * Defaults to [StepState.None | 'none'].
         */
        _this.state = StepState.None;
        return _this;
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     */
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    TdStepHeaderComponent.prototype.isComplete = /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    function () {
        return this.state === StepState.Complete;
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     */
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    TdStepHeaderComponent.prototype.isRequired = /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    function () {
        return this.state === StepState.Required;
    };
    TdStepHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-step-header',
                    inputs: ['disabled', 'disableRipple'],
                    template: "<div class=\"td-step-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled ? -1 : (tabIndex || 0)\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n      [class.mat-active]=\"active && !disabled\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      [class.bg-muted]=\"disabled\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n        [class.mat-warn]=\"isRequired() && !disabled\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>",
                    styles: [".td-step-header{position:relative;outline:0;min-width:120px;height:72px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-webkit-box-flex:0;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"]
                }] }
    ];
    TdStepHeaderComponent.propDecorators = {
        number: [{ type: Input, args: ['number',] }],
        active: [{ type: Input, args: ['active',] }],
        state: [{ type: Input, args: ['state',] }],
        tabIndex: [{ type: Input, args: ['tabIndex',] }]
    };
    return TdStepHeaderComponent;
}(_TdStepHeaderMixinBase));
export { TdStepHeaderComponent };
if (false) {
    /**
     * Number assigned to [TdStepHeaderComponent].
     * @type {?}
     */
    TdStepHeaderComponent.prototype.number;
    /**
     * active?: boolean
     * Sets for active/inactive states on header.
     * @type {?}
     */
    TdStepHeaderComponent.prototype.active;
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets styles for state of header.
     * Defaults to [StepState.None | 'none'].
     * @type {?}
     */
    TdStepHeaderComponent.prototype.state;
    /**
     * tabIndex?: number
     * tabIndex of the step header for a11y
     * @type {?}
     */
    TdStepHeaderComponent.prototype.tabIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwLWhlYWRlci9zdGVwLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQWUsYUFBYSxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5QztJQUFBO0lBQStCLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7Ozs7QUFHaEMsTUFBTSxLQUFPLHNCQUFzQixHQUFHLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXpGO0lBTTJDLGlEQUFzQjtJQU5qRTtRQUFBLHFFQTZDQzs7Ozs7O1FBckJpQixXQUFLLEdBQWMsU0FBUyxDQUFDLElBQUksQ0FBQzs7SUFxQnBELENBQUM7SUFiQzs7T0FFRzs7Ozs7SUFDSCwwQ0FBVTs7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDBDQUFVOzs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUMzQyxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7b0JBRXJDLDIwQ0FBMkM7O2lCQUM1Qzs7O3lCQU1FLEtBQUssU0FBQyxRQUFRO3lCQU1kLEtBQUssU0FBQyxRQUFRO3dCQU9kLEtBQUssU0FBQyxPQUFPOzJCQU1iLEtBQUssU0FBQyxVQUFVOztJQWVuQiw0QkFBQztDQUFBLEFBN0NELENBTTJDLHNCQUFzQixHQXVDaEU7U0F2Q1kscUJBQXFCOzs7Ozs7SUFLaEMsdUNBQWdDOzs7Ozs7SUFNaEMsdUNBQWlDOzs7Ozs7O0lBT2pDLHNDQUFrRDs7Ozs7O0lBTWxELHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQsIElDYW5EaXNhYmxlUmlwcGxlLCBtaXhpbkRpc2FibGVSaXBwbGUgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdGVwU3RhdGUgfSBmcm9tICcuLi9zdGVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBUZFN0ZXBIZWFkZXJCYXNlIHt9XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFN0ZXBIZWFkZXJNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVSaXBwbGUobWl4aW5EaXNhYmxlZChUZFN0ZXBIZWFkZXJCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXN0ZXAtaGVhZGVyJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2Rpc2FibGVSaXBwbGUnXSxcbiAgc3R5bGVVcmxzOiBbJy4vc3RlcC1oZWFkZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkU3RlcEhlYWRlckNvbXBvbmVudCBleHRlbmRzIF9UZFN0ZXBIZWFkZXJNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUge1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgYXNzaWduZWQgdG8gW1RkU3RlcEhlYWRlckNvbXBvbmVudF0uXG4gICAqL1xuICBASW5wdXQoJ251bWJlcicpIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBhY3RpdmU/OiBib29sZWFuXG4gICAqIFNldHMgZm9yIGFjdGl2ZS9pbmFjdGl2ZSBzdGF0ZXMgb24gaGVhZGVyLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHN0YXRlPzogU3RlcFN0YXRlIG9yIFsnbm9uZScgfCAncmVxdWlyZWQnIHwgJ2NvbXBsZXRlJ11cbiAgICogU2V0cyBzdHlsZXMgZm9yIHN0YXRlIG9mIGhlYWRlci5cbiAgICogRGVmYXVsdHMgdG8gW1N0ZXBTdGF0ZS5Ob25lIHwgJ25vbmUnXS5cbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKSBzdGF0ZTogU3RlcFN0YXRlID0gU3RlcFN0YXRlLk5vbmU7XG5cbiAgLyoqXG4gICAqIHRhYkluZGV4PzogbnVtYmVyXG4gICAqIHRhYkluZGV4IG9mIHRoZSBzdGVwIGhlYWRlciBmb3IgYTExeVxuICAgKi9cbiAgQElucHV0KCd0YWJJbmRleCcpIHRhYkluZGV4OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFtzdGF0ZV0gZXF1YWxzIHRvIFtTdGVwU3RhdGUuQ29tcGxldGUgfCAnY29tcGxldGUnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgJ3RydWUnIGlmIFtzdGF0ZV0gZXF1YWxzIHRvIFtTdGVwU3RhdGUuUmVxdWlyZWQgfCAncmVxdWlyZWQnXSwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNSZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gU3RlcFN0YXRlLlJlcXVpcmVkO1xuICB9XG59XG4iXX0=