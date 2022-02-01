/**
 * @fileoverview added by tsickle
 * Generated from: services/loading.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, SkipSelf, Optional, } from '@angular/core';
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
        const loadingRef = this._initializeContext();
        /** @type {?} */
        let loading = false;
        /** @type {?} */
        let overlayRef;
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} registered
         * @return {?}
         */
        (registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                overlayRef = this._createOverlay();
                loadingRef.componentRef = overlayRef.attach(new ComponentPortal(TdLoadingComponent));
                this._mapOptions(options, loadingRef.componentRef.instance);
                loadingRef.componentRef.instance.show();
                loadingRef.componentRef.changeDetectorRef.detectChanges();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.hide();
                loadingRef.componentRef.destroy();
                overlayRef.detach();
                overlayRef.dispose();
            }
        }));
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
        const loadingRef = this._createComponent(options);
        /** @type {?} */
        let loading = false;
        loadingRef.componentRef.instance.content = new TemplatePortal(templateRef, viewContainerRef);
        viewContainerRef.clear();
        viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} registered
         * @return {?}
         */
        (registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                loadingRef.componentRef.instance.show();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.hide();
            }
        }));
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
        const nativeElement = (/** @type {?} */ (templateRef.elementRef.nativeElement));
        ((/** @type {?} */ (options))).height = nativeElement.nextElementSibling
            ? nativeElement.nextElementSibling.scrollHeight
            : undefined;
        ((/** @type {?} */ (options))).style = LoadingStyle.None;
        /** @type {?} */
        const loadingRef = this._createComponent(options);
        /** @type {?} */
        let loading = false;
        // passing context so when the template is attached, we can keep the reference of the variables
        /** @type {?} */
        const contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
        loadingRef.observable.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} registered
         * @return {?}
         */
        (registered) => {
            if (registered > 0 && !loading) {
                loading = true;
                // detach the content and attach the loader if loader is there
                /** @type {?} */
                const index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                if (index < 0) {
                    viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                    viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                }
                loadingRef.componentRef.instance.show();
            }
            else if (registered <= 0 && loading) {
                loading = false;
                loadingRef.componentRef.instance.hide();
                // detach loader and attach the content if content is there
                /** @type {?} */
                const index = viewContainerRef.indexOf(contentRef);
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
            }
        }));
        return loadingRef;
    }
    /**
     * Creates a fullscreen overlay for the loading usage.
     * @private
     * @return {?}
     */
    _createOverlay() {
        /** @type {?} */
        const state = new OverlayConfig();
        state.hasBackdrop = false;
        state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
        return this._overlay.create(state);
    }
    /**
     * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
     * @private
     * @param {?} options
     * @return {?}
     */
    _createComponent(options) {
        /** @type {?} */
        const compRef = this._initializeContext();
        compRef.componentRef = this._componentFactoryResolver
            .resolveComponentFactory(TdLoadingComponent)
            .create(this._injector);
        this._mapOptions(options, compRef.componentRef.instance);
        return compRef;
    }
    /**
     * Initialize context for loading component.
     * @private
     * @return {?}
     */
    _initializeContext() {
        /** @type {?} */
        const subject = new Subject();
        return {
            observable: subject.asObservable(),
            subject,
            componentRef: undefined,
            times: 0,
        };
    }
    /**
     * Maps configuration to the loading component instance.
     * @private
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
    /**
     * @type {?}
     * @private
     */
    TdLoadingFactory.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    TdLoadingFactory.prototype._overlay;
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2xvYWRpbmcvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9sb2FkaW5nLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHdCQUF3QixFQUd4QixRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQStDLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd4RSw2Q0FHQzs7O0lBRkMseUNBQWdCOztJQUNoQix3Q0FBcUI7Ozs7O0FBR3ZCLGlDQUtDOzs7SUFKQyxpQ0FBNEI7O0lBQzVCLG1DQUFnQzs7SUFDaEMsOEJBQXVCOztJQUN2Qiw0QkFBZTs7Ozs7QUFPakIsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQzNCLFlBQ1UseUJBQW1ELEVBQ25ELFFBQWlCLEVBQ2pCLFNBQW1CO1FBRm5CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQzFCLENBQUM7Ozs7Ozs7OztJQVFHLHlCQUF5QixDQUFDLE9BQXlCO1FBQ3hELENBQUMsbUJBQXlCLE9BQU8sRUFBQSxDQUFDLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FB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QUF3QixFQUN4Qix3QkFBa0QsRUFDbEQsT0FBZ0IsRUFDaEIsUUFBa0I7SUFFbEIsT0FBTyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDckYsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sd0JBQXdCLEdBQWE7O0lBRWhELE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSx3QkFBd0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3ZHLFVBQVUsRUFBRSxnQ0FBZ0M7Q0FDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBQcm92aWRlcixcbiAgU2tpcFNlbGYsXG4gIE9wdGlvbmFsLFxuICBFbWJlZGRlZFZpZXdSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsLCBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlDb25maWcsIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBUZExvYWRpbmdDb250ZXh0IH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZExvYWRpbmdDb21wb25lbnQsIExvYWRpbmdTdHlsZSB9IGZyb20gJy4uL2xvYWRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IElUZExvYWRpbmdDb25maWcgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUludGVybmFsTG9hZGluZ09wdGlvbnMgZXh0ZW5kcyBJVGRMb2FkaW5nQ29uZmlnIHtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBzdHlsZT86IExvYWRpbmdTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTG9hZGluZ1JlZiB7XG4gIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcbiAgc3ViamVjdD86IFN1YmplY3Q8YW55PjtcbiAgdGltZXM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogTk9URTogQGludGVybmFsIHVzYWdlIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZExvYWRpbmdGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICkge31cblxuICAvKipcbiAgICogVXNlcyBtYXRlcmlhbCBgT3ZlcmxheWAgc2VydmljZXMgdG8gY3JlYXRlIGEgRE9NIGVsZW1lbnQgYW5kIGF0dGFjaCB0aGUgbG9hZGluZyBjb21wb25lbnRcbiAgICogaW50byBpdC4gTGV2ZXJhZ2luZyB0aGUgc3RhdGUgYW5kIGNvbmZpZ3VyYXRpb24gZnJvbSBpdC5cbiAgICpcbiAgICogU2F2ZXMgYSByZWZlcmVuY2UgaW4gY29udGV4dCB0byBiZSBjYWxsZWQgd2hlbiByZWdpc3RlcmluZy9yZXNvbHZpbmcgdGhlIGxvYWRpbmcgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVGdWxsU2NyZWVuQ29tcG9uZW50KG9wdGlvbnM6IElUZExvYWRpbmdDb25maWcpOiBJTG9hZGluZ1JlZiB7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5zdHlsZSA9IExvYWRpbmdTdHlsZS5GdWxsU2NyZWVuO1xuICAgIGNvbnN0IGxvYWRpbmdSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIG92ZXJsYXlSZWYgPSB0aGlzLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmID0gb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChUZExvYWRpbmdDb21wb25lbnQpKTtcbiAgICAgICAgdGhpcy5fbWFwT3B0aW9ucyhvcHRpb25zLCBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnNob3coKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkIDw9IDAgJiYgbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICBvdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICBvdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbG9hZGluZ1JlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbG9hZGluZyBjb21wb25lbnQgZHluYW1pY2FsbHkgYW5kIGF0dGFjaGVzIGl0IGludG8gdGhlIGdpdmVuIHZpZXdDb250YWluZXJSZWYuXG4gICAqIExldmVyYWdlcyBUZW1wbGF0ZVBvcnRhbHMgZnJvbSBtYXRlcmlhbCB0byBpbmplY3QgdGhlIHRlbXBsYXRlIGluc2lkZSBvZiBpdCBzbyBpdCBmaXRzXG4gICAqIHBlcmZlY3RseSB3aGVuIG92ZXJsYXlpbmcgaXQuXG4gICAqXG4gICAqIFNhdmVzIGEgcmVmZXJlbmNlIGluIGNvbnRleHQgdG8gYmUgY2FsbGVkIHdoZW4gcmVnaXN0ZXJpbmcvcmVzb2x2aW5nIHRoZSBsb2FkaW5nIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlT3ZlcmxheUNvbXBvbmVudChcbiAgICBvcHRpb25zOiBJVGRMb2FkaW5nQ29uZmlnLFxuICAgIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPG9iamVjdD4sXG4gICk6IElMb2FkaW5nUmVmIHtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLmhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAoPElJbnRlcm5hbExvYWRpbmdPcHRpb25zPm9wdGlvbnMpLnN0eWxlID0gTG9hZGluZ1N0eWxlLk92ZXJsYXk7XG4gICAgY29uc3QgbG9hZGluZ1JlZjogSUxvYWRpbmdSZWYgPSB0aGlzLl9jcmVhdGVDb21wb25lbnQob3B0aW9ucyk7XG4gICAgbGV0IGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZW50ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgICB2aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQobG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaG9zdFZpZXcsIDApO1xuICAgIGxvYWRpbmdSZWYub2JzZXJ2YWJsZS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgocmVnaXN0ZXJlZDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAocmVnaXN0ZXJlZCA+IDAgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IHRydWU7XG4gICAgICAgIGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmluc3RhbmNlLnNob3coKTtcbiAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZCA8PSAwICYmIGxvYWRpbmcpIHtcbiAgICAgICAgbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvYWRpbmcgY29tcG9uZW50IGR5bmFtaWNhbGx5IGFuZCBhdHRhY2hlcyBpdCBpbnRvIHRoZSBnaXZlbiB2aWV3Q29udGFpbmVyUmVmLlxuICAgKiBSZXBsYWNlcyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgbG9hZGluZyBjb21wb25lbnQgZGVwZW5kaW5nIGlmIGl0IHdhcyByZWdpc3RlcmVkIG9yIHJlc29sdmVkLlxuICAgKlxuICAgKiBTYXZlcyBhIHJlZmVyZW5jZSBpbiBjb250ZXh0IHRvIGJlIGNhbGxlZCB3aGVuIHJlZ2lzdGVyaW5nL3Jlc29sdmluZyB0aGUgbG9hZGluZyBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVJlcGxhY2VDb21wb25lbnQoXG4gICAgb3B0aW9uczogSVRkTG9hZGluZ0NvbmZpZyxcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxvYmplY3Q+LFxuICAgIGNvbnRleHQ6IFRkTG9hZGluZ0NvbnRleHQsXG4gICk6IElMb2FkaW5nUmVmIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgKDxJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucz5vcHRpb25zKS5oZWlnaHQgPSBuYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgPyBuYXRpdmVFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zY3JvbGxIZWlnaHRcbiAgICAgIDogdW5kZWZpbmVkO1xuICAgICg8SUludGVybmFsTG9hZGluZ09wdGlvbnM+b3B0aW9ucykuc3R5bGUgPSBMb2FkaW5nU3R5bGUuTm9uZTtcbiAgICBjb25zdCBsb2FkaW5nUmVmOiBJTG9hZGluZ1JlZiA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChvcHRpb25zKTtcbiAgICBsZXQgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIHBhc3NpbmcgY29udGV4dCBzbyB3aGVuIHRoZSB0ZW1wbGF0ZSBpcyBhdHRhY2hlZCwgd2UgY2FuIGtlZXAgdGhlIHJlZmVyZW5jZSBvZiB0aGUgdmFyaWFibGVzXG4gICAgY29uc3QgY29udGVudFJlZjogRW1iZWRkZWRWaWV3UmVmPG9iamVjdD4gPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZiwgY29udGV4dCk7XG4gICAgbG9hZGluZ1JlZi5vYnNlcnZhYmxlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKChyZWdpc3RlcmVkOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChyZWdpc3RlcmVkID4gMCAmJiAhbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgLy8gZGV0YWNoIHRoZSBjb250ZW50IGFuZCBhdHRhY2ggdGhlIGxvYWRlciBpZiBsb2FkZXIgaXMgdGhlcmVcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHZpZXdDb250YWluZXJSZWYuaW5kZXhPZihsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmLmRldGFjaCh2aWV3Q29udGFpbmVyUmVmLmluZGV4T2YoY29udGVudFJlZikpO1xuICAgICAgICAgIHZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkaW5nUmVmLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5zaG93KCk7XG4gICAgICB9IGVsc2UgaWYgKHJlZ2lzdGVyZWQgPD0gMCAmJiBsb2FkaW5nKSB7XG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbG9hZGluZ1JlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgICAvLyBkZXRhY2ggbG9hZGVyIGFuZCBhdHRhY2ggdGhlIGNvbnRlbnQgaWYgY29udGVudCBpcyB0aGVyZVxuICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGNvbnRlbnRSZWYpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5kZXRhY2godmlld0NvbnRhaW5lclJlZi5pbmRleE9mKGxvYWRpbmdSZWYuY29tcG9uZW50UmVmLmhvc3RWaWV3KSk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lclJlZi5pbnNlcnQoY29udGVudFJlZiwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lZWQgdG8gY2FsbCBcIm1hcmtGb3JDaGVja1wiIGFuZCBcImRldGVjdENoYW5nZXNcIiBvbiBhdHRhY2hlZCB0ZW1wbGF0ZSwgc28gaXRzIGRldGVjdGVkIGJ5IHBhcmVudCBjb21wb25lbnQgd2hlbiBhdHRhY2hlZFxuICAgICAgICAgKiB3aXRoIFwiT25QdXNoXCIgY2hhbmdlIGRldGVjdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGNvbnRlbnRSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvYWRpbmdSZWY7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bGxzY3JlZW4gb3ZlcmxheSBmb3IgdGhlIGxvYWRpbmcgdXNhZ2UuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xuICAgIGNvbnN0IHN0YXRlOiBPdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoKTtcbiAgICBzdGF0ZS5oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICAgIHN0YXRlLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpO1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5LmNyZWF0ZShzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdlbmVyaWMgY29tcG9uZW50IGR5bmFtaWNhbGx5IHdhaXRpbmcgdG8gYmUgYXR0YWNoZWQgdG8gYSB2aWV3Q29udGFpbmVyUmVmLlxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlQ29tcG9uZW50KG9wdGlvbnM6IElJbnRlcm5hbExvYWRpbmdPcHRpb25zKTogSUxvYWRpbmdSZWYge1xuICAgIGNvbnN0IGNvbXBSZWY6IElMb2FkaW5nUmVmID0gdGhpcy5faW5pdGlhbGl6ZUNvbnRleHQoKTtcbiAgICBjb21wUmVmLmNvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFRkTG9hZGluZ0NvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xuICAgIHRoaXMuX21hcE9wdGlvbnMob3B0aW9ucywgY29tcFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIHJldHVybiBjb21wUmVmO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY29udGV4dCBmb3IgbG9hZGluZyBjb21wb25lbnQuXG4gICAqL1xuICBwcml2YXRlIF9pbml0aWFsaXplQ29udGV4dCgpOiBJTG9hZGluZ1JlZiB7XG4gICAgY29uc3Qgc3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHJldHVybiB7XG4gICAgICBvYnNlcnZhYmxlOiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgc3ViamVjdCxcbiAgICAgIGNvbXBvbmVudFJlZjogdW5kZWZpbmVkLFxuICAgICAgdGltZXM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIGNvbmZpZ3VyYXRpb24gdG8gdGhlIGxvYWRpbmcgY29tcG9uZW50IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfbWFwT3B0aW9ucyhvcHRpb25zOiBJSW50ZXJuYWxMb2FkaW5nT3B0aW9ucywgaW5zdGFuY2U6IFRkTG9hZGluZ0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICBpZiAob3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3RhbmNlLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5tb2RlID0gb3B0aW9ucy5tb2RlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0YW5jZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBUZExvYWRpbmdGYWN0b3J5LFxuICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgb3ZlcmxheTogT3ZlcmxheSxcbiAgaW5qZWN0b3I6IEluamVjdG9yLFxuKTogVGRMb2FkaW5nRmFjdG9yeSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkTG9hZGluZ0ZhY3RvcnkoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBvdmVybGF5LCBpbmplY3Rvcik7XG59XG5cbmV4cG9ydCBjb25zdCBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZExvYWRpbmdGYWN0b3J5LFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRMb2FkaW5nRmFjdG9yeV0sIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT3ZlcmxheSwgSW5qZWN0b3JdLFxuICB1c2VGYWN0b3J5OiBMT0FESU5HX0ZBQ1RPUllfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iXX0=