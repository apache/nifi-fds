/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this._subscription = this._mediaService.registerQuery(this._query).subscribe((matches) => {
            this._mediaChange(matches);
        });
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
     * @return {?}
     */
    _changeAttributes() {
        for (let attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    }
    /**
     * @return {?}
     */
    _changeClasses() {
        this._classes.forEach((className) => {
            if (this._matches) {
                this._renderer.addClass(this._elementRef.nativeElement, className);
            }
            else {
                this._renderer.removeClass(this._elementRef.nativeElement, className);
            }
        });
    }
    /**
     * @return {?}
     */
    _changeStyles() {
        for (let style in this._styles) {
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
    /** @type {?} */
    TdMediaToggleDirective.prototype._subscription;
    /** @type {?} */
    TdMediaToggleDirective.prototype._query;
    /** @type {?} */
    TdMediaToggleDirective.prototype._matches;
    /** @type {?} */
    TdMediaToggleDirective.prototype._attributes;
    /** @type {?} */
    TdMediaToggleDirective.prototype._styles;
    /** @type {?} */
    TdMediaToggleDirective.prototype._classes;
    /** @type {?} */
    TdMediaToggleDirective.prototype._renderer;
    /** @type {?} */
    TdMediaToggleDirective.prototype._elementRef;
    /** @type {?} */
    TdMediaToggleDirective.prototype._mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzNELE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQWtEakMsWUFBb0IsU0FBb0IsRUFBVSxXQUF1QixFQUFVLGFBQTZCO1FBQTVGLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQTdDeEcsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUE0QixFQUFFLENBQUM7UUFDMUMsWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDdEMsYUFBUSxHQUFhLEVBQUUsQ0FBQztJQTBDb0YsQ0FBQzs7Ozs7Ozs7SUFuQ3JILElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLFVBQVUsQ0FBQyxVQUFlO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxPQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7Ozs7O0lB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LDZDQUFrRDs7SUFDbEQseUNBQThDOztJQUM5QywwQ0FBZ0M7O0lBMENwQiwyQ0FBNEI7O0lBQUUsNkNBQStCOztJQUFFLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUZE1lZGlhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lZGlhLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRNZWRpYVRvZ2dsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZE1lZGlhVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX3F1ZXJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX21hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgcHJpdmF0ZSBfc3R5bGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICBwcml2YXRlIF9jbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiB0ZE1lZGlhVG9nZ2xlOiBzdHJpbmdcbiAgICogTWVkaWEgcXVlcnkgdXNlZCB0byBldmFsdWF0ZSBzY3JlZW4vd2luZG93IHNpemUuXG4gICAqIFRvZ2dsZXMgYXR0cmlidXRlcywgY2xhc3NlcyBhbmQgc3R5bGVzIGlmIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWQuXG4gICAqL1xuICBASW5wdXQoJ3RkTWVkaWFUb2dnbGUnKVxuICBzZXQgcXVlcnkocXVlcnk6IHN0cmluZykge1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVlcnkgbmVlZGVkIGZvciBbdGRNZWRpYVRvZ2dsZV0gZGlyZWN0aXZlLicpO1xuICAgIH1cbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhQXR0cmlidXRlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQXR0cmlidXRlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFBdHRyaWJ1dGVzJylcbiAgc2V0IGF0dHJpYnV0ZXMoYXR0cmlidXRlczogYW55KSB7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFDbGFzc2VzOiBzdHJpbmdbXVxuICAgKiBDU1MgQ2xhc3NlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFDbGFzc2VzJylcbiAgc2V0IGNsYXNzZXMoY2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9jbGFzc2VzID0gY2xhc3NlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYVN0eWxlczoge1trZXk6IHN0cmluZ106IHN0cmluZ31cbiAgICogQ1NTIFN0eWxlcyB0byBiZSB0b2dnbGVkIHdoZW4gbWVkaWEgcXVlcnkgbWF0Y2hlcy5cbiAgICovXG4gIEBJbnB1dCgnbWVkaWFTdHlsZXMnKVxuICBzZXQgc3R5bGVzKHN0eWxlczogYW55KSB7XG4gICAgdGhpcy5fc3R5bGVzID0gc3R5bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWVkaWFTZXJ2aWNlOiBUZE1lZGlhU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVkaWFDaGFuZ2UodGhpcy5fbWVkaWFTZXJ2aWNlLnF1ZXJ5KHRoaXMuX3F1ZXJ5KSk7XG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fbWVkaWFTZXJ2aWNlLnJlZ2lzdGVyUXVlcnkodGhpcy5fcXVlcnkpLnN1YnNjcmliZSgobWF0Y2hlczogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fbWVkaWFDaGFuZ2UobWF0Y2hlcyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tZWRpYUNoYW5nZShtYXRjaGVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fbWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgdGhpcy5fY2hhbmdlQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX2NoYW5nZUNsYXNzZXMoKTtcbiAgICB0aGlzLl9jaGFuZ2VTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgYXR0ciBpbiB0aGlzLl9hdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBhdHRyLCB0aGlzLl9hdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlU3R5bGVzKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHN0eWxlIGluIHRoaXMuX3N0eWxlcykge1xuICAgICAgaWYgKHRoaXMuX21hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdHlsZSwgdGhpcy5fc3R5bGVzW3N0eWxlXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19