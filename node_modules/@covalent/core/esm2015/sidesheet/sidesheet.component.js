/**
 * @fileoverview added by tsickle
 * Generated from: sidesheet.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Directive, Input, ViewEncapsulation } from '@angular/core';
export class TdSidesheetContentDirective {
}
TdSidesheetContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-content',
            },] }
];
export class TdSidesheetTitleDirective {
}
TdSidesheetTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-title',
            },] }
];
export class TdSidesheetActionsDirective {
    constructor() {
        this.align = 'start';
    }
}
TdSidesheetActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-actions',
                /* tslint:disable-next-line */
                host: {
                    '[class.align-end]': 'align === "end"',
                    '[class.align-start]': 'align === "start"',
                },
            },] }
];
TdSidesheetActionsDirective.propDecorators = {
    align: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdSidesheetActionsDirective.prototype.align;
}
export class TdSidesheetHeaderComponent {
}
TdSidesheetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet-header',
                template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>\n"
            }] }
];
export class TdSidesheetComponent {
}
TdSidesheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet',
                template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>\n",
                // tslint:disable-next-line:use-component-view-encapsulation
                encapsulation: ViewEncapsulation.None,
                styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{box-sizing:border-box;display:-ms-flexbox;display:flex}td-sidesheet{-ms-flex-direction:column;flex-direction:column}td-sidesheet td-sidesheet-header{-ms-flex-direction:row;flex-direction:row}td-sidesheet{height:100%;margin:0;min-height:100%;width:100%}td-sidesheet td-sidesheet-header{-ms-flex-align:center;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;justify-content:flex-start;max-width:100%}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header{font-size:18px;padding:20px 16px;width:100%}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:rgba(0,0,0,0)!important}td-sidesheet td-sidesheet-header .mat-icon-button{height:24px;line-height:21px;width:24px}td-sidesheet td-sidesheet-actions{display:block;padding:8px}td-sidesheet .td-sidesheet-content-wrapper{-ms-flex:1;flex:1;overflow-y:auto;position:relative}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
            }] }
];
TdSidesheetComponent.propDecorators = {
    headerExists: [{ type: ContentChild, args: [TdSidesheetHeaderComponent,] }],
    actionsExist: [{ type: ContentChild, args: [TdSidesheetActionsDirective,] }]
};
if (false) {
    /** @type {?} */
    TdSidesheetComponent.prototype.headerExists;
    /** @type {?} */
    TdSidesheetComponent.prototype.actionsExist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9zaWRlc2hlZXQvIiwic291cmNlcyI6WyJzaWRlc2hlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs3RixNQUFNLE9BQU8sMkJBQTJCOzs7WUFIdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7O0FBTUQsTUFBTSxPQUFPLHlCQUF5Qjs7O1lBSHJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztBQVdELE1BQU0sT0FBTywyQkFBMkI7SUFSeEM7UUFTVyxVQUFLLEdBQW9CLE9BQU8sQ0FBQztJQUM1QyxDQUFDOzs7WUFWQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjs7Z0JBRWhDLElBQUksRUFBRTtvQkFDSixtQkFBbUIsRUFBRSxpQkFBaUI7b0JBQ3RDLHFCQUFxQixFQUFFLG1CQUFtQjtpQkFDM0M7YUFDRjs7O29CQUVFLEtBQUs7Ozs7SUFBTiw0Q0FBMEM7O0FBTzVDLE1BQU0sT0FBTywwQkFBMEI7OztZQUp0QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IseUpBQThDO2FBQy9DOztBQVVELE1BQU0sT0FBTyxvQkFBb0I7OztZQVBoQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGdZQUF5Qzs7Z0JBR3pDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OzJCQUVFLFlBQVksU0FBQywwQkFBMEI7MkJBQ3ZDLFlBQVksU0FBQywyQkFBMkI7Ozs7SUFEekMsNENBQW1GOztJQUNuRiw0Q0FBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0LWNvbnRlbnQnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldENvbnRlbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0LXRpdGxlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRUaXRsZURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQtYWN0aW9ucycsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbGlnbi1lbmRdJzogJ2FsaWduID09PSBcImVuZFwiJyxcbiAgICAnW2NsYXNzLmFsaWduLXN0YXJ0XSc6ICdhbGlnbiA9PT0gXCJzdGFydFwiJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgYWxpZ246ICdzdGFydCcgfCAnZW5kJyA9ICdzdGFydCc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXNpZGVzaGVldC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVzaGVldC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldEhlYWRlckNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZXNoZWV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZXNoZWV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtY29tcG9uZW50LXZpZXctZW5jYXBzdWxhdGlvblxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldENvbXBvbmVudCB7XG4gIEBDb250ZW50Q2hpbGQoVGRTaWRlc2hlZXRIZWFkZXJDb21wb25lbnQpIGhlYWRlckV4aXN0czogVGRTaWRlc2hlZXRIZWFkZXJDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlKSBhY3Rpb25zRXhpc3Q6IFRkU2lkZXNoZWV0QWN0aW9uc0RpcmVjdGl2ZTtcbn1cbiJdfQ==