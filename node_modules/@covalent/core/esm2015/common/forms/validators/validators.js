/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
export class CovalentValidators {
    /**
     * @param {?} minValue
     * @return {?}
     */
    static min(minValue) {
        /** @type {?} */
        let func = (c) => {
            if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            let v = c.value;
            return v < minValue ?
                { min: { minValue: minValue, actualValue: v } } :
                undefined;
        };
        return func;
    }
    /**
     * @param {?} maxValue
     * @return {?}
     */
    static max(maxValue) {
        /** @type {?} */
        let func = (c) => {
            if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            let v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
        return func;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    static numberRequired(c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2Zvcm1zL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQWE7O1lBQ2xCLElBQUksR0FBZ0IsQ0FBQyxDQUFrQixFQUF3QixFQUFFO1lBQ25FLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzdELE9BQU8sU0FBUyxDQUFDO2FBQ2xCOztnQkFDRyxDQUFDLEdBQVcsQ0FBQyxDQUFDLEtBQUs7WUFDdkIsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0JBQ25CLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxTQUFTLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBYTs7WUFDbEIsSUFBSSxHQUFnQixDQUFDLENBQWtCLEVBQXdCLEVBQUU7WUFDbkUsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsT0FBTyxTQUFTLENBQUM7YUFDbEI7O2dCQUNHLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSztZQUN2QixPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFrQjtRQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEIsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFZhbGlkYXRvcnMge1xuICBzdGF0aWMgbWluKG1pblZhbHVlOiBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgbGV0IGZ1bmM6IFZhbGlkYXRvckZuID0gKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICAgIGlmICghIVZhbGlkYXRvcnMucmVxdWlyZWQoYykgfHwgKCFtaW5WYWx1ZSAmJiBtaW5WYWx1ZSAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGxldCB2OiBudW1iZXIgPSBjLnZhbHVlO1xuICAgICAgcmV0dXJuIHYgPCBtaW5WYWx1ZSA/XG4gICAgICAgIHsgbWluOiB7bWluVmFsdWU6IG1pblZhbHVlLCBhY3R1YWxWYWx1ZTogdn0gfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgc3RhdGljIG1heChtYXhWYWx1ZTogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGxldCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWF4VmFsdWUgJiYgbWF4VmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgdjogbnVtYmVyID0gYy52YWx1ZTtcbiAgICAgIHJldHVybiB2ID4gbWF4VmFsdWUgP1xuICAgICAgICB7IG1heDoge21heFZhbHVlOiBtYXhWYWx1ZSwgYWN0dWFsVmFsdWU6IHZ9IH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBudW1iZXJSZXF1aXJlZChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIChOdW1iZXIuaXNOYU4oYy52YWx1ZSkpID9cbiAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICB9XG5cbn1cbiJdfQ==