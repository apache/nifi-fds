/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { TdSidesheetComponent, TdSidesheetHeaderComponent, TdSidesheetContentDirective, TdSidesheetTitleDirective, TdSidesheetActionsDirective } from './sidesheet.component';
/** @type {?} */
var TD_SIDESHEET = [
    TdSidesheetComponent,
    TdSidesheetHeaderComponent,
    TdSidesheetContentDirective,
    TdSidesheetTitleDirective,
    TdSidesheetActionsDirective,
];
var CovalentSidesheetModule = /** @class */ (function () {
    function CovalentSidesheetModule() {
    }
    CovalentSidesheetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatDividerModule,
                    ],
                    declarations: [
                        TD_SIDESHEET,
                    ],
                    exports: [
                        TD_SIDESHEET,
                    ],
                },] }
    ];
    return CovalentSidesheetModule;
}());
export { CovalentSidesheetModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZXNoZWV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL3NpZGVzaGVldC8iLCJzb3VyY2VzIjpbInNpZGVzaGVldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFFOUQsWUFBWSxHQUFnQjtJQUNoQyxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsMkJBQTJCO0NBQzVCO0FBRUQ7SUFBQTtJQWNBLENBQUM7O2dCQWRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQUdELDhCQUFDO0NBQUEsQUFkRCxJQWNDO1NBRlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdERpdmlkZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcblxuaW1wb3J0IHsgVGRTaWRlc2hlZXRDb21wb25lbnQsIFxuICAgICAgICAgVGRTaWRlc2hlZXRIZWFkZXJDb21wb25lbnQsIFxuICAgICAgICAgVGRTaWRlc2hlZXRDb250ZW50RGlyZWN0aXZlLCBcbiAgICAgICAgIFRkU2lkZXNoZWV0VGl0bGVEaXJlY3RpdmUsIFxuICAgICAgICAgVGRTaWRlc2hlZXRBY3Rpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9zaWRlc2hlZXQuY29tcG9uZW50JztcblxuY29uc3QgVERfU0lERVNIRUVUOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRTaWRlc2hlZXRDb21wb25lbnQsXG4gIFRkU2lkZXNoZWV0SGVhZGVyQ29tcG9uZW50LFxuICBUZFNpZGVzaGVldENvbnRlbnREaXJlY3RpdmUsXG4gIFRkU2lkZXNoZWV0VGl0bGVEaXJlY3RpdmUsXG4gIFRkU2lkZXNoZWV0QWN0aW9uc0RpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfU0lERVNIRUVULFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfU0lERVNIRUVULFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFNpZGVzaGVldE1vZHVsZSB7XG5cbn1cbiJdfQ==