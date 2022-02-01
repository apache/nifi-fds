/**
 * @fileoverview added by tsickle
 * Generated from: message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef, } from '@angular/core';
import { tdCollapseAnimation } from '@covalent/core/common';
export class TdMessageContainerDirective {
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
if (false) {
    /** @type {?} */
    TdMessageContainerDirective.prototype.viewContainer;
}
export class TdMessageComponent {
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
        Promise.resolve(undefined).then((/**
         * @return {?}
         */
        () => {
            if (this._opened) {
                this._attach();
            }
            this._initialized = true;
        }));
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
     * @private
     * @return {?}
     */
    _startAnimationState() {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to attach template to DOM
     * @private
     * @return {?}
     */
    _attach() {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Method to detach template from DOM
     * @private
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
                template: "<div tdMessageContainer></div>\n<ng-template>\n  <div class=\"td-message-wrapper\">\n    <mat-icon class=\"td-message-icon\">{{ icon }}</mat-icon>\n    <div class=\"td-message-labels\">\n      <div *ngIf=\"label\" class=\"td-message-label\">{{ label }}</div>\n      <div *ngIf=\"sublabel\" class=\"td-message-sublabel\">{{ sublabel }}</div>\n    </div>\n    <ng-content select=\"[td-message-actions]\"></ng-content>\n  </div>\n</ng-template>\n",
                animations: [tdCollapseAnimation],
                styles: [":host{display:block}:host .td-message-wrapper{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row;justify-content:flex-start;max-width:100%;min-height:52px;padding:8px 16px}:host .td-message-wrapper .td-message-labels{-ms-flex:1;flex:1}.td-message-icon{margin-right:16px}::ng-deep [dir=rtl] .td-message-icon{margin-left:16px;margin-right:0}"]
            }] }
];
/** @nocollapse */
TdMessageComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TdMessageComponent.propDecorators = {
    _childElement: [{ type: ViewChild, args: [TdMessageContainerDirective, { static: true },] }],
    _template: [{ type: ViewChild, args: [TemplateRef,] }],
    collapsedAnimation: [{ type: HostBinding, args: ['@tdCollapse',] }],
    hidden: [{ type: HostBinding, args: ['style.display',] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    icon: [{ type: Input }],
    color: [{ type: Input, args: ['color',] }],
    opened: [{ type: Input, args: ['opened',] }],
    animationDoneListener: [{ type: HostListener, args: ['@tdCollapse.done',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbWVzc2FnZS8iLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLNUQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxZQUFtQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFBRyxDQUFDOzs7WUFKdkQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7Ozs7WUFaQyxnQkFBZ0I7Ozs7SUFjSixvREFBc0M7O0FBU3BELE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQThGN0IsWUFDVSxTQUFvQixFQUNwQixrQkFBcUMsRUFDckMsV0FBdUI7UUFGdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBL0Z6QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQXlDN0IsU0FBSSxHQUFXLGNBQWMsQ0FBQztRQXFEckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FB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O2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix1Y0FBdUM7Z0JBRXZDLFVBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzthQUNsQzs7OztZQXpCQyxTQUFTO1lBUVQsaUJBQWlCO1lBUGpCLFVBQVU7Ozs0QkFnQ1QsU0FBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt3QkFDdkQsU0FBUyxTQUFDLFdBQVc7aUNBS3JCLFdBQVcsU0FBQyxhQUFhO3FCQVF6QixXQUFXLFNBQUMsZUFBZTtvQkFVM0IsS0FBSzt1QkFPTCxLQUFLO21CQVFMLEtBQUs7b0JBUUwsS0FBSyxTQUFDLE9BQU87cUJBd0JiLEtBQUssU0FBQyxRQUFRO29DQTRCZCxZQUFZLFNBQUMsa0JBQWtCOzs7Ozs7O0lBekdoQyxvQ0FBdUI7Ozs7O0lBQ3ZCLHFDQUFnQzs7Ozs7SUFDaEMscUNBQWlDOzs7OztJQUNqQyx3Q0FBb0M7Ozs7O0lBQ3BDLDBDQUFzQzs7SUFFdEMsMkNBQXFHOztJQUNyRyx1Q0FBb0Q7Ozs7Ozs7SUF1QnBELG1DQUF1Qjs7Ozs7OztJQU92QixzQ0FBMEI7Ozs7Ozs7O0lBUTFCLGtDQUF1Qzs7Ozs7SUFpRHJDLHVDQUE0Qjs7Ozs7SUFDNUIsZ0RBQTZDOzs7OztJQUM3Qyx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0ZENvbGxhcHNlQW5pbWF0aW9uIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkTWVzc2FnZUNvbnRhaW5lcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdGRDb2xsYXBzZUFuaW1hdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIF9vcGVuZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYW5pbWF0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIF9jaGlsZEVsZW1lbnQ6IFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBCaW5kaW5nIGhvc3QgdG8gdGRDb2xsYXBzZSBhbmltYXRpb25cbiAgICovXG4gIEBIb3N0QmluZGluZygnQHRkQ29sbGFwc2UnKVxuICBnZXQgY29sbGFwc2VkQW5pbWF0aW9uKCk6IGFueSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6ICF0aGlzLl9vcGVuZWQsIGR1cmF0aW9uOiAxMDAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kaW5nIGhvc3QgdG8gZGlzcGxheSBzdHlsZSB3aGVuIGhpZGRlblxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGhpZGRlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oaWRkZW4gPyAnbm9uZScgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogbGFiZWw6IHN0cmluZ1xuICAgKlxuICAgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgbWVzc2FnZS5cbiAgICovXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHN1YmxhYmVsPzogc3RyaW5nXG4gICAqXG4gICAqIFNldHMgdGhlIHN1YmxhYmVsIG9mIHRoZSBtZXNzYWdlLlxuICAgKi9cbiAgQElucHV0KCkgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBUaGUgaWNvbiB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogRGVmYXVsdHMgdG8gYGluZm9fb3V0bGluZWAgaWNvblxuICAgKi9cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJ2luZm9fb3V0bGluZSc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm5cbiAgICpcbiAgICogU2V0cyB0aGUgY29sb3Igb2YgdGhlIG1lc3NhZ2UuXG4gICAqIENhbiBhbHNvIHVzZSBhbnkgbWF0ZXJpYWwgY29sb3I6IHB1cnBsZSB8IGxpZ2h0LWJsdWUsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgdGhpcy5fY29sb3IgKyAnLTEwMCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyB0aGlzLl9jb2xvciArICctNzAwJyk7XG4gICAgaWYgKGNvbG9yID09PSAncHJpbWFyeScgfHwgY29sb3IgPT09ICdhY2NlbnQnIHx8IGNvbG9yID09PSAnd2FybicpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiZ2MtJyArIGNvbG9yICsgJy0xMDAnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyBjb2xvciArICctNzAwJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIG9wZW5lZD86IGJvb2xlYW5cbiAgICpcbiAgICogU2hvd3Mgb3IgaGlkZGVzIHRoZSBtZXNzYWdlIGRlcGVuZGluZyBvbiBpdHMgdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvICd0cnVlJy5cbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJylcbiAgc2V0IG9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IG9wZW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbWVzc2FnZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCBlbGVtZW50IHdoZW4gY2xvc2UgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIHRvIHNldCBhbmltYXRpbmcgc3RhdGUgdG8gZmFsc2VcbiAgICogaGlkZGVuIHN0YXRlIHRvIHRydWUgYW5kIGRldGFjaCBlbGVtZW50IGZyb20gRE9NXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdAdGRDb2xsYXBzZS5kb25lJylcbiAgYW5pbWF0aW9uRG9uZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5fZGV0YWNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYW5kIGF0dGFjaGVzIHRoZSBjb250ZW50LlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBtZXNzYWdlIG9uIHNjcmVlblxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbWVzc2FnZSBjb250ZW50IGZyb20gc2NyZWVuLlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGJldHdlZW4gb3BlbiBhbmQgY2xvc2UgZGVwZW5kaW5nIG9uIHN0YXRlLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZXQgdGhlIHN0YXRlIGJlZm9yZSBzdGFydGluZyBhbiBhbmltYXRpb25cbiAgICovXG4gIHByaXZhdGUgX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYXR0YWNoIHRlbXBsYXRlIHRvIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGRldGFjaCB0ZW1wbGF0ZSBmcm9tIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==