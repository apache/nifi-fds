/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ContentChildren, QueryList, forwardRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple, } from '@covalent/core/common';
import { TdTabOptionComponent } from './tab-option.component';
export class TdTabSelectBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdTabSelectBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
export class TdTabSelectComponent extends _TdTabSelectMixinBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        super(_changeDetectorRef);
        this._subs = [];
        this._values = [];
        this._selectedIndex = 0;
        this._stretchTabs = false;
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         */
        this.valueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get tabOptions() {
        return this._tabOptions ? this._tabOptions.toArray() : undefined;
    }
    /**
     * Makes the tabs stretch to fit the parent container.
     * @param {?} stretchTabs
     * @return {?}
     */
    set stretchTabs(stretchTabs) {
        this._stretchTabs = coerceBooleanProperty(stretchTabs);
    }
    /**
     * @return {?}
     */
    get stretchTabs() {
        return this._stretchTabs;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // subscribe to check if value changes and update the selectedIndex internally.
        this._subs.push(this.valueChanges.subscribe((value) => {
            this._setValue(value);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // subscribe to listen to any tab changes.
        this._refreshValues();
        this._subs.push(this._tabOptions.changes.subscribe(() => {
            this._refreshValues();
        }));
        // initialize value
        Promise.resolve().then(() => {
            this._setValue(this.value);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subs && this._subs.length) {
            this._subs.forEach((sub) => {
                sub.unsubscribe();
            });
        }
    }
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     * @param {?} selectedIndex
     * @return {?}
     */
    selectedIndexChange(selectedIndex) {
        this._selectedIndex = selectedIndex;
        /** @type {?} */
        let value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    }
    /**
     * Refresh the values array whenever the number of tabs gets updated
     * @return {?}
     */
    _refreshValues() {
        this._values = this.tabOptions.map((tabOption) => {
            return tabOption.value;
        });
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        /** @type {?} */
        let index = this._values.indexOf(value);
        if (index > -1) {
            this._selectedIndex = index;
        }
        else {
            this.value = this._values.length ? this._values[0] : undefined;
            this._selectedIndex = 0;
        }
        this._changeDetectorRef.markForCheck();
    }
}
TdTabSelectComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdTabSelectComponent),
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
TdTabSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TdTabSelectComponent.propDecorators = {
    _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent,] }],
    stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
    color: [{ type: Input, args: ['color',] }],
    backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    valueChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS90YWItc2VsZWN0LyIsInNvdXJjZXMiOlsidGFiLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFHVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksR0FFYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUNHLGFBQWEsRUFFYix5QkFBeUIsRUFFekIsa0JBQWtCLEdBQzNCLE1BQU0sdUJBQXVCLENBQUM7QUFJL0IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsWUFBbUIsa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFBRyxDQUFDO0NBQzdEOzs7SUFEYSw2Q0FBNEM7Ozs7QUFJMUQsTUFBTSxPQUFPLHFCQUFxQixHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBZWxILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7SUFpRDdELFlBQVksa0JBQXFDO1FBQy9DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBL0NwQixVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUUzQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLGlCQUFZLEdBQVksS0FBSyxDQUFDOzs7OztRQXdDbkIsZ0JBQVcsR0FBc0Is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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7WUFwSUYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2dCQUNGLFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwwdEJBQTBDOztnQkFHMUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUM7O2FBQy9DOzs7O1lBaERDLGlCQUFpQjs7OzBCQWlFaEIsZUFBZSxTQUFDLG9CQUFvQjswQkFTcEMsS0FBSyxTQUFDLGFBQWE7b0JBV25CLEtBQUssU0FBQyxPQUFPOzhCQUtiLEtBQUssU0FBQyxpQkFBaUI7MEJBTXZCLE1BQU07Ozs7SUE1Q1AscUNBQW1DOztJQUVuQyx1Q0FBNEI7O0lBQzVCLDhDQUFtQzs7SUFDbkMsNENBQXNDOzs7OztJQVN0QywyQ0FBNkY7Ozs7O0lBb0I3RixxQ0FBb0M7Ozs7O0lBS3BDLCtDQUF3RDs7Ozs7O0lBTXhELDJDQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOR19WQUxVRV9BQ0NFU1NPUixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLFxuICAgICAgICAgIG1peGluRGlzYWJsZWQsXG4gICAgICAgICAgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICAgICAgICAgIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICAgICAgICAgSUNhbkRpc2FibGVSaXBwbGUsXG4gICAgICAgICAgbWl4aW5EaXNhYmxlUmlwcGxlLFxufSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGRUYWJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNsYXNzIFRkVGFiU2VsZWN0QmFzZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBfVGRUYWJTZWxlY3RNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQobWl4aW5EaXNhYmxlUmlwcGxlKFRkVGFiU2VsZWN0QmFzZSkpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRUYWJTZWxlY3RDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC10YWItc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWItc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBpbnB1dHM6IFsndmFsdWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZVJpcHBsZSddLFxufSlcbmV4cG9ydCBjbGFzcyBUZFRhYlNlbGVjdENvbXBvbmVudCBleHRlbmRzIF9UZFRhYlNlbGVjdE1peGluQmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSwgSUNhbkRpc2FibGVSaXBwbGUsIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3ZhbHVlczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfc3RyZXRjaFRhYnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWxsIHRhYiBvcHRpb24gY2hpbGRyZW5cbiAgICovXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRUYWJPcHRpb25Db21wb25lbnQpIHJlYWRvbmx5IF90YWJPcHRpb25zOiBRdWVyeUxpc3Q8VGRUYWJPcHRpb25Db21wb25lbnQ+O1xuXG4gIGdldCB0YWJPcHRpb25zKCk6IFRkVGFiT3B0aW9uQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl90YWJPcHRpb25zID8gdGhpcy5fdGFiT3B0aW9ucy50b0FycmF5KCkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgdGhlIHRhYnMgc3RyZXRjaCB0byBmaXQgdGhlIHBhcmVudCBjb250YWluZXIuXG4gICAqL1xuICBASW5wdXQoJ3N0cmV0Y2hUYWJzJylcbiAgc2V0IHN0cmV0Y2hUYWJzKHN0cmV0Y2hUYWJzOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3RyZXRjaFRhYnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc3RyZXRjaFRhYnMpO1xuICB9XG4gIGdldCBzdHJldGNoVGFicygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RyZXRjaFRhYnM7XG4gIH1cblxuICAvKipcbiAgICogQ29sb3Igb2YgdGhlIHRhYiBncm91cC5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWIgZ3JvdXAuXG4gICAqL1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xuXG4gIC8qKlxuICAgKiBFdmVudCB0aGF0IGVtaXRzIHdoZW5ldmVyIHRoZSByYXcgdmFsdWUgb2YgdGhlIHNlbGVjdCBjaGFuZ2VzLiBUaGlzIGlzIGhlcmUgcHJpbWFyaWx5XG4gICAqIHRvIGZhY2lsaXRhdGUgdGhlIHR3by13YXkgYmluZGluZyBmb3IgdGhlIGB2YWx1ZWAgaW5wdXQuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKF9jaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzdWJzY3JpYmUgdG8gY2hlY2sgaWYgdmFsdWUgY2hhbmdlcyBhbmQgdXBkYXRlIHRoZSBzZWxlY3RlZEluZGV4IGludGVybmFsbHkuXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgdGhpcy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFZhbHVlKHZhbHVlKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgLy8gc3Vic2NyaWJlIHRvIGxpc3RlbiB0byBhbnkgdGFiIGNoYW5nZXMuXG4gICAgdGhpcy5fcmVmcmVzaFZhbHVlcygpO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3RhYk9wdGlvbnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoVmFsdWVzKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIC8vIGluaXRpYWxpemUgdmFsdWVcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMgJiYgdGhpcy5fc3Vicy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdXNlciBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYlxuICAgKiBUaGlzIHVwZGF0ZXMgdGhlIG5ldyBzZWxlY3RlZEluZGV4IGFuZCBpbmZlcnMgd2hhdCB2YWx1ZSBzaG91bGQgYmUgbWFwcGVkIHRvLlxuICAgKi9cbiAgc2VsZWN0ZWRJbmRleENoYW5nZShzZWxlY3RlZEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICBsZXQgdmFsdWU6IGFueSA9IHRoaXMuX3ZhbHVlc1tzZWxlY3RlZEluZGV4XTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSB2YWx1ZXMgYXJyYXkgd2hlbmV2ZXIgdGhlIG51bWJlciBvZiB0YWJzIGdldHMgdXBkYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBfcmVmcmVzaFZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZXMgPSB0aGlzLnRhYk9wdGlvbnMubWFwKCh0YWJPcHRpb246IFRkVGFiT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGFiT3B0aW9uLnZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBzZXQgdmFsdWUgZGVwZW5kaW5nIGlmIGl0cyBwYXJ0IG9mIG91ciBvcHRpb25zXG4gICAqIGVsc2Ugc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdGFiLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5fdmFsdWVzLmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLl92YWx1ZXMubGVuZ3RoID8gdGhpcy5fdmFsdWVzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==