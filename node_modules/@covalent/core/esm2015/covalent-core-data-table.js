import { Component, Input, Renderer2, ElementRef, HostListener, Directive, TemplateRef, ViewContainerRef, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ContentChildren, Inject, Optional, ViewChildren, HostBinding, Injectable, SkipSelf, NgModule } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ENTER, SPACE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { mixinControlValueAccessor } from '@covalent/core/common';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styles: [`:host{
  border-bottom-style:solid;
  border-bottom-width:1px; }
:host.td-data-table-row{
  height:48px; }
:host.td-data-table-column-row{
  height:56px; }
`],
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
TdDataTableColumnRowComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
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
        let /** @type {?} */ height = 48;
        if (this._elementRef.nativeElement) {
            height = (/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().height;
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
                styles: [`:host{
  border-bottom-style:solid;
  border-bottom-width:1px; }
:host.td-data-table-row{
  height:48px; }
:host.td-data-table-column-row{
  height:56px; }
`],
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TdDataTableRowComponent.propDecorators = {
    "selected": [{ type: Input, args: ['selected',] },],
    "clickListener": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] },
];
/** @nocollapse */
TdDataTableTemplateDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
TdDataTableTemplateDirective.propDecorators = {
    "tdDataTableTemplate": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const TdDataTableSortingOrder = {
    Ascending: 'ASC',
    Descending: 'DESC',
};
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * Constant to set the rows offset before and after the viewport
 */
const TD_VIRTUAL_OFFSET = 2;
/**
 * Constant to set default row height if none is provided
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
        this._widths = [];
        this._onResize = new Subject();
        this._scrollHorizontalOffset = 0;
        this._onHorizontalScroll = new Subject();
        this._onVerticalScroll = new Subject();
        this._rowHeightCache = [];
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
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
            let /** @type {?} */ row = this._data[0];
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
        const /** @type {?} */ column = this.columns.find((c) => c.name === columnName);
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
        let /** @type {?} */ sortOrder = order ? order.toUpperCase() : 'ASC';
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
        for (let /** @type {?} */ i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    }
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this._elementRef.nativeElement) {
            let /** @type {?} */ newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                this._hostWidth = newHostWidth;
                this._onResize.next();
            }
        }
        if (this._scrollableDiv.nativeElement) {
            let /** @type {?} */ newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
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
        let /** @type {?} */ element = (/** @type {?} */ (event.target));
        if (element) {
            let /** @type {?} */ horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            let /** @type {?} */ verticalScroll = element.scrollTop;
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
        let /** @type {?} */ toggledRows = [];
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
                    let /** @type {?} */ modelRow = this.value.filter((val) => {
                        return this.compareWith(row, val);
                    })[0];
                    let /** @type {?} */ index = this.value.indexOf(modelRow);
                    if (index > -1) {
                        this.value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
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
            let /** @type {?} */ mouseEvent = /** @type {?} */ (event);
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                let /** @type {?} */ firstIndex = currentSelected;
                let /** @type {?} */ lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (let /** @type {?} */ i = firstIndex; i <= lastIndex; i++) {
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
                    for (let /** @type {?} */ i = firstIndex; i <= lastIndex; i++) {
                        let /** @type {?} */ rowSelected = this.isRowSelected(this._data[i]);
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
            const /** @type {?} */ srcElement = event.srcElement || event.currentTarget;
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null) {
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
        }
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
            let /** @type {?} */ splitName = name.split(/\.(.+)/, 2);
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
        let /** @type {?} */ wasSelected = this.isRowSelected(row);
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
            let /** @type {?} */ index = this.value.indexOf(row);
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
            for (let /** @type {?} */ row of this._data) {
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
        let /** @type {?} */ fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        let /** @type {?} */ flexibleWidths = this._widths.filter((width, index) => {
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
        let /** @type {?} */ recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            let /** @type {?} */ newValue = Math.floor(recalculateHostWidth / flexibleWidths);
            let /** @type {?} */ adjustedNumber = 0;
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
            let /** @type {?} */ newFlexibleWidths = this._widths.filter((width) => {
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
        let /** @type {?} */ skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                let /** @type {?} */ widthOpts = /** @type {?} */ (this.columns[index].width);
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
                this._widths[index].value = /** @type {?} */ (this.columns[index].width);
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
        let /** @type {?} */ renderedColumns = this.columns.filter((col) => !col.hidden);
        return Math.floor(this.hostWidth / renderedColumns.length);
    }
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    _calculateVirtualRows() {
        let /** @type {?} */ scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            let /** @type {?} */ rowHeightSum = 0;
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
            let /** @type {?} */ fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            let /** @type {?} */ hostHeight = this._hostHeight;
            let /** @type {?} */ index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            let /** @type {?} */ range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
            let /** @type {?} */ toRow = range + this.fromRow;
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
        let /** @type {?} */ offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET) {
            for (let /** @type {?} */ index = 0; index < this.fromRow; index++) {
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
                styles: [`:host{
  display:block;
  overflow:hidden; }
  :host .td-data-table-scrollable{
    position:relative;
    overflow:auto;
    height:calc(100% - 56px); }
table.td-data-table{
  width:auto !important; }
  table.td-data-table.mat-selectable tbody > tr.td-data-table-row{
    -webkit-transition:background-color 0.2s;
    transition:background-color 0.2s; }
  table.td-data-table.mat-selectable .td-data-table-column:first-child > .td-data-table-column-content-wrapper,
  table.td-data-table.mat-selectable th.td-data-table-column:first-child > .td-data-table-column-content-wrapper,
  table.td-data-table.mat-selectable td.td-data-table-cell:first-child > .td-data-table-column-content-wrapper{
    width:18px;
    min-width:18px;
    padding:0 24px; }
  table.td-data-table.mat-selectable .td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper,
  table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper,
  table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) > .td-data-table-column-content-wrapper{
    padding-left:0; }
  [dir='rtl'] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, [dir='rtl']
  table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, [dir='rtl']
  table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) > .td-data-table-column-content-wrapper{
    padding-right:0;
    padding-left:28px; }
  table.td-data-table td.mat-checkbox-cell,
  table.td-data-table th.mat-checkbox-column{
    min-width:42px;
    width:42px;
    font-size:0 !important; }
    table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,
    table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{
      width:18px;
      height:18px; }
      ::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after, ::ng-deep
      table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{
        width:11px !important;
        height:4px !important; }
    table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,
    table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{
      width:18px;
      height:18px;
      margin:0; }
`],
                template: `<table td-data-table
        [style.left.px]="columnsLeftScroll"
        [class.mat-selectable]="selectable">
  <thead class="td-data-table-head">
    <tr td-data-table-column-row>
      <th td-data-table-column class="mat-checkbox-column" *ngIf="selectable">
        <mat-checkbox
          #checkBoxAll
          *ngIf="multiple"
          [disabled]="!hasData"
          [indeterminate]="indeterminate && !allSelected && hasData"
          [checked]="allSelected && hasData"
          (click)="blockEvent($event); selectAll(!checkBoxAll.checked)"
          (keyup.enter)="selectAll(!checkBoxAll.checked)"
          (keyup.space)="selectAll(!checkBoxAll.checked)"
          (keydown.space)="blockEvent($event)">
        </mat-checkbox>
      </th>
      <th td-data-table-column
          #columnElement
          *ngFor="let column of columns; let i = index;"
          [style.min-width.px]="getColumnWidth(i)"
          [style.max-width.px]="getColumnWidth(i)"
          [name]="column.name"
          [numeric]="column.numeric"
          [active]="(column.sortable || sortable) && column === sortByColumn"
          [sortable]="column.sortable || (sortable && column.sortable !== false)"
          [sortOrder]="sortOrderEnum"
          [hidden]="column.hidden"
          (sortChange)="handleSort(column)">
          <span [matTooltip]="column.tooltip">{{column.label}}</span>
      </th>
    </tr>
  </thead>
</table>
<div #scrollableDiv class="td-data-table-scrollable"
      (scroll)="handleScroll($event)">
  <div [style.height.px]="totalHeight"></div>
  <table td-data-table
          [style.transform]="offsetTransform"
          [style.position]="'absolute'"
          [class.mat-selectable]="selectable"
          [class.mat-clickable]="clickable">
    <tbody class="td-data-table-body">
      <tr td-data-table-row
          #dtRow
          [tabIndex]="selectable ? 0 : -1"
          [selected]="(clickable || selectable) && isRowSelected(row)"
          *ngFor="let row of virtualData; let rowIndex = index"
          (click)="handleRowClick(row, fromRow + rowIndex, $event)"
          (keyup)="selectable && _rowKeyup($event, row, rowIndex)"
          (keydown.space)="blockEvent($event)"
          (keydown.shift.space)="blockEvent($event)"
          (keydown.shift)="disableTextSelection()"
          (keyup.shift)="enableTextSelection()">
        <td td-data-table-cell class="mat-checkbox-cell" *ngIf="selectable">
          <mat-pseudo-checkbox
            [state]="dtRow.selected ? 'checked' : 'unchecked'"
            (mousedown)="disableTextSelection()"
            (mouseup)="enableTextSelection()"
            stopRowClick
            (click)="select(row, $event, fromRow + rowIndex)">
          </mat-pseudo-checkbox>
        </td>
        <td td-data-table-cell
            [numeric]="column.numeric"
            [hidden]="column.hidden"
            *ngFor="let column of columns; let i = index"
            [style.min-width.px]="getColumnWidth(i)"
            [style.max-width.px]="getColumnWidth(i)">
          <span *ngIf="!getTemplateRef(column.name)">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>
          <ng-template
            *ngIf="getTemplateRef(column.name)"
            [ngTemplateOutlet]="getTemplateRef(column.name)"
            [ngTemplateOutletContext]="{ value: getCellValue(column, row), row: row, column: column.name }">
          </ng-template>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<ng-content></ng-content>
`,
                inputs: ['value'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdDataTableComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] },] },
    { type: ElementRef, },
    { type: DomSanitizer, },
    { type: ChangeDetectorRef, },
];
TdDataTableComponent.propDecorators = {
    "_templates": [{ type: ContentChildren, args: [TdDataTableTemplateDirective,] },],
    "_scrollableDiv": [{ type: ViewChild, args: ['scrollableDiv',] },],
    "_colElements": [{ type: ViewChildren, args: ['columnElement',] },],
    "_rows": [{ type: ViewChildren, args: [TdDataTableRowComponent,] },],
    "data": [{ type: Input, args: ['data',] },],
    "columns": [{ type: Input, args: ['columns',] },],
    "selectable": [{ type: Input, args: ['selectable',] },],
    "clickable": [{ type: Input, args: ['clickable',] },],
    "multiple": [{ type: Input, args: ['multiple',] },],
    "sortable": [{ type: Input, args: ['sortable',] },],
    "sortBy": [{ type: Input, args: ['sortBy',] },],
    "sortOrder": [{ type: Input, args: ['sortOrder',] },],
    "onSortChange": [{ type: Output, args: ['sortChange',] },],
    "onRowSelect": [{ type: Output, args: ['rowSelect',] },],
    "onRowClick": [{ type: Output, args: ['rowClick',] },],
    "onSelectAll": [{ type: Output, args: ['selectAll',] },],
    "compareWith": [{ type: Input, args: ['compareWith',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
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
            return (/** @type {?} */ (this._columnContent.nativeElement)).getBoundingClientRect().width;
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
        let /** @type {?} */ sortOrder = order ? order.toUpperCase() : 'ASC';
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
                styles: [`:host{
  white-space:nowrap;
  position:relative;
  padding:0;
  vertical-align:middle;
  text-align:left; }
  :host > .td-data-table-heading{
    padding:0 28px; }
  :host:first-child > .td-data-table-heading{
    padding-left:24px;
    padding-right:initial; }
    html[dir=rtl] :host:first-child > .td-data-table-heading{
      padding-left:initial;
      unicode-bidi:embed; }
    body[dir=rtl] :host:first-child > .td-data-table-heading{
      padding-left:initial;
      unicode-bidi:embed; }
    [dir=rtl] :host:first-child > .td-data-table-heading{
      padding-left:initial;
      unicode-bidi:embed; }
    :host:first-child > .td-data-table-heading bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:first-child > .td-data-table-heading bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
    html[dir=rtl] :host:first-child > .td-data-table-heading{
      padding-right:24px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:first-child > .td-data-table-heading{
      padding-right:24px;
      unicode-bidi:embed; }
    [dir=rtl] :host:first-child > .td-data-table-heading{
      padding-right:24px;
      unicode-bidi:embed; }
    :host:first-child > .td-data-table-heading bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:first-child > .td-data-table-heading bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
  :host:last-child > .td-data-table-heading{
    padding-left:28px;
    padding-right:24px; }
    html[dir=rtl] :host:last-child > .td-data-table-heading{
      padding-left:24px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:last-child > .td-data-table-heading{
      padding-left:24px;
      unicode-bidi:embed; }
    [dir=rtl] :host:last-child > .td-data-table-heading{
      padding-left:24px;
      unicode-bidi:embed; }
    :host:last-child > .td-data-table-heading bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:last-child > .td-data-table-heading bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
    html[dir=rtl] :host:last-child > .td-data-table-heading{
      padding-right:28px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:last-child > .td-data-table-heading{
      padding-right:28px;
      unicode-bidi:embed; }
    [dir=rtl] :host:last-child > .td-data-table-heading{
      padding-right:28px;
      unicode-bidi:embed; }
    :host:last-child > .td-data-table-heading bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:last-child > .td-data-table-heading bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
  :host mat-icon{
    height:16px;
    width:16px;
    font-size:16px !important;
    line-height:16px !important; }
    :host mat-icon.td-data-table-sort-icon{
      opacity:0;
      -webkit-transition:-webkit-transform 0.25s;
      transition:-webkit-transform 0.25s;
      transition:transform 0.25s;
      transition:transform 0.25s, -webkit-transform 0.25s;
      position:absolute;
      top:0; }
      :host mat-icon.td-data-table-sort-icon.mat-asc{
        -webkit-transform:rotate(0deg);
                transform:rotate(0deg); }
      :host mat-icon.td-data-table-sort-icon.mat-desc{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  :host:hover.mat-sortable mat-icon.td-data-table-sort-icon,
  :host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon{
    opacity:1; }
  html[dir=rtl] :host{
    text-align:right;
    unicode-bidi:embed; }
  body[dir=rtl] :host{
    text-align:right;
    unicode-bidi:embed; }
  [dir=rtl] :host{
    text-align:right;
    unicode-bidi:embed; }
  :host bdo[dir=rtl]{
    direction:rtl;
    unicode-bidi:bidi-override; }
  :host bdo[dir=ltr]{
    direction:ltr;
    unicode-bidi:bidi-override; }
  :host > *{
    vertical-align:middle; }
  :host.mat-clickable{
    cursor:pointer; }
    :host.mat-clickable:focus{
      outline:none; }
  :host .td-data-table-heading{
    display:inline-block;
    position:relative; }
  :host.mat-numeric{
    text-align:right; }
    html[dir=rtl] :host.mat-numeric{
      text-align:left;
      unicode-bidi:embed; }
    body[dir=rtl] :host.mat-numeric{
      text-align:left;
      unicode-bidi:embed; }
    [dir=rtl] :host.mat-numeric{
      text-align:left;
      unicode-bidi:embed; }
    :host.mat-numeric bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host.mat-numeric bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
    :host.mat-numeric mat-icon.td-data-table-sort-icon{
      margin-left:-22px;
      margin-right:initial; }
      html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{
        margin-left:initial;
        unicode-bidi:embed; }
      body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{
        margin-left:initial;
        unicode-bidi:embed; }
      [dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{
        margin-left:initial;
        unicode-bidi:embed; }
      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{
        direction:rtl;
        unicode-bidi:bidi-override; }
      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{
        direction:ltr;
        unicode-bidi:bidi-override; }
      html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{
        margin-right:-22px;
        unicode-bidi:embed; }
      body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{
        margin-right:-22px;
        unicode-bidi:embed; }
      [dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{
        margin-right:-22px;
        unicode-bidi:embed; }
      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{
        direction:rtl;
        unicode-bidi:bidi-override; }
      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{
        direction:ltr;
        unicode-bidi:bidi-override; }
  :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
    margin-left:6px;
    margin-right:initial; }
    html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
      margin-left:initial;
      unicode-bidi:embed; }
    body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
      margin-left:initial;
      unicode-bidi:embed; }
    [dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
      margin-left:initial;
      unicode-bidi:embed; }
    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
    html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
      margin-right:6px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
      margin-right:6px;
      unicode-bidi:embed; }
    [dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{
      margin-right:6px;
      unicode-bidi:embed; }
    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
`],
                template: `<span #columnContent class="td-data-table-heading">
  <mat-icon
    class="td-data-table-sort-icon"
    *ngIf="sortable && numeric"
    [class.mat-asc]="(!(active) || isAscending())"
    [class.mat-desc]="(active && isDescending())">
    arrow_upward
  </mat-icon>
  <span>
    <ng-content></ng-content>
  </span>
  <mat-icon
    class="td-data-table-sort-icon"
    *ngIf="sortable && !numeric"
    [class.mat-asc]="(!(active) || isAscending())"
    [class.mat-desc]="(active && isDescending())">
    arrow_upward
  </mat-icon>
</span>
`,
            },] },
];
/** @nocollapse */
TdDataTableColumnComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TdDataTableColumnComponent.propDecorators = {
    "_columnContent": [{ type: ViewChild, args: ['columnContent', { read: ElementRef },] },],
    "name": [{ type: Input, args: ['name',] },],
    "sortable": [{ type: Input, args: ['sortable',] },],
    "active": [{ type: Input, args: ['active',] },],
    "numeric": [{ type: Input, args: ['numeric',] },],
    "sortOrder": [{ type: Input, args: ['sortOrder',] },],
    "onSortChange": [{ type: Output, args: ['sortChange',] },],
    "bindClickable": [{ type: HostBinding, args: ['class.mat-clickable',] },],
    "bingSortable": [{ type: HostBinding, args: ['class.mat-sortable',] },],
    "bindActive": [{ type: HostBinding, args: ['class.mat-active',] },],
    "bindNumeric": [{ type: HostBinding, args: ['class.mat-numeric',] },],
    "handleClick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styles: [`:host{
  vertical-align:middle;
  text-align:left;
  padding:0; }
  html[dir=rtl] :host{
    text-align:right;
    unicode-bidi:embed; }
  body[dir=rtl] :host{
    text-align:right;
    unicode-bidi:embed; }
  [dir=rtl] :host{
    text-align:right;
    unicode-bidi:embed; }
  :host bdo[dir=rtl]{
    direction:rtl;
    unicode-bidi:bidi-override; }
  :host bdo[dir=ltr]{
    direction:ltr;
    unicode-bidi:bidi-override; }
  :host > .td-data-table-cell-content-wrapper{
    padding:0 28px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -ms-flex-line-pack:center;
        align-content:center;
    max-width:100%;
    -webkit-box-pack:start;
        -ms-flex-pack:start;
            justify-content:start; }
    :host > .td-data-table-cell-content-wrapper.td-data-table-cell-numeric{
      -webkit-box-pack:end;
          -ms-flex-pack:end;
              justify-content:flex-end; }
  :host:first-child > .td-data-table-cell-content-wrapper{
    padding-left:24px;
    padding-right:initial; }
    html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{
      padding-left:initial;
      unicode-bidi:embed; }
    body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{
      padding-left:initial;
      unicode-bidi:embed; }
    [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{
      padding-left:initial;
      unicode-bidi:embed; }
    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
    html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{
      padding-right:24px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{
      padding-right:24px;
      unicode-bidi:embed; }
    [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{
      padding-right:24px;
      unicode-bidi:embed; }
    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
  :host:last-child > .td-data-table-cell-content-wrapper{
    padding-left:28px;
    padding-right:24px; }
    html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{
      padding-left:24px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{
      padding-left:24px;
      unicode-bidi:embed; }
    [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{
      padding-left:24px;
      unicode-bidi:embed; }
    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
    html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{
      padding-right:28px;
      unicode-bidi:embed; }
    body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{
      padding-right:28px;
      unicode-bidi:embed; }
    [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{
      padding-right:28px;
      unicode-bidi:embed; }
    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
  :host > *{
    vertical-align:middle; }
  :host.mat-clickable{
    cursor:pointer; }
    :host.mat-clickable:focus{
      outline:none; }
  :host.mat-numeric{
    text-align:right; }
    html[dir=rtl] :host.mat-numeric{
      text-align:left;
      unicode-bidi:embed; }
    body[dir=rtl] :host.mat-numeric{
      text-align:left;
      unicode-bidi:embed; }
    [dir=rtl] :host.mat-numeric{
      text-align:left;
      unicode-bidi:embed; }
    :host.mat-numeric bdo[dir=rtl]{
      direction:rtl;
      unicode-bidi:bidi-override; }
    :host.mat-numeric bdo[dir=ltr]{
      direction:ltr;
      unicode-bidi:bidi-override; }
`],
                template: `<div class="td-data-table-cell-content-wrapper"
     [class.td-data-table-cell-numeric]="numeric">
  <ng-content></ng-content>
</div>`,
            },] },
];
/** @nocollapse */
TdDataTableCellComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
TdDataTableCellComponent.propDecorators = {
    "numeric": [{ type: Input, args: ['numeric',] },],
    "bindNumeric": [{ type: HostBinding, args: ['class.mat-numeric',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                styles: [`:host{
  width:100%;
  position:relative;
  border-spacing:0;
  overflow:hidden;
  border-collapse:collapse; }
`],
                template: `<ng-content></ng-content>`,
            },] },
];
/** @nocollapse */
TdDataTableTableComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        let /** @type {?} */ filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((item) => {
                const /** @type {?} */ res = Object.keys(item).find((key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        const /** @type {?} */ preItemValue = ('' + item[key]);
                        const /** @type {?} */ itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
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
                let /** @type {?} */ compA = a[sortBy];
                let /** @type {?} */ compB = b[sortBy];
                let /** @type {?} */ direction = 0;
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
    { type: Injectable },
];
/** @nocollapse */
TdDataTableService.ctorParameters = () => [];
/**
 * @param {?} parent
 * @return {?}
 */
function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
const DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new Optional(), new SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
            },] },
];
/** @nocollapse */
CovalentDataTableModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentDataTableModule, TdDataTableSortingOrder, TdDataTableBase, _TdDataTableMixinBase, TdDataTableComponent, TdDataTableCellComponent, TdDataTableColumnComponent, TdDataTableColumnRowComponent, TdDataTableRowComponent, TdDataTableTableComponent, TdDataTableTemplateDirective, TdDataTableService, DATA_TABLE_PROVIDER_FACTORY, DATA_TABLE_PROVIDER };
//# sourceMappingURL=covalent-core-data-table.js.map
