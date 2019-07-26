/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
/**
 * @record
 */
export function IDialogConfig() { }
if (false) {
    /** @type {?|undefined} */
    IDialogConfig.prototype.title;
    /** @type {?} */
    IDialogConfig.prototype.message;
}
/**
 * @record
 */
export function IAlertConfig() { }
if (false) {
    /** @type {?|undefined} */
    IAlertConfig.prototype.closeButton;
}
/**
 * @record
 */
export function IConfirmConfig() { }
if (false) {
    /** @type {?|undefined} */
    IConfirmConfig.prototype.acceptButton;
    /** @type {?|undefined} */
    IConfirmConfig.prototype.cancelButton;
}
/**
 * @record
 */
export function IPromptConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPromptConfig.prototype.value;
}
export class TdDialogService {
    /**
     * @param {?} _dialogService
     */
    constructor(_dialogService) {
        this._dialogService = _dialogService;
    }
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     * @template T
     * @param {?} component
     * @param {?=} config
     * @return {?}
     */
    open(component, config) {
        return this._dialogService.open(component, config);
    }
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    closeAll() {
        this._dialogService.closeAll();
    }
    /**
     * params:
     * - config: IAlertConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     closeButton?: string;
     * }
     *
     * Opens an alert dialog with the provided config.
     * Returns an MatDialogRef<TdAlertDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    openAlert(config) {
        /** @type {?} */
        let dialogConfig = this._createConfig(config);
        /** @type {?} */
        let dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        /** @type {?} */
        let alertDialogComponent = dialogRef.componentInstance;
        alertDialogComponent.title = config.title;
        alertDialogComponent.message = config.message;
        if (config.closeButton) {
            alertDialogComponent.closeButton = config.closeButton;
        }
        return dialogRef;
    }
    /**
     * params:
     * - config: IConfirmConfig {
     *     message: string;
     *     title?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    openConfirm(config) {
        /** @type {?} */
        let dialogConfig = this._createConfig(config);
        /** @type {?} */
        let dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        /** @type {?} */
        let confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            confirmDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    }
    /**
     * params:
     * - config: IPromptConfig {
     *     message: string;
     *     title?: string;
     *     value?: string;
     *     viewContainerRef?: ViewContainerRef;
     *     acceptButton?: string;
     *     cancelButton?: string;
     * }
     *
     * Opens a prompt dialog with the provided config.
     * Returns an MatDialogRef<TdPromptDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    openPrompt(config) {
        /** @type {?} */
        let dialogConfig = this._createConfig(config);
        /** @type {?} */
        let dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        /** @type {?} */
        let promptDialogComponent = dialogRef.componentInstance;
        promptDialogComponent.title = config.title;
        promptDialogComponent.message = config.message;
        promptDialogComponent.value = config.value;
        if (config.acceptButton) {
            promptDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.cancelButton) {
            promptDialogComponent.cancelButton = config.cancelButton;
        }
        return dialogRef;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    _createConfig(config) {
        /** @type {?} */
        let dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    }
}
TdDialogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdDialogService.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    TdDialogService.prototype._dialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3Mvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtELE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxTQUFTLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBRW5GLG1DQUdDOzs7SUFGQyw4QkFBZTs7SUFDZixnQ0FBZ0I7Ozs7O0FBR2xCLGtDQUVDOzs7SUFEQyxtQ0FBcUI7Ozs7O0FBR3ZCLG9DQUdDOzs7SUFGQyxzQ0FBc0I7O0lBQ3RCLHNDQUFzQjs7Ozs7QUFHeEIsbUNBRUM7OztJQURDLDhCQUFlOztBQUlqQixNQUFNLE9BQU8sZUFBZTs7OztJQUUxQixZQUFvQixjQUF5QjtRQUF6QixtQkFBYyxHQUFkLGNBQWMsQ0FBVztJQUFHLENBQUM7Ozs7Ozs7Ozs7OztJQVMxQyxJQUFJLENBQUksU0FBMkIsRUFBRSxNQUF3QjtRQUNsRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFNTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFjTSxTQUFTLENBQUMsTUFBb0I7O1lBQy9CLFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQzFELFNBQVMsR0FDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7O1lBQzVELG9CQUFvQixHQUEyQixTQUFTLENBQUMsaUJBQWlCO1FBQzlFLG9CQUFvQixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFDLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzlDLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUN0QixvQkFBb0IsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlTSxXQUFXLENBQUMsTUFBc0I7O1lBQ25DLFlBQVksR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7O1lBQzFELFNBQVMsR0FDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUM7O1lBQzlELHNCQUFzQixHQUE2QixTQUFTLENBQUMsaUJBQWlCO1FBQ2xGLHNCQUFzQixDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVDLHNCQUFzQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixzQkFBc0IsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUMzRDtRQUNELElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixzQkFBc0IsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUMzRDtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JNLFVBQVUsQ0FBQyxNQUFxQjs7WUFDakMsWUFBWSxHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7WUFDMUQsU0FBUyxHQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQzs7WUFDN0QscUJBQXFCLEdBQTRCLFNBQVMsQ0FBQyxpQkFBaUI7UUFDaEYscUJBQXFCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MscUJBQXFCLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0MscUJBQXFCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHFCQUFxQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLHFCQUFxQixDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxhQUFhLENBQUMsTUFBcUI7O1lBQ3JDLFlBQVksR0FBb0IsSUFBSSxlQUFlLEVBQUU7UUFDekQsWUFBWSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7O1lBbEhGLFVBQVU7Ozs7WUF6QkYsU0FBUzs7OztJQTRCSix5Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmLCBQcm92aWRlciwgU2tpcFNlbGYsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTWF0RGlhbG9nQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgVGRBbGVydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2FsZXJ0LWRpYWxvZy9hbGVydC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL3Byb21wdC1kaWFsb2cvcHJvbXB0LWRpYWxvZy5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dDb25maWcgZXh0ZW5kcyBNYXREaWFsb2dDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydENvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybUNvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvbXB0Q29uZmlnIGV4dGVuZHMgSUNvbmZpcm1Db25maWcge1xuICB2YWx1ZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nU2VydmljZTogTWF0RGlhbG9nKSB7fVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+XG4gICAqIC0gY29uZmlnOiBNYXREaWFsb2dDb25maWdcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBvcGVuKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogT3BlbnMgYSBtb2RhbCBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW48VD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWcpOiBNYXREaWFsb2dSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgY2xvc2VBbGwoKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2UuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQWxlcnRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGFuIGFsZXJ0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQWxlcnQoY29uZmlnOiBJQWxlcnRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGxldCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGxldCBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUZEFsZXJ0RGlhbG9nQ29tcG9uZW50PiA9XG4gICAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oVGRBbGVydERpYWxvZ0NvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcbiAgICBsZXQgYWxlcnREaWFsb2dDb21wb25lbnQ6IFRkQWxlcnREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuY2xvc2VCdXR0b24pIHtcbiAgICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LmNsb3NlQnV0dG9uID0gY29uZmlnLmNsb3NlQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElDb25maXJtQ29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqIH1cbiAgICpcbiAgICogT3BlbnMgYSBjb25maXJtIGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Db25maXJtKGNvbmZpZzogSUNvbmZpcm1Db25maWcpOiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gPVxuICAgICAgdGhpcy5fZGlhbG9nU2VydmljZS5vcGVuKFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCwgZGlhbG9nQ29uZmlnKTtcbiAgICBsZXQgY29uZmlybURpYWxvZ0NvbXBvbmVudDogVGRDb25maXJtRGlhbG9nQ29tcG9uZW50ID0gZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuY2FuY2VsQnV0dG9uID0gY29uZmlnLmNhbmNlbEJ1dHRvbjtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJUHJvbXB0Q29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmFsdWU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGFjY2VwdEJ1dHRvbj86IHN0cmluZztcbiAgICogICAgIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIHByb21wdCBkaWFsb2cgd2l0aCB0aGUgcHJvdmlkZWQgY29uZmlnLlxuICAgKiBSZXR1cm5zIGFuIE1hdERpYWxvZ1JlZjxUZFByb21wdERpYWxvZ0NvbXBvbmVudD4gb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIG9wZW5Qcm9tcHQoY29uZmlnOiBJUHJvbXB0Q29uZmlnKTogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiA9XG4gICAgICB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oVGRQcm9tcHREaWFsb2dDb21wb25lbnQsIGRpYWxvZ0NvbmZpZyk7XG4gICAgbGV0IHByb21wdERpYWxvZ0NvbXBvbmVudDogVGRQcm9tcHREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnRpdGxlID0gY29uZmlnLnRpdGxlO1xuICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5tZXNzYWdlID0gY29uZmlnLm1lc3NhZ2U7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LnZhbHVlID0gY29uZmlnLnZhbHVlO1xuICAgIGlmIChjb25maWcuYWNjZXB0QnV0dG9uKSB7XG4gICAgICBwcm9tcHREaWFsb2dDb21wb25lbnQuYWNjZXB0QnV0dG9uID0gY29uZmlnLmFjY2VwdEJ1dHRvbjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5jYW5jZWxCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29uZmlnKGNvbmZpZzogSURpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgbGV0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gbmV3IE1hdERpYWxvZ0NvbmZpZygpO1xuICAgIGRpYWxvZ0NvbmZpZy53aWR0aCA9ICc0MDBweCc7XG4gICAgT2JqZWN0LmFzc2lnbihkaWFsb2dDb25maWcsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGRpYWxvZ0NvbmZpZztcbiAgfVxuXG59XG4iXX0=