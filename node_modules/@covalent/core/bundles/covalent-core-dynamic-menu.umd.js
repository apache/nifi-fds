(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/tooltip')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/dynamic-menu', ['exports', '@angular/core', '@angular/common', '@angular/material/button', '@angular/material/icon', '@angular/material/list', '@angular/material/menu', '@angular/material/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['dynamic-menu'] = {}), global.ng.core, global.ng.common, global.ng.material.button, global.ng.material.icon, global.ng.material.list, global.ng.material.menu, global.ng.material.tooltip));
}(this, (function (exports, core, common, button, icon, list, menu, tooltip) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: dynamic-menu.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IMenuTrigger() { }
    if (false) {
        /** @type {?|undefined} */
        IMenuTrigger.prototype.id;
        /** @type {?|undefined} */
        IMenuTrigger.prototype.text;
        /** @type {?|undefined} */
        IMenuTrigger.prototype.icon;
        /** @type {?|undefined} */
        IMenuTrigger.prototype.svgIcon;
        /** @type {?|undefined} */
        IMenuTrigger.prototype.iconClasses;
    }
    /**
     * @record
     */
    function IMenuItem() { }
    if (false) {
        /** @type {?|undefined} */
        IMenuItem.prototype.id;
        /** @type {?} */
        IMenuItem.prototype.text;
        /** @type {?|undefined} */
        IMenuItem.prototype.icon;
        /** @type {?|undefined} */
        IMenuItem.prototype.svgIcon;
        /** @type {?|undefined} */
        IMenuItem.prototype.iconClasses;
        /** @type {?|undefined} */
        IMenuItem.prototype.children;
        /** @type {?|undefined} */
        IMenuItem.prototype.link;
        /** @type {?|undefined} */
        IMenuItem.prototype.newTab;
        /** @type {?|undefined} */
        IMenuItem.prototype.action;
    }
    /**
     * @record
     */
    function ITdDynamicMenuLinkClickEvent() { }
    if (false) {
        /** @type {?} */
        ITdDynamicMenuLinkClickEvent.prototype.text;
        /** @type {?} */
        ITdDynamicMenuLinkClickEvent.prototype.action;
    }
    var TdDynamicMenuComponent = /** @class */ (function () {
        function TdDynamicMenuComponent() {
            this.itemClicked = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdDynamicMenuComponent.prototype.emitClicked = function (event) {
            this.itemClicked.emit(event);
        };
        return TdDynamicMenuComponent;
    }());
    TdDynamicMenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-dynamic-menu',
                    template: "<button *ngIf=\"!trigger.text\" mat-icon-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n</button>\n<button *ngIf=\"trigger.text\" mat-button id=\"{{ trigger.id }}\" [matMenuTriggerFor]=\"menu.childMenu\">\n  <mat-icon *ngIf=\"trigger.svgIcon\" [class]=\"trigger.iconClasses\" [svgIcon]=\"trigger.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"trigger.icon\" [class]=\"trigger.iconClasses\">{{ trigger.icon }}</mat-icon>\n  <span *ngIf=\"trigger.text\">\n    {{ trigger.text }}\n  </span>\n</button>\n\n<td-dynamic-menu-item #menu [items]=\"items\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-item>\n",
                    styles: [""]
                }] }
    ];
    TdDynamicMenuComponent.propDecorators = {
        trigger: [{ type: core.Input }],
        items: [{ type: core.Input }],
        itemClicked: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        TdDynamicMenuComponent.prototype.trigger;
        /** @type {?} */
        TdDynamicMenuComponent.prototype.items;
        /** @type {?} */
        TdDynamicMenuComponent.prototype.itemClicked;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: dynamic-menu-item/dynamic-menu-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDynamicMenuItemComponent = /** @class */ (function () {
        function TdDynamicMenuItemComponent() {
            this.itemClicked = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdDynamicMenuItemComponent.prototype.emitClicked = function (event) {
            this.itemClicked.emit(event);
        };
        return TdDynamicMenuItemComponent;
    }());
    TdDynamicMenuItemComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-dynamic-menu-item',
                    template: "<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <ng-template let-item let-index=\"index\" ngFor [ngForOf]=\"items\">\n    <ng-container *ngIf=\"item.children && item.children.length > 0\">\n      <button mat-menu-item [id]=\"item.id\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n        <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n        <span *ngIf=\"item.text\">\n          {{ item.text }}\n        </span>\n      </button>\n      <td-dynamic-menu-item #menu [items]=\"item.children\"></td-dynamic-menu-item>\n    </ng-container>\n    <ng-container *ngIf=\"!item.children || item.children.length === 0\">\n      <ng-container *ngIf=\"!item.link && !item.action\">\n        <mat-divider class=\"group-divider\" *ngIf=\"index > 0\"></mat-divider>\n        <div class=\"group-label text-sm\">{{ item.text }}</div>\n      </ng-container>\n      <ng-container *ngIf=\"item.link || item.action\">\n        <div mat-menu-item class=\"pad-none\">\n          <td-dynamic-menu-link [item]=\"item\" (itemClicked)=\"emitClicked($event)\"></td-dynamic-menu-link>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-template>\n</mat-menu>\n",
                    styles: [".group-divider{margin:8px}.group-label{padding:16px}"]
                }] }
    ];
    TdDynamicMenuItemComponent.propDecorators = {
        items: [{ type: core.Input }],
        itemClicked: [{ type: core.Output }],
        childMenu: [{ type: core.ViewChild, args: ['childMenu', { static: true },] }]
    };
    if (false) {
        /** @type {?} */
        TdDynamicMenuItemComponent.prototype.items;
        /** @type {?} */
        TdDynamicMenuItemComponent.prototype.itemClicked;
        /** @type {?} */
        TdDynamicMenuItemComponent.prototype.childMenu;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: dynamic-menu-item/dynamic-menu-link/dynamic-menu-link.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDynamicMenuLinkComponent = /** @class */ (function () {
        function TdDynamicMenuLinkComponent() {
            this.itemClicked = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        TdDynamicMenuLinkComponent.prototype.emitClicked = function () {
            this.itemClicked.emit({ text: this.item.text, action: this.item.action });
        };
        return TdDynamicMenuLinkComponent;
    }());
    TdDynamicMenuLinkComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-dynamic-menu-link',
                    template: "<a\n  *ngIf=\"item.link\"\n  class=\"new-tab\"\n  mat-menu-item\n  [id]=\"item.id\"\n  [href]=\"item.link\"\n  [target]=\"item.newTab ? '_blank' : '_self'\"\n  (click)=\"emitClicked()\"\n>\n  <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n  <span>{{ item.text }}</span>\n  <mat-icon *ngIf=\"item.newTab\" class=\"new-tab-icon\">launch</mat-icon>\n</a>\n<button *ngIf=\"item.action\" mat-menu-item [id]=\"item.id\" (click)=\"emitClicked()\">\n  <mat-icon *ngIf=\"item.svgIcon\" [class]=\"item.iconClasses\" [svgIcon]=\"item.svgIcon\"></mat-icon>\n  <mat-icon *ngIf=\"item.icon\" [class]=\"item.iconClasses\">{{ item.icon }}</mat-icon>\n  <span>{{ item.text }}</span>\n</button>\n",
                    styles: [".new-tab{-ms-flex-align:center;-ms-flex-pack:start;align-items:center;display:-ms-flexbox;display:flex;justify-content:start}.new-tab span{-ms-flex:1;flex:1}.new-tab .new-tab-icon{margin:0 0 0 16px}"]
                }] }
    ];
    TdDynamicMenuLinkComponent.propDecorators = {
        item: [{ type: core.Input }],
        itemClicked: [{ type: core.Output }]
    };
    if (false) {
        /** @type {?} */
        TdDynamicMenuLinkComponent.prototype.item;
        /** @type {?} */
        TdDynamicMenuLinkComponent.prototype.itemClicked;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: dynamic-menu.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentDynamicMenuModule = /** @class */ (function () {
        function CovalentDynamicMenuModule() {
        }
        return CovalentDynamicMenuModule;
    }());
    CovalentDynamicMenuModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TdDynamicMenuComponent, TdDynamicMenuItemComponent, TdDynamicMenuLinkComponent],
                    imports: [common.CommonModule, button.MatButtonModule, icon.MatIconModule, list.MatListModule, menu.MatMenuModule, tooltip.MatTooltipModule],
                    providers: [],
                    exports: [TdDynamicMenuComponent, TdDynamicMenuItemComponent, TdDynamicMenuLinkComponent],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-core-dynamic-menu.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentDynamicMenuModule = CovalentDynamicMenuModule;
    exports.TdDynamicMenuComponent = TdDynamicMenuComponent;
    exports.TdDynamicMenuItemComponent = TdDynamicMenuItemComponent;
    exports.ɵa = TdDynamicMenuLinkComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-dynamic-menu.umd.js.map
