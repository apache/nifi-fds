/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Interface to implement when applying the disabled mixin
 * @record
 */
export function ICanDisable() { }
if (false) {
    /** @type {?} */
    ICanDisable.prototype.disabled;
    /**
     * @param {?} v
     * @return {?}
     */
    ICanDisable.prototype.onDisabledChange = function (v) { };
}
/**
 * Mixin to augment a component or directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinDisabled(base) {
    return /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, tslib_1.__spread(args)) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var newValue = coerceBooleanProperty(value);
                if (this._disabled !== newValue) {
                    this._disabled = newValue;
                    this.onDisabledChange(this._disabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} v
         * @return {?}
         */
        class_1.prototype.onDisabledChange = /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        };
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZWQubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImNvbW1vbi9iZWhhdmlvcnMvZGlzYWJsZWQubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFLOUQsaUNBR0M7OztJQUZDLCtCQUFrQjs7Ozs7SUFDbEIsMERBQW1DOzs7Ozs7OztBQUlyQyxNQUFNLFVBQVUsYUFBYSxDQUE0QixJQUFPO0lBQzlEO1FBQXFCLG1DQUFJO1FBR3ZCO1lBQVksY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUExQixnREFDVyxJQUFJLFdBQ2Q7WUFKTyxlQUFTLEdBQVksS0FBSyxDQUFDOztRQUluQyxDQUFDO1FBRUQsc0JBQUksNkJBQVE7Ozs7WUFBWjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEIsQ0FBQzs7Ozs7WUFDRCxVQUFhLEtBQWM7O29CQUNyQixRQUFRLEdBQVkscUJBQXFCLENBQUMsS0FBSyxDQUFDO2dCQUNwRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO29CQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDdkM7WUFDSCxDQUFDOzs7V0FQQTs7Ozs7UUFTRCxrQ0FBZ0I7Ozs7UUFBaEIsVUFBaUIsQ0FBVTtZQUN6QiwwRUFBMEU7UUFDNUUsQ0FBQztRQUNILGNBQUM7SUFBRCxDQUFDLEFBckJNLENBQWMsSUFBSSxHQXFCdkI7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxudHlwZSBDb25zdHJ1Y3RvcjxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFQ7XG5cbi8qKiBJbnRlcmZhY2UgdG8gaW1wbGVtZW50IHdoZW4gYXBwbHlpbmcgdGhlIGRpc2FibGVkIG1peGluICovXG5leHBvcnQgaW50ZXJmYWNlIElDYW5EaXNhYmxlIHtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIG9uRGlzYWJsZWRDaGFuZ2UodjogYm9vbGVhbik6IHZvaWQ7XG59XG5cbi8qKiBNaXhpbiB0byBhdWdtZW50IGEgY29tcG9uZW50IG9yIGRpcmVjdGl2ZSB3aXRoIGEgYGRpc2FibGVkYCBwcm9wZXJ0eS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkRpc2FibGVkPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjx7fT4+KGJhc2U6IFQpOiBDb25zdHJ1Y3RvcjxJQ2FuRGlzYWJsZT4gJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICAgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgbGV0IG5ld1ZhbHVlOiBib29sZWFuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkQ2hhbmdlKHRoaXMuX2Rpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIC8qKiBOT1QgSU1QTEVNRU5URUQsIHRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzZXMgaWYgbmVlZGVkICovXG4gICAgfVxuICB9O1xufVxuIl19