import { EventEmitter, ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { ICanDisable, IControlValueAccessor } from '@covalent/core/common';
export declare class TdFileInputLabelDirective extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
export declare class TdFileInputBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdFileInputMixinBase: (new (...args: any[]) => IControlValueAccessor) & (new (...args: any[]) => ICanDisable) & typeof TdFileInputBase;
export declare class TdFileInputComponent extends _TdFileInputMixinBase implements IControlValueAccessor, ICanDisable {
    private _renderer;
    private _multiple;
    /** The native `<input type="file"> element */
    _inputElement: ElementRef;
    readonly inputElement: HTMLInputElement;
    /**
     * color?: string
     * Sets button color. Uses same color palette accepted as [MatButton].
     */
    color: string;
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
     */
    multiple: boolean;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     */
    accept: string;
    /**
     * select?: function
     * Event emitted a file is selected
     * Emits a [File | FileList] object.
     */
    onSelect: EventEmitter<File | FileList>;
    constructor(_renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    /**
     * Method executed when a file is selected.
     */
    handleSelect(files: File | FileList): void;
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     */
    clear(): void;
    /** Method executed when the disabled value changes */
    onDisabledChange(v: boolean): void;
    /**
     * Sets disable to the component. Implemented as part of ControlValueAccessor.
     */
    setDisabledState(isDisabled: boolean): void;
}
