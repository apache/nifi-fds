/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList, forwardRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple, } from '@covalent/core/common';
import { TdTabOptionComponent } from './tab-option.component';
var TdTabSelectBase = /** @class */ (function () {
    function TdTabSelectBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdTabSelectBase;
}());
export { TdTabSelectBase };
if (false) {
    /** @type {?} */
    TdTabSelectBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
var TdTabSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdTabSelectComponent, _super);
    function TdTabSelectComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._subs = [];
        _this._values = [];
        _this._selectedIndex = 0;
        _this._stretchTabs = false;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         */
        _this.valueChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabOptions ? this._tabOptions.toArray() : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
        get: /**
         * @return {?}
         */
        function () {
            return this._stretchTabs;
        },
        /**
         * Makes the tabs stretch to fit the parent container.
         */
        set: /**
         * Makes the tabs stretch to fit the parent container.
         * @param {?} stretchTabs
         * @return {?}
         */
        function (stretchTabs) {
            this._stretchTabs = coerceBooleanProperty(stretchTabs);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdTabSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // subscribe to check if value changes and update the selectedIndex internally.
        this._subs.push(this.valueChanges.subscribe(function (value) {
            _this._setValue(value);
        }));
    };
    /**
     * @return {?}
     */
    TdTabSelectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // subscribe to listen to any tab changes.
        this._refreshValues();
        this._subs.push(this._tabOptions.changes.subscribe(function () {
            _this._refreshValues();
        }));
        // initialize value
        Promise.resolve().then(function () {
            _this._setValue(_this.value);
        });
    };
    /**
     * @return {?}
     */
    TdTabSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subs && this._subs.length) {
            this._subs.forEach(function (sub) {
                sub.unsubscribe();
            });
        }
    };
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     */
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    TdTabSelectComponent.prototype.selectedIndexChange = /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    function (selectedIndex) {
        this._selectedIndex = selectedIndex;
        /** @type {?} */
        var value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    };
    /**
     * Refresh the values array whenever the number of tabs gets updated
     */
    /**
     * Refresh the values array whenever the number of tabs gets updated
     * @return {?}
     */
    TdTabSelectComponent.prototype._refreshValues = /**
     * Refresh the values array whenever the number of tabs gets updated
     * @return {?}
     */
    function () {
        this._values = this.tabOptions.map(function (tabOption) {
            return tabOption.value;
        });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     */
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @param {?} value
     * @return {?}
     */
    TdTabSelectComponent.prototype._setValue = /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this._values.indexOf(value);
        if (index > -1) {
            this._selectedIndex = index;
        }
        else {
            this.value = this._values.length ? this._values[0] : undefined;
            this._selectedIndex = 0;
        }
        this._changeDetectorRef.markForCheck();
    };
    TdTabSelectComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdTabSelectComponent; }),
                            multi: true,
                        }],
                    selector: 'td-tab-select',
                    template: "<mat-tab-group [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n                [backgroundColor]=\"backgroundColor\"\n                [color]=\"color\"\n                [disableRipple]=\"disableRipple\"\n                [selectedIndex]=\"selectedIndex\"\n                (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <ng-template let-tabOption\n                ngFor\n                [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\">\n        </ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                    /* tslint:disable-next-line */
                    inputs: ['value', 'disabled', 'disableRipple'],
                    styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
                }] }
    ];
    /** @nocollapse */
    TdTabSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdTabSelectComponent.propDecorators = {
        _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent,] }],
        stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
        color: [{ type: Input, args: ['color',] }],
        backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
        valueChange: [{ type: Output }]
    };
    return TdTabSelectComponent;
}(_TdTabSelectMixinBase));
export { TdTabSelectComponent };
if (false) {
    /** @type {?} */
    TdTabSelectComponent.prototype._subs;
    /** @type {?} */
    TdTabSelectComponent.prototype._values;
    /** @type {?} */
    TdTabSelectComponent.prototype._selectedIndex;
    /** @type {?} */
    TdTabSelectComponent.prototype._stretchTabs;
    /**
     * Gets all tab option children
     * @type {?}
     */
    TdTabSelectComponent.prototype._tabOptions;
    /**
     * Color of the tab group.
     * @type {?}
     */
    TdTabSelectComponent.prototype.color;
    /**
     * Background color of the tab group.
     * @type {?}
     */
    TdTabSelectComponent.prototype.backgroundColor;
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @type {?}
     */
    TdTabSelectComponent.prototype.valueChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS90YWItc2VsZWN0LyIsInNvdXJjZXMiOlsidGFiLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBR1QsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGlCQUFpQixHQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFDRyxhQUFhLEVBRWIseUJBQXlCLEVBRXpCLGtCQUFrQixHQUMzQixNQUFNLHVCQUF1QixDQUFDO0FBSS9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlEO0lBQ0UseUJBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQztJQUM5RCxzQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsNkNBQTRDOzs7O0FBSTFELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUVsSDtJQWEwQyxnREFBcUI7SUFpRDdELDhCQUFZLGtCQUFxQztRQUFqRCxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBaERPLFdBQUssR0FBbUIsRUFBRSxDQUFDO1FBRTNCLGFBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsb0JBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0Isa0JBQVksR0FBWSxLQUFLLENBQUM7Ozs7O1FBd0NuQixpQkFBVyxHQUFzQixJQUFJLFlB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SyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBcElGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7NEJBQ25ELEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7b0JBQ0YsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDB0QkFBMEM7O29CQUcxQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQzs7aUJBQy9DOzs7O2dCQWhEQyxpQkFBaUI7Ozs4QkFpRWhCLGVBQWUsU0FBQyxvQkFBb0I7OEJBU3BDLEtBQUssU0FBQyxhQUFhO3dCQVduQixLQUFLLFNBQUMsT0FBTztrQ0FLYixLQUFLLFNBQUMsaUJBQWlCOzhCQU12QixNQUFNOztJQTBFVCwyQkFBQztDQUFBLEFBdElELENBYTBDLHFCQUFxQixHQXlIOUQ7U0F6SFksb0JBQW9COzs7SUFHL0IscUNBQW1DOztJQUVuQyx1Q0FBNEI7O0lBQzVCLDhDQUFtQzs7SUFDbkMsNENBQXNDOzs7OztJQVN0QywyQ0FBNkY7Ozs7O0lBb0I3RixxQ0FBb0M7Ozs7O0lBS3BDLCtDQUF3RDs7Ozs7O0lBTXhELDJDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLFxuICAgICAgICAgIG1peGluRGlzYWJsZWQsXG4gICAgICAgICAgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICAgIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgICAgSUNhbkRpc2FibGVSaXBwbGUsXG4gICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlLFxufSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRUYWJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRUYWJTZWxlY3RNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQobWl4aW5EaXNhYmxlUmlwcGxlKFRkVGFiU2VsZWN0QmFzZSkpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRUYWJTZWxlY3RDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC10YWItc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBpbnB1dHM6IFsndmFsdWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRhYlNlbGVjdENvbXBvbmVudCBleHRlbmRzIF9UZFRhYlNlbGVjdE1peGluQmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3ZhbHVlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RyZXRjaFRhYnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWxsIHRhYiBvcHRpb24gY2hpbGRyZW5cbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRUYWJPcHRpb25Db21wb25lbnQpIHJlYWRvbmx5IF90YWJPcHRpb25zOiBRdWVyeUxpc3Q8VGRUYWJPcHRpb25Db21wb25lbnQ+O1xuXG4gIGdldCB0YWJPcHRpb25zKCk6IFRkVGFiT3B0aW9uQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl90YWJPcHRpb25zID8gdGhpcy5fdGFiT3B0aW9ucy50b0FycmF5KCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgdGhlIHRhYnMgc3RyZXRjaCB0byBmaXQgdGhlIHBhcmVudCBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoJ3N0cmV0Y2hUYWJzJylcbiAgc2V0IHN0cmV0Y2hUYWJzKHN0cmV0Y2hUYWJzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyZXRjaFRhYnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RyZXRjaFRhYnMpO1xuICB9XG4gIGdldCBzdHJldGNoVGFicygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZXRjaFRhYnM7XG4gIH1cblxuICAvKipcbiAgICogQ29sb3Igb2YgdGhlIHRhYiBncm91cC5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBFdmVudCB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByYXcgdmFsdWUgb2YgdGhlIHNlbGVjdCBjaGFuZ2VzLiBUaGlzIGlzIGhlcmUgcHJpbWFyaWx5XG4gICAqIHRvIGZhY2lsaXRhdGUgdGhlIHR3by13YXkgYmluZGluZyBmb3IgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hlY2sgaWYgdmFsdWUgY2hhbmdlcyBhbmQgdXBkYXRlIHRoZSBzZWxlY3RlZEluZGV4IGludGVybmFsbHkuXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFZhbHVlKHZhbHVlKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBhbnkgdGFiIGNoYW5nZXMuXG4gICAgdGhpcy5fcmVmcmVzaFZhbHVlcygpO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3RhYk9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoVmFsdWVzKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIC8vIGluaXRpYWxpemUgdmFsdWVcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMgJiYgdGhpcy5fc3Vicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdXNlciBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYlxuICAgKiBUaGlzIHVwZGF0ZXMgdGhlIG5ldyBzZWxlY3RlZEluZGV4IGFuZCBpbmZlcnMgd2hhdCB2YWx1ZSBzaG91bGQgYmUgbWFwcGVkIHRvLlxuICAgKi9cbiAgc2VsZWN0ZWRJbmRleENoYW5nZShzZWxlY3RlZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICBsZXQgdmFsdWU6IGFueSA9IHRoaXMuX3ZhbHVlc1tzZWxlY3RlZEluZGV4XTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSB2YWx1ZXMgYXJyYXkgd2hlbmV2ZXIgdGhlIG51bWJlciBvZiB0YWJzIGdldHMgdXBkYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB0aGlzLnRhYk9wdGlvbnMubWFwKCh0YWJPcHRpb246IFRkVGFiT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGFiT3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgdmFsdWUgZGVwZW5kaW5nIGlmIGl0cyBwYXJ0IG9mIG91ciBvcHRpb25zXG4gICAqIGVsc2Ugc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdGFiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5fdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZXMubGVuZ3RoID8gdGhpcy5fdmFsdWVzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==