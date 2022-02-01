/**
 * @fileoverview added by tsickle
 * Generated from: directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (!this._name && name) {
            this._name = name;
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
        if (type === LoadingType.Linear) {
            this._type = LoadingType.Linear;
        }
        else {
            this._type = LoadingType.Circular;
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
        if (mode === LoadingMode.Determinate) {
            this._mode = LoadingMode.Determinate;
        }
        else {
            this._mode = LoadingMode.Indeterminate;
        }
    }
    /**
     * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
     * Sets the strategy of loading mask depending on value.
     * Defaults to [LoadingMode.Replace | 'replace'].
     * @param {?} strategy
     * @return {?}
     */
    set strategy(strategy) {
        if (strategy === LoadingStrategy.Overlay) {
            this._strategy = LoadingStrategy.Overlay;
        }
        else {
            this._strategy = LoadingStrategy.Replace;
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
     * @private
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
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._context;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._type;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._strategy;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._name;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._loadingRef;
    /**
     * tdLoadingColor?: "primary" | "accent" | "warn"
     * Sets the theme color of the loading component. Defaults to "primary"
     * @type {?}
     */
    TdLoadingDirective.prototype.color;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingDirective.prototype._loadingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQXNCLE1BQU0sc0JBQXNCLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFNL0QsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNTLGNBQVMsR0FBUSxTQUFTLENBQUM7UUFDM0IsY0FBUyxHQUFRLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0NBQUE7OztJQUZDLHFDQUFrQzs7SUFDbEMscUNBQWtDOzs7O0lBSWhDLGtCQUFrQixHQUFXLENBQUM7QUFLbEMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBc0Y3QixZQUNVLGlCQUFtQyxFQUNuQyxZQUEyQyxFQUMzQyxlQUFpQztRQUZqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUErQjtRQUMzQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUF4Rm5DLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDOzs7OztRQW1GbkMsVUFBSyxHQUFrQyxTQUFTLENBQUM7SUFNdkUsQ0FBQzs7Ozs7OztJQTlFSixJQUNJLElBQUksQ0FBQyxJQUFZO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNu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ckIsS0FBSyxTQUFDLG1CQUFtQjtvQkFhekIsS0FBSyxTQUFDLGdCQUFnQjs7Ozs7OztJQW5GdkIsc0NBQTREOzs7OztJQUM1RCxtQ0FBMkI7Ozs7O0lBQzNCLG1DQUEyQjs7Ozs7SUFDM0IsdUNBQW1DOzs7OztJQUNuQyxtQ0FBc0I7Ozs7O0lBQ3RCLHlDQUFpQzs7Ozs7O0lBOEVqQyxtQ0FBMEU7Ozs7O0lBR3hFLCtDQUEyQzs7Ozs7SUFDM0MsMENBQW1EOzs7OztJQUNuRCw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9hZGluZ1R5cGUsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIFRkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRkTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUxvYWRpbmdSZWYgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnknO1xuXG4vKipcbiAqIENvbnRleHQgY2xhc3MgZm9yIHZhcmlhYmxlIHJlZmVyZW5jZVxuICovXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nQ29udGV4dCB7XG4gIHB1YmxpYyAkaW1wbGljaXQ6IGFueSA9IHVuZGVmaW5lZDtcbiAgcHVibGljIHRkTG9hZGluZzogYW55ID0gdW5kZWZpbmVkO1xufVxuXG4vLyBDb25zdGFudCBmb3IgZ2VuZXJhdGlvbiBvZiB0aGUgaWQgZm9yIHRoZSBuZXh0IGNvbXBvbmVudFxubGV0IFREX0xPQURJTkdfTkVYVF9JRDogbnVtYmVyID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTG9hZGluZ10nLFxufSlcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQgPSBuZXcgVGRMb2FkaW5nQ29udGV4dCgpO1xuICBwcml2YXRlIF90eXBlOiBMb2FkaW5nVHlwZTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGU7XG4gIHByaXZhdGUgX3N0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9hZGluZ1JlZjogSUxvYWRpbmdSZWY7XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZzogc3RyaW5nXG4gICAqIE5hbWUgcmVmZXJlbmNlIG9mIHRoZSBsb2FkaW5nIG1hc2ssIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nJylcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lICYmIG5hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdVbnRpbD86IGFueVxuICAgKiBJZiBpdHMgbnVsbCwgdW5kZWZpbmVkIG9yIGZhbHNlIGl0IHdpbGwgYmUgdXNlZCB0byByZWdpc3RlciByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICogRWxzZSBpZiBpdHMgYW55IHZhbHVlIHRoYXQgY2FuIGJlIHJlc29sdmVkIGFzIHRydWUsIGl0IHdpbGwgcmVzb2x2ZSB0aGUgbWFzay5cbiAgICogW25hbWVdIGlzIG9wdGlvbmFsIHdoZW4gdXNpbmcgW3VudGlsXSwgYnV0IGNhbiBzdGlsbCBiZSB1c2VkIHRvIHJlZ2lzdGVyL3Jlc29sdmUgaXQgbWFudWFsbHkuXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1VudGlsJylcbiAgc2V0IHVudGlsKHVudGlsOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSAndGQtbG9hZGluZy11bnRpbC0nICsgVERfTE9BRElOR19ORVhUX0lEKys7XG4gICAgfVxuICAgIHRoaXMuX2NvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5fY29udGV4dC50ZExvYWRpbmcgPSB1bnRpbDtcbiAgICBpZiAoIXVudGlsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZWdpc3Rlcih0aGlzLl9uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVzb2x2ZUFsbCh0aGlzLl9uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVHlwZT86IExvYWRpbmdUeXBlIG9yIFsnbGluZWFyJyB8ICdjaXJjdWxhciddXG4gICAqIFNldHMgdGhlIHR5cGUgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdUeXBlLkNpcmN1bGFyIHwgJ2NpcmN1bGFyJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1R5cGUnKVxuICBzZXQgdHlwZSh0eXBlOiBMb2FkaW5nVHlwZSkge1xuICAgIGlmICh0eXBlID09PSBMb2FkaW5nVHlwZS5MaW5lYXIpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5MaW5lYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nTW9kZT86IExvYWRpbmdNb2RlIG9yIFsnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnXVxuICAgKiBTZXRzIHRoZSBtb2RlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlIHwgJ2luZGV0ZXJtaW5hdGUnXS5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nTW9kZScpXG4gIHNldCBtb2RlKG1vZGU6IExvYWRpbmdNb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IExvYWRpbmdNb2RlLkRldGVybWluYXRlKSB7XG4gICAgICB0aGlzLl9tb2RlID0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdTdHJhdGVneT86IExvYWRpbmdTdHJhdGVneSBvciBbJ3JlcGxhY2UnIHwgJ292ZXJsYXknXVxuICAgKiBTZXRzIHRoZSBzdHJhdGVneSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuUmVwbGFjZSB8ICdyZXBsYWNlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ1N0cmF0ZWd5JylcbiAgc2V0IHN0cmF0ZWd5KHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3kpIHtcbiAgICBpZiAoc3RyYXRlZ3kgPT09IExvYWRpbmdTdHJhdGVneS5PdmVybGF5KSB7XG4gICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5PdmVybGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdHJhdGVneSA9IExvYWRpbmdTdHJhdGVneS5SZXBsYWNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0ZExvYWRpbmdDb2xvcj86IFwicHJpbWFyeVwiIHwgXCJhY2NlbnRcIiB8IFwid2FyblwiXG4gICAqIFNldHMgdGhlIHRoZW1lIGNvbG9yIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudC4gRGVmYXVsdHMgdG8gXCJwcmltYXJ5XCJcbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nQ29sb3InKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VGRMb2FkaW5nQ29udGV4dD4sXG4gICAgcHJpdmF0ZSBfbG9hZGluZ1NlcnZpY2U6IFRkTG9hZGluZ1NlcnZpY2UsXG4gICkge31cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNvbXBvbmVudCBpbiB0aGUgRE9NLCBzbyBpdCB3aWxsIGJlIGF2YWlsYWJsZSB3aGVuIGNhbGxpbmcgcmVzb2x2ZS9yZWdpc3Rlci5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyQ29tcG9uZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbXBvbmVudCB3aGVuIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nU2VydmljZS5yZW1vdmVDb21wb25lbnQodGhpcy5fbmFtZSk7XG4gICAgdGhpcy5fbG9hZGluZ1JlZiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIFtUZExvYWRpbmdDb21wb25lbnRdIGFuZCBhdHRhY2hlcyBpdCB0byB0aGlzIGRpcmVjdGl2ZSdzIFtWaWV3Q29udGFpbmVyUmVmXS5cbiAgICogUGFzc2VzIHRoaXMgZGlyZWN0aXZlJ3MgW1RlbXBsYXRlUmVmXSB0byBtb2RpZnkgRE9NIGRlcGVuZGluZyBvbiBsb2FkaW5nIGBzdHJhdGVneWAuXG4gICAqL1xuICBwcml2YXRlIF9yZWdpc3RlckNvbXBvbmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX25hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFtZSBpcyBuZWVkZWQgdG8gcmVnaXN0ZXIgbG9hZGluZyBkaXJlY3RpdmUnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYFRkTG9hZGluZ0NvbXBvbmVudGAgaGFzIGJlZW4gY3JlYXRlZCBiZWZvcmUgdHJ5aW5nIHRvIGFkZCBvbmUgYWdhaW4uXG4gICAgLy8gVGhlcmUgaXMgYSB3ZWlyZCBlZGdlIGNhc2Ugd2hlbiB1c2luZyBgW3JvdXRlckxpbmtBY3RpdmVdYCB0aGF0IGNhbGxzIHRoZSBgbmdPbkluaXRgIHR3aWNlIGluIGEgcm93XG4gICAgaWYgKCF0aGlzLl9sb2FkaW5nUmVmKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nUmVmID0gdGhpcy5fbG9hZGluZ1NlcnZpY2UuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgICB0eXBlOiB0aGlzLl90eXBlLFxuICAgICAgICAgIG1vZGU6IHRoaXMuX21vZGUsXG4gICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuX3N0cmF0ZWd5LFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVJlZixcbiAgICAgICAgdGhpcy5fY29udGV4dCxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=