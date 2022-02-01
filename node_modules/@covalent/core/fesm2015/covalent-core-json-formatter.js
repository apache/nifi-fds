import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { Dir } from '@angular/cdk/bidi';
import { tdCollapseAnimation } from '@covalent/core/common';

/**
 * @fileoverview added by tsickle
 * Generated from: json-formatter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdJsonFormatterComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dir
     */
    constructor(_changeDetectorRef, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._open = false;
        this._levelsOpen = 0;
    }
    /**
     * levelsOpen?: number
     * Levels opened by default when JS object is formatted and rendered.
     * @param {?} levelsOpen
     * @return {?}
     */
    set levelsOpen(levelsOpen) {
        if (!Number.isInteger(levelsOpen)) {
            throw new Error('[levelsOpen] needs to be an integer.');
        }
        this._levelsOpen = levelsOpen;
        this._open = levelsOpen > 0;
    }
    /**
     * @return {?}
     */
    get levelsOpen() {
        return this._levelsOpen;
    }
    /**
     * @return {?}
     */
    get open() {
        return this._open;
    }
    /**
     * key?: string
     * Tag to be displayed next to formatted object.
     * @param {?} key
     * @return {?}
     */
    set key(key) {
        this._key = key;
    }
    /**
     * @return {?}
     */
    get key() {
        /** @type {?} */
        const elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
        return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
    }
    /**
     * data: any
     * JS object to be formatted.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.parseChildren();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children;
    }
    /**
     * @return {?}
     */
    get isRTL() {
        if (this._dir) {
            return this._dir.dir === 'rtl';
        }
        return false;
    }
    /**
     * Refreshes json-formatter and rerenders [data]
     * @return {?}
     */
    refresh() {
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggles collapse/expanded state of component.
     * @return {?}
     */
    toggle() {
        this._open = !this._open;
    }
    /**
     * @return {?}
     */
    isObject() {
        return this.getType(this._data) === 'object';
    }
    /**
     * @return {?}
     */
    isArray() {
        return Array.isArray(this._data);
    }
    /**
     * @return {?}
     */
    hasChildren() {
        return this._children && this._children.length > 0;
    }
    /**
     * Gets parsed value depending on value type.
     * @param {?} value
     * @return {?}
     */
    getValue(value) {
        /** @type {?} */
        const type = this.getType(value);
        if (type === 'undefined' || type === 'null') {
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
            return (value
                .toString()
                .replace(/[\r\n]/g, '')
                .replace(/\{.*\}/, '') + '{…}');
        }
        else if (Array.isArray(value)) {
            return this.getObjectName() + ' [' + value.length + ']';
        }
        return value;
    }
    /**
     * Gets type of object.
     * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
     * @param {?} object
     * @return {?}
     */
    getType(object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            if (Array.isArray(object)) {
                return 'object';
            }
            /** @type {?} */
            const date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())) {
                return 'date';
            }
        }
        return typeof object;
    }
    /**
     * Generates string representation depending if its an object or function.
     * see: http://stackoverflow.com/a/332429
     * @return {?}
     */
    getObjectName() {
        /** @type {?} */
        const object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        /** @type {?} */
        const funcNameRegex = /function (.{1,})\(/;
        /** @type {?} */
        const results = funcNameRegex.exec(object.constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
        else {
            return '';
        }
    }
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     * @return {?}
     */
    getPreview() {
        /** @type {?} */
        let previewData;
        /** @type {?} */
        let startChar = '{ ';
        /** @type {?} */
        let endChar = ' }';
        if (this.isArray()) {
            /** @type {?} */
            const previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map((/**
             * @param {?} obj
             * @return {?}
             */
            (obj) => {
                return this.getValue(obj);
            }));
            startChar = '[';
            endChar = ']';
        }
        else {
            /** @type {?} */
            const previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                return key + ': ' + this.getValue(this._data[key]);
            }));
        }
        /** @type {?} */
        const previewString = previewData.join(', ');
        /** @type {?} */
        const ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH
            ? '…'
            : '';
        return (startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) + ellipsis + endChar);
    }
    /**
     * @private
     * @return {?}
     */
    parseChildren() {
        if (this.isObject()) {
            this._children = Object.keys(this._data);
        }
    }
}
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
                template: "<div class=\"td-json-formatter-wrapper\">\n  <a\n    class=\"td-key\"\n    [class.td-key-node]=\"hasChildren()\"\n    [class.td-key-leaf]=\"!hasChildren()\"\n    [tabIndex]=\"isObject() ? 0 : -1\"\n    (keydown.enter)=\"toggle()\"\n    (click)=\"toggle()\"\n  >\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">\n      {{ open ? 'keyboard_arrow_down' : isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right' }}\n    </mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{ key }}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{ getObjectName() }}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{ data.length }}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{ getValue(data) }}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{display:block}.td-json-formatter-wrapper{padding-bottom:2px;padding-top:2px}.td-json-formatter-wrapper .td-key{-ms-flex-align:start;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:flex-start;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:0;padding-right:24px}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:0;padding-right:48px}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-left:0;padding-right:5px}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdJsonFormatterComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Dir, decorators: [{ type: Optional }] }
];
TdJsonFormatterComponent.propDecorators = {
    levelsOpen: [{ type: Input, args: ['levelsOpen',] }],
    key: [{ type: Input, args: ['key',] }],
    data: [{ type: Input, args: ['data',] }]
};
if (false) {
    /**
     * Max length for property names. Any names bigger than this get trunctated.
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.KEY_MAX_LENGTH;
    /**
     * Max length for preview string. Any names bigger than this get trunctated.
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH;
    /**
     * Max tooltip preview elements.
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.PREVIEW_LIMIT;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._key;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._children;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._open;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._levelsOpen;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdJsonFormatterComponent.prototype._dir;
}

/**
 * @fileoverview added by tsickle
 * Generated from: json-formatter.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentJsonFormatterModule {
}
CovalentJsonFormatterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatTooltipModule, MatIconModule],
                declarations: [TdJsonFormatterComponent],
                exports: [TdJsonFormatterComponent],
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
 * Generated from: covalent-core-json-formatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentJsonFormatterModule, TdJsonFormatterComponent };
//# sourceMappingURL=covalent-core-json-formatter.js.map
