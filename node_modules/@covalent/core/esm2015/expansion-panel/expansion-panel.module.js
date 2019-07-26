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
const TD_EXPANSION_PANEL = [
    TdExpansionPanelGroupComponent,
    TdExpansionPanelComponent,
    TdExpansionPanelHeaderDirective,
    TdExpansionPanelLabelDirective,
    TdExpansionPanelSublabelDirective,
    TdExpansionPanelSummaryComponent,
];
export class CovalentExpansionPanelModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsK0JBQStCLEVBQUUsOEJBQThCLEVBQzFGLGlDQUFpQyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbEgsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O01BRTdFLGtCQUFrQixHQUFnQjtJQUN0Qyw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGdDQUFnQztDQUNqQztBQWdCRCxNQUFNLE9BQU8sNEJBQTRCOzs7WUFkeEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHsgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCwgVGRFeHBhbnNpb25QYW5lbEhlYWRlckRpcmVjdGl2ZSwgVGRFeHBhbnNpb25QYW5lbExhYmVsRGlyZWN0aXZlLFxuICAgICAgICAgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlLCBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vZXhwYW5zaW9uLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQnO1xuXG5jb25zdCBURF9FWFBBTlNJT05fUEFORUw6IFR5cGU8YW55PltdID0gW1xuICBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnQsXG4gIFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQsXG4gIFRkRXhwYW5zaW9uUGFuZWxIZWFkZXJEaXJlY3RpdmUsXG4gIFRkRXhwYW5zaW9uUGFuZWxMYWJlbERpcmVjdGl2ZSxcbiAgVGRFeHBhbnNpb25QYW5lbFN1YmxhYmVsRGlyZWN0aXZlLFxuICBUZEV4cGFuc2lvblBhbmVsU3VtbWFyeUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9FWFBBTlNJT05fUEFORUwsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9FWFBBTlNJT05fUEFORUwsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50RXhwYW5zaW9uUGFuZWxNb2R1bGUge1xuXG59XG4iXX0=