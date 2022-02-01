(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/icon'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/message', ['exports', '@angular/core', '@angular/common', '@angular/material/icon', '@covalent/core/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.message = {}), global.ng.core, global.ng.common, global.ng.material.icon, global.covalent.core.common));
}(this, (function (exports, core, common$1, icon, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: message.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdMessageContainerDirective = /** @class */ (function () {
        /**
         * @param {?} viewContainer
         */
        function TdMessageContainerDirective(viewContainer) {
            this.viewContainer = viewContainer;
        }
        return TdMessageContainerDirective;
    }());
    TdMessageContainerDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tdMessageContainer]',
                },] }
    ];
    /** @nocollapse */
    TdMessageContainerDirective.ctorParameters = function () { return [
        { type: core.ViewContainerRef }
    ]; };
    if (false) {
        /** @type {?} */
        TdMessageContainerDirective.prototype.viewContainer;
    }
    var TdMessageComponent = /** @class */ (function () {
        /**
         * @param {?} _renderer
         * @param {?} _changeDetectorRef
         * @param {?} _elementRef
         */
        function TdMessageComponent(_renderer, _changeDetectorRef, _elementRef) {
            this._renderer = _renderer;
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._opened = true;
            this._hidden = false;
            this._animating = false;
            this._initialized = false;
            /**
             * icon?: string
             *
             * The icon to be displayed before the title.
             * Defaults to `info_outline` icon
             */
            this.icon = 'info_outline';
            this._renderer.addClass(this._elementRef.nativeElement, 'td-message');
        }
        Object.defineProperty(TdMessageComponent.prototype, "collapsedAnimation", {
            /**
             * Binding host to tdCollapse animation
             * @return {?}
             */
            get: function () {
                return { value: !this._opened, duration: 100 };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "hidden", {
            /**
             * Binding host to display style when hidden
             * @return {?}
             */
            get: function () {
                return this._hidden ? 'none' : undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "color", {
            /**
             * @return {?}
             */
            get: function () {
                return this._color;
            },
            /**
             * color?: primary | accent | warn
             *
             * Sets the color of the message.
             * Can also use any material color: purple | light-blue, etc.
             * @param {?} color
             * @return {?}
             */
            set: function (color) {
                this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                this._renderer.removeClass(this._elementRef.nativeElement, 'bgc-' + this._color + '-100');
                this._renderer.removeClass(this._elementRef.nativeElement, 'tc-' + this._color + '-700');
                if (color === 'primary' || color === 'accent' || color === 'warn') {
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + color);
                }
                else {
                    this._renderer.addClass(this._elementRef.nativeElement, 'bgc-' + color + '-100');
                    this._renderer.addClass(this._elementRef.nativeElement, 'tc-' + color + '-700');
                }
                this._color = color;
                this._changeDetectorRef.markForCheck();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TdMessageComponent.prototype, "opened", {
            /**
             * @return {?}
             */
            get: function () {
                return this._opened;
            },
            /**
             * opened?: boolean
             *
             * Shows or hiddes the message depending on its value.
             * Defaults to 'true'.
             * @param {?} opened
             * @return {?}
             */
            set: function (opened) {
                if (this._initialized) {
                    if (opened) {
                        this.open();
                    }
                    else {
                        this.close();
                    }
                }
                else {
                    this._opened = opened;
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Detach element when close animation is finished to set animating state to false
         * hidden state to true and detach element from DOM
         * @return {?}
         */
        TdMessageComponent.prototype.animationDoneListener = function () {
            if (!this._opened) {
                this._hidden = true;
                this._detach();
            }
            this._animating = false;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Initializes the component and attaches the content.
         * @return {?}
         */
        TdMessageComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            Promise.resolve(undefined).then(( /**
             * @return {?}
             */function () {
                if (_this._opened) {
                    _this._attach();
                }
                _this._initialized = true;
            }));
        };
        /**
         * Renders the message on screen
         * Validates if there is an animation currently and if its already opened
         * @return {?}
         */
        TdMessageComponent.prototype.open = function () {
            if (!this._opened && !this._animating) {
                this._opened = true;
                this._attach();
                this._startAnimationState();
            }
        };
        /**
         * Removes the message content from screen.
         * Validates if there is an animation currently and if its already closed
         * @return {?}
         */
        TdMessageComponent.prototype.close = function () {
            if (this._opened && !this._animating) {
                this._opened = false;
                this._startAnimationState();
            }
        };
        /**
         * Toggles between open and close depending on state.
         * @return {?}
         */
        TdMessageComponent.prototype.toggle = function () {
            if (this._opened) {
                this.close();
            }
            else {
                this.open();
            }
        };
        /**
         * Method to set the state before starting an animation
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._startAnimationState = function () {
            this._animating = true;
            this._hidden = false;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to attach template to DOM
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._attach = function () {
            this._childElement.viewContainer.createEmbeddedView(this._template);
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Method to detach template from DOM
         * @private
         * @return {?}
         */
        TdMessageComponent.prototype._detach = function () {
            this._childElement.viewContainer.clear();
            this._changeDetectorRef.markForCheck();
        };
        return TdMessageComponent;
    }());
    TdMessageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-message',
                    template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{ icon }}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{ label }}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{ sublabel }}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>\n",
                    animations: [common.tdCollapseAnimation],
                    styles: [":host{display:block}:host .td-message-wrapper{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%;min-height:52px;padding:8px 16px}:host .td-message-wrapper .td-message-labels{-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
                }] }
    ];
    /** @nocollapse */
    TdMessageComponent.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef }
    ]; };
    TdMessageComponent.propDecorators = {
        _childElement: [{ type: core.ViewChild, args: [TdMessageContainerDirective, { static: true },] }],
        _template: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
        collapsedAnimation: [{ type: core.HostBinding, args: ['@tdCollapse',] }],
        hidden: [{ type: core.HostBinding, args: ['style.display',] }],
        label: [{ type: core.Input }],
        sublabel: [{ type: core.Input }],
        icon: [{ type: core.Input }],
        color: [{ type: core.Input, args: ['color',] }],
        opened: [{ type: core.Input, args: ['opened',] }],
        animationDoneListener: [{ type: core.HostListener, args: ['@tdCollapse.done',] }]
    };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._color;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._opened;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._hidden;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._animating;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._initialized;
        /** @type {?} */
        TdMessageComponent.prototype._childElement;
        /** @type {?} */
        TdMessageComponent.prototype._template;
        /**
         * label: string
         *
         * Sets the label of the message.
         * @type {?}
         */
        TdMessageComponent.prototype.label;
        /**
         * sublabel?: string
         *
         * Sets the sublabel of the message.
         * @type {?}
         */
        TdMessageComponent.prototype.sublabel;
        /**
         * icon?: string
         *
         * The icon to be displayed before the title.
         * Defaults to `info_outline` icon
         * @type {?}
         */
        TdMessageComponent.prototype.icon;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdMessageComponent.prototype._elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: message.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TD_MESSAGE = [TdMessageComponent, TdMessageContainerDirective];
    var CovalentMessageModule = /** @class */ (function () {
        function CovalentMessageModule() {
        }
        return CovalentMessageModule;
    }());
    CovalentMessageModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common$1.CommonModule, icon.MatIconModule],
                    declarations: [TD_MESSAGE],
                    exports: [TD_MESSAGE],
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
     * Generated from: covalent-core-message.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentMessageModule = CovalentMessageModule;
    exports.TdMessageComponent = TdMessageComponent;
    exports.TdMessageContainerDirective = TdMessageContainerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-message.umd.js.map
