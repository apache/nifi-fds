/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { MatTabsModule } from '@angular/material/tabs';
import { TdTabSelectComponent } from './tab-select.component';
import { TdTabOptionComponent } from './tab-option.component';
var CovalentTabSelectModule = /** @class */ (function () {
    function CovalentTabSelectModule() {
    }
    CovalentTabSelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TdTabSelectComponent,
                        TdTabOptionComponent,
                    ],
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
                    exports: [
                        TdTabSelectComponent,
                        TdTabOptionComponent,
                    ],
                },] }
    ];
    return CovalentTabSelectModule;
}());
export { CovalentTabSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS90YWItc2VsZWN0LyIsInNvdXJjZXMiOlsidGFiLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlEO0lBQUE7SUFrQnNDLENBQUM7O2dCQWxCdEMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7d0JBQ3BCLG9CQUFvQjtxQkFDckI7O29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCx1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDs7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3FCQUNyQjtpQkFDRjs7SUFDcUMsOEJBQUM7Q0FBQSxBQWxCdkMsSUFrQnVDO1NBQTFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBNYXRUYWJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbmltcG9ydCB7IFRkVGFiU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi90YWItc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFRhYk9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLW9wdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUZFRhYlNlbGVjdENvbXBvbmVudCxcbiAgICBUZFRhYk9wdGlvbkNvbXBvbmVudCxcbiAgXSwgLy8gZGlyZWN0aXZlcywgY29tcG9uZW50cywgYW5kIHBpcGVzIG93bmVkIGJ5IHRoaXMgTmdNb2R1bGVcbiAgaW1wb3J0czogW1xuICAgIC8qKiBBbmd1bGFyIE1vZHVsZXMgKi9cbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgLyoqIE1hdGVyaWFsIE1vZHVsZXMgKi9cbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgXSwgLy8gbW9kdWxlcyBuZWVkZWQgdG8gcnVuIHRoaXMgbW9kdWxlXG4gIGV4cG9ydHM6IFtcbiAgICBUZFRhYlNlbGVjdENvbXBvbmVudCxcbiAgICBUZFRhYk9wdGlvbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRUYWJTZWxlY3RNb2R1bGUge31cbiJdfQ==