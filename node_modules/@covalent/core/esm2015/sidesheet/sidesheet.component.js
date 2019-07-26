/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>"
            }] }
];
export class TdSidesheetComponent {
}
TdSidesheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet',
                template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>",
                encapsulation: ViewEncapsulation.None,
                styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}td-sidesheet{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;width:100%;min-height:100%;height:100%}td-sidesheet td-sidesheet-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;padding:20px 16px;font-size:18px}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-webkit-box-flex:1;-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:transparent!important}td-sidesheet td-sidesheet-header .mat-icon-button{width:24px;height:24px;line-height:21px}td-sidesheet td-sidesheet-actions{padding:8px;display:block}td-sidesheet .td-sidesheet-content-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NpZGVzaGVldC8iLCJzb3VyY2VzIjpbInNpZGVzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0YsTUFBTSxPQUFPLDJCQUEyQjs7O1lBSHZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOztBQU1ELE1BQU0sT0FBTyx5QkFBeUI7OztZQUhyQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7QUFXRCxNQUFNLE9BQU8sMkJBQTJCO0lBUnhDO1FBU1csVUFBSyxHQUFvQixPQUFPLENBQUM7SUFDNUMsQ0FBQzs7O1lBVkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7O2dCQUVoQyxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsaUJBQWlCO29CQUN0QyxxQkFBcUIsRUFBRSxtQkFBbUI7aUJBQzNDO2FBQ0Y7OztvQkFFRSxLQUFLOzs7O0lBQU4sNENBQTBDOztBQU81QyxNQUFNLE9BQU8sMEJBQTBCOzs7WUFKdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHVKQUE4QzthQUMvQzs7QUFTRCxNQUFNLE9BQU8sb0JBQW9COzs7WUFOaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qiw4WEFBeUM7Z0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OzJCQUVFLFlBQVksU0FBQywwQkFBMEI7MkJBQ3ZDLFlBQVksU0FBQywyQkFBMkI7Ozs7SUFEekMsNENBQW1GOztJQUNuRiw0Q0FBcUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0LWNvbnRlbnQnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldENvbnRlbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0LXRpdGxlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRUaXRsZURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQtYWN0aW9ucycsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbGlnbi1lbmRdJzogJ2FsaWduID09PSBcImVuZFwiJyxcbiAgICAnW2NsYXNzLmFsaWduLXN0YXJ0XSc6ICdhbGlnbiA9PT0gXCJzdGFydFwiJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgYWxpZ246ICdzdGFydCcgfCAnZW5kJyA9ICdzdGFydCc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXNpZGVzaGVldC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVzaGVldC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldEhlYWRlckNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZXNoZWV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZXNoZWV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2lkZXNoZWV0Q29tcG9uZW50IHtcbiAgQENvbnRlbnRDaGlsZChUZFNpZGVzaGVldEhlYWRlckNvbXBvbmVudCkgaGVhZGVyRXhpc3RzOiBUZFNpZGVzaGVldEhlYWRlckNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChUZFNpZGVzaGVldEFjdGlvbnNEaXJlY3RpdmUpIGFjdGlvbnNFeGlzdDogVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlO1xufVxuIl19