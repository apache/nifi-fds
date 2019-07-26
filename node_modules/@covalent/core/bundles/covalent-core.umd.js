(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/chips'), require('@angular/material/autocomplete'), require('@angular/material/checkbox'), require('@angular/material/dialog'), require('@angular/material/tooltip'), require('@angular/material/toolbar'), require('@angular/material/card'), require('@angular/material/sidenav'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/cdk/overlay'), require('@angular/material/menu'), require('@angular/material/divider'), require('@angular/material/button'), require('@angular/material/input'), require('@angular/animations'), require('@angular/material/icon'), require('@angular/material/core'), require('@angular/cdk/bidi'), require('@angular/cdk/keycodes'), require('@angular/cdk/scrolling'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/tabs'), require('@angular/forms'), require('@angular/cdk/coercion'), require('@angular/core'), require('@angular/cdk/portal'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core', ['exports', '@angular/material/chips', '@angular/material/autocomplete', '@angular/material/checkbox', '@angular/material/dialog', '@angular/material/tooltip', '@angular/material/toolbar', '@angular/material/card', '@angular/material/sidenav', '@angular/router', '@angular/platform-browser', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/cdk/overlay', '@angular/material/menu', '@angular/material/divider', '@angular/material/button', '@angular/material/input', '@angular/animations', '@angular/material/icon', '@angular/material/core', '@angular/cdk/bidi', '@angular/cdk/keycodes', '@angular/cdk/scrolling', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/material/tabs', '@angular/forms', '@angular/cdk/coercion', '@angular/core', '@angular/cdk/portal', '@covalent/core/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = {}),global.ng.material.chips,global.ng.material.autocomplete,global.ng.material.checkbox,global.ng.material.dialog,global.ng.material.tooltip,global.ng.material.toolbar,global.ng.material.card,global.ng.material.sidenav,global.ng.router,global.ng.platformBrowser,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.cdk.overlay,global.ng.material.menu,global.ng.material.divider,global.ng.material.button,global.ng.material.input,global.ng.animations,global.ng.material.icon,global.ng.material.core,global.ng.cdk.bidi,global.ng.cdk.keycodes,global.ng.cdk.scrolling,global.rxjs,global.rxjs.operators,global.ng.common,global.ng.material.tabs,global.ng.forms,global.ng.cdk.coercion,global.ng.core,global.ng.cdk.portal,global.covalent.core.common));
}(this, (function (exports,chips,autocomplete,checkbox,dialog,tooltip,toolbar,card,sidenav,router,platformBrowser,progressBar,progressSpinner,overlay,menu,divider,button,input,animations,icon,core,bidi,keycodes,scrolling,rxjs,operators,common,tabs,forms,coercion,core$1,portal,common$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdPagingBarComponent = /** @class */ (function () {
        function TdPagingBarComponent(_dir, _changeDetectorRef) {
            this._dir = _dir;
            this._changeDetectorRef = _changeDetectorRef;
            this._pageSize = 50;
            this._total = 0;
            this._page = 1;
            this._fromRow = 1;
            this._toRow = 1;
            this._initialized = false;
            this._pageLinks = [];
            this._pageLinkCount = 0;
            // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
            this._hitEnd = false;
            // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
            this._hitStart = false;
            /**
             * firstLast?: boolean
             * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
             */
            this.firstLast = true;
            /**
             * initialPage?: number
             * Sets starting page for the paging bar. Defaults to '1'
             */
            this.initialPage = 1;
            /**
             * change?: function
             * Method to be executed when page size changes or any button is clicked in the paging bar.
             * Emits an [IPageChangeEvent] implemented object.
             */
            this.onChange = new core$1.EventEmitter();
        }
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
            get: /**
             * @return {?}
             */ function () {
                return this._pageLinkCount;
            },
            /**
             * pageLinkCount?: number
             * Amount of page navigation links for the paging bar. Defaults to '0'
             */
            set: /**
             * pageLinkCount?: number
             * Amount of page navigation links for the paging bar. Defaults to '0'
             * @param {?} pageLinkCount
             * @return {?}
             */ function (pageLinkCount) {
                this._pageLinkCount = coercion.coerceNumberProperty(pageLinkCount);
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
            get: /**
             * @return {?}
             */ function () {
                return this._pageSize;
            },
            /**
             * pageSize?: number
             * Selected page size for the pagination. Defaults 50.
             */
            set: /**
             * pageSize?: number
             * Selected page size for the pagination. Defaults 50.
             * @param {?} pageSize
             * @return {?}
             */ function (pageSize) {
                this._pageSize = coercion.coerceNumberProperty(pageSize);
                this._page = 1;
                if (this._initialized) {
                    this._handleOnChange();
                }
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "total", {
            get: /**
             * @return {?}
             */ function () {
                return this._total;
            },
            /**
             * total: number
             * Total rows for the pagination.
             */
            set: /**
             * total: number
             * Total rows for the pagination.
             * @param {?} total
             * @return {?}
             */ function (total) {
                this._total = coercion.coerceNumberProperty(total);
                this._calculateRows();
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinks", {
            /**
             * pageLinks: number[]
             * Returns the pageLinks in an array
             */
            get: /**
             * pageLinks: number[]
             * Returns the pageLinks in an array
             * @return {?}
             */ function () {
                return this._pageLinks;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "range", {
            /**
             * range: string
             * Returns the range of the rows.
             */
            get: /**
             * range: string
             * Returns the range of the rows.
             * @return {?}
             */ function () {
                return (!this._toRow ? 0 : this._fromRow) + "-" + this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "page", {
            /**
             * page: number
             * Returns the current page.
             */
            get: /**
             * page: number
             * Returns the current page.
             * @return {?}
             */ function () {
                return this._page;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "maxPage", {
            /**
             * page: number
             * Returns the max page for the current pageSize and total.
             */
            get: /**
             * page: number
             * Returns the max page for the current pageSize and total.
             * @return {?}
             */ function () {
                return Math.ceil(this._total / this._pageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */ function () {
                if (this._dir) {
                    return this._dir.dir === 'rtl';
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._page = coercion.coerceNumberProperty(this.initialPage);
                this._calculateRows();
                this._calculatePageLinks();
                this._initialized = true;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         * @param {?} page
         * @return {?}
         */
        TdPagingBarComponent.prototype.navigateToPage = /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         * @param {?} page
         * @return {?}
         */
            function (page) {
                if (page === 1 || (page >= 1 && page <= this.maxPage)) {
                    this._page = coercion.coerceNumberProperty(Math.floor(page));
                    this._handleOnChange();
                    return true;
                }
                return false;
            };
        /**
         * firstPage?: function
         * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * firstPage?: function
         * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.firstPage = /**
         * firstPage?: function
         * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
            function () {
                return this.navigateToPage(1);
            };
        /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.prevPage = /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
            function () {
                return this.navigateToPage(this._page - 1);
            };
        /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.nextPage = /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
            function () {
                return this.navigateToPage(this._page + 1);
            };
        /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         */
        /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.lastPage = /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
            function () {
                return this.navigateToPage(this.maxPage);
            };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.isMinPage = /**
         * @return {?}
         */
            function () {
                return this._page <= 1;
            };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.isMaxPage = /**
         * @return {?}
         */
            function () {
                return this._page >= this.maxPage;
            };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype._calculateRows = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var top = (this._pageSize * this._page);
                this._fromRow = (this._pageSize * (this._page - 1)) + 1;
                this._toRow = this._total > top ? top : this._total;
            };
        /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         */
        /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         * @return {?}
         */
        TdPagingBarComponent.prototype._calculatePageLinks = /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         * @return {?}
         */
            function () {
                // special case when 2 pageLinks, detect when hit end of pages so can lead in correct direction
                if (this.isMaxPage()) {
                    this._hitEnd = true;
                    this._hitStart = false;
                }
                // special case when 2 pageLinks, detect when hit start of pages so can lead in correct direction
                if (this.isMinPage()) {
                    this._hitEnd = false;
                    this._hitStart = true;
                }
                // If the pageLinkCount goes above max possible pages based on perpage setting then reset it to maxPage
                /** @type {?} */
                var actualPageLinkCount = this.pageLinkCount;
                if (this.pageLinkCount > this.maxPage) {
                    actualPageLinkCount = this.maxPage;
                }
                // reset the pageLinks array
                this._pageLinks = [];
                // fill in the array with the pageLinks based on the current selected page
                /** @type {?} */
                var middlePageLinks = Math.floor(actualPageLinkCount / 2);
                for (var x = 0; x < actualPageLinkCount; x++) {
                    // don't go past the maxPage in the pageLinks
                    // have to handle even and odd pageLinkCounts differently so can still lead to the next numbers
                    if ((actualPageLinkCount % 2 === 0 && (this.page + middlePageLinks > this.maxPage)) ||
                        (actualPageLinkCount % 2 !== 0 && (this.page + middlePageLinks >= this.maxPage))) {
                        this._pageLinks[x] = this.maxPage - (actualPageLinkCount - (x + 1));
                        // if the selected page is after the middle then set that page as middle and get the correct balance on left and right
                        // special handling when there are only 2 pageLinks to just drop to next if block so can lead to next numbers when moving to right
                        // when moving to the left then go into this block
                    }
                    else if ((actualPageLinkCount > 2 || actualPageLinkCount <= 2 && this._hitEnd) && (this.page - middlePageLinks) > 0) {
                        this._pageLinks[x] = (this.page - middlePageLinks) + x;
                        // if the selected page is before the middle then set the pages based on the x index leading up to and after selected page
                    }
                    else if ((this.page - middlePageLinks) <= 0) {
                        this._pageLinks[x] = x + 1;
                        // other wise just set the array in order starting from the selected page
                    }
                    else {
                        this._pageLinks[x] = this.page + x;
                    }
                }
            };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype._handleOnChange = /**
         * @return {?}
         */
            function () {
                this._calculateRows();
                this._calculatePageLinks();
                /** @type {?} */
                var event = {
                    page: this._page,
                    maxPage: this.maxPage,
                    pageSize: this._pageSize,
                    total: this._total,
                    fromRow: this._fromRow,
                    toRow: this._toRow,
                };
                this._changeDetectorRef.markForCheck();
                this.onChange.emit(event);
            };
        TdPagingBarComponent.decorators = [
            { type: core$1.Component, args: [{
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        selector: 'td-paging-bar',
                        template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" >\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\">\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\">\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>",
                        styles: [":host{display:block}:host .td-paging-bar{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
                    }] }
        ];
        /** @nocollapse */
        TdPagingBarComponent.ctorParameters = function () {
            return [
                { type: bidi.Dir, decorators: [{ type: core$1.Optional }] },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdPagingBarComponent.propDecorators = {
            firstLast: [{ type: core$1.Input, args: ['firstLast',] }],
            initialPage: [{ type: core$1.Input, args: ['initialPage',] }],
            pageLinkCount: [{ type: core$1.Input, args: ['pageLinkCount',] }],
            pageSize: [{ type: core$1.Input, args: ['pageSize',] }],
            total: [{ type: core$1.Input, args: ['total',] }],
            onChange: [{ type: core$1.Output, args: ['change',] }]
        };
        return TdPagingBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentPagingModule = /** @class */ (function () {
        function CovalentPagingModule() {
        }
        CovalentPagingModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                        ],
                        declarations: [
                            TdPagingBarComponent,
                        ],
                        exports: [
                            TdPagingBarComponent,
                        ],
                    },] }
        ];
        return CovalentPagingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdVirtualScrollRowDirective = /** @class */ (function (_super) {
        __extends(TdVirtualScrollRowDirective, _super);
        function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdVirtualScrollRowDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: '[tdVirtualScrollRow]' },] }
        ];
        /** @nocollapse */
        TdVirtualScrollRowDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdVirtualScrollRowDirective;
    }(portal.TemplatePortalDirective));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_VIRTUAL_OFFSET = 2;
    /** @type {?} */
    var SCROLL_DEBOUNCE = 200;
    var TdVirtualScrollContainerComponent = /** @class */ (function () {
        function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._domSanitizer = _domSanitizer;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._subs = [];
            this._bottom = new rxjs.Subject();
            this._initialized = false;
            this._totalHeight = 0;
            this._hostHeight = 0;
            this._scrollVerticalOffset = 0;
            this._fromRow = 0;
            this._toRow = 0;
            /**
             * bottom: function
             * Method to be executed when user scrolled to the last item of the list.
             * An [ITdVirtualScrollBottomEvent] event is emitted
             */
            this.bottom = new core$1.EventEmitter();
            /**
             * trackBy?: TrackByFunction
             * This accepts the same trackBy function [ngFor] does.
             * https://angular.io/api/core/TrackByFunction
             */
            this.trackBy = function (index, item) {
                return item;
            };
        }
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            /**
             * data: any[]
             * List of items to virtually iterate on.
             */
            set: /**
             * data: any[]
             * List of items to virtually iterate on.
             * @param {?} data
             * @return {?}
             */ function (data) {
                this._data = data;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "virtualData", {
            get: /**
             * @return {?}
             */ function () {
                return this._virtualData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
            get: /**
             * @return {?}
             */ function () {
                if (this._rows && this._rows.toArray()[0]) {
                    return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
            get: /**
             * @return {?}
             */ function () {
                return this._totalHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
            get: /**
             * @return {?}
             */ function () {
                return this._fromRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
            get: /**
             * @return {?}
             */ function () {
                return this._toRow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
            get: /**
             * @return {?}
             */ function () {
                return this._offsetTransform;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subs.push(this._rows.changes.subscribe(function () {
                    _this._calculateVirtualRows();
                }));
                this._initialized = true;
                this._calculateVirtualRows();
                this._subs.push(this._bottom.pipe(operators.debounceTime(SCROLL_DEBOUNCE)).subscribe(function () {
                    _this.bottom.emit({
                        lastRow: _this._data[_this._data.length - 1],
                        lastIndex: _this.toRow,
                    });
                }));
            };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
                if (this._hostHeight !== newHostHeight) {
                    this._hostHeight = newHostHeight;
                    if (this._initialized) {
                        this._calculateVirtualRows();
                    }
                }
            };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._subs) {
                    this._subs.forEach(function (sub) {
                        sub.unsubscribe();
                    });
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.handleScroll = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var element = (( /** @type {?} */(event.target)));
                if (element) {
                    /** @type {?} */
                    var verticalScroll = element.scrollTop;
                    if (this._scrollVerticalOffset !== verticalScroll) {
                        this._scrollVerticalOffset = verticalScroll;
                        if (this._initialized) {
                            this._calculateVirtualRows();
                        }
                    }
                    if (this._initialized) {
                        // check to see if bottom was hit to throw the bottom event
                        if ((this._data.length * this.rowHeight) - (verticalScroll + this._hostHeight) === 0) {
                            this._bottom.next();
                        }
                    }
                }
            };
        /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         */
        /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.refresh = /**
         * Method to refresh and recalculate the virtual rows
         * e.g. after changing the [data] content
         * @return {?}
         */
            function () {
                this._calculateVirtualRows();
            };
        /**
         * Method to scroll to a specific row of the list.
         */
        /**
         * Method to scroll to a specific row of the list.
         * @param {?} row
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollTo = /**
         * Method to scroll to a specific row of the list.
         * @param {?} row
         * @return {?}
         */
            function (row) {
                this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Method to scroll to the start of the list.
         */
        /**
         * Method to scroll to the start of the list.
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollToStart = /**
         * Method to scroll to the start of the list.
         * @return {?}
         */
            function () {
                this.scrollTo(0);
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Method to scroll to the end of the list.
         */
        /**
         * Method to scroll to the end of the list.
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype.scrollToEnd = /**
         * Method to scroll to the end of the list.
         * @return {?}
         */
            function () {
                this.scrollTo(this.totalHeight / this.rowHeight);
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._data) {
                    this._totalHeight = this._data.length * this.rowHeight;
                    /** @type {?} */
                    var fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
                    this._fromRow = fromRow > 0 ? fromRow : 0;
                    /** @type {?} */
                    var range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
                    /** @type {?} */
                    var toRow = range + this.fromRow;
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
                if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
                    offset = this.fromRow * this.rowHeight;
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
        TdVirtualScrollContainerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-virtual-scroll-container',
                        template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;height:100%;width:100%;overflow:auto;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        TdVirtualScrollContainerComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: platformBrowser.DomSanitizer },
                { type: core$1.Renderer2 },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdVirtualScrollContainerComponent.propDecorators = {
            data: [{ type: core$1.Input, args: ['data',] }],
            bottom: [{ type: core$1.Output }],
            _rows: [{ type: core$1.ViewChildren, args: ['rowElement',] }],
            _rowTemplate: [{ type: core$1.ContentChild, args: [TdVirtualScrollRowDirective,] }],
            trackBy: [{ type: core$1.Input, args: ['trackBy',] }],
            handleScroll: [{ type: core$1.HostListener, args: ['scroll', ['$event'],] }]
        };
        return TdVirtualScrollContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_VIRTUAL_SCROLL = [
        TdVirtualScrollRowDirective,
        TdVirtualScrollContainerComponent,
    ];
    var CovalentVirtualScrollModule = /** @class */ (function () {
        function CovalentVirtualScrollModule() {
        }
        CovalentVirtualScrollModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TD_VIRTUAL_SCROLL,
                        ],
                        exports: [
                            TD_VIRTUAL_SCROLL,
                        ],
                    },] }
        ];
        return CovalentVirtualScrollModule;
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
    /** @enum {string} */
    var TdNotificationCountPositionY = {
        Top: 'top',
        Bottom: 'bottom',
        Center: 'center',
    };
    /** @enum {string} */
    var TdNotificationCountPositionX = {
        Before: 'before',
        After: 'after',
        Center: 'center',
    };
    /** @type {?} */
    var DEFAULT_NOTIFICATION_LIMIT = 99;
    var TdNotificationCountComponent = /** @class */ (function () {
        function TdNotificationCountComponent() {
            this._notifications = 0;
            this._limit = DEFAULT_NOTIFICATION_LIMIT;
            /**
             * color?: "primary" | "accent" | "warn"
             * Sets the theme color of the notification tip. Defaults to "warn"
             */
            this.color = 'warn';
        }
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
            get: /**
             * @return {?}
             */ function () {
                return this._positionX;
            },
            /**
             * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
             * Sets the X position of the notification tip.
             * Defaults to "after" if it has content, else 'center'.
             */
            set: /**
             * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
             * Sets the X position of the notification tip.
             * Defaults to "after" if it has content, else 'center'.
             * @param {?} positionX
             * @return {?}
             */ function (positionX) {
                this._positionX = positionX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
            get: /**
             * @return {?}
             */ function () {
                return this._positionY;
            },
            /**
             * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
             * Sets the Y position of the notification tip.
             * Defaults to "top" if it has content, else 'center'.
             */
            set: /**
             * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
             * Sets the Y position of the notification tip.
             * Defaults to "top" if it has content, else 'center'.
             * @param {?} positionY
             * @return {?}
             */ function (positionY) {
                this._positionY = positionY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
            /**
             * notifications?: number | boolean
             * Number for the notification count. Shows component only if the input is a positive number or 'true'
             */
            set: /**
             * notifications?: number | boolean
             * Number for the notification count. Shows component only if the input is a positive number or 'true'
             * @param {?} notifications
             * @return {?}
             */ function (notifications) {
                this._notifications = notifications;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "limit", {
            /**
             * limit?: number
             * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
             */
            set: /**
             * limit?: number
             * Limit for notification count. If the number of notifications is greater than limit, then + will be added. Defaults to 99.
             * @param {?} limit
             * @return {?}
             */ function (limit) {
                this._limit = limit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
            get: /**
             * @return {?}
             */ function () {
                return !this.show && !this._hasContent();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
            /**
             * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
             * Makes the notification tip show without a count.
             */
            get: /**
             * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
             * Makes the notification tip show without a count.
             * @return {?}
             */ function () {
                return this._notifications === true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
            /**
             * Notification display string when a count is available.
             * Anything over 99 gets set as 99+
             */
            get: /**
             * Notification display string when a count is available.
             * Anything over 99 gets set as 99+
             * @return {?}
             */ function () {
                if (this._notifications > this._limit) {
                    return this._limit + "+";
                }
                return this._notifications.toString();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
            /**
             * Shows notification tip only when [notifications] is true or a positive integer.
             */
            get: /**
             * Shows notification tip only when [notifications] is true or a positive integer.
             * @return {?}
             */ function () {
                return this._notifications === true || (!isNaN(( /** @type {?} */(this._notifications))) && this._notifications > 0);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         */
        /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         * @return {?}
         */
        TdNotificationCountComponent.prototype.ngAfterContentInit = /**
         * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
         * @return {?}
         */
            function () {
                if (!this._positionX) {
                    this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
                }
                if (!this._positionY) {
                    this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
                }
            };
        /**
         * Method to check if element has any kind of content (elements or text)
         */
        /**
         * Method to check if element has any kind of content (elements or text)
         * @return {?}
         */
        TdNotificationCountComponent.prototype._hasContent = /**
         * Method to check if element has any kind of content (elements or text)
         * @return {?}
         */
            function () {
                if (this.content) {
                    /** @type {?} */
                    var contentElement = this.content.nativeElement;
                    return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
                }
                return false;
            };
        TdNotificationCountComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-notification-count',
                        template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"show\"\n     class=\"td-notification-count mat-{{color}}\"\n     [class.td-notification-top]=\"positionY === 'top'\"\n     [class.td-notification-bottom]=\"positionY === 'bottom'\"\n     [class.td-notification-before]=\"positionX === 'before'\"\n     [class.td-notification-after]=\"positionX === 'after'\"\n     [class.td-notification-center-y]=\"positionY === 'center'\"\n     [class.td-notification-center-x]=\"positionX === 'center'\"\n     [class.td-notification-no-count]=\"noCount\">\n  {{noCount ? '' : notificationsDisplay}}\n</div>",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{position:relative;display:block;text-align:center;min-width:40px;height:40px}:host.td-notification-hidden{min-width:0}.td-notification-count{line-height:21px;width:20px;height:20px;position:absolute;font-size:10px;font-weight:600;border-radius:50%;z-index:1}.td-notification-count.td-notification-center-x{margin-left:auto;margin-right:auto;left:0;right:0}.td-notification-count.td-notification-center-y{margin-top:auto;margin-bottom:auto;top:0;bottom:0}.td-notification-count.td-notification-top{top:0}.td-notification-count.td-notification-bottom{bottom:0}.td-notification-count.td-notification-before{left:0}.td-notification-count.td-notification-after{right:0}.td-notification-count.td-notification-no-count{width:8px;height:8px}.td-notification-count.td-notification-no-count.td-notification-top{top:8px}.td-notification-count.td-notification-no-count.td-notification-bottom{bottom:8px}.td-notification-count.td-notification-no-count.td-notification-before{left:8px}.td-notification-count.td-notification-no-count.td-notification-after{right:8px}::ng-deep [dir=rtl] .td-notification-count.td-notification-before{right:0;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-after{left:0;right:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-before{right:8px;left:auto}::ng-deep [dir=rtl] .td-notification-count.td-notification-no-count.td-notification-after{left:8px;right:auto}.td-notification-content,.td-notification-content ::ng-deep>*{line-height:40px}"]
                    }] }
        ];
        TdNotificationCountComponent.propDecorators = {
            content: [{ type: core$1.ViewChild, args: ['content',] }],
            color: [{ type: core$1.Input }],
            positionX: [{ type: core$1.Input }],
            positionY: [{ type: core$1.Input }],
            notifications: [{ type: core$1.Input }],
            limit: [{ type: core$1.Input }],
            hideHost: [{ type: core$1.HostBinding, args: ['class.td-notification-hidden',] }]
        };
        return TdNotificationCountComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_NOTIFICATIONS = [
        TdNotificationCountComponent,
    ];
    var CovalentNotificationsModule = /** @class */ (function () {
        function CovalentNotificationsModule() {
        }
        CovalentNotificationsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TD_NOTIFICATIONS,
                        ],
                        exports: [
                            TD_NOTIFICATIONS,
                        ],
                    },] }
        ];
        return CovalentNotificationsModule;
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
    var TdAutoTrimDirective = /** @class */ (function () {
        function TdAutoTrimDirective(_model) {
            this._model = _model;
        }
        /**
         * Listens to host's (blur) event and trims value.
         */
        /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
        TdAutoTrimDirective.prototype.onBlur = /**
         * Listens to host's (blur) event and trims value.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._model && this._model.value && typeof (this._model.value) === 'string') {
                    this._model.update.emit(this._model.value.trim());
                }
            };
        TdAutoTrimDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdAutoTrim]',
                    },] }
        ];
        /** @nocollapse */
        TdAutoTrimDirective.ctorParameters = function () {
            return [
                { type: forms.NgModel, decorators: [{ type: core$1.Optional }, { type: core$1.Host }] }
            ];
        };
        TdAutoTrimDirective.propDecorators = {
            onBlur: [{ type: core$1.HostListener, args: ['blur', ['$event'],] }]
        };
        return TdAutoTrimDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFullscreenDirective = /** @class */ (function () {
        function TdFullscreenDirective(_document, _el) {
            this._document = _document;
            this._el = _el;
            this.fullScreenIsActive = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdFullscreenDirective.prototype.fsChangeHandler = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.fullScreenIsActive = event.srcElement === this._getFullScreenElement();
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.toggleFullScreen = /**
         * @return {?}
         */
            function () {
                this._getFullScreenElement() === this._el.nativeElement ? this.exitFullScreen() : this.enterFullScreen();
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.enterFullScreen = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                var nativeElement = this._el.nativeElement;
                /** @type {?} */
                var enterFullScreenMap = {
                    requestFullscreen: function () { return nativeElement.requestFullscreen(); },
                    // Chrome
                    webkitRequestFullscreen: function () { return nativeElement.webkitRequestFullscreen(); },
                    // Safari 
                    mozRequestFullScreen: function () { return nativeElement.mozRequestFullScreen(); },
                    // Firefox
                    msRequestFullscreen: function () { return nativeElement.msRequestFullscreen(); },
                };
                try {
                    for (var _b = __values(Object.keys(enterFullScreenMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var handler = _c.value;
                        if (nativeElement[handler]) {
                            enterFullScreenMap[handler]();
                        }
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
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype.exitFullScreen = /**
         * @return {?}
         */
            function () {
                var e_2, _a;
                var _b = this, _document = _b._document, nativeElement = _b._el.nativeElement;
                /** @type {?} */
                var exitFullScreenMap = {
                    exitFullscreen: function () { return _document.exitFullscreen(); },
                    // Chrome
                    webkitExitFullscreen: function () { return _document.webkitExitFullscreen(); },
                    // Safari
                    mozCancelFullScreen: function () { return _document.mozCancelFullScreen(); },
                    // Firefox
                    msExitFullscreen: function () { return _document.msExitFullscreen(); },
                };
                try {
                    for (var _c = __values(Object.keys(exitFullScreenMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var handler = _d.value;
                        if (_document[handler] && this._getFullScreenElement() === nativeElement) {
                            exitFullScreenMap[handler]();
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return))
                            _a.call(_c);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        TdFullscreenDirective.prototype._getFullScreenElement = /**
         * @return {?}
         */
            function () {
                var e_3, _a;
                var _document = this._document;
                /** @type {?} */
                var tdFullScreenElementMap = {
                    fullscreenElement: function () { return _document.fullscreenElement; },
                    // Chrome, Opera
                    webkitFullscreenElement: function () { return _document.webkitFullscreenElement; },
                    // Safari
                    mozFullscreenElement: function () { return _document.mozFullscreenElement; },
                    // Firefox
                    msFullscreenElement: function () { return _document.msFullscreenElement; },
                };
                try {
                    for (var _b = __values(Object.keys(tdFullScreenElementMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var props = _c.value;
                        if (_document[props]) {
                            return _document[props];
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
            };
        TdFullscreenDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdFullScreen]',
                        exportAs: 'tdFullScreen',
                    },] }
        ];
        /** @nocollapse */
        TdFullscreenDirective.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core$1.Inject, args: [common.DOCUMENT,] }] },
                { type: core$1.ElementRef }
            ];
        };
        TdFullscreenDirective.propDecorators = {
            fsChangeHandler: [{ type: core$1.HostListener, args: ['document:fullscreenchange', ['$event'],] }, { type: core$1.HostListener, args: ['document:webkitfullscreenchange', ['$event'],] }, { type: core$1.HostListener, args: ['document:mozfullscreenchange', ['$event'],] }, { type: core$1.HostListener, args: ['document:msfullscreenchange', ['$event'],] }]
        };
        return TdFullscreenDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeAgoPipe = /** @class */ (function () {
        function TdTimeAgoPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeAgoPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
            function (time, reference) {
                // Convert time to date object if not already
                time = new Date(time);
                /** @type {?} */
                var ref = new Date(reference);
                // If not a valid timestamp, return 'Invalid Date'
                if (!time.getTime()) {
                    return 'Invalid Date';
                }
                // For unit testing, we need to be able to declare a static start time
                // for calculations, or else speed of tests can bork.
                /** @type {?} */
                var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
                /** @type {?} */
                var diff = Math.floor((startTime - time.getTime()) / 1000);
                if (diff < 2) {
                    return '1 second ago';
                }
                if (diff < 60) {
                    return Math.floor(diff) + ' seconds ago';
                }
                // Minutes
                diff = diff / 60;
                if (diff < 2) {
                    return '1 minute ago';
                }
                if (diff < 60) {
                    return Math.floor(diff) + ' minutes ago';
                }
                // Hours
                diff = diff / 60;
                if (diff < 2) {
                    return '1 hour ago';
                }
                if (diff < 24) {
                    return Math.floor(diff) + ' hours ago';
                }
                // Days
                diff = diff / 24;
                if (diff < 2) {
                    return '1 day ago';
                }
                if (diff < 30) {
                    return Math.floor(diff) + ' days ago';
                }
                // Months
                diff = diff / 30;
                if (diff < 2) {
                    return '1 month ago';
                }
                if (diff < 12) {
                    return Math.floor(diff) + ' months ago';
                }
                // Years
                diff = diff / 12;
                if (diff < 2) {
                    return '1 year ago';
                }
                else {
                    return Math.floor(diff) + ' years ago';
                }
            };
        TdTimeAgoPipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'timeAgo',
                    },] }
        ];
        return TdTimeAgoPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeDifferencePipe = /** @class */ (function () {
        function TdTimeDifferencePipe() {
        }
        /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
        TdTimeDifferencePipe.prototype.transform = /**
         * @param {?} start
         * @param {?=} end
         * @return {?}
         */
            function (start, end) {
                /** @type {?} */
                var startTime = new Date(start);
                /** @type {?} */
                var endTime;
                if (end !== undefined) {
                    endTime = new Date(end);
                }
                else {
                    endTime = new Date();
                }
                if (!startTime.getTime() || !endTime.getTime()) {
                    return 'Invalid Date';
                }
                /** @type {?} */
                var diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
                /** @type {?} */
                var days = Math.floor(diff / (60 * 60 * 24));
                diff = diff - (days * (60 * 60 * 24));
                /** @type {?} */
                var hours = Math.floor(diff / (60 * 60));
                diff = diff - (hours * (60 * 60));
                /** @type {?} */
                var minutes = Math.floor(diff / (60));
                diff -= minutes * (60);
                /** @type {?} */
                var seconds = diff;
                /** @type {?} */
                var pad = '00';
                /** @type {?} */
                var daysFormatted = '';
                if (days > 0 && days < 2) {
                    daysFormatted = ' day - ';
                }
                else if (days > 1) {
                    daysFormatted = ' days - ';
                }
                return (days > 0 ? days + daysFormatted : daysFormatted) +
                    pad.substring(0, pad.length - (hours + '').length) + hours + ':' +
                    pad.substring(0, pad.length - (minutes + '').length) + minutes + ':' +
                    pad.substring(0, pad.length - (seconds + '').length) + seconds;
            };
        TdTimeDifferencePipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'timeDifference',
                    },] }
        ];
        return TdTimeDifferencePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTimeUntilPipe = /** @class */ (function () {
        function TdTimeUntilPipe() {
        }
        /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
        TdTimeUntilPipe.prototype.transform = /**
         * @param {?} time
         * @param {?=} reference
         * @return {?}
         */
            function (time, reference) {
                // Convert time to date object if not already
                time = new Date(time);
                /** @type {?} */
                var ref = new Date(reference);
                // If not a valid timestamp, return 'Invalid Date'
                if (!time.getTime()) {
                    return 'Invalid Date';
                }
                // For unit testing, we need to be able to declare a static start time
                // for calculations, or else speed of tests can bork.
                /** @type {?} */
                var startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
                /** @type {?} */
                var diff = Math.floor((time.getTime() - startTime) / 1000);
                if (diff < 2) {
                    return 'in 1 second';
                }
                if (diff < 60) {
                    return 'in ' + Math.floor(diff) + ' seconds';
                }
                // Minutes
                diff = diff / 60;
                if (diff < 2) {
                    return 'in 1 minute';
                }
                if (diff < 60) {
                    return 'in ' + Math.floor(diff) + ' minutes';
                }
                // Hours
                diff = diff / 60;
                if (diff < 2) {
                    return 'in 1 hour';
                }
                if (diff < 24) {
                    return 'in ' + Math.floor(diff) + ' hours';
                }
                // Days
                diff = diff / 24;
                if (diff < 2) {
                    return 'in 1 day';
                }
                if (diff < 30) {
                    return 'in ' + Math.floor(diff) + ' days';
                }
                // Months
                diff = diff / 30;
                if (diff < 2) {
                    return 'in 1 month';
                }
                if (diff < 12) {
                    return 'in ' + Math.floor(diff) + ' months';
                }
                // Years
                diff = diff / 12;
                if (diff < 2) {
                    return 'in 1 year';
                }
                else {
                    return 'in ' + Math.floor(diff) + ' years';
                }
            };
        TdTimeUntilPipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'timeUntil',
                    },] }
        ];
        return TdTimeUntilPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBytesPipe = /** @class */ (function () {
        function TdBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
            /**
             * @param {?} bytes
             * @param {?=} precision
             * @return {?}
             */
            function (bytes, precision) {
                if (precision === void 0) {
                    precision = 2;
                }
                if (bytes === 0) {
                    return '0 B';
                }
                else if (isNaN(parseInt(bytes, 10))) {
                    /* If not a valid number, return 'Invalid Number' */
                    return 'Invalid Number';
                }
                /** @type {?} */
                var k = 1024;
                /** @type {?} */
                var sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
                /** @type {?} */
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                // if less than 1
                if (i < 0) {
                    return 'Invalid Number';
                }
                return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
            };
        TdBytesPipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'bytes',
                    },] }
        ];
        return TdBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDecimalBytesPipe = /** @class */ (function () {
        function TdDecimalBytesPipe() {
        }
        /* `bytes` needs to be `any` or TypeScript complains
        Tried both `number` and `number | string` */
        /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
        /**
         * @param {?} bytes
         * @param {?=} precision
         * @return {?}
         */
        TdDecimalBytesPipe.prototype.transform = /* `bytes` needs to be `any` or TypeScript complains
          Tried both `number` and `number | string` */
            /**
             * @param {?} bytes
             * @param {?=} precision
             * @return {?}
             */
            function (bytes, precision) {
                if (precision === void 0) {
                    precision = 2;
                }
                if (bytes === 0) {
                    return '0 B';
                }
                else if (isNaN(parseInt(bytes, 10))) {
                    /* If not a valid number, return 'Invalid Number' */
                    return 'Invalid Number';
                }
                /** @type {?} */
                var k = 1000;
                /** @type {?} */
                var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                /** @type {?} */
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                // if less than 1
                if (i < 0) {
                    return 'Invalid Number';
                }
                return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
            };
        TdDecimalBytesPipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'decimalBytes',
                    },] }
        ];
        return TdDecimalBytesPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDigitsPipe = /** @class */ (function () {
        function TdDigitsPipe(_locale) {
            if (_locale === void 0) {
                _locale = 'en';
            }
            this._locale = _locale;
            this._decimalPipe = new common.DecimalPipe(this._locale);
        }
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /* `digits` needs to be type `digits: any` or TypeScript complains */
        /**
         * @param {?} digits
         * @param {?=} precision
         * @return {?}
         */
        TdDigitsPipe.prototype.transform = /* `digits` needs to be type `digits: any` or TypeScript complains */
            /**
             * @param {?} digits
             * @param {?=} precision
             * @return {?}
             */
            function (digits, precision) {
                if (precision === void 0) {
                    precision = 1;
                }
                if (digits === 0) {
                    return '0';
                }
                else if (isNaN(parseInt(digits, 10))) {
                    /* If not a valid number, return the value */
                    return digits;
                }
                else if (digits < 1) {
                    return this._decimalPipe.transform(digits.toFixed(precision));
                }
                /** @type {?} */
                var k = 1000;
                /** @type {?} */
                var sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
                /** @type {?} */
                var i = Math.floor(Math.log(digits) / Math.log(k));
                /** @type {?} */
                var size = sizes[i];
                return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
            };
        TdDigitsPipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'digits',
                    },] }
        ];
        /** @nocollapse */
        TdDigitsPipe.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: core$1.Inject, args: [core$1.LOCALE_ID,] }] }
            ];
        };
        return TdDigitsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTruncatePipe = /** @class */ (function () {
        function TdTruncatePipe() {
        }
        /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
        TdTruncatePipe.prototype.transform = /**
         * @param {?} text
         * @param {?} length
         * @return {?}
         */
            function (text, length) {
                if (typeof text !== 'string') {
                    return '';
                }
                // Truncate
                /** @type {?} */
                var truncated = text.substr(0, length);
                if (text.length > length) {
                    if (truncated.lastIndexOf(' ') > 0) {
                        truncated = truncated.trim();
                    }
                    truncated += '…';
                }
                return truncated;
            };
        TdTruncatePipe.decorators = [
            { type: core$1.Pipe, args: [{
                        name: 'truncate',
                    },] }
        ];
        return TdTruncatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var RouterPathService = /** @class */ (function () {
        function RouterPathService(_router) {
            this._router = _router;
            this._router.events.pipe(operators.filter(function (e) { return e instanceof router.RoutesRecognized; }), operators.pairwise()).subscribe(function (e) {
                RouterPathService._previousRoute = e[0].urlAfterRedirects;
            });
        }
        /*
        * Utility function to get the route the user previously went to
        * good for use in a "back button"
        */
        /*
          * Utility function to get the route the user previously went to
          * good for use in a "back button"
          */
        /**
         * @return {?}
         */
        RouterPathService.prototype.getPreviousRoute = /*
          * Utility function to get the route the user previously went to
          * good for use in a "back button"
          */
            /**
             * @return {?}
             */
            function () {
                return RouterPathService._previousRoute;
            };
        RouterPathService._previousRoute = '/';
        RouterPathService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        RouterPathService.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return RouterPathService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var IconService = /** @class */ (function () {
        function IconService() {
            this._icons = [
                'access_alarm',
                'access_alarms',
                'access_time',
                'accessibility',
                'account_balance',
                'account_balance_wallet',
                'account_box',
                'account_circle',
                'add',
                'add_alarm',
                'add_box',
                'add_circle',
                'add_circle_outline',
                'add_shopping_cart',
                'add_to_photos',
                'adjust',
                'alarm',
                'alarm_add',
                'alarm_off',
                'alarm_on',
                'album',
                'android',
                'announcement',
                'apps',
                'archive',
                'arrow_back',
                'arrow_drop_down',
                'arrow_drop_down_circle',
                'arrow_drop_up',
                'arrow_forward',
                'aspect_ratio',
                'assessment',
                'assignment',
                'assignment_ind',
                'assignment_late',
                'assignment_return',
                'assignment_returned',
                'assignment_turned_in',
                'assistant_photo',
                'attach_file',
                'attach_money',
                'attachment',
                'audiotrack',
                'autorenew',
                'av_timer',
                'backspace',
                'backup',
                'battery_alert',
                'battery_charging_full',
                'battery_full',
                'battery_std',
                'battery_unknown',
                'beenhere',
                'block',
                'bluetooth',
                'bluetooth_audio',
                'bluetooth_connected',
                'bluetooth_disabled',
                'bluetooth_searching',
                'blur_circular',
                'blur_linear',
                'blur_off',
                'blur_on',
                'book',
                'bookmark',
                'bookmark_border',
                'border_all',
                'border_bottom',
                'border_clear',
                'border_color',
                'border_horizontal',
                'border_inner',
                'border_left',
                'border_outer',
                'border_right',
                'border_style',
                'border_top',
                'border_vertical',
                'brightness_1',
                'brightness_2',
                'brightness_3',
                'brightness_4',
                'brightness_5',
                'brightness_6',
                'brightness_7',
                'brightness_auto',
                'brightness_high',
                'brightness_low',
                'brightness_medium',
                'broken_image',
                'brush',
                'bug_report',
                'build',
                'business',
                'cached',
                'cake',
                'call',
                'call_end',
                'call_made',
                'call_merge',
                'call_missed',
                'call_received',
                'call_split',
                'camera',
                'camera_alt',
                'camera_front',
                'camera_rear',
                'camera_roll',
                'cancel',
                'cast',
                'cast_connected',
                'center_focus_strong',
                'center_focus_weak',
                'chat',
                'check',
                'check_box',
                'check_box_outline_blank',
                'check_circle',
                'chevron_left',
                'chevron_right',
                'class',
                'clear',
                'clear_all',
                'close',
                'closed_caption',
                'cloud',
                'cloud_circle',
                'cloud_done',
                'cloud_download',
                'cloud_off',
                'cloud_queue',
                'cloud_upload',
                'collections',
                'collections_bookmark',
                'color_lens',
                'colorize',
                'comment',
                'compare',
                'computer',
                'confirmation_number',
                'contact_phone',
                'contacts',
                'content_copy',
                'content_cut',
                'content_paste',
                'control_point',
                'control_point_duplicate',
                'create',
                'credit_card',
                'crop',
                'crop_16_9',
                'crop_3_2',
                'crop_5_4',
                'crop_7_5',
                'crop_din',
                'crop_free',
                'crop_landscape',
                'crop_original',
                'crop_portrait',
                'crop_square',
                'dashboard',
                'data_usage',
                'dehaze',
                'delete',
                'description',
                'desktop_mac',
                'desktop_windows',
                'details',
                'developer_board',
                'developer_mode',
                'device_hub',
                'devices',
                'dialer_sip',
                'dialpad',
                'directions',
                'directions_bike',
                'directions_boat',
                'directions_bus',
                'directions_car',
                'directions_railway',
                'directions_run',
                'directions_subway',
                'directions_transit',
                'directions_walk',
                'disc_full',
                'dns',
                'do_not_disturb',
                'do_not_disturb_alt',
                'dock',
                'domain',
                'done',
                'done_all',
                'drafts',
                'drive_eta',
                'dvr',
                'edit',
                'eject',
                'email',
                'equalizer',
                'error',
                'error_outline',
                'event',
                'event_available',
                'event_busy',
                'event_note',
                'event_seat',
                'exit_to_app',
                'expand_less',
                'expand_more',
                'explicit',
                'explore',
                'exposure',
                'exposure_neg_1',
                'exposure_neg_2',
                'exposure_plus_1',
                'exposure_plus_2',
                'exposure_zero',
                'extension',
                'face',
                'fast_forward',
                'fast_rewind',
                'favorite',
                'favorite_border',
                'feedback',
                'file_download',
                'file_upload',
                'filter',
                'filter_1',
                'filter_2',
                'filter_3',
                'filter_4',
                'filter_5',
                'filter_6',
                'filter_7',
                'filter_8',
                'filter_9',
                'filter_9_plus',
                'filter_b_and_w',
                'filter_center_focus',
                'filter_drama',
                'filter_frames',
                'filter_hdr',
                'filter_list',
                'filter_none',
                'filter_tilt_shift',
                'filter_vintage',
                'find_in_page',
                'find_replace',
                'flag',
                'flare',
                'flash_auto',
                'flash_off',
                'flash_on',
                'flight',
                'flight_land',
                'flight_takeoff',
                'flip',
                'flip_to_back',
                'flip_to_front',
                'folder',
                'folder_open',
                'folder_shared',
                'folder_special',
                'font_download',
                'format_align_center',
                'format_align_justify',
                'format_align_left',
                'format_align_right',
                'format_bold',
                'format_clear',
                'format_color_fill',
                'format_color_reset',
                'format_color_text',
                'format_indent_decrease',
                'format_indent_increase',
                'format_italic',
                'format_line_spacing',
                'format_list_bulleted',
                'format_list_numbered',
                'format_paint',
                'format_quote',
                'format_size',
                'format_strikethrough',
                'format_textdirection_l_to_r',
                'format_textdirection_r_to_l',
                'format_underlined',
                'forum',
                'forward',
                'forward_10',
                'forward_30',
                'forward_5',
                'fullscreen',
                'fullscreen_exit',
                'functions',
                'gamepad',
                'games',
                'gesture',
                'get_app',
                'gif',
                'gps_fixed',
                'gps_not_fixed',
                'gps_off',
                'grade',
                'gradient',
                'grain',
                'graphic_eq',
                'grid_off',
                'grid_on',
                'group',
                'group_add',
                'group_work',
                'hd',
                'hdr_off',
                'hdr_on',
                'hdr_strong',
                'hdr_weak',
                'headset',
                'headset_mic',
                'healing',
                'hearing',
                'help',
                'help_outline',
                'high_quality',
                'highlight_off',
                'history',
                'home',
                'hotel',
                'hourglass_empty',
                'hourglass_full',
                'http',
                'https',
                'image',
                'image_aspect_ratio',
                'import_export',
                'inbox',
                'indeterminate_check_box',
                'info',
                'info_outline',
                'input',
                'insert_chart',
                'insert_comment',
                'insert_drive_file',
                'insert_emoticon',
                'insert_invitation',
                'insert_link',
                'insert_photo',
                'invert_colors',
                'invert_colors_off',
                'iso',
                'keyboard',
                'keyboard_arrow_down',
                'keyboard_arrow_left',
                'keyboard_arrow_right',
                'keyboard_arrow_up',
                'keyboard_backspace',
                'keyboard_capslock',
                'keyboard_hide',
                'keyboard_return',
                'keyboard_tab',
                'keyboard_voice',
                'label',
                'label_outline',
                'landscape',
                'language',
                'laptop',
                'laptop_chromebook',
                'laptop_mac',
                'laptop_windows',
                'launch',
                'layers',
                'layers_clear',
                'leak_add',
                'leak_remove',
                'lens',
                'library_add',
                'library_books',
                'library_music',
                'link',
                'list',
                'live_help',
                'live_tv',
                'local_activity',
                'local_airport',
                'local_atm',
                'local_bar',
                'local_cafe',
                'local_car_wash',
                'local_convenience_store',
                'local_dining',
                'local_drink',
                'local_florist',
                'local_gas_station',
                'local_grocery_store',
                'local_hospital',
                'local_hotel',
                'local_laundry_service',
                'local_library',
                'local_mall',
                'local_movies',
                'local_offer',
                'local_parking',
                'local_pharmacy',
                'local_phone',
                'local_pizza',
                'local_play',
                'local_post_office',
                'local_printshop',
                'local_see',
                'local_shipping',
                'local_taxi',
                'location_city',
                'location_disabled',
                'location_off',
                'location_on',
                'location_searching',
                'lock',
                'lock_open',
                'lock_outline',
                'looks',
                'looks_3',
                'looks_4',
                'looks_5',
                'looks_6',
                'looks_one',
                'looks_two',
                'loop',
                'loupe',
                'loyalty',
                'mail',
                'map',
                'markunread',
                'markunread_mailbox',
                'memory',
                'menu',
                'merge_type',
                'message',
                'mic',
                'mic_none',
                'mic_off',
                'mms',
                'mode_comment',
                'mode_edit',
                'money_off',
                'monochrome_photos',
                'mood',
                'mood_bad',
                'more',
                'more_horiz',
                'more_vert',
                'mouse',
                'movie',
                'movie_creation',
                'music_note',
                'my_library_add',
                'my_library_books',
                'my_library_music',
                'my_location',
                'nature',
                'nature_people',
                'navigate_before',
                'navigate_next',
                'navigation',
                'network_cell',
                'network_locked',
                'network_wifi',
                'new_releases',
                'nfc',
                'no_sim',
                'not_interested',
                'note_add',
                'notifications',
                'notifications_active',
                'notifications_none',
                'notifications_off',
                'notifications_paused',
                'offline_pin',
                'ondemand_video',
                'open_in_browser',
                'open_in_new',
                'open_with',
                'pages',
                'pageview',
                'palette',
                'panorama',
                'panorama_fish_eye',
                'panorama_horizontal',
                'panorama_vertical',
                'panorama_wide_angle',
                'party_mode',
                'pause',
                'pause_circle_filled',
                'pause_circle_outline',
                'payment',
                'people',
                'people_outline',
                'perm_camera_mic',
                'perm_contact_calendar',
                'perm_data_setting',
                'perm_device_information',
                'perm_identity',
                'perm_media',
                'perm_phone_msg',
                'perm_scan_wifi',
                'person',
                'person_add',
                'person_outline',
                'person_pin',
                'personal_video',
                'phone',
                'phone_android',
                'phone_bluetooth_speaker',
                'phone_forwarded',
                'phone_in_talk',
                'phone_iphone',
                'phone_locked',
                'phone_missed',
                'phone_paused',
                'phonelink',
                'phonelink_erase',
                'phonelink_lock',
                'phonelink_off',
                'phonelink_ring',
                'phonelink_setup',
                'photo',
                'photo_album',
                'photo_camera',
                'photo_library',
                'photo_size_select_actual',
                'photo_size_select_large',
                'photo_size_select_small',
                'picture_as_pdf',
                'picture_in_picture',
                'pin_drop',
                'place',
                'play_arrow',
                'play_circle_filled',
                'play_circle_outline',
                'play_for_work',
                'play_shopping_bag',
                'playlist_add',
                'plus_one',
                'poll',
                'polymer',
                'portable_wifi_off',
                'portrait',
                'power',
                'power_input',
                'power_settings_new',
                'present_to_all',
                'print',
                'public',
                'publish',
                'query_builder',
                'question_answer',
                'queue',
                'queue_music',
                'radio',
                'radio_button_checked',
                'radio_button_unchecked',
                'rate_review',
                'receipt',
                'recent_actors',
                'redeem',
                'redo',
                'refresh',
                'remove',
                'remove_circle',
                'remove_circle_outline',
                'remove_red_eye',
                'reorder',
                'repeat',
                'repeat_one',
                'replay',
                'replay_10',
                'replay_30',
                'replay_5',
                'reply',
                'reply_all',
                'report',
                'report_problem',
                'restaurant_menu',
                'restore',
                'ring_volume',
                'room',
                'rotate_90_degrees_ccw',
                'rotate_left',
                'rotate_right',
                'router',
                'satellite',
                'save',
                'scanner',
                'schedule',
                'school',
                'screen_lock_landscape',
                'screen_lock_portrait',
                'screen_lock_rotation',
                'screen_rotation',
                'sd_card',
                'sd_storage',
                'search',
                'security',
                'select_all',
                'send',
                'settings',
                'settings_applications',
                'settings_backup_restore',
                'settings_bluetooth',
                'settings_brightness',
                'settings_cell',
                'settings_ethernet',
                'settings_input_antenna',
                'settings_input_component',
                'settings_input_composite',
                'settings_input_hdmi',
                'settings_input_svideo',
                'settings_overscan',
                'settings_phone',
                'settings_power',
                'settings_remote',
                'settings_system_daydream',
                'settings_voice',
                'share',
                'shop',
                'shop_two',
                'shopping_basket',
                'shopping_cart',
                'shuffle',
                'signal_cellular_4_bar',
                'signal_cellular_connected_no_internet_4_bar',
                'signal_cellular_no_sim',
                'signal_cellular_null',
                'signal_cellular_off',
                'signal_wifi_4_bar',
                'signal_wifi_4_bar_lock',
                'signal_wifi_off',
                'sim_card',
                'sim_card_alert',
                'skip_next',
                'skip_previous',
                'slideshow',
                'smartphone',
                'sms',
                'sms_failed',
                'snooze',
                'sort',
                'sort_by_alpha',
                'space_bar',
                'speaker',
                'speaker_group',
                'speaker_notes',
                'speaker_phone',
                'spellcheck',
                'star',
                'star_border',
                'star_half',
                'stars',
                'stay_current_landscape',
                'stay_current_portrait',
                'stay_primary_landscape',
                'stay_primary_portrait',
                'stop',
                'storage',
                'store',
                'store_mall_directory',
                'straighten',
                'strikethrough_s',
                'style',
                'subject',
                'subtitles',
                'supervisor_account',
                'surround_sound',
                'swap_calls',
                'swap_horiz',
                'swap_vert',
                'swap_vertical_circle',
                'switch_camera',
                'switch_video',
                'sync',
                'sync_disabled',
                'sync_problem',
                'system_update',
                'system_update_alt',
                'tab',
                'tab_unselected',
                'tablet',
                'tablet_android',
                'tablet_mac',
                'tag_faces',
                'tap_and_play',
                'terrain',
                'text_format',
                'textsms',
                'texture',
                'theaters',
                'thumb_down',
                'thumb_up',
                'thumbs_up_down',
                'time_to_leave',
                'timelapse',
                'timer',
                'timer_10',
                'timer_3',
                'timer_off',
                'toc',
                'today',
                'toll',
                'tonality',
                'toys',
                'track_changes',
                'traffic',
                'transform',
                'translate',
                'trending_down',
                'trending_flat',
                'trending_up',
                'tune',
                'turned_in',
                'turned_in_not',
                'tv',
                'undo',
                'unfold_less',
                'unfold_more',
                'usb',
                'verified_user',
                'vertical_align_bottom',
                'vertical_align_center',
                'vertical_align_top',
                'vibration',
                'video_library',
                'videocam',
                'videocam_off',
                'view_agenda',
                'view_array',
                'view_carousel',
                'view_column',
                'view_comfy',
                'view_compact',
                'view_day',
                'view_headline',
                'view_list',
                'view_module',
                'view_quilt',
                'view_stream',
                'view_week',
                'vignette',
                'visibility',
                'visibility_off',
                'voice_chat',
                'voicemail',
                'volume_down',
                'volume_mute',
                'volume_off',
                'volume_up',
                'vpn_key',
                'vpn_lock',
                'wallpaper',
                'warning',
                'watch',
                'wb_auto',
                'wb_cloudy',
                'wb_incandescent',
                'wb_iridescent',
                'wb_sunny',
                'wc',
                'web',
                'whatshot',
                'widgets',
                'wifi',
                'wifi_lock',
                'wifi_tethering',
                'work',
                'wrap_text',
                'youtube_searched_for',
                'zoom_in',
                'zoom_out',
            ];
        }
        Object.defineProperty(IconService.prototype, "icons", {
            get: /**
             * @return {?}
             */ function () {
                return this._icons;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} query
         * @return {?}
         */
        IconService.prototype.filter = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                return this.icons.filter(function (el) {
                    return el.toLowerCase().indexOf(query ? query.toLowerCase() : '') > -1;
                });
            };
        IconService.decorators = [
            { type: core$1.Injectable }
        ];
        return IconService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
    // Validators
    /** @type {?} */
    var TD_VALIDATORS = [];
    /** @type {?} */
    var TD_PIPES = [
        TdTimeAgoPipe,
        TdTimeDifferencePipe,
        TdTimeUntilPipe,
        TdBytesPipe,
        TdDecimalBytesPipe,
        TdDigitsPipe,
        TdTruncatePipe,
    ];
    var CovalentCommonModule = /** @class */ (function () {
        function CovalentCommonModule() {
        }
        CovalentCommonModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [forms.FormsModule, common.CommonModule],
                        declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                        exports: [forms.FormsModule, common.CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                        providers: [RouterPathService, IconService],
                    },] }
        ];
        return CovalentCommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdRotateAnimation
     *
     * Parameter Options:
     * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
     * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerates and decelerates. Defaults to ease-in.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
     *
     * usage: [\@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
     * @type {?}
     */
    var tdRotateAnimation = animations.trigger('tdRotate', [
        animations.state('0', animations.style({
            transform: 'rotate({{ degressStart }}deg)',
        }), { params: { degressStart: 0 } }),
        animations.state('1', animations.style({
            transform: 'rotate({{ degreesEnd }}deg)',
        }), { params: { degreesEnd: 180 } }),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
            ]),
        ], { params: { duration: 250, delay: '0', ease: 'ease-in' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdCollapseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
     * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
     *
     * usage: [\@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
     * @type {?}
     */
    var tdCollapseAnimation = animations.trigger('tdCollapse', [
        animations.state('1', animations.style({
            height: '0',
            overflow: 'hidden',
        })),
        animations.state('0', animations.style({
            height: animations.AUTO_STYLE,
            overflow: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.style({
                overflow: 'hidden',
                height: animations.AUTO_STYLE,
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    height: '0',
                    overflow: 'hidden',
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.style({
                height: '0',
                overflow: 'hidden',
            }),
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.style({
                    overflow: 'hidden',
                    height: animations.AUTO_STYLE,
                })),
            ]),
        ], { params: { duration: 150, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdFadeInOutAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
     * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
     *
     * usage: [\@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFadeInOutAnimation = animations.trigger('tdFadeInOut', [
        animations.state('0', animations.style({
            opacity: '0',
            visibility: 'hidden',
        })),
        animations.state('1', animations.style({
            opacity: animations.AUTO_STYLE,
            visibility: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' } }),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
            ]),
        ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdBounceAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a bounce animation.
     *
     * usage: [\@tdBounce]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdBounceAnimation = animations.trigger('tdBounce', [
        animations.state('0', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.state('1', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8 }),
                    animations.style({ transform: 'translate3d(0, -4px, 0)', offset: .9 }),
                    animations.style({ animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdFlashAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a flash animation.
     *
     * usage: [\@tdFlash]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdFlashAnimation = animations.trigger('tdFlash', [
        animations.state('0', animations.style({
            opacity: 1,
        })),
        animations.state('1', animations.style({
            opacity: 1,
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ opacity: 1, offset: 0 }),
                    animations.style({ opacity: 0, offset: 0.25 }),
                    animations.style({ opacity: 1, offset: 0.5 }),
                    animations.style({ opacity: 0, offset: 0.75 }),
                    animations.style({ opacity: 1, offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdHeadshakeAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
     *
     * usage: [\@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdHeadshakeAnimation = animations.trigger('tdHeadshake', [
        animations.state('0', animations.style({
            transform: 'translateX(0)',
        })),
        animations.state('1', animations.style({
            transform: 'translateX(0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'translateX(0)', offset: 0 }),
                    animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    animations.style({ transform: 'translateX(0)', offset: 0.50 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdJelloAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
     *
     * usage: [\@tdJello]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdJelloAnimation = animations.trigger('tdJello', [
        animations.state('0', animations.style({
            transform: 'none',
        })),
        animations.state('1', animations.style({
            transform: 'none',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'none', offset: 0 }),
                    animations.style({ transform: 'none', offset: 0.011 }),
                    animations.style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
                    animations.style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
                    animations.style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
                    animations.style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
                    animations.style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
                    animations.style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
                    animations.style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * const tdPulseAnimation
     *
     * Parameter Options:
     * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
     * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
     * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
     *
     * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
     *
     * usage: [\@tdPulse]="{ value: true | false, params: { duration: 200 }}"
     * @type {?}
     */
    var tdPulseAnimation = animations.trigger('tdPulse', [
        animations.state('0', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.state('1', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate('{{ duration }}ms {{ delay }}ms {{ ease }}', animations.keyframes([
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ], { params: { duration: 500, delay: '0', ease: 'ease-out' } }),
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () {
        // empty method
    };
    /**
     * Mixin to augment a component with ngModel support.
     * @template T
     * @param {?} base
     * @param {?=} initialValue
     * @return {?}
     */
    function mixinControlValueAccessor(base, initialValue) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
                _this.onChange = function (_) { return noop; };
                _this.onTouched = function () { return noop; };
                _this._subjectValueChanges = new rxjs.Subject();
                _this.valueChanges = _this._subjectValueChanges.asObservable();
                return _this;
            }
            Object.defineProperty(class_1.prototype, "value", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._value;
                },
                set: /**
                 * @param {?} v
                 * @return {?}
                 */ function (v) {
                    if (v !== this._value) {
                        this._value = v;
                        this.onChange(v);
                        this._changeDetectorRef.markForCheck();
                        this._subjectValueChanges.next(v);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} value
             * @return {?}
             */
            class_1.prototype.writeValue = /**
             * @param {?} value
             * @return {?}
             */
                function (value) {
                    this.value = value;
                    this._changeDetectorRef.markForCheck();
                };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnChange = /**
             * @param {?} fn
             * @return {?}
             */
                function (fn) {
                    this.onChange = fn;
                };
            /**
             * @param {?} fn
             * @return {?}
             */
            class_1.prototype.registerOnTouched = /**
             * @param {?} fn
             * @return {?}
             */
                function (fn) {
                    this.onTouched = fn;
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisabled(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disabled = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disabled", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._disabled;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disabled !== newValue) {
                        this._disabled = newValue;
                        this.onDisabledChange(this._disabled);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisabledChange = /**
             * @param {?} v
             * @return {?}
             */
                function (v) {
                    /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Mixin to augment a component or directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */
    function mixinDisableRipple(base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                _this._disableRipple = false;
                return _this;
            }
            Object.defineProperty(class_1.prototype, "disableRipple", {
                get: /**
                 * @return {?}
                 */ function () {
                    return this._disableRipple;
                },
                set: /**
                 * @param {?} value
                 * @return {?}
                 */ function (value) {
                    /** @type {?} */
                    var newValue = coercion.coerceBooleanProperty(value);
                    if (this._disableRipple !== newValue) {
                        this._disableRipple = newValue;
                        this.onDisableRippleChange(this._disableRipple);
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {?} v
             * @return {?}
             */
            class_1.prototype.onDisableRippleChange = /**
             * @param {?} v
             * @return {?}
             */
                function (v) {
                    /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
                };
            return class_1;
        }(base));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentValidators = /** @class */ (function () {
        function CovalentValidators() {
        }
        /**
         * @param {?} minValue
         * @return {?}
         */
        CovalentValidators.min = /**
         * @param {?} minValue
         * @return {?}
         */
            function (minValue) {
                /** @type {?} */
                var func = function (c) {
                    if (!!forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                        return undefined;
                    }
                    /** @type {?} */
                    var v = c.value;
                    return v < minValue ?
                        { min: { minValue: minValue, actualValue: v } } :
                        undefined;
                };
                return func;
            };
        /**
         * @param {?} maxValue
         * @return {?}
         */
        CovalentValidators.max = /**
         * @param {?} maxValue
         * @return {?}
         */
            function (maxValue) {
                /** @type {?} */
                var func = function (c) {
                    if (!!forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                        return undefined;
                    }
                    /** @type {?} */
                    var v = c.value;
                    return v > maxValue ?
                        { max: { maxValue: maxValue, actualValue: v } } :
                        undefined;
                };
                return func;
            };
        /**
         * @param {?} c
         * @return {?}
         */
        CovalentValidators.numberRequired = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                return (Number.isNaN(c.value)) ?
                    { required: true } :
                    undefined;
            };
        return CovalentValidators;
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
    var TdMessageContainerDirective = /** @class */ (function () {
        function TdMessageContainerDirective(viewContainer) {
            this.viewContainer = viewContainer;
        }
        TdMessageContainerDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdMessageContainer]',
                    },] }
        ];
        /** @nocollapse */
        TdMessageContainerDirective.ctorParameters = function () {
            return [
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdMessageContainerDirective;
    }());
    var TdMessageComponent = /** @class */ (function () {
        function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._opened = true;
            this._hidden = false;
            this._animating = false;
            this._initialized = false;
            /**
             * icon?: string
             *
             * The icon to be displayed before the title.
             * Defaults to `info_outline` icon
             */
            this.icon = 'info_outline';
            this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
        }
        Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
            /**
             * Binding host to tdCollapse animation
             */
            get: /**
             * Binding host to tdCollapse animation
             * @return {?}
             */ function () {
                return { value: !this._opened, duration: 100 };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "hidden", {
            /**
             * Binding host to display style when hidden
             */
            get: /**
             * Binding host to display style when hidden
             * @return {?}
             */ function () {
                return this._hidden ? 'none' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             */
            set: /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             * @param {?} color
             * @return {?}
             */ function (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
                this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
                if (color === 'primary' || color === 'accent' || color === 'warn') {
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
                }
                else {
                    this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
                    this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
                }
                this._color = color;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "opened", {
            get: /**
             * @return {?}
             */ function () {
                return this._opened;
            },
            /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             */
            set: /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             * @param {?} opened
             * @return {?}
             */ function (opened) {
                if (this._initialized) {
                    if (opened) {
                        this.open();
                    }
                    else {
                        this.close();
                    }
                }
                else {
                    this._opened = opened;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         */
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
        TdMessageComponent.prototype.animationDoneListener = /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
            function () {
                if (!this._opened) {
                    this._hidden = true;
                    this._detach();
                }
                this._animating = false;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Initializes the component and attaches the content.
         */
        /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
        TdMessageComponent.prototype.ngAfterViewInit = /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
            function () {
                var _this = this;
                Promise.resolve(undefined).then(function () {
                    if (_this._opened) {
                        _this._attach();
                    }
                    _this._initialized = true;
                });
            };
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         */
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
        TdMessageComponent.prototype.open = /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
            function () {
                if (!this._opened && !this._animating) {
                    this._opened = true;
                    this._attach();
                    this._startAnimationState();
                }
            };
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         */
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
        TdMessageComponent.prototype.close = /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
            function () {
                if (this._opened && !this._animating) {
                    this._opened = false;
                    this._startAnimationState();
                }
            };
        /**
         * Toggles between open and close depending on state.
         */
        /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
        TdMessageComponent.prototype.toggle = /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
            function () {
                if (this._opened) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * Method to set the state before starting an animation
         */
        /**
         * Method to set the state before starting an animation
         * @return {?}
         */
        TdMessageComponent.prototype._startAnimationState = /**
         * Method to set the state before starting an animation
         * @return {?}
         */
            function () {
                this._animating = true;
                this._hidden = false;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Method to attach template to DOM
         */
        /**
         * Method to attach template to DOM
         * @return {?}
         */
        TdMessageComponent.prototype._attach = /**
         * Method to attach template to DOM
         * @return {?}
         */
            function () {
                this._childElement.viewContainer.createEmbeddedView(this._template);
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Method to detach template from DOM
         */
        /**
         * Method to detach template from DOM
         * @return {?}
         */
        TdMessageComponent.prototype._detach = /**
         * Method to detach template from DOM
         * @return {?}
         */
            function () {
                this._childElement.viewContainer.clear();
                this._changeDetectorRef.markForCheck();
            };
        TdMessageComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-message',
                        template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>",
                        animations: [
                            common$1.tdCollapseAnimation,
                        ],
                        styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdMessageComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.ElementRef }
            ];
        };
        TdMessageComponent.propDecorators = {
            _childElement: [{ type: core$1.ViewChild, args: [TdMessageContainerDirective,] }],
            _template: [{ type: core$1.ViewChild, args: [core$1.TemplateRef,] }],
            collapsedAnimation: [{ type: core$1.HostBinding, args: ['@tdCollapse',] }],
            hidden: [{ type: core$1.HostBinding, args: ['style.display',] }],
            label: [{ type: core$1.Input, args: ['label',] }],
            sublabel: [{ type: core$1.Input, args: ['sublabel',] }],
            icon: [{ type: core$1.Input, args: ['icon',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            opened: [{ type: core$1.Input, args: ['opened',] }],
            animationDoneListener: [{ type: core$1.HostListener, args: ['@tdCollapse.done',] }]
        };
        return TdMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MESSAGE = [
        TdMessageComponent,
        TdMessageContainerDirective,
    ];
    var CovalentMessageModule = /** @class */ (function () {
        function CovalentMessageModule() {
        }
        CovalentMessageModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TD_MESSAGE,
                        ],
                        exports: [
                            TD_MESSAGE,
                        ],
                    },] }
        ];
        return CovalentMessageModule;
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
    var TdChipDirective = /** @class */ (function (_super) {
        __extends(TdChipDirective, _super);
        function TdChipDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdChipDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-chip]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdChipDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdChipDirective;
    }(portal.TemplatePortalDirective));
    var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
        __extends(TdAutocompleteOptionDirective, _super);
        function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdAutocompleteOptionDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-autocomplete-option]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdAutocompleteOptionDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdAutocompleteOptionDirective;
    }(portal.TemplatePortalDirective));
    var TdChipsBase = /** @class */ (function () {
        function TdChipsBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdChipsBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdChipsMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdChipsBase), []);
    var TdChipsComponent = /** @class */ (function (_super) {
        __extends(TdChipsComponent, _super);
        function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this._document = _document;
            _this._outsideClickSubs = rxjs.Subscription.EMPTY;
            _this._inputValueChangesSubs = rxjs.Subscription.EMPTY;
            _this._isMousedown = false;
            _this._length = 0;
            _this._stacked = false;
            _this._requireMatch = false;
            _this._color = 'primary';
            _this._inputPosition = 'after';
            _this._chipAddition = true;
            _this._chipRemoval = true;
            _this._focused = false;
            _this._required = false;
            _this._tabIndex = 0;
            _this._touchendDebounce = 100;
            _this._internalClick = false;
            _this._internalActivateOption = false;
            /**
             * FormControl for the matInput element.
             */
            _this.inputControl = new forms.FormControl();
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 200.
             */
            _this.debounce = 200;
            /**
             * add?: function
             * Method to be executed when a chip is added.
             * Sends chip value as event.
             */
            _this.onAdd = new core$1.EventEmitter();
            /**
             * remove?: function
             * Method to be executed when a chip is removed.
             * Sends chip value as event.
             */
            _this.onRemove = new core$1.EventEmitter();
            /**
             * inputChange?: function
             * Method to be executed when the value in the autocomplete input changes.
             * Sends string value as event.
             */
            _this.onInputChange = new core$1.EventEmitter();
            /**
             * chipFocus?: function
             * Method to be executed when a chip is focused.
             * Sends chip value as event.
             */
            _this.onChipFocus = new core$1.EventEmitter();
            /**
             * blur?: function
             * Method to be executed when a chip is blurred.
             * Sends chip value as event.
             */
            _this.onChipBlur = new core$1.EventEmitter();
            /**
             * compareWith? function
             * Function used to check whether a chip value already exists.
             * Defaults to strict equality comparison ===
             */
            _this.compareWith = function (o1, o2) {
                return o1 === o2;
            };
            _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
            return _this;
        }
        Object.defineProperty(TdChipsComponent.prototype, "focused", {
            /**
             * Flag that is true when autocomplete is focused.
             */
            get: /**
             * Flag that is true when autocomplete is focused.
             * @return {?}
             */ function () {
                return this._focused;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             */
            set: /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             * @param {?} items
             * @return {?}
             */ function (items) {
                this._items = items;
                this._setFirstOptionActive();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "stacked", {
            get: /**
             * @return {?}
             */ function () {
                return this._stacked;
            },
            /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             */
            set: /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             * @param {?} stacked
             * @return {?}
             */ function (stacked) {
                this._stacked = coercion.coerceBooleanProperty(stacked);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
            get: /**
             * @return {?}
             */ function () {
                return this._inputPosition;
            },
            /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             */
            set: /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             * @param {?} inputPosition
             * @return {?}
             */ function (inputPosition) {
                this._inputPosition = inputPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
            get: /**
             * @return {?}
             */ function () {
                return this._requireMatch;
            },
            /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             */
            set: /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             * @param {?} requireMatch
             * @return {?}
             */ function (requireMatch) {
                this._requireMatch = coercion.coerceBooleanProperty(requireMatch);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             */
            set: /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             * @param {?} required
             * @return {?}
             */ function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
            get: /**
             * @return {?}
             */ function () {
                return this._chipAddition;
            },
            /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             */
            set: /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             * @param {?} chipAddition
             * @return {?}
             */ function (chipAddition) {
                this._chipAddition = chipAddition;
                this._toggleInput();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
            /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             */
            get: /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             * @return {?}
             */ function () {
                return this.chipAddition && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
            get: /**
             * @return {?}
             */ function () {
                return this._chipRemoval;
            },
            /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             */
            set: /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             * @param {?} chipRemoval
             * @return {?}
             */ function (chipRemoval) {
                this._chipRemoval = chipRemoval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
            /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             */
            get: /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             * @return {?}
             */ function () {
                return this.chipRemoval && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "displayPlaceHolder", {
            /**
             * returns the display placeholder
             */
            get: /**
             * returns the display placeholder
             * @return {?}
             */ function () {
                if (!this.canAddChip) {
                    return '';
                }
                return (this._required) ? this.placeholder + " *" : this.placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             */
            set: /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             * @param {?} color
             * @return {?}
             */ function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
            /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             */
            get: /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             * @return {?}
             */ function () {
                return this.disabled ? -1 : this._tabIndex;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to host focus event to act on it
         */
        /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.focusListener = /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // should only focus if its not via mousedown to prevent clashing with autocomplete
                if (!this._isMousedown) {
                    this.focus();
                }
                event.preventDefault();
            };
        /**
         * Listens to host mousedown event to act on it
         */
        /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.mousedownListener = /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                // sets a flag to know if there was a mousedown and then it returns it back to false
                this._isMousedown = true;
                rxjs.timer().toPromise().then(function () {
                    _this._isMousedown = false;
                });
            };
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         */
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.clickListener = /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var clickTarget = ( /** @type {?} */(event.target));
                if (clickTarget === this._elementRef.nativeElement ||
                    clickTarget.className.indexOf('td-chips-wrapper') > -1) {
                    this.focus();
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
        /**
         * Listens to host keydown event to act on it depending on the keypress
         */
        /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.keydownListener = /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                switch (event.keyCode) {
                    case keycodes.TAB:
                        // if tabing out, then unfocus the component
                        rxjs.timer().toPromise().then(function () {
                            _this.removeFocusedState();
                        });
                        break;
                    case keycodes.ESCAPE:
                        if (this._inputChild.focused) {
                            this._nativeInput.nativeElement.blur();
                            this.removeFocusedState();
                            this._closeAutocomplete();
                        }
                        else {
                            this.focus();
                        }
                        break;
                    default:
                    // default
                }
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._inputValueChangesSubs = this.inputControl.valueChanges.pipe(operators.debounceTime(this.debounce)).subscribe(function (value) {
                    _this.onInputChange.emit(value ? value : '');
                });
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this._watchOutsideClick();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                // Throw onChange event only if array changes size.
                if (this.value && this.value.length !== this._length) {
                    this._length = this.value.length;
                    this.onChange(this.value);
                }
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._outsideClickSubs.unsubscribe();
                this._inputValueChangesSubs.unsubscribe();
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._setInternalClick = /**
         * @return {?}
         */
            function () {
                this._internalClick = true;
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdChipsComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                this._toggleInput();
            };
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
        TdChipsComponent.prototype._handleAddChip = /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var value;
                if (this.requireMatch) {
                    /** @type {?} */
                    var selectedOptions = this._options.toArray().filter(function (option) {
                        return option.active;
                    });
                    if (selectedOptions.length > 0) {
                        value = selectedOptions[0].value;
                        selectedOptions[0].setInactiveStyles();
                    }
                    if (!value) {
                        return false;
                    }
                }
                else {
                    // if there is a selection, then use that
                    // else use the input value as chip
                    if (this._autocompleteTrigger.activeOption) {
                        value = this._autocompleteTrigger.activeOption.value;
                        this._autocompleteTrigger.activeOption.setInactiveStyles();
                    }
                    else {
                        value = this._inputChild.value;
                        if (value.trim() === '') {
                            return false;
                        }
                    }
                }
                return this.addChip(value);
            };
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype.addChip = /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /**
                 * add a debounce ms delay when reopening the autocomplete to give it time
                 * to rerender the next list and at the correct spot
                 */
                var _this = this;
                this._closeAutocomplete();
                rxjs.timer(this.debounce).toPromise().then(function () {
                    _this.setFocusedState();
                    _this._setFirstOptionActive();
                    _this._openAutocomplete();
                });
                this.inputControl.setValue('');
                // check if value is already part of the model
                if (this.value.findIndex(function (item) { return _this.compareWith(item, value); }) > -1) {
                    return false;
                }
                this.value.push(value);
                this.onAdd.emit(value);
                this.onChange(this.value);
                this._changeDetectorRef.markForCheck();
                return true;
            };
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype.removeChip = /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** @type {?} */
                var removedValues = this.value.splice(index, 1);
                if (removedValues.length === 0) {
                    return false;
                }
                /**
                 * Checks if deleting last single chip, to focus input afterwards
                 * Else check if its not the last chip of the list to focus the next one.
                 */
                if (index === (this._totalChips - 1) && index === 0) {
                    this._inputChild.focus();
                }
                else if (index < (this._totalChips - 1)) {
                    this._focusChip(index + 1);
                }
                else if (index > 0) {
                    this._focusChip(index - 1);
                }
                this.onRemove.emit(removedValues[0]);
                this.onChange(this.value);
                this.inputControl.setValue('');
                this._changeDetectorRef.markForCheck();
                return true;
            };
        /**
         * Sets blur of chip and sends out event
         */
        /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipBlur = /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
            function (event, value) {
                this.onChipBlur.emit(value);
            };
        /**
         * Sets focus of chip and sends out event
         */
        /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipFocus = /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
            function (event, value) {
                this.setFocusedState();
                this.onChipFocus.emit(value);
            };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._handleFocus = /**
         * @return {?}
         */
            function () {
                this.setFocusedState();
                this._setFirstOptionActive();
                return true;
            };
        /**
         * Sets focus state of the component
         */
        /**
         * Sets focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.setFocusedState = /**
         * Sets focus state of the component
         * @return {?}
         */
            function () {
                if (!this.disabled) {
                    this._focused = true;
                    this._tabIndex = -1;
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * Removes focus state of the component
         */
        /**
         * Removes focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.removeFocusedState = /**
         * Removes focus state of the component
         * @return {?}
         */
            function () {
                this._focused = false;
                this._tabIndex = 0;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         */
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
        TdChipsComponent.prototype.focus = /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
            function () {
                if (this.canAddChip) {
                    this._inputChild.focus();
                }
                else if (!this.disabled) {
                    this._focusFirstChip();
                }
            };
        /**
         * Passes relevant input key presses.
         */
        /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype._inputKeydown = /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.UP_ARROW:
                        /**
                         * Since the first item is highlighted on [requireMatch], we need to inactivate it
                         * when pressing the up key
                         */
                        if (this.requireMatch) {
                            /** @type {?} */
                            var length_1 = this._options.length;
                            if (length_1 > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
                                this._options.toArray()[0].setInactiveStyles();
                                this._internalActivateOption = false;
                                // prevent default window scrolling
                                event.preventDefault();
                            }
                        }
                        break;
                    case keycodes.LEFT_ARROW:
                    case keycodes.DELETE:
                    case keycodes.BACKSPACE:
                        this._closeAutocomplete();
                        /** Check to see if input is empty when pressing left arrow to move to the last chip */
                        if (!this._inputChild.value) {
                            this._focusLastChip();
                            // prevent default window scrolling
                            event.preventDefault();
                        }
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._closeAutocomplete();
                        /** Check to see if input is empty when pressing right arrow to move to the first chip */
                        if (!this._inputChild.value) {
                            this._focusFirstChip();
                            // prevent default window scrolling
                            event.preventDefault();
                        }
                        break;
                    default:
                    // default
                }
            };
        /**
         * Passes relevant chip key presses.
         */
        /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._chipKeydown = /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
            function (event, index) {
                switch (event.keyCode) {
                    case keycodes.DELETE:
                    case keycodes.BACKSPACE:
                        /** Check to see if we can delete a chip */
                        if (this.canRemoveChip) {
                            this.removeChip(index);
                        }
                        break;
                    case keycodes.UP_ARROW:
                    case keycodes.LEFT_ARROW:
                        /**
                         * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
                         * Also check if input should be focused
                         */
                        if (index === 0) {
                            // only try to target input if pressing left
                            if (this.canAddChip && event.keyCode === keycodes.LEFT_ARROW) {
                                this._inputChild.focus();
                            }
                            else {
                                this._focusLastChip();
                            }
                        }
                        else if (index > 0) {
                            this._focusChip(index - 1);
                        }
                        // prevent default window scrolling
                        event.preventDefault();
                        break;
                    case keycodes.DOWN_ARROW:
                    case keycodes.RIGHT_ARROW:
                        /**
                         * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
                         * Also check if input should be focused
                         */
                        if (index === (this._totalChips - 1)) {
                            // only try to target input if pressing right
                            if (this.canAddChip && event.keyCode === keycodes.RIGHT_ARROW) {
                                this._inputChild.focus();
                            }
                            else {
                                this._focusFirstChip();
                            }
                        }
                        else if (index < (this._totalChips - 1)) {
                            this._focusChip(index + 1);
                        }
                        // prevent default window scrolling
                        event.preventDefault();
                        break;
                    default:
                    // default
                }
            };
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         */
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
        TdChipsComponent.prototype._removeInputDisplay = /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
            function () {
                return '';
            };
        /**
         * Method to open the autocomplete manually if its not already opened
         */
        /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
        TdChipsComponent.prototype._openAutocomplete = /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
            function () {
                if (!this._autocompleteTrigger.panelOpen) {
                    this._autocompleteTrigger.openPanel();
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * Method to close the autocomplete manually if its not already closed
         */
        /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
        TdChipsComponent.prototype._closeAutocomplete = /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
            function () {
                if (this._autocompleteTrigger.panelOpen) {
                    this._autocompleteTrigger.closePanel();
                    this._changeDetectorRef.markForCheck();
                }
            };
        Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
            /**
             * Get total of chips
             */
            get: /**
             * Get total of chips
             * @return {?}
             */ function () {
                /** @type {?} */
                var chips$$1 = this._chipsChildren.toArray();
                return chips$$1.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method to focus a desired chip by index
         */
        /**
         * Method to focus a desired chip by index
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._focusChip = /**
         * Method to focus a desired chip by index
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** check to see if index exists in the array before focusing */
                if (index > -1 && this._totalChips > index) {
                    this._chipsChildren.toArray()[index].focus();
                }
            };
        /** Method to focus first chip */
        /**
         * Method to focus first chip
         * @return {?}
         */
        TdChipsComponent.prototype._focusFirstChip = /**
         * Method to focus first chip
         * @return {?}
         */
            function () {
                this._focusChip(0);
            };
        /** Method to focus last chip */
        /**
         * Method to focus last chip
         * @return {?}
         */
        TdChipsComponent.prototype._focusLastChip = /**
         * Method to focus last chip
         * @return {?}
         */
            function () {
                this._focusChip(this._totalChips - 1);
            };
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         */
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @return {?}
         */
        TdChipsComponent.prototype._toggleInput = /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @return {?}
         */
            function () {
                if (this.canAddChip) {
                    this.inputControl.enable();
                }
                else {
                    this.inputControl.disable();
                }
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         */
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @return {?}
         */
        TdChipsComponent.prototype._setFirstOptionActive = /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.requireMatch) {
                    // need to use a timer here to wait until the autocomplete has been opened (end of queue)
                    rxjs.timer().toPromise().then(function () {
                        if (_this.focused && _this._options && _this._options.length > 0) {
                            // clean up of previously active options
                            _this._options.toArray().forEach(function (option) {
                                option.setInactiveStyles();
                            });
                            // set the first one as active
                            _this._options.toArray()[0].setActiveStyles();
                            _this._internalActivateOption = true;
                            _this._changeDetectorRef.markForCheck();
                        }
                    });
                }
            };
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         */
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @return {?}
         */
        TdChipsComponent.prototype._watchOutsideClick = /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._document) {
                    this._outsideClickSubs = rxjs.merge(rxjs.fromEvent(this._document, 'click'), rxjs.fromEvent(this._document, 'touchend')).pipe(operators.debounceTime(this._touchendDebounce), operators.filter(function (event) {
                        /** @type {?} */
                        var clickTarget = ( /** @type {?} */(event.target));
                        setTimeout(function () {
                            _this._internalClick = false;
                        });
                        return _this.focused &&
                            (clickTarget !== _this._elementRef.nativeElement) &&
                            !_this._elementRef.nativeElement.contains(clickTarget) && !_this._internalClick;
                    })).subscribe(function () {
                        if (_this.focused) {
                            _this._autocompleteTrigger.closePanel();
                            _this.removeFocusedState();
                            _this.onTouched();
                            _this._changeDetectorRef.markForCheck();
                        }
                    });
                }
                return undefined;
            };
        TdChipsComponent.decorators = [
            { type: core$1.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdChipsComponent; }),
                                multi: true,
                            }],
                        selector: 'td-chips',
                        inputs: ['disabled', 'value'],
                        template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [disableRipple]=\"true\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatLabel=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"displayPlaceHolder\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;max-width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-webkit-box-ordinal-group:-19;-ms-flex-order:-20;order:-20;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-sizing:border-box;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-transform:scaleX(.5);-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2);transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear;transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);-webkit-transition:background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear;transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2),-webkit-transform 150ms linear}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdChipsComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 },
                { type: undefined, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [common.DOCUMENT,] }] },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdChipsComponent.propDecorators = {
            _nativeInput: [{ type: core$1.ViewChild, args: ['input',] }],
            _inputChild: [{ type: core$1.ViewChild, args: [input.MatInput,] }],
            _autocompleteTrigger: [{ type: core$1.ViewChild, args: [autocomplete.MatAutocompleteTrigger,] }],
            _chipsChildren: [{ type: core$1.ViewChildren, args: [chips.MatChip,] }],
            _chipTemplate: [{ type: core$1.ContentChild, args: [TdChipDirective,] }],
            _autocompleteOptionTemplate: [{ type: core$1.ContentChild, args: [TdAutocompleteOptionDirective,] }],
            _options: [{ type: core$1.ViewChildren, args: [core.MatOption,] }],
            items: [{ type: core$1.Input, args: ['items',] }],
            stacked: [{ type: core$1.Input, args: ['stacked',] }],
            inputPosition: [{ type: core$1.Input, args: ['inputPosition',] }],
            requireMatch: [{ type: core$1.Input, args: ['requireMatch',] }],
            required: [{ type: core$1.Input, args: ['required',] }],
            chipAddition: [{ type: core$1.Input, args: ['chipAddition',] }],
            chipRemoval: [{ type: core$1.Input, args: ['chipRemoval',] }],
            placeholder: [{ type: core$1.Input, args: ['placeholder',] }],
            debounce: [{ type: core$1.Input, args: ['debounce',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            onAdd: [{ type: core$1.Output, args: ['add',] }],
            onRemove: [{ type: core$1.Output, args: ['remove',] }],
            onInputChange: [{ type: core$1.Output, args: ['inputChange',] }],
            onChipFocus: [{ type: core$1.Output, args: ['chipFocus',] }],
            onChipBlur: [{ type: core$1.Output, args: ['chipBlur',] }],
            tabIndex: [{ type: core$1.HostBinding, args: ['attr.tabindex',] }],
            compareWith: [{ type: core$1.Input, args: ['compareWith',] }],
            focusListener: [{ type: core$1.HostListener, args: ['focus', ['$event'],] }],
            mousedownListener: [{ type: core$1.HostListener, args: ['mousedown', ['$event'],] }],
            clickListener: [{ type: core$1.HostListener, args: ['click', ['$event'],] }],
            keydownListener: [{ type: core$1.HostListener, args: ['keydown', ['$event'],] }]
        };
        return TdChipsComponent;
    }(_TdChipsMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentChipsModule = /** @class */ (function () {
        function CovalentChipsModule() {
        }
        CovalentChipsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            chips.MatChipsModule,
                            autocomplete.MatAutocompleteModule,
                        ],
                        declarations: [
                            TdChipsComponent,
                            TdChipDirective,
                            TdAutocompleteOptionDirective,
                        ],
                        exports: [
                            TdChipsComponent,
                            TdChipDirective,
                            TdAutocompleteOptionDirective,
                        ],
                    },] }
        ];
        return CovalentChipsModule;
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
    var TD_VIRTUAL_OFFSET$1 = 2;
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
                    var fromRow = scrolledRows - TD_VIRTUAL_OFFSET$1;
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
                    var range = (index - 1) + (TD_VIRTUAL_OFFSET$1 * 2);
                    /** @type {?} */
                    var toRow = range + this.fromRow;
                    // if last row is greater than the total length, then we use the total length
                    if (isFinite(toRow) && toRow > this._data.length) {
                        toRow = this._data.length;
                    }
                    else if (!isFinite(toRow)) {
                        toRow = TD_VIRTUAL_OFFSET$1;
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
                if (scrolledRows > TD_VIRTUAL_OFFSET$1) {
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
    var TdDialogTitleDirective = /** @class */ (function () {
        function TdDialogTitleDirective() {
        }
        TdDialogTitleDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'td-dialog-title' },] }
        ];
        return TdDialogTitleDirective;
    }());
    var TdDialogContentDirective = /** @class */ (function () {
        function TdDialogContentDirective() {
        }
        TdDialogContentDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'td-dialog-content' },] }
        ];
        return TdDialogContentDirective;
    }());
    var TdDialogActionsDirective = /** @class */ (function () {
        function TdDialogActionsDirective() {
        }
        TdDialogActionsDirective.decorators = [
            { type: core$1.Directive, args: [{ selector: 'td-dialog-actions' },] }
        ];
        return TdDialogActionsDirective;
    }());
    var TdDialogComponent = /** @class */ (function () {
        function TdDialogComponent() {
        }
        /**
         * @return {?}
         */
        TdDialogComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                if (this.dialogTitle.length > 1) {
                    throw new Error('Duplicate td-dialog-title component at in td-dialog.');
                }
                if (this.dialogContent.length > 1) {
                    throw new Error('Duplicate td-dialog-content component at in td-dialog.');
                }
                if (this.dialogActions.length > 1) {
                    throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
                }
            };
        TdDialogComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-dialog',
                        template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                        styles: [".td-dialog-title{margin-top:0;margin-bottom:20px}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{position:relative;top:16px;left:16px}::ng-deep [dir=rtl] .td-dialog-actions{right:16px;left:auto}:host{display:block}:host .td-dialog-actions{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-dialog-actions .td-dialog-spacer{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{text-transform:uppercase;margin-left:8px;padding-left:8px;padding-right:8px;min-width:64px}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-right:8px;margin-left:inherit}"]
                    }] }
        ];
        TdDialogComponent.propDecorators = {
            dialogTitle: [{ type: core$1.ContentChildren, args: [TdDialogTitleDirective,] }],
            dialogContent: [{ type: core$1.ContentChildren, args: [TdDialogContentDirective,] }],
            dialogActions: [{ type: core$1.ContentChildren, args: [TdDialogActionsDirective,] }]
        };
        return TdDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdAlertDialogComponent = /** @class */ (function () {
        function TdAlertDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.closeButton = 'CLOSE';
        }
        /**
         * @return {?}
         */
        TdAlertDialogComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close();
            };
        TdAlertDialogComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-alert-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdAlertDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        return TdAlertDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdConfirmDialogComponent = /** @class */ (function () {
        function TdConfirmDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
        }
        /**
         * @return {?}
         */
        TdConfirmDialogComponent.prototype.cancel = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close(false);
            };
        /**
         * @return {?}
         */
        TdConfirmDialogComponent.prototype.accept = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close(true);
            };
        TdConfirmDialogComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-confirm-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdConfirmDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        return TdConfirmDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdPromptDialogComponent = /** @class */ (function () {
        function TdPromptDialogComponent(_dialogRef) {
            this._dialogRef = _dialogRef;
            this.cancelButton = 'CANCEL';
            this.acceptButton = 'ACCEPT';
        }
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // focus input once everything is rendered and good to go
                Promise.resolve().then(function () {
                    (( /** @type {?} */(_this._input.nativeElement))).focus();
                });
            };
        /**
         * Method executed when input is focused
         * Selects all text
         */
        /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
        TdPromptDialogComponent.prototype.handleInputFocus = /**
         * Method executed when input is focused
         * Selects all text
         * @return {?}
         */
            function () {
                (( /** @type {?} */(this._input.nativeElement))).select();
            };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.cancel = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close(undefined);
            };
        /**
         * @return {?}
         */
        TdPromptDialogComponent.prototype.accept = /**
         * @return {?}
         */
            function () {
                this._dialogRef.close(this.value);
            };
        TdPromptDialogComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-prompt-dialog',
                        template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                        styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdPromptDialogComponent.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef }
            ];
        };
        TdPromptDialogComponent.propDecorators = {
            _input: [{ type: core$1.ViewChild, args: ['input',] }]
        };
        return TdPromptDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdDialogService = /** @class */ (function () {
        function TdDialogService(_dialogService) {
            this._dialogService = _dialogService;
        }
        /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         */
        /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         * @template T
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
        TdDialogService.prototype.open = /**
         * params:
         * - component: ComponentType<T>
         * - config: MatDialogConfig
         * Wrapper function over the open() method in MatDialog.
         * Opens a modal dialog containing the given component.
         * @template T
         * @param {?} component
         * @param {?=} config
         * @return {?}
         */
            function (component, config) {
                return this._dialogService.open(component, config);
            };
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         */
        /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
        TdDialogService.prototype.closeAll = /**
         * Wrapper function over the closeAll() method in MatDialog.
         * Closes all of the currently-open dialogs.
         * @return {?}
         */
            function () {
                this._dialogService.closeAll();
            };
        /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         */
        /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openAlert = /**
         * params:
         * - config: IAlertConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     closeButton?: string;
         * }
         *
         * Opens an alert dialog with the provided config.
         * Returns an MatDialogRef<TdAlertDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var dialogConfig = this._createConfig(config);
                /** @type {?} */
                var dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
                /** @type {?} */
                var alertDialogComponent = dialogRef.componentInstance;
                alertDialogComponent.title = config.title;
                alertDialogComponent.message = config.message;
                if (config.closeButton) {
                    alertDialogComponent.closeButton = config.closeButton;
                }
                return dialogRef;
            };
        /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         */
        /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openConfirm = /**
         * params:
         * - config: IConfirmConfig {
         *     message: string;
         *     title?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a confirm dialog with the provided config.
         * Returns an MatDialogRef<TdConfirmDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var dialogConfig = this._createConfig(config);
                /** @type {?} */
                var dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
                /** @type {?} */
                var confirmDialogComponent = dialogRef.componentInstance;
                confirmDialogComponent.title = config.title;
                confirmDialogComponent.message = config.message;
                if (config.acceptButton) {
                    confirmDialogComponent.acceptButton = config.acceptButton;
                }
                if (config.cancelButton) {
                    confirmDialogComponent.cancelButton = config.cancelButton;
                }
                return dialogRef;
            };
        /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         */
        /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype.openPrompt = /**
         * params:
         * - config: IPromptConfig {
         *     message: string;
         *     title?: string;
         *     value?: string;
         *     viewContainerRef?: ViewContainerRef;
         *     acceptButton?: string;
         *     cancelButton?: string;
         * }
         *
         * Opens a prompt dialog with the provided config.
         * Returns an MatDialogRef<TdPromptDialogComponent> object.
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var dialogConfig = this._createConfig(config);
                /** @type {?} */
                var dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
                /** @type {?} */
                var promptDialogComponent = dialogRef.componentInstance;
                promptDialogComponent.title = config.title;
                promptDialogComponent.message = config.message;
                promptDialogComponent.value = config.value;
                if (config.acceptButton) {
                    promptDialogComponent.acceptButton = config.acceptButton;
                }
                if (config.cancelButton) {
                    promptDialogComponent.cancelButton = config.cancelButton;
                }
                return dialogRef;
            };
        /**
         * @param {?} config
         * @return {?}
         */
        TdDialogService.prototype._createConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var dialogConfig = new dialog.MatDialogConfig();
                dialogConfig.width = '400px';
                Object.assign(dialogConfig, config);
                return dialogConfig;
            };
        TdDialogService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        TdDialogService.ctorParameters = function () {
            return [
                { type: dialog.MatDialog }
            ];
        };
        return TdDialogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_DIALOGS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
        TdDialogComponent,
        TdDialogTitleDirective,
        TdDialogActionsDirective,
        TdDialogContentDirective,
    ];
    /** @type {?} */
    var TD_DIALOGS_ENTRY_COMPONENTS = [
        TdAlertDialogComponent,
        TdConfirmDialogComponent,
        TdPromptDialogComponent,
    ];
    var CovalentDialogsModule = /** @class */ (function () {
        function CovalentDialogsModule() {
        }
        CovalentDialogsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            dialog.MatDialogModule,
                            input.MatInputModule,
                            button.MatButtonModule,
                        ],
                        declarations: [
                            TD_DIALOGS,
                        ],
                        exports: [
                            TD_DIALOGS,
                        ],
                        providers: [
                            TdDialogService,
                        ],
                        entryComponents: [
                            TD_DIALOGS_ENTRY_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentDialogsModule;
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
    var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelHeaderDirective, _super);
        function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelHeaderDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-expansion-panel-header]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelHeaderDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdExpansionPanelHeaderDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelLabelDirective, _super);
        function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelLabelDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-expansion-panel-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelLabelDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdExpansionPanelLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
        __extends(TdExpansionPanelSublabelDirective, _super);
        function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdExpansionPanelSublabelDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-expansion-panel-sublabel]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdExpansionPanelSublabelDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdExpansionPanelSublabelDirective;
    }(portal.TemplatePortalDirective));
    var TdExpansionPanelSummaryComponent = /** @class */ (function () {
        function TdExpansionPanelSummaryComponent() {
        }
        TdExpansionPanelSummaryComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-expansion-summary',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        return TdExpansionPanelSummaryComponent;
    }());
    var TdExpansionPanelBase = /** @class */ (function () {
        function TdExpansionPanelBase() {
        }
        return TdExpansionPanelBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdExpansionPanelMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdExpansionPanelBase));
    var TdExpansionPanelComponent = /** @class */ (function (_super) {
        __extends(TdExpansionPanelComponent, _super);
        function TdExpansionPanelComponent(_renderer, _elementRef) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._elementRef = _elementRef;
            _this._expand = false;
            /**
             * expanded?: function
             * Event emitted when [TdExpansionPanelComponent] is expanded.
             */
            _this.expanded = new core$1.EventEmitter();
            /**
             * collapsed?: function
             * Event emitted when [TdExpansionPanelComponent] is collapsed.
             */
            _this.collapsed = new core$1.EventEmitter();
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
            return _this;
        }
        Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
            get: /**
             * @return {?}
             */ function () {
                return this._expand;
            },
            /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             */
            set: /**
             * expand?: boolean
             * Toggles [TdExpansionPanelComponent] between expand/collapse.
             * @param {?} expand
             * @return {?}
             */ function (expand) {
                this._setExpand(coercion.coerceBooleanProperty(expand));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         */
        /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.clickEvent = /**
         * Method executed when [TdExpansionPanelComponent] is clicked.
         * @return {?}
         */
            function () {
                this._setExpand(!this._expand);
            };
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.toggle = /**
         * Toggle expand state of [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setExpand(!this._expand);
            };
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.open = /**
         * Opens [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setExpand(true);
            };
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.close = /**
         * Closes [TdExpansionPanelComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setExpand(false);
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdExpansionPanelComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v && this._expand) {
                    this._expand = false;
                    this._onCollapsed();
                }
            };
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         */
        /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @param {?} newExpand
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._setExpand = /**
         * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * @param {?} newExpand
         * @return {?}
         */
            function (newExpand) {
                if (this.disabled) {
                    return false;
                }
                if (this._expand !== newExpand) {
                    this._expand = newExpand;
                    if (newExpand) {
                        this._renderer.addClass(this._elementRef.nativeElement, 'td-expanded');
                        this._onExpanded();
                    }
                    else {
                        this._renderer.removeClass(this._elementRef.nativeElement, 'td-expanded');
                        this._onCollapsed();
                    }
                    return true;
                }
                return false;
            };
        /**
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onExpanded = /**
         * @return {?}
         */
            function () {
                this.expanded.emit(undefined);
            };
        /**
         * @return {?}
         */
        TdExpansionPanelComponent.prototype._onCollapsed = /**
         * @return {?}
         */
            function () {
                this.collapsed.emit(undefined);
            };
        TdExpansionPanelComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-expansion-panel',
                        template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalOutlet]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalOutlet]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                        inputs: ['disabled', 'disableRipple'],
                        animations: [
                            common$1.tdCollapseAnimation,
                            common$1.tdRotateAnimation,
                        ],
                        styles: [":host{display:block}:host .td-expansion-panel-header{position:relative;outline:0}:host .td-expansion-panel-header:focus:not(.mat-disabled),:host .td-expansion-panel-header:hover:not(.mat-disabled){cursor:pointer}:host .td-expansion-panel-header .td-expansion-panel-header-content{height:48px;padding:0 24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,:host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-expansion-content.ng-animating,:host .td-expansion-summary.ng-animating{overflow:hidden}.td-expansion-label,.td-expansion-sublabel{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:16px}::ng-deep [dir=rtl] .td-expansion-label,::ng-deep [dir=rtl] .td-expansion-sublabel{margin-left:16px;margin-right:inherit}"]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdExpansionPanelComponent.propDecorators = {
            expansionPanelHeader: [{ type: core$1.ContentChild, args: [TdExpansionPanelHeaderDirective,] }],
            expansionPanelLabel: [{ type: core$1.ContentChild, args: [TdExpansionPanelLabelDirective,] }],
            expansionPanelSublabel: [{ type: core$1.ContentChild, args: [TdExpansionPanelSublabelDirective,] }],
            label: [{ type: core$1.Input }],
            sublabel: [{ type: core$1.Input }],
            expand: [{ type: core$1.Input, args: ['expand',] }],
            expanded: [{ type: core$1.Output }],
            collapsed: [{ type: core$1.Output }]
        };
        return TdExpansionPanelComponent;
    }(_TdExpansionPanelMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdExpansionPanelGroupComponent = /** @class */ (function () {
        function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._multi = false;
            this._lastOpenedPanels = [];
            this._destroyed = new rxjs.Subject();
            this._stopWatchingPanels = new rxjs.Subject();
            this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
        }
        Object.defineProperty(TdExpansionPanelGroupComponent.prototype, "multi", {
            /**
             * multi?: boolean
             * Sets whether multiple panels can be opened at a given time.
             * Set to false for accordion mode.
             * Defaults to false.
             */
            set: /**
             * multi?: boolean
             * Sets whether multiple panels can be opened at a given time.
             * Set to false for accordion mode.
             * Defaults to false.
             * @param {?} multi
             * @return {?}
             */ function (multi) {
                this._multi = coercion.coerceBooleanProperty(multi);
                if (this._multi === false && this._lastOpenedPanels.length > 0) {
                    this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroyed.next(true);
                this._destroyed.unsubscribe();
                this._stopWatchingPanels.next(true);
                this._stopWatchingPanels.unsubscribe();
            };
        /**
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this._multi) {
                    /** @type {?} */
                    var openedPanels = this.expansionPanels.filter(function (expansionPanel) { return expansionPanel.expand; });
                    /** @type {?} */
                    var numOpenedPanels = openedPanels.length;
                    if (numOpenedPanels > 1) {
                        this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
                    }
                }
                this._attachListeners(this.expansionPanels);
                this.expansionPanels.changes
                    .pipe(operators.takeUntil(this._destroyed))
                    .subscribe(function (expansionPanels) {
                    _this._stopWatchingPanels.next(true);
                    _this._stopWatchingPanels.unsubscribe();
                    _this._stopWatchingPanels = new rxjs.Subject();
                    _this._attachListeners(expansionPanels);
                });
            };
        /**
         * Opens all expansion panels, only if multi set set to true.
         */
        /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.openAll = /**
         * Opens all expansion panels, only if multi set set to true.
         * @return {?}
         */
            function () {
                if (this._multi) {
                    this.expansionPanels.forEach(function (expansionPanel) {
                        expansionPanel.open();
                    });
                }
            };
        /**
         * Closes all expansion panels
         */
        /**
         * Closes all expansion panels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype.closeAll = /**
         * Closes all expansion panels
         * @return {?}
         */
            function () {
                this.expansionPanels.forEach(function (expansionPanel) {
                    expansionPanel.close();
                });
            };
        /**
         * @param {?} expansionPanels
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._attachListeners = /**
         * @param {?} expansionPanels
         * @return {?}
         */
            function (expansionPanels) {
                var _this = this;
                this._lastOpenedPanels = [];
                expansionPanels.forEach(function (expansionPanel) {
                    expansionPanel.expanded
                        .pipe(operators.takeUntil(_this._stopWatchingPanels))
                        .subscribe(function () {
                        /** @type {?} */
                        var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                        if (indexOfPanel !== -1) {
                            _this._lastOpenedPanels.splice(indexOfPanel, 1);
                        }
                        _this._lastOpenedPanels.push(expansionPanel);
                        if (!_this._multi) {
                            _this._closeAllExcept(expansionPanel);
                        }
                    });
                    expansionPanel.collapsed
                        .pipe(operators.takeUntil(_this._stopWatchingPanels))
                        .subscribe(function () {
                        /** @type {?} */
                        var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                        if (indexOfPanel !== -1) {
                            _this._lastOpenedPanels.splice(indexOfPanel, 1);
                        }
                    });
                });
            };
        /**
         * @param {?} expansionPanel
         * @return {?}
         */
        TdExpansionPanelGroupComponent.prototype._closeAllExcept = /**
         * @param {?} expansionPanel
         * @return {?}
         */
            function (expansionPanel) {
                this.expansionPanels.forEach(function (panel) {
                    if (panel !== expansionPanel) {
                        panel.close();
                    }
                });
            };
        TdExpansionPanelGroupComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-expansion-panel-group',
                        template: "<ng-content></ng-content>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdExpansionPanelGroupComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdExpansionPanelGroupComponent.propDecorators = {
            multi: [{ type: core$1.Input, args: ['multi',] }],
            expansionPanels: [{ type: core$1.ContentChildren, args: [TdExpansionPanelComponent,] }]
        };
        return TdExpansionPanelGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_EXPANSION_PANEL = [
        TdExpansionPanelGroupComponent,
        TdExpansionPanelComponent,
        TdExpansionPanelHeaderDirective,
        TdExpansionPanelLabelDirective,
        TdExpansionPanelSublabelDirective,
        TdExpansionPanelSummaryComponent,
    ];
    var CovalentExpansionPanelModule = /** @class */ (function () {
        function CovalentExpansionPanelModule() {
        }
        CovalentExpansionPanelModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            core.MatRippleModule,
                            icon.MatIconModule,
                            portal.PortalModule,
                        ],
                        declarations: [
                            TD_EXPANSION_PANEL,
                        ],
                        exports: [
                            TD_EXPANSION_PANEL,
                        ],
                    },] }
        ];
        return CovalentExpansionPanelModule;
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
    var TdFileSelectDirective = /** @class */ (function () {
        function TdFileSelectDirective(model) {
            this.model = model;
            this._multiple = false;
            /**
             * fileSelect?: function
             * Event emitted when a file or files are selected in host [HTMLInputElement].
             * Emits a [FileList | File] object.
             * Alternative to not use [(ngModel)].
             */
            this.onFileSelect = new core$1.EventEmitter();
        }
        Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             */
            set: /**
             * multiple?: boolean
             * Sets whether multiple files can be selected at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             */
            get: /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */ function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
         */
        /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
         * @param {?} event
         * @return {?}
         */
        TdFileSelectDirective.prototype.onChange = /**
         * Listens to 'change' host event to get [HTMLInputElement] files.
         * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.target instanceof HTMLInputElement) {
                    /** @type {?} */
                    var fileInputEl = (( /** @type {?} */(event.target)));
                    /** @type {?} */
                    var files = fileInputEl.files;
                    if (files.length) {
                        /** @type {?} */
                        var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                        this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
                    }
                }
            };
        TdFileSelectDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdFileSelect]',
                    },] }
        ];
        /** @nocollapse */
        TdFileSelectDirective.ctorParameters = function () {
            return [
                { type: forms.NgModel, decorators: [{ type: core$1.Optional }, { type: core$1.Host }] }
            ];
        };
        TdFileSelectDirective.propDecorators = {
            multiple: [{ type: core$1.Input, args: ['multiple',] }],
            onFileSelect: [{ type: core$1.Output, args: ['fileSelect',] }],
            multipleBinding: [{ type: core$1.HostBinding, args: ['attr.multiple',] }],
            onChange: [{ type: core$1.HostListener, args: ['change', ['$event'],] }]
        };
        return TdFileSelectDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileDropBase = /** @class */ (function () {
        function TdFileDropBase() {
        }
        return TdFileDropBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileDropMixinBase = common$1.mixinDisabled(TdFileDropBase);
    var TdFileDropDirective = /** @class */ (function (_super) {
        __extends(TdFileDropDirective, _super);
        function TdFileDropDirective(_renderer, _element) {
            var _this = _super.call(this) || this;
            _this._renderer = _renderer;
            _this._element = _element;
            _this._multiple = false;
            /**
             * fileDrop?: function
             * Event emitted when a file or files are dropped in host element after being validated.
             * Emits a [FileList | File] object.
             */
            _this.onFileDrop = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
            /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             */
            set: /**
             * multiple?: boolean
             * Sets whether multiple files can be dropped at once in host element, or just a single file.
             * Can also be 'multiple' native attribute.
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
            /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             */
            get: /**
             * Binds native 'multiple' attribute if [multiple] property is 'true'.
             * @return {?}
             */ function () {
                return this._multiple ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
            /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             */
            get: /**
             * Binds native 'disabled' attribute if [disabled] property is 'true'.
             * @return {?}
             */ function () {
                return this.disabled ? '' : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         */
        /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDrop = /**
         * Listens to 'drop' host event to get validated transfer items.
         * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
         * Stops event propagation and default action from browser for 'drop' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.disabled) {
                    /** @type {?} */
                    var transfer = (( /** @type {?} */(event))).dataTransfer;
                    /** @type {?} */
                    var files = transfer.files;
                    if (files.length) {
                        /** @type {?} */
                        var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                        this.onFileDrop.emit(value);
                    }
                }
                this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
                this._stopEvent(event);
            };
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         */
        /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragOver = /**
         * Listens to 'dragover' host event to validate transfer items.
         * Checks if 'multiple' attr exists in host to allow multiple file drops.
         * Stops event propagation and default action from browser for 'dragover' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var transfer = (( /** @type {?} */(event))).dataTransfer;
                transfer.dropEffect = this._typeCheck(transfer.types);
                if (this.disabled || (!this._multiple &&
                    ((transfer.items && transfer.items.length > 1) || (( /** @type {?} */(transfer))).mozItemCount > 1))) {
                    transfer.dropEffect = 'none';
                }
                else {
                    transfer.dropEffect = 'copy';
                }
                this._stopEvent(event);
            };
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         */
        /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragEnter = /**
         * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
         * Stops event propagation and default action from browser for 'dragenter' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.disabled) {
                    this._renderer.addClass(this._element.nativeElement, 'drop-zone');
                }
                this._stopEvent(event);
            };
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         */
        /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype.onDragLeave = /**
         * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
         * Stops event propagation and default action from browser for 'dragleave' event.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
                this._stopEvent(event);
            };
        /**
         * Validates if the transfer item types are 'Files'.
         */
        /**
         * Validates if the transfer item types are 'Files'.
         * @param {?} types
         * @return {?}
         */
        TdFileDropDirective.prototype._typeCheck = /**
         * Validates if the transfer item types are 'Files'.
         * @param {?} types
         * @return {?}
         */
            function (types) {
                /** @type {?} */
                var dropEffect = 'none';
                if (types) {
                    if (((( /** @type {?} */(types))).contains && (( /** @type {?} */(types))).contains('Files'))
                        || ((( /** @type {?} */(types))).indexOf && (( /** @type {?} */(types))).indexOf('Files') !== -1)) {
                        dropEffect = 'copy';
                    }
                }
                return dropEffect;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdFileDropDirective.prototype._stopEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
            };
        TdFileDropDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdFileDrop]',
                        inputs: ['disabled'],
                    },] }
        ];
        /** @nocollapse */
        TdFileDropDirective.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdFileDropDirective.propDecorators = {
            multiple: [{ type: core$1.Input, args: ['multiple',] }],
            onFileDrop: [{ type: core$1.Output, args: ['fileDrop',] }],
            multipleBinding: [{ type: core$1.HostBinding, args: ['attr.multiple',] }],
            disabledBinding: [{ type: core$1.HostBinding, args: ['attr.disabled',] }],
            onDrop: [{ type: core$1.HostListener, args: ['drop', ['$event'],] }],
            onDragOver: [{ type: core$1.HostListener, args: ['dragover', ['$event'],] }],
            onDragEnter: [{ type: core$1.HostListener, args: ['dragenter', ['$event'],] }],
            onDragLeave: [{ type: core$1.HostListener, args: ['dragleave', ['$event'],] }]
        };
        return TdFileDropDirective;
    }(_TdFileDropMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileInputLabelDirective = /** @class */ (function (_super) {
        __extends(TdFileInputLabelDirective, _super);
        function TdFileInputLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdFileInputLabelDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-file-input-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdFileInputLabelDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdFileInputLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdFileInputBase = /** @class */ (function () {
        function TdFileInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileInputBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileInputMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileInputBase));
    var TdFileInputComponent = /** @class */ (function (_super) {
        __extends(TdFileInputComponent, _super);
        function TdFileInputComponent(_renderer, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._renderer = _renderer;
            _this._multiple = false;
            /**
             * select?: function
             * Event emitted a file is selected
             * Emits a [File | FileList] object.
             */
            _this.onSelect = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
            get: /**
             * @return {?}
             */ function () {
                return this._inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             */
            set: /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when a file is selected.
         */
        /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
        TdFileInputComponent.prototype.handleSelect = /**
         * Method executed when a file is selected.
         * @param {?} files
         * @return {?}
         */
            function (files) {
                this.writeValue(files);
                this.onSelect.emit(files);
            };
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         */
        /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
        TdFileInputComponent.prototype.clear = /**
         * Used to clear the selected files from the [TdFileInputComponent].
         * @return {?}
         */
            function () {
                this.writeValue(undefined);
                this._renderer.setProperty(this.inputElement, 'value', '');
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileInputComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v) {
                    this.clear();
                }
            };
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         */
        /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        TdFileInputComponent.prototype.setDisabledState = /**
         * Sets disable to the component. Implemented as part of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        TdFileInputComponent.decorators = [
            { type: core$1.Component, args: [{
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdFileInputComponent; }),
                                multi: true,
                            }],
                        selector: 'td-file-input',
                        inputs: ['disabled', 'value'],
                        template: "<div>\n  <button mat-raised-button\n          class=\"td-file-input\"\n          type=\"button\"\n          [color]=\"color\" \n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          (keyup.enter)=\"fileInput.click()\"\n          (click)=\"fileInput.click()\"\n          (fileDrop)=\"handleSelect($event)\"\n          tdFileDrop>\n    <ng-content></ng-content>\n  </button>\n  <input #fileInput \n          class=\"td-file-input-hidden\" \n          type=\"file\"\n          [attr.accept]=\"accept\"                \n          (fileSelect)=\"handleSelect($event)\"\n          [multiple]=\"multiple\" \n          [disabled]=\"disabled\"\n          tdFileSelect>\n</div>",
                        styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileInputComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdFileInputComponent.propDecorators = {
            _inputElement: [{ type: core$1.ViewChild, args: ['fileInput',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            multiple: [{ type: core$1.Input, args: ['multiple',] }],
            accept: [{ type: core$1.Input, args: ['accept',] }],
            onSelect: [{ type: core$1.Output, args: ['select',] }]
        };
        return TdFileInputComponent;
    }(_TdFileInputMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileUploadBase = /** @class */ (function () {
        function TdFileUploadBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdFileUploadBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdFileUploadMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileUploadBase));
    var TdFileUploadComponent = /** @class */ (function (_super) {
        __extends(TdFileUploadComponent, _super);
        function TdFileUploadComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._multiple = false;
            _this._required = false;
            /**
             * defaultColor?: string
             * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
             */
            _this.defaultColor = 'primary';
            /**
             * activeColor?: string
             * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
             */
            _this.activeColor = 'accent';
            /**
             * cancelColor?: string
             * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
             */
            _this.cancelColor = 'warn';
            /**
             * select?: function
             * Event emitted when a file is selected.
             * Emits a [File | FileList] object.
             */
            _this.onSelect = new core$1.EventEmitter();
            /**
             * upload?: function
             * Event emitted when upload button is clicked.
             * Emits a [File | FileList] object.
             */
            _this.onUpload = new core$1.EventEmitter();
            /**
             * cancel?: function
             * Event emitted when cancel button is clicked.
             */
            _this.onCancel = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
            get: /**
             * @return {?}
             */ function () {
                return this._multiple;
            },
            /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             */
            set: /**
             * multiple?: boolean
             * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
             * @param {?} multiple
             * @return {?}
             */ function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdFileUploadComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             */
            set: /**
             * required?: boolean
             * Forces at least one file upload.
             * Defaults to 'false'
             * @param {?} required
             * @return {?}
             */ function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when upload button is clicked.
         */
        /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
        TdFileUploadComponent.prototype.uploadPressed = /**
         * Method executed when upload button is clicked.
         * @return {?}
         */
            function () {
                if (this.value) {
                    this.onUpload.emit(this.value);
                }
            };
        /**
         * Method executed when a file is selected.
         */
        /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
        TdFileUploadComponent.prototype.handleSelect = /**
         * Method executed when a file is selected.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.value = value;
                this.onSelect.emit(value);
            };
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         */
        /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
        TdFileUploadComponent.prototype.cancel = /**
         * Methods executed when cancel button is clicked.
         * Clears files.
         * @return {?}
         */
            function () {
                this.value = undefined;
                this.onCancel.emit(undefined);
                // check if the file input is rendered before clearing it
                if (this.fileInput) {
                    this.fileInput.clear();
                }
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdFileUploadComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v) {
                    this.cancel();
                }
            };
        TdFileUploadComponent.decorators = [
            { type: core$1.Component, args: [{
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdFileUploadComponent; }),
                                multi: true,
                            }],
                        selector: 'td-file-upload',
                        inputs: ['disabled', 'value'],
                        template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\"> \n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"            \n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
                        styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdFileUploadComponent.ctorParameters = function () {
            return [
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdFileUploadComponent.propDecorators = {
            fileInput: [{ type: core$1.ViewChild, args: [TdFileInputComponent,] }],
            inputLabel: [{ type: core$1.ContentChild, args: [TdFileInputLabelDirective,] }],
            defaultColor: [{ type: core$1.Input, args: ['defaultColor',] }],
            activeColor: [{ type: core$1.Input, args: ['activeColor',] }],
            cancelColor: [{ type: core$1.Input, args: ['cancelColor',] }],
            multiple: [{ type: core$1.Input, args: ['multiple',] }],
            required: [{ type: core$1.Input, args: ['required',] }],
            accept: [{ type: core$1.Input, args: ['accept',] }],
            onSelect: [{ type: core$1.Output, args: ['select',] }],
            onUpload: [{ type: core$1.Output, args: ['upload',] }],
            onCancel: [{ type: core$1.Output, args: ['cancel',] }]
        };
        return TdFileUploadComponent;
    }(_TdFileUploadMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdFileService = /** @class */ (function () {
        function TdFileService() {
            this._progressSubject = new rxjs.Subject();
            this._progressObservable = this._progressSubject.asObservable();
        }
        Object.defineProperty(TdFileService.prototype, "progress", {
            /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             */
            get: /**
             * Gets progress observable to keep track of the files being uploaded.
             * Needs to be supported by backend.
             * @return {?}
             */ function () {
                return this._progressObservable;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
         */
        /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
         * @param {?} options
         * @return {?}
         */
        TdFileService.prototype.upload = /**
         * params:
         * - options: IUploadOptions {
         *     url: string,
         *     method: 'post' | 'put',
         *     file?: File,
         *     headers?: {[key: string]: string},
         *     formData?: FormData
         * }
         *
         * Uses underlying [XMLHttpRequest] to upload a file to a url.
         * Will be depricated when Angular fixes [Http] to allow [FormData] as body.
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                return new rxjs.Observable(function (subscriber) {
                    /** @type {?} */
                    var xhr = new XMLHttpRequest();
                    /** @type {?} */
                    var formData = new FormData();
                    if (options.file !== undefined) {
                        formData.append('file', options.file);
                    }
                    else if (options.formData !== undefined) {
                        formData = options.formData;
                    }
                    else {
                        return subscriber.error('For [IUploadOptions] you have to set either the [file] or the [formData] property.');
                    }
                    xhr.upload.onprogress = function (event) {
                        /** @type {?} */
                        var progress = 0;
                        if (event.lengthComputable) {
                            progress = Math.round(event.loaded / event.total * 100);
                        }
                        _this._progressSubject.next(progress);
                    };
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                subscriber.next(xhr.response);
                                subscriber.complete();
                            }
                            else {
                                subscriber.error(xhr.response);
                            }
                        }
                    };
                    xhr.open(options.method, options.url, true);
                    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                    if (options.headers) {
                        for (var key in options.headers) {
                            xhr.setRequestHeader(key, options.headers[key]);
                        }
                    }
                    xhr.send(formData);
                });
            };
        TdFileService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        TdFileService.ctorParameters = function () { return []; };
        return TdFileService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_FILE = [
        TdFileSelectDirective,
        TdFileDropDirective,
        TdFileUploadComponent,
        TdFileInputComponent,
        TdFileInputLabelDirective,
    ];
    var CovalentFileModule = /** @class */ (function () {
        function CovalentFileModule() {
        }
        CovalentFileModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                            portal.PortalModule,
                        ],
                        declarations: [
                            TD_FILE,
                        ],
                        exports: [
                            TD_FILE,
                        ],
                        providers: [
                            TdFileService,
                        ],
                    },] }
        ];
        return CovalentFileModule;
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
    var TdJsonFormatterComponent = /** @class */ (function () {
        function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
            this._changeDetectorRef = _changeDetectorRef;
            this._dir = _dir;
            this._open = false;
            this._levelsOpen = 0;
        }
        Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
            get: /**
             * @return {?}
             */ function () {
                return this._levelsOpen;
            },
            /**
             * levelsOpen?: number
             * Levels opened by default when JS object is formatted and rendered.
             */
            set: /**
             * levelsOpen?: number
             * Levels opened by default when JS object is formatted and rendered.
             * @param {?} levelsOpen
             * @return {?}
             */ function (levelsOpen) {
                if (!Number.isInteger(levelsOpen)) {
                    throw new Error('[levelsOpen] needs to be an integer.');
                }
                this._levelsOpen = levelsOpen;
                this._open = levelsOpen > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "open", {
            get: /**
             * @return {?}
             */ function () {
                return this._open;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
                return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
            },
            /**
             * key?: string
             * Tag to be displayed next to formatted object.
             */
            set: /**
             * key?: string
             * Tag to be displayed next to formatted object.
             * @param {?} key
             * @return {?}
             */ function (key) {
                this._key = key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            /**
             * data: any
             * JS object to be formatted.
             */
            set: /**
             * data: any
             * JS object to be formatted.
             * @param {?} data
             * @return {?}
             */ function (data) {
                this._data = data;
                this.parseChildren();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
            get: /**
             * @return {?}
             */ function () {
                return this._children;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */ function () {
                if (this._dir) {
                    return this._dir.dir === 'rtl';
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Refreshes json-formatter and rerenders [data]
         */
        /**
         * Refreshes json-formatter and rerenders [data]
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.refresh = /**
         * Refreshes json-formatter and rerenders [data]
         * @return {?}
         */
            function () {
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Toggles collapse/expanded state of component.
         */
        /**
         * Toggles collapse/expanded state of component.
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.toggle = /**
         * Toggles collapse/expanded state of component.
         * @return {?}
         */
            function () {
                this._open = !this._open;
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.isObject = /**
         * @return {?}
         */
            function () {
                return this.getType(this._data) === 'object';
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.isArray = /**
         * @return {?}
         */
            function () {
                return Array.isArray(this._data);
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.hasChildren = /**
         * @return {?}
         */
            function () {
                return this._children && this._children.length > 0;
            };
        /**
         * Gets parsed value depending on value type.
         */
        /**
         * Gets parsed value depending on value type.
         * @param {?} value
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getValue = /**
         * Gets parsed value depending on value type.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var type = this.getType(value);
                if (type === 'undefined' || (type === 'null')) {
                    return type;
                }
                else if (type === 'date') {
                    value = new Date(value).toString();
                }
                else if (type === 'string') {
                    value = '"' + value + '"';
                }
                else if (type === 'function') {
                    // Remove content of the function
                    return value.toString()
                        .replace(/[\r\n]/g, '')
                        .replace(/\{.*\}/, '') + '{…}';
                }
                else if (Array.isArray(value)) {
                    return this.getObjectName() + ' [' + value.length + ']';
                }
                return value;
            };
        /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         */
        /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         * @param {?} object
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getType = /**
         * Gets type of object.
         * returns 'null' if object is null and 'date' if value is object and can be parsed to a date.
         * @param {?} object
         * @return {?}
         */
            function (object) {
                if (typeof object === 'object') {
                    if (!object) {
                        return 'null';
                    }
                    if (Array.isArray(object)) {
                        return 'object';
                    }
                    /** @type {?} */
                    var date = new Date(object);
                    if (Object.prototype.toString.call(date) === '[object Date]') {
                        if (!Number.isNaN(date.getTime())) {
                            return 'date';
                        }
                    }
                }
                return typeof object;
            };
        /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         */
        /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getObjectName = /**
         * Generates string representation depending if its an object or function.
         * see: http://stackoverflow.com/a/332429
         * @return {?}
         */
            function () {
                /** @type {?} */
                var object = this._data;
                if (this.isObject() && !object.constructor) {
                    return 'Object';
                }
                /** @type {?} */
                var funcNameRegex = /function (.{1,})\(/;
                /** @type {?} */
                var results = (funcNameRegex).exec((object).constructor.toString());
                if (results && results.length > 1) {
                    return results[1];
                }
                else {
                    return '';
                }
            };
        /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         */
        /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.getPreview = /**
         * Creates preview of nodes children to render in tooltip depending if its an array or an object.
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var previewData;
                /** @type {?} */
                var startChar = '{ ';
                /** @type {?} */
                var endChar = ' }';
                if (this.isArray()) {
                    /** @type {?} */
                    var previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
                    previewData = previewArray.map(function (obj) {
                        return _this.getValue(obj);
                    });
                    startChar = '[';
                    endChar = ']';
                }
                else {
                    /** @type {?} */
                    var previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
                    previewData = previewKeys.map(function (key) {
                        return key + ': ' + _this.getValue(_this._data[key]);
                    });
                }
                /** @type {?} */
                var previewString = previewData.join(', ');
                /** @type {?} */
                var ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
                    previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
                return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
                    ellipsis + endChar;
            };
        /**
         * @return {?}
         */
        TdJsonFormatterComponent.prototype.parseChildren = /**
         * @return {?}
         */
            function () {
                if (this.isObject()) {
                    this._children = [];
                    for (var key in this._data) {
                        this._children.push(key);
                    }
                }
            };
        /**
         * Max length for property names. Any names bigger than this get trunctated.
         */
        TdJsonFormatterComponent.KEY_MAX_LENGTH = 30;
        /**
         * Max length for preview string. Any names bigger than this get trunctated.
         */
        TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH = 80;
        /**
         * Max tooltip preview elements.
         */
        TdJsonFormatterComponent.PREVIEW_LIMIT = 5;
        TdJsonFormatterComponent.decorators = [
            { type: core$1.Component, args: [{
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        selector: 'td-json-formatter',
                        template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                        animations: [
                            common$1.tdCollapseAnimation,
                        ],
                        styles: [":host{display:block}.td-json-formatter-wrapper{padding-top:2px;padding-bottom:2px}.td-json-formatter-wrapper .td-key{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-json-formatter-wrapper .td-key.td-key-node:hover{cursor:pointer}.td-json-formatter-wrapper .td-object-children.ng-animating{overflow:hidden}.td-json-formatter-wrapper .td-object-children .td-key,.td-json-formatter-wrapper .td-object-children .td-object-children{padding-left:24px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children{padding-right:24px;padding-left:0}.td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,.td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-left:48px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,::ng-deep [dir=rtl] .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{padding-right:48px;padding-left:0}.td-json-formatter-wrapper .value{margin-left:5px}::ng-deep [dir=rtl] .td-json-formatter-wrapper .value{padding-right:5px;padding-left:0}.td-json-formatter-wrapper .value .td-empty{opacity:.5;text-decoration:line-through}.td-json-formatter-wrapper .value .date,.td-json-formatter-wrapper .value .string{word-break:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        TdJsonFormatterComponent.ctorParameters = function () {
            return [
                { type: core$1.ChangeDetectorRef },
                { type: bidi.Dir, decorators: [{ type: core$1.Optional }] }
            ];
        };
        TdJsonFormatterComponent.propDecorators = {
            levelsOpen: [{ type: core$1.Input, args: ['levelsOpen',] }],
            key: [{ type: core$1.Input, args: ['key',] }],
            data: [{ type: core$1.Input, args: ['data',] }]
        };
        return TdJsonFormatterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentJsonFormatterModule = /** @class */ (function () {
        function CovalentJsonFormatterModule() {
        }
        CovalentJsonFormatterModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            tooltip.MatTooltipModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TdJsonFormatterComponent,
                        ],
                        exports: [
                            TdJsonFormatterComponent,
                        ],
                    },] }
        ];
        return CovalentJsonFormatterModule;
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
    var TdLayoutComponent = /** @class */ (function () {
        function TdLayoutComponent() {
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "over".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'over';
            /**
             * opened?: boolean
             *
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "false".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = false;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "320px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '320px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */ function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.toggle(!this.sidenav.opened);
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.close();
            };
        TdLayoutComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-layout',
                        template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\">\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
                        styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host ::ng-deep>mat-sidenav-container .mat-drawer>.mat-drawer-inner-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
                    }] }
        ];
        TdLayoutComponent.propDecorators = {
            sidenav: [{ type: core$1.ViewChild, args: [sidenav.MatSidenav,] }],
            mode: [{ type: core$1.Input, args: ['mode',] }],
            opened: [{ type: core$1.Input, args: ['opened',] }],
            sidenavWidth: [{ type: core$1.Input, args: ['sidenavWidth',] }],
            containerAutosize: [{ type: core$1.Input, args: ['containerAutosize',] }]
        };
        return TdLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LayoutToggleBase = /** @class */ (function () {
        function LayoutToggleBase() {
        }
        return LayoutToggleBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdLayoutToggleMixinBase = common$1.mixinDisabled(LayoutToggleBase);
    /**
     * @abstract
     */
    var LayoutToggle = /** @class */ (function (_super) {
        __extends(LayoutToggle, _super);
        function LayoutToggle(_layout, _renderer, _elementRef) {
            var _this = _super.call(this) || this;
            _this._layout = _layout;
            _this._renderer = _renderer;
            _this._elementRef = _elementRef;
            _this._initialized = false;
            _this._hideWhenOpened = false;
            // if layout has not been provided
            // show warn message
            if (!_this._layout) {
                _this._noLayoutMessage();
            }
            _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
            return _this;
        }
        Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
            /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             */
            set: /**
             * hideWhenOpened?: boolean
             * When this is set to true, the host will be hidden when
             * the sidenav is opened.
             * @param {?} hideWhenOpened
             * @return {?}
             */ function (hideWhenOpened) {
                this._hideWhenOpened = hideWhenOpened;
                if (this._initialized) {
                    this._toggleVisibility();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LayoutToggle.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._initialized = true;
                if (this._layout && this._layout.sidenav) {
                    this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
                        _this._toggleVisibility();
                    });
                }
                // execute toggleVisibility since the onOpenStart and onCloseStart
                // methods might not be executed always when the element is rendered
                this._toggleVisibility();
            };
        /**
         * @return {?}
         */
        LayoutToggle.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._toggleSubs) {
                    this._toggleSubs.unsubscribe();
                    this._toggleSubs = undefined;
                }
            };
        /**
         * Listens to host click event to trigger the layout toggle
         */
        /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
        LayoutToggle.prototype.clickListener = /**
         * Listens to host click event to trigger the layout toggle
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                if (!this.disabled) {
                    // if layout has been provided, try triggering the click on it
                    // else show warn message
                    if (this._layout && this._layout.open) {
                        this.onClick();
                    }
                    else {
                        this._noLayoutMessage();
                    }
                }
            };
        /**
         * @return {?}
         */
        LayoutToggle.prototype._toggleVisibility = /**
         * @return {?}
         */
            function () {
                if (this._layout) {
                    if (this._layout.sidenav.opened && this._hideWhenOpened) {
                        this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
                    }
                    else {
                        this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
                    }
                }
            };
        /**
         * @return {?}
         */
        LayoutToggle.prototype._noLayoutMessage = /**
         * @return {?}
         */
            function () {
                /* tslint:disable-next-line */
                console.warn('Covalent: Parent layout not found for layout toggle directive');
            };
        LayoutToggle.propDecorators = {
            hideWhenOpened: [{ type: core$1.Input, args: ['hideWhenOpened',] }],
            clickListener: [{ type: core$1.HostListener, args: ['click', ['$event'],] }]
        };
        return LayoutToggle;
    }(_TdLayoutToggleMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutToggleDirective, _super);
        function TdLayoutToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
            set: /**
             * @param {?} tdLayoutToggle
             * @return {?}
             */ function (tdLayoutToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutToggle)) === '' || tdLayoutToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.toggle();
            };
        TdLayoutToggleDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutToggleDirective.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutToggleDirective.propDecorators = {
            tdLayoutToggle: [{ type: core$1.Input, args: ['tdLayoutToggle',] }]
        };
        return TdLayoutToggleDirective;
    }(LayoutToggle));
    var TdLayoutCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutCloseDirective, _super);
        function TdLayoutCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
            set: /**
             * @param {?} tdLayoutClose
             * @return {?}
             */ function (tdLayoutClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutClose)) === '' || tdLayoutClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutCloseDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.close();
            };
        TdLayoutCloseDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutCloseDirective.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutCloseDirective.propDecorators = {
            tdLayoutClose: [{ type: core$1.Input, args: ['tdLayoutClose',] }]
        };
        return TdLayoutCloseDirective;
    }(LayoutToggle));
    var TdLayoutOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutOpenDirective, _super);
        function TdLayoutOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
            set: /**
             * @param {?} tdLayoutOpen
             * @return {?}
             */ function (tdLayoutOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutOpen)) === '' || tdLayoutOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutOpenDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.open();
            };
        TdLayoutOpenDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutOpenDirective.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutOpenDirective.propDecorators = {
            tdLayoutClose: [{ type: core$1.Input, args: ['tdLayoutOpen',] }]
        };
        return TdLayoutOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutNavComponent = /** @class */ (function () {
        function TdLayoutNavComponent(_router) {
            this._router = _router;
            /**
             * color?: string
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLayoutNavComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */ function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
            function () {
                if (this.routerEnabled) {
                    this._router.navigateByUrl(this.navigationRoute);
                }
            };
        TdLayoutNavComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-layout-nav',
                        template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
                        styles: [".td-menu-button{margin-left:0}::ng-deep [dir=rtl] .td-menu-button{margin-right:0;margin-left:6px}:host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host .td-layout-nav-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%}:host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-wrapper .td-layout-nav-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutNavComponent.ctorParameters = function () {
            return [
                { type: router.Router, decorators: [{ type: core$1.Optional }] }
            ];
        };
        TdLayoutNavComponent.propDecorators = {
            toolbarTitle: [{ type: core$1.Input, args: ['toolbarTitle',] }],
            icon: [{ type: core$1.Input, args: ['icon',] }],
            logo: [{ type: core$1.Input, args: ['logo',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            navigationRoute: [{ type: core$1.Input, args: ['navigationRoute',] }]
        };
        return TdLayoutNavComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutNavListComponent = /** @class */ (function () {
        function TdLayoutNavListComponent(_router) {
            this._router = _router;
            /**
             * color?: string
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "side".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'side';
            /**
             * opened?: boolean
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "true".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = true;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "350px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '350px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */ function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */ function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
            function () {
                if (this.routerEnabled) {
                    this._router.navigateByUrl(this.navigationRoute);
                }
            };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.toggle(!this.sidenav.opened);
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutNavListComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.close();
            };
        TdLayoutNavListComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-layout-nav-list',
                        template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
                        styles: [":host{margin:0;width:100%;min-height:100%;height:100%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{-webkit-box-shadow:none;box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutNavListComponent.ctorParameters = function () {
            return [
                { type: router.Router, decorators: [{ type: core$1.Optional }] }
            ];
        };
        TdLayoutNavListComponent.propDecorators = {
            sidenav: [{ type: core$1.ViewChild, args: [sidenav.MatSidenav,] }],
            toolbarTitle: [{ type: core$1.Input, args: ['toolbarTitle',] }],
            icon: [{ type: core$1.Input, args: ['icon',] }],
            logo: [{ type: core$1.Input, args: ['logo',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            mode: [{ type: core$1.Input, args: ['mode',] }],
            opened: [{ type: core$1.Input, args: ['opened',] }],
            sidenavWidth: [{ type: core$1.Input, args: ['sidenavWidth',] }],
            containerAutosize: [{ type: core$1.Input, args: ['containerAutosize',] }],
            navigationRoute: [{ type: core$1.Input, args: ['navigationRoute',] }]
        };
        return TdLayoutNavListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListToggleDirective, _super);
        function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
            set: /**
             * @param {?} tdLayoutNavListToggle
             * @return {?}
             */ function (tdLayoutNavListToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListToggle)) === '' || tdLayoutNavListToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.toggle();
            };
        TdLayoutNavListToggleDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutNavListToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListToggleDirective.ctorParameters = function () {
            return [
                { type: TdLayoutNavListComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutNavListToggleDirective.propDecorators = {
            tdLayoutNavListToggle: [{ type: core$1.Input, args: ['tdLayoutNavListToggle',] }]
        };
        return TdLayoutNavListToggleDirective;
    }(LayoutToggle));
    var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListCloseDirective, _super);
        function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
            set: /**
             * @param {?} tdLayoutNavListClose
             * @return {?}
             */ function (tdLayoutNavListClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListClose)) === '' || tdLayoutNavListClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListCloseDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.close();
            };
        TdLayoutNavListCloseDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutNavListClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListCloseDirective.ctorParameters = function () {
            return [
                { type: TdLayoutNavListComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutNavListCloseDirective.propDecorators = {
            tdLayoutNavListClose: [{ type: core$1.Input, args: ['tdLayoutNavListClose',] }]
        };
        return TdLayoutNavListCloseDirective;
    }(LayoutToggle));
    var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutNavListOpenDirective, _super);
        function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
            set: /**
             * @param {?} tdLayoutNavListOpen
             * @return {?}
             */ function (tdLayoutNavListOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutNavListOpen)) === '' || tdLayoutNavListOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutNavListOpenDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.open();
            };
        TdLayoutNavListOpenDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutNavListOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutNavListOpenDirective.ctorParameters = function () {
            return [
                { type: TdLayoutNavListComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutNavListComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutNavListOpenDirective.propDecorators = {
            tdLayoutNavListOpen: [{ type: core$1.Input, args: ['tdLayoutNavListOpen',] }]
        };
        return TdLayoutNavListOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutCardOverComponent = /** @class */ (function () {
        function TdLayoutCardOverComponent() {
            /**
             * cardWidth?: string
             *
             * Card flex width in %.
             * Defaults to 70%.
             */
            this.cardWidth = 70;
            /**
             * color?: string
             *
             * toolbar color option: primary | accent | warn.
             * If [color] is not set, primary is used.
             */
            this.color = 'primary';
        }
        TdLayoutCardOverComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-layout-card-over',
                        template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                        styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
                    }] }
        ];
        TdLayoutCardOverComponent.propDecorators = {
            cardTitle: [{ type: core$1.Input, args: ['cardTitle',] }],
            cardSubtitle: [{ type: core$1.Input, args: ['cardSubtitle',] }],
            cardWidth: [{ type: core$1.Input, args: ['cardWidth',] }],
            color: [{ type: core$1.Input, args: ['color',] }]
        };
        return TdLayoutCardOverComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutManageListComponent = /** @class */ (function () {
        function TdLayoutManageListComponent() {
            /**
             * mode?: 'side', 'push' or 'over'
             *
             * The mode or styling of the sidenav.
             * Defaults to "side".
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.mode = 'side';
            /**
             * opened?: boolean
             *
             * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
             * Defaults to "true".
             *
             * See "MatSidenav" documentation for more info.
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.opened = true;
            /**
             * sidenavWidth?: string
             *
             * Sets the "width" of the sidenav in either "px" or "%"
             * Defaults to "257px".
             *
             * https://github.com/angular/material2/tree/master/src/lib/sidenav
             */
            this.sidenavWidth = '257px';
            /**
             * containerAutosize?: boolean
             *
             * Sets "autosize" of the sidenav-container.
             * Defaults to "false".
             *
             * See documentation for more info and potential performance risks.
             *
             * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
             */
            this.containerAutosize = false;
        }
        Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
            /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             */
            get: /**
             * Checks if `ESC` should close the sidenav
             * Should only close it for `push` and `over` modes
             * @return {?}
             */ function () {
                return this.mode === 'side';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.toggle(!this.sidenav.opened);
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdLayoutManageListComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this.sidenav.close();
            };
        TdLayoutManageListComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-layout-manage-list',
                        template: "<mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
                        styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;width:100%;min-height:100%;height:100%;overflow:hidden}:host mat-sidenav-container.td-layout-manage-list{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closed,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-closing,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opened,:host mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container.mat-drawer-opening{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2);box-shadow:0 1px 3px 0 rgba(0,0,0,.2)}:host .td-layout-manage-list-sidenav{text-align:start;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch}:host .td-layout-manage-list-main{margin:0;width:100%;min-height:100%;height:100%;position:relative;overflow:auto;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host .td-layout-manage-list-main .td-layout-manage-list-content{display:block;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-box-flex:1;-ms-flex:1;flex:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-manage-list>.mat-drawer>.mat-drawer-inner-container{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{font-size:14px}:host ::ng-deep .mat-toolbar{font-weight:400}"]
                    }] }
        ];
        TdLayoutManageListComponent.propDecorators = {
            sidenav: [{ type: core$1.ViewChild, args: [sidenav.MatSidenav,] }],
            mode: [{ type: core$1.Input, args: ['mode',] }],
            opened: [{ type: core$1.Input, args: ['opened',] }],
            sidenavWidth: [{ type: core$1.Input, args: ['sidenavWidth',] }],
            containerAutosize: [{ type: core$1.Input, args: ['containerAutosize',] }]
        };
        return TdLayoutManageListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListToggleDirective, _super);
        function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
            set: /**
             * @param {?} tdLayoutManageListToggle
             * @return {?}
             */ function (tdLayoutManageListToggle) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListToggle)) === '' || tdLayoutManageListToggle);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListToggleDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.toggle();
            };
        TdLayoutManageListToggleDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutManageListToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListToggleDirective.ctorParameters = function () {
            return [
                { type: TdLayoutManageListComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutManageListToggleDirective.propDecorators = {
            tdLayoutManageListToggle: [{ type: core$1.Input, args: ['tdLayoutManageListToggle',] }]
        };
        return TdLayoutManageListToggleDirective;
    }(LayoutToggle));
    var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListCloseDirective, _super);
        function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
            set: /**
             * @param {?} tdLayoutManageListClose
             * @return {?}
             */ function (tdLayoutManageListClose) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListClose)) === '' || tdLayoutManageListClose);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListCloseDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.close();
            };
        TdLayoutManageListCloseDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutManageListClose]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListCloseDirective.ctorParameters = function () {
            return [
                { type: TdLayoutManageListComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutManageListCloseDirective.propDecorators = {
            tdLayoutManageListClose: [{ type: core$1.Input, args: ['tdLayoutManageListClose',] }]
        };
        return TdLayoutManageListCloseDirective;
    }(LayoutToggle));
    var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
        __extends(TdLayoutManageListOpenDirective, _super);
        function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
            return _super.call(this, layout, renderer, elementRef) || this;
        }
        Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
            set: /**
             * @param {?} tdLayoutManageListOpen
             * @return {?}
             */ function (tdLayoutManageListOpen) {
                this.disabled = !(( /** @type {?} */(tdLayoutManageListOpen)) === '' || tdLayoutManageListOpen);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLayoutManageListOpenDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this._layout.open();
            };
        TdLayoutManageListOpenDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLayoutManageListOpen]',
                    },] }
        ];
        /** @nocollapse */
        TdLayoutManageListOpenDirective.ctorParameters = function () {
            return [
                { type: TdLayoutManageListComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutManageListComponent; }),] }] },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutManageListOpenDirective.propDecorators = {
            tdLayoutManageListOpen: [{ type: core$1.Input, args: ['tdLayoutManageListOpen',] }]
        };
        return TdLayoutManageListOpenDirective;
    }(LayoutToggle));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLayoutFooterComponent = /** @class */ (function () {
        function TdLayoutFooterComponent(_renderer, _elementRef) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
        }
        Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
            get: /**
             * @return {?}
             */ function () {
                return this._color;
            },
            /**
             * color?: string
             *
             * Optional color option: primary | accent | warn.
             */
            set: /**
             * color?: string
             *
             * Optional color option: primary | accent | warn.
             * @param {?} color
             * @return {?}
             */ function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: true,
            configurable: true
        });
        TdLayoutFooterComponent.decorators = [
            { type: core$1.Component, args: [{
                        /* tslint:disable-next-line */
                        selector: 'td-layout-footer,td-layout-footer-inner',
                        template: "<ng-content></ng-content>\n",
                        styles: [":host{display:block;padding:10px 16px}"]
                    }] }
        ];
        /** @nocollapse */
        TdLayoutFooterComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        TdLayoutFooterComponent.propDecorators = {
            color: [{ type: core$1.Input, args: ['color',] }]
        };
        return TdLayoutFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdNavigationDrawerMenuDirective = /** @class */ (function () {
        function TdNavigationDrawerMenuDirective() {
        }
        TdNavigationDrawerMenuDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-navigation-drawer-menu]',
                    },] }
        ];
        return TdNavigationDrawerMenuDirective;
    }());
    var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
        function TdNavigationDrawerToolbarDirective() {
        }
        TdNavigationDrawerToolbarDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-navigation-drawer-toolbar]',
                    },] }
        ];
        return TdNavigationDrawerToolbarDirective;
    }());
    var TdNavigationDrawerComponent = /** @class */ (function () {
        function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
            this._layout = _layout;
            this._router = _router;
            this._sanitize = _sanitize;
            this._menuToggled = false;
        }
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
            get: /**
             * @return {?}
             */ function () {
                return this._menuToggled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
            /**
             * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
             */
            get: /**
             * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
             * @return {?}
             */ function () {
                return this._drawerMenu ? this._drawerMenu.length > 0 : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
            /**
             * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
             */
            get: /**
             * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
             * @return {?}
             */ function () {
                return this._toolbar ? this._toolbar.length > 0 : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
            /**
             * Checks if there is a background image for the toolbar.
             */
            get: /**
             * Checks if there is a background image for the toolbar.
             * @return {?}
             */ function () {
                return !!this._backgroundImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundUrl", {
            /**
             * backgroundUrl?: SafeResourceUrl
             *
             * image to be displayed as the background of the toolbar.
             * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
             */
            set: /**
             * backgroundUrl?: SafeResourceUrl
             *
             * image to be displayed as the background of the toolbar.
             * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
             * @param {?} backgroundUrl
             * @return {?}
             */ function (backgroundUrl) {
                if (backgroundUrl) {
                    /** @type {?} */
                    var sanitizedUrl = this._sanitize.sanitize(core$1.SecurityContext.RESOURCE_URL, backgroundUrl);
                    this._backgroundImage = this._sanitize.sanitize(core$1.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
            get: /**
             * @return {?}
             */ function () {
                return this._backgroundImage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
            /**
             * Checks if router was injected.
             */
            get: /**
             * Checks if router was injected.
             * @return {?}
             */ function () {
                return !!this._router && !!this.navigationRoute;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._closeSubscription = this._layout.sidenav.openedChange.subscribe(function (opened) {
                    if (!opened) {
                        _this._menuToggled = false;
                    }
                });
            };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._closeSubscription) {
                    this._closeSubscription.unsubscribe();
                    this._closeSubscription = undefined;
                }
            };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.toggleMenu = /**
         * @return {?}
         */
            function () {
                if (this.isMenuAvailable) {
                    this._menuToggled = !this._menuToggled;
                }
            };
        /**
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.handleNavigationClick = /**
         * @return {?}
         */
            function () {
                if (this.routerEnabled) {
                    this._router.navigateByUrl(this.navigationRoute);
                    this.close();
                }
            };
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.toggle = /**
         * Proxy toggle method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this._layout.toggle();
            };
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.open = /**
         * Proxy open method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this._layout.open();
            };
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         */
        /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
        TdNavigationDrawerComponent.prototype.close = /**
         * Proxy close method to access sidenav from outside (from td-layout template).
         * @return {?}
         */
            function () {
                return this._layout.close();
            };
        TdNavigationDrawerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-navigation-drawer',
                        template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle || avatar\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                        animations: [common$1.tdCollapseAnimation],
                        styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto!important;display:block!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;width:60px;margin:0 12px 12px 0}:host mat-toolbar .td-navigation-drawer-menu-toggle{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-webkit-box-flex:1;-ms-flex:1;flex:1}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavigationDrawerComponent.ctorParameters = function () {
            return [
                { type: TdLayoutComponent, decorators: [{ type: core$1.Inject, args: [core$1.forwardRef(function () { return TdLayoutComponent; }),] }] },
                { type: router.Router, decorators: [{ type: core$1.Optional }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        TdNavigationDrawerComponent.propDecorators = {
            _drawerMenu: [{ type: core$1.ContentChildren, args: [TdNavigationDrawerMenuDirective,] }],
            _toolbar: [{ type: core$1.ContentChildren, args: [TdNavigationDrawerToolbarDirective,] }],
            sidenavTitle: [{ type: core$1.Input, args: ['sidenavTitle',] }],
            icon: [{ type: core$1.Input, args: ['icon',] }],
            logo: [{ type: core$1.Input, args: ['logo',] }],
            avatar: [{ type: core$1.Input, args: ['avatar',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            navigationRoute: [{ type: core$1.Input, args: ['navigationRoute',] }],
            backgroundUrl: [{ type: core$1.Input, args: ['backgroundUrl',] }],
            name: [{ type: core$1.Input, args: ['name',] }],
            email: [{ type: core$1.Input, args: ['email',] }]
        };
        return TdNavigationDrawerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_LAYOUTS = [
        TdLayoutComponent,
        TdLayoutToggleDirective,
        TdLayoutCloseDirective,
        TdLayoutOpenDirective,
        TdLayoutNavComponent,
        TdLayoutNavListComponent,
        TdLayoutNavListToggleDirective,
        TdLayoutNavListCloseDirective,
        TdLayoutNavListOpenDirective,
        TdLayoutCardOverComponent,
        TdLayoutManageListComponent,
        TdLayoutManageListToggleDirective,
        TdLayoutManageListCloseDirective,
        TdLayoutManageListOpenDirective,
        TdLayoutFooterComponent,
        TdNavigationDrawerComponent,
        TdNavigationDrawerMenuDirective,
        TdNavigationDrawerToolbarDirective,
    ];
    var CovalentLayoutModule = /** @class */ (function () {
        function CovalentLayoutModule() {
        }
        CovalentLayoutModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            scrolling.ScrollDispatchModule,
                            sidenav.MatSidenavModule,
                            toolbar.MatToolbarModule,
                            button.MatButtonModule,
                            icon.MatIconModule,
                            card.MatCardModule,
                            divider.MatDividerModule,
                        ],
                        declarations: [
                            TD_LAYOUTS,
                        ],
                        exports: [
                            TD_LAYOUTS,
                        ],
                    },] }
        ];
        return CovalentLayoutModule;
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
    /** @enum {string} */
    var LoadingType = {
        Circular: 'circular',
        Linear: 'linear',
    };
    /** @enum {string} */
    var LoadingMode = {
        Determinate: 'determinate',
        Indeterminate: 'indeterminate',
    };
    /** @enum {string} */
    var LoadingStrategy = {
        Overlay: 'overlay',
        Replace: 'replace',
    };
    /** @enum {string} */
    var LoadingStyle = {
        FullScreen: 'fullscreen',
        Overlay: 'overlay',
        None: 'none',
    };
    /** @type {?} */
    var TD_CIRCLE_DIAMETER = 100;
    var TdLoadingComponent = /** @class */ (function () {
        function TdLoadingComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._animationIn = new rxjs.Subject();
            this._animationOut = new rxjs.Subject();
            this._mode = LoadingMode.Indeterminate;
            this._defaultMode = LoadingMode.Indeterminate;
            this._value = 0;
            this._circleDiameter = TD_CIRCLE_DIAMETER;
            /**
             * Flag for animation
             */
            this.animation = false;
            this.style = LoadingStyle.None;
            /**
             * type: LoadingType
             * Sets type of [TdLoadingComponent] rendered.
             */
            this.type = LoadingType.Circular;
            /**
             * color: primary' | 'accent' | 'warn'
             * Sets theme color of [TdLoadingComponent] rendered.
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLoadingComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */ function () {
                return this._mode;
            },
            /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             */
            set: /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             * @param {?} mode
             * @return {?}
             */ function (mode) {
                this._defaultMode = mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             */
            set: /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                // When overlay is used and the host width has a value greater than 1px
                // set the circle diameter when possible incase the loading component was rendered in a hidden state
                if (this.isOverlay() && this._hostHeight() > 1) {
                    if (this.animation) {
                        this._setCircleDiameter();
                        this._changeDetectorRef.markForCheck();
                    }
                }
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getHeight = /**
         * @return {?}
         */
            function () {
                // Ignore height if style is `overlay` or `fullscreen`.
                // Add height if child elements have a height and style is `none`, else return default height.
                if (this.isOverlay() || this.isFullScreen()) {
                    return undefined;
                }
                else {
                    return this.height ? this.height + "px" : '150px';
                }
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleDiameter = /**
         * @return {?}
         */
            function () {
                return this._circleDiameter;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleStrokeWidth = /**
         * @return {?}
         */
            function () {
                // we calculate the stroke width by setting it as 10% of its diameter
                /** @type {?} */
                var strokeWidth = this.getCircleDiameter() / 10;
                return Math.abs(strokeWidth);
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isCircular = /**
         * @return {?}
         */
            function () {
                return this.type === LoadingType.Circular;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isLinear = /**
         * @return {?}
         */
            function () {
                return this.type === LoadingType.Linear;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isFullScreen = /**
         * @return {?}
         */
            function () {
                return this.style === LoadingStyle.FullScreen;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isOverlay = /**
         * @return {?}
         */
            function () {
                return this.style === LoadingStyle.Overlay;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdLoadingComponent.prototype.animationComplete = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // Check to see if its "in" or "out" animation to execute the proper callback
                if (!event.fromState) {
                    this.inAnimationCompleted();
                }
                else {
                    this.outAnimationCompleted();
                }
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.inAnimationCompleted = /**
         * @return {?}
         */
            function () {
                this._animationIn.next(undefined);
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.outAnimationCompleted = /**
         * @return {?}
         */
            function () {
                /* little hack to reset the loader value and animation before removing it from DOM
                 * else, the loader will appear with prev value when its registered again
                 * and will do an animation going prev value to 0.
                 */
                this.value = 0;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
                this._animationOut.next(undefined);
            };
        /**
         * Starts in animation and returns an observable for completition event.
         */
        /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.startInAnimation = /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
            function () {
                /* need to switch back to the selected mode, so we have saved it in another variable
                *  and then recover it. (issue with protractor)
                */
                this._mode = this._defaultMode;
                // Set values before the animations starts
                this._setCircleDiameter();
                // Check for changes for `OnPush` change detection
                this.animation = true;
                this._changeDetectorRef.markForCheck();
                return this._animationIn.asObservable();
            };
        /**
         * Starts out animation and returns an observable for completition event.
         */
        /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.startOutAnimation = /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
            function () {
                this.animation = false;
                /* need to switch back and forth from determinate/indeterminate so the setInterval()
                * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
                */
                this._mode = LoadingMode.Determinate;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
                return this._animationOut.asObservable();
            };
        /**
         * Calculate the proper diameter for the circle and set it
         */
        /**
         * Calculate the proper diameter for the circle and set it
         * @return {?}
         */
        TdLoadingComponent.prototype._setCircleDiameter = /**
         * Calculate the proper diameter for the circle and set it
         * @return {?}
         */
            function () {
                // we set a default diameter of 100 since this is the default in material
                /** @type {?} */
                var diameter = TD_CIRCLE_DIAMETER;
                // if height is provided, then we take that as diameter
                if (this.height) {
                    diameter = this.height;
                    // else if its not provided, then we take the host height
                }
                else if (this.height === undefined) {
                    diameter = this._hostHeight();
                }
                // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
                if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
                    this._circleDiameter = Math.floor(diameter);
                }
                else {
                    this._circleDiameter = TD_CIRCLE_DIAMETER;
                }
            };
        /**
         * Returns the host height of the loading component
         */
        /**
         * Returns the host height of the loading component
         * @return {?}
         */
        TdLoadingComponent.prototype._hostHeight = /**
         * Returns the host height of the loading component
         * @return {?}
         */
            function () {
                if (( /** @type {?} */(this._elementRef.nativeElement))) {
                    return (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height;
                }
                return 0;
            };
        TdLoadingComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-loading',
                        template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\" \n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\" \n                        [mode]=\"mode\"\n                        [value]=\"value\" \n                        [color]=\"color\" \n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" \n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>",
                        animations: [
                            common$1.tdFadeInOutAnimation,
                        ],
                        styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdLoadingComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        return TdLoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * NOTE: \@internal usage only.
     */
    var TdLoadingFactory = /** @class */ (function () {
        function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._overlay = _overlay;
            this._injector = _injector;
        }
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype.createFullScreenComponent = /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                (( /** @type {?} */(options))).height = undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.FullScreen;
                /** @type {?} */
                var loadingRef = this._initializeContext();
                /** @type {?} */
                var loading = false;
                /** @type {?} */
                var overlayRef;
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
                    if (registered > 0 && !loading) {
                        loading = true;
                        overlayRef = _this._createOverlay();
                        loadingRef.componentRef = overlayRef.attach(new portal.ComponentPortal(TdLoadingComponent));
                        _this._mapOptions(options, loadingRef.componentRef.instance);
                        loadingRef.componentRef.instance.startInAnimation();
                        loadingRef.componentRef.changeDetectorRef.detectChanges();
                    }
                    else if (registered <= 0 && loading) {
                        loading = false;
                        /** @type {?} */
                        var subs_1 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                            subs_1.unsubscribe();
                            loadingRef.componentRef.destroy();
                            overlayRef.detach();
                            overlayRef.dispose();
                        });
                    }
                });
                return loadingRef;
            };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @return {?}
         */
        TdLoadingFactory.prototype.createOverlayComponent = /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @return {?}
         */
            function (options, viewContainerRef, templateRef) {
                (( /** @type {?} */(options))).height = undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.Overlay;
                /** @type {?} */
                var loadingRef = this._createComponent(options);
                /** @type {?} */
                var loading = false;
                loadingRef.componentRef.instance.content = new portal.TemplatePortal(templateRef, viewContainerRef);
                viewContainerRef.clear();
                viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
                    if (registered > 0 && !loading) {
                        loading = true;
                        loadingRef.componentRef.instance.startInAnimation();
                    }
                    else if (registered <= 0 && loading) {
                        loading = false;
                        loadingRef.componentRef.instance.startOutAnimation();
                    }
                });
                return loadingRef;
            };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        TdLoadingFactory.prototype.createReplaceComponent = /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
            function (options, viewContainerRef, templateRef, context) {
                /** @type {?} */
                var nativeElement = ( /** @type {?} */(templateRef.elementRef.nativeElement));
                (( /** @type {?} */(options))).height = nativeElement.nextElementSibling ?
                    nativeElement.nextElementSibling.scrollHeight : undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.None;
                /** @type {?} */
                var loadingRef = this._createComponent(options);
                /** @type {?} */
                var loading = false;
                // passing context so when the template is attached, we can keep the reference of the variables
                /** @type {?} */
                var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
                    if (registered > 0 && !loading) {
                        loading = true;
                        // detach the content and attach the loader if loader is there
                        /** @type {?} */
                        var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                        if (index < 0) {
                            viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                            viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                        }
                        loadingRef.componentRef.instance.startInAnimation();
                    }
                    else if (registered <= 0 && loading) {
                        loading = false;
                        /** @type {?} */
                        var subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                            subs_2.unsubscribe();
                            // detach loader and attach the content if content is there
                            /** @type {?} */
                            var index = viewContainerRef.indexOf(contentRef);
                            if (index < 0) {
                                viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                                viewContainerRef.insert(contentRef, 0);
                            }
                            /**
                             * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                             * with "OnPush" change detection
                             */
                            contentRef.detectChanges();
                            contentRef.markForCheck();
                        });
                    }
                });
                return loadingRef;
            };
        /**
         * Creates a fullscreen overlay for the loading usage.
         */
        /**
         * Creates a fullscreen overlay for the loading usage.
         * @return {?}
         */
        TdLoadingFactory.prototype._createOverlay = /**
         * Creates a fullscreen overlay for the loading usage.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var state = new overlay.OverlayConfig();
                state.hasBackdrop = false;
                state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
                return this._overlay.create(state);
            };
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         */
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype._createComponent = /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @param {?} options
         * @return {?}
         */
            function (options) {
                /** @type {?} */
                var compRef = this._initializeContext();
                compRef.componentRef = this._componentFactoryResolver
                    .resolveComponentFactory(TdLoadingComponent).create(this._injector);
                this._mapOptions(options, compRef.componentRef.instance);
                return compRef;
            };
        /**
         * Initialize context for loading component.
         */
        /**
         * Initialize context for loading component.
         * @return {?}
         */
        TdLoadingFactory.prototype._initializeContext = /**
         * Initialize context for loading component.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var subject = new rxjs.Subject();
                return {
                    observable: subject.asObservable(),
                    subject: subject,
                    componentRef: undefined,
                    times: 0,
                };
            };
        /**
         * Maps configuration to the loading component instance.
         */
        /**
         * Maps configuration to the loading component instance.
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
        TdLoadingFactory.prototype._mapOptions = /**
         * Maps configuration to the loading component instance.
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
            function (options, instance) {
                instance.style = options.style;
                if (options.type !== undefined) {
                    instance.type = options.type;
                }
                if (options.height !== undefined) {
                    instance.height = options.height;
                }
                if (options.mode !== undefined) {
                    instance.mode = options.mode;
                }
                if (options.color !== undefined) {
                    instance.color = options.color;
                }
            };
        TdLoadingFactory.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        TdLoadingFactory.ctorParameters = function () {
            return [
                { type: core$1.ComponentFactoryResolver },
                { type: overlay.Overlay },
                { type: core$1.Injector }
            ];
        };
        return TdLoadingFactory;
    }());
    /**
     * @param {?} parent
     * @param {?} componentFactoryResolver
     * @param {?} overlay
     * @param {?} injector
     * @return {?}
     */
    function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay$$1, injector) {
        return parent || new TdLoadingFactory(componentFactoryResolver, overlay$$1, injector);
    }
    /** @type {?} */
    var LOADING_FACTORY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingFactory,
        deps: [[new core$1.Optional(), new core$1.SkipSelf(), TdLoadingFactory], core$1.ComponentFactoryResolver, overlay.Overlay, core$1.Injector],
        useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLoadingConfig = /** @class */ (function () {
        function TdLoadingConfig(config) {
            this.name = config.name;
            if (!this.name) {
                throw Error('Name is required for [TdLoading] configuration.');
            }
            this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
            this.type = config.type ? config.type : LoadingType.Circular;
            this.color = config.color ? config.color : 'primary';
        }
        return TdLoadingConfig;
    }());
    var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
        __extends(TdLoadingDirectiveConfig, _super);
        function TdLoadingDirectiveConfig(config) {
            var _this = _super.call(this, config) || this;
            _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
            return _this;
        }
        return TdLoadingDirectiveConfig;
    }(TdLoadingConfig));
    var TdLoadingService = /** @class */ (function () {
        function TdLoadingService(_loadingFactory) {
            this._loadingFactory = _loadingFactory;
            this._context = {};
            this._timeouts = {};
            this.create({
                name: 'td-loading-main',
            });
        }
        /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: @internal usage only.
         */
        /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: \@internal usage only.
         * @param {?} config
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
        TdLoadingService.prototype.createComponent = /**
         * params:
         * - config: ILoadingDirectiveConfig
         * - viewContainerRef: ViewContainerRef
         * - templateRef: TemplateRef<Object>
         *
         * Creates an replace loading mask and attaches it to the viewContainerRef.
         * Replaces the templateRef with the mask when a request is registered on it.
         *
         * NOTE: \@internal usage only.
         * @param {?} config
         * @param {?} viewContainerRef
         * @param {?} templateRef
         * @param {?} context
         * @return {?}
         */
            function (config, viewContainerRef, templateRef, context) {
                /** @type {?} */
                var directiveConfig = new TdLoadingDirectiveConfig(config);
                if (this._context[directiveConfig.name]) {
                    throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
                }
                if (directiveConfig.strategy === LoadingStrategy.Overlay) {
                    this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
                }
                else {
                    this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
                }
                return this._context[directiveConfig.name];
            };
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         */
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
        TdLoadingService.prototype.create = /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var fullscreenConfig = new TdLoadingConfig(config);
                this.removeComponent(fullscreenConfig.name);
                this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
            };
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         */
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
        TdLoadingService.prototype.removeComponent = /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (this._context[name]) {
                    this._context[name].subject.unsubscribe();
                    if (this._context[name].componentRef) {
                        this._context[name].componentRef.destroy();
                    }
                    this._context[name] = undefined;
                    delete this._context[name];
                }
            };
        /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         */
        /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         * @param {?=} name
         * @param {?=} registers
         * @return {?}
         */
        TdLoadingService.prototype.register = /**
         * params:
         * - name: string
         * - registers?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass registers argument to set a number of register calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.register()
         * @param {?=} name
         * @param {?=} registers
         * @return {?}
         */
            function (name, registers) {
                var _this = this;
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                if (registers === void 0) {
                    registers = 1;
                }
                // try registering into the service if the loading component has been instanciated or if it exists.
                if (this._context[name]) {
                    registers = registers < 1 ? 1 : registers;
                    this._context[name].times += registers;
                    this._context[name].subject.next(this._context[name].times);
                    return true;
                }
                else {
                    // if it doesnt exist, set a timeout so its registered after change detection happens
                    // this in case "register" occured on the `ngOnInit` lifehook cycle.
                    if (!this._timeouts[name]) {
                        this._timeouts[name] = setTimeout(function () {
                            _this.register(name, registers);
                        });
                    }
                    else {
                        // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                        this._clearTimeout(name);
                    }
                }
                return false;
            };
        /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         */
        /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         * @param {?=} name
         * @param {?=} resolves
         * @return {?}
         */
        TdLoadingService.prototype.resolve = /**
         * params:
         * - name: string
         * - resolves?: number
         * returns: true if successful
         *
         * Resolves a request for the loading mask referenced by the name parameter.
         * Can optionally pass resolves argument to set a number of resolve calls.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolve()
         * @param {?=} name
         * @param {?=} resolves
         * @return {?}
         */
            function (name, resolves) {
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                if (resolves === void 0) {
                    resolves = 1;
                }
                // clear timeout if the loading component is "resolved" before its "registered"
                this._clearTimeout(name);
                if (this._context[name]) {
                    resolves = resolves < 1 ? 1 : resolves;
                    if (this._context[name].times > 0) {
                        /** @type {?} */
                        var times = this._context[name].times;
                        times -= resolves;
                        this._context[name].times = times < 0 ? 0 : times;
                    }
                    this._context[name].subject.next(this._context[name].times);
                    return true;
                }
                return false;
            };
        /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         */
        /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         * @param {?=} name
         * @return {?}
         */
        TdLoadingService.prototype.resolveAll = /**
         * params:
         * - name: string
         * returns: true if successful
         *
         * Resolves all request for the loading mask referenced by the name parameter.
         *
         * If no paramemeters are used, then default main mask will be used.
         *
         * e.g. loadingService.resolveAll()
         * @param {?=} name
         * @return {?}
         */
            function (name) {
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                // clear timeout if the loading component is "resolved" before its "registered"
                this._clearTimeout(name);
                if (this._context[name]) {
                    this._context[name].times = 0;
                    this._context[name].subject.next(this._context[name].times);
                    return true;
                }
                return false;
            };
        /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         */
        /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
        TdLoadingService.prototype.setValue = /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         * @param {?} name
         * @param {?} value
         * @return {?}
         */
            function (name, value) {
                if (this._context[name]) {
                    /** @type {?} */
                    var instance = this._context[name].componentRef.instance;
                    if (instance.mode === LoadingMode.Determinate && instance.animation) {
                        instance.value = value;
                        return true;
                    }
                }
                return false;
            };
        /**
         * Clears timeout linked to the name.
         * @param name Name of the loading component to be cleared
         */
        /**
         * Clears timeout linked to the name.
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
        TdLoadingService.prototype._clearTimeout = /**
         * Clears timeout linked to the name.
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
            function (name) {
                clearTimeout(this._timeouts[name]);
                delete this._timeouts[name];
            };
        TdLoadingService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        TdLoadingService.ctorParameters = function () {
            return [
                { type: TdLoadingFactory }
            ];
        };
        return TdLoadingService;
    }());
    /**
     * @param {?} parent
     * @param {?} loadingFactory
     * @return {?}
     */
    function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
        return parent || new TdLoadingService(loadingFactory);
    }
    /** @type {?} */
    var LOADING_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingService,
        deps: [[new core$1.Optional(), new core$1.SkipSelf(), TdLoadingService], TdLoadingFactory],
        useFactory: LOADING_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Context class for variable reference
     */
    var /**
     * Context class for variable reference
     */ TdLoadingContext = /** @class */ (function () {
        function TdLoadingContext() {
            this.$implicit = undefined;
            this.tdLoading = undefined;
        }
        return TdLoadingContext;
    }());
    // Constant for generation of the id for the next component
    /** @type {?} */
    var TD_LOADING_NEXT_ID = 0;
    var TdLoadingDirective = /** @class */ (function () {
        function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._loadingService = _loadingService;
            this._context = new TdLoadingContext();
            /**
             * tdLoadingColor?: "primary" | "accent" | "warn"
             * Sets the theme color of the loading component. Defaults to "primary"
             */
            this.color = 'primary';
        }
        Object.defineProperty(TdLoadingDirective.prototype, "name", {
            /**
             * tdLoading: string
             * Name reference of the loading mask, used to register/resolve requests to the mask.
             */
            set: /**
             * tdLoading: string
             * Name reference of the loading mask, used to register/resolve requests to the mask.
             * @param {?} name
             * @return {?}
             */ function (name) {
                if (!this._name) {
                    if (name) {
                        this._name = name;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "until", {
            /**
             * tdLoadingUntil?: any
             * If its null, undefined or false it will be used to register requests to the mask.
             * Else if its any value that can be resolved as true, it will resolve the mask.
             * [name] is optional when using [until], but can still be used to register/resolve it manually.
             */
            set: /**
             * tdLoadingUntil?: any
             * If its null, undefined or false it will be used to register requests to the mask.
             * Else if its any value that can be resolved as true, it will resolve the mask.
             * [name] is optional when using [until], but can still be used to register/resolve it manually.
             * @param {?} until
             * @return {?}
             */ function (until) {
                if (!this._name) {
                    this._name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
                }
                this._context.$implicit = this._context.tdLoading = until;
                if (!until) {
                    this._loadingService.register(this._name);
                }
                else {
                    this._loadingService.resolveAll(this._name);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "type", {
            /**
             * tdLoadingType?: LoadingType or ['linear' | 'circular']
             * Sets the type of loading mask depending on value.
             * Defaults to [LoadingType.Circular | 'circular'].
             */
            set: /**
             * tdLoadingType?: LoadingType or ['linear' | 'circular']
             * Sets the type of loading mask depending on value.
             * Defaults to [LoadingType.Circular | 'circular'].
             * @param {?} type
             * @return {?}
             */ function (type) {
                switch (type) {
                    case LoadingType.Linear:
                        this._type = LoadingType.Linear;
                        break;
                    default:
                        this._type = LoadingType.Circular;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "mode", {
            /**
             * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
             * Sets the mode of loading mask depending on value.
             * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
             */
            set: /**
             * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
             * Sets the mode of loading mask depending on value.
             * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
             * @param {?} mode
             * @return {?}
             */ function (mode) {
                switch (mode) {
                    case LoadingMode.Determinate:
                        this._mode = LoadingMode.Determinate;
                        break;
                    default:
                        this._mode = LoadingMode.Indeterminate;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
            /**
             * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
             * Sets the strategy of loading mask depending on value.
             * Defaults to [LoadingMode.Replace | 'replace'].
             */
            set: /**
             * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
             * Sets the strategy of loading mask depending on value.
             * Defaults to [LoadingMode.Replace | 'replace'].
             * @param {?} stategy
             * @return {?}
             */ function (stategy) {
                switch (stategy) {
                    case LoadingStrategy.Overlay:
                        this._strategy = LoadingStrategy.Overlay;
                        break;
                    default:
                        this._strategy = LoadingStrategy.Replace;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         */
        /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         * @return {?}
         */
        TdLoadingDirective.prototype.ngOnInit = /**
         * Registers component in the DOM, so it will be available when calling resolve/register.
         * @return {?}
         */
            function () {
                this._registerComponent();
            };
        /**
         * Remove component when directive is destroyed.
         */
        /**
         * Remove component when directive is destroyed.
         * @return {?}
         */
        TdLoadingDirective.prototype.ngOnDestroy = /**
         * Remove component when directive is destroyed.
         * @return {?}
         */
            function () {
                this._loadingService.removeComponent(this._name);
                this._loadingRef = undefined;
            };
        /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         */
        /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         * @return {?}
         */
        TdLoadingDirective.prototype._registerComponent = /**
         * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
         * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
         * @return {?}
         */
            function () {
                if (!this._name) {
                    throw new Error('Name is needed to register loading directive');
                }
                // Check if `TdLoadingComponent` has been created before trying to add one again.
                // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
                if (!this._loadingRef) {
                    this._loadingRef = this._loadingService.createComponent({
                        name: this._name,
                        type: this._type,
                        mode: this._mode,
                        color: this.color,
                        strategy: this._strategy,
                    }, this._viewContainerRef, this._templateRef, this._context);
                }
            };
        TdLoadingDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdLoading]',
                    },] }
        ];
        /** @nocollapse */
        TdLoadingDirective.ctorParameters = function () {
            return [
                { type: core$1.ViewContainerRef },
                { type: core$1.TemplateRef },
                { type: TdLoadingService }
            ];
        };
        TdLoadingDirective.propDecorators = {
            name: [{ type: core$1.Input, args: ['tdLoading',] }],
            until: [{ type: core$1.Input, args: ['tdLoadingUntil',] }],
            type: [{ type: core$1.Input, args: ['tdLoadingType',] }],
            mode: [{ type: core$1.Input, args: ['tdLoadingMode',] }],
            strategy: [{ type: core$1.Input, args: ['tdLoadingStrategy',] }],
            color: [{ type: core$1.Input, args: ['tdLoadingColor',] }]
        };
        return TdLoadingDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_LOADING = [
        TdLoadingComponent,
        TdLoadingDirective,
    ];
    /** @type {?} */
    var TD_LOADING_ENTRY_COMPONENTS = [
        TdLoadingComponent,
    ];
    var CovalentLoadingModule = /** @class */ (function () {
        function CovalentLoadingModule() {
        }
        CovalentLoadingModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            overlay.OverlayModule,
                            portal.PortalModule,
                        ],
                        declarations: [
                            TD_LOADING,
                        ],
                        exports: [
                            TD_LOADING,
                        ],
                        providers: [
                            LOADING_FACTORY_PROVIDER,
                            LOADING_PROVIDER,
                        ],
                        entryComponents: [
                            TD_LOADING_ENTRY_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentLoadingModule;
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
    var TdMediaService = /** @class */ (function () {
        function TdMediaService(_ngZone) {
            var _this = this;
            this._ngZone = _ngZone;
            this._resizing = false;
            this._queryMap = new Map();
            this._querySources = {};
            this._queryObservables = {};
            this._queryMap.set('xs', '(max-width: 599px)');
            this._queryMap.set('gt-xs', '(min-width: 600px)');
            this._queryMap.set('sm', '(min-width: 600px) and (max-width: 959px)');
            this._queryMap.set('gt-sm', '(min-width: 960px)');
            this._queryMap.set('md', '(min-width: 960px) and (max-width: 1279px)');
            this._queryMap.set('gt-md', '(min-width: 1280px)');
            this._queryMap.set('lg', '(min-width: 1280px) and (max-width: 1919px)');
            this._queryMap.set('gt-lg', '(min-width: 1920px)');
            this._queryMap.set('xl', '(min-width: 1920px)');
            this._queryMap.set('landscape', '(orientation: landscape)');
            this._queryMap.set('portrait', '(orientation: portrait)');
            this._queryMap.set('print', 'print');
            this._resizing = false;
            // we make sure that the resize checking happend outside of Angular since it happens often
            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
                return rxjs.fromEvent(window, 'resize').subscribe(function () {
                    // way to prevent the resize event from triggering the match media if there is already one event running already.
                    if (!_this._resizing) {
                        _this._resizing = true;
                        setTimeout(function () {
                            _this._onResize();
                            _this._resizing = false;
                        }, 100);
                    }
                });
            });
        }
        /**
         * Deregisters a query so its stops being notified or used.
         */
        /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.deregisterQuery = /**
         * Deregisters a query so its stops being notified or used.
         * @param {?} query
         * @return {?}
         */
            function (query) {
                if (this._queryMap.get(query.toLowerCase())) {
                    query = this._queryMap.get(query.toLowerCase());
                }
                this._querySources[query].unsubscribe();
                delete this._querySources[query];
                delete this._queryObservables[query];
            };
        /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         */
        /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.query = /**
         * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
         * @param {?} query
         * @return {?}
         */
            function (query) {
                if (this._queryMap.get(query.toLowerCase())) {
                    query = this._queryMap.get(query.toLowerCase());
                }
                return this._ngZone.run(function () {
                    return matchMedia(query).matches;
                });
            };
        /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         */
        /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype.registerQuery = /**
         * Registers a media query and returns an [Observable] that will re-evaluate and
         * return if the given media query matches on window resize.
         * Note: don't forget to unsubscribe from [Observable] when finished watching.
         * @param {?} query
         * @return {?}
         */
            function (query) {
                if (this._queryMap.get(query.toLowerCase())) {
                    query = this._queryMap.get(query.toLowerCase());
                }
                if (!this._querySources[query]) {
                    this._querySources[query] = new rxjs.BehaviorSubject(matchMedia(query).matches);
                    this._queryObservables[query] = this._querySources[query].asObservable();
                }
                return this._queryObservables[query];
            };
        /**
         * Trigger a match media event on all subscribed observables.
         */
        /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
        TdMediaService.prototype.broadcast = /**
         * Trigger a match media event on all subscribed observables.
         * @return {?}
         */
            function () {
                this._onResize();
            };
        /**
         * @return {?}
         */
        TdMediaService.prototype._onResize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _loop_1 = function (query) {
                    this_1._ngZone.run(function () {
                        _this._matchMediaTrigger(query);
                    });
                };
                var this_1 = this;
                for (var query in this._querySources) {
                    _loop_1(query);
                }
            };
        /**
         * @param {?} query
         * @return {?}
         */
        TdMediaService.prototype._matchMediaTrigger = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                this._querySources[query].next(matchMedia(query).matches);
            };
        TdMediaService.decorators = [
            { type: core$1.Injectable }
        ];
        /** @nocollapse */
        TdMediaService.ctorParameters = function () {
            return [
                { type: core$1.NgZone }
            ];
        };
        return TdMediaService;
    }());
    /**
     * @param {?} parent
     * @param {?} ngZone
     * @return {?}
     */
    function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
        return parent || new TdMediaService(ngZone);
    }
    /** @type {?} */
    var MEDIA_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdMediaService,
        deps: [[new core$1.Optional(), new core$1.SkipSelf(), TdMediaService], core$1.NgZone],
        useFactory: MEDIA_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdMediaToggleDirective = /** @class */ (function () {
        function TdMediaToggleDirective(_renderer, _elementRef, _mediaService) {
            this._renderer = _renderer;
            this._elementRef = _elementRef;
            this._mediaService = _mediaService;
            this._matches = false;
            this._attributes = {};
            this._styles = {};
            this._classes = [];
        }
        Object.defineProperty(TdMediaToggleDirective.prototype, "query", {
            /**
             * tdMediaToggle: string
             * Media query used to evaluate screen/window size.
             * Toggles attributes, classes and styles if media query is matched.
             */
            set: /**
             * tdMediaToggle: string
             * Media query used to evaluate screen/window size.
             * Toggles attributes, classes and styles if media query is matched.
             * @param {?} query
             * @return {?}
             */ function (query) {
                if (!query) {
                    throw new Error('Query needed for [tdMediaToggle] directive.');
                }
                this._query = query;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
            /**
             * mediaAttributes: {[key: string]: string}
             * Attributes to be toggled when media query matches.
             */
            set: /**
             * mediaAttributes: {[key: string]: string}
             * Attributes to be toggled when media query matches.
             * @param {?} attributes
             * @return {?}
             */ function (attributes) {
                this._attributes = attributes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
            /**
             * mediaClasses: string[]
             * CSS Classes to be toggled when media query matches.
             */
            set: /**
             * mediaClasses: string[]
             * CSS Classes to be toggled when media query matches.
             * @param {?} classes
             * @return {?}
             */ function (classes) {
                this._classes = classes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
            /**
             * mediaStyles: {[key: string]: string}
             * CSS Styles to be toggled when media query matches.
             */
            set: /**
             * mediaStyles: {[key: string]: string}
             * CSS Styles to be toggled when media query matches.
             * @param {?} styles
             * @return {?}
             */ function (styles) {
                this._styles = styles;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._mediaChange(this._mediaService.query(this._query));
                this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
                    _this._mediaChange(matches);
                });
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                }
            };
        /**
         * @param {?} matches
         * @return {?}
         */
        TdMediaToggleDirective.prototype._mediaChange = /**
         * @param {?} matches
         * @return {?}
         */
            function (matches) {
                this._matches = matches;
                this._changeAttributes();
                this._changeClasses();
                this._changeStyles();
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeAttributes = /**
         * @return {?}
         */
            function () {
                for (var attr in this._attributes) {
                    if (this._matches) {
                        this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
                    }
                    else {
                        this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
                    }
                }
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeClasses = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._classes.forEach(function (className) {
                    if (_this._matches) {
                        _this._renderer.addClass(_this._elementRef.nativeElement, className);
                    }
                    else {
                        _this._renderer.removeClass(_this._elementRef.nativeElement, className);
                    }
                });
            };
        /**
         * @return {?}
         */
        TdMediaToggleDirective.prototype._changeStyles = /**
         * @return {?}
         */
            function () {
                for (var style in this._styles) {
                    if (this._matches) {
                        this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
                    }
                    else {
                        this._renderer.removeStyle(this._elementRef.nativeElement, style);
                    }
                }
            };
        TdMediaToggleDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[tdMediaToggle]',
                    },] }
        ];
        /** @nocollapse */
        TdMediaToggleDirective.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef },
                { type: TdMediaService }
            ];
        };
        TdMediaToggleDirective.propDecorators = {
            query: [{ type: core$1.Input, args: ['tdMediaToggle',] }],
            attributes: [{ type: core$1.Input, args: ['mediaAttributes',] }],
            classes: [{ type: core$1.Input, args: ['mediaClasses',] }],
            styles: [{ type: core$1.Input, args: ['mediaStyles',] }]
        };
        return TdMediaToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MEDIA = [
        TdMediaToggleDirective,
    ];
    var CovalentMediaModule = /** @class */ (function () {
        function CovalentMediaModule() {
        }
        CovalentMediaModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TD_MEDIA,
                        ],
                        exports: [
                            TD_MEDIA,
                        ],
                        providers: [
                            MEDIA_PROVIDER,
                        ],
                    },] }
        ];
        return CovalentMediaModule;
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
    var TdMenuComponent = /** @class */ (function () {
        function TdMenuComponent() {
        }
        TdMenuComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-menu',
                        template: "<ng-content select=\"[td-menu-header]\"></ng-content>\n<mat-divider></mat-divider>\n<div class=\"td-menu-content\">\n  <ng-content></ng-content>\n</div>\n<mat-divider></mat-divider>\n<ng-content select=\"[td-menu-footer]\"></ng-content>",
                        styles: [":host{margin-top:-8px;margin-bottom:-8px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host ::ng-deep [td-menu-header]{padding:8px;text-align:center}:host ::ng-deep mat-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-list mat-list-item.mat-2-line,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line{height:auto}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content{height:auto;padding:8px}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-right:0}[dir=rtl] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-left:0;padding-right:16px}:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine]{margin-top:4px}.td-menu-content{max-height:calc(50vh);overflow-y:auto}"]
                    }] }
        ];
        return TdMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MENU = [
        TdMenuComponent,
    ];
    var CovalentMenuModule = /** @class */ (function () {
        function CovalentMenuModule() {
        }
        CovalentMenuModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            menu.MatMenuModule,
                            divider.MatDividerModule,
                        ],
                        declarations: [
                            TD_MENU,
                        ],
                        exports: [
                            TD_MENU,
                        ],
                    },] }
        ];
        return CovalentMenuModule;
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
    var TdSearchInputBase = /** @class */ (function () {
        function TdSearchInputBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdSearchInputBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdSearchInputMixinBase = common$1.mixinControlValueAccessor(TdSearchInputBase);
    var TdSearchInputComponent = /** @class */ (function (_super) {
        __extends(TdSearchInputComponent, _super);
        function TdSearchInputComponent(_dir, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._dir = _dir;
            /**
             * showUnderline?: boolean
             * Sets if the input underline should be visible. Defaults to 'false'.
             */
            _this.showUnderline = false;
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 400.
             */
            _this.debounce = 400;
            /**
             * clearIcon?: string
             * The icon used to clear the search input.
             * Defaults to 'cancel' icon.
             */
            _this.clearIcon = 'cancel';
            /**
             * searchDebounce: function($event)
             * Event emitted after the [debounce] timeout.
             */
            _this.onSearchDebounce = new core$1.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.onSearch = new core$1.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.onClear = new core$1.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.onBlur = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
            get: /**
             * @return {?}
             */ function () {
                if (this._dir) {
                    return this._dir.dir === 'rtl';
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdSearchInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._input.ngControl.valueChanges.pipe(operators.debounceTime(this.debounce), operators.skip(1)).subscribe(function (value) {
                    _this._searchTermChanged(value);
                });
            };
        /**
         * Method to focus to underlying input.
         */
        /**
         * Method to focus to underlying input.
         * @return {?}
         */
        TdSearchInputComponent.prototype.focus = /**
         * Method to focus to underlying input.
         * @return {?}
         */
            function () {
                this._input.focus();
            };
        /**
         * @return {?}
         */
        TdSearchInputComponent.prototype.handleBlur = /**
         * @return {?}
         */
            function () {
                this.onBlur.emit(undefined);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdSearchInputComponent.prototype.stopPropagation = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdSearchInputComponent.prototype.handleSearch = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.stopPropagation(event);
                this.onSearch.emit(this.value);
            };
        /**
         * Method to clear the underlying input.
         */
        /**
         * Method to clear the underlying input.
         * @return {?}
         */
        TdSearchInputComponent.prototype.clearSearch = /**
         * Method to clear the underlying input.
         * @return {?}
         */
            function () {
                this.value = '';
                this._changeDetectorRef.markForCheck();
                this.onClear.emit(undefined);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchInputComponent.prototype._searchTermChanged = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.onSearchDebounce.emit(value);
            };
        TdSearchInputComponent.decorators = [
            { type: core$1.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdSearchInputComponent; }),
                                multi: true,
                            }],
                        selector: 'td-search-input',
                        template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  [appearance]=\"appearance\"\n                  floatLabel=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n    <span matSuffix *ngIf=\"appearance === 'fill' || appearance === 'outline' || appearance === 'standard'\">\n      <ng-template\n        [ngTemplateOutlet]=\"clearButton\">\n      </ng-template>\n    </span>\n  </mat-form-field>\n  <ng-template\n    *ngIf=\"!appearance || appearance === 'legacy'\"\n    [ngTemplateOutlet]=\"clearButton\">\n  </ng-template>\n</div>\n<ng-template #clearButton>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</ng-template>\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        inputs: ['value'],
                        animations: [
                            animations.trigger('searchState', [
                                animations.state('hide-left', animations.style({
                                    transform: 'translateX(-150%)',
                                    display: 'none',
                                })),
                                animations.state('hide-right', animations.style({
                                    transform: 'translateX(150%)',
                                    display: 'none',
                                })),
                                animations.state('show', animations.style({
                                    transform: 'translateX(0%)',
                                    display: 'block',
                                })),
                                animations.transition('* => show', animations.animate('200ms ease-in')),
                                animations.transition('show => *', animations.animate('200ms ease-out')),
                            ]),
                        ],
                        styles: [":host .td-search-input{overflow-x:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-search-input .td-search-input-field{-webkit-box-flex:1;-ms-flex:1;flex:1}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-outline .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-flex{height:52px}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper{padding-bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-infix{bottom:.4em}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-standard .mat-form-field-wrapper .mat-form-field-underline{bottom:0}:host .td-search-input ::ng-deep mat-form-field.mat-form-field-appearance-legacy .mat-form-field-infix{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .td-search-input ::ng-deep mat-form-field .mat-input-element{caret-color:currentColor}:host .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{display:none}:host .td-search-input .td-search-input-clear{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchInputComponent.ctorParameters = function () {
            return [
                { type: bidi.Dir, decorators: [{ type: core$1.Optional }] },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdSearchInputComponent.propDecorators = {
            _input: [{ type: core$1.ViewChild, args: [input.MatInput,] }],
            appearance: [{ type: core$1.Input, args: ['appearance',] }],
            showUnderline: [{ type: core$1.Input, args: ['showUnderline',] }],
            debounce: [{ type: core$1.Input, args: ['debounce',] }],
            placeholder: [{ type: core$1.Input, args: ['placeholder',] }],
            clearIcon: [{ type: core$1.Input, args: ['clearIcon',] }],
            onSearchDebounce: [{ type: core$1.Output, args: ['searchDebounce',] }],
            onSearch: [{ type: core$1.Output, args: ['search',] }],
            onClear: [{ type: core$1.Output, args: ['clear',] }],
            onBlur: [{ type: core$1.Output, args: ['blur',] }]
        };
        return TdSearchInputComponent;
    }(_TdSearchInputMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdSearchBoxBase = /** @class */ (function () {
        function TdSearchBoxBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdSearchBoxBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdSearchBoxMixinBase = common$1.mixinControlValueAccessor(TdSearchBoxBase);
    var TdSearchBoxComponent = /** @class */ (function (_super) {
        __extends(TdSearchBoxComponent, _super);
        function TdSearchBoxComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._searchVisible = false;
            /**
             * backIcon?: string
             * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
             * Defaults to 'search' icon.
             */
            _this.backIcon = 'search';
            /**
             * searchIcon?: string
             * The icon used to open/focus the search toggle.
             * Defaults to 'search' icon.
             */
            _this.searchIcon = 'search';
            /**
             * clearIcon?: string
             * The icon used to clear the search input.
             * Defaults to 'cancel' icon.
             */
            _this.clearIcon = 'cancel';
            /**
             * showUnderline?: boolean
             * Sets if the input underline should be visible. Defaults to 'false'.
             */
            _this.showUnderline = false;
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 400.
             */
            _this.debounce = 400;
            /**
             * alwaysVisible?: boolean
             * Sets if the input should always be visible. Defaults to 'false'.
             */
            _this.alwaysVisible = false;
            /**
             * searchDebounce: function($event)
             * Event emitted after the [debounce] timeout.
             */
            _this.onSearchDebounce = new core$1.EventEmitter();
            /**
             * search: function($event)
             * Event emitted after the key enter has been pressed.
             */
            _this.onSearch = new core$1.EventEmitter();
            /**
             * clear: function()
             * Event emitted after the clear icon has been clicked.
             */
            _this.onClear = new core$1.EventEmitter();
            /**
             * blur: function()
             * Event emitted after the blur event has been called in underlying input.
             */
            _this.onBlur = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
            get: /**
             * @return {?}
             */ function () {
                return this._searchVisible;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method executed when the search icon is clicked.
         */
        /**
         * Method executed when the search icon is clicked.
         * @return {?}
         */
        TdSearchBoxComponent.prototype.searchClicked = /**
         * Method executed when the search icon is clicked.
         * @return {?}
         */
            function () {
                if (!this.alwaysVisible && this._searchVisible) {
                    this.value = '';
                    this.handleClear();
                }
                else if (this.alwaysVisible || !this._searchVisible) {
                    this._searchInput.focus();
                }
                this.toggleVisibility();
            };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.toggleVisibility = /**
         * @return {?}
         */
            function () {
                this._searchVisible = !this._searchVisible;
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleSearchDebounce = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.onSearchDebounce.emit(value);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleSearch = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.onSearch.emit(value);
            };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleClear = /**
         * @return {?}
         */
            function () {
                this.onClear.emit(undefined);
            };
        /**
         * @return {?}
         */
        TdSearchBoxComponent.prototype.handleBlur = /**
         * @return {?}
         */
            function () {
                this.onBlur.emit(undefined);
            };
        TdSearchBoxComponent.decorators = [
            { type: core$1.Component, args: [{
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdSearchBoxComponent; }),
                                multi: true,
                            }],
                        selector: 'td-search-box',
                        template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\"\n                   (blur)=\"handleBlur()\">\n  </td-search-input>\n</div>\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        inputs: ['value'],
                        animations: [
                            animations.trigger('inputState', [
                                animations.state('0', animations.style({
                                    width: '0%',
                                    margin: '0px',
                                })),
                                animations.state('1', animations.style({
                                    width: '100%',
                                    margin: animations.AUTO_STYLE,
                                })),
                                animations.transition('0 => 1', animations.animate('200ms ease-in')),
                                animations.transition('1 => 0', animations.animate('200ms ease-out')),
                            ]),
                        ],
                        styles: [":host{display:block}.td-search-box{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.td-search-box .td-search-icon{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.td-search-box td-search-input{margin-left:12px}::ng-deep [dir=rtl] .td-search-box td-search-input{margin-right:12px;margin-left:0!important}.td-search-box td-search-input ::ng-deep .mat-form.field.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1em}"]
                    }] }
        ];
        /** @nocollapse */
        TdSearchBoxComponent.ctorParameters = function () {
            return [
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdSearchBoxComponent.propDecorators = {
            _searchInput: [{ type: core$1.ViewChild, args: [TdSearchInputComponent,] }],
            backIcon: [{ type: core$1.Input, args: ['backIcon',] }],
            searchIcon: [{ type: core$1.Input, args: ['searchIcon',] }],
            clearIcon: [{ type: core$1.Input, args: ['clearIcon',] }],
            showUnderline: [{ type: core$1.Input, args: ['showUnderline',] }],
            debounce: [{ type: core$1.Input, args: ['debounce',] }],
            alwaysVisible: [{ type: core$1.Input, args: ['alwaysVisible',] }],
            placeholder: [{ type: core$1.Input, args: ['placeholder',] }],
            onSearchDebounce: [{ type: core$1.Output, args: ['searchDebounce',] }],
            onSearch: [{ type: core$1.Output, args: ['search',] }],
            onClear: [{ type: core$1.Output, args: ['clear',] }],
            onBlur: [{ type: core$1.Output, args: ['blur',] }]
        };
        return TdSearchBoxComponent;
    }(_TdSearchBoxMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentSearchModule = /** @class */ (function () {
        function CovalentSearchModule() {
        }
        CovalentSearchModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            input.MatInputModule,
                            icon.MatIconModule,
                            button.MatButtonModule,
                        ],
                        declarations: [
                            TdSearchInputComponent,
                            TdSearchBoxComponent,
                        ],
                        exports: [
                            TdSearchInputComponent,
                            TdSearchBoxComponent,
                        ],
                    },] }
        ];
        return CovalentSearchModule;
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
    var TdBreadcrumbComponent = /** @class */ (function () {
        function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._displayCrumb = true;
            this._width = 0;
            // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
            this.separatorIcon = 'chevron_right';
            // Should show the right chevron or not before the label
            this._displayIcon = true;
        }
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayCrumb;
            },
            /**
             * Whether to display the crumb or not
             */
            set: /**
             * Whether to display the crumb or not
             * @param {?} shouldDisplay
             * @return {?}
             */ function (shouldDisplay) {
                this._displayCrumb = shouldDisplay;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
            /**
             * Width of the DOM element of the crumb
             */
            get: /**
             * Width of the DOM element of the crumb
             * @return {?}
             */ function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
            /**
             * Gets the display style of the crumb
             */
            get: /**
             * Gets the display style of the crumb
             * @return {?}
             */ function () {
                // Set the display to none on the component, just in case the end user is hiding
                // and showing them instead of the component doing itself for reasons like responsive
                return this._displayCrumb ? undefined : 'none';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdBreadcrumbComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // set the width from the actual rendered DOM element
                setTimeout(function () {
                    _this._width = (( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width;
                    _this._changeDetectorRef.markForCheck();
                });
            };
        /**
         * Stop click propagation when clicking on icon
         */
        /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
        TdBreadcrumbComponent.prototype._handleIconClick = /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
            };
        TdBreadcrumbComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-breadcrumb, a[td-breadcrumb]',
                        template: "<ng-content></ng-content>\n<mat-icon *ngIf=\"_displayIcon\"\n          class=\"td-breadcrumb-separator-icon\"\n          [style.cursor]=\"'default'\"\n          (click)=\"_handleIconClick($event)\">\n  {{separatorIcon}}\n</mat-icon>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'mat-button td-breadcrumb',
                        },
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host.td-breadcrumb{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbComponent.propDecorators = {
            displayBinding: [{ type: core$1.HostBinding, args: ['style.display',] }]
        };
        return TdBreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBreadcrumbsComponent = /** @class */ (function () {
        function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
            this._resizing = false;
            // the list of hidden breadcrumbs not shown right now (responsive)
            this.hiddenBreadcrumbs = [];
            /**
             * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
             */
            this.separatorIcon = 'chevron_right';
        }
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(function () {
                    if (!_this._resizing) {
                        _this._resizing = true;
                        setTimeout(function () {
                            _this._calculateVisibility();
                            _this._resizing = false;
                            _this._changeDetectorRef.markForCheck();
                        }, 100);
                    }
                });
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this._elementRef && this._elementRef.nativeElement) {
                    this._widthSubject.next(this.nativeElementWidth);
                }
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.setCrumbIcons();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._resizeSubscription.unsubscribe();
            };
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
            /*
            * Current width of the element container
            */
            get: /*
              * Current width of the element container
              */ 
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = (( /** @type {?} */(this._elementRef.nativeElement)));
                // Need to take into account border, margin and padding that might be around all the crumbs
                /** @type {?} */
                var style = window.getComputedStyle(element);
                /** @type {?} */
                var borderLeft = parseInt(style.borderLeft, 10);
                /** @type {?} */
                var borderRight = parseInt(style.borderRight, 10);
                /** @type {?} */
                var marginLeft = parseInt(style.marginLeft, 10);
                /** @type {?} */
                var marginRight = parseInt(style.marginRight, 10);
                /** @type {?} */
                var paddingLeft = parseInt(style.paddingLeft, 10);
                /** @type {?} */
                var paddingRight = parseInt(style.paddingRight, 10);
                return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
            /**
             * The total count of individual breadcrumbs
             */
            get: /**
             * The total count of individual breadcrumbs
             * @return {?}
             */ function () {
                return this._breadcrumbs ? this._breadcrumbs.length : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Set the crumb icon separators
         */
        /**
         * Set the crumb icon separators
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
         * Set the crumb icon separators
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var breadcrumbArray = this._breadcrumbs.toArray();
                if (breadcrumbArray.length > 0) {
                    // don't show the icon on the last breadcrumb
                    breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
                }
                breadcrumbArray.forEach(function (breadcrumb) {
                    breadcrumb.separatorIcon = _this.separatorIcon;
                });
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype._calculateVisibility = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var crumbsArray = this._breadcrumbs.toArray();
                /** @type {?} */
                var crumbWidthSum = 0;
                /** @type {?} */
                var hiddenCrumbs = [];
                // loop through crumbs in reverse order to calculate which ones should be removed
                for (var i = crumbsArray.length - 1; i >= 0; i--) {
                    /** @type {?} */
                    var breadcrumb = crumbsArray[i];
                    // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
                    // and hide it
                    if ((crumbWidthSum + breadcrumb.width) > this.nativeElementWidth) {
                        breadcrumb.displayCrumb = false;
                        hiddenCrumbs.push(breadcrumb);
                    }
                    else {
                        // else we show it
                        breadcrumb.displayCrumb = true;
                    }
                    crumbWidthSum += breadcrumb.width;
                }
                this.hiddenBreadcrumbs = hiddenCrumbs;
                this._changeDetectorRef.markForCheck();
            };
        TdBreadcrumbsComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-breadcrumbs',
                        template: "<ng-content></ng-content>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-breadcrumbs',
                        },
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;width:100%}:host.td-breadcrumbs{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbsComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbsComponent.propDecorators = {
            _breadcrumbs: [{ type: core$1.ContentChildren, args: [TdBreadcrumbComponent,] }],
            separatorIcon: [{ type: core$1.Input, args: ['separatorIcon',] }]
        };
        return TdBreadcrumbsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentBreadcrumbsModule = /** @class */ (function () {
        function CovalentBreadcrumbsModule() {
        }
        CovalentBreadcrumbsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TdBreadcrumbsComponent,
                            TdBreadcrumbComponent,
                        ],
                        exports: [
                            TdBreadcrumbsComponent,
                            TdBreadcrumbComponent,
                        ],
                    },] }
        ];
        return CovalentBreadcrumbsModule;
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
    /** @enum {string} */
    var StepState = {
        None: 'none',
        Required: 'required',
        Complete: 'complete',
    };
    var TdStepLabelDirective = /** @class */ (function (_super) {
        __extends(TdStepLabelDirective, _super);
        function TdStepLabelDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdStepLabelDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-step-label]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdStepLabelDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdStepLabelDirective;
    }(portal.TemplatePortalDirective));
    var TdStepActionsDirective = /** @class */ (function (_super) {
        __extends(TdStepActionsDirective, _super);
        function TdStepActionsDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdStepActionsDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-step-actions]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdStepActionsDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdStepActionsDirective;
    }(portal.TemplatePortalDirective));
    var TdStepSummaryDirective = /** @class */ (function (_super) {
        __extends(TdStepSummaryDirective, _super);
        function TdStepSummaryDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdStepSummaryDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[td-step-summary]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdStepSummaryDirective.ctorParameters = function () {
            return [
                { type: core$1.TemplateRef },
                { type: core$1.ViewContainerRef }
            ];
        };
        return TdStepSummaryDirective;
    }(portal.TemplatePortalDirective));
    var TdStepBase = /** @class */ (function () {
        function TdStepBase() {
        }
        return TdStepBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdStepMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdStepBase));
    var TdStepComponent = /** @class */ (function (_super) {
        __extends(TdStepComponent, _super);
        function TdStepComponent(_viewContainerRef) {
            var _this = _super.call(this) || this;
            _this._viewContainerRef = _viewContainerRef;
            _this._active = false;
            _this._state = StepState.None;
            /**
             * activated?: function
             * Event emitted when [TdStepComponent] is activated.
             */
            _this.onActivated = new core$1.EventEmitter();
            /**
             * deactivated?: function
             * Event emitted when [TdStepComponent] is deactivated.
             */
            _this.onDeactivated = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdStepComponent.prototype, "stepContent", {
            get: /**
             * @return {?}
             */ function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepComponent.prototype, "active", {
            get: /**
             * @return {?}
             */ function () {
                return this._active;
            },
            /**
             * active?: boolean
             * Toggles [TdStepComponent] between active/deactive.
             */
            set: /**
             * active?: boolean
             * Toggles [TdStepComponent] between active/deactive.
             * @param {?} active
             * @return {?}
             */ function (active) {
                this._setActive(coercion.coerceBooleanProperty(active));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepComponent.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
                return this._state;
            },
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of [TdStepComponent] depending on value.
             * Defaults to [StepState.None | 'none'].
             */
            set: /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of [TdStepComponent] depending on value.
             * Defaults to [StepState.None | 'none'].
             * @param {?} state
             * @return {?}
             */ function (state) {
                switch (state) {
                    case StepState.Complete:
                        this._state = StepState.Complete;
                        break;
                    case StepState.Required:
                        this._state = StepState.Required;
                        break;
                    default:
                        this._state = StepState.None;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdStepComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
            };
        /**
         * Toggle active state of [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Toggle active state of [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.toggle = /**
         * Toggle active state of [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setActive(!this._active);
            };
        /**
         * Opens [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Opens [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.open = /**
         * Opens [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setActive(true);
            };
        /**
         * Closes [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         */
        /**
         * Closes [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.close = /**
         * Closes [TdStepComponent]
         * retuns 'true' if successful, else 'false'.
         * @return {?}
         */
            function () {
                return this._setActive(false);
            };
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        TdStepComponent.prototype.isComplete = /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
            function () {
                return this._state === StepState.Complete;
            };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdStepComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
            function (v) {
                if (v && this._active) {
                    this._active = false;
                    this._onDeactivated();
                }
            };
        /**
         * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         */
        /**
         * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         * @param {?} newActive
         * @return {?}
         */
        TdStepComponent.prototype._setActive = /**
         * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
         * event if 'false'. (Blocked if [disabled] is 'true')
         * returns true if successfully changed state
         * @param {?} newActive
         * @return {?}
         */
            function (newActive) {
                if (this.disabled) {
                    return false;
                }
                if (this._active !== newActive) {
                    this._active = newActive;
                    if (newActive) {
                        this._onActivated();
                    }
                    else {
                        this._onDeactivated();
                    }
                    return true;
                }
                return false;
            };
        /**
         * @return {?}
         */
        TdStepComponent.prototype._onActivated = /**
         * @return {?}
         */
            function () {
                this.onActivated.emit(undefined);
            };
        /**
         * @return {?}
         */
        TdStepComponent.prototype._onDeactivated = /**
         * @return {?}
         */
            function () {
                this.onDeactivated.emit(undefined);
            };
        TdStepComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-step',
                        inputs: ['disabled', 'disableRipple'],
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
                    }] }
        ];
        /** @nocollapse */
        TdStepComponent.ctorParameters = function () {
            return [
                { type: core$1.ViewContainerRef }
            ];
        };
        TdStepComponent.propDecorators = {
            _content: [{ type: core$1.ViewChild, args: [core$1.TemplateRef,] }],
            stepLabel: [{ type: core$1.ContentChild, args: [TdStepLabelDirective,] }],
            stepActions: [{ type: core$1.ContentChild, args: [TdStepActionsDirective,] }],
            stepSummary: [{ type: core$1.ContentChild, args: [TdStepSummaryDirective,] }],
            label: [{ type: core$1.Input, args: ['label',] }],
            sublabel: [{ type: core$1.Input, args: ['sublabel',] }],
            active: [{ type: core$1.Input, args: ['active',] }],
            state: [{ type: core$1.Input, args: ['state',] }],
            onActivated: [{ type: core$1.Output, args: ['activated',] }],
            onDeactivated: [{ type: core$1.Output, args: ['deactivated',] }]
        };
        return TdStepComponent;
    }(_TdStepMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var StepMode = {
        Vertical: 'vertical',
        Horizontal: 'horizontal',
    };
    var TdStepsComponent = /** @class */ (function () {
        function TdStepsComponent() {
            this._mode = StepMode.Vertical;
            /**
             * stepChange?: function
             * Method to be executed when [onStepChange] event is emitted.
             * Emits an [IStepChangeEvent] implemented object.
             */
            this.onStepChange = new core$1.EventEmitter();
        }
        Object.defineProperty(TdStepsComponent.prototype, "stepsContent", {
            set: /**
             * @param {?} steps
             * @return {?}
             */ function (steps) {
                if (steps) {
                    this._steps = steps;
                    this._registerSteps();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepsComponent.prototype, "steps", {
            get: /**
             * @return {?}
             */ function () {
                return this._steps.toArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepsComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */ function () {
                return this._mode;
            },
            /**
             * mode?: StepMode or ["vertical" | "horizontal"]
             * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
             */
            set: /**
             * mode?: StepMode or ["vertical" | "horizontal"]
             * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
             * @param {?} mode
             * @return {?}
             */ function (mode) {
                switch (mode) {
                    case StepMode.Horizontal:
                        this._mode = StepMode.Horizontal;
                        break;
                    default:
                        this._mode = StepMode.Vertical;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [onActivated] event.
         */
        /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [onActivated] event.
         * @return {?}
         */
        TdStepsComponent.prototype.ngAfterContentInit = /**
         * Executed after content is initialized, loops through any [TdStepComponent] children elements,
         * assigns them a number and subscribes as an observer to their [onActivated] event.
         * @return {?}
         */
            function () {
                this._registerSteps();
            };
        /**
         * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
         */
        /**
         * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
         * @return {?}
         */
        TdStepsComponent.prototype.ngOnDestroy = /**
         * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
         * @return {?}
         */
            function () {
                this._deregisterSteps();
            };
        /**
         * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
         */
        /**
         * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
         * @return {?}
         */
        TdStepsComponent.prototype.isHorizontal = /**
         * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
         * @return {?}
         */
            function () {
                return this._mode === StepMode.Horizontal;
            };
        /**
         * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
         */
        /**
         * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
         * @return {?}
         */
        TdStepsComponent.prototype.isVertical = /**
         * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
         * @return {?}
         */
            function () {
                return this._mode === StepMode.Vertical;
            };
        /**
         * @return {?}
         */
        TdStepsComponent.prototype.areStepsActive = /**
         * @return {?}
         */
            function () {
                return this._steps.filter(function (step) {
                    return step.active;
                }).length > 0;
            };
        /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [onStepChange] event.
         */
        /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [onStepChange] event.
         * @param {?} step
         * @return {?}
         */
        TdStepsComponent.prototype._onStepSelection = /**
         * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
         * and emits [onStepChange] event.
         * @param {?} step
         * @return {?}
         */
            function (step) {
                if (this.prevStep !== step) {
                    /** @type {?} */
                    var prevStep = this.prevStep;
                    this.prevStep = step;
                    /** @type {?} */
                    var event_1 = {
                        newStep: step,
                        prevStep: prevStep,
                    };
                    this._deactivateAllBut(step);
                    this.onStepChange.emit(event_1);
                }
            };
        /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         */
        /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         * @param {?} activeStep
         * @return {?}
         */
        TdStepsComponent.prototype._deactivateAllBut = /**
         * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
         * @param {?} activeStep
         * @return {?}
         */
            function (activeStep) {
                this._steps.filter(function (step) { return step !== activeStep; })
                    .forEach(function (step) {
                    step.active = false;
                });
            };
        /**
         * @return {?}
         */
        TdStepsComponent.prototype._registerSteps = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subcriptions = [];
                this._steps.toArray().forEach(function (step) {
                    /** @type {?} */
                    var subscription = step.onActivated.asObservable().subscribe(function () {
                        _this._onStepSelection(step);
                    });
                    _this._subcriptions.push(subscription);
                });
            };
        /**
         * @return {?}
         */
        TdStepsComponent.prototype._deregisterSteps = /**
         * @return {?}
         */
            function () {
                if (this._subcriptions) {
                    this._subcriptions.forEach(function (subs) {
                        subs.unsubscribe();
                    });
                    this._subcriptions = undefined;
                }
            };
        TdStepsComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-steps',
                        template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header class=\"td-step-horizontal-header\"\n                    (keydown.enter)=\"step.open()\"\n                    [number]=\"index + 1\"\n                    [active]=\"step.active\"\n                    [disableRipple]=\"step.disableRipple\"\n                    [disabled]=\"step.disabled\" \n                    [state]=\"step.state\"\n                    (click)=\"step.open()\">\n      <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header class=\"td-step-vertical-header\"\n                  (keydown.enter)=\"step.toggle()\"\n                  [number]=\"index + 1\"\n                  [active]=\"step.active\" \n                  [disabled]=\"step.disabled\"\n                  [disableRipple]=\"step.disableRipple\"\n                  [state]=\"step.state\"\n                  (click)=\"step.toggle()\"\n                  *ngIf=\"isVertical()\">\n    <ng-template td-step-header-label [cdkPortalOutlet]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalOutlet]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalOutlet]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalOutlet]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps',
                        },
                        styles: [".td-line-wrapper,.td-step{position:relative}.td-steps-header{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.td-line-wrapper{width:24px;min-height:1px}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;position:relative;top:36px;min-width:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}::ng-deep :not([dir=rtl]) .td-horizontal-line{left:-6px;right:-3px}::ng-deep [dir=rtl] .td-horizontal-line{left:-3px;right:-6px}.td-vertical-line{position:absolute;bottom:-16px;top:-16px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line{left:auto;right:20px}"]
                    }] }
        ];
        TdStepsComponent.propDecorators = {
            stepsContent: [{ type: core$1.ContentChildren, args: [TdStepComponent,] }],
            mode: [{ type: core$1.Input, args: ['mode',] }],
            onStepChange: [{ type: core$1.Output, args: ['stepChange',] }]
        };
        return TdStepsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdStepHeaderBase = /** @class */ (function () {
        function TdStepHeaderBase() {
        }
        return TdStepHeaderBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdStepHeaderMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdStepHeaderBase));
    var TdStepHeaderComponent = /** @class */ (function (_super) {
        __extends(TdStepHeaderComponent, _super);
        function TdStepHeaderComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets styles for state of header.
             * Defaults to [StepState.None | 'none'].
             */
            _this.state = StepState.None;
            return _this;
        }
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        TdStepHeaderComponent.prototype.isComplete = /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
            function () {
                return this.state === StepState.Complete;
            };
        /**
         * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
         * @return {?}
         */
        TdStepHeaderComponent.prototype.isRequired = /**
         * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
         * @return {?}
         */
            function () {
                return this.state === StepState.Required;
            };
        TdStepHeaderComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-step-header',
                        inputs: ['disabled', 'disableRipple'],
                        template: "<div class=\"td-step-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled ? -1 : (tabIndex || 0)\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n      [class.mat-active]=\"active && !disabled\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      [class.bg-muted]=\"disabled\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n        [class.mat-warn]=\"isRequired() && !disabled\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>",
                        styles: [".td-step-header{position:relative;outline:0;min-width:120px;height:72px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%}.td-step-header:hover:not(.mat-disabled){cursor:pointer}.td-step-header mat-icon.td-edit-icon{margin:0 8px}.td-step-header mat-icon.mat-warn{font-size:24px;height:24px;width:24px}.td-step-header mat-icon.mat-complete{position:relative;left:-2px;top:2px;font-size:28px;height:24px;width:24px}.td-step-header .td-circle{height:24px;width:24px;line-height:24px;border-radius:99%;text-align:center;-webkit-box-flex:0;-ms-flex:none;flex:none}.td-step-header .td-circle mat-icon{margin-top:2px;font-weight:700}.td-step-header .td-triangle>mat-icon{font-size:25px}::ng-deep :not([dir=rtl]) .td-step-header .td-circle,::ng-deep :not([dir=rtl]) .td-step-header .td-complete,::ng-deep :not([dir=rtl]) .td-step-header .td-triangle{margin-left:8px;margin-right:0}::ng-deep [dir=rtl] .td-step-header .td-circle,::ng-deep [dir=rtl] .td-step-header .td-complete,::ng-deep [dir=rtl] .td-step-header .td-triangle{margin-left:0;margin-right:8px}.td-step-header .td-circle,.td-step-header .td-complete{font-size:14px}.td-step-header .td-step-label-wrapper{padding-left:8px;padding-right:8px}.td-step-header .td-step-header-separator{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"]
                    }] }
        ];
        TdStepHeaderComponent.propDecorators = {
            number: [{ type: core$1.Input, args: ['number',] }],
            active: [{ type: core$1.Input, args: ['active',] }],
            state: [{ type: core$1.Input, args: ['state',] }],
            tabIndex: [{ type: core$1.Input, args: ['tabIndex',] }]
        };
        return TdStepHeaderComponent;
    }(_TdStepHeaderMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdStepBodyComponent = /** @class */ (function () {
        function TdStepBodyComponent() {
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets styles for state of body.
             * Defaults to [StepState.None | 'none'].
             */
            this.state = StepState.None;
        }
        Object.defineProperty(TdStepBodyComponent.prototype, "hasContent", {
            get: /**
             * @return {?}
             */ function () {
                return this.contentRef &&
                    (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
            get: /**
             * @return {?}
             */ function () {
                return this.actionsRef &&
                    (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
            get: /**
             * @return {?}
             */ function () {
                return this.summaryRef &&
                    (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         */
        /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
        TdStepBodyComponent.prototype.isComplete = /**
         * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
         * @return {?}
         */
            function () {
                return this.state === StepState.Complete;
            };
        TdStepBodyComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-step-body',
                        template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\"\n       [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef\n         [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef\n       [@tdCollapse]=\"active || !isComplete()\"\n       [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>",
                        animations: [
                            common$1.tdCollapseAnimation,
                        ],
                        styles: [":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}:host .td-step-body{overflow-x:hidden;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}:host .td-step-body .td-step-content-wrapper.ng-animating,:host .td-step-body .td-step-summary.ng-animating{overflow:hidden}:host .td-step-body .td-step-content{overflow-x:auto}:host .td-step-body .td-step-actions{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}"]
                    }] }
        ];
        TdStepBodyComponent.propDecorators = {
            contentRef: [{ type: core$1.ViewChild, args: ['contentRef', { read: core$1.ElementRef },] }],
            actionsRef: [{ type: core$1.ViewChild, args: ['actionsRef', { read: core$1.ElementRef },] }],
            summaryRef: [{ type: core$1.ViewChild, args: ['summaryRef', { read: core$1.ElementRef },] }],
            active: [{ type: core$1.Input, args: ['active',] }],
            state: [{ type: core$1.Input, args: ['state',] }]
        };
        return TdStepBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdNavStepLinkComponent = /** @class */ (function (_super) {
        __extends(TdNavStepLinkComponent, _super);
        function TdNavStepLinkComponent(_changeDetectorRef, elementRef) {
            var _this = _super.call(this) || this;
            _this._changeDetectorRef = _changeDetectorRef;
            _this.elementRef = elementRef;
            _this._active = false;
            _this._state = StepState.None;
            return _this;
        }
        Object.defineProperty(TdNavStepLinkComponent.prototype, "state", {
            get: /**
             * @return {?}
             */ function () {
                return this._state;
            },
            /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of component depending on value.
             * Defaults to [StepState.None | 'none'].
             */
            set: /**
             * state?: StepState or ['none' | 'required' | 'complete']
             * Sets state of component depending on value.
             * Defaults to [StepState.None | 'none'].
             * @param {?} state
             * @return {?}
             */ function (state) {
                switch (state) {
                    case StepState.Complete:
                        this._state = StepState.Complete;
                        break;
                    case StepState.Required:
                        this._state = StepState.Required;
                        break;
                    default:
                        this._state = StepState.None;
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdNavStepLinkComponent.prototype, "active", {
            get: /**
             * @return {?}
             */ function () {
                return this._active;
            },
            /**
             * active?: boolean
             * Toggles component between active/deactive.
             */
            set: /**
             * active?: boolean
             * Toggles component between active/deactive.
             * @param {?} active
             * @return {?}
             */ function (active) {
                this._active = coercion.coerceBooleanProperty(active);
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} click
         * @return {?}
         */
        TdNavStepLinkComponent.prototype._handleClick = /**
         * @param {?} click
         * @return {?}
         */
            function (click) {
                if (this.disabled) {
                    click.preventDefault();
                    click.stopImmediatePropagation();
                }
            };
        TdNavStepLinkComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: '[td-step-link],[tdStepLink]',
                        template: "<td-step-header class=\"td-step-header-wrapper\"\n                [tabIndex]=\"-1\"\n                [number]=\"number\"\n                [active]=\"active\"\n                [disableRipple]=\"disableRipple || disabled\"\n                [disabled]=\"disabled\" \n                [state]=\"state\">\n  <ng-template td-step-header-label [ngIf]=\"true\">{{label}}</ng-template>\n  <ng-template td-step-header-sublabel [ngIf]=\"true\">{{sublabel | truncate:30}}</ng-template>\n  <ng-content></ng-content>\n</td-step-header>",
                        inputs: ['disabled', 'disableRipple'],
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            '[class.td-step-link]': 'true',
                            '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                            '[attr.disabled]': 'disabled || null',
                            '[class.mat-disabled]': 'disabled || null',
                            '(click)': '_handleClick($event)',
                        },
                        styles: [":host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host.mat-disabled{pointer-events:none}:host .td-step-header-wrapper{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepLinkComponent.ctorParameters = function () {
            return [
                { type: core$1.ChangeDetectorRef },
                { type: core$1.ElementRef }
            ];
        };
        TdNavStepLinkComponent.propDecorators = {
            state: [{ type: core$1.Input, args: ['state',] }],
            label: [{ type: core$1.Input, args: ['label',] }],
            sublabel: [{ type: core$1.Input, args: ['sublabel',] }],
            active: [{ type: core$1.Input, args: ['active',] }],
            tabIndex: [{ type: core$1.Input, args: ['tabIndex',] }]
        };
        return TdNavStepLinkComponent;
    }(_TdStepMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdNavStepsHorizontalComponent = /** @class */ (function () {
        function TdNavStepsHorizontalComponent(_elementRef, _viewportRuler, _dir, _renderer, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._viewportRuler = _viewportRuler;
            this._dir = _dir;
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._separators = [];
            /**
             * Emits when the component is destroyed.
             */
            this._destroyed = new rxjs.Subject();
            this._widthSubject = new rxjs.Subject();
            this._scrollDistance = 0;
            this._scrollDistanceChanged = false;
            /**
             * Whether the controls for pagination should be displayed
             */
            this._showPaginationControls = false;
            /**
             * Whether the step list can be scrolled more towards the end.
             */
            this._disableScrollAfter = true;
            /**
             * Whether the step list can be scrolled more towards the beginning.
             */
            this._disableScrollBefore = true;
        }
        Object.defineProperty(TdNavStepsHorizontalComponent.prototype, "nativeElementWidth", {
            /*
            * Current width of the element container
            */
            get: /*
              * Current width of the element container
              */ 
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = (( /** @type {?} */(this._elementRef.nativeElement)));
                // Need to take into account border, margin and padding that might be around all the crumbs
                /** @type {?} */
                var style = window.getComputedStyle(element);
                /** @type {?} */
                var borderLeft = parseInt(style.borderLeft, 10);
                /** @type {?} */
                var borderRight = parseInt(style.borderRight, 10);
                /** @type {?} */
                var marginLeft = parseInt(style.marginLeft, 10);
                /** @type {?} */
                var marginRight = parseInt(style.marginRight, 10);
                /** @type {?} */
                var paddingLeft = parseInt(style.paddingLeft, 10);
                /** @type {?} */
                var paddingRight = parseInt(style.paddingRight, 10);
                return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                rxjs.merge(this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._viewportRuler.change(150), this._dir ? this._dir.change : rxjs.of(undefined), this._steps.changes).pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                    _this._configureSteps();
                    _this.updatePagination();
                    _this._changeDetectorRef.markForCheck();
                });
                this._configureSteps();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                if (this._elementRef && this._elementRef.nativeElement) {
                    this._widthSubject.next(this.nativeElementWidth);
                }
                if (this._scrollDistanceChanged) {
                    this._updateStepScrollPosition();
                    this._scrollDistanceChanged = false;
                    this._changeDetectorRef.markForCheck();
                }
            };
        /**
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroyed.next();
                this._destroyed.complete();
            };
        /**
         * Listen to right and left key events to move the the viewport.
         */
        /**
         * Listen to right and left key events to move the the viewport.
         * @param {?} event
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._handleKeydown = /**
         * Listen to right and left key events to move the the viewport.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event.keyCode) {
                    case keycodes.LEFT_ARROW:
                        this._scrollHeader('before');
                        event.preventDefault();
                        break;
                    case keycodes.RIGHT_ARROW:
                        this._scrollHeader('after');
                        event.preventDefault();
                        break;
                    default:
                    // do something
                }
            };
        /**
         * Updates the view whether pagination should be enabled or not.
         */
        /**
         * Updates the view whether pagination should be enabled or not.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype.updatePagination = /**
         * Updates the view whether pagination should be enabled or not.
         * @return {?}
         */
            function () {
                this._checkPaginationEnabled();
                this._checkScrollingControls();
                this._updateStepScrollPosition();
            };
        /** The layout direction of the containing app. */
        /**
         * The layout direction of the containing app.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._getLayoutDirection = /**
         * The layout direction of the containing app.
         * @return {?}
         */
            function () {
                return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
            };
        /** Performs the CSS transformation on the step list that will cause the list to scroll. */
        /**
         * Performs the CSS transformation on the step list that will cause the list to scroll.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._updateStepScrollPosition = /**
         * Performs the CSS transformation on the step list that will cause the list to scroll.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var translateX = this._getLayoutDirection() === 'ltr' ? -this.scrollDistance : this.scrollDistance;
                // Move step list the amount of pixels scrolled
                this._stepList.nativeElement.style.transform = "translateX(" + Math.round(translateX) + "px)";
                // Setting the `transform` on IE will change the scroll offset of the parent, causing the
                // position to be thrown off in some cases. We have to reset it ourselves to ensure that
                // it doesn't get thrown off.
                if (this._getLayoutDirection() === 'ltr') {
                    this._stepListContainer.nativeElement.scrollLeft = 0;
                }
                else {
                    this._stepListContainer.nativeElement.scrollLeft = this._getMaxScrollDistance();
                }
            };
        Object.defineProperty(TdNavStepsHorizontalComponent.prototype, "scrollDistance", {
            /** Sets the distance in pixels that the step header should be transformed in the X-axis. */
            get: /**
             * Sets the distance in pixels that the step header should be transformed in the X-axis.
             * @return {?}
             */ function () { return this._scrollDistance; },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
                // Mark that the scroll distance has changed so that after the view is checked, the CSS
                // transformation can move the header.
                this._scrollDistanceChanged = true;
                this._checkScrollingControls();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively).
         */
        /**
         * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively).
         * @param {?} scrollDir
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._scrollHeader = /**
         * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively).
         * @param {?} scrollDir
         * @return {?}
         */
            function (scrollDir) {
                // Move the scroll distance one-half the length of the step list's viewport.
                this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth / 2;
            };
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * step list is wider than the size of the header container, then the pagination controls should
         * be shown.
         */
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * step list is wider than the size of the header container, then the pagination controls should
         * be shown.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._checkPaginationEnabled = /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * step list is wider than the size of the header container, then the pagination controls should
         * be shown.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isEnabled = this._stepList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
                if (!isEnabled) {
                    this.scrollDistance = 0;
                }
                if (isEnabled !== this._showPaginationControls) {
                    this._changeDetectorRef.markForCheck();
                }
                this._showPaginationControls = isEnabled;
            };
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         */
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._checkScrollingControls = /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         * @return {?}
         */
            function () {
                // Check if the pagination arrows should be activated.
                this._disableScrollBefore = this.scrollDistance === 0;
                this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the step list container and step header container.
         */
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the step list container and step header container.
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._getMaxScrollDistance = /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the step list container and step header container.
         * @return {?}
         */
            function () {
                return (this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth) || 0;
            };
        /**
         * Set the step line separators and display numbers
         */
        /**
         * Set the step line separators and display numbers
         * @return {?}
         */
        TdNavStepsHorizontalComponent.prototype._configureSteps = /**
         * Set the step line separators and display numbers
         * @return {?}
         */
            function () {
                var _this = this;
                this._separators.forEach(function (separator) {
                    _this._renderer.removeChild(_this._stepList.nativeElement, separator);
                });
                /** @type {?} */
                var stepsArray = this._steps.toArray();
                // set the index number of the step so can display that number in circle
                stepsArray.forEach(function (step, index) {
                    if (index > 0 && index < stepsArray.length) {
                        /** @type {?} */
                        var separator = _this._renderer.createElement('div');
                        _this._renderer.addClass(separator, 'td-horizontal-line');
                        _this._separators.push(separator);
                        _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
                    }
                    step.number = index + 1;
                });
            };
        TdNavStepsHorizontalComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nav[td-steps][horizontal]',
                        template: "<div class=\"td-steps-header\">\n  <div class=\"td-step-header-pagination td-step-header-pagination-before mat-elevation-z4\"\n        aria-hidden=\"true\"\n        mat-ripple [matRippleDisabled]=\"_disableScrollBefore\"\n        [class.td-step-header-pagination-disabled]=\"_disableScrollBefore\"\n        (click)=\"_scrollHeader('before')\">\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n  <div #stepListContainer class=\"td-steps-header-container\" (keydown)=\"_handleKeydown($event)\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"td-step-header-pagination td-step-header-pagination-after mat-elevation-z4\"\n        aria-hidden=\"true\"\n        mat-ripple [matRippleDisabled]=\"_disableScrollAfter\"\n        [class.td-step-header-pagination-disabled]=\"_disableScrollAfter\"\n        (click)=\"_scrollHeader('after')\">\n    <div class=\"td-step-header-pagination-chevron\"></div>\n  </div>\n</div>\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps td-steps-horizontal',
                            '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
                            '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
                        },
                        styles: [":host{width:100%;display:block}.td-steps-header,.td-steps-header-list{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.td-steps-header-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;z-index:1}.td-steps-header-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.35,0,.25,1);transition:transform .5s cubic-bezier(.35,0,.25,1),-webkit-transform .5s cubic-bezier(.35,0,.25,1);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.td-step-header-pagination{position:relative;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}:host.td-step-header-pagination-controls-enabled .td-step-header-pagination{display:-webkit-box;display:-ms-flexbox;display:flex}.td-step-header-pagination-before,:host.td-step-header-rtl .td-step-header-pagination-after{padding-left:4px}.td-step-header-pagination-before .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-after .td-step-header-pagination-chevron{-webkit-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg)}.td-step-header-pagination-after,:host.td-step-header-rtl .td-step-header-pagination-before{padding-right:4px}.td-step-header-pagination-after .td-step-header-pagination-chevron,:host.td-step-header-rtl .td-step-header-pagination-before .td-step-header-pagination-chevron{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.td-step-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:'';height:8px;width:8px}.td-step-header-pagination-disabled{-webkit-box-shadow:none;box-shadow:none;cursor:default}.td-horizontal-line{border-bottom-width:1px;border-bottom-style:solid;height:1px;min-width:20px;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepsHorizontalComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: scrolling.ViewportRuler },
                { type: bidi.Directionality, decorators: [{ type: core$1.Optional }] },
                { type: core$1.Renderer2 },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdNavStepsHorizontalComponent.propDecorators = {
            _steps: [{ type: core$1.ContentChildren, args: [TdNavStepLinkComponent,] }],
            _stepListContainer: [{ type: core$1.ViewChild, args: ['stepListContainer',] }],
            _stepList: [{ type: core$1.ViewChild, args: ['stepList',] }]
        };
        return TdNavStepsHorizontalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdNavStepsVerticalComponent = /** @class */ (function () {
        function TdNavStepsVerticalComponent(_renderer, _changeDetectorRef) {
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._separators = [];
            /**
             * Emits when the component is destroyed.
             */
            this._destroyed = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._steps.changes.pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                    _this._configureSteps();
                    _this._changeDetectorRef.markForCheck();
                });
                this._configureSteps();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroyed.next();
                this._destroyed.complete();
            };
        /**
         * Set the step line separators and display numbers
         */
        /**
         * Set the step line separators and display numbers
         * @return {?}
         */
        TdNavStepsVerticalComponent.prototype._configureSteps = /**
         * Set the step line separators and display numbers
         * @return {?}
         */
            function () {
                var _this = this;
                this._separators.forEach(function (separator) {
                    _this._renderer.removeChild(_this._stepList.nativeElement, separator);
                });
                /** @type {?} */
                var stepsArray = this._steps.toArray();
                // set the index number of the step so can display that number in circle
                stepsArray.forEach(function (step, index) {
                    if (index > 0 && index < stepsArray.length) {
                        /** @type {?} */
                        var separator = _this._renderer.createElement('div');
                        _this._renderer.addClass(separator, 'td-vertical-line-wrapper');
                        /** @type {?} */
                        var separatorChild = _this._renderer.createElement('div');
                        _this._renderer.addClass(separatorChild, 'td-vertical-line');
                        _this._renderer.appendChild(separator, separatorChild);
                        _this._separators.push(separator);
                        _this._renderer.insertBefore(_this._stepList.nativeElement, separator, step.elementRef.nativeElement);
                    }
                    step.number = index + 1;
                });
            };
        TdNavStepsVerticalComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nav[td-steps][vertical]',
                        template: "<div class=\"td-steps-header\">\n  <div class=\"td-steps-header-container\">\n    <div #stepList class=\"td-steps-header-list\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n  ",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-steps td-steps-vertical',
                        },
                        styles: [".td-vertical-line-wrapper{position:relative}.td-vertical-line-wrapper .td-vertical-line{position:absolute;top:-16px;height:34px;border-left-width:1px;border-left-style:solid}::ng-deep :not([dir=rtl]) .td-vertical-line-wrapper .td-vertical-line{left:20px;right:auto}::ng-deep [dir=rtl] .td-vertical-line-wrapper .td-vertical-line{left:auto;right:20px}"]
                    }] }
        ];
        /** @nocollapse */
        TdNavStepsVerticalComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdNavStepsVerticalComponent.propDecorators = {
            _steps: [{ type: core$1.ContentChildren, args: [TdNavStepLinkComponent,] }],
            _stepList: [{ type: core$1.ViewChild, args: ['stepList',] }]
        };
        return TdNavStepsVerticalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_STEPS = [
        TdStepsComponent,
        TdStepComponent,
        TdStepHeaderComponent,
        TdStepBodyComponent,
        TdStepLabelDirective,
        TdStepActionsDirective,
        TdStepSummaryDirective,
        TdNavStepsHorizontalComponent,
        TdNavStepsVerticalComponent,
        TdNavStepLinkComponent,
    ];
    var CovalentStepsModule = /** @class */ (function () {
        function CovalentStepsModule() {
        }
        CovalentStepsModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                            core.MatRippleModule,
                            portal.PortalModule,
                            scrolling.ScrollDispatchModule,
                            common$1.CovalentCommonModule,
                        ],
                        declarations: [
                            TD_STEPS,
                        ],
                        exports: [
                            TD_STEPS,
                        ],
                    },] }
        ];
        return CovalentStepsModule;
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
    var TdTabOptionBase = /** @class */ (function () {
        function TdTabOptionBase(_viewContainerRef, _changeDetectorRef) {
            this._viewContainerRef = _viewContainerRef;
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabOptionBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabOptionMixinBase = common$1.mixinDisabled(TdTabOptionBase);
    var TdTabOptionComponent = /** @class */ (function (_super) {
        __extends(TdTabOptionComponent, _super);
        function TdTabOptionComponent(_viewContainerRef, _changeDetectorRef) {
            return _super.call(this, _viewContainerRef, _changeDetectorRef) || this;
        }
        Object.defineProperty(TdTabOptionComponent.prototype, "content", {
            get: /**
             * @return {?}
             */ function () {
                return this._contentPortal;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabOptionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
            };
        TdTabOptionComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'td-tab-option',
                        template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        /* tslint:disable-next-line */
                        inputs: ['disabled'],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TdTabOptionComponent.ctorParameters = function () {
            return [
                { type: core$1.ViewContainerRef },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdTabOptionComponent.propDecorators = {
            _content: [{ type: core$1.ViewChild, args: [core$1.TemplateRef,] }],
            value: [{ type: core$1.Input, args: ['value',] }]
        };
        return TdTabOptionComponent;
    }(_TdTabOptionMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTabSelectBase = /** @class */ (function () {
        function TdTabSelectBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdTabSelectBase;
    }());
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdTabSelectMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(common$1.mixinDisableRipple(TdTabSelectBase)));
    var TdTabSelectComponent = /** @class */ (function (_super) {
        __extends(TdTabSelectComponent, _super);
        function TdTabSelectComponent(_changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._subs = [];
            _this._values = [];
            _this._selectedIndex = 0;
            _this._stretchTabs = false;
            /**
             * Event that emits whenever the raw value of the select changes. This is here primarily
             * to facilitate the two-way binding for the `value` input.
             */
            _this.valueChange = new core$1.EventEmitter();
            return _this;
        }
        Object.defineProperty(TdTabSelectComponent.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "tabOptions", {
            get: /**
             * @return {?}
             */ function () {
                return this._tabOptions ? this._tabOptions.toArray() : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdTabSelectComponent.prototype, "stretchTabs", {
            get: /**
             * @return {?}
             */ function () {
                return this._stretchTabs;
            },
            /**
             * Makes the tabs stretch to fit the parent container.
             */
            set: /**
             * Makes the tabs stretch to fit the parent container.
             * @param {?} stretchTabs
             * @return {?}
             */ function (stretchTabs) {
                this._stretchTabs = coercion.coerceBooleanProperty(stretchTabs);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // subscribe to check if value changes and update the selectedIndex internally.
                this._subs.push(this.valueChanges.subscribe(function (value) {
                    _this._setValue(value);
                }));
            };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // subscribe to listen to any tab changes.
                this._refreshValues();
                this._subs.push(this._tabOptions.changes.subscribe(function () {
                    _this._refreshValues();
                }));
                // initialize value
                Promise.resolve().then(function () {
                    _this._setValue(_this.value);
                });
            };
        /**
         * @return {?}
         */
        TdTabSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this._subs && this._subs.length) {
                    this._subs.forEach(function (sub) {
                        sub.unsubscribe();
                    });
                }
            };
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         */
        /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
        TdTabSelectComponent.prototype.selectedIndexChange = /**
         * Method executed when user selects a different tab
         * This updates the new selectedIndex and infers what value should be mapped to.
         * @param {?} selectedIndex
         * @return {?}
         */
            function (selectedIndex) {
                this._selectedIndex = selectedIndex;
                /** @type {?} */
                var value = this._values[selectedIndex];
                this.value = value;
                this.valueChange.emit(value);
                this.onChange(value);
            };
        /**
         * Refresh the values array whenever the number of tabs gets updated
         */
        /**
         * Refresh the values array whenever the number of tabs gets updated
         * @return {?}
         */
        TdTabSelectComponent.prototype._refreshValues = /**
         * Refresh the values array whenever the number of tabs gets updated
         * @return {?}
         */
            function () {
                this._values = this.tabOptions.map(function (tabOption) {
                    return tabOption.value;
                });
                this._changeDetectorRef.markForCheck();
            };
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         */
        /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @param {?} value
         * @return {?}
         */
        TdTabSelectComponent.prototype._setValue = /**
         * Try to set value depending if its part of our options
         * else set the value of the first tab.
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var index = this._values.indexOf(value);
                if (index > -1) {
                    this._selectedIndex = index;
                }
                else {
                    this.value = this._values.length ? this._values[0] : undefined;
                    this._selectedIndex = 0;
                }
                this._changeDetectorRef.markForCheck();
            };
        TdTabSelectComponent.decorators = [
            { type: core$1.Component, args: [{
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(function () { return TdTabSelectComponent; }),
                                multi: true,
                            }],
                        selector: 'td-tab-select',
                        template: "<mat-tab-group [attr.mat-stretch-tabs]=\"stretchTabs ? true : undefined\"\n                [backgroundColor]=\"backgroundColor\"\n                [color]=\"color\"\n                [disableRipple]=\"disableRipple\"\n                [selectedIndex]=\"selectedIndex\"\n                (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <ng-template let-tabOption\n                ngFor\n                [ngForOf]=\"tabOptions\">\n    <mat-tab [disabled]=\"tabOption.disabled || disabled\">\n      <ng-template matTabLabel>\n        <ng-template *ngIf=\"tabOption.content\" [cdkPortalOutlet]=\"tabOption.content\">\n        </ng-template>\n      </ng-template>\n    </mat-tab>\n  </ng-template>\n</mat-tab-group>\n",
                        /* tslint:disable-next-line */
                        inputs: ['value', 'disabled', 'disableRipple'],
                        styles: [":host::ng-deep>.mat-tab-group>.mat-tab-body-wrapper{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdTabSelectComponent.ctorParameters = function () {
            return [
                { type: core$1.ChangeDetectorRef }
            ];
        };
        TdTabSelectComponent.propDecorators = {
            _tabOptions: [{ type: core$1.ContentChildren, args: [TdTabOptionComponent,] }],
            stretchTabs: [{ type: core$1.Input, args: ['stretchTabs',] }],
            color: [{ type: core$1.Input, args: ['color',] }],
            backgroundColor: [{ type: core$1.Input, args: ['backgroundColor',] }],
            valueChange: [{ type: core$1.Output }]
        };
        return TdTabSelectComponent;
    }(_TdTabSelectMixinBase));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentTabSelectModule = /** @class */ (function () {
        function CovalentTabSelectModule() {
        }
        CovalentTabSelectModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [
                            TdTabSelectComponent,
                            TdTabOptionComponent,
                        ],
                        // directives, components, and pipes owned by this NgModule
                        imports: [
                            /** Angular Modules */
                            common.CommonModule,
                            forms.FormsModule,
                            /** Material Modules */
                            portal.PortalModule,
                            tabs.MatTabsModule,
                        ],
                        // modules needed to run this module
                        exports: [
                            TdTabSelectComponent,
                            TdTabOptionComponent,
                        ],
                    },] }
        ];
        return CovalentTabSelectModule;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentPagingModule = CovalentPagingModule;
    exports.TdPagingBarComponent = TdPagingBarComponent;
    exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;
    exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
    exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;
    exports.CovalentNotificationsModule = CovalentNotificationsModule;
    exports.TdNotificationCountPositionY = TdNotificationCountPositionY;
    exports.TdNotificationCountPositionX = TdNotificationCountPositionX;
    exports.DEFAULT_NOTIFICATION_LIMIT = DEFAULT_NOTIFICATION_LIMIT;
    exports.TdNotificationCountComponent = TdNotificationCountComponent;
    exports.CovalentCommonModule = CovalentCommonModule;
    exports.tdRotateAnimation = tdRotateAnimation;
    exports.tdCollapseAnimation = tdCollapseAnimation;
    exports.tdFadeInOutAnimation = tdFadeInOutAnimation;
    exports.tdBounceAnimation = tdBounceAnimation;
    exports.tdFlashAnimation = tdFlashAnimation;
    exports.tdHeadshakeAnimation = tdHeadshakeAnimation;
    exports.tdJelloAnimation = tdJelloAnimation;
    exports.tdPulseAnimation = tdPulseAnimation;
    exports.mixinControlValueAccessor = mixinControlValueAccessor;
    exports.mixinDisabled = mixinDisabled;
    exports.mixinDisableRipple = mixinDisableRipple;
    exports.TdAutoTrimDirective = TdAutoTrimDirective;
    exports.CovalentValidators = CovalentValidators;
    exports.TdTimeAgoPipe = TdTimeAgoPipe;
    exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
    exports.TdBytesPipe = TdBytesPipe;
    exports.TdDigitsPipe = TdDigitsPipe;
    exports.TdTruncatePipe = TdTruncatePipe;
    exports.TdDecimalBytesPipe = TdDecimalBytesPipe;
    exports.CovalentMessageModule = CovalentMessageModule;
    exports.TdMessageContainerDirective = TdMessageContainerDirective;
    exports.TdMessageComponent = TdMessageComponent;
    exports.CovalentChipsModule = CovalentChipsModule;
    exports.TdChipDirective = TdChipDirective;
    exports.TdAutocompleteOptionDirective = TdAutocompleteOptionDirective;
    exports.TdChipsBase = TdChipsBase;
    exports._TdChipsMixinBase = _TdChipsMixinBase;
    exports.TdChipsComponent = TdChipsComponent;
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
    exports.CovalentDialogsModule = CovalentDialogsModule;
    exports.TdDialogTitleDirective = TdDialogTitleDirective;
    exports.TdDialogContentDirective = TdDialogContentDirective;
    exports.TdDialogActionsDirective = TdDialogActionsDirective;
    exports.TdDialogComponent = TdDialogComponent;
    exports.TdAlertDialogComponent = TdAlertDialogComponent;
    exports.TdConfirmDialogComponent = TdConfirmDialogComponent;
    exports.TdPromptDialogComponent = TdPromptDialogComponent;
    exports.TdDialogService = TdDialogService;
    exports.CovalentExpansionPanelModule = CovalentExpansionPanelModule;
    exports.TdExpansionPanelHeaderDirective = TdExpansionPanelHeaderDirective;
    exports.TdExpansionPanelLabelDirective = TdExpansionPanelLabelDirective;
    exports.TdExpansionPanelSublabelDirective = TdExpansionPanelSublabelDirective;
    exports.TdExpansionPanelSummaryComponent = TdExpansionPanelSummaryComponent;
    exports.TdExpansionPanelBase = TdExpansionPanelBase;
    exports._TdExpansionPanelMixinBase = _TdExpansionPanelMixinBase;
    exports.TdExpansionPanelComponent = TdExpansionPanelComponent;
    exports.TdExpansionPanelGroupComponent = TdExpansionPanelGroupComponent;
    exports.CovalentFileModule = CovalentFileModule;
    exports.TdFileDropBase = TdFileDropBase;
    exports._TdFileDropMixinBase = _TdFileDropMixinBase;
    exports.TdFileDropDirective = TdFileDropDirective;
    exports.TdFileSelectDirective = TdFileSelectDirective;
    exports.TdFileInputLabelDirective = TdFileInputLabelDirective;
    exports.TdFileInputBase = TdFileInputBase;
    exports._TdFileInputMixinBase = _TdFileInputMixinBase;
    exports.TdFileInputComponent = TdFileInputComponent;
    exports.TdFileUploadBase = TdFileUploadBase;
    exports._TdFileUploadMixinBase = _TdFileUploadMixinBase;
    exports.TdFileUploadComponent = TdFileUploadComponent;
    exports.TdFileService = TdFileService;
    exports.CovalentJsonFormatterModule = CovalentJsonFormatterModule;
    exports.TdJsonFormatterComponent = TdJsonFormatterComponent;
    exports.CovalentLayoutModule = CovalentLayoutModule;
    exports.TdLayoutComponent = TdLayoutComponent;
    exports.TdLayoutToggleDirective = TdLayoutToggleDirective;
    exports.TdLayoutCloseDirective = TdLayoutCloseDirective;
    exports.TdLayoutOpenDirective = TdLayoutOpenDirective;
    exports.LayoutToggleBase = LayoutToggleBase;
    exports._TdLayoutToggleMixinBase = _TdLayoutToggleMixinBase;
    exports.LayoutToggle = LayoutToggle;
    exports.TdLayoutCardOverComponent = TdLayoutCardOverComponent;
    exports.TdLayoutFooterComponent = TdLayoutFooterComponent;
    exports.TdLayoutManageListComponent = TdLayoutManageListComponent;
    exports.TdLayoutManageListToggleDirective = TdLayoutManageListToggleDirective;
    exports.TdLayoutManageListCloseDirective = TdLayoutManageListCloseDirective;
    exports.TdLayoutManageListOpenDirective = TdLayoutManageListOpenDirective;
    exports.TdLayoutNavComponent = TdLayoutNavComponent;
    exports.TdLayoutNavListComponent = TdLayoutNavListComponent;
    exports.TdLayoutNavListToggleDirective = TdLayoutNavListToggleDirective;
    exports.TdLayoutNavListCloseDirective = TdLayoutNavListCloseDirective;
    exports.TdLayoutNavListOpenDirective = TdLayoutNavListOpenDirective;
    exports.TdNavigationDrawerMenuDirective = TdNavigationDrawerMenuDirective;
    exports.TdNavigationDrawerToolbarDirective = TdNavigationDrawerToolbarDirective;
    exports.TdNavigationDrawerComponent = TdNavigationDrawerComponent;
    exports.CovalentLoadingModule = CovalentLoadingModule;
    exports.LoadingType = LoadingType;
    exports.LoadingMode = LoadingMode;
    exports.LoadingStrategy = LoadingStrategy;
    exports.LoadingStyle = LoadingStyle;
    exports.TD_CIRCLE_DIAMETER = TD_CIRCLE_DIAMETER;
    exports.TdLoadingComponent = TdLoadingComponent;
    exports.TdLoadingContext = TdLoadingContext;
    exports.TdLoadingDirective = TdLoadingDirective;
    exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
    exports.TdLoadingConfig = TdLoadingConfig;
    exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
    exports.TdLoadingService = TdLoadingService;
    exports.LOADING_PROVIDER = LOADING_PROVIDER;
    exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
    exports.TdLoadingFactory = TdLoadingFactory;
    exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;
    exports.CovalentMediaModule = CovalentMediaModule;
    exports.TdMediaToggleDirective = TdMediaToggleDirective;
    exports.MEDIA_PROVIDER_FACTORY = MEDIA_PROVIDER_FACTORY;
    exports.TdMediaService = TdMediaService;
    exports.MEDIA_PROVIDER = MEDIA_PROVIDER;
    exports.CovalentMenuModule = CovalentMenuModule;
    exports.TdMenuComponent = TdMenuComponent;
    exports.CovalentSearchModule = CovalentSearchModule;
    exports.TdSearchBoxBase = TdSearchBoxBase;
    exports._TdSearchBoxMixinBase = _TdSearchBoxMixinBase;
    exports.TdSearchBoxComponent = TdSearchBoxComponent;
    exports.TdSearchInputBase = TdSearchInputBase;
    exports._TdSearchInputMixinBase = _TdSearchInputMixinBase;
    exports.TdSearchInputComponent = TdSearchInputComponent;
    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
    exports.CovalentStepsModule = CovalentStepsModule;
    exports.StepState = StepState;
    exports.TdStepLabelDirective = TdStepLabelDirective;
    exports.TdStepActionsDirective = TdStepActionsDirective;
    exports.TdStepSummaryDirective = TdStepSummaryDirective;
    exports.TdStepBase = TdStepBase;
    exports._TdStepMixinBase = _TdStepMixinBase;
    exports.TdStepComponent = TdStepComponent;
    exports.StepMode = StepMode;
    exports.TdStepsComponent = TdStepsComponent;
    exports.TdStepBodyComponent = TdStepBodyComponent;
    exports.TdStepHeaderBase = TdStepHeaderBase;
    exports._TdStepHeaderMixinBase = _TdStepHeaderMixinBase;
    exports.TdStepHeaderComponent = TdStepHeaderComponent;
    exports.CovalentTabSelectModule = CovalentTabSelectModule;
    exports.TdTabSelectBase = TdTabSelectBase;
    exports._TdTabSelectMixinBase = _TdTabSelectMixinBase;
    exports.TdTabSelectComponent = TdTabSelectComponent;
    exports.TdTabOptionBase = TdTabOptionBase;
    exports._TdTabOptionMixinBase = _TdTabOptionMixinBase;
    exports.TdTabOptionComponent = TdTabOptionComponent;
    exports.ɵe = TdBreadcrumbComponent;
    exports.ɵa = TdFullscreenDirective;
    exports.ɵb = TdTimeUntilPipe;
    exports.ɵd = IconService;
    exports.ɵc = RouterPathService;
    exports.ɵg = TdNavStepLinkComponent;
    exports.ɵf = TdNavStepsHorizontalComponent;
    exports.ɵh = TdNavStepsVerticalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core.umd.js.map