/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { TdSearchInputComponent } from '../search-input/search-input.component';
import { mixinControlValueAccessor } from '@covalent/core/common';
var TdSearchBoxBase = /** @class */ (function () {
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
export { TdSearchBoxBase };
if (false) {
    /** @type {?} */
    TdSearchBoxBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);
var TdSearchBoxComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdSearchBoxComponent, _super);
    function TdSearchBoxComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._searchVisible = false;
        /**
         * backIcon?: string
         * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
         * Defaults to 'search' icon.
         */
        _this.backIcon = 'search';
        /**
         * searchIcon?: string
         * The icon used to open/focus the search toggle.
         * Defaults to 'search' icon.
         */
        _this.searchIcon = 'search';
        /**
         * clearIcon?: string
         * The icon used to clear the search input.
         * Defaults to 'cancel' icon.
         */
        _this.clearIcon = 'cancel';
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
         * alwaysVisible?: boolean
         * Sets if the input should always be visible. Defaults to 'false'.
         */
        _this.alwaysVisible = false;
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
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when the search icon is clicked.
     */
    /**
     * Method executed when the search icon is clicked.
     * @return {?}
     */
    TdSearchBoxComponent.prototype.searchClicked = /**
     * Method executed when the search icon is clicked.
     * @return {?}
     */
    function () {
        if (!this.alwaysVisible && this._searchVisible) {
            this.value = '';
            this.handleClear();
        }
        else if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.toggleVisibility = /**
     * @return {?}
     */
    function () {
        this._searchVisible = !this._searchVisible;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleSearchDebounce = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearchDebounce.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleSearch = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onSearch.emit(value);
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.onClear.emit(undefined);
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this.onBlur.emit(undefined);
    };
    TdSearchBoxComponent.decorators = [
        { type: Component, args: [{
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdSearchBoxComponent; }),
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
    TdSearchBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return TdSearchBoxComponent;
}(_TdSearchBoxMixinBase));
export { TdSearchBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9zZWFyY2gvIiwic291cmNlcyI6WyJzZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBeUIseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RjtJQUNFLHlCQUFtQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFJLENBQUM7SUFDL0Qsc0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURhLDZDQUE0Qzs7OztBQUkxRCxNQUFNLEtBQU8scUJBQXFCLEdBQUcseUJBQXlCLENBQUMsZUFBZSxDQUFDO0FBRS9FO0lBMEIwQyxnREFBcUI7SUE4RTdELDhCQUFZLGtCQUFxQztRQUFqRCxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBOUVPLG9CQUFjLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFZckIsY0FBUSxHQUFXLFFBQVEsQ0FBQzs7Ozs7O1FBTzFCLGdCQUFVLEdBQVcsUUFBUSxDQUFDOzs7Ozs7UUFPL0IsZUFBUyxHQUFXLFFBQVEsQ0FBQzs7Ozs7UUFNekIsbUJBQWEsR0FBWSxLQUFLLENB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NkJBT2hCLEtBQUssU0FBQyxZQUFZOzRCQU9sQixLQUFLLFNBQUMsV0FBVztnQ0FNakIsS0FBSyxTQUFDLGVBQWU7MkJBTXJCLEtBQUssU0FBQyxVQUFVO2dDQU1oQixLQUFLLFNBQUMsZUFBZTs4QkFNckIsS0FBSyxTQUFDLGFBQWE7bUNBTW5CLE1BQU0sU0FBQyxnQkFBZ0I7MkJBTXZCLE1BQU0sU0FBQyxRQUFROzBCQU1mLE1BQU0sU0FBQyxPQUFPO3lCQU1kLE1BQU0sU0FBQyxNQUFNOztJQXVDaEIsMkJBQUM7Q0FBQSxBQTdJRCxDQTBCMEMscUJBQXFCLEdBbUg5RDtTQW5IWSxvQkFBb0I7OztJQUUvQiw4Q0FBd0M7O0lBQ3hDLDRDQUF3RTs7Ozs7OztJQVd4RSx3Q0FBK0M7Ozs7Ozs7SUFPL0MsMENBQW1EOzs7Ozs7O0lBT25ELHlDQUFpRDs7Ozs7O0lBTWpELDZDQUF1RDs7Ozs7O0lBTXZELHdDQUEwQzs7Ozs7O0lBTTFDLDZDQUF1RDs7Ozs7O0lBTXZELDJDQUEwQzs7Ozs7O0lBTTFDLGdEQUE4Rjs7Ozs7O0lBTTlGLHdDQUE4RTs7Ozs7O0lBTTlFLHVDQUF3RTs7Ozs7O0lBTXhFLHNDQUFzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIEFVVE9fU1RZTEUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgVGRTZWFyY2hJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uL3NlYXJjaC1pbnB1dC9zZWFyY2gtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IElDb250cm9sVmFsdWVBY2Nlc3NvciwgbWl4aW5Db250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBUZFNlYXJjaEJveEJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZFNlYXJjaEJveE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IoVGRTZWFyY2hCb3hCYXNlKTtcblxuQENvbXBvbmVudCh7XG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZFNlYXJjaEJveENvbXBvbmVudCksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxuICBzZWxlY3RvcjogJ3RkLXNlYXJjaC1ib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3guY29tcG9uZW50LnNjc3MnIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFsndmFsdWUnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2lucHV0U3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnMCcsIHN0eWxlKHtcbiAgICAgICAgd2lkdGg6ICcwJScsXG4gICAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnMScsICBzdHlsZSh7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpbjogQVVUT19TVFlMRSxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzAgPT4gMScsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBhbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZWFyY2hCb3hDb21wb25lbnQgZXh0ZW5kcyBfVGRTZWFyY2hCb3hNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIHByaXZhdGUgX3NlYXJjaFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQFZpZXdDaGlsZChUZFNlYXJjaElucHV0Q29tcG9uZW50KSBfc2VhcmNoSW5wdXQ6IFRkU2VhcmNoSW5wdXRDb21wb25lbnQ7XG5cbiAgZ2V0IHNlYXJjaFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZpc2libGU7XG4gIH1cblxuICAvKipcbiAgICogYmFja0ljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBjbG9zZSB0aGUgc2VhcmNoIHRvZ2dsZSwgb25seSBzaG93biB3aGVuIFthbHdheXNWaXNpYmxlXSBpcyBmYWxzZS5cbiAgICogRGVmYXVsdHMgdG8gJ3NlYXJjaCcgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgnYmFja0ljb24nKSBiYWNrSWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIHNlYXJjaEljb24/OiBzdHJpbmdcbiAgICogVGhlIGljb24gdXNlZCB0byBvcGVuL2ZvY3VzIHRoZSBzZWFyY2ggdG9nZ2xlLlxuICAgKiBEZWZhdWx0cyB0byAnc2VhcmNoJyBpY29uLlxuICAgKi9cbiAgQElucHV0KCdzZWFyY2hJY29uJykgc2VhcmNoSWNvbjogc3RyaW5nID0gJ3NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIGNsZWFySWNvbj86IHN0cmluZ1xuICAgKiBUaGUgaWNvbiB1c2VkIHRvIGNsZWFyIHRoZSBzZWFyY2ggaW5wdXQuXG4gICAqIERlZmF1bHRzIHRvICdjYW5jZWwnIGljb24uXG4gICAqL1xuICBASW5wdXQoJ2NsZWFySWNvbicpIGNsZWFySWNvbjogc3RyaW5nID0gJ2NhbmNlbCc7XG5cbiAgLyoqXG4gICAqIHNob3dVbmRlcmxpbmU/OiBib29sZWFuXG4gICAqIFNldHMgaWYgdGhlIGlucHV0IHVuZGVybGluZSBzaG91bGQgYmUgdmlzaWJsZS4gRGVmYXVsdHMgdG8gJ2ZhbHNlJy5cbiAgICovXG4gIEBJbnB1dCgnc2hvd1VuZGVybGluZScpIHNob3dVbmRlcmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogZGVib3VuY2U/OiBudW1iZXJcbiAgICogRGVib3VuY2UgdGltZW91dCBiZXR3ZWVuIGtleXByZXNzZXMuIERlZmF1bHRzIHRvIDQwMC5cbiAgICovXG4gIEBJbnB1dCgnZGVib3VuY2UnKSBkZWJvdW5jZTogbnVtYmVyID0gNDAwO1xuXG4gIC8qKlxuICAgKiBhbHdheXNWaXNpYmxlPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIHRoZSBpbnB1dCBzaG91bGQgYWx3YXlzIGJlIHZpc2libGUuIERlZmF1bHRzIHRvICdmYWxzZScuXG4gICAqL1xuICBASW5wdXQoJ2Fsd2F5c1Zpc2libGUnKSBhbHdheXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAqIFBsYWNlaG9sZGVyIGZvciB0aGUgdW5kZXJseWluZyBpbnB1dCBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogc2VhcmNoRGVib3VuY2U6IGZ1bmN0aW9uKCRldmVudClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgW2RlYm91bmNlXSB0aW1lb3V0LlxuICAgKi9cbiAgQE91dHB1dCgnc2VhcmNoRGVib3VuY2UnKSBvblNlYXJjaERlYm91bmNlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8qKlxuICAgKiBzZWFyY2g6IGZ1bmN0aW9uKCRldmVudClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUga2V5IGVudGVyIGhhcyBiZWVuIHByZXNzZWQuXG4gICAqL1xuICBAT3V0cHV0KCdzZWFyY2gnKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipcbiAgICogY2xlYXI6IGZ1bmN0aW9uKClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgY2xlYXIgaWNvbiBoYXMgYmVlbiBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgnY2xlYXInKSBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGJsdXI6IGZ1bmN0aW9uKClcbiAgICogRXZlbnQgZW1pdHRlZCBhZnRlciB0aGUgYmx1ciBldmVudCBoYXMgYmVlbiBjYWxsZWQgaW4gdW5kZXJseWluZyBpbnB1dC5cbiAgICovXG4gIEBPdXRwdXQoJ2JsdXInKSBvbkJsdXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgc2VhcmNoIGljb24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHNlYXJjaENsaWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFsd2F5c1Zpc2libGUgJiYgdGhpcy5fc2VhcmNoVmlzaWJsZSkge1xuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5oYW5kbGVDbGVhcigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5hbHdheXNWaXNpYmxlIHx8ICF0aGlzLl9zZWFyY2hWaXNpYmxlKSB7XG4gICAgICB0aGlzLl9zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIHRvZ2dsZVZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5fc2VhcmNoVmlzaWJsZSA9ICF0aGlzLl9zZWFyY2hWaXNpYmxlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoRGVib3VuY2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMub25TZWFyY2hEZWJvdW5jZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMub25DbGVhci5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cblxuICBoYW5kbGVCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMub25CbHVyLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxufVxuIl19