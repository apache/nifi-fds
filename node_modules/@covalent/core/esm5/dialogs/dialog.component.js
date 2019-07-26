/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, ContentChildren, QueryList } from '@angular/core';
var TdDialogTitleDirective = /** @class */ (function () {
    function TdDialogTitleDirective() {
    }
    TdDialogTitleDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-title' },] }
    ];
    return TdDialogTitleDirective;
}());
export { TdDialogTitleDirective };
var TdDialogContentDirective = /** @class */ (function () {
    function TdDialogContentDirective() {
    }
    TdDialogContentDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-content' },] }
    ];
    return TdDialogContentDirective;
}());
export { TdDialogContentDirective };
var TdDialogActionsDirective = /** @class */ (function () {
    function TdDialogActionsDirective() {
    }
    TdDialogActionsDirective.decorators = [
        { type: Directive, args: [{ selector: 'td-dialog-actions' },] }
    ];
    return TdDialogActionsDirective;
}());
export { TdDialogActionsDirective };
var TdDialogComponent = /** @class */ (function () {
    function TdDialogComponent() {
    }
    /**
     * @return {?}
     */
    TdDialogComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    };
    TdDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-dialog',
                    template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                    styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                }] }
    ];
    TdDialogComponent.propDecorators = {
        dialogTitle: [{ type: ContentChildren, args: [TdDialogTitleDirective,] }],
        dialogContent: [{ type: ContentChildren, args: [TdDialogContentDirective,] }],
        dialogActions: [{ type: ContentChildren, args: [TdDialogActionsDirective,] }]
    };
    return TdDialogComponent;
}());
export { TdDialogComponent };
if (false) {
    /** @type {?} */
    TdDialogComponent.prototype.dialogTitle;
    /** @type {?} */
    TdDialogComponent.prototype.dialogContent;
    /** @type {?} */
    TdDialogComponent.prototype.dialogActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiZGlhbG9ncy9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUVuRztJQUFBO0lBQ3FDLENBQUM7O2dCQURyQyxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUM7O0lBQ0gsNkJBQUM7Q0FBQSxBQUR0QyxJQUNzQztTQUF6QixzQkFBc0I7QUFFbkM7SUFBQTtJQUN1QyxDQUFDOztnQkFEdkMsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFDOztJQUNILCtCQUFDO0NBQUEsQUFEeEMsSUFDd0M7U0FBM0Isd0JBQXdCO0FBRXJDO0lBQUE7SUFDdUMsQ0FBQzs7Z0JBRHZDLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBQzs7SUFDSCwrQkFBQztDQUFBLEFBRHhDLElBQ3dDO1NBQTNCLHdCQUF3QjtBQUVyQztJQUFBO0lBdUJBLENBQUM7Ozs7SUFaQyw4Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHFnQkFBc0M7O2lCQUV2Qzs7OzhCQUdFLGVBQWUsU0FBQyxzQkFBc0I7Z0NBQ3RDLGVBQWUsU0FBQyx3QkFBd0I7Z0NBQ3hDLGVBQWUsU0FBQyx3QkFBd0I7O0lBYzNDLHdCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FsQlksaUJBQWlCOzs7SUFFNUIsd0NBQXdGOztJQUN4RiwwQ0FBOEY7O0lBQzlGLDBDQUE4RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ3RkLWRpYWxvZy10aXRsZSd9KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICd0ZC1kaWFsb2ctY29udGVudCd9KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ3RkLWRpYWxvZy1hY3Rpb25zJ30pXG5leHBvcnQgY2xhc3MgVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZERpYWxvZ1RpdGxlRGlyZWN0aXZlKSBkaWFsb2dUaXRsZTogUXVlcnlMaXN0PFRkRGlhbG9nVGl0bGVEaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSkgZGlhbG9nQ29udGVudDogUXVlcnlMaXN0PFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlKSBkaWFsb2dBY3Rpb25zOiBRdWVyeUxpc3Q8VGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nVGl0bGUubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgdGQtZGlhbG9nLXRpdGxlIGNvbXBvbmVudCBhdCBpbiB0ZC1kaWFsb2cuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpYWxvZ0NvbnRlbnQubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgdGQtZGlhbG9nLWNvbnRlbnQgY29tcG9uZW50IGF0IGluIHRkLWRpYWxvZy4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nQWN0aW9ucy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctYWN0aW9ucyBjb21wb25lbnQgYXQgaW4gdGQtZGlhbG9nLicpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=