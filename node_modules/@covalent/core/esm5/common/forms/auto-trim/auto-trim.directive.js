/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { HostListener, Host, Optional } from '@angular/core';
import { NgModel } from '@angular/forms';
var TdAutoTrimDirective = /** @class */ (function () {
    function TdAutoTrimDirective(_model) {
        this._model = _model;
    }
    /**
     * Listens to host's (blur) event and trims value.
     */
    /**
     * Listens to host's (blur) event and trims value.
     * @param {?} event
     * @return {?}
     */
    TdAutoTrimDirective.prototype.onBlur = /**
     * Listens to host's (blur) event and trims value.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._model && this._model.value && typeof (this._model.value) === 'string') {
            this._model.update.emit(this._model.value.trim());
        }
    };
    TdAutoTrimDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdAutoTrim]',
                },] }
    ];
    /** @nocollapse */
    TdAutoTrimDirective.ctorParameters = function () { return [
        { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    TdAutoTrimDirective.propDecorators = {
        onBlur: [{ type: HostListener, args: ['blur', ['$event'],] }]
    };
    return TdAutoTrimDirective;
}());
export { TdAutoTrimDirective };
if (false) {
    /** @type {?} */
    TdAutoTrimDirective.prototype._model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by10cmltLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2Zvcm1zL2F1dG8tdHJpbS9hdXRvLXRyaW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekM7SUFLRSw2QkFBd0MsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBRyxDQUFDO0lBRTNEOztPQUVHOzs7Ozs7SUFFSCxvQ0FBTTs7Ozs7SUFETixVQUNPLEtBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBSlEsT0FBTyx1QkFPRCxRQUFRLFlBQUksSUFBSTs7O3lCQUs1QixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU1sQywwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBYlksbUJBQW1COzs7SUFFbEIscUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3N0TGlzdGVuZXIsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRBdXRvVHJpbV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEF1dG9UcmltRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgX21vZGVsOiBOZ01vZGVsKSB7fVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGhvc3QncyAoYmx1cikgZXZlbnQgYW5kIHRyaW1zIHZhbHVlLlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIG9uQmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbW9kZWwgJiYgdGhpcy5fbW9kZWwudmFsdWUgJiYgdHlwZW9mKHRoaXMuX21vZGVsLnZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX21vZGVsLnVwZGF0ZS5lbWl0KHRoaXMuX21vZGVsLnZhbHVlLnRyaW0oKSk7XG4gICAgfVxuICB9XG59XG4iXX0=