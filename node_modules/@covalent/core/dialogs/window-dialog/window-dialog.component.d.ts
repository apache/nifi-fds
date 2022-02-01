import { EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export declare class TdWindowDialogComponent {
    toolbarColor: ThemePalette;
    docked: boolean;
    title: string;
    toggleDockedStateLabel: string;
    closeLabel: string;
    dockToggled: EventEmitter<boolean>;
    closed: EventEmitter<void>;
    toolbarHeight: number;
    toggleDockedState(): void;
}
