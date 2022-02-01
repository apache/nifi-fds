import { Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DragRef } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
export declare class ResizableDraggableDialog {
    private _document;
    private _renderer2;
    private _dialogRef;
    private _dragRef;
    cornerElements: HTMLElement[];
    pointerDownSubs: Subscription[];
    constructor(_document: any, _renderer2: Renderer2, _dialogRef: MatDialogRef<any>, _dragRef: DragRef);
    attach(): void;
    detach(): void;
    private _getDialogWrapper;
    private _getViewportDimensions;
    private _getDialogWrapperDimensions;
    private _initialPositionReset;
    private _attachCorners;
    private _handleMouseDown;
}
