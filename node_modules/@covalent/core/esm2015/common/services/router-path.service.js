/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
export class RouterPathService {
    /**
     * @param {?} _router
     */
    constructor(_router) {
        this._router = _router;
        this._router.events.pipe(filter((e) => e instanceof RoutesRecognized), pairwise()).subscribe((e) => {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        });
    }
    /*
      * Utility function to get the route the user previously went to
      * good for use in a "back button"
      */
    /**
     * @return {?}
     */
    getPreviousRoute() {
        return RouterPathService._previousRoute;
    }
}
RouterPathService._previousRoute = '/';
RouterPathService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouterPathService.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /** @type {?} */
    RouterPathService._previousRoute;
    /** @type {?} */
    RouterPathService.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXBhdGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlLyIsInNvdXJjZXMiOlsiY29tbW9uL3NlcnZpY2VzL3JvdXRlci1wYXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNELE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEQsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZLGdCQUFnQixDQUFDLEVBQ2pELFFBQVEsRUFBRSxDQUNYLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDdkIsaUJBQWlCLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBTUQsZ0JBQWdCO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDMUMsQ0FBQzs7QUFoQlksZ0NBQWMsR0FBVyxHQUFHLENBQUM7O1lBRjNDLFVBQVU7Ozs7WUFKRixNQUFNOzs7O0lBTWYsaUNBQTRDOztJQUM5QixvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVyUGF0aFNlcnZpY2Uge1xucHJpdmF0ZSBzdGF0aWMgX3ByZXZpb3VzUm91dGU6IHN0cmluZyA9ICcvJztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLl9yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICBmaWx0ZXIoKGU6IGFueSkgPT4gZSBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpLFxuICAgICAgcGFpcndpc2UoKSxcbiAgICApLnN1YnNjcmliZSgoZTogYW55W10pID0+IHtcbiAgICAgIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlID0gZVswXS51cmxBZnRlclJlZGlyZWN0cztcbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICogVXRpbGl0eSBmdW5jdGlvbiB0byBnZXQgdGhlIHJvdXRlIHRoZSB1c2VyIHByZXZpb3VzbHkgd2VudCB0b1xuICAqIGdvb2QgZm9yIHVzZSBpbiBhIFwiYmFjayBidXR0b25cIlxuICAqL1xuICBnZXRQcmV2aW91c1JvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlO1xuICB9XG59XG4iXX0=