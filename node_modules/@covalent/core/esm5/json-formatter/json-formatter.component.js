/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { tdCollapseAnimation } from '@covalent/core/common';
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
         */
        function () {
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
         */
        function (levelsOpen) {
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
         */
        function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function (data) {
            this._data = data;
            this.parseChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'td-json-formatter',
                    template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                    animations: [
                        tdCollapseAnimation,
                    ],
                    styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdJsonFormatterComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Dir, decorators: [{ type: Optional }] }
    ]; };
    TdJsonFormatterComponent.propDecorators = {
        levelsOpen: [{ type: Input, args: ['levelsOpen',] }],
        key: [{ type: Input, args: ['key',] }],
        data: [{ type: Input, args: ['data',] }]
    };
    return TdJsonFormatterComponent;
}());
export { TdJsonFormatterComponent };
if (false) {
    /**
     * Max length for property names. Any names bigger than this get trunctated.
     * @type {?}
     */
    TdJsonFormatterComponent.KEY_MAX_LENGTH;
    /**
     * Max length for preview string. Any names bigger than this get trunctated.
     * @type {?}
     */
    TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH;
    /**
     * Max tooltip preview elements.
     * @type {?}
     */
    TdJsonFormatterComponent.PREVIEW_LIMIT;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._key;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._data;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._children;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._open;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._levelsOpen;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdJsonFormatterComponent.prototype._dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUQ7SUF5RkUsa0NBQW9CLGtCQUFxQyxFQUN6QixJQUFTO1FBRHJCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBSztRQTdEakMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQTZEaEMsQ0FBQztJQXZERCxzQkFDSSxnREFBVTs7OztRQU9kO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7UUFkRDs7O1dBR0c7Ozs7Ozs7UUFDSCxVQUNlLFVBQWtCO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSwwQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBTUQsc0JBQ0kseUNBQUc7Ozs7UUFH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bXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLWpzb24tZm9ybWF0dGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0ZENvbGxhcHNlQW5pbWF0aW9uLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcm9wZXJ0eSBuYW1lcy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBLRVlfTUFYX0xFTkdUSDogbnVtYmVyID0gMzA7XG5cbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByZXZpZXcgc3RyaW5nLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEg6IG51bWJlciA9IDgwO1xuXG4gIC8qKlxuICAgKiBNYXggdG9vbHRpcCBwcmV2aWV3IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19MSU1JVDogbnVtYmVyID0gNTtcblxuICBwcml2YXRlIF9rZXk6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGF0YTogYW55O1xuICBwcml2YXRlIF9jaGlsZHJlbjogc3RyaW5nW107XG4gIHByaXZhdGUgX29wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGV2ZWxzT3BlbjogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogbGV2ZWxzT3Blbj86IG51bWJlclxuICAgKiBMZXZlbHMgb3BlbmVkIGJ5IGRlZmF1bHQgd2hlbiBKUyBvYmplY3QgaXMgZm9ybWF0dGVkIGFuZCByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgnbGV2ZWxzT3BlbicpXG4gIHNldCBsZXZlbHNPcGVuKGxldmVsc09wZW46IG51bWJlcikge1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZXZlbHNPcGVuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbGV2ZWxzT3Blbl0gbmVlZHMgdG8gYmUgYW4gaW50ZWdlci4nKTtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWxzT3BlbiA9IGxldmVsc09wZW47XG4gICAgdGhpcy5fb3BlbiA9IGxldmVsc09wZW4gPiAwO1xuICB9XG4gIGdldCBsZXZlbHNPcGVuKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsc09wZW47XG4gIH1cblxuICBnZXQgb3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBrZXk/OiBzdHJpbmdcbiAgICogVGFnIHRvIGJlIGRpc3BsYXllZCBuZXh0IHRvIGZvcm1hdHRlZCBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoJ2tleScpXG4gIHNldCBrZXkoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9rZXkgPSBrZXk7XG4gIH1cbiAgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIGxldCBlbGlwc2lzOiBzdHJpbmcgPSB0aGlzLl9rZXkgJiYgdGhpcy5fa2V5Lmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCA/ICfigKYnIDogJyc7XG4gICAgcmV0dXJuIHRoaXMuX2tleSA/IHRoaXMuX2tleS5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIKSArIGVsaXBzaXMgOiB0aGlzLl9rZXk7XG4gIH1cblxuICAvKipcbiAgICogZGF0YTogYW55XG4gICAqIEpTIG9iamVjdCB0byBiZSBmb3JtYXR0ZWQuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhcnNlQ2hpbGRyZW4oKTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gIH1cblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyKSB7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaGVzIGpzb24tZm9ybWF0dGVyIGFuZCByZXJlbmRlcnMgW2RhdGFdXG4gICAqL1xuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgY29sbGFwc2UvZXhwYW5kZWQgc3RhdGUgb2YgY29tcG9uZW50LlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuX29wZW4gPSAhdGhpcy5fb3BlbjtcbiAgfVxuXG4gIGlzT2JqZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdldFR5cGUodGhpcy5fZGF0YSkgPT09ICdvYmplY3QnO1xuICB9XG5cbiAgaXNBcnJheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhKTtcbiAgfVxuXG4gIGhhc0NoaWxkcmVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbiAmJiB0aGlzLl9jaGlsZHJlbi5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgcGFyc2VkIHZhbHVlIGRlcGVuZGluZyBvbiB2YWx1ZSB0eXBlLlxuICAgKi9cbiAgZ2V0VmFsdWUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgbGV0IHR5cGU6IHN0cmluZyA9IHRoaXMuZ2V0VHlwZSh2YWx1ZSk7XG4gICAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8ICh0eXBlID09PSAnbnVsbCcpKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9ICdcIicgKyB2YWx1ZSArICdcIic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBSZW1vdmUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5dL2csICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHsuKlxcfS8sICcnKSArICd74oCmfSc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0TmFtZSgpICsgJyBbJyArIHZhbHVlLmxlbmd0aCArICddJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdHlwZSBvZiBvYmplY3QuXG4gICAqIHJldHVybnMgJ251bGwnIGlmIG9iamVjdCBpcyBudWxsIGFuZCAnZGF0ZScgaWYgdmFsdWUgaXMgb2JqZWN0IGFuZCBjYW4gYmUgcGFyc2VkIHRvIGEgZGF0ZS5cbiAgICovXG4gIGdldFR5cGUob2JqZWN0OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgICAgfVxuICAgICAgbGV0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShvYmplY3QpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHN0cmluZyByZXByZXNlbnRhdGlvbiBkZXBlbmRpbmcgaWYgaXRzIGFuIG9iamVjdCBvciBmdW5jdGlvbi5cbiAgICogc2VlOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzI0MjlcbiAgICovXG4gIGdldE9iamVjdE5hbWUoKTogc3RyaW5nIHtcbiAgICBsZXQgb2JqZWN0OiBhbnkgPSB0aGlzLl9kYXRhO1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkgJiYgIW9iamVjdC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgfVxuICAgIGxldCBmdW5jTmFtZVJlZ2V4OiBSZWdFeHAgPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gICAgbGV0IHJlc3VsdHM6IFJlZ0V4cEV4ZWNBcnJheSA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKChvYmplY3QpLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdHNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBwcmV2aWV3IG9mIG5vZGVzIGNoaWxkcmVuIHRvIHJlbmRlciBpbiB0b29sdGlwIGRlcGVuZGluZyBpZiBpdHMgYW4gYXJyYXkgb3IgYW4gb2JqZWN0LlxuICAgKi9cbiAgZ2V0UHJldmlldygpOiBzdHJpbmcge1xuICAgIGxldCBwcmV2aWV3RGF0YTogc3RyaW5nW107XG4gICAgbGV0IHN0YXJ0Q2hhcjogc3RyaW5nID0gJ3sgJztcbiAgICBsZXQgZW5kQ2hhcjogc3RyaW5nID0gJyB9JztcbiAgICBpZiAodGhpcy5pc0FycmF5KCkpIHtcbiAgICAgIGxldCBwcmV2aWV3QXJyYXk6IGFueVtdID0gdGhpcy5fZGF0YS5zbGljZSgwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCk7XG4gICAgICBwcmV2aWV3RGF0YSA9IHByZXZpZXdBcnJheS5tYXAoKG9iajogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHN0YXJ0Q2hhciA9ICdbJztcbiAgICAgIGVuZENoYXIgPSAnXSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwcmV2aWV3S2V5czogc3RyaW5nW10gPSB0aGlzLl9jaGlsZHJlbi5zbGljZSgwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCk7XG4gICAgICBwcmV2aWV3RGF0YSA9IHByZXZpZXdLZXlzLm1hcCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGtleSArICc6ICcgKyB0aGlzLmdldFZhbHVlKHRoaXMuX2RhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHByZXZpZXdTdHJpbmc6IHN0cmluZyA9ICBwcmV2aWV3RGF0YS5qb2luKCcsICcpO1xuICAgIGxldCBlbGxpcHNpczogc3RyaW5nID0gcHJldmlld0RhdGEubGVuZ3RoID49IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3U3RyaW5nLmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIID8gJ+KApicgOiAnJztcbiAgICByZXR1cm4gc3RhcnRDaGFyICsgcHJldmlld1N0cmluZy5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEgpICtcbiAgICAgICAgICAgZWxsaXBzaXMgKyBlbmRDaGFyO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUNoaWxkcmVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkpIHtcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fZGF0YSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==