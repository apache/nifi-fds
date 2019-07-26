/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
var RouterPathService = /** @class */ (function () {
    function RouterPathService(_router) {
        this._router = _router;
        this._router.events.pipe(filter(function (e) { return e instanceof RoutesRecognized; }), pairwise()).subscribe(function (e) {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        });
    }
    /*
    * Utility function to get the route the user previously went to
    * good for use in a "back button"
    */
    /*
      * Utility function to get the route the user previously went to
      * good for use in a "back button"
      */
    /**
     * @return {?}
     */
    RouterPathService.prototype.getPreviousRoute = /*
      * Utility function to get the route the user previously went to
      * good for use in a "back button"
      */
    /**
     * @return {?}
     */
    function () {
        return RouterPathService._previousRoute;
    };
    RouterPathService._previousRoute = '/';
    RouterPathService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RouterPathService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return RouterPathService;
}());
export { RouterPathService };
if (false) {
    /** @type {?} */
    RouterPathService._previousRoute;
    /** @type {?} */
    RouterPathService.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXBhdGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL3NlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQ7SUFHRSwyQkFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixNQUFNLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLFlBQVksZ0JBQWdCLEVBQTdCLENBQTZCLENBQUMsRUFDakQsUUFBUSxFQUFFLENBQ1gsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFRO1lBQ25CLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztNQUdFOzs7Ozs7OztJQUNGLDRDQUFnQjs7Ozs7OztJQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUMsY0FBYyxDQUFDO0lBQzFDLENBQUM7SUFoQlksZ0NBQWMsR0FBVyxHQUFHLENBQUM7O2dCQUYzQyxVQUFVOzs7O2dCQUpGLE1BQU07O0lBdUJmLHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksaUJBQWlCOzs7SUFDOUIsaUNBQTRDOztJQUM5QixvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyUGF0aFNlcnZpY2Uge1xucHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzUm91dGU6IHN0cmluZyA9ICcvJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoKGU6IGFueSkgPT4gZSBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICApLnN1YnNjcmliZSgoZTogYW55W10pID0+IHtcbiAgICAgIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlID0gZVswXS51cmxBZnRlclJlZGlyZWN0cztcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogVXRpbGl0eSBmdW5jdGlvbiB0byBnZXQgdGhlIHJvdXRlIHRoZSB1c2VyIHByZXZpb3VzbHkgd2VudCB0b1xuICAqIGdvb2QgZm9yIHVzZSBpbiBhIFwiYmFjayBidXR0b25cIlxuICAqL1xuICBnZXRQcmV2aW91c1JvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlO1xuICB9XG59XG4iXX0=