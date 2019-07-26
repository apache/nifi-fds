import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { IControlValueAccessor } from '@covalent/core/common';
export declare class TdSearchInputBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdSearchInputMixinBase: (new (...args: any[]) => IControlValueAccessor) & typeof TdSearchInputBase;
export declare class TdSearchInputComponent extends _TdSearchInputMixinBase implements IControlValueAccessor, OnInit {
    private _dir;
    _input: MatInput;
    /**
     * appearance?: MatFormFieldAppearance
     * Appearance style for the underlying input component.
     */
    appearance: MatFormFieldAppearance;
    /**
     * showUnderline?: boolean
     * Sets if the input underline should be visible. Defaults to 'false'.
     */
    showUnderline: boolean;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 400.
     */
    debounce: number;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     */
    placeholder: string;
    /**
     * clearIcon?: string
     * The icon used to clear the search input.
     * Defaults to 'cancel' icon.
     */
    clearIcon: string;
    /**
     * searchDebounce: function($event)
     * Event emitted after the [debounce] timeout.
     */
    onSearchDebounce: EventEmitter<string>;
    /**
     * search: function($event)
     * Event emitted after the key enter has been pressed.
     */
    onSearch: EventEmitter<string>;
    /**
     * clear: function()
     * Event emitted after the clear icon has been clicked.
     */
    onClear: EventEmitter<void>;
    /**
     * blur: function()
     * Event emitted after the blur event has been called in underlying input.
     */
    onBlur: EventEmitter<void>;
    readonly isRTL: boolean;
    constructor(_dir: Dir, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    /**
     * Method to focus to underlying input.
     */
    focus(): void;
    handleBlur(): void;
    stopPropagation(event: Event): void;
    handleSearch(event: Event): void;
    /**
     * Method to clear the underlying input.
     */
    clearSearch(): void;
    private _searchTermChanged;
}
