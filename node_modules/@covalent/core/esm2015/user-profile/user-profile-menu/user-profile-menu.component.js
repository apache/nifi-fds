/**
 * @fileoverview added by tsickle
 * Generated from: user-profile-menu/user-profile-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class TdUserProfileMenuComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL3VzZXItcHJvZmlsZS8iLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS1tZW51L3VzZXItcHJvZmlsZS1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFFLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBSXJDLFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDhrQkFBaUQ7Z0JBRWpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDJDQUF1Qjs7SUFDdkIsMENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtdXNlci1wcm9maWxlLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1wcm9maWxlLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91c2VyLXByb2ZpbGUtbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRVc2VyUHJvZmlsZU1lbnVDb21wb25lbnQge1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgX2Jsb2NrRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19