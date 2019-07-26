/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/** @type {?} */
const noop = () => {
    // empty method
};
const ɵ0 = noop;
/**
 * @record
 */
export function IControlValueAccessor() { }
if (false) {
    /** @type {?} */
    IControlValueAccessor.prototype.value;
    /** @type {?} */
    IControlValueAccessor.prototype.valueChanges;
    /** @type {?} */
    IControlValueAccessor.prototype.onChange;
    /** @type {?} */
    IControlValueAccessor.prototype.onTouched;
}
/**
 * @record
 */
export function IHasChangeDetectorRef() { }
if (false) {
    /** @type {?} */
    IHasChangeDetectorRef.prototype._changeDetectorRef;
}
/**
 * Mixin to augment a component with ngModel support.
 * @template T
 * @param {?} base
 * @param {?=} initialValue
 * @return {?}
 */
export function mixinControlValueAccessor(base, initialValue) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
            this.onChange = (_) => noop;
            this.onTouched = () => noop;
            this._subjectValueChanges = new Subject();
            this.valueChanges = this._subjectValueChanges.asObservable();
        }
        /**
         * @param {?} v
         * @return {?}
         */
        set value(v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
                this._changeDetectorRef.markForCheck();
                this._subjectValueChanges.next(v);
            }
        }
        /**
         * @return {?}
         */
        get value() {
            return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        writeValue(value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnChange(fn) {
            this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        registerOnTouched(fn) {
            this.onTouched = fn;
        }
    };
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYmVoYXZpb3JzL2NvbnRyb2wtdmFsdWUtYWNjZXNvci5taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7TUFJckMsSUFBSSxHQUFRLEdBQUcsRUFBRTtJQUNyQixlQUFlO0FBQ2pCLENBQUM7Ozs7O0FBRUQsMkNBS0M7OztJQUpDLHNDQUFXOztJQUNYLDZDQUE4Qjs7SUFDOUIseUNBQTBCOztJQUMxQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJDQUVDOzs7SUFEQyxtREFBc0M7Ozs7Ozs7OztBQUl4QyxNQUFNLFVBQVUseUJBQXlCLENBQ3hCLElBQU8sRUFBRSxZQUFrQjtJQUMxQyxPQUFPLEtBQU0sU0FBUSxJQUFJOzs7O1FBS3ZCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBTFQsV0FBTSxHQUFRLFlBQVksWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFtQ3JHLGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzVCLGNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUE5QnJCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9ELENBQUM7Ozs7O1FBRUQsSUFBSSxLQUFLLENBQUMsQ0FBTTtZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDOzs7O1FBQ0QsSUFBSSxLQUFLO1lBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7Ozs7O1FBRUQsVUFBVSxDQUFDLEtBQVU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBRUQsZ0JBQWdCLENBQUMsRUFBTztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7OztRQUVELGlCQUFpQixDQUFDLEVBQU87WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQztLQUtGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG5jb25zdCBub29wOiBhbnkgPSAoKSA9PiB7XG4gIC8vIGVtcHR5IG1ldGhvZFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udHJvbFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHZhbHVlOiBhbnk7XG4gIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkNoYW5nZTogKF86IGFueSkgPT4gYW55O1xuICBvblRvdWNoZWQ6ICgpID0+IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSGFzQ2hhbmdlRGV0ZWN0b3JSZWYge1xuICBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmO1xufVxuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGNvbXBvbmVudCB3aXRoIG5nTW9kZWwgc3VwcG9ydC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yPFQgZXh0ZW5kcyBDb25zdHJ1Y3RvcjxJSGFzQ2hhbmdlRGV0ZWN0b3JSZWY+PlxuICAgICAgICAgICAgICAgIChiYXNlOiBULCBpbml0aWFsVmFsdWU/OiBhbnkpOiBDb25zdHJ1Y3RvcjxJQ29udHJvbFZhbHVlQWNjZXNzb3I+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBpbml0aWFsVmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IE9iamVjdC5hc3NpZ24oW10sIGluaXRpYWxWYWx1ZSkgOiBpbml0aWFsVmFsdWU7XG4gICAgcHJpdmF0ZSBfc3ViamVjdFZhbHVlQ2hhbmdlczogU3ViamVjdDxhbnk+O1xuICAgIHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpOyBcbiAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlcyA9IHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xuICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2KTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHRoaXMuX3N1YmplY3RWYWx1ZUNoYW5nZXMubmV4dCh2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKF86IGFueSkgPT4gbm9vcDtcbiAgICBvblRvdWNoZWQgPSAoKSA9PiBub29wO1xuXG4gIH07XG59XG4iXX0=