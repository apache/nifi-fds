import { Renderer2, ElementRef } from '@angular/core';
import { TdLayoutNavListComponent } from './layout-nav-list.component';
import { BaseLayoutToggleDirective } from '../layout-toggle.class';
export declare class TdLayoutNavListToggleDirective extends BaseLayoutToggleDirective {
    set tdLayoutNavListToggle(tdLayoutNavListToggle: boolean);
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutNavListCloseDirective extends BaseLayoutToggleDirective {
    set tdLayoutNavListClose(tdLayoutNavListClose: boolean);
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutNavListOpenDirective extends BaseLayoutToggleDirective {
    set tdLayoutNavListOpen(tdLayoutNavListOpen: boolean);
    constructor(layout: TdLayoutNavListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
