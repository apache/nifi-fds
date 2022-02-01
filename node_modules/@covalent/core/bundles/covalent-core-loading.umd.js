(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@covalent/core/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/loading', ['exports', '@angular/core', '@angular/common', '@angular/cdk/portal', '@angular/cdk/overlay', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@covalent/core/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.loading = {}), global.ng.core, global.ng.common, global.ng.cdk.portal, global.ng.cdk.overlay, global.ng.material.progressBar, global.ng.material.progressSpinner, global.covalent.core.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common$1, portal, overlay, progressBar, progressSpinner, common, rxjs, operators) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * Generated from: loading.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var LoadingType = {
        Circular: "circular",
        Linear: "linear",
    };
    /** @enum {string} */
    var LoadingMode = {
        Determinate: "determinate",
        Indeterminate: "indeterminate",
    };
    /** @enum {string} */
    var LoadingStrategy = {
        Overlay: "overlay",
        Replace: "replace",
    };
    /** @enum {string} */
    var LoadingStyle = {
        FullScreen: "fullscreen",
        Overlay: "overlay",
        None: "none",
    };
    /** @type {?} */
    var TD_CIRCLE_DIAMETER = 100;
    var TdLoadingComponent = /** @class */ (function () {
        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         */
        function TdLoadingComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._mode = LoadingMode.Indeterminate;
            this._defaultMode = LoadingMode.Indeterminate;
            this._value = 0;
            this._circleDiameter = TD_CIRCLE_DIAMETER;
            /**
             * Flag for animation
             */
            this.animation = false;
            this.style = LoadingStyle.None;
            /**
             * type: LoadingType
             * Sets type of [TdLoadingComponent] rendered.
             */
            this.type = LoadingType.Circular;
            /**
             * color: primary' | 'accent' | 'warn'
             * Sets theme color of [TdLoadingComponent] rendered.
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLoadingComponent.prototype, "mode", {
            /**
             * @return {?}
             */
            get: function () {
                return this._mode;
            },
            /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             * @param {?} mode
             * @return {?}
             */
            set: function (mode) {
                this._defaultMode = mode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdLoadingComponent.prototype, "value", {
            /**
             * @return {?}
             */
            get: function () {
                return this._value;
            },
            /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._value = value;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.ngDoCheck = function () {
            // When overlay is used and the host width has a value greater than 1px
            // set the circle diameter when possible incase the loading component was rendered in a hidden state
            if (this.isOverlay() && this._hostHeight() > 1 && this.animation) {
                this._setCircleDiameter();
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getHeight = function () {
            // Ignore height if style is `overlay` or `fullscreen`.
            // Add height if child elements have a height and style is `none`, else return default height.
            if (this.isOverlay() || this.isFullScreen()) {
                return undefined;
            }
            else {
                return this.height ? this.height + "px" : '150px';
            }
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleDiameter = function () {
            return this._circleDiameter;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleStrokeWidth = function () {
            // we calculate the stroke width by setting it as 10% of its diameter
            /** @type {?} */
            var strokeWidth = this.getCircleDiameter() / 10;
            return Math.abs(strokeWidth);
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isCircular = function () {
            return this.type === LoadingType.Circular;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isLinear = function () {
            return this.type === LoadingType.Linear;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isFullScreen = function () {
            return this.style === LoadingStyle.FullScreen;
        };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isOverlay = function () {
            return this.style === LoadingStyle.Overlay;
        };
        /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.show = function () {
            /* need to switch back to the selected mode, so we have saved it in another variable
             *  and then recover it. (issue with protractor)
             */
            this._mode = this._defaultMode;
            // Set values before the animations starts
            this._setCircleDiameter();
            // Check for changes for `OnPush` change detection
            this.animation = true;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.hide = function () {
            this.animation = false;
            /* need to switch back and forth from determinate/indeterminate so the setInterval()
             * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
             */
            this._mode = LoadingMode.Determinate;
            // Check for changes for `OnPush` change detection
            /* little hack to reset the loader value and animation before removing it from DOM
             * else, the loader will appear with prev value when its registered again
             * and will do an animation going prev value to 0.
             */
            this.value = 0;
            // Check for changes for `OnPush` change detection
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Calculate the proper diameter for the circle and set it
         * @private
         * @return {?}
         */
        TdLoadingComponent.prototype._setCircleDiameter = function () {
            // we set a default diameter of 100 since this is the default in material
            /** @type {?} */
            var diameter = TD_CIRCLE_DIAMETER;
            // if height is provided, then we take that as diameter
            if (this.height) {
                diameter = this.height;
                // else if its not provided, then we take the host height
            }
            else if (this.height === undefined) {
                diameter = this._hostHeight();
            }
            // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
            if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
                this._circleDiameter = Math.floor(diameter);
            }
            else {
                this._circleDiameter = TD_CIRCLE_DIAMETER;
            }
        };
        /**
         * Returns the host height of the loading component
         * @private
         * @return {?}
         */
        TdLoadingComponent.prototype._hostHeight = function () {
            if (( /** @type {?} */(this._elementRef.nativeElement))) {
                return (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height;
            }
            return 0;
        };
        return TdLoadingComponent;
    }());
    TdLoadingComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-loading',
                    template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div [@tdFadeInOut]=\"animation\" [style.min-height]=\"getHeight()\" class=\"td-loading\">\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                    animations: [common.tdFadeInOutAnimation],
                    styles: [".td-loading-wrapper{display:block;position:relative}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-ms-flex:1;-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:center;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:row;justify-content:center;max-width:100%}.td-loading-wrapper.td-overlay .td-loading{left:0;margin:0;position:absolute;right:0;top:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{left:0;position:absolute;right:0;top:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    TdLoadingComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._mode;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._defaultMode;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._value;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._circleDiameter;
        /**
         * Flag for animation
         * @type {?}
         */
        TdLoadingComponent.prototype.animation;
        /**
         * Content injected into loading component.
         * @type {?}
         */
        TdLoadingComponent.prototype.content;
        /** @type {?} */
        TdLoadingComponent.prototype.style;
        /**
         * height: number
         * Sets height of [TdLoadingComponent].
         * @type {?}
         */
        TdLoadingComponent.prototype.height;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         * @type {?}
         */
        TdLoadingComponent.prototype.type;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         * @type {?}
         */
        TdLoadingComponent.prototype.color;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdLoadingComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: services/loading.factory.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IInternalLoadingOptions() { }
    if (false) {
        /** @type {?|undefined} */
        IInternalLoadingOptions.prototype.height;
        /** @type {?|undefined} */
        IInternalLoadingOptions.prototype.style;
    }
    /**
     * @record
     */
    function ILoadingRef() { }
    if (false) {
        /** @type {?} */
        ILoadingRef.prototype.observable;
        /** @type {?} */
        ILoadingRef.prototype.componentRef;
        /** @type {?|undefined} */
        ILoadingRef.prototype.subject;
        /** @type {?|undefined} */
        ILoadingRef.prototype.times;
    }
    /**
     * NOTE: \@internal usage only.
     */
    var TdLoadingFactory = /** @class */ (function () {
        /**
         * @param {?} _componentFactoryResolver
         * @param {?} _overlay
         * @param {?} _injector
         */
        function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._overlay = _overlay;
            this._injector = _injector;
        }
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype.createFullScreenComponent = function (options) {
            var _this = this;
            (( /** @type {?} */(options))).height = undefined;
            (( /** @type {?} */(options))).style = LoadingStyle.FullScreen;
            /** @type {?} */
            var loadingRef = this._initializeContext();
            /** @type {?} */
            var loading = false;
            /** @type {?} */
            var overlayRef;
            loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(( /**
             * @param {?} registered
             * @return {?}
             */function (registered) {
                if (registered > 0 && !loading) {
                    loading = true;
                    overlayRef = _this._createOverlay();
                    loadingRef.componentRef = overlayRef.attach(new portal.ComponentPortal(TdLoadingComponent));
                    _this._mapOptions(options, loadingRef.componentRef.instance);
                    loadingRef.componentRef.instance.show();
                    loadingRef.componentRef.changeDetectorRef.detectChanges();
                }
                else if (registered <= 0 && loading) {
                    loading = false;
                    loadingRef.componentRef.instance.hide();
                    loadingRef.componentRef.destroy();
                    overlayRef.detach();
                    overlayRef.dispose();
                }
            }));
            return loadingRef;
        };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @return {?}
         */
        TdLoadingFactory.prototype.createOverlayComponent = function (options, viewContainerRef, templateRef) {
            (( /** @type {?} */(options))).height = undefined;
            (( /** @type {?} */(options))).style = LoadingStyle.Overlay;
            /** @type {?} */
            var loadingRef = this._createComponent(options);
            /** @type {?} */
            var loading = false;
            loadingRef.componentRef.instance.content = new portal.TemplatePortal(templateRef, viewContainerRef);
            viewContainerRef.clear();
            viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
            loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(( /**
             * @param {?} registered
             * @return {?}
             */function (registered) {
                if (registered > 0 && !loading) {
                    loading = true;
                    loadingRef.componentRef.instance.show();
                }
                else if (registered <= 0 && loading) {
                    loading = false;
                    loadingRef.componentRef.instance.hide();
                }
            }));
            return loadingRef;
        };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        TdLoadingFactory.prototype.createReplaceComponent = function (options, viewContainerRef, templateRef, context) {
            /** @type {?} */
            var nativeElement = ( /** @type {?} */(templateRef.elementRef.nativeElement));
            (( /** @type {?} */(options))).height = nativeElement.nextElementSibling
                ? nativeElement.nextElementSibling.scrollHeight
                : undefined;
            (( /** @type {?} */(options))).style = LoadingStyle.None;
            /** @type {?} */
            var loadingRef = this._createComponent(options);
            /** @type {?} */
            var loading = false;
            // passing context so when the template is attached, we can keep the reference of the variables
            /** @type {?} */
            var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
            loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(( /**
             * @param {?} registered
             * @return {?}
             */function (registered) {
                if (registered > 0 && !loading) {
                    loading = true;
                    // detach the content and attach the loader if loader is there
                    /** @type {?} */
                    var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                    if (index < 0) {
                        viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                    }
                    loadingRef.componentRef.instance.show();
                }
                else if (registered <= 0 && loading) {
                    loading = false;
                    loadingRef.componentRef.instance.hide();
                    // detach loader and attach the content if content is there
                    /** @type {?} */
                    var index = viewContainerRef.indexOf(contentRef);
                    if (index < 0) {
                        viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                        viewContainerRef.insert(contentRef, 0);
                    }
                    /**
                     * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                     * with "OnPush" change detection
                     */
                    contentRef.detectChanges();
                    contentRef.markForCheck();
                }
            }));
            return loadingRef;
        };
        /**
         * Creates a fullscreen overlay for the loading usage.
         * @private
         * @return {?}
         */
        TdLoadingFactory.prototype._createOverlay = function () {
            /** @type {?} */
            var state = new overlay.OverlayConfig();
            state.hasBackdrop = false;
            state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
            return this._overlay.create(state);
        };
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @private
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype._createComponent = function (options) {
            /** @type {?} */
            var compRef = this._initializeContext();
            compRef.componentRef = this._componentFactoryResolver
                .resolveComponentFactory(TdLoadingComponent)
                .create(this._injector);
            this._mapOptions(options, compRef.componentRef.instance);
            return compRef;
        };
        /**
         * Initialize context for loading component.
         * @private
         * @return {?}
         */
        TdLoadingFactory.prototype._initializeContext = function () {
            /** @type {?} */
            var subject = new rxjs.Subject();
            return {
                observable: subject.asObservable(),
                subject: subject,
                componentRef: undefined,
                times: 0,
            };
        };
        /**
         * Maps configuration to the loading component instance.
         * @private
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
        TdLoadingFactory.prototype._mapOptions = function (options, instance) {
            instance.style = options.style;
            if (options.type !== undefined) {
                instance.type = options.type;
            }
            if (options.height !== undefined) {
                instance.height = options.height;
            }
            if (options.mode !== undefined) {
                instance.mode = options.mode;
            }
            if (options.color !== undefined) {
                instance.color = options.color;
            }
        };
        return TdLoadingFactory;
    }());
    TdLoadingFactory.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    TdLoadingFactory.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: overlay.Overlay },
        { type: core.Injector }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingFactory.prototype._componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        TdLoadingFactory.prototype._overlay;
        /**
         * @type {?}
         * @private
         */
        TdLoadingFactory.prototype._injector;
    }
    /**
     * @param {?} parent
     * @param {?} componentFactoryResolver
     * @param {?} overlay
     * @param {?} injector
     * @return {?}
     */
    function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
        return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
    }
    /** @type {?} */
    var LOADING_FACTORY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingFactory,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingFactory], core.ComponentFactoryResolver, overlay.Overlay, core.Injector],
        useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
    };

    /**
     * @record
     */
    function ITdLoadingConfig() { }
    if (false) {
        /** @type {?} */
        ITdLoadingConfig.prototype.name;
        /** @type {?|undefined} */
        ITdLoadingConfig.prototype.type;
        /** @type {?|undefined} */
        ITdLoadingConfig.prototype.mode;
        /** @type {?|undefined} */
        ITdLoadingConfig.prototype.color;
    }
    var TdLoadingConfig = /** @class */ (function () {
        /**
         * @param {?} config
         */
        function TdLoadingConfig(config) {
            this.name = config.name;
            if (!this.name) {
                throw Error('Name is required for [TdLoading] configuration.');
            }
            this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
            this.type = config.type ? config.type : LoadingType.Circular;
            this.color = config.color ? config.color : 'primary';
        }
        return TdLoadingConfig;
    }());
    if (false) {
        /** @type {?} */
        TdLoadingConfig.prototype.name;
        /** @type {?} */
        TdLoadingConfig.prototype.type;
        /** @type {?} */
        TdLoadingConfig.prototype.mode;
        /** @type {?} */
        TdLoadingConfig.prototype.color;
    }
    /**
     * @record
     */
    function ITdLoadingDirectiveConfig() { }
    if (false) {
        /** @type {?|undefined} */
        ITdLoadingDirectiveConfig.prototype.strategy;
    }
    var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
        __extends(TdLoadingDirectiveConfig, _super);
        /**
         * @param {?} config
         */
        function TdLoadingDirectiveConfig(config) {
            var _this = _super.call(this, config) || this;
            _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
            return _this;
        }
        return TdLoadingDirectiveConfig;
    }(TdLoadingConfig));
    if (false) {
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.name;
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.type;
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.mode;
        /** @type {?} */
        TdLoadingDirectiveConfig.prototype.strategy;
    }
    var TdLoadingService = /** @class */ (function () {
        /**
         * @param {?} _loadingFactory
         */
        function TdLoadingService(_loadingFactory) {
            this._loadingFactory = _loadingFactory;
            this._context = {};
            this._timeouts = {};
            this.create({
                name: 'td-loading-main',
            });
        }
        /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: \@internal usage only.
         * @param {?} config
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        TdLoadingService.prototype.createComponent = function (config, viewContainerRef, templateRef, context) {
            /** @type {?} */
            var directiveConfig = new TdLoadingDirectiveConfig(config);
            if (this._context[directiveConfig.name]) {
                throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
            }
            if (directiveConfig.strategy === LoadingStrategy.Overlay) {
                this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
            }
            else {
                this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
            }
            return this._context[directiveConfig.name];
        };
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
        TdLoadingService.prototype.create = function (config) {
            /** @type {?} */
            var fullscreenConfig = new TdLoadingConfig(config);
            this.removeComponent(fullscreenConfig.name);
            this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
        };
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
        TdLoadingService.prototype.removeComponent = function (name) {
            if (this._context[name]) {
                this._context[name].subject.unsubscribe();
                if (this._context[name].componentRef) {
                    this._context[name].componentRef.destroy();
                }
                this._context[name] = undefined;
                delete this._context[name];
            }
        };
        /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         * @param {?=} name
         * @param {?=} registers
         * @return {?}
         */
        TdLoadingService.prototype.register = function (name, registers) {
            var _this = this;
            if (name === void 0) { name = 'td-loading-main'; }
            if (registers === void 0) { registers = 1; }
            // try registering into the service if the loading component has been instanciated or if it exists.
            if (this._context[name]) {
                registers = registers < 1 ? 1 : registers;
                this._context[name].times += registers;
                this._context[name].subject.next(this._context[name].times);
                return true;
            }
            else {
                // if it doesnt exist, set a timeout so its registered after change detection happens
                // this in case "register" occured on the `ngOnInit` lifehook cycle.
                if (!this._timeouts[name]) {
                    this._timeouts[name] = setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.register(name, registers);
                    }));
                }
                else {
                    // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                    this._clearTimeout(name);
                }
            }
            return false;
        };
        /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         * @param {?=} name
         * @param {?=} resolves
         * @return {?}
         */
        TdLoadingService.prototype.resolve = function (name, resolves) {
            if (name === void 0) { name = 'td-loading-main'; }
            if (resolves === void 0) { resolves = 1; }
            // clear timeout if the loading component is "resolved" before its "registered"
            this._clearTimeout(name);
            if (this._context[name]) {
                resolves = resolves < 1 ? 1 : resolves;
                if (this._context[name].times > 0) {
                    /** @type {?} */
                    var times = this._context[name].times;
                    times -= resolves;
                    this._context[name].times = times < 0 ? 0 : times;
                }
                this._context[name].subject.next(this._context[name].times);
                return true;
            }
            return false;
        };
        /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         * @param {?=} name
         * @return {?}
         */
        TdLoadingService.prototype.resolveAll = function (name) {
            if (name === void 0) { name = 'td-loading-main'; }
            // clear timeout if the loading component is "resolved" before its "registered"
            this._clearTimeout(name);
            if (this._context[name]) {
                this._context[name].times = 0;
                this._context[name].subject.next(this._context[name].times);
                return true;
            }
            return false;
        };
        /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        TdLoadingService.prototype.setValue = function (name, value) {
            if (this._context[name]) {
                /** @type {?} */
                var instance = this._context[name].componentRef.instance;
                if (instance.mode === LoadingMode.Determinate && instance.animation) {
                    instance.value = value;
                    return true;
                }
            }
            return false;
        };
        /**
         * Clears timeout linked to the name.
         * @private
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
        TdLoadingService.prototype._clearTimeout = function (name) {
            clearTimeout(this._timeouts[name]);
            delete this._timeouts[name];
        };
        return TdLoadingService;
    }());
    TdLoadingService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    TdLoadingService.ctorParameters = function () { return [
        { type: TdLoadingFactory }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingService.prototype._context;
        /**
         * @type {?}
         * @private
         */
        TdLoadingService.prototype._timeouts;
        /**
         * @type {?}
         * @private
         */
        TdLoadingService.prototype._loadingFactory;
    }
    /**
     * @param {?} parent
     * @param {?} loadingFactory
     * @return {?}
     */
    function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
        return parent || new TdLoadingService(loadingFactory);
    }
    /** @type {?} */
    var LOADING_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingService], TdLoadingFactory],
        useFactory: LOADING_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: directives/loading.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Context class for variable reference
     */
    var TdLoadingContext = /** @class */ (function () {
        function TdLoadingContext() {
            this.$implicit = undefined;
            this.tdLoading = undefined;
        }
        return TdLoadingContext;
    }());
    if (false) {
        /** @type {?} */
        TdLoadingContext.prototype.$implicit;
        /** @type {?} */
        TdLoadingContext.prototype.tdLoading;
    }
    // Constant for generation of the id for the next component
    /** @type {?} */
    var TD_LOADING_NEXT_ID = 0;
    var TdLoadingDirective = /** @class */ (function () {
        /**
         * @param {?} _viewContainerRef
         * @param {?} _templateRef
         * @param {?} _loadingService
         */
        function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._loadingService = _loadingService;
            this._context = new TdLoadingContext();
            /**
             * tdLoadingColor?: "primary" | "accent" | "warn"
             * Sets the theme color of the loading component. Defaults to "primary"
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLoadingDirective.prototype, "name", {
            /**
             * tdLoading: string
             * Name reference of the loading mask, used to register/resolve requests to the mask.
             * @param {?} name
             * @return {?}
             */
            set: function (name) {
                if (!this._name && name) {
                    this._name = name;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "until", {
            /**
             * tdLoadingUntil?: any
             * If its null, undefined or false it will be used to register requests to the mask.
             * Else if its any value that can be resolved as true, it will resolve the mask.
             * [name] is optional when using [until], but can still be used to register/resolve it manually.
             * @param {?} until
             * @return {?}
             */
            set: function (until) {
                if (!this._name) {
                    this._name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
                }
                this._context.$implicit = this._context.tdLoading = until;
                if (!until) {
                    this._loadingService.register(this._name);
                }
                else {
                    this._loadingService.resolveAll(this._name);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "type", {
            /**
             * tdLoadingType?: LoadingType or ['linear' | 'circular']
             * Sets the type of loading mask depending on value.
             * Defaults to [LoadingType.Circular | 'circular'].
             * @param {?} type
             * @return {?}
             */
            set: function (type) {
                if (type === LoadingType.Linear) {
                    this._type = LoadingType.Linear;
                }
                else {
                    this._type = LoadingType.Circular;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "mode", {
            /**
             * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
             * Sets the mode of loading mask depending on value.
             * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
             * @param {?} mode
             * @return {?}
             */
            set: function (mode) {
                if (mode === LoadingMode.Determinate) {
                    this._mode = LoadingMode.Determinate;
                }
                else {
                    this._mode = LoadingMode.Indeterminate;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
            /**
             * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
             * Sets the strategy of loading mask depending on value.
             * Defaults to [LoadingMode.Replace | 'replace'].
             * @param {?} strategy
             * @return {?}
             */
            set: function (strategy) {
                if (strategy === LoadingStrategy.Overlay) {
                    this._strategy = LoadingStrategy.Overlay;
                }
                else {
                    this._strategy = LoadingStrategy.Replace;
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         * @return {?}
         */
        TdLoadingDirective.prototype.ngOnInit = function () {
            this._registerComponent();
        };
        /**
         * Remove component when directive is destroyed.
         * @return {?}
         */
        TdLoadingDirective.prototype.ngOnDestroy = function () {
            this._loadingService.removeComponent(this._name);
            this._loadingRef = undefined;
        };
        /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         * @private
         * @return {?}
         */
        TdLoadingDirective.prototype._registerComponent = function () {
            if (!this._name) {
                throw new Error('Name is needed to register loading directive');
            }
            // Check if `TdLoadingComponent` has been created before trying to add one again.
            // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
            if (!this._loadingRef) {
                this._loadingRef = this._loadingService.createComponent({
                    name: this._name,
                    type: this._type,
                    mode: this._mode,
                    color: this.color,
                    strategy: this._strategy,
                }, this._viewContainerRef, this._templateRef, this._context);
            }
        };
        return TdLoadingDirective;
    }());
    TdLoadingDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdLoading]',
                },] }
    ];
    /** @nocollapse */
    TdLoadingDirective.ctorParameters = function () { return [
        { type: core.ViewContainerRef },
        { type: core.TemplateRef },
        { type: TdLoadingService }
    ]; };
    TdLoadingDirective.propDecorators = {
        name: [{ type: core.Input, args: ['tdLoading',] }],
        until: [{ type: core.Input, args: ['tdLoadingUntil',] }],
        type: [{ type: core.Input, args: ['tdLoadingType',] }],
        mode: [{ type: core.Input, args: ['tdLoadingMode',] }],
        strategy: [{ type: core.Input, args: ['tdLoadingStrategy',] }],
        color: [{ type: core.Input, args: ['tdLoadingColor',] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._context;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._type;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._mode;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._strategy;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._name;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._loadingRef;
        /**
         * tdLoadingColor?: "primary" | "accent" | "warn"
         * Sets the theme color of the loading component. Defaults to "primary"
         * @type {?}
         */
        TdLoadingDirective.prototype.color;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._viewContainerRef;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._templateRef;
        /**
         * @type {?}
         * @private
         */
        TdLoadingDirective.prototype._loadingService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: loading.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_LOADING = [TdLoadingComponent, TdLoadingDirective];
    /** @type {?} */
    var TD_LOADING_ENTRY_COMPONENTS = [TdLoadingComponent];
    var CovalentLoadingModule = /** @class */ (function () {
        function CovalentLoadingModule() {
        }
        return CovalentLoadingModule;
    }());
    CovalentLoadingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common$1.CommonModule, progressBar.MatProgressBarModule, progressSpinner.MatProgressSpinnerModule, overlay.OverlayModule, portal.PortalModule],
                    declarations: [TD_LOADING],
                    exports: [TD_LOADING],
                    providers: [LOADING_FACTORY_PROVIDER, LOADING_PROVIDER],
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
     * Generated from: covalent-core-loading.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentLoadingModule = CovalentLoadingModule;
    exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;
    exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
    exports.LOADING_PROVIDER = LOADING_PROVIDER;
    exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
    exports.LoadingMode = LoadingMode;
    exports.LoadingStrategy = LoadingStrategy;
    exports.LoadingStyle = LoadingStyle;
    exports.LoadingType = LoadingType;
    exports.TD_CIRCLE_DIAMETER = TD_CIRCLE_DIAMETER;
    exports.TdLoadingComponent = TdLoadingComponent;
    exports.TdLoadingConfig = TdLoadingConfig;
    exports.TdLoadingContext = TdLoadingContext;
    exports.TdLoadingDirective = TdLoadingDirective;
    exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
    exports.TdLoadingFactory = TdLoadingFactory;
    exports.TdLoadingService = TdLoadingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-loading.umd.js.map
