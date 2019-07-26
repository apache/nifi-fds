(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/core'), require('@angular/material/icon'), require('@angular/cdk/portal'), require('@covalent/core/common'), require('@angular/core'), require('@angular/cdk/coercion'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/expansion-panel', ['exports', '@angular/common', '@angular/material/core', '@angular/material/icon', '@angular/cdk/portal', '@covalent/core/common', '@angular/core', '@angular/cdk/coercion', 'rxjs/operators', 'rxjs'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['expansion-panel'] = {}),global.ng.common,global.ng.material.core,global.ng.material.icon,global.ng.cdk.portal,global.covalent.core.common,global.ng.core,global.ng.cdk.coercion,global.rxjs.operators,global.rxjs));
}(this, (function (exports,common,core,icon,portal,common$1,core$1,coercion,operators,rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
            { type: core$1.Directive, args: [{
                        selector: '[td-expansion-panel-header]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelHeaderDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdExpansionPanelHeaderDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelLabelDirective, _super);
        function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelLabelDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-expansion-panel-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelLabelDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdExpansionPanelLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelSublabelDirective, _super);
        function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelSublabelDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-expansion-panel-sublabel]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelSublabelDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdExpansionPanelSublabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSummaryComponent = /** @class */ (function () {
        function TdExpansionPanelSummaryComponent() {
        }
        TdExpansionPanelSummaryComponent.decorators = [
            { type: core$1.Component, args: [{
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
    var _TdExpansionPanelMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdExpansionPanelBase));
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
            _this.expanded = new core$1.EventEmitter();
            /**
             * collapsed?: function
             * Event emitted when [TdExpansionPanelComponent] is collapsed.
             */
            _this.collapsed = new core$1.EventEmitter();
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
            return _this;
        }
        Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (expand) {
                this._setExpand(coercion.coerceBooleanProperty(expand));
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
            { type: core$1.Component, args: [{
                        selector: 'td-expansion-panel',
                        template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                        inputs: ['disabled', 'disableRipple'],
                        animations: [
                            common$1.tdCollapseAnimation,
                            common$1.tdRotateAnimation,
                        ],
                        styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdExpansionPanelComponent.propDecorators = {
            expansionPanelHeader: [{ type: core$1.ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
            expansionPanelLabel: [{ type: core$1.ContentChild, args: [TdExpansionPanelLabelDirective,] }],
            expansionPanelSublabel: [{ type: core$1.ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
            label: [{ type: core$1.Input }],
            sublabel: [{ type: core$1.Input }],
            expand: [{ type: core$1.Input, args: ['expand',] }],
            expanded: [{ type: core$1.Output }],
            collapsed: [{ type: core$1.Output }]
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
            this._destroyed = new rxjs.Subject();
            this._stopWatchingPanels = new rxjs.Subject();
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
             */ function (multi) {
                this._multi = coercion.coerceBooleanProperty(multi);
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
                    .pipe(operators.takeUntil(this._destroyed))
                    .subscribe(function (expansionPanels) {
                    _this._stopWatchingPanels.next(true);
                    _this._stopWatchingPanels.unsubscribe();
                    _this._stopWatchingPanels = new rxjs.Subject();
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
                        .pipe(operators.takeUntil(_this._stopWatchingPanels))
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
                        .pipe(operators.takeUntil(_this._stopWatchingPanels))
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
            { type: core$1.Component, args: [{
                        selector: 'td-expansion-panel-group',
                        template: "<ng-content></ng-content>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelGroupComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdExpansionPanelGroupComponent.propDecorators = {
            multi: [{ type: core$1.Input, args: ['multi',] }],
            expansionPanels: [{ type: core$1.ContentChildren, args: [TdExpansionPanelComponent,] }]
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
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core.MatRippleModule,
                            icon.MatIconModule,
                            portal.PortalModule,
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

    exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
    exports.TdExpansionPanelHeaderDirective = TdExpansionPanelHeaderDirective;
    exports.TdExpansionPanelLabelDirective = TdExpansionPanelLabelDirective;
    exports.TdExpansionPanelSublabelDirective = TdExpansionPanelSublabelDirective;
    exports.TdExpansionPanelSummaryComponent = TdExpansionPanelSummaryComponent;
    exports.TdExpansionPanelBase = TdExpansionPanelBase;
    exports._TdExpansionPanelMixinBase = _TdExpansionPanelMixinBase;
    exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
    exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-expansion-panel.umd.js.map