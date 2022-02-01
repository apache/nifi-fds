/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb/breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
export class TdBreadcrumbComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvYnJlYWRjcnVtYnMvIiwic291cmNlcyI6WyJicmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUVYLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFZdkIsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUEyRGhDLFlBQW9CLFdBQXVCLEVBQVUsa0JBQXFDO1FBQXRFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTFEbEYsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFXLGVBQWUsQ0FBQztJQXVENEMsQ0FBQzs7Ozs7SUFwRDlGLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLGFBQWEsQ0FBQyxhQUFxQjtRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUdELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFXLFdBQVcsQ0FBQyxXQUFvQjtRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUtELElBQUksWUFBWSxDQUFDLGFBQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBS0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBS0QsSUFDSSxjQUFjO1FBQ2hCLGdGQUFnRjtRQUNoRixxRkFBcUY7UUFDckYsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDOzs7O0lBSUQsZUFBZTtRQUNiLHFEQUFxRDtRQUNyRCxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsbUJBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzFGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUtELGdCQUFnQixDQUFDLEtBQVk7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBRTNDLG9PQUEwQzs7Z0JBRTFDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsMEJBQTBCO2lCQUNsQztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFoQkMsVUFBVTtZQUlWLGlCQUFpQjs7OzZCQWlFaEIsV0FBVyxTQUFDLGVBQWU7Ozs7Ozs7SUFuRDVCLDhDQUFzQzs7Ozs7SUFDdEMsdUNBQTJCOzs7OztJQUMzQiw2Q0FBcUM7Ozs7O0lBQ3JDLCtDQUFpRDs7Ozs7SUF1RHJDLDRDQUErQjs7Ozs7SUFBRSxtREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1icmVhZGNydW1iLCBhW3RkLWJyZWFkY3J1bWJdJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtYXQtYnV0dG9uIHRkLWJyZWFkY3J1bWInLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2Rpc3BsYXlDcnVtYjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9kaXNwbGF5SWNvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX3NlcGFyYXRvckljb246IHN0cmluZyA9ICdjaGV2cm9uX3JpZ2h0JztcblxuICAvLyBTZXRzIHRoZSBpY29uIHVybCBzaG93biBiZXR3ZWVuIGJyZWFkY3J1bWJzLiBEZWZhdWx0cyB0byAnY2hldnJvbl9yaWdodCdcbiAgcHVibGljIGdldCBzZXBhcmF0b3JJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvckljb247XG4gIH1cbiAgcHVibGljIHNldCBzZXBhcmF0b3JJY29uKHNlcGFyYXRvckljb246IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvckljb24gPSBzZXBhcmF0b3JJY29uO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTaG91bGQgc2hvdyB0aGUgcmlnaHQgY2hldnJvbiBvciBub3QgYmVmb3JlIHRoZSBsYWJlbFxuICBwdWJsaWMgZ2V0IGRpc3BsYXlJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5SWNvbjtcbiAgfVxuICBwdWJsaWMgc2V0IGRpc3BsYXlJY29uKGRpc3BsYXlJY29uOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzcGxheUljb24gPSBkaXNwbGF5SWNvbjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlDcnVtYigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzcGxheSB0aGUgY3J1bWIgb3Igbm90XG4gICAqL1xuICBzZXQgZGlzcGxheUNydW1iKHNob3VsZERpc3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNwbGF5Q3J1bWIgPSBzaG91bGREaXNwbGF5O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2lkdGggb2YgdGhlIERPTSBlbGVtZW50IG9mIHRoZSBjcnVtYlxuICAgKi9cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRpc3BsYXkgc3R5bGUgb2YgdGhlIGNydW1iXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKVxuICBnZXQgZGlzcGxheUJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICAvLyBTZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSBvbiB0aGUgY29tcG9uZW50LCBqdXN0IGluIGNhc2UgdGhlIGVuZCB1c2VyIGlzIGhpZGluZ1xuICAgIC8vIGFuZCBzaG93aW5nIHRoZW0gaW5zdGVhZCBvZiB0aGUgY29tcG9uZW50IGRvaW5nIGl0c2VsZiBmb3IgcmVhc29ucyBsaWtlIHJlc3BvbnNpdmVcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheUNydW1iID8gdW5kZWZpbmVkIDogJ25vbmUnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBzZXQgdGhlIHdpZHRoIGZyb20gdGhlIGFjdHVhbCByZW5kZXJlZCBET00gZWxlbWVudFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fd2lkdGggPSAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGNsaWNrIHByb3BhZ2F0aW9uIHdoZW4gY2xpY2tpbmcgb24gaWNvblxuICAgKi9cbiAgX2hhbmRsZUljb25DbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iXX0=