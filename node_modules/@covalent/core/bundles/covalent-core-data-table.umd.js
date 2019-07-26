(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/checkbox'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/material/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/portal'), require('@covalent/core/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/data-table', ['exports', '@angular/material/checkbox', '@angular/material/tooltip', '@angular/material/icon', '@angular/material/core', '@angular/common', '@angular/platform-browser', '@angular/forms', '@angular/cdk/coercion', '@angular/cdk/keycodes', 'rxjs', 'rxjs/operators', '@angular/cdk/portal', '@covalent/core/common', '@angular/core'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['data-table'] = {}),global.ng.material.checkbox,global.ng.material.tooltip,global.ng.material.icon,global.ng.material.core,global.ng.common,global.ng.platformBrowser,global.ng.forms,global.ng.cdk.coercion,global.ng.cdk.keycodes,global.rxjs,global.rxjs.operators,global.ng.cdk.portal,global.covalent.core.common,global.ng.core));
}(this, (function (exports,checkbox,tooltip,icon,core,common,platformBrowser,forms,coercion,keycodes,rxjs,operators,portal,common$1,core$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableColumnRowComponent = /** @class */ (function () {
        function TdDataTableColumnRowComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
        }
        TdDataTableColumnRowComponent.decorators = [
            { type: core$1.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'tr[td-data-table-column-row]',
                        template: "<ng-content></ng-content>",
                        styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableColumnRowComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return TdDataTableColumnRowComponent;
    }());
    var TdDataTableRowComponent = /** @class */ (function () {
        function TdDataTableRowComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._selected = false;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
        }
        Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            set: /**
             * @param {?} selected
             * @return {?}
             */ function (selected) {
                if (selected) {
                    this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
                }
                else {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
                }
                this._selected = selected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableRowComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var height = 48;
                if (this._elementRef.nativeElement) {
                    height = (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height;
                }
                return height;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listening to click event to explicitly focus the row element.
         */
        /**
         * Listening to click event to explicitly focus the row element.
         * @return {?}
         */
        TdDataTableRowComponent.prototype.clickListener = /**
         * Listening to click event to explicitly focus the row element.
         * @return {?}
         */
            function () {
                this.focus();
            };
        /**
         * @return {?}
         */
        TdDataTableRowComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this._elementRef.nativeElement.focus();
            };
        TdDataTableRowComponent.decorators = [
            { type: core$1.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'tr[td-data-table-row]',
                        template: "<ng-content></ng-content>",
                        styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableRowComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        TdDataTableRowComponent.propDecorators = {
            selected: [{ type: core$1.Input, args: ['selected',] }],
            clickListener: [{ type: core$1.HostListener, args: ['click',] }]
        };
        return TdDataTableRowComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableTemplateDirective = /** @class */ (function (_super) {
        __extends(TdDataTableTemplateDirective, _super);
        function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdDataTableTemplateDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] }
        ];
        /** @nocollapse */
        TdDataTableTemplateDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        TdDataTableTemplateDirective.propDecorators = {
            tdDataTableTemplate: [{ type: core$1.Input }]
        };
        return TdDataTableTemplateDirective;
    }(portal.TemplatePortalDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var TdDataTableSortingOrder = {
        Ascending: 'ASC',
        Descending: 'DESC',
    };
    /**
     * Constant to set the rows offset before and after the viewport
     * @type {?}
     */
    var TD_VIRTUAL_OFFSET = 2;
    /**
     * Constant to set default row height if none is provided
     * @type {?}
     */
    var TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
    var TdDataTableBase = /** @class */ (function () {
        function TdDataTableBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdDataTableBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdDataTableMixinBase = common$1.mixinControlValueAccessor(TdDataTableBase, []);
    var TdDataTableComponent = /** @class */ (function (_super) {
        __extends(TdDataTableComponent, _super);
        function TdDataTableComponent(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._document = _document;
            _this._elementRef = _elementRef;
            _this._domSanitizer = _domSanitizer;
            _this._hostWidth = 0;
            /**
             * manually resizable columns
             */
            _this._resizableColumns = false;
            _this._columnClientX = 0;
            _this._onColumnResize = new rxjs.Subject();
            _this._widths = [];
            _this._onResize = new rxjs.Subject();
            _this._scrollHorizontalOffset = 0;
            _this._onHorizontalScroll = new rxjs.Subject();
            _this._onVerticalScroll = new rxjs.Subject();
            // Array of cached row heights to allow dynamic row heights
            _this._rowHeightCache = [];
            // Total pseudo height of all the elements
            _this._totalHeight = 0;
            // Total host height for the viewport
            _this._hostHeight = 0;
            // Scrolled vertical pixels
            _this._scrollVerticalOffset = 0;
            // Variables that set from and to which rows will be rendered
            _this._fromRow = 0;
            _this._toRow = 0;
            _this._selectable = false;
            _this._clickable = false;
            _this._multiple = true;
            _this._allSelected = false;
            _this._indeterminate = false;
            /**
             * sorting
             */
            _this._sortable = false;
            _this._sortOrder = TdDataTableSortingOrder.Ascending;
            /**
             * shift select
             */
            _this._shiftPreviouslyPressed = false;
            _this._lastSelectedIndex = -1;
            _this._firstSelectedIndex = -1;
            _this._firstCheckboxValue = false;
            /**
             * template fetching support
             */
            _this._templateMap = new Map();
            /**
             * sortChange?: function
             * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
             * Emits an [ITdDataTableSortChangeEvent] implemented object.
             */
            _this.onSortChange = new core$1.EventEmitter();
            /**
             * rowSelect?: function
             * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
             * Emits an [ITdDataTableSelectEvent] implemented object.
             */
            _this.onRowSelect = new core$1.EventEmitter();
            /**
             * rowClick?: function
             * Event emitted when a row is clicked.
             * Emits an [ITdDataTableRowClickEvent] implemented object.
             */
            _this.onRowClick = new core$1.EventEmitter();
            /**
             * selectAll?: function
             * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
             * Emits an [ITdDataTableSelectAllEvent] implemented object.
             */
            _this.onSelectAll = new core$1.EventEmitter();
            /**
             * compareWith?: function(row, model): boolean
             * Allows custom comparison between row and model to see if row is selected or not
             * Default comparation is by reference
             */
            _this.compareWith = function (row, model) {
                return row === model;
            };
            return _this;
        }
        Object.defineProperty(TdDataTableComponent.prototype, "resizingColumn", {
            get: /**
             * @return {?}
             */ function () {
                return this._resizingColumn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
            get: /**
             * @return {?}
             */ function () {
                // if the checkboxes are rendered, we need to remove their width
                // from the total width to calculate properly
                if (this.selectable) {
                    return this._hostWidth - 42;
                }
                return this._hostWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "offsetTransform", {
            /**
             * Returns the offset style with a proper calculation on how much it should move
             * over the y axis of the total height
             */
            get: /**
             * Returns the offset style with a proper calculation on how much it should move
             * over the y axis of the total height
             * @return {?}
             */ function () {
                return this._offsetTransform;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "totalHeight", {
            /**
             * Returns the assumed total height of the rows
             */
            get: /**
             * Returns the assumed total height of the rows
             * @return {?}
             */ function () {
                return this._totalHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "fromRow", {
            /**
             * Returns the initial row to render in the viewport
             */
            get: /**
             * Returns the initial row to render in the viewport
             * @return {?}
             */ function () {
                return this._fromRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "toRow", {
            /**
             * Returns the last row to render in the viewport
             */
            get: /**
             * Returns the last row to render in the viewport
             * @return {?}
             */ function () {
                return this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "columnsLeftScroll", {
            /**
             * Returns scroll position to reposition column headers
             */
            get: /**
             * Returns scroll position to reposition column headers
             * @return {?}
             */ function () {
                return this._scrollHorizontalOffset * -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
            /**
             * Returns true if all values are selected.
             */
            get: /**
             * Returns true if all values are selected.
             * @return {?}
             */ function () {
                return this._allSelected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
            /**
             * Returns true if all values are not deselected
             * and at least one is.
             */
            get: /**
             * Returns true if all values are not deselected
             * and at least one is.
             * @return {?}
             */ function () {
                return this._indeterminate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            /**
             * data?: {[key: string]: any}[]
             * Sets the data to be rendered as rows.
             */
            set: /**
             * data?: {[key: string]: any}[]
             * Sets the data to be rendered as rows.
             * @param {?} data
             * @return {?}
             */ function (data) {
                var _this = this;
                this._data = data;
                this._rowHeightCache = [];
                Promise.resolve().then(function () {
                    _this.refresh();
                    // scroll back to the top if the data has changed
                    _this._scrollableDiv.nativeElement.scrollTop = 0;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "virtualData", {
            get: /**
             * @return {?}
             */ function () {
                return this._virtualData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "columns", {
            get: /**
             * @return {?}
             */ function () {
                var _this = this;
                if (this._columns) {
                    return this._columns;
                }
                if (this.hasData) {
                    this._columns = [];
                    // if columns is undefined, use key in [data] rows as name and label for column headers.
                    /** @type {?} */
                    var row = this._data[0];
                    Object.keys(row).forEach(function (k) {
                        if (!_this._columns.find(function (c) { return c.name === k; })) {
                            _this._columns.push({ name: k, label: k });
                        }
                    });
                    return this._columns;
                }
                else {
                    return [];
                }
            },
            /**
             * columns?: ITdDataTableColumn[]
             * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
             * Defaults to [data] keys.
             */
            set: /**
             * columns?: ITdDataTableColumn[]
             * Sets additional column configuration. [ITdDataTableColumn.name] has to exist in [data] as key.
             * Defaults to [data] keys.
             * @param {?} cols
             * @return {?}
             */ function (cols) {
                this._columns = cols;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "resizableColumns", {
            get: /**
             * @return {?}
             */ function () {
                return this._resizableColumns;
            },
            /**
             * resizableColumns?: boolean
             * Enables manual column resize.
             * Defaults to 'false'
             */
            set: /**
             * resizableColumns?: boolean
             * Enables manual column resize.
             * Defaults to 'false'
             * @param {?} resizableColumns
             * @return {?}
             */ function (resizableColumns) {
                this._resizableColumns = coercion.coerceBooleanProperty(resizableColumns);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectable;
            },
            /**
             * selectable?: boolean
             * Enables row selection events, hover and selected row states.
             * Defaults to 'false'
             */
            set: /**
             * selectable?: boolean
             * Enables row selection events, hover and selected row states.
             * Defaults to 'false'
             * @param {?} selectable
             * @return {?}
             */ function (selectable) {
                this._selectable = coercion.coerceBooleanProperty(selectable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
            get: /**
             * @return {?}
             */ function () {
                return this._clickable;
            },
            /**
             * clickable?: boolean
             * Enables row click events, hover.
             * Defaults to 'false'
             */
            set: /**
             * clickable?: boolean
             * Enables row click events, hover.
             * Defaults to 'false'
             * @param {?} clickable
             * @return {?}
             */ function (clickable) {
                this._clickable = coercion.coerceBooleanProperty(clickable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Enables multiple row selection. [selectable] needs to be enabled.
             * Defaults to 'false'
             */
            set: /**
             * multiple?: boolean
             * Enables multiple row selection. [selectable] needs to be enabled.
             * Defaults to 'false'
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortable;
            },
            /**
             * sortable?: boolean
             * Enables sorting events, sort icons and active column states.
             * Defaults to 'false'
             */
            set: /**
             * sortable?: boolean
             * Enables sorting events, sort icons and active column states.
             * Defaults to 'false'
             * @param {?} sortable
             * @return {?}
             */ function (sortable) {
                this._sortable = coercion.coerceBooleanProperty(sortable);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortBy", {
            /**
             * sortBy?: string
             * Sets the active sort column. [sortable] needs to be enabled.
             */
            set: /**
             * sortBy?: string
             * Sets the active sort column. [sortable] needs to be enabled.
             * @param {?} columnName
             * @return {?}
             */ function (columnName) {
                if (!columnName) {
                    return;
                }
                /** @type {?} */
                var column = this.columns.find(function (c) { return c.name === columnName; });
                if (!column) {
                    throw new Error('[sortBy] must be a valid column name');
                }
                this._sortBy = column;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortByColumn", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortBy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortOrder", {
            /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             */
            set: /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of the [sortBy] column. [sortable] needs to be enabled.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             * @param {?} order
             * @return {?}
             */ function (order) {
                /** @type {?} */
                var sortOrder = order ? order.toUpperCase() : 'ASC';
                if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                    throw new Error('[sortOrder] must be empty, ASC or DESC');
                }
                this._sortOrder = sortOrder === 'ASC' ?
                    TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "sortOrderEnum", {
            get: /**
             * @return {?}
             */ function () {
                return this._sortOrder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
            get: /**
             * @return {?}
             */ function () {
                return this._data && this._data.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Initialize observable for resize and scroll events
         */
        /**
         * Initialize observable for resize and scroll events
         * @return {?}
         */
        TdDataTableComponent.prototype.ngOnInit = /**
         * Initialize observable for resize and scroll events
         * @return {?}
         */
            function () {
                var _this = this;
                // initialize observable for resize calculations
                this._resizeSubs = this._onResize.asObservable().subscribe(function () {
                    if (_this._rows) {
                        _this._rows.toArray().forEach(function (row, index) {
                            _this._rowHeightCache[_this.fromRow + index] = row.height + 1;
                        });
                    }
                    _this._calculateWidths();
                    _this._calculateVirtualRows();
                });
                // initialize observable for column resize calculations
                this._columnResizeSubs = this._onColumnResize.asObservable().pipe(operators.debounceTime(0)).subscribe(function (clientX) {
                    _this._columnClientX = clientX;
                    _this._calculateWidths();
                    _this._changeDetectorRef.markForCheck();
                });
                // initialize observable for scroll column header reposition
                this._horizontalScrollSubs = this._onHorizontalScroll.asObservable()
                    .subscribe(function (horizontalScroll) {
                    _this._scrollHorizontalOffset = horizontalScroll;
                    _this._changeDetectorRef.markForCheck();
                });
                // initialize observable for virtual scroll rendering
                this._verticalScrollSubs = this._onVerticalScroll.asObservable()
                    .subscribe(function (verticalScroll) {
                    _this._scrollVerticalOffset = verticalScroll;
                    _this._calculateVirtualRows();
                    _this._changeDetectorRef.markForCheck();
                });
                this._valueChangesSubs = this.valueChanges.subscribe(function (value) {
                    _this.refresh();
                });
            };
        /**
         * Loads templates and sets them in a map for faster access.
         */
        /**
         * Loads templates and sets them in a map for faster access.
         * @return {?}
         */
        TdDataTableComponent.prototype.ngAfterContentInit = /**
         * Loads templates and sets them in a map for faster access.
         * @return {?}
         */
            function () {
                for (var i = 0; i < this._templates.toArray().length; i++) {
                    this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
                }
            };
        /**
         * Checks hosts native elements widths to see if it has changed (resize check)
         */
        /**
         * Checks hosts native elements widths to see if it has changed (resize check)
         * @return {?}
         */
        TdDataTableComponent.prototype.ngAfterContentChecked = /**
         * Checks hosts native elements widths to see if it has changed (resize check)
         * @return {?}
         */
            function () {
                var _this = this;
                // check if the scroll has been reset when element is hidden
                if (this._scrollVerticalOffset - this._scrollableDiv.nativeElement.scrollTop > 5) {
                    // scroll back to the top if element has been reset
                    this._onVerticalScroll.next(0);
                }
                if (this._elementRef.nativeElement) {
                    /** @type {?} */
                    var newHostWidth_1 = this._elementRef.nativeElement.getBoundingClientRect().width;
                    // if the width has changed then we throw a resize event.
                    if (this._hostWidth !== newHostWidth_1) {
                        setTimeout(function () {
                            _this._hostWidth = newHostWidth_1;
                            _this._onResize.next();
                        }, 0);
                    }
                }
                if (this._scrollableDiv.nativeElement) {
                    /** @type {?} */
                    var newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
                    // if the height of the viewport has changed, then we mark for check
                    if (this._hostHeight !== newHostHeight) {
                        this._hostHeight = newHostHeight;
                        this._calculateVirtualRows();
                        this._changeDetectorRef.markForCheck();
                    }
                }
            };
        /**
         * Registers to an observable that checks if all rows have been rendered
         * so we can start calculating the widths
         */
        /**
         * Registers to an observable that checks if all rows have been rendered
         * so we can start calculating the widths
         * @return {?}
         */
        TdDataTableComponent.prototype.ngAfterViewInit = /**
         * Registers to an observable that checks if all rows have been rendered
         * so we can start calculating the widths
         * @return {?}
         */
            function () {
                var _this = this;
                this._rowsChangedSubs = this._rows.changes.pipe(operators.debounceTime(0)).subscribe(function () {
                    _this._onResize.next();
                });
                this._calculateVirtualRows();
            };
        /**
         * Unsubscribes observables when data table is destroyed
         */
        /**
         * Unsubscribes observables when data table is destroyed
         * @return {?}
         */
        TdDataTableComponent.prototype.ngOnDestroy = /**
         * Unsubscribes observables when data table is destroyed
         * @return {?}
         */
            function () {
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
            };
        /**
         * Method that gets executed every time there is a scroll event
         * Calls the scroll observable
         */
        /**
         * Method that gets executed every time there is a scroll event
         * Calls the scroll observable
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype.handleScroll = /**
         * Method that gets executed every time there is a scroll event
         * Calls the scroll observable
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var element = (( /** @type {?} */(event.target)));
                if (element) {
                    /** @type {?} */
                    var horizontalScroll = element.scrollLeft;
                    if (this._scrollHorizontalOffset !== horizontalScroll) {
                        this._onHorizontalScroll.next(horizontalScroll);
                    }
                    /** @type {?} */
                    var verticalScroll = element.scrollTop;
                    if (this._scrollVerticalOffset !== verticalScroll) {
                        this._onVerticalScroll.next(verticalScroll);
                    }
                }
            };
        /**
         * Returns the width needed for the columns via index
         */
        /**
         * Returns the width needed for the columns via index
         * @param {?} index
         * @return {?}
         */
        TdDataTableComponent.prototype.getColumnWidth = /**
         * Returns the width needed for the columns via index
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (this._widths[index]) {
                    return this._widths[index].value;
                }
                return undefined;
            };
        /**
         * @param {?} column
         * @param {?} value
         * @return {?}
         */
        TdDataTableComponent.prototype.getCellValue = /**
         * @param {?} column
         * @param {?} value
         * @return {?}
         */
            function (column, value) {
                if (column.nested === undefined || column.nested) {
                    return this._getNestedValue(column.name, value);
                }
                return value[column.name];
            };
        /**
         * Getter method for template references
         */
        /**
         * Getter method for template references
         * @param {?} name
         * @return {?}
         */
        TdDataTableComponent.prototype.getTemplateRef = /**
         * Getter method for template references
         * @param {?} name
         * @return {?}
         */
            function (name) {
                return this._templateMap.get(name);
            };
        /**
         * Clears model (ngModel) of component by removing all values in array.
         */
        /**
         * Clears model (ngModel) of component by removing all values in array.
         * @return {?}
         */
        TdDataTableComponent.prototype.clearModel = /**
         * Clears model (ngModel) of component by removing all values in array.
         * @return {?}
         */
            function () {
                this.value.splice(0, this.value.length);
            };
        /**
         * Refreshes data table and rerenders [data] and [columns]
         */
        /**
         * Refreshes data table and rerenders [data] and [columns]
         * @return {?}
         */
        TdDataTableComponent.prototype.refresh = /**
         * Refreshes data table and rerenders [data] and [columns]
         * @return {?}
         */
            function () {
                this._calculateVirtualRows();
                this._calculateWidths();
                this._calculateCheckboxState();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Selects or clears all rows depending on 'checked' value.
         */
        /**
         * Selects or clears all rows depending on 'checked' value.
         * @param {?} checked
         * @return {?}
         */
        TdDataTableComponent.prototype.selectAll = /**
         * Selects or clears all rows depending on 'checked' value.
         * @param {?} checked
         * @return {?}
         */
            function (checked) {
                var _this = this;
                /** @type {?} */
                var toggledRows = [];
                if (checked) {
                    this._data.forEach(function (row) {
                        // skiping already selected rows
                        if (!_this.isRowSelected(row)) {
                            _this.value.push(row);
                            // checking which ones are being toggled
                            toggledRows.push(row);
                        }
                    });
                    this._allSelected = true;
                    this._indeterminate = true;
                }
                else {
                    this._data.forEach(function (row) {
                        // checking which ones are being toggled
                        if (_this.isRowSelected(row)) {
                            toggledRows.push(row);
                            /** @type {?} */
                            var modelRow = _this.value.filter(function (val) {
                                return _this.compareWith(row, val);
                            })[0];
                            /** @type {?} */
                            var index = _this.value.indexOf(modelRow);
                            if (index > -1) {
                                _this.value.splice(index, 1);
                            }
                        }
                    });
                    this._allSelected = false;
                    this._indeterminate = false;
                }
                this.onSelectAll.emit({ rows: toggledRows, selected: checked });
                this.onChange(this.value);
            };
        /**
         * Checks if row is selected
         */
        /**
         * Checks if row is selected
         * @param {?} row
         * @return {?}
         */
        TdDataTableComponent.prototype.isRowSelected = /**
         * Checks if row is selected
         * @param {?} row
         * @return {?}
         */
            function (row) {
                var _this = this;
                // compare items by [compareWith] function
                return this.value ? this.value.filter(function (val) {
                    return _this.compareWith(row, val);
                }).length > 0 : false;
            };
        /**
         * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
         * handles cntrl clicks and shift clicks for multi-select
         */
        /**
         * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
         * handles cntrl clicks and shift clicks for multi-select
         * @param {?} row
         * @param {?} event
         * @param {?} currentSelected
         * @return {?}
         */
        TdDataTableComponent.prototype.select = /**
         * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
         * handles cntrl clicks and shift clicks for multi-select
         * @param {?} row
         * @param {?} event
         * @param {?} currentSelected
         * @return {?}
         */
            function (row, event, currentSelected) {
                if (this.selectable) {
                    this.blockEvent(event);
                    // Check to see if Shift key is selected and need to select everything in between
                    /** @type {?} */
                    var mouseEvent = ( /** @type {?} */(event));
                    if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                        /** @type {?} */
                        var firstIndex = currentSelected;
                        /** @type {?} */
                        var lastIndex = this._lastSelectedIndex;
                        if (currentSelected > this._lastSelectedIndex) {
                            firstIndex = this._lastSelectedIndex;
                            lastIndex = currentSelected;
                        }
                        // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                        // else the checkboxes clicked are all after the initial one
                        if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                            (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                            for (var i = firstIndex; i <= lastIndex; i++) {
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
                            for (var i = firstIndex; i <= lastIndex; i++) {
                                /** @type {?} */
                                var rowSelected = this.isRowSelected(this._data[i]);
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
            };
        /**
         * Overrides the onselectstart method of the document so other text on the page
         * doesn't get selected when doing shift selections.
         */
        /**
         * Overrides the onselectstart method of the document so other text on the page
         * doesn't get selected when doing shift selections.
         * @return {?}
         */
        TdDataTableComponent.prototype.disableTextSelection = /**
         * Overrides the onselectstart method of the document so other text on the page
         * doesn't get selected when doing shift selections.
         * @return {?}
         */
            function () {
                if (this._document) {
                    this._document.onselectstart = function () {
                        return false;
                    };
                }
            };
        /**
         * Resets the original onselectstart method.
         */
        /**
         * Resets the original onselectstart method.
         * @return {?}
         */
        TdDataTableComponent.prototype.enableTextSelection = /**
         * Resets the original onselectstart method.
         * @return {?}
         */
            function () {
                if (this._document) {
                    this._document.onselectstart = undefined;
                }
            };
        /**
         * emits the onRowClickEvent when a row is clicked
         * if clickable is true and selectable is false then select the row
         */
        /**
         * emits the onRowClickEvent when a row is clicked
         * if clickable is true and selectable is false then select the row
         * @param {?} row
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype.handleRowClick = /**
         * emits the onRowClickEvent when a row is clicked
         * if clickable is true and selectable is false then select the row
         * @param {?} row
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
            function (row, index, event) {
                if (this.clickable) {
                    // ignoring linting rules here because attribute it actually null or not there
                    // can't check for undefined
                    /** @type {?} */
                    var srcElement = event.srcElement || event.currentTarget;
                    /** @type {?} */
                    var element = ( /** @type {?} */(event.target));
                    /* tslint:disable-next-line */
                    if (srcElement.getAttribute('stopRowClick') === null && element.tagName.toLowerCase() !== 'mat-pseudo-checkbox') {
                        this.onRowClick.emit({
                            row: row,
                            index: index,
                        });
                    }
                }
            };
        /**
         * Method handle for sort click event in column headers.
         */
        /**
         * Method handle for sort click event in column headers.
         * @param {?} column
         * @return {?}
         */
        TdDataTableComponent.prototype.handleSort = /**
         * Method handle for sort click event in column headers.
         * @param {?} column
         * @return {?}
         */
            function (column) {
                if (this._sortBy === column) {
                    this._sortOrder = this._sortOrder === TdDataTableSortingOrder.Ascending ?
                        TdDataTableSortingOrder.Descending : TdDataTableSortingOrder.Ascending;
                }
                else {
                    this._sortBy = column;
                    this._sortOrder = TdDataTableSortingOrder.Ascending;
                }
                this.onSortChange.next({ name: this._sortBy.name, order: this._sortOrder });
            };
        /**
         * Handle all keyup events when focusing a data table row
         */
        /**
         * Handle all keyup events when focusing a data table row
         * @param {?} event
         * @param {?} row
         * @param {?} index
         * @return {?}
         */
        TdDataTableComponent.prototype._rowKeyup = /**
         * Handle all keyup events when focusing a data table row
         * @param {?} event
         * @param {?} row
         * @param {?} index
         * @return {?}
         */
            function (event, row, index) {
                switch (event.keyCode) {
                    case keycodes.ENTER:
                    case keycodes.SPACE:
                        /** if user presses enter or space, the row should be selected */
                        if (this.selectable) {
                            this._doSelection(this._data[this.fromRow + index], this.fromRow + index);
                        }
                        break;
                    case keycodes.UP_ARROW:
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
                    case keycodes.DOWN_ARROW:
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
            };
        /**
         * Sets column index of the dragged column and initial clientX of column
         */
        /**
         * Sets column index of the dragged column and initial clientX of column
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype._handleStartColumnDrag = /**
         * Sets column index of the dragged column and initial clientX of column
         * @param {?} index
         * @param {?} event
         * @return {?}
         */
            function (index, event) {
                this._columnClientX = event.clientX;
                this._resizingColumn = index;
            };
        /**
         * Calculates new width depending on new clientX of dragger column
         */
        /**
         * Calculates new width depending on new clientX of dragger column
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype._handleColumnDrag = /**
         * Calculates new width depending on new clientX of dragger column
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // check if there was been a separator clicked for resize
                if (this._resizingColumn !== undefined && event.clientX > 0) {
                    /** @type {?} */
                    var xPosition = event.clientX;
                    // checks if the separator is being moved to try and resize the column, else dont do anything
                    if (xPosition > 0 && this._columnClientX > 0 && (xPosition - this._columnClientX) !== 0) {
                        // calculate the new width depending if making the column bigger or smaller
                        /** @type {?} */
                        var proposedManualWidth = this._widths[this._resizingColumn].value + (xPosition - this._columnClientX);
                        // if the proposed new width is less than the projected min width of the column, use projected min width
                        if (proposedManualWidth < this._colElements.toArray()[this._resizingColumn].projectedWidth) {
                            proposedManualWidth = this._colElements.toArray()[this._resizingColumn].projectedWidth;
                        }
                        this.columns[this._resizingColumn].width = proposedManualWidth;
                        // update new x position for the resized column
                        this._onColumnResize.next(xPosition);
                    }
                }
            };
        /**
         * Ends dragged flags
         */
        /**
         * Ends dragged flags
         * @return {?}
         */
        TdDataTableComponent.prototype._handleEndColumnDrag = /**
         * Ends dragged flags
         * @return {?}
         */
            function () {
                this._columnClientX = undefined;
                this._resizingColumn = undefined;
            };
        /**
         * Method to prevent the default events
         */
        /**
         * Method to prevent the default events
         * @param {?} event
         * @return {?}
         */
        TdDataTableComponent.prototype.blockEvent = /**
         * Method to prevent the default events
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
            };
        /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        TdDataTableComponent.prototype._getNestedValue = /**
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
            function (name, value) {
                if (!(value instanceof Object) || !name) {
                    return value;
                }
                if (name.indexOf('.') > -1) {
                    /** @type {?} */
                    var splitName = name.split(/\.(.+)/, 2);
                    return this._getNestedValue(splitName[1], value[splitName[0]]);
                }
                else {
                    return value[name];
                }
            };
        /**
         * Does the actual Row Selection
         */
        /**
         * Does the actual Row Selection
         * @param {?} row
         * @param {?} rowIndex
         * @return {?}
         */
        TdDataTableComponent.prototype._doSelection = /**
         * Does the actual Row Selection
         * @param {?} row
         * @param {?} rowIndex
         * @return {?}
         */
            function (row, rowIndex) {
                var _this = this;
                /** @type {?} */
                var wasSelected = this.isRowSelected(row);
                if (!wasSelected) {
                    if (!this._multiple) {
                        this.clearModel();
                    }
                    this.value.push(row);
                }
                else {
                    // compare items by [compareWith] function
                    row = this.value.filter(function (val) {
                        return _this.compareWith(row, val);
                    })[0];
                    /** @type {?} */
                    var index = this.value.indexOf(row);
                    if (index > -1) {
                        this.value.splice(index, 1);
                    }
                }
                this._calculateCheckboxState();
                this.onRowSelect.emit({ row: row, index: rowIndex, selected: !wasSelected });
                this.onChange(this.value);
                return !wasSelected;
            };
        /**
         * Calculate all the state of all checkboxes
         */
        /**
         * Calculate all the state of all checkboxes
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateCheckboxState = /**
         * Calculate all the state of all checkboxes
         * @return {?}
         */
            function () {
                var _this = this;
                var e_1, _a;
                if (this._data) {
                    this._allSelected = typeof this._data.find(function (d) { return !_this.isRowSelected(d); }) === 'undefined';
                    this._indeterminate = false;
                    try {
                        for (var _b = __values(this._data), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var row = _c.value;
                            if (!this.isRowSelected(row)) {
                                continue;
                            }
                            this._indeterminate = true;
                            break;
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
            };
        /**
         * Calculates the widths for columns and cells depending on content
         */
        /**
         * Calculates the widths for columns and cells depending on content
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateWidths = /**
         * Calculates the widths for columns and cells depending on content
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._colElements && this._colElements.length) {
                    this._widths = [];
                    this._colElements.forEach(function (col, index) {
                        _this._adjustColumnWidth(index, _this._calculateWidth());
                    });
                    this._adjustColumnWidhts();
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * Adjusts columns after calculation to see if they need to be recalculated.
         */
        /**
         * Adjusts columns after calculation to see if they need to be recalculated.
         * @return {?}
         */
        TdDataTableComponent.prototype._adjustColumnWidhts = /**
         * Adjusts columns after calculation to see if they need to be recalculated.
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var fixedTotalWidth = 0;
                // get the number of total columns that have flexible widths (not fixed or hidden)
                /** @type {?} */
                var flexibleWidths = this._widths.filter(function (width, index) {
                    if (_this.columns[index].hidden) {
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
                var recalculateHostWidth = 0;
                if (fixedTotalWidth < this.hostWidth) {
                    recalculateHostWidth = this.hostWidth - fixedTotalWidth;
                }
                // if we have flexible columns and pixels to spare on them
                // we try and spread the pixels across them
                if (flexibleWidths && recalculateHostWidth) {
                    /** @type {?} */
                    var newValue_1 = Math.floor(recalculateHostWidth / flexibleWidths);
                    /** @type {?} */
                    var adjustedNumber_1 = 0;
                    // adjust the column widths with the spread pixels
                    this._widths.forEach(function (colWidth) {
                        if (_this._widths[colWidth.index].max && _this._widths[colWidth.index].value > newValue_1 ||
                            _this._widths[colWidth.index].min && _this._widths[colWidth.index].value < newValue_1 ||
                            !_this._widths[colWidth.index].limit) {
                            _this._adjustColumnWidth(colWidth.index, newValue_1);
                            adjustedNumber_1++;
                        }
                    });
                    // if there are still columns that need to be recalculated, we start over
                    /** @type {?} */
                    var newFlexibleWidths = this._widths.filter(function (width) {
                        return !width.limit && !width.max;
                    }).length;
                    if (newFlexibleWidths !== adjustedNumber_1 && newFlexibleWidths !== flexibleWidths) {
                        this._adjustColumnWidhts();
                    }
                }
            };
        /**
         * Adjusts a single column to see if it can be recalculated
         */
        /**
         * Adjusts a single column to see if it can be recalculated
         * @param {?} index
         * @param {?} value
         * @return {?}
         */
        TdDataTableComponent.prototype._adjustColumnWidth = /**
         * Adjusts a single column to see if it can be recalculated
         * @param {?} index
         * @param {?} value
         * @return {?}
         */
            function (index, value) {
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
                var skipMinWidthProjection = false;
                if (this.columns[index]) {
                    // if the provided width has min/max, then we check to see if we need to set it
                    if (typeof this.columns[index].width === 'object') {
                        /** @type {?} */
                        var widthOpts = ( /** @type {?} */(this.columns[index].width));
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
                        this._widths[index].value = ( /** @type {?} */(this.columns[index].width));
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
            };
        /**
         * Generic method to calculate column width
         */
        /**
         * Generic method to calculate column width
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateWidth = /**
         * Generic method to calculate column width
         * @return {?}
         */
            function () {
                /** @type {?} */
                var renderedColumns = this.columns.filter(function (col) { return !col.hidden; });
                return Math.floor(this.hostWidth / renderedColumns.length);
            };
        /**
         * Method to calculate the rows to be rendered in the viewport
         */
        /**
         * Method to calculate the rows to be rendered in the viewport
         * @return {?}
         */
        TdDataTableComponent.prototype._calculateVirtualRows = /**
         * Method to calculate the rows to be rendered in the viewport
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var scrolledRows = 0;
                if (this._data) {
                    this._totalHeight = 0;
                    /** @type {?} */
                    var rowHeightSum_1 = 0;
                    // loop through all rows to see if we have their height cached
                    // and sum them all to calculate the total height
                    this._data.forEach(function (d, i) {
                        // iterate through all rows at first and assume all
                        // rows are the same height as the first one
                        if (!_this._rowHeightCache[i]) {
                            _this._rowHeightCache[i] = _this._rowHeightCache[0] || TD_VIRTUAL_DEFAULT_ROW_HEIGHT;
                        }
                        rowHeightSum_1 += _this._rowHeightCache[i];
                        // check how many rows have been scrolled
                        if (_this._scrollVerticalOffset - rowHeightSum_1 > 0) {
                            scrolledRows++;
                        }
                    });
                    this._totalHeight = rowHeightSum_1;
                    // set the initial row to be rendered taking into account the row offset
                    /** @type {?} */
                    var fromRow = scrolledRows - TD_VIRTUAL_OFFSET;
                    this._fromRow = fromRow > 0 ? fromRow : 0;
                    /** @type {?} */
                    var hostHeight = this._hostHeight;
                    /** @type {?} */
                    var index = 0;
                    // calculate how many rows can fit in the viewport
                    while (hostHeight > 0) {
                        hostHeight -= this._rowHeightCache[this.fromRow + index];
                        index++;
                    }
                    // set the last row to be rendered taking into account the row offset
                    /** @type {?} */
                    var range = (index - 1) + (TD_VIRTUAL_OFFSET * 2);
                    /** @type {?} */
                    var toRow = range + this.fromRow;
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
                var offset = 0;
                // calculate the proper offset depending on how many rows have been scrolled
                if (scrolledRows > TD_VIRTUAL_OFFSET) {
                    for (var index = 0; index < this.fromRow; index++) {
                        offset += this._rowHeightCache[index];
                    }
                }
                this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
                if (this._data) {
                    this._virtualData = this.data.slice(this.fromRow, this.toRow);
                }
                // mark for check at the end of the queue so we are sure
                // that the changes will be marked
                Promise.resolve().then(function () {
                    _this._changeDetectorRef.markForCheck();
                });
            };
        TdDataTableComponent.decorators = [
            { type: core$1.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdDataTableComponent; }),
                                multi: true,
                            }],
                        selector: 'td-data-table',
                        template: "<table td-data-table\n        [style.left.px]=\"columnsLeftScroll\"\n        [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\"\n          (dragover)=\"_handleColumnDrag($event)\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\">\n        </mat-checkbox>\n      </th>\n      <th td-data-table-column\n        #columnElement\n        *ngFor=\"let column of columns; let i = index; let last = last\"\n        [style.min-width.px]=\"getColumnWidth(i)\"\n        [style.max-width.px]=\"getColumnWidth(i)\"\n        [name]=\"column.name\"\n        [numeric]=\"column.numeric\"\n        [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n        [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n        [sortOrder]=\"sortOrderEnum\"\n        [hidden]=\"column.hidden\"\n        (sortChange)=\"handleSort(column)\">\n        <span [matTooltip]=\"column.tooltip\">{{column.label}}</span>\n        <span td-column-resizer\n              *ngIf=\"resizableColumns\"\n              draggable=\"true\"\n              class=\"td-data-table-column-resizer\"\n              [class.td-resizing]=\"i === resizingColumn\"\n              (mousedown)=\"_handleStartColumnDrag(i, $event)\"\n              (dragstart)=\"$event?.dataTransfer?.setData('text', '')\"\n              (drag)=\"_handleColumnDrag($event)\"\n              (dragend)=\"_handleEndColumnDrag()\"\n              (mouseup)=\"_handleEndColumnDrag()\">\n          <span class=\"td-data-table-column-separator\"></span>\n        </span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\"\n      (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table td-data-table\n          [style.transform]=\"offsetTransform\"\n          [style.position]=\"'absolute'\"\n          [class.mat-selectable]=\"selectable\"\n          [class.mat-clickable]=\"clickable\">\n    <tbody class=\"td-data-table-body\">\n      <tr td-data-table-row\n          #dtRow\n          [tabIndex]=\"selectable ? 0 : -1\"\n          [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n          *ngFor=\"let row of virtualData; let rowIndex = index\"\n          (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n          (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n          (keydown.space)=\"blockEvent($event)\"\n          (keydown.shift.space)=\"blockEvent($event)\"\n          (keydown.shift)=\"disableTextSelection()\"\n          (keyup.shift)=\"enableTextSelection()\">\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\">\n          </mat-pseudo-checkbox>\n        </td>\n        <td td-data-table-cell\n            [numeric]=\"column.numeric\"\n            [hidden]=\"column.hidden\"\n            *ngFor=\"let column of columns; let i = index\"\n            [style.min-width.px]=\"getColumnWidth(i)\"\n            [style.max-width.px]=\"getColumnWidth(i)\">\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name, index: rowIndex }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                        inputs: ['value'],
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;overflow:hidden}:host .td-data-table-scrollable{position:relative;overflow:auto;height:calc(100% - 56px)}.td-data-table-column-resizer{right:0;width:6px;cursor:col-resize}.td-data-table-column-resizer,.td-data-table-column-resizer .td-data-table-column-separator{position:absolute;height:100%;top:0}.td-data-table-column-resizer .td-data-table-column-separator{left:2px}.td-data-table-column-resizer.td-resizing{cursor:-webkit-grabbing}table.td-data-table{width:auto!important}table.td-data-table.mat-selectable tbody>tr.td-data-table-row{-webkit-transition:background-color .2s;transition:background-color .2s}table.td-data-table.mat-selectable .td-data-table-column:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:first-child>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:first-child>.td-data-table-column-content-wrapper{width:18px;min-width:18px;padding:0 24px}table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-left:0}[dir=rtl] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2)>.td-data-table-column-content-wrapper,[dir=rtl] table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2)>.td-data-table-column-content-wrapper{padding-right:0;padding-left:28px}table.td-data-table td.mat-checkbox-cell,table.td-data-table th.mat-checkbox-column{min-width:42px;width:42px;font-size:0!important}table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{width:18px;height:18px}::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after,::ng-deep table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{width:11px!important;height:4px!important}table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{width:18px;height:18px;margin:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [common.DOCUMENT,] }] },
                { type: core$1.ElementRef },
                { type: platformBrowser.DomSanitizer },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdDataTableComponent.propDecorators = {
            _templates: [{ type: core$1.ContentChildren, args: [TdDataTableTemplateDirective,] }],
            _scrollableDiv: [{ type: core$1.ViewChild, args: ['scrollableDiv',] }],
            _colElements: [{ type: core$1.ViewChildren, args: ['columnElement',] }],
            _rows: [{ type: core$1.ViewChildren, args: [TdDataTableRowComponent,] }],
            data: [{ type: core$1.Input, args: ['data',] }],
            columns: [{ type: core$1.Input, args: ['columns',] }],
            resizableColumns: [{ type: core$1.Input, args: ['resizableColumns',] }],
            selectable: [{ type: core$1.Input, args: ['selectable',] }],
            clickable: [{ type: core$1.Input, args: ['clickable',] }],
            multiple: [{ type: core$1.Input, args: ['multiple',] }],
            sortable: [{ type: core$1.Input, args: ['sortable',] }],
            sortBy: [{ type: core$1.Input, args: ['sortBy',] }],
            sortOrder: [{ type: core$1.Input, args: ['sortOrder',] }],
            onSortChange: [{ type: core$1.Output, args: ['sortChange',] }],
            onRowSelect: [{ type: core$1.Output, args: ['rowSelect',] }],
            onRowClick: [{ type: core$1.Output, args: ['rowClick',] }],
            onSelectAll: [{ type: core$1.Output, args: ['selectAll',] }],
            compareWith: [{ type: core$1.Input, args: ['compareWith',] }]
        };
        return TdDataTableComponent;
    }(_TdDataTableMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableColumnComponent = /** @class */ (function () {
        function TdDataTableColumnComponent(_elementRef, _renderer) {
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
            this.onSortChange = new core$1.EventEmitter();
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
        }
        Object.defineProperty(TdDataTableColumnComponent.prototype, "projectedWidth", {
            get: /**
             * @return {?}
             */ function () {
                if (this._columnContent && this._columnContent.nativeElement) {
                    return (( /** @type {?} */(this._columnContent.nativeElement))).getBoundingClientRect().width;
                }
                return 100;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "sortOrder", {
            /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of column.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             */
            set: /**
             * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
             * Sets the sort order of column.
             * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
             * @param {?} order
             * @return {?}
             */ function (order) {
                /** @type {?} */
                var sortOrder = order ? order.toUpperCase() : 'ASC';
                if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
                    throw new Error('[sortOrder] must be empty, ASC or DESC');
                }
                this._sortOrder = sortOrder === 'ASC' ?
                    TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindClickable", {
            get: /**
             * @return {?}
             */ function () {
                return this.sortable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
            get: /**
             * @return {?}
             */ function () {
                return this.sortable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
            get: /**
             * @return {?}
             */ function () {
                return this.active;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
            get: /**
             * @return {?}
             */ function () {
                return this.numeric;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listening to click event on host to throw a sort event
         */
        /**
         * Listening to click event on host to throw a sort event
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.handleClick = /**
         * Listening to click event on host to throw a sort event
         * @return {?}
         */
            function () {
                if (this.sortable) {
                    this.onSortChange.emit({ name: this.name, order: this._sortOrder });
                }
            };
        /**
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.isAscending = /**
         * @return {?}
         */
            function () {
                return this._sortOrder === TdDataTableSortingOrder.Ascending;
            };
        /**
         * @return {?}
         */
        TdDataTableColumnComponent.prototype.isDescending = /**
         * @return {?}
         */
            function () {
                return this._sortOrder === TdDataTableSortingOrder.Descending;
            };
        TdDataTableColumnComponent.decorators = [
            { type: core$1.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'th[td-data-table-column]',
                        template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                        styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableColumnComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        TdDataTableColumnComponent.propDecorators = {
            _columnContent: [{ type: core$1.ViewChild, args: ['columnContent', { read: core$1.ElementRef },] }],
            name: [{ type: core$1.Input, args: ['name',] }],
            sortable: [{ type: core$1.Input, args: ['sortable',] }],
            active: [{ type: core$1.Input, args: ['active',] }],
            numeric: [{ type: core$1.Input, args: ['numeric',] }],
            sortOrder: [{ type: core$1.Input, args: ['sortOrder',] }],
            onSortChange: [{ type: core$1.Output, args: ['sortChange',] }],
            bindClickable: [{ type: core$1.HostBinding, args: ['class.mat-clickable',] }],
            bingSortable: [{ type: core$1.HostBinding, args: ['class.mat-sortable',] }],
            bindActive: [{ type: core$1.HostBinding, args: ['class.mat-active',] }],
            bindNumeric: [{ type: core$1.HostBinding, args: ['class.mat-numeric',] }],
            handleClick: [{ type: core$1.HostListener, args: ['click',] }]
        };
        return TdDataTableColumnComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableCellComponent = /** @class */ (function () {
        function TdDataTableCellComponent(_elementRef, _renderer) {
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
        Object.defineProperty(TdDataTableCellComponent.prototype, "align", {
            get: /**
             * @return {?}
             */ function () {
                return this._align;
            },
            /**
             * align?: 'start' | 'center' | 'end'
             * Makes cell content align on demand
             * Defaults to 'left', overrides numeric
             */
            set: /**
             * align?: 'start' | 'center' | 'end'
             * Makes cell content align on demand
             * Defaults to 'left', overrides numeric
             * @param {?} align
             * @return {?}
             */ function (align) {
                this._align = align;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
            get: /**
             * @return {?}
             */ function () {
                return this.numeric;
            },
            enumerable: true,
            configurable: true
        });
        TdDataTableCellComponent.decorators = [
            { type: core$1.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'td[td-data-table-cell]',
                        template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\"\n     [class.td-data-table-cell-align-center]=\"align === 'center'\"\n     [class.td-data-table-cell-align-end]=\"align === 'end'\"\n     [class.td-data-table-cell-align-start]=\"align === 'start'\"\n     >\n  <ng-content></ng-content>\n</div>",
                        styles: [":host{vertical-align:middle;text-align:left;padding:0}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>.td-data-table-cell-content-wrapper{padding:0 28px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-numeric{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host>.td-data-table-cell-content-wrapper.td-data-table-cell-align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}:host:first-child>.td-data-table-cell-content-wrapper{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-cell-content-wrapper{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-cell-content-wrapper{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-cell-content-wrapper bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableCellComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        TdDataTableCellComponent.propDecorators = {
            numeric: [{ type: core$1.Input, args: ['numeric',] }],
            align: [{ type: core$1.Input }],
            bindNumeric: [{ type: core$1.HostBinding, args: ['class.mat-numeric',] }]
        };
        return TdDataTableCellComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableTableComponent = /** @class */ (function () {
        function TdDataTableTableComponent(_elementRef, _renderer) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
        }
        TdDataTableTableComponent.decorators = [
            { type: core$1.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'table[td-data-table]',
                        template: "<ng-content></ng-content>",
                        styles: [":host{width:100%;position:relative;border-spacing:0;overflow:hidden;border-collapse:collapse}"]
                    }] }
        ];
        /** @nocollapse */
        TdDataTableTableComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return TdDataTableTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDataTableService = /** @class */ (function () {
        function TdDataTableService() {
        }
        /**
         * params:
         * - data: any[]
         * - searchTerm: string
         * - ignoreCase: boolean = false
         * - excludedColumns: string[] = []
         *
         * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
         */
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
        TdDataTableService.prototype.filterData = /**
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
            function (data, searchTerm, ignoreCase, excludedColumns) {
                if (ignoreCase === void 0) {
                    ignoreCase = false;
                }
                /** @type {?} */
                var filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
                if (filter) {
                    data = data.filter(function (item) {
                        /** @type {?} */
                        var res = Object.keys(item).find(function (key) {
                            if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                                /** @type {?} */
                                var preItemValue = ('' + item[key]);
                                /** @type {?} */
                                var itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                                return itemValue.indexOf(filter) > -1;
                            }
                        });
                        return !(typeof res === 'undefined');
                    });
                }
                return data;
            };
        /**
         * params:
         * - data: any[]
         * - sortBy: string
         * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
         *
         * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
         */
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
        TdDataTableService.prototype.sortData = /**
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
            function (data, sortBy, sortOrder) {
                if (sortOrder === void 0) {
                    sortOrder = TdDataTableSortingOrder.Ascending;
                }
                if (sortBy) {
                    data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
                    data.sort(function (a, b) {
                        /** @type {?} */
                        var compA = a[sortBy];
                        /** @type {?} */
                        var compB = b[sortBy];
                        /** @type {?} */
                        var direction = 0;
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
            };
        /**
         * params:
         * - data: any[]
         * - fromRow: number
         * - toRow: : number
         *
         * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
         */
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
        TdDataTableService.prototype.pageData = /**
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
            function (data, fromRow, toRow) {
                if (fromRow >= 1) {
                    data = data.slice(fromRow - 1, toRow);
                }
                return data;
            };
        TdDataTableService.decorators = [
            { type: core$1.Injectable }
        ];
        return TdDataTableService;
    }());
    /**
     * @param {?} parent
     * @return {?}
     */
    function DATA_TABLE_PROVIDER_FACTORY(parent) {
        return parent || new TdDataTableService();
    }
    /** @type {?} */
    var DATA_TABLE_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdDataTableService,
        deps: [[new core$1.Optional(), new core$1.SkipSelf(), TdDataTableService]],
        useFactory: DATA_TABLE_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DATA_TABLE = [
        TdDataTableComponent,
        TdDataTableTemplateDirective,
        TdDataTableColumnComponent,
        TdDataTableCellComponent,
        TdDataTableRowComponent,
        TdDataTableColumnRowComponent,
        TdDataTableTableComponent,
    ];
    var CovalentDataTableModule = /** @class */ (function () {
        function CovalentDataTableModule() {
        }
        CovalentDataTableModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            checkbox.MatCheckboxModule,
                            tooltip.MatTooltipModule,
                            icon.MatIconModule,
                            core.MatPseudoCheckboxModule,
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
        return CovalentDataTableModule;
    }());

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

    exports.CovalentDataTableModule = CovalentDataTableModule;
    exports.TdDataTableSortingOrder = TdDataTableSortingOrder;
    exports.TdDataTableBase = TdDataTableBase;
    exports._TdDataTableMixinBase = _TdDataTableMixinBase;
    exports.TdDataTableComponent = TdDataTableComponent;
    exports.TdDataTableCellComponent = TdDataTableCellComponent;
    exports.TdDataTableColumnComponent = TdDataTableColumnComponent;
    exports.TdDataTableColumnRowComponent = TdDataTableColumnRowComponent;
    exports.TdDataTableRowComponent = TdDataTableRowComponent;
    exports.TdDataTableTableComponent = TdDataTableTableComponent;
    exports.TdDataTableTemplateDirective = TdDataTableTemplateDirective;
    exports.DATA_TABLE_PROVIDER_FACTORY = DATA_TABLE_PROVIDER_FACTORY;
    exports.TdDataTableService = TdDataTableService;
    exports.DATA_TABLE_PROVIDER = DATA_TABLE_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-data-table.umd.js.map