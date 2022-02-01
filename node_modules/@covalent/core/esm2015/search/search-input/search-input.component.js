/**
 * @fileoverview added by tsickle
 * Generated from: search-input/search-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';
export class TdSearchInputBase {
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
export const _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
export class TdSearchInputComponent extends _TdSearchInputMixinBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9zZWFyY2gvIiwic291cmNlcyI6WyJzZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFFBQVEsRUFDUix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLEVBQXlCLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekYsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFHLENBQUM7Q0FDN0Q7OztJQURhLCtDQUE0Qzs7OztBQUkxRCxNQUFNLE9BQU8sdUJBQXVCLEdBQUcseUJBQXlCLENBQUMsaUJBQWlCLENBQUM7QUEyQ25GLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSx1QkFBdUI7Ozs7O0lBaUVqRSxZQUFnQyxJQUFTLEVBQUUsa0JBQXFDO1FBQzlFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBREksU0FBSSxH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QU87eUJBQ2pCLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDakQsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDbkQsQ0FBQztpQkFDSDs7YUFDRjs7OztZQXZEUSxHQUFHLHVCQXlIRyxRQUFRO1lBOUhyQixpQkFBaUI7OztxQkE4RGhCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQU1wQyxLQUFLOzRCQU1MLEtBQUs7dUJBTUwsS0FBSzswQkFNTCxLQUFLO3dCQU9MLEtBQUs7NkJBTUwsTUFBTTtxQkFNTixNQUFNO29CQU1OLE1BQU07bUJBTU4sTUFBTTs7OztJQXZEUCx3Q0FBd0Q7Ozs7OztJQU14RCw0Q0FBNEM7Ozs7OztJQU01QywrQ0FBd0M7Ozs7OztJQU14QywwQ0FBZ0M7Ozs7OztJQU1oQyw2Q0FBNkI7Ozs7Ozs7SUFPN0IsMkNBQXNDOzs7Ozs7SUFNdEMsZ0RBQTRFOzs7Ozs7SUFNNUUsd0NBQW9FOzs7Ozs7SUFNcEUsdUNBQStEOzs7Ozs7SUFNL0Qsc0NBQThEOzs7OztJQVNsRCxzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9wdGlvbmFsLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFNlYXJjaElucHV0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRTZWFyY2hJbnB1dE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGRTZWFyY2hJbnB1dEJhc2UpO1xuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFNlYXJjaElucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtc2VhcmNoLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbJ3ZhbHVlJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzZWFyY2hTdGF0ZScsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaGlkZS1sZWZ0JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTE1MCUpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaGlkZS1yaWdodCcsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDE1MCUpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc2hvdycsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBzaG93JywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3cgPT4gKicsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNlYXJjaElucHV0Q29tcG9uZW50IGV4dGVuZHMgX1RkU2VhcmNoSW5wdXRNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoTWF0SW5wdXQsIHsgc3RhdGljOiB0cnVlIH0pIF9pbnB1dDogTWF0SW5wdXQ7XG5cbiAgLyoqXG4gICAqIGFwcGVhcmFuY2U/OiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlXG4gICAqIEFwcGVhcmFuY2Ugc3R5bGUgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IE1hdEZvcm1GaWVsZEFwcGVhcmFuY2U7XG5cbiAgLyoqXG4gICAqIHNob3dVbmRlcmxpbmU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHVuZGVybGluZSBzaG91bGQgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgpIHNob3dVbmRlcmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDQwMC5cbiAgICovXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSA0MDA7XG5cbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgdW5kZXJseWluZyBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjbGVhckljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbGVhciB0aGUgc2VhcmNoIGlucHV0LlxuICAgKiBEZWZhdWx0cyB0byAnY2FuY2VsJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCkgY2xlYXJJY29uOiBzdHJpbmcgPSAnY2FuY2VsJztcblxuICAvKipcbiAgICogc2VhcmNoRGVib3VuY2U6IGZ1bmN0aW9uKCRldmVudClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgW2RlYm91bmNlXSB0aW1lb3V0LlxuICAgKi9cbiAgQE91dHB1dCgpIHNlYXJjaERlYm91bmNlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBzZWFyY2g6IGZ1bmN0aW9uKCRldmVudClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUga2V5IGVudGVyIGhhcyBiZWVuIHByZXNzZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjbGVhcjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBjbGVhciBpY29uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2xlYXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogYmx1cjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBibHVyIGV2ZW50IGhhcyBiZWVuIGNhbGxlZCBpbiB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpciwgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dC5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2UpLFxuICAgICAgICBza2lwKDEpLCAvLyBza2lwIGZpcnN0IGNoYW5nZSB3aGVuIHZhbHVlIGlzIHNldCB0byB1bmRlZmluZWRcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fc2VhcmNoVGVybUNoYW5nZWQodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGZvY3VzIHRvIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBjbGVhciB0aGUgdW5kZXJseWluZyBpbnB1dC5cbiAgICovXG4gIGNsZWFyU2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNsZWFyLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlYXJjaFRlcm1DaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaERlYm91bmNlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=