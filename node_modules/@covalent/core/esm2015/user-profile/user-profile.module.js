/**
 * @fileoverview added by tsickle
 * Generated from: user-profile.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentMenuModule } from '@covalent/core/menu';
import { TdUserProfileMenuComponent } from './user-profile-menu/user-profile-menu.component';
import { TdUserProfileComponent } from './user-profile.component';
export class CovalentUserProfileModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS91c2VyLXByb2ZpbGUvIiwic291cmNlcyI6WyJ1c2VyLXByb2ZpbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBaUJsRSxNQUFNLE9BQU8seUJBQXlCOzs7WUFmckMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDO2dCQUNsRSxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUViLHNCQUFzQjtvQkFDdEIsa0JBQWtCO2lCQUNuQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsQ0FBQzthQUM5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuaW1wb3J0IHsgQ292YWxlbnRNZW51TW9kdWxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvbWVudSc7XG5cbmltcG9ydCB7IFRkVXNlclByb2ZpbGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi91c2VyLXByb2ZpbGUtbWVudS91c2VyLXByb2ZpbGUtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRVc2VyUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1wcm9maWxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RkVXNlclByb2ZpbGVDb21wb25lbnQsIFRkVXNlclByb2ZpbGVNZW51Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG5cbiAgICAvKiBjb3ZhbGVudCBtb2R1bGVzICovXG4gICAgQ292YWxlbnRNZW51TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBleHBvcnRzOiBbVGRVc2VyUHJvZmlsZUNvbXBvbmVudCwgVGRVc2VyUHJvZmlsZU1lbnVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFVzZXJQcm9maWxlTW9kdWxlIHt9XG4iXX0=