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
var /**
 * Context class for variable reference
 */
TdLoadingContext = /** @class */ (function () {
    function TdLoadingContext() {
        this.$implicit = undefined;
        this.tdLoading = undefined;
    }
    return TdLoadingContext;
}());
/**
 * Context class for variable reference
 */
export { TdLoadingContext };
if (false) {
    /** @type {?} */
    TdLoadingContext.prototype.$implicit;
    /** @type {?} */
    TdLoadingContext.prototype.tdLoading;
}
// Constant for generation of the id for the next component
/** @type {?} */
var TD_LOADING_NEXT_ID = 0;
var TdLoadingDirective = /** @class */ (function () {
    function TdLoadingDirective(_viewContainerRef, _templateRef, _loadingService) {
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
    Object.defineProperty(TdLoadingDirective.prototype, "name", {
        /**
         * tdLoading: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         */
        set: /**
         * tdLoading: string
         * Name reference of the loading mask, used to register/resolve requests to the mask.
         * @param {?} name
         * @return {?}
         */
        function (name) {
            if (!this._name) {
                if (name) {
                    this._name = name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "until", {
        /**
         * tdLoadingUntil?: any
         * If its null, undefined or false it will be used to register requests to the mask.
         * Else if its any value that can be resolved as true, it will resolve the mask.
         * [name] is optional when using [until], but can still be used to register/resolve it manually.
         */
        set: /**
         * tdLoadingUntil?: any
         * If its null, undefined or false it will be used to register requests to the mask.
         * Else if its any value that can be resolved as true, it will resolve the mask.
         * [name] is optional when using [until], but can still be used to register/resolve it manually.
         * @param {?} until
         * @return {?}
         */
        function (until) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "type", {
        /**
         * tdLoadingType?: LoadingType or ['linear' | 'circular']
         * Sets the type of loading mask depending on value.
         * Defaults to [LoadingType.Circular | 'circular'].
         */
        set: /**
         * tdLoadingType?: LoadingType or ['linear' | 'circular']
         * Sets the type of loading mask depending on value.
         * Defaults to [LoadingType.Circular | 'circular'].
         * @param {?} type
         * @return {?}
         */
        function (type) {
            switch (type) {
                case LoadingType.Linear:
                    this._type = LoadingType.Linear;
                    break;
                default:
                    this._type = LoadingType.Circular;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "mode", {
        /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         */
        set: /**
         * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
         * Sets the mode of loading mask depending on value.
         * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            switch (mode) {
                case LoadingMode.Determinate:
                    this._mode = LoadingMode.Determinate;
                    break;
                default:
                    this._mode = LoadingMode.Indeterminate;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdLoadingDirective.prototype, "strategy", {
        /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         */
        set: /**
         * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
         * Sets the strategy of loading mask depending on value.
         * Defaults to [LoadingMode.Replace | 'replace'].
         * @param {?} stategy
         * @return {?}
         */
        function (stategy) {
            switch (stategy) {
                case LoadingStrategy.Overlay:
                    this._strategy = LoadingStrategy.Overlay;
                    break;
                default:
                    this._strategy = LoadingStrategy.Replace;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     */
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnInit = /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     * @return {?}
     */
    function () {
        this._registerComponent();
    };
    /**
     * Remove component when directive is destroyed.
     */
    /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    TdLoadingDirective.prototype.ngOnDestroy = /**
     * Remove component when directive is destroyed.
     * @return {?}
     */
    function () {
        this._loadingService.removeComponent(this._name);
        this._loadingRef = undefined;
    };
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     */
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @return {?}
     */
    TdLoadingDirective.prototype._registerComponent = /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     * @return {?}
     */
    function () {
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
    };
    TdLoadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdLoading]',
                },] }
    ];
    /** @nocollapse */
    TdLoadingDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: TdLoadingService }
    ]; };
    TdLoadingDirective.propDecorators = {
        name: [{ type: Input, args: ['tdLoading',] }],
        until: [{ type: Input, args: ['tdLoadingUntil',] }],
        type: [{ type: Input, args: ['tdLoadingType',] }],
        mode: [{ type: Input, args: ['tdLoadingMode',] }],
        strategy: [{ type: Input, args: ['tdLoadingStrategy',] }],
        color: [{ type: Input, args: ['tdLoadingColor',] }]
    };
    return TdLoadingDirective;
}());
export { TdLoadingDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sb2FkaW5nLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFzQixNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTS9EOzs7O0lBQUE7UUFDUyxjQUFTLEdBQVEsU0FBUyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7Ozs7SUFGQyxxQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7OztJQUloQyxrQkFBa0IsR0FBVyxDQUFDO0FBRWxDO0lBcUdFLDRCQUFvQixpQkFBbUMsRUFDbkMsWUFBMkMsRUFDM0MsZUFBaUM7UUFGakMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBK0I7UUFDM0Msb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBbEc3QyxhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzs7Ozs7UUE4Rm5DLFVBQUssR0FBa0MsU0FBUyxDQUFDO0lBSWxCLENBQUM7SUF2RnpELHNCQUNJLG9DQUFJO1FBTFI7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDUyxJQUFZO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFB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ekIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOztnQkEzSUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFuQlEsZ0JBQWdCO2dCQUFFLFdBQVc7Z0JBRzdCLGdCQUFnQjs7O3VCQThCdEIsS0FBSyxTQUFDLFdBQVc7d0JBZWpCLEtBQUssU0FBQyxnQkFBZ0I7dUJBa0J0QixLQUFLLFNBQUMsZUFBZTt1QkFpQnJCLEtBQUssU0FBQyxlQUFlOzJCQWlCckIsS0FBSyxTQUFDLG1CQUFtQjt3QkFnQnpCLEtBQUssU0FBQyxnQkFBZ0I7O0lBeUN6Qix5QkFBQztDQUFBLEFBNUlELElBNElDO1NBeklZLGtCQUFrQjs7O0lBRTdCLHNDQUE0RDs7SUFDNUQsbUNBQTJCOztJQUMzQixtQ0FBMkI7O0lBQzNCLHVDQUFtQzs7SUFDbkMsbUNBQXNCOztJQUN0Qix5Q0FBaUM7Ozs7OztJQXlGakMsbUNBQTBFOztJQUU5RCwrQ0FBMkM7O0lBQzNDLDBDQUFtRDs7SUFDbkQsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdUeXBlLCBMb2FkaW5nTW9kZSwgTG9hZGluZ1N0cmF0ZWd5LCBUZExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IElMb2FkaW5nUmVmIH0gZnJvbSAnLi4vc2VydmljZXMvbG9hZGluZy5mYWN0b3J5JztcblxuLyoqXG4gKiBDb250ZXh0IGNsYXNzIGZvciB2YXJpYWJsZSByZWZlcmVuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0NvbnRleHQge1xuICBwdWJsaWMgJGltcGxpY2l0OiBhbnkgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyB0ZExvYWRpbmc6IGFueSA9IHVuZGVmaW5lZDtcbn1cblxuLy8gQ29uc3RhbnQgZm9yIGdlbmVyYXRpb24gb2YgdGhlIGlkIGZvciB0aGUgbmV4dCBjb21wb25lbnRcbmxldCBURF9MT0FESU5HX05FWFRfSUQ6IG51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZExvYWRpbmddJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQgPSBuZXcgVGRMb2FkaW5nQ29udGV4dCgpO1xuICBwcml2YXRlIF90eXBlOiBMb2FkaW5nVHlwZTtcbiAgcHJpdmF0ZSBfbW9kZTogTG9hZGluZ01vZGU7XG4gIHByaXZhdGUgX3N0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfbG9hZGluZ1JlZjogSUxvYWRpbmdSZWY7XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZzogc3RyaW5nXG4gICAqIE5hbWUgcmVmZXJlbmNlIG9mIHRoZSBsb2FkaW5nIG1hc2ssIHVzZWQgdG8gcmVnaXN0ZXIvcmVzb2x2ZSByZXF1ZXN0cyB0byB0aGUgbWFzay5cbiAgICovXG4gIEBJbnB1dCgndGRMb2FkaW5nJylcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nVW50aWw/OiBhbnlcbiAgICogSWYgaXRzIG51bGwsIHVuZGVmaW5lZCBvciBmYWxzZSBpdCB3aWxsIGJlIHVzZWQgdG8gcmVnaXN0ZXIgcmVxdWVzdHMgdG8gdGhlIG1hc2suXG4gICAqIEVsc2UgaWYgaXRzIGFueSB2YWx1ZSB0aGF0IGNhbiBiZSByZXNvbHZlZCBhcyB0cnVlLCBpdCB3aWxsIHJlc29sdmUgdGhlIG1hc2suXG4gICAqIFtuYW1lXSBpcyBvcHRpb25hbCB3aGVuIHVzaW5nIFt1bnRpbF0sIGJ1dCBjYW4gc3RpbGwgYmUgdXNlZCB0byByZWdpc3Rlci9yZXNvbHZlIGl0IG1hbnVhbGx5LlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdVbnRpbCcpXG4gIHNldCB1bnRpbCh1bnRpbDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9uYW1lKSB7XG4gICAgICB0aGlzLl9uYW1lID0gJ3RkLWxvYWRpbmctdW50aWwtJyArIFREX0xPQURJTkdfTkVYVF9JRCsrO1xuICAgIH1cbiAgICB0aGlzLl9jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuX2NvbnRleHQudGRMb2FkaW5nID0gdW50aWw7XG4gICAgaWYgKCF1bnRpbCkge1xuICAgICAgdGhpcy5fbG9hZGluZ1NlcnZpY2UucmVnaXN0ZXIodGhpcy5fbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwodGhpcy5fbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ1R5cGU/OiBMb2FkaW5nVHlwZSBvciBbJ2xpbmVhcicgfCAnY2lyY3VsYXInXVxuICAgKiBTZXRzIHRoZSB0eXBlIG9mIGxvYWRpbmcgbWFzayBkZXBlbmRpbmcgb24gdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvIFtMb2FkaW5nVHlwZS5DaXJjdWxhciB8ICdjaXJjdWxhciddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdUeXBlJylcbiAgc2V0IHR5cGUodHlwZTogTG9hZGluZ1R5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1R5cGUuTGluZWFyOlxuICAgICAgICB0aGlzLl90eXBlID0gTG9hZGluZ1R5cGUuTGluZWFyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX3R5cGUgPSBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ01vZGU/OiBMb2FkaW5nTW9kZSBvciBbJ2RldGVybWluYXRlJyB8ICdpbmRldGVybWluYXRlJ11cbiAgICogU2V0cyB0aGUgbW9kZSBvZiBsb2FkaW5nIG1hc2sgZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbTG9hZGluZ01vZGUuSW5kZXRlcm1pbmF0ZSB8ICdpbmRldGVybWluYXRlJ10uXG4gICAqL1xuICBASW5wdXQoJ3RkTG9hZGluZ01vZGUnKVxuICBzZXQgbW9kZShtb2RlOiBMb2FkaW5nTW9kZSkge1xuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSBMb2FkaW5nTW9kZS5EZXRlcm1pbmF0ZTpcbiAgICAgICAgdGhpcy5fbW9kZSA9IExvYWRpbmdNb2RlLkRldGVybWluYXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX21vZGUgPSBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGRMb2FkaW5nU3RyYXRlZ3k/OiBMb2FkaW5nU3RyYXRlZ3kgb3IgWydyZXBsYWNlJyB8ICdvdmVybGF5J11cbiAgICogU2V0cyB0aGUgc3RyYXRlZ3kgb2YgbG9hZGluZyBtYXNrIGRlcGVuZGluZyBvbiB2YWx1ZS5cbiAgICogRGVmYXVsdHMgdG8gW0xvYWRpbmdNb2RlLlJlcGxhY2UgfCAncmVwbGFjZSddLlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdTdHJhdGVneScpXG4gIHNldCBzdHJhdGVneShzdGF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3kpIHtcbiAgICBzd2l0Y2ggKHN0YXRlZ3kpIHtcbiAgICAgIGNhc2UgTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXk6XG4gICAgICAgIHRoaXMuX3N0cmF0ZWd5ID0gTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHRkTG9hZGluZ0NvbG9yPzogXCJwcmltYXJ5XCIgfCBcImFjY2VudFwiIHwgXCJ3YXJuXCJcbiAgICogU2V0cyB0aGUgdGhlbWUgY29sb3Igb2YgdGhlIGxvYWRpbmcgY29tcG9uZW50LiBEZWZhdWx0cyB0byBcInByaW1hcnlcIlxuICAgKi9cbiAgQElucHV0KCd0ZExvYWRpbmdDb2xvcicpIGNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyA9ICdwcmltYXJ5JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VGRMb2FkaW5nQ29udGV4dD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvYWRpbmdTZXJ2aWNlOiBUZExvYWRpbmdTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgY29tcG9uZW50IGluIHRoZSBET00sIHNvIGl0IHdpbGwgYmUgYXZhaWxhYmxlIHdoZW4gY2FsbGluZyByZXNvbHZlL3JlZ2lzdGVyLlxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVnaXN0ZXJDb21wb25lbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29tcG9uZW50IHdoZW4gZGlyZWN0aXZlIGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2xvYWRpbmdTZXJ2aWNlLnJlbW92ZUNvbXBvbmVudCh0aGlzLl9uYW1lKTtcbiAgICB0aGlzLl9sb2FkaW5nUmVmID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgW1RkTG9hZGluZ0NvbXBvbmVudF0gYW5kIGF0dGFjaGVzIGl0IHRvIHRoaXMgZGlyZWN0aXZlJ3MgW1ZpZXdDb250YWluZXJSZWZdLlxuICAgKiBQYXNzZXMgdGhpcyBkaXJlY3RpdmUncyBbVGVtcGxhdGVSZWZdIHRvIG1vZGlmeSBET00gZGVwZW5kaW5nIG9uIGxvYWRpbmcgYHN0cmF0ZWd5YC5cbiAgICovXG4gIHByaXZhdGUgX3JlZ2lzdGVyQ29tcG9uZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGlzIG5lZWRlZCB0byByZWdpc3RlciBsb2FkaW5nIGRpcmVjdGl2ZScpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBgVGRMb2FkaW5nQ29tcG9uZW50YCBoYXMgYmVlbiBjcmVhdGVkIGJlZm9yZSB0cnlpbmcgdG8gYWRkIG9uZSBhZ2Fpbi5cbiAgICAvLyBUaGVyZSBpcyBhIHdlaXJkIGVkZ2UgY2FzZSB3aGVuIHVzaW5nIGBbcm91dGVyTGlua0FjdGl2ZV1gIHRoYXQgY2FsbHMgdGhlIGBuZ09uSW5pdGAgdHdpY2UgaW4gYSByb3dcbiAgICBpZiAoIXRoaXMuX2xvYWRpbmdSZWYpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmdSZWYgPSB0aGlzLl9sb2FkaW5nU2VydmljZS5jcmVhdGVDb21wb25lbnQoe1xuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICB0eXBlOiB0aGlzLl90eXBlLFxuICAgICAgICBtb2RlOiB0aGlzLl9tb2RlLFxuICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgc3RyYXRlZ3k6IHRoaXMuX3N0cmF0ZWd5LFxuICAgICAgfSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZiwgdGhpcy5fdGVtcGxhdGVSZWYsIHRoaXMuX2NvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuIl19