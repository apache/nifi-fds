import { ChangeDetectorRef, TemplateRef, OnInit, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { ICanDisable } from '@covalent/core/common';
export declare class TdTabOptionBase {
    _viewContainerRef: ViewContainerRef;
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_viewContainerRef: ViewContainerRef, _changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdTabOptionMixinBase: (new (...args: any[]) => ICanDisable) & typeof TdTabOptionBase;
export declare class TdTabOptionComponent extends _TdTabOptionMixinBase implements ICanDisable, OnInit {
    private _contentPortal;
    get content(): TemplatePortal<any>;
    _content: TemplateRef<any>;
    /**
     * Value to which the option will be binded to.
     */
    value: any;
    constructor(_viewContainerRef: ViewContainerRef, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
}
