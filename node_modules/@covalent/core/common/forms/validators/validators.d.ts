import { AbstractControl, ValidatorFn } from '@angular/forms';
export declare class CovalentValidators {
    static min(minValue: any): ValidatorFn;
    static max(maxValue: any): ValidatorFn;
    static numberRequired(c: AbstractControl): {
        [key: string]: any;
    };
}
