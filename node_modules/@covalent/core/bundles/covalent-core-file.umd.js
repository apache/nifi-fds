(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/coercion'), require('@angular/cdk/portal'), require('@covalent/core/common'), require('@angular/forms'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/file', ['exports', '@angular/common', '@angular/material/icon', '@angular/material/button', '@angular/cdk/coercion', '@angular/cdk/portal', '@covalent/core/common', '@angular/forms', '@angular/core', 'rxjs'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.file = {}),global.ng.common,global.ng.material.icon,global.ng.material.button,global.ng.cdk.coercion,global.ng.cdk.portal,global.covalent.core.common,global.ng.forms,global.ng.core,global.rxjs));
}(this, (function (exports,common,icon,button,coercion,portal,common$1,forms,core,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileSelectDirective = /** @class */ (function () {
        function TdFileSelectDirective(model) {
            this.model = model;
            this._multiple = false;
            /**
             * fileSelect?: function
             * Event emitted when a file or files are selected in host [HTMLInputElement].
             * Emits a [FileList | File] object.
             * Alternative to not use [(ngModel)].
             */
            this.onFileSelect = new core.EventEmitter();
        }
        Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             */
            set: /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             */
            get: /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */ function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
         */
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
         * @param {?} event
         * @return {?}
         */
        TdFileSelectDirective.prototype.onChange = /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.target instanceof HTMLInputElement) {
                    /** @type {?} */
                    var fileInputEl = (( /** @type {?} */(event.target)));
                    /** @type {?} */
                    var files = fileInputEl.files;
                    if (files.length) {
                        /** @type {?} */
                        var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                        this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
                    }
                }
            };
        TdFileSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFileSelect]',
                    },] }
        ];
        /** @nocollapse */
        TdFileSelectDirective.ctorParameters = function () {
            return [
                { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host }] }
            ];
        };
        TdFileSelectDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            onFileSelect: [{ type: core.Output, args: ['fileSelect',] }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            onChange: [{ type: core.HostListener, args: ['change', ['$event'],] }]
        };
        return TdFileSelectDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileDropBase = /** @class */ (function () {
        function TdFileDropBase() {
        }
        return TdFileDropBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileDropMixinBase = common$1.mixinDisabled(TdFileDropBase);
    var TdFileDropDirective = /** @class */ (function (_super) {
        __extends(TdFileDropDirective, _super);
        function TdFileDropDirective(_renderer, _element) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._element = _element;
            _this._multiple = false;
            /**
             * fileDrop?: function
             * Event emitted when a file or files are dropped in host element after being validated.
             * Emits a [FileList | File] object.
             */
            _this.onFileDrop = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             */
            set: /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             */
            get: /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */ function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
            /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             */
            get: /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             * @return {?}
             */ function () {
                return this.disabled ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         */
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDrop = /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.disabled) {
                    /** @type {?} */
                    var transfer = (( /** @type {?} */(event))).dataTransfer;
                    /** @type {?} */
                    var files = transfer.files;
                    if (files.length) {
                        /** @type {?} */
                        var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                        this.onFileDrop.emit(value);
                    }
                }
                this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
                this._stopEvent(event);
            };
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         */
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragOver = /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var transfer = (( /** @type {?} */(event))).dataTransfer;
                transfer.dropEffect = this._typeCheck(transfer.types);
                if (this.disabled || (!this._multiple &&
                    ((transfer.items && transfer.items.length > 1) || (( /** @type {?} */(transfer))).mozItemCount > 1))) {
                    transfer.dropEffect = 'none';
                }
                else {
                    transfer.dropEffect = 'copy';
                }
                this._stopEvent(event);
            };
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         */
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragEnter = /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.disabled) {
                    this._renderer.addClass(this._element.nativeElement, 'drop-zone');
                }
                this._stopEvent(event);
            };
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         */
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragLeave = /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
                this._stopEvent(event);
            };
        /**
         * Validates if the transfer item types are 'Files'.
         */
        /**
         * Validates if the transfer item types are 'Files'.
         * @param {?} types
         * @return {?}
         */
        TdFileDropDirective.prototype._typeCheck = /**
         * Validates if the transfer item types are 'Files'.
         * @param {?} types
         * @return {?}
         */
            function (types) {
                /** @type {?} */
                var dropEffect = 'none';
                if (types) {
                    if (((( /** @type {?} */(types))).contains && (( /** @type {?} */(types))).contains('Files'))
                        || ((( /** @type {?} */(types))).indexOf && (( /** @type {?} */(types))).indexOf('Files') !== -1)) {
                        dropEffect = 'copy';
                    }
                }
                return dropEffect;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype._stopEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
            };
        TdFileDropDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tdFileDrop]',
                        inputs: ['disabled'],
                    },] }
        ];
        /** @nocollapse */
        TdFileDropDirective.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        TdFileDropDirective.propDecorators = {
            multiple: [{ type: core.Input, args: ['multiple',] }],
            onFileDrop: [{ type: core.Output, args: ['fileDrop',] }],
            multipleBinding: [{ type: core.HostBinding, args: ['attr.multiple',] }],
            disabledBinding: [{ type: core.HostBinding, args: ['attr.disabled',] }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragEnter: [{ type: core.HostListener, args: ['dragenter', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
        };
        return TdFileDropDirective;
    }(_TdFileDropMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileInputLabelDirective = /** @class */ (function (_super) {
        __extends(TdFileInputLabelDirective, _super);
        function TdFileInputLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdFileInputLabelDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-file-input-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdFileInputLabelDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: core.ViewContainerRef }
            ];
        };
        return TdFileInputLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdFileInputBase = /** @class */ (function () {
        function TdFileInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileInputBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileInputMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileInputBase));
    var TdFileInputComponent = /** @class */ (function (_super) {
        __extends(TdFileInputComponent, _super);
        function TdFileInputComponent(_renderer, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._renderer = _renderer;
            _this._multiple = false;
            /**
             * select?: function
             * Event emitted a file is selected
             * Emits a [File | FileList] object.
             */
            _this.onSelect = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
            get: /**
             * @return {?}
             */ function () {
                return this._inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             */
            set: /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when a file is selected.
         */
        /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
        TdFileInputComponent.prototype.handleSelect = /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
            function (files) {
                this.writeValue(files);
                this.onSelect.emit(files);
            };
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         */
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
        TdFileInputComponent.prototype.clear = /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
            function () {
                this.writeValue(undefined);
                this._renderer.setProperty(this.inputElement, 'value', '');
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileInputComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v) {
                    this.clear();
                }
            };
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         */
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        TdFileInputComponent.prototype.setDisabledState = /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        TdFileInputComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdFileInputComponent; }),
                                multi: true,
                            }],
                        selector: 'td-file-input',
                        inputs: ['disabled', 'value'],
                        template: "<div>\n  <button mat-raised-button\n          class=\"td-file-input\"\n          type=\"button\"\n          [color]=\"color\" \n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          (keyup.enter)=\"fileInput.click()\"\n          (click)=\"fileInput.click()\"\n          (fileDrop)=\"handleSelect($event)\"\n          tdFileDrop>\n    <ng-content></ng-content>\n  </button>\n  <input #fileInput \n          class=\"td-file-input-hidden\" \n          type=\"file\"\n          [attr.accept]=\"accept\"                \n          (fileSelect)=\"handleSelect($event)\"\n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          tdFileSelect>\n</div>",
                        styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileInputComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdFileInputComponent.propDecorators = {
            _inputElement: [{ type: core.ViewChild, args: ['fileInput',] }],
            color: [{ type: core.Input, args: ['color',] }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            accept: [{ type: core.Input, args: ['accept',] }],
            onSelect: [{ type: core.Output, args: ['select',] }]
        };
        return TdFileInputComponent;
    }(_TdFileInputMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileUploadBase = /** @class */ (function () {
        function TdFileUploadBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileUploadBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileUploadMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileUploadBase));
    var TdFileUploadComponent = /** @class */ (function (_super) {
        __extends(TdFileUploadComponent, _super);
        function TdFileUploadComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._multiple = false;
            _this._required = false;
            /**
             * defaultColor?: string
             * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
             */
            _this.defaultColor = 'primary';
            /**
             * activeColor?: string
             * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
             */
            _this.activeColor = 'accent';
            /**
             * cancelColor?: string
             * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
             */
            _this.cancelColor = 'warn';
            /**
             * select?: function
             * Event emitted when a file is selected.
             * Emits a [File | FileList] object.
             */
            _this.onSelect = new core.EventEmitter();
            /**
             * upload?: function
             * Event emitted when upload button is clicked.
             * Emits a [File | FileList] object.
             */
            _this.onUpload = new core.EventEmitter();
            /**
             * cancel?: function
             * Event emitted when cancel button is clicked.
             */
            _this.onCancel = new core.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             */
            set: /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileUploadComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             */
            set: /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             * @param {?} required
             * @return {?}
             */ function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when upload button is clicked.
         */
        /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
        TdFileUploadComponent.prototype.uploadPressed = /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.onUpload.emit(this.value);
                }
            };
        /**
         * Method executed when a file is selected.
         */
        /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
        TdFileUploadComponent.prototype.handleSelect = /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
                this.onSelect.emit(value);
            };
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         */
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
        TdFileUploadComponent.prototype.cancel = /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
            function () {
                this.value = undefined;
                this.onCancel.emit(undefined);
                // check if the file input is rendered before clearing it
                if (this.fileInput) {
                    this.fileInput.clear();
                }
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileUploadComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v) {
                    this.cancel();
                }
            };
        TdFileUploadComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return TdFileUploadComponent; }),
                                multi: true,
                            }],
                        selector: 'td-file-upload',
                        inputs: ['disabled', 'value'],
                        template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\"> \n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"            \n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
                        styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileUploadComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        TdFileUploadComponent.propDecorators = {
            fileInput: [{ type: core.ViewChild, args: [TdFileInputComponent,] }],
            inputLabel: [{ type: core.ContentChild, args: [TdFileInputLabelDirective,] }],
            defaultColor: [{ type: core.Input, args: ['defaultColor',] }],
            activeColor: [{ type: core.Input, args: ['activeColor',] }],
            cancelColor: [{ type: core.Input, args: ['cancelColor',] }],
            multiple: [{ type: core.Input, args: ['multiple',] }],
            required: [{ type: core.Input, args: ['required',] }],
            accept: [{ type: core.Input, args: ['accept',] }],
            onSelect: [{ type: core.Output, args: ['select',] }],
            onUpload: [{ type: core.Output, args: ['upload',] }],
            onCancel: [{ type: core.Output, args: ['cancel',] }]
        };
        return TdFileUploadComponent;
    }(_TdFileUploadMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileService = /** @class */ (function () {
        function TdFileService() {
            this._progressSubject = new rxjs.Subject();
            this._progressObservable = this._progressSubject.asObservable();
        }
        Object.defineProperty(TdFileService.prototype, "progress", {
            /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             */
            get: /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             * @return {?}
             */ function () {
                return this._progressObservable;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
         */
        /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
         * @param {?} options
         * @return {?}
         */
        TdFileService.prototype.upload = /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                return new rxjs.Observable(function (subscriber) {
                    /** @type {?} */
                    var xhr = new XMLHttpRequest();
                    /** @type {?} */
                    var formData = new FormData();
                    if (options.file !== undefined) {
                        formData.append('file', options.file);
                    }
                    else if (options.formData !== undefined) {
                        formData = options.formData;
                    }
                    else {
                        return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
                    }
                    xhr.upload.onprogress = function (event) {
                        /** @type {?} */
                        var progress = 0;
                        if (event.lengthComputable) {
                            progress = Math.round(event.loaded / event.total * 100);
                        }
                        _this._progressSubject.next(progress);
                    };
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                subscriber.next(xhr.response);
                                subscriber.complete();
                            }
                            else {
                                subscriber.error(xhr.response);
                            }
                        }
                    };
                    xhr.open(options.method, options.url, true);
                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    if (options.headers) {
                        for (var key in options.headers) {
                            xhr.setRequestHeader(key, options.headers[key]);
                        }
                    }
                    xhr.send(formData);
                });
            };
        TdFileService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdFileService.ctorParameters = function () { return []; };
        return TdFileService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_FILE = [
        TdFileSelectDirective,
        TdFileDropDirective,
        TdFileUploadComponent,
        TdFileInputComponent,
        TdFileInputLabelDirective,
    ];
    var CovalentFileModule = /** @class */ (function () {
        function CovalentFileModule() {
        }
        CovalentFileModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                            portal.PortalModule,
                        ],
                        declarations: [
                            TD_FILE,
                        ],
                        exports: [
                            TD_FILE,
                        ],
                        providers: [
                            TdFileService,
                        ],
                    },] }
        ];
        return CovalentFileModule;
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

    exports.CovalentFileModule = CovalentFileModule;
    exports.TdFileDropBase = TdFileDropBase;
    exports._TdFileDropMixinBase = _TdFileDropMixinBase;
    exports.TdFileDropDirective = TdFileDropDirective;
    exports.TdFileSelectDirective = TdFileSelectDirective;
    exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
    exports.TdFileInputBase = TdFileInputBase;
    exports._TdFileInputMixinBase = _TdFileInputMixinBase;
    exports.TdFileInputComponent = TdFileInputComponent;
    exports.TdFileUploadBase = TdFileUploadBase;
    exports._TdFileUploadMixinBase = _TdFileUploadMixinBase;
    exports.TdFileUploadComponent = TdFileUploadComponent;
    exports.TdFileService = TdFileService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-file.umd.js.map