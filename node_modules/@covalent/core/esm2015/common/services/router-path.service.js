/**
 * @fileoverview added by tsickle
 * Generated from: services/router-path.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this._router.events
            .pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        (e) => e instanceof RoutesRecognized)), pairwise())
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            RouterPathService._previousRoute = e[0].urlAfterRedirects;
        }));
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
    /**
     * @type {?}
     * @private
     */
    RouterPathService._previousRoute;
    /**
     * @type {?}
     * @private
     */
    RouterPathService.prototype._router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLXBhdGguc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9jb21tb24vIiwic291cmNlcyI6WyJzZXJ2aWNlcy9yb3V0ZXItcGF0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdsRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTthQUNoQixJQUFJLENBQ0gsTUFBTTs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFlBQVksZ0JBQWdCLEVBQUMsRUFDakQsUUFBUSxFQUFFLENBQ1g7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRTtZQUN0QixpQkFBaUIsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQzVELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7Ozs7SUFNRCxnQkFBZ0I7UUFDZCxPQUFPLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztJQUMxQyxDQUFDOztBQWxCYyxnQ0FBYyxHQUFXLEdBQUcsQ0FBQzs7WUFGN0MsVUFBVTs7OztZQUpGLE1BQU07Ozs7Ozs7SUFNYixpQ0FBNEM7Ozs7O0lBQ2hDLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzUmVjb2duaXplZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IGZpbHRlciwgcGFpcndpc2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0ZXJQYXRoU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIF9wcmV2aW91c1JvdXRlOiBzdHJpbmcgPSAnLyc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5fcm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZTogYW55KSA9PiBlIGluc3RhbmNlb2YgUm91dGVzUmVjb2duaXplZCksXG4gICAgICAgIHBhaXJ3aXNlKCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChlOiBhbnlbXSkgPT4ge1xuICAgICAgICBSb3V0ZXJQYXRoU2VydmljZS5fcHJldmlvdXNSb3V0ZSA9IGVbMF0udXJsQWZ0ZXJSZWRpcmVjdHM7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZ2V0IHRoZSByb3V0ZSB0aGUgdXNlciBwcmV2aW91c2x5IHdlbnQgdG9cbiAgICogZ29vZCBmb3IgdXNlIGluIGEgXCJiYWNrIGJ1dHRvblwiXG4gICAqL1xuICBnZXRQcmV2aW91c1JvdXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFJvdXRlclBhdGhTZXJ2aWNlLl9wcmV2aW91c1JvdXRlO1xuICB9XG59XG4iXX0=