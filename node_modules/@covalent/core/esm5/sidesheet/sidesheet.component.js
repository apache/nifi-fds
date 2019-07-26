/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ContentChild, Directive, Input, ViewEncapsulation } from '@angular/core';
var TdSidesheetContentDirective = /** @class */ (function () {
    function TdSidesheetContentDirective() {
    }
    TdSidesheetContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'td-sidesheet-content',
                },] }
    ];
    return TdSidesheetContentDirective;
}());
export { TdSidesheetContentDirective };
var TdSidesheetTitleDirective = /** @class */ (function () {
    function TdSidesheetTitleDirective() {
    }
    TdSidesheetTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'td-sidesheet-title',
                },] }
    ];
    return TdSidesheetTitleDirective;
}());
export { TdSidesheetTitleDirective };
var TdSidesheetActionsDirective = /** @class */ (function () {
    function TdSidesheetActionsDirective() {
        this.align = 'start';
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
    return TdSidesheetActionsDirective;
}());
export { TdSidesheetActionsDirective };
if (false) {
    /** @type {?} */
    TdSidesheetActionsDirective.prototype.align;
}
var TdSidesheetHeaderComponent = /** @class */ (function () {
    function TdSidesheetHeaderComponent() {
    }
    TdSidesheetHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-sidesheet-header',
                    template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>"
                }] }
    ];
    return TdSidesheetHeaderComponent;
}());
export { TdSidesheetHeaderComponent };
var TdSidesheetComponent = /** @class */ (function () {
    function TdSidesheetComponent() {
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
    return TdSidesheetComponent;
}());
export { TdSidesheetComponent };
if (false) {
    /** @type {?} */
    TdSidesheetComponent.prototype.headerExists;
    /** @type {?} */
    TdSidesheetComponent.prototype.actionsExist;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NpZGVzaGVldC8iLCJzb3VyY2VzIjpbInNpZGVzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0Y7SUFBQTtJQUcwQyxDQUFDOztnQkFIMUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7aUJBQ2pDOztJQUN5QyxrQ0FBQztDQUFBLEFBSDNDLElBRzJDO1NBQTlCLDJCQUEyQjtBQUV4QztJQUFBO0lBR3dDLENBQUM7O2dCQUh4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7O0lBQ3VDLGdDQUFDO0NBQUEsQUFIekMsSUFHeUM7U0FBNUIseUJBQXlCO0FBRXRDO0lBQUE7UUFTVyxVQUFLLEdBQW9CLE9BQU8sQ0FBQztJQUM1QyxDQUFDOztnQkFWQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjs7b0JBRWhDLElBQUksRUFBRTt3QkFDSixtQkFBbUIsRUFBRSxpQkFBaUI7d0JBQ3RDLHFCQUFxQixFQUFFLG1CQUFtQjtxQkFDM0M7aUJBQ0Y7Ozt3QkFFRSxLQUFLOztJQUNSLGtDQUFDO0NBQUEsQUFWRCxJQVVDO1NBRlksMkJBQTJCOzs7SUFDdEMsNENBQTBDOztBQUc1QztJQUFBO0lBSXlDLENBQUM7O2dCQUp6QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsdUpBQThDO2lCQUMvQzs7SUFDd0MsaUNBQUM7Q0FBQSxBQUoxQyxJQUkwQztTQUE3QiwwQkFBMEI7QUFFdkM7SUFBQTtJQVNBLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsOFhBQXlDO29CQUV6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7K0JBRUUsWUFBWSxTQUFDLDBCQUEwQjsrQkFDdkMsWUFBWSxTQUFDLDJCQUEyQjs7SUFDM0MsMkJBQUM7Q0FBQSxBQVRELElBU0M7U0FIWSxvQkFBb0I7OztJQUMvQiw0Q0FBbUY7O0lBQ25GLDRDQUFxRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQtY29udGVudCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2lkZXNoZWV0Q29udGVudERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZC1zaWRlc2hlZXQtdGl0bGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldFRpdGxlRGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkLXNpZGVzaGVldC1hY3Rpb25zJyxcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFsaWduLWVuZF0nOiAnYWxpZ24gPT09IFwiZW5kXCInLFxuICAgICdbY2xhc3MuYWxpZ24tc3RhcnRdJzogJ2FsaWduID09PSBcInN0YXJ0XCInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUZFNpZGVzaGVldEFjdGlvbnNEaXJlY3RpdmUge1xuICBASW5wdXQoKSBhbGlnbjogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0Jztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc2lkZXNoZWV0LWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZXNoZWV0LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2lkZXNoZWV0SGVhZGVyQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLXNpZGVzaGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlc2hlZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlc2hlZXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGRTaWRlc2hlZXRDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkKFRkU2lkZXNoZWV0SGVhZGVyQ29tcG9uZW50KSBoZWFkZXJFeGlzdHM6IFRkU2lkZXNoZWV0SGVhZGVyQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKFRkU2lkZXNoZWV0QWN0aW9uc0RpcmVjdGl2ZSkgYWN0aW9uc0V4aXN0OiBUZFNpZGVzaGVldEFjdGlvbnNEaXJlY3RpdmU7XG59XG4iXX0=