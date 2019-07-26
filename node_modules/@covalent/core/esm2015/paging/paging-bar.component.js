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
export class TdPagingBarComponent {
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     */
    constructor(_dir, _changeDetectorRef) {
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
    /**
     * pageLinkCount?: number
     * Amount of page navigation links for the paging bar. Defaults to '0'
     * @param {?} pageLinkCount
     * @return {?}
     */
    set pageLinkCount(pageLinkCount) {
        this._pageLinkCount = coerceNumberProperty(pageLinkCount);
        this._calculatePageLinks();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get pageLinkCount() {
        return this._pageLinkCount;
    }
    /**
     * pageSize?: number
     * Selected page size for the pagination. Defaults 50.
     * @param {?} pageSize
     * @return {?}
     */
    set pageSize(pageSize) {
        this._pageSize = coerceNumberProperty(pageSize);
        this._page = 1;
        if (this._initialized) {
            this._handleOnChange();
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * total: number
     * Total rows for the pagination.
     * @param {?} total
     * @return {?}
     */
    set total(total) {
        this._total = coerceNumberProperty(total);
        this._calculateRows();
        this._calculatePageLinks();
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get total() {
        return this._total;
    }
    /**
     * pageLinks: number[]
     * Returns the pageLinks in an array
     * @return {?}
     */
    get pageLinks() {
        return this._pageLinks;
    }
    /**
     * range: string
     * Returns the range of the rows.
     * @return {?}
     */
    get range() {
        return `${!this._toRow ? 0 : this._fromRow}-${this._toRow}`;
    }
    /**
     * page: number
     * Returns the current page.
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * page: number
     * Returns the max page for the current pageSize and total.
     * @return {?}
     */
    get maxPage() {
        return Math.ceil(this._total / this._pageSize);
    }
    /**
     * @return {?}
     */
    get isRTL() {
        if (this._dir) {
            return this._dir.dir === 'rtl';
        }
        return false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._page = coerceNumberProperty(this.initialPage);
        this._calculateRows();
        this._calculatePageLinks();
        this._initialized = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     * @param {?} page
     * @return {?}
     */
    navigateToPage(page) {
        if (page === 1 || (page >= 1 && page <= this.maxPage)) {
            this._page = coerceNumberProperty(Math.floor(page));
            this._handleOnChange();
            return true;
        }
        return false;
    }
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    firstPage() {
        return this.navigateToPage(1);
    }
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    prevPage() {
        return this.navigateToPage(this._page - 1);
    }
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    nextPage() {
        return this.navigateToPage(this._page + 1);
    }
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     * @return {?}
     */
    lastPage() {
        return this.navigateToPage(this.maxPage);
    }
    /**
     * @return {?}
     */
    isMinPage() {
        return this._page <= 1;
    }
    /**
     * @return {?}
     */
    isMaxPage() {
        return this._page >= this.maxPage;
    }
    /**
     * @return {?}
     */
    _calculateRows() {
        /** @type {?} */
        let top = (this._pageSize * this._page);
        this._fromRow = (this._pageSize * (this._page - 1)) + 1;
        this._toRow = this._total > top ? top : this._total;
    }
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     * @return {?}
     */
    _calculatePageLinks() {
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
        let actualPageLinkCount = this.pageLinkCount;
        if (this.pageLinkCount > this.maxPage) {
            actualPageLinkCount = this.maxPage;
        }
        // reset the pageLinks array
        this._pageLinks = [];
        // fill in the array with the pageLinks based on the current selected page
        /** @type {?} */
        let middlePageLinks = Math.floor(actualPageLinkCount / 2);
        for (let x = 0; x < actualPageLinkCount; x++) {
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
    }
    /**
     * @return {?}
     */
    _handleOnChange() {
        this._calculateRows();
        this._calculatePageLinks();
        /** @type {?} */
        let event = {
            page: this._page,
            maxPage: this.maxPage,
            pageSize: this._pageSize,
            total: this._total,
            fromRow: this._fromRow,
            toRow: this._toRow,
        };
        this._changeDetectorRef.markForCheck();
        this.onChange.emit(event);
    }
}
TdPagingBarComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'td-paging-bar',
                template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" >\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\">\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\">\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>",
                styles: [":host{display:block}:host .td-paging-bar{height:48px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
            }] }
];
/** @nocollapse */
TdPagingBarComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TdPagingBarComponent.propDecorators = {
    firstLast: [{ type: Input, args: ['firstLast',] }],
    initialPage: [{ type: Input, args: ['initialPage',] }],
    pageLinkCount: [{ type: Input, args: ['pageLinkCount',] }],
    pageSize: [{ type: Input, args: ['pageSize',] }],
    total: [{ type: Input, args: ['total',] }],
    onChange: [{ type: Output, args: ['change',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbInBhZ2luZy9wYWdpbmctYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRXhDLHNDQU9DOzs7SUFOQyxnQ0FBYTs7SUFDYixtQ0FBZ0I7O0lBQ2hCLG9DQUFpQjs7SUFDakIsaUNBQWM7O0lBQ2QsbUNBQWdCOztJQUNoQixpQ0FBYzs7QUFTaEIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUF1SC9CLFlBQWdDLElBQVMsRUFDckIsa0JBQXFDO1FBRHpCLFNBQUksR0FBSixJQUFJLENBQUs7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXRIakQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7O1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7O1FBRXpCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBTWYsY0FBUyxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7Ozs7OztRQXFGNUIsYUFBUSxH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QztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGkzQ0FBMEM7O2FBRTNDOzs7O1lBaEJRLEdBQUcsdUJBd0lHLFFBQVE7WUExSTRDLGlCQUFpQjs7O3dCQXNDakYsS0FBSyxTQUFDLFdBQVc7MEJBTWpCLEtBQUssU0FBQyxhQUFhOzRCQU1uQixLQUFLLFNBQUMsZUFBZTt1QkFjckIsS0FBSyxTQUFDLFVBQVU7b0JBaUJoQixLQUFLLFNBQUMsT0FBTzt1QkFnRGIsTUFBTSxTQUFDLFFBQVE7Ozs7SUE1R2hCLHlDQUErQjs7SUFDL0Isc0NBQTJCOztJQUMzQixxQ0FBMEI7O0lBQzFCLHdDQUE2Qjs7SUFDN0Isc0NBQTJCOztJQUMzQiw0Q0FBc0M7O0lBQ3RDLDBDQUFrQzs7SUFDbEMsOENBQW1DOztJQUVuQyx1Q0FBaUM7O0lBRWpDLHlDQUFtQzs7Ozs7O0lBTW5DLHlDQUE4Qzs7Ozs7O0lBTTlDLDJDQUE4Qzs7Ozs7OztJQXFGOUMsd0NBQWtHOztJQVN0RixvQ0FBNkI7O0lBQzdCLGtEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9wdGlvbmFsLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNoYW5nZUV2ZW50IHtcbiAgcGFnZTogbnVtYmVyO1xuICBtYXhQYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGZyb21Sb3c6IG51bWJlcjtcbiAgdG9Sb3c6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLXBhZ2luZy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy1iYXIuY29tcG9uZW50LnNjc3MnIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkUGFnaW5nQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIHByaXZhdGUgX3RvdGFsOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9wYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGFnZUxpbmtzOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlTGlua0NvdW50OiBudW1iZXIgPSAwO1xuICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IGVuZCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IHN0YXJ0IG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIHByaXZhdGUgX2hpdFN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGZpcnN0TGFzdD86IGJvb2xlYW5cbiAgICogU2hvd3Mgb3IgaGlkZXMgdGhlIGZpcnN0IGFuZCBsYXN0IHBhZ2UgYnV0dG9ucyBvZiB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdmaXJzdExhc3QnKSBmaXJzdExhc3Q6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBpbml0aWFsUGFnZT86IG51bWJlclxuICAgKiBTZXRzIHN0YXJ0aW5nIHBhZ2UgZm9yIHRoZSBwYWdpbmcgYmFyLiBEZWZhdWx0cyB0byAnMSdcbiAgICovXG4gIEBJbnB1dCgnaW5pdGlhbFBhZ2UnKSBpbml0aWFsUGFnZTogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogcGFnZUxpbmtDb3VudD86IG51bWJlclxuICAgKiBBbW91bnQgb2YgcGFnZSBuYXZpZ2F0aW9uIGxpbmtzIGZvciB0aGUgcGFnaW5nIGJhci4gRGVmYXVsdHMgdG8gJzAnXG4gICAqL1xuICBASW5wdXQoJ3BhZ2VMaW5rQ291bnQnKVxuICBzZXQgcGFnZUxpbmtDb3VudChwYWdlTGlua0NvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlTGlua0NvdW50ID0gY29lcmNlTnVtYmVyUHJvcGVydHkocGFnZUxpbmtDb3VudCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHBhZ2VMaW5rQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxpbmtDb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlU2l6ZT86IG51bWJlclxuICAgKiBTZWxlY3RlZCBwYWdlIHNpemUgZm9yIHRoZSBwYWdpbmF0aW9uLiBEZWZhdWx0cyA1MC5cbiAgICovXG4gIEBJbnB1dCgncGFnZVNpemUnKVxuICBzZXQgcGFnZVNpemUocGFnZVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gY29lcmNlTnVtYmVyUHJvcGVydHkocGFnZVNpemUpO1xuICAgIHRoaXMuX3BhZ2UgPSAxO1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvdGFsOiBudW1iZXJcbiAgICogVG90YWwgcm93cyBmb3IgdGhlIHBhZ2luYXRpb24uXG4gICAqL1xuICBASW5wdXQoJ3RvdGFsJylcbiAgc2V0IHRvdGFsKHRvdGFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRvdGFsKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVSb3dzKCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUGFnZUxpbmtzKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhZ2VMaW5rczogbnVtYmVyW11cbiAgICogUmV0dXJucyB0aGUgcGFnZUxpbmtzIGluIGFuIGFycmF5XG4gICAqL1xuICBnZXQgcGFnZUxpbmtzKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUxpbmtzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJhbmdlOiBzdHJpbmdcbiAgICogUmV0dXJucyB0aGUgcmFuZ2Ugb2YgdGhlIHJvd3MuXG4gICAqL1xuICBnZXQgcmFuZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7IXRoaXMuX3RvUm93ID8gMCA6IHRoaXMuX2Zyb21Sb3d9LSR7dGhpcy5fdG9Sb3d9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlOiBudW1iZXJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwYWdlLlxuICAgKi9cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlOiBudW1iZXJcbiAgICogUmV0dXJucyB0aGUgbWF4IHBhZ2UgZm9yIHRoZSBjdXJyZW50IHBhZ2VTaXplIGFuZCB0b3RhbC5cbiAgICovXG4gIGdldCBtYXhQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLl90b3RhbCAvIHRoaXMuX3BhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGFuZ2U/OiBmdW5jdGlvblxuICAgKiBNZXRob2QgdG8gYmUgZXhlY3V0ZWQgd2hlbiBwYWdlIHNpemUgY2hhbmdlcyBvciBhbnkgYnV0dG9uIGlzIGNsaWNrZWQgaW4gdGhlIHBhZ2luZyBiYXIuXG4gICAqIEVtaXRzIGFuIFtJUGFnZUNoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdjaGFuZ2UnKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPElQYWdlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogbmF2aWdhdGVUb1BhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gYSBzcGVjaWZpYyB2YWxpZCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAocGFnZSA9PT0gMSB8fCAocGFnZSA+PSAxICYmIHBhZ2UgPD0gdGhpcy5tYXhQYWdlKSkge1xuICAgICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KE1hdGguZmxvb3IocGFnZSkpO1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZmlyc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBmaXJzdCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBmaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UoMSk7XG4gIH1cblxuICAvKipcbiAgICogcHJldlBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHByZXZpb3VzIHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIHByZXZQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMuX3BhZ2UgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZXh0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuZXh0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogbGFzdFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGxhc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5tYXhQYWdlKTtcbiAgfVxuXG4gIGlzTWluUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA8PSAxO1xuICB9XG5cbiAgaXNNYXhQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlID49IHRoaXMubWF4UGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgbGV0IHRvcDogbnVtYmVyID0gKHRoaXMuX3BhZ2VTaXplICogdGhpcy5fcGFnZSk7XG4gICAgdGhpcy5fZnJvbVJvdyA9ICh0aGlzLl9wYWdlU2l6ZSAqICh0aGlzLl9wYWdlIC0gMSkpICsgMTtcbiAgICB0aGlzLl90b1JvdyA9IHRoaXMuX3RvdGFsID4gdG9wID8gdG9wIDogdGhpcy5fdG90YWw7XG4gIH1cblxuICAvKipcbiAgICogX2NhbGN1bGF0ZVBhZ2VMaW5rcz86IGZ1bmN0aW9uXG4gICAqIENhbGN1bGF0ZXMgdGhlIHBhZ2UgbGlua3MgdGhhdCBzaG91bGQgYmUgc2hvd24gdG8gdGhlIHVzZXIgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHBhZ2luYXRvclxuICAgKi9cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlUGFnZUxpbmtzKCk6IHZvaWQge1xuICAgIC8vIHNwZWNpYWwgY2FzZSB3aGVuIDIgcGFnZUxpbmtzLCBkZXRlY3Qgd2hlbiBoaXQgZW5kIG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuaXNNYXhQYWdlKCkpIHtcbiAgICAgIHRoaXMuX2hpdEVuZCA9IHRydWU7XG4gICAgICB0aGlzLl9oaXRTdGFydCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IHN0YXJ0IG9mIHBhZ2VzIHNvIGNhbiBsZWFkIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gICAgaWYgKHRoaXMuaXNNaW5QYWdlKCkpIHtcbiAgICAgIHRoaXMuX2hpdEVuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faGl0U3RhcnQgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcGFnZUxpbmtDb3VudCBnb2VzIGFib3ZlIG1heCBwb3NzaWJsZSBwYWdlcyBiYXNlZCBvbiBwZXJwYWdlIHNldHRpbmcgdGhlbiByZXNldCBpdCB0byBtYXhQYWdlXG4gICAgbGV0IGFjdHVhbFBhZ2VMaW5rQ291bnQ6IG51bWJlciA9IHRoaXMucGFnZUxpbmtDb3VudDtcbiAgICBpZiAodGhpcy5wYWdlTGlua0NvdW50ID4gdGhpcy5tYXhQYWdlKSB7XG4gICAgICBhY3R1YWxQYWdlTGlua0NvdW50ID0gdGhpcy5tYXhQYWdlO1xuICAgIH1cbiAgICAvLyByZXNldCB0aGUgcGFnZUxpbmtzIGFycmF5XG4gICAgdGhpcy5fcGFnZUxpbmtzID0gW107XG4gICAgLy8gZmlsbCBpbiB0aGUgYXJyYXkgd2l0aCB0aGUgcGFnZUxpbmtzIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNlbGVjdGVkIHBhZ2VcbiAgICBsZXQgbWlkZGxlUGFnZUxpbmtzOiBudW1iZXIgPSBNYXRoLmZsb29yKGFjdHVhbFBhZ2VMaW5rQ291bnQgLyAyKTtcbiAgICBmb3IgKGxldCB4OiBudW1iZXIgPSAwOyB4IDwgYWN0dWFsUGFnZUxpbmtDb3VudDsgeCsrKSB7XG4gICAgICAvLyBkb24ndCBnbyBwYXN0IHRoZSBtYXhQYWdlIGluIHRoZSBwYWdlTGlua3NcbiAgICAgIC8vIGhhdmUgdG8gaGFuZGxlIGV2ZW4gYW5kIG9kZCBwYWdlTGlua0NvdW50cyBkaWZmZXJlbnRseSBzbyBjYW4gc3RpbGwgbGVhZCB0byB0aGUgbmV4dCBudW1iZXJzXG4gICAgICBpZiAoKGFjdHVhbFBhZ2VMaW5rQ291bnQgJSAyID09PSAwICYmICh0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPiB0aGlzLm1heFBhZ2UpKSB8fFxuICAgICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiAhPT0gMCAmJiAodGhpcy5wYWdlICsgbWlkZGxlUGFnZUxpbmtzID49IHRoaXMubWF4UGFnZSkpKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMubWF4UGFnZSAtIChhY3R1YWxQYWdlTGlua0NvdW50IC0gKHggKyAxKSk7XG4gICAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgcGFnZSBpcyBhZnRlciB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoYXQgcGFnZSBhcyBtaWRkbGUgYW5kIGdldCB0aGUgY29ycmVjdCBiYWxhbmNlIG9uIGxlZnQgYW5kIHJpZ2h0XG4gICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gdGhlcmUgYXJlIG9ubHkgMiBwYWdlTGlua3MgdG8ganVzdCBkcm9wIHRvIG5leHQgaWYgYmxvY2sgc28gY2FuIGxlYWQgdG8gbmV4dCBudW1iZXJzIHdoZW4gbW92aW5nIHRvIHJpZ2h0XG4gICAgICAvLyB3aGVuIG1vdmluZyB0byB0aGUgbGVmdCB0aGVuIGdvIGludG8gdGhpcyBibG9ja1xuICAgICAgfSBlbHNlIGlmICgoYWN0dWFsUGFnZUxpbmtDb3VudCA+IDIgfHwgYWN0dWFsUGFnZUxpbmtDb3VudCA8PSAyICYmIHRoaXMuX2hpdEVuZCkgJiYgKHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcykgPiAwKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9ICh0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MpICsgeDtcbiAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGJlZm9yZSB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoZSBwYWdlcyBiYXNlZCBvbiB0aGUgeCBpbmRleCBsZWFkaW5nIHVwIHRvIGFuZCBhZnRlciBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2UgaWYgKCh0aGlzLnBhZ2UgLSBtaWRkbGVQYWdlTGlua3MpIDw9IDApIHtcbiAgICAgICAgdGhpcy5fcGFnZUxpbmtzW3hdID0geCArIDE7XG4gICAgICAvLyBvdGhlciB3aXNlIGp1c3Qgc2V0IHRoZSBhcnJheSBpbiBvcmRlciBzdGFydGluZyBmcm9tIHRoZSBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLnBhZ2UgKyB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICBsZXQgZXZlbnQ6IElQYWdlQ2hhbmdlRXZlbnQgPSB7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgbWF4UGFnZTogdGhpcy5tYXhQYWdlLFxuICAgICAgcGFnZVNpemU6IHRoaXMuX3BhZ2VTaXplLFxuICAgICAgdG90YWw6IHRoaXMuX3RvdGFsLFxuICAgICAgZnJvbVJvdzogdGhpcy5fZnJvbVJvdyxcbiAgICAgIHRvUm93OiB0aGlzLl90b1JvdyxcbiAgICB9O1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxufVxuIl19