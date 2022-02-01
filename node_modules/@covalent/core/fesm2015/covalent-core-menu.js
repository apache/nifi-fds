import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

/**
 * @fileoverview added by tsickle
 * Generated from: menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdMenuComponent {
}
TdMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-menu',
                template: "<ng-content select=\"[td-menu-header]\"></ng-content>\n<mat-divider></mat-divider>\n<div class=\"td-menu-content\">\n  <ng-content></ng-content>\n</div>\n<mat-divider></mat-divider>\n<ng-content select=\"[td-menu-footer]\"></ng-content>\n",
                styles: [":host{-ms-flex-direction:column;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:column;margin-bottom:-8px;margin-top:-8px}:host ::ng-deep [td-menu-header]{padding:8px;text-align:center}:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line,:host ::ng-deep mat-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-list mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line{height:auto}:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content{height:auto;padding:8px}:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-right:0}[dir=rtl] :host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content .mat-list-text,[dir=rtl] :host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content .mat-list-text{padding-left:0;padding-right:16px}:host ::ng-deep mat-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list[dense] mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list a[mat-list-item].mat-2-line .mat-list-item-content [matLine]+[matLine],:host ::ng-deep mat-nav-list mat-list-item.mat-2-line .mat-list-item-content [matLine]+[matLine]{margin-top:4px}.td-menu-content{max-height:50vh;overflow-y:auto}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_MENU = [TdMenuComponent];
class CovalentMenuModule {
}
CovalentMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatMenuModule, MatDividerModule],
                declarations: [TD_MENU],
                exports: [TD_MENU],
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
 * Generated from: covalent-core-menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentMenuModule, TdMenuComponent };
//# sourceMappingURL=covalent-core-menu.js.map
