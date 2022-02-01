(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/coercion'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/paging', ['exports', '@angular/core', '@angular/common', '@angular/material/icon', '@angular/material/button', '@angular/cdk/coercion', '@angular/cdk/bidi'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.paging = {}), global.ng.core, global.ng.common, global.ng.material.icon, global.ng.material.button, global.ng.cdk.coercion, global.ng.cdk.bidi));
}(this, (function (exports, core, common, icon, button, coercion, bidi) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: paging-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IPageChangeEvent() { }
    if (false) {
        /** @type {?} */
        IPageChangeEvent.prototype.page;
        /** @type {?} */
        IPageChangeEvent.prototype.maxPage;
        /** @type {?} */
        IPageChangeEvent.prototype.pageSize;
        /** @type {?} */
        IPageChangeEvent.prototype.total;
        /** @type {?} */
        IPageChangeEvent.prototype.fromRow;
        /** @type {?} */
        IPageChangeEvent.prototype.toRow;
    }
    var TdPagingBarComponent = /** @class */ (function () {
        /**
         * @param {?} _dir
         * @param {?} _changeDetectorRef
         */
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
            this.change = new core.EventEmitter();
        }
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
            /**
             * @return {?}
             */
            get: function () {
                return this._pageLinkCount;
            },
            /**
             * pageLinkCount?: number
             * Amount of page navigation links for the paging bar. Defaults to '0'
             * @param {?} pageLinkCount
             * @return {?}
             */
            set: function (pageLinkCount) {
                this._pageLinkCount = coercion.coerceNumberProperty(pageLinkCount);
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
            /**
             * @return {?}
             */
            get: function () {
                return this._pageSize;
            },
            /**
             * pageSize?: number
             * Selected page size for the pagination. Defaults 50.
             * @param {?} pageSize
             * @return {?}
             */
            set: function (pageSize) {
                this._pageSize = coercion.coerceNumberProperty(pageSize);
                this._page = 1;
                if (this._initialized) {
                    this._handleOnChange();
                }
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "total", {
            /**
             * @return {?}
             */
            get: function () {
                return this._total;
            },
            /**
             * total: number
             * Total rows for the pagination.
             * @param {?} total
             * @return {?}
             */
            set: function (total) {
                this._total = coercion.coerceNumberProperty(total);
                this._calculateRows();
                this._calculatePageLinks();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "pageLinks", {
            /**
             * pageLinks: number[]
             * Returns the pageLinks in an array
             * @return {?}
             */
            get: function () {
                return this._pageLinks;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "range", {
            /**
             * range: string
             * Returns the range of the rows.
             * @return {?}
             */
            get: function () {
                return (!this._toRow ? 0 : this._fromRow) + "-" + this._toRow;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "page", {
            /**
             * page: number
             * Returns the current page.
             * @return {?}
             */
            get: function () {
                return this._page;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "maxPage", {
            /**
             * page: number
             * Returns the max page for the current pageSize and total.
             * @return {?}
             */
            get: function () {
                return Math.ceil(this._total / this._pageSize);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
            /**
             * @return {?}
             */
            get: function () {
                if (this._dir) {
                    return this._dir.dir === 'rtl';
                }
                return false;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.ngOnInit = function () {
            this._page = coercion.coerceNumberProperty(this.initialPage);
            this._calculateRows();
            this._calculatePageLinks();
            this._initialized = true;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * navigateToPage?: function
         * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
         * @param {?} page
         * @return {?}
         */
        TdPagingBarComponent.prototype.navigateToPage = function (page) {
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
         * @return {?}
         */
        TdPagingBarComponent.prototype.firstPage = function () {
            return this.navigateToPage(1);
        };
        /**
         * prevPage?: function
         * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.prevPage = function () {
            return this.navigateToPage(this._page - 1);
        };
        /**
         * nextPage?: function
         * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.nextPage = function () {
            return this.navigateToPage(this._page + 1);
        };
        /**
         * lastPage?: function
         * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
         * @return {?}
         */
        TdPagingBarComponent.prototype.lastPage = function () {
            return this.navigateToPage(this.maxPage);
        };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.isMinPage = function () {
            return this._page <= 1;
        };
        /**
         * @return {?}
         */
        TdPagingBarComponent.prototype.isMaxPage = function () {
            return this._page >= this.maxPage;
        };
        /**
         * @private
         * @return {?}
         */
        TdPagingBarComponent.prototype._calculateRows = function () {
            /** @type {?} */
            var top = this._pageSize * this._page;
            this._fromRow = this._pageSize * (this._page - 1) + 1;
            this._toRow = this._total > top ? top : this._total;
        };
        /**
         * _calculatePageLinks?: function
         * Calculates the page links that should be shown to the user based on the current state of the paginator
         * @private
         * @return {?}
         */
        TdPagingBarComponent.prototype._calculatePageLinks = function () {
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
                if ((actualPageLinkCount % 2 === 0 && this.page + middlePageLinks > this.maxPage) ||
                    (actualPageLinkCount % 2 !== 0 && this.page + middlePageLinks >= this.maxPage)) {
                    this._pageLinks[x] = this.maxPage - (actualPageLinkCount - (x + 1));
                    // if the selected page is after the middle then set that page as middle and get the correct balance on left and right
                    // special handling when there are only 2 pageLinks to just drop to next if block so can lead to next numbers when moving to right
                    // when moving to the left then go into this block
                }
                else if ((actualPageLinkCount > 2 || (actualPageLinkCount <= 2 && this._hitEnd)) &&
                    this.page - middlePageLinks > 0) {
                    this._pageLinks[x] = this.page - middlePageLinks + x;
                    // if the selected page is before the middle then set the pages based on the x index leading up to and after selected page
                }
                else if (this.page - middlePageLinks <= 0) {
                    this._pageLinks[x] = x + 1;
                    // other wise just set the array in order starting from the selected page
                }
                else {
                    this._pageLinks[x] = this.page + x;
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdPagingBarComponent.prototype._handleOnChange = function () {
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
            this.change.emit(event);
        };
        return TdPagingBarComponent;
    }());
    TdPagingBarComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'td-paging-bar',
                    template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\">\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-first-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMinPage()\"\n      (click)=\"firstPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button\n        class=\"td-paging-bar-link-page\"\n        mat-icon-button\n        type=\"button\"\n        [color]=\"page === link ? 'accent' : undefined\"\n        (click)=\"navigateToPage(link)\"\n      >\n        {{ link }}\n      </button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-last-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMaxPage()\"\n      (click)=\"lastPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>\n",
                    styles: [":host{display:block}:host .td-paging-bar{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:end;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;height:48px;justify-content:flex-end;max-width:100%}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    TdPagingBarComponent.ctorParameters = function () { return [
        { type: bidi.Dir, decorators: [{ type: core.Optional }] },
        { type: core.ChangeDetectorRef }
    ]; };
    TdPagingBarComponent.propDecorators = {
        firstLast: [{ type: core.Input }],
        initialPage: [{ type: core.Input }],
        pageLinkCount: [{ type: core.Input, args: ['pageLinkCount',] }],
        pageSize: [{ type: core.Input, args: ['pageSize',] }],
        total: [{ type: core.Input, args: ['total',] }],
        change: [{ type: core.Output }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._pageSize;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._total;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._page;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._fromRow;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._toRow;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._initialized;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._pageLinks;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._pageLinkCount;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._hitEnd;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._hitStart;
        /**
         * firstLast?: boolean
         * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
         * @type {?}
         */
        TdPagingBarComponent.prototype.firstLast;
        /**
         * initialPage?: number
         * Sets starting page for the paging bar. Defaults to '1'
         * @type {?}
         */
        TdPagingBarComponent.prototype.initialPage;
        /**
         * change?: function
         * Method to be executed when page size changes or any button is clicked in the paging bar.
         * Emits an [IPageChangeEvent] implemented object.
         * @type {?}
         */
        TdPagingBarComponent.prototype.change;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._dir;
        /**
         * @type {?}
         * @private
         */
        TdPagingBarComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: paging.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentPagingModule = /** @class */ (function () {
        function CovalentPagingModule() {
        }
        return CovalentPagingModule;
    }());
    CovalentPagingModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, icon.MatIconModule, button.MatButtonModule],
                    declarations: [TdPagingBarComponent],
                    exports: [TdPagingBarComponent],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-core-paging.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentPagingModule = CovalentPagingModule;
    exports.TdPagingBarComponent = TdPagingBarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-paging.umd.js.map
