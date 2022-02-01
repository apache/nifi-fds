/**
 * @fileoverview added by tsickle
 * Generated from: expansion-panel-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2, ElementRef, QueryList, ContentChildren, Input, } from '@angular/core';
import { TdExpansionPanelComponent } from './expansion-panel.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
export class TdExpansionPanelGroupComponent {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._multi = false;
        this._lastOpenedPanels = [];
        this._destroyed = new Subject();
        this._stopWatchingPanels = new Subject();
        this._renderer.addClass(this._elementRef.nativeElement, 'td-expansion-panel-group');
    }
    /**
     * multi?: boolean
     * Sets whether multiple panels can be opened at a given time.
     * Set to false for accordion mode.
     * Defaults to false.
     * @param {?} multi
     * @return {?}
     */
    set multi(multi) {
        this._multi = coerceBooleanProperty(multi);
        if (this._multi === false && this._lastOpenedPanels.length > 0) {
            this._closeAllExcept(this._lastOpenedPanels[this._lastOpenedPanels.length - 1]);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next(true);
        this._destroyed.unsubscribe();
        this._stopWatchingPanels.next(true);
        this._stopWatchingPanels.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._multi) {
            /** @type {?} */
            const openedPanels = this.expansionPanels.filter((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            (expansionPanel) => expansionPanel.expand));
            /** @type {?} */
            const numOpenedPanels = openedPanels.length;
            if (numOpenedPanels > 1) {
                this._closeAllExcept(openedPanels[numOpenedPanels - 1]);
            }
        }
        this._attachListeners(this.expansionPanels);
        this.expansionPanels.changes
            .pipe(takeUntil(this._destroyed))
            .subscribe((/**
         * @param {?} expansionPanels
         * @return {?}
         */
        (expansionPanels) => {
            this._stopWatchingPanels.next(true);
            this._stopWatchingPanels.unsubscribe();
            this._stopWatchingPanels = new Subject();
            this._attachListeners(expansionPanels);
        }));
    }
    /**
     * Opens all expansion panels, only if multi set set to true.
     * @return {?}
     */
    openAll() {
        if (this._multi) {
            this.expansionPanels.forEach((/**
             * @param {?} expansionPanel
             * @return {?}
             */
            (expansionPanel) => {
                expansionPanel.open();
            }));
        }
    }
    /**
     * Closes all expansion panels
     * @return {?}
     */
    closeAll() {
        this.expansionPanels.forEach((/**
         * @param {?} expansionPanel
         * @return {?}
         */
        (expansionPanel) => {
            expansionPanel.close();
        }));
    }
    /**
     * @private
     * @param {?} expansionPanels
     * @return {?}
     */
    _attachListeners(expansionPanels) {
        this._lastOpenedPanels = [];
        expansionPanels.forEach((/**
         * @param {?} expansionPanel
         * @return {?}
         */
        (expansionPanel) => {
            expansionPanel.expanded.pipe(takeUntil(this._stopWatchingPanels)).subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const indexOfPanel = this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
                this._lastOpenedPanels.push(expansionPanel);
                if (!this._multi) {
                    this._closeAllExcept(expansionPanel);
                }
            }));
            expansionPanel.collapsed.pipe(takeUntil(this._stopWatchingPanels)).subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const indexOfPanel = this._lastOpenedPanels.indexOf(expansionPanel);
                if (indexOfPanel !== -1) {
                    this._lastOpenedPanels.splice(indexOfPanel, 1);
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} expansionPanel
     * @return {?}
     */
    _closeAllExcept(expansionPanel) {
        this.expansionPanels.forEach((/**
         * @param {?} panel
         * @return {?}
         */
        (panel) => {
            if (panel !== expansionPanel) {
                panel.close();
            }
        }));
    }
}
TdExpansionPanelGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-expansion-panel-group',
                template: "<ng-content></ng-content>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TdExpansionPanelGroupComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdExpansionPanelGroupComponent.propDecorators = {
    multi: [{ type: Input, args: ['multi',] }],
    expansionPanels: [{ type: ContentChildren, args: [TdExpansionPanelComponent, { descendants: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._multi;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._lastOpenedPanels;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._stopWatchingPanels;
    /** @type {?} */
    TdExpansionPanelGroupComponent.prototype.expansionPanels;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TdExpansionPanelGroupComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9leHBhbnNpb24tcGFuZWwvIiwic291cmNlcyI6WyJleHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxlQUFlLEVBRWYsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTy9CLE1BQU0sT0FBTyw4QkFBOEI7Ozs7O0lBeUJ6QyxZQUFvQixTQUFvQixFQUFVLFdBQXVCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXhCakUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixzQkFBaUIsR0FBZ0MsRUFBRSxDQUFDO1FBRXBELGVBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN0RCx3QkFBbUIsR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQW9CckUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7Ozs7SUFiRCxJQUNJLEtBQUssQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxJQUFJ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QUUscURBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFF1ZXJ5TGlzdCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZXhwYW5zaW9uLXBhbmVsLWdyb3VwJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwYW5zaW9uLXBhbmVsLWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBhbnNpb24tcGFuZWwtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEV4cGFuc2lvblBhbmVsR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9tdWx0aTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2xhc3RPcGVuZWRQYW5lbHM6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3llZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3N0b3BXYXRjaGluZ1BhbmVsczogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIG11bHRpPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgcGFuZWxzIGNhbiBiZSBvcGVuZWQgYXQgYSBnaXZlbiB0aW1lLlxuICAgKiBTZXQgdG8gZmFsc2UgZm9yIGFjY29yZGlvbiBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGknKVxuICBzZXQgbXVsdGkobXVsdGk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aSk7XG4gICAgaWYgKHRoaXMuX211bHRpID09PSBmYWxzZSAmJiB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX2Nsb3NlQWxsRXhjZXB0KHRoaXMuX2xhc3RPcGVuZWRQYW5lbHNbdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGV4cGFuc2lvblBhbmVsczogUXVlcnlMaXN0PFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0ZC1leHBhbnNpb24tcGFuZWwtZ3JvdXAnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KHRydWUpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy5uZXh0KHRydWUpO1xuICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX211bHRpKSB7XG4gICAgICBjb25zdCBvcGVuZWRQYW5lbHM6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnRbXSA9IHRoaXMuZXhwYW5zaW9uUGFuZWxzLmZpbHRlcihcbiAgICAgICAgKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiBleHBhbnNpb25QYW5lbC5leHBhbmQsXG4gICAgICApO1xuICAgICAgY29uc3QgbnVtT3BlbmVkUGFuZWxzOiBudW1iZXIgPSBvcGVuZWRQYW5lbHMubGVuZ3RoO1xuICAgICAgaWYgKG51bU9wZW5lZFBhbmVscyA+IDEpIHtcbiAgICAgICAgdGhpcy5fY2xvc2VBbGxFeGNlcHQob3BlbmVkUGFuZWxzW251bU9wZW5lZFBhbmVscyAtIDFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hdHRhY2hMaXN0ZW5lcnModGhpcy5leHBhbnNpb25QYW5lbHMpO1xuXG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChleHBhbnNpb25QYW5lbHM6IFF1ZXJ5TGlzdDxUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuX3N0b3BXYXRjaGluZ1BhbmVscyA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuX2F0dGFjaExpc3RlbmVycyhleHBhbnNpb25QYW5lbHMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYWxsIGV4cGFuc2lvbiBwYW5lbHMsIG9ubHkgaWYgbXVsdGkgc2V0IHNldCB0byB0cnVlLlxuICAgKi9cbiAgcHVibGljIG9wZW5BbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX211bHRpKSB7XG4gICAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChleHBhbnNpb25QYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgICBleHBhbnNpb25QYW5lbC5vcGVuKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBleHBhbnNpb24gcGFuZWxzXG4gICAqL1xuICBwdWJsaWMgY2xvc2VBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbnNpb25QYW5lbHMuZm9yRWFjaCgoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpID0+IHtcbiAgICAgIGV4cGFuc2lvblBhbmVsLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hMaXN0ZW5lcnMoZXhwYW5zaW9uUGFuZWxzOiBRdWVyeUxpc3Q8VGRFeHBhbnNpb25QYW5lbENvbXBvbmVudD4pOiB2b2lkIHtcbiAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzID0gW107XG4gICAgZXhwYW5zaW9uUGFuZWxzLmZvckVhY2goKGV4cGFuc2lvblBhbmVsOiBUZEV4cGFuc2lvblBhbmVsQ29tcG9uZW50KSA9PiB7XG4gICAgICBleHBhbnNpb25QYW5lbC5leHBhbmRlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9zdG9wV2F0Y2hpbmdQYW5lbHMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleE9mUGFuZWw6IG51bWJlciA9IHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuaW5kZXhPZihleHBhbnNpb25QYW5lbCk7XG4gICAgICAgIGlmIChpbmRleE9mUGFuZWwgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5fbGFzdE9wZW5lZFBhbmVscy5zcGxpY2UoaW5kZXhPZlBhbmVsLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLnB1c2goZXhwYW5zaW9uUGFuZWwpO1xuXG4gICAgICAgIGlmICghdGhpcy5fbXVsdGkpIHtcbiAgICAgICAgICB0aGlzLl9jbG9zZUFsbEV4Y2VwdChleHBhbnNpb25QYW5lbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBleHBhbnNpb25QYW5lbC5jb2xsYXBzZWQucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcFdhdGNoaW5nUGFuZWxzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhPZlBhbmVsOiBudW1iZXIgPSB0aGlzLl9sYXN0T3BlbmVkUGFuZWxzLmluZGV4T2YoZXhwYW5zaW9uUGFuZWwpO1xuICAgICAgICBpZiAoaW5kZXhPZlBhbmVsICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuX2xhc3RPcGVuZWRQYW5lbHMuc3BsaWNlKGluZGV4T2ZQYW5lbCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VBbGxFeGNlcHQoZXhwYW5zaW9uUGFuZWw6IFRkRXhwYW5zaW9uUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuc2lvblBhbmVscy5mb3JFYWNoKChwYW5lbDogVGRFeHBhbnNpb25QYW5lbENvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKHBhbmVsICE9PSBleHBhbnNpb25QYW5lbCkge1xuICAgICAgICBwYW5lbC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=