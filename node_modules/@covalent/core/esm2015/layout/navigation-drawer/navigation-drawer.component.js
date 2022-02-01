/**
 * @fileoverview added by tsickle
 * Generated from: navigation-drawer/navigation-drawer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, ContentChildren, forwardRef, Inject, QueryList, SecurityContext, Optional, } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TdLayoutComponent } from '../layout.component';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdNavigationDrawerMenuDirective {
}
TdNavigationDrawerMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-menu]',
            },] }
];
export class TdNavigationDrawerToolbarDirective {
}
TdNavigationDrawerToolbarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-navigation-drawer-toolbar]',
            },] }
];
export class TdNavigationDrawerComponent {
    /**
     * @param {?} _layout
     * @param {?} _router
     * @param {?} _sanitize
     */
    constructor(_layout, _router, _sanitize) {
        this._layout = _layout;
        this._router = _router;
        this._sanitize = _sanitize;
        this._menuToggled = false;
    }
    /**
     * @return {?}
     */
    get menuToggled() {
        return this._menuToggled;
    }
    /**
     * Checks if there is a [TdNavigationDrawerMenuDirective] has content.
     * @return {?}
     */
    get isMenuAvailable() {
        return this._drawerMenu ? this._drawerMenu.length > 0 : false;
    }
    /**
     * Checks if there is a [TdNavigationDrawerToolbarDirective] has content.
     * @return {?}
     */
    get isCustomToolbar() {
        return this._toolbar ? this._toolbar.length > 0 : false;
    }
    /**
     * Checks if there is a background image for the toolbar.
     * @return {?}
     */
    get isBackgroundAvailable() {
        return !!this._backgroundImage;
    }
    /**
     * backgroundUrl?: SafeResourceUrl
     *
     * image to be displayed as the background of the toolbar.
     * URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
     * @param {?} backgroundUrl
     * @return {?}
     */
    set backgroundUrl(backgroundUrl) {
        if (backgroundUrl) {
            /** @type {?} */
            const sanitizedUrl = this._sanitize.sanitize(SecurityContext.RESOURCE_URL, backgroundUrl);
            this._backgroundImage = this._sanitize.sanitize(SecurityContext.STYLE, 'url(' + sanitizedUrl + ')');
        }
    }
    /**
     * @return {?}
     */
    get backgroundImage() {
        return this._backgroundImage;
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
    ngOnInit() {
        this._closeSubscription = this._layout.sidenav.openedChange.subscribe((/**
         * @param {?} opened
         * @return {?}
         */
        (opened) => {
            if (!opened) {
                this._menuToggled = false;
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._closeSubscription) {
            this._closeSubscription.unsubscribe();
            this._closeSubscription = undefined;
        }
    }
    /**
     * @return {?}
     */
    toggleMenu() {
        if (this.isMenuAvailable) {
            this._menuToggled = !this._menuToggled;
        }
    }
    /**
     * @return {?}
     */
    handleNavigationClick() {
        if (this.routerEnabled) {
            this._router.navigateByUrl(this.navigationRoute);
            this.close();
        }
    }
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    toggle() {
        return this._layout.toggle();
    }
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    open() {
        return this._layout.open();
    }
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     * @return {?}
     */
    close() {
        return this._layout.close();
    }
}
TdNavigationDrawerComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-navigation-drawer',
                template: "<mat-toolbar\n  [color]=\"color\"\n  [style.background-image]=\"backgroundImage\"\n  [class.td-toolbar-background]=\"!!isBackgroundAvailable\"\n  class=\"td-nagivation-drawer-toolbar\"\n>\n  <ng-content select=\"[td-navigation-drawer-toolbar]\"></ng-content>\n  <ng-container *ngIf=\"!isCustomToolbar\">\n    <div\n      *ngIf=\"icon || logo || sidenavTitle || avatar\"\n      class=\"td-navigation-drawer-toolbar-content\"\n      [class.cursor-pointer]=\"routerEnabled\"\n      (click)=\"handleNavigationClick()\"\n    >\n      <mat-icon *ngIf=\"icon\">{{ icon }}</mat-icon>\n      <mat-icon *ngIf=\"logo && !icon\" class=\"mat-icon-logo\" [svgIcon]=\"logo\"></mat-icon>\n      <img *ngIf=\"avatar && !logo && !icon\" class=\"td-nagivation-drawer-toolbar-avatar\" [attr.src]=\"avatar\" />\n      <span *ngIf=\"sidenavTitle\" class=\"td-navigation-drawer-title\">{{ sidenavTitle }}</span>\n    </div>\n    <div class=\"td-navigation-drawer-name\" *ngIf=\"email && name\">{{ name }}</div>\n    <div class=\"td-navigation-drawer-menu-toggle\" href *ngIf=\"email || name\" (click)=\"toggleMenu()\">\n      <span class=\"td-navigation-drawer-label\">{{ email || name }}</span>\n      <button mat-icon-button class=\"td-navigation-drawer-menu-button\" *ngIf=\"isMenuAvailable\">\n        <mat-icon *ngIf=\"!menuToggled\">arrow_drop_down</mat-icon>\n        <mat-icon *ngIf=\"menuToggled\">arrow_drop_up</mat-icon>\n      </button>\n    </div>\n  </ng-container>\n</mat-toolbar>\n<div class=\"td-navigation-drawer-content\" [@tdCollapse]=\"menuToggled\">\n  <ng-content></ng-content>\n</div>\n<div class=\"td-navigation-drawer-menu-content\" [@tdCollapse]=\"!menuToggled\">\n  <ng-content select=\"[td-navigation-drawer-menu]\"></ng-content>\n</div>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{width:100%}:host .td-navigation-drawer-content.ng-animating,:host .td-navigation-drawer-menu-content.ng-animating{overflow:hidden}:host mat-toolbar{padding:16px}:host mat-toolbar.td-toolbar-background{background-repeat:no-repeat;background-size:cover}:host mat-toolbar.td-nagivation-drawer-toolbar{-ms-flex-direction:column;display:block!important;flex-direction:column;height:auto!important}:host mat-toolbar .td-navigation-drawer-toolbar-content{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%}:host mat-toolbar .td-navigation-drawer-toolbar-content .td-nagivation-drawer-toolbar-avatar{border-radius:50%;height:60px;margin:0 12px 12px 0;width:60px}:host mat-toolbar .td-navigation-drawer-name,:host mat-toolbar .td-navigation-drawer-toolbar-content .td-navigation-drawer-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host mat-toolbar .td-navigation-drawer-menu-toggle{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-label{-ms-flex:1;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host mat-toolbar .td-navigation-drawer-menu-toggle .td-navigation-drawer-menu-button{height:24px;line-height:24px;width:24px}:host>div{overflow:hidden}"]
            }] }
];
/** @nocollapse */
TdNavigationDrawerComponent.ctorParameters = () => [
    { type: TdLayoutComponent, decorators: [{ type: Inject, args: [forwardRef((/**
                     * @return {?}
                     */
                    () => TdLayoutComponent)),] }] },
    { type: Router, decorators: [{ type: Optional }] },
    { type: DomSanitizer }
];
TdNavigationDrawerComponent.propDecorators = {
    _drawerMenu: [{ type: ContentChildren, args: [TdNavigationDrawerMenuDirective, { descendants: true },] }],
    _toolbar: [{ type: ContentChildren, args: [TdNavigationDrawerToolbarDirective, { descendants: true },] }],
    sidenavTitle: [{ type: Input }],
    icon: [{ type: Input }],
    logo: [{ type: Input }],
    avatar: [{ type: Input }],
    color: [{ type: Input }],
    navigationRoute: [{ type: Input }],
    backgroundUrl: [{ type: Input, args: ['backgroundUrl',] }],
    name: [{ type: Input }],
    email: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._closeSubscription;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._menuToggled;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._backgroundImage;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._drawerMenu;
    /** @type {?} */
    TdNavigationDrawerComponent.prototype._toolbar;
    /**
     * sidenavTitle?: string
     * Title set in sideNav.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.sidenavTitle;
    /**
     * icon?: string
     *
     * icon name to be displayed before the title
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.icon;
    /**
     * logo?: string
     *
     * logo icon name to be displayed before the title.
     * If [icon] is set, then this will not be shown.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.logo;
    /**
     * avatar?: string
     *
     * avatar url to be displayed before the title
     * If [icon] or [logo] are set, then this will not be shown.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.avatar;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, default is used.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.color;
    /**
     * navigationRoute?: string
     *
     * option to set the combined route for the icon, logo, and sidenavTitle.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.navigationRoute;
    /**
     * name?: string
     *
     * string to be displayed as part of the navigation drawer sublabel.
     * if [email] is not set, then [name] will be the toggle menu text.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.name;
    /**
     * email?: string
     *
     * string to be displayed as part of the navigation drawer sublabel in the [toggle] menu text.
     * if [email] and [name] are not set, then the toggle menu is not rendered.
     * @type {?}
     */
    TdNavigationDrawerComponent.prototype.email;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._layout;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    TdNavigationDrawerComponent.prototype._sanitize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2xheW91dC8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tZHJhd2VyL25hdmlnYXRpb24tZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxlQUFlLEVBR2YsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsZUFBZSxFQUNmLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUE4QixZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtyRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUs1RCxNQUFNLE9BQU8sK0JBQStCOzs7WUFIM0MsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O0FBTUQsTUFBTSxPQUFPLGtDQUFrQzs7O1lBSDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2FBQzNDOztBQVNELE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQTBIdEMsWUFDdUQsT0FBMEIsRUFDM0QsT0FBZSxFQUMzQixTQUF1QjtRQUZzQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMzRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQzNCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUEzSHpCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBNEhuQyxDQUFDOzs7O0lBekhKLElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7OztJQVdELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBS0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFLRCxJQUFJLHFCQUFxQjtRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7O0lBb0RELElBR0ksYUFBYSxDQUFDLGFBQWtCO1FBQ2xDLElBQUksYUFBYSxFQUFFOztrQkFDWCxZQUFZLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7WUFDakcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNyRztJQUNILENBQUM7Ozs7SUFDRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFxQkQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUNsRCxDQUFDOzs7O0lBUUQsUUFBUTtRQUNOLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDeEYsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFLTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBS00sSUFBSTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUtNLEtBQUs7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBckxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUVoQyw2dERBQWlEO2dCQUNqRCxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7YUFDbEM7Ozs7WUFuQlEsaUJBQWlCLHVCQStJckIsTUFBTSxTQUFDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBQztZQXJKdEMsTUFBTSx1QkFzSlYsUUFBUTtZQXJKd0IsWUFBWTs7OzBCQWtDOUMsZUFBZSxTQUFDLCtCQUErQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTt1QkFHdEUsZUFBZSxTQUFDLGtDQUFrQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQkE0QnpFLEtBQUs7bUJBT0wsS0FBSzttQkFRTCxLQUFLO3FCQVFMLEtBQUs7b0JBUUwsS0FBSzs4QkFPTCxLQUFLOzRCQVFMLEtBQUssU0FBQyxlQUFlO21CQW1CckIsS0FBSztvQkFRTCxLQUFLOzs7Ozs7O0lBaEhOLHlEQUF5Qzs7Ozs7SUFDekMsbURBQXNDOzs7OztJQUN0Qyx1REFBb0M7O0lBTXBDLGtEQUN3RDs7SUFFeEQsK0NBQ3dEOzs7Ozs7SUEyQnhELG1EQUE4Qjs7Ozs7OztJQU85QiwyQ0FBc0I7Ozs7Ozs7O0lBUXRCLDJDQUFzQjs7Ozs7Ozs7SUFRdEIsNkNBQXdCOzs7Ozs7OztJQVF4Qiw0Q0FBOEM7Ozs7Ozs7SUFPOUMsc0RBQWlDOzs7Ozs7OztJQTJCakMsMkNBQXNCOzs7Ozs7OztJQVF0Qiw0Q0FBdUI7Ozs7O0lBVXJCLDhDQUErRTs7Ozs7SUFDL0UsOENBQW1DOzs7OztJQUNuQyxnREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgUXVlcnlMaXN0LFxuICBTZWN1cml0eUNvbnRleHQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwsIFNhZmVTdHlsZSwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNYXREcmF3ZXJUb2dnbGVSZXN1bHQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtbmF2aWdhdGlvbi1kcmF3ZXItbWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE5hdmlnYXRpb25EcmF3ZXJNZW51RGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1uYXZpZ2F0aW9uLWRyYXdlci10b29sYmFyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbmF2aWdhdGlvbi1kcmF3ZXInLFxuICBzdHlsZVVybHM6IFsnLi9uYXZpZ2F0aW9uLWRyYXdlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2aWdhdGlvbkRyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2xvc2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfbWVudVRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYmFja2dyb3VuZEltYWdlOiBTYWZlU3R5bGU7XG5cbiAgZ2V0IG1lbnVUb2dnbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tZW51VG9nZ2xlZDtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfZHJhd2VyTWVudTogUXVlcnlMaXN0PFRkTmF2aWdhdGlvbkRyYXdlck1lbnVEaXJlY3RpdmU+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGROYXZpZ2F0aW9uRHJhd2VyVG9vbGJhckRpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBfdG9vbGJhcjogUXVlcnlMaXN0PFRkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmU+O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBbVGROYXZpZ2F0aW9uRHJhd2VyTWVudURpcmVjdGl2ZV0gaGFzIGNvbnRlbnQuXG4gICAqL1xuICBnZXQgaXNNZW51QXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kcmF3ZXJNZW51ID8gdGhpcy5fZHJhd2VyTWVudS5sZW5ndGggPiAwIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgW1RkTmF2aWdhdGlvbkRyYXdlclRvb2xiYXJEaXJlY3RpdmVdIGhhcyBjb250ZW50LlxuICAgKi9cbiAgZ2V0IGlzQ3VzdG9tVG9vbGJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbGJhciA/IHRoaXMuX3Rvb2xiYXIubGVuZ3RoID4gMCA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIGJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSB0b29sYmFyLlxuICAgKi9cbiAgZ2V0IGlzQmFja2dyb3VuZEF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLl9iYWNrZ3JvdW5kSW1hZ2U7XG4gIH1cblxuICAvKipcbiAgICogc2lkZW5hdlRpdGxlPzogc3RyaW5nXG4gICAqIFRpdGxlIHNldCBpbiBzaWRlTmF2LlxuICAgKi9cbiAgQElucHV0KCkgc2lkZW5hdlRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGljb24/OiBzdHJpbmdcbiAgICpcbiAgICogaWNvbiBuYW1lIHRvIGJlIGRpc3BsYXllZCBiZWZvcmUgdGhlIHRpdGxlXG4gICAqL1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGxvZ28/OiBzdHJpbmdcbiAgICpcbiAgICogbG9nbyBpY29uIG5hbWUgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGUuXG4gICAqIElmIFtpY29uXSBpcyBzZXQsIHRoZW4gdGhpcyB3aWxsIG5vdCBiZSBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgpIGxvZ286IHN0cmluZztcblxuICAvKipcbiAgICogYXZhdGFyPzogc3RyaW5nXG4gICAqXG4gICAqIGF2YXRhciB1cmwgdG8gYmUgZGlzcGxheWVkIGJlZm9yZSB0aGUgdGl0bGVcbiAgICogSWYgW2ljb25dIG9yIFtsb2dvXSBhcmUgc2V0LCB0aGVuIHRoaXMgd2lsbCBub3QgYmUgc2hvd24uXG4gICAqL1xuICBASW5wdXQoKSBhdmF0YXI6IHN0cmluZztcblxuICAvKipcbiAgICogY29sb3I/OiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJ1xuICAgKlxuICAgKiB0b29sYmFyIGNvbG9yIG9wdGlvbjogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm4uXG4gICAqIElmIFtjb2xvcl0gaXMgbm90IHNldCwgZGVmYXVsdCBpcyB1c2VkLlxuICAgKi9cbiAgQElucHV0KCkgY29sb3I6ICdhY2NlbnQnIHwgJ3ByaW1hcnknIHwgJ3dhcm4nO1xuXG4gIC8qKlxuICAgKiBuYXZpZ2F0aW9uUm91dGU/OiBzdHJpbmdcbiAgICpcbiAgICogb3B0aW9uIHRvIHNldCB0aGUgY29tYmluZWQgcm91dGUgZm9yIHRoZSBpY29uLCBsb2dvLCBhbmQgc2lkZW5hdlRpdGxlLlxuICAgKi9cbiAgQElucHV0KCkgbmF2aWdhdGlvblJvdXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGJhY2tncm91bmRVcmw/OiBTYWZlUmVzb3VyY2VVcmxcbiAgICpcbiAgICogaW1hZ2UgdG8gYmUgZGlzcGxheWVkIGFzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSB0b29sYmFyLlxuICAgKiBVUkwgdXNlZCB3aWxsIGJlIHNhbml0aXplZCwgYnV0IGl0IHNob3VsZCBiZSBhbHdheXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIHRvIGF2b2lkIFhTUy5cbiAgICovXG4gIEBJbnB1dCgnYmFja2dyb3VuZFVybCcpXG4gIC8vIFRPRE8gQW5ndWxhciBjb21wbGFpbnMgd2l0aCB3YXJuaW5ncyBpZiB0aGlzIGlzIHR5cGUgW1NhZmVSZXNvdXJjZVVybF0uLiBzbyB3ZSB3aWxsIG1ha2UgaXQgPGFueT4gdW50aWwgaXRzIGZpeGVkLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2lzc3Vlcy8yOTc3XG4gIHNldCBiYWNrZ3JvdW5kVXJsKGJhY2tncm91bmRVcmw6IGFueSkge1xuICAgIGlmIChiYWNrZ3JvdW5kVXJsKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRVcmw6IHN0cmluZyA9IHRoaXMuX3Nhbml0aXplLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5SRVNPVVJDRV9VUkwsIGJhY2tncm91bmRVcmwpO1xuICAgICAgdGhpcy5fYmFja2dyb3VuZEltYWdlID0gdGhpcy5fc2FuaXRpemUuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LlNUWUxFLCAndXJsKCcgKyBzYW5pdGl6ZWRVcmwgKyAnKScpO1xuICAgIH1cbiAgfVxuICBnZXQgYmFja2dyb3VuZEltYWdlKCk6IFNhZmVTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRJbWFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBuYW1lPzogc3RyaW5nXG4gICAqXG4gICAqIHN0cmluZyB0byBiZSBkaXNwbGF5ZWQgYXMgcGFydCBvZiB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgc3VibGFiZWwuXG4gICAqIGlmIFtlbWFpbF0gaXMgbm90IHNldCwgdGhlbiBbbmFtZV0gd2lsbCBiZSB0aGUgdG9nZ2xlIG1lbnUgdGV4dC5cbiAgICovXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogZW1haWw/OiBzdHJpbmdcbiAgICpcbiAgICogc3RyaW5nIHRvIGJlIGRpc3BsYXllZCBhcyBwYXJ0IG9mIHRoZSBuYXZpZ2F0aW9uIGRyYXdlciBzdWJsYWJlbCBpbiB0aGUgW3RvZ2dsZV0gbWVudSB0ZXh0LlxuICAgKiBpZiBbZW1haWxdIGFuZCBbbmFtZV0gYXJlIG5vdCBzZXQsIHRoZW4gdGhlIHRvZ2dsZSBtZW51IGlzIG5vdCByZW5kZXJlZC5cbiAgICovXG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiByb3V0ZXIgd2FzIGluamVjdGVkLlxuICAgKi9cbiAgZ2V0IHJvdXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fcm91dGVyICYmICEhdGhpcy5uYXZpZ2F0aW9uUm91dGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVGRMYXlvdXRDb21wb25lbnQpKSBwcml2YXRlIF9sYXlvdXQ6IFRkTGF5b3V0Q29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX3Nhbml0aXplOiBEb21TYW5pdGl6ZXIsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbiA9IHRoaXMuX2xheW91dC5zaWRlbmF2Lm9wZW5lZENoYW5nZS5zdWJzY3JpYmUoKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fbWVudVRvZ2dsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jbG9zZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY2xvc2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX2Nsb3NlU3Vic2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNNZW51QXZhaWxhYmxlKSB7XG4gICAgICB0aGlzLl9tZW51VG9nZ2xlZCA9ICF0aGlzLl9tZW51VG9nZ2xlZDtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0aW9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5uYXZpZ2F0aW9uUm91dGUpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm94eSB0b2dnbGUgbWV0aG9kIHRvIGFjY2VzcyBzaWRlbmF2IGZyb20gb3V0c2lkZSAoZnJvbSB0ZC1sYXlvdXQgdGVtcGxhdGUpLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQudG9nZ2xlKCk7XG4gIH1cblxuICAvKipcbiAgICogUHJveHkgb3BlbiBtZXRob2QgdG8gYWNjZXNzIHNpZGVuYXYgZnJvbSBvdXRzaWRlIChmcm9tIHRkLWxheW91dCB0ZW1wbGF0ZSkuXG4gICAqL1xuICBwdWJsaWMgb3BlbigpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3h5IGNsb3NlIG1ldGhvZCB0byBhY2Nlc3Mgc2lkZW5hdiBmcm9tIG91dHNpZGUgKGZyb20gdGQtbGF5b3V0IHRlbXBsYXRlKS5cbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiBQcm9taXNlPE1hdERyYXdlclRvZ2dsZVJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQuY2xvc2UoKTtcbiAgfVxufVxuIl19