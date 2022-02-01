import { EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
export interface ITdDataTableSortChangeEvent {
    order: TdDataTableSortingOrder;
    name: string;
}
export declare class TdDataTableColumnComponent {
    private _elementRef;
    private _renderer;
    private _sortOrder;
    _columnContent: ElementRef;
    get projectedWidth(): number;
    /**
     * name?: string
     * Sets unique column [name] for [sortable] events.
     */
    name: string;
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     */
    sortable: boolean;
    /**
     * active?: boolean
     * Sets column to active state when 'true'.
     * Defaults to 'false'
     */
    active: boolean;
    /**
     * numeric?: boolean
     * Makes column follow the numeric data-table specs and sort icon.
     * Defaults to 'false'
     */
    numeric: boolean;
    /**
     * if column sort order is present
     */
    isColumnSortOrder: boolean;
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of column.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     */
    set sortOrder(order: 'ASC' | 'DESC');
    /**
     * sortChange?: function
     * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
     * Emits an [ITdDataTableSortChangeEvent] implemented object.
     */
    sortChange: EventEmitter<ITdDataTableSortChangeEvent>;
    get bindClickable(): boolean;
    get bingSortable(): boolean;
    get bindActive(): boolean;
    get bindNumeric(): boolean;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    /**
     * Listening to click event on host to throw a sort event
     */
    handleClick(): void;
    isAscending(): boolean;
    isDescending(): boolean;
}
