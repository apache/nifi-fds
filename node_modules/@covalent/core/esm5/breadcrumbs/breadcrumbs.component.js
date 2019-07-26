/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, } from '@angular/core';
import { Subscription, Subject, fromEvent, merge, } from 'rxjs';
import { debounceTime, distinctUntilChanged, } from 'rxjs/operators';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
var TdBreadcrumbsComponent = /** @class */ (function () {
    function TdBreadcrumbsComponent(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        // the list of hidden breadcrumbs not shown right now (responsive)
        this.hiddenBreadcrumbs = [];
        /**
         * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
         */
        this.separatorIcon = 'chevron_right';
    }
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe(function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout(function () {
                    _this._calculateVisibility();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.setCrumbIcons();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
    };
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "nativeElementWidth", {
        /*
        * Current width of the element container
        */
        get: /*
          * Current width of the element container
          */
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var element = ((/** @type {?} */ (this._elementRef.nativeElement)));
            // Need to take into account border, margin and padding that might be around all the crumbs
            /** @type {?} */
            var style = window.getComputedStyle(element);
            /** @type {?} */
            var borderLeft = parseInt(style.borderLeft, 10);
            /** @type {?} */
            var borderRight = parseInt(style.borderRight, 10);
            /** @type {?} */
            var marginLeft = parseInt(style.marginLeft, 10);
            /** @type {?} */
            var marginRight = parseInt(style.marginRight, 10);
            /** @type {?} */
            var paddingLeft = parseInt(style.paddingLeft, 10);
            /** @type {?} */
            var paddingRight = parseInt(style.paddingRight, 10);
            return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBreadcrumbsComponent.prototype, "count", {
        /**
         * The total count of individual breadcrumbs
         */
        get: /**
         * The total count of individual breadcrumbs
         * @return {?}
         */
        function () {
            return this._breadcrumbs ? this._breadcrumbs.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the crumb icon separators
     */
    /**
     * Set the crumb icon separators
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype.setCrumbIcons = /**
     * Set the crumb icon separators
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var breadcrumbArray = this._breadcrumbs.toArray();
        if (breadcrumbArray.length > 0) {
            // don't show the icon on the last breadcrumb
            breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
        }
        breadcrumbArray.forEach(function (breadcrumb) {
            breadcrumb.separatorIcon = _this.separatorIcon;
        });
    };
    /**
     * @return {?}
     */
    TdBreadcrumbsComponent.prototype._calculateVisibility = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var crumbsArray = this._breadcrumbs.toArray();
        /** @type {?} */
        var crumbWidthSum = 0;
        /** @type {?} */
        var hiddenCrumbs = [];
        // loop through crumbs in reverse order to calculate which ones should be removed
        for (var i = crumbsArray.length - 1; i >= 0; i--) {
            /** @type {?} */
            var breadcrumb = crumbsArray[i];
            // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
            // and hide it
            if ((crumbWidthSum + breadcrumb.width) > this.nativeElementWidth) {
                breadcrumb.displayCrumb = false;
                hiddenCrumbs.push(breadcrumb);
            }
            else {
                // else we show it
                breadcrumb.displayCrumb = true;
            }
            crumbWidthSum += breadcrumb.width;
        }
        this.hiddenBreadcrumbs = hiddenCrumbs;
        this._changeDetectorRef.markForCheck();
    };
    TdBreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-breadcrumbs',
                    template: "<ng-content></ng-content>\n",
                    /* tslint:disable-next-line */
                    host: {
                        class: 'td-breadcrumbs',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;width:100%}:host.td-breadcrumbs{white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    TdBreadcrumbsComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    TdBreadcrumbsComponent.propDecorators = {
        _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent,] }],
        separatorIcon: [{ type: Input, args: ['separatorIcon',] }]
    };
    return TdBreadcrumbsComponent;
}());
export { TdBreadcrumbsComponent };
if (false) {
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._resizeSubscription;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._widthSubject;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._resizing;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._breadcrumbs;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
     * @type {?}
     */
    TdBreadcrumbsComponent.prototype.separatorIcon;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._elementRef;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvIiwic291cmNlcyI6WyJicmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFNBQVMsRUFHVCx1QkFBdUIsRUFHdkIsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsU0FBUyxFQUNULEtBQUssR0FDTixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUU7SUEwQkUsZ0NBQW9CLFdBQXVCLEVBQ3ZCLGtCQUFxQztRQURyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBZmpELHdCQUFtQixHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3ZELGtCQUFhLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDdkQsY0FBUyxHQUFZLEtBQUssQ0FBQzs7UUFLbkMsc0JBQWlCLEdBQTRCLEVBQUUsQ0FBQzs7OztRQUt4QixrQkFBYSxHQUFXLGVBQWUsQ0FBQztJQUloRSxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQUEsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQzlCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixZQUFZLENBQUMsRUFBRSxDQUFDLENBQ2pCLEVBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENB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MkNBQW1DOztJQUduQyw4Q0FBdUY7O0lBRXZGLG1EQUFnRDs7Ozs7SUFLaEQsK0NBQWdFOztJQUVwRCw2Q0FBK0I7O0lBQy9CLG9EQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRG9DaGVjayxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgU3Vic2NyaXB0aW9uLFxuICBTdWJqZWN0LFxuICBmcm9tRXZlbnQsXG4gIG1lcmdlLFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtYnJlYWRjcnVtYnMnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9yZXNpemVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gYWxsIHRoZSBzdWIgY29tcG9uZW50cywgd2hpY2ggYXJlIHRoZSBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRCcmVhZGNydW1iQ29tcG9uZW50KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvICdjaGV2cm9uX3JpZ2h0Jy5cbiAgICovXG4gIEBJbnB1dCgnc2VwYXJhdG9ySWNvbicpIHNlcGFyYXRvckljb246IHN0cmluZyA9ICdjaGV2cm9uX3JpZ2h0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcmVzaXppbmcpIHtcbiAgICAgICAgdGhpcy5fcmVzaXppbmcgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jYWxjdWxhdGVWaXNpYmlsaXR5KCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KHRoaXMubmF0aXZlRWxlbWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDcnVtYkljb25zKCk7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICogQ3VycmVudCB3aWR0aCBvZiB0aGUgZWxlbWVudCBjb250YWluZXJcbiAgKi9cbiAgZ2V0IG5hdGl2ZUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudCA9ICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBOZWVkIHRvIHRha2UgaW50byBhY2NvdW50IGJvcmRlciwgbWFyZ2luIGFuZCBwYWRkaW5nIHRoYXQgbWlnaHQgYmUgYXJvdW5kIGFsbCB0aGUgY3J1bWJzXG4gICAgbGV0IHN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgbGV0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBsZXQgYm9yZGVyUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0LCAxMCk7XG4gICAgbGV0IG1hcmdpbkxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcbiAgICBsZXQgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgbGV0IHBhZGRpbmdMZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCwgMTApO1xuICAgIGxldCBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdSaWdodCwgMTApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBib3JkZXJMZWZ0IC0gYm9yZGVyUmlnaHQgLSBtYXJnaW5MZWZ0IC0gbWFyZ2luUmlnaHQgLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdG90YWwgY291bnQgb2YgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JyZWFkY3J1bWJzID8gdGhpcy5fYnJlYWRjcnVtYnMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNydW1iIGljb24gc2VwYXJhdG9yc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRDcnVtYkljb25zKCk6IHZvaWQge1xuICAgIGxldCBicmVhZGNydW1iQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIGlmIChicmVhZGNydW1iQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgaWNvbiBvbiB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBicmVhZGNydW1iQXJyYXlbYnJlYWRjcnVtYkFycmF5Lmxlbmd0aCAtIDFdLl9kaXNwbGF5SWNvbiA9IGZhbHNlO1xuICAgIH1cbiAgICBicmVhZGNydW1iQXJyYXkuZm9yRWFjaCgoYnJlYWRjcnVtYjogVGRCcmVhZGNydW1iQ29tcG9uZW50KSA9PiB7XG4gICAgICBicmVhZGNydW1iLnNlcGFyYXRvckljb24gPSB0aGlzLnNlcGFyYXRvckljb247XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjdWxhdGVWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIGxldCBjcnVtYnNBcnJheTogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSB0aGlzLl9icmVhZGNydW1icy50b0FycmF5KCk7XG4gICAgbGV0IGNydW1iV2lkdGhTdW06IG51bWJlciA9IDA7XG4gICAgbGV0IGhpZGRlbkNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBbXTtcbiAgICAvLyBsb29wIHRocm91Z2ggY3J1bWJzIGluIHJldmVyc2Ugb3JkZXIgdG8gY2FsY3VsYXRlIHdoaWNoIG9uZXMgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjcnVtYnNBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCA9IGNydW1ic0FycmF5W2ldO1xuICAgICAgLy8gaWYgY3J1bWIgZXhjZWVkcyB3aWR0aCwgdGhlbiB3ZSBza2lwIGl0IGZyb20gdGhlIHN1bSBhbmQgYWRkIGl0IGludG8gdGhlIGhpZGRlbmNydW1icyBhcnJheVxuICAgICAgLy8gYW5kIGhpZGUgaXRcbiAgICAgIGlmICgoY3J1bWJXaWR0aFN1bSArIGJyZWFkY3J1bWIud2lkdGgpID4gdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSBmYWxzZTtcbiAgICAgICAgaGlkZGVuQ3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIHdlIHNob3cgaXRcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY3J1bWJXaWR0aFN1bSArPSBicmVhZGNydW1iLndpZHRoO1xuICAgIH1cbiAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzID0gaGlkZGVuQ3J1bWJzO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiJdfQ==