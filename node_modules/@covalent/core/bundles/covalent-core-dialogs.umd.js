(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/material/input'), require('@angular/material/button'), require('@angular/core'), require('@angular/material/dialog')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/dialogs', ['exports', '@angular/common', '@angular/forms', '@angular/material/input', '@angular/material/button', '@angular/core', '@angular/material/dialog'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.dialogs = {}),global.ng.common,global.ng.forms,global.ng.material.input,global.ng.material.button,global.ng.core,global.ng.material.dialog));
}(this, (function (exports,common,forms,input,button,core,dialog) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDialogTitleDirective = /** @class */ (function () {
        function TdDialogTitleDirective() {
        }
        TdDialogTitleDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-title' },] }
        ];
        return TdDialogTitleDirective;
    }());
    var TdDialogContentDirective = /** @class */ (function () {
        function TdDialogContentDirective() {
        }
        TdDialogContentDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-content' },] }
        ];
        return TdDialogContentDirective;
    }());
    var TdDialogActionsDirective = /** @class */ (function () {
        function TdDialogActionsDirective() {
        }
        TdDialogActionsDirective.decorators = [
            { type: core.Directive, args: [{ selector: 'td-dialog-actions' },] }
        ];
        return TdDialogActionsDirective;
    }());
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
            { type: core.Component, args: [{
                        selector: 'td-dialog',
                        template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                        styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                    }] }
        ];
        TdDialogComponent.propDecorators = {
            dialogTitle: [{ type: core.ContentChildren, args: [TdDialogTitleDirective,] }],
            dialogContent: [{ type: core.ContentChildren, args: [TdDialogContentDirective,] }],
            dialogActions: [{ type: core.ContentChildren, args: [TdDialogActionsDirective,] }]
        };
        return TdDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdAlertDialogComponent = /** @class */ (function () {
        function TdAlertDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.closeButton = 'CLOSE';
        }
        /**
         * @return {?}
         */
        TdAlertDialogComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close();
            };
        TdAlertDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-alert-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdAlertDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        return TdAlertDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'td-confirm-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdConfirmDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        return TdConfirmDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdPromptDialogComponent = /** @class */ (function () {
        function TdPromptDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
        }
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // focus input once everything is rendered and good to go
                Promise.resolve().then(function () {
                    (( /** @type {?} */(_this._input.nativeElement))).focus();
                });
            };
        /**
         * Method executed when input is focused
         * Selects all text
         */
        /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
        TdPromptDialogComponent.prototype.handleInputFocus = /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
            function () {
                (( /** @type {?} */(this._input.nativeElement))).select();
            };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.cancel = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close(undefined);
            };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.accept = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close(this.value);
            };
        TdPromptDialogComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-prompt-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdPromptDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        TdPromptDialogComponent.propDecorators = {
            _input: [{ type: core.ViewChild, args: ['input',] }]
        };
        return TdPromptDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDialogService = /** @class */ (function () {
        function TdDialogService(_dialogService) {
            this._dialogService = _dialogService;
        }
        /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         */
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
        TdDialogService.prototype.open = /**
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
            function (component, config) {
                return this._dialogService.open(component, config);
            };
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         */
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
        TdDialogService.prototype.closeAll = /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
            function () {
                this._dialogService.closeAll();
            };
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
        TdDialogService.prototype.openAlert = /**
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
            function (config) {
                /** @type {?} */
                var dialogConfig = this._createConfig(config);
                /** @type {?} */
                var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
                /** @type {?} */
                var alertDialogComponent = dialogRef.componentInstance;
                alertDialogComponent.title = config.title;
                alertDialogComponent.message = config.message;
                if (config.closeButton) {
                    alertDialogComponent.closeButton = config.closeButton;
                }
                return dialogRef;
            };
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
        TdDialogService.prototype.openConfirm = /**
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
            function (config) {
                /** @type {?} */
                var dialogConfig = this._createConfig(config);
                /** @type {?} */
                var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
                /** @type {?} */
                var confirmDialogComponent = dialogRef.componentInstance;
                confirmDialogComponent.title = config.title;
                confirmDialogComponent.message = config.message;
                if (config.acceptButton) {
                    confirmDialogComponent.acceptButton = config.acceptButton;
                }
                if (config.cancelButton) {
                    confirmDialogComponent.cancelButton = config.cancelButton;
                }
                return dialogRef;
            };
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
        TdDialogService.prototype.openPrompt = /**
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
            function (config) {
                /** @type {?} */
                var dialogConfig = this._createConfig(config);
                /** @type {?} */
                var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
                /** @type {?} */
                var promptDialogComponent = dialogRef.componentInstance;
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
            };
        /**
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype._createConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var dialogConfig = new dialog.MatDialogConfig();
                dialogConfig.width = '400px';
                Object.assign(dialogConfig, config);
                return dialogConfig;
            };
        TdDialogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdDialogService.ctorParameters = function () {
            return [
                { type: dialog.MatDialog }
            ];
        };
        return TdDialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIALOGS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
        TdDialogComponent,
        TdDialogTitleDirective,
        TdDialogActionsDirective,
        TdDialogContentDirective,
    ];
    /** @type {?} */
    var TD_DIALOGS_ENTRY_COMPONENTS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
    ];
    var CovalentDialogsModule = /** @class */ (function () {
        function CovalentDialogsModule() {
        }
        CovalentDialogsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            dialog.MatDialogModule,
                            input.MatInputModule,
                            button.MatButtonModule,
                        ],
                        declarations: [
                            TD_DIALOGS,
                        ],
                        exports: [
                            TD_DIALOGS,
                        ],
                        providers: [
                            TdDialogService,
                        ],
                        entryComponents: [
                            TD_DIALOGS_ENTRY_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentDialogsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;
    exports.TdDialogService = TdDialogService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-dialogs.umd.js.map