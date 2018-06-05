import { Directive, TemplateRef, ViewContainerRef, Component, Input, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewChildren, ElementRef, HostListener, Renderer2, NgModule } from '@angular/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    { type: Directive, args: [{ selector: '[tdVirtualScrollRow]' },] },
];
/** @nocollapse */
TdVirtualScrollRowDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_VIRTUAL_OFFSET = 2;
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
        this.trackBy = (index, item) => {
            return item;
        };
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
        this._rowChangeSubs = this._rows.changes.subscribe(() => {
            this._calculateVirtualRows();
        });
        this._initialized = true;
        this._calculateVirtualRows();
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        let /** @type {?} */ newHostHeight = this._elementRef.nativeElement.getBoundingClientRect().height;
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
        if (this._rowChangeSubs) {
            this._rowChangeSubs.unsubscribe();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleScroll(event) {
        let /** @type {?} */ element = (/** @type {?} */ (event.target));
        if (element) {
            let /** @type {?} */ verticalScroll = element.scrollTop;
            if (this._scrollVerticalOffset !== verticalScroll) {
                this._scrollVerticalOffset = verticalScroll;
                if (this._initialized) {
                    this._calculateVirtualRows();
                }
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
     * @return {?}
     */
    _calculateVirtualRows() {
        if (this._data) {
            this._totalHeight = this._data.length * this.rowHeight;
            let /** @type {?} */ fromRow = Math.floor((this._scrollVerticalOffset / this.rowHeight)) - TD_VIRTUAL_OFFSET;
            this._fromRow = fromRow > 0 ? fromRow : 0;
            let /** @type {?} */ range = Math.floor((this._hostHeight / this.rowHeight)) + (TD_VIRTUAL_OFFSET * 2);
            let /** @type {?} */ toRow = range + this.fromRow;
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
        let /** @type {?} */ offset = 0;
        if (this._scrollVerticalOffset > (TD_VIRTUAL_OFFSET * this.rowHeight)) {
            offset = this.fromRow * this.rowHeight;
        }
        this._offsetTransform = this._domSanitizer.bypassSecurityTrustStyle('translateY(' + (offset - this.totalHeight) + 'px)');
        if (this._data) {
            this._virtualData = this.data.slice(this.fromRow, this.toRow);
        }
        // mark for check at the end of the queue so we are sure
        // that the changes will be marked
        Promise.resolve().then(() => {
            this._changeDetectorRef.markForCheck();
        });
    }
}
TdVirtualScrollContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-virtual-scroll-container',
                styles: [`:host{
  display:block;
  height:100%;
  width:100%;
  overflow:auto;
  position:relative; }
`],
                template: `<div [style.height.px]="totalHeight"></div>
<div [style.transform]="offsetTransform"
      [style.position]="'absolute'"
      [style.width.%]="100">
  <ng-template let-row
                let-index="index"
                ngFor
                [ngForOf]="virtualData"
                [ngForTrackBy]="trackBy">
    <div #rowElement
         [style.width.%]="100">
      <ng-template *ngIf="_rowTemplate"
                  [ngTemplateOutlet]="_rowTemplate.templateRef"
                  [ngTemplateOutletContext]="{row: row,
                                      index: (fromRow + index),
                                      first: (fromRow + index) === 0,
                                      last: (fromRow + index) === (data.length - 1),
                                      odd: ((fromRow + index + 1) % 2) === 1,
                                      even: ((fromRow + index + 1) % 2) === 0}">
      </ng-template>
    </div>
  </ng-template>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdVirtualScrollContainerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: DomSanitizer, },
    { type: Renderer2, },
    { type: ChangeDetectorRef, },
];
TdVirtualScrollContainerComponent.propDecorators = {
    "data": [{ type: Input, args: ['data',] },],
    "_rows": [{ type: ViewChildren, args: ['rowElement',] },],
    "_rowTemplate": [{ type: ContentChild, args: [TdVirtualScrollRowDirective,] },],
    "trackBy": [{ type: Input, args: ['trackBy',] },],
    "handleScroll": [{ type: HostListener, args: ['scroll', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TD_VIRTUAL_SCROLL = [
    TdVirtualScrollRowDirective,
    TdVirtualScrollContainerComponent,
];
class CovalentVirtualScrollModule {
}
CovalentVirtualScrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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
CovalentVirtualScrollModule.ctorParameters = () => [];

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
/**
 * Generated bundle index. Do not edit.
 */

export { CovalentVirtualScrollModule, TdVirtualScrollContainerComponent, TdVirtualScrollRowDirective };
//# sourceMappingURL=covalent-core-virtual-scroll.js.map
