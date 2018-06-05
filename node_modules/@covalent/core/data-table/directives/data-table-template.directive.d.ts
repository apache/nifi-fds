import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
export declare class TdDataTableTemplateDirective extends TemplatePortalDirective {
    tdDataTableTemplate: string;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
