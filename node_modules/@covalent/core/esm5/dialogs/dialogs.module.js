/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TdDialogComponent, TdDialogTitleDirective, TdDialogActionsDirective, TdDialogContentDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService } from './services/dialog.service';
/** @type {?} */
var TD_DIALOGS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogActionsDirective,
    TdDialogContentDirective,
];
/** @type {?} */
var TD_DIALOGS_ENTRY_COMPONENTS = [
    TdAlertDialogComponent,
    TdConfirmDialogComponent,
    TdPromptDialogComponent,
];
var CovalentDialogsModule = /** @class */ (function () {
    function CovalentDialogsModule() {
    }
    CovalentDialogsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule,
                        MatDialogModule,
                        MatInputModule,
                        MatButtonModule,
                    ],
                    declarations: [
                        TD_DIALOGS,
                    ],
                    exports: [
                        TD_DIALOGS,
                    ],
                    providers: [
                        TdDialogService,
                    ],
                    entryComponents: [
                        TD_DIALOGS_ENTRY_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentDialogsModule;
}());
export { CovalentDialogsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvZGlhbG9ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUN6Qyx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFdEQsVUFBVSxHQUFnQjtJQUM5QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix3QkFBd0I7Q0FDekI7O0lBRUssMkJBQTJCLEdBQWdCO0lBQy9DLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0NBQ3hCO0FBRUQ7SUFBQTtJQXVCQSxDQUFDOztnQkF2QkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRTt3QkFDWixVQUFVO3FCQUNYO29CQUNELE9BQU8sRUFBRTt3QkFDUCxVQUFVO3FCQUNYO29CQUNELFNBQVMsRUFBRTt3QkFDVCxlQUFlO3FCQUNoQjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsMkJBQTJCO3FCQUM1QjtpQkFDRjs7SUFHRCw0QkFBQztDQUFBLEFBdkJELElBdUJDO1NBRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuaW1wb3J0IHsgVGREaWFsb2dDb21wb25lbnQsIFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZEFsZXJ0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFByb21wdERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcblxuY29uc3QgVERfRElBTE9HUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG4gIFRkRGlhbG9nQ29tcG9uZW50LFxuICBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlLFxuICBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUsXG4gIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSxcbl07XG5cbmNvbnN0IFREX0RJQUxPR1NfRU5UUllfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQWxlcnREaWFsb2dDb21wb25lbnQsXG4gIFRkQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgVGRQcm9tcHREaWFsb2dDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFREX0RJQUxPR1MsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBURF9ESUFMT0dTLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUZERpYWxvZ1NlcnZpY2UsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFREX0RJQUxPR1NfRU5UUllfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREaWFsb2dzTW9kdWxlIHtcblxufVxuIl19