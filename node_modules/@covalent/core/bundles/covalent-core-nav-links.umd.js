(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/material/core'), require('@angular/material/list'), require('@angular/material/icon'), require('@angular/material/divider'), require('@angular/material/menu'), require('@covalent/core/common'), require('@covalent/core/expansion-panel')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/nav-links', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/material/core', '@angular/material/list', '@angular/material/icon', '@angular/material/divider', '@angular/material/menu', '@covalent/core/common', '@covalent/core/expansion-panel'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['nav-links'] = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.material.core, global.ng.material.list, global.ng.material.icon, global.ng.material.divider, global.ng.material.menu, global.covalent.core.common, global.covalent.core['expansion-panel']));
}(this, (function (exports, core, common$1, router, core$1, list, icon, divider, menu, common, expansionPanel) { 'use strict';

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
    var nextUniqueId = 0;
    var TdNavLinksComponent = /** @class */ (function () {
        function TdNavLinksComponent() {
            this._uniqueId = "td-nav-links-" + ++nextUniqueId;
            this._collapsedSet = new Set();
            this.id = this._uniqueId;
            /**
             * Event trigger after a navigation click
             */
            this.afterNavigation = new core.EventEmitter();
        }
        /**
         * @param {?} link
         * @return {?}
         */
        TdNavLinksComponent.prototype._linkClicked = function (link) {
            this.afterNavigation.emit(link);
        };
        /**
         * @param {?} link
         * @return {?}
         */
        TdNavLinksComponent.prototype._href = function (link) {
            return link.link && (( /** @type {?} */(link.link))).href;
        };
        /**
         * @param {?} link
         * @return {?}
         */
        TdNavLinksComponent.prototype._routerLink = function (link) {
            return link.link && (( /** @type {?} */(link.link))).routerLink;
        };
        /**
         * @param {?} link
         * Toggles expand/collapse state of expansion link.
         * Only applied when `collapsable` is true
         * @return {?}
         */
        TdNavLinksComponent.prototype._toggle = function (link) {
            if (this._isCollapsed(link)) {
                this._collapsedSet.delete(link);
            }
            else {
                this._collapsedSet.add(link);
            }
        };
        /**
         * @param {?} link
         * Returns true if the state of provided expansion link is collapsed.
         * @return {?}
         */
        TdNavLinksComponent.prototype._isCollapsed = function (link) {
            return this._collapsedSet.has(link);
        };
        return TdNavLinksComponent;
    }());
    TdNavLinksComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-nav-links',
                    template: "<mat-nav-list dense *ngIf=\"links && links.length > 0\">\n  <ng-template ngFor [ngForOf]=\"links\" let-link let-linkIndex=\"index\">\n    <ng-container *ngIf=\"link.show === undefined || link.show\">\n      <ng-container *ngIf=\"link.children?.length && !link.link\">\n        <h3\n          [class.td-nav-link-cursor]=\"link.collapsable\"\n          matSubheader\n          matRipple\n          [matRippleDisabled]=\"!link.collapsable\"\n          (click)=\"link.collapsable && _toggle(link)\"\n        >\n          <mat-icon *ngIf=\"link.icon\" [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span [style.width.%]=\"100\">{{ link.label }}</span>\n          <mat-icon [@tdRotate]=\"!_isCollapsed(link)\" *ngIf=\"link.collapsable\">keyboard_arrow_down</mat-icon>\n        </h3>\n        <td-nav-links\n          [id]=\"id + '-' + linkIndex\"\n          [@tdCollapse]=\"!!_isCollapsed(link)\"\n          [links]=\"link.children\"\n        ></td-nav-links>\n      </ng-container>\n      <ng-container *ngIf=\"link.link\">\n        <a\n          mat-list-item\n          *ngIf=\"_href(link)\"\n          [href]=\"_href(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">launch</mat-icon>\n        </a>\n        <a\n          mat-list-item\n          *ngIf=\"_routerLink(link)\"\n          [routerLink]=\"_routerLink(link)\"\n          [target]=\"link.link.openInNewTab ? '_blank' : undefined\"\n          id=\"{{ id }}-{{ linkIndex }}\"\n          class=\"td-nav-link\"\n          (click)=\"_linkClicked(link)\"\n        >\n          <mat-icon matListIcon [fontSet]=\"link.icon?.fontSet\">{{ link.icon?.name }}</mat-icon>\n          <span matLine>{{ link.label }}</span>\n          <mat-icon *ngIf=\"link.link.openInNewTab\">launch</mat-icon>\n        </a>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-nav-list>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    animations: [common.tdCollapseAnimation, common.tdRotateAnimation],
                    styles: [":host{display:block}:host .mat-nav-list.mat-list-base{padding-top:2px}:host .mat-nav-list.mat-list-base .td-nav-link-cursor{cursor:pointer}:host .mat-nav-list.mat-list-base .mat-list-item{height:40px}:host .mat-icon{margin-right:0}"]
                }] }
    ];
    TdNavLinksComponent.propDecorators = {
        id: [{ type: core.Input }],
        links: [{ type: core.Input }],
        afterNavigation: [{ type: core.Output }]
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
    var CovalentNavLinksModule = /** @class */ (function () {
        function CovalentNavLinksModule() {
        }
        return CovalentNavLinksModule;
    }());
    CovalentNavLinksModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TdNavLinksComponent],
                    // directives, components, and pipes owned by this NgModule
                    exports: [TdNavLinksComponent],
                    imports: [
                        common$1.CommonModule,
                        common.CovalentCommonModule,
                        expansionPanel.CovalentExpansionPanelModule,
                        core$1.MatRippleModule,
                        menu.MatMenuModule,
                        list.MatListModule,
                        icon.MatIconModule,
                        divider.MatDividerModule,
                        router.RouterModule,
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

    exports.CovalentNavLinksModule = CovalentNavLinksModule;
    exports.TdNavLinksComponent = TdNavLinksComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-nav-links.umd.js.map
