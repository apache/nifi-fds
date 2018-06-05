import { Renderer2, ElementRef } from '@angular/core';
export declare class TdDataTableCellComponent {
    private _elementRef;
    private _renderer;
    /**
     * numeric?: boolean
     * Makes cell follow the numeric data-table specs.
     * Defaults to 'false'
     */
    numeric: boolean;
    readonly bindNumeric: boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
}
