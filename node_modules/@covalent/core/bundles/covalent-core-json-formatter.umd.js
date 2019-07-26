(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/core'), require('@angular/cdk/bidi'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/json-formatter', ['exports', '@angular/common', '@angular/material/tooltip', '@angular/material/icon', '@angular/core', '@angular/cdk/bidi', '@covalent/core/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['json-formatter'] = {}),global.ng.common,global.ng.material.tooltip,global.ng.material.icon,global.ng.core,global.ng.cdk.bidi,global.covalent.core.common));
}(this, (function (exports,common,tooltip,icon,core,bidi,common$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdJsonFormatterComponent = /** @class */ (function () {
        function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
            this._changeDetectorRef = _changeDetectorRef;
            this._dir = _dir;
            this._open = false;
            this._levelsOpen = 0;
        }
        Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this._levelsOpen;
            },
            /**
             * levelsOpen?: number
             * Levels opened by default when JS object is formatted and rendered.
             */
            set: /**
             * levelsOpen?: number
             * Levels opened by default when JS object is formatted and rendered.
             * @param {?} levelsOpen
             * @return {?}
             */ function (levelsOpen) {
                if (!Number.isInteger(levelsOpen)) {
                    throw new Error('[levelsOpen] needs to be an integer.');
                }
                this._levelsOpen = levelsOpen;
                this._open = levelsOpen > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "open", {
            get: /**
             * @return {?}
             */ function () {
                return this._open;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
                return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
            },
            /**
             * key?: string
             * Tag to be displayed next to formatted object.
             */
            set: /**
             * key?: string
             * Tag to be displayed next to formatted object.
             * @param {?} key
             * @return {?}
             */ function (key) {
                this._key = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            /**
             * data: any
             * JS object to be formatted.
             */
            set: /**
             * data: any
             * JS object to be formatted.
             * @param {?} data
             * @return {?}
             */ function (data) {
                this._data = data;
                this.parseChildren();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
            get: /**
             * @return {?}
             */ function () {
                return this._children;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
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
         * Refreshes json-formatter and rerenders [data]
         */
        /**
         * Refreshes json-formatter and rerenders [data]
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.refresh = /**
         * Refreshes json-formatter and rerenders [data]
         * @return {?}
         */
            function () {
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Toggles collapse/expanded state of component.
         */
        /**
         * Toggles collapse/expanded state of component.
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.toggle = /**
         * Toggles collapse/expanded state of component.
         * @return {?}
         */
            function () {
                this._open = !this._open;
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.isObject = /**
         * @return {?}
         */
            function () {
                return this.getType(this._data) === 'object';
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.isArray = /**
         * @return {?}
         */
            function () {
                return Array.isArray(this._data);
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.hasChildren = /**
         * @return {?}
         */
            function () {
                return this._children && this._children.length > 0;
            };
        /**
         * Gets parsed value depending on value type.
         */
        /**
         * Gets parsed value depending on value type.
         * @param {?} value
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getValue = /**
         * Gets parsed value depending on value type.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var type = this.getType(value);
                if (type === 'undefined' || (type === 'null')) {
                    return type;
                }
                else if (type === 'date') {
                    value = new Date(value).toString();
                }
                else if (type === 'string') {
                    value = '"' + value + '"';
                }
                else if (type === 'function') {
                    // Remove content of the function
                    return value.toString()
                        .replace(/[\r\n]/g, '')
                        .replace(/\{.*\}/, '') + '{…}';
                }
                else if (Array.isArray(value)) {
                    return this.getObjectName() + ' [' + value.length + ']';
                }
                return value;
            };
        /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         */
        /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         * @param {?} object
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getType = /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         * @param {?} object
         * @return {?}
         */
            function (object) {
                if (typeof object === 'object') {
                    if (!object) {
                        return 'null';
                    }
                    if (Array.isArray(object)) {
                        return 'object';
                    }
                    /** @type {?} */
                    var date = new Date(object);
                    if (Object.prototype.toString.call(date) === '[object Date]') {
                        if (!Number.isNaN(date.getTime())) {
                            return 'date';
                        }
                    }
                }
                return typeof object;
            };
        /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         */
        /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getObjectName = /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         * @return {?}
         */
            function () {
                /** @type {?} */
                var object = this._data;
                if (this.isObject() && !object.constructor) {
                    return 'Object';
                }
                /** @type {?} */
                var funcNameRegex = /function (.{1,})\(/;
                /** @type {?} */
                var results = (funcNameRegex).exec((object).constructor.toString());
                if (results && results.length > 1) {
                    return results[1];
                }
                else {
                    return '';
                }
            };
        /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         */
        /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getPreview = /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var previewData;
                /** @type {?} */
                var startChar = '{ ';
                /** @type {?} */
                var endChar = ' }';
                if (this.isArray()) {
                    /** @type {?} */
                    var previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
                    previewData = previewArray.map(function (obj) {
                        return _this.getValue(obj);
                    });
                    startChar = '[';
                    endChar = ']';
                }
                else {
                    /** @type {?} */
                    var previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
                    previewData = previewKeys.map(function (key) {
                        return key + ': ' + _this.getValue(_this._data[key]);
                    });
                }
                /** @type {?} */
                var previewString = previewData.join(', ');
                /** @type {?} */
                var ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
                    previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
                return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
                    ellipsis + endChar;
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.parseChildren = /**
         * @return {?}
         */
            function () {
                if (this.isObject()) {
                    this._children = [];
                    for (var key in this._data) {
                        this._children.push(key);
                    }
                }
            };
        /**
         * Max length for property names. Any names bigger than this get trunctated.
         */
        TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
        /**
         * Max length for preview string. Any names bigger than this get trunctated.
         */
        TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
        /**
         * Max tooltip preview elements.
         */
        TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
        TdJsonFormatterComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'td-json-formatter',
                        template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                        animations: [
                            common$1.tdCollapseAnimation,
                        ],
                        styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdJsonFormatterComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: bidi.Dir, decorators: [{ type: core.Optional }] }
            ];
        };
        TdJsonFormatterComponent.propDecorators = {
            levelsOpen: [{ type: core.Input, args: ['levelsOpen',] }],
            key: [{ type: core.Input, args: ['key',] }],
            data: [{ type: core.Input, args: ['data',] }]
        };
        return TdJsonFormatterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentJsonFormatterModule = /** @class */ (function () {
        function CovalentJsonFormatterModule() {
        }
        CovalentJsonFormatterModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            tooltip.MatTooltipModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TdJsonFormatterComponent,
                        ],
                        exports: [
                            TdJsonFormatterComponent,
                        ],
                    },] }
        ];
        return CovalentJsonFormatterModule;
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

    exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule;
    exports.TdJsonFormatterComponent = TdJsonFormatterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-json-formatter.umd.js.map