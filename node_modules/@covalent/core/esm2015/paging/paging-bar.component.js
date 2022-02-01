/**
 * @fileoverview added by tsickle
 * Generated from: paging-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Optional, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
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
        this.change = new EventEmitter();
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
     * @private
     * @return {?}
     */
    _calculateRows() {
        /** @type {?} */
        const top = this._pageSize * this._page;
        this._fromRow = this._pageSize * (this._page - 1) + 1;
        this._toRow = this._total > top ? top : this._total;
    }
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     * @private
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
        const middlePageLinks = Math.floor(actualPageLinkCount / 2);
        for (let x = 0; x < actualPageLinkCount; x++) {
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
    }
    /**
     * @private
     * @return {?}
     */
    _handleOnChange() {
        this._calculateRows();
        this._calculatePageLinks();
        /** @type {?} */
        const event = {
            page: this._page,
            maxPage: this.maxPage,
            pageSize: this._pageSize,
            total: this._total,
            fromRow: this._fromRow,
            toRow: this._toRow,
        };
        this._changeDetectorRef.markForCheck();
        this.change.emit(event);
    }
}
TdPagingBarComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'td-paging-bar',
                template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\">\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-first-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMinPage()\"\n      (click)=\"firstPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button\n        class=\"td-paging-bar-link-page\"\n        mat-icon-button\n        type=\"button\"\n        [color]=\"page === link ? 'accent' : undefined\"\n        (click)=\"navigateToPage(link)\"\n      >\n        {{ link }}\n      </button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button\n      mat-icon-button\n      class=\"td-paging-bar-last-page\"\n      type=\"button\"\n      *ngIf=\"firstLast\"\n      [disabled]=\"isMaxPage()\"\n      (click)=\"lastPage()\"\n    >\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>\n",
                styles: [":host{display:block}:host .td-paging-bar{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:end;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;height:48px;justify-content:flex-end;max-width:100%}:host .td-paging-bar ::ng-deep>*{margin:0 10px}:host .td-paging-bar [mat-icon-button]{font-size:12px;font-weight:400}"]
            }] }
];
/** @nocollapse */
TdPagingBarComponent.ctorParameters = () => [
    { type: Dir, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
TdPagingBarComponent.propDecorators = {
    firstLast: [{ type: Input }],
    initialPage: [{ type: Input }],
    pageLinkCount: [{ type: Input, args: ['pageLinkCount',] }],
    pageSize: [{ type: Input, args: ['pageSize',] }],
    total: [{ type: Input, args: ['total',] }],
    change: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvcGFnaW5nLyIsInNvdXJjZXMiOlsicGFnaW5nLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUV4QyxzQ0FPQzs7O0lBTkMsZ0NBQWE7O0lBQ2IsbUNBQWdCOztJQUNoQixvQ0FBaUI7O0lBQ2pCLGlDQUFjOztJQUNkLG1DQUFnQjs7SUFDaEIsaUNBQWM7O0FBU2hCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBc0gvQixZQUFnQyxJQUFTLEVBQVUsa0JBQXFDO1FBQXhELFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBckhoRixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFXLENBQUMsQ0FBQzs7UUFFM0IsWUFBTyxHQUFZLEtBQUssQ0FBQzs7UUFFekIsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFNMUIsY0FBUyxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNMUIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7Ozs7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QUFRLEVBQUUsZUFBZTtnQkFDekIsa2lEQUEwQzs7YUFFM0M7Ozs7WUFoQlEsR0FBRyx1QkF1SUcsUUFBUTtZQTNJckIsaUJBQWlCOzs7d0JBdUNoQixLQUFLOzBCQU1MLEtBQUs7NEJBTUwsS0FBSyxTQUFDLGVBQWU7dUJBY3JCLEtBQUssU0FBQyxVQUFVO29CQWlCaEIsS0FBSyxTQUFDLE9BQU87cUJBZ0RiLE1BQU07Ozs7Ozs7SUE1R1AseUNBQStCOzs7OztJQUMvQixzQ0FBMkI7Ozs7O0lBQzNCLHFDQUEwQjs7Ozs7SUFDMUIsd0NBQTZCOzs7OztJQUM3QixzQ0FBMkI7Ozs7O0lBQzNCLDRDQUFzQzs7Ozs7SUFDdEMsMENBQWtDOzs7OztJQUNsQyw4Q0FBbUM7Ozs7O0lBRW5DLHVDQUFpQzs7Ozs7SUFFakMseUNBQW1DOzs7Ozs7SUFNbkMseUNBQW1DOzs7Ozs7SUFNbkMsMkNBQWlDOzs7Ozs7O0lBcUZqQyxzQ0FBd0Y7Ozs7O0lBUzVFLG9DQUE2Qjs7Ozs7SUFBRSxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IERpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNoYW5nZUV2ZW50IHtcbiAgcGFnZTogbnVtYmVyO1xuICBtYXhQYWdlOiBudW1iZXI7XG4gIHBhZ2VTaXplOiBudW1iZXI7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGZyb21Sb3c6IG51bWJlcjtcbiAgdG9Sb3c6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ3RkLXBhZ2luZy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luZy1iYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRQYWdpbmdCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9wYWdlU2l6ZTogbnVtYmVyID0gNTA7XG4gIHByaXZhdGUgX3RvdGFsOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9wYWdlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF9mcm9tUm93OiBudW1iZXIgPSAxO1xuICBwcml2YXRlIF90b1JvdzogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGFnZUxpbmtzOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIF9wYWdlTGlua0NvdW50OiBudW1iZXIgPSAwO1xuICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IGVuZCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBzdGFydCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBwcml2YXRlIF9oaXRTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBmaXJzdExhc3Q/OiBib29sZWFuXG4gICAqIFNob3dzIG9yIGhpZGVzIHRoZSBmaXJzdCBhbmQgbGFzdCBwYWdlIGJ1dHRvbnMgb2YgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgpIGZpcnN0TGFzdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIGluaXRpYWxQYWdlPzogbnVtYmVyXG4gICAqIFNldHMgc3RhcnRpbmcgcGFnZSBmb3IgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICcxJ1xuICAgKi9cbiAgQElucHV0KCkgaW5pdGlhbFBhZ2U6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIHBhZ2VMaW5rQ291bnQ/OiBudW1iZXJcbiAgICogQW1vdW50IG9mIHBhZ2UgbmF2aWdhdGlvbiBsaW5rcyBmb3IgdGhlIHBhZ2luZyBiYXIuIERlZmF1bHRzIHRvICcwJ1xuICAgKi9cbiAgQElucHV0KCdwYWdlTGlua0NvdW50JylcbiAgc2V0IHBhZ2VMaW5rQ291bnQocGFnZUxpbmtDb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZUxpbmtDb3VudCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHBhZ2VMaW5rQ291bnQpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBwYWdlTGlua0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW5rQ291bnQ7XG4gIH1cblxuICAvKipcbiAgICogcGFnZVNpemU/OiBudW1iZXJcbiAgICogU2VsZWN0ZWQgcGFnZSBzaXplIGZvciB0aGUgcGFnaW5hdGlvbi4gRGVmYXVsdHMgNTAuXG4gICAqL1xuICBASW5wdXQoJ3BhZ2VTaXplJylcbiAgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHBhZ2VTaXplKTtcbiAgICB0aGlzLl9wYWdlID0gMTtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b3RhbDogbnVtYmVyXG4gICAqIFRvdGFsIHJvd3MgZm9yIHRoZSBwYWdpbmF0aW9uLlxuICAgKi9cbiAgQElucHV0KCd0b3RhbCcpXG4gIHNldCB0b3RhbCh0b3RhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWwgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0b3RhbCk7XG4gICAgdGhpcy5fY2FsY3VsYXRlUm93cygpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVBhZ2VMaW5rcygpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG4gIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYWdlTGlua3M6IG51bWJlcltdXG4gICAqIFJldHVybnMgdGhlIHBhZ2VMaW5rcyBpbiBhbiBhcnJheVxuICAgKi9cbiAgZ2V0IHBhZ2VMaW5rcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VMaW5rcztcbiAgfVxuXG4gIC8qKlxuICAgKiByYW5nZTogc3RyaW5nXG4gICAqIFJldHVybnMgdGhlIHJhbmdlIG9mIHRoZSByb3dzLlxuICAgKi9cbiAgZ2V0IHJhbmdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAkeyF0aGlzLl90b1JvdyA/IDAgOiB0aGlzLl9mcm9tUm93fS0ke3RoaXMuX3RvUm93fWA7XG4gIH1cblxuICAvKipcbiAgICogcGFnZTogbnVtYmVyXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICovXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICAvKipcbiAgICogcGFnZTogbnVtYmVyXG4gICAqIFJldHVybnMgdGhlIG1heCBwYWdlIGZvciB0aGUgY3VycmVudCBwYWdlU2l6ZSBhbmQgdG90YWwuXG4gICAqL1xuICBnZXQgbWF4UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdG90YWwgLyB0aGlzLl9wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogY2hhbmdlPzogZnVuY3Rpb25cbiAgICogTWV0aG9kIHRvIGJlIGV4ZWN1dGVkIHdoZW4gcGFnZSBzaXplIGNoYW5nZXMgb3IgYW55IGJ1dHRvbiBpcyBjbGlja2VkIGluIHRoZSBwYWdpbmcgYmFyLlxuICAgKiBFbWl0cyBhbiBbSVBhZ2VDaGFuZ2VFdmVudF0gaW1wbGVtZW50ZWQgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPElQYWdlQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnZUNoYW5nZUV2ZW50PigpO1xuXG4gIGdldCBpc1JUTCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5fZGlyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlyLmRpciA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogbmF2aWdhdGVUb1BhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gYSBzcGVjaWZpYyB2YWxpZCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuYXZpZ2F0ZVRvUGFnZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAocGFnZSA9PT0gMSB8fCAocGFnZSA+PSAxICYmIHBhZ2UgPD0gdGhpcy5tYXhQYWdlKSkge1xuICAgICAgdGhpcy5fcGFnZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KE1hdGguZmxvb3IocGFnZSkpO1xuICAgICAgdGhpcy5faGFuZGxlT25DaGFuZ2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZmlyc3RQYWdlPzogZnVuY3Rpb25cbiAgICogTmF2aWdhdGVzIHRvIHRoZSBmaXJzdCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBmaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UoMSk7XG4gIH1cblxuICAvKipcbiAgICogcHJldlBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIHByZXZpb3VzIHBhZ2UuIFJldHVybnMgJ3RydWUnIGlmIHBhZ2UgaXMgdmFsaWQsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIHByZXZQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlVG9QYWdlKHRoaXMuX3BhZ2UgLSAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuZXh0UGFnZT86IGZ1bmN0aW9uXG4gICAqIE5hdmlnYXRlcyB0byB0aGUgbmV4dCBwYWdlLiBSZXR1cm5zICd0cnVlJyBpZiBwYWdlIGlzIHZhbGlkLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBuZXh0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZVRvUGFnZSh0aGlzLl9wYWdlICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogbGFzdFBhZ2U/OiBmdW5jdGlvblxuICAgKiBOYXZpZ2F0ZXMgdG8gdGhlIGxhc3QgcGFnZS4gUmV0dXJucyAndHJ1ZScgaWYgcGFnZSBpcyB2YWxpZCwgZWxzZSAnZmFsc2UnLlxuICAgKi9cbiAgbGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVUb1BhZ2UodGhpcy5tYXhQYWdlKTtcbiAgfVxuXG4gIGlzTWluUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZSA8PSAxO1xuICB9XG5cbiAgaXNNYXhQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlID49IHRoaXMubWF4UGFnZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgY29uc3QgdG9wOiBudW1iZXIgPSB0aGlzLl9wYWdlU2l6ZSAqIHRoaXMuX3BhZ2U7XG4gICAgdGhpcy5fZnJvbVJvdyA9IHRoaXMuX3BhZ2VTaXplICogKHRoaXMuX3BhZ2UgLSAxKSArIDE7XG4gICAgdGhpcy5fdG9Sb3cgPSB0aGlzLl90b3RhbCA+IHRvcCA/IHRvcCA6IHRoaXMuX3RvdGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIF9jYWxjdWxhdGVQYWdlTGlua3M/OiBmdW5jdGlvblxuICAgKiBDYWxjdWxhdGVzIHRoZSBwYWdlIGxpbmtzIHRoYXQgc2hvdWxkIGJlIHNob3duIHRvIHRoZSB1c2VyIGJhc2VkIG9uIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBwYWdpbmF0b3JcbiAgICovXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVBhZ2VMaW5rcygpOiB2b2lkIHtcbiAgICAvLyBzcGVjaWFsIGNhc2Ugd2hlbiAyIHBhZ2VMaW5rcywgZGV0ZWN0IHdoZW4gaGl0IGVuZCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICAgIGlmICh0aGlzLmlzTWF4UGFnZSgpKSB7XG4gICAgICB0aGlzLl9oaXRFbmQgPSB0cnVlO1xuICAgICAgdGhpcy5faGl0U3RhcnQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc3BlY2lhbCBjYXNlIHdoZW4gMiBwYWdlTGlua3MsIGRldGVjdCB3aGVuIGhpdCBzdGFydCBvZiBwYWdlcyBzbyBjYW4gbGVhZCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICAgIGlmICh0aGlzLmlzTWluUGFnZSgpKSB7XG4gICAgICB0aGlzLl9oaXRFbmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2hpdFN0YXJ0ID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHBhZ2VMaW5rQ291bnQgZ29lcyBhYm92ZSBtYXggcG9zc2libGUgcGFnZXMgYmFzZWQgb24gcGVycGFnZSBzZXR0aW5nIHRoZW4gcmVzZXQgaXQgdG8gbWF4UGFnZVxuICAgIGxldCBhY3R1YWxQYWdlTGlua0NvdW50OiBudW1iZXIgPSB0aGlzLnBhZ2VMaW5rQ291bnQ7XG4gICAgaWYgKHRoaXMucGFnZUxpbmtDb3VudCA+IHRoaXMubWF4UGFnZSkge1xuICAgICAgYWN0dWFsUGFnZUxpbmtDb3VudCA9IHRoaXMubWF4UGFnZTtcbiAgICB9XG4gICAgLy8gcmVzZXQgdGhlIHBhZ2VMaW5rcyBhcnJheVxuICAgIHRoaXMuX3BhZ2VMaW5rcyA9IFtdO1xuICAgIC8vIGZpbGwgaW4gdGhlIGFycmF5IHdpdGggdGhlIHBhZ2VMaW5rcyBiYXNlZCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBwYWdlXG4gICAgY29uc3QgbWlkZGxlUGFnZUxpbmtzOiBudW1iZXIgPSBNYXRoLmZsb29yKGFjdHVhbFBhZ2VMaW5rQ291bnQgLyAyKTtcbiAgICBmb3IgKGxldCB4OiBudW1iZXIgPSAwOyB4IDwgYWN0dWFsUGFnZUxpbmtDb3VudDsgeCsrKSB7XG4gICAgICAvLyBkb24ndCBnbyBwYXN0IHRoZSBtYXhQYWdlIGluIHRoZSBwYWdlTGlua3NcbiAgICAgIC8vIGhhdmUgdG8gaGFuZGxlIGV2ZW4gYW5kIG9kZCBwYWdlTGlua0NvdW50cyBkaWZmZXJlbnRseSBzbyBjYW4gc3RpbGwgbGVhZCB0byB0aGUgbmV4dCBudW1iZXJzXG4gICAgICBpZiAoXG4gICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiA9PT0gMCAmJiB0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPiB0aGlzLm1heFBhZ2UpIHx8XG4gICAgICAgIChhY3R1YWxQYWdlTGlua0NvdW50ICUgMiAhPT0gMCAmJiB0aGlzLnBhZ2UgKyBtaWRkbGVQYWdlTGlua3MgPj0gdGhpcy5tYXhQYWdlKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMubWF4UGFnZSAtIChhY3R1YWxQYWdlTGlua0NvdW50IC0gKHggKyAxKSk7XG4gICAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGFmdGVyIHRoZSBtaWRkbGUgdGhlbiBzZXQgdGhhdCBwYWdlIGFzIG1pZGRsZSBhbmQgZ2V0IHRoZSBjb3JyZWN0IGJhbGFuY2Ugb24gbGVmdCBhbmQgcmlnaHRcbiAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIHRoZXJlIGFyZSBvbmx5IDIgcGFnZUxpbmtzIHRvIGp1c3QgZHJvcCB0byBuZXh0IGlmIGJsb2NrIHNvIGNhbiBsZWFkIHRvIG5leHQgbnVtYmVycyB3aGVuIG1vdmluZyB0byByaWdodFxuICAgICAgICAvLyB3aGVuIG1vdmluZyB0byB0aGUgbGVmdCB0aGVuIGdvIGludG8gdGhpcyBibG9ja1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGFjdHVhbFBhZ2VMaW5rQ291bnQgPiAyIHx8IChhY3R1YWxQYWdlTGlua0NvdW50IDw9IDIgJiYgdGhpcy5faGl0RW5kKSkgJiZcbiAgICAgICAgdGhpcy5wYWdlIC0gbWlkZGxlUGFnZUxpbmtzID4gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcyArIHg7XG4gICAgICAgIC8vIGlmIHRoZSBzZWxlY3RlZCBwYWdlIGlzIGJlZm9yZSB0aGUgbWlkZGxlIHRoZW4gc2V0IHRoZSBwYWdlcyBiYXNlZCBvbiB0aGUgeCBpbmRleCBsZWFkaW5nIHVwIHRvIGFuZCBhZnRlciBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSAtIG1pZGRsZVBhZ2VMaW5rcyA8PSAwKSB7XG4gICAgICAgIHRoaXMuX3BhZ2VMaW5rc1t4XSA9IHggKyAxO1xuICAgICAgICAvLyBvdGhlciB3aXNlIGp1c3Qgc2V0IHRoZSBhcnJheSBpbiBvcmRlciBzdGFydGluZyBmcm9tIHRoZSBzZWxlY3RlZCBwYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYWdlTGlua3NbeF0gPSB0aGlzLnBhZ2UgKyB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGN1bGF0ZVJvd3MoKTtcbiAgICB0aGlzLl9jYWxjdWxhdGVQYWdlTGlua3MoKTtcbiAgICBjb25zdCBldmVudDogSVBhZ2VDaGFuZ2VFdmVudCA9IHtcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXG4gICAgICBtYXhQYWdlOiB0aGlzLm1heFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogdGhpcy5fcGFnZVNpemUsXG4gICAgICB0b3RhbDogdGhpcy5fdG90YWwsXG4gICAgICBmcm9tUm93OiB0aGlzLl9mcm9tUm93LFxuICAgICAgdG9Sb3c6IHRoaXMuX3RvUm93LFxuICAgIH07XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==