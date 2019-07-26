/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, SkipSelf, Optional } from '@angular/core';
import { Injector } from '@angular/core';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TdLoadingComponent, LoadingStyle } from '../loading.component';
/**
 * @record
 */
export function IInternalLoadingOptions() { }
if (false) {
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.height;
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.style;
}
/**
 * @record
 */
export function ILoadingRef() { }
if (false) {
    /** @type {?} */
    ILoadingRef.prototype.observable;
    /** @type {?} */
    ILoadingRef.prototype.componentRef;
    /** @type {?|undefined} */
    ILoadingRef.prototype.subject;
    /** @type {?|undefined} */
    ILoadingRef.prototype.times;
}
/**
 * NOTE: \@internal usage only.
 */
export class TdLoadingFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _overlay
     * @param {?} _injector
     */
    constructor(_componentFactoryResolver, _overlay, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._overlay = _overlay;
        this._injector = _injector;
    }
    /**
     * Uses material `Overlay` services to create a DOM element and attach the loading component
     * into it. Leveraging the state and configuration from it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @return {?}
     */
    createFullScreenComponent(options) {
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.FullScreen;
        /** @type {?} */
        let loadingRef = this._initializeContext();
        /** @type {?} */
        let loading = false;
        /** @type {?} */
        let overlayRef;
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new ComponentPortal(TdLoadingComponent));
                this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.startInAnimation();
                loadingRef.componentRef.changeDetectorRef.detectChanges();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
                let subs = loadingRef.componentRef.instance.startOutAnimation().subscribe(() => {
                    subs.unsubscribe();
                    loadingRef.componentRef.destroy();
                    overlayRef.detach();
                    overlayRef.dispose();
                });
            }
        });
        return loadingRef;
    }
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Leverages TemplatePortals from material to inject the template inside of it so it fits
     * perfectly when overlaying it.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @return {?}
     */
    createOverlayComponent(options, viewContainerRef, templateRef) {
        ((/** @type {?} */ (options))).height = undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.Overlay;
        /** @type {?} */
        let loadingRef = this._createComponent(options);
        /** @type {?} */
        let loading = false;
        loadingRef.componentRef.instance.content = new TemplatePortal(templateRef, viewContainerRef);
        viewContainerRef.clear();
        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.startOutAnimation();
            }
        });
        return loadingRef;
    }
    /**
     * Creates a loading component dynamically and attaches it into the given viewContainerRef.
     * Replaces the template with the loading component depending if it was registered or resolved.
     *
     * Saves a reference in context to be called when registering/resolving the loading element.
     * @param {?} options
     * @param {?} viewContainerRef
     * @param {?} templateRef
     * @param {?} context
     * @return {?}
     */
    createReplaceComponent(options, viewContainerRef, templateRef, context) {
        /** @type {?} */
        let nativeElement = (/** @type {?} */ (templateRef.elementRef.nativeElement));
        ((/** @type {?} */ (options))).height = nativeElement.nextElementSibling ?
            nativeElement.nextElementSibling.scrollHeight : undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.None;
        /** @type {?} */
        let loadingRef = this._createComponent(options);
        /** @type {?} */
        let loading = false;
        // passing context so when the template is attached, we can keep the reference of the variables
        /** @type {?} */
        let contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                // detach the content and attach the loader if loader is there
                /** @type {?} */
                let index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.startInAnimation();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                /** @type {?} */
                let subs = loadingRef.componentRef.instance.startOutAnimation().subscribe(() => {
                    subs.unsubscribe();
                    // detach loader and attach the content if content is there
                    /** @type {?} */
                    let index = viewContainerRef.indexOf(contentRef);
                    if (index < 0) {
                        viewContainerRef.detach(viewContainerRef.indexOf(loadingRef.componentRef.hostView));
                        viewContainerRef.insert(contentRef, 0);
                    }
                    /**
                     * Need to call "markForCheck" and "detectChanges" on attached template, so its detected by parent component when attached
                     * with "OnPush" change detection
                     */
                    contentRef.detectChanges();
                    contentRef.markForCheck();
                });
            }
        });
        return loadingRef;
    }
    /**
     * Creates a fullscreen overlay for the loading usage.
     * @return {?}
     */
    _createOverlay() {
        /** @type {?} */
        let state = new OverlayConfig();
        state.hasBackdrop = false;
        state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state);
    }
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @param {?} options
     * @return {?}
     */
    _createComponent(options) {
        /** @type {?} */
        let compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent).create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    }
    /**
     * Initialize context for loading component.
     * @return {?}
     */
    _initializeContext() {
        /** @type {?} */
        let subject = new Subject();
        return {
            observable: subject.asObservable(),
            subject: subject,
            componentRef: undefined,
            times: 0,
        };
    }
    /**
     * Maps configuration to the loading component instance.
     * @param {?} options
     * @param {?} instance
     * @return {?}
     */
    _mapOptions(options, instance) {
        instance.style = options.style;
        if (options.type !== undefined) {
            instance.type = options.type;
        }
        if (options.height !== undefined) {
            instance.height = options.height;
        }
        if (options.mode !== undefined) {
            instance.mode = options.mode;
        }
        if (options.color !== undefined) {
            instance.color = options.color;
        }
    }
}
TdLoadingFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TdLoadingFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: Overlay },
    { type: Injector }
];
if (false) {
    /** @type {?} */
    TdLoadingFactory.prototype._componentFactoryResolver;
    /** @type {?} */
    TdLoadingFactory.prototype._overlay;
    /** @type {?} */
    TdLoadingFactory.prototype._injector;
}
/**
 * @param {?} parent
 * @param {?} componentFactoryResolver
 * @param {?} overlay
 * @param {?} injector
 * @return {?}
 */
