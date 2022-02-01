(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/material/tabs'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/tab-select', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/cdk/portal', '@angular/material/tabs', '@angular/cdk/coercion', '@covalent/core/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['tab-select'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.cdk.portal, global.ng.material.tabs, global.ng.cdk.coercion, global.covalent.core.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common$1, forms, portal, tabs, coercion, common, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var TdTabOptionBase = /** @class */ (function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} _changeDetectorRef
         */
        function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
            this._viewContainerRef = _viewContainerRef;
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabOptionBase;
    }());
    if (false) {
        /** @type {?} */
        TdTabOptionBase.prototype._viewContainerRef;
        /** @type {?} */
        TdTabOptionBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabOptionMixinBase = common.mixinDisabled(TdTabOptionBase);
    var TdTabOptionComponent = /** @class */ (function (_super) {
        __extends(TdTabOptionComponent, _super);
        /**
         * @param {?} _viewContainerRef
         * @param {?} _changeDetectorRef
         */
        function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
            return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
        }
        Object.defineProperty(TdTabOptionComponent.prototype, "content", {
            /**
             * @return {?}
             */
            get: function () {
                return this._contentPortal;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabOptionComponent.prototype.ngOnInit = function () {
            this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
        };
        return TdTabOptionComponent;
    }(_TdTabOptionMixinBase));
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
    TdTabOptionComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef },
        { type: core.ChangeDetectorRef }
    ]; };
    TdTabOptionComponent.propDecorators = {
        _content: [{ type: core.ViewChild, args: [core.TemplateRef, { static: true },] }],
        value: [{ type: core.Input }]
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

    var TdTabSelectBase = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         */
        function TdTabSelectBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabSelectBase;
    }());
    if (false) {
        /** @type {?} */
        TdTabSelectBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabSelectMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(common.mixinDisableRipple(TdTabSelectBase)));
    var TdTabSelectComponent = /** @class */ (function (_super) {
        __extends(TdTabSelectComponent, _super);
        /**
         * @param {?} _changeDetectorRef
         * @param {?} _ngZone
         * @param {?} _elementRef
         */
        function TdTabSelectComponent(_changeDetectorRef, _ngZone, _elementRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._ngZone = _ngZone;
            _this._elementRef = _elementRef;
            _this._destroy = new rxjs.Subject();
            _this._widthSubject = new rxjs.Subject();
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
            /**
             * @return {?}
             */
            get: function () {
                return this._selectedIndex;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
            /**
             * @return {?}
             */
            get: function () {
                return this._tabOptions ? this._tabOptions.toArray() : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
            /**
             * @return {?}
             */
            get: function () {
                return this._stretchTabs;
            },
            /**
             * Makes the tabs stretch to fit the parent container.
             * @param {?} stretchTabs
             * @return {?}
             */
            set: function (stretchTabs) {
                this._stretchTabs = coercion.coerceBooleanProperty(stretchTabs);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            // set a timer to check every 250ms if the width has changed.
            // if the width has changed, then we realign the ink bar
            this._ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                _this._widthSubject
                    .asObservable()
                    .pipe(operators.takeUntil(_this._destroy), operators.distinctUntilChanged(), operators.debounceTime(100))
                    .subscribe(( /**
             * @return {?}
             */function () {
                    _this._ngZone.run(( /**
                     * @return {?}
                     */function () {
                        _this._matTabGroup.realignInkBar();
                        _this._changeDetectorRef.markForCheck();
                    }));
                }));
                rxjs.timer(500, 250)
                    .pipe(operators.takeUntil(_this._destroy))
                    .subscribe(( /**
             * @return {?}
             */function () {
                    if (_this._elementRef && _this._elementRef.nativeElement) {
                        _this._widthSubject.next((( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width);
                    }
                }));
            }));
            // subscribe to check if value changes and update the selectedIndex internally.
            this.valueChanges.pipe(operators.takeUntil(this._destroy)).subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                _this._setValue(value);
            }));
        };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            // subscribe to listen to any tab changes.
            this._refreshValues();
            this._tabOptions.changes.pipe(operators.takeUntil(this._destroy)).subscribe(( /**
             * @return {?}
             */function () {
                _this._refreshValues();
            }));
            // initialize value
            Promise.resolve().then(( /**
             * @return {?}
             */function () {
                _this._setValue(_this.value);
            }));
        };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnDestroy = function () {
            this._destroy.next(true);
            this._destroy.unsubscribe();
        };
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
        TdTabSelectComponent.prototype.selectedIndexChange = function (selectedIndex) {
            this._selectedIndex = selectedIndex;
            /** @type {?} */
            var value = this._values[selectedIndex];
            this.value = value;
            this.valueChange.emit(value);
            this.onChange(value);
        };
        /**
         * Refresh the values array whenever the number of tabs gets updated
         * @private
         * @return {?}
         */
        TdTabSelectComponent.prototype._refreshValues = function () {
            this._values = this.tabOptions.map(( /**
             * @param {?} tabOption
             * @return {?}
             */function (tabOption) {
                return tabOption.value;
            }));
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @private
         * @param {?} value
         * @return {?}
         */
        TdTabSelectComponent.prototype._setValue = function (value) {
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
        return TdTabSelectComponent;
    }(_TdTabSelectMixinBase));
    TdTabSelectComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(( /**
                             * @return {?}
                             */function () { return TdTabSelectComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-tab-select',
                    template: "<mat-tab-group\n  [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n  [backgroundColor]=\"backgroundColor\"\n  [color]=\"color\"\n  [disableRipple]=\"disableRipple\"\n  [selectedIndex]=\"selectedIndex\"\n  (selectedIndexChange)=\"selectedIndexChange($event)\"\n>\n  <ng-template let-tabOption ngFor [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\"></ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                    /* tslint:disable-next-line */
                    inputs: ['value', 'disabled', 'disableRipple'],
                    styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
                }] }
    ];
    /** @nocollapse */
    TdTabSelectComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: core.ElementRef }
    ]; };
    TdTabSelectComponent.propDecorators = {
        _matTabGroup: [{ type: core.ViewChild, args: [tabs.MatTabGroup, { static: true },] }],
        _tabOptions: [{ type: core.ContentChildren, args: [TdTabOptionComponent, { descendants: true },] }],
        stretchTabs: [{ type: core.Input, args: ['stretchTabs',] }],
        color: [{ type: core.Input }],
        backgroundColor: [{ type: core.Input }],
        valueChange: [{ type: core.Output }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._destroy;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._widthSubject;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._values;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._selectedIndex;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._stretchTabs;
        /** @type {?} */
        TdTabSelectComponent.prototype._matTabGroup;
        /**
         * Gets all tab option children
         * @type {?}
         */
        TdTabSelectComponent.prototype._tabOptions;
        /**
         * Color of the tab group.
         * @type {?}
         */
        TdTabSelectComponent.prototype.color;
        /**
         * Background color of the tab group.
         * @type {?}
         */
        TdTabSelectComponent.prototype.backgroundColor;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @type {?}
         */
        TdTabSelectComponent.prototype.valueChange;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._ngZone;
        /**
         * @type {?}
         * @private
         */
        TdTabSelectComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: tab-select.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentTabSelectModule = /** @class */ (function () {
        function CovalentTabSelectModule() {
        }
        return CovalentTabSelectModule;
    }());
    CovalentTabSelectModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TdTabSelectComponent, TdTabOptionComponent],
                    // directives, components, and pipes owned by this NgModule
                    imports: [
                        /** Angular Modules */
                        common$1.CommonModule,
                        forms.FormsModule,
                        /** Material Modules */
                        portal.PortalModule,
                        tabs.MatTabsModule,
                    ],
                    // modules needed to run this module
                    exports: [TdTabSelectComponent, TdTabOptionComponent],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-core-tab-select.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentTabSelectModule = CovalentTabSelectModule;
    exports.TdTabOptionBase = TdTabOptionBase;
    exports.TdTabOptionComponent = TdTabOptionComponent;
    exports.TdTabSelectBase = TdTabSelectBase;
    exports.TdTabSelectComponent = TdTabSelectComponent;
    exports._TdTabOptionMixinBase = _TdTabOptionMixinBase;
    exports._TdTabSelectMixinBase = _TdTabSelectMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-tab-select.umd.js.map
