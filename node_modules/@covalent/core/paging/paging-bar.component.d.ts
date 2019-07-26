import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
export interface IPageChangeEvent {
    page: number;
    maxPage: number;
    pageSize: number;
    total: number;
    fromRow: number;
    toRow: number;
}
export declare class TdPagingBarComponent implements OnInit {
    private _dir;
    private _changeDetectorRef;
    private _pageSize;
    private _total;
    private _page;
    private _fromRow;
    private _toRow;
    private _initialized;
    private _pageLinks;
    private _pageLinkCount;
    private _hitEnd;
    private _hitStart;
    /**
     * firstLast?: boolean
     * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
     */
    firstLast: boolean;
    /**
     * initialPage?: number
     * Sets starting page for the paging bar. Defaults to '1'
     */
    initialPage: number;
    /**
     * pageLinkCount?: number
     * Amount of page navigation links for the paging bar. Defaults to '0'
     */
    pageLinkCount: number;
    /**
     * pageSize?: number
     * Selected page size for the pagination. Defaults 50.
     */
    pageSize: number;
    /**
     * total: number
     * Total rows for the pagination.
     */
    total: number;
    /**
     * pageLinks: number[]
     * Returns the pageLinks in an array
     */
    readonly pageLinks: number[];
    /**
     * range: string
     * Returns the range of the rows.
     */
    readonly range: string;
    /**
     * page: number
     * Returns the current page.
     */
    readonly page: number;
    /**
     * page: number
     * Returns the max page for the current pageSize and total.
     */
    readonly maxPage: number;
    /**
     * change?: function
     * Method to be executed when page size changes or any button is clicked in the paging bar.
     * Emits an [IPageChangeEvent] implemented object.
     */
    onChange: EventEmitter<IPageChangeEvent>;
    readonly isRTL: boolean;
    constructor(_dir: Dir, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    /**
     * navigateToPage?: function
     * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
     */
    navigateToPage(page: number): boolean;
    /**
     * firstPage?: function
     * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
     */
    firstPage(): boolean;
    /**
     * prevPage?: function
     * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
     */
    prevPage(): boolean;
    /**
     * nextPage?: function
     * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
     */
    nextPage(): boolean;
    /**
     * lastPage?: function
     * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
     */
    lastPage(): boolean;
    isMinPage(): boolean;
    isMaxPage(): boolean;
    private _calculateRows;
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
     */
    private _calculatePageLinks;
    private _handleOnChange;
}
