/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        let elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
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
        let type = this.getType(value);
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
            let date = new Date(object);
            if (Object.prototype.toString.call(date) === '[object Date]') {
                if (!Number.isNaN(date.getTime())) {
                    return 'date';
                }
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
        let object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        /** @type {?} */
        let funcNameRegex = /function (.{1,})\(/;
        /** @type {?} */
        let results = (funcNameRegex).exec((object).constructor.toString());
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
            let previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map((obj) => {
                return this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            /** @type {?} */
            let previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map((key) => {
                return key + ': ' + this.getValue(this._data[key]);
            });
        }
        /** @type {?} */
        let previewString = previewData.join(', ');
        /** @type {?} */
        let ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
        return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
            ellipsis + endChar;
    }
    /**
     * @return {?}
     */
    parseChildren() {
        if (this.isObject()) {
            this._children = [];
            for (let key in this._data) {
                this._children.push(key);
            }
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
                template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                animations: [
                    tdCollapseAnimation,
                ],
                styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1mb3JtYXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvanNvbi1mb3JtYXR0ZXIvIiwic291cmNlcyI6WyJqc29uLWZvcm1hdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFXNUQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFnRm5DLFlBQW9CLGtCQUFxQyxFQUN6QixJQUFTO1FBRHJCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBSztRQTdEakMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQTZEaEMsQ0FBQzs7Ozs7OztJQXZERCxJQUNJLFVBQVUsQ0FBQyxVQUFrQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLEdBQUcsQ0FBQyxHQUFXO1FB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RSxDQUFDO1lBQ3BCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7Ozs7O0FBek1jLHVDQUFjLEdBQVcsRUFBRSxDQUFDOzs7O0FBSzVCLGtEQUF5QixHQUFXLEVBQUUsQ0FBQzs7OztBQUt2QyxzQ0FBYSxHQUFXLENBQUMsQ0FBQzs7WUF4QjFDLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0IsMHJDQUE4QztnQkFDOUMsVUFBVSxFQUFFO29CQUNWLG1CQUFtQjtpQkFDcEI7O2FBQ0Y7Ozs7WUFabUQsaUJBQWlCO1lBQzVELEdBQUcsdUJBNkZHLFFBQVE7Ozt5QkF0RHBCLEtBQUssU0FBQyxZQUFZO2tCQW9CbEIsS0FBSyxTQUFDLEtBQUs7bUJBYVgsS0FBSyxTQUFDLE1BQU07Ozs7Ozs7SUF2RGIsd0NBQTJDOzs7OztJQUszQyxtREFBc0Q7Ozs7O0lBS3RELHVDQUF5Qzs7SUFFekMsd0NBQXFCOztJQUNyQix5Q0FBbUI7O0lBQ25CLDZDQUE0Qjs7SUFDNUIseUNBQStCOztJQUMvQiwrQ0FBZ0M7O0lBMkRwQixzREFBNkM7O0lBQzdDLHdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHNlbGVjdG9yOiAndGQtanNvbi1mb3JtYXR0ZXInLFxuICBzdHlsZVVybHM6IFsnLi9qc29uLWZvcm1hdHRlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2pzb24tZm9ybWF0dGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRkQ29sbGFwc2VBbmltYXRpb24sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIE1heCBsZW5ndGggZm9yIHByb3BlcnR5IG5hbWVzLiBBbnkgbmFtZXMgYmlnZ2VyIHRoYW4gdGhpcyBnZXQgdHJ1bmN0YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIEtFWV9NQVhfTEVOR1RIOiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogTWF4IGxlbmd0aCBmb3IgcHJldmlldyBzdHJpbmcuIEFueSBuYW1lcyBiaWdnZXIgdGhhbiB0aGlzIGdldCB0cnVuY3RhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSDogbnVtYmVyID0gODA7XG5cbiAgLyoqXG4gICAqIE1heCB0b29sdGlwIHByZXZpZXcgZWxlbWVudHMuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBQUkVWSUVXX0xJTUlUOiBudW1iZXIgPSA1O1xuXG4gIHByaXZhdGUgX2tleTogc3RyaW5nO1xuICBwcml2YXRlIF9kYXRhOiBhbnk7XG4gIHByaXZhdGUgX2NoaWxkcmVuOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9sZXZlbHNPcGVuOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBsZXZlbHNPcGVuPzogbnVtYmVyXG4gICAqIExldmVscyBvcGVuZWQgYnkgZGVmYXVsdCB3aGVuIEpTIG9iamVjdCBpcyBmb3JtYXR0ZWQgYW5kIHJlbmRlcmVkLlxuICAgKi9cbiAgQElucHV0KCdsZXZlbHNPcGVuJylcbiAgc2V0IGxldmVsc09wZW4obGV2ZWxzT3BlbjogbnVtYmVyKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGxldmVsc09wZW4pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tsZXZlbHNPcGVuXSBuZWVkcyB0byBiZSBhbiBpbnRlZ2VyLicpO1xuICAgIH1cbiAgICB0aGlzLl9sZXZlbHNPcGVuID0gbGV2ZWxzT3BlbjtcbiAgICB0aGlzLl9vcGVuID0gbGV2ZWxzT3BlbiA+IDA7XG4gIH1cbiAgZ2V0IGxldmVsc09wZW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWxzT3BlbjtcbiAgfVxuXG4gIGdldCBvcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIGtleT86IHN0cmluZ1xuICAgKiBUYWcgdG8gYmUgZGlzcGxheWVkIG5leHQgdG8gZm9ybWF0dGVkIG9iamVjdC5cbiAgICovXG4gIEBJbnB1dCgna2V5JylcbiAgc2V0IGtleShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2tleSA9IGtleTtcbiAgfVxuICBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgbGV0IGVsaXBzaXM6IHN0cmluZyA9IHRoaXMuX2tleSAmJiB0aGlzLl9rZXkubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LktFWV9NQVhfTEVOR1RIID8gJ+KApicgOiAnJztcbiAgICByZXR1cm4gdGhpcy5fa2V5ID8gdGhpcy5fa2V5LnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuS0VZX01BWF9MRU5HVEgpICsgZWxpcHNpcyA6IHRoaXMuX2tleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkYXRhOiBhbnlcbiAgICogSlMgb2JqZWN0IHRvIGJlIGZvcm1hdHRlZC5cbiAgICovXG4gIEBJbnB1dCgnZGF0YScpXG4gIHNldCBkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMucGFyc2VDaGlsZHJlbigpO1xuICB9XG4gIGdldCBkYXRhKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBnZXQgY2hpbGRyZW4oKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcbiAgfVxuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXIpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoZXMganNvbi1mb3JtYXR0ZXIgYW5kIHJlcmVuZGVycyBbZGF0YV1cbiAgICovXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBjb2xsYXBzZS9leHBhbmRlZCBzdGF0ZSBvZiBjb21wb25lbnQuXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5fb3BlbiA9ICF0aGlzLl9vcGVuO1xuICB9XG5cbiAgaXNPYmplY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHlwZSh0aGlzLl9kYXRhKSA9PT0gJ29iamVjdCc7XG4gIH1cblxuICBpc0FycmF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuICYmIHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBwYXJzZWQgdmFsdWUgZGVwZW5kaW5nIG9uIHZhbHVlIHR5cGUuXG4gICAqL1xuICBnZXRWYWx1ZSh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZTogc3RyaW5nID0gdGhpcy5nZXRUeXBlKHZhbHVlKTtcbiAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgKHR5cGUgPT09ICdudWxsJykpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKS50b1N0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gJ1wiJyArIHZhbHVlICsgJ1wiJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFJlbW92ZSBjb250ZW50IG9mIHRoZSBmdW5jdGlvblxuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcey4qXFx9LywgJycpICsgJ3vigKZ9JztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3ROYW1lKCkgKyAnIFsnICsgdmFsdWUubGVuZ3RoICsgJ10nO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0eXBlIG9mIG9iamVjdC5cbiAgICogcmV0dXJucyAnbnVsbCcgaWYgb2JqZWN0IGlzIG51bGwgYW5kICdkYXRlJyBpZiB2YWx1ZSBpcyBvYmplY3QgYW5kIGNhbiBiZSBwYXJzZWQgdG8gYSBkYXRlLlxuICAgKi9cbiAgZ2V0VHlwZShvYmplY3Q6IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgICB9XG4gICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKG9iamVjdCk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGUpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGRlcGVuZGluZyBpZiBpdHMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLlxuICAgKiBzZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzMjQyOVxuICAgKi9cbiAgZ2V0T2JqZWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIGxldCBvYmplY3Q6IGFueSA9IHRoaXMuX2RhdGE7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICB9XG4gICAgbGV0IGZ1bmNOYW1lUmVnZXg6IFJlZ0V4cCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgICBsZXQgcmVzdWx0czogUmVnRXhwRXhlY0FycmF5ID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKG9iamVjdCkuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcmVzdWx0c1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHByZXZpZXcgb2Ygbm9kZXMgY2hpbGRyZW4gdG8gcmVuZGVyIGluIHRvb2x0aXAgZGVwZW5kaW5nIGlmIGl0cyBhbiBhcnJheSBvciBhbiBvYmplY3QuXG4gICAqL1xuICBnZXRQcmV2aWV3KCk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZpZXdEYXRhOiBzdHJpbmdbXTtcbiAgICBsZXQgc3RhcnRDaGFyOiBzdHJpbmcgPSAneyAnO1xuICAgIGxldCBlbmRDaGFyOiBzdHJpbmcgPSAnIH0nO1xuICAgIGlmICh0aGlzLmlzQXJyYXkoKSkge1xuICAgICAgbGV0IHByZXZpZXdBcnJheTogYW55W10gPSB0aGlzLl9kYXRhLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0FycmF5Lm1hcCgob2JqOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUob2JqKTtcbiAgICAgIH0pO1xuICAgICAgc3RhcnRDaGFyID0gJ1snO1xuICAgICAgZW5kQ2hhciA9ICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHByZXZpZXdLZXlzOiBzdHJpbmdbXSA9IHRoaXMuX2NoaWxkcmVuLnNsaWNlKDAsIFRkSnNvbkZvcm1hdHRlckNvbXBvbmVudC5QUkVWSUVXX0xJTUlUKTtcbiAgICAgIHByZXZpZXdEYXRhID0gcHJldmlld0tleXMubWFwKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ga2V5ICsgJzogJyArIHRoaXMuZ2V0VmFsdWUodGhpcy5fZGF0YVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcHJldmlld1N0cmluZzogc3RyaW5nID0gIHByZXZpZXdEYXRhLmpvaW4oJywgJyk7XG4gICAgbGV0IGVsbGlwc2lzOiBzdHJpbmcgPSBwcmV2aWV3RGF0YS5sZW5ndGggPj0gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfTElNSVQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdTdHJpbmcubGVuZ3RoID4gVGRKc29uRm9ybWF0dGVyQ29tcG9uZW50LlBSRVZJRVdfU1RSSU5HX01BWF9MRU5HVEggPyAn4oCmJyA6ICcnO1xuICAgIHJldHVybiBzdGFydENoYXIgKyBwcmV2aWV3U3RyaW5nLnN1YnN0cmluZygwLCBUZEpzb25Gb3JtYXR0ZXJDb21wb25lbnQuUFJFVklFV19TVFJJTkdfTUFYX0xFTkdUSCkgK1xuICAgICAgICAgICBlbGxpcHNpcyArIGVuZENoYXI7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPYmplY3QoKSkge1xuICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9kYXRhKSB7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19