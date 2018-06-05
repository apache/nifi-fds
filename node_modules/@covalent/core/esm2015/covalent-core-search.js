import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, NgModule } from '@angular/core';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput, MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { skip } from 'rxjs/operators/skip';
import { mixinControlValueAccessor } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdSearchInputBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
const _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
class TdSearchInputComponent extends _TdSearchInputMixinBase {
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     */
    constructor(_dir, _changeDetectorRef) {
        super(_changeDetectorRef);
        this._dir = _dir;
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        this.debounce = 400;
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        this.clearIcon = 'cancel';
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        this.onSearchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.onSearch = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.onClear = new EventEmitter();
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        this.onBlur = new EventEmitter();
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
     * @return {?}
     */
    ngOnInit() {
        this._input.ngControl.valueChanges.pipe(debounceTime(this.debounce), skip(1)).subscribe((value) => {
            this._searchTermChanged(value);
        });
    }
    /**
     * Method to focus to underlying input.
     * @return {?}
     */
    focus() {
        this._input.focus();
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this.onBlur.emit(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    stopPropagation(event) {
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSearch(event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    }
    /**
     * Method to clear the underlying input.
     * @return {?}
     */
    clearSearch() {
        this.value = '';
        this._changeDetectorRef.markForCheck();
        this.onClear.emit(undefined);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _searchTermChanged(value) {
        this.onSearchDebounce.emit(value);
    }
}
TdSearchInputComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdSearchInputComponent),
                        multi: true,
                    }],
                selector: 'td-search-input',
                template: `<div class="td-search-input">
  <mat-form-field class="td-search-input-field"
                  [class.mat-hide-underline]="!showUnderline"
                  floatPlaceholder="never">
    <input matInput
            #searchElement
            type="search"
            [(ngModel)]="value"
            [placeholder]="placeholder"
            (blur)="handleBlur()"
            (search)="stopPropagation($event)"
            (keyup.enter)="handleSearch($event)"/>
  </mat-form-field>
  <button mat-icon-button
          class="td-search-input-clear"
          type="button"
          [@searchState]="(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))"
          (click)="clearSearch()">
    <mat-icon>{{clearIcon}}</mat-icon>
  </button>
</div>`,
                styles: [`.td-search-input{
  overflow-x:hidden;
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
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
  .td-search-input .td-search-input-field{
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1; }
  .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{
    display:none; }
  .td-search-input .td-search-input-clear{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto; }
`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['value'],
                animations: [
                    trigger('searchState', [
                        state('hide-left', style({
                            transform: 'translateX(-150%)',
                            display: 'none',
                        })),
                        state('hide-right', style({
                            transform: 'translateX(150%)',
                            display: 'none',
                        })),
                        state('show', style({
                            transform: 'translateX(0%)',
                            display: 'block',
                        })),
                        transition('* => show', animate('200ms ease-in')),
                        transition('show => *', animate('200ms ease-out')),
                    ]),
                ],
            },] },
];
/** @nocollapse */
TdSearchInputComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional },] },
    { type: ChangeDetectorRef, },
];
TdSearchInputComponent.propDecorators = {
    "_input": [{ type: ViewChild, args: [MatInput,] },],
    "showUnderline": [{ type: Input, args: ['showUnderline',] },],
    "debounce": [{ type: Input, args: ['debounce',] },],
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "clearIcon": [{ type: Input, args: ['clearIcon',] },],
    "onSearchDebounce": [{ type: Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: Output, args: ['search',] },],
    "onClear": [{ type: Output, args: ['clear',] },],
    "onBlur": [{ type: Output, args: ['blur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdSearchBoxBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
const _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
class TdSearchBoxComponent extends _TdSearchBoxMixinBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        super(_changeDetectorRef);
        this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        this.backIcon = 'search';
        /**
         * searchIcon?: string
         * The icon used to open/focus the search toggle.
         * Defaults to 'search' icon.
         */
        this.searchIcon = 'search';
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        this.clearIcon = 'cancel';
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        this.debounce = 400;
        /**
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         */
        this.alwaysVisible = false;
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        this.onSearchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.onSearch = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.onClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get searchVisible() {
        return this._searchVisible;
    }
    /**
     * Method executed when the search icon is clicked.
     * @return {?}
     */
    searchClicked() {
        if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    }
    /**
     * @return {?}
     */
    toggleVisibility() {
        this._searchVisible = !this._searchVisible;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleSearchDebounce(value) {
        this.onSearchDebounce.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleSearch(value) {
        this.onSearch.emit(value);
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.onClear.emit(undefined);
    }
}
TdSearchBoxComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdSearchBoxComponent),
                        multi: true,
                    }],
                selector: 'td-search-box',
                template: `<div class="td-search-box">
  <button mat-icon-button type="button" class="td-search-icon" (click)="searchClicked()">
    <mat-icon *ngIf="searchVisible && !alwaysVisible">{{backIcon}}</mat-icon>
    <mat-icon *ngIf="!searchVisible || alwaysVisible">{{searchIcon}}</mat-icon>
  </button>
  <td-search-input #searchInput
                   [@inputState]="alwaysVisible || searchVisible"
                   [debounce]="debounce"
                   [(ngModel)]="value"
                   [showUnderline]="showUnderline"
                   [placeholder]="placeholder"
                   [clearIcon]="clearIcon"
                   (searchDebounce)="handleSearchDebounce($event)"
                   (search)="handleSearch($event)"
                   (clear)="handleClear(); toggleVisibility()">
  </td-search-input>
</div>`,
                styles: [`:host{
  display:block; }
.td-search-box{
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
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
  .td-search-box .td-search-icon{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto; }
  .td-search-box td-search-input{
    margin-left:12px; }
    ::ng-deep [dir='rtl'] .td-search-box td-search-input{
      margin-right:12px;
      margin-left:0 !important; }
`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: ['value'],
                animations: [
                    trigger('inputState', [
                        state('0', style({
                            width: '0%',
                            margin: '0px',
                        })),
                        state('1', style({
                            width: '100%',
                            margin: AUTO_STYLE,
                        })),
                        transition('0 => 1', animate('200ms ease-in')),
                        transition('1 => 0', animate('200ms ease-out')),
                    ]),
                ],
            },] },
];
/** @nocollapse */
TdSearchBoxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
TdSearchBoxComponent.propDecorators = {
    "_searchInput": [{ type: ViewChild, args: [TdSearchInputComponent,] },],
    "backIcon": [{ type: Input, args: ['backIcon',] },],
    "searchIcon": [{ type: Input, args: ['searchIcon',] },],
    "clearIcon": [{ type: Input, args: ['clearIcon',] },],
    "showUnderline": [{ type: Input, args: ['showUnderline',] },],
    "debounce": [{ type: Input, args: ['debounce',] },],
    "alwaysVisible": [{ type: Input, args: ['alwaysVisible',] },],
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "onSearchDebounce": [{ type: Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: Output, args: ['search',] },],
    "onClear": [{ type: Output, args: ['clear',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CovalentSearchModule {
}
CovalentSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                    MatInputModule,
                    MatIconModule,
                    MatButtonModule,
                ],
                declarations: [
                    TdSearchInputComponent,
                    TdSearchBoxComponent,
                ],
                exports: [
                    TdSearchInputComponent,
                    TdSearchBoxComponent,
                ],
            },] },
];
/** @nocollapse */
CovalentSearchModule.ctorParameters = () => [];

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

export { CovalentSearchModule, TdSearchBoxBase, _TdSearchBoxMixinBase, TdSearchBoxComponent, TdSearchInputBase, _TdSearchInputMixinBase, TdSearchInputComponent };
//# sourceMappingURL=covalent-core-search.js.map
