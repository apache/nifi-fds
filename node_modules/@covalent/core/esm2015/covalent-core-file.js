import { Directive, Input, Output, EventEmitter, HostListener, HostBinding, Host, Optional, ElementRef, Renderer2, Component, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef, ContentChild, Injectable, NgModule } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { TemplatePortalDirective, PortalModule } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdFileSelectDirective {
    /**
     * @param {?} model
     */
    constructor(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.onFileSelect = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets whether multiple files can be selected at once in host element, or just a single file.
     * Can also be 'multiple' native attribute.
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * Binds native 'multiple' attribute if [multiple] property is 'true'.
     * @return {?}
     */
    get multipleBinding() {
        return this._multiple ? '' : undefined;
    }
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        if (event.target instanceof HTMLInputElement) {
            let /** @type {?} */ fileInputEl = (/** @type {?} */ (event.target));
            let /** @type {?} */ files = fileInputEl.files;
            if (files.length) {
                let /** @type {?} */ value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    }
}
TdFileSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFileSelect]',
            },] },
];
/** @nocollapse */
TdFileSelectDirective.ctorParameters = () => [
    { type: NgModel, decorators: [{ type: Optional }, { type: Host },] },
];
TdFileSelectDirective.propDecorators = {
    "multiple": [{ type: Input, args: ['multiple',] },],
    "onFileSelect": [{ type: Output, args: ['fileSelect',] },],
    "multipleBinding": [{ type: HostBinding, args: ['attr.multiple',] },],
    "onChange": [{ type: HostListener, args: ['change', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdFileDropBase {
}
/* tslint:disable-next-line */
const _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
class TdFileDropDirective extends _TdFileDropMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        super();
        this._renderer = _renderer;
        this._element = _element;
        this._multiple = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        this.onFileDrop = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets whether multiple files can be dropped at once in host element, or just a single file.
     * Can also be 'multiple' native attribute.
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * Binds native 'multiple' attribute if [multiple] property is 'true'.
     * @return {?}
     */
    get multipleBinding() {
        return this._multiple ? '' : undefined;
    }
    /**
     * Binds native 'disabled' attribute if [disabled] property is 'true'.
     * @return {?}
     */
    get disabledBinding() {
        return this.disabled ? '' : undefined;
    }
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (!this.disabled) {
            let /** @type {?} */ transfer = (/** @type {?} */ (event)).dataTransfer;
            let /** @type {?} */ files = transfer.files;
            if (files.length) {
                let /** @type {?} */ value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        let /** @type {?} */ transfer = (/** @type {?} */ (event)).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || (/** @type {?} */ (transfer)).mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    }
    /**
     * Validates if the transfer item types are 'Files'.
     * @param {?} types
     * @return {?}
     */
    _typeCheck(types) {
        let /** @type {?} */ dropEffect = 'none';
        if (types) {
            if (((/** @type {?} */ (types)).contains && (/** @type {?} */ (types)).contains('Files'))
                || ((/** @type {?} */ (types)).indexOf && (/** @type {?} */ (types)).indexOf('Files') !== -1)) {
                dropEffect = 'copy';
            }
        }
        return dropEffect;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
TdFileDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFileDrop]',
                inputs: ['disabled'],
            },] },
];
/** @nocollapse */
TdFileDropDirective.ctorParameters = () => [
    { type: Renderer2, },
    { type: ElementRef, },
];
TdFileDropDirective.propDecorators = {
    "multiple": [{ type: Input, args: ['multiple',] },],
    "onFileDrop": [{ type: Output, args: ['fileDrop',] },],
    "multipleBinding": [{ type: HostBinding, args: ['attr.multiple',] },],
    "disabledBinding": [{ type: HostBinding, args: ['attr.disabled',] },],
    "onDrop": [{ type: HostListener, args: ['drop', ['$event'],] },],
    "onDragOver": [{ type: HostListener, args: ['dragover', ['$event'],] },],
    "onDragEnter": [{ type: HostListener, args: ['dragenter', ['$event'],] },],
    "onDragLeave": [{ type: HostListener, args: ['dragleave', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdFileInputLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdFileInputLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-file-input-label]ng-template',
            },] },
];
/** @nocollapse */
TdFileInputLabelDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
class TdFileInputBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
const _TdFileInputMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileInputBase));
class TdFileInputComponent extends _TdFileInputMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_renderer, _changeDetectorRef) {
        super(_changeDetectorRef);
        this._renderer = _renderer;
        this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        this.onSelect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get inputElement() {
        return this._inputElement.nativeElement;
    }
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    handleSelect(files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    }
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    clear() {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v) {
            this.clear();
        }
    }
}
TdFileInputComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdFileInputComponent),
                        multi: true,
                    }],
                selector: 'td-file-input',
                inputs: ['disabled', 'value'],
                styles: [`:host{ }
  :host .td-file-input{
    padding-left:8px;
    padding-right:8px; }
  :host input.td-file-input-hidden{
    display:none; }
  :host .drop-zone{
    border-radius:3px; }
    :host .drop-zone *{
      pointer-events:none; }
`],
                template: `<div>
  <button mat-raised-button
          class="td-file-input"
          type="button"
          [color]="color"
          [multiple]="multiple"
          [disabled]="disabled"
          (keyup.enter)="fileInput.click()"
          (click)="fileInput.click()"
          (fileDrop)="handleSelect($event)"
          tdFileDrop>
    <ng-content></ng-content>
  </button>
  <input #fileInput
          class="td-file-input-hidden"
          type="file"
          [attr.accept]="accept"
          (fileSelect)="handleSelect($event)"
          [multiple]="multiple"
          [disabled]="disabled"
          tdFileSelect>
</div>`,
            },] },
];
/** @nocollapse */
TdFileInputComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
TdFileInputComponent.propDecorators = {
    "_inputElement": [{ type: ViewChild, args: ['fileInput',] },],
    "color": [{ type: Input, args: ['color',] },],
    "multiple": [{ type: Input, args: ['multiple',] },],
    "accept": [{ type: Input, args: ['accept',] },],
    "onSelect": [{ type: Output, args: ['select',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdFileUploadBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
const _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
class TdFileUploadComponent extends _TdFileUploadMixinBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        super(_changeDetectorRef);
        this._multiple = false;
        this._required = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         */
        this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         */
        this.onSelect = new EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        this.onUpload = new EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        this.onCancel = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * required?: boolean
     * Forces at least one file upload.
     * Defaults to 'false'
     * @param {?} required
     * @return {?}
     */
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    uploadPressed() {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    }
    /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    handleSelect(value) {
        this.value = value;
        this.onSelect.emit(value);
    }
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    cancel() {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v) {
            this.cancel();
        }
    }
}
TdFileUploadComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdFileUploadComponent),
                        multi: true,
                    }],
                selector: 'td-file-upload',
                inputs: ['disabled', 'value'],
                styles: [`.td-file-upload{
  padding-left:8px;
  padding-right:8px; }
.td-file-upload-cancel{
  height:24px;
  width:24px;
  position:relative;
  top:24px;
  left:-12px; }
  ::ng-deep [dir='rtl'] .td-file-upload-cancel{
    right:-12px;
    left:0; }
  .td-file-upload-cancel mat-icon{
    border-radius:12px;
    vertical-align:baseline; }
.drop-zone{
  border-radius:3px; }
  .drop-zone *{
    pointer-events:none; }
`],
                template: `<td-file-input *ngIf="!value"
               [(ngModel)]="value"
               [multiple]="multiple"
               [disabled]="disabled"
               [accept]="accept"
               [color]="defaultColor"
               (select)="handleSelect($event)">
  <ng-template [cdkPortalHost]="inputLabel" [ngIf]="true"></ng-template>
</td-file-input>
<div *ngIf="value">
  <button #fileUpload
          class="td-file-upload"
          mat-raised-button
          type="button"
          [color]="activeColor"
          (keyup.delete)="cancel()"
          (keyup.backspace)="cancel()"
          (keyup.escape)="cancel()"
          (click)="uploadPressed()">
    <ng-content></ng-content>
  </button>
  <button mat-icon-button
          type="button"
          class="td-file-upload-cancel"
          [color]="cancelColor"
          (click)="cancel()">
    <mat-icon>cancel</mat-icon>
  </button>
</div>`,
            },] },
];
/** @nocollapse */
TdFileUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
TdFileUploadComponent.propDecorators = {
    "fileInput": [{ type: ViewChild, args: [TdFileInputComponent,] },],
    "inputLabel": [{ type: ContentChild, args: [TdFileInputLabelDirective,] },],
    "defaultColor": [{ type: Input, args: ['defaultColor',] },],
    "activeColor": [{ type: Input, args: ['activeColor',] },],
    "cancelColor": [{ type: Input, args: ['cancelColor',] },],
    "multiple": [{ type: Input, args: ['multiple',] },],
    "required": [{ type: Input, args: ['required',] },],
    "accept": [{ type: Input, args: ['accept',] },],
    "onSelect": [{ type: Output, args: ['select',] },],
    "onUpload": [{ type: Output, args: ['upload',] },],
    "onCancel": [{ type: Output, args: ['cancel',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class TdFileService {
    constructor() {
        this._progressSubject = new Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    /**
     * Gets progress observable to keep track of the files being uploaded.
     * Needs to be supported by backend.
     * @return {?}
     */
    get progress() {
        return this._progressObservable;
    }
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
     * Will be depricated when angular fixes [Http] to allow [FormData] as body.
     * @param {?} options
     * @return {?}
     */
    upload(options) {
        return new Observable((subscriber) => {
            let /** @type {?} */ xhr = new XMLHttpRequest();
            let /** @type {?} */ formData = new FormData();
            if (options.file !== undefined) {
                formData.append('file', options.file);
            }
            else if (options.formData !== undefined) {
                formData = options.formData;
            }
            else {
                return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
            }
            xhr.upload.onprogress = (event) => {
                let /** @type {?} */ progress = 0;
                if (event.lengthComputable) {
                    progress = Math.round(event.loaded / event.total * 100);
                }
                this._progressSubject.next(progress);
            };
            xhr.onreadystatechange = () => {
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
                for (let /** @type {?} */ key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        });
    }
}
TdFileService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TdFileService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_FILE = [
    TdFileSelectDirective,
    TdFileDropDirective,
    TdFileUploadComponent,
    TdFileInputComponent,
    TdFileInputLabelDirective,
];
class CovalentFileModule {
}
CovalentFileModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    CommonModule,
                    MatIconModule,
                    MatButtonModule,
                    PortalModule,
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
            },] },
];
/** @nocollapse */
CovalentFileModule.ctorParameters = () => [];

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

export { CovalentFileModule, TdFileDropBase, _TdFileDropMixinBase, TdFileDropDirective, TdFileSelectDirective, TdFileInputLabelDirective, TdFileInputBase, _TdFileInputMixinBase, TdFileInputComponent, TdFileUploadBase, _TdFileUploadMixinBase, TdFileUploadComponent, TdFileService };
//# sourceMappingURL=covalent-core-file.js.map
