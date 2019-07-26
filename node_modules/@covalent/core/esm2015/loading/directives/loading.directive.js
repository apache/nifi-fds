/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';
import { TdLoadingService } from '../services/loading.service';
/**
 * Context class for variable reference
 */
export class TdLoadingContext {
    constructor() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
}
if (false) {
    /** @type {?} */
    TdLoadingContext.prototype.$implicit;
    /** @type {?} */
    TdLoadingContext.prototype.tdLoading;
}
// Constant for generation of the id for the next component
/** @type {?} */
let TD_LOADING_NEXT_ID = 0;
export class TdLoadingDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _templateRef
     * @param {?} _loadingService
     */
    constructor(_viewContainerRef, _templateRef, _loadingService) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._loadingService = _loadingService;
        this._context = new TdLoadingContext();
        /**
         * tdLoadingColor?: "primary" | "accent" | "warn"
         * Sets the theme color of the loading component. Defaults to "primary"
         */
        this.color = 'primary';
    }
    /**
     * tdLoading: string
     * Name reference of the loading mask, used to register/resolve requests to the mask.
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        if (!this._name) {
            if (name) {
                this._name = name;
            }
        }
    }
    /**
     * tdLoadingUntil?: any
     * If its null, undefined or false it will be used to register requests to the mask.
     * Else if its any value that can be resolved as true, it will resolve the mask.
     * [name] is optional when using [until], but can still be used to register/resolve it manually.
     * @param {?} until
     * @return {?}
     */
    set until(until) {
        if (!this._name) {
            this._name = 'td-loading-until-' + TD_LOADING_NEXT_ID++;
        }
        this._context.$implicit = this._context.tdLoading = until;
        if (!until) {
            this._loadingService.register(this._name);
        }
        else {
            this._loadingService.resolveAll(this._name);
        }
    }
    /**
     * tdLoadingType?: LoadingType or ['linear' | 'circular']
     * Sets the type of loading mask depending on value.
     * Defaults to [LoadingType.Circular | 'circular'].
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        switch (type) {
            case LoadingType.Linear:
                this._type = LoadingType.Linear;
                break;
            default:
                this._type = LoadingType.Circular;
                break;
        }
    }
    /**
     * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
     * Sets the mode of loading mask depending on value.
     * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        switch (mode) {
            case LoadingMode.Determinate:
                this._mode = LoadingMode.Determinate;
                break;
            default:
                this._mode = LoadingMode.Indeterminate;
                break;
        }
    }
    /**
     * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
     * Sets the strategy of loading mask depending on value.
     * Defaults to [LoadingMode.Replace | 'replace'].
     * @param {?} stategy
     * @return {?}
     */
    set strategy(stategy) {
        switch (stategy) {
            case LoadingStrategy.Overlay:
                this._strategy = LoadingStrategy.Overlay;
                break;
            default:
                this._strategy = LoadingStrategy.Replace;
                break;
        }
    }
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    ngOnInit() {
        this._registerComponent();
    }
    /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    ngOnDestroy() {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    }
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @return {?}
     */
    _registerComponent() {
        if (!this._name) {
            throw new Error('Name is needed to register loading directive');
        }
        // Check if `TdLoadingComponent` has been created before trying to add one again.
        // There is a weird edge case when using `[routerLinkActive]` that calls the `ngOnInit` twice in a row
        if (!this._loadingRef) {
            this._loadingRef = this._loadingService.createComponent({
                name: this._name,
                type: this._type,
                mode: this._mode,
                color: this.color,
                strategy: this._strategy,
            }, this._viewContainerRef, this._templateRef, this._context);
        }
    }
}
TdLoadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdLoading]',
            },] }
];
/** @nocollapse */
TdLoadingDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: TdLoadingService }
];
TdLoadingDirective.propDecorators = {
    name: [{ type: Input, args: ['tdLoading',] }],
    until: [{ type: Input, args: ['tdLoadingUntil',] }],
    type: [{ type: Input, args: ['tdLoadingType',] }],
    mode: [{ type: Input, args: ['tdLoadingMode',] }],
    strategy: [{ type: Input, args: ['tdLoadingStrategy',] }],
    color: [{ type: Input, args: ['tdLoadingColor',] }]
};
if (false) {
    /** @type {?} */
    TdLoadingDirective.prototype._context;
    /** @type {?} */
    TdLoadingDirective.prototype._type;
    /** @type {?} */
    TdLoadingDirective.prototype._mode;
    /** @type {?} */
    TdLoadingDirective.prototype._strategy;
    /** @type {?} */
    TdLoadingDirective.prototype._name;
    /** @type {?} */
    TdLoadingDirective.prototype._loadingRef;
    /**
     * tdLoadingColor?: "primary" | "accent" | "warn"
     * Sets the theme color of the loading component. Defaults to "primary"
     * @type {?}
     */
    TdLoadingDirective.prototype.color;
    /** @type {?} */
    TdLoadingDirective.prototype._viewContainerRef;
    /** @type {?} */
    TdLoadingDirective.prototype._templateRef;
    /** @type {?} */
    TdLoadingDirective.prototype._loadingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTS9ELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDUyxjQUFTLEdBQVEsU0FBUyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxTQUFTLENBQUM7SUFDcEMsQ0FBQztDQUFBOzs7SUFGQyxxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7OztJQUloQyxrQkFBa0IsR0FBVyxDQUFDO0FBS2xDLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQWtHN0IsWUFBb0IsaUJBQW1DLEVBQ25DLFlBQTJDLEVBQzNDLGVBQWlDO1FBRmpDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsaUJBQVksR0FBWixZQUFZLENBQStCO1FBQzNDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQWxHN0MsYUFBUSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7Ozs7O1FBOEZuQyxVQUFLLEdBQWtDLFNBQVMsQ0FBQztJQUlsQixDQUFDOzs7Ozs7O0lBdkZ6RCxJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7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QkFlakIsS0FBSyxTQUFDLGdCQUFnQjttQkFrQnRCLEtBQUssU0FBQyxlQUFlO21CQWlCckIsS0FBSyxTQUFDLGVBQWU7dUJBaUJyQixLQUFLLFNBQUMsbUJBQW1CO29CQWdCekIsS0FBSyxTQUFDLGdCQUFnQjs7OztJQTlGdkIsc0NBQTREOztJQUM1RCxtQ0FBMkI7O0lBQzNCLG1DQUEyQjs7SUFDM0IsdUNBQW1DOztJQUNuQyxtQ0FBc0I7O0lBQ3RCLHlDQUFpQzs7Ozs7O0lBeUZqQyxtQ0FBMEU7O0lBRTlELCtDQUEyQzs7SUFDM0MsMENBQW1EOztJQUNuRCw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9hZGluZ1R5cGUsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUxvYWRpbmdSZWYgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuXG4vKipcbiAqIENvbnRleHQgY2xhc3MgZm9yIHZhcmlhYmxlIHJlZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29udGV4dCB7XG4gIHB1YmxpYyAkaW1wbGljaXQ6IGFueSA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHRkTG9hZGluZzogYW55ID0gdW5kZWZpbmVkO1xufVxuXG4vLyBDb25zdGFudCBmb3IgZ2VuZXJhdGlvbiBvZiB0aGUgaWQgZm9yIHRoZSBuZXh0IGNvbXBvbmVudFxubGV0IFREX0xPQURJTkdfTkVYVF9JRDogbnVtYmVyID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTG9hZGluZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCA9IG5ldyBUZExvYWRpbmdDb250ZXh0KCk7XG4gIHByaXZhdGUgX3R5cGU6IExvYWRpbmdUeXBlO1xuICBwcml2YXRlIF9tb2RlOiBMb2FkaW5nTW9kZTtcbiAgcHJpdmF0ZSBfc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9sb2FkaW5nUmVmOiBJTG9hZGluZ1JlZjtcblxuICAvKipcbiAgICogdGRMb2FkaW5nOiBzdHJpbmdcbiAgICogTmFtZSByZWZlcmVuY2Ugb2YgdGhlIGxvYWRpbmcgbWFzaywgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIHJlcXVlc3RzIHRvIHRoZSBtYXNrLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmcnKVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdVbnRpbD86IGFueVxuICAgKiBJZiBpdHMgbnVsbCwgdW5kZWZpbmVkIG9yIGZhbHNlIGl0IHdpbGwgYmUgdXNlZCB0byByZWdpc3RlciByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICogRWxzZSBpZiBpdHMgYW55IHZhbHVlIHRoYXQgY2FuIGJlIHJlc29sdmVkIGFzIHRydWUsIGl0IHdpbGwgcmVzb2x2ZSB0aGUgbWFzay5cbiAgICogW25hbWVdIGlzIG9wdGlvbmFsIHdoZW4gdXNpbmcgW3VudGlsXSwgYnV0IGNhbiBzdGlsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgaXQgbWFudWFsbHkuXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1VudGlsJylcbiAgc2V0IHVudGlsKHVudGlsOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSAndGQtbG9hZGluZy11bnRpbC0nICsgVERfTE9BRElOR19ORVhUX0lEKys7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5fY29udGV4dC50ZExvYWRpbmcgPSB1bnRpbDtcbiAgICBpZiAoIXVudGlsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZWdpc3Rlcih0aGlzLl9uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVzb2x2ZUFsbCh0aGlzLl9uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVHlwZT86IExvYWRpbmdUeXBlIG9yIFsnbGluZWFyJyB8ICdjaXJjdWxhciddXG4gICAqIFNldHMgdGhlIHR5cGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdUeXBlLkNpcmN1bGFyIHwgJ2NpcmN1bGFyJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1R5cGUnKVxuICBzZXQgdHlwZSh0eXBlOiBMb2FkaW5nVHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2FkaW5nVHlwZS5MaW5lYXI6XG4gICAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fdHlwZSA9IExvYWRpbmdUeXBlLkNpcmN1bGFyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nTW9kZT86IExvYWRpbmdNb2RlIG9yIFsnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnXVxuICAgKiBTZXRzIHRoZSBtb2RlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlIHwgJ2luZGV0ZXJtaW5hdGUnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nTW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlIExvYWRpbmdNb2RlLkRldGVybWluYXRlOlxuICAgICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkluZGV0ZXJtaW5hdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdTdHJhdGVneT86IExvYWRpbmdTdHJhdGVneSBvciBbJ3JlcGxhY2UnIHwgJ292ZXJsYXknXVxuICAgKiBTZXRzIHRoZSBzdHJhdGVneSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuUmVwbGFjZSB8ICdyZXBsYWNlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1N0cmF0ZWd5JylcbiAgc2V0IHN0cmF0ZWd5KHN0YXRlZ3k6IExvYWRpbmdTdHJhdGVneSkge1xuICAgIHN3aXRjaCAoc3RhdGVneSkge1xuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTpcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5SZXBsYWNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nQ29sb3I/OiBcInByaW1hcnlcIiB8IFwiYWNjZW50XCIgfCBcIndhcm5cIlxuICAgKiBTZXRzIHRoZSB0aGVtZSBjb2xvciBvZiB0aGUgbG9hZGluZyBjb21wb25lbnQuIERlZmF1bHRzIHRvIFwicHJpbWFyeVwiXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ0NvbG9yJykgY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nID0gJ3ByaW1hcnknO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUZExvYWRpbmdDb250ZXh0PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9hZGluZ1NlcnZpY2U6IFRkTG9hZGluZ1NlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjb21wb25lbnQgaW4gdGhlIERPTSwgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgd2hlbiBjYWxsaW5nIHJlc29sdmUvcmVnaXN0ZXIuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlckNvbXBvbmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb21wb25lbnQgd2hlbiBkaXJlY3RpdmUgaXMgZGVzdHJveWVkLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVtb3ZlQ29tcG9uZW50KHRoaXMuX25hbWUpO1xuICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBbVGRMb2FkaW5nQ29tcG9uZW50XSBhbmQgYXR0YWNoZXMgaXQgdG8gdGhpcyBkaXJlY3RpdmUncyBbVmlld0NvbnRhaW5lclJlZl0uXG4gICAqIFBhc3NlcyB0aGlzIGRpcmVjdGl2ZSdzIFtUZW1wbGF0ZVJlZl0gdG8gbW9kaWZ5IERPTSBkZXBlbmRpbmcgb24gbG9hZGluZyBgc3RyYXRlZ3lgLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJDb21wb25lbnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWUgaXMgbmVlZGVkIHRvIHJlZ2lzdGVyIGxvYWRpbmcgZGlyZWN0aXZlJyk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGBUZExvYWRpbmdDb21wb25lbnRgIGhhcyBiZWVuIGNyZWF0ZWQgYmVmb3JlIHRyeWluZyB0byBhZGQgb25lIGFnYWluLlxuICAgIC8vIFRoZXJlIGlzIGEgd2VpcmQgZWRnZSBjYXNlIHdoZW4gdXNpbmcgYFtyb3V0ZXJMaW5rQWN0aXZlXWAgdGhhdCBjYWxscyB0aGUgYG5nT25Jbml0YCB0d2ljZSBpbiBhIHJvd1xuICAgIGlmICghdGhpcy5fbG9hZGluZ1JlZikge1xuICAgICAgdGhpcy5fbG9hZGluZ1JlZiA9IHRoaXMuX2xvYWRpbmdTZXJ2aWNlLmNyZWF0ZUNvbXBvbmVudCh7XG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgIHR5cGU6IHRoaXMuX3R5cGUsXG4gICAgICAgIG1vZGU6IHRoaXMuX21vZGUsXG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgICBzdHJhdGVneTogdGhpcy5fc3RyYXRlZ3ksXG4gICAgICB9LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmLCB0aGlzLl90ZW1wbGF0ZVJlZiwgdGhpcy5fY29udGV4dCk7XG4gICAgfVxuICB9XG59XG4iXX0=