/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _DisposeViewRepeaterStrategy, isDataSource, _VIEW_REPEATER_STRATEGY, } from '@angular/cdk/collections';
import { Platform } from '@angular/cdk/platform';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Directive, ElementRef, EmbeddedViewRef, Inject, Input, IterableDiffers, Optional, QueryList, SkipSelf, ViewChild, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { BehaviorSubject, isObservable, of as observableOf, Subject, } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkColumnDef } from './cell';
import { _CoalescedStyleScheduler, _COALESCED_STYLE_SCHEDULER } from './coalesced-style-scheduler';
import { CdkCellOutlet, CdkFooterRowDef, CdkHeaderRowDef, CdkNoDataRow, CdkRowDef } from './row';
import { StickyStyler } from './sticky-styler';
import { getTableDuplicateColumnNameError, getTableMissingMatchingRowDefError, getTableMissingRowDefsError, getTableMultipleDefaultRowDefsError, getTableUnknownColumnError, getTableUnknownDataSourceError } from './table-errors';
import { STICKY_POSITIONING_LISTENER } from './sticky-position-listener';
import { CDK_TABLE } from './tokens';
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
export class DataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.decorators = [
    { type: Directive, args: [{ selector: '[rowOutlet]' },] }
];
DataRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
export class HeaderRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.decorators = [
    { type: Directive, args: [{ selector: '[headerRowOutlet]' },] }
];
HeaderRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
export class FooterRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.decorators = [
    { type: Directive, args: [{ selector: '[footerRowOutlet]' },] }
];
FooterRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */
export class NoDataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
NoDataRowOutlet.decorators = [
    { type: Directive, args: [{ selector: '[noDataRowOutlet]' },] }
];
NoDataRowOutlet.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef }
];
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
export const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends EmbeddedViewRef {
}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
export class CdkTable {
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, 
    /**
     * @deprecated `_coalescedStyleScheduler`, `_viewRepeater` and `_viewportRuler`
     *    parameters to become required.
     * @breaking-change 11.0.0
     */
    _viewRepeater, _coalescedStyleScheduler, _stickyPositioningListener, 
    // Optional for backwards compatibility. The viewport ruler is provided in root. Therefore,
    // this property will never be null.
    // tslint:disable-next-line: lightweight-tokens
    _viewportRuler) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._stickyPositioningListener = _stickyPositioningListener;
        this._viewportRuler = _viewportRuler;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
         * change.
         */
        this._stickyColumnStylesNeedReset = true;
        /**
         * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
         * `false`, cached values will be used instead. This is only applicable to tables with
         * {@link fixedLayout} enabled. For other tables, cell widths will always be recalculated.
         */
        this._forceRecalculateCellWidths = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        /**
         * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
         * the position is set in a selector associated with the value of stickyCssClass. May be
         * overridden by table subclasses
         */
        this.needsPositionStickyOnElement = true;
        /** Whether the no data row is currently showing anything. */
        this._isShowingNoDataRow = false;
        this._multiTemplateDataRows = false;
        this._fixedLayout = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * @docs-private
         */
        this.viewChange = new BehaviorSubject({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = coerceBooleanProperty(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */
    get fixedLayout() {
        return this._fixedLayout;
    }
    set fixedLayout(v) {
        this._fixedLayout = coerceBooleanProperty(v);
        // Toggling `fixedLayout` may change column widths. Sticky column styles should be recalculated.
        this._forceRecalculateCellWidths = true;
        this._stickyColumnStylesNeedReset = true;
    }
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
        // Table cell dimensions may change after resizing the window. Signal the sticky styler to
        // refresh its cache of cell widths the next time sticky styles are updated.
        // @breaking-change 11.0.0 Remove null check for _viewportRuler once it's a required parameter.
        if (this._viewportRuler) {
            this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
                this._forceRecalculateCellWidths = true;
            });
        }
    }
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        const columnsChanged = this._renderUpdatedColumns();
        const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
        // Ensure sticky column styles are reset if set to `true` elsewhere.
        this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
        this._forceRecalculateCellWidths = rowDefsChanged;
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        else if (this._stickyColumnStylesNeedReset) {
            // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
            // called when it row data arrives. Otherwise, we need to call it proactively.
            this.updateStickyColumnStyles();
        }
        this._checkStickyStates();
    }
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._noDataRowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            this._updateNoDataRow();
            return;
        }
        const viewContainer = this._rowOutlet.viewContainer;
        // @breaking-change 11.0.0 Remove null check for `_viewRepeater` and the
        // `else` clause once `_viewRepeater` is turned into a required parameter.
        if (this._viewRepeater) {
            this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
                if (change.operation === 1 /* INSERTED */ && change.context) {
                    this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
                }
            });
        }
        else {
            changes.forEachOperation((record, prevIndex, currentIndex) => {
                if (record.previousIndex == null) {
                    const renderRow = record.item;
                    const rowDef = renderRow.rowDef;
                    const context = { $implicit: renderRow.data };
                    this._renderRow(this._rowOutlet, rowDef, currentIndex, context);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(prevIndex);
                }
                else {
                    const view = viewContainer.get(prevIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
        }
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((record) => {
            const rowView = viewContainer.get(record.currentIndex);
            rowView.context.$implicit = record.item.data;
        });
        this._updateNoDataRow();
        this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */
    setNoDataRow(noDataRow) {
        this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        const stickyStates = this._headerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        const stickyStates = this._footerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const dataRows = this._getRenderedRows(this._rowOutlet);
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // For tables not using a fixed layout, the column widths may change when new rows are rendered.
        // In a table using a fixed layout, row content won't affect column width, so sticky styles
        // don't need to be cleared unless either the sticky column config changes or one of the row
        // defs change.
        if ((this._isNativeHtmlTable && !this._fixedLayout)
            || this._stickyColumnStylesNeedReset) {
            // Clear the left and right positioning from all columns in the table across all rows since
            // sticky columns span across all table sections (header, data, footer)
            this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
            this._stickyColumnStylesNeedReset = false;
        }
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(rowDef => {
            // Collect all the rows rendered with this row definition.
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            let data = this._data[i];
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                let renderRow = renderRowsForData[j];
                const cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(rowDef => {
            const cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
            if (cachedRenderRows.length) {
                const dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach(columnDef => {
            if (this._columnDefsByName.has(columnDef.name) &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        const defaultRowDefs = this._rowDefs.filter(def => !def.when);
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
        const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
        // Force re-render data rows if the list of column definitions have changed.
        const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
        if (dataColumnsChanged) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed.
        const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
        if (headerColumnsChanged) {
            this._forceRenderHeaderRows();
        }
        const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
        if (footerColumnsChanged) {
            this._forceRenderFooterRows();
        }
        return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        let dataStream;
        if (isDataSource(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (isObservable(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = observableOf(this.dataSource);
        }
        if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy))
            .subscribe(data => {
            this._data = data || [];
            this.renderRows();
        });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
        this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
        this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
        const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
            }
            return columnDef;
        });
        const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
        const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            const viewRef = rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
        }
        else {
            let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
        const rowDef = renderRow.rowDef;
        const context = { $implicit: renderRow.data };
        return {
            templateRef: rowDef.template,
            context,
            index,
        };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        this._renderCellTemplateForItem(rowDef, context);
        return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, columnId => {
            const column = this._columnDefsByName.get(columnId);
            if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    }
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    _applyNativeTableSections() {
        const documentFragment = this._document.createDocumentFragment();
        const sections = [
            { tag: 'thead', outlets: [this._headerRowOutlet] },
            { tag: 'tbody', outlets: [this._rowOutlet, this._noDataRowOutlet] },
            { tag: 'tfoot', outlets: [this._footerRowOutlet] },
        ];
        for (const section of sections) {
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            for (const outlet of section.outlets) {
                element.appendChild(outlet.elementRef.nativeElement);
            }
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
        const stickyCheckReducer = (acc, d) => {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this._stickyColumnStylesNeedReset = true;
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
        (this._dir ? this._dir.change : observableOf())
            .pipe(takeUntil(this._onDestroy))
            .subscribe(value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
        return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
        const noDataRow = this._customNoDataRow || this._noDataRow;
        if (noDataRow) {
            const shouldShow = this._rowOutlet.viewContainer.length === 0;
            if (shouldShow !== this._isShowingNoDataRow) {
                const container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
            }
        }
    }
}
CdkTable.decorators = [
    { type: Component, args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table',
                    '[class.cdk-table-fixed-layout]': 'fixedLayout',
                },
                encapsulation: ViewEncapsulation.None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [
                    { provide: CDK_TABLE, useExisting: CdkTable },
                    { provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy },
                    { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
                    // Prevent nested tables from seeing this table's StickyPositioningListener.
                    { provide: STICKY_POSITIONING_LISTENER, useValue: null },
                ],
                styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
            },] }
];
CdkTable.ctorParameters = () => [
    { type: IterableDiffers },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['role',] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [_VIEW_REPEATER_STRATEGY,] }] },
    { type: _CoalescedStyleScheduler, decorators: [{ type: Optional }, { type: Inject, args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: SkipSelf }, { type: Inject, args: [STICKY_POSITIONING_LISTENER,] }] },
    { type: ViewportRuler, decorators: [{ type: Optional }] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: Input }],
    dataSource: [{ type: Input }],
    multiTemplateDataRows: [{ type: Input }],
    fixedLayout: [{ type: Input }],
    _rowOutlet: [{ type: ViewChild, args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: ViewChild, args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: ViewChild, args: [FooterRowOutlet, { static: true },] }],
    _noDataRowOutlet: [{ type: ViewChild, args: [NoDataRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: ContentChildren, args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: ContentChildren, args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: ContentChildren, args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: ContentChildren, args: [CdkFooterRowDef, {
                    descendants: true
                },] }],
    _noDataRow: [{ type: ContentChild, args: [CdkNoDataRow,] }]
};
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RhYmxlL3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBWSxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBR0wsNEJBQTRCLEVBQzVCLFlBQVksRUFDWix1QkFBdUIsR0FLeEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixlQUFlLEVBQ2YsTUFBTSxFQUNOLEtBQUssRUFHTCxlQUFlLEVBR2YsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBR1IsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGVBQWUsRUFDZixZQUFZLEVBRVosRUFBRSxJQUFJLFlBQVksRUFDbEIsT0FBTyxHQUVSLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDcEMsT0FBTyxFQUFDLHdCQUF3QixFQUFFLDBCQUEwQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDakcsT0FBTyxFQUVMLGFBQWEsRUFHYixlQUFl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XG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENvbGxlY3Rpb25WaWV3ZXIsXG4gIERhdGFTb3VyY2UsXG4gIF9EaXNwb3NlVmlld1JlcGVhdGVyU3RyYXRlZ3ksXG4gIGlzRGF0YVNvdXJjZSxcbiAgX1ZJRVdfUkVQRUFURVJfU1RSQVRFR1ksXG4gIF9WaWV3UmVwZWF0ZXIsXG4gIF9WaWV3UmVwZWF0ZXJJdGVtQ2hhbmdlLFxuICBfVmlld1JlcGVhdGVySXRlbUluc2VydEFyZ3MsXG4gIF9WaWV3UmVwZWF0ZXJPcGVyYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtWaWV3cG9ydFJ1bGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFF1ZXJ5TGlzdCxcbiAgU2tpcFNlbGYsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBpc09ic2VydmFibGUsXG4gIE9ic2VydmFibGUsXG4gIG9mIGFzIG9ic2VydmFibGVPZixcbiAgU3ViamVjdCxcbiAgU3Vic2NyaXB0aW9uLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Nka0NvbHVtbkRlZn0gZnJvbSAnLi9jZWxsJztcbmltcG9ydCB7X0NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyLCBfQ09BTEVTQ0VEX1NUWUxFX1NDSEVEVUxFUn0gZnJvbSAnLi9jb2FsZXNjZWQtc3R5bGUtc2NoZWR1bGVyJztcbmltcG9ydCB7XG4gIEJhc2VSb3dEZWYsXG4gIENka0NlbGxPdXRsZXQsXG4gIENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQsXG4gIENka0NlbGxPdXRsZXRSb3dDb250ZXh0LFxuICBDZGtGb290ZXJSb3dEZWYsXG4gIENka0hlYWRlclJvd0RlZixcbiAgQ2RrTm9EYXRhUm93LFxuICBDZGtSb3dEZWZcbn0gZnJvbSAnLi9yb3cnO1xuaW1wb3J0IHtTdGlja3lTdHlsZXJ9IGZyb20gJy4vc3RpY2t5LXN0eWxlcic7XG5pbXBvcnQge1xuICBnZXRUYWJsZUR1cGxpY2F0ZUNvbHVtbk5hbWVFcnJvcixcbiAgZ2V0VGFibGVNaXNzaW5nTWF0Y2hpbmdSb3dEZWZFcnJvcixcbiAgZ2V0VGFibGVNaXNzaW5nUm93RGVmc0Vycm9yLFxuICBnZXRUYWJsZU11bHRpcGxlRGVmYXVsdFJvd0RlZnNFcnJvcixcbiAgZ2V0VGFibGVVbmtub3duQ29sdW1uRXJyb3IsXG4gIGdldFRhYmxlVW5rbm93bkRhdGFTb3VyY2VFcnJvclxufSBmcm9tICcuL3RhYmxlLWVycm9ycyc7XG5pbXBvcnQge1NUSUNLWV9QT1NJVElPTklOR19MSVNURU5FUiwgU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcn0gZnJvbSAnLi9zdGlja3ktcG9zaXRpb24tbGlzdGVuZXInO1xuaW1wb3J0IHtDREtfVEFCTEV9IGZyb20gJy4vdG9rZW5zJztcblxuLyoqIEludGVyZmFjZSB1c2VkIHRvIHByb3ZpZGUgYW4gb3V0bGV0IGZvciByb3dzIHRvIGJlIGluc2VydGVkIGludG8uICovXG5leHBvcnQgaW50ZXJmYWNlIFJvd091dGxldCB7XG4gIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG59XG5cbi8qKlxuICogVW5pb24gb2YgdGhlIHR5cGVzIHRoYXQgY2FuIGJlIHNldCBhcyB0aGUgZGF0YSBzb3VyY2UgZm9yIGEgYENka1RhYmxlYC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xudHlwZSBDZGtUYWJsZURhdGFTb3VyY2VJbnB1dDxUPiA9XG4gICAgRGF0YVNvdXJjZTxUPnxPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8VD58VFtdPnxSZWFkb25seUFycmF5PFQ+fFRbXTtcblxuLyoqXG4gKiBQcm92aWRlcyBhIGhhbmRsZSBmb3IgdGhlIHRhYmxlIHRvIGdyYWIgdGhlIHZpZXcgY29udGFpbmVyJ3MgbmctY29udGFpbmVyIHRvIGluc2VydCBkYXRhIHJvd3MuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3Jvd091dGxldF0nfSlcbmV4cG9ydCBjbGFzcyBEYXRhUm93T3V0bGV0IGltcGxlbWVudHMgUm93T3V0bGV0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxufVxuXG4vKipcbiAqIFByb3ZpZGVzIGEgaGFuZGxlIGZvciB0aGUgdGFibGUgdG8gZ3JhYiB0aGUgdmlldyBjb250YWluZXIncyBuZy1jb250YWluZXIgdG8gaW5zZXJ0IHRoZSBoZWFkZXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2hlYWRlclJvd091dGxldF0nfSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJSb3dPdXRsZXQgaW1wbGVtZW50cyBSb3dPdXRsZXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBoYW5kbGUgZm9yIHRoZSB0YWJsZSB0byBncmFiIHRoZSB2aWV3IGNvbnRhaW5lcidzIG5nLWNvbnRhaW5lciB0byBpbnNlcnQgdGhlIGZvb3Rlci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbZm9vdGVyUm93T3V0bGV0XSd9KVxuZXhwb3J0IGNsYXNzIEZvb3RlclJvd091dGxldCBpbXBsZW1lbnRzIFJvd091dGxldCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhIGhhbmRsZSBmb3IgdGhlIHRhYmxlIHRvIGdyYWIgdGhlIHZpZXdcbiAqIGNvbnRhaW5lcidzIG5nLWNvbnRhaW5lciB0byBpbnNlcnQgdGhlIG5vIGRhdGEgcm93LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tub0RhdGFSb3dPdXRsZXRdJ30pXG5leHBvcnQgY2xhc3MgTm9EYXRhUm93T3V0bGV0IGltcGxlbWVudHMgUm93T3V0bGV0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxufVxuXG4vKipcbiAqIFRoZSB0YWJsZSB0ZW1wbGF0ZSB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoZSBtYXQtdGFibGUuIFNob3VsZCBub3QgYmUgdXNlZCBvdXRzaWRlIG9mIHRoZVxuICogbWF0ZXJpYWwgbGlicmFyeS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IENES19UQUJMRV9URU1QTEFURSA9XG4gICAgLy8gTm90ZSB0aGF0IGFjY29yZGluZyB0byBNRE4sIHRoZSBgY2FwdGlvbmAgZWxlbWVudCBoYXMgdG8gYmUgcHJvamVjdGVkIGFzIHRoZSAqKmZpcnN0KipcbiAgICAvLyBlbGVtZW50IGluIHRoZSB0YWJsZS4gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9jYXB0aW9uXG4gICAgYFxuICA8bmctY29udGVudCBzZWxlY3Q9XCJjYXB0aW9uXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJjb2xncm91cCwgY29sXCI+PC9uZy1jb250ZW50PlxuICA8bmctY29udGFpbmVyIGhlYWRlclJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciByb3dPdXRsZXQ+PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgbm9EYXRhUm93T3V0bGV0PjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyIGZvb3RlclJvd091dGxldD48L25nLWNvbnRhaW5lcj5cbmA7XG5cbi8qKlxuICogSW50ZXJmYWNlIHVzZWQgdG8gY29udmVuaWVudGx5IHR5cGUgdGhlIHBvc3NpYmxlIGNvbnRleHQgaW50ZXJmYWNlcyBmb3IgdGhlIHJlbmRlciByb3cuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm93Q29udGV4dDxUPiBleHRlbmRzIENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQ8VD4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDZGtDZWxsT3V0bGV0Um93Q29udGV4dDxUPiB7fVxuXG4vKipcbiAqIENsYXNzIHVzZWQgdG8gY29udmVuaWVudGx5IHR5cGUgdGhlIGVtYmVkZGVkIHZpZXcgcmVmIGZvciByb3dzIHdpdGggYSBjb250ZXh0LlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5hYnN0cmFjdCBjbGFzcyBSb3dWaWV3UmVmPFQ+IGV4dGVuZHMgRW1iZWRkZWRWaWV3UmVmPFJvd0NvbnRleHQ8VD4+IHt9XG5cbi8qKlxuICogU2V0IG9mIHByb3BlcnRpZXMgdGhhdCByZXByZXNlbnRzIHRoZSBpZGVudGl0eSBvZiBhIHNpbmdsZSByZW5kZXJlZCByb3cuXG4gKlxuICogV2hlbiB0aGUgdGFibGUgbmVlZHMgdG8gZGV0ZXJtaW5lIHRoZSBsaXN0IG9mIHJvd3MgdG8gcmVuZGVyLCBpdCB3aWxsIGRvIHNvIGJ5IGl0ZXJhdGluZyB0aHJvdWdoXG4gKiBlYWNoIGRhdGEgb2JqZWN0IGFuZCBldmFsdWF0aW5nIGl0cyBsaXN0IG9mIHJvdyB0ZW1wbGF0ZXMgdG8gZGlzcGxheSAod2hlbiBtdWx0aVRlbXBsYXRlRGF0YVJvd3NcbiAqIGlzIGZhbHNlLCB0aGVyZSBpcyBvbmx5IG9uZSB0ZW1wbGF0ZSBwZXIgZGF0YSBvYmplY3QpLiBGb3IgZWFjaCBwYWlyIG9mIGRhdGEgb2JqZWN0IGFuZCByb3dcbiAqIHRlbXBsYXRlLCBhIGBSZW5kZXJSb3dgIGlzIGFkZGVkIHRvIHRoZSBsaXN0IG9mIHJvd3MgdG8gcmVuZGVyLiBJZiB0aGUgZGF0YSBvYmplY3QgYW5kIHJvd1xuICogdGVtcGxhdGUgcGFpciBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLCB0aGUgcHJldmlvdXNseSB1c2VkIGBSZW5kZXJSb3dgIGlzIGFkZGVkOyBlbHNlIGEgbmV3XG4gKiBgUmVuZGVyUm93YCBpcyAqIGNyZWF0ZWQuIE9uY2UgdGhlIGxpc3QgaXMgY29tcGxldGUgYW5kIGFsbCBkYXRhIG9iamVjdHMgaGF2ZSBiZWVuIGl0ZXJlYXRlZFxuICogdGhyb3VnaCwgYSBkaWZmIGlzIHBlcmZvcm1lZCB0byBkZXRlcm1pbmUgdGhlIGNoYW5nZXMgdGhhdCBuZWVkIHRvIGJlIG1hZGUgdG8gdGhlIHJlbmRlcmVkIHJvd3MuXG4gKlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlclJvdzxUPiB7XG4gIGRhdGE6IFQ7XG4gIGRhdGFJbmRleDogbnVtYmVyO1xuICByb3dEZWY6IENka1Jvd0RlZjxUPjtcbn1cblxuLyoqXG4gKiBBIGRhdGEgdGFibGUgdGhhdCBjYW4gcmVuZGVyIGEgaGVhZGVyIHJvdywgZGF0YSByb3dzLCBhbmQgYSBmb290ZXIgcm93LlxuICogVXNlcyB0aGUgZGF0YVNvdXJjZSBpbnB1dCB0byBkZXRlcm1pbmUgdGhlIGRhdGEgdG8gYmUgcmVuZGVyZWQuIFRoZSBkYXRhIGNhbiBiZSBwcm92aWRlZCBlaXRoZXJcbiAqIGFzIGEgZGF0YSBhcnJheSwgYW4gT2JzZXJ2YWJsZSBzdHJlYW0gdGhhdCBlbWl0cyB0aGUgZGF0YSBhcnJheSB0byByZW5kZXIsIG9yIGEgRGF0YVNvdXJjZSB3aXRoIGFcbiAqIGNvbm5lY3QgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiBhbiBPYnNlcnZhYmxlIHN0cmVhbSB0aGF0IGVtaXRzIHRoZSBkYXRhIGFycmF5IHRvIHJlbmRlci5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRhYmxlLCB0YWJsZVtjZGstdGFibGVdJyxcbiAgZXhwb3J0QXM6ICdjZGtUYWJsZScsXG4gIHRlbXBsYXRlOiBDREtfVEFCTEVfVEVNUExBVEUsXG4gIHN0eWxlVXJsczogWyd0YWJsZS5jc3MnXSxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdGFibGUnLFxuICAgICdbY2xhc3MuY2RrLXRhYmxlLWZpeGVkLWxheW91dF0nOiAnZml4ZWRMYXlvdXQnLFxuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAvLyBUaGUgXCJPblB1c2hcIiBzdGF0dXMgZm9yIHRoZSBgTWF0VGFibGVgIGNvbXBvbmVudCBpcyBlZmZlY3RpdmVseSBhIG5vb3AsIHNvIHdlIGFyZSByZW1vdmluZyBpdC5cbiAgLy8gVGhlIHZpZXcgZm9yIGBNYXRUYWJsZWAgY29uc2lzdHMgZW50aXJlbHkgb2YgdGVtcGxhdGVzIGRlY2xhcmVkIGluIG90aGVyIHZpZXdzLiBBcyB0aGV5IGFyZVxuICAvLyBkZWNsYXJlZCBlbHNld2hlcmUsIHRoZXkgYXJlIGNoZWNrZWQgd2hlbiB0aGVpciBkZWNsYXJhdGlvbiBwb2ludHMgYXJlIGNoZWNrZWQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IENES19UQUJMRSwgdXNlRXhpc3Rpbmc6IENka1RhYmxlfSxcbiAgICB7cHJvdmlkZTogX1ZJRVdfUkVQRUFURVJfU1RSQVRFR1ksIHVzZUNsYXNzOiBfRGlzcG9zZVZpZXdSZXBlYXRlclN0cmF0ZWd5fSxcbiAgICB7cHJvdmlkZTogX0NPQUxFU0NFRF9TVFlMRV9TQ0hFRFVMRVIsIHVzZUNsYXNzOiBfQ29hbGVzY2VkU3R5bGVTY2hlZHVsZXJ9LFxuICAgIC8vIFByZXZlbnQgbmVzdGVkIHRhYmxlcyBmcm9tIHNlZWluZyB0aGlzIHRhYmxlJ3MgU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lci5cbiAgICB7cHJvdmlkZTogU1RJQ0tZX1BPU0lUSU9OSU5HX0xJU1RFTkVSLCB1c2VWYWx1ZTogbnVsbH0sXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBDb2xsZWN0aW9uVmlld2VyLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudDtcblxuICAvKiogTGF0ZXN0IGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcm90ZWN0ZWQgX2RhdGE6IFRbXXxSZWFkb25seUFycmF5PFQ+O1xuXG4gIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogTGlzdCBvZiB0aGUgcmVuZGVyZWQgcm93cyBhcyBpZGVudGlmaWVkIGJ5IHRoZWlyIGBSZW5kZXJSb3dgIG9iamVjdC4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyUm93czogUmVuZGVyUm93PFQ+W107XG5cbiAgLyoqIFN1YnNjcmlwdGlvbiB0aGF0IGxpc3RlbnMgZm9yIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSBfcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb258bnVsbDtcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCB0aGUgdXNlcidzIGRlZmluZWQgY29sdW1ucyAoaGVhZGVyLCBkYXRhLCBhbmQgZm9vdGVyIGNlbGwgdGVtcGxhdGUpIGlkZW50aWZpZWQgYnlcbiAgICogbmFtZS4gQ29sbGVjdGlvbiBwb3B1bGF0ZWQgYnkgdGhlIGNvbHVtbiBkZWZpbml0aW9ucyBnYXRoZXJlZCBieSBgQ29udGVudENoaWxkcmVuYCBhcyB3ZWxsIGFzXG4gICAqIGFueSBjdXN0b20gY29sdW1uIGRlZmluaXRpb25zIGFkZGVkIHRvIGBfY3VzdG9tQ29sdW1uRGVmc2AuXG4gICAqL1xuICBwcml2YXRlIF9jb2x1bW5EZWZzQnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIENka0NvbHVtbkRlZj4oKTtcblxuICAvKipcbiAgICogU2V0IG9mIGFsbCByb3cgZGVmaW5pdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGlzIHRhYmxlLiBQb3B1bGF0ZWQgYnkgdGhlIHJvd3MgZ2F0aGVyZWQgYnlcbiAgICogdXNpbmcgYENvbnRlbnRDaGlsZHJlbmAgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHJvdyBkZWZpbml0aW9ucyBhZGRlZCB0byBgX2N1c3RvbVJvd0RlZnNgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcm93RGVmczogQ2RrUm93RGVmPFQ+W107XG5cbiAgLyoqXG4gICAqIFNldCBvZiBhbGwgaGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIGJ5IHRoaXMgdGFibGUuIFBvcHVsYXRlZCBieSB0aGUgcm93c1xuICAgKiBnYXRoZXJlZCBieSB1c2luZyBgQ29udGVudENoaWxkcmVuYCBhcyB3ZWxsIGFzIGFueSBjdXN0b20gcm93IGRlZmluaXRpb25zIGFkZGVkIHRvXG4gICAqIGBfY3VzdG9tSGVhZGVyUm93RGVmc2AuXG4gICAqL1xuICBwcml2YXRlIF9oZWFkZXJSb3dEZWZzOiBDZGtIZWFkZXJSb3dEZWZbXTtcblxuICAvKipcbiAgICogU2V0IG9mIGFsbCByb3cgZGVmaW5pdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGlzIHRhYmxlLiBQb3B1bGF0ZWQgYnkgdGhlIHJvd3MgZ2F0aGVyZWQgYnlcbiAgICogdXNpbmcgYENvbnRlbnRDaGlsZHJlbmAgYXMgd2VsbCBhcyBhbnkgY3VzdG9tIHJvdyBkZWZpbml0aW9ucyBhZGRlZCB0b1xuICAgKiBgX2N1c3RvbUZvb3RlclJvd0RlZnNgLlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9vdGVyUm93RGVmczogQ2RrRm9vdGVyUm93RGVmW107XG5cbiAgLyoqIERpZmZlciB1c2VkIHRvIGZpbmQgdGhlIGNoYW5nZXMgaW4gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICBwcml2YXRlIF9kYXRhRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxSZW5kZXJSb3c8VD4+O1xuXG4gIC8qKiBTdG9yZXMgdGhlIHJvdyBkZWZpbml0aW9uIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHdoZW4gcHJlZGljYXRlLiAqL1xuICBwcml2YXRlIF9kZWZhdWx0Um93RGVmOiBDZGtSb3dEZWY8VD58bnVsbDtcblxuICAvKipcbiAgICogQ29sdW1uIGRlZmluaXRpb25zIHRoYXQgd2VyZSBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIGRpcmVjdCBjb250ZW50IGNoaWxkcmVuIG9mIHRoZSB0YWJsZS5cbiAgICogVGhlc2Ugd2lsbCBiZSBkZWZpbmVkIHdoZW4sIGUuZy4sIGNyZWF0aW5nIGEgd3JhcHBlciBhcm91bmQgdGhlIGNka1RhYmxlIHRoYXQgaGFzXG4gICAqIGNvbHVtbiBkZWZpbml0aW9ucyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VzdG9tQ29sdW1uRGVmcyA9IG5ldyBTZXQ8Q2RrQ29sdW1uRGVmPigpO1xuXG4gIC8qKlxuICAgKiBEYXRhIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBkaXJlY3QgY29udGVudCBjaGlsZHJlbiBvZiB0aGUgdGFibGUuXG4gICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhc1xuICAgKiBidWlsdC1pbiBkYXRhIHJvd3MgYXMgKml0cyogY29udGVudCBjaGlsZC5cbiAgICovXG4gIHByaXZhdGUgX2N1c3RvbVJvd0RlZnMgPSBuZXcgU2V0PENka1Jvd0RlZjxUPj4oKTtcblxuICAvKipcbiAgICogSGVhZGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBkaXJlY3QgY29udGVudCBjaGlsZHJlbiBvZiB0aGUgdGFibGUuXG4gICAqIFRoZXNlIHdpbGwgYmUgZGVmaW5lZCB3aGVuLCBlLmcuLCBjcmVhdGluZyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBjZGtUYWJsZSB0aGF0IGhhc1xuICAgKiBidWlsdC1pbiBoZWFkZXIgcm93cyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VzdG9tSGVhZGVyUm93RGVmcyA9IG5ldyBTZXQ8Q2RrSGVhZGVyUm93RGVmPigpO1xuXG4gIC8qKlxuICAgKiBGb290ZXIgcm93IGRlZmluaXRpb25zIHRoYXQgd2VyZSBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIGRpcmVjdCBjb250ZW50IGNoaWxkcmVuIG9mIHRoZSB0YWJsZS5cbiAgICogVGhlc2Ugd2lsbCBiZSBkZWZpbmVkIHdoZW4sIGUuZy4sIGNyZWF0aW5nIGEgd3JhcHBlciBhcm91bmQgdGhlIGNka1RhYmxlIHRoYXQgaGFzIGFcbiAgICogYnVpbHQtaW4gZm9vdGVyIHJvdyBhcyAqaXRzKiBjb250ZW50IGNoaWxkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3VzdG9tRm9vdGVyUm93RGVmcyA9IG5ldyBTZXQ8Q2RrRm9vdGVyUm93RGVmPigpO1xuXG4gIC8qKiBObyBkYXRhIHJvdyB0aGF0IHdhcyBkZWZpbmVkIG91dHNpZGUgb2YgdGhlIGRpcmVjdCBjb250ZW50IGNoaWxkcmVuIG9mIHRoZSB0YWJsZS4gKi9cbiAgcHJpdmF0ZSBfY3VzdG9tTm9EYXRhUm93OiBDZGtOb0RhdGFSb3cgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBoZWFkZXIgcm93IGRlZmluaXRpb24gaGFzIGJlZW4gY2hhbmdlZC4gVHJpZ2dlcnMgYW4gdXBkYXRlIHRvIHRoZSBoZWFkZXIgcm93IGFmdGVyXG4gICAqIGNvbnRlbnQgaXMgY2hlY2tlZC4gSW5pdGlhbGl6ZWQgYXMgdHJ1ZSBzbyB0aGF0IHRoZSB0YWJsZSByZW5kZXJzIHRoZSBpbml0aWFsIHNldCBvZiByb3dzLlxuICAgKi9cbiAgcHJpdmF0ZSBfaGVhZGVyUm93RGVmQ2hhbmdlZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGZvb3RlciByb3cgZGVmaW5pdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLiBUcmlnZ2VycyBhbiB1cGRhdGUgdG8gdGhlIGZvb3RlciByb3cgYWZ0ZXJcbiAgICogY29udGVudCBpcyBjaGVja2VkLiBJbml0aWFsaXplZCBhcyB0cnVlIHNvIHRoYXQgdGhlIHRhYmxlIHJlbmRlcnMgdGhlIGluaXRpYWwgc2V0IG9mIHJvd3MuXG4gICAqL1xuICBwcml2YXRlIF9mb290ZXJSb3dEZWZDaGFuZ2VkID0gdHJ1ZTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc3RpY2t5IGNvbHVtbiBzdHlsZXMgbmVlZCB0byBiZSB1cGRhdGVkLiBTZXQgdG8gYHRydWVgIHdoZW4gdGhlIHZpc2libGUgY29sdW1uc1xuICAgKiBjaGFuZ2UuXG4gICAqL1xuICBwcml2YXRlIF9zdGlja3lDb2x1bW5TdHlsZXNOZWVkUmVzZXQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBzdGlja3kgc3R5bGVyIHNob3VsZCByZWNhbGN1bGF0ZSBjZWxsIHdpZHRocyB3aGVuIGFwcGx5aW5nIHN0aWNreSBzdHlsZXMuIElmXG4gICAqIGBmYWxzZWAsIGNhY2hlZCB2YWx1ZXMgd2lsbCBiZSB1c2VkIGluc3RlYWQuIFRoaXMgaXMgb25seSBhcHBsaWNhYmxlIHRvIHRhYmxlcyB3aXRoXG4gICAqIHtAbGluayBmaXhlZExheW91dH0gZW5hYmxlZC4gRm9yIG90aGVyIHRhYmxlcywgY2VsbCB3aWR0aHMgd2lsbCBhbHdheXMgYmUgcmVjYWxjdWxhdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9yY2VSZWNhbGN1bGF0ZUNlbGxXaWR0aHMgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBDYWNoZSBvZiB0aGUgbGF0ZXN0IHJlbmRlcmVkIGBSZW5kZXJSb3dgIG9iamVjdHMgYXMgYSBtYXAgZm9yIGVhc3kgcmV0cmlldmFsIHdoZW4gY29uc3RydWN0aW5nXG4gICAqIGEgbmV3IGxpc3Qgb2YgYFJlbmRlclJvd2Agb2JqZWN0cyBmb3IgcmVuZGVyaW5nIHJvd3MuIFNpbmNlIHRoZSBuZXcgbGlzdCBpcyBjb25zdHJ1Y3RlZCB3aXRoXG4gICAqIHRoZSBjYWNoZWQgYFJlbmRlclJvd2Agb2JqZWN0cyB3aGVuIHBvc3NpYmxlLCB0aGUgcm93IGlkZW50aXR5IGlzIHByZXNlcnZlZCB3aGVuIHRoZSBkYXRhXG4gICAqIGFuZCByb3cgdGVtcGxhdGUgbWF0Y2hlcywgd2hpY2ggYWxsb3dzIHRoZSBgSXRlcmFibGVEaWZmZXJgIHRvIGNoZWNrIHJvd3MgYnkgcmVmZXJlbmNlXG4gICAqIGFuZCB1bmRlcnN0YW5kIHdoaWNoIHJvd3MgYXJlIGFkZGVkL21vdmVkL3JlbW92ZWQuXG4gICAqXG4gICAqIEltcGxlbWVudGVkIGFzIGEgbWFwIG9mIG1hcHMgd2hlcmUgdGhlIGZpcnN0IGtleSBpcyB0aGUgYGRhdGE6IFRgIG9iamVjdCBhbmQgdGhlIHNlY29uZCBpcyB0aGVcbiAgICogYENka1Jvd0RlZjxUPmAgb2JqZWN0LiBXaXRoIHRoZSB0d28ga2V5cywgdGhlIGNhY2hlIHBvaW50cyB0byBhIGBSZW5kZXJSb3c8VD5gIG9iamVjdCB0aGF0XG4gICAqIGNvbnRhaW5zIGFuIGFycmF5IG9mIGNyZWF0ZWQgcGFpcnMuIFRoZSBhcnJheSBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBkYXRhXG4gICAqIGFycmF5IGNvbnRhaW5zIG11bHRpcGxlIGR1cGxpY2F0ZSBkYXRhIG9iamVjdHMgYW5kIGVhY2ggaW5zdGFudGlhdGVkIGBSZW5kZXJSb3dgIG11c3QgYmVcbiAgICogc3RvcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2FjaGVkUmVuZGVyUm93c01hcCA9IG5ldyBNYXA8VCwgV2Vha01hcDxDZGtSb3dEZWY8VD4sIFJlbmRlclJvdzxUPltdPj4oKTtcblxuICAvKiogV2hldGhlciB0aGUgdGFibGUgaXMgYXBwbGllZCB0byBhIG5hdGl2ZSBgPHRhYmxlPmAuICovXG4gIHByb3RlY3RlZCBfaXNOYXRpdmVIdG1sVGFibGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgY2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgYXBwbHlpbmcgdGhlIGFwcHJvcHJpYXRlIHN0aWNreSBwb3NpdGlvbmluZyBzdHlsZXMgdG9cbiAgICogdGhlIHRhYmxlJ3Mgcm93cyBhbmQgY2VsbHMuXG4gICAqL1xuICBwcml2YXRlIF9zdGlja3lTdHlsZXI6IFN0aWNreVN0eWxlcjtcblxuICAvKipcbiAgICogQ1NTIGNsYXNzIGFkZGVkIHRvIGFueSByb3cgb3IgY2VsbCB0aGF0IGhhcyBzdGlja3kgcG9zaXRpb25pbmcgYXBwbGllZC4gTWF5IGJlIG92ZXJyaWRlbiBieVxuICAgKiB0YWJsZSBzdWJjbGFzc2VzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHN0aWNreUNzc0NsYXNzOiBzdHJpbmcgPSAnY2RrLXRhYmxlLXN0aWNreSc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gbWFudWFsbHkgYWRkIHBvc2l0b246IHN0aWNreSB0byBhbGwgc3RpY2t5IGNlbGwgZWxlbWVudHMuIE5vdCBuZWVkZWQgaWZcbiAgICogdGhlIHBvc2l0aW9uIGlzIHNldCBpbiBhIHNlbGVjdG9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUgb2Ygc3RpY2t5Q3NzQ2xhc3MuIE1heSBiZVxuICAgKiBvdmVycmlkZGVuIGJ5IHRhYmxlIHN1YmNsYXNzZXNcbiAgICovXG4gIHByb3RlY3RlZCBuZWVkc1Bvc2l0aW9uU3RpY2t5T25FbGVtZW50ID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciB0aGUgbm8gZGF0YSByb3cgaXMgY3VycmVudGx5IHNob3dpbmcgYW55dGhpbmcuICovXG4gIHByaXZhdGUgX2lzU2hvd2luZ05vRGF0YVJvdyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUcmFja2luZyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBjaGVjayB0aGUgZGlmZmVyZW5jZXMgaW4gZGF0YSBjaGFuZ2VzLiBVc2VkIHNpbWlsYXJseVxuICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgcm93IG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSByb3cgYmFzZWQgb24gaXRzIGRhdGFcbiAgICogcmVsYXRpdmUgdG8gdGhlIGZ1bmN0aW9uIHRvIGtub3cgaWYgYSByb3cgc2hvdWxkIGJlIGFkZGVkL3JlbW92ZWQvbW92ZWQuXG4gICAqIEFjY2VwdHMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHR3byBwYXJhbWV0ZXJzLCBgaW5kZXhgIGFuZCBgaXRlbWAuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4ge1xuICAgIHJldHVybiB0aGlzLl90cmFja0J5Rm47XG4gIH1cbiAgc2V0IHRyYWNrQnkoZm46IFRyYWNrQnlGdW5jdGlvbjxUPikge1xuICAgIGlmICgodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSAmJiBmbiAhPSBudWxsICYmIHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gKTtcbiAgICB9XG4gICAgdGhpcy5fdHJhY2tCeUZuID0gZm47XG4gIH1cbiAgcHJpdmF0ZSBfdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248VD47XG5cbiAgLyoqXG4gICAqIFRoZSB0YWJsZSdzIHNvdXJjZSBvZiBkYXRhLCB3aGljaCBjYW4gYmUgcHJvdmlkZWQgaW4gdGhyZWUgd2F5cyAoaW4gb3JkZXIgb2YgY29tcGxleGl0eSk6XG4gICAqICAgLSBTaW1wbGUgZGF0YSBhcnJheSAoZWFjaCBvYmplY3QgcmVwcmVzZW50cyBvbmUgdGFibGUgcm93KVxuICAgKiAgIC0gU3RyZWFtIHRoYXQgZW1pdHMgYSBkYXRhIGFycmF5IGVhY2ggdGltZSB0aGUgYXJyYXkgY2hhbmdlc1xuICAgKiAgIC0gYERhdGFTb3VyY2VgIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIGNvbm5lY3QvZGlzY29ubmVjdCBpbnRlcmZhY2UuXG4gICAqXG4gICAqIElmIGEgZGF0YSBhcnJheSBpcyBwcm92aWRlZCwgdGhlIHRhYmxlIG11c3QgYmUgbm90aWZpZWQgd2hlbiB0aGUgYXJyYXkncyBvYmplY3RzIGFyZVxuICAgKiBhZGRlZCwgcmVtb3ZlZCwgb3IgbW92ZWQuIFRoaXMgY2FuIGJlIGRvbmUgYnkgY2FsbGluZyB0aGUgYHJlbmRlclJvd3MoKWAgZnVuY3Rpb24gd2hpY2ggd2lsbFxuICAgKiByZW5kZXIgdGhlIGRpZmYgc2luY2UgdGhlIGxhc3QgdGFibGUgcmVuZGVyLiBJZiB0aGUgZGF0YSBhcnJheSByZWZlcmVuY2UgaXMgY2hhbmdlZCwgdGhlIHRhYmxlXG4gICAqIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIGFuIHVwZGF0ZSB0byB0aGUgcm93cy5cbiAgICpcbiAgICogV2hlbiBwcm92aWRpbmcgYW4gT2JzZXJ2YWJsZSBzdHJlYW0sIHRoZSB0YWJsZSB3aWxsIHRyaWdnZXIgYW4gdXBkYXRlIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGVcbiAgICogc3RyZWFtIGVtaXRzIGEgbmV3IGFycmF5IG9mIGRhdGEuXG4gICAqXG4gICAqIEZpbmFsbHksIHdoZW4gcHJvdmlkaW5nIGEgYERhdGFTb3VyY2VgIG9iamVjdCwgdGhlIHRhYmxlIHdpbGwgdXNlIHRoZSBPYnNlcnZhYmxlIHN0cmVhbVxuICAgKiBwcm92aWRlZCBieSB0aGUgY29ubmVjdCBmdW5jdGlvbiBhbmQgdHJpZ2dlciB1cGRhdGVzIHdoZW4gdGhhdCBzdHJlYW0gZW1pdHMgbmV3IGRhdGEgYXJyYXlcbiAgICogdmFsdWVzLiBEdXJpbmcgdGhlIHRhYmxlJ3MgbmdPbkRlc3Ryb3kgb3Igd2hlbiB0aGUgZGF0YSBzb3VyY2UgaXMgcmVtb3ZlZCBmcm9tIHRoZSB0YWJsZSwgdGhlXG4gICAqIHRhYmxlIHdpbGwgY2FsbCB0aGUgRGF0YVNvdXJjZSdzIGBkaXNjb25uZWN0YCBmdW5jdGlvbiAobWF5IGJlIHVzZWZ1bCBmb3IgY2xlYW5pbmcgdXAgYW55XG4gICAqIHN1YnNjcmlwdGlvbnMgcmVnaXN0ZXJlZCBkdXJpbmcgdGhlIGNvbm5lY3QgcHJvY2VzcykuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZGF0YVNvdXJjZSgpOiBDZGtUYWJsZURhdGFTb3VyY2VJbnB1dDxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogQ2RrVGFibGVEYXRhU291cmNlSW5wdXQ8VD4pIHtcbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSAhPT0gZGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5fc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogQ2RrVGFibGVEYXRhU291cmNlSW5wdXQ8VD47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYWxsb3cgbXVsdGlwbGUgcm93cyBwZXIgZGF0YSBvYmplY3QgYnkgZXZhbHVhdGluZyB3aGljaCByb3dzIGV2YWx1YXRlIHRoZWlyICd3aGVuJ1xuICAgKiBwcmVkaWNhdGUgdG8gdHJ1ZS4gSWYgYG11bHRpVGVtcGxhdGVEYXRhUm93c2AgaXMgZmFsc2UsIHdoaWNoIGlzIHRoZSBkZWZhdWx0IHZhbHVlLCB0aGVuIGVhY2hcbiAgICogZGF0YW9iamVjdCB3aWxsIHJlbmRlciB0aGUgZmlyc3Qgcm93IHRoYXQgZXZhbHVhdGVzIGl0cyB3aGVuIHByZWRpY2F0ZSB0byB0cnVlLCBpbiB0aGUgb3JkZXJcbiAgICogZGVmaW5lZCBpbiB0aGUgdGFibGUsIG9yIG90aGVyd2lzZSB0aGUgZGVmYXVsdCByb3cgd2hpY2ggZG9lcyBub3QgaGF2ZSBhIHdoZW4gcHJlZGljYXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpVGVtcGxhdGVEYXRhUm93cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlUZW1wbGF0ZURhdGFSb3dzO1xuICB9XG4gIHNldCBtdWx0aVRlbXBsYXRlRGF0YVJvd3ModjogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpVGVtcGxhdGVEYXRhUm93cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcblxuICAgIC8vIEluIEl2eSBpZiB0aGlzIHZhbHVlIGlzIHNldCB2aWEgYSBzdGF0aWMgYXR0cmlidXRlIChlLmcuIDx0YWJsZSBtdWx0aVRlbXBsYXRlRGF0YVJvd3M+KSxcbiAgICAvLyB0aGlzIHNldHRlciB3aWxsIGJlIGludm9rZWQgYmVmb3JlIHRoZSByb3cgb3V0bGV0IGhhcyBiZWVuIGRlZmluZWQgaGVuY2UgdGhlIG51bGwgY2hlY2suXG4gICAgaWYgKHRoaXMuX3Jvd091dGxldCAmJiB0aGlzLl9yb3dPdXRsZXQudmlld0NvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZvcmNlUmVuZGVyRGF0YVJvd3MoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RpY2t5Q29sdW1uU3R5bGVzKCk7XG4gICAgfVxuICB9XG4gIF9tdWx0aVRlbXBsYXRlRGF0YVJvd3M6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hldGhlciB0byB1c2UgYSBmaXhlZCB0YWJsZSBsYXlvdXQuIEVuYWJsaW5nIHRoaXMgb3B0aW9uIHdpbGwgZW5mb3JjZSBjb25zaXN0ZW50IGNvbHVtbiB3aWR0aHNcbiAgICogYW5kIG9wdGltaXplIHJlbmRlcmluZyBzdGlja3kgc3R5bGVzIGZvciBuYXRpdmUgdGFibGVzLiBOby1vcCBmb3IgZmxleCB0YWJsZXMuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgZml4ZWRMYXlvdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpeGVkTGF5b3V0O1xuICB9XG4gIHNldCBmaXhlZExheW91dCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZml4ZWRMYXlvdXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG5cbiAgICAvLyBUb2dnbGluZyBgZml4ZWRMYXlvdXRgIG1heSBjaGFuZ2UgY29sdW1uIHdpZHRocy4gU3RpY2t5IGNvbHVtbiBzdHlsZXMgc2hvdWxkIGJlIHJlY2FsY3VsYXRlZC5cbiAgICB0aGlzLl9mb3JjZVJlY2FsY3VsYXRlQ2VsbFdpZHRocyA9IHRydWU7XG4gICAgdGhpcy5fc3RpY2t5Q29sdW1uU3R5bGVzTmVlZFJlc2V0ID0gdHJ1ZTtcbiAgfVxuICBwcml2YXRlIF9maXhlZExheW91dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIFRPRE8oYW5kcmV3c2VndWluKTogUmVtb3ZlIG1heCB2YWx1ZSBhcyB0aGUgZW5kIGluZGV4XG4gIC8vICAgYW5kIGluc3RlYWQgY2FsY3VsYXRlIHRoZSB2aWV3IG9uIGluaXQgYW5kIHNjcm9sbC5cbiAgLyoqXG4gICAqIFN0cmVhbSBjb250YWluaW5nIHRoZSBsYXRlc3QgaW5mb3JtYXRpb24gb24gd2hhdCByb3dzIGFyZSBiZWluZyBkaXNwbGF5ZWQgb24gc2NyZWVuLlxuICAgKiBDYW4gYmUgdXNlZCBieSB0aGUgZGF0YSBzb3VyY2UgdG8gYXMgYSBoZXVyaXN0aWMgb2Ygd2hhdCBkYXRhIHNob3VsZCBiZSBwcm92aWRlZC5cbiAgICpcbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgdmlld0NoYW5nZTogQmVoYXZpb3JTdWJqZWN0PHtzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcn0+ID1cbiAgICAgIG5ldyBCZWhhdmlvclN1YmplY3Q8e3N0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyfT4oe3N0YXJ0OiAwLCBlbmQ6IE51bWJlci5NQVhfVkFMVUV9KTtcblxuICAvLyBPdXRsZXRzIGluIHRoZSB0YWJsZSdzIHRlbXBsYXRlIHdoZXJlIHRoZSBoZWFkZXIsIGRhdGEgcm93cywgYW5kIGZvb3RlciB3aWxsIGJlIGluc2VydGVkLlxuICBAVmlld0NoaWxkKERhdGFSb3dPdXRsZXQsIHtzdGF0aWM6IHRydWV9KSBfcm93T3V0bGV0OiBEYXRhUm93T3V0bGV0O1xuICBAVmlld0NoaWxkKEhlYWRlclJvd091dGxldCwge3N0YXRpYzogdHJ1ZX0pIF9oZWFkZXJSb3dPdXRsZXQ6IEhlYWRlclJvd091dGxldDtcbiAgQFZpZXdDaGlsZChGb290ZXJSb3dPdXRsZXQsIHtzdGF0aWM6IHRydWV9KSBfZm9vdGVyUm93T3V0bGV0OiBGb290ZXJSb3dPdXRsZXQ7XG4gIEBWaWV3Q2hpbGQoTm9EYXRhUm93T3V0bGV0LCB7c3RhdGljOiB0cnVlfSkgX25vRGF0YVJvd091dGxldDogTm9EYXRhUm93T3V0bGV0O1xuXG4gIC8qKlxuICAgKiBUaGUgY29sdW1uIGRlZmluaXRpb25zIHByb3ZpZGVkIGJ5IHRoZSB1c2VyIHRoYXQgY29udGFpbiB3aGF0IHRoZSBoZWFkZXIsIGRhdGEsIGFuZCBmb290ZXJcbiAgICogY2VsbHMgc2hvdWxkIHJlbmRlciBmb3IgZWFjaCBjb2x1bW4uXG4gICAqL1xuICBAQ29udGVudENoaWxkcmVuKENka0NvbHVtbkRlZiwge2Rlc2NlbmRhbnRzOiB0cnVlfSkgX2NvbnRlbnRDb2x1bW5EZWZzOiBRdWVyeUxpc3Q8Q2RrQ29sdW1uRGVmPjtcblxuICAvKiogU2V0IG9mIGRhdGEgcm93IGRlZmluaXRpb25zIHRoYXQgd2VyZSBwcm92aWRlZCB0byB0aGUgdGFibGUgYXMgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtSb3dEZWYsIHtkZXNjZW5kYW50czogdHJ1ZX0pIF9jb250ZW50Um93RGVmczogUXVlcnlMaXN0PENka1Jvd0RlZjxUPj47XG5cbiAgLyoqIFNldCBvZiBoZWFkZXIgcm93IGRlZmluaXRpb25zIHRoYXQgd2VyZSBwcm92aWRlZCB0byB0aGUgdGFibGUgYXMgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtIZWFkZXJSb3dEZWYsIHtcbiAgICBkZXNjZW5kYW50czogdHJ1ZVxuICB9KSBfY29udGVudEhlYWRlclJvd0RlZnM6IFF1ZXJ5TGlzdDxDZGtIZWFkZXJSb3dEZWY+O1xuXG4gIC8qKiBTZXQgb2YgZm9vdGVyIHJvdyBkZWZpbml0aW9ucyB0aGF0IHdlcmUgcHJvdmlkZWQgdG8gdGhlIHRhYmxlIGFzIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2RrRm9vdGVyUm93RGVmLCB7XG4gICAgZGVzY2VuZGFudHM6IHRydWVcbiAgfSkgX2NvbnRlbnRGb290ZXJSb3dEZWZzOiBRdWVyeUxpc3Q8Q2RrRm9vdGVyUm93RGVmPjtcblxuICAvKiogUm93IGRlZmluaXRpb24gdGhhdCB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgaWYgdGhlcmUncyBubyBkYXRhIGluIHRoZSB0YWJsZS4gKi9cbiAgQENvbnRlbnRDaGlsZChDZGtOb0RhdGFSb3cpIF9ub0RhdGFSb3c6IENka05vRGF0YVJvdztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBBdHRyaWJ1dGUoJ3JvbGUnKSByb2xlOiBzdHJpbmcsXG4gICAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgcmVhZG9ubHkgX2RpcjogRGlyZWN0aW9uYWxpdHksIEBJbmplY3QoRE9DVU1FTlQpIF9kb2N1bWVudDogYW55LFxuICAgICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuXG4gICAgICAvKipcbiAgICAgICAqIEBkZXByZWNhdGVkIGBfY29hbGVzY2VkU3R5bGVTY2hlZHVsZXJgLCBgX3ZpZXdSZXBlYXRlcmAgYW5kIGBfdmlld3BvcnRSdWxlcmBcbiAgICAgICAqICAgIHBhcmFtZXRlcnMgdG8gYmVjb21lIHJlcXVpcmVkLlxuICAgICAgICogQGJyZWFraW5nLWNoYW5nZSAxMS4wLjBcbiAgICAgICAqL1xuICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChfVklFV19SRVBFQVRFUl9TVFJBVEVHWSlcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IF92aWV3UmVwZWF0ZXI/OiBfVmlld1JlcGVhdGVyPFQsIFJlbmRlclJvdzxUPiwgUm93Q29udGV4dDxUPj4sXG4gICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KF9DT0FMRVNDRURfU1RZTEVfU0NIRURVTEVSKVxuICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyPzogX0NvYWxlc2NlZFN0eWxlU2NoZWR1bGVyLFxuICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgQEluamVjdChTVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIpXG4gICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX3N0aWNreVBvc2l0aW9uaW5nTGlzdGVuZXI/OiBTdGlja3lQb3NpdGlvbmluZ0xpc3RlbmVyLFxuICAgICAgLy8gT3B0aW9uYWwgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBUaGUgdmlld3BvcnQgcnVsZXIgaXMgcHJvdmlkZWQgaW4gcm9vdC4gVGhlcmVmb3JlLFxuICAgICAgLy8gdGhpcyBwcm9wZXJ0eSB3aWxsIG5ldmVyIGJlIG51bGwuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGxpZ2h0d2VpZ2h0LXRva2Vuc1xuICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBfdmlld3BvcnRSdWxlcj86IFZpZXdwb3J0UnVsZXIpIHtcbiAgICBpZiAoIXJvbGUpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ3JpZCcpO1xuICAgIH1cblxuICAgIHRoaXMuX2RvY3VtZW50ID0gX2RvY3VtZW50O1xuICAgIHRoaXMuX2lzTmF0aXZlSHRtbFRhYmxlID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lID09PSAnVEFCTEUnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2V0dXBTdGlja3lTdHlsZXIoKTtcblxuICAgIGlmICh0aGlzLl9pc05hdGl2ZUh0bWxUYWJsZSkge1xuICAgICAgdGhpcy5fYXBwbHlOYXRpdmVUYWJsZVNlY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIHRoZSB0cmFja0J5IGZ1bmN0aW9uIHNvIHRoYXQgaXQgdXNlcyB0aGUgYFJlbmRlclJvd2AgYXMgaXRzIGlkZW50aXR5IGJ5IGRlZmF1bHQuIElmXG4gICAgLy8gdGhlIHVzZXIgaGFzIHByb3ZpZGVkIGEgY3VzdG9tIHRyYWNrQnksIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoYXQgZnVuY3Rpb24gYXMgZXZhbHVhdGVkXG4gICAgLy8gd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBgUmVuZGVyUm93YCdzIGRhdGEgYW5kIGluZGV4LlxuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzLmZpbmQoW10pLmNyZWF0ZSgoX2k6IG51bWJlciwgZGF0YVJvdzogUmVuZGVyUm93PFQ+KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy50cmFja0J5ID8gdGhpcy50cmFja0J5KGRhdGFSb3cuZGF0YUluZGV4LCBkYXRhUm93LmRhdGEpIDogZGF0YVJvdztcbiAgICB9KTtcblxuICAgIC8vIFRhYmxlIGNlbGwgZGltZW5zaW9ucyBtYXkgY2hhbmdlIGFmdGVyIHJlc2l6aW5nIHRoZSB3aW5kb3cuIFNpZ25hbCB0aGUgc3RpY2t5IHN0eWxlciB0b1xuICAgIC8vIHJlZnJlc2ggaXRzIGNhY2hlIG9mIGNlbGwgd2lkdGhzIHRoZSBuZXh0IHRpbWUgc3RpY2t5IHN0eWxlcyBhcmUgdXBkYXRlZC5cbiAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDExLjAuMCBSZW1vdmUgbnVsbCBjaGVjayBmb3IgX3ZpZXdwb3J0UnVsZXIgb25jZSBpdCdzIGEgcmVxdWlyZWQgcGFyYW1ldGVyLlxuICAgIGlmICh0aGlzLl92aWV3cG9ydFJ1bGVyKSB7XG4gICAgICB0aGlzLl92aWV3cG9ydFJ1bGVyLmNoYW5nZSgpLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZvcmNlUmVjYWxjdWxhdGVDZWxsV2lkdGhzID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICAvLyBDYWNoZSB0aGUgcm93IGFuZCBjb2x1bW4gZGVmaW5pdGlvbnMgZ2F0aGVyZWQgYnkgQ29udGVudENoaWxkcmVuIGFuZCBwcm9ncmFtbWF0aWMgaW5qZWN0aW9uLlxuICAgIHRoaXMuX2NhY2hlUm93RGVmcygpO1xuICAgIHRoaXMuX2NhY2hlQ29sdW1uRGVmcygpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHVzZXIgaGFzIGF0IGxlYXN0IGFkZGVkIGhlYWRlciwgZm9vdGVyLCBvciBkYXRhIHJvdyBkZWYuXG4gICAgaWYgKCF0aGlzLl9oZWFkZXJSb3dEZWZzLmxlbmd0aCAmJiAhdGhpcy5fZm9vdGVyUm93RGVmcy5sZW5ndGggJiYgIXRoaXMuX3Jvd0RlZnMubGVuZ3RoICYmXG4gICAgICAgICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZU1pc3NpbmdSb3dEZWZzRXJyb3IoKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgdXBkYXRlcyBpZiB0aGUgbGlzdCBvZiBjb2x1bW5zIGhhdmUgYmVlbiBjaGFuZ2VkIGZvciB0aGUgaGVhZGVyLCByb3csIG9yIGZvb3RlciBkZWZzLlxuICAgIGNvbnN0IGNvbHVtbnNDaGFuZ2VkID0gdGhpcy5fcmVuZGVyVXBkYXRlZENvbHVtbnMoKTtcbiAgICBjb25zdCByb3dEZWZzQ2hhbmdlZCA9IGNvbHVtbnNDaGFuZ2VkIHx8IHRoaXMuX2hlYWRlclJvd0RlZkNoYW5nZWQgfHwgdGhpcy5fZm9vdGVyUm93RGVmQ2hhbmdlZDtcbiAgICAvLyBFbnN1cmUgc3RpY2t5IGNvbHVtbiBzdHlsZXMgYXJlIHJlc2V0IGlmIHNldCB0byBgdHJ1ZWAgZWxzZXdoZXJlLlxuICAgIHRoaXMuX3N0aWNreUNvbHVtblN0eWxlc05lZWRSZXNldCA9IHRoaXMuX3N0aWNreUNvbHVtblN0eWxlc05lZWRSZXNldCB8fCByb3dEZWZzQ2hhbmdlZDtcbiAgICB0aGlzLl9mb3JjZVJlY2FsY3VsYXRlQ2VsbFdpZHRocyA9IHJvd0RlZnNDaGFuZ2VkO1xuXG4gICAgLy8gSWYgdGhlIGhlYWRlciByb3cgZGVmaW5pdGlvbiBoYXMgYmVlbiBjaGFuZ2VkLCB0cmlnZ2VyIGEgcmVuZGVyIHRvIHRoZSBoZWFkZXIgcm93LlxuICAgIGlmICh0aGlzLl9oZWFkZXJSb3dEZWZDaGFuZ2VkKSB7XG4gICAgICB0aGlzLl9mb3JjZVJlbmRlckhlYWRlclJvd3MoKTtcbiAgICAgIHRoaXMuX2hlYWRlclJvd0RlZkNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZm9vdGVyIHJvdyBkZWZpbml0aW9uIGhhcyBiZWVuIGNoYW5nZWQsIHRyaWdnZXIgYSByZW5kZXIgdG8gdGhlIGZvb3RlciByb3cuXG4gICAgaWYgKHRoaXMuX2Zvb3RlclJvd0RlZkNoYW5nZWQpIHtcbiAgICAgIHRoaXMuX2ZvcmNlUmVuZGVyRm9vdGVyUm93cygpO1xuICAgICAgdGhpcy5fZm9vdGVyUm93RGVmQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgZGF0YSBzb3VyY2UgYW5kIHJvdyBkZWZpbml0aW9ucywgY29ubmVjdCB0byB0aGUgZGF0YSBzb3VyY2UgdW5sZXNzIGFcbiAgICAvLyBjb25uZWN0aW9uIGhhcyBhbHJlYWR5IGJlZW4gbWFkZS5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlICYmIHRoaXMuX3Jvd0RlZnMubGVuZ3RoID4gMCAmJiAhdGhpcy5fcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RpY2t5Q29sdW1uU3R5bGVzTmVlZFJlc2V0KSB7XG4gICAgICAvLyBJbiB0aGUgYWJvdmUgY2FzZSwgX29ic2VydmVSZW5kZXJDaGFuZ2VzIHdpbGwgcmVzdWx0IGluIHVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcyBiZWluZ1xuICAgICAgLy8gY2FsbGVkIHdoZW4gaXQgcm93IGRhdGEgYXJyaXZlcy4gT3RoZXJ3aXNlLCB3ZSBuZWVkIHRvIGNhbGwgaXQgcHJvYWN0aXZlbHkuXG4gICAgICB0aGlzLnVwZGF0ZVN0aWNreUNvbHVtblN0eWxlcygpO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrU3RpY2t5U3RhdGVzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9yb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIHRoaXMuX25vRGF0YVJvd091dGxldC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5faGVhZGVyUm93T3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB0aGlzLl9mb290ZXJSb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuXG4gICAgdGhpcy5fY2FjaGVkUmVuZGVyUm93c01hcC5jbGVhcigpO1xuXG4gICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcblxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgcm93cyBiYXNlZCBvbiB0aGUgdGFibGUncyBsYXRlc3Qgc2V0IG9mIGRhdGEsIHdoaWNoIHdhcyBlaXRoZXIgcHJvdmlkZWQgZGlyZWN0bHkgYXMgYW5cbiAgICogaW5wdXQgb3IgcmV0cmlldmVkIHRocm91Z2ggYW4gT2JzZXJ2YWJsZSBzdHJlYW0gKGRpcmVjdGx5IG9yIGZyb20gYSBEYXRhU291cmNlKS5cbiAgICogQ2hlY2tzIGZvciBkaWZmZXJlbmNlcyBpbiB0aGUgZGF0YSBzaW5jZSB0aGUgbGFzdCBkaWZmIHRvIHBlcmZvcm0gb25seSB0aGUgbmVjZXNzYXJ5XG4gICAqIGNoYW5nZXMgKGFkZC9yZW1vdmUvbW92ZSByb3dzKS5cbiAgICpcbiAgICogSWYgdGhlIHRhYmxlJ3MgZGF0YSBzb3VyY2UgaXMgYSBEYXRhU291cmNlIG9yIE9ic2VydmFibGUsIHRoaXMgd2lsbCBiZSBpbnZva2VkIGF1dG9tYXRpY2FsbHlcbiAgICogZWFjaCB0aW1lIHRoZSBwcm92aWRlZCBPYnNlcnZhYmxlIHN0cmVhbSBlbWl0cyBhIG5ldyBkYXRhIGFycmF5LiBPdGhlcndpc2UgaWYgeW91ciBkYXRhIGlzXG4gICAqIGFuIGFycmF5LCB0aGlzIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBiZSBjYWxsZWQgdG8gcmVuZGVyIGFueSBjaGFuZ2VzLlxuICAgKi9cbiAgcmVuZGVyUm93cygpIHtcbiAgICB0aGlzLl9yZW5kZXJSb3dzID0gdGhpcy5fZ2V0QWxsUmVuZGVyUm93cygpO1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLl9kYXRhRGlmZmVyLmRpZmYodGhpcy5fcmVuZGVyUm93cyk7XG4gICAgaWYgKCFjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl91cGRhdGVOb0RhdGFSb3coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX3Jvd091dGxldC52aWV3Q29udGFpbmVyO1xuXG4gICAgLy8gQGJyZWFraW5nLWNoYW5nZSAxMS4wLjAgUmVtb3ZlIG51bGwgY2hlY2sgZm9yIGBfdmlld1JlcGVhdGVyYCBhbmQgdGhlXG4gICAgLy8gYGVsc2VgIGNsYXVzZSBvbmNlIGBfdmlld1JlcGVhdGVyYCBpcyB0dXJuZWQgaW50byBhIHJlcXVpcmVkIHBhcmFtZXRlci5cbiAgICBpZiAodGhpcy5fdmlld1JlcGVhdGVyKSB7XG4gICAgICB0aGlzLl92aWV3UmVwZWF0ZXIuYXBwbHlDaGFuZ2VzKFxuICAgICAgICAgIGNoYW5nZXMsXG4gICAgICAgICAgdmlld0NvbnRhaW5lcixcbiAgICAgICAgICAocmVjb3JkOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxSZW5kZXJSb3c8VD4+LFxuICAgICAgICAgICBfYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXJ8bnVsbCxcbiAgICAgICAgICAgY3VycmVudEluZGV4OiBudW1iZXJ8bnVsbCkgPT4gdGhpcy5fZ2V0RW1iZWRkZWRWaWV3QXJncyhyZWNvcmQuaXRlbSwgY3VycmVudEluZGV4ISksXG4gICAgICAgICAgKHJlY29yZCkgPT4gcmVjb3JkLml0ZW0uZGF0YSxcbiAgICAgICAgICAoY2hhbmdlOiBfVmlld1JlcGVhdGVySXRlbUNoYW5nZTxSZW5kZXJSb3c8VD4sIFJvd0NvbnRleHQ8VD4+KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlLm9wZXJhdGlvbiA9PT0gX1ZpZXdSZXBlYXRlck9wZXJhdGlvbi5JTlNFUlRFRCAmJiBjaGFuZ2UuY29udGV4dCkge1xuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJDZWxsVGVtcGxhdGVGb3JJdGVtKGNoYW5nZS5yZWNvcmQuaXRlbS5yb3dEZWYsIGNoYW5nZS5jb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlcy5mb3JFYWNoT3BlcmF0aW9uKFxuICAgICAgICAocmVjb3JkOiBJdGVyYWJsZUNoYW5nZVJlY29yZDxSZW5kZXJSb3c8VD4+LCBwcmV2SW5kZXg6IG51bWJlcnxudWxsLFxuICAgICAgICAgY3VycmVudEluZGV4OiBudW1iZXJ8bnVsbCkgPT4ge1xuICAgICAgICAgIGlmIChyZWNvcmQucHJldmlvdXNJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJSb3cgPSByZWNvcmQuaXRlbTtcbiAgICAgICAgICAgIGNvbnN0IHJvd0RlZiA9IHJlbmRlclJvdy5yb3dEZWY7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0OiBSb3dDb250ZXh0PFQ+ID0geyRpbXBsaWNpdDogcmVuZGVyUm93LmRhdGF9O1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyUm93KHRoaXMuX3Jvd091dGxldCwgcm93RGVmLCBjdXJyZW50SW5kZXghLCBjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyLnJlbW92ZShwcmV2SW5kZXghKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmlldyA9IDxSb3dWaWV3UmVmPFQ+PnZpZXdDb250YWluZXIuZ2V0KHByZXZJbmRleCEpO1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lci5tb3ZlKHZpZXchLCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBtZXRhIGNvbnRleHQgb2YgYSByb3cncyBjb250ZXh0IGRhdGEgKGluZGV4LCBjb3VudCwgZmlyc3QsIGxhc3QsIC4uLilcbiAgICB0aGlzLl91cGRhdGVSb3dJbmRleENvbnRleHQoKTtcblxuICAgIC8vIFVwZGF0ZSByb3dzIHRoYXQgZGlkIG5vdCBnZXQgYWRkZWQvcmVtb3ZlZC9tb3ZlZCBidXQgbWF5IGhhdmUgaGFkIHRoZWlyIGlkZW50aXR5IGNoYW5nZWQsXG4gICAgLy8gZS5nLiBpZiB0cmFja0J5IG1hdGNoZWQgZGF0YSBvbiBzb21lIHByb3BlcnR5IGJ1dCB0aGUgYWN0dWFsIGRhdGEgcmVmZXJlbmNlIGNoYW5nZWQuXG4gICAgY2hhbmdlcy5mb3JFYWNoSWRlbnRpdHlDaGFuZ2UoKHJlY29yZDogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8UmVuZGVyUm93PFQ+PikgPT4ge1xuICAgICAgY29uc3Qgcm93VmlldyA9IDxSb3dWaWV3UmVmPFQ+PnZpZXdDb250YWluZXIuZ2V0KHJlY29yZC5jdXJyZW50SW5kZXghKTtcbiAgICAgIHJvd1ZpZXcuY29udGV4dC4kaW1wbGljaXQgPSByZWNvcmQuaXRlbS5kYXRhO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fdXBkYXRlTm9EYXRhUm93KCk7XG4gICAgdGhpcy51cGRhdGVTdGlja3lDb2x1bW5TdHlsZXMoKTtcbiAgfVxuXG4gIC8qKiBBZGRzIGEgY29sdW1uIGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIGFkZENvbHVtbkRlZihjb2x1bW5EZWY6IENka0NvbHVtbkRlZikge1xuICAgIHRoaXMuX2N1c3RvbUNvbHVtbkRlZnMuYWRkKGNvbHVtbkRlZik7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhIGNvbHVtbiBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICByZW1vdmVDb2x1bW5EZWYoY29sdW1uRGVmOiBDZGtDb2x1bW5EZWYpIHtcbiAgICB0aGlzLl9jdXN0b21Db2x1bW5EZWZzLmRlbGV0ZShjb2x1bW5EZWYpO1xuICB9XG5cbiAgLyoqIEFkZHMgYSByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgYWRkUm93RGVmKHJvd0RlZjogQ2RrUm93RGVmPFQ+KSB7XG4gICAgdGhpcy5fY3VzdG9tUm93RGVmcy5hZGQocm93RGVmKTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGEgcm93IGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIHJlbW92ZVJvd0RlZihyb3dEZWY6IENka1Jvd0RlZjxUPikge1xuICAgIHRoaXMuX2N1c3RvbVJvd0RlZnMuZGVsZXRlKHJvd0RlZik7XG4gIH1cblxuICAvKiogQWRkcyBhIGhlYWRlciByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgYWRkSGVhZGVyUm93RGVmKGhlYWRlclJvd0RlZjogQ2RrSGVhZGVyUm93RGVmKSB7XG4gICAgdGhpcy5fY3VzdG9tSGVhZGVyUm93RGVmcy5hZGQoaGVhZGVyUm93RGVmKTtcbiAgICB0aGlzLl9oZWFkZXJSb3dEZWZDaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBSZW1vdmVzIGEgaGVhZGVyIHJvdyBkZWZpbml0aW9uIHRoYXQgd2FzIG5vdCBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICByZW1vdmVIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmOiBDZGtIZWFkZXJSb3dEZWYpIHtcbiAgICB0aGlzLl9jdXN0b21IZWFkZXJSb3dEZWZzLmRlbGV0ZShoZWFkZXJSb3dEZWYpO1xuICAgIHRoaXMuX2hlYWRlclJvd0RlZkNoYW5nZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqIEFkZHMgYSBmb290ZXIgcm93IGRlZmluaXRpb24gdGhhdCB3YXMgbm90IGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGNvbnRlbnQgY2hpbGRyZW4uICovXG4gIGFkZEZvb3RlclJvd0RlZihmb290ZXJSb3dEZWY6IENka0Zvb3RlclJvd0RlZikge1xuICAgIHRoaXMuX2N1c3RvbUZvb3RlclJvd0RlZnMuYWRkKGZvb3RlclJvd0RlZik7XG4gICAgdGhpcy5fZm9vdGVyUm93RGVmQ2hhbmdlZCA9IHRydWU7XG4gIH1cblxuICAvKiogUmVtb3ZlcyBhIGZvb3RlciByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgY29udGVudCBjaGlsZHJlbi4gKi9cbiAgcmVtb3ZlRm9vdGVyUm93RGVmKGZvb3RlclJvd0RlZjogQ2RrRm9vdGVyUm93RGVmKSB7XG4gICAgdGhpcy5fY3VzdG9tRm9vdGVyUm93RGVmcy5kZWxldGUoZm9vdGVyUm93RGVmKTtcbiAgICB0aGlzLl9mb290ZXJSb3dEZWZDaGFuZ2VkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIGEgbm8gZGF0YSByb3cgZGVmaW5pdGlvbiB0aGF0IHdhcyBub3QgaW5jbHVkZWQgYXMgYSBwYXJ0IG9mIHRoZSBjb250ZW50IGNoaWxkcmVuLiAqL1xuICBzZXROb0RhdGFSb3cobm9EYXRhUm93OiBDZGtOb0RhdGFSb3cgfCBudWxsKSB7XG4gICAgdGhpcy5fY3VzdG9tTm9EYXRhUm93ID0gbm9EYXRhUm93O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGhlYWRlciBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICogc3RpY2tpbmcgdG8gdGhlIHRvcC4gVGhlbiwgZXZhbHVhdGluZyB3aGljaCBjZWxscyBuZWVkIHRvIGJlIHN0dWNrIHRvIHRoZSB0b3AuIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgd2hlbiB0aGUgaGVhZGVyIHJvdyBjaGFuZ2VzIGl0cyBkaXNwbGF5ZWQgc2V0IG9mIGNvbHVtbnMsIG9yIGlmIGl0c1xuICAgKiBzdGlja3kgaW5wdXQgY2hhbmdlcy4gTWF5IGJlIGNhbGxlZCBtYW51YWxseSBmb3IgY2FzZXMgd2hlcmUgdGhlIGNlbGwgY29udGVudCBjaGFuZ2VzIG91dHNpZGVcbiAgICogb2YgdGhlc2UgZXZlbnRzLlxuICAgKi9cbiAgdXBkYXRlU3RpY2t5SGVhZGVyUm93U3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IGhlYWRlclJvd3MgPSB0aGlzLl9nZXRSZW5kZXJlZFJvd3ModGhpcy5faGVhZGVyUm93T3V0bGV0KTtcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBIaWRlIHRoZSB0aGVhZCBlbGVtZW50IGlmIHRoZXJlIGFyZSBubyBoZWFkZXIgcm93cy4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gc2F0aXNmeVxuICAgIC8vIG92ZXJ6ZWFsb3VzIGExMXkgY2hlY2tlcnMgdGhhdCBmYWlsIGJlY2F1c2UgdGhlIGByb3dncm91cGAgZWxlbWVudCBkb2VzIG5vdCBjb250YWluXG4gICAgLy8gcmVxdWlyZWQgY2hpbGQgYHJvd2AuXG4gICAgY29uc3QgdGhlYWQgPSB0YWJsZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGhlYWQnKTtcbiAgICBpZiAodGhlYWQpIHtcbiAgICAgIHRoZWFkLnN0eWxlLmRpc3BsYXkgPSBoZWFkZXJSb3dzLmxlbmd0aCA/ICcnIDogJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IHN0aWNreVN0YXRlcyA9IHRoaXMuX2hlYWRlclJvd0RlZnMubWFwKGRlZiA9PiBkZWYuc3RpY2t5KTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuY2xlYXJTdGlja3lQb3NpdGlvbmluZyhoZWFkZXJSb3dzLCBbJ3RvcCddKTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuc3RpY2tSb3dzKGhlYWRlclJvd3MsIHN0aWNreVN0YXRlcywgJ3RvcCcpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGRpcnR5IHN0YXRlIG9mIHRoZSBzdGlja3kgaW5wdXQgY2hhbmdlIHNpbmNlIGl0IGhhcyBiZWVuIHVzZWQuXG4gICAgdGhpcy5faGVhZGVyUm93RGVmcy5mb3JFYWNoKGRlZiA9PiBkZWYucmVzZXRTdGlja3lDaGFuZ2VkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGZvb3RlciBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICogc3RpY2tpbmcgdG8gdGhlIGJvdHRvbS4gVGhlbiwgZXZhbHVhdGluZyB3aGljaCBjZWxscyBuZWVkIHRvIGJlIHN0dWNrIHRvIHRoZSBib3R0b20uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgd2hlbiB0aGUgZm9vdGVyIHJvdyBjaGFuZ2VzIGl0cyBkaXNwbGF5ZWQgc2V0IG9mIGNvbHVtbnMsIG9yIGlmIGl0c1xuICAgKiBzdGlja3kgaW5wdXQgY2hhbmdlcy4gTWF5IGJlIGNhbGxlZCBtYW51YWxseSBmb3IgY2FzZXMgd2hlcmUgdGhlIGNlbGwgY29udGVudCBjaGFuZ2VzIG91dHNpZGVcbiAgICogb2YgdGhlc2UgZXZlbnRzLlxuICAgKi9cbiAgdXBkYXRlU3RpY2t5Rm9vdGVyUm93U3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IGZvb3RlclJvd3MgPSB0aGlzLl9nZXRSZW5kZXJlZFJvd3ModGhpcy5fZm9vdGVyUm93T3V0bGV0KTtcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAvLyBIaWRlIHRoZSB0Zm9vdCBlbGVtZW50IGlmIHRoZXJlIGFyZSBubyBmb290ZXIgcm93cy4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gc2F0aXNmeVxuICAgIC8vIG92ZXJ6ZWFsb3VzIGExMXkgY2hlY2tlcnMgdGhhdCBmYWlsIGJlY2F1c2UgdGhlIGByb3dncm91cGAgZWxlbWVudCBkb2VzIG5vdCBjb250YWluXG4gICAgLy8gcmVxdWlyZWQgY2hpbGQgYHJvd2AuXG4gICAgY29uc3QgdGZvb3QgPSB0YWJsZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGZvb3QnKTtcbiAgICBpZiAodGZvb3QpIHtcbiAgICAgIHRmb290LnN0eWxlLmRpc3BsYXkgPSBmb290ZXJSb3dzLmxlbmd0aCA/ICcnIDogJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IHN0aWNreVN0YXRlcyA9IHRoaXMuX2Zvb3RlclJvd0RlZnMubWFwKGRlZiA9PiBkZWYuc3RpY2t5KTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuY2xlYXJTdGlja3lQb3NpdGlvbmluZyhmb290ZXJSb3dzLCBbJ2JvdHRvbSddKTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIuc3RpY2tSb3dzKGZvb3RlclJvd3MsIHN0aWNreVN0YXRlcywgJ2JvdHRvbScpO1xuICAgIHRoaXMuX3N0aWNreVN0eWxlci51cGRhdGVTdGlja3lGb290ZXJDb250YWluZXIodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGlja3lTdGF0ZXMpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGRpcnR5IHN0YXRlIG9mIHRoZSBzdGlja3kgaW5wdXQgY2hhbmdlIHNpbmNlIGl0IGhhcyBiZWVuIHVzZWQuXG4gICAgdGhpcy5fZm9vdGVyUm93RGVmcy5mb3JFYWNoKGRlZiA9PiBkZWYucmVzZXRTdGlja3lDaGFuZ2VkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGNvbHVtbiBzdGlja3kgc3R5bGVzLiBGaXJzdCByZXNldHMgYWxsIGFwcGxpZWQgc3R5bGVzIHdpdGggcmVzcGVjdCB0byB0aGUgY2VsbHNcbiAgICogc3RpY2tpbmcgdG8gdGhlIGxlZnQgYW5kIHJpZ2h0LiBUaGVuIHN0aWNreSBzdHlsZXMgYXJlIGFkZGVkIGZvciB0aGUgbGVmdCBhbmQgcmlnaHQgYWNjb3JkaW5nXG4gICAqIHRvIHRoZSBjb2x1bW4gZGVmaW5pdGlvbnMgZm9yIGVhY2ggY2VsbCBpbiBlYWNoIHJvdy4gVGhpcyBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuXG4gICAqIHRoZSBkYXRhIHNvdXJjZSBwcm92aWRlcyBhIG5ldyBzZXQgb2YgZGF0YSBvciB3aGVuIGEgY29sdW1uIGRlZmluaXRpb24gY2hhbmdlcyBpdHMgc3RpY2t5XG4gICAqIGlucHV0LiBNYXkgYmUgY2FsbGVkIG1hbnVhbGx5IGZvciBjYXNlcyB3aGVyZSB0aGUgY2VsbCBjb250ZW50IGNoYW5nZXMgb3V0c2lkZSBvZiB0aGVzZSBldmVudHMuXG4gICAqL1xuICB1cGRhdGVTdGlja3lDb2x1bW5TdHlsZXMoKSB7XG4gICAgY29uc3QgaGVhZGVyUm93cyA9IHRoaXMuX2dldFJlbmRlcmVkUm93cyh0aGlzLl9oZWFkZXJSb3dPdXRsZXQpO1xuICAgIGNvbnN0IGRhdGFSb3dzID0gdGhpcy5fZ2V0UmVuZGVyZWRSb3dzKHRoaXMuX3Jvd091dGxldCk7XG4gICAgY29uc3QgZm9vdGVyUm93cyA9IHRoaXMuX2dldFJlbmRlcmVkUm93cyh0aGlzLl9mb290ZXJSb3dPdXRsZXQpO1xuXG4gICAgLy8gRm9yIHRhYmxlcyBub3QgdXNpbmcgYSBmaXhlZCBsYXlvdXQsIHRoZSBjb2x1bW4gd2lkdGhzIG1heSBjaGFuZ2Ugd2hlbiBuZXcgcm93cyBhcmUgcmVuZGVyZWQuXG4gICAgLy8gSW4gYSB0YWJsZSB1c2luZyBhIGZpeGVkIGxheW91dCwgcm93IGNvbnRlbnQgd29uJ3QgYWZmZWN0IGNvbHVtbiB3aWR0aCwgc28gc3RpY2t5IHN0eWxlc1xuICAgIC8vIGRvbid0IG5lZWQgdG8gYmUgY2xlYXJlZCB1bmxlc3MgZWl0aGVyIHRoZSBzdGlja3kgY29sdW1uIGNvbmZpZyBjaGFuZ2VzIG9yIG9uZSBvZiB0aGUgcm93XG4gICAgLy8gZGVmcyBjaGFuZ2UuXG4gICAgaWYgKCh0aGlzLl9pc05hdGl2ZUh0bWxUYWJsZSAmJiAhdGhpcy5fZml4ZWRMYXlvdXQpXG4gICAgICAgIHx8IHRoaXMuX3N0aWNreUNvbHVtblN0eWxlc05lZWRSZXNldCkge1xuICAgICAgLy8gQ2xlYXIgdGhlIGxlZnQgYW5kIHJpZ2h0IHBvc2l0aW9uaW5nIGZyb20gYWxsIGNvbHVtbnMgaW4gdGhlIHRhYmxlIGFjcm9zcyBhbGwgcm93cyBzaW5jZVxuICAgICAgLy8gc3RpY2t5IGNvbHVtbnMgc3BhbiBhY3Jvc3MgYWxsIHRhYmxlIHNlY3Rpb25zIChoZWFkZXIsIGRhdGEsIGZvb3RlcilcbiAgICAgIHRoaXMuX3N0aWNreVN0eWxlci5jbGVhclN0aWNreVBvc2l0aW9uaW5nKFxuICAgICAgICAgIFsuLi5oZWFkZXJSb3dzLCAuLi5kYXRhUm93cywgLi4uZm9vdGVyUm93c10sIFsnbGVmdCcsICdyaWdodCddKTtcbiAgICAgIHRoaXMuX3N0aWNreUNvbHVtblN0eWxlc05lZWRSZXNldCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgc3RpY2t5IHN0eWxlcyBmb3IgZWFjaCBoZWFkZXIgcm93IGRlcGVuZGluZyBvbiB0aGUgZGVmJ3Mgc3RpY2t5IHN0YXRlXG4gICAgaGVhZGVyUm93cy5mb3JFYWNoKChoZWFkZXJSb3csIGkpID0+IHtcbiAgICAgIHRoaXMuX2FkZFN0aWNreUNvbHVtblN0eWxlcyhbaGVhZGVyUm93XSwgdGhpcy5faGVhZGVyUm93RGVmc1tpXSk7XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0aWNreSBzdHlsZXMgZm9yIGVhY2ggZGF0YSByb3cgZGVwZW5kaW5nIG9uIGl0cyBkZWYncyBzdGlja3kgc3RhdGVcbiAgICB0aGlzLl9yb3dEZWZzLmZvckVhY2gocm93RGVmID0+IHtcbiAgICAgIC8vIENvbGxlY3QgYWxsIHRoZSByb3dzIHJlbmRlcmVkIHdpdGggdGhpcyByb3cgZGVmaW5pdGlvbi5cbiAgICAgIGNvbnN0IHJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlclJvd3NbaV0ucm93RGVmID09PSByb3dEZWYpIHtcbiAgICAgICAgICByb3dzLnB1c2goZGF0YVJvd3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FkZFN0aWNreUNvbHVtblN0eWxlcyhyb3dzLCByb3dEZWYpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzdGlja3kgc3R5bGVzIGZvciBlYWNoIGZvb3RlciByb3cgZGVwZW5kaW5nIG9uIHRoZSBkZWYncyBzdGlja3kgc3RhdGVcbiAgICBmb290ZXJSb3dzLmZvckVhY2goKGZvb3RlclJvdywgaSkgPT4ge1xuICAgICAgdGhpcy5fYWRkU3RpY2t5Q29sdW1uU3R5bGVzKFtmb290ZXJSb3ddLCB0aGlzLl9mb290ZXJSb3dEZWZzW2ldKTtcbiAgICB9KTtcblxuICAgIC8vIFJlc2V0IHRoZSBkaXJ0eSBzdGF0ZSBvZiB0aGUgc3RpY2t5IGlucHV0IGNoYW5nZSBzaW5jZSBpdCBoYXMgYmVlbiB1c2VkLlxuICAgIEFycmF5LmZyb20odGhpcy5fY29sdW1uRGVmc0J5TmFtZS52YWx1ZXMoKSkuZm9yRWFjaChkZWYgPT4gZGVmLnJlc2V0U3RpY2t5Q2hhbmdlZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2YgUmVuZGVyUm93IG9iamVjdHMgdG8gcmVuZGVyIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBsaXN0IG9mIGRhdGEgYW5kIGRlZmluZWRcbiAgICogcm93IGRlZmluaXRpb25zLiBJZiB0aGUgcHJldmlvdXMgbGlzdCBhbHJlYWR5IGNvbnRhaW5lZCBhIHBhcnRpY3VsYXIgcGFpciwgaXQgc2hvdWxkIGJlIHJldXNlZFxuICAgKiBzbyB0aGF0IHRoZSBkaWZmZXIgZXF1YXRlcyB0aGVpciByZWZlcmVuY2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0QWxsUmVuZGVyUm93cygpOiBSZW5kZXJSb3c8VD5bXSB7XG4gICAgY29uc3QgcmVuZGVyUm93czogUmVuZGVyUm93PFQ+W10gPSBbXTtcblxuICAgIC8vIFN0b3JlIHRoZSBjYWNoZSBhbmQgY3JlYXRlIGEgbmV3IG9uZS4gQW55IHJlLXVzZWQgUmVuZGVyUm93IG9iamVjdHMgd2lsbCBiZSBtb3ZlZCBpbnRvIHRoZVxuICAgIC8vIG5ldyBjYWNoZSB3aGlsZSB1bnVzZWQgb25lcyBjYW4gYmUgcGlja2VkIHVwIGJ5IGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICBjb25zdCBwcmV2Q2FjaGVkUmVuZGVyUm93cyA9IHRoaXMuX2NhY2hlZFJlbmRlclJvd3NNYXA7XG4gICAgdGhpcy5fY2FjaGVkUmVuZGVyUm93c01hcCA9IG5ldyBNYXAoKTtcblxuICAgIC8vIEZvciBlYWNoIGRhdGEgb2JqZWN0LCBnZXQgdGhlIGxpc3Qgb2Ygcm93cyB0aGF0IHNob3VsZCBiZSByZW5kZXJlZCwgcmVwcmVzZW50ZWQgYnkgdGhlXG4gICAgLy8gcmVzcGVjdGl2ZSBgUmVuZGVyUm93YCBvYmplY3Qgd2hpY2ggaXMgdGhlIHBhaXIgb2YgYGRhdGFgIGFuZCBgQ2RrUm93RGVmYC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5fZGF0YVtpXTtcbiAgICAgIGNvbnN0IHJlbmRlclJvd3NGb3JEYXRhID0gdGhpcy5fZ2V0UmVuZGVyUm93c0ZvckRhdGEoZGF0YSwgaSwgcHJldkNhY2hlZFJlbmRlclJvd3MuZ2V0KGRhdGEpKTtcblxuICAgICAgaWYgKCF0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLmhhcyhkYXRhKSkge1xuICAgICAgICB0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLnNldChkYXRhLCBuZXcgV2Vha01hcCgpKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZW5kZXJSb3dzRm9yRGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgcmVuZGVyUm93ID0gcmVuZGVyUm93c0ZvckRhdGFbal07XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLl9jYWNoZWRSZW5kZXJSb3dzTWFwLmdldChyZW5kZXJSb3cuZGF0YSkhO1xuICAgICAgICBpZiAoY2FjaGUuaGFzKHJlbmRlclJvdy5yb3dEZWYpKSB7XG4gICAgICAgICAgY2FjaGUuZ2V0KHJlbmRlclJvdy5yb3dEZWYpIS5wdXNoKHJlbmRlclJvdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FjaGUuc2V0KHJlbmRlclJvdy5yb3dEZWYsIFtyZW5kZXJSb3ddKTtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJSb3dzLnB1c2gocmVuZGVyUm93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyUm93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgbGlzdCBvZiBgUmVuZGVyUm93PFQ+YCBmb3IgdGhlIHByb3ZpZGVkIGRhdGEgb2JqZWN0IGFuZCBhbnkgYENka1Jvd0RlZmAgb2JqZWN0cyB0aGF0XG4gICAqIHNob3VsZCBiZSByZW5kZXJlZCBmb3IgdGhpcyBkYXRhLiBSZXVzZXMgdGhlIGNhY2hlZCBSZW5kZXJSb3cgb2JqZWN0cyBpZiB0aGV5IG1hdGNoIHRoZSBzYW1lXG4gICAqIGAoVCwgQ2RrUm93RGVmKWAgcGFpci5cbiAgICovXG4gIHByaXZhdGUgX2dldFJlbmRlclJvd3NGb3JEYXRhKFxuICAgICAgZGF0YTogVCwgZGF0YUluZGV4OiBudW1iZXIsIGNhY2hlPzogV2Vha01hcDxDZGtSb3dEZWY8VD4sIFJlbmRlclJvdzxUPltdPik6IFJlbmRlclJvdzxUPltdIHtcbiAgICBjb25zdCByb3dEZWZzID0gdGhpcy5fZ2V0Um93RGVmcyhkYXRhLCBkYXRhSW5kZXgpO1xuXG4gICAgcmV0dXJuIHJvd0RlZnMubWFwKHJvd0RlZiA9PiB7XG4gICAgICBjb25zdCBjYWNoZWRSZW5kZXJSb3dzID0gKGNhY2hlICYmIGNhY2hlLmhhcyhyb3dEZWYpKSA/IGNhY2hlLmdldChyb3dEZWYpISA6IFtdO1xuICAgICAgaWYgKGNhY2hlZFJlbmRlclJvd3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFSb3cgPSBjYWNoZWRSZW5kZXJSb3dzLnNoaWZ0KCkhO1xuICAgICAgICBkYXRhUm93LmRhdGFJbmRleCA9IGRhdGFJbmRleDtcbiAgICAgICAgcmV0dXJuIGRhdGFSb3c7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge2RhdGEsIHJvd0RlZiwgZGF0YUluZGV4fTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIG1hcCBjb250YWluaW5nIHRoZSBjb250ZW50J3MgY29sdW1uIGRlZmluaXRpb25zLiAqL1xuICBwcml2YXRlIF9jYWNoZUNvbHVtbkRlZnMoKSB7XG4gICAgdGhpcy5fY29sdW1uRGVmc0J5TmFtZS5jbGVhcigpO1xuXG4gICAgY29uc3QgY29sdW1uRGVmcyA9IG1lcmdlQXJyYXlBbmRTZXQoXG4gICAgICAgIHRoaXMuX2dldE93bkRlZnModGhpcy5fY29udGVudENvbHVtbkRlZnMpLCB0aGlzLl9jdXN0b21Db2x1bW5EZWZzKTtcbiAgICBjb2x1bW5EZWZzLmZvckVhY2goY29sdW1uRGVmID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5EZWZzQnlOYW1lLmhhcyhjb2x1bW5EZWYubmFtZSkgJiZcbiAgICAgICAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgICAgdGhyb3cgZ2V0VGFibGVEdXBsaWNhdGVDb2x1bW5OYW1lRXJyb3IoY29sdW1uRGVmLm5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29sdW1uRGVmc0J5TmFtZS5zZXQoY29sdW1uRGVmLm5hbWUsIGNvbHVtbkRlZik7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVXBkYXRlIHRoZSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgcm93IGRlZmluaXRpb25zIHRoYXQgY2FuIGJlIHVzZWQuICovXG4gIHByaXZhdGUgX2NhY2hlUm93RGVmcygpIHtcbiAgICB0aGlzLl9oZWFkZXJSb3dEZWZzID0gbWVyZ2VBcnJheUFuZFNldChcbiAgICAgICAgdGhpcy5fZ2V0T3duRGVmcyh0aGlzLl9jb250ZW50SGVhZGVyUm93RGVmcyksIHRoaXMuX2N1c3RvbUhlYWRlclJvd0RlZnMpO1xuICAgIHRoaXMuX2Zvb3RlclJvd0RlZnMgPSBtZXJnZUFycmF5QW5kU2V0KFxuICAgICAgICB0aGlzLl9nZXRPd25EZWZzKHRoaXMuX2NvbnRlbnRGb290ZXJSb3dEZWZzKSwgdGhpcy5fY3VzdG9tRm9vdGVyUm93RGVmcyk7XG4gICAgdGhpcy5fcm93RGVmcyA9IG1lcmdlQXJyYXlBbmRTZXQoXG4gICAgICAgIHRoaXMuX2dldE93bkRlZnModGhpcy5fY29udGVudFJvd0RlZnMpLCB0aGlzLl9jdXN0b21Sb3dEZWZzKTtcblxuICAgIC8vIEFmdGVyIGFsbCByb3cgZGVmaW5pdGlvbnMgYXJlIGRldGVybWluZWQsIGZpbmQgdGhlIHJvdyBkZWZpbml0aW9uIHRvIGJlIGNvbnNpZGVyZWQgZGVmYXVsdC5cbiAgICBjb25zdCBkZWZhdWx0Um93RGVmcyA9IHRoaXMuX3Jvd0RlZnMuZmlsdGVyKGRlZiA9PiAhZGVmLndoZW4pO1xuICAgIGlmICghdGhpcy5tdWx0aVRlbXBsYXRlRGF0YVJvd3MgJiYgZGVmYXVsdFJvd0RlZnMubGVuZ3RoID4gMSAmJlxuICAgICAgICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xuICAgICAgdGhyb3cgZ2V0VGFibGVNdWx0aXBsZURlZmF1bHRSb3dEZWZzRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy5fZGVmYXVsdFJvd0RlZiA9IGRlZmF1bHRSb3dEZWZzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBoZWFkZXIsIGRhdGEsIG9yIGZvb3RlciByb3dzIGhhdmUgY2hhbmdlZCB3aGF0IGNvbHVtbnMgdGhleSB3YW50IHRvIGRpc3BsYXkgb3JcbiAgICogd2hldGhlciB0aGUgc3RpY2t5IHN0YXRlcyBoYXZlIGNoYW5nZWQgZm9yIHRoZSBoZWFkZXIgb3IgZm9vdGVyLiBJZiB0aGVyZSBpcyBhIGRpZmYsIHRoZW5cbiAgICogcmUtcmVuZGVyIHRoYXQgc2VjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX3JlbmRlclVwZGF0ZWRDb2x1bW5zKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbHVtbnNEaWZmUmVkdWNlciA9IChhY2M6IGJvb2xlYW4sIGRlZjogQmFzZVJvd0RlZikgPT4gYWNjIHx8ICEhZGVmLmdldENvbHVtbnNEaWZmKCk7XG5cbiAgICAvLyBGb3JjZSByZS1yZW5kZXIgZGF0YSByb3dzIGlmIHRoZSBsaXN0IG9mIGNvbHVtbiBkZWZpbml0aW9ucyBoYXZlIGNoYW5nZWQuXG4gICAgY29uc3QgZGF0YUNvbHVtbnNDaGFuZ2VkID0gdGhpcy5fcm93RGVmcy5yZWR1Y2UoY29sdW1uc0RpZmZSZWR1Y2VyLCBmYWxzZSk7XG4gICAgaWYgKGRhdGFDb2x1bW5zQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fZm9yY2VSZW5kZXJEYXRhUm93cygpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlLXJlbmRlciBoZWFkZXIvZm9vdGVyIHJvd3MgaWYgdGhlIGxpc3Qgb2YgY29sdW1uIGRlZmluaXRpb25zIGhhdmUgY2hhbmdlZC5cbiAgICBjb25zdCBoZWFkZXJDb2x1bW5zQ2hhbmdlZCA9IHRoaXMuX2hlYWRlclJvd0RlZnMucmVkdWNlKGNvbHVtbnNEaWZmUmVkdWNlciwgZmFsc2UpO1xuICAgIGlmIChoZWFkZXJDb2x1bW5zQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fZm9yY2VSZW5kZXJIZWFkZXJSb3dzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9vdGVyQ29sdW1uc0NoYW5nZWQgPSB0aGlzLl9mb290ZXJSb3dEZWZzLnJlZHVjZShjb2x1bW5zRGlmZlJlZHVjZXIsIGZhbHNlKTtcbiAgICBpZiAoZm9vdGVyQ29sdW1uc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuX2ZvcmNlUmVuZGVyRm9vdGVyUm93cygpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhQ29sdW1uc0NoYW5nZWQgfHwgaGVhZGVyQ29sdW1uc0NoYW5nZWQgfHwgZm9vdGVyQ29sdW1uc0NoYW5nZWQ7XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoIHRvIHRoZSBwcm92aWRlZCBkYXRhIHNvdXJjZSBieSByZXNldHRpbmcgdGhlIGRhdGEgYW5kIHVuc3Vic2NyaWJpbmcgZnJvbSB0aGUgY3VycmVudFxuICAgKiByZW5kZXIgY2hhbmdlIHN1YnNjcmlwdGlvbiBpZiBvbmUgZXhpc3RzLiBJZiB0aGUgZGF0YSBzb3VyY2UgaXMgbnVsbCwgaW50ZXJwcmV0IHRoaXMgYnlcbiAgICogY2xlYXJpbmcgdGhlIHJvdyBvdXRsZXQuIE90aGVyd2lzZSBzdGFydCBsaXN0ZW5pbmcgZm9yIG5ldyBkYXRhLlxuICAgKi9cbiAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlOiBDZGtUYWJsZURhdGFTb3VyY2VJbnB1dDxUPikge1xuICAgIHRoaXMuX2RhdGEgPSBbXTtcblxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBsaXN0ZW5pbmcgZm9yIGRhdGEgZnJvbSB0aGUgcHJldmlvdXMgZGF0YSBzb3VyY2UuXG4gICAgaWYgKHRoaXMuX3JlbmRlckNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLl9yZW5kZXJDaGFuZ2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghZGF0YVNvdXJjZSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFEaWZmZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YURpZmZlci5kaWZmKFtdKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jvd091dGxldC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gIH1cblxuICAvKiogU2V0IHVwIGEgc3Vic2NyaXB0aW9uIGZvciB0aGUgZGF0YSBwcm92aWRlZCBieSB0aGUgZGF0YSBzb3VyY2UuICovXG4gIHByaXZhdGUgX29ic2VydmVSZW5kZXJDaGFuZ2VzKCkge1xuICAgIC8vIElmIG5vIGRhdGEgc291cmNlIGhhcyBiZWVuIHNldCwgdGhlcmUgaXMgbm90aGluZyB0byBvYnNlcnZlIGZvciBjaGFuZ2VzLlxuICAgIGlmICghdGhpcy5kYXRhU291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8VFtdfFJlYWRvbmx5QXJyYXk8VD4+fHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuZGF0YVNvdXJjZS5jb25uZWN0KHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlKHRoaXMuZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLmRhdGFTb3VyY2U7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSBvYnNlcnZhYmxlT2YodGhpcy5kYXRhU291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVN0cmVhbSA9PT0gdW5kZWZpbmVkICYmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZVVua25vd25EYXRhU291cmNlRXJyb3IoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJDaGFuZ2VTdWJzY3JpcHRpb24gPSBkYXRhU3RyZWFtIS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGEgfHwgW107XG4gICAgICAgIHRoaXMucmVuZGVyUm93cygpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFueSBleGlzdGluZyBjb250ZW50IGluIHRoZSBoZWFkZXIgcm93IG91dGxldCBhbmQgY3JlYXRlcyBhIG5ldyBlbWJlZGRlZCB2aWV3XG4gICAqIGluIHRoZSBvdXRsZXQgdXNpbmcgdGhlIGhlYWRlciByb3cgZGVmaW5pdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2ZvcmNlUmVuZGVySGVhZGVyUm93cygpIHtcbiAgICAvLyBDbGVhciB0aGUgaGVhZGVyIHJvdyBvdXRsZXQgaWYgYW55IGNvbnRlbnQgZXhpc3RzLlxuICAgIGlmICh0aGlzLl9oZWFkZXJSb3dPdXRsZXQudmlld0NvbnRhaW5lci5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9oZWFkZXJSb3dPdXRsZXQudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIH1cblxuICAgIHRoaXMuX2hlYWRlclJvd0RlZnMuZm9yRWFjaCgoZGVmLCBpKSA9PiB0aGlzLl9yZW5kZXJSb3codGhpcy5faGVhZGVyUm93T3V0bGV0LCBkZWYsIGkpKTtcbiAgICB0aGlzLnVwZGF0ZVN0aWNreUhlYWRlclJvd1N0eWxlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbnkgZXhpc3RpbmcgY29udGVudCBpbiB0aGUgZm9vdGVyIHJvdyBvdXRsZXQgYW5kIGNyZWF0ZXMgYSBuZXcgZW1iZWRkZWQgdmlld1xuICAgKiBpbiB0aGUgb3V0bGV0IHVzaW5nIHRoZSBmb290ZXIgcm93IGRlZmluaXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9mb3JjZVJlbmRlckZvb3RlclJvd3MoKSB7XG4gICAgLy8gQ2xlYXIgdGhlIGZvb3RlciByb3cgb3V0bGV0IGlmIGFueSBjb250ZW50IGV4aXN0cy5cbiAgICBpZiAodGhpcy5fZm9vdGVyUm93T3V0bGV0LnZpZXdDb250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fZm9vdGVyUm93T3V0bGV0LnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb290ZXJSb3dEZWZzLmZvckVhY2goKGRlZiwgaSkgPT4gdGhpcy5fcmVuZGVyUm93KHRoaXMuX2Zvb3RlclJvd091dGxldCwgZGVmLCBpKSk7XG4gICAgdGhpcy51cGRhdGVTdGlja3lGb290ZXJSb3dTdHlsZXMoKTtcbiAgfVxuXG4gIC8qKiBBZGRzIHRoZSBzdGlja3kgY29sdW1uIHN0eWxlcyBmb3IgdGhlIHJvd3MgYWNjb3JkaW5nIHRvIHRoZSBjb2x1bW5zJyBzdGljayBzdGF0ZXMuICovXG4gIHByaXZhdGUgX2FkZFN0aWNreUNvbHVtblN0eWxlcyhyb3dzOiBIVE1MRWxlbWVudFtdLCByb3dEZWY6IEJhc2VSb3dEZWYpIHtcbiAgICBjb25zdCBjb2x1bW5EZWZzID0gQXJyYXkuZnJvbShyb3dEZWYuY29sdW1ucyB8fCBbXSkubWFwKGNvbHVtbk5hbWUgPT4ge1xuICAgICAgY29uc3QgY29sdW1uRGVmID0gdGhpcy5fY29sdW1uRGVmc0J5TmFtZS5nZXQoY29sdW1uTmFtZSk7XG4gICAgICBpZiAoIWNvbHVtbkRlZiAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xuICAgICAgICB0aHJvdyBnZXRUYWJsZVVua25vd25Db2x1bW5FcnJvcihjb2x1bW5OYW1lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb2x1bW5EZWYhO1xuICAgIH0pO1xuICAgIGNvbnN0IHN0aWNreVN0YXJ0U3RhdGVzID0gY29sdW1uRGVmcy5tYXAoY29sdW1uRGVmID0+IGNvbHVtbkRlZi5zdGlja3kpO1xuICAgIGNvbnN0IHN0aWNreUVuZFN0YXRlcyA9IGNvbHVtbkRlZnMubWFwKGNvbHVtbkRlZiA9PiBjb2x1bW5EZWYuc3RpY2t5RW5kKTtcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIudXBkYXRlU3RpY2t5Q29sdW1ucyhcbiAgICAgICAgcm93cywgc3RpY2t5U3RhcnRTdGF0ZXMsIHN0aWNreUVuZFN0YXRlcyxcbiAgICAgICAgIXRoaXMuX2ZpeGVkTGF5b3V0IHx8IHRoaXMuX2ZvcmNlUmVjYWxjdWxhdGVDZWxsV2lkdGhzKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBsaXN0IG9mIHJvd3MgdGhhdCBoYXZlIGJlZW4gcmVuZGVyZWQgaW4gdGhlIHJvdyBvdXRsZXQuICovXG4gIF9nZXRSZW5kZXJlZFJvd3Mocm93T3V0bGV0OiBSb3dPdXRsZXQpOiBIVE1MRWxlbWVudFtdIHtcbiAgICBjb25zdCByZW5kZXJlZFJvd3M6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93T3V0bGV0LnZpZXdDb250YWluZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSAocm93T3V0bGV0LnZpZXdDb250YWluZXIuZ2V0KGkpISBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pik7XG4gICAgICByZW5kZXJlZFJvd3MucHVzaCh2aWV3UmVmLnJvb3ROb2Rlc1swXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcmVkUm93cztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1hdGNoaW5nIHJvdyBkZWZpbml0aW9ucyB0aGF0IHNob3VsZCBiZSB1c2VkIGZvciB0aGlzIHJvdyBkYXRhLiBJZiB0aGVyZSBpcyBvbmx5XG4gICAqIG9uZSByb3cgZGVmaW5pdGlvbiwgaXQgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgZmluZCB0aGUgcm93IGRlZmluaXRpb25zIHRoYXQgaGFzIGEgd2hlblxuICAgKiBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRydWUgd2l0aCB0aGUgZGF0YS4gSWYgbm9uZSByZXR1cm4gdHJ1ZSwgcmV0dXJuIHRoZSBkZWZhdWx0IHJvd1xuICAgKiBkZWZpbml0aW9uLlxuICAgKi9cbiAgX2dldFJvd0RlZnMoZGF0YTogVCwgZGF0YUluZGV4OiBudW1iZXIpOiBDZGtSb3dEZWY8VD5bXSB7XG4gICAgaWYgKHRoaXMuX3Jvd0RlZnMubGVuZ3RoID09IDEpIHtcbiAgICAgIHJldHVybiBbdGhpcy5fcm93RGVmc1swXV07XG4gICAgfVxuXG4gICAgbGV0IHJvd0RlZnM6IENka1Jvd0RlZjxUPltdID0gW107XG4gICAgaWYgKHRoaXMubXVsdGlUZW1wbGF0ZURhdGFSb3dzKSB7XG4gICAgICByb3dEZWZzID0gdGhpcy5fcm93RGVmcy5maWx0ZXIoZGVmID0+ICFkZWYud2hlbiB8fCBkZWYud2hlbihkYXRhSW5kZXgsIGRhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJvd0RlZiA9XG4gICAgICAgICAgdGhpcy5fcm93RGVmcy5maW5kKGRlZiA9PiBkZWYud2hlbiAmJiBkZWYud2hlbihkYXRhSW5kZXgsIGRhdGEpKSB8fCB0aGlzLl9kZWZhdWx0Um93RGVmO1xuICAgICAgaWYgKHJvd0RlZikge1xuICAgICAgICByb3dEZWZzLnB1c2gocm93RGVmKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJvd0RlZnMubGVuZ3RoICYmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpKSB7XG4gICAgICB0aHJvdyBnZXRUYWJsZU1pc3NpbmdNYXRjaGluZ1Jvd0RlZkVycm9yKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiByb3dEZWZzO1xuICB9XG5cblxuICBwcml2YXRlIF9nZXRFbWJlZGRlZFZpZXdBcmdzKHJlbmRlclJvdzogUmVuZGVyUm93PFQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXIpOiBfVmlld1JlcGVhdGVySXRlbUluc2VydEFyZ3M8Um93Q29udGV4dDxUPj4ge1xuICAgIGNvbnN0IHJvd0RlZiA9IHJlbmRlclJvdy5yb3dEZWY7XG4gICAgY29uc3QgY29udGV4dDogUm93Q29udGV4dDxUPiA9IHskaW1wbGljaXQ6IHJlbmRlclJvdy5kYXRhfTtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcGxhdGVSZWY6IHJvd0RlZi50ZW1wbGF0ZSxcbiAgICAgIGNvbnRleHQsXG4gICAgICBpbmRleCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgcm93IHRlbXBsYXRlIGluIHRoZSBvdXRsZXQgYW5kIGZpbGxzIGl0IHdpdGggdGhlIHNldCBvZiBjZWxsIHRlbXBsYXRlcy5cbiAgICogT3B0aW9uYWxseSB0YWtlcyBhIGNvbnRleHQgdG8gcHJvdmlkZSB0byB0aGUgcm93IGFuZCBjZWxscywgYXMgd2VsbCBhcyBhbiBvcHRpb25hbCBpbmRleFxuICAgKiBvZiB3aGVyZSB0byBwbGFjZSB0aGUgbmV3IHJvdyB0ZW1wbGF0ZSBpbiB0aGUgb3V0bGV0LlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVuZGVyUm93KFxuICAgICAgb3V0bGV0OiBSb3dPdXRsZXQsIHJvd0RlZjogQmFzZVJvd0RlZiwgaW5kZXg6IG51bWJlcixcbiAgICAgIGNvbnRleHQ6IFJvd0NvbnRleHQ8VD4gPSB7fSk6IEVtYmVkZGVkVmlld1JlZjxSb3dDb250ZXh0PFQ+PiB7XG4gICAgLy8gVE9ETyhhbmRyZXdzZWd1aW4pOiBlbmZvcmNlIHRoYXQgb25lIG91dGxldCB3YXMgaW5zdGFudGlhdGVkIGZyb20gY3JlYXRlRW1iZWRkZWRWaWV3XG4gICAgY29uc3QgdmlldyA9IG91dGxldC52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhyb3dEZWYudGVtcGxhdGUsIGNvbnRleHQsIGluZGV4KTtcbiAgICB0aGlzLl9yZW5kZXJDZWxsVGVtcGxhdGVGb3JJdGVtKHJvd0RlZiwgY29udGV4dCk7XG4gICAgcmV0dXJuIHZpZXc7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDZWxsVGVtcGxhdGVGb3JJdGVtKHJvd0RlZjogQmFzZVJvd0RlZiwgY29udGV4dDogUm93Q29udGV4dDxUPikge1xuICAgIGZvciAobGV0IGNlbGxUZW1wbGF0ZSBvZiB0aGlzLl9nZXRDZWxsVGVtcGxhdGVzKHJvd0RlZikpIHtcbiAgICAgIGlmIChDZGtDZWxsT3V0bGV0Lm1vc3RSZWNlbnRDZWxsT3V0bGV0KSB7XG4gICAgICAgIENka0NlbGxPdXRsZXQubW9zdFJlY2VudENlbGxPdXRsZXQuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KGNlbGxUZW1wbGF0ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5kZXgtcmVsYXRlZCBjb250ZXh0IGZvciBlYWNoIHJvdyB0byByZWZsZWN0IGFueSBjaGFuZ2VzIGluIHRoZSBpbmRleCBvZiB0aGUgcm93cyxcbiAgICogZS5nLiBmaXJzdC9sYXN0L2V2ZW4vb2RkLlxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlUm93SW5kZXhDb250ZXh0KCkge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9yb3dPdXRsZXQudmlld0NvbnRhaW5lcjtcbiAgICBmb3IgKGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7IHJlbmRlckluZGV4IDwgY291bnQ7IHJlbmRlckluZGV4KyspIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgUm93Vmlld1JlZjxUPjtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgUm93Q29udGV4dDxUPjtcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XG5cbiAgICAgIGlmICh0aGlzLm11bHRpVGVtcGxhdGVEYXRhUm93cykge1xuICAgICAgICBjb250ZXh0LmRhdGFJbmRleCA9IHRoaXMuX3JlbmRlclJvd3NbcmVuZGVySW5kZXhdLmRhdGFJbmRleDtcbiAgICAgICAgY29udGV4dC5yZW5kZXJJbmRleCA9IHJlbmRlckluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5pbmRleCA9IHRoaXMuX3JlbmRlclJvd3NbcmVuZGVySW5kZXhdLmRhdGFJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogR2V0cyB0aGUgY29sdW1uIGRlZmluaXRpb25zIGZvciB0aGUgcHJvdmlkZWQgcm93IGRlZi4gKi9cbiAgcHJpdmF0ZSBfZ2V0Q2VsbFRlbXBsYXRlcyhyb3dEZWY6IEJhc2VSb3dEZWYpOiBUZW1wbGF0ZVJlZjxhbnk+W10ge1xuICAgIGlmICghcm93RGVmIHx8ICFyb3dEZWYuY29sdW1ucykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gQXJyYXkuZnJvbShyb3dEZWYuY29sdW1ucywgY29sdW1uSWQgPT4ge1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5fY29sdW1uRGVmc0J5TmFtZS5nZXQoY29sdW1uSWQpO1xuXG4gICAgICBpZiAoIWNvbHVtbiAmJiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSkge1xuICAgICAgICB0aHJvdyBnZXRUYWJsZVVua25vd25Db2x1bW5FcnJvcihjb2x1bW5JZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dEZWYuZXh0cmFjdENlbGxUZW1wbGF0ZShjb2x1bW4hKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBZGRzIG5hdGl2ZSB0YWJsZSBzZWN0aW9ucyAoZS5nLiB0Ym9keSkgYW5kIG1vdmVzIHRoZSByb3cgb3V0bGV0cyBpbnRvIHRoZW0uICovXG4gIHByaXZhdGUgX2FwcGx5TmF0aXZlVGFibGVTZWN0aW9ucygpIHtcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gW1xuICAgICAge3RhZzogJ3RoZWFkJywgb3V0bGV0czogW3RoaXMuX2hlYWRlclJvd091dGxldF19LFxuICAgICAge3RhZzogJ3Rib2R5Jywgb3V0bGV0czogW3RoaXMuX3Jvd091dGxldCwgdGhpcy5fbm9EYXRhUm93T3V0bGV0XX0sXG4gICAgICB7dGFnOiAndGZvb3QnLCBvdXRsZXRzOiBbdGhpcy5fZm9vdGVyUm93T3V0bGV0XX0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VjdGlvbi50YWcpO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncm93Z3JvdXAnKTtcblxuICAgICAgZm9yIChjb25zdCBvdXRsZXQgb2Ygc2VjdGlvbi5vdXRsZXRzKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3V0bGV0LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gVXNlIGEgRG9jdW1lbnRGcmFnbWVudCBzbyB3ZSBkb24ndCBoaXQgdGhlIERPTSBvbiBlYWNoIGl0ZXJhdGlvbi5cbiAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogRm9yY2VzIGEgcmUtcmVuZGVyIG9mIHRoZSBkYXRhIHJvd3MuIFNob3VsZCBiZSBjYWxsZWQgaW4gY2FzZXMgd2hlcmUgdGhlcmUgaGFzIGJlZW4gYW4gaW5wdXRcbiAgICogY2hhbmdlIHRoYXQgYWZmZWN0cyB0aGUgZXZhbHVhdGlvbiBvZiB3aGljaCByb3dzIHNob3VsZCBiZSByZW5kZXJlZCwgZS5nLiB0b2dnbGluZ1xuICAgKiBgbXVsdGlUZW1wbGF0ZURhdGFSb3dzYCBvciBhZGRpbmcvcmVtb3Zpbmcgcm93IGRlZmluaXRpb25zLlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9yY2VSZW5kZXJEYXRhUm93cygpIHtcbiAgICB0aGlzLl9kYXRhRGlmZmVyLmRpZmYoW10pO1xuICAgIHRoaXMuX3Jvd091dGxldC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5yZW5kZXJSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGhhcyBiZWVuIGEgY2hhbmdlIGluIHN0aWNreSBzdGF0ZXMgc2luY2UgbGFzdCBjaGVjayBhbmQgYXBwbGllcyB0aGUgY29ycmVjdFxuICAgKiBzdGlja3kgc3R5bGVzLiBTaW5jZSBjaGVja2luZyByZXNldHMgdGhlIFwiZGlydHlcIiBzdGF0ZSwgdGhpcyBzaG91bGQgb25seSBiZSBwZXJmb3JtZWQgb25jZVxuICAgKiBkdXJpbmcgYSBjaGFuZ2UgZGV0ZWN0aW9uIGFuZCBhZnRlciB0aGUgaW5wdXRzIGFyZSBzZXR0bGVkIChhZnRlciBjb250ZW50IGNoZWNrKS5cbiAgICovXG4gIHByaXZhdGUgX2NoZWNrU3RpY2t5U3RhdGVzKCkge1xuICAgIGNvbnN0IHN0aWNreUNoZWNrUmVkdWNlciA9IChhY2M6IGJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6IENka0hlYWRlclJvd0RlZnxDZGtGb290ZXJSb3dEZWZ8Q2RrQ29sdW1uRGVmKSA9PiB7XG4gICAgICByZXR1cm4gYWNjIHx8IGQuaGFzU3RpY2t5Q2hhbmdlZCgpO1xuICAgIH07XG5cbiAgICAvLyBOb3RlIHRoYXQgdGhlIGNoZWNrIG5lZWRzIHRvIG9jY3VyIGZvciBldmVyeSBkZWZpbml0aW9uIHNpbmNlIGl0IG5vdGlmaWVzIHRoZSBkZWZpbml0aW9uXG4gICAgLy8gdGhhdCBpdCBjYW4gcmVzZXQgaXRzIGRpcnR5IHN0YXRlLiBVc2luZyBhbm90aGVyIG9wZXJhdG9yIGxpa2UgYHNvbWVgIG1heSBzaG9ydC1jaXJjdWl0XG4gICAgLy8gcmVtYWluaW5nIGRlZmluaXRpb25zIGFuZCBsZWF2ZSB0aGVtIGluIGFuIHVuY2hlY2tlZCBzdGF0ZS5cblxuICAgIGlmICh0aGlzLl9oZWFkZXJSb3dEZWZzLnJlZHVjZShzdGlja3lDaGVja1JlZHVjZXIsIGZhbHNlKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGlja3lIZWFkZXJSb3dTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZm9vdGVyUm93RGVmcy5yZWR1Y2Uoc3RpY2t5Q2hlY2tSZWR1Y2VyLCBmYWxzZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RpY2t5Rm9vdGVyUm93U3R5bGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmZyb20odGhpcy5fY29sdW1uRGVmc0J5TmFtZS52YWx1ZXMoKSkucmVkdWNlKHN0aWNreUNoZWNrUmVkdWNlciwgZmFsc2UpKSB7XG4gICAgICB0aGlzLl9zdGlja3lDb2x1bW5TdHlsZXNOZWVkUmVzZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVTdGlja3lDb2x1bW5TdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgc3RpY2t5IHN0eWxlciB0aGF0IHdpbGwgYmUgdXNlZCBmb3Igc3RpY2t5IHJvd3MgYW5kIGNvbHVtbnMuIExpc3RlbnNcbiAgICogZm9yIGRpcmVjdGlvbmFsaXR5IGNoYW5nZXMgYW5kIHByb3ZpZGVzIHRoZSBsYXRlc3QgZGlyZWN0aW9uIHRvIHRoZSBzdHlsZXIuIFJlLWFwcGxpZXMgY29sdW1uXG4gICAqIHN0aWNraW5lc3Mgd2hlbiBkaXJlY3Rpb25hbGl0eSBjaGFuZ2VzLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0dXBTdGlja3lTdHlsZXIoKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSB0aGlzLl9kaXIgPyB0aGlzLl9kaXIudmFsdWUgOiAnbHRyJztcbiAgICB0aGlzLl9zdGlja3lTdHlsZXIgPSBuZXcgU3RpY2t5U3R5bGVyKFxuICAgICAgICB0aGlzLl9pc05hdGl2ZUh0bWxUYWJsZSwgdGhpcy5zdGlja3lDc3NDbGFzcywgZGlyZWN0aW9uLCB0aGlzLl9jb2FsZXNjZWRTdHlsZVNjaGVkdWxlcixcbiAgICAgICAgdGhpcy5fcGxhdGZvcm0uaXNCcm93c2VyLCB0aGlzLm5lZWRzUG9zaXRpb25TdGlja3lPbkVsZW1lbnQsXG4gICAgICAgIHRoaXMuX3N0aWNreVBvc2l0aW9uaW5nTGlzdGVuZXIpO1xuICAgICh0aGlzLl9kaXIgPyB0aGlzLl9kaXIuY2hhbmdlIDogb2JzZXJ2YWJsZU9mPERpcmVjdGlvbj4oKSlcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSlcbiAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuX3N0aWNreVN0eWxlci5kaXJlY3Rpb24gPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlU3RpY2t5Q29sdW1uU3R5bGVzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogRmlsdGVycyBkZWZpbml0aW9ucyB0aGF0IGJlbG9uZyB0byB0aGlzIHRhYmxlIGZyb20gYSBRdWVyeUxpc3QuICovXG4gIHByaXZhdGUgX2dldE93bkRlZnM8SSBleHRlbmRzIHtfdGFibGU/OiBhbnl9PihpdGVtczogUXVlcnlMaXN0PEk+KTogSVtdIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uX3RhYmxlIHx8IGl0ZW0uX3RhYmxlID09PSB0aGlzKTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIG9yIHJlbW92ZXMgdGhlIG5vIGRhdGEgcm93LCBkZXBlbmRpbmcgb24gd2hldGhlciBhbnkgZGF0YSBpcyBiZWluZyBzaG93bi4gKi9cbiAgcHJpdmF0ZSBfdXBkYXRlTm9EYXRhUm93KCkge1xuICAgIGNvbnN0IG5vRGF0YVJvdyA9IHRoaXMuX2N1c3RvbU5vRGF0YVJvdyB8fCB0aGlzLl9ub0RhdGFSb3c7XG5cbiAgICBpZiAobm9EYXRhUm93KSB7XG4gICAgICBjb25zdCBzaG91bGRTaG93ID0gdGhpcy5fcm93T3V0bGV0LnZpZXdDb250YWluZXIubGVuZ3RoID09PSAwO1xuXG4gICAgICBpZiAoc2hvdWxkU2hvdyAhPT0gdGhpcy5faXNTaG93aW5nTm9EYXRhUm93KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX25vRGF0YVJvd091dGxldC52aWV3Q29udGFpbmVyO1xuICAgICAgICBzaG91bGRTaG93ID8gY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhub0RhdGFSb3cudGVtcGxhdGVSZWYpIDogY29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX2lzU2hvd2luZ05vRGF0YVJvdyA9IHNob3VsZFNob3c7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX211bHRpVGVtcGxhdGVEYXRhUm93czogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWRMYXlvdXQ6IEJvb2xlYW5JbnB1dDtcbn1cblxuLyoqIFV0aWxpdHkgZnVuY3Rpb24gdGhhdCBnZXRzIGEgbWVyZ2VkIGxpc3Qgb2YgdGhlIGVudHJpZXMgaW4gYW4gYXJyYXkgYW5kIHZhbHVlcyBvZiBhIFNldC4gKi9cbmZ1bmN0aW9uIG1lcmdlQXJyYXlBbmRTZXQ8VD4oYXJyYXk6IFRbXSwgc2V0OiBTZXQ8VD4pOiBUW10ge1xuICByZXR1cm4gYXJyYXkuY29uY2F0KEFycmF5LmZyb20oc2V0KSk7XG59XG4iXX0=