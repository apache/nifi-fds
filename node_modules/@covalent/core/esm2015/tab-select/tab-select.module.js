/**
 * @fileoverview added by tsickle
 * Generated from: tab-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatTabsModule } from '@angular/material/tabs';
import { TdTabSelectComponent } from './tab-select.component';
import { TdTabOptionComponent } from './tab-option.component';
export class CovalentTabSelectModule {
}
CovalentTabSelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TdTabSelectComponent, TdTabOptionComponent],
                // directives, components, and pipes owned by this NgModule
                imports: [
                    /** Angular Modules */
                    CommonModule,
                    FormsModule,
                    /** Material Modules */
                    PortalModule,
                    MatTabsModule,
                ],
                // modules needed to run this module
                exports: [TdTabSelectComponent, TdTabOptionComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvdGFiLXNlbGVjdC8iLCJzb3VyY2VzIjpbInRhYi1zZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFjOUQsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBWm5DLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQzs7Z0JBQzFELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCx1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDs7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7YUFDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuXG5pbXBvcnQgeyBUZFRhYlNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFiLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRUYWJPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1vcHRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGRUYWJTZWxlY3RDb21wb25lbnQsIFRkVGFiT3B0aW9uQ29tcG9uZW50XSwgLy8gZGlyZWN0aXZlcywgY29tcG9uZW50cywgYW5kIHBpcGVzIG93bmVkIGJ5IHRoaXMgTmdNb2R1bGVcbiAgaW1wb3J0czogW1xuICAgIC8qKiBBbmd1bGFyIE1vZHVsZXMgKi9cbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgLyoqIE1hdGVyaWFsIE1vZHVsZXMgKi9cbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgXSwgLy8gbW9kdWxlcyBuZWVkZWQgdG8gcnVuIHRoaXMgbW9kdWxlXG4gIGV4cG9ydHM6IFtUZFRhYlNlbGVjdENvbXBvbmVudCwgVGRUYWJPcHRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRhYlNlbGVjdE1vZHVsZSB7fVxuIl19