import { Component, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, HostBinding, ContentChildren, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subscription, Subject, merge, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdBreadcrumbComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     */
    constructor(_elementRef, _changeDetectorRef) {
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._displayCrumb = true;
        this._width = 0;
        this._displayIcon = true;
        this._separatorIcon = 'chevron_right';
    }
    // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
    /**
     * @return {?}
     */
    get separatorIcon() {
        return this._separatorIcon;
    }
    /**
     * @param {?} separatorIcon
     * @return {?}
     */
    set separatorIcon(separatorIcon) {
        this._separatorIcon = separatorIcon;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
    // Should show the right chevron or not before the label
    /**
     * @return {?}
     */
    get displayIcon() {
        return this._displayIcon;
    }
    /**
     * @param {?} displayIcon
     * @return {?}
     */
    set displayIcon(displayIcon) {
        this._displayIcon = displayIcon;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    get displayCrumb() {
        return this._displayCrumb;
    }
    /**
     * Whether to display the crumb or not
     * @param {?} shouldDisplay
     * @return {?}
     */
    set displayCrumb(shouldDisplay) {
        this._displayCrumb = shouldDisplay;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * Width of the DOM element of the crumb
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * Gets the display style of the crumb
     * @return {?}
     */
    get displayBinding() {
        // Set the display to none on the component, just in case the end user is hiding
        // and showing them instead of the component doing itself for reasons like responsive
        return this._displayCrumb ? undefined : 'none';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // set the width from the actual rendered DOM element
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._width = ((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width;
            this._changeDetectorRef.markForCheck();
        }));
    }
    /**
     * Stop click propagation when clicking on icon
     * @param {?} event
     * @return {?}
     */
    _handleIconClick(event) {
        event.stopPropagation();
        event.preventDefault();
    }
}
TdBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-breadcrumb, a[td-breadcrumb]',
                template: "<ng-content></ng-content>\n<mat-icon\n  *ngIf=\"displayIcon\"\n  class=\"td-breadcrumb-separator-icon\"\n  [style.cursor]=\"'default'\"\n  (click)=\"_handleIconClick($event)\"\n>\n  {{ separatorIcon }}\n</mat-icon>\n",
                /* tslint:disable-next-line */
                host: {
                    class: 'mat-button td-breadcrumb',
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host.td-breadcrumb{-ms-flex-align:center;-ms-flex-direction:row;-ms-flex-line-pack:center;-ms-flex-pack:end;align-content:center;align-items:center;box-sizing:border-box;display:inline-block;flex-direction:row;justify-content:flex-end;max-width:100%}:host.td-breadcrumb ::ng-deep>*{margin:0 10px}:host .td-breadcrumb-separator-icon{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}:host.mat-button{min-width:0;padding:0}"]
            }] }
];
/** @nocollapse */
TdBreadcrumbComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
TdBreadcrumbComponent.propDecorators = {
    displayBinding: [{ type: HostBinding, args: ['style.display',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._displayCrumb;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._width;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._displayIcon;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._separatorIcon;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdBreadcrumbComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumbs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdBreadcrumbsComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumbs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CovalentBreadcrumbsModule {
}
CovalentBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatIconModule],
                declarations: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
                exports: [TdBreadcrumbsComponent, TdBreadcrumbComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-core-breadcrumbs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentBreadcrumbsModule, TdBreadcrumbComponent, TdBreadcrumbsComponent };
//# sourceMappingURL=covalent-core-breadcrumbs.js.map
