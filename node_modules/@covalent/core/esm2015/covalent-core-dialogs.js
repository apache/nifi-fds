import { Component, Directive, ContentChildren, ViewChild, Injectable, SkipSelf, Optional, NgModule } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdDialogTitleDirective {
}
TdDialogTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-title' },] },
];
/** @nocollapse */
TdDialogTitleDirective.ctorParameters = () => [];
class TdDialogContentDirective {
}
TdDialogContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-content' },] },
];
/** @nocollapse */
TdDialogContentDirective.ctorParameters = () => [];
class TdDialogActionsDirective {
}
TdDialogActionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-actions' },] },
];
/** @nocollapse */
TdDialogActionsDirective.ctorParameters = () => [];
class TdDialogComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    }
}
TdDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dialog',
                template: `<div class="td-dialog-wrapper">
  <h3 class="td-dialog-title" *ngIf="dialogTitle.length > 0">
    <ng-content select="td-dialog-title"></ng-content>
  </h3>
  <div class="td-dialog-content" *ngIf="dialogContent.length > 0">
    <ng-content select="td-dialog-content"></ng-content>
  </div>
  <div class="td-dialog-actions" *ngIf="dialogActions.length > 0">
    <span class="td-dialog-spacer"></span>
    <ng-content select="td-dialog-actions"></ng-content>
  </div>
</div>`,
                styles: [`.td-dialog-title{
  margin-top:0;
  margin-bottom:20px; }
.td-dialog-content{
  margin-bottom:16px; }
.td-dialog-actions{
  position:relative;
  top:16px;
  left:16px; }
  ::ng-deep [dir='rtl'] .td-dialog-actions{
    right:16px;
    left:auto; }
:host{
  display:block; }
  :host .td-dialog-actions{
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; }
    :host .td-dialog-actions .td-dialog-spacer{
      -webkit-box-flex:1;
          -ms-flex:1;
              flex:1; }
    :host .td-dialog-actions ::ng-deep button{
      text-transform:uppercase;
      margin-left:8px;
      padding-left:8px;
      padding-right:8px;
      min-width:64px; }
      [dir='rtl'] :host .td-dialog-actions ::ng-deep button{
        margin-right:8px;
        margin-left:inherit; }
`],
            },] },
];
/** @nocollapse */
TdDialogComponent.ctorParameters = () => [];
TdDialogComponent.propDecorators = {
    "dialogTitle": [{ type: ContentChildren, args: [TdDialogTitleDirective,] },],
    "dialogContent": [{ type: ContentChildren, args: [TdDialogContentDirective,] },],
    "dialogActions": [{ type: ContentChildren, args: [TdDialogActionsDirective,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdAlertDialogComponent {
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
                template: `<td-dialog>
  <td-dialog-title *ngIf="title">
    {{title}}
  </td-dialog-title>
  <td-dialog-content>
    <span class="td-dialog-message">{{message}}</span>
  </td-dialog-content>
  <td-dialog-actions>
    <button mat-button color="accent" (click)="close()">{{closeButton}}</button>
  </td-dialog-actions>
</td-dialog>`,
                styles: [`.td-dialog-message{
  word-break:break-word; }
`],
            },] },
];
/** @nocollapse */
TdAlertDialogComponent.ctorParameters = () => [
    { type: MatDialogRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdConfirmDialogComponent {
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
                template: `<td-dialog>
  <td-dialog-title *ngIf="title">
    {{title}}
  </td-dialog-title>
  <td-dialog-content>
    <span class="td-dialog-message">{{message}}</span>
  </td-dialog-content>
  <td-dialog-actions>
    <button mat-button
            #closeBtn
            (keydown.arrowright)="acceptBtn.focus()"
            (click)="cancel()">{{cancelButton}}</button>
    <button mat-button
            color="accent"
            #acceptBtn
            (keydown.arrowleft)="closeBtn.focus()"
            (click)="accept()">{{acceptButton}}</button>
  </td-dialog-actions>
</td-dialog>`,
                styles: [`.td-dialog-message{
  word-break:break-word; }
`],
            },] },
];
/** @nocollapse */
TdConfirmDialogComponent.ctorParameters = () => [
    { type: MatDialogRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdPromptDialogComponent {
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
    ngAfterViewInit() {
        // focus input once everything is rendered and good to go
        Promise.resolve().then(() => {
            (/** @type {?} */ (this._input.nativeElement)).focus();
        });
    }
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    handleInputFocus() {
        (/** @type {?} */ (this._input.nativeElement)).select();
    }
    /**
     * @return {?}
     */
    cancel() {
        this._dialogRef.close(undefined);
    }
    /**
     * @return {?}
     */
    accept() {
        this._dialogRef.close(this.value);
    }
}
TdPromptDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-prompt-dialog',
                template: `<td-dialog>
  <td-dialog-title *ngIf="title">
    {{title}}
  </td-dialog-title>
  <td-dialog-content>
    <span class="td-dialog-message">{{message}}</span>
    <form #form="ngForm" novalidate>
      <div class="td-dialog-input-wrapper">
        <mat-form-field class="td-dialog-input">
          <input matInput
                #input
                (focus)="handleInputFocus()"
                (keydown.enter)="$event.preventDefault(); form.valid && accept()"
                [(ngModel)]="value"
                name="value"
                required/>
        </mat-form-field>
      </div>
    </form>
  </td-dialog-content>
  <td-dialog-actions>
    <button mat-button
            #closeBtn
            (keydown.arrowright)="acceptBtn.focus()"
            (click)="cancel()">{{cancelButton}}</button>
    <button mat-button
            color="accent"
            #acceptBtn
            (keydown.arrowleft)="closeBtn.focus()"
            [disabled]="!form.valid"
            (click)="accept()">{{acceptButton}}</button>
  </td-dialog-actions>
</td-dialog>`,
                styles: [`.td-dialog-input-wrapper{
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-sizing:border-box;
          box-sizing:border-box;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .td-dialog-input-wrapper .td-dialog-input{
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
.td-dialog-message{
  word-break:break-word; }
`],
            },] },
];
/** @nocollapse */
TdPromptDialogComponent.ctorParameters = () => [
    { type: MatDialogRef, },
];
TdPromptDialogComponent.propDecorators = {
    "_input": [{ type: ViewChild, args: ['input',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

class TdDialogService {
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
        let /** @type {?} */ dialogConfig = this._createConfig(config);
        let /** @type {?} */ dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        let /** @type {?} */ alertDialogComponent = dialogRef.componentInstance;
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
        let /** @type {?} */ dialogConfig = this._createConfig(config);
        let /** @type {?} */ dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        let /** @type {?} */ confirmDialogComponent = dialogRef.componentInstance;
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
        let /** @type {?} */ dialogConfig = this._createConfig(config);
        let /** @type {?} */ dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        let /** @type {?} */ promptDialogComponent = dialogRef.componentInstance;
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
        let /** @type {?} */ dialogConfig = new MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    }
}
TdDialogService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TdDialogService.ctorParameters = () => [
    { type: MatDialog, },
];
/**
 * @param {?} parent
 * @param {?} dialog
 * @return {?}
 */
function DIALOG_PROVIDER_FACTORY(parent, dialog) {
    return parent || new TdDialogService(dialog);
}
const DIALOG_PROVIDER = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: TdDialogService,
    deps: [[new Optional(), new SkipSelf(), TdDialogService], MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
const TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
class CovalentDialogsModule {
}
CovalentDialogsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                    MatDialogModule,
                    MatInputModule,
                    MatButtonModule,
                ],
                declarations: [
                    TD_DIALOGS,
                ],
                exports: [
                    TD_DIALOGS,
                ],
                providers: [
                    DIALOG_PROVIDER,
                ],
                entryComponents: [
                    TD_DIALOGS_ENTRY_COMPONENTS,
                ],
            },] },
];
/** @nocollapse */
CovalentDialogsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentDialogsModule, TdDialogTitleDirective, TdDialogContentDirective, TdDialogActionsDirective, TdDialogComponent, TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent, TdDialogService, DIALOG_PROVIDER_FACTORY, DIALOG_PROVIDER };
//# sourceMappingURL=covalent-core-dialogs.js.map
