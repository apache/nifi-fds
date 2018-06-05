import { PipeTransform } from '@angular/core';
export declare class TdDigitsPipe implements PipeTransform {
    private _locale;
    private _decimalPipe;
    constructor(_locale?: string);
    transform(digits: any, precision?: number): string;
}
