import { PipeTransform } from '@angular/core';
export declare class TdDecimalBytesPipe implements PipeTransform {
    transform(bytes: any, precision?: number): string;
}
