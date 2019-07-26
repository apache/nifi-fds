/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { LayoutToggle } from './layout-toggle.class';
var TdLayoutToggleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutToggleDirective, _super);
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        set: /**
         * @param {?} tdLayoutToggle
         * @return {?}
         */
        function (tdLayoutToggle) {
            this.disabled = !((/** @type {?} */ (tdLayoutToggle)) === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.toggle();
    };
    TdLayoutToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutToggle]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutToggleDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutToggleDirective.propDecorators = {
        tdLayoutToggle: [{ type: Input, args: ['tdLayoutToggle',] }]
    };
    return TdLayoutToggleDirective;
}(LayoutToggle));
export { TdLayoutToggleDirective };
var TdLayoutCloseDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutCloseDirective, _super);
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        set: /**
         * @param {?} tdLayoutClose
         * @return {?}
         */
        function (tdLayoutClose) {
            this.disabled = !((/** @type {?} */ (tdLayoutClose)) === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutCloseDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.close();
    };
    TdLayoutCloseDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutClose]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutCloseDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutCloseDirective.propDecorators = {
        tdLayoutClose: [{ type: Input, args: ['tdLayoutClose',] }]
    };
    return TdLayoutCloseDirective;
}(LayoutToggle));
export { TdLayoutCloseDirective };
var TdLayoutOpenDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdLayoutOpenDirective, _super);
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        set: /**
         * @param {?} tdLayoutOpen
         * @return {?}
         */
        function (tdLayoutOpen) {
            this.disabled = !((/** @type {?} */ (tdLayoutOpen)) === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutOpenDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this._layout.open();
    };
    TdLayoutOpenDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLayoutOpen]',
                },] }
    ];
    /** @nocollapse */
    TdLayoutOpenDirective.ctorParameters = function () { return [
        { type: TdLayoutComponent, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(function () { return TdLayoutComponent; }),] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdLayoutOpenDirective.propDecorators = {
        tdLayoutClose: [{ type: Input, args: ['tdLayoutOpen',] }]
    };
    return TdLayoutOpenDirective;
}(LayoutToggle));
export { TdLayoutOpenDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmRpcmVjdGl2ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQuZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJEO0lBRzZDLG1EQUFZO0lBT3ZELGlDQUFxRSxNQUF5QixFQUNsRixRQUFtQixFQUNuQixVQUFzQjtlQUNoQyxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBVEQsc0JBQ0ksbURBQWM7Ozs7O1FBRGxCLFVBQ21CLGNBQXVCO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLGNBQWMsRUFBQSxLQUFLLEVBQUUsSUFBSSxjQUFjLENBQUMsQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTs7OztJQVFELHlDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFMUSxpQkFBaUIsdUJBYVgsUUFBUSxZQUFJLE1BQU0sU0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO2dCQWRoQyxTQUFTO2dCQUFFLFVBQVU7OztpQ0FTdkQsS0FBSyxTQUFDLGdCQUFnQjs7SUFjekIsOEJBQUM7Q0FBQSxBQW5CRCxDQUc2QyxZQUFZLEdBZ0J4RDtTQWhCWSx1QkFBdUI7QUFrQnBDO0lBRzRDLGtEQUFZO0lBT3RELGdDQUFxRSxNQUF5QixFQUNsRixRQUFtQixFQUNuQixVQUFzQjtlQUNoQyxrQkFBTSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBVEQsc0JBQ0ksaURBQWE7Ozs7O1FBRGpCLFVBQ2tCLGFBQXNCO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLG1CQUFLLGFBQWEsRUFBQSxLQUFLLEVBQUUsSUFBSSxhQUFhLENBQUMsQ0FBQztRQUNoRSxDQUFDOzs7T0FBQTs7OztJQVFELHdDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2lCQUM1Qjs7OztnQkExQlEsaUJBQWlCLHVCQWtDWCxRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7Z0JBbkNoQyxTQUFTO2dCQUFFLFVBQVU7OztnQ0E4QnZELEtBQUssU0FBQyxlQUFlOztJQWN4Qiw2QkFBQztDQUFBLEFBbkJELENBRzRDLFlBQVksR0FnQnZEO1NBaEJZLHNCQUFzQjtBQWtCbkM7SUFHMkMsaURBQVk7SUFPckQsK0JBQXFFLE1BQXlCLEVBQ2xGLFFBQW1CLEVBQ25CLFVBQXNCO2VBQ2hDLGtCQUFNLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFURCxzQkFDSSxnREFBYTs7Ozs7UUFEakIsVUFDa0IsWUFBcUI7WUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsbUJBQUssWUFBWSxFQUFBLEtBQUssRUFBRSxJQUFJLFlBQVksQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBOzs7O0lBUUQsdUNBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQS9DUSxpQkFBaUIsdUJBdURYLFFBQVEsWUFBSSxNQUFNLFNBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztnQkF4RGhDLFNBQVM7Z0JBQUUsVUFBVTs7O2dDQW1EdkQsS0FBSyxTQUFDLGNBQWM7O0lBY3ZCLDRCQUFDO0NBQUEsQUFuQkQsQ0FHMkMsWUFBWSxHQWdCdEQ7U0FoQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSW5qZWN0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZExheW91dENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXRUb2dnbGUgfSBmcm9tICcuL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRMYXlvdXRUb2dnbGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRUb2dnbGVEaXJlY3RpdmUgZXh0ZW5kcyBMYXlvdXRUb2dnbGUge1xuXG4gIEBJbnB1dCgndGRMYXlvdXRUb2dnbGUnKSBcbiAgc2V0IHRkTGF5b3V0VG9nZ2xlKHRkTGF5b3V0VG9nZ2xlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9ICEoPGFueT50ZExheW91dFRvZ2dsZSA9PT0gJycgfHwgdGRMYXlvdXRUb2dnbGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFRkTGF5b3V0Q29tcG9uZW50KSkgbGF5b3V0OiBUZExheW91dENvbXBvbmVudCxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGxheW91dCwgcmVuZGVyZXIsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTGF5b3V0Q2xvc2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRDbG9zZURpcmVjdGl2ZSBleHRlbmRzIExheW91dFRvZ2dsZSB7XG4gIFxuICBASW5wdXQoJ3RkTGF5b3V0Q2xvc2UnKSBcbiAgc2V0IHRkTGF5b3V0Q2xvc2UodGRMYXlvdXRDbG9zZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhKDxhbnk+dGRMYXlvdXRDbG9zZSA9PT0gJycgfHwgdGRMYXlvdXRDbG9zZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBsYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgICAgICAgICAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIobGF5b3V0LCByZW5kZXJlciwgZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xheW91dC5jbG9zZSgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExheW91dE9wZW5dJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRPcGVuRGlyZWN0aXZlIGV4dGVuZHMgTGF5b3V0VG9nZ2xlIHtcblxuICBASW5wdXQoJ3RkTGF5b3V0T3BlbicpIFxuICBzZXQgdGRMYXlvdXRDbG9zZSh0ZExheW91dE9wZW46IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISg8YW55PnRkTGF5b3V0T3BlbiA9PT0gJycgfHwgdGRMYXlvdXRPcGVuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBUZExheW91dENvbXBvbmVudCkpIGxheW91dDogVGRMYXlvdXRDb21wb25lbnQsXG4gICAgICAgICAgICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihsYXlvdXQsIHJlbmRlcmVyLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5fbGF5b3V0Lm9wZW4oKTtcbiAgfVxufVxuIl19