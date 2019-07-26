/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LOADING_PROVIDER } from './services/loading.service';
import { LOADING_FACTORY_PROVIDER } from './services/loading.factory';
import { TdLoadingDirective } from './directives/loading.directive';
import { TdLoadingComponent } from './loading.component';
/** @type {?} */
var TD_LOADING = [
    TdLoadingComponent,
    TdLoadingDirective,
];
/** @type {?} */
var TD_LOADING_ENTRY_COMPONENTS = [
    TdLoadingComponent,
];
var CovalentLoadingModule = /** @class */ (function () {
    function CovalentLoadingModule() {
    }
    CovalentLoadingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        OverlayModule,
                        PortalModule,
                    ],
                    declarations: [
                        TD_LOADING,
                    ],
                    exports: [
                        TD_LOADING,
                    ],
                    providers: [
                        LOADING_FACTORY_PROVIDER,
                        LOADING_PROVIDER,
                    ],
                    entryComponents: [
                        TD_LOADING_ENTRY_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentLoadingModule;
}());
export { CovalentLoadingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsibG9hZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlFLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBRW5ELFVBQVUsR0FBZ0I7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNuQjs7SUFFSywyQkFBMkIsR0FBZ0I7SUFDL0Msa0JBQWtCO0NBQ25CO0FBRUQ7SUFBQTtJQXdCQSxDQUFDOztnQkF4QkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3dCQUN4QixhQUFhO3dCQUNiLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFVBQVU7cUJBQ1g7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULHdCQUF3Qjt3QkFDeEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsMkJBQTJCO3FCQUM1QjtpQkFDRjs7SUFHRCw0QkFBQztDQUFBLEFBeEJELElBd0JDO1NBRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE1hdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlLCBMT0FESU5HX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuaW1wb3J0IHsgVGRMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuXG5jb25zdCBURF9MT0FESU5HOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRMb2FkaW5nQ29tcG9uZW50LFxuICBUZExvYWRpbmdEaXJlY3RpdmUsXG5dO1xuXG5jb25zdCBURF9MT0FESU5HX0VOVFJZX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZExvYWRpbmdDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVERfTE9BRElORyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFREX0xPQURJTkcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUixcbiAgICBMT0FESU5HX1BST1ZJREVSLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBURF9MT0FESU5HX0VOVFJZX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TG9hZGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==