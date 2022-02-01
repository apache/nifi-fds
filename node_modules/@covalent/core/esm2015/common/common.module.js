/**
 * @fileoverview added by tsickle
 * Generated from: common.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const TD_DIRECTIVES = [TdAutoTrimDirective, TdFullscreenDirective];
// Validators
/** @type {?} */
const TD_VALIDATORS = [];
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
const TD_PIPES = [
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
export class CovalentCommonModule {
}
CovalentCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [FormsModule, CommonModule],
                declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                exports: [FormsModule, CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
                providers: [RouterPathService, IconService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJjb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztNQUUvRSxhQUFhLEdBQWdCLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7OztNQUd6RSxhQUFhLEdBQWdCLEVBQUU7Ozs7QUFLckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7TUFFMUQsUUFBUSxHQUFnQjtJQUM1QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0NBQ2Y7Ozs7QUFNRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRdEQsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTmhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDO2dCQUNwQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztnQkFDdEQsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztnQkFDNUUsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIERpcmVjdGl2ZXNcbiAqL1xuaW1wb3J0IHsgVGRBdXRvVHJpbURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybXMvYXV0by10cmltL2F1dG8tdHJpbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRGdWxsc2NyZWVuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Z1bGxzY3JlZW4vZnVsbHNjcmVlbi5kaXJlY3RpdmUnO1xuXG5jb25zdCBURF9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtUZEF1dG9UcmltRGlyZWN0aXZlLCBUZEZ1bGxzY3JlZW5EaXJlY3RpdmVdO1xuXG4vLyBWYWxpZGF0b3JzXG5jb25zdCBURF9WQUxJREFUT1JTOiBUeXBlPGFueT5bXSA9IFtdO1xuXG4vKipcbiAqIFBJUEVTXG4gKi9cbmltcG9ydCB7IFRkVGltZUFnb1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtYWdvL3RpbWUtYWdvLnBpcGUnO1xuaW1wb3J0IHsgVGRUaW1lRGlmZmVyZW5jZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtZGlmZmVyZW5jZS90aW1lLWRpZmZlcmVuY2UucGlwZSc7XG5pbXBvcnQgeyBUZFRpbWVVbnRpbFBpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWUtdW50aWwvdGltZS11bnRpbC5waXBlJztcbmltcG9ydCB7IFRkQnl0ZXNQaXBlIH0gZnJvbSAnLi9waXBlcy9ieXRlcy9ieXRlcy5waXBlJztcbmltcG9ydCB7IFRkRGVjaW1hbEJ5dGVzUGlwZSB9IGZyb20gJy4vcGlwZXMvZGVjaW1hbC1ieXRlcy9kZWNpbWFsLWJ5dGVzLnBpcGUnO1xuaW1wb3J0IHsgVGREaWdpdHNQaXBlIH0gZnJvbSAnLi9waXBlcy9kaWdpdHMvZGlnaXRzLnBpcGUnO1xuaW1wb3J0IHsgVGRUcnVuY2F0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RydW5jYXRlL3RydW5jYXRlLnBpcGUnO1xuXG5jb25zdCBURF9QSVBFUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkVGltZUFnb1BpcGUsXG4gIFRkVGltZURpZmZlcmVuY2VQaXBlLFxuICBUZFRpbWVVbnRpbFBpcGUsXG4gIFRkQnl0ZXNQaXBlLFxuICBUZERlY2ltYWxCeXRlc1BpcGUsXG4gIFRkRGlnaXRzUGlwZSxcbiAgVGRUcnVuY2F0ZVBpcGUsXG5dO1xuXG4vKipcbiAqIFNlcnZpY2VzXG4gKi9cblxuaW1wb3J0IHsgUm91dGVyUGF0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ljb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVERfRElSRUNUSVZFUywgVERfUElQRVMsIFREX1ZBTElEQVRPUlNdLFxuICBleHBvcnRzOiBbRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgVERfRElSRUNUSVZFUywgVERfUElQRVMsIFREX1ZBTElEQVRPUlNdLFxuICBwcm92aWRlcnM6IFtSb3V0ZXJQYXRoU2VydmljZSwgSWNvblNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudENvbW1vbk1vZHVsZSB7fVxuIl19