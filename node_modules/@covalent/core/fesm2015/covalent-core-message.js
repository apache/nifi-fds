import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef, NgModule } from '@angular/core';
import { tdCollapseAnimation } from '@covalent/core/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdMessageContainerDirective {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
TdMessageContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdMessageContainer]',
            },] }
];
/** @nocollapse */
TdMessageContainerDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];
class TdMessageComponent {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     */
    constructor(_renderer, _changeDetectorRef, _elementRef) {
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
    /**
     * Binding host to tdCollapse animation
     * @return {?}
     */
    get collapsedAnimation() {
        return { value: !this._opened, duration: 100 };
    }
    /**
     * Binding host to display style when hidden
     * @return {?}
     */
    get hidden() {
        return this._hidden ? 'none' : undefined;
    }
    /**
     * color?: primary | accent | warn
     *
     * Sets the color of the message.
     * Can also use any material color: purple | light-blue, etc.
     * @param {?} color
     * @return {?}
     */
    set color(color) {
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
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * opened?: boolean
     *
     * Shows or hiddes the message depending on its value.
     * Defaults to 'true'.
     * @param {?} opened
     * @return {?}
     */
    set opened(opened) {
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
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened;
    }
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     * @return {?}
     */
    animationDoneListener() {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    ngAfterViewInit() {
        Promise.resolve(undefined).then(() => {
            if (this._opened) {
                this._attach();
            }
            this._initialized = true;
        });
    }
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     * @return {?}
     */
    open() {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    }
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    close() {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    }
    /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    toggle() {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * Method to set the state before starting an animation
     * @return {?}
     */
    _startAnimationState() {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to attach template to DOM
     * @return {?}
     */
    _attach() {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to detach template from DOM
     * @return {?}
     */
    _detach() {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    }
}
TdMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-message',
                template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{icon}}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{label}}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{sublabel}}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>",
                animations: [
                    tdCollapseAnimation,
                ],
                styles: [":host{display:block}:host .td-message-wrapper{padding:8px 16px;min-height:52px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}:host .td-message-wrapper .td-message-labels{-webkit-box-flex:1;-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
            }] }
];
/** @nocollapse */
TdMessageComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TdMessageComponent.propDecorators = {
    _childElement: [{ type: ViewChild, args: [TdMessageContainerDirective,] }],
    _template: [{ type: ViewChild, args: [TemplateRef,] }],
    collapsedAnimation: [{ type: HostBinding, args: ['@tdCollapse',] }],
    hidden: [{ type: HostBinding, args: ['style.display',] }],
    label: [{ type: Input, args: ['label',] }],
    sublabel: [{ type: Input, args: ['sublabel',] }],
    icon: [{ type: Input, args: ['icon',] }],
    color: [{ type: Input, args: ['color',] }],
    opened: [{ type: Input, args: ['opened',] }],
    animationDoneListener: [{ type: HostListener, args: ['@tdCollapse.done',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_MESSAGE = [
    TdMessageComponent,
    TdMessageContainerDirective,
];
class CovalentMessageModule {
}
CovalentMessageModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                ],
                declarations: [
                    TD_MESSAGE,
                ],
                exports: [
                    TD_MESSAGE,
                ],
            },] }
];

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

export { CovalentMessageModule, TdMessageContainerDirective, TdMessageComponent };

//# sourceMappingURL=covalent-core-message.js.map