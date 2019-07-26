import { Renderer2, ElementRef } from '@angular/core';
export declare type TdDataTableCellAlign = 'start' | 'center' | 'end';
export declare class TdDataTableCellComponent {
    private _elementRef;
    private _renderer;
    private _align;
    /**
     * numeric?: boolean
     * Makes cell follow the numeric data-table specs.
     * Defaults to 'false'
     */
    numeric: boolean;
    /**
     * align?: 'start' | 'center' | 'end'
     * Makes cell content align on demand
     * Defaults to 'left', overrides numeric
     */
    align: TdDataTableCellAlign;
    readonly bindNumeric: boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
