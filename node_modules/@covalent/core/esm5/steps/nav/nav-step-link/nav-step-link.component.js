/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ElementRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _TdStepMixinBase, StepState } from '../../step.component';
var TdNavStepLinkComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdNavStepLinkComponent, _super);
    function TdNavStepLinkComponent(_changeDetectorRef, elementRef) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this.elementRef = elementRef;
        _this._active = false;
        _this._state = StepState.None;
        return _this;
    }
    Object.defineProperty(TdNavStepLinkComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state;
        },
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets state of component depending on value.
         * Defaults to [StepState.None | 'none'].
         */
        set: /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets state of component depending on value.
         * Defaults to [StepState.None | 'none'].
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state) {
                case StepState.Complete:
                    this._state = StepState.Complete;
                    break;
                case StepState.Required:
                    this._state = StepState.Required;
                    break;
                default:
                    this._state = StepState.None;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavStepLinkComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        /**
         * active?: boolean
         * Toggles component between active/deactive.
         */
        set: /**
         * active?: boolean
         * Toggles component between active/deactive.
         * @param {?} active
         * @return {?}
         */
        function (active) {
            this._active = coerceBooleanProperty(active);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} click
     * @return {?}
     */
    TdNavStepLinkComponent.prototype._handleClick = /**
     * @param {?} click
     * @return {?}
     */
    function (click) {
        if (this.disabled) {
            click.preventDefault();
            click.stopImmediatePropagation();
        }
    };
    TdNavStepLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: '[td-step-link],[tdStepLink]',
                    template: "<td-step-header class=\"td-step-header-wrapper\"\n                [tabIndex]=\"-1\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [disableRipple]=\"disableRipple || disabled\"\n                [disabled]=\"disabled\" \n                [state]=\"state\">\n  <ng-template td-step-header-label [ngIf]=\"true\">{{label}}</ng-template>\n  <ng-template td-step-header-sublabel [ngIf]=\"true\">{{sublabel | truncate:30}}</ng-template>\n  <ng-content></ng-content>\n</td-step-header>",
                    inputs: ['disabled', 'disableRipple'],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    /* tslint:disable-next-line */
                    host: {
                        '[class.td-step-link]': 'true',
                        '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                        '[attr.disabled]': 'disabled || null',
                        '[class.mat-disabled]': 'disabled || null',
                        '(click)': '_handleClick($event)',
                    },
                    styles: [":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host.mat-disabled{pointer-events:none}:host .td-step-header-wrapper{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    TdNavStepLinkComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    TdNavStepLinkComponent.propDecorators = {
        state: [{ type: Input, args: ['state',] }],
        label: [{ type: Input, args: ['label',] }],
        sublabel: [{ type: Input, args: ['sublabel',] }],
        active: [{ type: Input, args: ['active',] }],
        tabIndex: [{ type: Input, args: ['tabIndex',] }]
    };
    return TdNavStepLinkComponent;
}(_TdStepMixinBase));
export { TdNavStepLinkComponent };
if (false) {
    /** @type {?} */
    TdNavStepLinkComponent.prototype._active;
    /** @type {?} */
    TdNavStepLinkComponent.prototype._state;
    /** @type {?} */
    TdNavStepLinkComponent.prototype.number;
    /**
     * label?: string
     * Label to display in step header
     * Defaults to empty
     * @type {?}
     */
    TdNavStepLinkComponent.prototype.label;
    /**
     * sublabel?: string
     * Sublabel to display in step header
     * Defaults to empty
     * @type {?}
     */
    TdNavStepLinkComponent.prototype.sublabel;
    /**
     * tabIndex?: number
     * tabIndex for component
     * @type {?}
     */
    TdNavStepLinkComponent.prototype.tabIndex;
    /** @type {?} */
    TdNavStepLinkComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdNavStepLinkComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LXN0ZXAtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9zdGVwcy8iLCJzb3VyY2VzIjpbIm5hdi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRTtJQWU0QyxrREFBZ0I7SUFnRTFELGdDQUFvQixrQkFBcUMsRUFDdEMsVUFBc0I7UUFEekMsWUFFRSxpQkFBTyxTQUNSO1FBSG1CLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDdEMsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUEvRGpDLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTSxHQUFjLFNBQVMsQ0FBQyxJQUFJLENBQUM7O0lBZ0UzQyxDQUFDO0lBdERELHNCQUNJLHlDQUFLOzs7O1FBYVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQXJCRDs7OztXQUlHOzs7Ozs7OztRQUNILFVBQ1UsS0FBZ0I7WUFDeEIsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxTQUFTLENBQUMsUUFBUTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssU0FBUyxDQUFDLFFBQVE7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztvQkFDakMsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQzdCLE1BQU07YUFDVDtRQUNILENBQUM7OztPQUFBO0lBdUJELHNCQUNJLDBDQUFNOzs7O1FBSVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQVhEOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1csTUFBZTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFnQkQsNkNBQVk7Ozs7SUFBWixVQUFhLEtBQVk7UUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7O2dCQXpGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFFdkMsb2hCQUE2QztvQkFDN0MsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O29CQUUvQyxJQUFJLEVBQUU7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTt3QkFDOUIsaUJBQWlCLEVBQUUsaUNBQWlDO3dCQUNwRCxpQkFBaUIsRUFBRSxrQkFBa0I7d0JBQ3JDLHNCQUFzQixFQUFFLGtCQUFrQjt3QkFDMUMsU0FBUyxFQUFFLHNCQUFzQjtxQkFDbEM7O2lCQUNGOzs7O2dCQXJCNEMsaUJBQWlCO2dCQUFTLFVBQVU7Ozt3QkFtQzlFLEtBQUssU0FBQyxPQUFPO3dCQXVCYixLQUFLLFNBQUMsT0FBTzsyQkFPYixLQUFLLFNBQUMsVUFBVTt5QkFNaEIsS0FBSyxTQUFDLFFBQVE7MkJBYWQsS0FBSyxTQUFDLFVBQVU7O0lBY25CLDZCQUFDO0NBQUEsQUEzRkQsQ0FlNEMsZ0JBQWdCLEdBNEUzRDtTQTVFWSxzQkFBc0I7OztJQUVqQyx5Q0FBaUM7O0lBQ2pDLHdDQUEyQzs7SUFHM0Msd0NBQWU7Ozs7Ozs7SUE4QmYsdUNBQThCOzs7Ozs7O0lBTzlCLDBDQUFvQzs7Ozs7O0lBbUJwQywwQ0FBb0M7O0lBRXhCLG9EQUE2Qzs7SUFDN0MsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBJQ2FuRGlzYWJsZVJpcHBsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5pbXBvcnQgeyBfVGRTdGVwTWl4aW5CYXNlLCBTdGVwU3RhdGUgfSBmcm9tICcuLi8uLi9zdGVwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1t0ZC1zdGVwLWxpbmtdLFt0ZFN0ZXBMaW5rXScsXG4gIHN0eWxlVXJsczogWycuL25hdi1zdGVwLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1zdGVwLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRkLXN0ZXAtbGlua10nOiAndHJ1ZScsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IC0xIDogKHRhYkluZGV4IHx8IDApJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnLFxuICAgICdbY2xhc3MubWF0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgICAnKGNsaWNrKSc6ICdfaGFuZGxlQ2xpY2soJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2U3RlcExpbmtDb21wb25lbnQgZXh0ZW5kcyBfVGRTdGVwTWl4aW5CYXNlIGltcGxlbWVudHMgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcblxuICBwcml2YXRlIF9hY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3RhdGU6IFN0ZXBTdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuXG4gIC8vIE51bWJlciB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gIG51bWJlcjogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3RhdGUgb2YgY29tcG9uZW50IGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW1N0ZXBTdGF0ZS5Ob25lIHwgJ25vbmUnXS5cbiAgICovXG4gIEBJbnB1dCgnc3RhdGUnKVxuICBzZXQgc3RhdGUoc3RhdGU6IFN0ZXBTdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgU3RlcFN0YXRlLkNvbXBsZXRlOlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5Db21wbGV0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFN0ZXBTdGF0ZS5SZXF1aXJlZDpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuUmVxdWlyZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGdldCBzdGF0ZSgpOiBTdGVwU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsYWJlbD86IHN0cmluZ1xuICAgKiBMYWJlbCB0byBkaXNwbGF5IGluIHN0ZXAgaGVhZGVyXG4gICAqIERlZmF1bHRzIHRvIGVtcHR5XG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICogU3VibGFiZWwgdG8gZGlzcGxheSBpbiBzdGVwIGhlYWRlclxuICAgKiBEZWZhdWx0cyB0byBlbXB0eVxuICAgKi9cbiAgQElucHV0KCdzdWJsYWJlbCcpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBjb21wb25lbnQgYmV0d2VlbiBhY3RpdmUvZGVhY3RpdmUuXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGFjdGl2ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgLyoqXG4gICAqIHRhYkluZGV4PzogbnVtYmVyXG4gICAqIHRhYkluZGV4IGZvciBjb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgndGFiSW5kZXgnKSB0YWJJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgX2hhbmRsZUNsaWNrKGNsaWNrOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjbGljay5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xpY2suc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==