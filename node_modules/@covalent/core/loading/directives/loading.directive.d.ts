import { OnInit, OnDestroy } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { LoadingType, LoadingMode, LoadingStrategy } from '../loading.component';
import { TdLoadingService } from '../services/loading.service';
/**
 * Context class for variable reference
 */
export declare class TdLoadingContext {
    $implicit: any;
    tdLoading: any;
}
export declare class TdLoadingDirective implements OnInit, OnDestroy {
    private _viewContainerRef;
    private _templateRef;
    private _loadingService;
    private _context;
    private _type;
    private _mode;
    private _strategy;
    private _name;
    private _loadingRef;
    /**
     * tdLoading: string
     * Name reference of the loading mask, used to register/resolve requests to the mask.
     */
    set name(name: string);
    /**
     * tdLoadingUntil?: any
     * If its null, undefined or false it will be used to register requests to the mask.
     * Else if its any value that can be resolved as true, it will resolve the mask.
     * [name] is optional when using [until], but can still be used to register/resolve it manually.
     */
    set until(until: any);
    /**
     * tdLoadingType?: LoadingType or ['linear' | 'circular']
     * Sets the type of loading mask depending on value.
     * Defaults to [LoadingType.Circular | 'circular'].
     */
    set type(type: LoadingType);
    /**
     * tdLoadingMode?: LoadingMode or ['determinate' | 'indeterminate']
     * Sets the mode of loading mask depending on value.
     * Defaults to [LoadingMode.Indeterminate | 'indeterminate'].
     */
    set mode(mode: LoadingMode);
    /**
     * tdLoadingStrategy?: LoadingStrategy or ['replace' | 'overlay']
     * Sets the strategy of loading mask depending on value.
     * Defaults to [LoadingMode.Replace | 'replace'].
     */
    set strategy(strategy: LoadingStrategy);
    /**
     * tdLoadingColor?: "primary" | "accent" | "warn"
     * Sets the theme color of the loading component. Defaults to "primary"
     */
    color: 'primary' | 'accent' | 'warn';
    constructor(_viewContainerRef: ViewContainerRef, _templateRef: TemplateRef<TdLoadingContext>, _loadingService: TdLoadingService);
    /**
     * Registers component in the DOM, so it will be available when calling resolve/register.
     */
    ngOnInit(): void;
    /**
     * Remove component when directive is destroyed.
     */
    ngOnDestroy(): void;
    /**
     * Creates [TdLoadingComponent] and attaches it to this directive's [ViewContainerRef].
     * Passes this directive's [TemplateRef] to modify DOM depending on loading `strategy`.
     */
    private _registerComponent;
}
