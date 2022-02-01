/**
 * @fileoverview added by tsickle
 * Generated from: services/data-table.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TdDataTableSortingOrder } from '../data-table.component';
export class TdDataTableService {
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     * @param {?} data
     * @param {?} searchTerm
     * @param {?=} ignoreCase
     * @param {?=} excludedColumns
     * @return {?}
     */
    filterData(data, searchTerm, ignoreCase = false, excludedColumns) {
        /** @type {?} */
        const filter = searchTerm ? (ignoreCase ? searchTerm.toLowerCase() : searchTerm) : '';
        if (filter) {
            data = data.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                /** @type {?} */
                const res = Object.keys(item).find((/**
                 * @param {?} key
                 * @return {?}
                 */
                (key) => {
                    if (!excludedColumns || excludedColumns.indexOf(key) === -1) {
                        /** @type {?} */
                        const preItemValue = '' + item[key];
                        /** @type {?} */
                        const itemValue = ignoreCase ? preItemValue.toLowerCase() : preItemValue;
                        return itemValue.indexOf(filter) > -1;
                    }
                }));
                return typeof res !== 'undefined';
            }));
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     * @param {?} data
     * @param {?} sortBy
     * @param {?=} sortOrder
     * @return {?}
     */
    sortData(data, sortBy, sortOrder = TdDataTableSortingOrder.Ascending) {
        if (sortBy) {
            data = Array.from(data); // Change the array reference to trigger OnPush and not mutate original array
            data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                /** @type {?} */
                const compA = a[sortBy];
                /** @type {?} */
                const compB = b[sortBy];
                /** @type {?} */
                let direction = 0;
                if (!Number.isNaN(Number.parseFloat(compA)) && !Number.isNaN(Number.parseFloat(compB))) {
                    direction = Number.parseFloat(compA) - Number.parseFloat(compB);
                }
                else {
                    if (compA < compB) {
                        direction = -1;
                    }
                    else if (compA > compB) {
                        direction = 1;
                    }
                }
                return direction * (sortOrder === TdDataTableSortingOrder.Descending ? -1 : 1);
            }));
        }
        return data;
    }
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     * @param {?} data
     * @param {?} fromRow
     * @param {?} toRow
     * @return {?}
     */
    pageData(data, fromRow, toRow) {
        if (fromRow >= 1) {
            data = data.slice(fromRow - 1, toRow);
        }
        return data;
    }
}
TdDataTableService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2RhdGEtdGFibGUvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9kYXRhLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR2xFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7OztJQVU3QixVQUFVLENBQUMsSUFBVyxFQUFFLFVBQWtCLEVBQUUsYUFBc0IsS0FBSyxFQUFFLGVBQTBCOztjQUMzRixNQUFNLEdBQVcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3RixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7O3NCQUN6QixHQUFHLEdBQVEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7OEJBQ3JELFlBQVksR0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7OEJBQ3JDLFNBQVMsR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWTt3QkFDaEYsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEVBQUM7Z0JBQ0YsT0FBTyxPQUFPLEdBQUcsS0FBSyxXQUFXLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVVELFFBQVEsQ0FBQyxJQUFXLEVBQUUsTUFBYyxFQUFFLFlBQXFDLHVCQUF1QixDQUFDLFNBQVM7UUFDMUcsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtZQUN0RyxJQUFJLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQU0sRUFBRSxDQUFNLEVBQUUsRUFBRTs7c0JBQ3JCLEtBQUssR0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDOztzQkFDdEIsS0FBSyxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7O29CQUN4QixTQUFTLEdBQVcsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQ3RGLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFNO29CQUNMLElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTt3QkFDakIsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNoQjt5QkFBTSxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7d0JBQ3hCLFNBQVMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxTQUFTLEdBQUcsQ0FBQyxTQUFTLEtBQUssdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVVELFFBQVEsQ0FBQyxJQUFXLEVBQUUsT0FBZSxFQUFFLEtBQWE7UUFDbEQsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXZFRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciB9IGZyb20gJy4uL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkRGF0YVRhYmxlU2VydmljZSB7XG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBzZWFyY2hUZXJtOiBzdHJpbmdcbiAgICogLSBpZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2VcbiAgICogLSBleGNsdWRlZENvbHVtbnM6IHN0cmluZ1tdID0gW11cbiAgICpcbiAgICogU2VhcmNoZXMgW2RhdGFdIHBhcmFtZXRlciBmb3IgW3NlYXJjaFRlcm1dIG1hdGNoZXMgYW5kIHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGVtLlxuICAgKi9cbiAgZmlsdGVyRGF0YShkYXRhOiBhbnlbXSwgc2VhcmNoVGVybTogc3RyaW5nLCBpZ25vcmVDYXNlOiBib29sZWFuID0gZmFsc2UsIGV4Y2x1ZGVkQ29sdW1ucz86IHN0cmluZ1tdKTogYW55W10ge1xuICAgIGNvbnN0IGZpbHRlcjogc3RyaW5nID0gc2VhcmNoVGVybSA/IChpZ25vcmVDYXNlID8gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpIDogc2VhcmNoVGVybSkgOiAnJztcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IE9iamVjdC5rZXlzKGl0ZW0pLmZpbmQoKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKCFleGNsdWRlZENvbHVtbnMgfHwgZXhjbHVkZWRDb2x1bW5zLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZUl0ZW1WYWx1ZTogc3RyaW5nID0gJycgKyBpdGVtW2tleV07XG4gICAgICAgICAgICBjb25zdCBpdGVtVmFsdWU6IHN0cmluZyA9IGlnbm9yZUNhc2UgPyBwcmVJdGVtVmFsdWUudG9Mb3dlckNhc2UoKSA6IHByZUl0ZW1WYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVmFsdWUuaW5kZXhPZihmaWx0ZXIpID4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXMgIT09ICd1bmRlZmluZWQnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBkYXRhOiBhbnlbXVxuICAgKiAtIHNvcnRCeTogc3RyaW5nXG4gICAqIC0gc29ydE9yZGVyOiBUZERhdGFUYWJsZVNvcnRpbmdPcmRlciA9IFRkRGF0YVRhYmxlU29ydGluZ09yZGVyLkFzY2VuZGluZ1xuICAgKlxuICAgKiBTb3J0cyBbZGF0YV0gcGFyYW1ldGVyIGJ5IFtzb3J0QnldIGFuZCBbc29ydE9yZGVyXSBhbmQgcmV0dXJucyB0aGUgc29ydGVkIGRhdGEuXG4gICAqL1xuICBzb3J0RGF0YShkYXRhOiBhbnlbXSwgc29ydEJ5OiBzdHJpbmcsIHNvcnRPcmRlcjogVGREYXRhVGFibGVTb3J0aW5nT3JkZXIgPSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5Bc2NlbmRpbmcpOiBhbnlbXSB7XG4gICAgaWYgKHNvcnRCeSkge1xuICAgICAgZGF0YSA9IEFycmF5LmZyb20oZGF0YSk7IC8vIENoYW5nZSB0aGUgYXJyYXkgcmVmZXJlbmNlIHRvIHRyaWdnZXIgT25QdXNoIGFuZCBub3QgbXV0YXRlIG9yaWdpbmFsIGFycmF5XG4gICAgICBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBBOiBhbnkgPSBhW3NvcnRCeV07XG4gICAgICAgIGNvbnN0IGNvbXBCOiBhbnkgPSBiW3NvcnRCeV07XG4gICAgICAgIGxldCBkaXJlY3Rpb246IG51bWJlciA9IDA7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGNvbXBBKSkgJiYgIU51bWJlci5pc05hTihOdW1iZXIucGFyc2VGbG9hdChjb21wQikpKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEEpIC0gTnVtYmVyLnBhcnNlRmxvYXQoY29tcEIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb21wQSA8IGNvbXBCKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBBID4gY29tcEIpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gKiAoc29ydE9yZGVyID09PSBUZERhdGFUYWJsZVNvcnRpbmdPcmRlci5EZXNjZW5kaW5nID8gLTEgOiAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gZGF0YTogYW55W11cbiAgICogLSBmcm9tUm93OiBudW1iZXJcbiAgICogLSB0b1JvdzogOiBudW1iZXJcbiAgICpcbiAgICogUmV0dXJucyBhIHNlY3Rpb24gb2YgdGhlIFtkYXRhXSBwYXJhbWV0ZXIgc3RhcnRpbmcgZnJvbSBbZnJvbVJvd10gYW5kIGVuZGluZyBpbiBbdG9Sb3ddLlxuICAgKi9cbiAgcGFnZURhdGEoZGF0YTogYW55W10sIGZyb21Sb3c6IG51bWJlciwgdG9Sb3c6IG51bWJlcik6IGFueVtdIHtcbiAgICBpZiAoZnJvbVJvdyA+PSAxKSB7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZShmcm9tUm93IC0gMSwgdG9Sb3cpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19