export function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
}
/** @type {?} */
export const LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new Optional(), new SkipSelf(), TdLoadingFactory], ComponentFactoryResolver, Overlay, Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvbG9hZGluZy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvYWRpbmcuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBK0IsUUFBUSxFQUFFLFFBQVEsRUFBbUIsTUFBTSxlQUFlLENBQUM7QUFDdkksT0FBTyxFQUFFLFFBQVEsRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBRTFFLE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd4RSw2Q0FHQzs7O0lBRkMseUNBQWdCOztJQUNoQix3Q0FBcUI7Ozs7O0FBR3ZCLGlDQUtDOzs7SUFKQyxpQ0FBNEI7O0lBQzVCLG1DQUFnQzs7SUFDaEMsOEJBQXVCOztJQUN2Qiw0QkFBZTs7Ozs7QUFPakIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRTNCLFlBQW9CLHlCQUFtRCxFQUNuRCxRQUFpQixFQUNqQixTQUFtQjtRQUZuQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUN2QyxDQUFDOzs7Ozs7Ozs7SUFRTSx5QkFBeUIsQ0FBQyxPQUF5QjtRQUN4RCxDQUFDLG1CQUF5QixPQUFPLEVBQUEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDdEQsQ0FB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QUNoQztJQUNILENBQUM7OztZQTlLRixVQUFVOzs7O1lBM0JVLHdCQUF3QjtZQUdwQyxPQUFPO1lBRlAsUUFBUTs7OztJQTZCSCxxREFBMkQ7O0lBQzNELG9DQUF5Qjs7SUFDekIscUNBQTJCOzs7Ozs7Ozs7QUE0S3pDLE1BQU0sVUFBVSxnQ0FBZ0MsQ0FDNUMsTUFBd0IsRUFBRSx3QkFBa0QsRUFBRSxPQUFnQixFQUFFLFFBQWtCO0lBQ3BILE9BQU8sTUFBTSxJQUFJLElBQUksZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7O0FBRUQsTUFBTSxPQUFPLHdCQUF3QixHQUFhOztJQUVoRCxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztJQUN2RyxVQUFVLEVBQUUsZ0NBQWdDO0NBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgUHJvdmlkZXIsIFNraXBTZWxmLCBPcHRpb25hbCwgRW1iZWRkZWRWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRMb2FkaW5nQ29udGV4dCB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGRMb2FkaW5nQ29tcG9uZW50LCBMb2FkaW5nU3R5bGUgfSBmcm9tICcuLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJVGRMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9sb2FkaW5nLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbExvYWRpbmdPcHRpb25zIGV4dGVuZHMgSVRkTG9hZGluZ0NvbmZpZyB7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgc3R5bGU/OiBMb2FkaW5nU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWRpbmdSZWYge1xuICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG4gIHN1YmplY3Q/OiBTdWJqZWN0PGFueT47XG4gIHRpbWVzPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIE5PVEU6IEBpbnRlcm5hbCB1c2FnZSBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRMb2FkaW5nRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZXMgbWF0ZXJpYWwgYE92ZXJsYXlgIHNlcnZpY2VzIHRvIGNyZWF0ZSBhIERPTSBlbGVtZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRpbmcgY29tcG9uZW50XG4gICAqIGludG8gaXQuIExldmVyYWdpbmcgdGhlIHN0YXRlIGFuZCBjb25maWd1cmF0aW9uIGZyb20gaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlRnVsbFNjcmVlbkNvbXBvbmVudChvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnKTogSUxvYWRpbmdSZWYge1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuRnVsbFNjcmVlbjtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9pbml0aWFsaXplQ29udGV4dCgpO1xuICAgIGxldCBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICkuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgb3ZlcmxheVJlZiA9IHRoaXMuX2NyZWF0ZU92ZXJsYXkoKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYgPSBvdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFRkTG9hZGluZ0NvbXBvbmVudCkpO1xuICAgICAgICB0aGlzLl9tYXBPcHRpb25zKG9wdGlvbnMsIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRJbkFuaW1hdGlvbigpO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IHN1YnM6IFN1YnNjcmlwdGlvbiA9IGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0T3V0QW5pbWF0aW9uKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBzdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIG92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICAgICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2FkaW5nIGNvbXBvbmVudCBkeW5hbWljYWxseSBhbmQgYXR0YWNoZXMgaXQgaW50byB0aGUgZ2l2ZW4gdmlld0NvbnRhaW5lclJlZi5cbiAgICogTGV2ZXJhZ2VzIFRlbXBsYXRlUG9ydGFscyBmcm9tIG1hdGVyaWFsIHRvIGluamVjdCB0aGUgdGVtcGxhdGUgaW5zaWRlIG9mIGl0IHNvIGl0IGZpdHNcbiAgICogcGVyZmVjdGx5IHdoZW4gb3ZlcmxheWluZyBpdC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVPdmVybGF5Q29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KTogSUxvYWRpbmdSZWYge1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuT3ZlcmxheTtcbiAgICBsZXQgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zdGFydE91dEFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsb2FkaW5nUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsb2FkaW5nIGNvbXBvbmVudCBkeW5hbWljYWxseSBhbmQgYXR0YWNoZXMgaXQgaW50byB0aGUgZ2l2ZW4gdmlld0NvbnRhaW5lclJlZi5cbiAgICogUmVwbGFjZXMgdGhlIHRlbXBsYXRlIHdpdGggdGhlIGxvYWRpbmcgY29tcG9uZW50IGRlcGVuZGluZyBpZiBpdCB3YXMgcmVnaXN0ZXJlZCBvciByZXNvbHZlZC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVSZXBsYWNlQ29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LCBjb250ZXh0OiBUZExvYWRpbmdDb250ZXh0KTogSUxvYWRpbmdSZWYge1xuICAgIGxldCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyA/XG4gICAgICBuYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHQgOiB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5Ob25lO1xuICAgIGxldCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIHBhc3NpbmcgY29udGV4dCBzbyB3aGVuIHRoZSB0ZW1wbGF0ZSBpcyBhdHRhY2hlZCwgd2UgY2FuIGtlZXAgdGhlIHJlZmVyZW5jZSBvZiB0aGUgdmFyaWFibGVzXG4gICAgbGV0IGNvbnRlbnRSZWY6IEVtYmVkZGVkVmlld1JlZjxPYmplY3Q+ID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYsIGNvbnRleHQpO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICApLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIC8vIGRldGFjaCB0aGUgY29udGVudCBhbmQgYXR0YWNoIHRoZSBsb2FkZXIgaWYgbG9hZGVyIGlzIHRoZXJlXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuZGV0YWNoKHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihjb250ZW50UmVmKSk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnN0YXJ0SW5BbmltYXRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgc3ViczogU3Vic2NyaXB0aW9uID0gbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc3RhcnRPdXRBbmltYXRpb24oKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAvLyBkZXRhY2ggbG9hZGVyIGFuZCBhdHRhY2ggdGhlIGNvbnRlbnQgaWYgY29udGVudCBpcyB0aGVyZVxuICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGNvbnRlbnRSZWYpO1xuICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuZGV0YWNoKHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0VmlldykpO1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQoY29udGVudFJlZiwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE5lZWQgdG8gY2FsbCBcIm1hcmtGb3JDaGVja1wiIGFuZCBcImRldGVjdENoYW5nZXNcIiBvbiBhdHRhY2hlZCB0ZW1wbGF0ZSwgc28gaXRzIGRldGVjdGVkIGJ5IHBhcmVudCBjb21wb25lbnQgd2hlbiBhdHRhY2hlZFxuICAgICAgICAgICAqIHdpdGggXCJPblB1c2hcIiBjaGFuZ2UgZGV0ZWN0aW9uXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29udGVudFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgY29udGVudFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gb3ZlcmxheSBmb3IgdGhlIGxvYWRpbmcgdXNhZ2UuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIGxldCBzdGF0ZTogT3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKCk7XG4gICAgc3RhdGUuaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgICBzdGF0ZS5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmNlbnRlckhvcml6b250YWxseSgpLmNlbnRlclZlcnRpY2FsbHkoKTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheS5jcmVhdGUoc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnZW5lcmljIGNvbXBvbmVudCBkeW5hbWljYWxseSB3YWl0aW5nIHRvIGJlIGF0dGFjaGVkIHRvIGEgdmlld0NvbnRhaW5lclJlZi5cbiAgICovXG4gIHByaXZhdGUgX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucyk6IElMb2FkaW5nUmVmIHtcbiAgICBsZXQgY29tcFJlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9pbml0aWFsaXplQ29udGV4dCgpO1xuICAgIGNvbXBSZWYuY29tcG9uZW50UmVmID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRkTG9hZGluZ0NvbXBvbmVudCkuY3JlYXRlKHRoaXMuX2luamVjdG9yKTtcbiAgICB0aGlzLl9tYXBPcHRpb25zKG9wdGlvbnMsIGNvbXBSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICByZXR1cm4gY29tcFJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNvbnRleHQgZm9yIGxvYWRpbmcgY29tcG9uZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZUNvbnRleHQoKTogSUxvYWRpbmdSZWYge1xuICAgIGxldCBzdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9ic2VydmFibGU6IHN1YmplY3QuYXNPYnNlcnZhYmxlKCksXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgY29tcG9uZW50UmVmOiB1bmRlZmluZWQsXG4gICAgICB0aW1lczogMCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHMgY29uZmlndXJhdGlvbiB0byB0aGUgbG9hZGluZyBjb21wb25lbnQgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIF9tYXBPcHRpb25zKG9wdGlvbnM6IElJbnRlcm5hbExvYWRpbmdPcHRpb25zLCBpbnN0YW5jZTogVGRMb2FkaW5nQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIGlmIChvcHRpb25zLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdGFuY2UudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5tb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLm1vZGUgPSBvcHRpb25zLm1vZGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPQURJTkdfRkFDVE9SWV9QUk9WSURFUl9GQUNUT1JZKFxuICAgIHBhcmVudDogVGRMb2FkaW5nRmFjdG9yeSwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG92ZXJsYXk6IE92ZXJsYXksIGluamVjdG9yOiBJbmplY3Rvcik6IFRkTG9hZGluZ0ZhY3Rvcnkge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZExvYWRpbmdGYWN0b3J5KGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgb3ZlcmxheSwgaW5qZWN0b3IpO1xufVxuXG5leHBvcnQgY29uc3QgTE9BRElOR19GQUNUT1JZX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRMb2FkaW5nRmFjdG9yeSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkTG9hZGluZ0ZhY3RvcnldLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE92ZXJsYXksIEluamVjdG9yXSxcbiAgdXNlRmFjdG9yeTogTE9BRElOR19GQUNUT1JZX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19