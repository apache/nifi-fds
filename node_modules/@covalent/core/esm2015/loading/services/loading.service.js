/**
 * @fileoverview added by tsickle
 * Generated from: services/loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const directiveConfig = new TdLoadingDirectiveConfig(config);
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
        const fullscreenConfig = new TdLoadingConfig(config);
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
                this._timeouts[name] = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.register(name, registers);
                }));
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
            const instance = this._context[name].componentRef.instance;
            if (instance.mode === LoadingMode.Determinate && instance.animation) {
                instance.value = value;
                return true;
            }
        }
        return false;
    }
    /**
     * Clears timeout linked to the name.
     * @private
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
    /**
     * @type {?}
     * @private
     */
    TdLoadingService.prototype._context;
    /**
     * @type {?}
     * @private
     */
    TdLoadingService.prototype._timeouts;
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2xvYWRpbmcvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLekUsT0FBTyxFQUFzQixXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRWxFLHNDQUtDOzs7SUFKQyxnQ0FBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLGdDQUFtQjs7SUFDbkIsaUNBQXNDOztBQUd4QyxNQUFNLE9BQU8sZUFBZTs7OztJQU0xQixZQUFZLE1BQXdCO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjs7O0lB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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOztrQkFDakIsUUFBUSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRO1lBQzlFLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ25FLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFNTyxhQUFhLENBQUMsSUFBWTtRQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFoTUYsVUFBVTs7OztZQTFDRixnQkFBZ0I7Ozs7Ozs7SUE0Q3ZCLG9DQUFzRDs7Ozs7SUFDdEQscUNBQStDOzs7OztJQUVuQywyQ0FBeUM7Ozs7Ozs7QUE4THZELE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxNQUF3QixFQUFFLGNBQWdDO0lBQ2pHLE9BQU8sTUFBTSxJQUFJLElBQUksZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEQsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCLEdBQWE7O0lBRXhDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztJQUM1RSxVQUFVLEVBQUUsd0JBQXdCO0NBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdNb2RlLCBMb2FkaW5nU3RyYXRlZ3ksIExvYWRpbmdUeXBlIH0gZnJvbSAnLi4vbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRMb2FkaW5nRmFjdG9yeSwgSUxvYWRpbmdSZWYgfSBmcm9tICcuL2xvYWRpbmcuZmFjdG9yeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IExvYWRpbmdUeXBlO1xuICBtb2RlPzogTG9hZGluZ01vZGU7XG4gIGNvbG9yPzogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG59XG5cbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdDb25maWcgaW1wbGVtZW50cyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlPzogTG9hZGluZ1R5cGU7XG4gIG1vZGU/OiBMb2FkaW5nTW9kZTtcbiAgY29sb3I/OiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdDb25maWcpIHtcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIFtUZExvYWRpbmddIGNvbmZpZ3VyYXRpb24uJyk7XG4gICAgfVxuICAgIHRoaXMubW9kZSA9IGNvbmZpZy5tb2RlID8gY29uZmlnLm1vZGUgOiBMb2FkaW5nTW9kZS5JbmRldGVybWluYXRlO1xuICAgIHRoaXMudHlwZSA9IGNvbmZpZy50eXBlID8gY29uZmlnLnR5cGUgOiBMb2FkaW5nVHlwZS5DaXJjdWxhcjtcbiAgICB0aGlzLmNvbG9yID0gY29uZmlnLmNvbG9yID8gY29uZmlnLmNvbG9yIDogJ3ByaW1hcnknO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIElUZExvYWRpbmdDb25maWcge1xuICBzdHJhdGVneT86IExvYWRpbmdTdHJhdGVneTtcbn1cblxuZXhwb3J0IGNsYXNzIFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyBleHRlbmRzIFRkTG9hZGluZ0NvbmZpZyBpbXBsZW1lbnRzIElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IExvYWRpbmdUeXBlO1xuICBtb2RlOiBMb2FkaW5nTW9kZTtcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IElUZExvYWRpbmdEaXJlY3RpdmVDb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuc3RyYXRlZ3kgPSBjb25maWcuc3RyYXRlZ3kgPyBjb25maWcuc3RyYXRlZ3kgOiBMb2FkaW5nU3RyYXRlZ3kuUmVwbGFjZTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nU2VydmljZSB7XG4gIHByaXZhdGUgX2NvbnRleHQ6IHsgW2tleTogc3RyaW5nXTogSUxvYWRpbmdSZWYgfSA9IHt9O1xuICBwcml2YXRlIF90aW1lb3V0czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdGYWN0b3J5OiBUZExvYWRpbmdGYWN0b3J5KSB7XG4gICAgdGhpcy5jcmVhdGUoe1xuICAgICAgbmFtZTogJ3RkLWxvYWRpbmctbWFpbicsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIGNvbmZpZzogSUxvYWRpbmdEaXJlY3RpdmVDb25maWdcbiAgICogLSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAqIC0gdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD5cbiAgICpcbiAgICogQ3JlYXRlcyBhbiByZXBsYWNlIGxvYWRpbmcgbWFzayBhbmQgYXR0YWNoZXMgaXQgdG8gdGhlIHZpZXdDb250YWluZXJSZWYuXG4gICAqIFJlcGxhY2VzIHRoZSB0ZW1wbGF0ZVJlZiB3aXRoIHRoZSBtYXNrIHdoZW4gYSByZXF1ZXN0IGlzIHJlZ2lzdGVyZWQgb24gaXQuXG4gICAqXG4gICAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICAgKi9cbiAgY3JlYXRlQ29tcG9uZW50KFxuICAgIGNvbmZpZzogSVRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxvYmplY3Q+LFxuICAgIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQsXG4gICk6IElMb2FkaW5nUmVmIHtcbiAgICBjb25zdCBkaXJlY3RpdmVDb25maWc6IFRkTG9hZGluZ0RpcmVjdGl2ZUNvbmZpZyA9IG5ldyBUZExvYWRpbmdEaXJlY3RpdmVDb25maWcoY29uZmlnKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0pIHtcbiAgICAgIHRocm93IEVycm9yKGBOYW1lIGR1cGxpY2F0aW9uOiBbVGRMb2FkaW5nXSBkaXJlY3RpdmUgaGFzIGEgbmFtZSBjb25mbGljdCB3aXRoICR7ZGlyZWN0aXZlQ29uZmlnLm5hbWV9LmApO1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aXZlQ29uZmlnLnN0cmF0ZWd5ID09PSBMb2FkaW5nU3RyYXRlZ3kuT3ZlcmxheSkge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVPdmVybGF5Q29tcG9uZW50KFxuICAgICAgICBkaXJlY3RpdmVDb25maWcsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRlbXBsYXRlUmVmLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGV4dFtkaXJlY3RpdmVDb25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVSZXBsYWNlQ29tcG9uZW50KFxuICAgICAgICBkaXJlY3RpdmVDb25maWcsXG4gICAgICAgIHZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRlbXBsYXRlUmVmLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHRbZGlyZWN0aXZlQ29uZmlnLm5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBjb25maWc6IElUZExvYWRpbmdDb25maWdcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gbG9hZGluZyBtYXNrIGFuZCBhdHRhY2hlcyBpdCB0byB0aGUgRE9NIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24uXG4gICAqIE9ubHkgZGlzcGxheWVkIHdoZW4gdGhlIG1hc2sgaGFzIGEgcmVxdWVzdCByZWdpc3RlcmVkIG9uIGl0LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZShjb25maWc6IElUZExvYWRpbmdDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBmdWxsc2NyZWVuQ29uZmlnOiBUZExvYWRpbmdDb25maWcgPSBuZXcgVGRMb2FkaW5nQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5yZW1vdmVDb21wb25lbnQoZnVsbHNjcmVlbkNvbmZpZy5uYW1lKTtcbiAgICB0aGlzLl9jb250ZXh0W2Z1bGxzY3JlZW5Db25maWcubmFtZV0gPSB0aGlzLl9sb2FkaW5nRmFjdG9yeS5jcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KGZ1bGxzY3JlZW5Db25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICpcbiAgICogUmVtb3ZlcyBgbG9hZGluZ2AgY29tcG9uZW50IGZyb20gc2VydmljZSBjb250ZXh0LlxuICAgKi9cbiAgcHVibGljIHJlbW92ZUNvbXBvbmVudChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0LnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gcmVnaXN0ZXJzPzogbnVtYmVyXG4gICAqIHJldHVybnM6IHRydWUgaWYgc3VjY2Vzc2Z1bFxuICAgKlxuICAgKiBSZXNvbHZlcyBhIHJlcXVlc3QgZm9yIHRoZSBsb2FkaW5nIG1hc2sgcmVmZXJlbmNlZCBieSB0aGUgbmFtZSBwYXJhbWV0ZXIuXG4gICAqIENhbiBvcHRpb25hbGx5IHBhc3MgcmVnaXN0ZXJzIGFyZ3VtZW50IHRvIHNldCBhIG51bWJlciBvZiByZWdpc3RlciBjYWxscy5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZWdpc3RlcigpXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicsIHJlZ2lzdGVyczogbnVtYmVyID0gMSk6IGJvb2xlYW4ge1xuICAgIC8vIHRyeSByZWdpc3RlcmluZyBpbnRvIHRoZSBzZXJ2aWNlIGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBoYXMgYmVlbiBpbnN0YW5jaWF0ZWQgb3IgaWYgaXQgZXhpc3RzLlxuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICByZWdpc3RlcnMgPSByZWdpc3RlcnMgPCAxID8gMSA6IHJlZ2lzdGVycztcbiAgICAgIHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXMgKz0gcmVnaXN0ZXJzO1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgaXQgZG9lc250IGV4aXN0LCBzZXQgYSB0aW1lb3V0IHNvIGl0cyByZWdpc3RlcmVkIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFwcGVuc1xuICAgICAgLy8gdGhpcyBpbiBjYXNlIFwicmVnaXN0ZXJcIiBvY2N1cmVkIG9uIHRoZSBgbmdPbkluaXRgIGxpZmVob29rIGN5Y2xlLlxuICAgICAgaWYgKCF0aGlzLl90aW1lb3V0c1tuYW1lXSkge1xuICAgICAgICB0aGlzLl90aW1lb3V0c1tuYW1lXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVnaXN0ZXIobmFtZSwgcmVnaXN0ZXJzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBpdCB0aW1lb3V0IG9jY3VyZWQgYW5kIHN0aWxsIGRvZXNudCBleGlzdCwgaXQgbWVhbnMgdGhlIHRpZW1vdXQgd2FzbnQgbmVlZGVkIHNvIHdlIGNsZWFyIGl0LlxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXQobmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJhbXM6XG4gICAqIC0gbmFtZTogc3RyaW5nXG4gICAqIC0gcmVzb2x2ZXM/OiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGEgcmVxdWVzdCBmb3IgdGhlIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogQ2FuIG9wdGlvbmFsbHkgcGFzcyByZXNvbHZlcyBhcmd1bWVudCB0byBzZXQgYSBudW1iZXIgb2YgcmVzb2x2ZSBjYWxscy5cbiAgICpcbiAgICogSWYgbm8gcGFyYW1lbWV0ZXJzIGFyZSB1c2VkLCB0aGVuIGRlZmF1bHQgbWFpbiBtYXNrIHdpbGwgYmUgdXNlZC5cbiAgICpcbiAgICogZS5nLiBsb2FkaW5nU2VydmljZS5yZXNvbHZlKClcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlKG5hbWU6IHN0cmluZyA9ICd0ZC1sb2FkaW5nLW1haW4nLCByZXNvbHZlczogbnVtYmVyID0gMSk6IGJvb2xlYW4ge1xuICAgIC8vIGNsZWFyIHRpbWVvdXQgaWYgdGhlIGxvYWRpbmcgY29tcG9uZW50IGlzIFwicmVzb2x2ZWRcIiBiZWZvcmUgaXRzIFwicmVnaXN0ZXJlZFwiXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KG5hbWUpO1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICByZXNvbHZlcyA9IHJlc29sdmVzIDwgMSA/IDEgOiByZXNvbHZlcztcbiAgICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID4gMCkge1xuICAgICAgICBsZXQgdGltZXM6IG51bWJlciA9IHRoaXMuX2NvbnRleHRbbmFtZV0udGltZXM7XG4gICAgICAgIHRpbWVzIC09IHJlc29sdmVzO1xuICAgICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzID0gdGltZXMgPCAwID8gMCA6IHRpbWVzO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS5zdWJqZWN0Lm5leHQodGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhcmFtczpcbiAgICogLSBuYW1lOiBzdHJpbmdcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFJlc29sdmVzIGFsbCByZXF1ZXN0IGZvciB0aGUgbG9hZGluZyBtYXNrIHJlZmVyZW5jZWQgYnkgdGhlIG5hbWUgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBJZiBubyBwYXJhbWVtZXRlcnMgYXJlIHVzZWQsIHRoZW4gZGVmYXVsdCBtYWluIG1hc2sgd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBlLmcuIGxvYWRpbmdTZXJ2aWNlLnJlc29sdmVBbGwoKVxuICAgKi9cbiAgcHVibGljIHJlc29sdmVBbGwobmFtZTogc3RyaW5nID0gJ3RkLWxvYWRpbmctbWFpbicpOiBib29sZWFuIHtcbiAgICAvLyBjbGVhciB0aW1lb3V0IGlmIHRoZSBsb2FkaW5nIGNvbXBvbmVudCBpcyBcInJlc29sdmVkXCIgYmVmb3JlIGl0cyBcInJlZ2lzdGVyZWRcIlxuICAgIHRoaXMuX2NsZWFyVGltZW91dChuYW1lKTtcbiAgICBpZiAodGhpcy5fY29udGV4dFtuYW1lXSkge1xuICAgICAgdGhpcy5fY29udGV4dFtuYW1lXS50aW1lcyA9IDA7XG4gICAgICB0aGlzLl9jb250ZXh0W25hbWVdLnN1YmplY3QubmV4dCh0aGlzLl9jb250ZXh0W25hbWVdLnRpbWVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogcGFyYW1zOlxuICAgKiAtIG5hbWU6IHN0cmluZ1xuICAgKiAtIHZhbHVlOiBudW1iZXJcbiAgICogcmV0dXJuczogdHJ1ZSBpZiBzdWNjZXNzZnVsXG4gICAqXG4gICAqIFNldCB2YWx1ZSBvbiBhIGxvYWRpbmcgbWFzayByZWZlcmVuY2VkIGJ5IHRoZSBuYW1lIHBhcmFtZXRlci5cbiAgICogVXNhZ2Ugb25seSBhdmFpbGFibGUgaWYgaXRzIG1vZGUgaXMgJ2RldGVybWluYXRlJyBhbmQgaWYgbG9hZGluZyBpcyBzaG93aW5nLlxuICAgKi9cbiAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9jb250ZXh0W25hbWVdKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZTogVGRMb2FkaW5nQ29tcG9uZW50ID0gdGhpcy5fY29udGV4dFtuYW1lXS5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICBpZiAoaW5zdGFuY2UubW9kZSA9PT0gTG9hZGluZ01vZGUuRGV0ZXJtaW5hdGUgJiYgaW5zdGFuY2UuYW5pbWF0aW9uKSB7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRpbWVvdXQgbGlua2VkIHRvIHRoZSBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBsb2FkaW5nIGNvbXBvbmVudCB0byBiZSBjbGVhcmVkXG4gICAqL1xuICBwcml2YXRlIF9jbGVhclRpbWVvdXQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXRzW25hbWVdKTtcbiAgICBkZWxldGUgdGhpcy5fdGltZW91dHNbbmFtZV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQURJTkdfUFJPVklERVJfRkFDVE9SWShwYXJlbnQ6IFRkTG9hZGluZ1NlcnZpY2UsIGxvYWRpbmdGYWN0b3J5OiBUZExvYWRpbmdGYWN0b3J5KTogVGRMb2FkaW5nU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkTG9hZGluZ1NlcnZpY2UobG9hZGluZ0ZhY3RvcnkpO1xufVxuXG5leHBvcnQgY29uc3QgTE9BRElOR19QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkTG9hZGluZ1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZExvYWRpbmdTZXJ2aWNlXSwgVGRMb2FkaW5nRmFjdG9yeV0sXG4gIHVzZUZhY3Rvcnk6IExPQURJTkdfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=