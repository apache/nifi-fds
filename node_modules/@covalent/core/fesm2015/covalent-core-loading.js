import { Component, ElementRef, ChangeDetectorRef, Injectable, ComponentFactoryResolver, Injector, Optional, SkipSelf, Directive, ViewContainerRef, TemplateRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { tdFadeInOutAnimation } from '@covalent/core/common';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const LoadingType = {
    Circular: "circular",
    Linear: "linear",
};
/** @enum {string} */
const LoadingMode = {
    Determinate: "determinate",
    Indeterminate: "indeterminate",
};
/** @enum {string} */
const LoadingStrategy = {
    Overlay: "overlay",
    Replace: "replace",
};
/** @enum {string} */
const LoadingStyle = {
    FullScreen: "fullscreen",
    Overlay: "overlay",
    None: "none",
};
/** @type {?} */
const TD_CIRCLE_DIAMETER = 100;
class TdLoadingComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._mode = LoadingMode.Indeterminate;
        this._defaultMode = LoadingMode.Indeterminate;
        this._value = 0;
        this._circleDiameter = TD_CIRCLE_DIAMETER;
        /**
         * Flag for animation
         */
        this.animation = false;
        this.style = LoadingStyle.None;
        /**
         * type: LoadingType
         * Sets type of [TdLoadingComponent] rendered.
         */
        this.type = LoadingType.Circular;
        /**
         * color: primary' | 'accent' | 'warn'
         * Sets theme color of [TdLoadingComponent] rendered.
         */
        this.color = 'primary';
    }
    /**
     * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        this._defaultMode = mode;
    }
    /**
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // When overlay is used and the host width has a value greater than 1px
        // set the circle diameter when possible incase the loading component was rendered in a hidden state
        if (this.isOverlay() && this._hostHeight() > 1 && this.animation) {
            this._setCircleDiameter();
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    getHeight() {
        // Ignore height if style is `overlay` or `fullscreen`.
        // Add height if child elements have a height and style is `none`, else return default height.
        if (this.isOverlay() || this.isFullScreen()) {
            return undefined;
        }
        else {
            return this.height ? `${this.height}px` : '150px';
        }
    }
    /**
     * @return {?}
     */
    getCircleDiameter() {
        return this._circleDiameter;
    }
    /**
     * @return {?}
     */
    getCircleStrokeWidth() {
        // we calculate the stroke width by setting it as 10% of its diameter
        /** @type {?} */
        const strokeWidth = this.getCircleDiameter() / 10;
        return Math.abs(strokeWidth);
    }
    /**
     * @return {?}
     */
    isCircular() {
        return this.type === LoadingType.Circular;
    }
    /**
     * @return {?}
     */
    isLinear() {
        return this.type === LoadingType.Linear;
    }
    /**
     * @return {?}
     */
    isFullScreen() {
        return this.style === LoadingStyle.FullScreen;
    }
    /**
     * @return {?}
     */
    isOverlay() {
        return this.style === LoadingStyle.Overlay;
    }
    /**
     * Starts in animation and returns an observable for completition event.
     * @return {?}
     */
    show() {
        /* need to switch back to the selected mode, so we have saved it in another variable
         *  and then recover it. (issue with protractor)
         */
        this._mode = this._defaultMode;
        // Set values before the animations starts
        this._setCircleDiameter();
        // Check for changes for `OnPush` change detection
        this.animation = true;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Starts out animation and returns an observable for completition event.
     * @return {?}
     */
    hide() {
        this.animation = false;
        /* need to switch back and forth from determinate/indeterminate so the setInterval()
         * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
         */
        this._mode = LoadingMode.Determinate;
        // Check for changes for `OnPush` change detection
        /* little hack to reset the loader value and animation before removing it from DOM
         * else, the loader will appear with prev value when its registered again
         * and will do an animation going prev value to 0.
         */
        this.value = 0;
        // Check for changes for `OnPush` change detection
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Calculate the proper diameter for the circle and set it
     * @private
     * @return {?}
     */
    _setCircleDiameter() {
        // we set a default diameter of 100 since this is the default in material
        /** @type {?} */
        let diameter = TD_CIRCLE_DIAMETER;
        // if height is provided, then we take that as diameter
        if (this.height) {
            diameter = this.height;
            // else if its not provided, then we take the host height
        }
        else if (this.height === undefined) {
            diameter = this._hostHeight();
        }
        // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
        if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
            this._circleDiameter = Math.floor(diameter);
        }
        else {
            this._circleDiameter = TD_CIRCLE_DIAMETER;
        }
    }
    /**
     * Returns the host height of the loading component
     * @private
     * @return {?}
     */
    _hostHeight() {
        if ((/** @type {?} */ (this._elementRef.nativeElement))) {
            return ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height;
        }
        return 0;
    }
}
TdLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-loading',
                template: "<div\n  class=\"td-loading-wrapper\"\n  [style.min-height]=\"getHeight()\"\n  [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n  [class.td-overlay]=\"isOverlay() || isFullScreen()\"\n  [class.td-fullscreen]=\"isFullScreen()\"\n>\n  <div [@tdFadeInOut]=\"animation\" [style.min-height]=\"getHeight()\" class=\"td-loading\">\n    <mat-progress-spinner\n      *ngIf=\"isCircular()\"\n      [mode]=\"mode\"\n      [value]=\"value\"\n      [color]=\"color\"\n      [diameter]=\"getCircleDiameter()\"\n      [strokeWidth]=\"getCircleStrokeWidth()\"\n    ></mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" [mode]=\"mode\" [value]=\"value\" [color]=\"color\"></mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>\n",
                animations: [tdFadeInOutAnimation],
                styles: [".td-loading-wrapper{display:block;position:relative}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-ms-flex:1;-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:center;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex:1;flex-direction:row;justify-content:center;max-width:100%}.td-loading-wrapper.td-overlay .td-loading{left:0;margin:0;position:absolute;right:0;top:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{left:0;position:absolute;right:0;top:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
            }] }
];
/** @nocollapse */
TdLoadingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._defaultMode;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._circleDiameter;
    /**
     * Flag for animation
     * @type {?}
     */
    TdLoadingComponent.prototype.animation;
    /**
     * Content injected into loading component.
     * @type {?}
     */
    TdLoadingComponent.prototype.content;
    /** @type {?} */
    TdLoadingComponent.prototype.style;
    /**
     * height: number
     * Sets height of [TdLoadingComponent].
     * @type {?}
     */
    TdLoadingComponent.prototype.height;
    /**
     * type: LoadingType
     * Sets type of [TdLoadingComponent] rendered.
     * @type {?}
     */
    TdLoadingComponent.prototype.type;
    /**
     * color: primary' | 'accent' | 'warn'
     * Sets theme color of [TdLoadingComponent] rendered.
     * @type {?}
     */
    TdLoadingComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdLoadingComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: services/loading.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IInternalLoadingOptions() { }
