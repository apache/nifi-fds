import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Optional, NgModule } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { TdCollapseAnimation } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
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
        let /** @type {?} */ type = this.getType(value);
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
            let /** @type {?} */ date = new Date(object);
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
        let /** @type {?} */ object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        let /** @type {?} */ funcNameRegex = /function (.{1,})\(/;
        let /** @type {?} */ results = (funcNameRegex).exec((object).constructor.toString());
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
        let /** @type {?} */ previewData;
        let /** @type {?} */ startChar = '{ ';
        let /** @type {?} */ endChar = ' }';
        if (this.isArray()) {
            let /** @type {?} */ previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map((obj) => {
                return this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            let /** @type {?} */ previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map((key) => {
                return key + ': ' + this.getValue(this._data[key]);
            });
        }
        let /** @type {?} */ previewString = previewData.join(', ');
        let /** @type {?} */ ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
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
            for (let /** @type {?} */ key in this._data) {
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
                styles: [`:host{
  display:block; }
.td-json-formatter-wrapper{
  padding-top:2px;
  padding-bottom:2px; }
  .td-json-formatter-wrapper .td-key{
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -ms-flex-line-pack:center;
        align-content:center;
    max-width:100%;
    -webkit-box-pack:start;
        -ms-flex-pack:start;
            justify-content:start; }
    .td-json-formatter-wrapper .td-key.td-key-node:hover{
      cursor:pointer; }
  .td-json-formatter-wrapper .td-object-children.ng-animating{
    overflow:hidden; }
  .td-json-formatter-wrapper .td-object-children .td-key,
  .td-json-formatter-wrapper .td-object-children .td-object-children{
    padding-left:24px; }
    ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key, ::ng-deep [dir='rtl']
    .td-json-formatter-wrapper .td-object-children .td-object-children{
      padding-right:24px;
      padding-left:0; }
    .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,
    .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{
      padding-left:48px; }
      ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, ::ng-deep [dir='rtl']
      .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{
        padding-right:48px;
        padding-left:0; }
  .td-json-formatter-wrapper .value{
    margin-left:5px; }
    ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .value{
      padding-right:5px;
      padding-left:0; }
    .td-json-formatter-wrapper .value .td-empty{
      opacity:0.5;
      text-decoration:line-through; }
    .td-json-formatter-wrapper .value .string{
      word-break:break-word; }
    .td-json-formatter-wrapper .value .date{
      word-break:break-word; }
`],
                template: `<div class="td-json-formatter-wrapper">
  <a class="td-key"
     [class.td-key-node]="hasChildren()"
     [class.td-key-leaf]="!hasChildren()"
     [tabIndex]="isObject()? 0 : -1"
     (keydown.enter)="toggle()"
     (click)="toggle()">
    <mat-icon class="td-node-icon" *ngIf="hasChildren()">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>
    <span *ngIf="key" class="key">{{key}}:</span>
    <span class="value">
      <span [class.td-empty]="!hasChildren()" *ngIf="isObject()" [matTooltip]="getPreview()" matTooltipPosition="after">
        <span class="td-object-name">{{getObjectName()}}</span>
        <span class="td-array-length" *ngIf="isArray()">[{{data.length}}]</span>
      </span>
      <span *ngIf="!isObject()" [class]="getType(data)">{{getValue(data)}}</span>
    </span>
  </a>
  <div class="td-object-children" [@tdCollapse]="!(hasChildren() && open)">
    <ng-template let-key ngFor [ngForOf]="children">
      <td-json-formatter [key]="key" [data]="data[key]" [levelsOpen]="levelsOpen - 1"></td-json-formatter>
    </ng-template>
  </div>
</div>`,
                animations: [
                    TdCollapseAnimation(),
                ],
            },] },
];
/** @nocollapse */
TdJsonFormatterComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: Dir, decorators: [{ type: Optional },] },
];
TdJsonFormatterComponent.propDecorators = {
    "levelsOpen": [{ type: Input, args: ['levelsOpen',] },],
    "key": [{ type: Input, args: ['key',] },],
    "data": [{ type: Input, args: ['data',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CovalentJsonFormatterModule {
}
CovalentJsonFormatterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatTooltipModule,
                    MatIconModule,
                ],
                declarations: [
                    TdJsonFormatterComponent,
                ],
                exports: [
                    TdJsonFormatterComponent,
                ],
            },] },
];
/** @nocollapse */
CovalentJsonFormatterModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentJsonFormatterModule, TdJsonFormatterComponent };
//# sourceMappingURL=covalent-core-json-formatter.js.map
