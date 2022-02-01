(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/menu'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/list'), require('@covalent/core/menu')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/user-profile', ['exports', '@angular/core', '@angular/common', '@angular/material/menu', '@angular/material/icon', '@angular/material/button', '@angular/material/list', '@covalent/core/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core['user-profile'] = {}), global.ng.core, global.ng.common, global.ng.material.menu, global.ng.material.icon, global.ng.material.button, global.ng.material.list, global.covalent.core.menu));
}(this, (function (exports, core, common, menu, icon, button, list, menu$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: user-profile-menu/user-profile-menu.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdUserProfileMenuComponent = /** @class */ (function () {
        function TdUserProfileMenuComponent() {
        }
        /**
         * @param {?} event
         * @return {?}
         */
        TdUserProfileMenuComponent.prototype._blockEvent = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        return TdUserProfileMenuComponent;
    }());
    TdUserProfileMenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-user-profile-menu',
                    template: "<td-menu class=\"user-profile-menu\">\n  <!--header-->\n  <mat-list td-menu-header>\n    <mat-list-item *ngIf=\"name || email\" (click)=\"_blockEvent($event)\">\n      <mat-icon matListAvatar>person</mat-icon>\n      <span matLine *ngIf=\"name\" class=\"mat-body-1\">{{ name }}</span>\n      <span matLine *ngIf=\"email\">{{ email }}</span>\n    </mat-list-item>\n    <ng-content select=\"[td-user-info-list]\"></ng-content>\n  </mat-list>\n  <!--content-->\n  <mat-action-list>\n    <ng-content select=\"[td-user-action-list]\"></ng-content>\n  </mat-action-list>\n</td-menu>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".user-profile-menu [td-menu-header]{padding-bottom:0;text-align:left}::ng-deep [mat-list-item] .mat-list-item-content .mat-icon[matListAvatar],::ng-deep mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListAvatar]{background:none}.mat-action-list{padding-top:0}:host ::ng-deep .mat-action-list .mat-divider,:host ::ng-deep .mat-divider{margin:8px 0}:host ::ng-deep mat-divider:last-child{display:none}:host ::ng-deep mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}:host ::ng-deep mat-list .mat-list-item .mat-list-item-content{padding:8px}td-menu{margin-bottom:0}"]
                }] }
    ];
    TdUserProfileMenuComponent.propDecorators = {
        email: [{ type: core.Input }],
        name: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        TdUserProfileMenuComponent.prototype.email;
        /** @type {?} */
        TdUserProfileMenuComponent.prototype.name;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: user-profile.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdUserProfileComponent = /** @class */ (function () {
        function TdUserProfileComponent() {
        }
        return TdUserProfileComponent;
    }());
    TdUserProfileComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-user-profile',
                    template: "<button mat-icon-button [matMenuTriggerFor]=\"accountMenu\">\n  <mat-icon>person</mat-icon>\n</button>\n\n<mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <td-user-profile-menu [name]=\"name\" [email]=\"email\">\n    <ng-content select=\"[td-user-info-list]\" td-user-info-list></ng-content>\n    <ng-content select=\"[td-user-action-list]\" td-user-action-list></ng-content>\n  </td-user-profile-menu>\n</mat-menu>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    TdUserProfileComponent.propDecorators = {
        name: [{ type: core.Input }],
        email: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        TdUserProfileComponent.prototype.name;
        /** @type {?} */
        TdUserProfileComponent.prototype.email;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: user-profile.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentUserProfileModule = /** @class */ (function () {
        function CovalentUserProfileModule() {
        }
        return CovalentUserProfileModule;
    }());
    CovalentUserProfileModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TdUserProfileComponent, TdUserProfileMenuComponent],
                    imports: [
                        common.CommonModule,
                        menu.MatMenuModule,
                        icon.MatIconModule,
                        button.MatButtonModule,
                        list.MatListModule,
                        /* covalent modules */
                        menu$1.CovalentMenuModule,
                    ],
                    providers: [],
                    exports: [TdUserProfileComponent, TdUserProfileMenuComponent],
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
     * Generated from: covalent-core-user-profile.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentUserProfileModule = CovalentUserProfileModule;
    exports.TdUserProfileComponent = TdUserProfileComponent;
    exports.TdUserProfileMenuComponent = TdUserProfileMenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-user-profile.umd.js.map
