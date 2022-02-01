/**
 * @fileoverview added by tsickle
 * Generated from: forms/auto-trim/auto-trim.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { HostListener, Host, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';
export class TdAutoTrimDirective {
    /**
     * @param {?} _model
     */
    constructor(_model) {
        this._model = _model;
    }
    /**
     * Listens to host's (blur) event and trims value.
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        if (this._model && this._model.value && typeof this._model.value === 'string') {
            this._model.update.emit(this._model.value.trim());
        }
    }
}
TdAutoTrimDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdAutoTrim]',
            },] }
];
/** @nocollapse */
TdAutoTrimDirective.ctorParameters = () => [
    { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
];
TdAutoTrimDirective.propDecorators = {
    onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdAutoTrimDirective.prototype._model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by10cmltLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJmb3Jtcy9hdXRvLXRyaW0vYXV0by10cmltLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt6QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBQzlCLFlBQXdDLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBQUcsQ0FBQzs7Ozs7O0lBTTNELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQUpRLE9BQU8sdUJBTUQsUUFBUSxZQUFJLElBQUk7OztxQkFLNUIsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQUxwQixxQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZEF1dG9UcmltXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQXV0b1RyaW1EaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgX21vZGVsOiBOZ01vZGVsKSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QncyAoYmx1cikgZXZlbnQgYW5kIHRyaW1zIHZhbHVlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIG9uQmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwudmFsdWUgJiYgdHlwZW9mIHRoaXMuX21vZGVsLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fbW9kZWwudXBkYXRlLmVtaXQodGhpcy5fbW9kZWwudmFsdWUudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==