import { Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentMenuModule } from '@covalent/core/menu';

/**
 * @fileoverview added by tsickle
 * Generated from: user-profile-menu/user-profile-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdUserProfileMenuComponent {
    /**
     * @param {?} event
     * @return {?}
     */
    _blockEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
TdUserProfileMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-user-profile-menu',
                template: "<td-menu class=\"user-profile-menu\">\n  <!--header-->\n  <mat-list td-menu-header>\n    <mat-list-item *ngIf=\"name || email\" (click)=\"_blockEvent($event)\">\n      <mat-icon matListAvatar>person</mat-icon>\n      <span matLine *ngIf=\"name\" class=\"mat-body-1\">{{ name }}</span>\n      <span matLine *ngIf=\"email\">{{ email }}</span>\n    </mat-list-item>\n    <ng-content select=\"[td-user-info-list]\"></ng-content>\n  </mat-list>\n  <!--content-->\n  <mat-action-list>\n    <ng-content select=\"[td-user-action-list]\"></ng-content>\n  </mat-action-list>\n</td-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".user-profile-menu [td-menu-header]{padding-bottom:0;text-align:left}::ng-deep [mat-list-item] .mat-list-item-content .mat-icon[matListAvatar],::ng-deep mat-list-item:not(:first-child) .mat-list-item-content .mat-icon[matListAvatar]{background:none}.mat-action-list{padding-top:0}:host ::ng-deep .mat-action-list .mat-divider,:host ::ng-deep .mat-divider{margin:8px 0}:host ::ng-deep mat-divider:last-child{display:none}:host ::ng-deep mat-list .mat-list-item.mat-2-line .mat-list-item-content{height:inherit}:host ::ng-deep mat-list .mat-list-item .mat-list-item-content{padding:8px}td-menu{margin-bottom:0}"]
            }] }
];
TdUserProfileMenuComponent.propDecorators = {
    email: [{ type: Input }],
    name: [{ type: Input }]
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
class TdUserProfileComponent {
}
TdUserProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-user-profile',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"accountMenu\">\n  <mat-icon>person</mat-icon>\n</button>\n\n<mat-menu #accountMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <td-user-profile-menu [name]=\"name\" [email]=\"email\">\n    <ng-content select=\"[td-user-info-list]\" td-user-info-list></ng-content>\n    <ng-content select=\"[td-user-action-list]\" td-user-action-list></ng-content>\n  </td-user-profile-menu>\n</mat-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
TdUserProfileComponent.propDecorators = {
    name: [{ type: Input }],
    email: [{ type: Input }]
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
class CovalentUserProfileModule {
}
CovalentUserProfileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TdUserProfileComponent, TdUserProfileMenuComponent],
                imports: [
                    CommonModule,
                    MatMenuModule,
                    MatIconModule,
                    MatButtonModule,
                    MatListModule,
                    /* covalent modules */
                    CovalentMenuModule,
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

export { CovalentUserProfileModule, TdUserProfileComponent, TdUserProfileMenuComponent };
//# sourceMappingURL=covalent-core-user-profile.js.map
