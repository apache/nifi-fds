(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/tabs'), require('@angular/forms'), require('@angular/cdk/coercion'), require('@angular/core'), require('@angular/cdk/portal'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/tab-select', ['exports', '@angular/common', '@angular/material/tabs', '@angular/forms', '@angular/cdk/coercion', '@angular/core', '@angular/cdk/portal', '@covalent/core/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['tab-select'] = {}),global.ng.common,global.ng.material.tabs,global.ng.forms,global.ng.cdk.coercion,global.ng.core,global.ng.cdk.portal,global.covalent.core.common));
}(this, (function (exports,common,tabs,forms,coercion,core,portal,common$1) { 'use strict';

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
    var TdTabOptionBase = /** @class */ (function () {
        function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
            this._viewContainerRef = _viewContainerRef;
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabOptionBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabOptionMixinBase = common$1.mixinDisabled(TdTabOptionBase);
    var TdTabOptionComponent = /** @class */ (function (_super) {
        __extends(TdTabOptionComponent, _super);
        function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
            return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
        }
        Object.defineProperty(TdTabOptionComponent.prototype, "content", {
            get: /**
             * @return {?}
             */ function () {
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
                this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
            };
        TdTabOptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-tab-option',
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        inputs: ['disabled'],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdTabOptionComponent.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdTabOptionComponent.propDecorators = {
            _content: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            value: [{ type: core.Input, args: ['value',] }]
        };
        return TdTabOptionComponent;
    }(_TdTabOptionMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTabSelectBase = /** @class */ (function () {
        function TdTabSelectBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabSelectBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabSelectMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(common$1.mixinDisableRipple(TdTabSelectBase)));
    var TdTabSelectComponent = /** @class */ (function (_super) {
        __extends(TdTabSelectComponent, _super);
        function TdTabSelectComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._subs = [];
            _this._values = [];
            _this._selectedIndex = 0;
            _this._stretchTabs = false;
            /**
             * Event that emits whenever the raw value of the select changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             */
            _this.valueChange = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
            get: /**
             * @return {?}
             */ function () {
                return this._tabOptions ? this._tabOptions.toArray() : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
            get: /**
             * @return {?}
             */ function () {
                return this._stretchTabs;
            },
            /**
             * Makes the tabs stretch to fit the parent container.
             */
            set: /**
             * Makes the tabs stretch to fit the parent container.
             * @param {?} stretchTabs
             * @return {?}
             */ function (stretchTabs) {
                this._stretchTabs = coercion.coerceBooleanProperty(stretchTabs);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // subscribe to check if value changes and update the selectedIndex internally.
                this._subs.push(this.valueChanges.subscribe(function (value) {
                    _this._setValue(value);
                }));
            };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // subscribe to listen to any tab changes.
                this._refreshValues();
                this._subs.push(this._tabOptions.changes.subscribe(function () {
                    _this._refreshValues();
                }));
                // initialize value
                Promise.resolve().then(function () {
                    _this._setValue(_this.value);
                });
            };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._subs && this._subs.length) {
                    this._subs.forEach(function (sub) {
                        sub.unsubscribe();
                    });
                }
            };
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         */
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
        TdTabSelectComponent.prototype.selectedIndexChange = /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
            function (selectedIndex) {
                this._selectedIndex = selectedIndex;
                /** @type {?} */
                var value = this._values[selectedIndex];
                this.value = value;
                this.valueChange.emit(value);
                this.onChange(value);
            };
        /**
         * Refresh the values array whenever the number of tabs gets updated
         */
        /**
         * Refresh the values array whenever the number of tabs gets updated
         * @return {?}
         */
        TdTabSelectComponent.prototype._refreshValues = /**
         * Refresh the values array whenever the number of tabs gets updated
         * @return {?}
         */
            function () {
                this._values = this.tabOptions.map(function (tabOption) {
                    return tabOption.value;
                });
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         */
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @param {?} value
         * @return {?}
         */
        TdTabSelectComponent.prototype._setValue = /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var index = this._values.indexOf(value);
                if (index > -1) {
                    this._selectedIndex = index;
                }
                else {
                    this.value = this._values.length ? this._values[0] : undefined;
                    this._selectedIndex = 0;
                }
                this._changeDetectorRef.markForCheck();
            };
        TdTabSelectComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdTabSelectComponent; }),
                                multi: true,
                            }],
                        selector: 'td-tab-select',
                        template: "<mat-tab-group [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n                [backgroundColor]=\"backgroundColor\"\n                [color]=\"color\"\n                [disableRipple]=\"disableRipple\"\n                [selectedIndex]=\"selectedIndex\"\n                (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <ng-template let-tabOption\n                ngFor\n                [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\">\n        </ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                        /* tslint:disable-next-line */
                        inputs: ['value', 'disabled', 'disableRipple'],
                        styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdTabSelectComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        TdTabSelectComponent.propDecorators = {
            _tabOptions: [{ type: core.ContentChildren, args: [TdTabOptionComponent,] }],
            stretchTabs: [{ type: core.Input, args: ['stretchTabs',] }],
            color: [{ type: core.Input, args: ['color',] }],
            backgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            valueChange: [{ type: core.Output }]
        };
        return TdTabSelectComponent;
    }(_TdTabSelectMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentTabSelectModule = /** @class */ (function () {
        function CovalentTabSelectModule() {
        }
        CovalentTabSelectModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            TdTabSelectComponent,
                            TdTabOptionComponent,
                        ],
                        // directives, components, and pipes owned by this NgModule
                        imports: [
                            /** Angular Modules */
                            common.CommonModule,
                            forms.FormsModule,
                            /** Material Modules */
                            portal.PortalModule,
                            tabs.MatTabsModule,
                        ],
                        // modules needed to run this module
                        exports: [
                            TdTabSelectComponent,
                            TdTabOptionComponent,
                        ],
                    },] }
        ];
        return CovalentTabSelectModule;
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

    exports.CovalentTabSelectModule = CovalentTabSelectModule;
    exports.TdTabSelectBase = TdTabSelectBase;
    exports._TdTabSelectMixinBase = _TdTabSelectMixinBase;
    exports.TdTabSelectComponent = TdTabSelectComponent;
    exports.TdTabOptionBase = TdTabOptionBase;
    exports._TdTabOptionMixinBase = _TdTabOptionMixinBase;
    exports.TdTabOptionComponent = TdTabOptionComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-tab-select.umd.js.map