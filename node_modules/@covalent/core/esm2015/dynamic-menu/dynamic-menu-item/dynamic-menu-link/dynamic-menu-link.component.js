/**
 * @fileoverview added by tsickle
 * Generated from: dynamic-menu-item/dynamic-menu-link/dynamic-menu-link.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class TdDynamicMenuLinkComponent {
    constructor() {
        this.itemClicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    emitClicked() {
        this.itemClicked.emit({ text: this.item.text, action: this.item.action });
    }
}
TdDynamicMenuLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dynamic-menu-link',
                template: "<a\n  *ngIf=\"item.link\"\n  class=\"new-tab\"\n  mat-menu-item\n  [id]=\"item.id\"\n  [href]=\"item.link\"\n  [target]=\"item.newTab ? '_blank' : '_self'\"\n  (click)=\"emitClicked()\"\n>\n  <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n  <span>{{ item.text }}</span>\n  <mat-icon *ngIf=\"item.newTab\" class=\"new-tab-icon\">launch</mat-icon>\n</a>\n<button *ngIf=\"item.action\" mat-menu-item [id]=\"item.id\" (click)=\"emitClicked()\">\n  <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n  <span>{{ item.text }}</span>\n</button>\n",
                styles: [".new-tab{-ms-flex-align:center;-ms-flex-pack:start;align-items:center;display:-ms-flexbox;display:flex;justify-content:start}.new-tab span{-ms-flex:1;flex:1}.new-tab .new-tab-icon{margin:0 0 0 16px}"]
            }] }
];
TdDynamicMenuLinkComponent.propDecorators = {
    item: [{ type: Input }],
    itemClicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TdDynamicMenuLinkComponent.prototype.item;
    /** @type {?} */
    TdDynamicMenuLinkComponent.prototype.itemClicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1tZW51LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2R5bmFtaWMtbWVudS8iLCJzb3VyY2VzIjpbImR5bmFtaWMtbWVudS1pdGVtL2R5bmFtaWMtbWVudS1saW5rL2R5bmFtaWMtbWVudS1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFRbEYsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQVFZLGdCQUFXLEdBQStDLElBQUksWUFBWSxFQUFnQyxDQUFDO0lBS3ZILENBQUM7Ozs7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsazBCQUFpRDs7YUFFbEQ7OzttQkFFRSxLQUFLOzBCQUVMLE1BQU07Ozs7SUFGUCwwQ0FBeUI7O0lBRXpCLGlEQUFxSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNZW51SXRlbSwgSVRkRHluYW1pY01lbnVMaW5rQ2xpY2tFdmVudCB9IGZyb20gJy4uLy4uL2R5bmFtaWMtbWVudS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1keW5hbWljLW1lbnUtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLW1lbnUtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R5bmFtaWMtbWVudS1saW5rLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkRHluYW1pY01lbnVMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbTogSU1lbnVJdGVtO1xuXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2tlZDogRXZlbnRFbWl0dGVyPElUZER5bmFtaWNNZW51TGlua0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJVGREeW5hbWljTWVudUxpbmtDbGlja0V2ZW50PigpO1xuXG4gIGVtaXRDbGlja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUNsaWNrZWQuZW1pdCh7IHRleHQ6IHRoaXMuaXRlbS50ZXh0LCBhY3Rpb246IHRoaXMuaXRlbS5hY3Rpb24gfSk7XG4gIH1cbn1cbiJdfQ==