/**
 * @fileoverview added by tsickle
 * Generated from: nav-links.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { tdCollapseAnimation, tdRotateAnimation } from '@covalent/core/common';
/**
 * @record
 */
export function ITdNavNode() { }
if (false) {
    /** @type {?} */
    ITdNavNode.prototype.label;
    /** @type {?|undefined} */
    ITdNavNode.prototype.show;
}
/**
 * @record
 */
export function ITdNavHeader() { }
if (false) {
    /** @type {?} */
    ITdNavHeader.prototype.children;
}
/**
 * @record
 */
export function ITdNavExpansion() { }
if (false) {
    /** @type {?|undefined} */
    ITdNavExpansion.prototype.collapsable;
}
/**
 * @record
 */
export function ITdLink() { }
if (false) {
    /** @type {?} */
    ITdLink.prototype.link;
    /** @type {?} */
    ITdLink.prototype.icon;
}
/** @type {?} */
let nextUniqueId = 0;
export class TdNavLinksComponent {
    constructor() {
        this._uniqueId = `td-nav-links-${++nextUniqueId}`;
        this._collapsedSet = new Set();
        this.id = this._uniqueId;
        /**
         * Event trigger after a navigation click
         */
        this.afterNavigation = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    _linkClicked(link) {
        this.afterNavigation.emit(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    _href(link) {
        return link.link && ((/** @type {?} */ (link.link))).href;
    }
    /**
     * @param {?} link
     * @return {?}
     */
    _routerLink(link) {
        return link.link && ((/** @type {?} */ (link.link))).routerLink;
    }
    /**
     * @param {?} link
     * Toggles expand/collapse state of expansion link.
     * Only applied when `collapsable` is true
     * @return {?}
     */
    _toggle(link) {
        if (this._isCollapsed(link)) {
            this._collapsedSet.delete(link);
        }
        else {
            this._collapsedSet.add(link);
        }
    }
    /**
     * @param {?} link
     * Returns true if the state of provided expansion link is collapsed.
     * @return {?}
     */
    _isCollapsed(link) {
        return this._collapsedSet.has(link);
    }
}
TdNavLinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-nav-links',
                template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-link let-linkIndex=\"index\">\n    <ng-container *ngIf=\"link.show === undefined || link.show\">\n      <ng-container *ngIf=\"link.children?.length && !link.link\">\n        <h3\n          [class.td-nav-link-cursor]=\"link.collapsable\"\n          matSubheader\n          matRipple\n          [matRippleDisabled]=\"!link.collapsable\"\n          (click)=\"link.collapsable && _toggle(link)\"\n        >\n          <mat-icon *ngIf=\"link.icon\" [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span [style.width.%]=\"100\">{{ link.label }}</span>\n          <mat-icon [@tdRotate]=\"!_isCollapsed(link)\" *ngIf=\"link.collapsable\">keyboard_arrow_down</mat-icon>\n        </h3>\n        <td-nav-links\n          [id]=\"id + '-' + linkIndex\"\n          [@tdCollapse]=\"!!_isCollapsed(link)\"\n          [links]=\"link.children\"\n        ></td-nav-links>\n      </ng-container>\n      <ng-container *ngIf=\"link.link\">\n        <a\n          mat-list-item\n          *ngIf=\"_href(link)\"\n          [href]=\"_href(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">launch</mat-icon>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"_routerLink(link)\"\n          [routerLink]=\"_routerLink(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">launch</mat-icon>\n        </a>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-nav-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [tdCollapseAnimation, tdRotateAnimation],
                styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-nav-list.mat-list-base .td-nav-link-cursor{cursor:pointer}:host .mat-nav-list.mat-list-base .mat-list-item{height:40px}:host .mat-icon{margin-right:0}"]
            }] }
];
TdNavLinksComponent.propDecorators = {
    id: [{ type: Input }],
    links: [{ type: Input }],
    afterNavigation: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdNavLinksComponent.prototype._uniqueId;
    /**
     * @type {?}
     * @private
     */
    TdNavLinksComponent.prototype._collapsedSet;
    /** @type {?} */
    TdNavLinksComponent.prototype.id;
    /**
     * Links to be rendered by component.
     * @type {?}
     */
    TdNavLinksComponent.prototype.links;
    /**
     * Event trigger after a navigation click
     * @type {?}
     */
    TdNavLinksComponent.prototype.afterNavigation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9uYXYtbGlua3MvIiwic291cmNlcyI6WyJuYXYtbGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUUvRSxnQ0FHQzs7O0lBRkMsMkJBQWM7O0lBQ2QsMEJBQWU7Ozs7O0FBR2pCLGtDQUVDOzs7SUFEQyxnQ0FBb0I7Ozs7O0FBR3RCLHFDQUVDOzs7SUFEQyxzQ0FBc0I7Ozs7O0FBR3hCLDZCQUdDOzs7SUFGQyx1QkFBMkc7O0lBQzNHLHVCQUF5Qzs7O0lBR3ZDLFlBQVksR0FBVyxDQUFDO0FBUzVCLE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFRVSxjQUFTLEdBQVcsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFFckQsa0JBQWEsR0FBeUIsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFFaEUsT0FBRSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7UUFXM0Isb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQWtDakYsQ0FBQzs7Ozs7SUFoQ0MsWUFBWSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsSUFBYTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksRUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW9DLElBQUksQ0FBQyxJQUFJLEVBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNqRixDQUFDOzs7Ozs7O0lBT0QsT0FBTyxDQUFDLElBQXFCO1FBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7SUFNRCxZQUFZLENBQUMsSUFBcUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QiwwckVBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsVUFBVSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7O2FBQ3JEOzs7aUJBTUUsS0FBSztvQkFNTCxLQUFLOzhCQUtMLE1BQU07Ozs7Ozs7SUFmUCx3Q0FBNkQ7Ozs7O0lBRTdELDRDQUF5RTs7SUFFekUsaUNBQXFDOzs7OztJQU1yQyxvQ0FBZ0U7Ozs7O0lBS2hFLDhDQUErRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uLCB0ZFJvdGF0ZUFuaW1hdGlvbiB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlL2NvbW1vbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTmF2Tm9kZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHNob3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE5hdkhlYWRlciBleHRlbmRzIElUZE5hdk5vZGUge1xuICBjaGlsZHJlbjogSVRkTGlua1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE5hdkV4cGFuc2lvbiBleHRlbmRzIElUZE5hdkhlYWRlciB7XG4gIGNvbGxhcHNhYmxlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRMaW5rIGV4dGVuZHMgSVRkTmF2Tm9kZSB7XG4gIGxpbms6IHsgaHJlZjogc3RyaW5nOyBvcGVuSW5OZXdUYWI/OiBib29sZWFuIH0gfCB7IHJvdXRlckxpbms6IHN0cmluZyB8IHN0cmluZ1tdOyBvcGVuSW5OZXdUYWI/OiBib29sZWFuIH07XG4gIGljb246IHsgZm9udFNldD86IHN0cmluZzsgbmFtZTogc3RyaW5nIH07XG59XG5cbmxldCBuZXh0VW5pcXVlSWQ6IG51bWJlciA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLW5hdi1saW5rcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtbGlua3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtbGlua3MuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFt0ZENvbGxhcHNlQW5pbWF0aW9uLCB0ZFJvdGF0ZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTmF2TGlua3NDb21wb25lbnQge1xuICBwcml2YXRlIF91bmlxdWVJZDogc3RyaW5nID0gYHRkLW5hdi1saW5rcy0keysrbmV4dFVuaXF1ZUlkfWA7XG5cbiAgcHJpdmF0ZSBfY29sbGFwc2VkU2V0OiBTZXQ8SVRkTmF2RXhwYW5zaW9uPiA9IG5ldyBTZXQ8SVRkTmF2RXhwYW5zaW9uPigpO1xuXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLl91bmlxdWVJZDtcblxuICAvKipcbiAgICogTGlua3MgdG8gYmUgcmVuZGVyZWQgYnkgY29tcG9uZW50LlxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gIEBJbnB1dCgpIGxpbmtzOiBBcnJheTxJVGROYXZFeHBhbnNpb24gfCBJVGROYXZIZWFkZXIgfCBJVGRMaW5rPjtcblxuICAvKipcbiAgICogRXZlbnQgdHJpZ2dlciBhZnRlciBhIG5hdmlnYXRpb24gY2xpY2tcbiAgICovXG4gIEBPdXRwdXQoKSBhZnRlck5hdmlnYXRpb246IEV2ZW50RW1pdHRlcjxJVGRMaW5rPiA9IG5ldyBFdmVudEVtaXR0ZXI8SVRkTGluaz4oKTtcblxuICBfbGlua0NsaWNrZWQobGluazogSVRkTGluayk6IHZvaWQge1xuICAgIHRoaXMuYWZ0ZXJOYXZpZ2F0aW9uLmVtaXQobGluayk7XG4gIH1cblxuICBfaHJlZihsaW5rOiBJVGRMaW5rKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbGluay5saW5rICYmICg8eyBocmVmPzogc3RyaW5nIH0+bGluay5saW5rKS5ocmVmO1xuICB9XG5cbiAgX3JvdXRlckxpbmsobGluazogSVRkTGluayk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gbGluay5saW5rICYmICg8eyByb3V0ZXJMaW5rPzogc3RyaW5nIHwgc3RyaW5nW10gfT5saW5rLmxpbmspLnJvdXRlckxpbms7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGxpbmtcbiAgICogVG9nZ2xlcyBleHBhbmQvY29sbGFwc2Ugc3RhdGUgb2YgZXhwYW5zaW9uIGxpbmsuXG4gICAqIE9ubHkgYXBwbGllZCB3aGVuIGBjb2xsYXBzYWJsZWAgaXMgdHJ1ZVxuICAgKi9cbiAgX3RvZ2dsZShsaW5rOiBJVGROYXZFeHBhbnNpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faXNDb2xsYXBzZWQobGluaykpIHtcbiAgICAgIHRoaXMuX2NvbGxhcHNlZFNldC5kZWxldGUobGluayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbGxhcHNlZFNldC5hZGQobGluayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBsaW5rXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RhdGUgb2YgcHJvdmlkZWQgZXhwYW5zaW9uIGxpbmsgaXMgY29sbGFwc2VkLlxuICAgKi9cbiAgX2lzQ29sbGFwc2VkKGxpbms6IElUZE5hdkV4cGFuc2lvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWRTZXQuaGFzKGxpbmspO1xuICB9XG59XG4iXX0=