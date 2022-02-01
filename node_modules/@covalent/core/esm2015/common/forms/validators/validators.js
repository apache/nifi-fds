/**
 * @fileoverview added by tsickle
 * Generated from: forms/validators/validators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
export class CovalentValidators {
    /**
     * @param {?} minValue
     * @return {?}
     */
    static min(minValue) {
        // tslint:disable-next-line:prefer-immediate-return
        /** @type {?} */
        const func = (/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            const v = c.value;
            return v < minValue ? { min: { minValue, actualValue: v } } : undefined;
        });
        return func;
    }
    /**
     * @param {?} maxValue
     * @return {?}
     */
    static max(maxValue) {
        // tslint:disable-next-line:prefer-immediate-return
        /** @type {?} */
        const func = (/**
         * @param {?} c
         * @return {?}
         */
        (c) => {
            if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            const v = c.value;
            return v > maxValue ? { max: { maxValue, actualValue: v } } : undefined;
        });
        return func;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    static numberRequired(c) {
        return Number.isNaN(c.value) ? { required: true } : undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJmb3Jtcy92YWxpZGF0b3JzL3ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFnQyxNQUFNLGdCQUFnQixDQUFDO0FBRTFFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBYTs7O2NBRWhCLElBQUk7Ozs7UUFBZ0IsQ0FBQyxDQUFrQixFQUEwQixFQUFFO1lBQ3ZFLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELE9BQU8sU0FBUyxDQUFDO2FBQ2xCOztrQkFDSyxDQUFDLEdBQVcsQ0FBQyxDQUFDLEtBQUs7WUFDekIsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzFFLENBQUMsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQWE7OztjQUVoQixJQUFJOzs7O1FBQWdCLENBQUMsQ0FBa0IsRUFBMEIsRUFBRTtZQUN2RSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM3RCxPQUFPLFNBQVMsQ0FBQzthQUNsQjs7a0JBQ0ssQ0FBQyxHQUFXLENBQUMsQ0FBQyxLQUFLO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMxRSxDQUFDLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFrQjtRQUN0QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFZhbGlkYXRvcnMge1xuICBzdGF0aWMgbWluKG1pblZhbHVlOiBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1pbW1lZGlhdGUtcmV0dXJuXG4gICAgY29uc3QgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWluVmFsdWUgJiYgbWluVmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB2OiBudW1iZXIgPSBjLnZhbHVlO1xuICAgICAgcmV0dXJuIHYgPCBtaW5WYWx1ZSA/IHsgbWluOiB7IG1pblZhbHVlLCBhY3R1YWxWYWx1ZTogdiB9IH0gOiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBtYXgobWF4VmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWltbWVkaWF0ZS1yZXR1cm5cbiAgICBjb25zdCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgIGlmICghIVZhbGlkYXRvcnMucmVxdWlyZWQoYykgfHwgKCFtYXhWYWx1ZSAmJiBtYXhWYWx1ZSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA+IG1heFZhbHVlID8geyBtYXg6IHsgbWF4VmFsdWUsIGFjdHVhbFZhbHVlOiB2IH0gfSA6IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgc3RhdGljIG51bWJlclJlcXVpcmVkKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiBOdW1iZXIuaXNOYU4oYy52YWx1ZSkgPyB7IHJlcXVpcmVkOiB0cnVlIH0gOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==