/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export class TdConfirmDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close(false);
    }
    /**
     * @return {?}
     */
    accept() {
        this._dialogRef.close(true);
    }
}
TdConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-confirm-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdConfirmDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJkaWFsb2dzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPeEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQU1uQyxZQUFvQixVQUFrRDtRQUFsRCxlQUFVLEdBQVYsVUFBVSxDQUF3QztRQUh0RSxpQkFBWSxHQUFXLFFBQVEsQ0FBQztRQUNoQyxpQkFBWSxHQUFXLFFBQVEsQ0FBQztJQUV5QyxDQUFDOzs7O0lBRTFFLE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsMm1CQUE4Qzs7YUFFL0M7Ozs7WUFOUSxZQUFZOzs7O0lBUW5CLHlDQUFjOztJQUNkLDJDQUFnQjs7SUFDaEIsZ0RBQWdDOztJQUNoQyxnREFBZ0M7O0lBRXBCLDhDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICdDQU5DRUwnO1xuICBhY2NlcHRCdXR0b246IHN0cmluZyA9ICdBQ0NFUFQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4pIHt9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZShmYWxzZSk7XG4gIH1cblxuICBhY2NlcHQoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICB9XG59XG4iXX0=