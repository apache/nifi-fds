import { Provider } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
export interface IDialogConfig extends MatDialogConfig {
    title?: string;
    message: string;
}
export interface IAlertConfig extends IDialogConfig {
    closeButton?: string;
}
export interface IConfirmConfig extends IDialogConfig {
    acceptButton?: string;
    cancelButton?: string;
}
export interface IPromptConfig extends IConfirmConfig {
    value?: string;
}
export declare class TdDialogService {
    private _dialogService;
    constructor(_dialogService: MatDialog);
    /**
     * params:
     * - component: ComponentType<T>
     * - config: MatDialogConfig
     * Wrapper function over the open() method in MatDialog.
     * Opens a modal dialog containing the given component.
     */
    open<T>(component: ComponentType<T>, config?: MatDialogConfig): MatDialogRef<T>;
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     */
    closeAll(): void;
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
     */
    openAlert(config: IAlertConfig): MatDialogRef<TdAlertDialogComponent>;
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
     */
    openConfirm(config: IConfirmConfig): MatDialogRef<TdConfirmDialogComponent>;
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
     */
    openPrompt(config: IPromptConfig): MatDialogRef<TdPromptDialogComponent>;
    private _createConfig(config);
}
export declare function DIALOG_PROVIDER_FACTORY(parent: TdDialogService, dialog: MatDialog): TdDialogService;
export declare const DIALOG_PROVIDER: Provider;
