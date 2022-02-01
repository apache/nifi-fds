(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/icon'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/breadcrumbs', ['exports', '@angular/core', '@angular/common', '@angular/material/icon', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.breadcrumbs = {}), global.ng.core, global.ng.common, global.ng.material.icon, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, icon, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: breadcrumb/breadcrumb.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdBreadcrumbComponent = /** @class */ (function () {
        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         */
        function TdBreadcrumbComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._displayCrumb = true;
            this._width = 0;
            this._displayIcon = true;
            this._separatorIcon = 'chevron_right';
        }
        Object.defineProperty(TdBreadcrumbComponent.prototype, "separatorIcon", {
            // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
            /**
             * @return {?}
             */
            get: function () {
                return this._separatorIcon;
            },
            /**
             * @param {?} separatorIcon
             * @return {?}
             */
            set: function (separatorIcon) {
                var _this = this;
                this._separatorIcon = separatorIcon;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this._changeDetectorRef.markForCheck();
                }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayIcon", {
            // Should show the right chevron or not before the label
            /**
             * @return {?}
             */
            get: function () {
                return this._displayIcon;
            },
            /**
             * @param {?} displayIcon
             * @return {?}
             */
            set: function (displayIcon) {
                var _this = this;
                this._displayIcon = displayIcon;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this._changeDetectorRef.markForCheck();
                }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayCrumb", {
            /**
             * @return {?}
             */
            get: function () {
                return this._displayCrumb;
            },
            /**
             * Whether to display the crumb or not
             * @param {?} shouldDisplay
             * @return {?}
             */
            set: function (shouldDisplay) {
                var _this = this;
                this._displayCrumb = shouldDisplay;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this._changeDetectorRef.markForCheck();
                }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "width", {
            /**
             * Width of the DOM element of the crumb
             * @return {?}
             */
            get: function () {
                return this._width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbComponent.prototype, "displayBinding", {
            /**
             * Gets the display style of the crumb
             * @return {?}
             */
            get: function () {
                // Set the display to none on the component, just in case the end user is hiding
                // and showing them instead of the component doing itself for reasons like responsive
                return this._displayCrumb ? undefined : 'none';
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdBreadcrumbComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // set the width from the actual rendered DOM element
            setTimeout(( /**
             * @return {?}
             */function () {
                _this._width = (( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width;
                _this._changeDetectorRef.markForCheck();
            }));
        };
        /**
         * Stop click propagation when clicking on icon
         * @param {?} event
         * @return {?}
         */
        TdBreadcrumbComponent.prototype._handleIconClick = function (event) {
            event.stopPropagation();
            event.preventDefault();
        };
        return TdBreadcrumbComponent;
    }());
    TdBreadcrumbComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-breadcrumb, a[td-breadcrumb]',
                    template: "<ng-content></ng-content>\n<mat-icon\n  *ngIf=\"displayIcon\"\n  class=\"td-breadcrumb-separator-icon\"\n  [style.cursor]=\"'default'\"\n  (click)=\"_handleIconClick($event)\"\n>\n  {{ separatorIcon }}\n</mat-icon>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'mat-button td-breadcrumb',
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host.td-breadcrumb{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:end;align-content:center;align-items:center;box-sizing:border-box;display:inline-block;flex-direction:row;justify-content:flex-end;max-width:100%}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    TdBreadcrumbComponent.propDecorators = {
        displayBinding: [{ type: core.HostBinding, args: ['style.display',] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._displayCrumb;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._width;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._displayIcon;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._separatorIcon;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: breadcrumbs.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdBreadcrumbsComponent = /** @class */ (function () {
        /**
         * @param {?} _elementRef
         * @param {?} _changeDetectorRef
         */
        function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
            this._elementRef = _elementRef;
            this._changeDetectorRef = _changeDetectorRef;
            this._resizeSubscription = rxjs.Subscription.EMPTY;
            this._widthSubject = new rxjs.Subject();
            this._resizing = false;
            this._separatorIcon = 'chevron_right';
            // the list of hidden breadcrumbs not shown right now (responsive)
            this.hiddenBreadcrumbs = [];
        }
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "separatorIcon", {
            /**
             * @return {?}
             */
            get: function () {
                return this._separatorIcon;
            },
            /**
             * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
             * @param {?} separatorIcon
             * @return {?}
             */
            set: function (separatorIcon) {
                this._separatorIcon = separatorIcon;
                this.setCrumbIcons();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(( /**
             * @return {?}
             */function () {
                if (!_this._resizing) {
                    _this._resizing = true;
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this._calculateVisibility();
                        _this._resizing = false;
                        _this._changeDetectorRef.markForCheck();
                    }), 100);
                }
            }));
        };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngDoCheck = function () {
            if (this._elementRef && this._elementRef.nativeElement) {
                this._widthSubject.next(this.nativeElementWidth);
            }
        };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._contentChildrenSub = this._breadcrumbs.changes.pipe(operators.startWith(this._breadcrumbs)).subscribe(( /**
             * @return {?}
             */function () {
                _this.setCrumbIcons();
                _this._changeDetectorRef.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.ngOnDestroy = function () {
            this._resizeSubscription.unsubscribe();
            this._contentChildrenSub.unsubscribe();
        };
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
            /*
               * Current width of the element container
               */
            /**
             * @return {?}
             */
            get: function () {
                /** @type {?} */
                var element = ( /** @type {?} */(this._elementRef.nativeElement));
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
                return (element.getBoundingClientRect().width -
                    borderLeft -
                    borderRight -
                    marginLeft -
                    marginRight -
                    paddingLeft -
                    paddingRight);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
            /**
             * The total count of individual breadcrumbs
             * @return {?}
             */
            get: function () {
                return this._breadcrumbs ? this._breadcrumbs.length : 0;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Set the crumb icon separators
         * @private
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype.setCrumbIcons = function () {
            var _this = this;
            if (this._breadcrumbs) {
                /** @type {?} */
                var breadcrumbArray_1 = this._breadcrumbs.toArray();
                breadcrumbArray_1.forEach(( /**
                 * @param {?} breadcrumb
                 * @param {?} index
                 * @return {?}
                 */function (breadcrumb, index) {
                    breadcrumb.separatorIcon = _this.separatorIcon;
                    // don't show the icon on the last breadcrumb
                    breadcrumb.displayIcon = index < breadcrumbArray_1.length - 1;
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdBreadcrumbsComponent.prototype._calculateVisibility = function () {
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
                if (crumbWidthSum + breadcrumb.width > this.nativeElementWidth) {
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
        return TdBreadcrumbsComponent;
    }());
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
    TdBreadcrumbsComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    TdBreadcrumbsComponent.propDecorators = {
        _breadcrumbs: [{ type: core.ContentChildren, args: [TdBreadcrumbComponent, { descendants: true },] }],
        separatorIcon: [{ type: core.Input }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._resizeSubscription;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._widthSubject;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._contentChildrenSub;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._resizing;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._separatorIcon;
        /** @type {?} */
        TdBreadcrumbsComponent.prototype._breadcrumbs;
        /** @type {?} */
        TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdBreadcrumbsComponent.prototype._changeDetectorRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: breadcrumbs.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentBreadcrumbsModule = /** @class */ (function () {
        function CovalentBreadcrumbsModule() {
        }
        return CovalentBreadcrumbsModule;
    }());
    CovalentBreadcrumbsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, icon.MatIconModule],
                    declarations: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
                    exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
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
     * Generated from: covalent-core-breadcrumbs.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentBreadcrumbsModule = CovalentBreadcrumbsModule;
    exports.TdBreadcrumbComponent = TdBreadcrumbComponent;
    exports.TdBreadcrumbsComponent = TdBreadcrumbsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-breadcrumbs.umd.js.map
