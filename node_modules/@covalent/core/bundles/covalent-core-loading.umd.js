(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@covalent/core/common'), require('@angular/cdk/portal'), require('@angular/cdk/overlay'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/loading', ['exports', '@angular/common', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@covalent/core/common', '@angular/cdk/portal', '@angular/cdk/overlay', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.loading = {}),global.ng.common,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.covalent.core.common,global.ng.cdk.portal,global.ng.cdk.overlay,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,common,progressBar,progressSpinner,common$1,portal,overlay,rxjs,operators,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var LoadingType = {
        Circular: 'circular',
        Linear: 'linear',
    };
    /** @enum {string} */
    var LoadingMode = {
        Determinate: 'determinate',
        Indeterminate: 'indeterminate',
    };
    /** @enum {string} */
    var LoadingStrategy = {
        Overlay: 'overlay',
        Replace: 'replace',
    };
    /** @enum {string} */
    var LoadingStyle = {
        FullScreen: 'fullscreen',
        Overlay: 'overlay',
        None: 'none',
    };
    /** @type {?} */
    var TD_CIRCLE_DIAMETER = 100;
    var TdLoadingComponent = /** @class */ (function () {
        function TdLoadingComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._animationIn = new rxjs.Subject();
            this._animationOut = new rxjs.Subject();
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
        Object.defineProperty(TdLoadingComponent.prototype, "mode", {
            get: /**
             * @return {?}
             */ function () {
                return this._mode;
            },
            /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             */
            set: /**
             * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
             * @param {?} mode
             * @return {?}
             */ function (mode) {
                this._defaultMode = mode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdLoadingComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             */
            set: /**
             * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                // When overlay is used and the host width has a value greater than 1px
                // set the circle diameter when possible incase the loading component was rendered in a hidden state
                if (this.isOverlay() && this._hostHeight() > 1) {
                    if (this.animation) {
                        this._setCircleDiameter();
                        this._changeDetectorRef.markForCheck();
                    }
                }
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getHeight = /**
         * @return {?}
         */
            function () {
                // Ignore height if style is `overlay` or `fullscreen`.
                // Add height if child elements have a height and style is `none`, else return default height.
                if (this.isOverlay() || this.isFullScreen()) {
                    return undefined;
                }
                else {
                    return this.height ? this.height + "px" : '150px';
                }
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleDiameter = /**
         * @return {?}
         */
            function () {
                return this._circleDiameter;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.getCircleStrokeWidth = /**
         * @return {?}
         */
            function () {
                // we calculate the stroke width by setting it as 10% of its diameter
                /** @type {?} */
                var strokeWidth = this.getCircleDiameter() / 10;
                return Math.abs(strokeWidth);
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isCircular = /**
         * @return {?}
         */
            function () {
                return this.type === LoadingType.Circular;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isLinear = /**
         * @return {?}
         */
            function () {
                return this.type === LoadingType.Linear;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isFullScreen = /**
         * @return {?}
         */
            function () {
                return this.style === LoadingStyle.FullScreen;
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.isOverlay = /**
         * @return {?}
         */
            function () {
                return this.style === LoadingStyle.Overlay;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TdLoadingComponent.prototype.animationComplete = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // Check to see if its "in" or "out" animation to execute the proper callback
                if (!event.fromState) {
                    this.inAnimationCompleted();
                }
                else {
                    this.outAnimationCompleted();
                }
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.inAnimationCompleted = /**
         * @return {?}
         */
            function () {
                this._animationIn.next(undefined);
            };
        /**
         * @return {?}
         */
        TdLoadingComponent.prototype.outAnimationCompleted = /**
         * @return {?}
         */
            function () {
                /* little hack to reset the loader value and animation before removing it from DOM
                 * else, the loader will appear with prev value when its registered again
                 * and will do an animation going prev value to 0.
                 */
                this.value = 0;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
                this._animationOut.next(undefined);
            };
        /**
         * Starts in animation and returns an observable for completition event.
         */
        /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.startInAnimation = /**
         * Starts in animation and returns an observable for completition event.
         * @return {?}
         */
            function () {
                /* need to switch back to the selected mode, so we have saved it in another variable
                *  and then recover it. (issue with protractor)
                */
                this._mode = this._defaultMode;
                // Set values before the animations starts
                this._setCircleDiameter();
                // Check for changes for `OnPush` change detection
                this.animation = true;
                this._changeDetectorRef.markForCheck();
                return this._animationIn.asObservable();
            };
        /**
         * Starts out animation and returns an observable for completition event.
         */
        /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
        TdLoadingComponent.prototype.startOutAnimation = /**
         * Starts out animation and returns an observable for completition event.
         * @return {?}
         */
            function () {
                this.animation = false;
                /* need to switch back and forth from determinate/indeterminate so the setInterval()
                * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
                */
                this._mode = LoadingMode.Determinate;
                // Check for changes for `OnPush` change detection
                this._changeDetectorRef.markForCheck();
                return this._animationOut.asObservable();
            };
        /**
         * Calculate the proper diameter for the circle and set it
         */
        /**
         * Calculate the proper diameter for the circle and set it
         * @return {?}
         */
        TdLoadingComponent.prototype._setCircleDiameter = /**
         * Calculate the proper diameter for the circle and set it
         * @return {?}
         */
            function () {
                // we set a default diameter of 100 since this is the default in material
                /** @type {?} */
                var diameter = TD_CIRCLE_DIAMETER;
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
            };
        /**
         * Returns the host height of the loading component
         */
        /**
         * Returns the host height of the loading component
         * @return {?}
         */
        TdLoadingComponent.prototype._hostHeight = /**
         * Returns the host height of the loading component
         * @return {?}
         */
            function () {
                if (( /** @type {?} */(this._elementRef.nativeElement))) {
                    return (( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height;
                }
                return 0;
            };
        TdLoadingComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-loading',
                        template: "<div class=\"td-loading-wrapper\"\n    [style.min-height]=\"getHeight()\"\n    [class.td-overlay-circular]=\"(isOverlay() || isFullScreen()) && !isLinear()\"\n    [class.td-overlay]=\"isOverlay() || isFullScreen()\" \n    [class.td-fullscreen]=\"isFullScreen()\">\n  <div [@tdFadeInOut]=\"animation\"\n     (@tdFadeInOut.done)=\"animationComplete($event)\"\n     [style.min-height]=\"getHeight()\"\n     class=\"td-loading\">\n    <mat-progress-spinner *ngIf=\"isCircular()\" \n                        [mode]=\"mode\"\n                        [value]=\"value\" \n                        [color]=\"color\" \n                        [diameter]=\"getCircleDiameter()\"\n                        [strokeWidth]=\"getCircleStrokeWidth()\">\n    </mat-progress-spinner>\n    <mat-progress-bar *ngIf=\"isLinear()\" \n                     [mode]=\"mode\"\n                     [value]=\"value\"\n                     [color]=\"color\">\n    </mat-progress-bar>\n  </div>\n  <ng-template [cdkPortalOutlet]=\"content\"></ng-template>\n</div>",
                        animations: [
                            common$1.tdFadeInOutAnimation,
                        ],
                        styles: [".td-loading-wrapper{position:relative;display:block}.td-loading-wrapper.td-fullscreen{position:inherit}.td-loading-wrapper .td-loading{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.td-loading-wrapper.td-overlay .td-loading{position:absolute;margin:0;top:0;left:0;right:0;z-index:1000}.td-loading-wrapper.td-overlay .td-loading mat-progress-bar{position:absolute;top:0;left:0;right:0}.td-loading-wrapper.td-overlay-circular .td-loading{bottom:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdLoadingComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        return TdLoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * NOTE: \@internal usage only.
     */
    var TdLoadingFactory = /** @class */ (function () {
        function TdLoadingFactory(_componentFactoryResolver, _overlay, _injector) {
            this._componentFactoryResolver = _componentFactoryResolver;
            this._overlay = _overlay;
            this._injector = _injector;
        }
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
        /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype.createFullScreenComponent = /**
         * Uses material `Overlay` services to create a DOM element and attach the loading component
         * into it. Leveraging the state and configuration from it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                (( /** @type {?} */(options))).height = undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.FullScreen;
                /** @type {?} */
                var loadingRef = this._initializeContext();
                /** @type {?} */
                var loading = false;
                /** @type {?} */
                var overlayRef;
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
                    if (registered > 0 && !loading) {
                        loading = true;
                        overlayRef = _this._createOverlay();
                        loadingRef.componentRef = overlayRef.attach(new portal.ComponentPortal(TdLoadingComponent));
                        _this._mapOptions(options, loadingRef.componentRef.instance);
                        loadingRef.componentRef.instance.startInAnimation();
                        loadingRef.componentRef.changeDetectorRef.detectChanges();
                    }
                    else if (registered <= 0 && loading) {
                        loading = false;
                        /** @type {?} */
                        var subs_1 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                            subs_1.unsubscribe();
                            loadingRef.componentRef.destroy();
                            overlayRef.detach();
                            overlayRef.dispose();
                        });
                    }
                });
                return loadingRef;
            };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Leverages TemplatePortals from material to inject the template inside of it so it fits
         * perfectly when overlaying it.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
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
        TdLoadingFactory.prototype.createOverlayComponent = /**
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
            function (options, viewContainerRef, templateRef) {
                (( /** @type {?} */(options))).height = undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.Overlay;
                /** @type {?} */
                var loadingRef = this._createComponent(options);
                /** @type {?} */
                var loading = false;
                loadingRef.componentRef.instance.content = new portal.TemplatePortal(templateRef, viewContainerRef);
                viewContainerRef.clear();
                viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
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
            };
        /**
         * Creates a loading component dynamically and attaches it into the given viewContainerRef.
         * Replaces the template with the loading component depending if it was registered or resolved.
         *
         * Saves a reference in context to be called when registering/resolving the loading element.
         */
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
        TdLoadingFactory.prototype.createReplaceComponent = /**
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
            function (options, viewContainerRef, templateRef, context) {
                /** @type {?} */
                var nativeElement = ( /** @type {?} */(templateRef.elementRef.nativeElement));
                (( /** @type {?} */(options))).height = nativeElement.nextElementSibling ?
                    nativeElement.nextElementSibling.scrollHeight : undefined;
                (( /** @type {?} */(options))).style = LoadingStyle.None;
                /** @type {?} */
                var loadingRef = this._createComponent(options);
                /** @type {?} */
                var loading = false;
                // passing context so when the template is attached, we can keep the reference of the variables
                /** @type {?} */
                var contentRef = viewContainerRef.createEmbeddedView(templateRef, context);
                loadingRef.observable.pipe(operators.distinctUntilChanged()).subscribe(function (registered) {
                    if (registered > 0 && !loading) {
                        loading = true;
                        // detach the content and attach the loader if loader is there
                        /** @type {?} */
                        var index = viewContainerRef.indexOf(loadingRef.componentRef.hostView);
                        if (index < 0) {
                            viewContainerRef.detach(viewContainerRef.indexOf(contentRef));
                            viewContainerRef.insert(loadingRef.componentRef.hostView, 0);
                        }
                        loadingRef.componentRef.instance.startInAnimation();
                    }
                    else if (registered <= 0 && loading) {
                        loading = false;
                        /** @type {?} */
                        var subs_2 = loadingRef.componentRef.instance.startOutAnimation().subscribe(function () {
                            subs_2.unsubscribe();
                            // detach loader and attach the content if content is there
                            /** @type {?} */
                            var index = viewContainerRef.indexOf(contentRef);
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
            };
        /**
         * Creates a fullscreen overlay for the loading usage.
         */
        /**
         * Creates a fullscreen overlay for the loading usage.
         * @return {?}
         */
        TdLoadingFactory.prototype._createOverlay = /**
         * Creates a fullscreen overlay for the loading usage.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var state = new overlay.OverlayConfig();
                state.hasBackdrop = false;
                state.positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
                return this._overlay.create(state);
            };
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         */
        /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @param {?} options
         * @return {?}
         */
        TdLoadingFactory.prototype._createComponent = /**
         * Creates a generic component dynamically waiting to be attached to a viewContainerRef.
         * @param {?} options
         * @return {?}
         */
            function (options) {
                /** @type {?} */
                var compRef = this._initializeContext();
                compRef.componentRef = this._componentFactoryResolver
                    .resolveComponentFactory(TdLoadingComponent).create(this._injector);
                this._mapOptions(options, compRef.componentRef.instance);
                return compRef;
            };
        /**
         * Initialize context for loading component.
         */
        /**
         * Initialize context for loading component.
         * @return {?}
         */
        TdLoadingFactory.prototype._initializeContext = /**
         * Initialize context for loading component.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var subject = new rxjs.Subject();
                return {
                    observable: subject.asObservable(),
                    subject: subject,
                    componentRef: undefined,
                    times: 0,
                };
            };
        /**
         * Maps configuration to the loading component instance.
         */
        /**
         * Maps configuration to the loading component instance.
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
        TdLoadingFactory.prototype._mapOptions = /**
         * Maps configuration to the loading component instance.
         * @param {?} options
         * @param {?} instance
         * @return {?}
         */
            function (options, instance) {
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
            };
        TdLoadingFactory.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdLoadingFactory.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: overlay.Overlay },
                { type: core.Injector }
            ];
        };
        return TdLoadingFactory;
    }());
    /**
     * @param {?} parent
     * @param {?} componentFactoryResolver
     * @param {?} overlay
     * @param {?} injector
     * @return {?}
     */
    function LOADING_FACTORY_PROVIDER_FACTORY(parent, componentFactoryResolver, overlay$$1, injector) {
        return parent || new TdLoadingFactory(componentFactoryResolver, overlay$$1, injector);
    }
    /** @type {?} */
    var LOADING_FACTORY_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingFactory,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingFactory], core.ComponentFactoryResolver, overlay.Overlay, core.Injector],
        useFactory: LOADING_FACTORY_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdLoadingConfig = /** @class */ (function () {
        function TdLoadingConfig(config) {
            this.name = config.name;
            if (!this.name) {
                throw Error('Name is required for [TdLoading] configuration.');
            }
            this.mode = config.mode ? config.mode : LoadingMode.Indeterminate;
            this.type = config.type ? config.type : LoadingType.Circular;
            this.color = config.color ? config.color : 'primary';
        }
        return TdLoadingConfig;
    }());
    var TdLoadingDirectiveConfig = /** @class */ (function (_super) {
        __extends(TdLoadingDirectiveConfig, _super);
        function TdLoadingDirectiveConfig(config) {
            var _this = _super.call(this, config) || this;
            _this.strategy = config.strategy ? config.strategy : LoadingStrategy.Replace;
            return _this;
        }
        return TdLoadingDirectiveConfig;
    }(TdLoadingConfig));
    var TdLoadingService = /** @class */ (function () {
        function TdLoadingService(_loadingFactory) {
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
         * NOTE: @internal usage only.
         */
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
        TdLoadingService.prototype.createComponent = /**
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
            function (config, viewContainerRef, templateRef, context) {
                /** @type {?} */
                var directiveConfig = new TdLoadingDirectiveConfig(config);
                if (this._context[directiveConfig.name]) {
                    throw Error("Name duplication: [TdLoading] directive has a name conflict with " + directiveConfig.name + ".");
                }
                if (directiveConfig.strategy === LoadingStrategy.Overlay) {
                    this._context[directiveConfig.name] = this._loadingFactory.createOverlayComponent(directiveConfig, viewContainerRef, templateRef);
                }
                else {
                    this._context[directiveConfig.name] = this._loadingFactory.createReplaceComponent(directiveConfig, viewContainerRef, templateRef, context);
                }
                return this._context[directiveConfig.name];
            };
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         */
        /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
        TdLoadingService.prototype.create = /**
         * params:
         * - config: ITdLoadingConfig
         *
         * Creates a fullscreen loading mask and attaches it to the DOM with the given configuration.
         * Only displayed when the mask has a request registered on it.
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var fullscreenConfig = new TdLoadingConfig(config);
                this.removeComponent(fullscreenConfig.name);
                this._context[fullscreenConfig.name] = this._loadingFactory.createFullScreenComponent(fullscreenConfig);
            };
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         */
        /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
        TdLoadingService.prototype.removeComponent = /**
         * params:
         * - name: string
         *
         * Removes `loading` component from service context.
         * @param {?} name
         * @return {?}
         */
            function (name) {
                if (this._context[name]) {
                    this._context[name].subject.unsubscribe();
                    if (this._context[name].componentRef) {
                        this._context[name].componentRef.destroy();
                    }
                    this._context[name] = undefined;
                    delete this._context[name];
                }
            };
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
        TdLoadingService.prototype.register = /**
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
            function (name, registers) {
                var _this = this;
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                if (registers === void 0) {
                    registers = 1;
                }
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
                        this._timeouts[name] = setTimeout(function () {
                            _this.register(name, registers);
                        });
                    }
                    else {
                        // if it timeout occured and still doesnt exist, it means the tiemout wasnt needed so we clear it.
                        this._clearTimeout(name);
                    }
                }
                return false;
            };
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
        TdLoadingService.prototype.resolve = /**
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
            function (name, resolves) {
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                if (resolves === void 0) {
                    resolves = 1;
                }
                // clear timeout if the loading component is "resolved" before its "registered"
                this._clearTimeout(name);
                if (this._context[name]) {
                    resolves = resolves < 1 ? 1 : resolves;
                    if (this._context[name].times > 0) {
                        /** @type {?} */
                        var times = this._context[name].times;
                        times -= resolves;
                        this._context[name].times = times < 0 ? 0 : times;
                    }
                    this._context[name].subject.next(this._context[name].times);
                    return true;
                }
                return false;
            };
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
        TdLoadingService.prototype.resolveAll = /**
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
            function (name) {
                if (name === void 0) {
                    name = 'td-loading-main';
                }
                // clear timeout if the loading component is "resolved" before its "registered"
                this._clearTimeout(name);
                if (this._context[name]) {
                    this._context[name].times = 0;
                    this._context[name].subject.next(this._context[name].times);
                    return true;
                }
                return false;
            };
        /**
         * params:
         * - name: string
         * - value: number
         * returns: true if successful
         *
         * Set value on a loading mask referenced by the name parameter.
         * Usage only available if its mode is 'determinate' and if loading is showing.
         */
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
        TdLoadingService.prototype.setValue = /**
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
            function (name, value) {
                if (this._context[name]) {
                    /** @type {?} */
                    var instance = this._context[name].componentRef.instance;
                    if (instance.mode === LoadingMode.Determinate && instance.animation) {
                        instance.value = value;
                        return true;
                    }
                }
                return false;
            };
        /**
         * Clears timeout linked to the name.
         * @param name Name of the loading component to be cleared
         */
        /**
         * Clears timeout linked to the name.
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
        TdLoadingService.prototype._clearTimeout = /**
         * Clears timeout linked to the name.
         * @param {?} name Name of the loading component to be cleared
         * @return {?}
         */
            function (name) {
                clearTimeout(this._timeouts[name]);
                delete this._timeouts[name];
            };
        TdLoadingService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TdLoadingService.ctorParameters = function () {
            return [
                { type: TdLoadingFactory }
            ];
        };
        return TdLoadingService;
    }());
    /**
     * @param {?} parent
     * @param {?} loadingFactory
     * @return {?}
     */
    function LOADING_PROVIDER_FACTORY(parent, loadingFactory) {
        return parent || new TdLoadingService(loadingFactory);
    }
    /** @type {?} */
    var LOADING_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdLoadingService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdLoadingService], TdLoadingFactory],
        useFactory: LOADING_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * Context class for variable reference
     */
    var /**
     * Context class for variable reference
     */ TdLoadingContext = /** @class */ (function () {
        function TdLoadingContext() {
            this.$implicit = undefined;
            this.tdLoading = undefined;
        }
        return TdLoadingContext;
    }());
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
             */ function (name) {
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
             */ function (until) {
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
             */ function (type) {
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
             */ function (mode) {
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
             */ function (stategy) {
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
            { type: core.Directive, args: [{
                        selector: '[tdLoading]',
                    },] }
        ];
        /** @nocollapse */
        TdLoadingDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.TemplateRef },
                { type: TdLoadingService }
            ];
        };
        TdLoadingDirective.propDecorators = {
            name: [{ type: core.Input, args: ['tdLoading',] }],
            until: [{ type: core.Input, args: ['tdLoadingUntil',] }],
            type: [{ type: core.Input, args: ['tdLoadingType',] }],
            mode: [{ type: core.Input, args: ['tdLoadingMode',] }],
            strategy: [{ type: core.Input, args: ['tdLoadingStrategy',] }],
            color: [{ type: core.Input, args: ['tdLoadingColor',] }]
        };
        return TdLoadingDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_LOADING = [
        TdLoadingComponent,
        TdLoadingDirective,
    ];
    /** @type {?} */
    var TD_LOADING_ENTRY_COMPONENTS = [
        TdLoadingComponent,
    ];
    var CovalentLoadingModule = /** @class */ (function () {
        function CovalentLoadingModule() {
        }
        CovalentLoadingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            overlay.OverlayModule,
                            portal.PortalModule,
                        ],
                        declarations: [
                            TD_LOADING,
                        ],
                        exports: [
                            TD_LOADING,
                        ],
                        providers: [
                            LOADING_FACTORY_PROVIDER,
                            LOADING_PROVIDER,
                        ],
                        entryComponents: [
                            TD_LOADING_ENTRY_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentLoadingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.CovalentLoadingModule = CovalentLoadingModule;
    exports.LoadingType = LoadingType;
    exports.LoadingMode = LoadingMode;
    exports.LoadingStrategy = LoadingStrategy;
    exports.LoadingStyle = LoadingStyle;
    exports.TD_CIRCLE_DIAMETER = TD_CIRCLE_DIAMETER;
    exports.TdLoadingComponent = TdLoadingComponent;
    exports.TdLoadingContext = TdLoadingContext;
    exports.TdLoadingDirective = TdLoadingDirective;
    exports.LOADING_PROVIDER_FACTORY = LOADING_PROVIDER_FACTORY;
    exports.TdLoadingConfig = TdLoadingConfig;
    exports.TdLoadingDirectiveConfig = TdLoadingDirectiveConfig;
    exports.TdLoadingService = TdLoadingService;
    exports.LOADING_PROVIDER = LOADING_PROVIDER;
    exports.LOADING_FACTORY_PROVIDER_FACTORY = LOADING_FACTORY_PROVIDER_FACTORY;
    exports.TdLoadingFactory = TdLoadingFactory;
    exports.LOADING_FACTORY_PROVIDER = LOADING_FACTORY_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-loading.umd.js.map