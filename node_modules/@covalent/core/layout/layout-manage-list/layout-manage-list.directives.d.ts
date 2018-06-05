import { Renderer2, ElementRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { LayoutToggle } from '../layout-toggle.class';
export declare class TdLayoutManageListToggleDirective extends LayoutToggle {
    tdLayoutManageListToggle: boolean;
    constructor(layout: TdLayoutManageListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutManageListCloseDirective extends LayoutToggle {
    tdLayoutManageListClose: boolean;
    constructor(layout: TdLayoutManageListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutManageListOpenDirective extends LayoutToggle {
    tdLayoutManageListOpen: boolean;
    constructor(layout: TdLayoutManageListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
