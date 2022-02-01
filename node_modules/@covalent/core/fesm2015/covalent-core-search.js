import { EventEmitter, Component, forwardRef, ChangeDetectionStrategy, Optional, ChangeDetectorRef, ViewChild, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { Dir } from '@angular/cdk/bidi';
import { debounceTime, skip } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';

/**
 * @fileoverview added by tsickle
 * Generated from: search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdSearchInputBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdSearchInputBase.prototype._changeDetectorRef;
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
        this.searchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.search = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.clear = new EventEmitter();
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        this.blur = new EventEmitter();
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
        this._input.ngControl.valueChanges
            .pipe(debounceTime(this.debounce), skip(1))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this._searchTermChanged(value);
        }));
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
        this.blur.emit();
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
        this.search.emit(this.value);
    }
    /**
     * Method to clear the underlying input.
     * @return {?}
     */
    clearSearch() {
        this.value = '';
        this._changeDetectorRef.markForCheck();
        this.clear.emit();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _searchTermChanged(value) {
        this.searchDebounce.emit(value);
    }
}
TdSearchInputComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdSearchInputComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-search-input',
                template: "<div class=\"td-search-input\">\n  <mat-form-field\n    class=\"td-search-input-field\"\n    [class.mat-hide-underline]=\"!showUnderline\"\n    [appearance]=\"appearance\"\n    floatLabel=\"never\"\n  >\n    <input\n      matInput\n      #searchElement\n      type=\"search\"\n      [(ngModel)]=\"value\"\n      [placeholder]=\"placeholder\"\n      (blur)=\"handleBlur()\"\n      (search)=\"stopPropagation($event)\"\n      (keyup.enter)=\"handleSearch($event)\"\n    />\n    <span matSuffix *ngIf=\"appearance === 'fill' || appearance === 'outline' || appearance === 'standard'\">\n      <ng-template [ngTemplateOutlet]=\"clearButton\"></ng-template>\n    </span>\n  </mat-form-field>\n  <ng-template *ngIf=\"!appearance || appearance === 'legacy'\" [ngTemplateOutlet]=\"clearButton\"></ng-template>\n</div>\n<ng-template #clearButton>\n  <button\n    mat-icon-button\n    class=\"td-search-input-clear\"\n    type=\"button\"\n    [@searchState]=\"searchElement.value ? 'show' : isRTL ? 'hide-left' : 'hide-right'\"\n    (click)=\"clearSearch()\"\n  >\n    <mat-icon>{{ clearIcon }}</mat-icon>\n  </button>\n</ng-template>\n",
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
                styles: [":host .td-search-input{-ms-flex-align:baseline;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:end;align-content:center;align-items:baseline;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-end;max-width:100%;overflow-x:hidden}:host .td-search-input .td-search-input-field{-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper,:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-legacy .mat-form-field-infix{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-ms-flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;flex:0 0 auto}"]
            }] }
];
/** @nocollapse */
TdSearchInputComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TdSearchInputComponent.propDecorators = {
    _input: [{ type: ViewChild, args: [MatInput, { static: true },] }],
    appearance: [{ type: Input }],
    showUnderline: [{ type: Input }],
    debounce: [{ type: Input }],
    placeholder: [{ type: Input }],
    clearIcon: [{ type: Input }],
    searchDebounce: [{ type: Output }],
    search: [{ type: Output }],
    clear: [{ type: Output }],
    blur: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TdSearchInputComponent.prototype._input;
    /**
     * appearance?: MatFormFieldAppearance
     * Appearance style for the underlying input component.
     * @type {?}
     */
    TdSearchInputComponent.prototype.appearance;
    /**
     * showUnderline?: boolean
     * Sets if the input underline should be visible. Defaults to 'false'.
     * @type {?}
     */
    TdSearchInputComponent.prototype.showUnderline;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 400.
     * @type {?}
     */
    TdSearchInputComponent.prototype.debounce;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     * @type {?}
     */
    TdSearchInputComponent.prototype.placeholder;
    /**
     * clearIcon?: string
     * The icon used to clear the search input.
     * Defaults to 'cancel' icon.
     * @type {?}
     */
    TdSearchInputComponent.prototype.clearIcon;
    /**
     * searchDebounce: function($event)
     * Event emitted after the [debounce] timeout.
     * @type {?}
     */
    TdSearchInputComponent.prototype.searchDebounce;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     * @type {?}
     */
    TdSearchInputComponent.prototype.search;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     * @type {?}
     */
    TdSearchInputComponent.prototype.clear;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     * @type {?}
     */
    TdSearchInputComponent.prototype.blur;
    /**
     * @type {?}
     * @private
     */
    TdSearchInputComponent.prototype._dir;
}

