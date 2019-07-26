/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation, } from '@covalent/core/common';
var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelHeaderDirective, _super);
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelHeaderDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-expansion-panel-header]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelHeaderDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdExpansionPanelHeaderDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelHeaderDirective };
var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelLabelDirective, _super);
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-expansion-panel-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelLabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdExpansionPanelLabelDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelLabelDirective };
var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelSublabelDirective, _super);
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    TdExpansionPanelSublabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[td-expansion-panel-sublabel]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelSublabelDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return TdExpansionPanelSublabelDirective;
}(TemplatePortalDirective));
export { TdExpansionPanelSublabelDirective };
var TdExpansionPanelSummaryComponent = /** @class */ (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    TdExpansionPanelSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-summary',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return TdExpansionPanelSummaryComponent;
}());
export { TdExpansionPanelSummaryComponent };
var TdExpansionPanelBase = /** @class */ (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
export { TdExpansionPanelBase };
/* tslint:disable-next-line */
/** @type {?} */
export var _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdExpansionPanelComponent, _super);
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        _this.expanded = new EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        _this.collapsed = new EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
        return _this;
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expand;
        },
        /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         */
        set: /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         * @param {?} expand
         * @return {?}
         */
        function (expand) {
            this._setExpand(coerceBooleanProperty(expand));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     */
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.clickEvent = /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    function () {
        this._setExpand(!this._expand);
    };
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.toggle = /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    function () {
        return this._setExpand(!this._expand);
    };
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.open = /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    function () {
        return this._setExpand(true);
    };
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     */
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.close = /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    function () {
        return this._setExpand(false);
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     */
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @param {?} newExpand
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._setExpand = /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @param {?} newExpand
     * @return {?}
     */
    function (newExpand) {
        if (this.disabled) {
            return false;
        }
        if (this._expand !== newExpand) {
            this._expand = newExpand;
            if (newExpand) {
                this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                this._onExpanded();
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                this._onCollapsed();
            }
            return true;
        }
        return false;
    };
    /**
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._onExpanded = /**
     * @return {?}
     */
    function () {
        this.expanded.emit(undefined);
    };
    /**
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._onCollapsed = /**
     * @return {?}
     */
    function () {
        this.collapsed.emit(undefined);
    };
    TdExpansionPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-panel',
                    template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                    inputs: ['disabled', 'disableRipple'],
                    animations: [
                        tdCollapseAnimation,
                        tdRotateAnimation,
                    ],
                    styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdExpansionPanelComponent.propDecorators = {
        expansionPanelHeader: [{ type: ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
        expansionPanelLabel: [{ type: ContentChild, args: [TdExpansionPanelLabelDirective,] }],
        expansionPanelSublabel: [{ type: ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
        label: [{ type: Input }],
        sublabel: [{ type: Input }],
        expand: [{ type: Input, args: ['expand',] }],
        expanded: [{ type: Output }],
        collapsed: [{ type: Output }]
    };
    return TdExpansionPanelComponent;
}(_TdExpansionPanelMixinBase));
export { TdExpansionPanelComponent };
if (false) {
    /** @type {?} */
    TdExpansionPanelComponent.prototype._expand;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelHeader;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelLabel;
    /** @type {?} */
    TdExpansionPanelComponent.prototype.expansionPanelSublabel;
    /**
     * label?: string
     * Sets label of [TdExpansionPanelComponent] header.
     * Defaults to 'Click to expand'
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.label;
    /**
     * sublabel?: string
     * Sets sublabel of [TdExpansionPanelComponent] header.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.sublabel;
    /**
     * expanded?: function
     * Event emitted when [TdExpansionPanelComponent] is expanded.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.expanded;
    /**
     * collapsed?: function
     * Event emitted when [TdExpansionPanelComponent] is collapsed.
     * @type {?}
     */
    TdExpansionPanelComponent.prototype.collapsed;
    /** @type {?} */
    TdExpansionPanelComponent.prototype._renderer;
    /** @type {?} */
    TdExpansionPanelComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQ2hGLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQ0wsbUJBQW1CLEVBRW5CLGFBQWEsRUFFYixrQkFBa0IsRUFDbEIsaUJBQWlCLEdBQ2xCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0I7SUFHcUQsMkRBQXVCO0lBQzFFLHlDQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO2VBQzNFLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkFORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztpQkFDbkQ7Ozs7Z0JBakI2QyxXQUFXO2dCQUFFLGdCQUFnQjs7SUFzQjNFLHNDQUFDO0NBQUEsQUFQRCxDQUdxRCx1QkFBdUIsR0FJM0U7U0FKWSwrQkFBK0I7QUFNNUM7SUFHb0QsMERBQXVCO0lBQ3pFLHdDQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO2VBQzNFLGtCQUFNLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUN0QyxDQUFDOztnQkFORixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztpQkFDbEQ7Ozs7Z0JBMUI2QyxXQUFXO2dCQUFFLGdC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REFBcUc7O0lBQ3JHLHdEQUFrRzs7SUFDbEcsMkRBQTJHOzs7Ozs7O0lBTzNHLDBDQUF1Qjs7Ozs7O0lBTXZCLDZDQUEwQjs7Ozs7O0lBa0IxQiw2Q0FBa0U7Ozs7OztJQU1sRSw4Q0FBbUU7O0lBRXZELDhDQUE0Qjs7SUFDNUIsZ0RBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGQsXG4gICAgICAgICBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7XG4gIHRkQ29sbGFwc2VBbmltYXRpb24sXG4gIElDYW5EaXNhYmxlLFxuICBtaXhpbkRpc2FibGVkLFxuICBJQ2FuRGlzYWJsZVJpcHBsZSxcbiAgbWl4aW5EaXNhYmxlUmlwcGxlLFxuICB0ZFJvdGF0ZUFuaW1hdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtZXhwYW5zaW9uLXBhbmVsLXN1YmxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1leHBhbnNpb24tc3VtbWFyeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIFRkRXhwYW5zaW9uUGFuZWxTdW1tYXJ5Q29tcG9uZW50IHt9XG5cbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsQmFzZSB7fVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRFeHBhbnNpb25QYW5lbE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkRXhwYW5zaW9uUGFuZWxCYXNlKSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWV4cGFuc2lvbi1wYW5lbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICAgIHRkUm90YXRlQW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50IGV4dGVuZHMgX1RkRXhwYW5zaW9uUGFuZWxNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUge1xuXG4gIHByaXZhdGUgX2V4cGFuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSkgZXhwYW5zaW9uUGFuZWxIZWFkZXI6IFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbExhYmVsOiBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlKSBleHBhbnNpb25QYW5lbFN1YmxhYmVsOiBUZEV4cGFuc2lvblBhbmVsU3VibGFiZWxEaXJlY3RpdmU7XG5cbiAgLyoqXG4gICAqIGxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgbGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICogRGVmYXVsdHMgdG8gJ0NsaWNrIHRvIGV4cGFuZCdcbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqIFNldHMgc3VibGFiZWwgb2YgW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGV4cGFuZD86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gYmV0d2VlbiBleHBhbmQvY29sbGFwc2UuXG4gICAqL1xuICBASW5wdXQoJ2V4cGFuZCcpXG4gIHNldCBleHBhbmQoZXhwYW5kOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShleHBhbmQpKTtcbiAgfVxuICBnZXQgZXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmQ7XG4gIH1cblxuICAvKipcbiAgICogZXhwYW5kZWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gW1RkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRdIGlzIGV4cGFuZGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGV4cGFuZGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF0gaXMgY29sbGFwc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuc2lvbi1wYW5lbCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XSBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRFeHBhbmQoIXRoaXMuX2V4cGFuZCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGV4cGFuZCBzdGF0ZSBvZiBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEV4cGFuZCghdGhpcy5fZXhwYW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIFtUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGNsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZXRFeHBhbmQoZmFsc2UpO1xuICB9XG5cbiAgLyoqIE1ldGhvZCBleGVjdXRlZCB3aGVuIHRoZSBkaXNhYmxlZCB2YWx1ZSBjaGFuZ2VzICovXG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh2ICYmIHRoaXMuX2V4cGFuZCkge1xuICAgICAgdGhpcy5fZXhwYW5kID0gZmFsc2U7XG4gICAgICB0aGlzLl9vbkNvbGxhcHNlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2hhbmdlIGV4cGFuZCBzdGF0ZSBpbnRlcm5hbGx5IGFuZCBlbWl0IHRoZSBbb25FeHBhbmRlZF0gZXZlbnQgaWYgJ3RydWUnIG9yIFtvbkNvbGxhcHNlZF1cbiAgICogZXZlbnQgaWYgJ2ZhbHNlJy4gKEJsb2NrZWQgaWYgW2Rpc2FibGVkXSBpcyAndHJ1ZScpXG4gICAqL1xuICBwcml2YXRlIF9zZXRFeHBhbmQobmV3RXhwYW5kOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4cGFuZCAhPT0gbmV3RXhwYW5kKSB7XG4gICAgICB0aGlzLl9leHBhbmQgPSBuZXdFeHBhbmQ7XG4gICAgICBpZiAobmV3RXhwYW5kKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uRXhwYW5kZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWV4cGFuZGVkJyk7XG4gICAgICAgIHRoaXMuX29uQ29sbGFwc2VkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25FeHBhbmRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ29sbGFwc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VkLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxufVxuIl19