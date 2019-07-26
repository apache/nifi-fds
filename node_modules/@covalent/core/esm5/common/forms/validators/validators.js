/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
var CovalentValidators = /** @class */ (function () {
    function CovalentValidators() {
    }
    /**
     * @param {?} minValue
     * @return {?}
     */
    CovalentValidators.min = /**
     * @param {?} minValue
     * @return {?}
     */
    function (minValue) {
        /** @type {?} */
        var func = function (c) {
            if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            var v = c.value;
            return v < minValue ?
                { min: { minValue: minValue, actualValue: v } } :
                undefined;
        };
        return func;
    };
    /**
     * @param {?} maxValue
     * @return {?}
     */
    CovalentValidators.max = /**
     * @param {?} maxValue
     * @return {?}
     */
    function (maxValue) {
        /** @type {?} */
        var func = function (c) {
            if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
                return undefined;
            }
            /** @type {?} */
            var v = c.value;
            return v > maxValue ?
                { max: { maxValue: maxValue, actualValue: v } } :
                undefined;
        };
        return func;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    CovalentValidators.numberRequired = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return (Number.isNaN(c.value)) ?
            { required: true } :
            undefined;
    };
    return CovalentValidators;
}());
export { CovalentValidators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL2Zvcm1zL3ZhbGlkYXRvcnMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRTtJQUFBO0lBaUNBLENBQUM7Ozs7O0lBaENRLHNCQUFHOzs7O0lBQVYsVUFBVyxRQUFhOztZQUNsQixJQUFJLEdBQWdCLFVBQUMsQ0FBa0I7WUFDekMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsT0FBTyxTQUFTLENBQUM7YUFDbEI7O2dCQUNHLENBQUMsR0FBVyxDQUFDLENBQUMsS0FBSztZQUN2QixPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxHQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sc0JBQUc7Ozs7SUFBVixVQUFXLFFBQWE7O1lBQ2xCLElBQUksR0FBZ0IsVUFBQyxDQUFrQjtZQUN6QyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM3RCxPQUFPLFNBQVMsQ0FBQzthQUNsQjs7Z0JBQ0csQ0FBQyxHQUFXLENBQUMsQ0FBQyxLQUFLO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsU0FBUyxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxpQ0FBYzs7OztJQUFyQixVQUFzQixDQUFrQjtRQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEIsU0FBUyxDQUFDO0lBQ2hCLENBQUM7SUFFSCx5QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgQ292YWxlbnRWYWxpZGF0b3JzIHtcbiAgc3RhdGljIG1pbihtaW5WYWx1ZTogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGxldCBmdW5jOiBWYWxpZGF0b3JGbiA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBpZiAoISFWYWxpZGF0b3JzLnJlcXVpcmVkKGMpIHx8ICghbWluVmFsdWUgJiYgbWluVmFsdWUgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgdjogbnVtYmVyID0gYy52YWx1ZTtcbiAgICAgIHJldHVybiB2IDwgbWluVmFsdWUgP1xuICAgICAgICB7IG1pbjoge21pblZhbHVlOiBtaW5WYWx1ZSwgYWN0dWFsVmFsdWU6IHZ9IH0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuXG4gIHN0YXRpYyBtYXgobWF4VmFsdWU6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBsZXQgZnVuYzogVmFsaWRhdG9yRm4gPSAoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAgICAgaWYgKCEhVmFsaWRhdG9ycy5yZXF1aXJlZChjKSB8fCAoIW1heFZhbHVlICYmIG1heFZhbHVlICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgbGV0IHY6IG51bWJlciA9IGMudmFsdWU7XG4gICAgICByZXR1cm4gdiA+IG1heFZhbHVlID9cbiAgICAgICAgeyBtYXg6IHttYXhWYWx1ZTogbWF4VmFsdWUsIGFjdHVhbFZhbHVlOiB2fSB9IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICBzdGF0aWMgbnVtYmVyUmVxdWlyZWQoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiAoTnVtYmVyLmlzTmFOKGMudmFsdWUpKSA/XG4gICAgICAgIHsgcmVxdWlyZWQ6IHRydWUgfSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG59XG4iXX0=