import { TdDataTableSortingOrder } from '../data-table.component';
export declare class TdDataTableService {
    /**
     * params:
     * - data: any[]
     * - searchTerm: string
     * - ignoreCase: boolean = false
     * - excludedColumns: string[] = []
     *
     * Searches [data] parameter for [searchTerm] matches and returns a new array with them.
     */
    filterData(data: any[], searchTerm: string, ignoreCase?: boolean, excludedColumns?: string[]): any[];
    /**
     * params:
     * - data: any[]
     * - sortBy: string
     * - sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending
     *
     * Sorts [data] parameter by [sortBy] and [sortOrder] and returns the sorted data.
     */
    sortData(data: any[], sortBy: string, sortOrder?: TdDataTableSortingOrder): any[];
    /**
     * params:
     * - data: any[]
     * - fromRow: number
     * - toRow: : number
     *
     * Returns a section of the [data] parameter starting from [fromRow] and ending in [toRow].
     */
    pageData(data: any[], fromRow: number, toRow: number): any[];
}
