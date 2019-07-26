import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { __extends } from 'tslib';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';
import { tdCollapseAnimation, mixinDisabled, mixinDisableRipple, tdRotateAnimation } from '@covalent/core/common';
import { Component, Directive, Input, Output, TemplateRef, ViewContainerRef, ContentChild, ElementRef, Renderer2, EventEmitter, ContentChildren, NgModule } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelHeaderDirective, _super);
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
var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelLabelDirective, _super);
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
var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelSublabelDirective, _super);
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
var TdExpansionPanelBase = /** @class */ (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
/* tslint:disable-next-line */
/** @type {?} */
var _TdExpansionPanelMixinBase = mixinDisableRipple(mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = /** @class */ (function (_super) {
    __extends(TdExpansionPanelComponent, _super);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdExpansionPanelGroupComponent = /** @class */ (function () {
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._multi = false;
        this._lastOpenedPanels = [];
        this._destroyed = new Subject();
        this._stopWatchingPanels = new Subject();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    Object.defineProperty(TdExpansionPanelGroupComponent.prototype, "multi", {
        /**
         * multi?: boolean
         * Sets whether multiple panels can be opened at a given time.
         * Set to false for accordion mode.
         * Defaults to false.
         */
        set: /**
         * multi?: boolean
         * Sets whether multiple panels can be opened at a given time.
         * Set to false for accordion mode.
         * Defaults to false.
         * @param {?} multi
         * @return {?}
         */
        function (multi) {
            this._multi = coerceBooleanProperty(multi);
            if (this._multi === false && this._lastOpenedPanels.length > 0) {
                this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next(true);
        this._destroyed.unsubscribe();
        this._stopWatchingPanels.next(true);
        this._stopWatchingPanels.unsubscribe();
    };
    /**
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._multi) {
            /** @type {?} */
            var openedPanels = this.expansionPanels.filter(function (expansionPanel) { return expansionPanel.expand; });
            /** @type {?} */
            var numOpenedPanels = openedPanels.length;
            if (numOpenedPanels > 1) {
                this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
            }
        }
        this._attachListeners(this.expansionPanels);
        this.expansionPanels.changes
            .pipe(takeUntil(this._destroyed))
            .subscribe(function (expansionPanels) {
            _this._stopWatchingPanels.next(true);
            _this._stopWatchingPanels.unsubscribe();
            _this._stopWatchingPanels = new Subject();
            _this._attachListeners(expansionPanels);
        });
    };
    /**
     * Opens all expansion panels, only if multi set set to true.
     */
    /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.openAll = /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    function () {
        if (this._multi) {
            this.expansionPanels.forEach(function (expansionPanel) {
                expansionPanel.open();
            });
        }
    };
    /**
     * Closes all expansion panels
     */
    /**
     * Closes all expansion panels
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.closeAll = /**
     * Closes all expansion panels
     * @return {?}
     */
    function () {
        this.expansionPanels.forEach(function (expansionPanel) {
            expansionPanel.close();
        });
    };
    /**
     * @param {?} expansionPanels
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype._attachListeners = /**
     * @param {?} expansionPanels
     * @return {?}
     */
    function (expansionPanels) {
        var _this = this;
        this._lastOpenedPanels = [];
        expansionPanels.forEach(function (expansionPanel) {
            expansionPanel.expanded
                .pipe(takeUntil(_this._stopWatchingPanels))
                .subscribe(function () {
                /** @type {?} */
                var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    _this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
                _this._lastOpenedPanels.push(expansionPanel);
                if (!_this._multi) {
                    _this._closeAllExcept(expansionPanel);
                }
            });
            expansionPanel.collapsed
                .pipe(takeUntil(_this._stopWatchingPanels))
                .subscribe(function () {
                /** @type {?} */
                var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    _this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
            });
        });
    };
    /**
     * @param {?} expansionPanel
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype._closeAllExcept = /**
     * @param {?} expansionPanel
     * @return {?}
     */
    function (expansionPanel) {
        this.expansionPanels.forEach(function (panel) {
            if (panel !== expansionPanel) {
                panel.close();
            }
        });
    };
    TdExpansionPanelGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-panel-group',
                    template: "<ng-content></ng-content>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelGroupComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdExpansionPanelGroupComponent.propDecorators = {
        multi: [{ type: Input, args: ['multi',] }],
        expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent,] }]
    };
    return TdExpansionPanelGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
var CovalentExpansionPanelModule = /** @class */ (function () {
    function CovalentExpansionPanelModule() {
    }
    CovalentExpansionPanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatRippleModule,
                        MatIconModule,
                        PortalModule,
                    ],
                    declarations: [
                        TD_EXPANSION_PANEL,
                    ],
                    exports: [
                        TD_EXPANSION_PANEL,
                    ],
                },] }
    ];
    return CovalentExpansionPanelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentExpansionPanelModule, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent, TdExpansionPanelBase, _TdExpansionPanelMixinBase, TdExpansionPanelComponent, TdExpansionPanelGroupComponent };

//# sourceMappingURL=covalent-core-expansion-panel.js.map