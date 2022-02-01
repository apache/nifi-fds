/**
 * @fileoverview added by tsickle
 * Generated from: dynamic-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * @record
 */
export function IMenuTrigger() { }
if (false) {
    /** @type {?|undefined} */
    IMenuTrigger.prototype.id;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.text;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.icon;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.svgIcon;
    /** @type {?|undefined} */
    IMenuTrigger.prototype.iconClasses;
}
/**
 * @record
 */
export function IMenuItem() { }
if (false) {
    /** @type {?|undefined} */
    IMenuItem.prototype.id;
    /** @type {?} */
    IMenuItem.prototype.text;
    /** @type {?|undefined} */
    IMenuItem.prototype.icon;
    /** @type {?|undefined} */
    IMenuItem.prototype.svgIcon;
    /** @type {?|undefined} */
    IMenuItem.prototype.iconClasses;
    /** @type {?|undefined} */
    IMenuItem.prototype.children;
    /** @type {?|undefined} */
    IMenuItem.prototype.link;
    /** @type {?|undefined} */
    IMenuItem.prototype.newTab;
    /** @type {?|undefined} */
    IMenuItem.prototype.action;
}
/**
 * @record
 */
export function ITdDynamicMenuLinkClickEvent() { }
if (false) {
    /** @type {?} */
    ITdDynamicMenuLinkClickEvent.prototype.text;
    /** @type {?} */
    ITdDynamicMenuLinkClickEvent.prototype.action;
}
export class TdDynamicMenuComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitClicked(event) {
        this.itemClicked.emit(event);
    }
}
TdDynamicMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu',
                template: "<button *ngIf=\"!trigger.text\" mat-icon-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n</button>\n<button *ngIf=\"trigger.text\" mat-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n  <span *ngIf=\"trigger.text\">\n    {{ trigger.text }}\n  </span>\n</button>\n\n<td-dynamic-menu-item #menu [items]=\"items\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-item>\n",
                styles: [""]
            }] }
];
TdDynamicMenuComponent.propDecorators = {
    trigger: [{ type: Input }],
    items: [{ type: Input }],
    itemClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuComponent.prototype.trigger;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuComponent.prototype.itemClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9keW5hbWljLW1lbnUvIiwic291cmNlcyI6WyJkeW5hbWljLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUd2RSxrQ0FNQzs7O0lBTEMsMEJBQVk7O0lBQ1osNEJBQWM7O0lBQ2QsNEJBQWM7O0lBQ2QsK0JBQWlCOztJQUNqQixtQ0FBdUI7Ozs7O0FBUXpCLCtCQWVDOzs7SUFkQyx1QkFBWTs7SUFDWix5QkFBYTs7SUFDYix5QkFBYzs7SUFDZCw0QkFBaUI7O0lBQ2pCLGdDQUF1Qjs7SUFHdkIsNkJBQXVCOztJQUV2Qix5QkFBYzs7SUFDZCwyQkFBaUI7O0lBR2pCLDJCQUFnQjs7Ozs7QUFJbEIsa0RBR0M7OztJQUZDLDRDQUFhOztJQUNiLDhDQUFlOztBQVFqQixNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBU1ksZ0JBQVcsR0FBK0MsSUFBSSxZQUFZLEVBQWdDLENBQUM7SUFLdkgsQ0FBQzs7Ozs7SUFIQyxXQUFXLENBQUMsS0FBbUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBRTNCLHUxQkFBNEM7O2FBQzdDOzs7c0JBRUUsS0FBSztvQkFDTCxLQUFLOzBCQUVMLE1BQU07Ozs7SUFIUCx5Q0FBK0I7O0lBQy9CLHVDQUE0Qjs7SUFFNUIsNkNBQXFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gVHJpZ2dlciBidXR0b24gbGF1bmNoZXMgdG9wIGxldmVsIG1lbnUuIE11c3Qgc3BlY2lmeSB0ZXh0IGFuZC9vciBpY29uLlxuZXhwb3J0IGludGVyZmFjZSBJTWVudVRyaWdnZXIge1xuICBpZD86IHN0cmluZzsgLy8gT3B0aW9uYWwgaWRlbnRpZmllclxuICB0ZXh0Pzogc3RyaW5nOyAvLyBUZXh0IHRvIGRpc3BsYXkgb24gYnV0dG9uXG4gIGljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGljb25cbiAgc3ZnSWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgc3ZnSWNvblxuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdOyAvLyBPcHRpb25hbCBzdHlsaW5nIGNsYXNzZXNcbn1cblxuLy8gTWVudSBpdGVtcyBjYW4gc2VydmUgb25lIG9mIGZvdXIgcm9sZXM6XG4vLyAtIFN1Ym1lbnUgdHJpZ2dlciAoaGFzIGNoaWxkcmVuIHByb3BlcnR5KVxuLy8gLSBVUkwgbGluayAoaGFzIGxpbmsgcHJvcGVydHkpXG4vLyAtIEFjdGlvbiBsaW5rIChoYXMgYWN0aW9uIHByb3BlcnR5KVxuLy8gLSBHcm91cGluZyBsYWJlbCAoaGFzIG5laXRoZXIgY2hpbGRyZW4sIGxpbmsgb3IgYWN0aW9uIHByb3BlcnRpZXMpXG5leHBvcnQgaW50ZXJmYWNlIElNZW51SXRlbSB7XG4gIGlkPzogc3RyaW5nOyAvLyBPcHRpb25hbCBpZGVudGlmaWVyXG4gIHRleHQ6IHN0cmluZzsgLy8gRGlzcGxheSB0ZXh0XG4gIGljb24/OiBzdHJpbmc7IC8vIE9wdGlvbmFsIGljb25cbiAgc3ZnSWNvbj86IHN0cmluZzsgLy8gT3B0aW9uYWwgc3ZnSWNvblxuICBpY29uQ2xhc3Nlcz86IHN0cmluZ1tdOyAvLyBPcHRpb25hbCBzdHlsaW5nIGNsYXNzZXNcbiAgLy8gSWYgY2hpbGRyZW4gcHJvdmlkZWQsIGl0ZW0gaXMgYSBzdWJtZW51IHRyaWdnZXJcbiAgLy8gUmVwcmVzZW50cyB0aGUgY29udGVudHMgb2YgdGhlIHN1Ym1lbnVcbiAgY2hpbGRyZW4/OiBJTWVudUl0ZW1bXTtcbiAgLy8gSWYgbGluayBwcm92aWRlZCwgaXRlbSBpcyBhIFVSTCBsaW5rXG4gIGxpbms/OiBzdHJpbmc7IC8vIGhyZWYgKHJlbGF0aXZlIG9yIGZ1bGx5IHF1YWxpZmllZCkuXG4gIG5ld1RhYj86IGJvb2xlYW47IC8vIEluZGljYXRlcyB3aGVyZSBVUkwgc2hvdWxkIGJlIGRpc3BsYXllZCwgY3VycmVudCBvciBuZXcgYnJvd3NlciB0YWJcbiAgLy8gSWYgYWN0aW9uIHByb3ZpZGVkLCBpdGVtIGlzIGFuIGFjdGlvbiBsaW5rXG4gIC8vIEEgY2xpY2sgb24gdGhpcyBpdGVtIHdpbGwgZW1pdCBpdGVtQ2xpY2tlZCBldmVudFxuICBhY3Rpb24/OiBzdHJpbmc7XG59XG5cbi8vIENsaWNrIGFjdGlvbiBldmVudCBwYXlsb2FkIGRlcml2ZWQgZnJvbSBJTWVudUl0ZW1cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudCB7XG4gIHRleHQ6IHN0cmluZztcbiAgYWN0aW9uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWR5bmFtaWMtbWVudScsXG4gIHN0eWxlVXJsczogWydkeW5hbWljLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtbWVudS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRHluYW1pY01lbnVDb21wb25lbnQge1xuICBASW5wdXQoKSB0cmlnZ2VyOiBJTWVudVRyaWdnZXI7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJTWVudUl0ZW1bXTtcblxuICBAT3V0cHV0KCkgaXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudD4oKTtcblxuICBlbWl0Q2xpY2tlZChldmVudDogSVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUNsaWNrZWQuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==