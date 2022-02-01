/**
 * @fileoverview added by tsickle
 * Generated from: layout-nav-list/layout-nav-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
export class TdLayoutNavListComponent {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        /**
         * color?: 'accent' | 'primary' | 'warn'
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
        /**
         * containerAutosize?: boolean
         *
         * Sets "autosize" of the sidenav-container.
         * Defaults to "false".
         *
         * See documentation for more info and potential performance risks.
         *
         * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
         */
        this.containerAutosize = false;
    }
    /**
     * Checks if `ESC` should close the sidenav
     * Should only close it for `push` and `over` modes
     * @return {?}
     */
    get disableClose() {
        return this.mode === 'side';
    }
    /**
     * Checks if router was injected.
     * @return {?}
     */
    get routerEnabled() {
        return !!this._router && !!this.navigationRoute;
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this.sidenav.toggle(!this.sidenav.opened);
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this.sidenav.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this.sidenav.close();
    }
}
TdLayoutNavListComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-nav-list',
                template: "<div class=\"td-layout-nav-list-wrapper\">\n  <mat-sidenav-container fullscreen [autosize]=\"containerAutosize\" class=\"td-layout-nav-list\">\n    <mat-sidenav\n      #sidenav\n      position=\"start\"\n      [mode]=\"mode\"\n      [opened]=\"opened\"\n      [disableClose]=\"disableClose\"\n      [style.max-width]=\"sidenavWidth\"\n      [style.min-width]=\"sidenavWidth\"\n    >\n      <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n        <ng-content select=\"[td-menu-button]\"></ng-content>\n        <span\n          *ngIf=\"icon || logo || toolbarTitle\"\n          class=\"td-layout-nav-list-toolbar-content\"\n          [class.cursor-pointer]=\"routerEnabled\"\n          (click)=\"handleNavigationClick()\"\n        >\n          <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n          <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n          <span *ngIf=\"toolbarTitle\">{{ toolbarTitle }}</span>\n        </span>\n        <ng-content select=\"[td-sidenav-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content select=\"[td-sidenav-content]\"></ng-content>\n      </div>\n    </mat-sidenav>\n    <div class=\"td-layout-nav-list-main\">\n      <mat-toolbar class=\"td-layout-toolbar\" [color]=\"color\">\n        <ng-content select=\"[td-toolbar-content]\"></ng-content>\n      </mat-toolbar>\n      <div class=\"td-layout-nav-list-content\" cdkScrollable>\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"td-layout-footer-inner\"></ng-content>\n    </div>\n  </mat-sidenav-container>\n</div>\n<ng-content select=\"td-layout-footer\"></ng-content>\n",
                styles: [":host{-ms-flex:1;-ms-flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;height:100%;margin:0;min-height:100%;overflow:hidden;width:100%}:host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-right:0}[dir=rtl] :host .td-layout-nav-list-wrapper>.mat-sidenav-container>mat-sidenav.mat-drawer-side{border-left:0}:host .td-layout-nav-list-wrapper{-ms-flex:1;-ms-flex-direction:column;-webkit-overflow-scrolling:touch;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:column;overflow:auto;position:relative}:host .td-layout-nav-list-wrapper .td-layout-nav-list-toolbar-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host .td-layout-nav-list-wrapper .td-layout-nav-list-content{-ms-flex:1;-webkit-overflow-scrolling:touch;display:block;flex:1;overflow:auto;position:relative;text-align:start}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main{-ms-flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column;height:100%;margin:0;min-height:100%;overflow:auto;position:relative;width:100%}:host .td-layout-nav-list-wrapper .td-layout-nav-list-main .td-layout-nav-list-content{-ms-flex:1;-webkit-overflow-scrolling:touch;display:block;flex:1;overflow:auto;position:relative}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list{-ms-flex:1;flex:1}:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closed,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-closing,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opened,:host .td-layout-nav-list-wrapper mat-sidenav-container.td-layout-nav-list>mat-sidenav.mat-drawer-opening{box-shadow:none}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer-content{-ms-flex-positive:1;flex-grow:1}:host ::ng-deep mat-sidenav-container.td-layout-nav-list>.mat-drawer>.mat-drawer-inner-container{-ms-flex-direction:column;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column}"]
            }] }
];
/** @nocollapse */
TdLayoutNavListComponent.ctorParameters = () => [
    { type: Router, decorators: [{ type: Optional }] }
];
TdLayoutNavListComponent.propDecorators = {
    sidenav: [{ type: ViewChild, args: [MatSidenav, { static: true },] }],
    toolbarTitle: [{ type: Input }],
    icon: [{ type: Input }],
    logo: [{ type: Input }],
    color: [{ type: Input }],
    mode: [{ type: Input }],
    opened: [{ type: Input }],
    sidenavWidth: [{ type: Input }],
    containerAutosize: [{ type: Input }],
    navigationRoute: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdLayoutNavListComponent.prototype.sidenav;
    /**
     * toolbarTitle?: string
     *
     * Title set in toolbar.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.toolbarTitle;
    /**
     * icon?: string
     * icon name to be displayed before the title
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.icon;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.logo;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.color;
    /**
     * mode?: 'side', 'push' or 'over'
     *
     * The mode or styling of the sidenav.
     * Defaults to "side".
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.mode;
    /**
     * opened?: boolean
     * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
     * Defaults to "true".
     *
     * See "MatSidenav" documentation for more info.
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.opened;
    /**
     * sidenavWidth?: string
     *
     * Sets the "width" of the sidenav in either "px" or "%"
     * Defaults to "350px".
     *
     * https://github.com/angular/material2/tree/master/src/lib/sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.sidenavWidth;
    /**
     * containerAutosize?: boolean
     *
     * Sets "autosize" of the sidenav-container.
     * Defaults to "false".
     *
     * See documentation for more info and potential performance risks.
     *
     * https://github.com/angular/material2/blob/master/src/lib/sidenav/sidenav.md#resizing-an-open-sidenav
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.containerAutosize;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and toolbarTitle.
     * @type {?}
     */
    TdLayoutNavListComponent.prototype.navigationRoute;
    /**
     * @type {?}
     * @private
     */
    TdLayoutNavListComponent.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtbmF2LWxpc3QvbGF5b3V0LW5hdi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sMkJBQTJCLENBQUM7QUFTOUUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQWtHbkMsWUFBZ0MsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7Ozs7Ozs7UUFwRXRDLFVBQUssR0FBa0MsU0FBUyxDQUFDOzs7Ozs7Ozs7O1FBV2pELFNBQUksR0FBNkIsTUFBTSxDQUFDOzs7Ozs7Ozs7O1FBV3hDLFdBQU0sR0FBWSxJQUFJLENBQUM7Ozs7Ozs7OztRQVV2QixpQkFBWSxHQUFXLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7UUFZL0Isc0JBQWlCLEdBQVksS0FBSyxDQUFDO0lBd0JNLENBQUM7Ozs7OztJQVhuRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBS0QsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBSUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQUtNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUtNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFLTSxLQUFLO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7OztZQWxJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFFOUIsZ3REQUErQzs7YUFDaEQ7Ozs7WUFWUSxNQUFNLHVCQTZHQSxRQUFROzs7c0JBakdwQixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFPdEMsS0FBSzttQkFNTCxLQUFLO21CQVFMLEtBQUs7b0JBUUwsS0FBSzttQkFXTCxLQUFLO3FCQVdMLEtBQUs7MkJBVUwsS0FBSztnQ0FZTCxLQUFLOzhCQU9MLEtBQUs7Ozs7SUFoRk4sMkNBQTZEOzs7Ozs7O0lBTzdELGdEQUE4Qjs7Ozs7O0lBTTlCLHdDQUFzQjs7Ozs7Ozs7SUFRdEIsd0NBQXNCOzs7Ozs7OztJQVF0Qix5Q0FBMEQ7Ozs7Ozs7Ozs7O0lBVzFELHdDQUFpRDs7Ozs7Ozs7Ozs7SUFXakQsMENBQWdDOzs7Ozs7Ozs7O0lBVWhDLGdEQUF3Qzs7Ozs7Ozs7Ozs7O0lBWXhDLHFEQUE0Qzs7Ozs7OztJQU81QyxtREFBaUM7Ozs7O0lBaUJyQiwyQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgSUxheW91dFRvZ2dsYWJsZSB9IGZyb20gJy4uL2xheW91dC10b2dnbGUuY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtbmF2LWxpc3QnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtbmF2LWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1uYXYtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRkTGF5b3V0TmF2TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIElMYXlvdXRUb2dnbGFibGUge1xuICBAVmlld0NoaWxkKE1hdFNpZGVuYXYsIHsgc3RhdGljOiB0cnVlIH0pIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgLyoqXG4gICAqIHRvb2xiYXJUaXRsZT86IHN0cmluZ1xuICAgKlxuICAgKiBUaXRsZSBzZXQgaW4gdG9vbGJhci5cbiAgICovXG4gIEBJbnB1dCgpIHRvb2xiYXJUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBpY29uPzogc3RyaW5nXG4gICAqIGljb24gbmFtZSB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZVxuICAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBsb2dvPzogc3RyaW5nXG4gICAqXG4gICAqIGxvZ28gaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlLlxuICAgKiBJZiBbaWNvbl0gaXMgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoKSBsb2dvOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICpcbiAgICogdG9vbGJhciBjb2xvciBvcHRpb246IHByaW1hcnkgfCBhY2NlbnQgfCB3YXJuLlxuICAgKiBJZiBbY29sb3JdIGlzIG5vdCBzZXQsIHByaW1hcnkgaXMgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yOiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICAvKipcbiAgICogbW9kZT86ICdzaWRlJywgJ3B1c2gnIG9yICdvdmVyJ1xuICAgKlxuICAgKiBUaGUgbW9kZSBvciBzdHlsaW5nIG9mIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcInNpZGVcIi5cbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCkgbW9kZTogJ3NpZGUnIHwgJ3B1c2gnIHwgJ292ZXInID0gJ3NpZGUnO1xuXG4gIC8qKlxuICAgKiBvcGVuZWQ/OiBib29sZWFuXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBzaWRlbmF2IGlzIG9wZW5lZC4gVXNlIHRoaXMgYmluZGluZyB0byBvcGVuL2Nsb3NlIHRoZSBzaWRlbmF2LlxuICAgKiBEZWZhdWx0cyB0byBcInRydWVcIi5cbiAgICpcbiAgICogU2VlIFwiTWF0U2lkZW5hdlwiIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mby5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCkgb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogc2lkZW5hdldpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIFwid2lkdGhcIiBvZiB0aGUgc2lkZW5hdiBpbiBlaXRoZXIgXCJweFwiIG9yIFwiJVwiXG4gICAqIERlZmF1bHRzIHRvIFwiMzUwcHhcIi5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3RyZWUvbWFzdGVyL3NyYy9saWIvc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCkgc2lkZW5hdldpZHRoOiBzdHJpbmcgPSAnMzUwcHgnO1xuXG4gIC8qKlxuICAgKiBjb250YWluZXJBdXRvc2l6ZT86IGJvb2xlYW5cbiAgICpcbiAgICogU2V0cyBcImF1dG9zaXplXCIgb2YgdGhlIHNpZGVuYXYtY29udGFpbmVyLlxuICAgKiBEZWZhdWx0cyB0byBcImZhbHNlXCIuXG4gICAqXG4gICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm8gYW5kIHBvdGVudGlhbCBwZXJmb3JtYW5jZSByaXNrcy5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2Jsb2IvbWFzdGVyL3NyYy9saWIvc2lkZW5hdi9zaWRlbmF2Lm1kI3Jlc2l6aW5nLWFuLW9wZW4tc2lkZW5hdlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyQXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbmF2aWdhdGlvblJvdXRlPzogc3RyaW5nXG4gICAqXG4gICAqIG9wdGlvbiB0byBzZXQgdGhlIGNvbWJpbmVkIHJvdXRlIGZvciB0aGUgaWNvbiwgbG9nbywgYW5kIHRvb2xiYXJUaXRsZS5cbiAgICovXG4gIEBJbnB1dCgpIG5hdmlnYXRpb25Sb3V0ZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYEVTQ2Agc2hvdWxkIGNsb3NlIHRoZSBzaWRlbmF2XG4gICAqIFNob3VsZCBvbmx5IGNsb3NlIGl0IGZvciBgcHVzaGAgYW5kIGBvdmVyYCBtb2Rlc1xuICAgKi9cbiAgZ2V0IGRpc2FibGVDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnc2lkZSc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHJvdXRlciB3YXMgaW5qZWN0ZWQuXG4gICAqL1xuICBnZXQgcm91dGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9yb3V0ZXIgJiYgISF0aGlzLm5hdmlnYXRpb25Sb3V0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIGhhbmRsZU5hdmlnYXRpb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3V0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm5hdmlnYXRpb25Sb3V0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IHRvZ2dsZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IFByb21pc2U8TWF0RHJhd2VyVG9nZ2xlUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZW5hdi50b2dnbGUoIXRoaXMuc2lkZW5hdi5vcGVuZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IG9wZW4gbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIG9wZW4oKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2Lm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSBjbG9zZSBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoKTogUHJvbWlzZTxNYXREcmF3ZXJUb2dnbGVSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==