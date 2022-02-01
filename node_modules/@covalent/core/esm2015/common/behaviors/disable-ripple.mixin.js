/**
 * @fileoverview added by tsickle
 * Generated from: behaviors/disable-ripple.mixin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Interface to implement when applying the disabled mixin
 * @record
 */
export function ICanDisableRipple() { }
if (false) {
    /** @type {?} */
    ICanDisableRipple.prototype.disableRipple;
    /**
     * @param {?} v
     * @return {?}
     */
    ICanDisableRipple.prototype.onDisableRippleChange = function (v) { };
}
/**
 * Mixin to augment a component or directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
export function mixinDisableRipple(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /**
         * @return {?}
         */
        get disableRipple() {
            return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        set disableRipple(value) {
            /** @type {?} */
            const newValue = coerceBooleanProperty(value);
            if (this._disableRipple !== newValue) {
                this._disableRipple = newValue;
                this.onDisableRippleChange(this._disableRipple);
            }
        }
        /**
         * @param {?} v
         * @return {?}
         */
        onDisableRippleChange(v) {
            /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1yaXBwbGUubWl4aW4uanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvY29tbW9uLyIsInNvdXJjZXMiOlsiYmVoYXZpb3JzL2Rpc2FibGUtcmlwcGxlLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBSzlELHVDQUdDOzs7SUFGQywwQ0FBdUI7Ozs7O0lBQ3ZCLHFFQUF3Qzs7Ozs7Ozs7QUFJMUMsTUFBTSxVQUFVLGtCQUFrQixDQUE0QixJQUFPO0lBQ25FLE9BQU8sS0FBTSxTQUFRLElBQUk7Ozs7UUFHdkIsWUFBWSxHQUFHLElBQVc7WUFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFIVCxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUl4QyxDQUFDOzs7O1FBRUQsSUFBSSxhQUFhO1lBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBQ0QsSUFBSSxhQUFhLENBQUMsS0FBYzs7a0JBQ3hCLFFBQVEsR0FBWSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDOzs7OztRQUVELHFCQUFxQixDQUFDLENBQVU7WUFDOUIsMEVBQTBFO1FBQzVFLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbnR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKiogSW50ZXJmYWNlIHRvIGltcGxlbWVudCB3aGVuIGFwcGx5aW5nIHRoZSBkaXNhYmxlZCBtaXhpbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ2FuRGlzYWJsZVJpcHBsZSB7XG4gIGRpc2FibGVSaXBwbGU6IGJvb2xlYW47XG4gIG9uRGlzYWJsZVJpcHBsZUNoYW5nZSh2OiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqIE1peGluIHRvIGF1Z21lbnQgYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlIHdpdGggYSBgZGlzYWJsZWRgIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluRGlzYWJsZVJpcHBsZTxUIGV4dGVuZHMgQ29uc3RydWN0b3I8e30+PihiYXNlOiBUKTogQ29uc3RydWN0b3I8SUNhbkRpc2FibGVSaXBwbGU+ICYgVCB7XG4gIHJldHVybiBjbGFzcyBleHRlbmRzIGJhc2Uge1xuICAgIHByaXZhdGUgX2Rpc2FibGVSaXBwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZVJpcHBsZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlUmlwcGxlO1xuICAgIH1cbiAgICBzZXQgZGlzYWJsZVJpcHBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgY29uc3QgbmV3VmFsdWU6IGJvb2xlYW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVSaXBwbGUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVSaXBwbGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVSaXBwbGVDaGFuZ2UodGhpcy5fZGlzYWJsZVJpcHBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25EaXNhYmxlUmlwcGxlQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIC8qKiBOT1QgSU1QTEVNRU5URUQsIHRoaXMgbmVlZHMgdG8gYmUgb3ZlcnJpZGVuIGJ5IHN1YmNsYXNzZXMgaWYgbmVlZGVkICovXG4gICAgfVxuICB9O1xufVxuIl19