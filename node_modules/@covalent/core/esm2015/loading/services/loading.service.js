/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, SkipSelf, Optional } from '@angular/core';
import { LoadingMode, LoadingStrategy, LoadingType } from '../loading.component';
import { TdLoadingFactory } from './loading.factory';
/**
 * @record
 */
export function ITdLoadingConfig() { }
if (false) {
    /** @type {?} */
    ITdLoadingConfig.prototype.name;
    /** @type {?|undefined} */
    ITdLoadingConfig.prototype.type;
    /** @type {?|undefined} */
    ITdLoadingConfig.prototype.mode;
    /** @type {?|undefined} */
    ITdLoadingConfig.prototype.color;
}
export class TdLoadingConfig {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.name = config.name;
        if (!this.name) {
            throw Error('Name is required for [TdLoading] configuration.');
        }
        this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
        this.type = config.type ? config.type : LoadingType.Circular;
        this.color = config.color ? config.color : 'primary';
    }
}
if (false) {
    /** @type {?} */
    TdLoadingConfig.prototype.name;
    /** @type {?} */
    TdLoadingConfig.prototype.type;
    /** @type {?} */
    TdLoadingConfig.prototype.mode;
    /** @type {?} */
    TdLoadingConfig.prototype.color;
}
/**
 * @record
 */
export function ITdLoadingDirectiveConfig() { }
if (false) {
    /** @type {?|undefined} */
    ITdLoadingDirectiveConfig.prototype.strategy;
}
export class TdLoadingDirectiveConfig extends TdLoadingConfig {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
        this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
    }
}
if (false) {
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.name;
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.type;
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.mode;
    /** @type {?} */
    TdLoadingDirectiveConfig.prototype.strategy;
}
export class TdLoadingService {
    /**
     * @param {?} _loadingFactory
     */
    constructor(_loadingFactory) {
        this._loadingFactory = _loadingFactory;
        this._context = {};
        this._timeouts = {};
        this.create({
            name: 'td-loading-main',
        });
    }
    /**
     * params:
     * - config: ILoadingDirectiveConfig
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     *
     * NOTE: \@internal usage only.
     * @param {?} config
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    createComponent(config, viewContainerRef, templateRef, context) {
        /** @type {?} */
        let directiveConfig = new TdLoadingDirectiveConfig(config);
        if (this._context[directiveConfig.name]) {
            throw Error(`Name duplication: [TdLoading] directive has a name conflict with ${directiveConfig.name}.`);
        }
        if (directiveConfig.strategy === LoadingStrategy.Overlay) {
            this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
        }
        else {
            this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
        }
        return this._context[directiveConfig.name];
    }
    /**
     * params:
     * - config: ITdLoadingConfig
     *
     * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
     * Only displayed when the mask has a request registered on it.
     * @param {?} config
     * @return {?}
     */
    create(config) {
        /** @type {?} */
        let fullscreenConfig = new TdLoadingConfig(config);
        this.removeComponent(fullscreenConfig.name);
        this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
    }
    /**
     * params:
     * - name: string
     *
     * Removes `loading` component from service context.
     * @param {?} name
     * @return {?}
     */
    removeComponent(name) {
        if (this._context[name]) {
            this._context[name].subject.unsubscribe();
            if (this._context[name].componentRef) {
                this._context[name].componentRef.destroy();
            }
            this._context[name] = undefined;
            delete this._context[name];
        }
    }
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
     * @param {?=} name
     * @param {?=} registers
     * @return {?}
     */
    register(name = 'td-loading-main', registers = 1) {
        // try registering into the service if the loading component has been instanciated or if it exists.
        if (this._context[name]) {
            registers = registers < 1 ? 1 : registers;
            this._context[name].times += registers;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        else {
            // if it doesnt exist, set a timeout so its registered after change detection happens
            // this in case "register" occured on the `ngOnInit` lifehook cycle.
            if (!this._timeouts[name]) {
                this._timeouts[name] = setTimeout(() => {
                    this.register(name, registers);
                });
            }
            else {
                // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                this._clearTimeout(name);
            }
        }
        return false;
    }
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
     * @param {?=} name
     * @param {?=} resolves
     * @return {?}
     */
    resolve(name = 'td-loading-main', resolves = 1) {
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            resolves = resolves < 1 ? 1 : resolves;
            if (this._context[name].times > 0) {
                /** @type {?} */
                let times = this._context[name].times;
                times -= resolves;
                this._context[name].times = times < 0 ? 0 : times;
            }
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    }
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
     * @param {?=} name
     * @return {?}
     */
    resolveAll(name = 'td-loading-main') {
        // clear timeout if the loading component is "resolved" before its "registered"
        this._clearTimeout(name);
        if (this._context[name]) {
            this._context[name].times = 0;
            this._context[name].subject.next(this._context[name].times);
            return true;
        }
        return false;
    }
    /**
     * params:
     * - name: string
     * - value: number
     * returns: true if successful
     *
     * Set value on a loading mask referenced by the name parameter.
     * Usage only available if its mode is 'determinate' and if loading is showing.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setValue(name, value) {
        if (this._context[name]) {
            /** @type {?} */
            let instance = this._context[name].componentRef.instance;
            if (instance.mode === LoadingMode.Determinate && instance.animation) {
                instance.value = value;
                return true;
            }
        }
        return false;
    }
    /**
     * Clears timeout linked to the name.
     * @param {?} name Name of the loading component to be cleared
     * @return {?}
     */
    _clearTimeout(name) {
        clearTimeout(this._timeouts[name]);
        delete this._timeouts[name];
    }
}
TdLoadingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdLoadingService.ctorParameters = () => [
    { type: TdLoadingFactory }
];
if (false) {
    /** @type {?} */
    TdLoadingService.prototype._context;
    /** @type {?} */
    TdLoadingService.prototype._timeouts;
    /** @type {?} */
    TdLoadingService.prototype._loadingFactory;
}
/**
 * @param {?} parent
 * @param {?} loadingFactory
 * @return {?}
 */
