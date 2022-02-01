/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumbs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, } from '@angular/core';
import { Subscription, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
export class TdBreadcrumbsComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resizeSubscription = Subscription.EMPTY;
        this._widthSubject = new Subject();
        this._resizing = false;
        this._separatorIcon = 'chevron_right';
        // the list of hidden breadcrumbs not shown right now (responsive)
        this.hiddenBreadcrumbs = [];
    }
    /**
     * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
     * @param {?} separatorIcon
     * @return {?}
     */
    set separatorIcon(separatorIcon) {
        this._separatorIcon = separatorIcon;
        this.setCrumbIcons();
    }
    /**
     * @return {?}
     */
    get separatorIcon() {
        return this._separatorIcon;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged())).subscribe((/**
         * @return {?}
         */
        () => {
            if (!this._resizing) {
                this._resizing = true;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._calculateVisibility();
                    this._resizing = false;
                    this._changeDetectorRef.markForCheck();
                }), 100);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(this.nativeElementWidth);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._contentChildrenSub = this._breadcrumbs.changes.pipe(startWith(this._breadcrumbs)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setCrumbIcons();
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
        this._contentChildrenSub.unsubscribe();
    }
    /*
       * Current width of the element container
       */
    /**
     * @return {?}
     */
    get nativeElementWidth() {
        /** @type {?} */
        const element = (/** @type {?} */ (this._elementRef.nativeElement));
        // Need to take into account border, margin and padding that might be around all the crumbs
        /** @type {?} */
        const style = window.getComputedStyle(element);
        /** @type {?} */
        const borderLeft = parseInt(style.borderLeft, 10);
        /** @type {?} */
        const borderRight = parseInt(style.borderRight, 10);
        /** @type {?} */
        const marginLeft = parseInt(style.marginLeft, 10);
        /** @type {?} */
        const marginRight = parseInt(style.marginRight, 10);
        /** @type {?} */
        const paddingLeft = parseInt(style.paddingLeft, 10);
        /** @type {?} */
        const paddingRight = parseInt(style.paddingRight, 10);
        return (element.getBoundingClientRect().width -
            borderLeft -
            borderRight -
            marginLeft -
            marginRight -
            paddingLeft -
            paddingRight);
    }
    /**
     * The total count of individual breadcrumbs
     * @return {?}
     */
    get count() {
        return this._breadcrumbs ? this._breadcrumbs.length : 0;
    }
    /**
     * Set the crumb icon separators
     * @private
     * @return {?}
     */
    setCrumbIcons() {
        if (this._breadcrumbs) {
            /** @type {?} */
            const breadcrumbArray = this._breadcrumbs.toArray();
            breadcrumbArray.forEach((/**
             * @param {?} breadcrumb
             * @param {?} index
             * @return {?}
             */
            (breadcrumb, index) => {
                breadcrumb.separatorIcon = this.separatorIcon;
                // don't show the icon on the last breadcrumb
                breadcrumb.displayIcon = index < breadcrumbArray.length - 1;
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _calculateVisibility() {
        /** @type {?} */
        const crumbsArray = this._breadcrumbs.toArray();
        /** @type {?} */
        let crumbWidthSum = 0;
        /** @type {?} */
        const hiddenCrumbs = [];
        // loop through crumbs in reverse order to calculate which ones should be removed
        for (let i = crumbsArray.length - 1; i >= 0; i--) {
            /** @type {?} */
            const breadcrumb = crumbsArray[i];
            // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
            // and hide it
            if (crumbWidthSum + breadcrumb.width > this.nativeElementWidth) {
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
    }
}
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
TdBreadcrumbsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TdBreadcrumbsComponent.propDecorators = {
    _breadcrumbs: [{ type: ContentChildren, args: [TdBreadcrumbComponent, { descendants: true },] }],
    separatorIcon: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._resizeSubscription;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._contentChildrenSub;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._resizing;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._separatorIcon;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype._breadcrumbs;
    /** @type {?} */
    TdBreadcrumbsComponent.prototype.hiddenBreadcrumbs;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbsComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2JyZWFkY3J1bWJzLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsU0FBUyxFQUdULHVCQUF1QixFQUd2QixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFZMUUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUF1QmpDLFlBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXRCbEYsd0JBQW1CLEdBQWlCLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDdkQsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUV2RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsZUFBZSxDQUFDOztRQUtqRCxzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO0lBYTZDLENBQUM7Ozs7OztJQVI5RixJQUFvQixhQUFhLENBQUMsYUFBcUI7UUFDckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMs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QUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFFMUIsdUNBQTJDOztnQkFFM0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxnQkFBZ0I7aUJBQ3hCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQWxCQyxVQUFVO1lBRFYsaUJBQWlCOzs7MkJBNEJoQixlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzRCQU81RCxLQUFLOzs7Ozs7O0lBZE4scURBQStEOzs7OztJQUMvRCwrQ0FBK0Q7Ozs7O0lBQy9ELHFEQUEwQzs7Ozs7SUFDMUMsMkNBQW1DOzs7OztJQUNuQyxnREFBaUQ7O0lBR2pELDhDQUE4Rzs7SUFFOUcsbURBQWdEOzs7OztJQWFwQyw2Q0FBK0I7Ozs7O0lBQUUsb0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBEb0NoZWNrLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGRCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtYnJlYWRjcnVtYnMnLFxuICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYnMuY29tcG9uZW50Lmh0bWwnLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgaG9zdDoge1xuICAgIGNsYXNzOiAndGQtYnJlYWRjcnVtYnMnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9jb250ZW50Q2hpbGRyZW5TdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcmVzaXppbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VwYXJhdG9ySWNvbjogc3RyaW5nID0gJ2NoZXZyb25fcmlnaHQnO1xuXG4gIC8vIGFsbCB0aGUgc3ViIGNvbXBvbmVudHMsIHdoaWNoIGFyZSB0aGUgaW5kaXZpZHVhbCBicmVhZGNydW1ic1xuICBAQ29udGVudENoaWxkcmVuKFRkQnJlYWRjcnVtYkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBfYnJlYWRjcnVtYnM6IFF1ZXJ5TGlzdDxUZEJyZWFkY3J1bWJDb21wb25lbnQ+O1xuICAvLyB0aGUgbGlzdCBvZiBoaWRkZW4gYnJlYWRjcnVtYnMgbm90IHNob3duIHJpZ2h0IG5vdyAocmVzcG9uc2l2ZSlcbiAgaGlkZGVuQnJlYWRjcnVtYnM6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGljb24gdXJsIHNob3duIGJldHdlZW4gYnJlYWRjcnVtYnMuIERlZmF1bHRzIHRvICdjaGV2cm9uX3JpZ2h0Jy5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgc2VwYXJhdG9ySWNvbihzZXBhcmF0b3JJY29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXBhcmF0b3JJY29uID0gc2VwYXJhdG9ySWNvbjtcbiAgICB0aGlzLnNldENydW1iSWNvbnMoKTtcbiAgfVxuICBwdWJsaWMgZ2V0IHNlcGFyYXRvckljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VwYXJhdG9ySWNvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKGRlYm91bmNlVGltZSgxMCkpLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NhbGN1bGF0ZVZpc2liaWxpdHkoKTtcbiAgICAgICAgICB0aGlzLl9yZXNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQodGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250ZW50Q2hpbGRyZW5TdWIgPSB0aGlzLl9icmVhZGNydW1icy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2JyZWFkY3J1bWJzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q3J1bWJJY29ucygpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9jb250ZW50Q2hpbGRyZW5TdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qXG4gICAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIGVsZW1lbnQgY29udGFpbmVyXG4gICAqL1xuICBnZXQgbmF0aXZlRWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIC8vIE5lZWQgdG8gdGFrZSBpbnRvIGFjY291bnQgYm9yZGVyLCBtYXJnaW4gYW5kIHBhZGRpbmcgdGhhdCBtaWdodCBiZSBhcm91bmQgYWxsIHRoZSBjcnVtYnNcbiAgICBjb25zdCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGJvcmRlckxlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnQsIDEwKTtcbiAgICBjb25zdCBib3JkZXJSaWdodDogbnVtYmVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyUmlnaHQsIDEwKTtcbiAgICBjb25zdCBtYXJnaW5MZWZ0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5tYXJnaW5MZWZ0LCAxMCk7XG4gICAgY29uc3QgbWFyZ2luUmlnaHQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLm1hcmdpblJpZ2h0LCAxMCk7XG4gICAgY29uc3QgcGFkZGluZ0xlZnQ6IG51bWJlciA9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0LCAxMCk7XG4gICAgY29uc3QgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSBwYXJzZUludChzdHlsZS5wYWRkaW5nUmlnaHQsIDEwKTtcblxuICAgIHJldHVybiAoXG4gICAgICBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC1cbiAgICAgIGJvcmRlckxlZnQgLVxuICAgICAgYm9yZGVyUmlnaHQgLVxuICAgICAgbWFyZ2luTGVmdCAtXG4gICAgICBtYXJnaW5SaWdodCAtXG4gICAgICBwYWRkaW5nTGVmdCAtXG4gICAgICBwYWRkaW5nUmlnaHRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBjb3VudCBvZiBpbmRpdmlkdWFsIGJyZWFkY3J1bWJzXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYnJlYWRjcnVtYnMgPyB0aGlzLl9icmVhZGNydW1icy5sZW5ndGggOiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY3J1bWIgaWNvbiBzZXBhcmF0b3JzXG4gICAqL1xuICBwcml2YXRlIHNldENydW1iSWNvbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2JyZWFkY3J1bWJzKSB7XG4gICAgICBjb25zdCBicmVhZGNydW1iQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgICAgYnJlYWRjcnVtYkFycmF5LmZvckVhY2goKGJyZWFkY3J1bWI6IFRkQnJlYWRjcnVtYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBicmVhZGNydW1iLnNlcGFyYXRvckljb24gPSB0aGlzLnNlcGFyYXRvckljb247XG4gICAgICAgIC8vIGRvbid0IHNob3cgdGhlIGljb24gb24gdGhlIGxhc3QgYnJlYWRjcnVtYlxuICAgICAgICBicmVhZGNydW1iLmRpc3BsYXlJY29uID0gaW5kZXggPCBicmVhZGNydW1iQXJyYXkubGVuZ3RoIC0gMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgY29uc3QgY3J1bWJzQXJyYXk6IFRkQnJlYWRjcnVtYkNvbXBvbmVudFtdID0gdGhpcy5fYnJlYWRjcnVtYnMudG9BcnJheSgpO1xuICAgIGxldCBjcnVtYldpZHRoU3VtOiBudW1iZXIgPSAwO1xuICAgIGNvbnN0IGhpZGRlbkNydW1iczogVGRCcmVhZGNydW1iQ29tcG9uZW50W10gPSBbXTtcbiAgICAvLyBsb29wIHRocm91Z2ggY3J1bWJzIGluIHJldmVyc2Ugb3JkZXIgdG8gY2FsY3VsYXRlIHdoaWNoIG9uZXMgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjcnVtYnNBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgYnJlYWRjcnVtYjogVGRCcmVhZGNydW1iQ29tcG9uZW50ID0gY3J1bWJzQXJyYXlbaV07XG4gICAgICAvLyBpZiBjcnVtYiBleGNlZWRzIHdpZHRoLCB0aGVuIHdlIHNraXAgaXQgZnJvbSB0aGUgc3VtIGFuZCBhZGQgaXQgaW50byB0aGUgaGlkZGVuY3J1bWJzIGFycmF5XG4gICAgICAvLyBhbmQgaGlkZSBpdFxuICAgICAgaWYgKGNydW1iV2lkdGhTdW0gKyBicmVhZGNydW1iLndpZHRoID4gdGhpcy5uYXRpdmVFbGVtZW50V2lkdGgpIHtcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSBmYWxzZTtcbiAgICAgICAgaGlkZGVuQ3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBlbHNlIHdlIHNob3cgaXRcbiAgICAgICAgYnJlYWRjcnVtYi5kaXNwbGF5Q3J1bWIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY3J1bWJXaWR0aFN1bSArPSBicmVhZGNydW1iLndpZHRoO1xuICAgIH1cbiAgICB0aGlzLmhpZGRlbkJyZWFkY3J1bWJzID0gaGlkZGVuQ3J1bWJzO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=