/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { TdExpansionPanelComponent, TdExpansionPanelHeaderDirective, TdExpansionPanelLabelDirective, TdExpansionPanelSublabelDirective, TdExpansionPanelSummaryComponent } from './expansion-panel.component';
import { TdExpansionPanelGroupComponent } from './expansion-panel-group.component';
/** @type {?} */
var TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
var CovalentExpansionPanelModule = /** @class */ (function () {
    function CovalentExpansionPanelModule() {
    }
    CovalentExpansionPanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatRippleModule,
                        MatIconModule,
                        PortalModule,
                    ],
                    declarations: [
                        TD_EXPANSION_PANEL,
                    ],
                    exports: [
                        TD_EXPANSION_PANEL,
                    ],
                },] }
    ];
    return CovalentExpansionPanelModule;
}());
export { CovalentExpansionPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQzFGLGlDQUFpQyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0lBRTdFLGtCQUFrQixHQUFnQjtJQUN0Qyw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGdDQUFnQztDQUNqQztBQUVEO0lBQUE7SUFnQkEsQ0FBQzs7Z0JBaEJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3FCQUNuQjtpQkFDRjs7SUFHRCxtQ0FBQztDQUFBLEFBaEJELElBZ0JDO1NBRlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsIFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUsIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSxcbiAgICAgICAgIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSwgVGRFeHBhbnNpb25QYW5lbFN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50JztcblxuY29uc3QgVERfRVhQQU5TSU9OX1BBTkVMOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRFeHBhbnNpb25QYW5lbEdyb3VwQ29tcG9uZW50LFxuICBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LFxuICBUZEV4cGFuc2lvblBhbmVsSGVhZGVyRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsTGFiZWxEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxTdWJsYWJlbERpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbFN1bW1hcnlDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfRVhQQU5TSU9OX1BBTkVMLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfRVhQQU5TSU9OX1BBTkVMLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEV4cGFuc2lvblBhbmVsTW9kdWxlIHtcblxufVxuIl19