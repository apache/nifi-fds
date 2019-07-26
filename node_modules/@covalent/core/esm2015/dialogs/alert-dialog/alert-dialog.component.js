/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export class TdAlertDialogComponent {
    /**
     * @param {?} _dialogRef
     */
    constructor(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    /**
     * @return {?}
     */
    close() {
        this._dialogRef.close();
    }
}
TdAlertDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-alert-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-message{word-break:break-word}"]
            }] }
];
/** @nocollapse */
TdAlertDialogComponent.ctorParameters = () => [
    { type: MatDialogRef }
];
if (false) {
    /** @type {?} */
    TdAlertDialogComponent.prototype.title;
    /** @type {?} */
    TdAlertDialogComponent.prototype.message;
    /** @type {?} */
    TdAlertDialogComponent.prototype.closeButton;
    /** @type {?} */
    TdAlertDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiZGlhbG9ncy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPeEQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQUtqQyxZQUFvQixVQUFnRDtRQUFoRCxlQUFVLEdBQVYsVUFBVSxDQUFzQztRQUZwRSxnQkFBVyxHQUFXLE9BQU8sQ0FBQztJQUV5QyxDQUFDOzs7O0lBRXhFLEtBQUs7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw2VkFBNEM7O2FBRTdDOzs7O1lBTlEsWUFBWTs7OztJQVFuQix1Q0FBYzs7SUFDZCx5Q0FBZ0I7O0lBQ2hCLDZDQUE4Qjs7SUFFbEIsNENBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1hbGVydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJyBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBjbG9zZUJ1dHRvbjogc3RyaW5nID0gJ0NMT1NFJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50Pikge31cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19