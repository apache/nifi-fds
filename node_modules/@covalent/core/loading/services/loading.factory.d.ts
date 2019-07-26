import { ComponentFactoryResolver, Provider } from '@angular/core';
import { Injector, ComponentRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { TdLoadingContext } from '../directives/loading.directive';
import { LoadingStyle } from '../loading.component';
import { ITdLoadingConfig } from './loading.service';
export interface IInternalLoadingOptions extends ITdLoadingConfig {
    height?: number;
    style?: LoadingStyle;
}
export interface ILoadingRef {
    observable: Observable<any>;
    componentRef: ComponentRef<any>;
    subject?: Subject<any>;
    times?: number;
}
/**
 * NOTE: @internal usage only.
 */
export declare class TdLoadingFactory {
    private _componentFactoryResolver;
    private _overlay;
    private _injector;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _overlay: Overlay, _injector: Injector);
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    createFullScreenComponent(options: ITdLoadingConfig): ILoadingRef;
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    createOverlayComponent(options: ITdLoadingConfig, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<Object>): ILoadingRef;
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     */
    createReplaceComponent(options: ITdLoadingConfig, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<Object>, context: TdLoadingContext): ILoadingRef;
    /**
     * Creates a fullscreen overlay for the loading usage.
     */
    private _createOverlay;
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     */
    private _createComponent;
    /**
     * Initialize context for loading component.
     */
    private _initializeContext;
    /**
     * Maps configuration to the loading component instance.
     */
    private _mapOptions;
}
export declare function LOADING_FACTORY_PROVIDER_FACTORY(parent: TdLoadingFactory, componentFactoryResolver: ComponentFactoryResolver, overlay: Overlay, injector: Injector): TdLoadingFactory;
export declare const LOADING_FACTORY_PROVIDER: Provider;
