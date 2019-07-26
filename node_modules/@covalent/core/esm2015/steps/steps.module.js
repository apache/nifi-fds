/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { CovalentCommonModule } from '@covalent/core/common';
// Steps
import { TdStepsComponent } from './steps.component';
import { TdStepHeaderComponent } from './step-header/step-header.component';
import { TdStepBodyComponent } from './step-body/step-body.component';
import { TdStepComponent, TdStepLabelDirective, TdStepActionsDirective, TdStepSummaryDirective } from './step.component';
// Nav Steps
import { TdNavStepsHorizontalComponent } from './nav/nav-steps-horizontal/nav-steps-horizontal.component';
import { TdNavStepsVerticalComponent } from './nav/nav-steps-vertical/nav-steps-vertical.component';
import { TdNavStepLinkComponent } from './nav/nav-step-link/nav-step-link.component';
/** @type {?} */
const TD_STEPS = [
    TdStepsComponent,
    TdStepComponent,
    TdStepHeaderComponent,
    TdStepBodyComponent,
    TdStepLabelDirective,
    TdStepActionsDirective,
    TdStepSummaryDirective,
    TdNavStepsHorizontalComponent,
    TdNavStepsVerticalComponent,
    TdNavStepLinkComponent,
];
export class CovalentStepsModule {
}
CovalentStepsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatRippleModule,
                    PortalModule,
                    ScrollDispatchModule,
                    CovalentCommonModule,
                ],
                declarations: [
                    TD_STEPS,
                ],
                exports: [
                    TD_STEPS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFHN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFDN0Qsc0JBQXNCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHMUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O01BRS9FLFFBQVEsR0FBZ0I7SUFDNUIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0NBRXZCO0FBa0JELE1BQU0sT0FBTyxtQkFBbUI7OztZQWhCL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osUUFBUTtpQkFDVDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsUUFBUTtpQkFDVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgU2Nyb2xsRGlzcGF0Y2hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcblxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IENvdmFsZW50Q29tbW9uTW9kdWxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuLy8gU3RlcHNcbmltcG9ydCB7IFRkU3RlcHNDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFN0ZXBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAtaGVhZGVyL3N0ZXAtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFN0ZXBCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zdGVwLWJvZHkvc3RlcC1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFN0ZXBDb21wb25lbnQsIFRkU3RlcExhYmVsRGlyZWN0aXZlLCBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlLFxuICAgICAgICAgVGRTdGVwU3VtbWFyeURpcmVjdGl2ZSB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuXG4vLyBOYXYgU3RlcHNcbmltcG9ydCB7IFRkTmF2U3RlcHNIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LXN0ZXBzLWhvcml6b250YWwvbmF2LXN0ZXBzLWhvcml6b250YWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcHNWZXJ0aWNhbENvbXBvbmVudCB9IGZyb20gJy4vbmF2L25hdi1zdGVwcy12ZXJ0aWNhbC9uYXYtc3RlcHMtdmVydGljYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTmF2U3RlcExpbmtDb21wb25lbnQgfSBmcm9tICcuL25hdi9uYXYtc3RlcC1saW5rL25hdi1zdGVwLWxpbmsuY29tcG9uZW50JztcblxuY29uc3QgVERfU1RFUFM6IFR5cGU8YW55PltdID0gW1xuICBUZFN0ZXBzQ29tcG9uZW50LFxuICBUZFN0ZXBDb21wb25lbnQsXG4gIFRkU3RlcEhlYWRlckNvbXBvbmVudCxcbiAgVGRTdGVwQm9keUNvbXBvbmVudCxcbiAgVGRTdGVwTGFiZWxEaXJlY3RpdmUsXG4gIFRkU3RlcEFjdGlvbnNEaXJlY3RpdmUsXG4gIFRkU3RlcFN1bW1hcnlEaXJlY3RpdmUsXG4gIFRkTmF2U3RlcHNIb3Jpem9udGFsQ29tcG9uZW50LFxuICBUZE5hdlN0ZXBzVmVydGljYWxDb21wb25lbnQsXG4gIFRkTmF2U3RlcExpbmtDb21wb25lbnQsXG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgUG9ydGFsTW9kdWxlLFxuICAgIFNjcm9sbERpc3BhdGNoTW9kdWxlLFxuICAgIENvdmFsZW50Q29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9TVEVQUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX1NURVBTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFN0ZXBzTW9kdWxlIHtcblxufVxuIl19