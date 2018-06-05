import { QueryList, AfterContentInit } from '@angular/core';
export declare class TdDialogTitleDirective {
}
export declare class TdDialogContentDirective {
}
export declare class TdDialogActionsDirective {
}
export declare class TdDialogComponent implements AfterContentInit {
    dialogTitle: QueryList<TdDialogTitleDirective>;
    dialogContent: QueryList<TdDialogContentDirective>;
    dialogActions: QueryList<TdDialogActionsDirective>;
    ngAfterContentInit(): void;
}
