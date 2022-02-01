import { Renderer2, ElementRef, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { TdExpansionPanelComponent } from './expansion-panel.component';
export declare class TdExpansionPanelGroupComponent implements AfterContentInit, OnDestroy {
    private _renderer;
    private _elementRef;
    private _multi;
    private _lastOpenedPanels;
    private _destroyed;
    private _stopWatchingPanels;
    /**
     * multi?: boolean
     * Sets whether multiple panels can be opened at a given time.
     * Set to false for accordion mode.
     * Defaults to false.
     */
    set multi(multi: boolean);
    expansionPanels: QueryList<TdExpansionPanelComponent>;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    /**
     * Opens all expansion panels, only if multi set set to true.
     */
    openAll(): void;
    /**
     * Closes all expansion panels
     */
    closeAll(): void;
    private _attachListeners;
    private _closeAllExcept;
}
