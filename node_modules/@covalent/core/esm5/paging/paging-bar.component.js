/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Dir } from '@angular/cdk/bidi';
/**
 * @record
 */
export function IPageChangeEvent() { }
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
        this.onChange = new EventEmitter();
    }
    Object.defineProperty(TdPagingBarComponent.prototype, "pageLinkCount", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function (pageLinkCount) {
            this._pageLinkCount = coerceNumberProperty(pageLinkCount);
            this._calculatePageLinks();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
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
         */
        function (pageSize) {
            this._pageSize = coerceNumberProperty(pageSize);
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
         */
        function () {
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
         */
        function (total) {
            this._total = coerceNumberProperty(total);
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
            return Math.ceil(this._total / this._pageSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdPagingBarComponent.prototype, "isRTL", {
        get: /**
         * @return {?}
         */
        function () {
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
        this._page = coerceNumberProperty(this.initialPage);
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
            this._page = coerceNumberProperty(Math.floor(page));
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
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'td-paging-bar',
                    template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" >\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\">\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\">\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>",
                    styles: [":host{display:block}:host .td-paging-bar{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
                }] }
    ];
    /** @nocollapse */
    TdPagingBarComponent.ctorParameters = function () { return [
        { type: Dir, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    TdPagingBarComponent.propDecorators = {
        firstLast: [{ type: Input, args: ['firstLast',] }],
        initialPage: [{ type: Input, args: ['initialPage',] }],
        pageLinkCount: [{ type: Input, args: ['pageLinkCount',] }],
        pageSize: [{ type: Input, args: ['pageSize',] }],
        total: [{ type: Input, args: ['total',] }],
        onChange: [{ type: Output, args: ['change',] }]
    };
    return TdPagingBarComponent;
}());
export { TdPagingBarComponent };
if (false) {
    /** @type {?} */
    TdPagingBarComponent.prototype._pageSize;
    /** @type {?} */
    TdPagingBarComponent.prototype._total;
    /** @type {?} */
    TdPagingBarComponent.prototype._page;
    /** @type {?} */
    TdPagingBarComponent.prototype._fromRow;
    /** @type {?} */
    TdPagingBarComponent.prototype._toRow;
    /** @type {?} */
    TdPagingBarComponent.prototype._initialized;
    /** @type {?} */
    TdPagingBarComponent.prototype._pageLinks;
    /** @type {?} */
    TdPagingBarComponent.prototype._pageLinkCount;
    /** @type {?} */
    TdPagingBarComponent.prototype._hitEnd;
    /** @type {?} */
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
    TdPagingBarComponent.prototype.onChange;
    /** @type {?} */
    TdPagingBarComponent.prototype._dir;
    /** @type {?} */
    TdPagingBarComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbInBhZ2luZy9wYWdpbmctYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXhDLHNDQU9DOzs7SUFOQyxnQ0FBYTs7SUFDYixtQ0FBZ0I7O0lBQ2hCLG9DQUFpQjs7SUFDakIsaUNBQWM7O0lBQ2QsbUNBQWdCOztJQUNoQixpQ0FBYzs7QUFHaEI7SUE2SEUsOEJBQWdDLElBQVMsRUFDckIsa0JBQXFDO1FBRHpCLFNBQUksR0FBSixJQUFJLENBQUs7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXRIakQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7O1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7O1FBRXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBTWYsY0FBUyxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7Ozs7OztRQXFGNUIsYUFBUSxHQUFtQyxJQUFJLFlBQVksRUFBb0Is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ZW50RW1pdHRlciwgT25Jbml0LCBPcHRpb25hbCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBEaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDaGFuZ2VFdmVudCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbWF4UGFnZTogbnVtYmVyO1xuICBwYWdlU2l6ZTogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBmcm9tUm93OiBudW1iZXI7XG4gIHRvUm93OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc2VsZWN0b3I6ICd0ZC1wYWdpbmctYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luZy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmctYmFyLmNvbXBvbmVudC5zY3NzJyBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZFBhZ2luZ0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfcGFnZVNpemU6IG51bWJlciA9IDUwO1xuICBwcml2YXRlIF90b3RhbDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfZnJvbVJvdzogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfdG9Sb3c6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3BhZ2VMaW5rczogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBfcGFnZUxpbmtDb3VudDogbnVtYmVyID0gMDtcbiAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBlbmQgb2YgcGFnZXMgc28gY2FuIGxlYWQgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgcHJpdmF0ZSBfaGl0RW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBzdGFydCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBmaXJzdExhc3Q/OiBib29sZWFuXG4gICAqIFNob3dzIG9yIGhpZGVzIHRoZSBmaXJzdCBhbmQgbGFzdCBwYWdlIGJ1dHRvbnMgb2YgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgnZmlyc3RMYXN0JykgZmlyc3RMYXN0OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogaW5pdGlhbFBhZ2U/OiBudW1iZXJcbiAgICogU2V0cyBzdGFydGluZyBwYWdlIGZvciB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJzEnXG4gICAqL1xuICBASW5wdXQoJ2luaXRpYWxQYWdlJykgaW5pdGlhbFBhZ2U6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIHBhZ2VMaW5rQ291bnQ/OiBudW1iZXJcbiAgICogQW1vdW50IG9mIHBhZ2UgbmF2aWdhdGlvbiBsaW5rcyBmb3IgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICcwJ1xuICAgKi9cbiAgQElucHV0KCdwYWdlTGlua0NvdW50JylcbiAgc2V0IHBhZ2VMaW5rQ291bnQocGFnZUxpbmtDb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZUxpbmtDb3VudCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHBhZ2VMaW5rQ291bnQpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBwYWdlTGlua0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW5rQ291bnQ7XG4gIH1cblxuICAvKipcbiAgICogcGFnZVNpemU/OiBudW1iZXJcbiAgICogU2VsZWN0ZWQgcGFnZSBzaXplIGZvciB0aGUgcGFnaW5hdGlvbi4gRGVmYXVsdHMgNTAuXG4gICAqL1xuICBASW5wdXQoJ3BhZ2VTaXplJylcbiAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHBhZ2VTaXplKTtcbiAgICB0aGlzLl9wYWdlID0gMTtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b3RhbDogbnVtYmVyXG4gICAqIFRvdGFsIHJvd3MgZm9yIHRoZSBwYWdpbmF0aW9uLlxuICAgKi9cbiAgQElucHV0KCd0b3RhbCcpXG4gIHNldCB0b3RhbCh0b3RhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWwgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0b3RhbCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlTGlua3M6IG51bWJlcltdXG4gICAqIFJldHVybnMgdGhlIHBhZ2VMaW5rcyBpbiBhbiBhcnJheVxuICAgKi9cbiAgZ2V0IHBhZ2VMaW5rcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW5rcztcbiAgfVxuXG4gIC8qKlxuICAgKiByYW5nZTogc3RyaW5nXG4gICAqIFJldHVybnMgdGhlIHJhbmdlIG9mIHRoZSByb3dzLlxuICAgKi9cbiAgZ2V0IHJhbmdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkeyF0aGlzLl90b1JvdyA/IDAgOiB0aGlzLl9mcm9tUm93fS0ke3RoaXMuX3RvUm93fWA7XG4gIH1cblxuICAvKipcbiAgICogcGFnZTogbnVtYmVyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICovXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICAvKipcbiAgICogcGFnZTogbnVtYmVyXG4gICAqIFJldHVybnMgdGhlIG1heCBwYWdlIGZvciB0aGUgY3VycmVudCBwYWdlU2l6ZSBhbmQgdG90YWwuXG4gICAqL1xuICBnZXQgbWF4UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdG90YWwgLyB0aGlzLl9wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogY2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gcGFnZSBzaXplIGNoYW5nZXMgb3IgYW55IGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSBwYWdpbmcgYmFyLlxuICAgKiBFbWl0cyBhbiBbSVBhZ2VDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnY2hhbmdlJykgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVBhZ2VDaGFuZ2VFdmVudD4oKTtcblxuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Rpcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpci5kaXIgPT09ICdydGwnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9kaXI6IERpcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3BhZ2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0aGlzLmluaXRpYWxQYWdlKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIG5hdmlnYXRlVG9QYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIGEgc3BlY2lmaWMgdmFsaWQgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbmF2aWdhdGVUb1BhZ2UocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHBhZ2UgPT09IDEgfHwgKHBhZ2UgPj0gMSAmJiBwYWdlIDw9IHRoaXMubWF4UGFnZSkpIHtcbiAgICAgIHRoaXMuX3BhZ2UgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShNYXRoLmZsb29yKHBhZ2UpKTtcbiAgICAgIHRoaXMuX2hhbmRsZU9uQ2hhbmdlKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGZpcnN0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgZmlyc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgZmlyc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXZQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBwcmV2aW91cyBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBwcmV2UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlIC0gMSk7XG4gIH1cblxuICAvKipcbiAgICogbmV4dFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIG5leHQgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbmV4dFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5fcGFnZSArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBsYXN0IHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGxhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMubWF4UGFnZSk7XG4gIH1cblxuICBpc01pblBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2UgPD0gMTtcbiAgfVxuXG4gIGlzTWF4UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA+PSB0aGlzLm1heFBhZ2U7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVSb3dzKCk6IHZvaWQge1xuICAgIGxldCB0b3A6IG51bWJlciA9ICh0aGlzLl9wYWdlU2l6ZSAqIHRoaXMuX3BhZ2UpO1xuICAgIHRoaXMuX2Zyb21Sb3cgPSAodGhpcy5fcGFnZVNpemUgKiAodGhpcy5fcGFnZSAtIDEpKSArIDE7XG4gICAgdGhpcy5fdG9Sb3cgPSB0aGlzLl90b3RhbCA+IHRvcCA/IHRvcCA6IHRoaXMuX3RvdGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIF9jYWxjdWxhdGVQYWdlTGlua3M/OiBmdW5jdGlvblxuICAgKiBDYWxjdWxhdGVzIHRoZSBwYWdlIGxpbmtzIHRoYXQgc2hvdWxkIGJlIHNob3duIHRvIHRoZSB1c2VyIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBwYWdpbmF0b3JcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVBhZ2VMaW5rcygpOiB2b2lkIHtcbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IGVuZCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICAgIGlmICh0aGlzLmlzTWF4UGFnZSgpKSB7XG4gICAgICB0aGlzLl9oaXRFbmQgPSB0cnVlO1xuICAgICAgdGhpcy5faGl0U3RhcnQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBzdGFydCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICAgIGlmICh0aGlzLmlzTWluUGFnZSgpKSB7XG4gICAgICB0aGlzLl9oaXRFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hpdFN0YXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBhZ2VMaW5rQ291bnQgZ29lcyBhYm92ZSBtYXggcG9zc2libGUgcGFnZXMgYmFzZWQgb24gcGVycGFnZSBzZXR0aW5nIHRoZW4gcmVzZXQgaXQgdG8gbWF4UGFnZVxuICAgIGxldCBhY3R1YWxQYWdlTGlua0NvdW50OiBudW1iZXIgPSB0aGlzLnBhZ2VMaW5rQ291bnQ7XG4gICAgaWYgKHRoaXMucGFnZUxpbmtDb3VudCA+IHRoaXMubWF4UGFnZSkge1xuICAgICAgYWN0dWFsUGFnZUxpbmtDb3VudCA9IHRoaXMubWF4UGFnZTtcbiAgICB9XG4gICAgLy8gcmVzZXQgdGhlIHBhZ2VMaW5rcyBhcnJheVxuICAgIHRoaXMuX3BhZ2VMaW5rcyA9IFtdO1xuICAgIC8vIGZpbGwgaW4gdGhlIGFycmF5IHdpdGggdGhlIHBhZ2VMaW5rcyBiYXNlZCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBwYWdlXG4gICAgbGV0IG1pZGRsZVBhZ2VMaW5rczogbnVtYmVyID0gTWF0aC5mbG9vcihhY3R1YWxQYWdlTGlua0NvdW50IC8gMik7XG4gICAgZm9yIChsZXQgeDogbnVtYmVyID0gMDsgeCA8IGFjdHVhbFBhZ2VMaW5rQ291bnQ7IHgrKykge1xuICAgICAgLy8gZG9uJ3QgZ28gcGFzdCB0aGUgbWF4UGFnZSBpbiB0aGUgcGFnZUxpbmtzXG4gICAgICAvLyBoYXZlIHRvIGhhbmRsZSBldmVuIGFuZCBvZGQgcGFnZUxpbmtDb3VudHMgZGlmZmVyZW50bHkgc28gY2FuIHN0aWxsIGxlYWQgdG8gdGhlIG5leHQgbnVtYmVyc1xuICAgICAgaWYgKChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiA9PT0gMCAmJiAodGhpcy5wYWdlICsgbWlkZGxlUGFnZUxpbmtzID4gdGhpcy5tYXhQYWdlKSkgfHxcbiAgICAgICAgICAoYWN0dWFsUGFnZUxpbmtDb3VudCAlIDIgIT09IDAgJiYgKHRoaXMucGFnZSArIG1pZGRsZVBhZ2VMaW5rcyA+PSB0aGlzLm1heFBhZ2UpKSkge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLm1heFBhZ2UgLSAoYWN0dWFsUGFnZUxpbmtDb3VudCAtICh4ICsgMSkpO1xuICAgICAgLy8gaWYgdGhlIHNlbGVjdGVkIHBhZ2UgaXMgYWZ0ZXIgdGhlIG1pZGRsZSB0aGVuIHNldCB0aGF0IHBhZ2UgYXMgbWlkZGxlIGFuZCBnZXQgdGhlIGNvcnJlY3QgYmFsYW5jZSBvbiBsZWZ0IGFuZCByaWdodFxuICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIHRoZXJlIGFyZSBvbmx5IDIgcGFnZUxpbmtzIHRvIGp1c3QgZHJvcCB0byBuZXh0IGlmIGJsb2NrIHNvIGNhbiBsZWFkIHRvIG5leHQgbnVtYmVycyB3aGVuIG1vdmluZyB0byByaWdodFxuICAgICAgLy8gd2hlbiBtb3ZpbmcgdG8gdGhlIGxlZnQgdGhlbiBnbyBpbnRvIHRoaXMgYmxvY2tcbiAgICAgIH0gZWxzZSBpZiAoKGFjdHVhbFBhZ2VMaW5rQ291bnQgPiAyIHx8IGFjdHVhbFBhZ2VMaW5rQ291bnQgPD0gMiAmJiB0aGlzLl9oaXRFbmQpICYmICh0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MpID4gMCkge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSAodGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzKSArIHg7XG4gICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgcGFnZSBpcyBiZWZvcmUgdGhlIG1pZGRsZSB0aGVuIHNldCB0aGUgcGFnZXMgYmFzZWQgb24gdGhlIHggaW5kZXggbGVhZGluZyB1cCB0byBhbmQgYWZ0ZXIgc2VsZWN0ZWQgcGFnZVxuICAgICAgfSBlbHNlIGlmICgodGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzKSA8PSAwKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHggKyAxO1xuICAgICAgLy8gb3RoZXIgd2lzZSBqdXN0IHNldCB0aGUgYXJyYXkgaW4gb3JkZXIgc3RhcnRpbmcgZnJvbSB0aGUgc2VsZWN0ZWQgcGFnZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0gdGhpcy5wYWdlICsgeDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgbGV0IGV2ZW50OiBJUGFnZUNoYW5nZUV2ZW50ID0ge1xuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIG1heFBhZ2U6IHRoaXMubWF4UGFnZSxcbiAgICAgIHBhZ2VTaXplOiB0aGlzLl9wYWdlU2l6ZSxcbiAgICAgIHRvdGFsOiB0aGlzLl90b3RhbCxcbiAgICAgIGZyb21Sb3c6IHRoaXMuX2Zyb21Sb3csXG4gICAgICB0b1JvdzogdGhpcy5fdG9Sb3csXG4gICAgfTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbn1cbiJdfQ==