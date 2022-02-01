(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/media', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.media = {}), global.ng.core, global.rxjs));
}(this, (function (exports, core, rxjs) { 'use strict';

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

    var TdMediaService = /** @class */ (function () {
        /**
         * @param {?} _ngZone
         */
        function TdMediaService(_ngZone) {
            var _this = this;
            this._ngZone = _ngZone;
            this._resizing = false;
            this._queryMap = new Map();
            this._querySources = {};
            this._queryObservables = {};
            this._queryMap.set('xs', '(max-width: 599px)');
            this._queryMap.set('gt-xs', '(min-width: 600px)');
            this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
            this._queryMap.set('gt-sm', '(min-width: 960px)');
            this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
            this._queryMap.set('gt-md', '(min-width: 1280px)');
            this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
            this._queryMap.set('gt-lg', '(min-width: 1920px)');
            this._queryMap.set('xl', '(min-width: 1920px)');
            this._queryMap.set('landscape', '(orientation: landscape)');
            this._queryMap.set('portrait', '(orientation: portrait)');
            this._queryMap.set('print', 'print');
            this._resizing = false;
            // we make sure that the resize checking happend outside of Angular since it happens often
            this._globalSubscription = this._ngZone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                return rxjs.fromEvent(window, 'resize').subscribe(( /**
                 * @return {?}
                 */function () {
                    // way to prevent the resize event from triggering the match media if there is already one event running already.
                    if (!_this._resizing) {
                        _this._resizing = true;
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            _this._onResize();
                            _this._resizing = false;
                        }), 100);
                    }
                }));
            }));
        }
        /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.deregisterQuery = function (query) {
            if (this._queryMap.get(query.toLowerCase())) {
                query = this._queryMap.get(query.toLowerCase());
            }
            this._querySources[query].unsubscribe();
            delete this._querySources[query];
            delete this._queryObservables[query];
        };
        /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.query = function (query) {
            if (this._queryMap.get(query.toLowerCase())) {
                query = this._queryMap.get(query.toLowerCase());
            }
            return this._ngZone.run(( /**
             * @return {?}
             */function () {
                return matchMedia(query).matches;
            }));
        };
        /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.registerQuery = function (query) {
            if (this._queryMap.get(query.toLowerCase())) {
                query = this._queryMap.get(query.toLowerCase());
            }
            if (!this._querySources[query]) {
                this._querySources[query] = new rxjs.BehaviorSubject(matchMedia(query).matches);
                this._queryObservables[query] = this._querySources[query].asObservable();
            }
            return this._queryObservables[query];
        };
        /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
        TdMediaService.prototype.broadcast = function () {
            this._onResize();
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaService.prototype._onResize = function () {
            var e_1, _a;
            var _this = this;
            var _loop_1 = function (query) {
                this_1._ngZone.run(( /**
                 * @return {?}
                 */function () {
                    _this._matchMediaTrigger(query);
                }));
            };
            var this_1 = this;
            try {
                for (var _b = __values(Object.keys(this._querySources)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var query = _c.value;
                    _loop_1(query);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * @private
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype._matchMediaTrigger = function (query) {
            this._querySources[query].next(matchMedia(query).matches);
        };
        return TdMediaService;
    }());
    TdMediaService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    TdMediaService.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._resizing;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._globalSubscription;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._queryMap;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._querySources;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._queryObservables;
        /**
         * @type {?}
         * @private
         */
        TdMediaService.prototype._ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: directives/media-toggle.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMediaToggleDirective = /** @class */ (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         * @param {?} _mediaService
         */
        function TdMediaToggleDirective(_renderer, _elementRef, _mediaService) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._mediaService = _mediaService;
            this._matches = false;
            this._attributes = {};
            this._styles = {};
            this._classes = [];
        }
        Object.defineProperty(TdMediaToggleDirective.prototype, "query", {
            /**
             * tdMediaToggle: string
             * Media query used to evaluate screen/window size.
             * Toggles attributes, classes and styles if media query is matched.
             * @param {?} query
             * @return {?}
             */
            set: function (query) {
                if (!query) {
                    throw new Error('Query needed for [tdMediaToggle] directive.');
                }
                this._query = query;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
            /**
             * mediaAttributes: {[key: string]: string}
             * Attributes to be toggled when media query matches.
             * @param {?} attributes
             * @return {?}
             */
            set: function (attributes) {
                this._attributes = attributes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
            /**
             * mediaClasses: string[]
             * CSS Classes to be toggled when media query matches.
             * @param {?} classes
             * @return {?}
             */
            set: function (classes) {
                this._classes = classes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
            /**
             * mediaStyles: {[key: string]: string}
             * CSS Styles to be toggled when media query matches.
             * @param {?} styles
             * @return {?}
             */
            set: function (styles) {
                this._styles = styles;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._mediaChange(this._mediaService.query(this._query));
            this._subscription = this._mediaService.registerQuery(this._query).subscribe(( /**
             * @param {?} matches
             * @return {?}
             */function (matches) {
                _this._mediaChange(matches);
            }));
        };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
        };
        /**
         * @private
         * @param {?} matches
         * @return {?}
         */
        TdMediaToggleDirective.prototype._mediaChange = function (matches) {
            this._matches = matches;
            this._changeAttributes();
            this._changeClasses();
            this._changeStyles();
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeAttributes = function () {
            for (var attr in this._attributes) {
                if (this._matches) {
                    this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
                }
                else {
                    this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeClasses = function () {
            var _this = this;
            this._classes.forEach(( /**
             * @param {?} className
             * @return {?}
             */function (className) {
                if (_this._matches) {
                    _this._renderer.addClass(_this._elementRef.nativeElement, className);
                }
                else {
                    _this._renderer.removeClass(_this._elementRef.nativeElement, className);
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeStyles = function () {
            for (var style in this._styles) {
                if (this._matches) {
                    this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
                }
                else {
                    this._renderer.removeStyle(this._elementRef.nativeElement, style);
                }
            }
        };
        return TdMediaToggleDirective;
    }());
    TdMediaToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdMediaToggle]',
                },] }
    ];
    /** @nocollapse */
    TdMediaToggleDirective.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: TdMediaService }
    ]; };
    TdMediaToggleDirective.propDecorators = {
        query: [{ type: core.Input, args: ['tdMediaToggle',] }],
        attributes: [{ type: core.Input, args: ['mediaAttributes',] }],
        classes: [{ type: core.Input, args: ['mediaClasses',] }],
        styles: [{ type: core.Input, args: ['mediaStyles',] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._subscription;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._query;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._matches;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._attributes;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._styles;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._classes;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdMediaToggleDirective.prototype._mediaService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: media.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MEDIA = [TdMediaToggleDirective];
    var CovalentMediaModule = /** @class */ (function () {
        function CovalentMediaModule() {
        }
        return CovalentMediaModule;
    }());
    CovalentMediaModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TD_MEDIA],
                    exports: [TD_MEDIA],
                    providers: [TdMediaService],
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
     * Generated from: covalent-core-media.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentMediaModule = CovalentMediaModule;
    exports.TdMediaService = TdMediaService;
    exports.TdMediaToggleDirective = TdMediaToggleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-media.umd.js.map
