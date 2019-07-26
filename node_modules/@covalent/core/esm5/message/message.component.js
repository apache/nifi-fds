/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Renderer2, ElementRef, ViewContainerRef, TemplateRef, ViewChild, HostBinding, HostListener, ChangeDetectorRef } from '@angular/core';
import { tdCollapseAnimation } from '@covalent/core/common';
var TdMessageContainerDirective = /** @class */ (function () {
    function TdMessageContainerDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TdMessageContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdMessageContainer]',
                },] }
    ];
    /** @nocollapse */
    TdMessageContainerDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return TdMessageContainerDirective;
}());
export { TdMessageContainerDirective };
if (false) {
    /** @type {?} */
    TdMessageContainerDirective.prototype.viewContainer;
}
var TdMessageComponent = /** @class */ (function () {
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
         */
        get: /**
         * Binding host to tdCollapse animation
         * @return {?}
         */
        function () {
            return { value: !this._opened, duration: 100 };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "hidden", {
        /**
         * Binding host to display style when hidden
         */
        get: /**
         * Binding host to display style when hidden
         * @return {?}
         */
        function () {
            return this._hidden ? 'none' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         */
        set: /**
         * color?: primary | accent | warn
         *
         * Sets the color of the message.
         * Can also use any material color: purple | light-blue, etc.
         * @param {?} color
         * @return {?}
         */
        function (color) {
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMessageComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         */
        set: /**
         * opened?: boolean
         *
         * Shows or hiddes the message depending on its value.
         * Defaults to 'true'.
         * @param {?} opened
         * @return {?}
         */
        function (opened) {
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
        enumerable: true,
        configurable: true
    });
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     */
    /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     * @return {?}
     */
    TdMessageComponent.prototype.animationDoneListener = /**
     * Detach element when close animation is finished to set animating state to false
     * hidden state to true and detach element from DOM
     * @return {?}
     */
    function () {
        if (!this._opened) {
            this._hidden = true;
            this._detach();
        }
        this._animating = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Initializes the component and attaches the content.
     */
    /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    TdMessageComponent.prototype.ngAfterViewInit = /**
     * Initializes the component and attaches the content.
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve(undefined).then(function () {
            if (_this._opened) {
                _this._attach();
            }
            _this._initialized = true;
        });
    };
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     */
    /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     * @return {?}
     */
    TdMessageComponent.prototype.open = /**
     * Renders the message on screen
     * Validates if there is an animation currently and if its already opened
     * @return {?}
     */
    function () {
        if (!this._opened && !this._animating) {
            this._opened = true;
            this._attach();
            this._startAnimationState();
        }
    };
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     */
    /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    TdMessageComponent.prototype.close = /**
     * Removes the message content from screen.
     * Validates if there is an animation currently and if its already closed
     * @return {?}
     */
    function () {
        if (this._opened && !this._animating) {
            this._opened = false;
            this._startAnimationState();
        }
    };
    /**
     * Toggles between open and close depending on state.
     */
    /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    TdMessageComponent.prototype.toggle = /**
     * Toggles between open and close depending on state.
     * @return {?}
     */
    function () {
        if (this._opened) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * Method to set the state before starting an animation
     */
    /**
     * Method to set the state before starting an animation
     * @return {?}
     */
    TdMessageComponent.prototype._startAnimationState = /**
     * Method to set the state before starting an animation
     * @return {?}
     */
    function () {
        this._animating = true;
        this._hidden = false;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to attach template to DOM
     */
    /**
     * Method to attach template to DOM
     * @return {?}
     */
    TdMessageComponent.prototype._attach = /**
     * Method to attach template to DOM
     * @return {?}
     */
    function () {
        this._childElement.viewContainer.createEmbeddedView(this._template);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Method to detach template from DOM
     */
    /**
     * Method to detach template from DOM
     * @return {?}
     */
    TdMessageComponent.prototype._detach = /**
     * Method to detach template from DOM
     * @return {?}
     */
    function () {
        this._childElement.viewContainer.clear();
        this._changeDetectorRef.markForCheck();
    };
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
    TdMessageComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
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
    return TdMessageComponent;
}());
export { TdMessageComponent };
if (false) {
    /** @type {?} */
    TdMessageComponent.prototype._color;
    /** @type {?} */
    TdMessageComponent.prototype._opened;
    /** @type {?} */
    TdMessageComponent.prototype._hidden;
    /** @type {?} */
    TdMessageComponent.prototype._animating;
    /** @type {?} */
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
    /** @type {?} */
    TdMessageComponent.prototype._renderer;
    /** @type {?} */
    TdMessageComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdMessageComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9tZXNzYWdlLyIsInNvdXJjZXMiOlsibWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUMzRyxXQUFXLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVEO0lBSUUscUNBQW1CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUFJLENBQUM7O2dCQUp4RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0JBUDJFLGdCQUFnQjs7SUFVNUYsa0NBQUM7Q0FBQSxBQUxELElBS0M7U0FGWSwyQkFBMkI7OztJQUMxQixvREFBc0M7O0FBR3BEO0lBdUdFLDRCQUFvQixTQUFvQixFQUNwQixrQkFBcUMsRUFDckMsV0FBdUI7UUFGdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBOUZuQyxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixpQkFBWSxHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQXlDdkIsU0FBSSxHQUFXLGNBQWMsQ0FBQztRQW1EM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQXJGRCxzQkFD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QUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNLLG9DQUFPOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBaE1GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsK2JBQXVDO29CQUV2QyxVQUFVLEVBQUU7d0JBQ1YsbUJBQW1CO3FCQUNwQjs7aUJBQ0Y7Ozs7Z0JBbkJxQyxTQUFTO2dCQUNYLGlCQUFpQjtnQkFESixVQUFVOzs7Z0NBNEJ4RCxTQUFTLFNBQUMsMkJBQTJCOzRCQUNyQyxTQUFTLFNBQUMsV0FBVztxQ0FLckIsV0FBVyxTQUFDLGFBQWE7eUJBUXpCLFdBQVcsU0FBQyxlQUFlO3dCQVUzQixLQUFLLFNBQUMsT0FBTzsyQkFPYixLQUFLLFNBQUMsVUFBVTt1QkFRaEIsS0FBSyxTQUFDLE1BQU07d0JBUVosS0FBSyxTQUFDLE9BQU87eUJBd0JiLEtBQUssU0FBQyxRQUFRO3dDQTBCZCxZQUFZLFNBQUMsa0JBQWtCOztJQWdGbEMseUJBQUM7Q0FBQSxBQWpNRCxJQWlNQztTQXpMWSxrQkFBa0I7OztJQUU3QixvQ0FBdUI7O0lBQ3ZCLHFDQUFnQzs7SUFDaEMscUNBQWlDOztJQUNqQyx3Q0FBb0M7O0lBQ3BDLDBDQUFzQzs7SUFFdEMsMkNBQW1GOztJQUNuRix1Q0FBb0Q7Ozs7Ozs7SUF1QnBELG1DQUE4Qjs7Ozs7OztJQU85QixzQ0FBb0M7Ozs7Ozs7O0lBUXBDLGtDQUE2Qzs7SUFnRGpDLHVDQUE0Qjs7SUFDNUIsZ0RBQTZDOztJQUM3Qyx5Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcbiAgICAgICAgIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRkQ29sbGFwc2VBbmltYXRpb24gfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZXNzYWdlQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVzc2FnZUNvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdGRDb2xsYXBzZUFuaW1hdGlvbixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfb3BlbmVkOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoVGRNZXNzYWdlQ29udGFpbmVyRGlyZWN0aXZlKSBfY2hpbGRFbGVtZW50OiBUZE1lc3NhZ2VDb250YWluZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIHRkQ29sbGFwc2UgYW5pbWF0aW9uXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ0B0ZENvbGxhcHNlJylcbiAgZ2V0IGNvbGxhcHNlZEFuaW1hdGlvbigpOiBhbnkge1xuICAgIHJldHVybiB7IHZhbHVlOiAhdGhpcy5fb3BlbmVkLCBkdXJhdGlvbjogMTAwIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZGluZyBob3N0IHRvIGRpc3BsYXkgc3R5bGUgd2hlbiBoaWRkZW5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIGdldCBoaWRkZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZGVuID8gJ25vbmUnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGxhYmVsOiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogc3VibGFiZWw/OiBzdHJpbmdcbiAgICpcbiAgICogU2V0cyB0aGUgc3VibGFiZWwgb2YgdGhlIG1lc3NhZ2UuXG4gICAqL1xuICBASW5wdXQoJ3N1YmxhYmVsJykgc3VibGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbj86IHN0cmluZ1xuICAgKlxuICAgKiBUaGUgaWNvbiB0byBiZSBkaXNwbGF5ZWQgYmVmb3JlIHRoZSB0aXRsZS5cbiAgICogRGVmYXVsdHMgdG8gYGluZm9fb3V0bGluZWAgaWNvblxuICAgKi9cbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nID0gJ2luZm9fb3V0bGluZSc7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogcHJpbWFyeSB8IGFjY2VudCB8IHdhcm5cbiAgICpcbiAgICogU2V0cyB0aGUgY29sb3Igb2YgdGhlIG1lc3NhZ2UuXG4gICAqIENhbiBhbHNvIHVzZSBhbnkgbWF0ZXJpYWwgY29sb3I6IHB1cnBsZSB8IGxpZ2h0LWJsdWUsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgdGhpcy5fY29sb3IpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnYy0nICsgdGhpcy5fY29sb3IgKyAnLTEwMCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyB0aGlzLl9jb2xvciArICctNzAwJyk7XG4gICAgaWYgKGNvbG9yID09PSAncHJpbWFyeScgfHwgY29sb3IgPT09ICdhY2NlbnQnIHx8IGNvbG9yID09PSAnd2FybicpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21hdC0nICsgY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiZ2MtJyArIGNvbG9yICsgJy0xMDAnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RjLScgKyBjb2xvciArICctNzAwJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIG9wZW5lZD86IGJvb2xlYW5cbiAgICpcbiAgICogU2hvd3Mgb3IgaGlkZGVzIHRoZSBtZXNzYWdlIGRlcGVuZGluZyBvbiBpdHMgdmFsdWUuXG4gICAqIERlZmF1bHRzIHRvICd0cnVlJy5cbiAgICovXG4gIEBJbnB1dCgnb3BlbmVkJylcbiAgc2V0IG9wZW5lZChvcGVuZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChvcGVuZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IG9wZW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbWVzc2FnZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCBlbGVtZW50IHdoZW4gY2xvc2UgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIHRvIHNldCBhbmltYXRpbmcgc3RhdGUgdG8gZmFsc2VcbiAgICogaGlkZGVuIHN0YXRlIHRvIHRydWUgYW5kIGRldGFjaCBlbGVtZW50IGZyb20gRE9NXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdAdGRDb2xsYXBzZS5kb25lJylcbiAgYW5pbWF0aW9uRG9uZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5fZGV0YWNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBjb21wb25lbnQgYW5kIGF0dGFjaGVzIHRoZSBjb250ZW50LlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX29wZW5lZCkge1xuICAgICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBtZXNzYWdlIG9uIHNjcmVlblxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgb3BlbmVkXG4gICAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gICAgICB0aGlzLl9hdHRhY2goKTtcbiAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbWVzc2FnZSBjb250ZW50IGZyb20gc2NyZWVuLlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlcmUgaXMgYW4gYW5pbWF0aW9uIGN1cnJlbnRseSBhbmQgaWYgaXRzIGFscmVhZHkgY2xvc2VkXG4gICAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkICYmICF0aGlzLl9hbmltYXRpbmcpIHtcbiAgICAgIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGJldHdlZW4gb3BlbiBhbmQgY2xvc2UgZGVwZW5kaW5nIG9uIHN0YXRlLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzZXQgdGhlIHN0YXRlIGJlZm9yZSBzdGFydGluZyBhbiBhbmltYXRpb25cbiAgICovXG4gIHByaXZhdGUgX3N0YXJ0QW5pbWF0aW9uU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYXR0YWNoIHRlbXBsYXRlIHRvIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfYXR0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZSk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGRldGFjaCB0ZW1wbGF0ZSBmcm9tIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBfZGV0YWNoKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoaWxkRWxlbWVudC52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==