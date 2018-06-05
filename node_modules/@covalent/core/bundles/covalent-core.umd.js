(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/coercion'), require('@angular/cdk/bidi'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/cdk/portal'), require('@angular/platform-browser'), require('@angular/animations'), require('@angular/forms'), require('@angular/router'), require('rxjs/operators/filter'), require('rxjs/operators/pairwise'), require('rxjs/Subject'), require('@covalent/core/common'), require('@angular/cdk/keycodes'), require('@angular/material/chips'), require('@angular/material/input'), require('@angular/material/core'), require('@angular/material/autocomplete'), require('rxjs/observable/timer'), require('rxjs/observable/merge'), require('rxjs/operator/toPromise'), require('rxjs/observable/fromEvent'), require('rxjs/operators/debounceTime'), require('@angular/material/checkbox'), require('@angular/material/tooltip'), require('@angular/material/dialog'), require('rxjs/Observable'), require('@angular/material/sidenav'), require('@angular/cdk/scrolling'), require('@angular/material/toolbar'), require('@angular/material/card'), require('@angular/material/divider'), require('@angular/cdk/overlay'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('rxjs/BehaviorSubject'), require('@angular/material/menu'), require('rxjs/operators/skip')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/cdk/coercion', '@angular/cdk/bidi', '@angular/common', '@angular/material/icon', '@angular/material/button', '@angular/cdk/portal', '@angular/platform-browser', '@angular/animations', '@angular/forms', '@angular/router', 'rxjs/operators/filter', 'rxjs/operators/pairwise', 'rxjs/Subject', '@covalent/core/common', '@angular/cdk/keycodes', '@angular/material/chips', '@angular/material/input', '@angular/material/core', '@angular/material/autocomplete', 'rxjs/observable/timer', 'rxjs/observable/merge', 'rxjs/operator/toPromise', 'rxjs/observable/fromEvent', 'rxjs/operators/debounceTime', '@angular/material/checkbox', '@angular/material/tooltip', '@angular/material/dialog', 'rxjs/Observable', '@angular/material/sidenav', '@angular/cdk/scrolling', '@angular/material/toolbar', '@angular/material/card', '@angular/material/divider', '@angular/cdk/overlay', '@angular/material/progress-bar', '@angular/material/progress-spinner', 'rxjs/BehaviorSubject', '@angular/material/menu', 'rxjs/operators/skip'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.core = {}),global.ng.core,global.ng.cdk.coercion,global.ng.cdk.bidi,global.ng.common,global.ng.material.icon,global.ng.material.button,global.ng.cdk.portal,global.ng.platformBrowser,global.ng.animations,global.ng.forms,global.ng.router,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,global.covalent.core.common,global.ng.cdk.keycodes,global.ng.material.chips,global.ng.material.input,global.ng.material.core,global.ng.material.autocomplete,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.material.checkbox,global.ng.material.tooltip,global.ng.material.dialog,global.Rx,global.ng.material.sidenav,global.ng.cdk.scrolling,global.ng.material.toolbar,global.ng.material.card,global.ng.material.divider,global.ng.cdk.overlay,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.Rx,global.ng.material.menu,global.Rx.Observable.prototype));
}(this, (function (exports,core,coercion,bidi,common,icon,button,portal,platformBrowser,animations,forms,router,filter,pairwise,Subject,common$1,keycodes,chips,input,core$1,autocomplete,timer,merge,toPromise,fromEvent,debounceTime,checkbox,tooltip,dialog,Observable,sidenav,scrolling,toolbar,card,divider,overlay,progressBar,progressSpinner,BehaviorSubject,menu,skip) { 'use strict';

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
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}








function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
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
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
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
        this._hitEnd = false;
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
        this.onChange = new core.EventEmitter();
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
        enumerable: true,
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
     * @return {?}
     */
    TdPagingBarComponent.prototype._calculateRows = function () {
        var /** @type {?} */ top = (this._pageSize * this._page);
        this._fromRow = (this._pageSize * (this._page - 1)) + 1;
        this._toRow = this._total > top ? top : this._total;
    };
    /**
     * _calculatePageLinks?: function
     * Calculates the page links that should be shown to the user based on the current state of the paginator
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
        var /** @type {?} */ actualPageLinkCount = this.pageLinkCount;
        if (this.pageLinkCount > this.maxPage) {
            actualPageLinkCount = this.maxPage;
        }
        // reset the pageLinks array
        this._pageLinks = [];
        // fill in the array with the pageLinks based on the current selected page
        var /** @type {?} */ middlePageLinks = Math.floor(actualPageLinkCount / 2);
        for (var /** @type {?} */ x = 0; x < actualPageLinkCount; x++) {
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
    TdPagingBarComponent.prototype._handleOnChange = function () {
        this._calculateRows();
        this._calculatePageLinks();
        var /** @type {?} */ event = {
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
    return TdPagingBarComponent;
}());
TdPagingBarComponent.decorators = [
    { type: core.Component, args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'td-paging-bar',
                template: "<div class=\"td-paging-bar\" (change)=\"$event.stopPropagation()\" >\n  <ng-content></ng-content>\n  <div class=\"td-paging-bar-navigation\">\n    <button mat-icon-button class=\"td-paging-bar-first-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMinPage()\" (click)=\"firstPage()\">\n      <mat-icon>{{ isRTL ? 'skip_next' : 'skip_previous' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-prev-page\" type=\"button\" [disabled]=\"isMinPage()\" (click)=\"prevPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_next' : 'navigate_before' }}</mat-icon>\n    </button>\n    <ng-template *ngIf=\"pageLinkCount > 0\" let-link let-index=\"index\" ngFor [ngForOf]=\"pageLinks\">\n      <button class=\"td-paging-bar-link-page\" mat-icon-button type=\"button\" [color]=\"page === link ? 'accent' : ''\" (click)=\"navigateToPage(link)\">{{link}}</button>\n    </ng-template>\n    <button mat-icon-button class=\"td-paging-bar-next-page\" type=\"button\" [disabled]=\"isMaxPage()\" (click)=\"nextPage()\">\n      <mat-icon>{{ isRTL ? 'navigate_before' : 'navigate_next' }}</mat-icon>\n    </button>\n    <button mat-icon-button class=\"td-paging-bar-last-page\" type=\"button\" *ngIf=\"firstLast\" [disabled]=\"isMaxPage()\" (click)=\"lastPage()\">\n      <mat-icon>{{ isRTL ? 'skip_previous' : 'skip_next' }}</mat-icon>\n    </button>\n  </div>\n</div>",
                styles: [":host{\n  display:block; }\n  :host .td-paging-bar{\n    height:48px;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    max-width:100%;\n    -webkit-box-pack:end;\n        -ms-flex-pack:end;\n            justify-content:flex-end; }\n    :host .td-paging-bar ::ng-deep > *{\n      margin:0 10px; }\n    :host .td-paging-bar [mat-icon-button]{\n      font-size:12px;\n      font-weight:normal; }\n"],
            },] },
];
/** @nocollapse */
TdPagingBarComponent.ctorParameters = function () { return [
    { type: bidi.Dir, decorators: [{ type: core.Optional },] },
    { type: core.ChangeDetectorRef, },
]; };
TdPagingBarComponent.propDecorators = {
    "firstLast": [{ type: core.Input, args: ['firstLast',] },],
    "initialPage": [{ type: core.Input, args: ['initialPage',] },],
    "pageLinkCount": [{ type: core.Input, args: ['pageLinkCount',] },],
    "pageSize": [{ type: core.Input, args: ['pageSize',] },],
    "total": [{ type: core.Input, args: ['total',] },],
    "onChange": [{ type: core.Output, args: ['change',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CovalentPagingModule = /** @class */ (function () {
    function CovalentPagingModule() {
    }
    return CovalentPagingModule;
}());
CovalentPagingModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentPagingModule.ctorParameters = function () { return []; };
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
var TdVirtualScrollRowDirective = /** @class */ (function (_super) {
    __extends(TdVirtualScrollRowDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdVirtualScrollRowDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdVirtualScrollRowDirective;
}(portal.TemplatePortalDirective));
TdVirtualScrollRowDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[tdVirtualScrollRow]' },] },
];
/** @nocollapse */
TdVirtualScrollRowDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_VIRTUAL_OFFSET = 2;
var TdVirtualScrollContainerComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    function TdVirtualScrollContainerComponent(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._initialized = false;
        this._totalHeight = 0;
        this._hostHeight = 0;
        this._scrollVerticalOffset = 0;
        this._fromRow = 0;
        this._toRow = 0;
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
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * data: any[]
         * List of items to virtually iterate on.
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
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
        /**
         * @return {?}
         */
        get: function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "rowHeight", {
        /**
         * @return {?}
         */
        get: function () {
            if (this._rows && this._rows.toArray()[0]) {
                return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "totalHeight", {
        /**
         * @return {?}
         */
        get: function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "fromRow", {
        /**
         * @return {?}
         */
        get: function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "toRow", {
        /**
         * @return {?}
         */
        get: function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdVirtualScrollContainerComponent.prototype, "offsetTransform", {
        /**
         * @return {?}
         */
        get: function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rowChangeSubs = this._rows.changes.subscribe(function () {
            _this._calculateVirtualRows();
        });
        this._initialized = true;
        this._calculateVirtualRows();
    };
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.ngAfterViewChecked = function () {
        var /** @type {?} */ newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
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
    TdVirtualScrollContainerComponent.prototype.ngOnDestroy = function () {
        if (this._rowChangeSubs) {
            this._rowChangeSubs.unsubscribe();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.handleScroll = function (event) {
        var /** @type {?} */ element = ((event.target));
        if (element) {
            var /** @type {?} */ verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
        }
    };
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.refresh = function () {
        this._calculateVirtualRows();
    };
    /**
     * Method to scroll to a specific row of the list.
     * @param {?} row
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.scrollTo = function (row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the start of the list.
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.scrollToStart = function () {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to scroll to the end of the list.
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype.scrollToEnd = function () {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdVirtualScrollContainerComponent.prototype._calculateVirtualRows = function () {
        var _this = this;
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            var /** @type {?} */ fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            var /** @type {?} */ range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
            var /** @type {?} */ toRow = range + this.fromRow;
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
        var /** @type {?} */ offset = 0;
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
    return TdVirtualScrollContainerComponent;
}());
TdVirtualScrollContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-virtual-scroll-container',
                styles: [":host{\n  display:block;\n  height:100%;\n  width:100%;\n  overflow:auto;\n  position:relative; }\n"],
                template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\"\n      [style.position]=\"'absolute'\"\n      [style.width.%]=\"100\">\n  <ng-template let-row\n                let-index=\"index\"\n                ngFor\n                [ngForOf]=\"virtualData\"\n                [ngForTrackBy]=\"trackBy\">\n    <div #rowElement\n         [style.width.%]=\"100\">\n      <ng-template *ngIf=\"_rowTemplate\"\n                  [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n                  [ngTemplateOutletContext]=\"{row: row,\n                                      index: (fromRow + index),\n                                      first: (fromRow + index) === 0,\n                                      last: (fromRow + index) === (data.length - 1),\n                                      odd: ((fromRow + index + 1) % 2) === 1,\n                                      even: ((fromRow + index + 1) % 2) === 0}\">\n      </ng-template>\n    </div>\n  </ng-template>\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdVirtualScrollContainerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: platformBrowser.DomSanitizer, },
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
TdVirtualScrollContainerComponent.propDecorators = {
    "data": [{ type: core.Input, args: ['data',] },],
    "_rows": [{ type: core.ViewChildren, args: ['rowElement',] },],
    "_rowTemplate": [{ type: core.ContentChild, args: [TdVirtualScrollRowDirective,] },],
    "trackBy": [{ type: core.Input, args: ['trackBy',] },],
    "handleScroll": [{ type: core.HostListener, args: ['scroll', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_VIRTUAL_SCROLL = [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
];
var CovalentVirtualScrollModule = /** @class */ (function () {
    function CovalentVirtualScrollModule() {
    }
    return CovalentVirtualScrollModule;
}());
CovalentVirtualScrollModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                ],
                declarations: [
                    TD_VIRTUAL_SCROLL,
                ],
                exports: [
                    TD_VIRTUAL_SCROLL,
                ],
            },] },
];
/** @nocollapse */
CovalentVirtualScrollModule.ctorParameters = function () { return []; };
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
var TdNotificationCountComponent = /** @class */ (function () {
    function TdNotificationCountComponent() {
        this._notifications = 0;
        /**
         * color?: "primary" | "accent" | "warn"
         * Sets the theme color of the notification tip. Defaults to "warn"
         */
        this.color = 'warn';
    }
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionX", {
        /**
         * @return {?}
         */
        get: function () {
            return this._positionX;
        },
        /**
         * positionX?: TdNotificationCountPositionX or "before" | "after" | "center"
         * Sets the X position of the notification tip.
         * Defaults to "after" if it has content, else 'center'.
         * @param {?} positionX
         * @return {?}
         */
        set: function (positionX) {
            this._positionX = positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "positionY", {
        /**
         * @return {?}
         */
        get: function () {
            return this._positionY;
        },
        /**
         * positionY?: TdNotificationCountPositionY or "top" | "bottom" | "center"
         * Sets the Y position of the notification tip.
         * Defaults to "top" if it has content, else 'center'.
         * @param {?} positionY
         * @return {?}
         */
        set: function (positionY) {
            this._positionY = positionY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notifications", {
        /**
         * notifications?: number | boolean
         * Number for the notification count. Shows component only if the input is a positive number or 'true'
         * @param {?} notifications
         * @return {?}
         */
        set: function (notifications) {
            this._notifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "hideHost", {
        /**
         * @return {?}
         */
        get: function () {
            return !this.show && !this._hasContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "noCount", {
        /**
         * Sets the component in its 'noCount' state if [notifications] is a boolean 'true'.
         * Makes the notification tip show without a count.
         * @return {?}
         */
        get: function () {
            return this._notifications === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "notificationsDisplay", {
        /**
         * Notification display string when a count is available.
         * Anything over 99 gets set as 99+
         * @return {?}
         */
        get: function () {
            if (this._notifications > 99) {
                return '99+';
            }
            return this._notifications.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNotificationCountComponent.prototype, "show", {
        /**
         * Shows notification tip only when [notifications] is true or a positive integer.
         * @return {?}
         */
        get: function () {
            return this._notifications === true || (!isNaN(/** @type {?} */ (this._notifications)) && this._notifications > 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if [positionX] and [positionY] have been set as inputs, else use defaults depending on component content.
     * @return {?}
     */
    TdNotificationCountComponent.prototype.ngAfterContentInit = function () {
        if (!this._positionX) {
            this.positionX = this._hasContent() ? TdNotificationCountPositionX.After : TdNotificationCountPositionX.Center;
        }
        if (!this._positionY) {
            this.positionY = this._hasContent() ? TdNotificationCountPositionY.Top : TdNotificationCountPositionY.Center;
        }
    };
    /**
     * Method to check if element has any kind of content (elements or text)
     * @return {?}
     */
    TdNotificationCountComponent.prototype._hasContent = function () {
        if (this.content) {
            var /** @type {?} */ contentElement = this.content.nativeElement;
            return contentElement && (contentElement.children.length > 0 || !!contentElement.textContent.trim());
        }
        return false;
    };
    return TdNotificationCountComponent;
}());
TdNotificationCountComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-notification-count',
                styles: [":host{\n  position:relative;\n  display:block;\n  text-align:center;\n  min-width:40px;\n  height:40px; }\n  :host.td-notification-hidden{\n    min-width:0; }\n.td-notification-count{\n  line-height:21px;\n  width:20px;\n  height:20px;\n  position:absolute;\n  font-size:10px;\n  font-weight:600;\n  border-radius:50%;\n  z-index:1; }\n  .td-notification-count.td-notification-center-x{\n    margin-left:auto;\n    margin-right:auto;\n    left:0;\n    right:0; }\n  .td-notification-count.td-notification-center-y{\n    margin-top:auto;\n    margin-bottom:auto;\n    top:0;\n    bottom:0; }\n  .td-notification-count.td-notification-top{\n    top:0; }\n  .td-notification-count.td-notification-bottom{\n    bottom:0; }\n  .td-notification-count.td-notification-before{\n    left:0; }\n  .td-notification-count.td-notification-after{\n    right:0; }\n  .td-notification-count.td-notification-no-count{\n    width:8px;\n    height:8px; }\n    .td-notification-count.td-notification-no-count.td-notification-top{\n      top:8px; }\n    .td-notification-count.td-notification-no-count.td-notification-bottom{\n      bottom:8px; }\n    .td-notification-count.td-notification-no-count.td-notification-before{\n      left:8px; }\n    .td-notification-count.td-notification-no-count.td-notification-after{\n      right:8px; }\n  ::ng-deep [dir='rtl'] .td-notification-count.td-notification-before{\n    right:0;\n    left:auto; }\n  ::ng-deep [dir='rtl'] .td-notification-count.td-notification-after{\n    left:0;\n    right:auto; }\n  ::ng-deep [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-before{\n    right:8px;\n    left:auto; }\n  ::ng-deep [dir='rtl'] .td-notification-count.td-notification-no-count.td-notification-after{\n    left:8px;\n    right:auto; }\n.td-notification-content, .td-notification-content ::ng-deep > *{\n  line-height:40px; }\n"],
                template: "<div #content class=\"td-notification-content\">\n  <ng-content></ng-content>\n</div>\n<div *ngIf=\"show\"\n     class=\"td-notification-count mat-{{color}}\"\n     [class.td-notification-top]=\"positionY === 'top'\"\n     [class.td-notification-bottom]=\"positionY === 'bottom'\"\n     [class.td-notification-before]=\"positionX === 'before'\"\n     [class.td-notification-after]=\"positionX === 'after'\"\n     [class.td-notification-center-y]=\"positionY === 'center'\"\n     [class.td-notification-center-x]=\"positionX === 'center'\"\n     [class.td-notification-no-count]=\"noCount\">\n  {{noCount ? '' : notificationsDisplay}}\n</div>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdNotificationCountComponent.ctorParameters = function () { return []; };
TdNotificationCountComponent.propDecorators = {
    "content": [{ type: core.ViewChild, args: ['content',] },],
    "color": [{ type: core.Input },],
    "positionX": [{ type: core.Input },],
    "positionY": [{ type: core.Input },],
    "notifications": [{ type: core.Input },],
    "hideHost": [{ type: core.HostBinding, args: ['class.td-notification-hidden',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_NOTIFICATIONS = [
    TdNotificationCountComponent,
];
var CovalentNotificationsModule = /** @class */ (function () {
    function CovalentNotificationsModule() {
    }
    return CovalentNotificationsModule;
}());
CovalentNotificationsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                ],
                declarations: [
                    TD_NOTIFICATIONS,
                ],
                exports: [
                    TD_NOTIFICATIONS,
                ],
            },] },
];
/** @nocollapse */
CovalentNotificationsModule.ctorParameters = function () { return []; };
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
var TdToggleDirective = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _animationBuilder
     */
    function TdToggleDirective(_renderer, _element, _changeDetectorRef, _animationBuilder) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationBuilder = _animationBuilder;
        /**
         * duration?: number
         * Sets duration of toggle animation in milliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        this._defaultDisplay = this._element.nativeElement.style.display;
        this._defaultOverflow = this._element.nativeElement.style.overflow;
    }
    Object.defineProperty(TdToggleDirective.prototype, "state", {
        /**
         * tdToggle: boolean
         * Toggles element, hides if its 'true', shows if its 'false'.
         * @param {?} state
         * @return {?}
         */
        set: function (state$$1) {
            this._state = state$$1;
            if (state$$1) {
                if (this._animationShowPlayer) {
                    this._animationShowPlayer.destroy();
                    this._animationShowPlayer = undefined;
                }
                this.hide();
            }
            else {
                if (this._animationHidePlayer) {
                    this._animationHidePlayer.destroy();
                    this._animationHidePlayer = undefined;
                }
                this.show();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdToggleDirective.prototype, "ariaExpandedBinding", {
        /**
         * Binds native 'aria-expanded' attribute.
         * @return {?}
         */
        get: function () {
            return !this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdToggleDirective.prototype, "ariaHiddenBinding", {
        /**
         * Binds native 'aria-hidden' attribute.
         * @return {?}
         */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hides element: sets "display:[default]" so animation is shown,
     * starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    TdToggleDirective.prototype.hide = function () {
        var _this = this;
        this._animationHidePlayer = this._animationBuilder.build(animations.animation([
            animations.style({
                height: animations.AUTO_STYLE,
                display: animations.AUTO_STYLE,
            }),
            animations.animate(this.duration + 'ms ease-in', animations.style({ height: '0' })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._changeDetectorRef.markForCheck();
        this._animationHidePlayer.onDone(function () {
            _this._onHideDone();
        });
        this._animationHidePlayer.play();
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown,
     * starts animation and adds "overflow:[default]" style again at the end.
     * @return {?}
     */
    TdToggleDirective.prototype.show = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationShowPlayer = this._animationBuilder.build(animations.animation([
            animations.style({
                height: '0',
                display: 'none',
            }),
            animations.animate(this.duration + 'ms ease-out', animations.style({ height: animations.AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
        this._animationShowPlayer.onDone(function () {
            _this._onShowDone();
        });
        this._animationShowPlayer.play();
    };
    /**
     * @return {?}
     */
    TdToggleDirective.prototype._onHideDone = function () {
        if (this._animationHidePlayer) {
            this._animationHidePlayer.destroy();
            this._animationHidePlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TdToggleDirective.prototype._onShowDone = function () {
        if (this._animationShowPlayer) {
            this._animationShowPlayer.destroy();
            this._animationShowPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
            this._changeDetectorRef.markForCheck();
        }
    };
    return TdToggleDirective;
}());
TdToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdToggle]',
            },] },
];
/** @nocollapse */
TdToggleDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
    { type: animations.AnimationBuilder, },
]; };
TdToggleDirective.propDecorators = {
    "duration": [{ type: core.Input },],
    "state": [{ type: core.Input, args: ['tdToggle',] },],
    "ariaExpandedBinding": [{ type: core.HostBinding, args: ['attr.aria-expanded',] },],
    "ariaHiddenBinding": [{ type: core.HostBinding, args: ['attr.aria-hidden',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdFadeDirective = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _animationBuilder
     */
    function TdFadeDirective(_renderer, _element, _changeDetectorRef, _animationBuilder) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationBuilder = _animationBuilder;
        /**
         * duration?: number
         * Sets duration of fade animation in milliseconds.
         * Defaults to 150 ms.
         */
        this.duration = 150;
        /**
         * fadeIn?: function
         * Method to be executed when fadeIn animation ends.
         */
        this.onFadeIn = new core.EventEmitter();
        /**
         * fadeOut?: function
         * Method to be executed when fadeOut animation ends.
         */
        this.onFadeOut = new core.EventEmitter();
        this._defaultDisplay = this._element.nativeElement.style.display;
    }
    Object.defineProperty(TdFadeDirective.prototype, "state", {
        /**
         * tdFade: boolean
         * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
         * @param {?} state
         * @return {?}
         */
        set: function (state$$1) {
            this._state = state$$1;
            if (state$$1) {
                if (this._animationFadeOutPlayer) {
                    this._animationFadeOutPlayer.destroy();
                    this._animationFadeOutPlayer = undefined;
                }
                this.hide();
            }
            else {
                if (this._animationFadeInPlayer) {
                    this._animationFadeInPlayer.destroy();
                    this._animationFadeInPlayer = undefined;
                }
                this.show();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFadeDirective.prototype, "ariaExpandedBinding", {
        /**
         * Binds native 'aria-expanded' attribute.
         * @return {?}
         */
        get: function () {
            return !this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFadeDirective.prototype, "ariaHiddenBinding", {
        /**
         * Binds native 'aria-hidden' attribute.
         * @return {?}
         */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hides element: starts animation and adds "display:'none'" style at the end.
     * @return {?}
     */
    TdFadeDirective.prototype.hide = function () {
        var _this = this;
        this._animationFadeInPlayer = this._animationBuilder.build(animations.animation([
            animations.style({
                opacity: animations.AUTO_STYLE,
                display: animations.AUTO_STYLE,
            }),
            animations.animate(this.duration + 'ms ease-out', animations.style({ opacity: '0' })),
        ])).create(this._element.nativeElement);
        this._animationFadeInPlayer.onDone(function () {
            _this._onFadeInDone();
        });
        this._animationFadeInPlayer.play();
    };
    /**
     * Shows element: sets "display:[default]" so animation is shown.
     * @return {?}
     */
    TdFadeDirective.prototype.show = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this._changeDetectorRef.markForCheck();
        this._animationFadeOutPlayer = this._animationBuilder.build(animations.animation([
            animations.style({
                opacity: '0',
                display: 'none',
            }),
            animations.animate(this.duration + 'ms ease-in', animations.style({ opacity: animations.AUTO_STYLE })),
        ])).create(this._element.nativeElement);
        this._animationFadeOutPlayer.onDone(function () {
            _this._onFadeOutDone();
        });
        this._animationFadeOutPlayer.play();
    };
    /**
     * @return {?}
     */
    TdFadeDirective.prototype._onFadeInDone = function () {
        if (this._animationFadeInPlayer) {
            this._animationFadeInPlayer.destroy();
            this._animationFadeInPlayer = undefined;
            this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
            this._changeDetectorRef.markForCheck();
            this.onFadeIn.emit();
        }
    };
    /**
     * @return {?}
     */
    TdFadeDirective.prototype._onFadeOutDone = function () {
        if (this._animationFadeOutPlayer) {
            this._animationFadeOutPlayer.destroy();
            this._animationFadeOutPlayer = undefined;
            this._changeDetectorRef.markForCheck();
            this.onFadeOut.emit();
        }
    };
    return TdFadeDirective;
}());
TdFadeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdFade]',
            },] },
];
/** @nocollapse */
TdFadeDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
    { type: animations.AnimationBuilder, },
]; };
TdFadeDirective.propDecorators = {
    "duration": [{ type: core.Input },],
    "state": [{ type: core.Input, args: ['tdFade',] },],
    "onFadeIn": [{ type: core.Output, args: ['fadeIn',] },],
    "onFadeOut": [{ type: core.Output, args: ['fadeOut',] },],
    "ariaExpandedBinding": [{ type: core.HostBinding, args: ['attr.aria-expanded',] },],
    "ariaHiddenBinding": [{ type: core.HostBinding, args: ['attr.aria-hidden',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdAutoTrimDirective = /** @class */ (function () {
    /**
     * @param {?} _model
     */
    function TdAutoTrimDirective(_model) {
        this._model = _model;
    }
    /**
     * Listens to host's (blur) event and trims value.
     * @param {?} event
     * @return {?}
     */
    TdAutoTrimDirective.prototype.onBlur = function (event) {
        if (this._model && this._model.value && typeof (this._model.value) === 'string') {
            this._model.update.emit(this._model.value.trim());
        }
    };
    return TdAutoTrimDirective;
}());
TdAutoTrimDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdAutoTrim]',
            },] },
];
/** @nocollapse */
TdAutoTrimDirective.ctorParameters = function () { return [
    { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host },] },
]; };
TdAutoTrimDirective.propDecorators = {
    "onBlur": [{ type: core.HostListener, args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdTimeAgoPipe = /** @class */ (function () {
    function TdTimeAgoPipe() {
    }
    /**
     * @param {?} time
     * @param {?=} reference
     * @return {?}
     */
    TdTimeAgoPipe.prototype.transform = function (time, reference) {
        // Convert time to date object if not already
        time = new Date(time);
        var /** @type {?} */ ref = new Date(reference);
        // If not a valid timestamp, return 'Invalid Date'
        if (!time.getTime()) {
            return 'Invalid Date';
        }
        // For unit testing, we need to be able to declare a static start time
        // for calculations, or else speed of tests can bork.
        var /** @type {?} */ startTime = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
        var /** @type {?} */ diff = Math.floor((startTime - time.getTime()) / 1000);
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
    return TdTimeAgoPipe;
}());
TdTimeAgoPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'timeAgo',
            },] },
];
/** @nocollapse */
TdTimeAgoPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdTimeDifferencePipe = /** @class */ (function () {
    function TdTimeDifferencePipe() {
    }
    /**
     * @param {?} start
     * @param {?=} end
     * @return {?}
     */
    TdTimeDifferencePipe.prototype.transform = function (start, end) {
        var /** @type {?} */ startTime = new Date(start);
        var /** @type {?} */ endTime;
        if (end !== undefined) {
            endTime = new Date(end);
        }
        else {
            endTime = new Date();
        }
        if (!startTime.getTime() || !endTime.getTime()) {
            return 'Invalid Date';
        }
        var /** @type {?} */ diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
        var /** @type {?} */ days = Math.floor(diff / (60 * 60 * 24));
        diff = diff - (days * (60 * 60 * 24));
        var /** @type {?} */ hours = Math.floor(diff / (60 * 60));
        diff = diff - (hours * (60 * 60));
        var /** @type {?} */ minutes = Math.floor(diff / (60));
        diff -= minutes * (60);
        var /** @type {?} */ seconds = diff;
        var /** @type {?} */ pad = '00';
        var /** @type {?} */ daysFormatted = '';
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
    return TdTimeDifferencePipe;
}());
TdTimeDifferencePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'timeDifference',
            },] },
];
/** @nocollapse */
TdTimeDifferencePipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdBytesPipe = /** @class */ (function () {
    function TdBytesPipe() {
    }
    /**
     * @param {?} bytes
     * @param {?=} precision
     * @return {?}
     */
    TdBytesPipe.prototype.transform = function (bytes, precision) {
        if (precision === void 0) { precision = 2; }
        if (bytes === 0) {
            return '0 B';
        }
        else if (isNaN(parseInt(bytes, 10))) {
            /* If not a valid number, return 'Invalid Number' */
            return 'Invalid Number';
        }
        var /** @type {?} */ k = 1024;
        var /** @type {?} */ sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var /** @type {?} */ i = Math.floor(Math.log(bytes) / Math.log(k));
        // if less than 1
        if (i < 0) {
            return 'Invalid Number';
        }
        return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
    };
    return TdBytesPipe;
}());
TdBytesPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'bytes',
            },] },
];
/** @nocollapse */
TdBytesPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdDigitsPipe = /** @class */ (function () {
    /**
     * @param {?=} _locale
     */
    function TdDigitsPipe(_locale) {
        if (_locale === void 0) { _locale = 'en'; }
        this._locale = _locale;
        this._decimalPipe = new common.DecimalPipe(this._locale);
    }
    /**
     * @param {?} digits
     * @param {?=} precision
     * @return {?}
     */
    TdDigitsPipe.prototype.transform = function (digits, precision) {
        if (precision === void 0) { precision = 1; }
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
        var /** @type {?} */ k = 1000;
        var /** @type {?} */ sizes = ['', 'K', 'M', 'B', 'T', 'Q'];
        var /** @type {?} */ i = Math.floor(Math.log(digits) / Math.log(k));
        var /** @type {?} */ size = sizes[i];
        return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
    };
    return TdDigitsPipe;
}());
TdDigitsPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'digits',
            },] },
];
/** @nocollapse */
TdDigitsPipe.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [core.LOCALE_ID,] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdTruncatePipe = /** @class */ (function () {
    function TdTruncatePipe() {
    }
    /**
     * @param {?} text
     * @param {?} length
     * @return {?}
     */
    TdTruncatePipe.prototype.transform = function (text, length) {
        if (typeof text !== 'string') {
            return '';
        }
        // Truncate
        var /** @type {?} */ truncated = text.substr(0, length);
        if (text.length > length) {
            if (truncated.lastIndexOf(' ') > 0) {
                truncated = truncated.trim();
            }
            truncated += '…';
        }
        return truncated;
    };
    return TdTruncatePipe;
}());
TdTruncatePipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'truncate',
            },] },
];
/** @nocollapse */
TdTruncatePipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RouterPathService = /** @class */ (function () {
    /**
     * @param {?} _router
     */
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events.pipe(filter.filter(function (e) { return e instanceof router.RoutesRecognized; }), pairwise.pairwise()).subscribe(function (e) {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        });
    }
    /**
     * @return {?}
     */
    RouterPathService.prototype.getPreviousRoute = function () {
        return RouterPathService._previousRoute;
    };
    return RouterPathService;
}());
RouterPathService._previousRoute = '/';
RouterPathService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
RouterPathService.ctorParameters = function () { return [
    { type: router.Router, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
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
        /**
         * @return {?}
         */
        get: function () {
            return this._icons;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} query
     * @return {?}
     */
    IconService.prototype.filter = function (query$$1) {
        return this.icons.filter(function (el) {
            return el.toLowerCase().indexOf(query$$1 ? query$$1.toLowerCase() : '') > -1;
        });
    };
    return IconService;
}());
IconService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
IconService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_ANIMATIONS = [
    TdToggleDirective,
    TdFadeDirective,
];
var TD_FORMS = [
    TdAutoTrimDirective,
];
// Validators
var TD_VALIDATORS = [];
var TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
var CovalentCommonModule$1 = /** @class */ (function () {
    function CovalentCommonModule$1() {
    }
    return CovalentCommonModule$1;
}());
CovalentCommonModule$1.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    forms.FormsModule,
                    common.CommonModule,
                ],
                declarations: [
                    TD_FORMS,
                    TD_PIPES,
                    TD_ANIMATIONS,
                    TD_VALIDATORS,
                ],
                exports: [
                    forms.FormsModule,
                    common.CommonModule,
                    TD_FORMS,
                    TD_PIPES,
                    TD_ANIMATIONS,
                    TD_VALIDATORS,
                ],
                providers: [
                    RouterPathService,
                    IconService,
                ],
            },] },
];
/** @nocollapse */
CovalentCommonModule$1.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * Function TdRotateAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdRotate.
 * * duration: Duration the animation will run in milliseconds. Defaults to 250 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * degrees: Degrees of rotation that the dom object will animation. A negative value will cause the animation to initially rotate counter-clockwise.
 * * ease: Animation accelerates and decelerates when rotation. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based rotation animation.
 *
 * usage: [\@myAnchorName]="true|false"
 * @param {?=} rotateOptions
 * @return {?}
 */
function TdRotateAnimation$1(rotateOptions) {
    if (rotateOptions === void 0) { rotateOptions = {}; }
    return animations.trigger(rotateOptions.anchor || 'tdRotate', [
        animations.state('0', animations.style({
            transform: 'rotate(0deg)',
        })),
        animations.state('1', animations.style({
            transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((rotateOptions.duration || 250) + 'ms ' +
                    (rotateOptions.delay || 0) + 'ms ' +
                    (rotateOptions.ease || 'ease-in')),
            ]),
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * Function TdCollapseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdCollapse.
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a collapse/expand animation.
 *
 * usage: [\@tdCollapse]="true|false"
 * @param {?=} collapseOptions
 * @return {?}
 */
function TdCollapseAnimation$1(collapseOptions) {
    if (collapseOptions === void 0) { collapseOptions = {}; }
    return animations.trigger(collapseOptions.anchor || 'tdCollapse', [
        animations.state('1', animations.style({
            height: '0',
            display: 'none',
        })),
        animations.state('0', animations.style({
            height: animations.AUTO_STYLE,
            display: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((collapseOptions.duration || 150) + 'ms ' +
                    (collapseOptions.delay || 0) + 'ms ' +
                    (collapseOptions.easeOnClose || 'ease-in')),
            ]),
        ]),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((collapseOptions.duration || 150) + 'ms ' +
                    (collapseOptions.delay || 0) + 'ms ' +
                    (collapseOptions.easeOnOpen || 'ease-out')),
            ]),
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdFadeInOut
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [\@tdFadeInOut]="true|false"
 * @param {?=} fadeInOut
 * @return {?}
 */
function TdFadeInOutAnimation$1(fadeInOut) {
    if (fadeInOut === void 0) { fadeInOut = {}; }
    return animations.trigger((fadeInOut.anchor || 'tdFadeInOut'), [
        animations.state('0', animations.style({
            opacity: '0',
            display: 'none',
        })),
        animations.state('1', animations.style({
            opacity: animations.AUTO_STYLE,
            display: animations.AUTO_STYLE,
        })),
        animations.transition('0 => 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((fadeInOut.duration || 150) + 'ms ' +
                    (fadeInOut.delay || 0) + 'ms ' +
                    (fadeInOut.easeOnIn || 'ease-in')),
            ]),
        ]),
        animations.transition('1 => 0', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((fadeInOut.duration || 150) + 'ms ' +
                    (fadeInOut.delay || 0) + 'ms ' +
                    (fadeInOut.easeOnOut || 'ease-out')),
            ]),
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Function TdBounceAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based bounce animation.
 *
 * usage: [\@myAnchorName]="true|false"
 * @param {?=} bounceOptions
 * @return {?}
 */
function TdBounceAnimation(bounceOptions) {
    if (bounceOptions === void 0) { bounceOptions = {}; }
    return animations.trigger(bounceOptions.anchor || 'tdBounce', [
        animations.state('0', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.state('1', animations.style({
            transform: 'translate3d(0, 0, 0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((bounceOptions.duration || 500) + 'ms ' + (bounceOptions.delay || 0) + 'ms', animations.keyframes([
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
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Function TdFlashAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based flash animation.
 *
 * usage: [\@myAnchorName]="true|false"
 * @param {?=} flashOptions
 * @return {?}
 */
function TdFlashAnimation(flashOptions) {
    if (flashOptions === void 0) { flashOptions = {}; }
    return animations.trigger(flashOptions.anchor || 'tdFlash', [
        animations.state('0', animations.style({
            opacity: 1,
        })),
        animations.state('1', animations.style({
            opacity: 1,
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((flashOptions.duration || 500) + 'ms ' + (flashOptions.delay || 0) + 'ms', animations.keyframes([
                    animations.style({ opacity: 1, offset: 0 }),
                    animations.style({ opacity: 0, offset: 0.25 }),
                    animations.style({ opacity: 1, offset: 0.5 }),
                    animations.style({ opacity: 0, offset: 0.75 }),
                    animations.style({ opacity: 1, offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Function TdHeadshakeAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based headshake animation.
 *
 * usage: [\@myAnchorName]="true|false"
 * @param {?=} headshakeOptions
 * @return {?}
 */
function TdHeadshakeAnimation(headshakeOptions) {
    if (headshakeOptions === void 0) { headshakeOptions = {}; }
    return animations.trigger(headshakeOptions.anchor || 'tdHeadshake', [
        animations.state('0', animations.style({
            transform: 'translateX(0)',
        })),
        animations.state('1', animations.style({
            transform: 'translateX(0)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((headshakeOptions.duration || 500) + 'ms ' + (headshakeOptions.delay || 0) + 'ms', animations.keyframes([
                    animations.style({ transform: 'translateX(0)', offset: 0 }),
                    animations.style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
                    animations.style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
                    animations.style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
                    animations.style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
                    animations.style({ transform: 'translateX(0)', offset: 0.50 }),
                ])),
            ]),
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Function TdJelloAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based jello animation.
 *
 * usage: [\@myAnchorName]="true|false"
 * @param {?=} jelloOptions
 * @return {?}
 */
function TdJelloAnimation(jelloOptions) {
    if (jelloOptions === void 0) { jelloOptions = {}; }
    return animations.trigger(jelloOptions.anchor || 'tdJello', [
        animations.state('0', animations.style({
            transform: 'none',
        })),
        animations.state('1', animations.style({
            transform: 'none',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((jelloOptions.duration || 500) + 'ms ' + (jelloOptions.delay || 0) + 'ms', animations.keyframes([
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
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Function TdPulseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based pulse animation.
 *
 * usage: [\@myAnchorName]="true|false"
 * @param {?=} pulseOptions
 * @return {?}
 */
function TdPulseAnimation(pulseOptions) {
    if (pulseOptions === void 0) { pulseOptions = {}; }
    return animations.trigger(pulseOptions.anchor || 'tdPulse', [
        animations.state('0', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.state('1', animations.style({
            transform: 'scale3d(1, 1, 1)',
        })),
        animations.transition('0 <=> 1', [
            animations.group([
                animations.query('@*', animations.animateChild(), { optional: true }),
                animations.animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', animations.keyframes([
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    animations.style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var noop = function () {
    // empty method
};
/**
 * @record
 */
/**
 * @record
 */
/**
 * Mixin to augment a component with ngModel support.
 * @template T
 * @param {?} base
 * @param {?=} initialValue
 * @return {?}
 */
function mixinControlValueAccessor$1(base, initialValue) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        /**
         * @param {...?} args
         */
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._value = initialValue;
            _this.onChange = function (_) { return noop; };
            _this.onTouched = function () { return noop; };
            _this._subjectValueChanges = new Subject.Subject();
            _this.valueChanges = _this._subjectValueChanges.asObservable();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "value", {
            /**
             * @return {?}
             */
            get: function () {
                return this._value;
            },
            /**
             * @param {?} v
             * @return {?}
             */
            set: function (v) {
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
        class_1.prototype.writeValue = function (value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        class_1.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        class_1.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return class_1;
    }(base));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Interface to implement when applying the disabled mixin
 * @record
 */
/**
 * Mixin to augment a component or directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled$1(base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        /**
         * @param {...?} args
         */
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_2.prototype, "disabled", {
            /**
             * @return {?}
             */
            get: function () {
                return this._disabled;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var /** @type {?} */ newValue = coercion.coerceBooleanProperty(value);
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
        class_2.prototype.onDisabledChange = function (v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        };
        return class_2;
    }(base));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Interface to implement when applying the disabled mixin
 * @record
 */
/**
 * Mixin to augment a component or directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple$1(base) {
    return /** @class */ (function (_super) {
        __extends(class_3, _super);
        /**
         * @param {...?} args
         */
        function class_3() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._disableRipple = false;
            return _this;
        }
        Object.defineProperty(class_3.prototype, "disableRipple", {
            /**
             * @return {?}
             */
            get: function () {
                return this._disableRipple;
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var /** @type {?} */ newValue = coercion.coerceBooleanProperty(value);
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
        class_3.prototype.onDisableRippleChange = function (v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        };
        return class_3;
    }(base));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CovalentValidators = /** @class */ (function () {
    function CovalentValidators() {
    }
    /**
     * @param {?} minValue
     * @return {?}
     */
    CovalentValidators.min = function (minValue) {
        var /** @type {?} */ func = function (c) {
            if (!!forms.Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            var /** @type {?} */ v = c.value;
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
    CovalentValidators.max = function (maxValue) {
        var /** @type {?} */ func = function (c) {
            if (!!forms.Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            var /** @type {?} */ v = c.value;
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
    CovalentValidators.numberRequired = function (c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    };
    return CovalentValidators;
}());
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
var TdMessageContainerDirective = /** @class */ (function () {
    /**
     * @param {?} viewContainer
     */
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    return TdMessageContainerDirective;
}());
TdMessageContainerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdMessageContainer]',
            },] },
];
/** @nocollapse */
TdMessageContainerDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
var TdMessageComponent = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     */
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
         * @return {?}
         */
        get: function () {
            return !this._opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
        /**
         * Binding host to display style when hidden
         * @return {?}
         */
        get: function () {
            return this._hidden ? 'none' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "color", {
        /**
         * @return {?}
         */
        get: function () {
            return this._color;
        },
        /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         * @param {?} color
         * @return {?}
         */
        set: function (color) {
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
        /**
         * @return {?}
         */
        get: function () {
            return this._opened;
        },
        /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         * @param {?} opened
         * @return {?}
         */
        set: function (opened) {
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
     * @return {?}
     */
    TdMessageComponent.prototype.animationDoneListener = function () {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    TdMessageComponent.prototype.ngAfterViewInit = function () {
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
     * @return {?}
     */
    TdMessageComponent.prototype.open = function () {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    };
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    TdMessageComponent.prototype.close = function () {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    };
    /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    TdMessageComponent.prototype.toggle = function () {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Method to set the state before starting an animation
     * @return {?}
     */
    TdMessageComponent.prototype._startAnimationState = function () {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to attach template to DOM
     * @return {?}
     */
    TdMessageComponent.prototype._attach = function () {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to detach template from DOM
     * @return {?}
     */
    TdMessageComponent.prototype._detach = function () {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    };
    return TdMessageComponent;
}());
TdMessageComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-message',
                template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>",
                styles: [":host{\n  display:block; }\n  :host .td-message-wrapper{\n    padding:8px 16px;\n    min-height:52px;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    max-width:100%;\n    -webkit-box-pack:start;\n        -ms-flex-pack:start;\n            justify-content:start; }\n    :host .td-message-wrapper .td-message-labels{\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1; }\n.td-message-icon{\n  margin-right:16px; }\n  ::ng-deep [dir='rtl'] .td-message-icon{\n    margin-left:16px;\n    margin-right:0; }\n"],
                animations: [
                    common$1.TdCollapseAnimation({ duration: 100 }),
                ],
            },] },
];
/** @nocollapse */
TdMessageComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
]; };
TdMessageComponent.propDecorators = {
    "_childElement": [{ type: core.ViewChild, args: [TdMessageContainerDirective,] },],
    "_template": [{ type: core.ViewChild, args: [core.TemplateRef,] },],
    "collapsedAnimation": [{ type: core.HostBinding, args: ['@tdCollapse',] },],
    "hidden": [{ type: core.HostBinding, args: ['style.display',] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "sublabel": [{ type: core.Input, args: ['sublabel',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "animationDoneListener": [{ type: core.HostListener, args: ['@tdCollapse.done',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_MESSAGE = [
    TdMessageComponent,
    TdMessageContainerDirective,
];
var CovalentMessageModule = /** @class */ (function () {
    function CovalentMessageModule() {
    }
    return CovalentMessageModule;
}());
CovalentMessageModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentMessageModule.ctorParameters = function () { return []; };
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
var TdChipDirective = /** @class */ (function (_super) {
    __extends(TdChipDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdChipDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdChipDirective;
}(portal.TemplatePortalDirective));
TdChipDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-chip]ng-template',
            },] },
];
/** @nocollapse */
TdChipDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
    __extends(TdAutocompleteOptionDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdAutocompleteOptionDirective;
}(portal.TemplatePortalDirective));
TdAutocompleteOptionDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-autocomplete-option]ng-template',
            },] },
];
/** @nocollapse */
TdAutocompleteOptionDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdChipsBase = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     */
    function TdChipsBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdChipsBase;
}());
/* tslint:disable-next-line */
var _TdChipsMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdChipsBase), []);
var TdChipsComponent = /** @class */ (function (_super) {
    __extends(TdChipsComponent, _super);
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _document
     * @param {?} _changeDetectorRef
     */
    function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        _this._document = _document;
        _this._isMousedown = false;
        _this._length = 0;
        _this._stacked = false;
        _this._requireMatch = false;
        _this._color = 'primary';
        _this._inputPosition = 'after';
        _this._chipAddition = true;
        _this._chipRemoval = true;
        _this._focused = false;
        _this._tabIndex = 0;
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
        _this.onAdd = new core.EventEmitter();
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         */
        _this.onRemove = new core.EventEmitter();
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         */
        _this.onInputChange = new core.EventEmitter();
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         */
        _this.onChipFocus = new core.EventEmitter();
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         */
        _this.onChipBlur = new core.EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
        return _this;
    }
    Object.defineProperty(TdChipsComponent.prototype, "focused", {
        /**
         * Flag that is true when autocomplete is focused.
         * @return {?}
         */
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "items", {
        /**
         * @return {?}
         */
        get: function () {
            return this._items;
        },
        /**
         * items?: any[]
         * Renders the `mat-autocomplete` with the provided list to display as options.
         * @param {?} items
         * @return {?}
         */
        set: function (items) {
            this._items = items;
            this._setFirstOptionActive();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "stacked", {
        /**
         * @return {?}
         */
        get: function () {
            return this._stacked;
        },
        /**
         * stacked?: boolean
         * Set stacked or horizontal chips depending on value.
         * Defaults to false.
         * @param {?} stacked
         * @return {?}
         */
        set: function (stacked) {
            this._stacked = coercion.coerceBooleanProperty(stacked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
        /**
         * @return {?}
         */
        get: function () {
            return this._inputPosition;
        },
        /**
         * inputPosition?: 'before' | 'after'
         * Set input position before or after the chips.
         * Defaults to 'after'.
         * @param {?} inputPosition
         * @return {?}
         */
        set: function (inputPosition) {
            this._inputPosition = inputPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
        /**
         * @return {?}
         */
        get: function () {
            return this._requireMatch;
        },
        /**
         * requireMatch?: boolean
         * Blocks custom inputs and only allows selections from the autocomplete list.
         * @param {?} requireMatch
         * @return {?}
         */
        set: function (requireMatch) {
            this._requireMatch = coercion.coerceBooleanProperty(requireMatch);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
        /**
         * @return {?}
         */
        get: function () {
            return this._chipAddition;
        },
        /**
         * chipAddition?: boolean
         * Disables the ability to add chips. When setting disabled as true, this will be overriden.
         * Defaults to true.
         * @param {?} chipAddition
         * @return {?}
         */
        set: function (chipAddition) {
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
         * @return {?}
         */
        get: function () {
            return this.chipAddition && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
        /**
         * @return {?}
         */
        get: function () {
            return this._chipRemoval;
        },
        /**
         * chipRemoval?: boolean
         * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
         * When setting disabled as true, this will be overriden to false.
         * @param {?} chipRemoval
         * @return {?}
         */
        set: function (chipRemoval) {
            this._chipRemoval = chipRemoval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
        /**
         * Checks if not in disabled state and if chipRemoval is set to 'true'
         * States if a chip can be removed
         * @return {?}
         */
        get: function () {
            return this.chipRemoval && !this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdChipsComponent.prototype, "color", {
        /**
         * @return {?}
         */
        get: function () {
            return this._color;
        },
        /**
         * color?: 'primary' | 'accent' | 'warn'
         * Sets the color for the input and focus/selected state of the chips.
         * Defaults to 'primary'
         * @param {?} color
         * @return {?}
         */
        set: function (color) {
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
         * @return {?}
         */
        get: function () {
            return this.disabled ? -1 : this._tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to host focus event to act on it
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.focusListener = function (event) {
        // should only focus if its not via mousedown to prevent clashing with autocomplete
        if (!this._isMousedown) {
            this.focus();
        }
        event.preventDefault();
    };
    /**
     * Listens to host mousedown event to act on it
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.mousedownListener = function (event) {
        var _this = this;
        // sets a flag to know if there was a mousedown and then it returns it back to false
        this._isMousedown = true;
        toPromise.toPromise.call(timer.timer()).then(function () {
            _this._isMousedown = false;
        });
    };
    /**
     * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
     * doesnt close automatically.
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.clickListener = function (event) {
        var /** @type {?} */ clickTarget = (event.target);
        if (clickTarget === this._elementRef.nativeElement ||
            clickTarget.className.indexOf('td-chips-wrapper') > -1) {
            this.focus();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * Listens to host keydown event to act on it depending on the keypress
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype.keydownListener = function (event) {
        var _this = this;
        switch (event.keyCode) {
            case keycodes.TAB:
                // if tabing out, then unfocus the component
                toPromise.toPromise.call(timer.timer()).then(function () {
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
        }
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges.pipe(debounceTime.debounceTime(this.debounce)).subscribe(function (value) {
            _this.onInputChange.emit(value ? value : '');
        });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngAfterViewInit = function () {
        this._watchOutsideClick();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngDoCheck = function () {
        // Throw onChange event only if array changes size.
        if (this.value && this.value.length !== this._length) {
            this._length = this.value.length;
            this.onChange(this.value);
        }
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype.ngOnDestroy = function () {
        if (this._outsideClickSubs) {
            this._outsideClickSubs.unsubscribe();
            this._outsideClickSubs = undefined;
        }
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype._setInternalClick = function () {
        this._internalClick = true;
    };
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdChipsComponent.prototype.onDisabledChange = function (v) {
        this._toggleInput();
    };
    /**
     * Method that is executed when trying to create a new chip from the autocomplete.
     * It check if [requireMatch] is enabled, and tries to add the first active option
     * else if just adds the value thats on the input
     * returns 'true' if successful, 'false' if it fails.
     * @return {?}
     */
    TdChipsComponent.prototype._handleAddChip = function () {
        var /** @type {?} */ value;
        if (this.requireMatch) {
            var /** @type {?} */ selectedOptions = this._options.toArray().filter(function (option) {
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
     * @param {?} value
     * @return {?}
     */
    TdChipsComponent.prototype.addChip = function (value) {
        var _this = this;
        /**
             * add a debounce ms delay when reopening the autocomplete to give it time
             * to rerender the next list and at the correct spot
             */
        this._closeAutocomplete();
        toPromise.toPromise.call(timer.timer(this.debounce)).then(function () {
            _this.setFocusedState();
            _this._setFirstOptionActive();
            _this._openAutocomplete();
        });
        this.inputControl.setValue('');
        // check if value is already part of the model
        if (this.value.indexOf(value) > -1) {
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
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype.removeChip = function (index) {
        var /** @type {?} */ removedValues = this.value.splice(index, 1);
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
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    TdChipsComponent.prototype._handleChipBlur = function (event, value) {
        this.onChipBlur.emit(value);
    };
    /**
     * Sets focus of chip and sends out event
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    TdChipsComponent.prototype._handleChipFocus = function (event, value) {
        this.setFocusedState();
        this.onChipFocus.emit(value);
    };
    /**
     * @return {?}
     */
    TdChipsComponent.prototype._handleFocus = function () {
        this.setFocusedState();
        this._setFirstOptionActive();
        return true;
    };
    /**
     * Sets focus state of the component
     * @return {?}
     */
    TdChipsComponent.prototype.setFocusedState = function () {
        if (!this.disabled) {
            this._focused = true;
            this._tabIndex = -1;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Removes focus state of the component
     * @return {?}
     */
    TdChipsComponent.prototype.removeFocusedState = function () {
        this._focused = false;
        this._tabIndex = 0;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Programmatically focus the input or first chip. Since its the component entry point
     * depending if a user can add or remove chips
     * @return {?}
     */
    TdChipsComponent.prototype.focus = function () {
        if (this.canAddChip) {
            this._inputChild.focus();
        }
        else if (!this.disabled) {
            this._focusFirstChip();
        }
    };
    /**
     * Passes relevant input key presses.
     * @param {?} event
     * @return {?}
     */
    TdChipsComponent.prototype._inputKeydown = function (event) {
        switch (event.keyCode) {
            case keycodes.UP_ARROW:
                /**
                         * Since the first item is highlighted on [requireMatch], we need to inactivate it
                         * when pressing the up key
                         */
                if (this.requireMatch) {
                    var /** @type {?} */ length = this._options.length;
                    if (length > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
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
        }
    };
    /**
     * Passes relevant chip key presses.
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype._chipKeydown = function (event, index) {
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
        }
    };
    /**
     * Method to remove from display the value added from the autocomplete since it goes directly as chip.
     * @return {?}
     */
    TdChipsComponent.prototype._removeInputDisplay = function () {
        return '';
    };
    /**
     * Method to open the autocomplete manually if its not already opened
     * @return {?}
     */
    TdChipsComponent.prototype._openAutocomplete = function () {
        if (!this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.openPanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Method to close the autocomplete manually if its not already closed
     * @return {?}
     */
    TdChipsComponent.prototype._closeAutocomplete = function () {
        if (this._autocompleteTrigger.panelOpen) {
            this._autocompleteTrigger.closePanel();
            this._changeDetectorRef.markForCheck();
        }
    };
    Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
        /**
         * Get total of chips
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ chips$$1 = this._chipsChildren.toArray();
            return chips$$1.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method to focus a desired chip by index
     * @param {?} index
     * @return {?}
     */
    TdChipsComponent.prototype._focusChip = function (index) {
        /** check to see if index exists in the array before focusing */
        if (index > -1 && this._totalChips > index) {
            this._chipsChildren.toArray()[index].focus();
        }
    };
    /**
     * Method to focus first chip
     * @return {?}
     */
    TdChipsComponent.prototype._focusFirstChip = function () {
        this._focusChip(0);
    };
    /**
     * Method to focus last chip
     * @return {?}
     */
    TdChipsComponent.prototype._focusLastChip = function () {
        this._focusChip(this._totalChips - 1);
    };
    /**
     * Method to toggle the disable state of input
     * Checks if not in disabled state and if chipAddition is set to 'true'
     * @return {?}
     */
    TdChipsComponent.prototype._toggleInput = function () {
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
     * @return {?}
     */
    TdChipsComponent.prototype._setFirstOptionActive = function () {
        var _this = this;
        if (this.requireMatch) {
            // need to use a timer here to wait until the autocomplete has been opened (end of queue)
            toPromise.toPromise.call(timer.timer()).then(function () {
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
     * @return {?}
     */
    TdChipsComponent.prototype._watchOutsideClick = function () {
        var _this = this;
        if (this._document) {
            merge.merge(fromEvent.fromEvent(this._document, 'click'), fromEvent.fromEvent(this._document, 'touchend')).pipe(filter.filter(function (event) {
                var /** @type {?} */ clickTarget = (event.target);
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
    return TdChipsComponent;
}(_TdChipsMixinBase));
TdChipsComponent.decorators = [
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdChipsComponent; }),
                        multi: true,
                    }],
                selector: 'td-chips',
                inputs: ['disabled', 'value'],
                styles: [":host{\n  display:block;\n  padding:0 5px;\n  min-height:48px; }\n  :host .td-chips-wrapper{\n    min-height:42px;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -ms-flex-wrap:wrap;\n        flex-wrap:wrap;\n    -webkit-box-align:start;\n        -ms-flex-align:start;\n            align-items:flex-start; }\n    :host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,\n    :host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{\n      width:100%; }\n    :host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{\n      -webkit-box-ordinal-group:0;\n          -ms-flex-order:-1;\n              order:-1; }\n  :host .td-chip, :host .td-chip > .td-chip-content{\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    max-width:100%;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    -webkit-box-pack:start;\n        -ms-flex-pack:start;\n            justify-content:start; }\n    :host .td-chip.td-chip-stacked, :host .td-chip > .td-chip-content.td-chip-stacked{\n      -webkit-box-pack:justify;\n          -ms-flex-pack:justify;\n              justify-content:space-between; }\n  :host ::ng-deep{ }\n    :host ::ng-deep .mat-form-field-wrapper{\n      padding-bottom:2px; }\n    :host ::ng-deep .mat-basic-chip{\n      display:inline-block;\n      cursor:default;\n      border-radius:16px;\n      margin:8px 8px 0 0;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      max-width:100%;\n      position:relative; }\n      html[dir=rtl] :host ::ng-deep .mat-basic-chip{\n        margin:8px 0 0 8px;\n        unicode-bidi:embed; }\n      body[dir=rtl] :host ::ng-deep .mat-basic-chip{\n        margin:8px 0 0 8px;\n        unicode-bidi:embed; }\n      [dir=rtl] :host ::ng-deep .mat-basic-chip{\n        margin:8px 0 0 8px;\n        unicode-bidi:embed; }\n      :host ::ng-deep .mat-basic-chip bdo[dir=rtl]{\n        direction:rtl;\n        unicode-bidi:bidi-override; }\n      :host ::ng-deep .mat-basic-chip bdo[dir=ltr]{\n        direction:ltr;\n        unicode-bidi:bidi-override; }\n      :host ::ng-deep .mat-basic-chip .td-chip{\n        min-height:32px;\n        line-height:32px;\n        font-size:13px;\n        padding:0 0 0 12px; }\n        html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{\n          padding:0 12px 0 0;\n          unicode-bidi:embed; }\n        body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{\n          padding:0 12px 0 0;\n          unicode-bidi:embed; }\n        [dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{\n          padding:0 12px 0 0;\n          unicode-bidi:embed; }\n        :host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{\n          direction:rtl;\n          unicode-bidi:bidi-override; }\n        :host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{\n          direction:ltr;\n          unicode-bidi:bidi-override; }\n        :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{\n          display:inline-block;\n          -webkit-box-ordinal-group:-19;\n              -ms-flex-order:-20;\n                  order:-20;\n          -webkit-box-pack:center;\n              -ms-flex-pack:center;\n                  justify-content:center;\n          -webkit-box-align:center;\n              -ms-flex-align:center;\n                  align-items:center;\n          text-align:center;\n          height:32px;\n          width:32px;\n          margin:0 8px 0 -12px;\n          border-radius:50%; }\n          html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{\n            margin:0 -12px 0 8px;\n            unicode-bidi:embed; }\n          body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{\n            margin:0 -12px 0 8px;\n            unicode-bidi:embed; }\n          [dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{\n            margin:0 -12px 0 8px;\n            unicode-bidi:embed; }\n          :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{\n            direction:rtl;\n            unicode-bidi:bidi-override; }\n          :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{\n            direction:ltr;\n            unicode-bidi:bidi-override; }\n      :host ::ng-deep .mat-basic-chip.td-chip-after-pad{\n        padding:0 12px 0 0; }\n        html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{\n          padding:0 0 0 12px;\n          unicode-bidi:embed; }\n        body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{\n          padding:0 0 0 12px;\n          unicode-bidi:embed; }\n        [dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{\n          padding:0 0 0 12px;\n          unicode-bidi:embed; }\n        :host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{\n          direction:rtl;\n          unicode-bidi:bidi-override; }\n        :host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{\n          direction:ltr;\n          unicode-bidi:bidi-override; }\n      :host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{\n        margin:0 4px;\n        font-size:21px;\n        line-height:22px; }\n        :host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{\n          cursor:pointer; }\n    :host ::ng-deep .td-chips-stacked .mat-basic-chip{\n      margin:4px 0; }\n      :host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{\n        margin:8px 0 4px; }\n      :host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{\n        margin:4px 0 8px; }\n  :host .mat-form-field-underline{\n    position:relative;\n    height:1px;\n    width:100%;\n    bottom:0; }\n    :host .mat-form-field-underline.mat-disabled{\n      background-position:0;\n      bottom:-4px;\n      background-color:transparent; }\n    :host .mat-form-field-underline .mat-form-field-ripple{\n      position:absolute;\n      height:2px;\n      top:0;\n      width:100%;\n      -webkit-transform-origin:50%;\n              transform-origin:50%;\n      -webkit-transform:scaleX(0.5);\n              transform:scaleX(0.5);\n      visibility:hidden;\n      opacity:0;\n      -webkit-transition:background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n      transition:background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n      :host .mat-form-field-underline .mat-form-field-ripple.mat-focused{\n        visibility:visible;\n        opacity:1;\n        -webkit-transform:scaleX(1);\n                transform:scaleX(1);\n        -webkit-transition:background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 150ms linear;\n        transition:background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 150ms linear;\n        transition:transform 150ms linear, background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n        transition:transform 150ms linear, background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2), -webkit-transform 150ms linear; }\n  :host ::ng-deep mat-form-field .mat-form-field-underline{\n    display:none; }\n"],
                template: "<div class=\"td-chips-wrapper\"\n     [class.td-chips-stacked]=\"stacked\"\n     [class.td-chips-input-before-position]=\"inputPosition === 'before'\">\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip [class.td-chip-disabled]=\"disabled\"\n                   [class.td-chip-after-pad]=\"!canRemoveChip\"\n                   [color]=\"color\"\n                   (keydown)=\"_chipKeydown($event, index)\"\n                   (blur)=\"_handleChipBlur($event, chip)\"\n                   (focus)=\"_handleChipFocus($event, chip)\">\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{chip}}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\">\n          </ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field floatPlaceholder=\"never\"\n                  class=\"td-chips-form-field\"\n                  [style.width.px]=\"canAddChip ? null : 0\"\n                  [style.height.px]=\"canAddChip ? null : 0\"\n                  [color]=\"color\">\n    <input matInput\n            #input\n            [tabIndex]=\"-1\"\n            [matAutocomplete]=\"autocomplete\"\n            [formControl]=\"inputControl\"\n            [placeholder]=\"canAddChip? placeholder : ''\"\n            (keydown)=\"_inputKeydown($event)\"\n            (keyup.enter)=\"_handleAddChip()\"\n            (focus)=\"_handleFocus()\">\n  </mat-form-field>\n  <mat-autocomplete #autocomplete=\"matAutocomplete\"\n                   [displayWith]=\"_removeInputDisplay\"\n                   (optionSelected)=\"addChip($event.option.value)\">\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{item}}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\">\n        </ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\"\n      [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\"\n        [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChipsComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
    { type: core.ChangeDetectorRef, },
]; };
TdChipsComponent.propDecorators = {
    "_nativeInput": [{ type: core.ViewChild, args: ['input',] },],
    "_inputChild": [{ type: core.ViewChild, args: [input.MatInput,] },],
    "_autocompleteTrigger": [{ type: core.ViewChild, args: [autocomplete.MatAutocompleteTrigger,] },],
    "_chipsChildren": [{ type: core.ViewChildren, args: [chips.MatChip,] },],
    "_chipTemplate": [{ type: core.ContentChild, args: [TdChipDirective,] },],
    "_autocompleteOptionTemplate": [{ type: core.ContentChild, args: [TdAutocompleteOptionDirective,] },],
    "_options": [{ type: core.ViewChildren, args: [core$1.MatOption,] },],
    "items": [{ type: core.Input, args: ['items',] },],
    "stacked": [{ type: core.Input, args: ['stacked',] },],
    "inputPosition": [{ type: core.Input, args: ['inputPosition',] },],
    "requireMatch": [{ type: core.Input, args: ['requireMatch',] },],
    "chipAddition": [{ type: core.Input, args: ['chipAddition',] },],
    "chipRemoval": [{ type: core.Input, args: ['chipRemoval',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "debounce": [{ type: core.Input, args: ['debounce',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "onAdd": [{ type: core.Output, args: ['add',] },],
    "onRemove": [{ type: core.Output, args: ['remove',] },],
    "onInputChange": [{ type: core.Output, args: ['inputChange',] },],
    "onChipFocus": [{ type: core.Output, args: ['chipFocus',] },],
    "onChipBlur": [{ type: core.Output, args: ['chipBlur',] },],
    "tabIndex": [{ type: core.HostBinding, args: ['attr.tabindex',] },],
    "focusListener": [{ type: core.HostListener, args: ['focus', ['$event'],] },],
    "mousedownListener": [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
    "clickListener": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "keydownListener": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CovalentChipsModule = /** @class */ (function () {
    function CovalentChipsModule() {
    }
    return CovalentChipsModule;
}());
CovalentChipsModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentChipsModule.ctorParameters = function () { return []; };
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
var TdDataTableColumnRowComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function TdDataTableColumnRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
    return TdDataTableColumnRowComponent;
}());
TdDataTableColumnRowComponent.decorators = [
    { type: core.Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-column-row]',
                styles: [":host{\n  border-bottom-style:solid;\n  border-bottom-width:1px; }\n:host.td-data-table-row{\n  height:48px; }\n:host.td-data-table-column-row{\n  height:56px; }\n"],
                template: "<ng-content></ng-content>",
            },] },
];
/** @nocollapse */
TdDataTableColumnRowComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
var TdDataTableRowComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function TdDataTableRowComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    Object.defineProperty(TdDataTableRowComponent.prototype, "selected", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selected;
        },
        /**
         * @param {?} selected
         * @return {?}
         */
        set: function (selected) {
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
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ height = 48;
            if (this._elementRef.nativeElement) {
                height = ((this._elementRef.nativeElement)).getBoundingClientRect().height;
            }
            return height;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    TdDataTableRowComponent.prototype.clickListener = function () {
        this.focus();
    };
    /**
     * @return {?}
     */
    TdDataTableRowComponent.prototype.focus = function () {
        this._elementRef.nativeElement.focus();
    };
    return TdDataTableRowComponent;
}());
TdDataTableRowComponent.decorators = [
    { type: core.Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-row]',
                styles: [":host{\n  border-bottom-style:solid;\n  border-bottom-width:1px; }\n:host.td-data-table-row{\n  height:48px; }\n:host.td-data-table-column-row{\n  height:56px; }\n"],
                template: "<ng-content></ng-content>",
            },] },
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
TdDataTableRowComponent.propDecorators = {
    "selected": [{ type: core.Input, args: ['selected',] },],
    "clickListener": [{ type: core.HostListener, args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdDataTableTemplateDirective = /** @class */ (function (_super) {
    __extends(TdDataTableTemplateDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdDataTableTemplateDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdDataTableTemplateDirective;
}(portal.TemplatePortalDirective));
TdDataTableTemplateDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[tdDataTableTemplate]ng-template' },] },
];
/** @nocollapse */
TdDataTableTemplateDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
TdDataTableTemplateDirective.propDecorators = {
    "tdDataTableTemplate": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var TdDataTableSortingOrder = {
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
var TD_VIRTUAL_OFFSET$1 = 2;
/**
 * Constant to set default row height if none is provided
 */
var TD_VIRTUAL_DEFAULT_ROW_HEIGHT = 48;
var TdDataTableBase = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     */
    function TdDataTableBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdDataTableBase;
}());
/* tslint:disable-next-line */
var _TdDataTableMixinBase = common$1.mixinControlValueAccessor(TdDataTableBase, []);
var TdDataTableComponent = /** @class */ (function (_super) {
    __extends(TdDataTableComponent, _super);
    /**
     * @param {?} _document
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _changeDetectorRef
     */
    function TdDataTableComponent(_document, _elementRef, _domSanitizer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._document = _document;
        _this._elementRef = _elementRef;
        _this._domSanitizer = _domSanitizer;
        _this._hostWidth = 0;
        _this._widths = [];
        _this._onResize = new Subject.Subject();
        _this._scrollHorizontalOffset = 0;
        _this._onHorizontalScroll = new Subject.Subject();
        _this._onVerticalScroll = new Subject.Subject();
        _this._rowHeightCache = [];
        _this._totalHeight = 0;
        _this._hostHeight = 0;
        _this._scrollVerticalOffset = 0;
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
        _this.onSortChange = new core.EventEmitter();
        /**
         * rowSelect?: function
         * Event emitted when a row is selected/deselected. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectEvent] implemented object.
         */
        _this.onRowSelect = new core.EventEmitter();
        /**
         * rowClick?: function
         * Event emitted when a row is clicked.
         * Emits an [ITdDataTableRowClickEvent] implemented object.
         */
        _this.onRowClick = new core.EventEmitter();
        /**
         * selectAll?: function
         * Event emitted when all rows are selected/deselected by the all checkbox. [selectable] needs to be enabled.
         * Emits an [ITdDataTableSelectAllEvent] implemented object.
         */
        _this.onSelectAll = new core.EventEmitter();
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
    Object.defineProperty(TdDataTableComponent.prototype, "hostWidth", {
        /**
         * @return {?}
         */
        get: function () {
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
         * @return {?}
         */
        get: function () {
            return this._offsetTransform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "totalHeight", {
        /**
         * Returns the assumed total height of the rows
         * @return {?}
         */
        get: function () {
            return this._totalHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "fromRow", {
        /**
         * Returns the initial row to render in the viewport
         * @return {?}
         */
        get: function () {
            return this._fromRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "toRow", {
        /**
         * Returns the last row to render in the viewport
         * @return {?}
         */
        get: function () {
            return this._toRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columnsLeftScroll", {
        /**
         * Returns scroll position to reposition column headers
         * @return {?}
         */
        get: function () {
            return this._scrollHorizontalOffset * -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "allSelected", {
        /**
         * Returns true if all values are selected.
         * @return {?}
         */
        get: function () {
            return this._allSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "indeterminate", {
        /**
         * Returns true if all values are not deselected
         * and at least one is.
         * @return {?}
         */
        get: function () {
            return this._indeterminate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * data?: {[key: string]: any}[]
         * Sets the data to be rendered as rows.
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
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
        /**
         * @return {?}
         */
        get: function () {
            return this._virtualData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "columns", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            if (this._columns) {
                return this._columns;
            }
            if (this.hasData) {
                this._columns = [];
                // if columns is undefined, use key in [data] rows as name and label for column headers.
                var /** @type {?} */ row = this._data[0];
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
         * @param {?} cols
         * @return {?}
         */
        set: function (cols) {
            this._columns = cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "selectable", {
        /**
         * @return {?}
         */
        get: function () {
            return this._selectable;
        },
        /**
         * selectable?: boolean
         * Enables row selection events, hover and selected row states.
         * Defaults to 'false'
         * @param {?} selectable
         * @return {?}
         */
        set: function (selectable) {
            this._selectable = coercion.coerceBooleanProperty(selectable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "clickable", {
        /**
         * @return {?}
         */
        get: function () {
            return this._clickable;
        },
        /**
         * clickable?: boolean
         * Enables row click events, hover.
         * Defaults to 'false'
         * @param {?} clickable
         * @return {?}
         */
        set: function (clickable) {
            this._clickable = coercion.coerceBooleanProperty(clickable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "multiple", {
        /**
         * @return {?}
         */
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Enables multiple row selection. [selectable] needs to be enabled.
         * Defaults to 'false'
         * @param {?} multiple
         * @return {?}
         */
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortable", {
        /**
         * @return {?}
         */
        get: function () {
            return this._sortable;
        },
        /**
         * sortable?: boolean
         * Enables sorting events, sort icons and active column states.
         * Defaults to 'false'
         * @param {?} sortable
         * @return {?}
         */
        set: function (sortable) {
            this._sortable = coercion.coerceBooleanProperty(sortable);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortBy", {
        /**
         * sortBy?: string
         * Sets the active sort column. [sortable] needs to be enabled.
         * @param {?} columnName
         * @return {?}
         */
        set: function (columnName) {
            if (!columnName) {
                return;
            }
            var /** @type {?} */ column = this.columns.find(function (c) { return c.name === columnName; });
            if (!column) {
                throw new Error('[sortBy] must be a valid column name');
            }
            this._sortBy = column;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "sortByColumn", {
        /**
         * @return {?}
         */
        get: function () {
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
         * @param {?} order
         * @return {?}
         */
        set: function (order) {
            var /** @type {?} */ sortOrder = order ? order.toUpperCase() : 'ASC';
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
        /**
         * @return {?}
         */
        get: function () {
            return this._sortOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableComponent.prototype, "hasData", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data && this._data.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize observable for resize and scroll events
     * @return {?}
     */
    TdDataTableComponent.prototype.ngOnInit = function () {
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
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterContentInit = function () {
        for (var /** @type {?} */ i = 0; i < this._templates.toArray().length; i++) {
            this._templateMap.set(this._templates.toArray()[i].tdDataTableTemplate, this._templates.toArray()[i].templateRef);
        }
    };
    /**
     * Checks hosts native elements widths to see if it has changed (resize check)
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterContentChecked = function () {
        if (this._elementRef.nativeElement) {
            var /** @type {?} */ newHostWidth = this._elementRef.nativeElement.getBoundingClientRect().width;
            // if the width has changed then we throw a resize event.
            if (this._hostWidth !== newHostWidth) {
                this._hostWidth = newHostWidth;
                this._onResize.next();
            }
        }
        if (this._scrollableDiv.nativeElement) {
            var /** @type {?} */ newHostHeight = this._scrollableDiv.nativeElement.getBoundingClientRect().height;
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
     * @return {?}
     */
    TdDataTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rowsChangedSubs = this._rows.changes.pipe(debounceTime.debounceTime(0)).subscribe(function () {
            _this._onResize.next();
        });
        this._calculateVirtualRows();
    };
    /**
     * Unsubscribes observables when data table is destroyed
     * @return {?}
     */
    TdDataTableComponent.prototype.ngOnDestroy = function () {
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
    };
    /**
     * Method that gets executed every time there is a scroll event
     * Calls the scroll observable
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.handleScroll = function (event) {
        var /** @type {?} */ element = ((event.target));
        if (element) {
            var /** @type {?} */ horizontalScroll = element.scrollLeft;
            if (this._scrollHorizontalOffset !== horizontalScroll) {
                this._onHorizontalScroll.next(horizontalScroll);
            }
            var /** @type {?} */ verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._onVerticalScroll.next(verticalScroll);
            }
        }
    };
    /**
     * Returns the width needed for the columns via index
     * @param {?} index
     * @return {?}
     */
    TdDataTableComponent.prototype.getColumnWidth = function (index) {
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
    TdDataTableComponent.prototype.getCellValue = function (column, value) {
        if (column.nested === undefined || column.nested) {
            return this._getNestedValue(column.name, value);
        }
        return value[column.name];
    };
    /**
     * Getter method for template references
     * @param {?} name
     * @return {?}
     */
    TdDataTableComponent.prototype.getTemplateRef = function (name) {
        return this._templateMap.get(name);
    };
    /**
     * Clears model (ngModel) of component by removing all values in array.
     * @return {?}
     */
    TdDataTableComponent.prototype.clearModel = function () {
        this.value.splice(0, this.value.length);
    };
    /**
     * Refreshes data table and rerenders [data] and [columns]
     * @return {?}
     */
    TdDataTableComponent.prototype.refresh = function () {
        this._calculateVirtualRows();
        this._calculateWidths();
        this._calculateCheckboxState();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Selects or clears all rows depending on 'checked' value.
     * @param {?} checked
     * @return {?}
     */
    TdDataTableComponent.prototype.selectAll = function (checked) {
        var _this = this;
        var /** @type {?} */ toggledRows = [];
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
                    var /** @type {?} */ modelRow = _this.value.filter(function (val) {
                        return _this.compareWith(row, val);
                    })[0];
                    var /** @type {?} */ index = _this.value.indexOf(modelRow);
                    if (index > -1) {
                        _this.value.splice(index, 1);
                    }
                }
            });
            this._allSelected = false;
            this._indeterminate = false;
        }
        this.onSelectAll.emit({ rows: toggledRows, selected: checked });
    };
    /**
     * Checks if row is selected
     * @param {?} row
     * @return {?}
     */
    TdDataTableComponent.prototype.isRowSelected = function (row) {
        var _this = this;
        // compare items by [compareWith] function
        return this.value ? this.value.filter(function (val) {
            return _this.compareWith(row, val);
        }).length > 0 : false;
    };
    /**
     * Selects or clears a row depending on 'checked' value if the row 'isSelectable'
     * handles cntrl clicks and shift clicks for multi-select
     * @param {?} row
     * @param {?} event
     * @param {?} currentSelected
     * @return {?}
     */
    TdDataTableComponent.prototype.select = function (row, event, currentSelected) {
        if (this.selectable) {
            this.blockEvent(event);
            // Check to see if Shift key is selected and need to select everything in between
            var /** @type {?} */ mouseEvent = (event);
            if (this.multiple && mouseEvent && mouseEvent.shiftKey && this._lastSelectedIndex > -1) {
                var /** @type {?} */ firstIndex = currentSelected;
                var /** @type {?} */ lastIndex = this._lastSelectedIndex;
                if (currentSelected > this._lastSelectedIndex) {
                    firstIndex = this._lastSelectedIndex;
                    lastIndex = currentSelected;
                }
                // if clicking a checkbox behind the initial check, then toggle all selections expect the initial checkbox
                // else the checkboxes clicked are all after the initial one
                if ((this._firstSelectedIndex >= currentSelected && this._lastSelectedIndex > this._firstSelectedIndex) ||
                    (this._firstSelectedIndex <= currentSelected && this._lastSelectedIndex < this._firstSelectedIndex)) {
                    for (var /** @type {?} */ i = firstIndex; i <= lastIndex; i++) {
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
                    for (var /** @type {?} */ i = firstIndex; i <= lastIndex; i++) {
                        var /** @type {?} */ rowSelected = this.isRowSelected(this._data[i]);
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
     * @return {?}
     */
    TdDataTableComponent.prototype.disableTextSelection = function () {
        if (this._document) {
            this._document.onselectstart = function () {
                return false;
            };
        }
    };
    /**
     * Resets the original onselectstart method.
     * @return {?}
     */
    TdDataTableComponent.prototype.enableTextSelection = function () {
        if (this._document) {
            this._document.onselectstart = undefined;
        }
    };
    /**
     * emits the onRowClickEvent when a row is clicked
     * if clickable is true and selectable is false then select the row
     * @param {?} row
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.handleRowClick = function (row, index, event) {
        if (this.clickable) {
            // ignoring linting rules here because attribute it actually null or not there
            // can't check for undefined
            var /** @type {?} */ srcElement = event.srcElement || event.currentTarget;
            /* tslint:disable-next-line */
            if (srcElement.getAttribute('stopRowClick') === null) {
                this.onRowClick.emit({
                    row: row,
                    index: index,
                });
            }
        }
    };
    /**
     * Method handle for sort click event in column headers.
     * @param {?} column
     * @return {?}
     */
    TdDataTableComponent.prototype.handleSort = function (column) {
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
     * @param {?} event
     * @param {?} row
     * @param {?} index
     * @return {?}
     */
    TdDataTableComponent.prototype._rowKeyup = function (event, row, index) {
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
        }
    };
    /**
     * Method to prevent the default events
     * @param {?} event
     * @return {?}
     */
    TdDataTableComponent.prototype.blockEvent = function (event) {
        event.preventDefault();
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._getNestedValue = function (name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            var /** @type {?} */ splitName = name.split(/\.(.+)/, 2);
            return this._getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    };
    /**
     * Does the actual Row Selection
     * @param {?} row
     * @param {?} rowIndex
     * @return {?}
     */
    TdDataTableComponent.prototype._doSelection = function (row, rowIndex) {
        var _this = this;
        var /** @type {?} */ wasSelected = this.isRowSelected(row);
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
            var /** @type {?} */ index = this.value.indexOf(row);
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
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateCheckboxState = function () {
        var _this = this;
        if (this._data) {
            this._allSelected = typeof this._data.find(function (d) { return !_this.isRowSelected(d); }) === 'undefined';
            this._indeterminate = false;
            try {
                for (var _a = __values(this._data), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var row = _b.value;
                    if (!this.isRowSelected(row)) {
                        continue;
                    }
                    this._indeterminate = true;
                    break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        var e_1, _c;
    };
    /**
     * Calculates the widths for columns and cells depending on content
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidths = function () {
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
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidhts = function () {
        var _this = this;
        var /** @type {?} */ fixedTotalWidth = 0;
        // get the number of total columns that have flexible widths (not fixed or hidden)
        var /** @type {?} */ flexibleWidths = this._widths.filter(function (width, index) {
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
        var /** @type {?} */ recalculateHostWidth = 0;
        if (fixedTotalWidth < this.hostWidth) {
            recalculateHostWidth = this.hostWidth - fixedTotalWidth;
        }
        // if we have flexible columns and pixels to spare on them
        // we try and spread the pixels across them
        if (flexibleWidths && recalculateHostWidth) {
            var /** @type {?} */ newValue_1 = Math.floor(recalculateHostWidth / flexibleWidths);
            var /** @type {?} */ adjustedNumber_1 = 0;
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
            var /** @type {?} */ newFlexibleWidths = this._widths.filter(function (width) {
                return !width.limit && !width.max;
            }).length;
            if (newFlexibleWidths !== adjustedNumber_1 && newFlexibleWidths !== flexibleWidths) {
                this._adjustColumnWidhts();
            }
        }
    };
    /**
     * Adjusts a single column to see if it can be recalculated
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    TdDataTableComponent.prototype._adjustColumnWidth = function (index, value) {
        this._widths[index] = {
            value: value,
            index: index,
            limit: false,
            min: false,
            max: false,
        };
        // flag to see if we need to skip the min width projection
        // depending if a width or min width has been provided
        var /** @type {?} */ skipMinWidthProjection = false;
        if (this.columns[index]) {
            // if the provided width has min/max, then we check to see if we need to set it
            if (typeof this.columns[index].width === 'object') {
                var /** @type {?} */ widthOpts = (this.columns[index].width);
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
    };
    /**
     * Generic method to calculate column width
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateWidth = function () {
        var /** @type {?} */ renderedColumns = this.columns.filter(function (col) { return !col.hidden; });
        return Math.floor(this.hostWidth / renderedColumns.length);
    };
    /**
     * Method to calculate the rows to be rendered in the viewport
     * @return {?}
     */
    TdDataTableComponent.prototype._calculateVirtualRows = function () {
        var _this = this;
        var /** @type {?} */ scrolledRows = 0;
        if (this._data) {
            this._totalHeight = 0;
            var /** @type {?} */ rowHeightSum_1 = 0;
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
            var /** @type {?} */ fromRow = scrolledRows - TD_VIRTUAL_OFFSET$1;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            var /** @type {?} */ hostHeight = this._hostHeight;
            var /** @type {?} */ index = 0;
            // calculate how many rows can fit in the viewport
            while (hostHeight > 0) {
                hostHeight -= this._rowHeightCache[this.fromRow + index];
                index++;
            }
            // set the last row to be rendered taking into account the row offset
            var /** @type {?} */ range = (index - 1) + (TD_VIRTUAL_OFFSET$1 * 2);
            var /** @type {?} */ toRow = range + this.fromRow;
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
        var /** @type {?} */ offset = 0;
        // calculate the proper offset depending on how many rows have been scrolled
        if (scrolledRows > TD_VIRTUAL_OFFSET$1) {
            for (var /** @type {?} */ index = 0; index < this.fromRow; index++) {
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
    return TdDataTableComponent;
}(_TdDataTableMixinBase));
TdDataTableComponent.decorators = [
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdDataTableComponent; }),
                        multi: true,
                    }],
                selector: 'td-data-table',
                styles: [":host{\n  display:block;\n  overflow:hidden; }\n  :host .td-data-table-scrollable{\n    position:relative;\n    overflow:auto;\n    height:calc(100% - 56px); }\ntable.td-data-table{\n  width:auto !important; }\n  table.td-data-table.mat-selectable tbody > tr.td-data-table-row{\n    -webkit-transition:background-color 0.2s;\n    transition:background-color 0.2s; }\n  table.td-data-table.mat-selectable .td-data-table-column:first-child > .td-data-table-column-content-wrapper,\n  table.td-data-table.mat-selectable th.td-data-table-column:first-child > .td-data-table-column-content-wrapper,\n  table.td-data-table.mat-selectable td.td-data-table-cell:first-child > .td-data-table-column-content-wrapper{\n    width:18px;\n    min-width:18px;\n    padding:0 24px; }\n  table.td-data-table.mat-selectable .td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper,\n  table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper,\n  table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) > .td-data-table-column-content-wrapper{\n    padding-left:0; }\n  [dir='rtl'] table.td-data-table.mat-selectable .td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, [dir='rtl']\n  table.td-data-table.mat-selectable th.td-data-table-column:nth-child(2) > .td-data-table-column-content-wrapper, [dir='rtl']\n  table.td-data-table.mat-selectable td.td-data-table-cell:nth-child(2) > .td-data-table-column-content-wrapper{\n    padding-right:0;\n    padding-left:28px; }\n  table.td-data-table td.mat-checkbox-cell,\n  table.td-data-table th.mat-checkbox-column{\n    min-width:42px;\n    width:42px;\n    font-size:0 !important; }\n    table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox,\n    table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox{\n      width:18px;\n      height:18px; }\n      ::ng-deep table.td-data-table td.mat-checkbox-cell mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after, ::ng-deep\n      table.td-data-table th.mat-checkbox-column mat-pseudo-checkbox.mat-pseudo-checkbox-checked::after{\n        width:11px !important;\n        height:4px !important; }\n    table.td-data-table td.mat-checkbox-cell mat-checkbox ::ng-deep .mat-checkbox-inner-container,\n    table.td-data-table th.mat-checkbox-column mat-checkbox ::ng-deep .mat-checkbox-inner-container{\n      width:18px;\n      height:18px;\n      margin:0; }\n"],
                template: "<table td-data-table\n        [style.left.px]=\"columnsLeftScroll\"\n        [class.mat-selectable]=\"selectable\">\n  <thead class=\"td-data-table-head\">\n    <tr td-data-table-column-row>\n      <th td-data-table-column class=\"mat-checkbox-column\" *ngIf=\"selectable\">\n        <mat-checkbox\n          #checkBoxAll\n          *ngIf=\"multiple\"\n          [disabled]=\"!hasData\"\n          [indeterminate]=\"indeterminate && !allSelected && hasData\"\n          [checked]=\"allSelected && hasData\"\n          (click)=\"blockEvent($event); selectAll(!checkBoxAll.checked)\"\n          (keyup.enter)=\"selectAll(!checkBoxAll.checked)\"\n          (keyup.space)=\"selectAll(!checkBoxAll.checked)\"\n          (keydown.space)=\"blockEvent($event)\">\n        </mat-checkbox>\n      </th>\n      <th td-data-table-column\n          #columnElement\n          *ngFor=\"let column of columns; let i = index;\"\n          [style.min-width.px]=\"getColumnWidth(i)\"\n          [style.max-width.px]=\"getColumnWidth(i)\"\n          [name]=\"column.name\"\n          [numeric]=\"column.numeric\"\n          [active]=\"(column.sortable || sortable) && column === sortByColumn\"\n          [sortable]=\"column.sortable || (sortable && column.sortable !== false)\"\n          [sortOrder]=\"sortOrderEnum\"\n          [hidden]=\"column.hidden\"\n          (sortChange)=\"handleSort(column)\">\n          <span [matTooltip]=\"column.tooltip\">{{column.label}}</span>\n      </th>\n    </tr>\n  </thead>\n</table>\n<div #scrollableDiv class=\"td-data-table-scrollable\"\n      (scroll)=\"handleScroll($event)\">\n  <div [style.height.px]=\"totalHeight\"></div>\n  <table td-data-table\n          [style.transform]=\"offsetTransform\"\n          [style.position]=\"'absolute'\"\n          [class.mat-selectable]=\"selectable\"\n          [class.mat-clickable]=\"clickable\">\n    <tbody class=\"td-data-table-body\">\n      <tr td-data-table-row\n          #dtRow\n          [tabIndex]=\"selectable ? 0 : -1\"\n          [selected]=\"(clickable || selectable) && isRowSelected(row)\"\n          *ngFor=\"let row of virtualData; let rowIndex = index\"\n          (click)=\"handleRowClick(row, fromRow + rowIndex, $event)\"\n          (keyup)=\"selectable && _rowKeyup($event, row, rowIndex)\"\n          (keydown.space)=\"blockEvent($event)\"\n          (keydown.shift.space)=\"blockEvent($event)\"\n          (keydown.shift)=\"disableTextSelection()\"\n          (keyup.shift)=\"enableTextSelection()\">\n        <td td-data-table-cell class=\"mat-checkbox-cell\" *ngIf=\"selectable\">\n          <mat-pseudo-checkbox\n            [state]=\"dtRow.selected ? 'checked' : 'unchecked'\"\n            (mousedown)=\"disableTextSelection()\"\n            (mouseup)=\"enableTextSelection()\"\n            stopRowClick\n            (click)=\"select(row, $event, fromRow + rowIndex)\">\n          </mat-pseudo-checkbox>\n        </td>\n        <td td-data-table-cell\n            [numeric]=\"column.numeric\"\n            [hidden]=\"column.hidden\"\n            *ngFor=\"let column of columns; let i = index\"\n            [style.min-width.px]=\"getColumnWidth(i)\"\n            [style.max-width.px]=\"getColumnWidth(i)\">\n          <span *ngIf=\"!getTemplateRef(column.name)\">{{column.format ? column.format(getCellValue(column, row)) : getCellValue(column, row)}}</span>\n          <ng-template\n            *ngIf=\"getTemplateRef(column.name)\"\n            [ngTemplateOutlet]=\"getTemplateRef(column.name)\"\n            [ngTemplateOutletContext]=\"{ value: getCellValue(column, row), row: row, column: column.name }\">\n          </ng-template>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<ng-content></ng-content>\n",
                inputs: ['value'],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdDataTableComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
    { type: core.ElementRef, },
    { type: platformBrowser.DomSanitizer, },
    { type: core.ChangeDetectorRef, },
]; };
TdDataTableComponent.propDecorators = {
    "_templates": [{ type: core.ContentChildren, args: [TdDataTableTemplateDirective,] },],
    "_scrollableDiv": [{ type: core.ViewChild, args: ['scrollableDiv',] },],
    "_colElements": [{ type: core.ViewChildren, args: ['columnElement',] },],
    "_rows": [{ type: core.ViewChildren, args: [TdDataTableRowComponent,] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "columns": [{ type: core.Input, args: ['columns',] },],
    "selectable": [{ type: core.Input, args: ['selectable',] },],
    "clickable": [{ type: core.Input, args: ['clickable',] },],
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "sortable": [{ type: core.Input, args: ['sortable',] },],
    "sortBy": [{ type: core.Input, args: ['sortBy',] },],
    "sortOrder": [{ type: core.Input, args: ['sortOrder',] },],
    "onSortChange": [{ type: core.Output, args: ['sortChange',] },],
    "onRowSelect": [{ type: core.Output, args: ['rowSelect',] },],
    "onRowClick": [{ type: core.Output, args: ['rowClick',] },],
    "onSelectAll": [{ type: core.Output, args: ['selectAll',] },],
    "compareWith": [{ type: core.Input, args: ['compareWith',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var TdDataTableColumnComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
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
        this.onSortChange = new core.EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    Object.defineProperty(TdDataTableColumnComponent.prototype, "projectedWidth", {
        /**
         * @return {?}
         */
        get: function () {
            if (this._columnContent && this._columnContent.nativeElement) {
                return ((this._columnContent.nativeElement)).getBoundingClientRect().width;
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
         * @param {?} order
         * @return {?}
         */
        set: function (order) {
            var /** @type {?} */ sortOrder = order ? order.toUpperCase() : 'ASC';
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
        /**
         * @return {?}
         */
        get: function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bingSortable", {
        /**
         * @return {?}
         */
        get: function () {
            return this.sortable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdDataTableColumnComponent.prototype, "bindNumeric", {
        /**
         * @return {?}
         */
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    TdDataTableColumnComponent.prototype.handleClick = function () {
        if (this.sortable) {
            this.onSortChange.emit({ name: this.name, order: this._sortOrder });
        }
    };
    /**
     * @return {?}
     */
    TdDataTableColumnComponent.prototype.isAscending = function () {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    };
    /**
     * @return {?}
     */
    TdDataTableColumnComponent.prototype.isDescending = function () {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    };
    return TdDataTableColumnComponent;
}());
TdDataTableColumnComponent.decorators = [
    { type: core.Component, args: [{
                /* tslint:disable-next-line */
                selector: 'th[td-data-table-column]',
                styles: [":host{\n  white-space:nowrap;\n  position:relative;\n  padding:0;\n  vertical-align:middle;\n  text-align:left; }\n  :host > .td-data-table-heading{\n    padding:0 28px; }\n  :host:first-child > .td-data-table-heading{\n    padding-left:24px;\n    padding-right:initial; }\n    html[dir=rtl] :host:first-child > .td-data-table-heading{\n      padding-left:initial;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:first-child > .td-data-table-heading{\n      padding-left:initial;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:first-child > .td-data-table-heading{\n      padding-left:initial;\n      unicode-bidi:embed; }\n    :host:first-child > .td-data-table-heading bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:first-child > .td-data-table-heading bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n    html[dir=rtl] :host:first-child > .td-data-table-heading{\n      padding-right:24px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:first-child > .td-data-table-heading{\n      padding-right:24px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:first-child > .td-data-table-heading{\n      padding-right:24px;\n      unicode-bidi:embed; }\n    :host:first-child > .td-data-table-heading bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:first-child > .td-data-table-heading bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n  :host:last-child > .td-data-table-heading{\n    padding-left:28px;\n    padding-right:24px; }\n    html[dir=rtl] :host:last-child > .td-data-table-heading{\n      padding-left:24px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:last-child > .td-data-table-heading{\n      padding-left:24px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:last-child > .td-data-table-heading{\n      padding-left:24px;\n      unicode-bidi:embed; }\n    :host:last-child > .td-data-table-heading bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:last-child > .td-data-table-heading bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n    html[dir=rtl] :host:last-child > .td-data-table-heading{\n      padding-right:28px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:last-child > .td-data-table-heading{\n      padding-right:28px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:last-child > .td-data-table-heading{\n      padding-right:28px;\n      unicode-bidi:embed; }\n    :host:last-child > .td-data-table-heading bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:last-child > .td-data-table-heading bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n  :host mat-icon{\n    height:16px;\n    width:16px;\n    font-size:16px !important;\n    line-height:16px !important; }\n    :host mat-icon.td-data-table-sort-icon{\n      opacity:0;\n      -webkit-transition:-webkit-transform 0.25s;\n      transition:-webkit-transform 0.25s;\n      transition:transform 0.25s;\n      transition:transform 0.25s, -webkit-transform 0.25s;\n      position:absolute;\n      top:0; }\n      :host mat-icon.td-data-table-sort-icon.mat-asc{\n        -webkit-transform:rotate(0deg);\n                transform:rotate(0deg); }\n      :host mat-icon.td-data-table-sort-icon.mat-desc{\n        -webkit-transform:rotate(180deg);\n                transform:rotate(180deg); }\n  :host:hover.mat-sortable mat-icon.td-data-table-sort-icon,\n  :host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon{\n    opacity:1; }\n  html[dir=rtl] :host{\n    text-align:right;\n    unicode-bidi:embed; }\n  body[dir=rtl] :host{\n    text-align:right;\n    unicode-bidi:embed; }\n  [dir=rtl] :host{\n    text-align:right;\n    unicode-bidi:embed; }\n  :host bdo[dir=rtl]{\n    direction:rtl;\n    unicode-bidi:bidi-override; }\n  :host bdo[dir=ltr]{\n    direction:ltr;\n    unicode-bidi:bidi-override; }\n  :host > *{\n    vertical-align:middle; }\n  :host.mat-clickable{\n    cursor:pointer; }\n    :host.mat-clickable:focus{\n      outline:none; }\n  :host .td-data-table-heading{\n    display:inline-block;\n    position:relative; }\n  :host.mat-numeric{\n    text-align:right; }\n    html[dir=rtl] :host.mat-numeric{\n      text-align:left;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host.mat-numeric{\n      text-align:left;\n      unicode-bidi:embed; }\n    [dir=rtl] :host.mat-numeric{\n      text-align:left;\n      unicode-bidi:embed; }\n    :host.mat-numeric bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host.mat-numeric bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n    :host.mat-numeric mat-icon.td-data-table-sort-icon{\n      margin-left:-22px;\n      margin-right:initial; }\n      html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{\n        margin-left:initial;\n        unicode-bidi:embed; }\n      body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{\n        margin-left:initial;\n        unicode-bidi:embed; }\n      [dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{\n        margin-left:initial;\n        unicode-bidi:embed; }\n      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{\n        direction:rtl;\n        unicode-bidi:bidi-override; }\n      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{\n        direction:ltr;\n        unicode-bidi:bidi-override; }\n      html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{\n        margin-right:-22px;\n        unicode-bidi:embed; }\n      body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{\n        margin-right:-22px;\n        unicode-bidi:embed; }\n      [dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{\n        margin-right:-22px;\n        unicode-bidi:embed; }\n      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{\n        direction:rtl;\n        unicode-bidi:bidi-override; }\n      :host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{\n        direction:ltr;\n        unicode-bidi:bidi-override; }\n  :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n    margin-left:6px;\n    margin-right:initial; }\n    html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n      margin-left:initial;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n      margin-left:initial;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n      margin-left:initial;\n      unicode-bidi:embed; }\n    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n    html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n      margin-right:6px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n      margin-right:6px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{\n      margin-right:6px;\n      unicode-bidi:embed; }\n    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n"],
                template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon\n    class=\"td-data-table-sort-icon\"\n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"(!(active) || isAscending())\"\n    [class.mat-desc]=\"(active && isDescending())\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon\n    class=\"td-data-table-sort-icon\"\n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"(!(active) || isAscending())\"\n    [class.mat-desc]=\"(active && isDescending())\">\n    arrow_upward\n  </mat-icon>\n</span>\n",
            },] },
];
/** @nocollapse */
TdDataTableColumnComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
TdDataTableColumnComponent.propDecorators = {
    "_columnContent": [{ type: core.ViewChild, args: ['columnContent', { read: core.ElementRef },] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "sortable": [{ type: core.Input, args: ['sortable',] },],
    "active": [{ type: core.Input, args: ['active',] },],
    "numeric": [{ type: core.Input, args: ['numeric',] },],
    "sortOrder": [{ type: core.Input, args: ['sortOrder',] },],
    "onSortChange": [{ type: core.Output, args: ['sortChange',] },],
    "bindClickable": [{ type: core.HostBinding, args: ['class.mat-clickable',] },],
    "bingSortable": [{ type: core.HostBinding, args: ['class.mat-sortable',] },],
    "bindActive": [{ type: core.HostBinding, args: ['class.mat-active',] },],
    "bindNumeric": [{ type: core.HostBinding, args: ['class.mat-numeric',] },],
    "handleClick": [{ type: core.HostListener, args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdDataTableCellComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
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
    Object.defineProperty(TdDataTableCellComponent.prototype, "bindNumeric", {
        /**
         * @return {?}
         */
        get: function () {
            return this.numeric;
        },
        enumerable: true,
        configurable: true
    });
    return TdDataTableCellComponent;
}());
TdDataTableCellComponent.decorators = [
    { type: core.Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td[td-data-table-cell]',
                styles: [":host{\n  vertical-align:middle;\n  text-align:left;\n  padding:0; }\n  html[dir=rtl] :host{\n    text-align:right;\n    unicode-bidi:embed; }\n  body[dir=rtl] :host{\n    text-align:right;\n    unicode-bidi:embed; }\n  [dir=rtl] :host{\n    text-align:right;\n    unicode-bidi:embed; }\n  :host bdo[dir=rtl]{\n    direction:rtl;\n    unicode-bidi:bidi-override; }\n  :host bdo[dir=ltr]{\n    direction:ltr;\n    unicode-bidi:bidi-override; }\n  :host > .td-data-table-cell-content-wrapper{\n    padding:0 28px;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    max-width:100%;\n    -webkit-box-pack:start;\n        -ms-flex-pack:start;\n            justify-content:start; }\n    :host > .td-data-table-cell-content-wrapper.td-data-table-cell-numeric{\n      -webkit-box-pack:end;\n          -ms-flex-pack:end;\n              justify-content:flex-end; }\n  :host:first-child > .td-data-table-cell-content-wrapper{\n    padding-left:24px;\n    padding-right:initial; }\n    html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{\n      padding-left:initial;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{\n      padding-left:initial;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{\n      padding-left:initial;\n      unicode-bidi:embed; }\n    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n    html[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{\n      padding-right:24px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{\n      padding-right:24px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:first-child > .td-data-table-cell-content-wrapper{\n      padding-right:24px;\n      unicode-bidi:embed; }\n    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:first-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n  :host:last-child > .td-data-table-cell-content-wrapper{\n    padding-left:28px;\n    padding-right:24px; }\n    html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{\n      padding-left:24px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{\n      padding-left:24px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{\n      padding-left:24px;\n      unicode-bidi:embed; }\n    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n    html[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{\n      padding-right:28px;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{\n      padding-right:28px;\n      unicode-bidi:embed; }\n    [dir=rtl] :host:last-child > .td-data-table-cell-content-wrapper{\n      padding-right:28px;\n      unicode-bidi:embed; }\n    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host:last-child > .td-data-table-cell-content-wrapper bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n  :host > *{\n    vertical-align:middle; }\n  :host.mat-clickable{\n    cursor:pointer; }\n    :host.mat-clickable:focus{\n      outline:none; }\n  :host.mat-numeric{\n    text-align:right; }\n    html[dir=rtl] :host.mat-numeric{\n      text-align:left;\n      unicode-bidi:embed; }\n    body[dir=rtl] :host.mat-numeric{\n      text-align:left;\n      unicode-bidi:embed; }\n    [dir=rtl] :host.mat-numeric{\n      text-align:left;\n      unicode-bidi:embed; }\n    :host.mat-numeric bdo[dir=rtl]{\n      direction:rtl;\n      unicode-bidi:bidi-override; }\n    :host.mat-numeric bdo[dir=ltr]{\n      direction:ltr;\n      unicode-bidi:bidi-override; }\n"],
                template: "<div class=\"td-data-table-cell-content-wrapper\"\n     [class.td-data-table-cell-numeric]=\"numeric\">\n  <ng-content></ng-content>\n</div>",
            },] },
];
/** @nocollapse */
TdDataTableCellComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
TdDataTableCellComponent.propDecorators = {
    "numeric": [{ type: core.Input, args: ['numeric',] },],
    "bindNumeric": [{ type: core.HostBinding, args: ['class.mat-numeric',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdDataTableTableComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    function TdDataTableTableComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table');
    }
    return TdDataTableTableComponent;
}());
TdDataTableTableComponent.decorators = [
    { type: core.Component, args: [{
                /* tslint:disable-next-line */
                selector: 'table[td-data-table]',
                styles: [":host{\n  width:100%;\n  position:relative;\n  border-spacing:0;\n  overflow:hidden;\n  border-collapse:collapse; }\n"],
                template: "<ng-content></ng-content>",
            },] },
];
/** @nocollapse */
TdDataTableTableComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    TdDataTableService.prototype.filterData = function (data, searchTerm, ignoreCase, excludedColumns) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        var /** @type {?} */ filter$$1 = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter$$1) {
            data = data.filter(function (item) {
                var /** @type {?} */ res = Object.keys(item).find(function (key) {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        var /** @type {?} */ preItemValue = ('' + item[key]);
                        var /** @type {?} */ itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter$$1) > -1;
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
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    TdDataTableService.prototype.sortData = function (data, sortBy, sortOrder) {
        if (sortOrder === void 0) { sortOrder = TdDataTableSortingOrder.Ascending; }
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort(function (a, b) {
                var /** @type {?} */ compA = a[sortBy];
                var /** @type {?} */ compB = b[sortBy];
                var /** @type {?} */ direction = 0;
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
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    TdDataTableService.prototype.pageData = function (data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    };
    return TdDataTableService;
}());
TdDataTableService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TdDataTableService.ctorParameters = function () { return []; };
/**
 * @param {?} parent
 * @return {?}
 */
function DATA_TABLE_PROVIDER_FACTORY(parent) {
    return parent || new TdDataTableService();
}
var DATA_TABLE_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdDataTableService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdDataTableService]],
    useFactory: DATA_TABLE_PROVIDER_FACTORY,
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    return CovalentDataTableModule;
}());
CovalentDataTableModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    checkbox.MatCheckboxModule,
                    tooltip.MatTooltipModule,
                    icon.MatIconModule,
                    core$1.MatPseudoCheckboxModule,
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
CovalentDataTableModule.ctorParameters = function () { return []; };
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
var TdDialogTitleDirective = /** @class */ (function () {
    function TdDialogTitleDirective() {
    }
    return TdDialogTitleDirective;
}());
TdDialogTitleDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'td-dialog-title' },] },
];
/** @nocollapse */
TdDialogTitleDirective.ctorParameters = function () { return []; };
var TdDialogContentDirective = /** @class */ (function () {
    function TdDialogContentDirective() {
    }
    return TdDialogContentDirective;
}());
TdDialogContentDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'td-dialog-content' },] },
];
/** @nocollapse */
TdDialogContentDirective.ctorParameters = function () { return []; };
var TdDialogActionsDirective = /** @class */ (function () {
    function TdDialogActionsDirective() {
    }
    return TdDialogActionsDirective;
}());
TdDialogActionsDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'td-dialog-actions' },] },
];
/** @nocollapse */
TdDialogActionsDirective.ctorParameters = function () { return []; };
var TdDialogComponent = /** @class */ (function () {
    function TdDialogComponent() {
    }
    /**
     * @return {?}
     */
    TdDialogComponent.prototype.ngAfterContentInit = function () {
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
    return TdDialogComponent;
}());
TdDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-dialog',
                template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>",
                styles: [".td-dialog-title{\n  margin-top:0;\n  margin-bottom:20px; }\n.td-dialog-content{\n  margin-bottom:16px; }\n.td-dialog-actions{\n  position:relative;\n  top:16px;\n  left:16px; }\n  ::ng-deep [dir='rtl'] .td-dialog-actions{\n    right:16px;\n    left:auto; }\n:host{\n  display:block; }\n  :host .td-dialog-actions{\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex; }\n    :host .td-dialog-actions .td-dialog-spacer{\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1; }\n    :host .td-dialog-actions ::ng-deep button{\n      text-transform:uppercase;\n      margin-left:8px;\n      padding-left:8px;\n      padding-right:8px;\n      min-width:64px; }\n      [dir='rtl'] :host .td-dialog-actions ::ng-deep button{\n        margin-right:8px;\n        margin-left:inherit; }\n"],
            },] },
];
/** @nocollapse */
TdDialogComponent.ctorParameters = function () { return []; };
TdDialogComponent.propDecorators = {
    "dialogTitle": [{ type: core.ContentChildren, args: [TdDialogTitleDirective,] },],
    "dialogContent": [{ type: core.ContentChildren, args: [TdDialogContentDirective,] },],
    "dialogActions": [{ type: core.ContentChildren, args: [TdDialogActionsDirective,] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdAlertDialogComponent = /** @class */ (function () {
    /**
     * @param {?} _dialogRef
     */
    function TdAlertDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.closeButton = 'CLOSE';
    }
    /**
     * @return {?}
     */
    TdAlertDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    return TdAlertDialogComponent;
}());
TdAlertDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-alert-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button color=\"accent\" (click)=\"close()\">{{closeButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-message{\n  word-break:break-word; }\n"],
            },] },
];
/** @nocollapse */
TdAlertDialogComponent.ctorParameters = function () { return [
    { type: dialog.MatDialogRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdConfirmDialogComponent = /** @class */ (function () {
    /**
     * @param {?} _dialogRef
     */
    function TdConfirmDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(false);
    };
    /**
     * @return {?}
     */
    TdConfirmDialogComponent.prototype.accept = function () {
        this._dialogRef.close(true);
    };
    return TdConfirmDialogComponent;
}());
TdConfirmDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-confirm-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn\n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-message{\n  word-break:break-word; }\n"],
            },] },
];
/** @nocollapse */
TdConfirmDialogComponent.ctorParameters = function () { return [
    { type: dialog.MatDialogRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdPromptDialogComponent = /** @class */ (function () {
    /**
     * @param {?} _dialogRef
     */
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            ((_this._input.nativeElement)).focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    TdPromptDialogComponent.prototype.handleInputFocus = function () {
        ((this._input.nativeElement)).select();
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.cancel = function () {
        this._dialogRef.close(undefined);
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.accept = function () {
        this._dialogRef.close(this.value);
    };
    return TdPromptDialogComponent;
}());
TdPromptDialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-prompt-dialog',
                template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn\n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                styles: [".td-dialog-input-wrapper{\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex; }\n  .td-dialog-input-wrapper .td-dialog-input{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box; }\n.td-dialog-message{\n  word-break:break-word; }\n"],
            },] },
];
/** @nocollapse */
TdPromptDialogComponent.ctorParameters = function () { return [
    { type: dialog.MatDialogRef, },
]; };
TdPromptDialogComponent.propDecorators = {
    "_input": [{ type: core.ViewChild, args: ['input',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
var TdDialogService = /** @class */ (function () {
    /**
     * @param {?} _dialogService
     */
    function TdDialogService(_dialogService) {
        this._dialogService = _dialogService;
    }
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
    TdDialogService.prototype.open = function (component, config) {
        return this._dialogService.open(component, config);
    };
    /**
     * Wrapper function over the closeAll() method in MatDialog.
     * Closes all of the currently-open dialogs.
     * @return {?}
     */
    TdDialogService.prototype.closeAll = function () {
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openAlert = function (config) {
        var /** @type {?} */ dialogConfig = this._createConfig(config);
        var /** @type {?} */ dialogRef = this._dialogService.open(TdAlertDialogComponent, dialogConfig);
        var /** @type {?} */ alertDialogComponent = dialogRef.componentInstance;
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openConfirm = function (config) {
        var /** @type {?} */ dialogConfig = this._createConfig(config);
        var /** @type {?} */ dialogRef = this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
        var /** @type {?} */ confirmDialogComponent = dialogRef.componentInstance;
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
     * @param {?} config
     * @return {?}
     */
    TdDialogService.prototype.openPrompt = function (config) {
        var /** @type {?} */ dialogConfig = this._createConfig(config);
        var /** @type {?} */ dialogRef = this._dialogService.open(TdPromptDialogComponent, dialogConfig);
        var /** @type {?} */ promptDialogComponent = dialogRef.componentInstance;
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
    TdDialogService.prototype._createConfig = function (config) {
        var /** @type {?} */ dialogConfig = new dialog.MatDialogConfig();
        dialogConfig.width = '400px';
        Object.assign(dialogConfig, config);
        return dialogConfig;
    };
    return TdDialogService;
}());
TdDialogService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TdDialogService.ctorParameters = function () { return [
    { type: dialog.MatDialog, },
]; };
/**
 * @param {?} parent
 * @param {?} dialog
 * @return {?}
 */
function DIALOG_PROVIDER_FACTORY(parent, dialog$$1) {
    return parent || new TdDialogService(dialog$$1);
}
var DIALOG_PROVIDER = {
    // If there is already service available, use that. Otherwise, provide a new one.
    provide: TdDialogService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdDialogService], dialog.MatDialog],
    useFactory: DIALOG_PROVIDER_FACTORY,
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = /** @class */ (function () {
    function CovalentDialogsModule() {
    }
    return CovalentDialogsModule;
}());
CovalentDialogsModule.decorators = [
    { type: core.NgModule, args: [{
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
                    DIALOG_PROVIDER,
                ],
                entryComponents: [
                    TD_DIALOGS_ENTRY_COMPONENTS,
                ],
            },] },
];
/** @nocollapse */
CovalentDialogsModule.ctorParameters = function () { return []; };
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
var TdExpansionPanelHeaderDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelHeaderDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdExpansionPanelHeaderDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelHeaderDirective;
}(portal.TemplatePortalDirective));
TdExpansionPanelHeaderDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-expansion-panel-header]ng-template',
            },] },
];
/** @nocollapse */
TdExpansionPanelHeaderDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdExpansionPanelLabelDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelLabelDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdExpansionPanelLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelLabelDirective;
}(portal.TemplatePortalDirective));
TdExpansionPanelLabelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-expansion-panel-label]ng-template',
            },] },
];
/** @nocollapse */
TdExpansionPanelLabelDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdExpansionPanelSublabelDirective = /** @class */ (function (_super) {
    __extends(TdExpansionPanelSublabelDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdExpansionPanelSublabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdExpansionPanelSublabelDirective;
}(portal.TemplatePortalDirective));
TdExpansionPanelSublabelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-expansion-panel-sublabel]ng-template',
            },] },
];
/** @nocollapse */
TdExpansionPanelSublabelDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdExpansionPanelSummaryComponent = /** @class */ (function () {
    function TdExpansionPanelSummaryComponent() {
    }
    return TdExpansionPanelSummaryComponent;
}());
TdExpansionPanelSummaryComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-expansion-summary',
                template: '<ng-content></ng-content>',
            },] },
];
/** @nocollapse */
TdExpansionPanelSummaryComponent.ctorParameters = function () { return []; };
var TdExpansionPanelBase = /** @class */ (function () {
    function TdExpansionPanelBase() {
    }
    return TdExpansionPanelBase;
}());
/* tslint:disable-next-line */
var _TdExpansionPanelMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdExpansionPanelBase));
var TdExpansionPanelComponent = /** @class */ (function (_super) {
    __extends(TdExpansionPanelComponent, _super);
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function TdExpansionPanelComponent(_renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._expand = false;
        /**
         * expanded?: function
         * Event emitted when [TdExpansionPanelComponent] is expanded.
         */
        _this.expanded = new core.EventEmitter();
        /**
         * collapsed?: function
         * Event emitted when [TdExpansionPanelComponent] is collapsed.
         */
        _this.collapsed = new core.EventEmitter();
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-expansion-panel');
        return _this;
    }
    Object.defineProperty(TdExpansionPanelComponent.prototype, "expand", {
        /**
         * @return {?}
         */
        get: function () {
            return this._expand;
        },
        /**
         * expand?: boolean
         * Toggles [TdExpansionPanelComponent] between expand/collapse.
         * @param {?} expand
         * @return {?}
         */
        set: function (expand) {
            this._setExpand(coercion.coerceBooleanProperty(expand));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when [TdExpansionPanelComponent] is clicked.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.clickEvent = function () {
        this._setExpand(!this._expand);
    };
    /**
     * Toggle expand state of [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.toggle = function () {
        return this._setExpand(!this._expand);
    };
    /**
     * Opens [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.open = function () {
        return this._setExpand(true);
    };
    /**
     * Closes [TdExpansionPanelComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.close = function () {
        return this._setExpand(false);
    };
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdExpansionPanelComponent.prototype.onDisabledChange = function (v) {
        if (v && this._expand) {
            this._expand = false;
            this._onCollapsed();
        }
    };
    /**
     * Method to change expand state internally and emit the [onExpanded] event if 'true' or [onCollapsed]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * @param {?} newExpand
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._setExpand = function (newExpand) {
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
    TdExpansionPanelComponent.prototype._onExpanded = function () {
        this.expanded.emit(undefined);
    };
    /**
     * @return {?}
     */
    TdExpansionPanelComponent.prototype._onCollapsed = function () {
        this.collapsed.emit(undefined);
    };
    return TdExpansionPanelComponent;
}(_TdExpansionPanelMixinBase));
TdExpansionPanelComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-expansion-panel',
                styles: [":host{\n  display:block; }\n  :host .td-expansion-panel-header{\n    position:relative;\n    outline:none; }\n    :host .td-expansion-panel-header:focus:not(.mat-disabled), :host .td-expansion-panel-header:hover:not(.mat-disabled){\n      cursor:pointer; }\n    :host .td-expansion-panel-header .td-expansion-panel-header-content{\n      height:48px;\n      padding:0 24px;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%; }\n      :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-label,\n      :host .td-expansion-panel-header .td-expansion-panel-header-content .td-expansion-sublabel{\n        -webkit-box-flex:1;\n            -ms-flex:1;\n                flex:1; }\n  :host .td-expansion-content.ng-animating,\n  :host .td-expansion-summary.ng-animating{\n    overflow:hidden; }\n.td-expansion-label,\n.td-expansion-sublabel{\n  white-space:nowrap;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  margin-right:16px; }\n  ::ng-deep [dir='rtl'] .td-expansion-label, ::ng-deep [dir='rtl']\n  .td-expansion-sublabel{\n    margin-left:16px;\n    margin-right:inherit; }\n"],
                template: "<div class=\"td-expansion-panel-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled? -1 : 0\"\n      (keydown.enter)=\"clickEvent()\"\n      (click)=\"clickEvent()\">\n  <ng-template [cdkPortalHost]=\"expansionPanelHeader\"></ng-template>\n  <div class=\"td-expansion-panel-header-content\"\n        [class.mat-disabled]=\"disabled\"\n        *ngIf=\"!expansionPanelHeader\">\n    <div *ngIf=\"label || expansionPanelLabel\" class=\"td-expansion-label\">\n      <ng-template [cdkPortalHost]=\"expansionPanelLabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelLabel\">{{label}}</ng-template>\n    </div>\n    <div *ngIf=\"sublabel || expansionPanelSublabel\" class=\"td-expansion-sublabel\">\n      <ng-template [cdkPortalHost]=\"expansionPanelSublabel\"></ng-template>\n      <ng-template [ngIf]=\"!expansionPanelSublabel\">{{sublabel}}</ng-template>\n    </div>\n    <mat-icon class=\"td-expand-icon\" *ngIf=\"!disabled\" [@tdRotate]=\"expand\">keyboard_arrow_down</mat-icon>\n  </div>\n</div>\n<div class=\"td-expansion-content\"\n      [@tdCollapse]=\"!expand\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-expansion-summary\"\n      [@tdCollapse]=\"expand\">\n  <ng-content select=\"td-expansion-summary\"></ng-content>\n</div>\n",
                inputs: ['disabled', 'disableRipple'],
                animations: [
                    common$1.TdCollapseAnimation(),
                    common$1.TdRotateAnimation({ anchor: 'tdRotate' }),
                ],
            },] },
];
/** @nocollapse */
TdExpansionPanelComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdExpansionPanelComponent.propDecorators = {
    "expansionPanelHeader": [{ type: core.ContentChild, args: [TdExpansionPanelHeaderDirective,] },],
    "expansionPanelLabel": [{ type: core.ContentChild, args: [TdExpansionPanelLabelDirective,] },],
    "expansionPanelSublabel": [{ type: core.ContentChild, args: [TdExpansionPanelSublabelDirective,] },],
    "label": [{ type: core.Input },],
    "sublabel": [{ type: core.Input },],
    "expand": [{ type: core.Input, args: ['expand',] },],
    "expanded": [{ type: core.Output },],
    "collapsed": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdExpansionPanelGroupComponent = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    return TdExpansionPanelGroupComponent;
}());
TdExpansionPanelGroupComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-expansion-panel-group',
                styles: [""],
                template: "<ng-content></ng-content>",
            },] },
];
/** @nocollapse */
TdExpansionPanelGroupComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    return CovalentExpansionPanelModule;
}());
CovalentExpansionPanelModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    core$1.MatRippleModule,
                    icon.MatIconModule,
                    portal.PortalModule,
                ],
                declarations: [
                    TD_EXPANSION_PANEL,
                ],
                exports: [
                    TD_EXPANSION_PANEL,
                ],
            },] },
];
/** @nocollapse */
CovalentExpansionPanelModule.ctorParameters = function () { return []; };
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
var TdFileSelectDirective = /** @class */ (function () {
    /**
     * @param {?} model
     */
    function TdFileSelectDirective(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.onFileSelect = new core.EventEmitter();
    }
    Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    TdFileSelectDirective.prototype.onChange = function (event) {
        if (event.target instanceof HTMLInputElement) {
            var /** @type {?} */ fileInputEl = ((event.target));
            var /** @type {?} */ files = fileInputEl.files;
            if (files.length) {
                var /** @type {?} */ value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    return TdFileSelectDirective;
}());
TdFileSelectDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdFileSelect]',
            },] },
];
/** @nocollapse */
TdFileSelectDirective.ctorParameters = function () { return [
    { type: forms.NgModel, decorators: [{ type: core.Optional }, { type: core.Host },] },
]; };
TdFileSelectDirective.propDecorators = {
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "onFileSelect": [{ type: core.Output, args: ['fileSelect',] },],
    "multipleBinding": [{ type: core.HostBinding, args: ['attr.multiple',] },],
    "onChange": [{ type: core.HostListener, args: ['change', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdFileDropBase = /** @class */ (function () {
    function TdFileDropBase() {
    }
    return TdFileDropBase;
}());
/* tslint:disable-next-line */
var _TdFileDropMixinBase = common$1.mixinDisabled(TdFileDropBase);
var TdFileDropDirective = /** @class */ (function (_super) {
    __extends(TdFileDropDirective, _super);
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
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
        _this.onFileDrop = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileDropDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be dropped at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        get: function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileDropDirective.prototype, "disabledBinding", {
        /**
         * Binds native 'disabled' attribute if [disabled] property is 'true'.
         * @return {?}
         */
        get: function () {
            return this.disabled ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDrop = function (event) {
        if (!this.disabled) {
            var /** @type {?} */ transfer = ((event)).dataTransfer;
            var /** @type {?} */ files = transfer.files;
            if (files.length) {
                var /** @type {?} */ value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
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
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragOver = function (event) {
        var /** @type {?} */ transfer = ((event)).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || ((transfer)).mozItemCount > 1))) {
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
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragEnter = function (event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    };
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype.onDragLeave = function (event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    };
    /**
     * Validates if the transfer item types are 'Files'.
     * @param {?} types
     * @return {?}
     */
    TdFileDropDirective.prototype._typeCheck = function (types) {
        var /** @type {?} */ dropEffect = 'none';
        if (types) {
            if ((((types)).contains && ((types)).contains('Files'))
                || (((types)).indexOf && ((types)).indexOf('Files') !== -1)) {
                dropEffect = 'copy';
            }
        }
        return dropEffect;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdFileDropDirective.prototype._stopEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    return TdFileDropDirective;
}(_TdFileDropMixinBase));
TdFileDropDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdFileDrop]',
                inputs: ['disabled'],
            },] },
];
/** @nocollapse */
TdFileDropDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdFileDropDirective.propDecorators = {
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "onFileDrop": [{ type: core.Output, args: ['fileDrop',] },],
    "multipleBinding": [{ type: core.HostBinding, args: ['attr.multiple',] },],
    "disabledBinding": [{ type: core.HostBinding, args: ['attr.disabled',] },],
    "onDrop": [{ type: core.HostListener, args: ['drop', ['$event'],] },],
    "onDragOver": [{ type: core.HostListener, args: ['dragover', ['$event'],] },],
    "onDragEnter": [{ type: core.HostListener, args: ['dragenter', ['$event'],] },],
    "onDragLeave": [{ type: core.HostListener, args: ['dragleave', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdFileInputLabelDirective = /** @class */ (function (_super) {
    __extends(TdFileInputLabelDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdFileInputLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdFileInputLabelDirective;
}(portal.TemplatePortalDirective));
TdFileInputLabelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-file-input-label]ng-template',
            },] },
];
/** @nocollapse */
TdFileInputLabelDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdFileInputBase = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     */
    function TdFileInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileInputBase;
}());
/* tslint:disable-next-line */
var _TdFileInputMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileInputBase));
var TdFileInputComponent = /** @class */ (function (_super) {
    __extends(TdFileInputComponent, _super);
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    function TdFileInputComponent(_renderer, _changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._renderer = _renderer;
        _this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileInputComponent.prototype, "inputElement", {
        /**
         * @return {?}
         */
        get: function () {
            return this._inputElement.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileInputComponent.prototype, "multiple", {
        /**
         * @return {?}
         */
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
         * @param {?} multiple
         * @return {?}
         */
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    TdFileInputComponent.prototype.handleSelect = function (files) {
        this.writeValue(files);
        this.onSelect.emit(files);
    };
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    TdFileInputComponent.prototype.clear = function () {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    };
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileInputComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.clear();
        }
    };
    return TdFileInputComponent;
}(_TdFileInputMixinBase));
TdFileInputComponent.decorators = [
    { type: core.Component, args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdFileInputComponent; }),
                        multi: true,
                    }],
                selector: 'td-file-input',
                inputs: ['disabled', 'value'],
                styles: [":host{ }\n  :host .td-file-input{\n    padding-left:8px;\n    padding-right:8px; }\n  :host input.td-file-input-hidden{\n    display:none; }\n  :host .drop-zone{\n    border-radius:3px; }\n    :host .drop-zone *{\n      pointer-events:none; }\n"],
                template: "<div>\n  <button mat-raised-button\n          class=\"td-file-input\"\n          type=\"button\"\n          [color]=\"color\"\n          [multiple]=\"multiple\"\n          [disabled]=\"disabled\"\n          (keyup.enter)=\"fileInput.click()\"\n          (click)=\"fileInput.click()\"\n          (fileDrop)=\"handleSelect($event)\"\n          tdFileDrop>\n    <ng-content></ng-content>\n  </button>\n  <input #fileInput\n          class=\"td-file-input-hidden\"\n          type=\"file\"\n          [attr.accept]=\"accept\"\n          (fileSelect)=\"handleSelect($event)\"\n          [multiple]=\"multiple\"\n          [disabled]=\"disabled\"\n          tdFileSelect>\n</div>",
            },] },
];
/** @nocollapse */
TdFileInputComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ChangeDetectorRef, },
]; };
TdFileInputComponent.propDecorators = {
    "_inputElement": [{ type: core.ViewChild, args: ['fileInput',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "accept": [{ type: core.Input, args: ['accept',] },],
    "onSelect": [{ type: core.Output, args: ['select',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdFileUploadBase = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     */
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
/* tslint:disable-next-line */
var _TdFileUploadMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = /** @class */ (function (_super) {
    __extends(TdFileUploadComponent, _super);
    /**
     * @param {?} _changeDetectorRef
     */
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
        _this.onSelect = new core.EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        _this.onUpload = new core.EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        _this.onCancel = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        /**
         * @return {?}
         */
        get: function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         * @param {?} multiple
         * @return {?}
         */
        set: function (multiple) {
            this._multiple = coercion.coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         * @param {?} required
         * @return {?}
         */
        set: function (required) {
            this._required = coercion.coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    TdFileUploadComponent.prototype.uploadPressed = function () {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    };
    /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    TdFileUploadComponent.prototype.handleSelect = function (value) {
        this.value = value;
        this.onSelect.emit(value);
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    TdFileUploadComponent.prototype.cancel = function () {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileUploadComponent.prototype.onDisabledChange = function (v) {
        if (v) {
            this.cancel();
        }
    };
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));
TdFileUploadComponent.decorators = [
    { type: core.Component, args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdFileUploadComponent; }),
                        multi: true,
                    }],
                selector: 'td-file-upload',
                inputs: ['disabled', 'value'],
                styles: [".td-file-upload{\n  padding-left:8px;\n  padding-right:8px; }\n.td-file-upload-cancel{\n  height:24px;\n  width:24px;\n  position:relative;\n  top:24px;\n  left:-12px; }\n  ::ng-deep [dir='rtl'] .td-file-upload-cancel{\n    right:-12px;\n    left:0; }\n  .td-file-upload-cancel mat-icon{\n    border-radius:12px;\n    vertical-align:baseline; }\n.drop-zone{\n  border-radius:3px; }\n  .drop-zone *{\n    pointer-events:none; }\n"],
                template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalHost]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\">\n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"\n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
            },] },
];
/** @nocollapse */
TdFileUploadComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TdFileUploadComponent.propDecorators = {
    "fileInput": [{ type: core.ViewChild, args: [TdFileInputComponent,] },],
    "inputLabel": [{ type: core.ContentChild, args: [TdFileInputLabelDirective,] },],
    "defaultColor": [{ type: core.Input, args: ['defaultColor',] },],
    "activeColor": [{ type: core.Input, args: ['activeColor',] },],
    "cancelColor": [{ type: core.Input, args: ['cancelColor',] },],
    "multiple": [{ type: core.Input, args: ['multiple',] },],
    "required": [{ type: core.Input, args: ['required',] },],
    "accept": [{ type: core.Input, args: ['accept',] },],
    "onSelect": [{ type: core.Output, args: ['select',] },],
    "onUpload": [{ type: core.Output, args: ['upload',] },],
    "onCancel": [{ type: core.Output, args: ['cancel',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var TdFileService = /** @class */ (function () {
    function TdFileService() {
        this._progressSubject = new Subject.Subject();
        this._progressObservable = this._progressSubject.asObservable();
    }
    Object.defineProperty(TdFileService.prototype, "progress", {
        /**
         * Gets progress observable to keep track of the files being uploaded.
         * Needs to be supported by backend.
         * @return {?}
         */
        get: function () {
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
     * Will be depricated when angular fixes [Http] to allow [FormData] as body.
     * @param {?} options
     * @return {?}
     */
    TdFileService.prototype.upload = function (options) {
        var _this = this;
        return new Observable.Observable(function (subscriber) {
            var /** @type {?} */ xhr = new XMLHttpRequest();
            var /** @type {?} */ formData = new FormData();
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
                var /** @type {?} */ progress = 0;
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
                for (var /** @type {?} */ key in options.headers) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
            xhr.send(formData);
        });
    };
    return TdFileService;
}());
TdFileService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TdFileService.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    return CovalentFileModule;
}());
CovalentFileModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentFileModule.ctorParameters = function () { return []; };
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
var TdJsonFormatterComponent = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dir
     */
    function TdJsonFormatterComponent(_changeDetectorRef, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._open = false;
        this._levelsOpen = 0;
    }
    Object.defineProperty(TdJsonFormatterComponent.prototype, "levelsOpen", {
        /**
         * @return {?}
         */
        get: function () {
            return this._levelsOpen;
        },
        /**
         * levelsOpen?: number
         * Levels opened by default when JS object is formatted and rendered.
         * @param {?} levelsOpen
         * @return {?}
         */
        set: function (levelsOpen) {
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
        /**
         * @return {?}
         */
        get: function () {
            return this._open;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "key", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ elipsis = this._key && this._key.length > TdJsonFormatterComponent.KEY_MAX_LENGTH ? '…' : '';
            return this._key ? this._key.substring(0, TdJsonFormatterComponent.KEY_MAX_LENGTH) + elipsis : this._key;
        },
        /**
         * key?: string
         * Tag to be displayed next to formatted object.
         * @param {?} key
         * @return {?}
         */
        set: function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * data: any
         * JS object to be formatted.
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.parseChildren();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "children", {
        /**
         * @return {?}
         */
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdJsonFormatterComponent.prototype, "isRTL", {
        /**
         * @return {?}
         */
        get: function () {
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
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.refresh = function () {
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Toggles collapse/expanded state of component.
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.toggle = function () {
        this._open = !this._open;
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.isObject = function () {
        return this.getType(this._data) === 'object';
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.isArray = function () {
        return Array.isArray(this._data);
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.hasChildren = function () {
        return this._children && this._children.length > 0;
    };
    /**
     * Gets parsed value depending on value type.
     * @param {?} value
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getValue = function (value) {
        var /** @type {?} */ type = this.getType(value);
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
     * @param {?} object
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getType = function (object) {
        if (typeof object === 'object') {
            if (!object) {
                return 'null';
            }
            if (Array.isArray(object)) {
                return 'object';
            }
            var /** @type {?} */ date = new Date(object);
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
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getObjectName = function () {
        var /** @type {?} */ object = this._data;
        if (this.isObject() && !object.constructor) {
            return 'Object';
        }
        var /** @type {?} */ funcNameRegex = /function (.{1,})\(/;
        var /** @type {?} */ results = (funcNameRegex).exec((object).constructor.toString());
        if (results && results.length > 1) {
            return results[1];
        }
        else {
            return '';
        }
    };
    /**
     * Creates preview of nodes children to render in tooltip depending if its an array or an object.
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.getPreview = function () {
        var _this = this;
        var /** @type {?} */ previewData;
        var /** @type {?} */ startChar = '{ ';
        var /** @type {?} */ endChar = ' }';
        if (this.isArray()) {
            var /** @type {?} */ previewArray = this._data.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewArray.map(function (obj) {
                return _this.getValue(obj);
            });
            startChar = '[';
            endChar = ']';
        }
        else {
            var /** @type {?} */ previewKeys = this._children.slice(0, TdJsonFormatterComponent.PREVIEW_LIMIT);
            previewData = previewKeys.map(function (key) {
                return key + ': ' + _this.getValue(_this._data[key]);
            });
        }
        var /** @type {?} */ previewString = previewData.join(', ');
        var /** @type {?} */ ellipsis = previewData.length >= TdJsonFormatterComponent.PREVIEW_LIMIT ||
            previewString.length > TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH ? '…' : '';
        return startChar + previewString.substring(0, TdJsonFormatterComponent.PREVIEW_STRING_MAX_LENGTH) +
            ellipsis + endChar;
    };
    /**
     * @return {?}
     */
    TdJsonFormatterComponent.prototype.parseChildren = function () {
        if (this.isObject()) {
            this._children = [];
            for (var /** @type {?} */ key in this._data) {
                this._children.push(key);
            }
        }
    };
    return TdJsonFormatterComponent;
}());
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
    { type: core.Component, args: [{
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                selector: 'td-json-formatter',
                styles: [":host{\n  display:block; }\n.td-json-formatter-wrapper{\n  padding-top:2px;\n  padding-bottom:2px; }\n  .td-json-formatter-wrapper .td-key{\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    max-width:100%;\n    -webkit-box-pack:start;\n        -ms-flex-pack:start;\n            justify-content:start; }\n    .td-json-formatter-wrapper .td-key.td-key-node:hover{\n      cursor:pointer; }\n  .td-json-formatter-wrapper .td-object-children.ng-animating{\n    overflow:hidden; }\n  .td-json-formatter-wrapper .td-object-children .td-key,\n  .td-json-formatter-wrapper .td-object-children .td-object-children{\n    padding-left:24px; }\n    ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key, ::ng-deep [dir='rtl']\n    .td-json-formatter-wrapper .td-object-children .td-object-children{\n      padding-right:24px;\n      padding-left:0; }\n    .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf,\n    .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{\n      padding-left:48px; }\n      ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .td-object-children .td-key.td-key-leaf, ::ng-deep [dir='rtl']\n      .td-json-formatter-wrapper .td-object-children .td-object-children.td-key-leaf{\n        padding-right:48px;\n        padding-left:0; }\n  .td-json-formatter-wrapper .value{\n    margin-left:5px; }\n    ::ng-deep [dir='rtl'] .td-json-formatter-wrapper .value{\n      padding-right:5px;\n      padding-left:0; }\n    .td-json-formatter-wrapper .value .td-empty{\n      opacity:0.5;\n      text-decoration:line-through; }\n    .td-json-formatter-wrapper .value .string{\n      word-break:break-word; }\n    .td-json-formatter-wrapper .value .date{\n      word-break:break-word; }\n"],
                template: "<div class=\"td-json-formatter-wrapper\">\n  <a class=\"td-key\"\n     [class.td-key-node]=\"hasChildren()\"\n     [class.td-key-leaf]=\"!hasChildren()\"\n     [tabIndex]=\"isObject()? 0 : -1\"\n     (keydown.enter)=\"toggle()\"\n     (click)=\"toggle()\">\n    <mat-icon class=\"td-node-icon\" *ngIf=\"hasChildren()\">{{open? 'keyboard_arrow_down' : (isRTL ? 'keyboard_arrow_left' : 'keyboard_arrow_right')}}</mat-icon>\n    <span *ngIf=\"key\" class=\"key\">{{key}}:</span>\n    <span class=\"value\">\n      <span [class.td-empty]=\"!hasChildren()\" *ngIf=\"isObject()\" [matTooltip]=\"getPreview()\" matTooltipPosition=\"after\">\n        <span class=\"td-object-name\">{{getObjectName()}}</span>\n        <span class=\"td-array-length\" *ngIf=\"isArray()\">[{{data.length}}]</span>\n      </span>\n      <span *ngIf=\"!isObject()\" [class]=\"getType(data)\">{{getValue(data)}}</span>\n    </span>\n  </a>\n  <div class=\"td-object-children\" [@tdCollapse]=\"!(hasChildren() && open)\">\n    <ng-template let-key ngFor [ngForOf]=\"children\">\n      <td-json-formatter [key]=\"key\" [data]=\"data[key]\" [levelsOpen]=\"levelsOpen - 1\"></td-json-formatter>\n    </ng-template>\n  </div>\n</div>",
                animations: [
                    common$1.TdCollapseAnimation(),
                ],
            },] },
];
/** @nocollapse */
TdJsonFormatterComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: bidi.Dir, decorators: [{ type: core.Optional },] },
]; };
TdJsonFormatterComponent.propDecorators = {
    "levelsOpen": [{ type: core.Input, args: ['levelsOpen',] },],
    "key": [{ type: core.Input, args: ['key',] },],
    "data": [{ type: core.Input, args: ['data',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CovalentJsonFormatterModule = /** @class */ (function () {
    function CovalentJsonFormatterModule() {
    }
    return CovalentJsonFormatterModule;
}());
CovalentJsonFormatterModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentJsonFormatterModule.ctorParameters = function () { return []; };
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
    }
    Object.defineProperty(TdLayoutComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutComponent;
}());
TdLayoutComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout',
                styles: [":host{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden; }\n  :host ::ng-deep > mat-sidenav-container > mat-sidenav{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n"],
                template: "<mat-sidenav-container fullscreen>\n  <mat-sidenav #sidenav\n              class=\"td-layout-sidenav\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\"\n              [disableClose]=\"disableClose\">\n    <ng-content select=\"td-navigation-drawer\"></ng-content>\n    <ng-content select=\"[td-sidenav-content]\"></ng-content>\n  </mat-sidenav>\n  <ng-content></ng-content>\n</mat-sidenav-container>\n",
            },] },
];
/** @nocollapse */
TdLayoutComponent.ctorParameters = function () { return []; };
TdLayoutComponent.propDecorators = {
    "sidenav": [{ type: core.ViewChild, args: [sidenav.MatSidenav,] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "sidenavWidth": [{ type: core.Input, args: ['sidenavWidth',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var LayoutToggleBase = /** @class */ (function () {
    function LayoutToggleBase() {
    }
    return LayoutToggleBase;
}());
/* tslint:disable-next-line */
var _TdLayoutToggleMixinBase = common$1.mixinDisabled(LayoutToggleBase);
/**
 * @abstract
 */
var LayoutToggle = /** @class */ (function (_super) {
    __extends(LayoutToggle, _super);
    /**
     * @param {?} _layout
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function LayoutToggle(_layout, _renderer, _elementRef) {
        var _this = _super.call(this) || this;
        _this._layout = _layout;
        _this._renderer = _renderer;
        _this._elementRef = _elementRef;
        _this._initialized = false;
        _this._hideWhenOpened = false;
        _this._renderer.addClass(_this._elementRef.nativeElement, 'td-layout-menu-button');
        return _this;
    }
    Object.defineProperty(LayoutToggle.prototype, "hideWhenOpened", {
        /**
         * hideWhenOpened?: boolean
         * When this is set to true, the host will be hidden when
         * the sidenav is opened.
         * @param {?} hideWhenOpened
         * @return {?}
         */
        set: function (hideWhenOpened) {
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
    LayoutToggle.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._initialized = true;
        this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(function () {
            _this._toggleVisibility();
        });
        // execute toggleVisibility since the onOpenStart and onCloseStart
        // methods might not be executed always when the element is rendered
        this._toggleVisibility();
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype.ngOnDestroy = function () {
        if (this._toggleSubs) {
            this._toggleSubs.unsubscribe();
            this._toggleSubs = undefined;
        }
    };
    /**
     * Listens to host click event to trigger the layout toggle
     * @param {?} event
     * @return {?}
     */
    LayoutToggle.prototype.clickListener = function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.onClick();
        }
    };
    /**
     * @return {?}
     */
    LayoutToggle.prototype._toggleVisibility = function () {
        if (this._layout.sidenav.opened && this._hideWhenOpened) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
        }
    };
    return LayoutToggle;
}(_TdLayoutToggleMixinBase));
LayoutToggle.propDecorators = {
    "hideWhenOpened": [{ type: core.Input, args: ['hideWhenOpened',] },],
    "clickListener": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutToggleDirective = /** @class */ (function (_super) {
    __extends(TdLayoutToggleDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutToggleDirective.prototype, "tdLayoutToggle", {
        /**
         * @param {?} tdLayoutToggle
         * @return {?}
         */
        set: function (tdLayoutToggle) {
            this.disabled = !((tdLayoutToggle) === '' || tdLayoutToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutToggleDirective;
}(LayoutToggle));
TdLayoutToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutToggle]',
            },] },
];
/** @nocollapse */
TdLayoutToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutToggleDirective.propDecorators = {
    "tdLayoutToggle": [{ type: core.Input, args: ['tdLayoutToggle',] },],
};
var TdLayoutCloseDirective = /** @class */ (function (_super) {
    __extends(TdLayoutCloseDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutCloseDirective.prototype, "tdLayoutClose", {
        /**
         * @param {?} tdLayoutClose
         * @return {?}
         */
        set: function (tdLayoutClose) {
            this.disabled = !((tdLayoutClose) === '' || tdLayoutClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutCloseDirective;
}(LayoutToggle));
TdLayoutCloseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutClose]',
            },] },
];
/** @nocollapse */
TdLayoutCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutCloseDirective.propDecorators = {
    "tdLayoutClose": [{ type: core.Input, args: ['tdLayoutClose',] },],
};
var TdLayoutOpenDirective = /** @class */ (function (_super) {
    __extends(TdLayoutOpenDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutOpenDirective.prototype, "tdLayoutClose", {
        /**
         * @param {?} tdLayoutOpen
         * @return {?}
         */
        set: function (tdLayoutOpen) {
            this.disabled = !((tdLayoutOpen) === '' || tdLayoutOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutOpenDirective;
}(LayoutToggle));
TdLayoutOpenDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutOpen]',
            },] },
];
/** @nocollapse */
TdLayoutOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutOpenDirective.propDecorators = {
    "tdLayoutClose": [{ type: core.Input, args: ['tdLayoutOpen',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutNavComponent = /** @class */ (function () {
    /**
     * @param {?} _router
     */
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
         * @return {?}
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    return TdLayoutNavComponent;
}());
TdLayoutNavComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-nav',
                styles: [".td-menu-button{\n  margin-left:0; }\n  ::ng-deep [dir='rtl'] .td-menu-button{\n    margin-right:0;\n    margin-left:6px; }\n:host{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden; }\n  :host .td-layout-nav-wrapper{\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    margin:0;\n    width:100%;\n    min-height:100%;\n    height:100%; }\n    :host .td-layout-nav-wrapper .td-layout-nav-toolbar-content{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start; }\n    :host .td-layout-nav-wrapper .td-layout-nav-content{\n      -webkit-box-orient:vertical;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:column;\n              flex-direction:column;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1;\n      position:relative;\n      overflow:auto;\n      -webkit-overflow-scrolling:touch; }\n"],
                template: "<div class=\"td-layout-nav-wrapper\">\n  <mat-toolbar [color]=\"color\">\n    <ng-content select=\"[td-menu-button]\"></ng-content>\n    <span *ngIf=\"icon || logo || toolbarTitle\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n          class=\"td-layout-nav-toolbar-content\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n    </span>\n    <ng-content select=\"[td-toolbar-content]\"></ng-content>\n  </mat-toolbar>\n  <div class=\"td-layout-nav-content\" cdkScrollable>\n    <ng-content></ng-content>\n  </div>\n  <ng-content select=\"td-layout-footer\"></ng-content>\n</div>\n",
            },] },
];
/** @nocollapse */
TdLayoutNavComponent.ctorParameters = function () { return [
    { type: router.Router, decorators: [{ type: core.Optional },] },
]; };
TdLayoutNavComponent.propDecorators = {
    "toolbarTitle": [{ type: core.Input, args: ['toolbarTitle',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "logo": [{ type: core.Input, args: ['logo',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "navigationRoute": [{ type: core.Input, args: ['navigationRoute',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutNavListComponent = /** @class */ (function () {
    /**
     * @param {?} _router
     */
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
    }
    Object.defineProperty(TdLayoutNavListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLayoutNavListComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         * @return {?}
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutNavListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutNavListComponent;
}());
TdLayoutNavListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-nav-list',
                styles: [":host{\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1; }\n  :host .td-layout-nav-list-wrapper{\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    position:relative;\n    overflow:auto;\n    -webkit-overflow-scrolling:touch; }\n    :host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start; }\n    :host .td-layout-nav-list-wrapper .td-layout-nav-list-content{\n      text-align:start;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1;\n      display:block;\n      position:relative;\n      overflow:auto;\n      -webkit-overflow-scrolling:touch; }\n    :host .td-layout-nav-list-wrapper .td-layout-nav-list-main{\n      -webkit-box-orient:vertical;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:column;\n              flex-direction:column;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      margin:0;\n      width:100%;\n      min-height:100%;\n      height:100%;\n      position:relative;\n      overflow:auto; }\n      :host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{\n        display:block;\n        position:relative;\n        overflow:auto;\n        -webkit-overflow-scrolling:touch;\n        -webkit-box-flex:1;\n            -ms-flex:1;\n                flex:1; }\n    :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1; }\n      :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opened, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-opening, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closed, :host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list > mat-sidenav.mat-drawer-closing{\n        -webkit-box-shadow:none;\n                box-shadow:none; }\n:host ::ng-deep mat-sidenav-container.td-layout-nav-list{ }\n  :host ::ng-deep mat-sidenav-container.td-layout-nav-list > .mat-drawer-content{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1; }\n  :host ::ng-deep mat-sidenav-container.td-layout-nav-list > mat-sidenav{\n    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n"],
                template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen class=\"td-layout-nav-list\">\n    <mat-sidenav #sidenav\n                position=\"start\"\n                [mode]=\"mode\"\n                [opened]=\"opened\"\n                [disableClose]=\"disableClose\"\n                [style.max-width]=\"sidenavWidth\"\n                [style.min-width]=\"sidenavWidth\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span *ngIf=\"icon || logo || toolbarTitle\"\n              class=\"td-layout-nav-list-toolbar-content\"\n              [class.cursor-pointer]=\"routerEnabled\"\n              (click)=\"handleNavigationClick()\">\n          <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{toolbarTitle}}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>",
            },] },
];
/** @nocollapse */
TdLayoutNavListComponent.ctorParameters = function () { return [
    { type: router.Router, decorators: [{ type: core.Optional },] },
]; };
TdLayoutNavListComponent.propDecorators = {
    "sidenav": [{ type: core.ViewChild, args: [sidenav.MatSidenav,] },],
    "toolbarTitle": [{ type: core.Input, args: ['toolbarTitle',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "logo": [{ type: core.Input, args: ['logo',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "sidenavWidth": [{ type: core.Input, args: ['sidenavWidth',] },],
    "navigationRoute": [{ type: core.Input, args: ['navigationRoute',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutNavListToggleDirective = /** @class */ (function (_super) {
    __extends(TdLayoutNavListToggleDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutNavListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListToggleDirective.prototype, "tdLayoutNavListToggle", {
        /**
         * @param {?} tdLayoutNavListToggle
         * @return {?}
         */
        set: function (tdLayoutNavListToggle) {
            this.disabled = !((tdLayoutNavListToggle) === '' || tdLayoutNavListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutNavListToggleDirective;
}(LayoutToggle));
TdLayoutNavListToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutNavListToggle]',
            },] },
];
/** @nocollapse */
TdLayoutNavListToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutNavListToggleDirective.propDecorators = {
    "tdLayoutNavListToggle": [{ type: core.Input, args: ['tdLayoutNavListToggle',] },],
};
var TdLayoutNavListCloseDirective = /** @class */ (function (_super) {
    __extends(TdLayoutNavListCloseDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutNavListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListCloseDirective.prototype, "tdLayoutNavListClose", {
        /**
         * @param {?} tdLayoutNavListClose
         * @return {?}
         */
        set: function (tdLayoutNavListClose) {
            this.disabled = !((tdLayoutNavListClose) === '' || tdLayoutNavListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutNavListCloseDirective;
}(LayoutToggle));
TdLayoutNavListCloseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutNavListClose]',
            },] },
];
/** @nocollapse */
TdLayoutNavListCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutNavListCloseDirective.propDecorators = {
    "tdLayoutNavListClose": [{ type: core.Input, args: ['tdLayoutNavListClose',] },],
};
var TdLayoutNavListOpenDirective = /** @class */ (function (_super) {
    __extends(TdLayoutNavListOpenDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutNavListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutNavListOpenDirective.prototype, "tdLayoutNavListOpen", {
        /**
         * @param {?} tdLayoutNavListOpen
         * @return {?}
         */
        set: function (tdLayoutNavListOpen) {
            this.disabled = !((tdLayoutNavListOpen) === '' || tdLayoutNavListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutNavListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutNavListOpenDirective;
}(LayoutToggle));
TdLayoutNavListOpenDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutNavListOpen]',
            },] },
];
/** @nocollapse */
TdLayoutNavListOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutNavListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutNavListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutNavListOpenDirective.propDecorators = {
    "tdLayoutNavListOpen": [{ type: core.Input, args: ['tdLayoutNavListOpen',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    return TdLayoutCardOverComponent;
}());
TdLayoutCardOverComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-card-over',
                styles: [":host{\n  position:relative;\n  display:block;\n  z-index:2;\n  width:100%;\n  min-height:100%;\n  height:100%; }\n  :host [td-after-card]{\n    display:block; }\n.td-layout-card-over-wrapper{\n  margin:-64px;\n  margin-left:0;\n  margin-right:0;\n  width:100%;\n  min-height:100%;\n  height:100%; }\n  @media (min-width: 600px){\n    .td-layout-card-over-wrapper{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:start;\n          -ms-flex-align:start;\n              align-items:flex-start;\n      -ms-flex-line-pack:start;\n          align-content:flex-start;\n      -webkit-box-pack:center;\n          -ms-flex-pack:center;\n              justify-content:center; }\n      .td-layout-card-over-wrapper .td-layout-card-over{\n        max-height:100%;\n        -webkit-box-sizing:border-box;\n                box-sizing:border-box; } }\n  @media (max-width: 599px){\n    .td-layout-card-over-wrapper .td-layout-card-over{\n      max-width:100% !important; } }\n"],
                template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
            },] },
];
/** @nocollapse */
TdLayoutCardOverComponent.ctorParameters = function () { return []; };
TdLayoutCardOverComponent.propDecorators = {
    "cardTitle": [{ type: core.Input, args: ['cardTitle',] },],
    "cardSubtitle": [{ type: core.Input, args: ['cardSubtitle',] },],
    "cardWidth": [{ type: core.Input, args: ['cardWidth',] },],
    "color": [{ type: core.Input, args: ['color',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         * @return {?}
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutManageListComponent;
}());
TdLayoutManageListComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-layout-manage-list',
                styles: [":host{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  margin:0;\n  width:100%;\n  min-height:100%;\n  height:100%;\n  overflow:hidden; }\n  :host mat-sidenav-container.td-layout-manage-list{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n    :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opened, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opening, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closed, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closing{\n      -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2);\n              box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2); }\n  :host .td-layout-manage-list-sidenav{\n    text-align:start;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    display:block;\n    position:relative;\n    overflow:auto;\n    -webkit-overflow-scrolling:touch; }\n  :host .td-layout-manage-list-main{\n    margin:0;\n    width:100%;\n    min-height:100%;\n    height:100%;\n    position:relative;\n    overflow:auto;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex; }\n    :host .td-layout-manage-list-main .td-layout-manage-list-content{\n      display:block;\n      position:relative;\n      overflow:auto;\n      -webkit-overflow-scrolling:touch;\n      -webkit-box-flex:1;\n          -ms-flex:1;\n              flex:1; }\n:host ::ng-deep mat-sidenav-container.td-layout-manage-list{ }\n  :host ::ng-deep mat-sidenav-container.td-layout-manage-list > .mat-drawer-content{\n    -webkit-box-flex:1;\n        -ms-flex-positive:1;\n            flex-grow:1; }\n  :host ::ng-deep mat-sidenav-container.td-layout-manage-list > mat-sidenav{\n    -webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:vertical;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:column;\n            flex-direction:column; }\n:host ::ng-deep mat-nav-list a[mat-list-item] .mat-list-item-content{\n  font-size:14px; }\n:host ::ng-deep .mat-toolbar{\n  font-weight:400; }\n"],
                template: "<mat-sidenav-container fullscreen class=\"td-layout-manage-list\">\n  <mat-sidenav #sidenav\n              position=\"start\"\n              [mode]=\"mode\"\n              [opened]=\"opened\"\n              [disableClose]=\"disableClose\"\n              [style.max-width]=\"sidenavWidth\"\n              [style.min-width]=\"sidenavWidth\">\n    <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content>\n    <div class=\"td-layout-manage-list-sidenav\" cdkScrollable>\n      <ng-content select=\"[td-sidenav-content]\"></ng-content>\n    </div>\n  </mat-sidenav>\n  <div class=\"td-layout-manage-list-main\">\n    <ng-content select=\"mat-toolbar\"></ng-content>\n    <div class=\"td-layout-manage-list-content\" cdkScrollable>\n      <ng-content></ng-content>\n    </div>\n    <ng-content select=\"td-layout-footer-inner\"></ng-content>\n  </div>\n</mat-sidenav-container>\n",
            },] },
];
/** @nocollapse */
TdLayoutManageListComponent.ctorParameters = function () { return []; };
TdLayoutManageListComponent.propDecorators = {
    "sidenav": [{ type: core.ViewChild, args: [sidenav.MatSidenav,] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "opened": [{ type: core.Input, args: ['opened',] },],
    "sidenavWidth": [{ type: core.Input, args: ['sidenavWidth',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutManageListToggleDirective = /** @class */ (function (_super) {
    __extends(TdLayoutManageListToggleDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutManageListToggleDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListToggleDirective.prototype, "tdLayoutManageListToggle", {
        /**
         * @param {?} tdLayoutManageListToggle
         * @return {?}
         */
        set: function (tdLayoutManageListToggle) {
            this.disabled = !((tdLayoutManageListToggle) === '' || tdLayoutManageListToggle);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListToggleDirective.prototype.onClick = function () {
        this._layout.toggle();
    };
    return TdLayoutManageListToggleDirective;
}(LayoutToggle));
TdLayoutManageListToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutManageListToggle]',
            },] },
];
/** @nocollapse */
TdLayoutManageListToggleDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutManageListToggleDirective.propDecorators = {
    "tdLayoutManageListToggle": [{ type: core.Input, args: ['tdLayoutManageListToggle',] },],
};
var TdLayoutManageListCloseDirective = /** @class */ (function (_super) {
    __extends(TdLayoutManageListCloseDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutManageListCloseDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListCloseDirective.prototype, "tdLayoutManageListClose", {
        /**
         * @param {?} tdLayoutManageListClose
         * @return {?}
         */
        set: function (tdLayoutManageListClose) {
            this.disabled = !((tdLayoutManageListClose) === '' || tdLayoutManageListClose);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListCloseDirective.prototype.onClick = function () {
        this._layout.close();
    };
    return TdLayoutManageListCloseDirective;
}(LayoutToggle));
TdLayoutManageListCloseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutManageListClose]',
            },] },
];
/** @nocollapse */
TdLayoutManageListCloseDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutManageListCloseDirective.propDecorators = {
    "tdLayoutManageListClose": [{ type: core.Input, args: ['tdLayoutManageListClose',] },],
};
var TdLayoutManageListOpenDirective = /** @class */ (function (_super) {
    __extends(TdLayoutManageListOpenDirective, _super);
    /**
     * @param {?} layout
     * @param {?} renderer
     * @param {?} elementRef
     */
    function TdLayoutManageListOpenDirective(layout, renderer, elementRef) {
        return _super.call(this, layout, renderer, elementRef) || this;
    }
    Object.defineProperty(TdLayoutManageListOpenDirective.prototype, "tdLayoutManageListOpen", {
        /**
         * @param {?} tdLayoutManageListOpen
         * @return {?}
         */
        set: function (tdLayoutManageListOpen) {
            this.disabled = !((tdLayoutManageListOpen) === '' || tdLayoutManageListOpen);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdLayoutManageListOpenDirective.prototype.onClick = function () {
        this._layout.open();
    };
    return TdLayoutManageListOpenDirective;
}(LayoutToggle));
TdLayoutManageListOpenDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLayoutManageListOpen]',
            },] },
];
/** @nocollapse */
TdLayoutManageListOpenDirective.ctorParameters = function () { return [
    { type: TdLayoutManageListComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutManageListComponent; }),] },] },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutManageListOpenDirective.propDecorators = {
    "tdLayoutManageListOpen": [{ type: core.Input, args: ['tdLayoutManageListOpen',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdLayoutFooterComponent = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function TdLayoutFooterComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    Object.defineProperty(TdLayoutFooterComponent.prototype, "color", {
        /**
         * @return {?}
         */
        get: function () {
            return this._color;
        },
        /**
         * color?: string
         *
         * Optional color option: primary | accent | warn.
         * @param {?} color
         * @return {?}
         */
        set: function (color) {
            if (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._color = color;
                this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
            }
        },
        enumerable: true,
        configurable: true
    });
    return TdLayoutFooterComponent;
}());
TdLayoutFooterComponent.decorators = [
    { type: core.Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td-layout-footer,td-layout-footer-inner',
                styles: [":host{\n  display:block;\n  padding:10px 16px; }\n"],
                template: "<ng-content></ng-content>\n",
            },] },
];
/** @nocollapse */
TdLayoutFooterComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
]; };
TdLayoutFooterComponent.propDecorators = {
    "color": [{ type: core.Input, args: ['color',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdNavigationDrawerMenuDirective = /** @class */ (function () {
    function TdNavigationDrawerMenuDirective() {
    }
    return TdNavigationDrawerMenuDirective;
}());
TdNavigationDrawerMenuDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] },
];
/** @nocollapse */
TdNavigationDrawerMenuDirective.ctorParameters = function () { return []; };
var TdNavigationDrawerToolbarDirective = /** @class */ (function () {
    function TdNavigationDrawerToolbarDirective() {
    }
    return TdNavigationDrawerToolbarDirective;
}());
TdNavigationDrawerToolbarDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] },
];
/** @nocollapse */
TdNavigationDrawerToolbarDirective.ctorParameters = function () { return []; };
var TdNavigationDrawerComponent = /** @class */ (function () {
    /**
     * @param {?} _layout
     * @param {?} _router
     * @param {?} _sanitize
     */
    function TdNavigationDrawerComponent(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "menuToggled", {
        /**
         * @return {?}
         */
        get: function () {
            return this._menuToggled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isMenuAvailable", {
        /**
         * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
         * @return {?}
         */
        get: function () {
            return this._drawerMenu ? this._drawerMenu.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isCustomToolbar", {
        /**
         * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
         * @return {?}
         */
        get: function () {
            return this._toolbar ? this._toolbar.length > 0 : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "isBackgroundAvailable", {
        /**
         * Checks if there is a background image for the toolbar.
         * @return {?}
         */
        get: function () {
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
         * @param {?} backgroundUrl
         * @return {?}
         */
        // TODO angular complains with warnings if this is type [SafeResourceUrl].. so we will make it <any> until its fixed.
        // https://github.com/webpack/webpack/issues/2977
        set: function (backgroundUrl) {
            if (backgroundUrl) {
                var /** @type {?} */ sanitizedUrl = this._sanitize.sanitize(core.SecurityContext.RESOURCE_URL, backgroundUrl);
                this._backgroundImage = this._sanitize.sanitize(core.SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "backgroundImage", {
        /**
         * @return {?}
         */
        get: function () {
            return this._backgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdNavigationDrawerComponent.prototype, "routerEnabled", {
        /**
         * Checks if router was injected.
         * @return {?}
         */
        get: function () {
            return !!this._router && !!this.navigationRoute;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.ngOnInit = function () {
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
    TdNavigationDrawerComponent.prototype.ngOnDestroy = function () {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggleMenu = function () {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    };
    /**
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.handleNavigationClick = function () {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    };
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.toggle = function () {
        return this._layout.toggle();
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.open = function () {
        return this._layout.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    TdNavigationDrawerComponent.prototype.close = function () {
        return this._layout.close();
    };
    return TdNavigationDrawerComponent;
}());
TdNavigationDrawerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-navigation-drawer',
                styles: [":host{\n  width:100%; }\n  :host .td-navigation-drawer-content.ng-animating,\n  :host .td-navigation-drawer-menu-content.ng-animating{\n    overflow:hidden; }\n  :host mat-toolbar{\n    padding:16px; }\n    :host mat-toolbar.td-toolbar-background{\n      background-repeat:no-repeat;\n      background-size:cover; }\n    :host mat-toolbar.td-nagivation-drawer-toolbar{\n      -webkit-box-orient:vertical;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:column;\n              flex-direction:column;\n      height:auto !important;\n      display:block !important; }\n    :host mat-toolbar .td-navigation-drawer-toolbar-content{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-align:center;\n          -ms-flex-align:center;\n              align-items:center;\n      -ms-flex-line-pack:center;\n          align-content:center;\n      max-width:100%;\n      -webkit-box-pack:start;\n          -ms-flex-pack:start;\n              justify-content:start; }\n    :host mat-toolbar .td-navigation-drawer-menu-toggle{\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row;\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex; }\n      :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{\n        -webkit-box-flex:1;\n            -ms-flex:1;\n                flex:1; }\n      :host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{\n        height:24px;\n        line-height:24px;\n        width:24px; }\n  :host > div{\n    overflow:hidden; }\n"],
                template: "<mat-toolbar [color]=\"color\"\n             [style.background-image]=\"backgroundImage\"\n             [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n             class=\"td-nagivation-drawer-toolbar\">\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div *ngIf=\"icon || logo || sidenavTitle\"\n          class=\"td-navigation-drawer-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\">\n      <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{sidenavTitle}}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{name}}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\"\n        href\n        *ngIf=\"email || name\"\n        (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{email || name}}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [common$1.TdCollapseAnimation()],
            },] },
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = function () { return [
    { type: TdLayoutComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return TdLayoutComponent; }),] },] },
    { type: router.Router, decorators: [{ type: core.Optional },] },
    { type: platformBrowser.DomSanitizer, },
]; };
TdNavigationDrawerComponent.propDecorators = {
    "_drawerMenu": [{ type: core.ContentChildren, args: [TdNavigationDrawerMenuDirective,] },],
    "_toolbar": [{ type: core.ContentChildren, args: [TdNavigationDrawerToolbarDirective,] },],
    "sidenavTitle": [{ type: core.Input, args: ['sidenavTitle',] },],
    "icon": [{ type: core.Input, args: ['icon',] },],
    "logo": [{ type: core.Input, args: ['logo',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "navigationRoute": [{ type: core.Input, args: ['navigationRoute',] },],
    "backgroundUrl": [{ type: core.Input, args: ['backgroundUrl',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "email": [{ type: core.Input, args: ['email',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
    return CovalentLayoutModule;
}());
CovalentLayoutModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentLayoutModule.ctorParameters = function () { return []; };
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
var TD_CIRCLE_DIAMETER = 100;
var TdLoadingComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    function TdLoadingComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._animationIn = new Subject.Subject();
        this._animationOut = new Subject.Subject();
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
        /**
         * @return {?}
         */
        get: function () {
            return this._mode;
        },
        /**
         * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
         * @param {?} mode
         * @return {?}
         */
        set: function (mode) {
            this._defaultMode = mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
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
    TdLoadingComponent.prototype.ngDoCheck = function () {
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
    TdLoadingComponent.prototype.getHeight = function () {
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
    TdLoadingComponent.prototype.getCircleDiameter = function () {
        return this._circleDiameter;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.getCircleStrokeWidth = function () {
        // we calculate the stroke width by setting it as 10% of its diameter
        var /** @type {?} */ strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isCircular = function () {
        return this.type === LoadingType.Circular;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isLinear = function () {
        return this.type === LoadingType.Linear;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isFullScreen = function () {
        return this.style === LoadingStyle.FullScreen;
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.isOverlay = function () {
        return this.style === LoadingStyle.Overlay;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdLoadingComponent.prototype.animationComplete = function (event) {
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
    TdLoadingComponent.prototype.inAnimationCompleted = function () {
        this._animationIn.next(undefined);
    };
    /**
     * @return {?}
     */
    TdLoadingComponent.prototype.outAnimationCompleted = function () {
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
     * @return {?}
     */
    TdLoadingComponent.prototype.startInAnimation = function () {
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
     * @return {?}
     */
    TdLoadingComponent.prototype.startOutAnimation = function () {
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
     * @return {?}
     */
    TdLoadingComponent.prototype._setCircleDiameter = function () {
        // we set a default diameter of 100 since this is the default in material
        var /** @type {?} */ diameter = TD_CIRCLE_DIAMETER;
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
     * @return {?}
     */
    TdLoadingComponent.prototype._hostHeight = function () {
        if ((this._elementRef.nativeElement)) {
            return ((this._elementRef.nativeElement)).getBoundingClientRect().height;
        }
        return 0;
    };
    return TdLoadingComponent;
}());
TdLoadingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-loading',
                styles: [".td-loading-wrapper{\n  position:relative;\n  display:block; }\n  .td-loading-wrapper.td-fullscreen{\n    position:inherit; }\n  .td-loading-wrapper .td-loading{\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient:horizontal;\n    -webkit-box-direction:normal;\n        -ms-flex-direction:row;\n            flex-direction:row;\n    -webkit-box-align:center;\n        -ms-flex-align:center;\n            align-items:center;\n    -ms-flex-line-pack:center;\n        align-content:center;\n    max-width:100%;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n  .td-loading-wrapper.td-overlay .td-loading{\n    position:absolute;\n    margin:0;\n    top:0;\n    left:0;\n    right:0;\n    z-index:1000; }\n    .td-loading-wrapper.td-overlay .td-loading mat-progress-bar{\n      position:absolute;\n      top:0;\n      left:0;\n      right:0; }\n  .td-loading-wrapper.td-overlay-circular .td-loading{\n    bottom:0; }\n"],
                template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\"\n                        [mode]=\"mode\"\n                        [value]=\"value\"\n                        [color]=\"color\"\n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\"\n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalHost]=\"content\"></ng-template>\n</div>",
                animations: [
                    common$1.TdFadeInOutAnimation(),
                ],
            },] },
];
/** @nocollapse */
TdLoadingComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * NOTE: \@internal usage only.
 */
var TdLoadingFactory = /** @class */ (function () {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _overlay
     * @param {?} _injector
     */
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
     * @param {?} options
     * @return {?}
     */
    TdLoadingFactory.prototype.createFullScreenComponent = function (options) {
        var _this = this;
        ((options)).height = undefined;
        ((options)).style = LoadingStyle.FullScreen;
        var /** @type {?} */ loadingRef = this._initializeContext();
        var /** @type {?} */ loading = false;
        var /** @type {?} */ overlayRef;
        loadingRef.observable
            .subscribe(function (registered) {
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
                var /** @type {?} */ subs_1 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
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
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    TdLoadingFactory.prototype.createOverlayComponent = function (options, viewContainerRef, templateRef) {
        ((options)).height = undefined;
        ((options)).style = LoadingStyle.Overlay;
        var /** @type {?} */ loadingRef = this._createComponent(options);
        var /** @type {?} */ loading = false;
        loadingRef.componentRef.instance.content = new portal.TemplatePortal(templateRef, viewContainerRef);
        viewContainerRef.clear();
        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        loadingRef.observable
            .subscribe(function (registered) {
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
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    TdLoadingFactory.prototype.createReplaceComponent = function (options, viewContainerRef, templateRef, context) {
        var /** @type {?} */ nativeElement = (templateRef.elementRef.nativeElement);
        ((options)).height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        ((options)).style = LoadingStyle.None;
        var /** @type {?} */ loadingRef = this._createComponent(options);
        var /** @type {?} */ loading = false;
        viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable
            .subscribe(function (registered) {
            if (registered > 0 && !loading) {
                loading = true;
                var /** @type {?} */ index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.clear();
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                var /** @type {?} */ subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                    subs_2.unsubscribe();
                    // passing context so when the template is re-attached, we can keep the reference of the variables
                    var /** @type {?} */ cdr = viewContainerRef.createEmbeddedView(templateRef, context);
                    viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                    /**
                               * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                               * with "OnPush" change detection
                               */
                    cdr.detectChanges();
                    cdr.markForCheck();
                });
            }
        });
        return loadingRef;
    };
    /**
     * Creates a fullscreen overlay for the loading usage.
     * @return {?}
     */
    TdLoadingFactory.prototype._createOverlay = function () {
        var /** @type {?} */ state$$1 = new overlay.OverlayConfig();
        state$$1.hasBackdrop = false;
        state$$1.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state$$1);
    };
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @param {?} options
     * @return {?}
     */
    TdLoadingFactory.prototype._createComponent = function (options) {
        var /** @type {?} */ compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent).create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    };
    /**
     * Initialize context for loading component.
     * @return {?}
     */
    TdLoadingFactory.prototype._initializeContext = function () {
        var /** @type {?} */ subject = new Subject.Subject();
        return {
            observable: subject.asObservable(),
            subject: subject,
            componentRef: undefined,
            times: 0,
        };
    };
    /**
     * Maps configuration to the loading component instance.
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    TdLoadingFactory.prototype._mapOptions = function (options, instance) {
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
    return TdLoadingFactory;
}());
TdLoadingFactory.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TdLoadingFactory.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver, },
    { type: overlay.Overlay, },
    { type: core.Injector, },
]; };
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
var LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingFactory], core.ComponentFactoryResolver, overlay.Overlay, core.Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var TdLoadingConfig = /** @class */ (function () {
    /**
     * @param {?} config
     */
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
/**
 * @record
 */
var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
    __extends(TdLoadingDirectiveConfig, _super);
    /**
     * @param {?} config
     */
    function TdLoadingDirectiveConfig(config) {
        var _this = _super.call(this, config) || this;
        _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
        return _this;
    }
    return TdLoadingDirectiveConfig;
}(TdLoadingConfig));
var TdLoadingService = /** @class */ (function () {
    /**
     * @param {?} _loadingFactory
     */
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
     * NOTE: \@internal usage only.
     * @param {?} config
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    TdLoadingService.prototype.createComponent = function (config, viewContainerRef, templateRef, context) {
        var /** @type {?} */ directiveConfig = new TdLoadingDirectiveConfig(config);
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
     * @param {?} config
     * @return {?}
     */
    TdLoadingService.prototype.create = function (config) {
        var /** @type {?} */ fullscreenConfig = new TdLoadingConfig(config);
        this.removeComponent(fullscreenConfig.name);
        this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
    };
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     * @param {?} name
     * @return {?}
     */
    TdLoadingService.prototype.removeComponent = function (name) {
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
     * @param {?=} name
     * @param {?=} registers
     * @return {?}
     */
    TdLoadingService.prototype.register = function (name, registers) {
        var _this = this;
        if (name === void 0) { name = 'td-loading-main'; }
        if (registers === void 0) { registers = 1; }
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
     * @param {?=} name
     * @param {?=} resolves
     * @return {?}
     */
    TdLoadingService.prototype.resolve = function (name, resolves) {
        if (name === void 0) { name = 'td-loading-main'; }
        if (resolves === void 0) { resolves = 1; }
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            resolves = resolves < 1 ? 1 : resolves;
            if (this._context[name].times > 0) {
                var /** @type {?} */ times = this._context[name].times;
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
     * @param {?=} name
     * @return {?}
     */
    TdLoadingService.prototype.resolveAll = function (name) {
        if (name === void 0) { name = 'td-loading-main'; }
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
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    TdLoadingService.prototype.setValue = function (name, value) {
        if (this._context[name]) {
            var /** @type {?} */ instance = this._context[name].componentRef.instance;
            if (instance.mode === LoadingMode.Determinate && instance.animation) {
                instance.value = value;
                return true;
            }
        }
        return false;
    };
    /**
     * Clears timeout linked to the name.
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    TdLoadingService.prototype._clearTimeout = function (name) {
        clearTimeout(this._timeouts[name]);
        delete this._timeouts[name];
    };
    return TdLoadingService;
}());
TdLoadingService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TdLoadingService.ctorParameters = function () { return [
    { type: TdLoadingFactory, },
]; };
/**
 * @param {?} parent
 * @param {?} loadingFactory
 * @return {?}
 */
function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
var LOADING_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Context class for variable reference
 */
var TdLoadingContext = /** @class */ (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
// Constant for generation of the id for the next component
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _templateRef
     * @param {?} _loadingService
     */
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
         * @param {?} name
         * @return {?}
         */
        set: function (name) {
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
         * @param {?} until
         * @return {?}
         */
        set: function (until) {
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
         * @param {?} type
         * @return {?}
         */
        set: function (type) {
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
         * @param {?} mode
         * @return {?}
         */
        set: function (mode) {
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
         * @param {?} stategy
         * @return {?}
         */
        set: function (stategy) {
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
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnInit = function () {
        this._registerComponent();
    };
    /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnDestroy = function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @return {?}
     */
    TdLoadingDirective.prototype._registerComponent = function () {
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
    return TdLoadingDirective;
}());
TdLoadingDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdLoading]',
            },] },
];
/** @nocollapse */
TdLoadingDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.TemplateRef, },
    { type: TdLoadingService, },
]; };
TdLoadingDirective.propDecorators = {
    "name": [{ type: core.Input, args: ['tdLoading',] },],
    "until": [{ type: core.Input, args: ['tdLoadingUntil',] },],
    "type": [{ type: core.Input, args: ['tdLoadingType',] },],
    "mode": [{ type: core.Input, args: ['tdLoadingMode',] },],
    "strategy": [{ type: core.Input, args: ['tdLoadingStrategy',] },],
    "color": [{ type: core.Input, args: ['tdLoadingColor',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
var CovalentLoadingModule = /** @class */ (function () {
    function CovalentLoadingModule() {
    }
    return CovalentLoadingModule;
}());
CovalentLoadingModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentLoadingModule.ctorParameters = function () { return []; };
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
var TdMediaService = /** @class */ (function () {
    /**
     * @param {?} _ngZone
     */
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
        // we make sure that the resize checking happend outside of angular since it happens often
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return fromEvent.fromEvent(window, 'resize').subscribe(function () {
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
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype.deregisterQuery = function (query$$1) {
        if (this._queryMap.get(query$$1.toLowerCase())) {
            query$$1 = this._queryMap.get(query$$1.toLowerCase());
        }
        this._querySources[query$$1].unsubscribe();
        delete this._querySources[query$$1];
        delete this._queryObservables[query$$1];
    };
    /**
     * Used to evaluate whether a given media query is true or false given the current device's screen / window size.
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype.query = function (query$$1) {
        if (this._queryMap.get(query$$1.toLowerCase())) {
            query$$1 = this._queryMap.get(query$$1.toLowerCase());
        }
        return this._ngZone.run(function () {
            return matchMedia(query$$1).matches;
        });
    };
    /**
     * Registers a media query and returns an [Observable] that will re-evaluate and
     * return if the given media query matches on window resize.
     * Note: don't forget to unsubscribe from [Observable] when finished watching.
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype.registerQuery = function (query$$1) {
        if (this._queryMap.get(query$$1.toLowerCase())) {
            query$$1 = this._queryMap.get(query$$1.toLowerCase());
        }
        if (!this._querySources[query$$1]) {
            this._querySources[query$$1] = new BehaviorSubject.BehaviorSubject(matchMedia(query$$1).matches);
            this._queryObservables[query$$1] = this._querySources[query$$1].asObservable();
        }
        return this._queryObservables[query$$1];
    };
    /**
     * Trigger a match media event on all subscribed observables.
     * @return {?}
     */
    TdMediaService.prototype.broadcast = function () {
        this._onResize();
    };
    /**
     * @return {?}
     */
    TdMediaService.prototype._onResize = function () {
        var _this = this;
        var _loop_1 = function (query$$1) {
            this_1._ngZone.run(function () {
                _this._matchMediaTrigger(query$$1);
            });
        };
        var this_1 = this;
        for (var /** @type {?} */ query$$1 in this._querySources) {
            _loop_1(/** @type {?} */ query$$1);
        }
    };
    /**
     * @param {?} query
     * @return {?}
     */
    TdMediaService.prototype._matchMediaTrigger = function (query$$1) {
        this._querySources[query$$1].next(matchMedia(query$$1).matches);
    };
    return TdMediaService;
}());
TdMediaService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TdMediaService.ctorParameters = function () { return [
    { type: core.NgZone, },
]; };
/**
 * @param {?} parent
 * @param {?} ngZone
 * @return {?}
 */
function MEDIA_PROVIDER_FACTORY(parent, ngZone) {
    return parent || new TdMediaService(ngZone);
}
var MEDIA_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdMediaService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdMediaService], core.NgZone],
    useFactory: MEDIA_PROVIDER_FACTORY,
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdMediaToggleDirective = /** @class */ (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _mediaService
     */
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
         * @param {?} query
         * @return {?}
         */
        set: function (query$$1) {
            if (!query$$1) {
                throw new Error('Query needed for [tdMediaToggle] directive.');
            }
            this._query = query$$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
        /**
         * mediaAttributes: {[key: string]: string}
         * Attributes to be toggled when media query matches.
         * @param {?} attributes
         * @return {?}
         */
        set: function (attributes) {
            this._attributes = attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
        /**
         * mediaClasses: string[]
         * CSS Classes to be toggled when media query matches.
         * @param {?} classes
         * @return {?}
         */
        set: function (classes) {
            this._classes = classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
        /**
         * mediaStyles: {[key: string]: string}
         * CSS Styles to be toggled when media query matches.
         * @param {?} styles
         * @return {?}
         */
        set: function (styles) {
            this._styles = styles;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
            _this._mediaChange(matches);
        });
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype.ngOnDestroy = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @param {?} matches
     * @return {?}
     */
    TdMediaToggleDirective.prototype._mediaChange = function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeAttributes = function () {
        for (var /** @type {?} */ attr in this._attributes) {
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
    TdMediaToggleDirective.prototype._changeClasses = function () {
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
    TdMediaToggleDirective.prototype._changeStyles = function () {
        for (var /** @type {?} */ style$$1 in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style$$1, this._styles[style$$1]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style$$1);
            }
        }
    };
    return TdMediaToggleDirective;
}());
TdMediaToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[tdMediaToggle]',
            },] },
];
/** @nocollapse */
TdMediaToggleDirective.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: TdMediaService, },
]; };
TdMediaToggleDirective.propDecorators = {
    "query": [{ type: core.Input, args: ['tdMediaToggle',] },],
    "attributes": [{ type: core.Input, args: ['mediaAttributes',] },],
    "classes": [{ type: core.Input, args: ['mediaClasses',] },],
    "styles": [{ type: core.Input, args: ['mediaStyles',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_MEDIA = [
    TdMediaToggleDirective,
];
var CovalentMediaModule = /** @class */ (function () {
    function CovalentMediaModule() {
    }
    return CovalentMediaModule;
}());
CovalentMediaModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentMediaModule.ctorParameters = function () { return []; };
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
var TdMenuComponent = /** @class */ (function () {
    function TdMenuComponent() {
    }
    return TdMenuComponent;
}());
TdMenuComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-menu',
                template: "<ng-content select=\"[td-menu-header]\"></ng-content>\n<mat-divider></mat-divider>\n<div class=\"td-menu-content\">\n  <ng-content></ng-content>\n</div>\n<mat-divider></mat-divider>\n<ng-content select=\"[td-menu-footer]\"></ng-content>",
                styles: [":host{\n  margin-top:-8px;\n  margin-bottom:-8px;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column; }\n:host ::ng-deep [td-menu-header]{\n  padding:8px;\n  text-align:center; }\n:host ::ng-deep mat-list a[mat-list-item].mat-2-line,\n:host ::ng-deep mat-list mat-list-item.mat-2-line,\n:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line,\n:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line,\n:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line,\n:host ::ng-deep mat-nav-list mat-list-item.mat-2-line,\n:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line,\n:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line{\n  height:auto; }\n  :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,\n  :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content{\n    height:auto;\n    padding:8px; }\n    :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,\n    :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{\n      padding-right:0; }\n      [dir='rtl'] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text, [dir='rtl']\n      :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{\n        padding-left:0;\n        padding-right:16px; }\n    :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine] + [matLine],\n    :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine] + [matLine]{\n      margin-top:4px; }\n.td-menu-content{\n  max-height:calc(50vh);\n  overflow-y:auto; }\n"],
            },] },
];
/** @nocollapse */
TdMenuComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_MENU = [
    TdMenuComponent,
];
var CovalentMenuModule = /** @class */ (function () {
    function CovalentMenuModule() {
    }
    return CovalentMenuModule;
}());
CovalentMenuModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentMenuModule.ctorParameters = function () { return []; };
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
var TdSearchInputBase = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     */
    function TdSearchInputBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchInputBase;
}());
/* tslint:disable-next-line */
var _TdSearchInputMixinBase = common$1.mixinControlValueAccessor(TdSearchInputBase);
var TdSearchInputComponent = /** @class */ (function (_super) {
    __extends(TdSearchInputComponent, _super);
    /**
     * @param {?} _dir
     * @param {?} _changeDetectorRef
     */
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
        _this.onSearchDebounce = new core.EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        _this.onSearch = new core.EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        _this.onClear = new core.EventEmitter();
        /**
         * blur: function()
         * Event emitted after the blur event has been called in underlying input.
         */
        _this.onBlur = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdSearchInputComponent.prototype, "isRTL", {
        /**
         * @return {?}
         */
        get: function () {
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
    TdSearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._input.ngControl.valueChanges.pipe(debounceTime.debounceTime(this.debounce), skip.skip(1)).subscribe(function (value) {
            _this._searchTermChanged(value);
        });
    };
    /**
     * Method to focus to underlying input.
     * @return {?}
     */
    TdSearchInputComponent.prototype.focus = function () {
        this._input.focus();
    };
    /**
     * @return {?}
     */
    TdSearchInputComponent.prototype.handleBlur = function () {
        this.onBlur.emit(undefined);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdSearchInputComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TdSearchInputComponent.prototype.handleSearch = function (event) {
        this.stopPropagation(event);
        this.onSearch.emit(this.value);
    };
    /**
     * Method to clear the underlying input.
     * @return {?}
     */
    TdSearchInputComponent.prototype.clearSearch = function () {
        this.value = '';
        this._changeDetectorRef.markForCheck();
        this.onClear.emit(undefined);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchInputComponent.prototype._searchTermChanged = function (value) {
        this.onSearchDebounce.emit(value);
    };
    return TdSearchInputComponent;
}(_TdSearchInputMixinBase));
TdSearchInputComponent.decorators = [
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdSearchInputComponent; }),
                        multi: true,
                    }],
                selector: 'td-search-input',
                template: "<div class=\"td-search-input\">\n  <mat-form-field class=\"td-search-input-field\"\n                  [class.mat-hide-underline]=\"!showUnderline\"\n                  floatPlaceholder=\"never\">\n    <input matInput\n            #searchElement\n            type=\"search\"\n            [(ngModel)]=\"value\"\n            [placeholder]=\"placeholder\"\n            (blur)=\"handleBlur()\"\n            (search)=\"stopPropagation($event)\"\n            (keyup.enter)=\"handleSearch($event)\"/>\n  </mat-form-field>\n  <button mat-icon-button\n          class=\"td-search-input-clear\"\n          type=\"button\"\n          [@searchState]=\"(searchElement.value ?  'show' : (isRTL ? 'hide-left' : 'hide-right'))\"\n          (click)=\"clearSearch()\">\n    <mat-icon>{{clearIcon}}</mat-icon>\n  </button>\n</div>",
                styles: [".td-search-input{\n  overflow-x:hidden;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -ms-flex-line-pack:center;\n      align-content:center;\n  max-width:100%;\n  -webkit-box-pack:end;\n      -ms-flex-pack:end;\n          justify-content:flex-end; }\n  .td-search-input .td-search-input-field{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1; }\n  .td-search-input ::ng-deep mat-form-field.mat-hide-underline .mat-form-field-underline{\n    display:none; }\n  .td-search-input .td-search-input-clear{\n    -webkit-box-flex:0;\n        -ms-flex:0 0 auto;\n            flex:0 0 auto; }\n"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
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
            },] },
];
/** @nocollapse */
TdSearchInputComponent.ctorParameters = function () { return [
    { type: bidi.Dir, decorators: [{ type: core.Optional },] },
    { type: core.ChangeDetectorRef, },
]; };
TdSearchInputComponent.propDecorators = {
    "_input": [{ type: core.ViewChild, args: [input.MatInput,] },],
    "showUnderline": [{ type: core.Input, args: ['showUnderline',] },],
    "debounce": [{ type: core.Input, args: ['debounce',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "clearIcon": [{ type: core.Input, args: ['clearIcon',] },],
    "onSearchDebounce": [{ type: core.Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: core.Output, args: ['search',] },],
    "onClear": [{ type: core.Output, args: ['clear',] },],
    "onBlur": [{ type: core.Output, args: ['blur',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdSearchBoxBase = /** @class */ (function () {
    /**
     * @param {?} _changeDetectorRef
     */
    function TdSearchBoxBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdSearchBoxBase;
}());
/* tslint:disable-next-line */
var _TdSearchBoxMixinBase = common$1.mixinControlValueAccessor(TdSearchBoxBase);
var TdSearchBoxComponent = /** @class */ (function (_super) {
    __extends(TdSearchBoxComponent, _super);
    /**
     * @param {?} _changeDetectorRef
     */
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
        _this.onSearchDebounce = new core.EventEmitter();
        /**
         * search: function($event)
         * Event emitted after the key enter has been pressed.
         */
        _this.onSearch = new core.EventEmitter();
        /**
         * clear: function()
         * Event emitted after the clear icon has been clicked.
         */
        _this.onClear = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdSearchBoxComponent.prototype, "searchVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._searchVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when the search icon is clicked.
     * @return {?}
     */
    TdSearchBoxComponent.prototype.searchClicked = function () {
        if (this.alwaysVisible || !this._searchVisible) {
            this._searchInput.focus();
        }
        this.toggleVisibility();
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.toggleVisibility = function () {
        this._searchVisible = !this._searchVisible;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleSearchDebounce = function (value) {
        this.onSearchDebounce.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleSearch = function (value) {
        this.onSearch.emit(value);
    };
    /**
     * @return {?}
     */
    TdSearchBoxComponent.prototype.handleClear = function () {
        this.onClear.emit(undefined);
    };
    return TdSearchBoxComponent;
}(_TdSearchBoxMixinBase));
TdSearchBoxComponent.decorators = [
    { type: core.Component, args: [{
                providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TdSearchBoxComponent; }),
                        multi: true,
                    }],
                selector: 'td-search-box',
                template: "<div class=\"td-search-box\">\n  <button mat-icon-button type=\"button\" class=\"td-search-icon\" (click)=\"searchClicked()\">\n    <mat-icon *ngIf=\"searchVisible && !alwaysVisible\">{{backIcon}}</mat-icon>\n    <mat-icon *ngIf=\"!searchVisible || alwaysVisible\">{{searchIcon}}</mat-icon>\n  </button>\n  <td-search-input #searchInput\n                   [@inputState]=\"alwaysVisible || searchVisible\"\n                   [debounce]=\"debounce\"\n                   [(ngModel)]=\"value\"\n                   [showUnderline]=\"showUnderline\"\n                   [placeholder]=\"placeholder\"\n                   [clearIcon]=\"clearIcon\"\n                   (searchDebounce)=\"handleSearchDebounce($event)\"\n                   (search)=\"handleSearch($event)\"\n                   (clear)=\"handleClear(); toggleVisibility()\">\n  </td-search-input>\n</div>",
                styles: [":host{\n  display:block; }\n.td-search-box{\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -ms-flex-line-pack:center;\n      align-content:center;\n  max-width:100%;\n  -webkit-box-pack:end;\n      -ms-flex-pack:end;\n          justify-content:flex-end; }\n  .td-search-box .td-search-icon{\n    -webkit-box-flex:0;\n        -ms-flex:0 0 auto;\n            flex:0 0 auto; }\n  .td-search-box td-search-input{\n    margin-left:12px; }\n    ::ng-deep [dir='rtl'] .td-search-box td-search-input{\n      margin-right:12px;\n      margin-left:0 !important; }\n"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
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
            },] },
];
/** @nocollapse */
TdSearchBoxComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
]; };
TdSearchBoxComponent.propDecorators = {
    "_searchInput": [{ type: core.ViewChild, args: [TdSearchInputComponent,] },],
    "backIcon": [{ type: core.Input, args: ['backIcon',] },],
    "searchIcon": [{ type: core.Input, args: ['searchIcon',] },],
    "clearIcon": [{ type: core.Input, args: ['clearIcon',] },],
    "showUnderline": [{ type: core.Input, args: ['showUnderline',] },],
    "debounce": [{ type: core.Input, args: ['debounce',] },],
    "alwaysVisible": [{ type: core.Input, args: ['alwaysVisible',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "onSearchDebounce": [{ type: core.Output, args: ['searchDebounce',] },],
    "onSearch": [{ type: core.Output, args: ['search',] },],
    "onClear": [{ type: core.Output, args: ['clear',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CovalentSearchModule = /** @class */ (function () {
    function CovalentSearchModule() {
    }
    return CovalentSearchModule;
}());
CovalentSearchModule.decorators = [
    { type: core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
CovalentSearchModule.ctorParameters = function () { return []; };
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
/** @enum {string} */
var StepState = {
    None: 'none',
    Required: 'required',
    Complete: 'complete',
};
var TdStepLabelDirective = /** @class */ (function (_super) {
    __extends(TdStepLabelDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdStepLabelDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepLabelDirective;
}(portal.TemplatePortalDirective));
TdStepLabelDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-step-label]ng-template',
            },] },
];
/** @nocollapse */
TdStepLabelDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdStepActionsDirective = /** @class */ (function (_super) {
    __extends(TdStepActionsDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdStepActionsDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepActionsDirective;
}(portal.TemplatePortalDirective));
TdStepActionsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-step-actions]ng-template',
            },] },
];
/** @nocollapse */
TdStepActionsDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdStepSummaryDirective = /** @class */ (function (_super) {
    __extends(TdStepSummaryDirective, _super);
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    function TdStepSummaryDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TdStepSummaryDirective;
}(portal.TemplatePortalDirective));
TdStepSummaryDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[td-step-summary]ng-template',
            },] },
];
/** @nocollapse */
TdStepSummaryDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
]; };
var TdStepBase = /** @class */ (function () {
    function TdStepBase() {
    }
    return TdStepBase;
}());
/* tslint:disable-next-line */
var _TdStepMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdStepBase));
var TdStepComponent = /** @class */ (function (_super) {
    __extends(TdStepComponent, _super);
    /**
     * @param {?} _viewContainerRef
     */
    function TdStepComponent(_viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._active = false;
        _this._state = StepState.None;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        _this.onActivated = new core.EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        _this.onDeactivated = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(TdStepComponent.prototype, "stepContent", {
        /**
         * @return {?}
         */
        get: function () {
            return this._contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepComponent.prototype, "active", {
        /**
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        /**
         * active?: boolean
         * Toggles [TdStepComponent] between active/deactive.
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            this._setActive(coercion.coerceBooleanProperty(active));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepComponent.prototype, "state", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state;
        },
        /**
         * state?: StepState or ['none' | 'required' | 'complete']
         * Sets state of [TdStepComponent] depending on value.
         * Defaults to [StepState.None | 'none'].
         * @param {?} state
         * @return {?}
         */
        set: function (state$$1) {
            switch (state$$1) {
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
    TdStepComponent.prototype.ngOnInit = function () {
        this._contentPortal = new portal.TemplatePortal(this._content, this._viewContainerRef);
    };
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdStepComponent.prototype.toggle = function () {
        return this._setActive(!this._active);
    };
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdStepComponent.prototype.open = function () {
        return this._setActive(true);
    };
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    TdStepComponent.prototype.close = function () {
        return this._setActive(false);
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    TdStepComponent.prototype.isComplete = function () {
        return this._state === StepState.Complete;
    };
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdStepComponent.prototype.onDisabledChange = function (v) {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    };
    /**
     * Method to change active state internally and emit the [onActivated] event if 'true' or [onDeactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     * @param {?} newActive
     * @return {?}
     */
    TdStepComponent.prototype._setActive = function (newActive) {
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
    TdStepComponent.prototype._onActivated = function () {
        this.onActivated.emit(undefined);
    };
    /**
     * @return {?}
     */
    TdStepComponent.prototype._onDeactivated = function () {
        this.onDeactivated.emit(undefined);
    };
    return TdStepComponent;
}(_TdStepMixinBase));
TdStepComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-step',
                inputs: ['disabled', 'disableRipple'],
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
            },] },
];
/** @nocollapse */
TdStepComponent.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
TdStepComponent.propDecorators = {
    "_content": [{ type: core.ViewChild, args: [core.TemplateRef,] },],
    "stepLabel": [{ type: core.ContentChild, args: [TdStepLabelDirective,] },],
    "stepActions": [{ type: core.ContentChild, args: [TdStepActionsDirective,] },],
    "stepSummary": [{ type: core.ContentChild, args: [TdStepSummaryDirective,] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "sublabel": [{ type: core.Input, args: ['sublabel',] },],
    "active": [{ type: core.Input, args: ['active',] },],
    "state": [{ type: core.Input, args: ['state',] },],
    "onActivated": [{ type: core.Output, args: ['activated',] },],
    "onDeactivated": [{ type: core.Output, args: ['deactivated',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
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
        this.onStepChange = new core.EventEmitter();
    }
    Object.defineProperty(TdStepsComponent.prototype, "stepsContent", {
        /**
         * @param {?} steps
         * @return {?}
         */
        set: function (steps) {
            if (steps) {
                this._steps = steps;
                this._registerSteps();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "steps", {
        /**
         * @return {?}
         */
        get: function () {
            return this._steps.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepsComponent.prototype, "mode", {
        /**
         * @return {?}
         */
        get: function () {
            return this._mode;
        },
        /**
         * mode?: StepMode or ["vertical" | "horizontal"]
         * Defines if the mode of the [TdStepsComponent].  Defaults to [StepMode.Vertical | "vertical"]
         * @param {?} mode
         * @return {?}
         */
        set: function (mode) {
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
     * @return {?}
     */
    TdStepsComponent.prototype.ngAfterContentInit = function () {
        this._registerSteps();
    };
    /**
     * Unsubscribes from [TdStepComponent] children elements when component is destroyed.
     * @return {?}
     */
    TdStepsComponent.prototype.ngOnDestroy = function () {
        this._deregisterSteps();
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Horizontal | 'horizontal'], else 'false'.
     * @return {?}
     */
    TdStepsComponent.prototype.isHorizontal = function () {
        return this._mode === StepMode.Horizontal;
    };
    /**
     * Returns 'true' if [mode] equals to [StepMode.Vertical | 'vertical'], else 'false'.
     * @return {?}
     */
    TdStepsComponent.prototype.isVertical = function () {
        return this._mode === StepMode.Vertical;
    };
    /**
     * @return {?}
     */
    TdStepsComponent.prototype.areStepsActive = function () {
        return this._steps.filter(function (step) {
            return step.active;
        }).length > 0;
    };
    /**
     * Wraps previous and new [TdStepComponent] numbers in an object that implements [IStepChangeEvent]
     * and emits [onStepChange] event.
     * @param {?} step
     * @return {?}
     */
    TdStepsComponent.prototype._onStepSelection = function (step) {
        if (this.prevStep !== step) {
            var /** @type {?} */ prevStep = this.prevStep;
            this.prevStep = step;
            var /** @type {?} */ event = {
                newStep: step,
                prevStep: prevStep,
            };
            this._deactivateAllBut(step);
            this.onStepChange.emit(event);
        }
    };
    /**
     * Loops through [TdStepComponent] children elements and deactivates them ignoring the one passed as an argument.
     * @param {?} activeStep
     * @return {?}
     */
    TdStepsComponent.prototype._deactivateAllBut = function (activeStep) {
        this._steps.filter(function (step) { return step !== activeStep; })
            .forEach(function (step) {
            step.active = false;
        });
    };
    /**
     * @return {?}
     */
    TdStepsComponent.prototype._registerSteps = function () {
        var _this = this;
        this._subcriptions = [];
        this._steps.toArray().forEach(function (step) {
            var /** @type {?} */ subscription = step.onActivated.asObservable().subscribe(function () {
                _this._onStepSelection(step);
            });
            _this._subcriptions.push(subscription);
        });
    };
    /**
     * @return {?}
     */
    TdStepsComponent.prototype._deregisterSteps = function () {
        if (this._subcriptions) {
            this._subcriptions.forEach(function (subs) {
                subs.unsubscribe();
            });
            this._subcriptions = undefined;
        }
    };
    return TdStepsComponent;
}());
TdStepsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-steps',
                styles: [".td-line-wrapper,\n.td-step{\n  position:relative; }\n.td-steps-header{\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row; }\n.td-line-wrapper{\n  width:24px;\n  min-height:1px; }\n.td-horizontal-line{\n  border-bottom-width:1px;\n  border-bottom-style:solid;\n  height:1px;\n  position:relative;\n  top:36px;\n  min-width:15px;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box; }\n  ::ng-deep :not([dir='rtl']) .td-horizontal-line{\n    left:-6px;\n    right:-3px; }\n  ::ng-deep [dir='rtl'] .td-horizontal-line{\n    left:-3px;\n    right:-6px; }\n.td-vertical-line{\n  position:absolute;\n  bottom:-16px;\n  top:-16px;\n  border-left-width:1px;\n  border-left-style:solid; }\n  ::ng-deep :not([dir='rtl']) .td-vertical-line{\n    left:20px;\n    right:auto; }\n  ::ng-deep [dir='rtl'] .td-vertical-line{\n    left:auto;\n    right:20px; }\n"],
                template: "<div *ngIf=\"isHorizontal()\" class=\"td-steps-header\">\n  <ng-template let-step let-index=\"index\" let-last=\"last\" ngFor [ngForOf]=\"steps\">\n    <td-step-header class=\"td-step-horizontal-header\"\n                    (keydown.enter)=\"step.open()\"\n                    [number]=\"index + 1\"\n                    [active]=\"step.active\"\n                    [disableRipple]=\"step.disableRipple\"\n                    [disabled]=\"step.disabled\"\n                    [state]=\"step.state\"\n                    (click)=\"step.open()\">\n      <ng-template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></ng-template>\n      <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n      <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel | truncate:30}}</ng-template>\n    </td-step-header>\n    <span *ngIf=\"!last\" class=\"td-horizontal-line\"></span>\n  </ng-template>\n</div>\n<div *ngFor=\"let step of steps; let index = index; let last = last\" class=\"td-step\">\n  <td-step-header class=\"td-step-vertical-header\"\n                  (keydown.enter)=\"step.toggle()\"\n                  [number]=\"index + 1\"\n                  [active]=\"step.active\"\n                  [disabled]=\"step.disabled\"\n                  [disableRipple]=\"step.disableRipple\"\n                  [state]=\"step.state\"\n                  (click)=\"step.toggle()\"\n                  *ngIf=\"isVertical()\">\n    <ng-template td-step-header-label [cdkPortalHost]=\"step.stepLabel\"></ng-template>\n    <ng-template td-step-header-label [ngIf]=\"!step.stepLabel\">{{step.label}}</ng-template>\n    <ng-template td-step-header-sublabel [ngIf]=\"true\">{{step.sublabel}}</ng-template>\n  </td-step-header>\n  <ng-template [ngIf]=\"isVertical() || step.active || (!areStepsActive() && prevStep === step)\">\n    <td-step-body [active]=\"step.active\" [state]=\"step.state\">\n      <div *ngIf=\"isVertical()\" class=\"td-line-wrapper\">\n        <div *ngIf=\"!last\" class=\"td-vertical-line\"></div>\n      </div>\n      <ng-template td-step-body-content [cdkPortalHost]=\"step.stepContent\"></ng-template>\n      <ng-template td-step-body-actions [cdkPortalHost]=\"step.stepActions\"></ng-template>\n      <ng-template td-step-body-summary [cdkPortalHost]=\"step.stepSummary\"></ng-template>\n    </td-step-body>\n  </ng-template>\n</div>\n",
            },] },
];
/** @nocollapse */
TdStepsComponent.ctorParameters = function () { return []; };
TdStepsComponent.propDecorators = {
    "stepsContent": [{ type: core.ContentChildren, args: [TdStepComponent,] },],
    "mode": [{ type: core.Input, args: ['mode',] },],
    "onStepChange": [{ type: core.Output, args: ['stepChange',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TdStepHeaderBase = /** @class */ (function () {
    function TdStepHeaderBase() {
    }
    return TdStepHeaderBase;
}());
/* tslint:disable-next-line */
var _TdStepHeaderMixinBase = common$1.mixinDisableRipple(common$1.mixinDisabled(TdStepHeaderBase));
var TdStepHeaderComponent = /** @class */ (function (_super) {
    __extends(TdStepHeaderComponent, _super);
    function TdStepHeaderComponent() {
        var _this = _super.apply(this, __spread(arguments)) || this;
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
     * @return {?}
     */
    TdStepHeaderComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    /**
     * Returns 'true' if [state] equals to [StepState.Required | 'required'], else 'false'.
     * @return {?}
     */
    TdStepHeaderComponent.prototype.isRequired = function () {
        return this.state === StepState.Required;
    };
    return TdStepHeaderComponent;
}(_TdStepHeaderMixinBase));
TdStepHeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-step-header',
                inputs: ['disabled', 'disableRipple'],
                styles: [".td-step-header{\n  position:relative;\n  outline:none;\n  height:72px;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-flex:1;\n      -ms-flex:1;\n          flex:1;\n  -webkit-box-pack:start;\n      -ms-flex-pack:start;\n          justify-content:start;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -ms-flex-line-pack:center;\n      align-content:center;\n  max-width:100%; }\n  .td-step-header:hover:not(.mat-disabled){\n    cursor:pointer; }\n  .td-step-header mat-icon.td-edit-icon{\n    margin:0 8px; }\n  .td-step-header mat-icon.mat-warn{\n    font-size:24px;\n    height:24px;\n    width:24px; }\n  .td-step-header mat-icon.mat-complete{\n    position:relative;\n    left:-2px;\n    top:2px;\n    font-size:28px;\n    height:24px;\n    width:24px; }\n  .td-step-header .td-circle{\n    height:24px;\n    width:24px;\n    line-height:24px;\n    border-radius:99%;\n    text-align:center;\n    -webkit-box-flex:0;\n        -ms-flex:none;\n            flex:none; }\n    .td-step-header .td-circle mat-icon{\n      margin-top:2px;\n      font-weight:bold; }\n  .td-step-header .td-triangle > mat-icon{\n    font-size:25px; }\n  .td-step-header .td-complete{\n    font-size:0; }\n  ::ng-deep :not([dir='rtl']) .td-step-header .td-circle, ::ng-deep :not([dir='rtl'])\n  .td-step-header .td-triangle, ::ng-deep :not([dir='rtl'])\n  .td-step-header .td-complete{\n    margin-left:8px;\n    margin-right:0; }\n  ::ng-deep [dir='rtl'] .td-step-header .td-circle, ::ng-deep [dir='rtl']\n  .td-step-header .td-triangle, ::ng-deep [dir='rtl']\n  .td-step-header .td-complete{\n    margin-left:0;\n    margin-right:8px; }\n  .td-step-header .td-circle,\n  .td-step-header .td-complete{\n    font-size:14px; }\n  .td-step-header .td-step-label-wrapper{\n    padding-left:8px;\n    padding-right:8px; }\n  .td-step-header .td-step-header-separator{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box; }\n"],
                template: "<div class=\"td-step-header\"\n      [class.mat-disabled]=\"disabled\"\n      matRipple\n      [matRippleDisabled]=\"disabled || disableRipple\"\n      [tabIndex]=\"disabled ? -1 : 0\">\n  <div class=\"td-circle\"\n      [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n      [class.mat-active]=\"active && !disabled\"\n      *ngIf=\"!isRequired() && !isComplete()\">\n    <span *ngIf=\"(active || !isComplete())\">{{number || ''}}</span>\n  </div>\n  <div class=\"td-complete\" *ngIf=\"isComplete()\">\n    <mat-icon class=\"mat-complete\">check_circle</mat-icon>\n  </div>\n  <div class=\"td-triangle\"\n      [class.bg-muted]=\"disabled\"\n      *ngIf=\"isRequired()\">\n    <mat-icon class=\"mat-warn\">warning</mat-icon>\n  </div>\n  <div class=\"td-step-label-wrapper\"\n        [class.mat-inactive]=\"(!active && !isComplete()) || disabled\"\n        [class.mat-warn]=\"isRequired() && !disabled\">\n    <div class=\"td-step-label\">\n      <ng-content select=\"[td-step-header-label]\"></ng-content>\n    </div>\n    <div class=\"td-step-sublabel\">\n      <ng-content select=\"[td-step-header-sublabel]\"></ng-content>\n    </div>\n  </div>\n  <span class=\"td-step-header-separator\"></span>\n  <mat-icon class=\"td-edit-icon\" *ngIf=\"isComplete() && !active && !disabled\">mode_edit</mat-icon>\n</div>",
            },] },
];
/** @nocollapse */
TdStepHeaderComponent.ctorParameters = function () { return []; };
TdStepHeaderComponent.propDecorators = {
    "number": [{ type: core.Input, args: ['number',] },],
    "active": [{ type: core.Input, args: ['active',] },],
    "state": [{ type: core.Input, args: ['state',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        /**
         * @return {?}
         */
        get: function () {
            return this.contentRef &&
                (this.contentRef.nativeElement.children.length > 0 || !!this.contentRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasActions", {
        /**
         * @return {?}
         */
        get: function () {
            return this.actionsRef &&
                (this.actionsRef.nativeElement.children.length > 0 || !!this.actionsRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdStepBodyComponent.prototype, "hasSummary", {
        /**
         * @return {?}
         */
        get: function () {
            return this.summaryRef &&
                (this.summaryRef.nativeElement.children.length > 0 || !!this.summaryRef.nativeElement.textContent.trim());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    TdStepBodyComponent.prototype.isComplete = function () {
        return this.state === StepState.Complete;
    };
    return TdStepBodyComponent;
}());
TdStepBodyComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-step-body',
                styles: [":host{\n  -webkit-box-sizing:border-box;\n          box-sizing:border-box;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row; }\n  :host .td-step-body{\n    overflow-x:hidden;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box; }\n    :host .td-step-body .td-step-summary.ng-animating,\n    :host .td-step-body .td-step-content-wrapper.ng-animating{\n      overflow:hidden; }\n    :host .td-step-body .td-step-content{\n      overflow-x:auto; }\n    :host .td-step-body .td-step-actions{\n      -webkit-box-sizing:border-box;\n              box-sizing:border-box;\n      display:-webkit-box;\n      display:-ms-flexbox;\n      display:flex;\n      -webkit-box-orient:horizontal;\n      -webkit-box-direction:normal;\n          -ms-flex-direction:row;\n              flex-direction:row; }\n"],
                template: "<ng-content></ng-content>\n<div class=\"td-step-body\">\n  <div class=\"td-step-content-wrapper\"\n       [@tdCollapse]=\"!active\">\n    <div #contentRef cdkScrollable [class.td-step-content]=\"hasContent\">\n      <ng-content select=\"[td-step-body-content]\"></ng-content>\n    </div>\n    <div #actionsRef\n         [class.td-step-actions]=\"hasActions\">\n      <ng-content select=\"[td-step-body-actions]\"></ng-content>\n    </div>\n  </div>\n  <div #summaryRef\n       [@tdCollapse]=\"active || !isComplete()\"\n       [class.td-step-summary]=\"hasSummary\">\n    <ng-content select=\"[td-step-body-summary]\"></ng-content>\n  </div>\n</div>",
                animations: [
                    common$1.TdCollapseAnimation(),
                ],
            },] },
];
/** @nocollapse */
TdStepBodyComponent.ctorParameters = function () { return []; };
TdStepBodyComponent.propDecorators = {
    "contentRef": [{ type: core.ViewChild, args: ['contentRef', { read: core.ElementRef },] },],
    "actionsRef": [{ type: core.ViewChild, args: ['actionsRef', { read: core.ElementRef },] },],
    "summaryRef": [{ type: core.ViewChild, args: ['summaryRef', { read: core.ElementRef },] },],
    "active": [{ type: core.Input, args: ['active',] },],
    "state": [{ type: core.Input, args: ['state',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
];
var CovalentStepsModule = /** @class */ (function () {
    function CovalentStepsModule() {
    }
    return CovalentStepsModule;
}());
CovalentStepsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    icon.MatIconModule,
                    core$1.MatRippleModule,
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
            },] },
];
/** @nocollapse */
CovalentStepsModule.ctorParameters = function () { return []; };

exports.CovalentPagingModule = CovalentPagingModule;
exports.TdPagingBarComponent = TdPagingBarComponent;
exports.CovalentVirtualScrollModule = CovalentVirtualScrollModule;
exports.TdVirtualScrollContainerComponent = TdVirtualScrollContainerComponent;
exports.TdVirtualScrollRowDirective = TdVirtualScrollRowDirective;
exports.CovalentNotificationsModule = CovalentNotificationsModule;
exports.TdNotificationCountPositionY = TdNotificationCountPositionY;
exports.TdNotificationCountPositionX = TdNotificationCountPositionX;
exports.TdNotificationCountComponent = TdNotificationCountComponent;
exports.CovalentCommonModule = CovalentCommonModule$1;
exports.TdToggleDirective = TdToggleDirective;
exports.TdFadeDirective = TdFadeDirective;
exports.TdRotateAnimation = TdRotateAnimation$1;
exports.TdCollapseAnimation = TdCollapseAnimation$1;
exports.TdFadeInOutAnimation = TdFadeInOutAnimation$1;
exports.TdBounceAnimation = TdBounceAnimation;
exports.TdFlashAnimation = TdFlashAnimation;
exports.TdHeadshakeAnimation = TdHeadshakeAnimation;
exports.TdJelloAnimation = TdJelloAnimation;
exports.TdPulseAnimation = TdPulseAnimation;
exports.mixinControlValueAccessor = mixinControlValueAccessor$1;
exports.mixinDisabled = mixinDisabled$1;
exports.mixinDisableRipple = mixinDisableRipple$1;
exports.TdAutoTrimDirective = TdAutoTrimDirective;
exports.CovalentValidators = CovalentValidators;
exports.TdTimeAgoPipe = TdTimeAgoPipe;
exports.TdTimeDifferencePipe = TdTimeDifferencePipe;
exports.TdBytesPipe = TdBytesPipe;
exports.TdDigitsPipe = TdDigitsPipe;
exports.TdTruncatePipe = TdTruncatePipe;
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
exports.TdDataTableService = TdDataTableService;
exports.DATA_TABLE_PROVIDER_FACTORY = DATA_TABLE_PROVIDER_FACTORY;
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
exports.DIALOG_PROVIDER_FACTORY = DIALOG_PROVIDER_FACTORY;
exports.DIALOG_PROVIDER = DIALOG_PROVIDER;
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
exports.TdLoadingConfig = TdLoadingConfig;
exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
exports.TdLoadingService = TdLoadingService;
exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
exports.LOADING_PROVIDER = LOADING_PROVIDER;
exports.TdLoadingFactory = TdLoadingFactory;
exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;
exports.CovalentMediaModule = CovalentMediaModule;
exports.TdMediaToggleDirective = TdMediaToggleDirective;
exports.TdMediaService = TdMediaService;
exports.MEDIA_PROVIDER_FACTORY = MEDIA_PROVIDER_FACTORY;
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
exports.ɵb = IconService;
exports.ɵa = RouterPathService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core.umd.js.map
