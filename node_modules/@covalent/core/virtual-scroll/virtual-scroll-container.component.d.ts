import { EventEmitter, AfterViewInit, ChangeDetectorRef, QueryList, ElementRef, Renderer2, AfterViewChecked, OnDestroy, TrackByFunction } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
export interface ITdVirtualScrollBottomEvent {
    lastRow: any;
    lastIndex: number;
}
export declare class TdVirtualScrollContainerComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private _elementRef;
    private _domSanitizer;
    private _renderer;
    private _changeDetectorRef;
    private _subs;
    private _bottom;
    private _initialized;
    private _totalHeight;
    private _hostHeight;
    private _scrollVerticalOffset;
    private _offsetTransform;
    private _fromRow;
    private _toRow;
    private _data;
    private _virtualData;
    /**
     * data: any[]
     * List of items to virtually iterate on.
     */
    set data(data: any[]);
    get data(): any[];
    get virtualData(): any[];
    /**
     * bottom: function
     * Method to be executed when user scrolled to the last item of the list.
     * An [ITdVirtualScrollBottomEvent] event is emitted
     */
    bottom: EventEmitter<ITdVirtualScrollBottomEvent>;
    _rows: QueryList<ElementRef>;
    _rowTemplate: TdVirtualScrollRowDirective;
    get rowHeight(): number;
    get totalHeight(): number;
    get fromRow(): number;
    get toRow(): number;
    get offsetTransform(): SafeStyle;
    constructor(_elementRef: ElementRef, _domSanitizer: DomSanitizer, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    /**
     * trackBy?: TrackByFunction
     * This accepts the same trackBy function [ngFor] does.
     * https://angular.io/api/core/TrackByFunction
     */
    trackBy: TrackByFunction<any>;
    handleScroll(event: Event): void;
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     */
    refresh(): void;
    /**
     * Method to scroll to a specific row of the list.
     */
    scrollTo(row: number): void;
    /**
     * Method to scroll to the start of the list.
     */
    scrollToStart(): void;
    /**
     * Method to scroll to the end of the list.
     */
    scrollToEnd(): void;
    private _calculateVirtualRows;
}
