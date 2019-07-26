/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { TdSearchInputComponent } from '../search-input/search-input.component';
import { mixinControlValueAccessor } from '@covalent/core/common';
export class TdSearchBoxBase {
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
export const _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
export class TdSearchBoxComponent extends _TdSearchBoxMixinBase {
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
if (false) {
    /** @type {?} */
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
    TdSearchBoxComponent.prototype.onSearchDebounce;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onSearch;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onClear;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     * @type {?}
     */
    TdSearchBoxComponent.prototype.onBlur;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9zZWFyY2gvIiwic291cmNlcyI6WyJzZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpGLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUksQ0FBQztDQUM5RDs7O0lBRGEsNkNBQTRDOzs7O0FBSTFELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FBQyxlQUFlLENBQUM7QUE0Qi9FLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7SUE4RTdELFlBQVksa0JBQXFDO1FBQy9DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBN0VwQixtQkFBYyxHQUFZLEtBQUssQ0FBQzs7Ozs7O1FBWXJCLGFBQVEsR0FBVyxRQUFRLENBQUM7Ozs7OztRQU8xQixlQUFVLEdBQVcsUUFBUSxDQUFDOzs7Ozs7UUFPL0IsY0FBUyxHQUFXLFFBQVEsQ0FBQzs7Ozs7UUFNekIsa0JBQWEsR0FBWSxL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LFVBQVU7NEJBTWhCLEtBQUssU0FBQyxlQUFlOzBCQU1yQixLQUFLLFNBQUMsYUFBYTsrQkFNbkIsTUFBTSxTQUFDLGdCQUFnQjt1QkFNdkIsTUFBTSxTQUFDLFFBQVE7c0JBTWYsTUFBTSxTQUFDLE9BQU87cUJBTWQsTUFBTSxTQUFDLE1BQU07Ozs7SUExRWQsOENBQXdDOztJQUN4Qyw0Q0FBd0U7Ozs7Ozs7SUFXeEUsd0NBQStDOzs7Ozs7O0lBTy9DLDBDQUFtRDs7Ozs7OztJQU9uRCx5Q0FBaUQ7Ozs7OztJQU1qRCw2Q0FBdUQ7Ozs7OztJQU12RCx3Q0FBMEM7Ozs7OztJQU0xQyw2Q0FBdUQ7Ozs7OztJQU12RCwyQ0FBMEM7Ozs7OztJQU0xQyxnREFBOEY7Ozs7OztJQU05Rix3Q0FBOEU7Ozs7OztJQU05RSx1Q0FBd0U7Ozs7OztJQU14RSxzQ0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBBVVRPX1NUWUxFIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IFRkU2VhcmNoSW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRTZWFyY2hCb3hCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTZWFyY2hCb3hNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkU2VhcmNoQm94QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRTZWFyY2hCb3hDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1zZWFyY2gtYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5zY3NzJyBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbnB1dFN0YXRlJywgW1xuICAgICAgc3RhdGUoJzAnLCBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMCUnLFxuICAgICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJzEnLCAgc3R5bGUoe1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW46IEFVVE9fU1RZTEUsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcwID0+IDEnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignMSA9PiAwJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoQm94Q29tcG9uZW50IGV4dGVuZHMgX1RkU2VhcmNoQm94TWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIF9zZWFyY2hWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoVGRTZWFyY2hJbnB1dENvbXBvbmVudCkgX3NlYXJjaElucHV0OiBUZFNlYXJjaElucHV0Q29tcG9uZW50O1xuXG4gIGdldCBzZWFyY2hWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWaXNpYmxlO1xuICB9XG5cbiAgLyoqXG4gICAqIGJhY2tJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gY2xvc2UgdGhlIHNlYXJjaCB0b2dnbGUsIG9ubHkgc2hvd24gd2hlbiBbYWx3YXlzVmlzaWJsZV0gaXMgZmFsc2UuXG4gICAqIERlZmF1bHRzIHRvICdzZWFyY2gnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ2JhY2tJY29uJykgYmFja0ljb246IHN0cmluZyA9ICdzZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBzZWFyY2hJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gb3Blbi9mb2N1cyB0aGUgc2VhcmNoIHRvZ2dsZS5cbiAgICogRGVmYXVsdHMgdG8gJ3NlYXJjaCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgnc2VhcmNoSWNvbicpIHNlYXJjaEljb246IHN0cmluZyA9ICdzZWFyY2gnO1xuXG4gIC8qKlxuICAgKiBjbGVhckljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbGVhciB0aGUgc2VhcmNoIGlucHV0LlxuICAgKiBEZWZhdWx0cyB0byAnY2FuY2VsJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdjbGVhckljb24nKSBjbGVhckljb246IHN0cmluZyA9ICdjYW5jZWwnO1xuXG4gIC8qKlxuICAgKiBzaG93VW5kZXJsaW5lPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIHRoZSBpbnB1dCB1bmRlcmxpbmUgc2hvdWxkIGJlIHZpc2libGUuIERlZmF1bHRzIHRvICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ3Nob3dVbmRlcmxpbmUnKSBzaG93VW5kZXJsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGRlYm91bmNlPzogbnVtYmVyXG4gICAqIERlYm91bmNlIHRpbWVvdXQgYmV0d2VlbiBrZXlwcmVzc2VzLiBEZWZhdWx0cyB0byA0MDAuXG4gICAqL1xuICBASW5wdXQoJ2RlYm91bmNlJykgZGVib3VuY2U6IG51bWJlciA9IDQwMDtcblxuICAvKipcbiAgICogYWx3YXlzVmlzaWJsZT86IGJvb2xlYW5cbiAgICogU2V0cyBpZiB0aGUgaW5wdXQgc2hvdWxkIGFsd2F5cyBiZSB2aXNpYmxlLiBEZWZhdWx0cyB0byAnZmFsc2UnLlxuICAgKi9cbiAgQElucHV0KCdhbHdheXNWaXNpYmxlJykgYWx3YXlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAgKiBQbGFjZWhvbGRlciBmb3IgdGhlIHVuZGVybHlpbmcgaW5wdXQgY29tcG9uZW50LlxuICAgKi9cbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlYXJjaERlYm91bmNlOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIFtkZWJvdW5jZV0gdGltZW91dC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaERlYm91bmNlJykgb25TZWFyY2hEZWJvdW5jZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogc2VhcmNoOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGtleSBlbnRlciBoYXMgYmVlbiBwcmVzc2VkLlxuICAgKi9cbiAgQE91dHB1dCgnc2VhcmNoJykgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIGNsZWFyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGNsZWFyIGljb24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoJ2NsZWFyJykgb25DbGVhcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBibHVyOiBmdW5jdGlvbigpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGJsdXIgZXZlbnQgaGFzIGJlZW4gY2FsbGVkIGluIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCdibHVyJykgb25CbHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIHNlYXJjaCBpY29uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBzZWFyY2hDbGlja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbHdheXNWaXNpYmxlICYmIHRoaXMuX3NlYXJjaFZpc2libGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuaGFuZGxlQ2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWx3YXlzVmlzaWJsZSB8fCAhdGhpcy5fc2VhcmNoVmlzaWJsZSkge1xuICAgICAgdGhpcy5fc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICB0b2dnbGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlYXJjaFZpc2libGUgPSAhdGhpcy5fc2VhcmNoVmlzaWJsZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaERlYm91bmNlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoRGVib3VuY2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2godmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVDbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh1bmRlZmluZWQpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbn1cbiJdfQ==