if (false) {
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.height;
    /** @type {?|undefined} */
    IInternalLoadingOptions.prototype.style;
}
/**
 * @record
 */
function ILoadingRef() { }
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
class TdLoadingFactory {
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
function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay, injector) {
    return parent || new TdLoadingFactory(componentFactoryResolver, overlay, injector);
}
/** @type {?} */
const LOADING_FACTORY_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingFactory,
    deps: [[new Optional(), new SkipSelf(), TdLoadingFactory], ComponentFactoryResolver, Overlay, Injector],
    useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * Generated from: services/loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdLoadingConfig() { }
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
class TdLoadingConfig {
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
function ITdLoadingDirectiveConfig() { }
if (false) {
    /** @type {?|undefined} */
    ITdLoadingDirectiveConfig.prototype.strategy;
}
class TdLoadingDirectiveConfig extends TdLoadingConfig {
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
class TdLoadingService {
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
function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
    return parent || new TdLoadingService(loadingFactory);
}
/** @type {?} */
const LOADING_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdLoadingService,
    deps: [[new Optional(), new SkipSelf(), TdLoadingService], TdLoadingFactory],
    useFactory: LOADING_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * Generated from: directives/loading.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Context class for variable reference
 */
class TdLoadingContext {
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
class TdLoadingDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: loading.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_LOADING = [TdLoadingComponent, TdLoadingDirective];
/** @type {?} */
const TD_LOADING_ENTRY_COMPONENTS = [TdLoadingComponent];
class CovalentLoadingModule {
}
CovalentLoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatProgressBarModule, MatProgressSpinnerModule, OverlayModule, PortalModule],
                declarations: [TD_LOADING],
                exports: [TD_LOADING],
                providers: [LOADING_FACTORY_PROVIDER, LOADING_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-core-loading.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentLoadingModule, LOADING_FACTORY_PROVIDER, LOADING_FACTORY_PROVIDER_FACTORY, LOADING_PROVIDER, LOADING_PROVIDER_FACTORY, LoadingMode, LoadingStrategy, LoadingStyle, LoadingType, TD_CIRCLE_DIAMETER, TdLoadingComponent, TdLoadingConfig, TdLoadingContext, TdLoadingDirective, TdLoadingDirectiveConfig, TdLoadingFactory, TdLoadingService };
//# sourceMappingURL=covalent-core-loading.js.map
