/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var TdConfirmDialogComponent = /** @class */ (function () {
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(false);
    };
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(true);
    };
    TdConfirmDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-confirm-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                    styles: [".td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdConfirmDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    return TdConfirmDialogComponent;
}());
export { TdConfirmDialogComponent };
if (false) {
    /** @type {?} */
    TdConfirmDialogComponent.prototype.title;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.message;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdConfirmDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJkaWFsb2dzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQ7SUFXRSxrQ0FBb0IsVUFBa0Q7UUFBbEQsZUFBVSxHQUFWLFVBQVUsQ0FBd0M7UUFIdEUsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsaUJBQVksR0FBVyxRQUFRLENBQUM7SUFFeUMsQ0FBQzs7OztJQUUxRSx5Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQseUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QiwybUJBQThDOztpQkFFL0M7Ozs7Z0JBTlEsWUFBWTs7SUFzQnJCLCtCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FmWSx3QkFBd0I7OztJQUNuQyx5Q0FBYzs7SUFDZCwyQ0FBZ0I7O0lBQ2hCLGdEQUFnQzs7SUFDaEMsZ0RBQWdDOztJQUVwQiw4Q0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNvbmZpcm0tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uOiBzdHJpbmcgPSAnQ0FOQ0VMJztcbiAgYWNjZXB0QnV0dG9uOiBzdHJpbmcgPSAnQUNDRVBUJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+KSB7fVxuXG4gIGNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoZmFsc2UpO1xuICB9XG5cbiAgYWNjZXB0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgfVxufVxuIl19