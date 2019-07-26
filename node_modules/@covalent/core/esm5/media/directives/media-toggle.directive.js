/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { TdMediaService } from '../services/media.service';
var TdMediaToggleDirective = /** @class */ (function () {
    function TdMediaToggleDirective(_renderer, _elementRef, _mediaService) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._mediaService = _mediaService;
        this._matches = false;
        this._attributes = {};
        this._styles = {};
        this._classes = [];
    }
    Object.defineProperty(TdMediaToggleDirective.prototype, "query", {
        /**
         * tdMediaToggle: string
         * Media query used to evaluate screen/window size.
         * Toggles attributes, classes and styles if media query is matched.
         */
        set: /**
         * tdMediaToggle: string
         * Media query used to evaluate screen/window size.
         * Toggles attributes, classes and styles if media query is matched.
         * @param {?} query
         * @return {?}
         */
        function (query) {
            if (!query) {
                throw new Error('Query needed for [tdMediaToggle] directive.');
            }
            this._query = query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "attributes", {
        /**
         * mediaAttributes: {[key: string]: string}
         * Attributes to be toggled when media query matches.
         */
        set: /**
         * mediaAttributes: {[key: string]: string}
         * Attributes to be toggled when media query matches.
         * @param {?} attributes
         * @return {?}
         */
        function (attributes) {
            this._attributes = attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "classes", {
        /**
         * mediaClasses: string[]
         * CSS Classes to be toggled when media query matches.
         */
        set: /**
         * mediaClasses: string[]
         * CSS Classes to be toggled when media query matches.
         * @param {?} classes
         * @return {?}
         */
        function (classes) {
            this._classes = classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdMediaToggleDirective.prototype, "styles", {
        /**
         * mediaStyles: {[key: string]: string}
         * CSS Styles to be toggled when media query matches.
         */
        set: /**
         * mediaStyles: {[key: string]: string}
         * CSS Styles to be toggled when media query matches.
         * @param {?} styles
         * @return {?}
         */
        function (styles) {
            this._styles = styles;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._mediaChange(this._mediaService.query(this._query));
        this._subscription = this._mediaService.registerQuery(this._query).subscribe(function (matches) {
            _this._mediaChange(matches);
        });
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    /**
     * @param {?} matches
     * @return {?}
     */
    TdMediaToggleDirective.prototype._mediaChange = /**
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        this._matches = matches;
        this._changeAttributes();
        this._changeClasses();
        this._changeStyles();
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeAttributes = /**
     * @return {?}
     */
    function () {
        for (var attr in this._attributes) {
            if (this._matches) {
                this._renderer.setAttribute(this._elementRef.nativeElement, attr, this._attributes[attr]);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, attr);
            }
        }
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeClasses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._classes.forEach(function (className) {
            if (_this._matches) {
                _this._renderer.addClass(_this._elementRef.nativeElement, className);
            }
            else {
                _this._renderer.removeClass(_this._elementRef.nativeElement, className);
            }
        });
    };
    /**
     * @return {?}
     */
    TdMediaToggleDirective.prototype._changeStyles = /**
     * @return {?}
     */
    function () {
        for (var style in this._styles) {
            if (this._matches) {
                this._renderer.setStyle(this._elementRef.nativeElement, style, this._styles[style]);
            }
            else {
                this._renderer.removeStyle(this._elementRef.nativeElement, style);
            }
        }
    };
    TdMediaToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdMediaToggle]',
                },] }
    ];
    /** @nocollapse */
    TdMediaToggleDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: TdMediaService }
    ]; };
    TdMediaToggleDirective.propDecorators = {
        query: [{ type: Input, args: ['tdMediaToggle',] }],
        attributes: [{ type: Input, args: ['mediaAttributes',] }],
        classes: [{ type: Input, args: ['mediaClasses',] }],
        styles: [{ type: Input, args: ['mediaStyles',] }]
    };
    return TdMediaToggleDirective;
}());
export { TdMediaToggleDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsibWVkaWEvZGlyZWN0aXZlcy9tZWRpYS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTNEO0lBcURFLGdDQUFvQixTQUFvQixFQUFVLFdBQXVCLEVBQVUsYUFBNkI7UUFBNUYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBN0N4RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQTRCLEVBQUUsQ0FBQztRQUMxQyxZQUFPLEdBQTRCLEVBQUUsQ0FBQztRQUN0QyxhQUFRLEdBQWEsRUFBRSxDQUFDO0lBMENvRixDQUFDO0lBbkNySCxzQkFDSSx5Q0FBSztRQU5UOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2FBQ2hFO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTtRQUxkOzs7V0FHRzs7Ozs7OztRQUNILFVBQ2UsVUFBZTtZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFPO1FBTFg7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDWSxPQUFpQjtZQUMz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QW9CcEIsS0FBSyxTQUFDLGVBQWU7NkJBWXJCLEtBQUssU0FBQyxpQkFBaUI7MEJBU3ZCLEtBQUssU0FBQyxjQUFjO3lCQVNwQixLQUFLLFNBQUMsYUFBYTs7SUF5RHRCLDZCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F0R1ksc0JBQXNCOzs7SUFFakMsK0NBQW9DOztJQUVwQyx3Q0FBdUI7O0lBQ3ZCLDBDQUFrQzs7SUFDbEMsNkNBQWtEOztJQUNsRCx5Q0FBOEM7O0lBQzlDLDBDQUFnQzs7SUEwQ3BCLDJDQUE0Qjs7SUFBRSw2Q0FBK0I7O0lBQUUsK0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRkTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVkaWEuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZE1lZGlhVG9nZ2xlXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkTWVkaWFUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfcXVlcnk6IHN0cmluZztcbiAgcHJpdmF0ZSBfbWF0Y2hlczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9hdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuICBwcml2YXRlIF9zdHlsZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gIHByaXZhdGUgX2NsYXNzZXM6IHN0cmluZ1tdID0gW107XG5cbiAgLyoqXG4gICAqIHRkTWVkaWFUb2dnbGU6IHN0cmluZ1xuICAgKiBNZWRpYSBxdWVyeSB1c2VkIHRvIGV2YWx1YXRlIHNjcmVlbi93aW5kb3cgc2l6ZS5cbiAgICogVG9nZ2xlcyBhdHRyaWJ1dGVzLCBjbGFzc2VzIGFuZCBzdHlsZXMgaWYgbWVkaWEgcXVlcnkgaXMgbWF0Y2hlZC5cbiAgICovXG4gIEBJbnB1dCgndGRNZWRpYVRvZ2dsZScpXG4gIHNldCBxdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWVyeSBuZWVkZWQgZm9yIFt0ZE1lZGlhVG9nZ2xlXSBkaXJlY3RpdmUuJyk7XG4gICAgfVxuICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogbWVkaWFBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuICAgKiBBdHRyaWJ1dGVzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYUF0dHJpYnV0ZXMnKVxuICBzZXQgYXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBhbnkpIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBtZWRpYUNsYXNzZXM6IHN0cmluZ1tdXG4gICAqIENTUyBDbGFzc2VzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYUNsYXNzZXMnKVxuICBzZXQgY2xhc3NlcyhjbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2NsYXNzZXMgPSBjbGFzc2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lZGlhU3R5bGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxuICAgKiBDU1MgU3R5bGVzIHRvIGJlIHRvZ2dsZWQgd2hlbiBtZWRpYSBxdWVyeSBtYXRjaGVzLlxuICAgKi9cbiAgQElucHV0KCdtZWRpYVN0eWxlcycpXG4gIHNldCBzdHlsZXMoc3R5bGVzOiBhbnkpIHtcbiAgICB0aGlzLl9zdHlsZXMgPSBzdHlsZXM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tZWRpYVNlcnZpY2U6IFRkTWVkaWFTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9tZWRpYUNoYW5nZSh0aGlzLl9tZWRpYVNlcnZpY2UucXVlcnkodGhpcy5fcXVlcnkpKTtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9tZWRpYVNlcnZpY2UucmVnaXN0ZXJRdWVyeSh0aGlzLl9xdWVyeSkuc3Vic2NyaWJlKChtYXRjaGVzOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLl9tZWRpYUNoYW5nZShtYXRjaGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21lZGlhQ2hhbmdlKG1hdGNoZXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9tYXRjaGVzID0gbWF0Y2hlcztcbiAgICB0aGlzLl9jaGFuZ2VBdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fY2hhbmdlQ2xhc3NlcygpO1xuICAgIHRoaXMuX2NoYW5nZVN0eWxlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlQXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBhdHRyIGluIHRoaXMuX2F0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICh0aGlzLl9tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGF0dHIsIHRoaXMuX2F0dHJpYnV0ZXNbYXR0cl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYXR0cik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlQ2xhc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VTdHlsZXMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgc3R5bGUgaW4gdGhpcy5fc3R5bGVzKSB7XG4gICAgICBpZiAodGhpcy5fbWF0Y2hlcykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0eWxlLCB0aGlzLl9zdHlsZXNbc3R5bGVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3R5bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=