/**
 * @fileoverview added by tsickle
 * Generated from: json-formatter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdJsonFormatterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2pzb24tZm9ybWF0dGVyLyIsInNvdXJjZXMiOlsianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVM1RCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQStFbkMsWUFBb0Isa0JBQXFDLEVBQXNCLElBQVM7UUFBcEUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFzQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBNURoRixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBMkQyRCxDQUFDOzs7Ozs7O0lBckQ1RixJQUNJLFVBQVUsQ0FBQyxVQUFrQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLEdB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SUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7Ozs7O0FBek1jLHVDQUFjLEdBQVcsRUFBRSxDQUFDOzs7O0FBSzVCLGtEQUF5QixHQUFXLEVBQUUsQ0FBQzs7OztBQUt2QyxzQ0FBYSxHQUFXLENBQUMsQ0FBQzs7WUFyQjFDLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0Isd3RDQUE4QztnQkFDOUMsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7O2FBQ2xDOzs7O1lBVm1ELGlCQUFpQjtZQUM1RCxHQUFHLHVCQXlGa0QsUUFBUTs7O3lCQXJEbkUsS0FBSyxTQUFDLFlBQVk7a0JBb0JsQixLQUFLLFNBQUMsS0FBSzttQkFhWCxLQUFLLFNBQUMsTUFBTTs7Ozs7Ozs7SUF2RGIsd0NBQTJDOzs7Ozs7SUFLM0MsbURBQXNEOzs7Ozs7SUFLdEQsdUNBQXlDOzs7OztJQUV6Qyx3Q0FBcUI7Ozs7O0lBQ3JCLHlDQUFtQjs7Ozs7SUFDbkIsNkNBQTRCOzs7OztJQUM1Qix5Q0FBK0I7Ozs7O0lBQy9CLCtDQUFnQzs7Ozs7SUEyRHBCLHNEQUE2Qzs7Ozs7SUFBRSx3Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLWpzb24tZm9ybWF0dGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vanNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3RkQ29sbGFwc2VBbmltYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQge1xuICAvKipcbiAgICogTWF4IGxlbmd0aCBmb3IgcHJvcGVydHkgbmFtZXMuIEFueSBuYW1lcyBiaWdnZXIgdGhhbiB0aGlzIGdldCB0cnVuY3RhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgS0VZX01BWF9MRU5HVEg6IG51bWJlciA9IDMwO1xuXG4gIC8qKlxuICAgKiBNYXggbGVuZ3RoIGZvciBwcmV2aWV3IHN0cmluZy4gQW55IG5hbWVzIGJpZ2dlciB0aGFuIHRoaXMgZ2V0IHRydW5jdGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBQUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIOiBudW1iZXIgPSA4MDtcblxuICAvKipcbiAgICogTWF4IHRvb2x0aXAgcHJldmlldyBlbGVtZW50cy5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIFBSRVZJRVdfTElNSVQ6IG51bWJlciA9IDU7XG5cbiAgcHJpdmF0ZSBfa2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2RhdGE6IGFueTtcbiAgcHJpdmF0ZSBfY2hpbGRyZW46IHN0cmluZ1tdO1xuICBwcml2YXRlIF9vcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2xldmVsc09wZW46IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIGxldmVsc09wZW4/OiBudW1iZXJcbiAgICogTGV2ZWxzIG9wZW5lZCBieSBkZWZhdWx0IHdoZW4gSlMgb2JqZWN0IGlzIGZvcm1hdHRlZCBhbmQgcmVuZGVyZWQuXG4gICAqL1xuICBASW5wdXQoJ2xldmVsc09wZW4nKVxuICBzZXQgbGV2ZWxzT3BlbihsZXZlbHNPcGVuOiBudW1iZXIpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobGV2ZWxzT3BlbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW2xldmVsc09wZW5dIG5lZWRzIHRvIGJlIGFuIGludGVnZXIuJyk7XG4gICAgfVxuICAgIHRoaXMuX2xldmVsc09wZW4gPSBsZXZlbHNPcGVuO1xuICAgIHRoaXMuX29wZW4gPSBsZXZlbHNPcGVuID4gMDtcbiAgfVxuICBnZXQgbGV2ZWxzT3BlbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbHNPcGVuO1xuICB9XG5cbiAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICAvKipcbiAgICoga2V5Pzogc3RyaW5nXG4gICAqIFRhZyB0byBiZSBkaXNwbGF5ZWQgbmV4dCB0byBmb3JtYXR0ZWQgb2JqZWN0LlxuICAgKi9cbiAgQElucHV0KCdrZXknKVxuICBzZXQga2V5KGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5fa2V5ID0ga2V5O1xuICB9XG4gIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbGlwc2lzOiBzdHJpbmcgPSB0aGlzLl9rZXkgJiYgdGhpcy5fa2V5Lmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5LRVlfTUFYX0xFTkdUSCA/ICfigKYnIDogJyc7XG4gICAgcmV0dXJuIHRoaXMuX2tleSA/IHRoaXMuX2tleS5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIKSArIGVsaXBzaXMgOiB0aGlzLl9rZXk7XG4gIH1cblxuICAvKipcbiAgICogZGF0YTogYW55XG4gICAqIEpTIG9iamVjdCB0byBiZSBmb3JtYXR0ZWQuXG4gICAqL1xuICBASW5wdXQoJ2RhdGEnKVxuICBzZXQgZGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnBhcnNlQ2hpbGRyZW4oKTtcbiAgfVxuICBnZXQgZGF0YSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IGNoaWxkcmVuKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XG4gIH1cblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyKSB7fVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMganNvbi1mb3JtYXR0ZXIgYW5kIHJlcmVuZGVycyBbZGF0YV1cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBjb2xsYXBzZS9leHBhbmRlZCBzdGF0ZSBvZiBjb21wb25lbnQuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG5cbiAgaXNPYmplY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSh0aGlzLl9kYXRhKSA9PT0gJ29iamVjdCc7XG4gIH1cblxuICBpc0FycmF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuICYmIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBwYXJzZWQgdmFsdWUgZGVwZW5kaW5nIG9uIHZhbHVlIHR5cGUuXG4gICAqL1xuICBnZXRWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCB0eXBlOiBzdHJpbmcgPSB0aGlzLmdldFR5cGUodmFsdWUpO1xuICAgIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnbnVsbCcpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKS50b1N0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gJ1wiJyArIHZhbHVlICsgJ1wiJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJlbW92ZSBjb250ZW50IG9mIHRoZSBmdW5jdGlvblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgdmFsdWVcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgIC5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnJylcbiAgICAgICAgICAucmVwbGFjZSgvXFx7LipcXH0vLCAnJykgKyAne+KApn0nXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdE5hbWUoKSArICcgWycgKyB2YWx1ZS5sZW5ndGggKyAnXSc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHR5cGUgb2Ygb2JqZWN0LlxuICAgKiByZXR1cm5zICdudWxsJyBpZiBvYmplY3QgaXMgbnVsbCBhbmQgJ2RhdGUnIGlmIHZhbHVlIGlzIG9iamVjdCBhbmQgY2FuIGJlIHBhcnNlZCB0byBhIGRhdGUuXG4gICAqL1xuICBnZXRUeXBlKG9iamVjdDogYW55KTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICghb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShvYmplY3QpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nICYmICFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBzdHJpbmcgcmVwcmVzZW50YXRpb24gZGVwZW5kaW5nIGlmIGl0cyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24uXG4gICAqIHNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzMyNDI5XG4gICAqL1xuICBnZXRPYmplY3ROYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgb2JqZWN0OiBhbnkgPSB0aGlzLl9kYXRhO1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KCkgJiYgIW9iamVjdC5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgIH1cbiAgICBjb25zdCBmdW5jTmFtZVJlZ2V4OiBSZWdFeHAgPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gICAgY29uc3QgcmVzdWx0czogUmVnRXhwRXhlY0FycmF5ID0gZnVuY05hbWVSZWdleC5leGVjKG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiByZXN1bHRzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgcHJldmlldyBvZiBub2RlcyBjaGlsZHJlbiB0byByZW5kZXIgaW4gdG9vbHRpcCBkZXBlbmRpbmcgaWYgaXRzIGFuIGFycmF5IG9yIGFuIG9iamVjdC5cbiAgICovXG4gIGdldFByZXZpZXcoKTogc3RyaW5nIHtcbiAgICBsZXQgcHJldmlld0RhdGE6IHN0cmluZ1tdO1xuICAgIGxldCBzdGFydENoYXI6IHN0cmluZyA9ICd7ICc7XG4gICAgbGV0IGVuZENoYXI6IHN0cmluZyA9ICcgfSc7XG4gICAgaWYgKHRoaXMuaXNBcnJheSgpKSB7XG4gICAgICBjb25zdCBwcmV2aWV3QXJyYXk6IGFueVtdID0gdGhpcy5fZGF0YS5zbGljZSgwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19MSU1JVCk7XG4gICAgICBwcmV2aWV3RGF0YSA9IHByZXZpZXdBcnJheS5tYXAoKG9iajogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKG9iaik7XG4gICAgICB9KTtcbiAgICAgIHN0YXJ0Q2hhciA9ICdbJztcbiAgICAgIGVuZENoYXIgPSAnXSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZpZXdLZXlzOiBzdHJpbmdbXSA9IHRoaXMuX2NoaWxkcmVuLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0tleXMubWFwKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICsgJzogJyArIHRoaXMuZ2V0VmFsdWUodGhpcy5fZGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBwcmV2aWV3U3RyaW5nOiBzdHJpbmcgPSBwcmV2aWV3RGF0YS5qb2luKCcsICcpO1xuICAgIGNvbnN0IGVsbGlwc2lzOiBzdHJpbmcgPVxuICAgICAgcHJldmlld0RhdGEubGVuZ3RoID49IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUIHx8XG4gICAgICBwcmV2aWV3U3RyaW5nLmxlbmd0aCA+IFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX1NUUklOR19NQVhfTEVOR1RIXG4gICAgICAgID8gJ+KApidcbiAgICAgICAgOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgc3RhcnRDaGFyICsgcHJldmlld1N0cmluZy5zdWJzdHJpbmcoMCwgVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEgpICsgZWxsaXBzaXMgKyBlbmRDaGFyXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VDaGlsZHJlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09iamVjdCgpKSB7XG4gICAgICB0aGlzLl9jaGlsZHJlbiA9IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpO1xuICAgIH1cbiAgfVxufVxuIl19