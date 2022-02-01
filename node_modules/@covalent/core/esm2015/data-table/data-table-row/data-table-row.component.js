/**
 * @fileoverview added by tsickle
 * Generated from: data-table-row/data-table-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef, HostListener, } from '@angular/core';
export class TdDataTableColumnRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-column-row');
    }
}
TdDataTableColumnRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-column-row]',
                template: "<ng-content></ng-content>\n",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableColumnRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TdDataTableColumnRowComponent.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    TdDataTableColumnRowComponent.prototype._renderer;
}
export class TdDataTableRowComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._selected = false;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-data-table-row');
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        if (selected) {
            this._renderer.addClass(this._elementRef.nativeElement, 'td-selected');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'td-selected');
        }
        this._selected = selected;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get height() {
        /** @type {?} */
        let height = 48;
        if (this._elementRef.nativeElement) {
            height = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return height;
    }
    /**
     * Listening to click event to explicitly focus the row element.
     * @return {?}
     */
    clickListener() {
        this.focus();
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
TdDataTableRowComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'tr[td-data-table-row]',
                template: "<ng-content></ng-content>\n",
                styles: [":host{border-bottom-style:solid;border-bottom-width:1px}:host.td-data-table-row{height:48px}:host.td-data-table-column-row{height:56px}"]
            }] }
];
/** @nocollapse */
TdDataTableRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TdDataTableRowComponent.propDecorators = {
    selected: [{ type: Input, args: ['selected',] }],
    clickListener: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdDataTableRowComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    TdDataTableRowComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdDataTableRowComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJkYXRhLXRhYmxlLXJvdy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQVd2QixNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUN4QyxZQUFzQixXQUF1QixFQUFZLFNBQW9CO1FBQXZELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVksY0FBUyxHQUFULFNBQVMsQ0FBVztRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7OztZQVRGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLDhCQUE4QjtnQkFFeEMsdUNBQThDOzthQUMvQzs7OztZQWRDLFVBQVU7WUFEVixTQUFTOzs7Ozs7O0lBaUJHLG9EQUFpQzs7Ozs7SUFBRSxrREFBOEI7O0FBVy9FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBd0JsQyxZQUFvQixXQUF1QixFQUFVLFNBQW9CO1FBQXJELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQXZCakUsY0FBUyxHQUFZLEtBQUssQ0FBQztRQXdCakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQXZCRCxJQUNJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFDRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELElBQUksTUFBTTs7WUFDSixNQUFNLEdBQVcsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQ2xDLE1BQU0sR0FBRyxDQUFDLG1CQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUN2RjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBVUQsYUFBYTtRQUNYLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHVCQUF1QjtnQkFFakMsdUNBQThDOzthQUMvQzs7OztZQTFCQyxVQUFVO1lBRFYsU0FBUzs7O3VCQStCUixLQUFLLFNBQUMsVUFBVTs0QkE0QmhCLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0lBOUJyQiw0Q0FBbUM7Ozs7O0lBdUJ2Qiw4Q0FBK0I7Ozs7O0lBQUUsNENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQgfSBmcm9tICcuLi9kYXRhLXRhYmxlLWNlbGwvZGF0YS10YWJsZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGEtdGFibGUtY29sdW1uL2RhdGEtdGFibGUtY29sdW1uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0clt0ZC1kYXRhLXRhYmxlLWNvbHVtbi1yb3ddJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtdGFibGUtcm93LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhVGFibGVDb2x1bW5Sb3dDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RkLWRhdGEtdGFibGUtY29sdW1uLXJvdycpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0clt0ZC1kYXRhLXRhYmxlLXJvd10nLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS1yb3cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFUYWJsZVJvd0NvbXBvbmVudCB7XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCdzZWxlY3RlZCcpXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgfVxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IDQ4O1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGhlaWdodCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtZGF0YS10YWJsZS1yb3cnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5pbmcgdG8gY2xpY2sgZXZlbnQgdG8gZXhwbGljaXRseSBmb2N1cyB0aGUgcm93IGVsZW1lbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGNsaWNrTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==