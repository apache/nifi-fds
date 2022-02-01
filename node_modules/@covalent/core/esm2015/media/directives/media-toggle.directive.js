/**
 * @fileoverview added by tsickle
 * Generated from: directives/media-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { TdMediaService } from '../services/media.service';
export class TdMediaToggleDirective {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _mediaService
     */
    constructor(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    /**
     * tdMediaToggle: string
     * Media query used to evaluate screen/window size.
     * Toggles attributes, classes and styles if media query is matched.
     * @param {?} query
     * @return {?}
     */
    set query(query) {
        if (!query) {
            throw new Error('Query needed for [tdMediaToggle] directive.');
        }
        this._query = query;
    }
    /**
     * mediaAttributes: {[key: string]: string}
     * Attributes to be toggled when media query matches.
     * @param {?} attributes
     * @return {?}
     */
    set attributes(attributes) {
        this._attributes = attributes;
    }
    /**
     * mediaClasses: string[]
     * CSS Classes to be toggled when media query matches.
     * @param {?} classes
     * @return {?}
     */
    set classes(classes) {
        this._classes = classes;
    }
    /**
     * mediaStyles: {[key: string]: string}
     * CSS Styles to be toggled when media query matches.
     * @param {?} styles
     * @return {?}
     */
    set styles(styles) {
        this._styles = styles;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this._mediaChange(matches);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    /**
     * @private
     * @param {?} matches
     * @return {?}
     */
    _mediaChange(matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    }
    /**
     * @private
     * @return {?}
     */
    _changeAttributes() {
        for (const attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _changeClasses() {
        this._classes.forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            if (this._matches) {
                this._renderer.addClass(this._elementRef.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, className);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _changeStyles() {
        for (const style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    }
}
TdMediaToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdMediaToggle]',
            },] }
];
/** @nocollapse */
TdMediaToggleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: TdMediaService }
];
TdMediaToggleDirective.propDecorators = {
    query: [{ type: Input, args: ['tdMediaToggle',] }],
    attributes: [{ type: Input, args: ['mediaAttributes',] }],
    classes: [{ type: Input, args: ['mediaClasses',] }],
    styles: [{ type: Input, args: ['mediaStyles',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._query;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._matches;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._attributes;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._styles;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._classes;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdMediaToggleDirective.prototype._mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9tZWRpYS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLM0QsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBaURqQyxZQUFvQixTQUFvQixFQUFVLFdBQXVCLEVBQVUsYUFBNkI7UUFBNUYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBN0N4RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQThCLEVBQUUsQ0FBQztRQUM1QyxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQWEsRUFBRSxDQUFDO0lBMENtRixDQUFDOzs7Ozs7OztJQW5DcEgsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQU1ELElBQ0ksVUFBVSxDQUFDLFVBQWU7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQzs7Ozs7OztJQU1ELElBQ0ksT0FBTyxDQUFDLE9BQWlCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFC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cEMsd0NBQXVCOzs7OztJQUN2QiwwQ0FBa0M7Ozs7O0lBQ2xDLDZDQUFvRDs7Ozs7SUFDcEQseUNBQWdEOzs7OztJQUNoRCwwQ0FBZ0M7Ozs7O0lBMENwQiwyQ0FBNEI7Ozs7O0lBQUUsNkNBQStCOzs7OztJQUFFLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZE1lZGlhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZWRpYVRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lZGlhVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9xdWVyeTogc3RyaW5nO1xuICBwcml2YXRlIF9tYXRjaGVzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2F0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgcHJpdmF0ZSBfc3R5bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIHByaXZhdGUgX2NsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIHRkTWVkaWFUb2dnbGU6IHN0cmluZ1xuICAgKiBNZWRpYSBxdWVyeSB1c2VkIHRvIGV2YWx1YXRlIHNjcmVlbi93aW5kb3cgc2l6ZS5cbiAgICogVG9nZ2xlcyBhdHRyaWJ1dGVzLCBjbGFzc2VzIGFuZCBzdHlsZXMgaWYgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZC5cbiAgICovXG4gIEBJbnB1dCgndGRNZWRpYVRvZ2dsZScpXG4gIHNldCBxdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWVyeSBuZWVkZWQgZm9yIFt0ZE1lZGlhVG9nZ2xlXSBkaXJlY3RpdmUuJyk7XG4gICAgfVxuICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuICAgKiBBdHRyaWJ1dGVzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYUF0dHJpYnV0ZXMnKVxuICBzZXQgYXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBhbnkpIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYUNsYXNzZXM6IHN0cmluZ1tdXG4gICAqIENTUyBDbGFzc2VzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYUNsYXNzZXMnKVxuICBzZXQgY2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhU3R5bGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuICAgKiBDU1MgU3R5bGVzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYVN0eWxlcycpXG4gIHNldCBzdHlsZXMoc3R5bGVzOiBhbnkpIHtcbiAgICB0aGlzLl9zdHlsZXMgPSBzdHlsZXM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tZWRpYVNlcnZpY2U6IFRkTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX21lZGlhQ2hhbmdlKHRoaXMuX21lZGlhU2VydmljZS5xdWVyeSh0aGlzLl9xdWVyeSkpO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX21lZGlhU2VydmljZS5yZWdpc3RlclF1ZXJ5KHRoaXMuX3F1ZXJ5KS5zdWJzY3JpYmUoKG1hdGNoZXM6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuX21lZGlhQ2hhbmdlKG1hdGNoZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbWVkaWFDaGFuZ2UobWF0Y2hlczogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xuICAgIHRoaXMuX2NoYW5nZUF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VDbGFzc2VzKCk7XG4gICAgdGhpcy5fY2hhbmdlU3R5bGVzKCk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VBdHRyaWJ1dGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgYXR0ciBpbiB0aGlzLl9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyLCB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlU3R5bGVzKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gdGhpcy5fc3R5bGVzKSB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCB0aGlzLl9zdHlsZXNbc3R5bGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3R5bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19