(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('@angular/core'), require('@angular/animations'), require('rxjs'), require('@angular/cdk/coercion'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/common', ['exports', '@angular/common', '@angular/router', 'rxjs/operators', '@angular/core', '@angular/animations', 'rxjs', '@angular/cdk/coercion', '@angular/forms'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.common = {}),global.ng.common,global.ng.router,global.rxjs.operators,global.ng.core,global.ng.animations,global.rxjs,global.ng.cdk.coercion,global.ng.forms));
}(this, (function (exports,common,router,operators,core,animations,rxjs,coercion,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdAutoTrimDirective = /** @class */ (function () {
        function TdAutoTrimDirective(_model) {
            this._model = _model;
        }
        /**
         * Listens to host's (blur) event and trims value.
         */
        /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
        TdAutoTrimDirective.prototype.onBlur = /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._model && this._model.value && typeof (this._model.value) === 'string') {
                    this._model.update.emit(this._model.value.trim());
                }
            };
        TdAutoTrimDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdAutoTrim]',
                    },] }
        ];
        /** @nocollapse */
        TdAutoTrimDirective.ctorParameters = function () {
            return [
                { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
            ];
        };
        TdAutoTrimDirective.propDecorators = {
            onBlur: [{ type: core.HostListener, args: ['blur', ['$event'],] }]
        };
        return TdAutoTrimDirective;
    }());

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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFullscreenDirective = /** @class */ (function () {
        function TdFullscreenDirective(_document, _el) {
            this._document = _document;
            this._el = _el;
            this.fullScreenIsActive = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdFullscreenDirective.prototype.fsChangeHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.toggleFullScreen = /**
         * @return {?}
         */
            function () {
                this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.enterFullScreen = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                var nativeElement = this._el.nativeElement;
                /** @type {?} */
                var enterFullScreenMap = {
                    requestFullscreen: function () { return nativeElement.requestFullscreen(); },
                    // Chrome
                    webkitRequestFullscreen: function () { return nativeElement.webkitRequestFullscreen(); },
                    // Safari 
                    mozRequestFullScreen: function () { return nativeElement.mozRequestFullScreen(); },
                    // Firefox
                    msRequestFullscreen: function () { return nativeElement.msRequestFullscreen(); },
                };
                try {
                    for (var _b = __values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var handler = _c.value;
                        if (nativeElement[handler]) {
                            enterFullScreenMap[handler]();
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.exitFullScreen = /**
         * @return {?}
         */
            function () {
                var e_2, _a;
                var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
                /** @type {?} */
                var exitFullScreenMap = {
                    exitFullscreen: function () { return _document.exitFullscreen(); },
                    // Chrome
                    webkitExitFullscreen: function () { return _document.webkitExitFullscreen(); },
                    // Safari
                    mozCancelFullScreen: function () { return _document.mozCancelFullScreen(); },
                    // Firefox
                    msExitFullscreen: function () { return _document.msExitFullscreen(); },
                };
                try {
                    for (var _c = __values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var handler = _d.value;
                        if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                            exitFullScreenMap[handler]();
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype._getFullScreenElement = /**
         * @return {?}
         */
            function () {
                var e_3, _a;
                var _document = this._document;
                /** @type {?} */
                var tdFullScreenElementMap = {
                    fullscreenElement: function () { return _document.fullscreenElement; },
                    // Chrome, Opera
                    webkitFullscreenElement: function () { return _document.webkitFullscreenElement; },
                    // Safari
                    mozFullscreenElement: function () { return _document.mozFullscreenElement; },
                    // Firefox
                    msFullscreenElement: function () { return _document.msFullscreenElement; },
                };
                try {
                    for (var _b = __values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var props = _c.value;
                        if (_document[props]) {
                            return _document[props];
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
            };
        TdFullscreenDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFullScreen]',
                        exportAs: 'tdFullScreen',
                    },] }
        ];
        /** @nocollapse */
        TdFullscreenDirective.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: core.ElementRef }
            ];
        };
        TdFullscreenDirective.propDecorators = {
            fsChangeHandler: [{ type: core.HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: core.HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
        };
        return TdFullscreenDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeAgoPipe = /** @class */ (function () {
        function TdTimeAgoPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeAgoPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
            function (time, reference) {
                // Convert time to date object if not already
                time = new Date(time);
                /** @type {?} */
                var ref = new Date(reference);
                // If not a valid timestamp, return 'Invalid Date'
                if (!time.getTime()) {
                    return 'Invalid Date';
                }
                // For unit testing, we need to be able to declare a static start time
                // for calculations, or else speed of tests can bork.
                /** @type {?} */
                var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
                /** @type {?} */
                var diff = Math.floor((startTime - time.getTime()) / 1000);
                if (diff < 2) {
                    return '1 second ago';
                }
                if (diff < 60) {
                    return Math.floor(diff) + ' seconds ago';
                }
                // Minutes
                diff = diff / 60;
                if (diff < 2) {
                    return '1 minute ago';
                }
                if (diff < 60) {
                    return Math.floor(diff) + ' minutes ago';
                }
                // Hours
                diff = diff / 60;
                if (diff < 2) {
                    return '1 hour ago';
                }
                if (diff < 24) {
                    return Math.floor(diff) + ' hours ago';
                }
                // Days
                diff = diff / 24;
                if (diff < 2) {
                    return '1 day ago';
                }
                if (diff < 30) {
                    return Math.floor(diff) + ' days ago';
                }
                // Months
                diff = diff / 30;
                if (diff < 2) {
                    return '1 month ago';
                }
                if (diff < 12) {
                    return Math.floor(diff) + ' months ago';
                }
                // Years
                diff = diff / 12;
                if (diff < 2) {
                    return '1 year ago';
                }
                else {
                    return Math.floor(diff) + ' years ago';
                }
            };
        TdTimeAgoPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeAgo',
                    },] }
        ];
        return TdTimeAgoPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeDifferencePipe = /** @class */ (function () {
        function TdTimeDifferencePipe() {
        }
        /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
        TdTimeDifferencePipe.prototype.transform = /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
            function (start, end) {
                /** @type {?} */
                var startTime = new Date(start);
                /** @type {?} */
                var endTime;
                if (end !== undefined) {
                    endTime = new Date(end);
                }
                else {
                    endTime = new Date();
                }
                if (!startTime.getTime() || !endTime.getTime()) {
                    return 'Invalid Date';
                }
                /** @type {?} */
                var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
                /** @type {?} */
                var days = Math.floor(diff / (60 * 60 * 24));
                diff = diff - (days * (60 * 60 * 24));
                /** @type {?} */
                var hours = Math.floor(diff / (60 * 60));
                diff = diff - (hours * (60 * 60));
                /** @type {?} */
                var minutes = Math.floor(diff / (60));
                diff -= minutes * (60);
                /** @type {?} */
                var seconds = diff;
                /** @type {?} */
                var pad = '00';
                /** @type {?} */
                var daysFormatted = '';
                if (days > 0 && days < 2) {
                    daysFormatted = ' day - ';
                }
                else if (days > 1) {
                    daysFormatted = ' days - ';
                }
                return (days > 0 ? days + daysFormatted : daysFormatted) +
                    pad.substring(0, pad.length - (hours + '').length) + hours + ':' +
                    pad.substring(0, pad.length - (minutes + '').length) + minutes + ':' +
                    pad.substring(0, pad.length - (seconds + '').length) + seconds;
            };
        TdTimeDifferencePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeDifference',
                    },] }
        ];
        return TdTimeDifferencePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeUntilPipe = /** @class */ (function () {
        function TdTimeUntilPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeUntilPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
            function (time, reference) {
                // Convert time to date object if not already
                time = new Date(time);
                /** @type {?} */
                var ref = new Date(reference);
                // If not a valid timestamp, return 'Invalid Date'
                if (!time.getTime()) {
                    return 'Invalid Date';
                }
                // For unit testing, we need to be able to declare a static start time
                // for calculations, or else speed of tests can bork.
                /** @type {?} */
                var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
                /** @type {?} */
                var diff = Math.floor((time.getTime() - startTime) / 1000);
                if (diff < 2) {
                    return 'in 1 second';
                }
                if (diff < 60) {
                    return 'in ' + Math.floor(diff) + ' seconds';
                }
                // Minutes
                diff = diff / 60;
                if (diff < 2) {
                    return 'in 1 minute';
                }
                if (diff < 60) {
                    return 'in ' + Math.floor(diff) + ' minutes';
                }
                // Hours
                diff = diff / 60;
                if (diff < 2) {
                    return 'in 1 hour';
                }
                if (diff < 24) {
                    return 'in ' + Math.floor(diff) + ' hours';
                }
                // Days
                diff = diff / 24;
                if (diff < 2) {
                    return 'in 1 day';
                }
                if (diff < 30) {
                    return 'in ' + Math.floor(diff) + ' days';
                }
                // Months
                diff = diff / 30;
                if (diff < 2) {
                    return 'in 1 month';
                }
                if (diff < 12) {
                    return 'in ' + Math.floor(diff) + ' months';
                }
                // Years
                diff = diff / 12;
                if (diff < 2) {
                    return 'in 1 year';
                }
                else {
                    return 'in ' + Math.floor(diff) + ' years';
                }
            };
        TdTimeUntilPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'timeUntil',
                    },] }
        ];
        return TdTimeUntilPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBytesPipe = /** @class */ (function () {
        function TdBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
            /**
             * @param {?} bytes
             * @param {?=} precision
             * @return {?}
             */
            function (bytes, precision) {
                if (precision === void 0) {
                    precision = 2;
                }
                if (bytes === 0) {
                    return '0 B';
                }
                else if (isNaN(parseInt(bytes, 10))) {
                    /* If not a valid number, return 'Invalid Number' */
                    return 'Invalid Number';
                }
                /** @type {?} */
                var k = 1024;
                /** @type {?} */
                var sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
                /** @type {?} */
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                // if less than 1
                if (i < 0) {
                    return 'Invalid Number';
                }
                return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
            };
        TdBytesPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'bytes',
                    },] }
        ];
        return TdBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDecimalBytesPipe = /** @class */ (function () {
        function TdDecimalBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdDecimalBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
            /**
             * @param {?} bytes
             * @param {?=} precision
             * @return {?}
             */
            function (bytes, precision) {
                if (precision === void 0) {
                    precision = 2;
                }
                if (bytes === 0) {
                    return '0 B';
                }
                else if (isNaN(parseInt(bytes, 10))) {
                    /* If not a valid number, return 'Invalid Number' */
                    return 'Invalid Number';
                }
                /** @type {?} */
                var k = 1000;
                /** @type {?} */
                var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                /** @type {?} */
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                // if less than 1
                if (i < 0) {
                    return 'Invalid Number';
                }
                return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
            };
        TdDecimalBytesPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'decimalBytes',
                    },] }
        ];
        return TdDecimalBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDigitsPipe = /** @class */ (function () {
        function TdDigitsPipe(_locale) {
            if (_locale === void 0) {
                _locale = 'en';
            }
            this._locale = _locale;
            this._decimalPipe = new common.DecimalPipe(this._locale);
        }
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /**
         * @param {?} digits
         * @param {?=} precision
         * @return {?}
         */
        TdDigitsPipe.prototype.transform = /* `digits` needs to be type `digits: any` or TypeScript complains */
            /**
             * @param {?} digits
             * @param {?=} precision
             * @return {?}
             */
            function (digits, precision) {
                if (precision === void 0) {
                    precision = 1;
                }
                if (digits === 0) {
                    return '0';
                }
                else if (isNaN(parseInt(digits, 10))) {
                    /* If not a valid number, return the value */
                    return digits;
                }
                else if (digits < 1) {
                    return this._decimalPipe.transform(digits.toFixed(precision));
                }
                /** @type {?} */
                var k = 1000;
                /** @type {?} */
                var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
                /** @type {?} */
                var i = Math.floor(Math.log(digits) / Math.log(k));
                /** @type {?} */
                var size = sizes[i];
                return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
            };
        TdDigitsPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'digits',
                    },] }
        ];
        /** @nocollapse */
        TdDigitsPipe.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] }] }
            ];
        };
        return TdDigitsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTruncatePipe = /** @class */ (function () {
        function TdTruncatePipe() {
        }
        /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
        TdTruncatePipe.prototype.transform = /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
            function (text, length) {
                if (typeof text !== 'string') {
                    return '';
                }
                // Truncate
                /** @type {?} */
                var truncated = text.substr(0, length);
                if (text.length > length) {
                    if (truncated.lastIndexOf(' ') > 0) {
                        truncated = truncated.trim();
                    }
                    truncated += '…';
                }
                return truncated;
            };
        TdTruncatePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'truncate',
                    },] }
        ];
        return TdTruncatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var RouterPathService = /** @class */ (function () {
        function RouterPathService(_router) {
            this._router = _router;
            this._router.events.pipe(operators.filter(function (e) { return e instanceof router.RoutesRecognized; }), operators.pairwise()).subscribe(function (e) {
                RouterPathService._previousRoute = e[0].urlAfterRedirects;
            });
        }
        /*
        * Utility function to get the route the user previously went to
        * good for use in a "back button"
        */
        /*
          * Utility function to get the route the user previously went to
          * good for use in a "back button"
          */
        /**
         * @return {?}
         */
        RouterPathService.prototype.getPreviousRoute = /*
          * Utility function to get the route the user previously went to
          * good for use in a "back button"
          */
            /**
             * @return {?}
             */
            function () {
                return RouterPathService._previousRoute;
            };
        RouterPathService._previousRoute = '/';
        RouterPathService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RouterPathService.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return RouterPathService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var IconService = /** @class */ (function () {
        function IconService() {
            this._icons = [
                'access_alarm',
                'access_alarms',
                'access_time',
                'accessibility',
                'account_balance',
                'account_balance_wallet',
                'account_box',
                'account_circle',
                'add',
                'add_alarm',
                'add_box',
                'add_circle',
                'add_circle_outline',
                'add_shopping_cart',
                'add_to_photos',
                'adjust',
                'alarm',
                'alarm_add',
                'alarm_off',
                'alarm_on',
                'album',
                'android',
                'announcement',
                'apps',
                'archive',
                'arrow_back',
                'arrow_drop_down',
                'arrow_drop_down_circle',
                'arrow_drop_up',
                'arrow_forward',
                'aspect_ratio',
                'assessment',
                'assignment',
                'assignment_ind',
                'assignment_late',
                'assignment_return',
                'assignment_returned',
                'assignment_turned_in',
                'assistant_photo',
                'attach_file',
                'attach_money',
                'attachment',
                'audiotrack',
                'autorenew',
                'av_timer',
                'backspace',
                'backup',
                'battery_alert',
                'battery_charging_full',
                'battery_full',
                'battery_std',
                'battery_unknown',
                'beenhere',
                'block',
                'bluetooth',
                'bluetooth_audio',
                'bluetooth_connected',
                'bluetooth_disabled',
                'bluetooth_searching',
                'blur_circular',
                'blur_linear',
                'blur_off',
                'blur_on',
                'book',
                'bookmark',
                'bookmark_border',
                'border_all',
                'border_bottom',
                'border_clear',
                'border_color',
                'border_horizontal',
                'border_inner',
                'border_left',
                'border_outer',
                'border_right',
                'border_style',
                'border_top',
                'border_vertical',
                'brightness_1',
                'brightness_2',
                'brightness_3',
                'brightness_4',
                'brightness_5',
                'brightness_6',
                'brightness_7',
                'brightness_auto',
                'brightness_high',
                'brightness_low',
                'brightness_medium',
                'broken_image',
                'brush',
                'bug_report',
                'build',
                'business',
                'cached',
                'cake',
                'call',
                'call_end',
                'call_made',
                'call_merge',
                'call_missed',
                'call_received',
                'call_split',
                'camera',
                'camera_alt',
                'camera_front',
                'camera_rear',
                'camera_roll',
                'cancel',
                'cast',
                'cast_connected',
                'center_focus_strong',
                'center_focus_weak',
                'chat',
                'check',
                'check_box',
                'check_box_outline_blank',
                'check_circle',
                'chevron_left',
                'chevron_right',
                'class',
                'clear',
                'clear_all',
                'close',
                'closed_caption',
                'cloud',
                'cloud_circle',
                'cloud_done',
                'cloud_download',
                'cloud_off',
                'cloud_queue',
                'cloud_upload',
                'collections',
                'collections_bookmark',
                'color_lens',
                'colorize',
                'comment',
                'compare',
                'computer',
                'confirmation_number',
                'contact_phone',
                'contacts',
                'content_copy',
                'content_cut',
                'content_paste',
                'control_point',
                'control_point_duplicate',
                'create',
                'credit_card',
                'crop',
                'crop_16_9',
                'crop_3_2',
                'crop_5_4',
                'crop_7_5',
                'crop_din',
                'crop_free',
                'crop_landscape',
                'crop_original',
                'crop_portrait',
                'crop_square',
                'dashboard',
                'data_usage',
                'dehaze',
                'delete',
                'description',
                'desktop_mac',
                'desktop_windows',
                'details',
                'developer_board',
                'developer_mode',
                'device_hub',
                'devices',
                'dialer_sip',
                'dialpad',
                'directions',
                'directions_bike',
                'directions_boat',
                'directions_bus',
                'directions_car',
                'directions_railway',
                'directions_run',
                'directions_subway',
                'directions_transit',
                'directions_walk',
                'disc_full',
                'dns',
                'do_not_disturb',
                'do_not_disturb_alt',
                'dock',
                'domain',
                'done',
                'done_all',
                'drafts',
                'drive_eta',
                'dvr',
                'edit',
                'eject',
                'email',
                'equalizer',
                'error',
                'error_outline',
                'event',
                'event_available',
                'event_busy',
                'event_note',
                'event_seat',
                'exit_to_app',
                'expand_less',
                'expand_more',
                'explicit',
                'explore',
                'exposure',
                'exposure_neg_1',
                'exposure_neg_2',
                'exposure_plus_1',
                'exposure_plus_2',
                'exposure_zero',
                'extension',
                'face',
                'fast_forward',
                'fast_rewind',
                'favorite',
                'favorite_border',
                'feedback',
                'file_download',
                'file_upload',
                'filter',
                'filter_1',
                'filter_2',
                'filter_3',
                'filter_4',
                'filter_5',
                'filter_6',
                'filter_7',
                'filter_8',
                'filter_9',
                'filter_9_plus',
                'filter_b_and_w',
                'filter_center_focus',
                'filter_drama',
                'filter_frames',
                'filter_hdr',
                'filter_list',
                'filter_none',
                'filter_tilt_shift',
                'filter_vintage',
                'find_in_page',
                'find_replace',
                'flag',
                'flare',
                'flash_auto',
                'flash_off',
                'flash_on',
                'flight',
                'flight_land',
                'flight_takeoff',
                'flip',
                'flip_to_back',
                'flip_to_front',
                'folder',
                'folder_open',
                'folder_shared',
                'folder_special',
                'font_download',
                'format_align_center',
                'format_align_justify',
                'format_align_left',
                'format_align_right',
                'format_bold',
                'format_clear',
                'format_color_fill',
                'format_color_reset',
                'format_color_text',
                'format_indent_decrease',
                'format_indent_increase',
                'format_italic',
                'format_line_spacing',
                'format_list_bulleted',
                'format_list_numbered',
                'format_paint',
                'format_quote',
                'format_size',
                'format_strikethrough',
                'format_textdirection_l_to_r',
                'format_textdirection_r_to_l',
                'format_underlined',
                'forum',
                'forward',
                'forward_10',
                'forward_30',
                'forward_5',
                'fullscreen',
                'fullscreen_exit',
                'functions',
                'gamepad',
                'games',
                'gesture',
                'get_app',
                'gif',
                'gps_fixed',
                'gps_not_fixed',
                'gps_off',
                'grade',
                'gradient',
                'grain',
                'graphic_eq',
                'grid_off',
                'grid_on',
                'group',
                'group_add',
                'group_work',
                'hd',
                'hdr_off',
                'hdr_on',
                'hdr_strong',
                'hdr_weak',
                'headset',
                'headset_mic',
                'healing',
                'hearing',
                'help',
                'help_outline',
                'high_quality',
                'highlight_off',
                'history',
                'home',
                'hotel',
                'hourglass_empty',
                'hourglass_full',
                'http',
                'https',
                'image',
                'image_aspect_ratio',
                'import_export',
                'inbox',
                'indeterminate_check_box',
                'info',
                'info_outline',
                'input',
                'insert_chart',
                'insert_comment',
                'insert_drive_file',
                'insert_emoticon',
                'insert_invitation',
                'insert_link',
                'insert_photo',
                'invert_colors',
                'invert_colors_off',
                'iso',
                'keyboard',
                'keyboard_arrow_down',
                'keyboard_arrow_left',
                'keyboard_arrow_right',
                'keyboard_arrow_up',
                'keyboard_backspace',
                'keyboard_capslock',
                'keyboard_hide',
                'keyboard_return',
                'keyboard_tab',
                'keyboard_voice',
                'label',
                'label_outline',
                'landscape',
                'language',
                'laptop',
                'laptop_chromebook',
                'laptop_mac',
                'laptop_windows',
                'launch',
                'layers',
                'layers_clear',
                'leak_add',
                'leak_remove',
                'lens',
                'library_add',
                'library_books',
                'library_music',
                'link',
                'list',
                'live_help',
                'live_tv',
                'local_activity',
                'local_airport',
                'local_atm',
                'local_bar',
                'local_cafe',
                'local_car_wash',
                'local_convenience_store',
                'local_dining',
                'local_drink',
                'local_florist',
                'local_gas_station',
                'local_grocery_store',
                'local_hospital',
                'local_hotel',
                'local_laundry_service',
                'local_library',
                'local_mall',
                'local_movies',
                'local_offer',
                'local_parking',
                'local_pharmacy',
                'local_phone',
                'local_pizza',
                'local_play',
                'local_post_office',
                'local_printshop',
                'local_see',
                'local_shipping',
                'local_taxi',
                'location_city',
                'location_disabled',
                'location_off',
                'location_on',
                'location_searching',
                'lock',
                'lock_open',
                'lock_outline',
                'looks',
                'looks_3',
                'looks_4',
                'looks_5',
                'looks_6',
                'looks_one',
                'looks_two',
                'loop',
                'loupe',
                'loyalty',
                'mail',
                'map',
                'markunread',
                'markunread_mailbox',
                'memory',
                'menu',
                'merge_type',
                'message',
                'mic',
                'mic_none',
                'mic_off',
                'mms',
                'mode_comment',
                'mode_edit',
                'money_off',
                'monochrome_photos',
                'mood',
                'mood_bad',
                'more',
                'more_horiz',
                'more_vert',
                'mouse',
                'movie',
                'movie_creation',
                'music_note',
                'my_library_add',
                'my_library_books',
                'my_library_music',
                'my_location',
                'nature',
                'nature_people',
                'navigate_before',
                'navigate_next',
                'navigation',
                'network_cell',
                'network_locked',
                'network_wifi',
                'new_releases',
                'nfc',
                'no_sim',
                'not_interested',
                'note_add',
                'notifications',
                'notifications_active',
                'notifications_none',
                'notifications_off',
                'notifications_paused',
                'offline_pin',
                'ondemand_video',
                'open_in_browser',
                'open_in_new',
                'open_with',
                'pages',
                'pageview',
                'palette',
                'panorama',
                'panorama_fish_eye',
                'panorama_horizontal',
                'panorama_vertical',
                'panorama_wide_angle',
                'party_mode',
                'pause',
                'pause_circle_filled',
                'pause_circle_outline',
                'payment',
                'people',
                'people_outline',
                'perm_camera_mic',
                'perm_contact_calendar',
                'perm_data_setting',
                'perm_device_information',
                'perm_identity',
                'perm_media',
                'perm_phone_msg',
                'perm_scan_wifi',
                'person',
                'person_add',
                'person_outline',
                'person_pin',
                'personal_video',
                'phone',
                'phone_android',
                'phone_bluetooth_speaker',
                'phone_forwarded',
                'phone_in_talk',
                'phone_iphone',
                'phone_locked',
                'phone_missed',
                'phone_paused',
                'phonelink',
                'phonelink_erase',
                'phonelink_lock',
                'phonelink_off',
                'phonelink_ring',
                'phonelink_setup',
                'photo',
                'photo_album',
                'photo_camera',
                'photo_library',
                'photo_size_select_actual',
                'photo_size_select_large',
                'photo_size_select_small',
                'picture_as_pdf',
                'picture_in_picture',
                'pin_drop',
                'place',
                'play_arrow',
                'play_circle_filled',
                'play_circle_outline',
                'play_for_work',
                'play_shopping_bag',
                'playlist_add',
                'plus_one',
                'poll',
                'polymer',
                'portable_wifi_off',
                'portrait',
                'power',
                'power_input',
                'power_settings_new',
                'present_to_all',
                'print',
                'public',
                'publish',
                'query_builder',
                'question_answer',
                'queue',
                'queue_music',
                'radio',
                'radio_button_checked',
                'radio_button_unchecked',
                'rate_review',
                'receipt',
                'recent_actors',
                'redeem',
                'redo',
                'refresh',
                'remove',
                'remove_circle',
                'remove_circle_outline',
                'remove_red_eye',
                'reorder',
                'repeat',
                'repeat_one',
                'replay',
                'replay_10',
                'replay_30',
                'replay_5',
                'reply',
                'reply_all',
                'report',
                'report_problem',
                'restaurant_menu',
                'restore',
                'ring_volume',
                'room',
                'rotate_90_degrees_ccw',
                'rotate_left',
                'rotate_right',
                'router',
                'satellite',
                'save',
                'scanner',
                'schedule',
                'school',
                'screen_lock_landscape',
                'screen_lock_portrait',
                'screen_lock_rotation',
                'screen_rotation',
                'sd_card',
                'sd_storage',
                'search',
                'security',
                'select_all',
                'send',
                'settings',
                'settings_applications',
                'settings_backup_restore',
                'settings_bluetooth',
                'settings_brightness',
                'settings_cell',
                'settings_ethernet',
                'settings_input_antenna',
                'settings_input_component',
                'settings_input_composite',
                'settings_input_hdmi',
                'settings_input_svideo',
                'settings_overscan',
                'settings_phone',
                'settings_power',
                'settings_remote',
                'settings_system_daydream',
                'settings_voice',
                'share',
                'shop',
                'shop_two',
                'shopping_basket',
                'shopping_cart',
                'shuffle',
                'signal_cellular_4_bar',
                'signal_cellular_connected_no_internet_4_bar',
                'signal_cellular_no_sim',
                'signal_cellular_null',
                'signal_cellular_off',
                'signal_wifi_4_bar',
                'signal_wifi_4_bar_lock',
                'signal_wifi_off',
                'sim_card',
                'sim_card_alert',
                'skip_next',
                'skip_previous',
                'slideshow',
                'smartphone',
                'sms',
                'sms_failed',
                'snooze',
                'sort',
                'sort_by_alpha',
                'space_bar',
                'speaker',
                'speaker_group',
                'speaker_notes',
                'speaker_phone',
                'spellcheck',
                'star',
                'star_border',
                'star_half',
                'stars',
                'stay_current_landscape',
                'stay_current_portrait',
                'stay_primary_landscape',
                'stay_primary_portrait',
                'stop',
                'storage',
                'store',
                'store_mall_directory',
                'straighten',
                'strikethrough_s',
                'style',
                'subject',
                'subtitles',
                'supervisor_account',
                'surround_sound',
                'swap_calls',
                'swap_horiz',
                'swap_vert',
                'swap_vertical_circle',
                'switch_camera',
                'switch_video',
                'sync',
                'sync_disabled',
                'sync_problem',
                'system_update',
                'system_update_alt',
                'tab',
                'tab_unselected',
                'tablet',
                'tablet_android',
                'tablet_mac',
                'tag_faces',
                'tap_and_play',
                'terrain',
                'text_format',
                'textsms',
                'texture',
                'theaters',
                'thumb_down',
                'thumb_up',
                'thumbs_up_down',
                'time_to_leave',
                'timelapse',
                'timer',
                'timer_10',
                'timer_3',
                'timer_off',
                'toc',
                'today',
                'toll',
                'tonality',
                'toys',
                'track_changes',
                'traffic',
                'transform',
                'translate',
                'trending_down',
                'trending_flat',
                'trending_up',
                'tune',
                'turned_in',
                'turned_in_not',
                'tv',
                'undo',
                'unfold_less',
                'unfold_more',
                'usb',
                'verified_user',
                'vertical_align_bottom',
                'vertical_align_center',
                'vertical_align_top',
                'vibration',
                'video_library',
                'videocam',
                'videocam_off',
                'view_agenda',
                'view_array',
                'view_carousel',
                'view_column',
                'view_comfy',
                'view_compact',
                'view_day',
                'view_headline',
                'view_list',
                'view_module',
                'view_quilt',
                'view_stream',
                'view_week',
                'vignette',
                'visibility',
                'visibility_off',
                'voice_chat',
                'voicemail',
                'volume_down',
                'volume_mute',
                'volume_off',
                'volume_up',
                'vpn_key',
                'vpn_lock',
                'wallpaper',
                'warning',
                'watch',
                'wb_auto',
                'wb_cloudy',
                'wb_incandescent',
                'wb_iridescent',
                'wb_sunny',
                'wc',
                'web',
                'whatshot',
                'widgets',
                'wifi',
                'wifi_lock',
                'wifi_tethering',
                'work',
                'wrap_text',
                'youtube_searched_for',
                'zoom_in',
                'zoom_out',
            ];
        }
        Object.defineProperty(IconService.prototype, "icons", {
            get: /**
             * @return {?}
             */ function () {
                return this._icons;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} query
         * @return {?}
         */
        IconService.prototype.filter = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                return this.icons.filter(function (el) {
                    return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
                });
            };
        IconService.decorators = [
            { type: core.Injectable }
        ];
        return IconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
    // Validators
    /** @type {?} */
    var TD_VALIDATORS = [];
    /** @type {?} */
    var TD_PIPES = [
        TdTimeAgoPipe,
        TdTimeDifferencePipe,
        TdTimeUntilPipe,
        TdBytesPipe,
        TdDecimalBytesPipe,
        TdDigitsPipe,
        TdTruncatePipe,
    ];
    var CovalentCommonModule = /** @class */ (function () {
        function CovalentCommonModule() {
        }
        CovalentCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule],
                        declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                        exports: [forms.FormsModule, common.CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                        providers: [RouterPathService, IconService],
                    },] }
        ];
        return CovalentCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdRotateAnimation
     *
     * Parameter Options:
     * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
     * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerates and decelerates. Defaults to ease-in.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
     *
     * usage: [\@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
     * @type {?}
     */
    var tdRotateAnimation = animations.trigger('tdRotate', [
        animations.state('0', animations.style({
            transform: 'rotate({{ degressStart }}deg)',
        }), { params: { degressStart: 0 } }),
        animations.state('1', animations.style({
            transform: 'rotate({{ degreesEnd }}deg)',
        }), { params: { degreesEnd: 180 } }),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
            ]),
        ], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdCollapseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
     * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
     *
     * usage: [\@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
     * @type {?}
     */
    var tdCollapseAnimation = animations.trigger('tdCollapse', [
        animations.state('1', animations.style({
            height: '0',
            overflow: 'hidden',
        })),
        animations.state('0', animations.style({
            height: animations.AUTO_STYLE,
            overflow: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.style({
                overflow: 'hidden',
                height: animations.AUTO_STYLE,
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    height: '0',
                    overflow: 'hidden',
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.style({
                height: '0',
                overflow: 'hidden',
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    overflow: 'hidden',
                    height: animations.AUTO_STYLE,
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdFadeInOutAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
     * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
     *
     * usage: [\@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFadeInOutAnimation = animations.trigger('tdFadeInOut', [
        animations.state('0', animations.style({
            opacity: '0',
            visibility: 'hidden',
        })),
        animations.state('1', animations.style({
            opacity: animations.AUTO_STYLE,
            visibility: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdBounceAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a bounce animation.
     *
     * usage: [\@tdBounce]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdBounceAnimation = animations.trigger('tdBounce', [
        animations.state('0', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.state('1', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
                    animations.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdFlashAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a flash animation.
     *
     * usage: [\@tdFlash]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFlashAnimation = animations.trigger('tdFlash', [
        animations.state('0', animations.style({
            opacity: 1,
        })),
        animations.state('1', animations.style({
            opacity: 1,
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ opacity: 1, offset: 0 }),
                    animations.style({ opacity: 0, offset: 0.25 }),
                    animations.style({ opacity: 1, offset: 0.5 }),
                    animations.style({ opacity: 0, offset: 0.75 }),
                    animations.style({ opacity: 1, offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdHeadshakeAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
     *
     * usage: [\@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdHeadshakeAnimation = animations.trigger('tdHeadshake', [
        animations.state('0', animations.style({
            transform: 'translateX(0)',
        })),
        animations.state('1', animations.style({
            transform: 'translateX(0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'translateX(0)', offset: 0 }),
                    animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    animations.style({ transform: 'translateX(0)', offset: 0.50 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdJelloAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
     *
     * usage: [\@tdJello]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdJelloAnimation = animations.trigger('tdJello', [
        animations.state('0', animations.style({
            transform: 'none',
        })),
        animations.state('1', animations.style({
            transform: 'none',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'none', offset: 0 }),
                    animations.style({ transform: 'none', offset: 0.011 }),
                    animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                    animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                    animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                    animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                    animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                    animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                    animations.style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdPulseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
     *
     * usage: [\@tdPulse]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdPulseAnimation = animations.trigger('tdPulse', [
        animations.state('0', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.state('1', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () {
        // empty method
    };
    /**
     * Mixin to augment a component with ngModel support.
     * @template T
     * @param {?} base
     * @param {?=} initialValue
     * @return {?}
     */
    function mixinControlValueAccessor(base, initialValue) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
                _this.onChange = function (_) { return noop; };
                _this.onTouched = function () { return noop; };
                _this._subjectValueChanges = new rxjs.Subject();
                _this.valueChanges = _this._subjectValueChanges.asObservable();
                return _this;
            }
            Object.defineProperty(class_1.prototype, "value", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._value;
                },
                set: /**
                 * @param {?} v
                 * @return {?}
                 */ function (v) {
                    if (v !== this._value) {
                        this._value = v;
                        this.onChange(v);
                        this._changeDetectorRef.markForCheck();
                        this._subjectValueChanges.next(v);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.writeValue = /**
             * @param {?} value
             * @return {?}
             */
                function (value) {
                    this.value = value;
                    this._changeDetectorRef.markForCheck();
                };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnChange = /**
             * @param {?} fn
             * @return {?}
             */
                function (fn) {
                    this.onChange = fn;
                };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnTouched = /**
             * @param {?} fn
             * @return {?}
             */
                function (fn) {
                    this.onTouched = fn;
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisabled(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disabled = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disabled", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disabled !== newValue) {
                        this._disabled = newValue;
                        this.onDisabledChange(this._disabled);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisabledChange = /**
             * @param {?} v
             * @return {?}
             */
                function (v) {
                    /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisableRipple(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disableRipple = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disableRipple", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._disableRipple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disableRipple !== newValue) {
                        this._disableRipple = newValue;
                        this.onDisableRippleChange(this._disableRipple);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisableRippleChange = /**
             * @param {?} v
             * @return {?}
             */
                function (v) {
                    /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentValidators = /** @class */ (function () {
        function CovalentValidators() {
        }
        /**
         * @param {?} minValue
         * @return {?}
         */
        CovalentValidators.min = /**
         * @param {?} minValue
         * @return {?}
         */
            function (minValue) {
                /** @type {?} */
                var func = function (c) {
                    if (!!forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                        return undefined;
                    }
                    /** @type {?} */
                    var v = c.value;
                    return v < minValue ?
                        { min: { minValue: minValue, actualValue: v } } :
                        undefined;
                };
                return func;
            };
        /**
         * @param {?} maxValue
         * @return {?}
         */
        CovalentValidators.max = /**
         * @param {?} maxValue
         * @return {?}
         */
            function (maxValue) {
                /** @type {?} */
                var func = function (c) {
                    if (!!forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                        return undefined;
                    }
                    /** @type {?} */
                    var v = c.value;
                    return v > maxValue ?
                        { max: { maxValue: maxValue, actualValue: v } } :
                        undefined;
                };
                return func;
            };
        /**
         * @param {?} c
         * @return {?}
         */
        CovalentValidators.numberRequired = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                return (Number.isNaN(c.value)) ?
                    { required: true } :
                    undefined;
            };
        return CovalentValidators;
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

    exports.CovalentCommonModule = CovalentCommonModule;
    exports.tdRotateAnimation = tdRotateAnimation;
    exports.tdCollapseAnimation = tdCollapseAnimation;
    exports.tdFadeInOutAnimation = tdFadeInOutAnimation;
    exports.tdBounceAnimation = tdBounceAnimation;
    exports.tdFlashAnimation = tdFlashAnimation;
    exports.tdHeadshakeAnimation = tdHeadshakeAnimation;
    exports.tdJelloAnimation = tdJelloAnimation;
    exports.tdPulseAnimation = tdPulseAnimation;
    exports.mixinControlValueAccessor = mixinControlValueAccessor;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.TdAutoTrimDirective = TdAutoTrimDirective;
    exports.CovalentValidators = CovalentValidators;
    exports.TdTimeAgoPipe = TdTimeAgoPipe;
    exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
    exports.TdBytesPipe = TdBytesPipe;
    exports.TdDigitsPipe = TdDigitsPipe;
    exports.TdTruncatePipe = TdTruncatePipe;
    exports.TdDecimalBytesPipe = TdDecimalBytesPipe;
    exports.ɵa = TdFullscreenDirective;
    exports.ɵb = TdTimeUntilPipe;
    exports.ɵd = IconService;
    exports.ɵc = RouterPathService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-common.umd.js.map