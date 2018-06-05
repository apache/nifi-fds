import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ICanDisable, IControlValueAccessor } from '@covalent/core/common';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
export declare class TdFileUploadBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdFileUploadMixinBase: (new (...args: any[]) => IControlValueAccessor) & (new (...args: any[]) => ICanDisable) & typeof TdFileUploadBase;
export declare class TdFileUploadComponent extends _TdFileUploadMixinBase implements IControlValueAccessor, ICanDisable {
    private _multiple;
    private _required;
    fileInput: TdFileInputComponent;
    inputLabel: TdFileInputLabelDirective;
    /**
     * defaultColor?: string
     * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
     */
    defaultColor: string;
    /**
     * activeColor?: string
     * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
     */
    activeColor: string;
    /**
     * cancelColor?: string
     * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
     */
    cancelColor: string;
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
     */
    multiple: boolean;
    /**
     * required?: boolean
     * Forces at least one file upload.
     * Defaults to 'false'
     */
    required: boolean;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     */
    accept: string;
    /**
     * select?: function
     * Event emitted when a file is selected.
     * Emits a [File | FileList] object.
     */
    onSelect: EventEmitter<File | FileList>;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     */
    onUpload: EventEmitter<File | FileList>;
    /**
     * cancel?: function
     * Event emitted when cancel button is clicked.
     */
    onCancel: EventEmitter<void>;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    /**
     * Method executed when upload button is clicked.
     */
    uploadPressed(): void;
    /**
     * Method executed when a file is selected.
     */
    handleSelect(value: File | FileList): void;
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    cancel(): void;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
}