/**
 * @fileoverview added by tsickle
 * Generated from: search-box/search-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdSearchBoxBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdSearchBoxBase.prototype._changeDetectorRef;
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
        this.searchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        this.search = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        this.clear = new EventEmitter();
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        this.blur = new EventEmitter();
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
        this.searchDebounce.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleSearch(value) {
        this.search.emit(value);
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.clear.emit();
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this.blur.emit();
    }
}
TdSearchBoxComponent.decorators = [
    { type: Component, args: [{
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdSearchBoxComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-search-box',
                template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{ backIcon }}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{ searchIcon }}</mat-icon>\n  </button>\n  <td-search-input\n    #searchInput\n    [@inputState]=\"alwaysVisible || searchVisible\"\n    [debounce]=\"debounce\"\n    [(ngModel)]=\"value\"\n    [showUnderline]=\"showUnderline\"\n    [placeholder]=\"placeholder\"\n    [clearIcon]=\"clearIcon\"\n    (searchDebounce)=\"handleSearchDebounce($event)\"\n    (search)=\"handleSearch($event)\"\n    (clear)=\"handleClear(); toggleVisibility()\"\n    (blur)=\"handleBlur()\"\n  ></td-search-input>\n</div>\n",
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
                styles: [":host{display:block}.td-search-box{-ms-flex-align:baseline;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:end;align-content:center;align-items:baseline;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-end;max-width:100%}.td-search-box .td-search-icon{-ms-flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;flex:0 0 auto}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-left:0!important;margin-right:12px}.td-search-box td-search-input ::ng-deep .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}"]
            }] }
];
/** @nocollapse */
TdSearchBoxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TdSearchBoxComponent.propDecorators = {
    _searchInput: [{ type: ViewChild, args: [TdSearchInputComponent, { static: true },] }],
    backIcon: [{ type: Input }],
    searchIcon: [{ type: Input }],
    clearIcon: [{ type: Input }],
    showUnderline: [{ type: Input }],
    debounce: [{ type: Input }],
    alwaysVisible: [{ type: Input }],
    placeholder: [{ type: Input }],
    searchDebounce: [{ type: Output }],
    search: [{ type: Output }],
    clear: [{ type: Output }],
    blur: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdSearchBoxComponent.prototype._searchVisible;
    /** @type {?} */
    TdSearchBoxComponent.prototype._searchInput;
    /**
     * backIcon?: string
     * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
     * Defaults to 'search' icon.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.backIcon;
    /**
     * searchIcon?: string
     * The icon used to open/focus the search toggle.
     * Defaults to 'search' icon.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.searchIcon;
    /**
     * clearIcon?: string
     * The icon used to clear the search input.
     * Defaults to 'cancel' icon.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.clearIcon;
    /**
     * showUnderline?: boolean
     * Sets if the input underline should be visible. Defaults to 'false'.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.showUnderline;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 400.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.debounce;
    /**
     * alwaysVisible?: boolean
     * Sets if the input should always be visible. Defaults to 'false'.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.alwaysVisible;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.placeholder;
    /**
     * searchDebounce: function($event)
     * Event emitted after the [debounce] timeout.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.searchDebounce;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.search;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.clear;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.blur;
}

/**
 * @fileoverview added by tsickle
 * Generated from: search.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentSearchModule {
}
CovalentSearchModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule, MatInputModule, MatIconModule, MatButtonModule],
                declarations: [TdSearchInputComponent, TdSearchBoxComponent],
                exports: [TdSearchInputComponent, TdSearchBoxComponent],
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
 * Generated from: covalent-core-search.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentSearchModule, TdSearchBoxBase, TdSearchBoxComponent, TdSearchInputBase, TdSearchInputComponent, _TdSearchBoxMixinBase, _TdSearchInputMixinBase };
//# sourceMappingURL=covalent-core-search.js.map
