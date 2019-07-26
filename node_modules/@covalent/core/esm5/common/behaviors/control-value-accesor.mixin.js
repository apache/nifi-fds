/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
/** @type {?} */
var noop = function () {
    // empty method
};
var ɵ0 = noop;
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
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this._value = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
            _this.onChange = function (_) { return noop; };
            _this.onTouched = function () { return noop; };
            _this._subjectValueChanges = new Subject();
            _this.valueChanges = _this._subjectValueChanges.asObservable();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "value", {
            get: /**
             * @return {?}
             */
            function () {
                return this._value;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                if (v !== this._value) {
                    this._value = v;
                    this.onChange(v);
                    this._changeDetectorRef.markForCheck();
                    this._subjectValueChanges.next(v);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        class_1.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        class_1.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        class_1.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        return class_1;
    }(base));
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC12YWx1ZS1hY2Nlc29yLm1peGluLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJjb21tb24vYmVoYXZpb3JzL2NvbnRyb2wtdmFsdWUtYWNjZXNvci5taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBSXJDLElBQUksR0FBUTtJQUNoQixlQUFlO0FBQ2pCLENBQUM7Ozs7O0FBRUQsMkNBS0M7OztJQUpDLHNDQUFXOztJQUNYLDZDQUE4Qjs7SUFDOUIseUNBQTBCOztJQUMxQiwwQ0FBcUI7Ozs7O0FBR3ZCLDJDQUVDOzs7SUFEQyxtREFBc0M7Ozs7Ozs7OztBQUl4QyxNQUFNLFVBQVUseUJBQXlCLENBQ3hCLElBQU8sRUFBRSxZQUFrQjtJQUMxQztRQUFxQixtQ0FBSTtRQUt2QjtZQUFZLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFBMUIsZ0RBQ1csSUFBSSxXQUdkO1lBUk8sWUFBTSxHQUFRLFlBQVksWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFtQ3JHLGNBQVEsR0FBRyxVQUFDLENBQU0sSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7WUFDNUIsZUFBUyxHQUFHLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1lBOUJyQixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztZQUMvQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFDL0QsQ0FBQztRQUVELHNCQUFJLDBCQUFLOzs7O1lBUVQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3JCLENBQUM7Ozs7O1lBVkQsVUFBVSxDQUFNO2dCQUNkLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO1lBQ0gsQ0FBQzs7O1dBQUE7Ozs7O1FBS0QsNEJBQVU7Ozs7UUFBVixVQUFXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBRUQsa0NBQWdCOzs7O1FBQWhCLFVBQWlCLEVBQU87WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFFRCxtQ0FBaUI7Ozs7UUFBakIsVUFBa0IsRUFBTztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBS0gsY0FBQztJQUFELENBQUMsQUF2Q00sQ0FBYyxJQUFJLEdBdUN2QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbmNvbnN0IG5vb3A6IGFueSA9ICgpID0+IHtcbiAgLy8gZW1wdHkgbWV0aG9kXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sVmFsdWVBY2Nlc3NvciBleHRlbmRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgdmFsdWU6IGFueTtcbiAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG4gIG9uQ2hhbmdlOiAoXzogYW55KSA9PiBhbnk7XG4gIG9uVG91Y2hlZDogKCkgPT4gYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElIYXNDaGFuZ2VEZXRlY3RvclJlZiB7XG4gIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IHdpdGggbmdNb2RlbCBzdXBwb3J0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3I8VCBleHRlbmRzIENvbnN0cnVjdG9yPElIYXNDaGFuZ2VEZXRlY3RvclJlZj4+XG4gICAgICAgICAgICAgICAgKGJhc2U6IFQsIGluaXRpYWxWYWx1ZT86IGFueSk6IENvbnN0cnVjdG9yPElDb250cm9sVmFsdWVBY2Nlc3Nvcj4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IGluaXRpYWxWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gT2JqZWN0LmFzc2lnbihbXSwgaW5pdGlhbFZhbHVlKSA6IGluaXRpYWxWYWx1ZTtcbiAgICBwcml2YXRlIF9zdWJqZWN0VmFsdWVDaGFuZ2VzOiBTdWJqZWN0PGFueT47XG4gICAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7IFxuICAgICAgdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VzID0gdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcy5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHYpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgdGhpcy5fc3ViamVjdFZhbHVlQ2hhbmdlcy5uZXh0KHYpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiBub29wO1xuICAgIG9uVG91Y2hlZCA9ICgpID0+IG5vb3A7XG5cbiAgfTtcbn1cbiJdfQ==