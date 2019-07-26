import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TdSearchInputComponent } from '../search-input/search-input.component';
import { IControlValueAccessor } from '@covalent/core/common';
export declare class TdSearchBoxBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdSearchBoxMixinBase: (new (...args: any[]) => IControlValueAccessor) & typeof TdSearchBoxBase;
export declare class TdSearchBoxComponent extends _TdSearchBoxMixinBase implements IControlValueAccessor {
    private _searchVisible;
    _searchInput: TdSearchInputComponent;
    readonly searchVisible: boolean;
    /**
     * backIcon?: string
     * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
     * Defaults to 'search' icon.
     */
    backIcon: string;
    /**
     * searchIcon?: string
     * The icon used to open/focus the search toggle.
     * Defaults to 'search' icon.
     */
    searchIcon: string;
    /**
     * clearIcon?: string
     * The icon used to clear the search input.
     * Defaults to 'cancel' icon.
     */
    clearIcon: string;
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
     * alwaysVisible?: boolean
     * Sets if the input should always be visible. Defaults to 'false'.
     */
    alwaysVisible: boolean;
    /**
     * placeholder?: string
     * Placeholder for the underlying input component.
     */
    placeholder: string;
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
    constructor(_changeDetectorRef: ChangeDetectorRef);
    /**
     * Method executed when the search icon is clicked.
     */
    searchClicked(): void;
    toggleVisibility(): void;
    handleSearchDebounce(value: string): void;
    handleSearch(value: string): void;
    handleClear(): void;
    handleBlur(): void;
}
