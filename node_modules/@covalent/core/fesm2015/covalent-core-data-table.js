import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { mixinControlValueAccessor } from '@covalent/core/common';
import { Component, Input, Renderer2, ElementRef, HostListener, Directive, TemplateRef, ViewContainerRef, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ContentChildren, Inject, Optional, ViewChildren, HostBinding, Injectable, SkipSelf, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableColumnRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
}
TdDataTableColumnRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-column-row]',
                template: "<ng-content></ng-content>",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
class TdDataTableRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (selected) {
            this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
        }
        this._selected = selected;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        let height = 48;
        if (this._elementRef.nativeElement) {
            height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return height;
    }
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    clickListener() {
        this.focus();
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
TdDataTableRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-row]',
                template: "<ng-content></ng-content>",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableRowComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    clickListener: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableTemplateDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdDataTableTemplateDirective.decorators = [
    { type: Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] }
];
/** @nocollapse */
TdDataTableTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
TdDataTableTemplateDirective.propDecorators = {
    tdDataTableTemplate: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @enum {string} */
const TdDataTableSortingOrder = {
    Ascending: 'ASC',
    Descending: 'DESC',
};
/**
 * Constant to set the rows offset before and after the viewport
 * @type {?}
 */
const TD_VIRTUAL_OFFSET = 2;
/**
 * Constant to set default row height if none is provided
 * @type {?}
 */
const TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
class TdDataTableBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
/* tslint:disable-next-line */
/** @type {?} */
const _TdDataTableMixinBase = mixinControlValueAccessor(TdDataTableBase, []);
class TdDataTableComponent extends _TdDataTableMixinBase {
    /**
     * @param {?} _document
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _changeDetectorRef
     */
    constructor(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
        super(_changeDetectorRef);
        this._document = _document;
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._hostWidth = 0;
        /**
         * manually resizable columns
         */
        this._resizableColumns = false;
        this._columnClientX = 0;
        this._onColumnResize = new Subject();
        this._widths = [];
        this._onResize = new Subject();
        this._scrollHorizontalOffset = 0;
        this._onHorizontalScroll = new Subject();
        this._onVerticalScroll = new Subject();
        // Array of cached row heights to allow dynamic row heights
        this._rowHeightCache = [];
        // Total pseudo height of all the elements
        this._totalHeight = 0;
        // Total host height for the viewport
        this._hostHeight = 0;
        // Scrolled vertical pixels
        this._scrollVerticalOffset = 0;
        // Variables that set from and to which rows will be rendered
        this._fromRow = 0;
        this._toRow = 0;
        this._selectable = false;
        this._clickable = false;
        this._multiple = true;
        this._allSelected = false;
        this._indeterminate = false;
        /**
         * sorting
         */
        this._sortable = false;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * shift select
         */
        this._shiftPreviouslyPressed = false;
        this._lastSelectedIndex = -1;
        this._firstSelectedIndex = -1;
        this._firstCheckboxValue = false;
        /**
         * template fetching support
         */
        this._templateMap = new Map();
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        this.onRowSelect = new EventEmitter();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        this.onRowClick = new EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        this.onSelectAll = new EventEmitter();
        /**
         * compareWith?: function(row, model): boolean
         * Allows custom comparison between row and model to see if row is selected or not
         * Default comparation is by reference
         */
        this.compareWith = (row, model) => {
            return row === model;
        };
    }
    /**
     * @return {?}
     */
    get resizingColumn() {
        return this._resizingColumn;
    }
    /**
     * @return {?}
     */
    get hostWidth() {
        // if the checkboxes are rendered, we need to remove their width
        // from the total width to calculate properly
        if (this.selectable) {
            return this._hostWidth - 42;
        }
        return this._hostWidth;
    }
    /**
     * Returns the offset style with a proper calculation on how much it should move
     * over the y axis of the total height
     * @return {?}
     */
    get offsetTransform() {
        return this._offsetTransform;
    }
    /**
     * Returns the assumed total height of the rows
     * @return {?}
     */
    get totalHeight() {
        return this._totalHeight;
    }
    /**
     * Returns the initial row to render in the viewport
     * @return {?}
     */
    get fromRow() {
        return this._fromRow;
    }
    /**
     * Returns the last row to render in the viewport
     * @return {?}
     */
    get toRow() {
        return this._toRow;
    }
    /**
     * Returns scroll position to reposition column headers
     * @return {?}
     */
    get columnsLeftScroll() {
        return this._scrollHorizontalOffset * -1;
    }
    /**
     * Returns true if all values are selected.
     * @return {?}
     */
    get allSelected() {
        return this._allSelected;
    }
    /**
     * Returns true if all values are not deselected
     * and at least one is.
     * @return {?}
     */
    get indeterminate() {
        return this._indeterminate;
    }
    /**
     * data?: {[key: string]: any}[]
     * Sets the data to be rendered as rows.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this._rowHeightCache = [];
        Promise.resolve().then(() => {
            this.refresh();
            // scroll back to the top if the data has changed
            this._scrollableDiv.nativeElement.scrollTop = 0;
        });
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    get virtualData() {
        return this._virtualData;
    }
    /**
     * columns?: ITdDataTableColumn[]
     * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
     * Defaults to [data] keys.
     * @param {?} cols
     * @return {?}
     */
    set columns(cols) {
        this._columns = cols;
    }
    /**
     * @return {?}
     */
    get columns() {
        if (this._columns) {
            return this._columns;
        }
        if (this.hasData) {
            this._columns = [];
            // if columns is undefined, use key in [data] rows as name and label for column headers.
            /** @type {?} */
            let row = this._data[0];
            Object.keys(row).forEach((k) => {
                if (!this._columns.find((c) => c.name === k)) {
                    this._columns.push({ name: k, label: k });
                }
            });
            return this._columns;
        }
        else {
            return [];
        }
    }
    /**
     * resizableColumns?: boolean
     * Enables manual column resize.
     * Defaults to 'false'
     * @param {?} resizableColumns
     * @return {?}
     */
    set resizableColumns(resizableColumns) {
        this._resizableColumns = coerceBooleanProperty(resizableColumns);
    }
    /**
     * @return {?}
     */
    get resizableColumns() {
        return this._resizableColumns;
    }
    /**
     * selectable?: boolean
     * Enables row selection events, hover and selected row states.
     * Defaults to 'false'
     * @param {?} selectable
     * @return {?}
     */
    set selectable(selectable) {
        this._selectable = coerceBooleanProperty(selectable);
    }
    /**
     * @return {?}
     */
    get selectable() {
        return this._selectable;
    }
    /**
     * clickable?: boolean
     * Enables row click events, hover.
     * Defaults to 'false'
     * @param {?} clickable
     * @return {?}
     */
    set clickable(clickable) {
        this._clickable = coerceBooleanProperty(clickable);
    }
    /**
     * @return {?}
     */
    get clickable() {
        return this._clickable;
    }
    /**
     * multiple?: boolean
     * Enables multiple row selection. [selectable] needs to be enabled.
     * Defaults to 'false'
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     * @param {?} sortable
     * @return {?}
     */
    set sortable(sortable) {
        this._sortable = coerceBooleanProperty(sortable);
    }
    /**
     * @return {?}
     */
    get sortable() {
        return this._sortable;
    }
    /**
     * sortBy?: string
     * Sets the active sort column. [sortable] needs to be enabled.
     * @param {?} columnName
     * @return {?}
     */
    set sortBy(columnName) {
        if (!columnName) {
            return;
        }
        /** @type {?} */
        const column = this.columns.find((c) => c.name === columnName);
        if (!column) {
            throw new Error('[sortBy] must be a valid column name');
        }
        this._sortBy = column;
    }
    /**
     * @return {?}
     */
    get sortByColumn() {
        return this._sortBy;
    }
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     * @param {?} order
     * @return {?}
     */
    set sortOrder(order) {
        /** @type {?} */
        let sortOrder = order ? order.toUpperCase() : 'ASC';
        if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
            throw new Error('[sortOrder] must be empty, ASC or DESC');
        }
        this._sortOrder = sortOrder === 'ASC' ?
            TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
    }
    /**
     * @return {?}
     */
    get sortOrderEnum() {
        return this._sortOrder;
    }
    /**
     * @return {?}
     */
    get hasData() {
        return this._data && this._data.length > 0;
    }
    /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    ngOnInit() {
        // initialize observable for resize calculations
        this._resizeSubs = this._onResize.asObservable().subscribe(() => {
            if (this._rows) {
                this._rows.toArray().forEach((row, index) => {
                    this._rowHeightCache[this.fromRow + index] = row.height + 1;
                });
            }
            this._calculateWidths();
            this._calculateVirtualRows();
        });
        // initialize observable for column resize calculations
        this._columnResizeSubs = this._onColumnResize.asObservable().pipe(debounceTime(0)).subscribe((clientX) => {
            this._columnClientX = clientX;
            this._calculateWidths();
            this._changeDetectorRef.markForCheck();
        });
        // initialize observable for scroll column header reposition
        this._horizontalScrollSubs = this._onHorizontalScroll.asObservable()
            .subscribe((horizontalScroll) => {
            this._scrollHorizontalOffset = horizontalScroll;
            this._changeDetectorRef.markForCheck();
        });
        // initialize observable for virtual scroll rendering
        this._verticalScrollSubs = this._onVerticalScroll.asObservable()
            .subscribe((verticalScroll) => {
            this._scrollVerticalOffset = verticalScroll;
            this._calculateVirtualRows();
            this._changeDetectorRef.markForCheck();
        });
        this._valueChangesSubs = this.valueChanges.subscribe((value) => {
            this.refresh();
        });
    }
    /**
     * Loads templates and sets them in a map for faster access.
     * @return {?}
     */
    ngAfterContentInit() {
        for (let i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    }
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    ngAfterContentChecked() {
        // check if the scroll has been reset when element is hidden
        if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
            // scroll back to the top if element has been reset
            this._onVerticalScroll.next(0);
        }
        if (this._elementRef.nativeElement) {
            /** @type {?} */
            let newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                setTimeout(() => {
                    this._hostWidth = newHostWidth;
                    this._onResize.next();
                }, 0);
            }
        }
        if (this._scrollableDiv.nativeElement) {
            /** @type {?} */
            let newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
            // if the height of the viewport has changed, then we mark for check
            if (this._hostHeight !== newHostHeight) {
                this._hostHeight = newHostHeight;
                this._calculateVirtualRows();
                this._changeDetectorRef.markForCheck();
            }
        }
    }
    /**
     * Registers to an observable that checks if all rows have been rendered
     * so we can start calculating the widths
     * @return {?}
     */
    ngAfterViewInit() {
        this._rowsChangedSubs = this._rows.changes.pipe(debounceTime(0)).subscribe(() => {
            this._onResize.next();
        });
        this._calculateVirtualRows();
    }
    /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    ngOnDestroy() {
        if (this._resizeSubs) {
            this._resizeSubs.unsubscribe();
        }
        if (this._columnResizeSubs) {
            this._columnResizeSubs.unsubscribe();
        }
        if (this._horizontalScrollSubs) {
            this._horizontalScrollSubs.unsubscribe();
        }
        if (this._verticalScrollSubs) {
            this._verticalScrollSubs.unsubscribe();
        }
        if (this._rowsChangedSubs) {
            this._rowsChangedSubs.unsubscribe();
        }
        if (this._valueChangesSubs) {
            this._valueChangesSubs.unsubscribe();
        }
    }
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        let element = ((/** @type {?} */ (event.target)));
        if (element) {
            /** @type {?} */
            let horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            /** @type {?} */
            let verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._onVerticalScroll.next(verticalScroll);
            }
        }
    }
    /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    getColumnWidth(index) {
        if (this._widths[index]) {
            return this._widths[index].value;
        }
        return undefined;
    }
    /**
     * @param {?} column
     * @param {?} value
     * @return {?}
     */
    getCellValue(column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    }
    /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    getTemplateRef(name) {
        return this._templateMap.get(name);
    }
    /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    clearModel() {
        this.value.splice(0, this.value.length);
    }
    /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    refresh() {
        this._calculateVirtualRows();
        this._calculateWidths();
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    selectAll(checked) {
        /** @type {?} */
        let toggledRows = [];
        if (checked) {
            this._data.forEach((row) => {
                // skiping already selected rows
                if (!this.isRowSelected(row)) {
                    this.value.push(row);
                    // checking which ones are being toggled
                    toggledRows.push(row);
                }
            });
            this._allSelected = true;
            this._indeterminate = true;
        }
        else {
            this._data.forEach((row) => {
                // checking which ones are being toggled
                if (this.isRowSelected(row)) {
                    toggledRows.push(row);
                    /** @type {?} */
                    let modelRow = this.value.filter((val) => {
                        return this.compareWith(row, val);
                    })[0];
                    /** @type {?} */
                    let index = this.value.indexOf(modelRow);
                    if (index > -1) {
                        this.value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
        this.onChange(this.value);
    }
    /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    isRowSelected(row) {
        // compare items by [compareWith] function
        return this.value ? this.value.filter((val) => {
            return this.compareWith(row, val);
        }).length > 0 : false;
    }
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    select(row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            // Check to see if Shift key is selected and need to select everything in between
            /** @type {?} */
            let mouseEvent = (/** @type {?} */ (event));
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                /** @type {?} */
                let firstIndex = currentSelected;
                /** @type {?} */
                let lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (let i = firstIndex; i <= lastIndex; i++) {
                        if (this._firstSelectedIndex !== i) {
                            this._doSelection(this._data[i], i);
                        }
                    }
                }
                else if ((this._firstSelectedIndex > currentSelected) || (this._firstSelectedIndex < currentSelected)) {
                    // change indexes depending on where the next checkbox is selected (before or after)
                    if (this._firstSelectedIndex > currentSelected) {
                        lastIndex--;
                    }
                    else if (this._firstSelectedIndex < currentSelected) {
                        firstIndex++;
                    }
                    for (let i = firstIndex; i <= lastIndex; i++) {
                        /** @type {?} */
                        let rowSelected = this.isRowSelected(this._data[i]);
                        // if row is selected and first checkbox was selected
                        // or if row was unselected and first checkbox was unselected
                        // we ignore the toggle
                        if ((this._firstCheckboxValue && !rowSelected) ||
                            (!this._firstCheckboxValue && rowSelected)) {
                            this._doSelection(this._data[i], i);
                        }
                        else if (this._shiftPreviouslyPressed) {
                            // else if the checkbox selected was in the middle of the last selection and the first selection
                            // then we undo the selections
                            if ((currentSelected >= this._firstSelectedIndex && currentSelected <= this._lastSelectedIndex) ||
                                (currentSelected <= this._firstSelectedIndex && currentSelected >= this._lastSelectedIndex)) {
                                this._doSelection(this._data[i], i);
                            }
                        }
                    }
                }
                this._shiftPreviouslyPressed = true;
                // if shift wasnt pressed, then we take the element checked as the first row
                // incase the next click uses shift
            }
            else if (mouseEvent && !mouseEvent.shiftKey) {
                this._firstCheckboxValue = this._doSelection(row, currentSelected);
                this._shiftPreviouslyPressed = false;
                this._firstSelectedIndex = currentSelected;
            }
            this._lastSelectedIndex = currentSelected;
        }
    }
    /**
     * Overrides the onselectstart method of the document so other text on the page
     * doesn't get selected when doing shift selections.
     * @return {?}
     */
    disableTextSelection() {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    }
    /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    enableTextSelection() {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    }
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    handleRowClick(row, index, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            /** @type {?} */
            const srcElement = event.srcElement || event.currentTarget;
            /** @type {?} */
            let element = (/** @type {?} */ (event.target));
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                this.onRowClick.emit({
                    row: row,
                    index: index,
                });
            }
        }
    }
    /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    handleSort(column) {
        if (this._sortBy === column) {
            this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
                TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
        }
        else {
            this._sortBy = column;
            this._sortOrder = TdDataTableSortingOrder.Ascending;
        }
        this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
    }
    /**
     * Handle all keyup events when focusing a data table row
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    _rowKeyup(event, row, index) {
        switch (event.keyCode) {
            case ENTER:
            case SPACE:
                /** if user presses enter or space, the row should be selected */
                if (this.selectable) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case UP_ARROW:
                /**
                 * if users presses the up arrow, we focus the prev row
                 * unless its the first row
                 */
                if (index > 0) {
                    this._rows.toArray()[index - 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index >= 0) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            case DOWN_ARROW:
                /**
                 * if users presses the down arrow, we focus the next row
                 * unless its the last row
                 */
                if (index < (this._rows.toArray().length - 1)) {
                    this._rows.toArray()[index + 1].focus();
                }
                this.blockEvent(event);
                if (this.selectable && this.multiple && event.shiftKey && this.fromRow + index < this._data.length) {
                    this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                }
                break;
            default:
            // default
        }
    }
    /**
     * Sets column index of the dragged column and initial clientX of column
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    _handleStartColumnDrag(index, event) {
        this._columnClientX = event.clientX;
        this._resizingColumn = index;
    }
    /**
     * Calculates new width depending on new clientX of dragger column
     * @param {?} event
     * @return {?}
     */
    _handleColumnDrag(event) {
        // check if there was been a separator clicked for resize
        if (this._resizingColumn !== undefined && event.clientX > 0) {
            /** @type {?} */
            let xPosition = event.clientX;
            // checks if the separator is being moved to try and resize the column, else dont do anything
            if (xPosition > 0 && this._columnClientX > 0 && (xPosition - this._columnClientX) !== 0) {
                // calculate the new width depending if making the column bigger or smaller
                /** @type {?} */
                let proposedManualWidth = this._widths[this._resizingColumn].value + (xPosition - this._columnClientX);
                // if the proposed new width is less than the projected min width of the column, use projected min width
                if (proposedManualWidth < this._colElements.toArray()[this._resizingColumn].projectedWidth) {
                    proposedManualWidth = this._colElements.toArray()[this._resizingColumn].projectedWidth;
                }
                this.columns[this._resizingColumn].width = proposedManualWidth;
                // update new x position for the resized column
                this._onColumnResize.next(xPosition);
            }
        }
    }
    /**
     * Ends dragged flags
     * @return {?}
     */
    _handleEndColumnDrag() {
        this._columnClientX = undefined;
        this._resizingColumn = undefined;
    }
    /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    blockEvent(event) {
        event.preventDefault();
    }
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    _getNestedValue(name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            /** @type {?} */
            let splitName = name.split(/\.(.+)/, 2);
            return this._getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    }
    /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    _doSelection(row, rowIndex) {
        /** @type {?} */
        let wasSelected = this.isRowSelected(row);
        if (!wasSelected) {
            if (!this._multiple) {
                this.clearModel();
            }
            this.value.push(row);
        }
        else {
            // compare items by [compareWith] function
            row = this.value.filter((val) => {
                return this.compareWith(row, val);
            })[0];
            /** @type {?} */
            let index = this.value.indexOf(row);
            if (index > -1) {
                this.value.splice(index, 1);
            }
        }
        this._calculateCheckboxState();
        this.onRowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
        this.onChange(this.value);
        return !wasSelected;
    }
    /**
     * Calculate all the state of all checkboxes
     * @return {?}
     */
    _calculateCheckboxState() {
        if (this._data) {
            this._allSelected = typeof this._data.find((d) => !this.isRowSelected(d)) === 'undefined';
            this._indeterminate = false;
            for (let row of this._data) {
                if (!this.isRowSelected(row)) {
                    continue;
                }
                this._indeterminate = true;
                break;
            }
        }
    }
    /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    _calculateWidths() {
        if (this._colElements && this._colElements.length) {
            this._widths = [];
            this._colElements.forEach((col, index) => {
                this._adjustColumnWidth(index, this._calculateWidth());
            });
            this._adjustColumnWidhts();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Adjusts columns after calculation to see if they need to be recalculated.
     * @return {?}
     */
    _adjustColumnWidhts() {
        /** @type {?} */
        let fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        /** @type {?} */
        let flexibleWidths = this._widths.filter((width, index) => {
            if (this.columns[index].hidden) {
                return false;
            }
            if (width.limit || width.max || width.min) {
                fixedTotalWidth += width.value;
            }
            return !width.limit && !width.max && !width.min;
        }).length;
        // calculate how much pixes are left that could be spread across
        // the flexible columns
        /** @type {?} */
        let recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            /** @type {?} */
            let newValue = Math.floor(recalculateHostWidth / flexibleWidths);
            /** @type {?} */
            let adjustedNumber = 0;
            // adjust the column widths with the spread pixels
            this._widths.forEach((colWidth) => {
                if (this._widths[colWidth.index].max && this._widths[colWidth.index].value > newValue ||
                    this._widths[colWidth.index].min && this._widths[colWidth.index].value < newValue ||
                    !this._widths[colWidth.index].limit) {
                    this._adjustColumnWidth(colWidth.index, newValue);
                    adjustedNumber++;
                }
            });
            // if there are still columns that need to be recalculated, we start over
            /** @type {?} */
            let newFlexibleWidths = this._widths.filter((width) => {
                return !width.limit && !width.max;
            }).length;
            if (newFlexibleWidths !== adjustedNumber && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    }
    /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    _adjustColumnWidth(index, value) {
        this._widths[index] = {
            value: value,
            index: index,
            limit: false,
            min: false,
            max: false,
        };
        // flag to see if we need to skip the min width projection
        // depending if a width or min width has been provided
        /** @type {?} */
        let skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                /** @type {?} */
                let widthOpts = (/** @type {?} */ (this.columns[index].width));
                // if the column width is less than the configured min, we override it
                skipMinWidthProjection = (widthOpts && !!widthOpts.min);
                if (widthOpts && widthOpts.min >= this._widths[index].value) {
                    this._widths[index].value = widthOpts.min;
                    this._widths[index].min = true;
                    // if the column width is more than the configured max, we override it
                }
                else if (widthOpts && widthOpts.max <= this._widths[index].value) {
                    this._widths[index].value = widthOpts.max;
                    this._widths[index].max = true;
                }
                // if it has a fixed width, then we just set it
            }
            else if (typeof this.columns[index].width === 'number') {
                this._widths[index].value = (/** @type {?} */ (this.columns[index].width));
                skipMinWidthProjection = this._widths[index].limit = true;
            }
        }
        // if there wasn't any width or min width provided, we set a min to what the column width min should be
        if (!skipMinWidthProjection &&
            this._widths[index].value < this._colElements.toArray()[index].projectedWidth) {
            this._widths[index].value = this._colElements.toArray()[index].projectedWidth;
            this._widths[index].min = true;
            this._widths[index].limit = false;
        }
    }
    /**
     * Generic method to calculate column width
     * @return {?}
     */
    _calculateWidth() {
        /** @type {?} */
        let renderedColumns = this.columns.filter((col) => !col.hidden);
        return Math.floor(this.hostWidth / renderedColumns.length);
    }
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    _calculateVirtualRows() {
        /** @type {?} */
        let scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            /** @type {?} */
            let rowHeightSum = 0;
            // loop through all rows to see if we have their height cached
            // and sum them all to calculate the total height
            this._data.forEach((d, i) => {
                // iterate through all rows at first and assume all
                // rows are the same height as the first one
                if (!this._rowHeightCache[i]) {
                    this._rowHeightCache[i] = this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                }
                rowHeightSum += this._rowHeightCache[i];
                // check how many rows have been scrolled
                if (this._scrollVerticalOffset - rowHeightSum > 0) {
                    scrolledRows++;
                }
            });
            this._totalHeight = rowHeightSum;
            // set the initial row to be rendered taking into account the row offset
            /** @type {?} */
            let fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            let hostHeight = this._hostHeight;
            /** @type {?} */
            let index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            /** @type {?} */
            let range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
            /** @type {?} */
            let toRow = range + this.fromRow;
            // if last row is greater than the total length, then we use the total length
            if (isFinite(toRow) && toRow > this._data.length) {
                toRow = this._data.length;
            }
            else if (!isFinite(toRow)) {
                toRow = TD_VIRTUAL_OFFSET;
            }
            this._toRow = toRow;
        }
        else {
            this._totalHeight = 0;
            this._fromRow = 0;
            this._toRow = 0;
        }
        /** @type {?} */
        let offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET) {
            for (let index = 0; index < this.fromRow; index++) {
                offset += this._rowHeightCache[index];
            }
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(() => {
            this._changeDetectorRef.markForCheck();
        });
    }
}
TdDataTableComponent.decorators = [
    { type: Component, args: [{
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => TdDataTableComponent),
                        multi: true,
                    }],
                selector: 'td-data-table',
                template: "<table td-data-table\n        [style.left.px]=\"columnsLeftScroll\"\n        [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\"\n          (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\">\n        </mat-checkbox>\n      </th>\n      <th td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\">\n        <span [matTooltip]=\"column.tooltip\">{{column.label}}</span>\n        <span td-column-resizer\n              *ngIf=\"resizableColumns\"\n              draggable=\"true\"\n              class=\"td-data-table-column-resizer\"\n              [class.td-resizing]=\"i === resizingColumn\"\n              (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n              (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n              (drag)=\"_handleColumnDrag($event)\"\n              (dragend)=\"_handleEndColumnDrag()\"\n              (mouseup)=\"_handleEndColumnDrag()\">\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\"\n      (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table td-data-table\n          [style.transform]=\"offsetTransform\"\n          [style.position]=\"'absolute'\"\n          [class.mat-selectable]=\"selectable\"\n          [class.mat-clickable]=\"clickable\">\n    <tbody class=\"td-data-table-body\">\n      <tr td-data-table-row\n          #dtRow\n          [tabIndex]=\"selectable ? 0 : -1\"\n          [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n          *ngFor=\"let row of virtualData; let rowIndex = index\"\n          (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n          (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n          (keydown.space)=\"blockEvent($event)\"\n          (keydown.shift.space)=\"blockEvent($event)\"\n          (keydown.shift)=\"disableTextSelection()\"\n          (keyup.shift)=\"enableTextSelection()\">\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\">\n          </mat-pseudo-checkbox>\n        </td>\n        <td td-data-table-cell\n            [numeric]=\"column.numeric\"\n            [hidden]=\"column.hidden\"\n            *ngFor=\"let column of columns; let i = index\"\n            [style.min-width.px]=\"getColumnWidth(i)\"\n            [style.max-width.px]=\"getColumnWidth(i)\">\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name, index: rowIndex }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                inputs: ['value'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;overflow:hidden}:host .td-data-table-scrollable{position:relative;overflow:auto;height:calc(100% - 56px)}.td-data-table-column-resizer{right:0;width:6px;cursor:col-resize}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{position:absolute;height:100%;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{-webkit-transition:background-color .2s;transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{width:18px;min-width:18px;padding:0 24px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-right:0;padding-left:28px}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{min-width:42px;width:42px;font-size:0!important}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{width:18px;height:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{width:11px!important;height:4px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{width:18px;height:18px;margin:0}"]
            }] }
];
/** @nocollapse */
TdDataTableComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef },
    { type: DomSanitizer },
    { type: ChangeDetectorRef }
];
TdDataTableComponent.propDecorators = {
    _templates: [{ type: ContentChildren, args: [TdDataTableTemplateDirective,] }],
    _scrollableDiv: [{ type: ViewChild, args: ['scrollableDiv',] }],
    _colElements: [{ type: ViewChildren, args: ['columnElement',] }],
    _rows: [{ type: ViewChildren, args: [TdDataTableRowComponent,] }],
    data: [{ type: Input, args: ['data',] }],
    columns: [{ type: Input, args: ['columns',] }],
    resizableColumns: [{ type: Input, args: ['resizableColumns',] }],
    selectable: [{ type: Input, args: ['selectable',] }],
    clickable: [{ type: Input, args: ['clickable',] }],
    multiple: [{ type: Input, args: ['multiple',] }],
    sortable: [{ type: Input, args: ['sortable',] }],
    sortBy: [{ type: Input, args: ['sortBy',] }],
    sortOrder: [{ type: Input, args: ['sortOrder',] }],
    onSortChange: [{ type: Output, args: ['sortChange',] }],
    onRowSelect: [{ type: Output, args: ['rowSelect',] }],
    onRowClick: [{ type: Output, args: ['rowClick',] }],
    onSelectAll: [{ type: Output, args: ['selectAll',] }],
    compareWith: [{ type: Input, args: ['compareWith',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableColumnComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._sortOrder = TdDataTableSortingOrder.Ascending;
        /**
         * name?: string
         * Sets unique column [name] for [sortable] events.
         */
        this.name = '';
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         */
        this.sortable = false;
        /**
         * active?: boolean
         * Sets column to active state when 'true'.
         * Defaults to 'false'
         */
        this.active = false;
        /**
         * numeric?: boolean
         * Makes column follow the numeric data-table specs and sort icon.
         * Defaults to 'false'
         */
        this.numeric = false;
        /**
         * sortChange?: function
         * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
         * Emits an [ITdDataTableSortChangeEvent] implemented object.
         */
        this.onSortChange = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    /**
     * @return {?}
     */
    get projectedWidth() {
        if (this._columnContent && this._columnContent.nativeElement) {
            return ((/** @type {?} */ (this._columnContent.nativeElement))).getBoundingClientRect().width;
        }
        return 100;
    }
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of column.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     * @param {?} order
     * @return {?}
     */
    set sortOrder(order) {
        /** @type {?} */
        let sortOrder = order ? order.toUpperCase() : 'ASC';
        if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
            throw new Error('[sortOrder] must be empty, ASC or DESC');
        }
        this._sortOrder = sortOrder === 'ASC' ?
            TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
    }
    /**
     * @return {?}
     */
    get bindClickable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bingSortable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bindActive() {
        return this.active;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
    /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    handleClick() {
        if (this.sortable) {
            this.onSortChange.emit({ name: this.name, order: this._sortOrder });
        }
    }
    /**
     * @return {?}
     */
    isAscending() {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    }
    /**
     * @return {?}
     */
    isDescending() {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    }
}
TdDataTableColumnComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'th[td-data-table-column]',
                template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableColumnComponent.propDecorators = {
    _columnContent: [{ type: ViewChild, args: ['columnContent', { read: ElementRef },] }],
    name: [{ type: Input, args: ['name',] }],
    sortable: [{ type: Input, args: ['sortable',] }],
    active: [{ type: Input, args: ['active',] }],
    numeric: [{ type: Input, args: ['numeric',] }],
    sortOrder: [{ type: Input, args: ['sortOrder',] }],
    onSortChange: [{ type: Output, args: ['sortChange',] }],
    bindClickable: [{ type: HostBinding, args: ['class.mat-clickable',] }],
    bingSortable: [{ type: HostBinding, args: ['class.mat-sortable',] }],
    bindActive: [{ type: HostBinding, args: ['class.mat-active',] }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }],
    handleClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableCellComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * numeric?: boolean
         * Makes cell follow the numeric data-table specs.
         * Defaults to 'false'
         */
        this.numeric = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-cell');
    }
    /**
     * align?: 'start' | 'center' | 'end'
     * Makes cell content align on demand
     * Defaults to 'left', overrides numeric
     * @param {?} align
     * @return {?}
     */
    set align(align) {
        this._align = align;
    }
    /**
     * @return {?}
     */
    get align() {
        return this._align;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
}
TdDataTableCellComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td[td-data-table-cell]',
                template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\"\n     [class.td-data-table-cell-align-center]=\"align === 'center'\"\n     [class.td-data-table-cell-align-end]=\"align === 'end'\"\n     [class.td-data-table-cell-align-start]=\"align === 'start'\"\n     >\n  <ng-content></ng-content>\n</div>",
                styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableCellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableCellComponent.propDecorators = {
    numeric: [{ type: Input, args: ['numeric',] }],
    align: [{ type: Input }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableTableComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
    }
}
TdDataTableTableComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'table[td-data-table]',
                template: "<ng-content></ng-content>",
                styles: [":host{width:100%;position:relative;border-spacing:0;overflow:hidden;border-collapse:collapse}"]
            }] }
];
/** @nocollapse */
TdDataTableTableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdDataTableService {
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    filterData(data, searchTerm, ignoreCase = false, excludedColumns) {
        /** @type {?} */
        let filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((item) => {
                /** @type {?} */
                const res = Object.keys(item).find((key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        const preItemValue = ('' + item[key]);
                        /** @type {?} */
                        const itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                });
                return !(typeof res === 'undefined');
            });
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    sortData(data, sortBy, sortOrder = TdDataTableSortingOrder.Ascending) {
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort((a, b) => {
                /** @type {?} */
                let compA = a[sortBy];
                /** @type {?} */
                let compB = b[sortBy];
                /** @type {?} */
                let direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
            });
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    pageData(data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    }
}
TdDataTableService.decorators = [
    { type: Injectable }
];
/**
 * @param {?} parent
 * @return {?}
 */
function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
/** @type {?} */
const DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new Optional(), new SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
class CovalentDataTableModule {
}
CovalentDataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCheckboxModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatPseudoCheckboxModule,
                ],
                declarations: [
                    TD_DATA_TABLE,
                ],
                exports: [
                    TD_DATA_TABLE,
                ],
                providers: [
                    DATA_TABLE_PROVIDER,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentDataTableModule, TdDataTableSortingOrder, TdDataTableBase, _TdDataTableMixinBase, TdDataTableComponent, TdDataTableCellComponent, TdDataTableColumnComponent, TdDataTableColumnRowComponent, TdDataTableRowComponent, TdDataTableTableComponent, TdDataTableTemplateDirective, DATA_TABLE_PROVIDER_FACTORY, TdDataTableService, DATA_TABLE_PROVIDER };

//# sourceMappingURL=covalent-core-data-table.js.map