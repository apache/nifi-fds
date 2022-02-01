import { Component, ChangeDetectionStrategy, ViewContainerRef, ChangeDetectorRef, ViewChild, TemplateRef, Input, EventEmitter, forwardRef, NgZone, ElementRef, ContentChildren, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor, mixinDisableRipple } from '@covalent/core/common';
import { Subject, timer } from 'rxjs';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: tab-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdTabOptionBase {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _changeDetectorRef
     */
    constructor(_viewContainerRef, _changeDetectorRef) {
        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdTabOptionBase.prototype._viewContainerRef;
    /** @type {?} */
    TdTabOptionBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdTabOptionMixinBase = mixinDisabled(TdTabOptionBase);
class TdTabOptionComponent extends _TdTabOptionMixinBase {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _changeDetectorRef
     */
    constructor(_viewContainerRef, _changeDetectorRef) {
        super(_viewContainerRef, _changeDetectorRef);
    }
    /**
     * @return {?}
     */
    get content() {
        return this._contentPortal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
}
TdTabOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-tab-option',
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                /* tslint:disable-next-line */
                inputs: ['disabled'],
                styles: [""]
            }] }
];
/** @nocollapse */
TdTabOptionComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
TdTabOptionComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    value: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTabOptionComponent.prototype._contentPortal;
    /** @type {?} */
    TdTabOptionComponent.prototype._content;
    /**
     * Value to which the option will be binded to.
     * @type {?}
     */
    TdTabOptionComponent.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tab-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdTabSelectBase {
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
const _TdTabSelectMixinBase = mixinControlValueAccessor(mixinDisabled(mixinDisableRipple(TdTabSelectBase)));
class TdTabSelectComponent extends _TdTabSelectMixinBase {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _ngZone
     * @param {?} _elementRef
     */
    constructor(_changeDetectorRef, _ngZone, _elementRef) {
        super(_changeDetectorRef);
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._destroy = new Subject();
        this._widthSubject = new Subject();
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
        // set a timer to check every 250ms if the width has changed.
        // if the width has changed, then we realign the ink bar
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._widthSubject
                .asObservable()
                .pipe(takeUntil(this._destroy), distinctUntilChanged(), debounceTime(100))
                .subscribe((/**
             * @return {?}
             */
            () => {
                this._ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this._matTabGroup.realignInkBar();
                    this._changeDetectorRef.markForCheck();
                }));
            }));
            timer(500, 250)
                .pipe(takeUntil(this._destroy))
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (this._elementRef && this._elementRef.nativeElement) {
                    this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
                }
            }));
        }));
        // subscribe to check if value changes and update the selectedIndex internally.
        this.valueChanges.pipe(takeUntil(this._destroy)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this._setValue(value);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // subscribe to listen to any tab changes.
        this._refreshValues();
        this._tabOptions.changes.pipe(takeUntil(this._destroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this._refreshValues();
        }));
        // initialize value
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._setValue(this.value);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next(true);
        this._destroy.unsubscribe();
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
        const value = this._values[selectedIndex];
        this.value = value;
        this.valueChange.emit(value);
        this.onChange(value);
    }
    /**
     * Refresh the values array whenever the number of tabs gets updated
     * @private
     * @return {?}
     */
    _refreshValues() {
        this._values = this.tabOptions.map((/**
         * @param {?} tabOption
         * @return {?}
         */
        (tabOption) => {
            return tabOption.value;
        }));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     * @private
     * @param {?} value
     * @return {?}
     */
    _setValue(value) {
        /** @type {?} */
        const index = this._values.indexOf(value);
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
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdTabSelectComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-tab-select',
                template: "<mat-tab-group\n  [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n  [backgroundColor]=\"backgroundColor\"\n  [color]=\"color\"\n  [disableRipple]=\"disableRipple\"\n  [selectedIndex]=\"selectedIndex\"\n  (selectedIndexChange)=\"selectedIndexChange($event)\"\n>\n  <ng-template let-tabOption ngFor [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\"></ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                /* tslint:disable-next-line */
                inputs: ['value', 'disabled', 'disableRipple'],
                styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
            }] }
];
/** @nocollapse */
TdTabSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: ElementRef }
];
TdTabSelectComponent.propDecorators = {
    _matTabGroup: [{ type: ViewChild, args: [MatTabGroup, { static: true },] }],
    _tabOptions: [{ type: ContentChildren, args: [TdTabOptionComponent, { descendants: true },] }],
    stretchTabs: [{ type: Input, args: ['stretchTabs',] }],
    color: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    valueChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._values;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._selectedIndex;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._stretchTabs;
    /** @type {?} */
    TdTabSelectComponent.prototype._matTabGroup;
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
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    TdTabSelectComponent.prototype._elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: tab-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentTabSelectModule {
}
CovalentTabSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TdTabSelectComponent, TdTabOptionComponent],
                // directives, components, and pipes owned by this NgModule
                imports: [
                    /** Angular Modules */
                    CommonModule,
                    FormsModule,
                    /** Material Modules */
                    PortalModule,
                    MatTabsModule,
                ],
                // modules needed to run this module
                exports: [TdTabSelectComponent, TdTabOptionComponent],
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
 * Generated from: covalent-core-tab-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentTabSelectModule, TdTabOptionBase, TdTabOptionComponent, TdTabSelectBase, TdTabSelectComponent, _TdTabOptionMixinBase, _TdTabSelectMixinBase };
//# sourceMappingURL=covalent-core-tab-select.js.map
