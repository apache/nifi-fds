import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
declare type Constructor<T> = new (...args: any[]) => T;
export interface IControlValueAccessor extends ControlValueAccessor {
    value: any;
    valueChanges: Observable<any>;
    onChange: (_: any) => any;
    onTouched: () => any;
}
export interface IHasChangeDetectorRef {
    _changeDetectorRef: ChangeDetectorRef;
}
/** Mixin to augment a component with ngModel support. */
export declare function mixinControlValueAccessor<T extends Constructor<IHasChangeDetectorRef>>(base: T, initialValue?: any): Constructor<IControlValueAccessor> & T;
export {};
