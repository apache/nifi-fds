(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/cdk/portal'), require('@angular/material/core'), require('@angular/material/icon'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/expansion-panel', ['exports', '@angular/core', '@angular/common', '@angular/cdk/portal', '@angular/material/core', '@angular/material/icon', '@angular/cdk/coercion', '@covalent/core/common', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['expansion-panel'] = {}), global.ng.core, global.ng.common, global.ng.cdk.portal, global.ng.material.core, global.ng.material.icon, global.ng.cdk.coercion, global.covalent.core.common, global.rxjs.operators, global.rxjs));
}(this, (function (exports, core, common$1, portal, core$1, icon, coercion, common, operators, rxjs) { 'use strict';

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

    var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelHeaderDirective, _super);
        /**
         * @param {?} templateRef
         * @param {?} viewContainerRef
         */
        function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        return TdExpansionPanelHeaderDirective;
    }(portal.TemplatePortalDirective));
    TdExpansionPanelHeaderDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[td-expansion-panel-header]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelHeaderDirective.ctorParameters = function () { return [
        { type: core.TemplateRef },
        { type: core.ViewContainerRef }
    ]; };
    var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelLabelDirective, _super);
        /**
         * @param {?} templateRef
         * @param {?} viewContainerRef
         */
        function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        return TdExpansionPanelLabelDirective;
    }(portal.TemplatePortalDirective));
    TdExpansionPanelLabelDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[td-expansion-panel-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelLabelDirective.ctorParameters = function () { return [
        { type: core.TemplateRef },
        { type: core.ViewContainerRef }
    ]; };
    var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelSublabelDirective, _super);
        /**
         * @param {?} templateRef
         * @param {?} viewContainerRef
         */
        function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        return TdExpansionPanelSublabelDirective;
    }(portal.TemplatePortalDirective));
    TdExpansionPanelSublabelDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[td-expansion-panel-sublabel]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdExpansionPanelSublabelDirective.ctorParameters = function () { return [
        { type: core.TemplateRef },
        { type: core.ViewContainerRef }
    ]; };
    var TdExpansionPanelSummaryComponent = /** @class */ (function () {
        function TdExpansionPanelSummaryComponent() {
        }
        return TdExpansionPanelSummaryComponent;
    }());
    TdExpansionPanelSummaryComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-expansion-summary',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    var TdExpansionPanelBase = /** @class */ (function () {
        function TdExpansionPanelBase() {
        }
        return TdExpansionPanelBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdExpansionPanelMixinBase = common.mixinDisableRipple(common.mixinDisabled(TdExpansionPanelBase));
    var TdExpansionPanelComponent = /** @class */ (function (_super) {
        __extends(TdExpansionPanelComponent, _super);
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
        function TdExpansionPanelComponent(_renderer, _elementRef) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._elementRef = _elementRef;
            _this._expand = false;
            /**
             * expanded?: function
             * Event emitted when [TdExpansionPanelComponent] is expanded.
             */
            _this.expanded = new core.EventEmitter();
            /**
             * collapsed?: function
             * Event emitted when [TdExpansionPanelComponent] is collapsed.
             */
            _this.collapsed = new core.EventEmitter();
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
            return _this;
        }
        Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
            /**
             * @return {?}
             */
            get: function () {
                return this._expand;
            },
            /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             * @param {?} expand
             * @return {?}
             */
            set: function (expand) {
                this._setExpand(coercion.coerceBooleanProperty(expand));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.clickEvent = function () {
            this._setExpand(!this._expand);
        };
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.toggle = function () {
            return this._setExpand(!this._expand);
        };
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.open = function () {
            return this._setExpand(true);
        };
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.close = function () {
            return this._setExpand(false);
        };
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.onDisabledChange = function (v) {
            if (v && this._expand) {
                this._expand = false;
                this._onCollapsed();
            }
        };
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @private
         * @param {?} newExpand
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._setExpand = function (newExpand) {
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
         * @private
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onExpanded = function () {
            this.expanded.emit();
        };
        /**
         * @private
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onCollapsed = function () {
            this.collapsed.emit();
        };
        return TdExpansionPanelComponent;
    }(_TdExpansionPanelMixinBase));
    TdExpansionPanelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-expansion-panel',
                    template: "<div\n  class=\"td-expansion-panel-header\"\n  [class.mat-disabled]=\"disabled\"\n  matRipple\n  [matRippleDisabled]=\"disabled || disableRipple\"\n  [tabIndex]=\"disabled ? -1 : 0\"\n  (keydown.enter)=\"clickEvent()\"\n  (click)=\"clickEvent()\"\n>\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\" [class.mat-disabled]=\"disabled\" *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{ label }}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{ sublabel }}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\" [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\" [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                    inputs: ['disabled', 'disableRipple'],
                    animations: [common.tdCollapseAnimation, common.tdRotateAnimation],
                    styles: [":host{display:block}:host .td-expansion-panel-header{outline:none;position:relative}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{-ms-flex:1;-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:row;height:48px;justify-content:flex-start;max-width:100%;padding:0 24px}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{margin-right:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelComponent.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdExpansionPanelComponent.propDecorators = {
        expansionPanelHeader: [{ type: core.ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
        expansionPanelLabel: [{ type: core.ContentChild, args: [TdExpansionPanelLabelDirective,] }],
        expansionPanelSublabel: [{ type: core.ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
        label: [{ type: core.Input }],
        sublabel: [{ type: core.Input }],
        expand: [{ type: core.Input, args: ['expand',] }],
        expanded: [{ type: core.Output }],
        collapsed: [{ type: core.Output }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
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
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: expansion-panel-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdExpansionPanelGroupComponent = /** @class */ (function () {
        /**
         * @param {?} _renderer
         * @param {?} _elementRef
         */
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
             * @param {?} multi
             * @return {?}
             */
            set: function (multi) {
                this._multi = coercion.coerceBooleanProperty(multi);
                if (this._multi === false && this._lastOpenedPanels.length > 0) {
                    this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngOnDestroy = function () {
            this._destroyed.next(true);
            this._destroyed.unsubscribe();
            this._stopWatchingPanels.next(true);
            this._stopWatchingPanels.unsubscribe();
        };
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this._multi) {
                /** @type {?} */
                var openedPanels = this.expansionPanels.filter(( /**
                 * @param {?} expansionPanel
                 * @return {?}
                 */function (expansionPanel) { return expansionPanel.expand; }));
                /** @type {?} */
                var numOpenedPanels = openedPanels.length;
                if (numOpenedPanels > 1) {
                    this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
                }
            }
            this._attachListeners(this.expansionPanels);
            this.expansionPanels.changes
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe(( /**
         * @param {?} expansionPanels
         * @return {?}
         */function (expansionPanels) {
                _this._stopWatchingPanels.next(true);
                _this._stopWatchingPanels.unsubscribe();
                _this._stopWatchingPanels = new rxjs.Subject();
                _this._attachListeners(expansionPanels);
            }));
        };
        /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.openAll = function () {
            if (this._multi) {
                this.expansionPanels.forEach(( /**
                 * @param {?} expansionPanel
                 * @return {?}
                 */function (expansionPanel) {
                    expansionPanel.open();
                }));
            }
        };
        /**
         * Closes all expansion panels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.closeAll = function () {
            this.expansionPanels.forEach(( /**
             * @param {?} expansionPanel
             * @return {?}
             */function (expansionPanel) {
                expansionPanel.close();
            }));
        };
        /**
         * @private
         * @param {?} expansionPanels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._attachListeners = function (expansionPanels) {
            var _this = this;
            this._lastOpenedPanels = [];
            expansionPanels.forEach(( /**
             * @param {?} expansionPanel
             * @return {?}
             */function (expansionPanel) {
                expansionPanel.expanded.pipe(operators.takeUntil(_this._stopWatchingPanels)).subscribe(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                    if (indexOfPanel !== -1) {
                        _this._lastOpenedPanels.splice(indexOfPanel, 1);
                    }
                    _this._lastOpenedPanels.push(expansionPanel);
                    if (!_this._multi) {
                        _this._closeAllExcept(expansionPanel);
                    }
                }));
                expansionPanel.collapsed.pipe(operators.takeUntil(_this._stopWatchingPanels)).subscribe(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                    if (indexOfPanel !== -1) {
                        _this._lastOpenedPanels.splice(indexOfPanel, 1);
                    }
                }));
            }));
        };
        /**
         * @private
         * @param {?} expansionPanel
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._closeAllExcept = function (expansionPanel) {
            this.expansionPanels.forEach(( /**
             * @param {?} panel
             * @return {?}
             */function (panel) {
                if (panel !== expansionPanel) {
                    panel.close();
                }
            }));
        };
        return TdExpansionPanelGroupComponent;
    }());
    TdExpansionPanelGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-expansion-panel-group',
                    template: "<ng-content></ng-content>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelGroupComponent.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdExpansionPanelGroupComponent.propDecorators = {
        multi: [{ type: core.Input, args: ['multi',] }],
        expansionPanels: [{ type: core.ContentChildren, args: [TdExpansionPanelComponent, { descendants: true },] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._multi;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._lastOpenedPanels;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._destroyed;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._stopWatchingPanels;
        /** @type {?} */
        TdExpansionPanelGroupComponent.prototype.expansionPanels;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdExpansionPanelGroupComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: expansion-panel.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return CovalentExpansionPanelModule;
    }());
    CovalentExpansionPanelModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common$1.CommonModule, core$1.MatRippleModule, icon.MatIconModule, portal.PortalModule],
                    declarations: [TD_EXPANSION_PANEL],
                    exports: [TD_EXPANSION_PANEL],
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
     * Generated from: covalent-core-expansion-panel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
    exports.TdExpansionPanelBase = TdExpansionPanelBase;
    exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
    exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;
    exports.TdExpansionPanelHeaderDirective = TdExpansionPanelHeaderDirective;
    exports.TdExpansionPanelLabelDirective = TdExpansionPanelLabelDirective;
    exports.TdExpansionPanelSublabelDirective = TdExpansionPanelSublabelDirective;
    exports.TdExpansionPanelSummaryComponent = TdExpansionPanelSummaryComponent;
    exports._TdExpansionPanelMixinBase = _TdExpansionPanelMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-expansion-panel.umd.js.map
