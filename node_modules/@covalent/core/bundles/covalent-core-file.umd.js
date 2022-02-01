(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/cdk/portal'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/coercion'), require('@covalent/core/common'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/file', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/cdk/portal', '@angular/material/icon', '@angular/material/button', '@angular/cdk/coercion', '@covalent/core/common', '@angular/common/http', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.file = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.cdk.portal, global.ng.material.icon, global.ng.material.button, global.ng.cdk.coercion, global.covalent.core.common, global.ng.common.http, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common$1, forms, portal, icon, button, coercion, common, http, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: directives/file-select.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdFileSelectDirective = /** @class */ (function () {
        /**
         * @param {?} model
         */
        function TdFileSelectDirective(model) {
            this.model = model;
            this._multiple = false;
            /**
             * fileSelect?: function
             * Event emitted when a file or files are selected in host [HTMLInputElement].
             * Emits a [FileList | File] object.
             * Alternative to not use [(ngModel)].
             */
            this.fileSelect = new core.EventEmitter();
        }
        Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */
            set: function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */
            get: function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
         * @param {?} event
         * @return {?}
         */
        TdFileSelectDirective.prototype.onChange = function (event) {
            if (event.target instanceof HTMLInputElement) {
                /** @type {?} */
                var fileInputEl = event.target;
                /** @type {?} */
                var files = fileInputEl.files;
                if (files.length) {
                    /** @type {?} */
                    var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                    this.model ? this.model.update.emit(value) : this.fileSelect.emit(value);
                }
            }
        };
        return TdFileSelectDirective;
    }());
    TdFileSelectDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdFileSelect]',
                },] }
    ];
    /** @nocollapse */
    TdFileSelectDirective.ctorParameters = function () { return [
        { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
    ]; };
    TdFileSelectDirective.propDecorators = {
        multiple: [{ type: core.Input, args: ['multiple',] }],
        fileSelect: [{ type: core.Output }],
        multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
        onChange: [{ type: core.HostListener, args: ['change', ['$event'],] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileSelectDirective.prototype._multiple;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         * @type {?}
         */
        TdFileSelectDirective.prototype.fileSelect;
        /**
         * @type {?}
         * @private
         */
        TdFileSelectDirective.prototype.model;
    }

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

    var TdFileDropBase = /** @class */ (function () {
        function TdFileDropBase() {
        }
        return TdFileDropBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileDropMixinBase = common.mixinDisabled(TdFileDropBase);
    var TdFileDropDirective = /** @class */ (function (_super) {
        __extends(TdFileDropDirective, _super);
        /**
         * @param {?} _renderer
         * @param {?} _element
         */
        function TdFileDropDirective(_renderer, _element) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._element = _element;
            _this._multiple = false;
            /**
             * fileDrop?: function
             * Event emitted when a file or files are dropped in host element after being validated.
             * Emits a [FileList | File] object.
             */
            _this.fileDrop = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */
            set: function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */
            get: function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
            /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             * @return {?}
             */
            get: function () {
                return this.disabled ? '' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'fileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDrop = function (event) {
            if (!this.disabled) {
                /** @type {?} */
                var transfer = (( /** @type {?} */(event))).dataTransfer;
                /** @type {?} */
                var files = transfer.files;
                if (files.length) {
                    /** @type {?} */
                    var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                    this.fileDrop.emit(value);
                }
            }
            this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
            this._stopEvent(event);
        };
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragOver = function (event) {
            /** @type {?} */
            var transfer = (( /** @type {?} */(event))).dataTransfer;
            transfer.dropEffect = this._typeCheck(transfer.types);
            if (this.disabled ||
                (!this._multiple && ((transfer.items && transfer.items.length > 1) || (( /** @type {?} */(transfer))).mozItemCount > 1))) {
                transfer.dropEffect = 'none';
            }
            else {
                transfer.dropEffect = 'copy';
            }
            this._stopEvent(event);
        };
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragEnter = function (event) {
            if (!this.disabled) {
                this._renderer.addClass(this._element.nativeElement, 'drop-zone');
            }
            this._stopEvent(event);
        };
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragLeave = function (event) {
            this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
            this._stopEvent(event);
        };
        /**
         * Validates if the transfer item types are 'Files'.
         * @private
         * @param {?} types
         * @return {?}
         */
        TdFileDropDirective.prototype._typeCheck = function (types) {
            /** @type {?} */
            var dropEffect = 'none';
            if (types &&
                (((( /** @type {?} */(types))).contains && (( /** @type {?} */(types))).contains('Files')) ||
                    ((( /** @type {?} */(types))).indexOf && (( /** @type {?} */(types))).indexOf('Files') !== -1))) {
                dropEffect = 'copy';
            }
            return dropEffect;
        };
        /**
         * @private
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype._stopEvent = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        return TdFileDropDirective;
    }(_TdFileDropMixinBase));
    TdFileDropDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdFileDrop]',
                    inputs: ['disabled'],
                },] }
    ];
    /** @nocollapse */
    TdFileDropDirective.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };
    TdFileDropDirective.propDecorators = {
        multiple: [{ type: core.Input, args: ['multiple',] }],
        fileDrop: [{ type: core.Output }],
        multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
        disabledBinding: [{ type: core.HostBinding, args: ['attr.disabled',] }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
        onDragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
        onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileDropDirective.prototype._multiple;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         * @type {?}
         */
        TdFileDropDirective.prototype.fileDrop;
        /**
         * @type {?}
         * @private
         */
        TdFileDropDirective.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdFileDropDirective.prototype._element;
    }

    var TdFileInputLabelDirective = /** @class */ (function (_super) {
        __extends(TdFileInputLabelDirective, _super);
        /**
         * @param {?} templateRef
         * @param {?} viewContainerRef
         */
        function TdFileInputLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        return TdFileInputLabelDirective;
    }(portal.TemplatePortalDirective));
    TdFileInputLabelDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[td-file-input-label]ng-template',
                },] }
    ];
    /** @nocollapse */
    TdFileInputLabelDirective.ctorParameters = function () { return [
        { type: core.TemplateRef },
        { type: core.ViewContainerRef }
    ]; };
    var TdFileInputBase = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         */
        function TdFileInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileInputBase;
    }());
    if (false) {
        /** @type {?} */
        TdFileInputBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileInputMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdFileInputBase));
    var TdFileInputComponent = /** @class */ (function (_super) {
        __extends(TdFileInputComponent, _super);
        /**
         * @param {?} _renderer
         * @param {?} _changeDetectorRef
         */
        function TdFileInputComponent(_renderer, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._renderer = _renderer;
            _this._multiple = false;
            /**
             * select?: function
             * Event emitted a file is selected
             * Emits a [File | FileList] object.
             */
            _this.select = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
            /**
             * @return {?}
             */
            get: function () {
                return this._inputElement.nativeElement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
            /**
             * @return {?}
             */
            get: function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             * @param {?} multiple
             * @return {?}
             */
            set: function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
        TdFileInputComponent.prototype.handleSelect = function (files) {
            this.writeValue(files);
            this.select.emit(files);
        };
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
        TdFileInputComponent.prototype.clear = function () {
            this.writeValue(undefined);
            this._renderer.setProperty(this.inputElement, 'value', '');
        };
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileInputComponent.prototype.onDisabledChange = function (v) {
            if (v) {
                this.clear();
            }
        };
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        TdFileInputComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        return TdFileInputComponent;
    }(_TdFileInputMixinBase));
    TdFileInputComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(( /**
                             * @return {?}
                             */function () { return TdFileInputComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-file-input',
                    inputs: ['disabled', 'value'],
                    template: "<div>\n  <button\n    mat-raised-button\n    class=\"td-file-input\"\n    type=\"button\"\n    [color]=\"color\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    (keyup.enter)=\"fileInput.click()\"\n    (click)=\"fileInput.click()\"\n    (fileDrop)=\"handleSelect($event)\"\n    tdFileDrop\n  >\n    <ng-content></ng-content>\n  </button>\n  <input\n    #fileInput\n    class=\"td-file-input-hidden\"\n    type=\"file\"\n    [attr.accept]=\"accept\"\n    (fileSelect)=\"handleSelect($event)\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    tdFileSelect\n  />\n</div>\n",
                    styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileInputComponent.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef }
    ]; };
    TdFileInputComponent.propDecorators = {
        _inputElement: [{ type: core.ViewChild, args: ['fileInput', { static: true },] }],
        color: [{ type: core.Input }],
        multiple: [{ type: core.Input, args: ['multiple',] }],
        accept: [{ type: core.Input }],
        select: [{ type: core.Output }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileInputComponent.prototype._multiple;
        /**
         * The native `<input type="file"> element
         * @type {?}
         */
        TdFileInputComponent.prototype._inputElement;
        /**
         * color?: 'accent' | 'primary' | 'warn'
         * Sets button color. Uses same color palette accepted as [MatButton].
         * @type {?}
         */
        TdFileInputComponent.prototype.color;
        /**
         * accept?: string
         * Sets files accepted when opening the file browser dialog.
         * Same as 'accept' attribute in <input/> element.
         * @type {?}
         */
        TdFileInputComponent.prototype.accept;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         * @type {?}
         */
        TdFileInputComponent.prototype.select;
        /**
         * @type {?}
         * @private
         */
        TdFileInputComponent.prototype._renderer;
    }

    var TdFileUploadBase = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         */
        function TdFileUploadBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileUploadBase;
    }());
    if (false) {
        /** @type {?} */
        TdFileUploadBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileUploadMixinBase = common.mixinControlValueAccessor(common.mixinDisabled(TdFileUploadBase));
    var TdFileUploadComponent = /** @class */ (function (_super) {
        __extends(TdFileUploadComponent, _super);
        /**
         * @param {?} _changeDetectorRef
         */
        function TdFileUploadComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._multiple = false;
            _this._required = false;
            /**
             * defaultColor?: 'accent' | 'primary' | 'warn'
             * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
             */
            _this.defaultColor = 'primary';
            /**
             * activeColor?: 'accent' | 'primary' | 'warn'
             * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
             */
            _this.activeColor = 'accent';
            /**
             * cancelColor?: 'accent' | 'primary' | 'warn'
             * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
             */
            _this.cancelColor = 'warn';
            /**
             * select?: function
             * Event emitted when a file is selected.
             * Emits a [File | FileList] object.
             */
            _this.select = new core.EventEmitter();
            /**
             * upload?: function
             * Event emitted when upload button is clicked.
             * Emits a [File | FileList] object.
             */
            _this.upload = new core.EventEmitter();
            /**
             * cancel?: function
             * Event emitted when cancel button is clicked.
             */
            _this.cancel = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
            /**
             * @return {?}
             */
            get: function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             * @param {?} multiple
             * @return {?}
             */
            set: function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdFileUploadComponent.prototype, "required", {
            /**
             * @return {?}
             */
            get: function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             * @param {?} required
             * @return {?}
             */
            set: function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
        TdFileUploadComponent.prototype.uploadPressed = function () {
            if (this.value) {
                this.upload.emit(this.value);
            }
        };
        /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
        TdFileUploadComponent.prototype.handleSelect = function (value) {
            this.value = value;
            this.select.emit(value);
        };
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
        TdFileUploadComponent.prototype._cancel = function () {
            this.value = undefined;
            this.cancel.emit();
            // check if the file input is rendered before clearing it
            if (this.fileInput) {
                this.fileInput.clear();
            }
        };
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileUploadComponent.prototype.onDisabledChange = function (v) {
            if (v) {
                this._cancel();
            }
        };
        return TdFileUploadComponent;
    }(_TdFileUploadMixinBase));
    TdFileUploadComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(( /**
                             * @return {?}
                             */function () { return TdFileUploadComponent; })),
                            multi: true,
                        },
                    ],
                    selector: 'td-file-upload',
                    inputs: ['disabled', 'value'],
                    template: "<td-file-input\n  *ngIf=\"!value\"\n  [(ngModel)]=\"value\"\n  [multiple]=\"multiple\"\n  [disabled]=\"disabled\"\n  [accept]=\"accept\"\n  [color]=\"defaultColor\"\n  (select)=\"handleSelect($event)\"\n>\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button\n    #fileUpload\n    class=\"td-file-upload\"\n    mat-raised-button\n    type=\"button\"\n    [color]=\"activeColor\"\n    (keyup.delete)=\"_cancel()\"\n    (keyup.backspace)=\"_cancel()\"\n    (keyup.escape)=\"_cancel()\"\n    (click)=\"uploadPressed()\"\n  >\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button type=\"button\" class=\"td-file-upload-cancel\" [color]=\"cancelColor\" (click)=\"_cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>\n",
                    styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;left:-12px;position:relative;top:24px;width:24px}::ng-deep [dir=rtl] .td-file-upload-cancel{left:0;right:-12px}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileUploadComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    TdFileUploadComponent.propDecorators = {
        fileInput: [{ type: core.ViewChild, args: [TdFileInputComponent,] }],
        inputLabel: [{ type: core.ContentChild, args: [TdFileInputLabelDirective,] }],
        defaultColor: [{ type: core.Input }],
        activeColor: [{ type: core.Input }],
        cancelColor: [{ type: core.Input }],
        multiple: [{ type: core.Input, args: ['multiple',] }],
        required: [{ type: core.Input, args: ['required',] }],
        accept: [{ type: core.Input }],
        select: [{ type: core.Output }],
        upload: [{ type: core.Output }],
        cancel: [{ type: core.Output }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileUploadComponent.prototype._multiple;
        /**
         * @type {?}
         * @private
         */
        TdFileUploadComponent.prototype._required;
        /** @type {?} */
        TdFileUploadComponent.prototype.fileInput;
        /** @type {?} */
        TdFileUploadComponent.prototype.inputLabel;
        /**
         * defaultColor?: 'accent' | 'primary' | 'warn'
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         * @type {?}
         */
        TdFileUploadComponent.prototype.defaultColor;
        /**
         * activeColor?: 'accent' | 'primary' | 'warn'
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         * @type {?}
         */
        TdFileUploadComponent.prototype.activeColor;
        /**
         * cancelColor?: 'accent' | 'primary' | 'warn'
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         * @type {?}
         */
        TdFileUploadComponent.prototype.cancelColor;
        /**
         * accept?: string
         * Sets files accepted when opening the file browser dialog.
         * Same as 'accept' attribute in <input/> element.
         * @type {?}
         */
        TdFileUploadComponent.prototype.accept;
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         * @type {?}
         */
        TdFileUploadComponent.prototype.select;
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         * @type {?}
         */
        TdFileUploadComponent.prototype.upload;
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         * @type {?}
         */
        TdFileUploadComponent.prototype.cancel;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: services/file.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IUploadExtras() { }
    if (false) {
        /** @type {?|undefined} */
        IUploadExtras.prototype.headers;
        /** @type {?|undefined} */
        IUploadExtras.prototype.params;
    }
    var TdFileService = /** @class */ (function () {
        /**
         * Creates a new instance
         * \@breaking-change 3.0.0 remove 'Optional' decorator once the legay upload method is removed
         * @param {?} _http the http client instance
         */
        function TdFileService(_http) {
            this._http = _http;
            this._progressSubject = new rxjs.Subject();
            this._progressObservable = this._progressSubject.asObservable();
        }
        Object.defineProperty(TdFileService.prototype, "progress", {
            /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             * @return {?}
             */
            get: function () {
                return this._progressObservable;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Uploads a file to a URL.
         * @param {?} url
         * @param {?} method
         * @param {?} body
         * @param {?=} __3
         * @return {?}
         */
        TdFileService.prototype.send = function (url, method, body, _a) {
            var _this = this;
            var _b = _a === void 0 ? {} : _a, headers = _b.headers, params = _b.params;
            if (!this._http) {
                throw new Error('The HttpClient module needs to be imported at root module level');
            }
            /** @type {?} */
            var req = new http.HttpRequest(method.toUpperCase(), url, body, {
                reportProgress: true,
                headers: new http.HttpHeaders(headers || {}),
                params: new http.HttpParams({ fromObject: params || {} }),
            });
            return this._http.request(req).pipe(operators.tap(( /**
             * @param {?} event
             * @return {?}
             */function (event) { return _this.handleEvent(event); })));
        };
        /**
         * @private
         * @template T
         * @param {?} event
         * @return {?}
         */
        TdFileService.prototype.handleEvent = function (event) {
            switch (event.type) {
                case http.HttpEventType.Sent:
                    this._progressSubject.next(0);
                    break;
                case http.HttpEventType.UploadProgress:
                    this._progressSubject.next(Math.round((100 * event.loaded) / event.total));
                    break;
                case http.HttpEventType.Response:
                    this._progressSubject.next(100);
                    break;
                default:
                    break;
            }
        };
        return TdFileService;
    }());
    TdFileService.decorators = [
        { type: core.Injectable }
    ];
    /** @nocollapse */
    TdFileService.ctorParameters = function () { return [
        { type: http.HttpClient, decorators: [{ type: core.Optional }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdFileService.prototype._progressSubject;
        /**
         * @type {?}
         * @private
         */
        TdFileService.prototype._progressObservable;
        /**
         * @type {?}
         * @private
         */
        TdFileService.prototype._http;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: file.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_FILE = [
        TdFileSelectDirective,
        TdFileDropDirective,
        TdFileUploadComponent,
        TdFileInputComponent,
        TdFileInputLabelDirective,
    ];
    var CovalentFileModule = /** @class */ (function () {
        function CovalentFileModule() {
        }
        return CovalentFileModule;
    }());
    CovalentFileModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [forms.FormsModule, common$1.CommonModule, icon.MatIconModule, button.MatButtonModule, portal.PortalModule],
                    declarations: [TD_FILE],
                    exports: [TD_FILE],
                    providers: [TdFileService],
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
     * Generated from: covalent-core-file.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentFileModule = CovalentFileModule;
    exports.TdFileDropBase = TdFileDropBase;
    exports.TdFileDropDirective = TdFileDropDirective;
    exports.TdFileInputBase = TdFileInputBase;
    exports.TdFileInputComponent = TdFileInputComponent;
    exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
    exports.TdFileSelectDirective = TdFileSelectDirective;
    exports.TdFileService = TdFileService;
    exports.TdFileUploadBase = TdFileUploadBase;
    exports.TdFileUploadComponent = TdFileUploadComponent;
    exports._TdFileDropMixinBase = _TdFileDropMixinBase;
    exports._TdFileInputMixinBase = _TdFileInputMixinBase;
    exports._TdFileUploadMixinBase = _TdFileUploadMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-file.umd.js.map
