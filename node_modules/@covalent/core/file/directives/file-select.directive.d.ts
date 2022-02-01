import { EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class TdFileSelectDirective {
    private model;
    private _multiple;
    /**
     * multiple?: boolean
     * Sets whether multiple files can be selected at once in host element, or just a single file.
     * Can also be 'multiple' native attribute.
     */
    set multiple(multiple: boolean);
    /**
     * fileSelect?: function
     * Event emitted when a file or files are selected in host [HTMLInputElement].
     * Emits a [FileList | File] object.
     * Alternative to not use [(ngModel)].
     */
    fileSelect: EventEmitter<FileList | File>;
    /**
     * Binds native 'multiple' attribute if [multiple] property is 'true'.
     */
    get multipleBinding(): string;
    constructor(model: NgModel);
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
     */
    onChange(event: Event): void;
}
