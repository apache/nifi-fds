/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, Renderer2, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
/**
 * @record
 */
export function ITdDataTableSortChangeEvent() { }
if (false) {
    /** @type {?} */
    ITdDataTableSortChangeEvent.prototype.order;
    /** @type {?} */
    ITdDataTableSortChangeEvent.prototype.name;
}
export class TdDataTableColumnComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
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
        this.onSortChange = new EventEmitter();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column');
    }
    /**
     * @return {?}
     */
    get projectedWidth() {
        if (this._columnContent && this._columnContent.nativeElement) {
            return ((/** @type {?} */ (this._columnContent.nativeElement))).getBoundingClientRect().width;
        }
        return 100;
    }
    /**
     * sortOrder?: ['ASC' | 'DESC'] or TdDataTableSortingOrder
     * Sets the sort order of column.
     * Defaults to 'ASC' or TdDataTableSortingOrder.Ascending
     * @param {?} order
     * @return {?}
     */
    set sortOrder(order) {
        /** @type {?} */
        let sortOrder = order ? order.toUpperCase() : 'ASC';
        if (sortOrder !== 'DESC' && sortOrder !== 'ASC') {
            throw new Error('[sortOrder] must be empty, ASC or DESC');
        }
        this._sortOrder = sortOrder === 'ASC' ?
            TdDataTableSortingOrder.Ascending : TdDataTableSortingOrder.Descending;
    }
    /**
     * @return {?}
     */
    get bindClickable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bingSortable() {
        return this.sortable;
    }
    /**
     * @return {?}
     */
    get bindActive() {
        return this.active;
    }
    /**
     * @return {?}
     */
    get bindNumeric() {
        return this.numeric;
    }
    /**
     * Listening to click event on host to throw a sort event
     * @return {?}
     */
    handleClick() {
        if (this.sortable) {
            this.onSortChange.emit({ name: this.name, order: this._sortOrder });
        }
    }
    /**
     * @return {?}
     */
    isAscending() {
        return this._sortOrder === TdDataTableSortingOrder.Ascending;
    }
    /**
     * @return {?}
     */
    isDescending() {
        return this._sortOrder === TdDataTableSortingOrder.Descending;
    }
}
TdDataTableColumnComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'th[td-data-table-column]',
                template: "<span #columnContent class=\"td-data-table-heading\">\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n  <span>\n    <ng-content></ng-content>\n  </span>\n  <mat-icon \n    class=\"td-data-table-sort-icon\" \n    *ngIf=\"sortable && !numeric\"\n    [class.mat-asc]=\"isAscending()\"\n    [class.mat-desc]=\"isDescending()\">\n    arrow_upward\n  </mat-icon>\n</span>\n<ng-content select=\"[td-column-resizer]\"></ng-content>\n",
                styles: [":host{white-space:nowrap;position:relative;padding:0;vertical-align:middle;text-align:left}:host>.td-data-table-heading{padding:0 28px}:host:first-child>.td-data-table-heading{padding-left:24px;padding-right:initial}html[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}body[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}[dir=rtl] :host:first-child>.td-data-table-heading{padding-left:initial;unicode-bidi:embed;padding-right:24px;unicode-bidi:embed}:host:first-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:first-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading{padding-left:28px;padding-right:24px}html[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}body[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}[dir=rtl] :host:last-child>.td-data-table-heading{padding-left:24px;unicode-bidi:embed;padding-right:28px;unicode-bidi:embed}:host:last-child>.td-data-table-heading bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:last-child>.td-data-table-heading bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host mat-icon{height:16px;width:16px;font-size:16px!important;line-height:16px!important}:host mat-icon.td-data-table-sort-icon{opacity:0;-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s;position:absolute;top:0}:host mat-icon.td-data-table-sort-icon.mat-asc{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}:host mat-icon.td-data-table-sort-icon.mat-desc{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}:host.mat-active.mat-sortable mat-icon.td-data-table-sort-icon,:host:hover.mat-sortable mat-icon.td-data-table-sort-icon{opacity:1}html[dir=rtl] :host{text-align:right;unicode-bidi:embed}body[dir=rtl] :host{text-align:right;unicode-bidi:embed}[dir=rtl] :host{text-align:right;unicode-bidi:embed}:host bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host>*{vertical-align:middle}:host.mat-clickable{cursor:pointer}:host.mat-clickable:focus{outline:0}:host .td-data-table-heading{display:inline-block;position:relative}:host.mat-numeric{text-align:right}html[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}[dir=rtl] :host.mat-numeric{text-align:left;unicode-bidi:embed}:host.mat-numeric bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:-22px;margin-right:initial}html[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}body[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}[dir=rtl] :host.mat-numeric mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:-22px;unicode-bidi:embed}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host.mat-numeric mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:6px;margin-right:initial}html[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}body[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}[dir=rtl] :host:not(.mat-numeric) mat-icon.td-data-table-sort-icon{margin-left:initial;unicode-bidi:embed;margin-right:6px;unicode-bidi:embed}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host:not(.mat-numeric) mat-icon.td-data-table-sort-icon bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableColumnComponent.propDecorators = {
    _columnContent: [{ type: ViewChild, args: ['columnContent', { read: ElementRef },] }],
    name: [{ type: Input, args: ['name',] }],
    sortable: [{ type: Input, args: ['sortable',] }],
    active: [{ type: Input, args: ['active',] }],
    numeric: [{ type: Input, args: ['numeric',] }],
    sortOrder: [{ type: Input, args: ['sortOrder',] }],
    onSortChange: [{ type: Output, args: ['sortChange',] }],
    bindClickable: [{ type: HostBinding, args: ['class.mat-clickable',] }],
    bingSortable: [{ type: HostBinding, args: ['class.mat-sortable',] }],
    bindActive: [{ type: HostBinding, args: ['class.mat-active',] }],
    bindNumeric: [{ type: HostBinding, args: ['class.mat-numeric',] }],
    handleClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    TdDataTableColumnComponent.prototype._sortOrder;
    /** @type {?} */
    TdDataTableColumnComponent.prototype._columnContent;
    /**
     * name?: string
     * Sets unique column [name] for [sortable] events.
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.name;
    /**
     * sortable?: boolean
     * Enables sorting events, sort icons and active column states.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.sortable;
    /**
     * active?: boolean
     * Sets column to active state when 'true'.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.active;
    /**
     * numeric?: boolean
     * Makes column follow the numeric data-table specs and sort icon.
     * Defaults to 'false'
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.numeric;
    /**
     * sortChange?: function
     * Event emitted when the column headers are clicked. [sortable] needs to be enabled.
     * Emits an [ITdDataTableSortChangeEvent] implemented object.
     * @type {?}
     */
    TdDataTableColumnComponent.prototype.onSortChange;
    /** @type {?} */
    TdDataTableColumnComponent.prototype._elementRef;
    /** @type {?} */
    TdDataTableColumnComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZGF0YS10YWJsZS8iLCJzb3VyY2VzIjpbImRhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRWxFLGlEQUdDOzs7SUFGQyw0Q0FBK0I7O0lBQy9CLDJDQUFhOztBQVNmLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBb0ZyQyxZQUFvQixXQUF1QixFQUFVLFNBQW9CO1FBQXJELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWxGakUsZUFBVSxHQUE0Qix1QkFBdUIsQ0FBQyxTQUFTLENBQUM7Ozs7O1FBZWpFLFNBQUksR0FBVyxFQUFFLENBQUM7Ozs7OztRQU9kLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7OztRQU81QixXQUFNLEdBQVksS0FBSyxDQUFDOzs7Ozs7UUFPdkIsWUFBTyxHQUFZLEtBQUssQ0FBQzs7Ozs7O1FBdUJyQixpQkFBWSxHQUNaLElBQUksWUFBWSxFQUErQixDQUFDO1FBdUJwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFoRkQsSUFBSSxjQUFjO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRTtZQUM1RCxPQUFPLENBQUMsbUJBQWEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ3ZGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7OztJQWtDRCxJQUNJLFNBQVMsQ0FBQyxLQUFxQjs7WUFDN0IsU0FBUyxHQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQzNELElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDO0lBQzNFLENBQUM7Ozs7SUFVRCxJQUNJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFVRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssdUJBQXVCLENBQUMsU0FBUyxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLHVCQUF1QixDQUFDLFVBQVUsQ0FBQztJQUNoRSxDQUFDOzs7WUE5R0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUVwQyxpbEJBQWlEOzthQUNsRDs7OztZQWQyRCxVQUFVO1lBQXJCLFNBQVM7Ozs2QkFtQnZELFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO21CQWE3QyxLQUFLLFNBQUMsTUFBTTt1QkFPWixLQUFLLFNBQUMsVUFBVTtxQkFPaEIsS0FBSyxTQUFDLFFBQVE7c0JBT2QsS0FBSyxTQUFDLFNBQVM7d0JBT2YsS0FBSyxTQUFDLFdBQVc7MkJBZ0JqQixNQUFNLFNBQUMsWUFBWTs0QkFHbkIsV0FBVyxTQUFDLHFCQUFxQjsyQkFLakMsV0FBVyxTQUFDLG9CQUFvQjt5QkFLaEMsV0FBVyxTQUFDLGtCQUFrQjswQkFLOUIsV0FBVyxTQUFDLG1CQUFtQjswQkFZL0IsWUFBWSxTQUFDLE9BQU87Ozs7SUF6RnJCLGdEQUFnRjs7SUFFaEYsb0RBQTJFOzs7Ozs7SUFhM0UsMENBQWlDOzs7Ozs7O0lBT2pDLDhDQUE2Qzs7Ozs7OztJQU83Qyw0Q0FBeUM7Ozs7Ozs7SUFPekMsNkNBQTJDOzs7Ozs7O0lBdUIzQyxrREFDc0U7O0lBc0IxRCxpREFBK0I7O0lBQUUsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyIH0gZnJvbSAnLi4vZGF0YS10YWJsZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudCB7XG4gIG9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIHNlbGVjdG9yOiAndGhbdGQtZGF0YS10YWJsZS1jb2x1bW5dJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50LnNjc3MnIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRhLXRhYmxlLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50IHtcblxuICBwcml2YXRlIF9zb3J0T3JkZXI6IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyID0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbHVtbkNvbnRlbnQnLCB7cmVhZDogRWxlbWVudFJlZn0pIF9jb2x1bW5Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGdldCBwcm9qZWN0ZWRXaWR0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9jb2x1bW5Db250ZW50ICYmIHRoaXMuX2NvbHVtbkNvbnRlbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fY29sdW1uQ29udGVudC5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYW1lPzogc3RyaW5nXG4gICAqIFNldHMgdW5pcXVlIGNvbHVtbiBbbmFtZV0gZm9yIFtzb3J0YWJsZV0gZXZlbnRzLlxuICAgKi9cbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIHNvcnRhYmxlPzogYm9vbGVhblxuICAgKiBFbmFibGVzIHNvcnRpbmcgZXZlbnRzLCBzb3J0IGljb25zIGFuZCBhY3RpdmUgY29sdW1uIHN0YXRlcy5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdzb3J0YWJsZScpIHNvcnRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogU2V0cyBjb2x1bW4gdG8gYWN0aXZlIHN0YXRlIHdoZW4gJ3RydWUnLlxuICAgKiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoJ2FjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBudW1lcmljPzogYm9vbGVhblxuICAgKiBNYWtlcyBjb2x1bW4gZm9sbG93IHRoZSBudW1lcmljIGRhdGEtdGFibGUgc3BlY3MgYW5kIHNvcnQgaWNvbi5cbiAgICogRGVmYXVsdHMgdG8gJ2ZhbHNlJ1xuICAgKi9cbiAgQElucHV0KCdudW1lcmljJykgbnVtZXJpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBzb3J0T3JkZXI/OiBbJ0FTQycgfCAnREVTQyddIG9yIFRkRGF0YVRhYmxlU29ydGluZ09yZGVyXG4gICAqIFNldHMgdGhlIHNvcnQgb3JkZXIgb2YgY29sdW1uLlxuICAgKiBEZWZhdWx0cyB0byAnQVNDJyBvciBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmdcbiAgICovXG4gIEBJbnB1dCgnc29ydE9yZGVyJylcbiAgc2V0IHNvcnRPcmRlcihvcmRlcjogJ0FTQycgfCAnREVTQycpIHtcbiAgICBsZXQgc29ydE9yZGVyOiBzdHJpbmcgPSBvcmRlciA/IG9yZGVyLnRvVXBwZXJDYXNlKCkgOiAnQVNDJztcbiAgICBpZiAoc29ydE9yZGVyICE9PSAnREVTQycgJiYgc29ydE9yZGVyICE9PSAnQVNDJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbc29ydE9yZGVyXSBtdXN0IGJlIGVtcHR5LCBBU0Mgb3IgREVTQycpO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRPcmRlciA9IHNvcnRPcmRlciA9PT0gJ0FTQycgP1xuICAgICAgVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nIDogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuRGVzY2VuZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBzb3J0Q2hhbmdlPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBjb2x1bW4gaGVhZGVycyBhcmUgY2xpY2tlZC4gW3NvcnRhYmxlXSBuZWVkcyB0byBiZSBlbmFibGVkLlxuICAgKiBFbWl0cyBhbiBbSVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50XSBpbXBsZW1lbnRlZCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCdzb3J0Q2hhbmdlJykgb25Tb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8SVRkRGF0YVRhYmxlU29ydENoYW5nZUV2ZW50PiA9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRFbWl0dGVyPElUZERhdGFUYWJsZVNvcnRDaGFuZ2VFdmVudD4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hdC1jbGlja2FibGUnKVxuICBnZXQgYmluZENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXNvcnRhYmxlJylcbiAgZ2V0IGJpbmdTb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWFjdGl2ZScpXG4gIGdldCBiaW5kQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LW51bWVyaWMnKVxuICBnZXQgYmluZE51bWVyaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnVtZXJpYztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1kYXRhLXRhYmxlLWNvbHVtbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbmluZyB0byBjbGljayBldmVudCBvbiBob3N0IHRvIHRocm93IGEgc29ydCBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zb3J0YWJsZSkge1xuICAgICAgdGhpcy5vblNvcnRDaGFuZ2UuZW1pdCh7bmFtZTogdGhpcy5uYW1lLCBvcmRlcjogdGhpcy5fc29ydE9yZGVyfSk7XG4gICAgfVxuICB9XG5cbiAgaXNBc2NlbmRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRPcmRlciA9PT0gVGREYXRhVGFibGVTb3J0aW5nT3JkZXIuQXNjZW5kaW5nO1xuICB9XG5cbiAgaXNEZXNjZW5kaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3JkZXIgPT09IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkRlc2NlbmRpbmc7XG4gIH1cblxufVxuIl19