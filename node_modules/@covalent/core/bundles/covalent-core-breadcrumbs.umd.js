(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/icon'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/breadcrumbs', ['exports', '@angular/common', '@angular/material/icon', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.breadcrumbs = {}),global.ng.common,global.ng.material.icon,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,common,icon,rxjs,operators,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBreadcrumbComponent = /** @class */ (function () {
        function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._displayCrumb = true;
            this._width = 0;
            // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
            this.separatorIcon = 'chevron_right';
            // Should show the right chevron or not before the label
            this._displayIcon = true;
        }
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
            get: /**
             * @return {?}
             */ function () {
                return this._displayCrumb;
            },
            /**
             * Whether to display the crumb or not
             */
            set: /**
             * Whether to display the crumb or not
             * @param {?} shouldDisplay
             * @return {?}
             */ function (shouldDisplay) {
                this._displayCrumb = shouldDisplay;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
            /**
             * Width of the DOM element of the crumb
             */
            get: /**
             * Width of the DOM element of the crumb
             * @return {?}
             */ function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
            /**
             * Gets the display style of the crumb
             */
            get: /**
             * Gets the display style of the crumb
             * @return {?}
             */ function () {
                // Set the display to none on the component, just in case the end user is hiding
                // and showing them instead of the component doing itself for reasons like responsive
                return this._displayCrumb ? undefined : 'none';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdBreadcrumbComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // set the width from the actual rendered DOM element
                setTimeout(function () {
                    _this._width = (( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width;
                    _this._changeDetectorRef.markForCheck();
                });
            };
        /**
         * Stop click propagation when clicking on icon
         */
        /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
        TdBreadcrumbComponent.prototype._handleIconClick = /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.stopPropagation();
                event.preventDefault();
            };
        TdBreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-breadcrumb, a[td-breadcrumb]',
                        template: "<ng-content></ng-content>\n<mat-icon *ngIf=\"_displayIcon\"\n          class=\"td-breadcrumb-separator-icon\"\n          [style.cursor]=\"'default'\"\n          (click)=\"_handleIconClick($event)\">\n  {{separatorIcon}}\n</mat-icon>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'mat-button td-breadcrumb',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host.td-breadcrumb{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbComponent.propDecorators = {
            displayBinding: [{ type: core.HostBinding, args: ['style.display',] }]
        };
        return TdBreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdBreadcrumbsComponent = /** @class */ (function () {
        function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
            this._resizing = false;
            // the list of hidden breadcrumbs not shown right now (responsive)
            this.hiddenBreadcrumbs = [];
            /**
             * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
             */
            this.separatorIcon = 'chevron_right';
        }
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(function () {
                    if (!_this._resizing) {
                        _this._resizing = true;
                        setTimeout(function () {
                            _this._calculateVisibility();
                            _this._resizing = false;
                            _this._changeDetectorRef.markForCheck();
                        }, 100);
                    }
                });
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                if (this._elementRef && this._elementRef.nativeElement) {
                    this._widthSubject.next(this.nativeElementWidth);
                }
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this.setCrumbIcons();
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._resizeSubscription.unsubscribe();
            };
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
            /*
            * Current width of the element container
            */
            get: /*
              * Current width of the element container
              */ 
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var element = (( /** @type {?} */(this._elementRef.nativeElement)));
                // Need to take into account border, margin and padding that might be around all the crumbs
                /** @type {?} */
                var style = window.getComputedStyle(element);
                /** @type {?} */
                var borderLeft = parseInt(style.borderLeft, 10);
                /** @type {?} */
                var borderRight = parseInt(style.borderRight, 10);
                /** @type {?} */
                var marginLeft = parseInt(style.marginLeft, 10);
                /** @type {?} */
                var marginRight = parseInt(style.marginRight, 10);
                /** @type {?} */
                var paddingLeft = parseInt(style.paddingLeft, 10);
                /** @type {?} */
                var paddingRight = parseInt(style.paddingRight, 10);
                return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
            /**
             * The total count of individual breadcrumbs
             */
            get: /**
             * The total count of individual breadcrumbs
             * @return {?}
             */ function () {
                return this._breadcrumbs ? this._breadcrumbs.length : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Set the crumb icon separators
         */
        /**
         * Set the crumb icon separators
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
         * Set the crumb icon separators
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var breadcrumbArray = this._breadcrumbs.toArray();
                if (breadcrumbArray.length > 0) {
                    // don't show the icon on the last breadcrumb
                    breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
                }
                breadcrumbArray.forEach(function (breadcrumb) {
                    breadcrumb.separatorIcon = _this.separatorIcon;
                });
            };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype._calculateVisibility = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var crumbsArray = this._breadcrumbs.toArray();
                /** @type {?} */
                var crumbWidthSum = 0;
                /** @type {?} */
                var hiddenCrumbs = [];
                // loop through crumbs in reverse order to calculate which ones should be removed
                for (var i = crumbsArray.length - 1; i >= 0; i--) {
                    /** @type {?} */
                    var breadcrumb = crumbsArray[i];
                    // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
                    // and hide it
                    if ((crumbWidthSum + breadcrumb.width) > this.nativeElementWidth) {
                        breadcrumb.displayCrumb = false;
                        hiddenCrumbs.push(breadcrumb);
                    }
                    else {
                        // else we show it
                        breadcrumb.displayCrumb = true;
                    }
                    crumbWidthSum += breadcrumb.width;
                }
                this.hiddenBreadcrumbs = hiddenCrumbs;
                this._changeDetectorRef.markForCheck();
            };
        TdBreadcrumbsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-breadcrumbs',
                        template: "<ng-content></ng-content>\n",
                        /* tslint:disable-next-line */
                        host: {
                            class: 'td-breadcrumbs',
                        },
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;width:100%}:host.td-breadcrumbs{white-space:nowrap}"]
                    }] }
        ];
        /** @nocollapse */
        TdBreadcrumbsComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.ChangeDetectorRef }
            ];
        };
        TdBreadcrumbsComponent.propDecorators = {
            _breadcrumbs: [{ type: core.ContentChildren, args: [TdBreadcrumbComponent,] }],
            separatorIcon: [{ type: core.Input, args: ['separatorIcon',] }]
        };
        return TdBreadcrumbsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CovalentBreadcrumbsModule = /** @class */ (function () {
        function CovalentBreadcrumbsModule() {
        }
        CovalentBreadcrumbsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                        ],
                        declarations: [
                            TdBreadcrumbsComponent,
                            TdBreadcrumbComponent,
                        ],
                        exports: [
                            TdBreadcrumbsComponent,
                            TdBreadcrumbComponent,
                        ],
                    },] }
        ];
        return CovalentBreadcrumbsModule;
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

    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;
    exports.ɵa = TdBreadcrumbComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-core-breadcrumbs.umd.js.map