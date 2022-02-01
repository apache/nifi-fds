/**
 * @fileoverview added by tsickle
 * Generated from: layout-footer/layout-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
export class TdLayoutFooterComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-footer');
    }
    /**
     * color?: 'accent' | 'primary' | 'warn'
     *
     * Optional color option: primary | accent | warn.
     * @param {?} color
     * @return {?}
     */
    set color(color) {
        if (color) {
            this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
            this._color = color;
            this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
        }
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
TdLayoutFooterComponent.decorators = [
    { type: Component, args: [{
                /* tslint:disable-next-line */
                selector: 'td-layout-footer,td-layout-footer-inner',
                template: "<ng-content></ng-content>\n",
                styles: [":host{display:block;padding:10px 16px}"]
            }] }
];
/** @nocollapse */
TdLayoutFooterComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdLayoutFooterComponent.propDecorators = {
    color: [{ type: Input, args: ['color',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdLayoutFooterComponent.prototype._color;
    /**
     * @type {?}
     * @private
     */
    TdLayoutFooterComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdLayoutFooterComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvbGF5b3V0LyIsInNvdXJjZXMiOlsibGF5b3V0LWZvb3Rlci9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFReEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFvQmxDLFlBQW9CLFNBQW9CLEVBQVUsV0FBdUI7UUFBckQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7Ozs7SUFkRCxJQUNJLEtBQUssQ0FBQyxLQUFvQztRQUM1QyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvRTtJQUNILENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHlDQUF5QztnQkFFbkQsdUNBQTZDOzthQUM5Qzs7OztZQVAwQixTQUFTO1lBQUUsVUFBVTs7O29CQWdCN0MsS0FBSyxTQUFDLE9BQU87Ozs7Ozs7SUFQZCx5Q0FBOEM7Ozs7O0lBbUJsQyw0Q0FBNEI7Ozs7O0lBQUUsOENBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtZm9vdGVyLHRkLWxheW91dC1mb290ZXItaW5uZXInLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRMYXlvdXRGb290ZXJDb21wb25lbnQge1xuICBwcml2YXRlIF9jb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2Fybic7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2FybidcbiAgICpcbiAgICogT3B0aW9uYWwgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICovXG4gIEBJbnB1dCgnY29sb3InKVxuICBzZXQgY29sb3IoY29sb3I6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nKSB7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtYXQtJyArIHRoaXMuX2NvbG9yKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbG9yKCk6ICdwcmltYXJ5JyB8ICdhY2NlbnQnIHwgJ3dhcm4nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndGQtbGF5b3V0LWZvb3RlcicpO1xuICB9XG59XG4iXX0=