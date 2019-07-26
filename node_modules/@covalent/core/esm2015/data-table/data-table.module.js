/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { TdDataTableComponent } from './data-table.component';
import { TdDataTableColumnComponent } from './data-table-column/data-table-column.component';
import { TdDataTableCellComponent } from './data-table-cell/data-table-cell.component';
import { TdDataTableRowComponent, TdDataTableColumnRowComponent } from './data-table-row/data-table-row.component';
import { TdDataTableTableComponent } from './data-table-table/data-table-table.component';
import { TdDataTableTemplateDirective } from './directives/data-table-template.directive';
import { DATA_TABLE_PROVIDER } from './services/data-table.service';
/** @type {?} */
const TD_DATA_TABLE = [
    TdDataTableComponent,
    TdDataTableTemplateDirective,
    TdDataTableColumnComponent,
    TdDataTableCellComponent,
    TdDataTableRowComponent,
    TdDataTableColumnRowComponent,
    TdDataTableTableComponent,
];
export class CovalentDataTableModule {
}
CovalentDataTableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCheckboxModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatPseudoCheckboxModule,
                ],
                declarations: [
                    TD_DATA_TABLE,
                ],
                exports: [
                    TD_DATA_TABLE,
                ],
                providers: [
                    DATA_TABLE_PROVIDER,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9kYXRhLXRhYmxlLyIsInNvdXJjZXMiOlsiZGF0YS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN2RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUxRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7TUFFOUQsYUFBYSxHQUFnQjtJQUNqQyxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBRTVCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3Qix5QkFBeUI7Q0FDMUI7QUFvQkQsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBbEJuQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsdUJBQXVCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsbUJBQW1CO2lCQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFRkRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZUNvbHVtbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jb2x1bW4vZGF0YS10YWJsZS1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YVRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS1jZWxsL2RhdGEtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVSb3dDb21wb25lbnQsIFRkRGF0YVRhYmxlQ29sdW1uUm93Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlLXJvdy9kYXRhLXRhYmxlLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS10YWJsZS10YWJsZS9kYXRhLXRhYmxlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGEtdGFibGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgREFUQV9UQUJMRV9QUk9WSURFUiB9IGZyb20gJy4vc2VydmljZXMvZGF0YS10YWJsZS5zZXJ2aWNlJztcblxuY29uc3QgVERfREFUQV9UQUJMRTogVHlwZTxhbnk+W10gPSBbXG4gIFRkRGF0YVRhYmxlQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZVRlbXBsYXRlRGlyZWN0aXZlLFxuXG4gIFRkRGF0YVRhYmxlQ29sdW1uQ29tcG9uZW50LFxuICBUZERhdGFUYWJsZUNlbGxDb21wb25lbnQsXG4gIFRkRGF0YVRhYmxlUm93Q29tcG9uZW50LFxuICBUZERhdGFUYWJsZUNvbHVtblJvd0NvbXBvbmVudCxcbiAgVGREYXRhVGFibGVUYWJsZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBURF9EQVRBX1RBQkxFLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVERfREFUQV9UQUJMRSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgREFUQV9UQUJMRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnREYXRhVGFibGVNb2R1bGUge1xuXG59XG4iXX0=