import { EventEmitter, ChangeDetectorRef, OnDestroy, AfterViewInit, TemplateRef, AfterContentInit, QueryList, ElementRef, OnInit, AfterContentChecked } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { TdDataTableRowComponent } from './data-table-row/data-table-row.component';
import { ITdDataTableSortChangeEvent, TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
import { IControlValueAccessor } from '@covalent/core/common';
export declare enum TdDataTableSortingOrder {
    Ascending = "ASC",
    Descending = "DESC",
}
export interface ITdDataTableColumnWidth {
    min?: number;
    max?: number;
}
export interface ITdDataTableColumn {
    name: string;
    label: string;
    tooltip?: string;
    numeric?: boolean;
    format?: (value: any) => any;
    nested?: boolean;
    sortable?: boolean;
    hidden?: boolean;
    filter?: boolean;
    width?: ITdDataTableColumnWidth | number;
}
export interface ITdDataTableSelectEvent {
    row: any;
    selected: boolean;
    index: number;
}
export interface ITdDataTableSelectAllEvent {
    rows: any[];
    selected: boolean;
}
export interface ITdDataTableRowClickEvent {
    row: any;
    index: number;
}
export interface IInternalColumnWidth {
    value: number;
    limit: boolean;
    index: number;
    min?: boolean;
    max?: boolean;
}
export declare class TdDataTableBase {
    _changeDetectorRef: ChangeDetectorRef;
    constructor(_changeDetectorRef: ChangeDetectorRef);
}
export declare const _TdDataTableMixinBase: (new (...args: any[]) => IControlValueAccessor) & typeof TdDataTableBase;
export declare class TdDataTableComponent extends _TdDataTableMixinBase implements IControlValueAccessor, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
    private _document;
    private _elementRef;
    private _domSanitizer;
    /** responsive width calculations */
    private _resizeSubs;
    private _rowsChangedSubs;
    private _hostWidth;
    readonly hostWidth: number;
    private _widths;
    private _onResize;
    /** column header reposition and viewpoort */
    private _verticalScrollSubs;
    private _horizontalScrollSubs;
    private _scrollHorizontalOffset;
    private _onHorizontalScroll;
    private _onVerticalScroll;
    private _rowHeightCache;
    private _totalHeight;
    private _hostHeight;
    private _scrollVerticalOffset;
    private _offsetTransform;
    private _fromRow;
    private _toRow;
    /**
     * Returns the offset style with a proper calculation on how much it should move
     * over the y axis of the total height
     */
    readonly offsetTransform: SafeStyle;
    /**
     * Returns the assumed total height of the rows
     */
    readonly totalHeight: number;
    /**
     * Returns the initial row to render in the viewport
     */
    readonly fromRow: number;
    /**
     * Returns the last row to render in the viewport
     */
    readonly toRow: number;
    private _valueChangesSubs;
    /** internal attributes */
    private _data;
    private _virtualData;
    private _columns;
    private _selectable;
    private _clickable;
    private _multiple;
    private _allSelected;
    private _indeterminate;
    /** sorting */
    private _sortable;
    private _sortBy;
    private _sortOrder;
    /** shift select */
    private _shiftPreviouslyPressed;
    private _lastSelectedIndex;
    private _firstSelectedIndex;
    private _firstCheckboxValue;
    /** template fetching support */
    private _templateMap;
    _templates: QueryList<TdDataTableTemplateDirective>;
    _scrollableDiv: ElementRef;
    _colElements: QueryList<TdDataTableColumnComponent>;
    _rows: QueryList<TdDataTableRowComponent>;
    /**
     * Returns scroll position to reposition column headers
     */
    readonly columnsLeftScroll: number;
    /**
     * Returns true if all values are selected.
     */
    readonly allSelected: boolean;
    /**
     * Returns true if all values are not deselected
     * and at least one is.
     */
    readonly indeterminate: boolean;
    /**
     * data?: {[key: string]: any}[]
     * Sets the data to be rendered as rows.
     */
    data: any[];
    readonly virtualData: any[];
    /**
     * columns?: ITdDataTableColumn[]
     * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
     * Defaults to [data] keys.
     */
    columns: ITdDataTableColumn[];
    /**
     * selectable?: boolean
     * Enables row selection events, hover and selected row states.
     * Defaults to 'false'
     */
    selectable: boolean;
    /**
     * clickable?: boolean
     * Enables row click events, hover.
     * Defaults to 'false'
     */
    clickable: boolean;
    /**
     * multiple?: boolean
     * Enables multiple row selection. [selectable] needs to be enabled.
     * Defaults to 'false'
     */
    multiple: boolean;
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     */
    sortable: boolean;
    /**
     * sortBy?: string
     * Sets the active sort column. [sortable] needs to be enabled.
     */
    sortBy: string;
    readonly sortByColumn: ITdDataTableColumn;
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     */
    sortOrder: 'ASC' | 'DESC';
    readonly sortOrderEnum: TdDataTableSortingOrder;
    readonly hasData: boolean;
    /**
     * sortChange?: function
     * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
     * Emits an [ITdDataTableSortChangeEvent] implemented object.
     */
    onSortChange: EventEmitter<ITdDataTableSortChangeEvent>;
    /**
     * rowSelect?: function
     * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectEvent] implemented object.
     */
    onRowSelect: EventEmitter<ITdDataTableSelectEvent>;
    /**
     * rowClick?: function
     * Event emitted when a row is clicked.
     * Emits an [ITdDataTableRowClickEvent] implemented object.
     */
    onRowClick: EventEmitter<ITdDataTableRowClickEvent>;
    /**
     * selectAll?: function
     * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
     * Emits an [ITdDataTableSelectAllEvent] implemented object.
     */
    onSelectAll: EventEmitter<ITdDataTableSelectAllEvent>;
    constructor(_document: any, _elementRef: ElementRef, _domSanitizer: DomSanitizer, _changeDetectorRef: ChangeDetectorRef);
    /**
     * compareWith?: function(row, model): boolean
     * Allows custom comparison between row and model to see if row is selected or not
     * Default comparation is by reference
     */
    compareWith: (row: any, model: any) => boolean;
    /**
     * Initialize observable for resize and scroll events
     */
    ngOnInit(): void;
    /**
     * Loads templates and sets them in a map for faster access.
     */
    ngAfterContentInit(): void;
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     */
    ngAfterContentChecked(): void;
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     */
    ngAfterViewInit(): void;
    /**
     * Unsubscribes observables when data table is destroyed
     */
    ngOnDestroy(): void;
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     */
    handleScroll(event: Event): void;
    /**
     * Returns the width needed for the columns via index
     */
    getColumnWidth(index: number): number;
    getCellValue(column: ITdDataTableColumn, value: any): string;
    /**
     * Getter method for template references
     */
    getTemplateRef(name: string): TemplateRef<any>;
    /**
     * Clears model (ngModel) of component by removing all values in array.
     */
    clearModel(): void;
    /**
     * Refreshes data table and rerenders [data] and [columns]
     */
    refresh(): void;
    /**
     * Selects or clears all rows depending on 'checked' value.
     */
    selectAll(checked: boolean): void;
    /**
     * Checks if row is selected
     */
    isRowSelected(row: any): boolean;
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     */
    select(row: any, event: Event, currentSelected: number): void;
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     */
    disableTextSelection(): void;
    /**
     * Resets the original onselectstart method.
     */
    enableTextSelection(): void;
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     */
    handleRowClick(row: any, index: number, event: Event): void;
    /**
     * Method handle for sort click event in column headers.
     */
    handleSort(column: ITdDataTableColumn): void;
    /**
     * Handle all keyup events when focusing a data table row
     */
    _rowKeyup(event: KeyboardEvent, row: any, index: number): void;
    /**
     * Method to prevent the default events
     */
    blockEvent(event: Event): void;
    private _getNestedValue(name, value);
    /**
     * Does the actual Row Selection
     */
    private _doSelection(row, rowIndex);
    /**
     * Calculate all the state of all checkboxes
     */
    private _calculateCheckboxState();
    /**
     * Calculates the widths for columns and cells depending on content
     */
    private _calculateWidths();
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     */
    private _adjustColumnWidhts();
    /**
     * Adjusts a single column to see if it can be recalculated
     */
    private _adjustColumnWidth(index, value);
    /**
     * Generic method to calculate column width
     */
    private _calculateWidth();
    /**
     * Method to calculate the rows to be rendered in the viewport
     */
    private _calculateVirtualRows();
}
