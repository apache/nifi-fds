(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/bidi'), require('@angular/material/input'), require('rxjs/operators'), require('@angular/core'), require('@angular/forms'), require('@angular/animations'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/search', ['exports', '@angular/common', '@angular/material/icon', '@angular/material/button', '@angular/cdk/bidi', '@angular/material/input', 'rxjs/operators', '@angular/core', '@angular/forms', '@angular/animations', '@covalent/core/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.search = {}),global.ng.common,global.ng.material.icon,global.ng.material.button,global.ng.cdk.bidi,global.ng.material.input,global.rxjs.operators,global.ng.core,global.ng.forms,global.ng.animations,global.covalent.core.common));
}(this, (function (exports,common,icon,button,bidi,input,operators,core,forms,animations,common$1) { 'use strict';

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
    var TdSearchInputBase = /** @class */ (function () {
        function TdSearchInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdSearchInputBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdSearchInputMixinBase = common$1.mixinControlValueAccessor(TdSearchInputBase);
    var TdSearchInputComponent = /** @class */ (function (_super) {
        __extends(TdSearchInputComponent, _super);
        function TdSearchInputComponent(_dir, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._dir = _dir;
            /**
             * showUnderline?: boolean
             * Sets if the input underline should be visible. Defaults to 'false'.
             */
            _this.showUnderline = false;
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 400.
             */
            _this.debounce = 400;
            /**
             * clearIcon?: string
             * The icon used to clear the search input.
             * Defaults to 'cancel' icon.
             */
            _this.clearIcon = 'cancel';
            /**
             * searchDebounce: function($event)
             * Event emitted after the [debounce] timeout.
             */
            _this.onSearchDebounce = new core.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.onSearch = new core.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.onClear = new core.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.onBlur = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */ function () {
                if (this._dir) {
                    return this._dir.dir === 'rtl';
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdSearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._input.ngControl.valueChanges.pipe(operators.debounceTime(this.debounce), operators.skip(1)).subscribe(function (value) {
                    _this._searchTermChanged(value);
                });
            };
        /**
         * Method to focus to underlying input.
         */
        /**
         * Method to focus to underlying input.
         * @return {?}
         */
        TdSearchInputComponent.prototype.focus = /**
         * Method to focus to underlying input.
         * @return {?}
         */
            function () {
                this._input.focus();
            };
        /**
         * @return {?}
         */
        TdSearchInputComponent.prototype.handleBlur = /**
         * @return {?}
         */
            function () {
                this.onBlur.emit(undefined);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdSearchInputComponent.prototype.stopPropagation = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdSearchInputComponent.prototype.handleSearch = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.stopPropagation(event);
                this.onSearch.emit(this.value);
            };
        /**
         * Method to clear the underlying input.
         */
        /**
         * Method to clear the underlying input.
         * @return {?}
         */
        TdSearchInputComponent.prototype.clearSearch = /**
         * Method to clear the underlying input.
         * @return {?}
         */
            function () {
                this.value = '';
                this._changeDetectorRef.markForCheck();
                this.onClear.emit(undefined);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchInputComponent.prototype._searchTermChanged = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.onSearchDebounce.emit(value);
            };
        TdSearchInputComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdSearchInputComponent; }),
                                multi: true,
                            }],
                        selector: 'td-search-input',
                        template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  [appearance]=\"appearance\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n    <span matSuffix *ngIf=\"appearance === 'fill' || appearance === 'outline' || appearance === 'standard'\">\n      <ng-template\n        [ngTemplateOutlet]=\"clearButton\">\n      </ng-template>\n    </span>\n  </mat-form-field>\n  <ng-template\n    *ngIf=\"!appearance || appearance === 'legacy'\"\n    [ngTemplateOutlet]=\"clearButton\">\n  </ng-template>\n</div>\n<ng-template #clearButton>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: ['value'],
                        animations: [
                            animations.trigger('searchState', [
                                animations.state('hide-left', animations.style({
                                    transform: 'translateX(-150%)',
                                    display: 'none',
                                })),
                                animations.state('hide-right', animations.style({
                                    transform: 'translateX(150%)',
                                    display: 'none',
                                })),
                                animations.state('show', animations.style({
                                    transform: 'translateX(0%)',
                                    display: 'block',
                                })),
                                animations.transition('* => show', animations.animate('200ms ease-in')),
                                animations.transition('show => *', animations.animate('200ms ease-out')),
                            ]),
                        ],
                        styles: [":host .td-search-input{overflow-x:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-legacy .mat-form-field-infix{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchInputComponent.ctorParameters = function () {
            return [
                { type: bidi.Dir, decorators: [{ type: core.Optional }] },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdSearchInputComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: [input.MatInput,] }],
            appearance: [{ type: core.Input, args: ['appearance',] }],
            showUnderline: [{ type: core.Input, args: ['showUnderline',] }],
            debounce: [{ type: core.Input, args: ['debounce',] }],
            placeholder: [{ type: core.Input, args: ['placeholder',] }],
            clearIcon: [{ type: core.Input, args: ['clearIcon',] }],
            onSearchDebounce: [{ type: core.Output, args: ['searchDebounce',] }],
            onSearch: [{ type: core.Output, args: ['search',] }],
            onClear: [{ type: core.Output, args: ['clear',] }],
            onBlur: [{ type: core.Output, args: ['blur',] }]
        };
        return TdSearchInputComponent;
    }(_TdSearchInputMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdSearchBoxBase = /** @class */ (function () {
        function TdSearchBoxBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdSearchBoxBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdSearchBoxMixinBase = common$1.mixinControlValueAccessor(TdSearchBoxBase);
    var TdSearchBoxComponent = /** @class */ (function (_super) {
        __extends(TdSearchBoxComponent, _super);
        function TdSearchBoxComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._searchVisible = false;
            /**
             * backIcon?: string
             * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
             * Defaults to 'search' icon.
             */
            _this.backIcon = 'search';
            /**
             * searchIcon?: string
             * The icon used to open/focus the search toggle.
             * Defaults to 'search' icon.
             */
            _this.searchIcon = 'search';
            /**
             * clearIcon?: string
             * The icon used to clear the search input.
             * Defaults to 'cancel' icon.
             */
            _this.clearIcon = 'cancel';
            /**
             * showUnderline?: boolean
             * Sets if the input underline should be visible. Defaults to 'false'.
             */
            _this.showUnderline = false;
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 400.
             */
            _this.debounce = 400;
            /**
             * alwaysVisible?: boolean
             * Sets if the input should always be visible. Defaults to 'false'.
             */
            _this.alwaysVisible = false;
            /**
             * searchDebounce: function($event)
             * Event emitted after the [debounce] timeout.
             */
            _this.onSearchDebounce = new core.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.onSearch = new core.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.onClear = new core.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.onBlur = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchVisible;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when the search icon is clicked.
         */
        /**
         * Method executed when the search icon is clicked.
         * @return {?}
         */
        TdSearchBoxComponent.prototype.searchClicked = /**
         * Method executed when the search icon is clicked.
         * @return {?}
         */
            function () {
                if (!this.alwaysVisible && this._searchVisible) {
                    this.value = '';
                    this.handleClear();
                }
                else if (this.alwaysVisible || !this._searchVisible) {
                    this._searchInput.focus();
                }
                this.toggleVisibility();
            };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.toggleVisibility = /**
         * @return {?}
         */
            function () {
                this._searchVisible = !this._searchVisible;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleSearchDebounce = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.onSearchDebounce.emit(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleSearch = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.onSearch.emit(value);
            };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleClear = /**
         * @return {?}
         */
            function () {
                this.onClear.emit(undefined);
            };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleBlur = /**
         * @return {?}
         */
            function () {
                this.onBlur.emit(undefined);
            };
        TdSearchBoxComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdSearchBoxComponent; }),
                                multi: true,
                            }],
                        selector: 'td-search-box',
                        template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\"\n                   (blur)=\"handleBlur()\">\n  </td-search-input>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        inputs: ['value'],
                        animations: [
                            animations.trigger('inputState', [
                                animations.state('0', animations.style({
                                    width: '0%',
                                    margin: '0px',
                                })),
                                animations.state('1', animations.style({
                                    width: '100%',
                                    margin: animations.AUTO_STYLE,
                                })),
                                animations.transition('0 => 1', animations.animate('200ms ease-in')),
                                animations.transition('1 => 0', animations.animate('200ms ease-out')),
                            ]),
                        ],
                        styles: [":host{display:block}.td-search-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box td-search-input ::ng-deep .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchBoxComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        TdSearchBoxComponent.propDecorators = {
            _searchInput: [{ type: core.ViewChild, args: [TdSearchInputComponent,] }],
            backIcon: [{ type: core.Input, args: ['backIcon',] }],
            searchIcon: [{ type: core.Input, args: ['searchIcon',] }],
            clearIcon: [{ type: core.Input, args: ['clearIcon',] }],
            showUnderline: [{ type: core.Input, args: ['showUnderline',] }],
            debounce: [{ type: core.Input, args: ['debounce',] }],
            alwaysVisible: [{ type: core.Input, args: ['alwaysVisible',] }],
            placeholder: [{ type: core.Input, args: ['placeholder',] }],
            onSearchDebounce: [{ type: core.Output, args: ['searchDebounce',] }],
            onSearch: [{ type: core.Output, args: ['search',] }],
            onClear: [{ type: core.Output, args: ['clear',] }],
            onBlur: [{ type: core.Output, args: ['blur',] }]
        };
        return TdSearchBoxComponent;
    }(_TdSearchBoxMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentSearchModule = /** @class */ (function () {
        function CovalentSearchModule() {
        }
        CovalentSearchModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                        ],
                        declarations: [
                            TdSearchInputComponent,
                            TdSearchBoxComponent,
                        ],
                        exports: [
                            TdSearchInputComponent,
                            TdSearchBoxComponent,
                        ],
                    },] }
        ];
        return CovalentSearchModule;
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

    exports.CovalentSearchModule = CovalentSearchModule;
    exports.TdSearchBoxBase = TdSearchBoxBase;
    exports._TdSearchBoxMixinBase = _TdSearchBoxMixinBase;
    exports.TdSearchBoxComponent = TdSearchBoxComponent;
    exports.TdSearchInputBase = TdSearchInputBase;
    exports._TdSearchInputMixinBase = _TdSearchInputMixinBase;
    exports.TdSearchInputComponent = TdSearchInputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-search.umd.js.map