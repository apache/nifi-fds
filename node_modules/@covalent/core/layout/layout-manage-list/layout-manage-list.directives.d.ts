import { Renderer2, ElementRef } from '@angular/core';
import { TdLayoutManageListComponent } from './layout-manage-list.component';
import { BaseLayoutToggleDirective } from '../layout-toggle.class';
export declare class TdLayoutManageListToggleDirective extends BaseLayoutToggleDirective {
    set tdLayoutManageListToggle(tdLayoutManageListToggle: boolean);
    constructor(layout: TdLayoutManageListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutManageListCloseDirective extends BaseLayoutToggleDirective {
    set tdLayoutManageListClose(tdLayoutManageListClose: boolean);
    constructor(layout: TdLayoutManageListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
export declare class TdLayoutManageListOpenDirective extends BaseLayoutToggleDirective {
    set tdLayoutManageListOpen(tdLayoutManageListOpen: boolean);
    constructor(layout: TdLayoutManageListComponent, renderer: Renderer2, elementRef: ElementRef);
    onClick(): void;
}
