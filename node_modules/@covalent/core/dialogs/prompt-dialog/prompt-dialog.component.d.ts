import { ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
export declare class TdPromptDialogComponent implements AfterViewInit {
    private _dialogRef;
    title: string;
    message: string;
    value: string;
    cancelButton: string;
    acceptButton: string;
    _input: ElementRef;
    constructor(_dialogRef: MatDialogRef<TdPromptDialogComponent>);
    ngAfterViewInit(): void;
    /**
     * Method executed when input is focused
     * Selects all text
     */
    handleInputFocus(): void;
    cancel(): void;
    accept(): void;
}
