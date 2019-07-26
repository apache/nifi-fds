/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Renderer2, ElementRef, QueryList, ContentChildren, Input, } from '@angular/core';
import { TdExpansionPanelComponent } from './expansion-panel.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
var TdExpansionPanelGroupComponent = /** @class */ (function () {
    function TdExpansionPanelGroupComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._multi = false;
        this._lastOpenedPanels = [];
        this._destroyed = new Subject();
        this._stopWatchingPanels = new Subject();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    Object.defineProperty(TdExpansionPanelGroupComponent.prototype, "multi", {
        /**
         * multi?: boolean
         * Sets whether multiple panels can be opened at a given time.
         * Set to false for accordion mode.
         * Defaults to false.
         */
        set: /**
         * multi?: boolean
         * Sets whether multiple panels can be opened at a given time.
         * Set to false for accordion mode.
         * Defaults to false.
         * @param {?} multi
         * @return {?}
         */
        function (multi) {
            this._multi = coerceBooleanProperty(multi);
            if (this._multi === false && this._lastOpenedPanels.length > 0) {
                this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next(true);
        this._destroyed.unsubscribe();
        this._stopWatchingPanels.next(true);
        this._stopWatchingPanels.unsubscribe();
    };
    /**
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._multi) {
            /** @type {?} */
            var openedPanels = this.expansionPanels.filter(function (expansionPanel) { return expansionPanel.expand; });
            /** @type {?} */
            var numOpenedPanels = openedPanels.length;
            if (numOpenedPanels > 1) {
                this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
            }
        }
        this._attachListeners(this.expansionPanels);
        this.expansionPanels.changes
            .pipe(takeUntil(this._destroyed))
            .subscribe(function (expansionPanels) {
            _this._stopWatchingPanels.next(true);
            _this._stopWatchingPanels.unsubscribe();
            _this._stopWatchingPanels = new Subject();
            _this._attachListeners(expansionPanels);
        });
    };
    /**
     * Opens all expansion panels, only if multi set set to true.
     */
    /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.openAll = /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    function () {
        if (this._multi) {
            this.expansionPanels.forEach(function (expansionPanel) {
                expansionPanel.open();
            });
        }
    };
    /**
     * Closes all expansion panels
     */
    /**
     * Closes all expansion panels
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype.closeAll = /**
     * Closes all expansion panels
     * @return {?}
     */
    function () {
        this.expansionPanels.forEach(function (expansionPanel) {
            expansionPanel.close();
        });
    };
    /**
     * @param {?} expansionPanels
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype._attachListeners = /**
     * @param {?} expansionPanels
     * @return {?}
     */
    function (expansionPanels) {
        var _this = this;
        this._lastOpenedPanels = [];
        expansionPanels.forEach(function (expansionPanel) {
            expansionPanel.expanded
                .pipe(takeUntil(_this._stopWatchingPanels))
                .subscribe(function () {
                /** @type {?} */
                var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    _this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
                _this._lastOpenedPanels.push(expansionPanel);
                if (!_this._multi) {
                    _this._closeAllExcept(expansionPanel);
                }
            });
            expansionPanel.collapsed
                .pipe(takeUntil(_this._stopWatchingPanels))
                .subscribe(function () {
                /** @type {?} */
                var indexOfPanel = _this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    _this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
            });
        });
    };
    /**
     * @param {?} expansionPanel
     * @return {?}
     */
    TdExpansionPanelGroupComponent.prototype._closeAllExcept = /**
     * @param {?} expansionPanel
     * @return {?}
     */
    function (expansionPanel) {
        this.expansionPanels.forEach(function (panel) {
            if (panel !== expansionPanel) {
                panel.close();
            }
        });
    };
    TdExpansionPanelGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-expansion-panel-group',
                    template: "<ng-content></ng-content>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdExpansionPanelGroupComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TdExpansionPanelGroupComponent.propDecorators = {
        multi: [{ type: Input, args: ['multi',] }],
        expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent,] }]
    };
    return TdExpansionPanelGroupComponent;
}());
export { TdExpansionPanelGroupComponent };
if (false) {
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._multi;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._lastOpenedPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._destroyed;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._stopWatchingPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype.expansionPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._renderer;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2V4cGFuc2lvbi1wYW5lbC8iLCJzb3VyY2VzIjpbImV4cGFuc2lvbi1wYW5lbC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsZUFBZSxFQUVmLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQWtDRSx3Q0FBb0IsU0FBb0IsRUFBVSxXQUF1QjtRQUFyRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUEzQmpFLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsc0JBQWlCLEdBQWdDLEVBQUUsQ0FBQztRQUVwRCxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDdEQsd0JBQW1CLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUF1QnJFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsMEJBQTBCLENBQzNCLENBQUM7SUFDSixDQUFDO0lBbkJELHNCQUNJLGlEQUFLO1FBUFQ7Ozs7O1dBS0c7Ozs7Ozs7OztRQUNILFVBQ1UsS0FBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0s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SUFFVSxtREFBNEI7O0lBQUUscURBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2xhc3RPcGVuZWRQYW5lbHM6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3N0b3BXYXRjaGluZ1BhbmVsczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIG11bHRpPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgcGFuZWxzIGNhbiBiZSBvcGVuZWQgYXQgYSBnaXZlbiB0aW1lLlxuICAgKiBTZXQgdG8gZmFsc2UgZm9yIGFjY29yZGlvbiBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGknKVxuICBzZXQgbXVsdGkobXVsdGk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aSk7XG4gICAgaWYgKHRoaXMuX211bHRpID09PSBmYWxzZSAmJiB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KFxuICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzW3RoaXMuX2xhc3RPcGVuZWRQYW5lbHMubGVuZ3RoIC0gMV0sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgZXhwYW5zaW9uUGFuZWxzOiBRdWVyeUxpc3Q8XG4gICAgVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudFxuICA+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICd0ZC1leHBhbnNpb24tcGFuZWwtZ3JvdXAnLFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCh0cnVlKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMubmV4dCh0cnVlKTtcbiAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9tdWx0aSkge1xuICAgICAgY29uc3Qgb3BlbmVkUGFuZWxzOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50W10gPSB0aGlzLmV4cGFuc2lvblBhbmVscy5maWx0ZXIoXG4gICAgICAgIChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4gZXhwYW5zaW9uUGFuZWwuZXhwYW5kLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG51bU9wZW5lZFBhbmVsczogbnVtYmVyID0gb3BlbmVkUGFuZWxzLmxlbmd0aDtcbiAgICAgIGlmIChudW1PcGVuZWRQYW5lbHMgPiAxKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KG9wZW5lZFBhbmVsc1tudW1PcGVuZWRQYW5lbHMgLSAxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0YWNoTGlzdGVuZXJzKHRoaXMuZXhwYW5zaW9uUGFuZWxzKTtcblxuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmNoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZXhwYW5zaW9uUGFuZWxzOiBRdWVyeUxpc3Q8VGRFeHBhbnNpb25QYW5lbENvbXBvbmVudD4pID0+IHtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hMaXN0ZW5lcnMoZXhwYW5zaW9uUGFuZWxzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFsbCBleHBhbnNpb24gcGFuZWxzLCBvbmx5IGlmIG11bHRpIHNldCBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHB1YmxpYyBvcGVuQWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9tdWx0aSkge1xuICAgICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaChcbiAgICAgICAgKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgZXhwYW5zaW9uUGFuZWwub3BlbigpO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBleHBhbnNpb24gcGFuZWxzXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaChcbiAgICAgIChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgICBleHBhbnNpb25QYW5lbC5jbG9zZSgpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXR0YWNoTGlzdGVuZXJzKFxuICAgIGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+LFxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzID0gW107XG4gICAgZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBleHBhbnNpb25QYW5lbC5leHBhbmRlZFxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhPZlBhbmVsOiBudW1iZXIgPSB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmluZGV4T2YoXG4gICAgICAgICAgICBleHBhbnNpb25QYW5lbCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpbmRleE9mUGFuZWwgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnNwbGljZShpbmRleE9mUGFuZWwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnB1c2goZXhwYW5zaW9uUGFuZWwpO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLl9tdWx0aSkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VBbGxFeGNlcHQoZXhwYW5zaW9uUGFuZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIGV4cGFuc2lvblBhbmVsLmNvbGxhcHNlZFxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5kZXhPZlBhbmVsOiBudW1iZXIgPSB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmluZGV4T2YoXG4gICAgICAgICAgICBleHBhbnNpb25QYW5lbCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChpbmRleE9mUGFuZWwgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnNwbGljZShpbmRleE9mUGFuZWwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZUFsbEV4Y2VwdChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKHBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAocGFuZWwgIT09IGV4cGFuc2lvblBhbmVsKSB7XG4gICAgICAgIHBhbmVsLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==