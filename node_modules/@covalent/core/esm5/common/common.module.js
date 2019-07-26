/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/**
 * Directives
 */
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
import { TdFullscreenDirective } from './directives/fullscreen/fullscreen.directive';
/** @type {?} */
var TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
// Validators
/** @type {?} */
var TD_VALIDATORS = [];
/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdTimeUntilPipe } from './pipes/time-until/time-until.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDecimalBytesPipe } from './pipes/decimal-bytes/decimal-bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';
/** @type {?} */
var TD_PIPES = [
    TdTimeAgoPipe,
    TdTimeDifferencePipe,
    TdTimeUntilPipe,
    TdBytesPipe,
    TdDecimalBytesPipe,
    TdDigitsPipe,
    TdTruncatePipe,
];
/**
 * Services
 */
import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';
var CovalentCommonModule = /** @class */ (function () {
    function CovalentCommonModule() {
    }
    CovalentCommonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [FormsModule, CommonModule],
                    declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                    exports: [FormsModule, CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                    providers: [RouterPathService, IconService],
                },] }
    ];
    return CovalentCommonModule;
}());
export { CovalentCommonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUs3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7SUFFL0UsYUFBYSxHQUFnQixDQUFDLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDOzs7SUFHekUsYUFBYSxHQUFnQixFQUFFOzs7O0FBS3JDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0lBRTFELFFBQVEsR0FBZ0I7SUFDNUIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztDQUNmOzs7O0FBTUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXREO0lBQUE7SUFNbUMsQ0FBQzs7Z0JBTm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO29CQUNwQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztvQkFDdEQsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztvQkFDNUUsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDO2lCQUM1Qzs7SUFDa0MsMkJBQUM7Q0FBQSxBQU5wQyxJQU1vQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogRGlyZWN0aXZlc1xuICovXG5pbXBvcnQgeyBUZEF1dG9UcmltRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3Jtcy9hdXRvLXRyaW0vYXV0by10cmltLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZEZ1bGxzY3JlZW5EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZnVsbHNjcmVlbi9mdWxsc2NyZWVuLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFREX0RJUkVDVElWRVM6IFR5cGU8YW55PltdID0gW1RkQXV0b1RyaW1EaXJlY3RpdmUsIFRkRnVsbHNjcmVlbkRpcmVjdGl2ZV07XG5cbi8vIFZhbGlkYXRvcnNcbmNvbnN0IFREX1ZBTElEQVRPUlM6IFR5cGU8YW55PltdID0gW107XG5cbi8qKlxuICogUElQRVNcbiAqL1xuaW1wb3J0IHsgVGRUaW1lQWdvUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1hZ28vdGltZS1hZ28ucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVEaWZmZXJlbmNlUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS1kaWZmZXJlbmNlL3RpbWUtZGlmZmVyZW5jZS5waXBlJztcbmltcG9ydCB7IFRkVGltZVVudGlsUGlwZSB9IGZyb20gJy4vcGlwZXMvdGltZS11bnRpbC90aW1lLXVudGlsLnBpcGUnO1xuaW1wb3J0IHsgVGRCeXRlc1BpcGUgfSBmcm9tICcuL3BpcGVzL2J5dGVzL2J5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREZWNpbWFsQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9kZWNpbWFsLWJ5dGVzL2RlY2ltYWwtYnl0ZXMucGlwZSc7XG5pbXBvcnQgeyBUZERpZ2l0c1BpcGUgfSBmcm9tICcuL3BpcGVzL2RpZ2l0cy9kaWdpdHMucGlwZSc7XG5pbXBvcnQgeyBUZFRydW5jYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJ1bmNhdGUvdHJ1bmNhdGUucGlwZSc7XG5cbmNvbnN0IFREX1BJUEVTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRUaW1lQWdvUGlwZSxcbiAgVGRUaW1lRGlmZmVyZW5jZVBpcGUsXG4gIFRkVGltZVVudGlsUGlwZSxcbiAgVGRCeXRlc1BpcGUsXG4gIFRkRGVjaW1hbEJ5dGVzUGlwZSxcbiAgVGREaWdpdHNQaXBlLFxuICBUZFRydW5jYXRlUGlwZSxcbl07XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xuXG5pbXBvcnQgeyBSb3V0ZXJQYXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm91dGVyLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaWNvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtURF9ESVJFQ1RJVkVTLCBURF9QSVBFUywgVERfVkFMSURBVE9SU10sXG4gIGV4cG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBURF9ESVJFQ1RJVkVTLCBURF9QSVBFUywgVERfVkFMSURBVE9SU10sXG4gIHByb3ZpZGVyczogW1JvdXRlclBhdGhTZXJ2aWNlLCBJY29uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50Q29tbW9uTW9kdWxlIHt9XG4iXX0=