import { MatDialogRef } from '@angular/material/dialog';
export declare class TdAlertDialogComponent {
    private _dialogRef;
    title: string;
    message: string;
    closeButton: string;
    constructor(_dialogRef: MatDialogRef<TdAlertDialogComponent>);
    close(): void;
}
