/**
 * @fileoverview added by tsickle
 * Generated from: search-box/search-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvc2VhcmNoLyIsInNvdXJjZXMiOlsic2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RixNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7Q0FDN0Q7OztJQURhLDZDQUE0Qzs7OztBQUkxRCxNQUFNLE9BQU8scUJBQXFCLEdBQUcseUJBQXlCLENBQUMsZUFBZSxDQUFDO0FBb0MvRSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEscUJBQXFCOzs7O0lBNkU3RCxZQUFZLGtCQUFxQztRQUMvQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQTdFcEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7Ozs7OztRQVkvQixhQUFRLEdBQVcsUUFBUSxDQUFDOzs7Ozs7UUFPNUIsZUFBVSxHQUFXLFFBQVEsQ0FBQzs7Ozs7O1FBTzlCLGNBQVMsR0FBVyxRQUFRLENBQUM7Ozs7O1FB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NkJBTUwsTUFBTTtxQkFNTixNQUFNO29CQU1OLE1BQU07bUJBTU4sTUFBTTs7Ozs7OztJQTFFUCw4Q0FBd0M7O0lBQ3hDLDRDQUEwRjs7Ozs7OztJQVcxRix3Q0FBcUM7Ozs7Ozs7SUFPckMsMENBQXVDOzs7Ozs7O0lBT3ZDLHlDQUFzQzs7Ozs7O0lBTXRDLDZDQUF3Qzs7Ozs7O0lBTXhDLHdDQUFnQzs7Ozs7O0lBTWhDLDZDQUF3Qzs7Ozs7O0lBTXhDLDJDQUE2Qjs7Ozs7O0lBTTdCLDhDQUE0RTs7Ozs7O0lBTTVFLHNDQUFvRTs7Ozs7O0lBTXBFLHFDQUErRDs7Ozs7O0lBTS9ELG9DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgQVVUT19TVFlMRSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBUZFNlYXJjaElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoQm94QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTZWFyY2hCb3hNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkU2VhcmNoQm94QmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkU2VhcmNoQm94Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtc2VhcmNoLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpbnB1dFN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICcwJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHdpZHRoOiAnMCUnLFxuICAgICAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnMScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIG1hcmdpbjogQVVUT19TVFlMRSxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignMCA9PiAxJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJzEgPT4gMCcsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNlYXJjaEJveENvbXBvbmVudCBleHRlbmRzIF9UZFNlYXJjaEJveE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3NlYXJjaFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQFZpZXdDaGlsZChUZFNlYXJjaElucHV0Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBfc2VhcmNoSW5wdXQ6IFRkU2VhcmNoSW5wdXRDb21wb25lbnQ7XG5cbiAgZ2V0IHNlYXJjaFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZpc2libGU7XG4gIH1cblxuICAvKipcbiAgICogYmFja0ljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbG9zZSB0aGUgc2VhcmNoIHRvZ2dsZSwgb25seSBzaG93biB3aGVuIFthbHdheXNWaXNpYmxlXSBpcyBmYWxzZS5cbiAgICogRGVmYXVsdHMgdG8gJ3NlYXJjaCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIGJhY2tJY29uOiBzdHJpbmcgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogc2VhcmNoSWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIG9wZW4vZm9jdXMgdGhlIHNlYXJjaCB0b2dnbGUuXG4gICAqIERlZmF1bHRzIHRvICdzZWFyY2gnIGljb24uXG4gICAqL1xuICBASW5wdXQoKSBzZWFyY2hJY29uOiBzdHJpbmcgPSAnc2VhcmNoJztcblxuICAvKipcbiAgICogY2xlYXJJY29uPzogc3RyaW5nXG4gICAqIFRoZSBpY29uIHVzZWQgdG8gY2xlYXIgdGhlIHNlYXJjaCBpbnB1dC5cbiAgICogRGVmYXVsdHMgdG8gJ2NhbmNlbCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIGNsZWFySWNvbjogc3RyaW5nID0gJ2NhbmNlbCc7XG5cbiAgLyoqXG4gICAqIHNob3dVbmRlcmxpbmU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHVuZGVybGluZSBzaG91bGQgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgpIHNob3dVbmRlcmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDQwMC5cbiAgICovXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSA0MDA7XG5cbiAgLyoqXG4gICAqIGFsd2F5c1Zpc2libGU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHNob3VsZCBhbHdheXMgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgpIGFsd2F5c1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHNlYXJjaERlYm91bmNlOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIFtkZWJvdW5jZV0gdGltZW91dC5cbiAgICovXG4gIEBPdXRwdXQoKSBzZWFyY2hEZWJvdW5jZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogc2VhcmNoOiBmdW5jdGlvbigkZXZlbnQpXG4gICAqIEV2ZW50IGVtaXR0ZWQgYWZ0ZXIgdGhlIGtleSBlbnRlciBoYXMgYmVlbiBwcmVzc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2xlYXI6IGZ1bmN0aW9uKClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgY2xlYXIgaWNvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNsZWFyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGJsdXI6IGZ1bmN0aW9uKClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYmx1ciBldmVudCBoYXMgYmVlbiBjYWxsZWQgaW4gdW5kZXJseWluZyBpbnB1dC5cbiAgICovXG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIHNlYXJjaCBpY29uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBzZWFyY2hDbGlja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbHdheXNWaXNpYmxlICYmIHRoaXMuX3NlYXJjaFZpc2libGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuaGFuZGxlQ2xlYXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWx3YXlzVmlzaWJsZSB8fCAhdGhpcy5fc2VhcmNoVmlzaWJsZSkge1xuICAgICAgdGhpcy5fc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5KCk7XG4gIH1cblxuICB0b2dnbGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlYXJjaFZpc2libGUgPSAhdGhpcy5fc2VhcmNoVmlzaWJsZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaERlYm91bmNlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaERlYm91bmNlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXIuZW1pdCgpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICB9XG59XG4iXX0=