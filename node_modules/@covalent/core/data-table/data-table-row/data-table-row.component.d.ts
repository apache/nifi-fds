import { Renderer2, ElementRef } from '@angular/core';
export declare class TdDataTableColumnRowComponent {
    protected _elementRef: ElementRef;
    protected _renderer: Renderer2;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
export declare class TdDataTableRowComponent {
    private _elementRef;
    private _renderer;
    private _selected;
    set selected(selected: boolean);
    get selected(): boolean;
    get height(): number;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    /**
     * Listening to click event to explicitly focus the row element.
     */
    clickListener(): void;
    focus(): void;
}
