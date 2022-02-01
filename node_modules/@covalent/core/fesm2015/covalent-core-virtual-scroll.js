import { Directive, TemplateRef, ViewContainerRef, EventEmitter, Component, ChangeDetectionStrategy, ElementRef, Renderer2, ChangeDetectorRef, Input, Output, ViewChildren, ContentChild, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: virtual-scroll-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdVirtualScrollRowDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdVirtualScrollRowDirective.decorators = [
    { type: Directive, args: [{ selector: '[tdVirtualScrollRow]' },] }
];
/** @nocollapse */
TdVirtualScrollRowDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * Generated from: virtual-scroll-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_VIRTUAL_OFFSET = 2;
/** @type {?} */
const SCROLL_DEBOUNCE = 200;
/**
 * @record
 */
function ITdVirtualScrollBottomEvent() { }
if (false) {
    /** @type {?} */
    ITdVirtualScrollBottomEvent.prototype.lastRow;
    /** @type {?} */
    ITdVirtualScrollBottomEvent.prototype.lastIndex;
}
class TdVirtualScrollContainerComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _domSanitizer
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _domSanitizer, _renderer, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._subs = [];
        this._bottom = new Subject();
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
        this.bottom = new EventEmitter();
        /**
         * trackBy?: TrackByFunction
         * This accepts the same trackBy function [ngFor] does.
         * https://angular.io/api/core/TrackByFunction
         */
        this.trackBy = (/**
         * @param {?} index
         * @param {?} item
         * @return {?}
         */
        (index, item) => {
            return item;
        });
    }
    /**
     * data: any[]
     * List of items to virtually iterate on.
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        if (this._initialized) {
            this._calculateVirtualRows();
        }
        this._changeDetectorRef.markForCheck();
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
     * @return {?}
     */
    get rowHeight() {
        if (this._rows && this._rows.toArray()[0]) {
            return this._rows.toArray()[0].nativeElement.getBoundingClientRect().height;
        }
        return 0;
    }
    /**
     * @return {?}
     */
    get totalHeight() {
        return this._totalHeight;
    }
    /**
     * @return {?}
     */
    get fromRow() {
        return this._fromRow;
    }
    /**
     * @return {?}
     */
    get toRow() {
        return this._toRow;
    }
    /**
     * @return {?}
     */
    get offsetTransform() {
        return this._offsetTransform;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._subs.push(this._rows.changes.subscribe((/**
         * @return {?}
         */
        () => {
            this._calculateVirtualRows();
        })));
        this._initialized = true;
        this._calculateVirtualRows();
        this._subs.push(this._bottom.pipe(debounceTime(SCROLL_DEBOUNCE)).subscribe((/**
         * @return {?}
         */
        () => {
            this.bottom.emit({
                lastRow: this._data[this._data.length - 1],
                lastIndex: this.toRow,
            });
        })));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
        if (this._hostHeight !== newHostHeight) {
            this._hostHeight = newHostHeight;
            if (this._initialized) {
                this._calculateVirtualRows();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subs) {
            this._subs.forEach((/**
             * @param {?} sub
             * @return {?}
             */
            (sub) => {
                sub.unsubscribe();
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        /** @type {?} */
        const element = (/** @type {?} */ (event.target));
        if (element) {
            /** @type {?} */
            const verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
            }
            if (this._initialized && this._data.length * this.rowHeight - (verticalScroll + this._hostHeight) === 0) {
                // check to see if bottom was hit to throw the bottom event
                this._bottom.next();
            }
        }
    }
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     * @return {?}
     */
    refresh() {
        this._calculateVirtualRows();
    }
    /**
     * Method to scroll to a specific row of the list.
     * @param {?} row
     * @return {?}
     */
    scrollTo(row) {
        this._elementRef.nativeElement.scrollTop = row * this.rowHeight;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to scroll to the start of the list.
     * @return {?}
     */
    scrollToStart() {
        this.scrollTo(0);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to scroll to the end of the list.
     * @return {?}
     */
    scrollToEnd() {
        this.scrollTo(this.totalHeight / this.rowHeight);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _calculateVirtualRows() {
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            /** @type {?} */
            const fromRow = Math.floor(this._scrollVerticalOffset / this.rowHeight) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            /** @type {?} */
            const range = Math.floor(this._hostHeight / this.rowHeight) + TD_VIRTUAL_OFFSET * 2;
            /** @type {?} */
            let toRow = range + this.fromRow;
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
        let offset = 0;
        if (this._scrollVerticalOffset > TD_VIRTUAL_OFFSET * this.rowHeight) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
}
TdVirtualScrollContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-virtual-scroll-container',
                template: "<div [style.height.px]=\"totalHeight\"></div>\n<div [style.transform]=\"offsetTransform\" [style.position]=\"'absolute'\" [style.width.%]=\"100\">\n  <ng-template let-row let-index=\"index\" ngFor [ngForOf]=\"virtualData\" [ngForTrackBy]=\"trackBy\">\n    <div #rowElement [style.width.%]=\"100\">\n      <ng-template\n        *ngIf=\"_rowTemplate\"\n        [ngTemplateOutlet]=\"_rowTemplate.templateRef\"\n        [ngTemplateOutletContext]=\"{\n          row: row,\n          index: fromRow + index,\n          first: fromRow + index === 0,\n          last: fromRow + index === data.length - 1,\n          odd: (fromRow + index + 1) % 2 === 1,\n          even: (fromRow + index + 1) % 2 === 0\n        }\"\n      ></ng-template>\n    </div>\n  </ng-template>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;height:100%;overflow:auto;position:relative;width:100%}"]
            }] }
];
/** @nocollapse */
TdVirtualScrollContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DomSanitizer },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdVirtualScrollContainerComponent.propDecorators = {
    data: [{ type: Input, args: ['data',] }],
    bottom: [{ type: Output }],
    _rows: [{ type: ViewChildren, args: ['rowElement',] }],
    _rowTemplate: [{ type: ContentChild, args: [TdVirtualScrollRowDirective,] }],
    trackBy: [{ type: Input }],
    handleScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._bottom;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._initialized;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._totalHeight;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._hostHeight;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._scrollVerticalOffset;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._offsetTransform;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._fromRow;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._toRow;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._virtualData;
    /**
     * bottom: function
     * Method to be executed when user scrolled to the last item of the list.
     * An [ITdVirtualScrollBottomEvent] event is emitted
     * @type {?}
     */
    TdVirtualScrollContainerComponent.prototype.bottom;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rows;
    /** @type {?} */
    TdVirtualScrollContainerComponent.prototype._rowTemplate;
    /**
     * trackBy?: TrackByFunction
     * This accepts the same trackBy function [ngFor] does.
     * https://angular.io/api/core/TrackByFunction
     * @type {?}
     */
    TdVirtualScrollContainerComponent.prototype.trackBy;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._domSanitizer;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdVirtualScrollContainerComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: virtual-scroll.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_VIRTUAL_SCROLL = [TdVirtualScrollRowDirective, TdVirtualScrollContainerComponent];
class CovalentVirtualScrollModule {
}
CovalentVirtualScrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TD_VIRTUAL_SCROLL],
                exports: [TD_VIRTUAL_SCROLL],
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
 * Generated from: covalent-core-virtual-scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentVirtualScrollModule, TdVirtualScrollContainerComponent, TdVirtualScrollRowDirective };
//# sourceMappingURL=covalent-core-virtual-scroll.js.map
