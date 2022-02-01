/**
 * @fileoverview added by tsickle
 * Generated from: dynamic-menu-item/dynamic-menu-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
export class TdDynamicMenuItemComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitClicked(event) {
        this.itemClicked.emit(event);
    }
}
TdDynamicMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu-item',
                template: "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template let-item let-index=\"index\" ngFor [ngForOf]=\"items\">\n    <ng-container *ngIf=\"item.children && item.children.length > 0\">\n      <button mat-menu-item [id]=\"item.id\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n      </button>\n      <td-dynamic-menu-item #menu [items]=\"item.children\"></td-dynamic-menu-item>\n    </ng-container>\n    <ng-container *ngIf=\"!item.children || item.children.length === 0\">\n      <ng-container *ngIf=\"!item.link && !item.action\">\n        <mat-divider class=\"group-divider\" *ngIf=\"index > 0\"></mat-divider>\n        <div class=\"group-label text-sm\">{{ item.text }}</div>\n      </ng-container>\n      <ng-container *ngIf=\"item.link || item.action\">\n        <div mat-menu-item class=\"pad-none\">\n          <td-dynamic-menu-link [item]=\"item\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-link>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n",
                styles: [".group-divider{margin:8px}.group-label{padding:16px}"]
            }] }
];
TdDynamicMenuItemComponent.propDecorators = {
    items: [{ type: Input }],
    itemClicked: [{ type: Output }],
    childMenu: [{ type: ViewChild, args: ['childMenu', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.items;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.itemClicked;
    /** @type {?} */
    TdDynamicMenuItemComponent.prototype.childMenu;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS1pdGVtL2R5bmFtaWMtbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVFqRCxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBUVksZ0JBQVcsR0FBK0MsSUFBSSxZQUFZLEVBQWdDLENBQUM7SUFPdkgsQ0FBQzs7Ozs7SUFIQyxXQUFXLENBQUMsS0FBbUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDJ5Q0FBaUQ7O2FBRWxEOzs7b0JBRUUsS0FBSzswQkFFTCxNQUFNO3dCQUVOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBSnhDLDJDQUE0Qjs7SUFFNUIsaURBQXFIOztJQUVySCwrQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBJTWVudUl0ZW0sIElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQgfSBmcm9tICcuLi9keW5hbWljLW1lbnUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZHluYW1pYy1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZER5bmFtaWNNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJTWVudUl0ZW1bXTtcblxuICBAT3V0cHV0KCkgaXRlbUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdjaGlsZE1lbnUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgY2hpbGRNZW51OiBNYXRNZW51O1xuXG4gIGVtaXRDbGlja2VkKGV2ZW50OiBJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtQ2xpY2tlZC5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19