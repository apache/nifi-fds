import { DoCheck, QueryList, OnInit, ElementRef, TemplateRef, ViewContainerRef, ChangeDetectorRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { MatChip } from '@angular/material/chips';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ICanDisable, IControlValueAccessor } from '@covalent/core/common';
export declare class TdChipDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdAutocompleteOptionDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdChipsBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdChipsMixinBase: (new (...args: any[]) => IControlValueAccessor) & (new (...args: any[]) => ICanDisable) & typeof TdChipsBase;
export declare class TdChipsComponent extends _TdChipsMixinBase implements IControlValueAccessor, DoCheck, OnInit, AfterViewInit, OnDestroy, ICanDisable {
    private _elementRef;
    private _renderer;
    private _document;
    private _outsideClickSubs;
    private _inputValueChangesSubs;
    private _isMousedown;
    private _items;
    private _length;
    private _stacked;
    private _requireMatch;
    private _color;
    private _inputPosition;
    private _chipAddition;
    private _chipRemoval;
    private _focused;
    private _required;
    private _tabIndex;
    private _touchendDebounce;
    _internalClick: boolean;
    _internalActivateOption: boolean;
    _nativeInput: ElementRef;
    _inputChild: MatInput;
    _autocompleteTrigger: MatAutocompleteTrigger;
    _chipsChildren: QueryList<MatChip>;
    _chipTemplate: TdChipDirective;
    _autocompleteOptionTemplate: TdAutocompleteOptionDirective;
    _options: QueryList<MatOption>;
    /**
     * Flag that is true when autocomplete is focused.
     */
    readonly focused: boolean;
    /**
     * FormControl for the matInput element.
     */
    inputControl: FormControl;
    /**
     * items?: any[]
     * Renders the `mat-autocomplete` with the provided list to display as options.
     */
    items: any[];
    /**
     * stacked?: boolean
     * Set stacked or horizontal chips depending on value.
     * Defaults to false.
     */
    stacked: boolean;
    /**
     * inputPosition?: 'before' | 'after'
     * Set input position before or after the chips.
     * Defaults to 'after'.
     */
    inputPosition: 'before' | 'after';
    /**
     * requireMatch?: boolean
     * Blocks custom inputs and only allows selections from the autocomplete list.
     */
    requireMatch: boolean;
    /**
     * required?: boolean
     * Value is set to true if at least one chip is needed
     * Defaults to false
     */
    required: boolean;
    /**
     * chipAddition?: boolean
     * Disables the ability to add chips. When setting disabled as true, this will be overriden.
     * Defaults to true.
     */
    chipAddition: boolean;
    /**
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * States if a chip can be added and if the input is available
     */
    readonly canAddChip: boolean;
    /**
     * chipRemoval?: boolean
     * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
     * When setting disabled as true, this will be overriden to false.
     */
    chipRemoval: boolean;
    /**
     * Checks if not in disabled state and if chipRemoval is set to 'true'
     * States if a chip can be removed
     */
    readonly canRemoveChip: boolean;
    /**
     * returns the display placeholder
     */
    readonly displayPlaceHolder: string;
    /**
     * placeholder?: string
     * Placeholder for the autocomplete input.
     */
    placeholder: string;
    /**
     * debounce?: number
     * Debounce timeout between keypresses. Defaults to 200.
     */
    debounce: number;
    /**
     * color?: 'primary' | 'accent' | 'warn'
     * Sets the color for the input and focus/selected state of the chips.
     * Defaults to 'primary'
     */
    color: 'primary' | 'accent' | 'warn';
    /**
     * add?: function
     * Method to be executed when a chip is added.
     * Sends chip value as event.
     */
    onAdd: EventEmitter<any>;
    /**
     * remove?: function
     * Method to be executed when a chip is removed.
     * Sends chip value as event.
     */
    onRemove: EventEmitter<any>;
    /**
     * inputChange?: function
     * Method to be executed when the value in the autocomplete input changes.
     * Sends string value as event.
     */
    onInputChange: EventEmitter<string>;
    /**
     * chipFocus?: function
     * Method to be executed when a chip is focused.
     * Sends chip value as event.
     */
    onChipFocus: EventEmitter<any>;
    /**
     * blur?: function
     * Method to be executed when a chip is blurred.
     * Sends chip value as event.
     */
    onChipBlur: EventEmitter<any>;
    /**
     * Hostbinding to set the a11y of the TdChipsComponent depending on its state
     */
    readonly tabIndex: number;
    constructor(_elementRef: ElementRef, _renderer: Renderer2, _document: any, _changeDetectorRef: ChangeDetectorRef);
    /**
     * compareWith? function
     * Function used to check whether a chip value already exists.
     * Defaults to strict equality comparison ===
     */
    compareWith: (o1: any, o2: any) => boolean;
    /**
     * Listens to host focus event to act on it
     */
    focusListener(event: FocusEvent): void;
    /**
     * Listens to host mousedown event to act on it
     */
    mousedownListener(event: FocusEvent): void;
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     */
    clickListener(event: Event): void;
    /**
     * Listens to host keydown event to act on it depending on the keypress
     */
    keydownListener(event: KeyboardEvent): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    _setInternalClick(): void;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     */
    _handleAddChip(): boolean;
    /**
     * Method thats exectuted when trying to add a value as chip
     * returns 'true' if successful, 'false' if it fails.
     */
    addChip(value: any): boolean;
    /**
     * Method that is executed when trying to remove a chip.
     * returns 'true' if successful, 'false' if it fails.
     */
    removeChip(index: number): boolean;
    /**
     * Sets blur of chip and sends out event
     */
    _handleChipBlur(event: FocusEvent, value: any): void;
    /**
     * Sets focus of chip and sends out event
     */
    _handleChipFocus(event: FocusEvent, value: any): void;
    _handleFocus(): boolean;
    /**
     * Sets focus state of the component
     */
    setFocusedState(): void;
    /**
     * Removes focus state of the component
     */
    removeFocusedState(): void;
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     */
    focus(): void;
    /**
     * Passes relevant input key presses.
     */
    _inputKeydown(event: KeyboardEvent): void;
    /**
     * Passes relevant chip key presses.
     */
    _chipKeydown(event: KeyboardEvent, index: number): void;
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     */
    _removeInputDisplay(): string;
    /**
     * Method to open the autocomplete manually if its not already opened
     */
    _openAutocomplete(): void;
    /**
     * Method to close the autocomplete manually if its not already closed
     */
    _closeAutocomplete(): void;
    /**
     * Get total of chips
     */
    readonly _totalChips: number;
    /**
     * Method to focus a desired chip by index
     */
    private _focusChip;
    /** Method to focus first chip */
    private _focusFirstChip;
    /** Method to focus last chip */
    private _focusLastChip;
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     */
    private _toggleInput;
    /**
     * Sets first option as active to let the user know which one will be added when pressing enter
     * Only if [requireMatch] has been set
     */
    private _setFirstOptionActive;
    /**
     * Watches clicks outside of the component to remove the focus
     * The autocomplete panel is considered inside the component so we
     * need to use a flag to find out when its clicked.
     */
    private _watchOutsideClick;
}
