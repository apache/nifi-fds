import { Provider } from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { TdLoadingContext } from '../directives/loading.directive';
import { LoadingMode, LoadingStrategy, LoadingType } from '../loading.component';
import { TdLoadingFactory, ILoadingRef } from './loading.factory';
export interface ITdLoadingConfig {
    name: string;
    type?: LoadingType;
    mode?: LoadingMode;
    color?: 'primary' | 'accent' | 'warn';
}
export declare class TdLoadingConfig implements ITdLoadingConfig {
    name: string;
    type?: LoadingType;
    mode?: LoadingMode;
    color?: 'primary' | 'accent' | 'warn';
    constructor(config: ITdLoadingConfig);
}
export interface ITdLoadingDirectiveConfig extends ITdLoadingConfig {
    strategy?: LoadingStrategy;
}
export declare class TdLoadingDirectiveConfig extends TdLoadingConfig implements ITdLoadingDirectiveConfig {
    name: string;
    type: LoadingType;
    mode: LoadingMode;
    strategy: LoadingStrategy;
    constructor(config: ITdLoadingDirectiveConfig);
}
export declare class TdLoadingService {
    private _loadingFactory;
    private _context;
    private _timeouts;
    constructor(_loadingFactory: TdLoadingFactory);
    /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: @internal usage only.
     */
    createComponent(config: ITdLoadingDirectiveConfig, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<object>, context: TdLoadingContext): ILoadingRef;
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     */
    create(config: ITdLoadingConfig): void;
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     */
    removeComponent(name: string): void;
    /**
     * params:
     * - name: string
     * - registers?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass registers argument to set a number of register calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.register()
     */
    register(name?: string, registers?: number): boolean;
    /**
     * params:
     * - name: string
     * - resolves?: number
     * returns: true if successful
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     * Can optionally pass resolves argument to set a number of resolve calls.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolve()
     */
    resolve(name?: string, resolves?: number): boolean;
    /**
     * params:
     * - name: string
     * returns: true if successful
     *
     * Resolves all request for the loading mask referenced by the name parameter.
     *
     * If no paramemeters are used, then default main mask will be used.
     *
     * e.g. loadingService.resolveAll()
     */
    resolveAll(name?: string): boolean;
    /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     */
    setValue(name: string, value: number): boolean;
    /**
     * Clears timeout linked to the name.
     * @param name Name of the loading component to be cleared
     */
    private _clearTimeout;
}
export declare function LOADING_PROVIDER_FACTORY(parent: TdLoadingService, loadingFactory: TdLoadingFactory): TdLoadingService;
export declare const LOADING_PROVIDER: Provider;
