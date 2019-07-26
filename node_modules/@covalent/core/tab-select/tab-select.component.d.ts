import { ChangeDetectorRef, QueryList, OnInit, AfterContentInit, EventEmitter, OnDestroy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ICanDisable, IControlValueAccessor, ICanDisableRipple } from '@covalent/core/common';
import { TdTabOptionComponent } from './tab-option.component';
export declare class TdTabSelectBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdTabSelectMixinBase: (new (...args: any[]) => IControlValueAccessor) & (new (...args: any[]) => ICanDisable) & (new (...args: any[]) => ICanDisableRipple) & typeof TdTabSelectBase;
export declare class TdTabSelectComponent extends _TdTabSelectMixinBase implements IControlValueAccessor, ICanDisable, ICanDisableRipple, OnInit, AfterContentInit, OnDestroy {
    private _subs;
    private _values;
    private _selectedIndex;
    private _stretchTabs;
    readonly selectedIndex: number;
    /**
     * Gets all tab option children
     */
    readonly _tabOptions: QueryList<TdTabOptionComponent>;
    readonly tabOptions: TdTabOptionComponent[];
    /**
     * Makes the tabs stretch to fit the parent container.
     */
    stretchTabs: boolean;
    /**
     * Color of the tab group.
     */
    color: ThemePalette;
    /**
     * Background color of the tab group.
     */
    backgroundColor: ThemePalette;
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     */
    readonly valueChange: EventEmitter<any>;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Method executed when user selects a different tab
     * This updates the new selectedIndex and infers what value should be mapped to.
     */
    selectedIndexChange(selectedIndex: number): void;
    /**
     * Refresh the values array whenever the number of tabs gets updated
     */
    private _refreshValues;
    /**
     * Try to set value depending if its part of our options
     * else set the value of the first tab.
     */
    private _setValue;
}
