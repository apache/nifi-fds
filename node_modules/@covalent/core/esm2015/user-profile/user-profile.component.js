/**
 * @fileoverview added by tsickle
 * Generated from: user-profile.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class TdUserProfileComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS91c2VyLXByb2ZpbGUvIiwic291cmNlcyI6WyJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPMUUsTUFBTSxPQUFPLHNCQUFzQjs7O1lBTGxDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4YkFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7bUJBRUUsS0FBSztvQkFDTCxLQUFLOzs7O0lBRE4sc0NBQXNCOztJQUN0Qix1Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC11c2VyLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkVXNlclByb2ZpbGVDb21wb25lbnQge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG59XG4iXX0=