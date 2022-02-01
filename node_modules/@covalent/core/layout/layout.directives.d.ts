import { Renderer2, ElementRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { BaseLayoutToggleDirective } from './layout-toggle.class';
export declare class TdLayoutToggleDirective extends BaseLayoutToggleDirective {
    set tdLayoutToggle(tdLayoutToggle: boolean);
    constructor(layout: TdLayoutComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutCloseDirective extends BaseLayoutToggleDirective {
    set tdLayoutClose(tdLayoutClose: boolean);
    constructor(layout: TdLayoutComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutOpenDirective extends BaseLayoutToggleDirective {
    set tdLayoutClose(tdLayoutOpen: boolean);
    constructor(layout: TdLayoutComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