export function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
/** @type {?} */
export const LOADING_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingService,
    deps: [[new Optional(), new SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3pFLE9BQU8sRUFBc0IsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVsRSxzQ0FLQzs7O0lBSkMsZ0NBQWE7O0lBQ2IsZ0NBQW1COztJQUNuQixnQ0FBbUI7O0lBQ25CLGlDQUFzQzs7QUFHeEMsTUFBTSxPQUFPLGVBQWU7Ozs7SUFNMUIsWUFBWSxNQUF3QjtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RCxDQUFDO0NBQ0Y7OztJQWRDLCtCQUFhOztJQUNi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Q0FBQyxFQUFFOztnQkFDbkIsUUFBUSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRO1lBQzVFLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ25FLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQU1PLGFBQWEsQ0FBQyxJQUFZO1FBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQXBMRixVQUFVOzs7O1lBMUNGLGdCQUFnQjs7OztJQTZDdkIsb0NBQW9EOztJQUNwRCxxQ0FBNkM7O0lBRWpDLDJDQUF5Qzs7Ozs7OztBQWlMdkQsTUFBTSxVQUFVLHdCQUF3QixDQUNwQyxNQUF3QixFQUFFLGNBQWdDO0lBQzVELE9BQU8sTUFBTSxJQUFJLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQWE7O0lBRXhDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztJQUM1RSxVQUFVLEVBQUUsd0JBQXdCO0NBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIExvYWRpbmdUeXBlIH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgSUxvYWRpbmdSZWYgfSBmcm9tICcuL2xvYWRpbmcuZmFjdG9yeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IExvYWRpbmdUeXBlO1xuICBtb2RlPzogTG9hZGluZ01vZGU7XG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG59XG5cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ1R5cGU7XG4gIG1vZGU/OiBMb2FkaW5nTW9kZTtcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdDb25maWcpIHtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIFtUZExvYWRpbmddIGNvbmZpZ3VyYXRpb24uJyk7XG4gICAgfVxuICAgIHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlID8gY29uZmlnLm1vZGUgOiBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlID8gY29uZmlnLnR5cGUgOiBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICB0aGlzLmNvbG9yID0gY29uZmlnLmNvbG9yID8gY29uZmlnLmNvbG9yIDogJ3ByaW1hcnknO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIElUZExvYWRpbmdDb25maWcge1xuICBzdHJhdGVneT86IExvYWRpbmdTdHJhdGVneTtcbn1cblxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIFRkTG9hZGluZ0NvbmZpZyBpbXBsZW1lbnRzIElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IExvYWRpbmdUeXBlO1xuICBtb2RlOiBMb2FkaW5nTW9kZTtcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuc3RyYXRlZ3kgPSBjb25maWcuc3RyYXRlZ3kgPyBjb25maWcuc3RyYXRlZ3kgOiBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDoge1trZXk6IHN0cmluZ106IElMb2FkaW5nUmVmfSA9IHt9O1xuICBwcml2YXRlIF90aW1lb3V0czoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkaW5nRmFjdG9yeTogVGRMb2FkaW5nRmFjdG9yeSkge1xuICAgIHRoaXMuY3JlYXRlKHtcbiAgICAgIG5hbWU6ICd0ZC1sb2FkaW5nLW1haW4nLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElMb2FkaW5nRGlyZWN0aXZlQ29uZmlnXG4gICAqIC0gdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICAgKiAtIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+XG4gICAqXG4gICAqIENyZWF0ZXMgYW4gcmVwbGFjZSBsb2FkaW5nIG1hc2sgYW5kIGF0dGFjaGVzIGl0IHRvIHRoZSB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGVSZWYgd2l0aCB0aGUgbWFzayB3aGVuIGEgcmVxdWVzdCBpcyByZWdpc3RlcmVkIG9uIGl0LlxuICAgKlxuICAgKiBOT1RFOiBAaW50ZXJuYWwgdXNhZ2Ugb25seS5cbiAgICovXG4gIGNyZWF0ZUNvbXBvbmVudChjb25maWc6IElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0PiwgY29udGV4dDogVGRMb2FkaW5nQ29udGV4dCk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgZGlyZWN0aXZlQ29uZmlnOiBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcgPSBuZXcgVGRMb2FkaW5nRGlyZWN0aXZlQ29uZmlnKGNvbmZpZyk7XG4gICAgaWYgKHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdKSB7XG4gICAgICB0aHJvdyBFcnJvcihgTmFtZSBkdXBsaWNhdGlvbjogW1RkTG9hZGluZ10gZGlyZWN0aXZlIGhhcyBhIG5hbWUgY29uZmxpY3Qgd2l0aCAke2RpcmVjdGl2ZUNvbmZpZy5uYW1lfS5gKTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGl2ZUNvbmZpZy5zdHJhdGVneSA9PT0gTG9hZGluZ1N0cmF0ZWd5Lk92ZXJsYXkpIHtcbiAgICAgIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdID0gdGhpcy5fbG9hZGluZ0ZhY3RvcnkuY3JlYXRlT3ZlcmxheUNvbXBvbmVudChkaXJlY3RpdmVDb25maWcsIHZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVSZXBsYWNlQ29tcG9uZW50KGRpcmVjdGl2ZUNvbmZpZywgdmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSVRkTG9hZGluZ0NvbmZpZ1xuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVsbHNjcmVlbiBsb2FkaW5nIG1hc2sgYW5kIGF0dGFjaGVzIGl0IHRvIHRoZSBET00gd2l0aCB0aGUgZ2l2ZW4gY29uZmlndXJhdGlvbi5cbiAgICogT25seSBkaXNwbGF5ZWQgd2hlbiB0aGUgbWFzayBoYXMgYSByZXF1ZXN0IHJlZ2lzdGVyZWQgb24gaXQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlKGNvbmZpZzogSVRkTG9hZGluZ0NvbmZpZyk6IHZvaWQge1xuICAgIGxldCBmdWxsc2NyZWVuQ29uZmlnOiBUZExvYWRpbmdDb25maWcgPSBuZXcgVGRMb2FkaW5nQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5yZW1vdmVDb21wb25lbnQoZnVsbHNjcmVlbkNvbmZpZy5uYW1lKTtcbiAgICB0aGlzLl9jb250ZXh0W2Z1bGxzY3JlZW5Db25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KGZ1bGxzY3JlZW5Db25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICpcbiAgICogUmVtb3ZlcyBgbG9hZGluZ2AgY29tcG9uZW50IGZyb20gc2VydmljZSBjb250ZXh0LlxuICAgKi9cbiAgcHVibGljIHJlbW92ZUNvbXBvbmVudChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gcmVnaXN0ZXJzPzogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIENhbiBvcHRpb25hbGx5IHBhc3MgcmVnaXN0ZXJzIGFyZ3VtZW50IHRvIHNldCBhIG51bWJlciBvZiByZWdpc3RlciBjYWxscy5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZWdpc3RlcigpXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicsIHJlZ2lzdGVyczogbnVtYmVyID0gMSk6IGJvb2xlYW4ge1xuICAgIC8vIHRyeSByZWdpc3RlcmluZyBpbnRvIHRoZSBzZXJ2aWNlIGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBoYXMgYmVlbiBpbnN0YW5jaWF0ZWQgb3IgaWYgaXQgZXhpc3RzLlxuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICByZWdpc3RlcnMgPSByZWdpc3RlcnMgPCAxID8gMSA6IHJlZ2lzdGVycztcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgKz0gcmVnaXN0ZXJzO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgaXQgZG9lc250IGV4aXN0LCBzZXQgYSB0aW1lb3V0IHNvIGl0cyByZWdpc3RlcmVkIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFwcGVuc1xuICAgICAgLy8gdGhpcyBpbiBjYXNlIFwicmVnaXN0ZXJcIiBvY2N1cmVkIG9uIHRoZSBgbmdPbkluaXRgIGxpZmVob29rIGN5Y2xlLlxuICAgICAgaWYgKCF0aGlzLl90aW1lb3V0c1tuYW1lXSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0c1tuYW1lXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVnaXN0ZXIobmFtZSwgcmVnaXN0ZXJzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBpdCB0aW1lb3V0IG9jY3VyZWQgYW5kIHN0aWxsIGRvZXNudCBleGlzdCwgaXQgbWVhbnMgdGhlIHRpZW1vdXQgd2FzbnQgbmVlZGVkIHNvIHdlIGNsZWFyIGl0LlxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gcmVzb2x2ZXM/OiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGEgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogQ2FuIG9wdGlvbmFsbHkgcGFzcyByZXNvbHZlcyBhcmd1bWVudCB0byBzZXQgYSBudW1iZXIgb2YgcmVzb2x2ZSBjYWxscy5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZXNvbHZlKClcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nLCByZXNvbHZlczogbnVtYmVyID0gMSk6IGJvb2xlYW4ge1xuICAgIC8vIGNsZWFyIHRpbWVvdXQgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGlzIFwicmVzb2x2ZWRcIiBiZWZvcmUgaXRzIFwicmVnaXN0ZXJlZFwiXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICByZXNvbHZlcyA9IHJlc29sdmVzIDwgMSA/IDEgOiByZXNvbHZlcztcbiAgICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID4gMCkge1xuICAgICAgICBsZXQgdGltZXM6IG51bWJlciA9IHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXM7XG4gICAgICAgIHRpbWVzIC09IHJlc29sdmVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID0gdGltZXMgPCAwID8gMCA6IHRpbWVzO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGFsbCByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwoKVxuICAgKi9cbiAgcHVibGljIHJlc29sdmVBbGwobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicpOiBib29sZWFuIHtcbiAgICAvLyBjbGVhciB0aW1lb3V0IGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpcyBcInJlc29sdmVkXCIgYmVmb3JlIGl0cyBcInJlZ2lzdGVyZWRcIlxuICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA9IDA7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHZhbHVlOiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFNldCB2YWx1ZSBvbiBhIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogVXNhZ2Ugb25seSBhdmFpbGFibGUgaWYgaXRzIG1vZGUgaXMgJ2RldGVybWluYXRlJyBhbmQgaWYgbG9hZGluZyBpcyBzaG93aW5nLlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICBsZXQgaW5zdGFuY2U6IFRkTG9hZGluZ0NvbXBvbmVudCA9IHRoaXMuX2NvbnRleHRbbmFtZV0uY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICAgICAgaWYgKGluc3RhbmNlLm1vZGUgPT09IExvYWRpbmdNb2RlLkRldGVybWluYXRlICYmIGluc3RhbmNlLmFuaW1hdGlvbikge1xuICAgICAgICBpbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aW1lb3V0IGxpbmtlZCB0byB0aGUgbmFtZS5cbiAgICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgbG9hZGluZyBjb21wb25lbnQgdG8gYmUgY2xlYXJlZFxuICAgKi9cbiAgcHJpdmF0ZSBfY2xlYXJUaW1lb3V0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0c1tuYW1lXSk7XG4gICAgZGVsZXRlIHRoaXMuX3RpbWVvdXRzW25hbWVdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0FESU5HX1BST1ZJREVSX0ZBQ1RPUlkoXG4gICAgcGFyZW50OiBUZExvYWRpbmdTZXJ2aWNlLCBsb2FkaW5nRmFjdG9yeTogVGRMb2FkaW5nRmFjdG9yeSk6IFRkTG9hZGluZ1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZExvYWRpbmdTZXJ2aWNlKGxvYWRpbmdGYWN0b3J5KTtcbn1cblxuZXhwb3J0IGNvbnN0IExPQURJTkdfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZExvYWRpbmdTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRMb2FkaW5nU2VydmljZV0sIFRkTG9hZGluZ0ZhY3RvcnldLFxuICB1c2VGYWN0b3J5OiBMT0FESU5HX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19