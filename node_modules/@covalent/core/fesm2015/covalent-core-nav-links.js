import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { tdCollapseAnimation, tdRotateAnimation, CovalentCommonModule } from '@covalent/core/common';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';

/**
 * @fileoverview added by tsickle
 * Generated from: nav-links.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdNavNode() { }
if (false) {
    /** @type {?} */
    ITdNavNode.prototype.label;
    /** @type {?|undefined} */
    ITdNavNode.prototype.show;
}
/**
 * @record
 */
function ITdNavHeader() { }
if (false) {
    /** @type {?} */
    ITdNavHeader.prototype.children;
}
/**
 * @record
 */
function ITdNavExpansion() { }
if (false) {
    /** @type {?|undefined} */
    ITdNavExpansion.prototype.collapsable;
}
/**
 * @record
 */
function ITdLink() { }
if (false) {
    /** @type {?} */
    ITdLink.prototype.link;
    /** @type {?} */
    ITdLink.prototype.icon;
}
/** @type {?} */
let nextUniqueId = 0;
class TdNavLinksComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: nav-links.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentNavLinksModule {
}
CovalentNavLinksModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TdNavLinksComponent],
                // directives, components, and pipes owned by this NgModule
                exports: [TdNavLinksComponent],
                imports: [
                    CommonModule,
                    CovalentCommonModule,
                    CovalentExpansionPanelModule,
                    MatRippleModule,
                    MatMenuModule,
                    MatListModule,
                    MatIconModule,
                    MatDividerModule,
                    RouterModule,
                ],
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
 * Generated from: covalent-core-nav-links.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentNavLinksModule, TdNavLinksComponent };
//# sourceMappingURL=covalent-core-nav-links.js.map
