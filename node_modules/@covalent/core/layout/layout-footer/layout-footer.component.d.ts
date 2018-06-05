import { Renderer2, ElementRef } from '@angular/core';
export declare class TdLayoutFooterComponent {
    private _renderer;
    private _elementRef;
    private _color;
    /**
     * color?: string
     *
     * Optional color option: primary | accent | warn.
     */
    color: 'primary' | 'accent' | 'warn';
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
}
