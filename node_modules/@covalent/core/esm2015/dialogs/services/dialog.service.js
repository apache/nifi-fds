/**
 * @fileoverview added by tsickle
 * Generated from: services/dialog.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, RendererFactory2 } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
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
    /** @type {?|undefined} */
    IConfirmConfig.prototype.isDestructive;
}
/**
 * @record
 */
export function IPromptConfig() { }
if (false) {
    /** @type {?|undefined} */
    IPromptConfig.prototype.value;
}
/**
 * @record
 * @template T
 */
export function IDraggableConfig() { }
if (false) {
    /** @type {?} */
    IDraggableConfig.prototype.component;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.config;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.dragHandleSelectors;
    /** @type {?|undefined} */
    IDraggableConfig.prototype.draggableClass;
}
/**
 * @record
 * @template T
 */
export function IDraggableRefs() { }
if (false) {
    /** @type {?} */
    IDraggableRefs.prototype.matDialogRef;
    /** @type {?} */
    IDraggableRefs.prototype.dragRefSubject;
}
export class TdDialogService {
    /**
     * @param {?} _document
     * @param {?} _dialogService
     * @param {?} _dragDrop
     * @param {?} rendererFactory
     */
    constructor(_document, _dialogService, _dragDrop, rendererFactory) {
        this._document = _document;
        this._dialogService = _dialogService;
        this._dragDrop = _dragDrop;
        this.rendererFactory = rendererFactory;
        this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
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
        const dialogConfig = this._createConfig(config);
        /** @type {?} */
        const dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        /** @type {?} */
        const alertDialogComponent = dialogRef.componentInstance;
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
     *     isDestructive?: boolean;
     * }
     *
     * Opens a confirm dialog with the provided config.
     * Returns an MatDialogRef<TdConfirmDialogComponent> object.
     * @param {?} config
     * @return {?}
     */
    openConfirm(config) {
        /** @type {?} */
        const dialogConfig = this._createConfig(config);
        /** @type {?} */
        const dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        /** @type {?} */
        const confirmDialogComponent = dialogRef.componentInstance;
        confirmDialogComponent.title = config.title;
        confirmDialogComponent.message = config.message;
        if (config.acceptButton) {
            confirmDialogComponent.acceptButton = config.acceptButton;
        }
        if (config.isDestructive) {
            confirmDialogComponent.isDestructive = config.isDestructive;
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
        const dialogConfig = this._createConfig(config);
        /** @type {?} */
        const dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        /** @type {?} */
        const promptDialogComponent = dialogRef.componentInstance;
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
     * Opens a draggable dialog containing the given component.
     * @template T
     * @param {?} __0
     * @return {?}
     */
    openDraggable({ component, config, dragHandleSelectors, draggableClass, }) {
        /** @type {?} */
        const matDialogRef = this._dialogService.open(component, config);
        /** @type {?} */
        const dragRefSubject = new Subject();
        /** @type {?} */
        const CDK_OVERLAY_PANE_SELECTOR = '.cdk-overlay-pane';
        /** @type {?} */
        const CDK_OVERLAY_CONTAINER_SELECTOR = '.cdk-overlay-container';
        matDialogRef.afterOpened().subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dialogElement = (/** @type {?} */ (this._document.getElementById(matDialogRef.id)));
            /** @type {?} */
            const draggableElement = this._dragDrop.createDrag(dialogElement);
            if (draggableClass) {
                /** @type {?} */
                const childComponent = dialogElement.firstElementChild;
                this._renderer2.addClass(childComponent, draggableClass);
            }
            if (dragHandleSelectors && dragHandleSelectors.length) {
                /** @type {?} */
                const dragHandles = dragHandleSelectors.reduce((/**
                 * @param {?} acc
                 * @param {?} curr
                 * @return {?}
                 */
                (acc, curr) => [...acc, ...Array.from(dialogElement.querySelectorAll(curr))]), []);
                if (dragHandles.length > 0) {
                    draggableElement.withHandles((/** @type {?} */ (dragHandles)));
                }
            }
            /** @type {?} */
            const rootElement = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
            if (rootElement) {
                draggableElement.withRootElement((/** @type {?} */ (rootElement)));
            }
            /** @type {?} */
            const boundaryElement = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
            if (boundaryElement) {
                draggableElement.withBoundaryElement((/** @type {?} */ (boundaryElement)));
            }
            dragRefSubject.next(draggableElement);
        }));
        return { matDialogRef, dragRefSubject };
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    _createConfig(config) {
        /** @type {?} */
        const dialogConfig = new MatDialogConfig();
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
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: MatDialog },
    { type: DragDrop },
    { type: RendererFactory2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._renderer2;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._document;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dialogService;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype._dragDrop;
    /**
     * @type {?}
     * @private
     */
    TdDialogService.prototype.rendererFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvZGlhbG9ncy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFFBQVEsRUFBVyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRS9CLG1DQUdDOzs7SUFGQyw4QkFBZTs7SUFDZixnQ0FBZ0I7Ozs7O0FBR2xCLGtDQUVDOzs7SUFEQyxtQ0FBcUI7Ozs7O0FBR3ZCLG9DQUlDOzs7SUFIQyxzQ0FBc0I7O0lBQ3RCLHNDQUFzQjs7SUFDdEIsdUNBQXdCOzs7OztBQUcxQixtQ0FFQzs7O0lBREMsOEJBQWU7Ozs7OztBQUdqQixzQ0FPQzs7O0lBTkMscUNBQTRCOztJQUM1QixrQ0FBeUI7O0lBRXpCLCtDQUErQjs7SUFFL0IsMENBQXdCOzs7Ozs7QUFHMUIsb0NBR0M7OztJQUZDLHNDQUE4Qjs7SUFDOUIsd0NBQWlDOztBQUluQyxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQUcxQixZQUM0QixTQUFjLEVBQ2hDLGNBQXlCLEVBQ3pCLFNBQW1CLEVBQ25CLGVBQWlD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QzFCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxtQkFBZSxXQUFXLEVBQUEsQ0FBQyxDQUFDO2lCQUMxRDthQUNGOztrQkFDSyxXQUFXLEdBQVksYUFBYSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUM3RSxJQUFJLFdBQVcsRUFBRTtnQkFDZixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsbUJBQWEsV0FBVyxFQUFBLENBQUMsQ0FBQzthQUM1RDs7a0JBRUssZUFBZSxHQUFZLGFBQWEsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFDdEYsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFhLGVBQWUsRUFBQSxDQUFDLENBQUM7YUFDcEU7WUFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxNQUFxQjs7Y0FDbkMsWUFBWSxHQUFvQixJQUFJLGVBQWUsRUFBRTtRQUMzRCxZQUFZLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7WUFwTEYsVUFBVTs7Ozs0Q0FLTixNQUFNLFNBQUMsUUFBUTtZQWhEWCxTQUFTO1lBTVQsUUFBUTtZQVB1QixnQkFBZ0I7Ozs7Ozs7SUE4Q3RELHFDQUE4Qjs7Ozs7SUFHNUIsb0NBQXdDOzs7OztJQUN4Qyx5Q0FBaUM7Ozs7O0lBQ2pDLG9DQUEyQjs7Ozs7SUFDM0IsMENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmFnRHJvcCwgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEaWFsb2dDb25maWcgZXh0ZW5kcyBNYXREaWFsb2dDb25maWcge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydENvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBjbG9zZUJ1dHRvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlybUNvbmZpZyBleHRlbmRzIElEaWFsb2dDb25maWcge1xuICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbj86IHN0cmluZztcbiAgaXNEZXN0cnVjdGl2ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb21wdENvbmZpZyBleHRlbmRzIElDb25maXJtQ29uZmlnIHtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURyYWdnYWJsZUNvbmZpZzxUPiB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcbiAgY29uZmlnPzogTWF0RGlhbG9nQ29uZmlnO1xuICAvLyBDU1Mgc2VsZWN0b3JzIG9mIGVsZW1lbnQocykgaW5zaWRlIHRoZSBjb21wb25lbnQgbWVhbnQgdG8gYmUgZHJhZyBoYW5kbGUocylcbiAgZHJhZ0hhbmRsZVNlbGVjdG9ycz86IHN0cmluZ1tdO1xuICAvLyBDbGFzcyB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCBzaWduaWZ5aW5nIGRyYWctYWJpbGl0eVxuICBkcmFnZ2FibGVDbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRHJhZ2dhYmxlUmVmczxUPiB7XG4gIG1hdERpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFQ+O1xuICBkcmFnUmVmU3ViamVjdDogU3ViamVjdDxEcmFnUmVmPjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgX3JlbmRlcmVyMjogUmVuZGVyZXIyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBfZGlhbG9nU2VydmljZTogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgX2RyYWdEcm9wOiBEcmFnRHJvcCxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+XG4gICAqIC0gY29uZmlnOiBNYXREaWFsb2dDb25maWdcbiAgICogV3JhcHBlciBmdW5jdGlvbiBvdmVyIHRoZSBvcGVuKCkgbWV0aG9kIGluIE1hdERpYWxvZy5cbiAgICogT3BlbnMgYSBtb2RhbCBkaWFsb2cgY29udGFpbmluZyB0aGUgZ2l2ZW4gY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIG9wZW48VD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPFQ+LCBjb25maWc/OiBNYXREaWFsb2dDb25maWcpOiBNYXREaWFsb2dSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oY29tcG9uZW50LCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gb3ZlciB0aGUgY2xvc2VBbGwoKSBtZXRob2QgaW4gTWF0RGlhbG9nLlxuICAgKiBDbG9zZXMgYWxsIG9mIHRoZSBjdXJyZW50bHktb3BlbiBkaWFsb2dzLlxuICAgKi9cbiAgcHVibGljIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1NlcnZpY2UuY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gY29uZmlnOiBJQWxlcnRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcbiAgICogICAgIGNsb3NlQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGFuIGFsZXJ0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkQWxlcnREaWFsb2dDb21wb25lbnQ+IG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBvcGVuQWxlcnQoY29uZmlnOiBJQWxlcnRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4ge1xuICAgIGNvbnN0IGRpYWxvZ0NvbmZpZzogTWF0RGlhbG9nQ29uZmlnID0gdGhpcy5fY3JlYXRlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VGRBbGVydERpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgYWxlcnREaWFsb2dDb21wb25lbnQ6IFRkQWxlcnREaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgYWxlcnREaWFsb2dDb21wb25lbnQubWVzc2FnZSA9IGNvbmZpZy5tZXNzYWdlO1xuICAgIGlmIChjb25maWcuY2xvc2VCdXR0b24pIHtcbiAgICAgIGFsZXJ0RGlhbG9nQ29tcG9uZW50LmNsb3NlQnV0dG9uID0gY29uZmlnLmNsb3NlQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElDb25maXJtQ29uZmlnIHtcbiAgICogICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICogICAgIHRpdGxlPzogc3RyaW5nO1xuICAgKiAgICAgdmlld0NvbnRhaW5lclJlZj86IFZpZXdDb250YWluZXJSZWY7XG4gICAqICAgICBhY2NlcHRCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBjYW5jZWxCdXR0b24/OiBzdHJpbmc7XG4gICAqICAgICBpc0Rlc3RydWN0aXZlPzogYm9vbGVhbjtcbiAgICogfVxuICAgKlxuICAgKiBPcGVucyBhIGNvbmZpcm0gZGlhbG9nIHdpdGggdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICogUmV0dXJucyBhbiBNYXREaWFsb2dSZWY8VGRDb25maXJtRGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlbkNvbmZpcm0oY29uZmlnOiBJQ29uZmlybUNvbmZpZyk6IE1hdERpYWxvZ1JlZjxUZENvbmZpcm1EaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudD4gPSB0aGlzLl9kaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gICAgICBkaWFsb2dDb25maWcsXG4gICAgKTtcbiAgICBjb25zdCBjb25maXJtRGlhbG9nQ29tcG9uZW50OiBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgPSBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC50aXRsZSA9IGNvbmZpZy50aXRsZTtcbiAgICBjb25maXJtRGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBpZiAoY29uZmlnLmFjY2VwdEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzRGVzdHJ1Y3RpdmUpIHtcbiAgICAgIGNvbmZpcm1EaWFsb2dDb21wb25lbnQuaXNEZXN0cnVjdGl2ZSA9IGNvbmZpZy5pc0Rlc3RydWN0aXZlO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgY29uZmlybURpYWxvZ0NvbXBvbmVudC5jYW5jZWxCdXR0b24gPSBjb25maWcuY2FuY2VsQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZGlhbG9nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElQcm9tcHRDb25maWcge1xuICAgKiAgICAgbWVzc2FnZTogc3RyaW5nO1xuICAgKiAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAqICAgICB2YWx1ZT86IHN0cmluZztcbiAgICogICAgIHZpZXdDb250YWluZXJSZWY/OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgKiAgICAgYWNjZXB0QnV0dG9uPzogc3RyaW5nO1xuICAgKiAgICAgY2FuY2VsQnV0dG9uPzogc3RyaW5nO1xuICAgKiB9XG4gICAqXG4gICAqIE9wZW5zIGEgcHJvbXB0IGRpYWxvZyB3aXRoIHRoZSBwcm92aWRlZCBjb25maWcuXG4gICAqIFJldHVybnMgYW4gTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgb3BlblByb21wdChjb25maWc6IElQcm9tcHRDb25maWcpOiBNYXREaWFsb2dSZWY8VGRQcm9tcHREaWFsb2dDb21wb25lbnQ+IHtcbiAgICBjb25zdCBkaWFsb2dDb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IHRoaXMuX2NyZWF0ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgIFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nQ29uZmlnLFxuICAgICk7XG4gICAgY29uc3QgcHJvbXB0RGlhbG9nQ29tcG9uZW50OiBUZFByb21wdERpYWxvZ0NvbXBvbmVudCA9IGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudGl0bGUgPSBjb25maWcudGl0bGU7XG4gICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50Lm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcbiAgICBwcm9tcHREaWFsb2dDb21wb25lbnQudmFsdWUgPSBjb25maWcudmFsdWU7XG4gICAgaWYgKGNvbmZpZy5hY2NlcHRCdXR0b24pIHtcbiAgICAgIHByb21wdERpYWxvZ0NvbXBvbmVudC5hY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QnV0dG9uO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmNhbmNlbEJ1dHRvbikge1xuICAgICAgcHJvbXB0RGlhbG9nQ29tcG9uZW50LmNhbmNlbEJ1dHRvbiA9IGNvbmZpZy5jYW5jZWxCdXR0b247XG4gICAgfVxuICAgIHJldHVybiBkaWFsb2dSZWY7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYSBkcmFnZ2FibGUgZGlhbG9nIGNvbnRhaW5pbmcgdGhlIGdpdmVuIGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBvcGVuRHJhZ2dhYmxlPFQ+KHtcbiAgICBjb21wb25lbnQsXG4gICAgY29uZmlnLFxuICAgIGRyYWdIYW5kbGVTZWxlY3RvcnMsXG4gICAgZHJhZ2dhYmxlQ2xhc3MsXG4gIH06IElEcmFnZ2FibGVDb25maWc8VD4pOiBJRHJhZ2dhYmxlUmVmczxUPiB7XG4gICAgY29uc3QgbWF0RGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VCwgYW55PiA9IHRoaXMuX2RpYWxvZ1NlcnZpY2Uub3Blbihjb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgICBjb25zdCBkcmFnUmVmU3ViamVjdDogU3ViamVjdDxEcmFnUmVmPiA9IG5ldyBTdWJqZWN0PERyYWdSZWY+KCk7XG5cbiAgICBjb25zdCBDREtfT1ZFUkxBWV9QQU5FX1NFTEVDVE9SOiBzdHJpbmcgPSAnLmNkay1vdmVybGF5LXBhbmUnO1xuICAgIGNvbnN0IENES19PVkVSTEFZX0NPTlRBSU5FUl9TRUxFQ1RPUjogc3RyaW5nID0gJy5jZGstb3ZlcmxheS1jb250YWluZXInO1xuXG4gICAgbWF0RGlhbG9nUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpYWxvZ0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdERpYWxvZ1JlZi5pZCk7XG4gICAgICBjb25zdCBkcmFnZ2FibGVFbGVtZW50OiBEcmFnUmVmID0gdGhpcy5fZHJhZ0Ryb3AuY3JlYXRlRHJhZyhkaWFsb2dFbGVtZW50KTtcblxuICAgICAgaWYgKGRyYWdnYWJsZUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkQ29tcG9uZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIyLmFkZENsYXNzKGNoaWxkQ29tcG9uZW50LCBkcmFnZ2FibGVDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoZHJhZ0hhbmRsZVNlbGVjdG9ycyAmJiBkcmFnSGFuZGxlU2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBkcmFnSGFuZGxlczogRWxlbWVudFtdID0gZHJhZ0hhbmRsZVNlbGVjdG9ycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYzogRWxlbWVudFtdLCBjdXJyOiBzdHJpbmcpID0+IFsuLi5hY2MsIC4uLkFycmF5LmZyb20oZGlhbG9nRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGN1cnIpKV0sXG4gICAgICAgICAgW10sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkcmFnSGFuZGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC53aXRoSGFuZGxlcyg8SFRNTEVsZW1lbnRbXT5kcmFnSGFuZGxlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvb3RFbGVtZW50OiBFbGVtZW50ID0gZGlhbG9nRWxlbWVudC5jbG9zZXN0KENES19PVkVSTEFZX1BBTkVfU0VMRUNUT1IpO1xuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQud2l0aFJvb3RFbGVtZW50KDxIVE1MRWxlbWVudD5yb290RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdW5kYXJ5RWxlbWVudDogRWxlbWVudCA9IGRpYWxvZ0VsZW1lbnQuY2xvc2VzdChDREtfT1ZFUkxBWV9DT05UQUlORVJfU0VMRUNUT1IpO1xuICAgICAgaWYgKGJvdW5kYXJ5RWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LndpdGhCb3VuZGFyeUVsZW1lbnQoPEhUTUxFbGVtZW50PmJvdW5kYXJ5RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBkcmFnUmVmU3ViamVjdC5uZXh0KGRyYWdnYWJsZUVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgbWF0RGlhbG9nUmVmLCBkcmFnUmVmU3ViamVjdCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlQ29uZmlnKGNvbmZpZzogSURpYWxvZ0NvbmZpZyk6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgY29uc3QgZGlhbG9nQ29uZmlnOiBNYXREaWFsb2dDb25maWcgPSBuZXcgTWF0RGlhbG9nQ29uZmlnKCk7XG4gICAgZGlhbG9nQ29uZmlnLndpZHRoID0gJzQwMHB4JztcbiAgICBPYmplY3QuYXNzaWduKGRpYWxvZ0NvbmZpZywgY29uZmlnKTtcbiAgICByZXR1cm4gZGlhbG9nQ29uZmlnO1xuICB9XG59XG4iXX0=