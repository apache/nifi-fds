import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Dir } from '@angular/cdk/bidi';
import { MatInput, MatInputModule } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { mixinControlValueAccessor } from '@covalent/core/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
/** @type {?} */
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
                template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  [appearance]=\"appearance\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n    <span matSuffix *ngIf=\"appearance === 'fill' || appearance === 'outline' || appearance === 'standard'\">\n      <ng-template\n        [ngTemplateOutlet]=\"clearButton\">\n      </ng-template>\n    </span>\n  </mat-form-field>\n  <ng-template\n    *ngIf=\"!appearance || appearance === 'legacy'\"\n    [ngTemplateOutlet]=\"clearButton\">\n  </ng-template>\n</div>\n<ng-template #clearButton>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</ng-template>\n",
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
                styles: [":host .td-search-input{overflow-x:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-legacy .mat-form-field-infix{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}"]
            }] }
];
/** @nocollapse */
TdSearchInputComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TdSearchInputComponent.propDecorators = {
    _input: [{ type: ViewChild, args: [MatInput,] }],
    appearance: [{ type: Input, args: ['appearance',] }],
    showUnderline: [{ type: Input, args: ['showUnderline',] }],
    debounce: [{ type: Input, args: ['debounce',] }],
    placeholder: [{ type: Input, args: ['placeholder',] }],
    clearIcon: [{ type: Input, args: ['clearIcon',] }],
    onSearchDebounce: [{ type: Output, args: ['searchDebounce',] }],
    onSearch: [{ type: Output, args: ['search',] }],
    onClear: [{ type: Output, args: ['clear',] }],
    onBlur: [{ type: Output, args: ['blur',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
/** @type {?} */
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
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        this.onBlur = new EventEmitter();
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
        if (!this.alwaysVisible && this._searchVisible) {
            this.value = '';
            this.handleClear();
        }
        else if (this.alwaysVisible || !this._searchVisible) {
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
    /**
     * @return {?}
     */
    handleBlur() {
        this.onBlur.emit(undefined);
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
                template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\"\n                   (blur)=\"handleBlur()\">\n  </td-search-input>\n</div>\n",
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
                styles: [":host{display:block}.td-search-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box td-search-input ::ng-deep .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}"]
            }] }
];
/** @nocollapse */
TdSearchBoxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TdSearchBoxComponent.propDecorators = {
    _searchInput: [{ type: ViewChild, args: [TdSearchInputComponent,] }],
    backIcon: [{ type: Input, args: ['backIcon',] }],
    searchIcon: [{ type: Input, args: ['searchIcon',] }],
    clearIcon: [{ type: Input, args: ['clearIcon',] }],
    showUnderline: [{ type: Input, args: ['showUnderline',] }],
    debounce: [{ type: Input, args: ['debounce',] }],
    alwaysVisible: [{ type: Input, args: ['alwaysVisible',] }],
    placeholder: [{ type: Input, args: ['placeholder',] }],
    onSearchDebounce: [{ type: Output, args: ['searchDebounce',] }],
    onSearch: [{ type: Output, args: ['search',] }],
    onClear: [{ type: Output, args: ['clear',] }],
    onBlur: [{ type: Output, args: ['blur',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            },] }
];

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

export { CovalentSearchModule, TdSearchBoxBase, _TdSearchBoxMixinBase, TdSearchBoxComponent, TdSearchInputBase, _TdSearchInputMixinBase, TdSearchInputComponent };

//# sourceMappingURL=covalent-core-search.js.map