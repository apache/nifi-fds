/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, Optional, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { debounceTime, skip } from 'rxjs/operators';
import { mixinControlValueAccessor } from '@covalent/core/common';
var TdSearchInputBase = /** @class */ (function () {
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
export { TdSearchInputBase };
if (false) {
    /** @type {?} */
    TdSearchInputBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdSearchInputMixinBase = mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdSearchInputComponent, _super);
    function TdSearchInputComponent(_dir, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._dir = _dir;
        /**
         * showUnderline?: boolean
         * Sets if the input underline should be visible. Defaults to 'false'.
         */
        _this.showUnderline = false;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 400.
         */
        _this.debounce = 400;
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        _this.clearIcon = 'cancel';
        /**
         * searchDebounce: function($event)
         * Event emitted after the [debounce] timeout.
         */
        _this.onSearchDebounce = new EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        _this.onSearch = new EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        _this.onClear = new EventEmitter();
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        _this.onBlur = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._dir) {
                return this._dir.dir === 'rtl';
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdSearchInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._input.ngControl.valueChanges.pipe(debounceTime(this.debounce), skip(1)).subscribe(function (value) {
            _this._searchTermChanged(value);
        });
    };
    /**
     * Method to focus to underlying input.
     */
    /**
     * Method to focus to underlying input.
     * @return {?}
     */
    TdSearchInputComponent.prototype.focus = /**
     * Method to focus to underlying input.
     * @return {?}
     */
    function () {
        this._input.focus();
    };
    /**
     * @return {?}
     */
    TdSearchInputComponent.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.onBlur.emit(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdSearchInputComponent.prototype.stopPropagation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdSearchInputComponent.prototype.handleSearch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    };
    /**
     * Method to clear the underlying input.
     */
    /**
     * Method to clear the underlying input.
     * @return {?}
     */
    TdSearchInputComponent.prototype.clearSearch = /**
     * Method to clear the underlying input.
     * @return {?}
     */
    function () {
        this.value = '';
        this._changeDetectorRef.markForCheck();
        this.onClear.emit(undefined);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchInputComponent.prototype._searchTermChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearchDebounce.emit(value);
    };
    TdSearchInputComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdSearchInputComponent; }),
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
    TdSearchInputComponent.ctorParameters = function () { return [
        { type: Dir, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
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
    return TdSearchInputComponent;
}(_TdSearchInputMixinBase));
export { TdSearchInputComponent };
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
    TdSearchInputComponent.prototype.onSearchDebounce;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onSearch;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onClear;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     * @type {?}
     */
    TdSearchInputComponent.prototype.onBlur;
    /** @type {?} */
    TdSearchInputComponent.prototype._dir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NlYXJjaC8iLCJzb3VyY2VzIjpbInNlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUNuRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpGO0lBQ0UsMkJBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUksQ0FBQztJQUMvRCx3QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsK0NBQTRDOzs7O0FBSTFELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyx5QkFBeUIsQ0FBQyxpQkFBaUIsQ0FBQztBQUVuRjtJQThCNEMsa0RBQXVCO0lBa0VqRSxnQ0FBZ0MsSUFBUyxFQUM3QixrQkFBcUM7UUFEakQsWUFFRSxrQkFBTSxrQkFBa0IsQ0FBQyxTQUMxQjtRQUgrQixVQUFJLEdBQUosSUFBSSxDQUFLOzs7OztRQXBE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QUUsTUFBTTs2QkFDaEIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxNQUFNLEVBQUcsS0FBSyxDQUFDO2dDQUNuQixTQUFTLEVBQUUsZ0JBQWdCO2dDQUMzQixPQUFPLEVBQUUsT0FBTzs2QkFDakIsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUNqRCxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUNuRCxDQUFDO3FCQUNIOztpQkFDRjs7OztnQkE1Q1EsR0FBRyx1QkErR0csUUFBUTtnQkFsSFcsaUJBQWlCOzs7eUJBa0RoRCxTQUFTLFNBQUMsUUFBUTs2QkFNbEIsS0FBSyxTQUFDLFlBQVk7Z0NBTWxCLEtBQUssU0FBQyxlQUFlOzJCQU1yQixLQUFLLFNBQUMsVUFBVTs4QkFNaEIsS0FBSyxTQUFDLGFBQWE7NEJBT25CLEtBQUssU0FBQyxXQUFXO21DQU1qQixNQUFNLFNBQUMsZ0JBQWdCOzJCQU12QixNQUFNLFNBQUMsUUFBUTswQkFNZixNQUFNLFNBQUMsT0FBTzt5QkFNZCxNQUFNLFNBQUMsTUFBTTs7SUF3RGhCLDZCQUFDO0NBQUEsQUEvSUQsQ0E4QjRDLHVCQUF1QixHQWlIbEU7U0FqSFksc0JBQXNCOzs7SUFFakMsd0NBQXNDOzs7Ozs7SUFNdEMsNENBQXdEOzs7Ozs7SUFNeEQsK0NBQXVEOzs7Ozs7SUFNdkQsMENBQTBDOzs7Ozs7SUFNMUMsNkNBQTBDOzs7Ozs7O0lBTzFDLDJDQUFpRDs7Ozs7O0lBTWpELGtEQUE4Rjs7Ozs7O0lBTTlGLDBDQUE4RTs7Ozs7O0lBTTlFLHlDQUF3RTs7Ozs7O0lBTXhFLHdDQUFzRTs7SUFTMUQsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPcHRpb25hbCxcbiAgICAgICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE1hdElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFNlYXJjaElucHV0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbn1cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkU2VhcmNoSW5wdXRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKFRkU2VhcmNoSW5wdXRCYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFNlYXJjaElucHV0Q29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG4gIHNlbGVjdG9yOiAndGQtc2VhcmNoLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcycgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogWyd2YWx1ZSddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2VhcmNoU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaGlkZS1sZWZ0Jywgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xNTAlKScsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRlLXJpZ2h0Jywgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDE1MCUpJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ3Nob3cnLCAgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHNob3cnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignc2hvdyA9PiAqJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VhcmNoSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBfVGRTZWFyY2hJbnB1dE1peGluQmFzZSBpbXBsZW1lbnRzIElDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKE1hdElucHV0KSBfaW5wdXQ6IE1hdElucHV0O1xuXG4gIC8qKlxuICAgKiBhcHBlYXJhbmNlPzogTWF0Rm9ybUZpZWxkQXBwZWFyYW5jZVxuICAgKiBBcHBlYXJhbmNlIHN0eWxlIGZvciB0aGUgdW5kZXJseWluZyBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoJ2FwcGVhcmFuY2UnKSBhcHBlYXJhbmNlOiBNYXRGb3JtRmllbGRBcHBlYXJhbmNlO1xuXG4gIC8qKlxuICAgKiBzaG93VW5kZXJsaW5lPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIHRoZSBpbnB1dCB1bmRlcmxpbmUgc2hvdWxkIGJlIHZpc2libGUuIERlZmF1bHRzIHRvICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ3Nob3dVbmRlcmxpbmUnKSBzaG93VW5kZXJsaW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGRlYm91bmNlPzogbnVtYmVyXG4gICAqIERlYm91bmNlIHRpbWVvdXQgYmV0d2VlbiBrZXlwcmVzc2VzLiBEZWZhdWx0cyB0byA0MDAuXG4gICAqL1xuICBASW5wdXQoJ2RlYm91bmNlJykgZGVib3VuY2U6IG51bWJlciA9IDQwMDtcblxuICAvKipcbiAgICogcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICogUGxhY2Vob2xkZXIgZm9yIHRoZSB1bmRlcmx5aW5nIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBjbGVhckljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbGVhciB0aGUgc2VhcmNoIGlucHV0LlxuICAgKiBEZWZhdWx0cyB0byAnY2FuY2VsJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdjbGVhckljb24nKSBjbGVhckljb246IHN0cmluZyA9ICdjYW5jZWwnO1xuXG4gIC8qKlxuICAgKiBzZWFyY2hEZWJvdW5jZTogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBbZGVib3VuY2VdIHRpbWVvdXQuXG4gICAqL1xuICBAT3V0cHV0KCdzZWFyY2hEZWJvdW5jZScpIG9uU2VhcmNoRGVib3VuY2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqXG4gICAqIHNlYXJjaDogZnVuY3Rpb24oJGV2ZW50KVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBrZXkgZW50ZXIgaGFzIGJlZW4gcHJlc3NlZC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlYXJjaCcpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBjbGVhcjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBjbGVhciBpY29uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCdjbGVhcicpIG9uQ2xlYXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogYmx1cjogZnVuY3Rpb24oKVxuICAgKiBFdmVudCBlbWl0dGVkIGFmdGVyIHRoZSBibHVyIGV2ZW50IGhhcyBiZWVuIGNhbGxlZCBpbiB1bmRlcmx5aW5nIGlucHV0LlxuICAgKi9cbiAgQE91dHB1dCgnYmx1cicpIG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyLFxuICAgICAgICAgICAgICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0Lm5nQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSxcbiAgICAgIHNraXAoMSksIC8vIHNraXAgZmlyc3QgY2hhbmdlIHdoZW4gdmFsdWUgaXMgc2V0IHRvIHVuZGVmaW5lZFxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9zZWFyY2hUZXJtQ2hhbmdlZCh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGZvY3VzIHRvIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uQmx1ci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oZXZlbnQpO1xuICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gY2xlYXIgdGhlIHVuZGVybHlpbmcgaW5wdXQuXG4gICAqL1xuICBjbGVhclNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5vbkNsZWFyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlYXJjaFRlcm1DaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VhcmNoRGVib3VuY2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxufVxuIl19