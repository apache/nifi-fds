/**
 * @fileoverview added by tsickle
 * Generated from: alert-dialog/alert-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{ title }}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{ message }}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{ closeButton }}</button>\n  </td-dialog-actions>\n</td-dialog>\n",
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
    /**
     * @type {?}
     * @private
     */
    TdAlertDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsiYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU94RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBS2pDLFlBQW9CLFVBQWdEO1FBQWhELGVBQVUsR0FBVixVQUFVLENBQXNDO1FBRnBFLGdCQUFXLEdBQVcsT0FBTyxDQUFDO0lBRXlDLENBQUM7Ozs7SUFFeEUsS0FBSztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHFXQUE0Qzs7YUFFN0M7Ozs7WUFOUSxZQUFZOzs7O0lBUW5CLHVDQUFjOztJQUNkLHlDQUFnQjs7SUFDaEIsNkNBQThCOzs7OztJQUVsQiw0Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWFsZXJ0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2xvc2VCdXR0b246IHN0cmluZyA9ICdDTE9TRSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4pIHt9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==