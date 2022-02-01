/**
 * @fileoverview added by tsickle
 * Generated from: step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, TemplateRef, ViewChild, ViewContainerRef, ContentChild, } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TemplatePortalDirective, TemplatePortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinDisableRipple } from '@covalent/core/common';
/** @enum {string} */
const StepState = {
    None: "none",
    Required: "required",
    Complete: "complete",
};
export { StepState };
export class TdStepLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-label]ng-template',
            },] }
];
/** @nocollapse */
TdStepLabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdStepActionsDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-actions]ng-template',
            },] }
];
/** @nocollapse */
TdStepActionsDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdStepSummaryDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdStepSummaryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-step-summary]ng-template',
            },] }
];
/** @nocollapse */
TdStepSummaryDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdStepBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdStepMixinBase = mixinDisableRipple(mixinDisabled(TdStepBase));
export class TdStepComponent extends _TdStepMixinBase {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        super();
        this._viewContainerRef = _viewContainerRef;
        this._active = false;
        this._state = StepState.None;
        /**
         * activated?: function
         * Event emitted when [TdStepComponent] is activated.
         */
        this.activated = new EventEmitter();
        /**
         * deactivated?: function
         * Event emitted when [TdStepComponent] is deactivated.
         */
        this.deactivated = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get stepContent() {
        return this._contentPortal;
    }
    /**
     * active?: boolean
     * Toggles [TdStepComponent] between active/deactive.
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        this._setActive(coerceBooleanProperty(active));
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * state?: StepState or ['none' | 'required' | 'complete']
     * Sets state of [TdStepComponent] depending on value.
     * Defaults to [StepState.None | 'none'].
     * @param {?} state
     * @return {?}
     */
    set state(state) {
        switch (state) {
            case StepState.Complete:
                this._state = StepState.Complete;
                break;
            case StepState.Required:
                this._state = StepState.Required;
                break;
            default:
                this._state = StepState.None;
                break;
        }
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    }
    /**
     * Toggle active state of [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    toggle() {
        return this._setActive(!this._active);
    }
    /**
     * Opens [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    open() {
        return this._setActive(true);
    }
    /**
     * Closes [TdStepComponent]
     * retuns 'true' if successful, else 'false'.
     * @return {?}
     */
    close() {
        return this._setActive(false);
    }
    /**
     * Returns 'true' if [state] equals to [StepState.Complete | 'complete'], else 'false'.
     * @return {?}
     */
    isComplete() {
        return this._state === StepState.Complete;
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v && this._active) {
            this._active = false;
            this._onDeactivated();
        }
    }
    /**
     * Method to change active state internally and emit the [activated] event if 'true' or [deactivated]
     * event if 'false'. (Blocked if [disabled] is 'true')
     * returns true if successfully changed state
     * @private
     * @param {?} newActive
     * @return {?}
     */
    _setActive(newActive) {
        if (this.disabled) {
            return false;
        }
        if (this._active !== newActive) {
            this._active = newActive;
            if (newActive) {
                this._onActivated();
            }
            else {
                this._onDeactivated();
            }
            return true;
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    _onActivated() {
        this.activated.emit();
    }
    /**
     * @private
     * @return {?}
     */
    _onDeactivated() {
        this.deactivated.emit();
    }
}
TdStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-step',
                inputs: ['disabled', 'disableRipple'],
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
TdStepComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
TdStepComponent.propDecorators = {
    _content: [{ type: ViewChild, args: [TemplateRef, { static: true },] }],
    stepLabel: [{ type: ContentChild, args: [TdStepLabelDirective,] }],
    stepActions: [{ type: ContentChild, args: [TdStepActionsDirective,] }],
    stepSummary: [{ type: ContentChild, args: [TdStepSummaryDirective,] }],
    label: [{ type: Input }],
    sublabel: [{ type: Input }],
    active: [{ type: Input, args: ['active',] }],
    state: [{ type: Input, args: ['state',] }],
    activated: [{ type: Output }],
    deactivated: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._active;
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._state;
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._contentPortal;
    /** @type {?} */
    TdStepComponent.prototype._content;
    /** @type {?} */
    TdStepComponent.prototype.stepLabel;
    /** @type {?} */
    TdStepComponent.prototype.stepActions;
    /** @type {?} */
    TdStepComponent.prototype.stepSummary;
    /**
     * label?: string
     * Sets label of [TdStepComponent] header.
     * Defaults to 'Step #'
     * @type {?}
     */
    TdStepComponent.prototype.label;
    /**
     * sublabel?: string
     * Sets sublabel of [TdStepComponent] header.
     * @type {?}
     */
    TdStepComponent.prototype.sublabel;
    /**
     * activated?: function
     * Event emitted when [TdStepComponent] is activated.
     * @type {?}
     */
    TdStepComponent.prototype.activated;
    /**
     * deactivated?: function
     * Event emitted when [TdStepComponent] is deactivated.
     * @type {?}
     */
    TdStepComponent.prototype.deactivated;
    /**
     * @type {?}
     * @private
     */
    TdStepComponent.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvc3RlcHMvIiwic291cmNlcyI6WyJzdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsWUFBWSxHQUViLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBZSxhQUFhLEVBQXFCLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFHLE1BQVksU0FBUztJQUNuQixJQUFJLFFBQVM7SUFDYixRQUFRLFlBQWE7SUFDckIsUUFBUSxZQUFhO0VBQ3RCOztBQUtELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSx1QkFBdUI7Ozs7O0lBQy9ELFlBQVksV0FBNkIsRUFBRSxnQkFBa0M7UUFDM0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOzs7O1lBcEJDLFdBQVc7WUFFWCxnQkFBZ0I7O0FBNEJsQixNQUFNLE9BQU8sc0JBQXVCLFNBQVEsdUJBQXVCOzs7OztJQUNqRSxZQUFZLFdBQTZCLEVBQUUsZ0JBQWtDO1FBQzNFLEtBQUssQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjthQUN6Qzs7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RCw0Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29udGVudENoaWxkLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IElDYW5EaXNhYmxlLCBtaXhpbkRpc2FibGVkLCBJQ2FuRGlzYWJsZVJpcHBsZSwgbWl4aW5EaXNhYmxlUmlwcGxlIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuZXhwb3J0IGVudW0gU3RlcFN0YXRlIHtcbiAgTm9uZSA9ICdub25lJyxcbiAgUmVxdWlyZWQgPSAncmVxdWlyZWQnLFxuICBDb21wbGV0ZSA9ICdjb21wbGV0ZScsXG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1zdGVwLWxhYmVsXW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwTGFiZWxEaXJlY3RpdmUgZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIodGVtcGxhdGVSZWYsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0ZC1zdGVwLWFjdGlvbnNdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGQtc3RlcC1zdW1tYXJ5XW5nLXRlbXBsYXRlJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwU3VtbWFyeURpcmVjdGl2ZSBleHRlbmRzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRkU3RlcEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkU3RlcE1peGluQmFzZSA9IG1peGluRGlzYWJsZVJpcHBsZShtaXhpbkRpc2FibGVkKFRkU3RlcEJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtc3RlcCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICdkaXNhYmxlUmlwcGxlJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRTdGVwQ29tcG9uZW50IGV4dGVuZHMgX1RkU3RlcE1peGluQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgSUNhbkRpc2FibGUsIElDYW5EaXNhYmxlUmlwcGxlIHtcbiAgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXRlOiBTdGVwU3RhdGUgPSBTdGVwU3RhdGUuTm9uZTtcblxuICBwcml2YXRlIF9jb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBnZXQgc3RlcENvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWw8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRQb3J0YWw7XG4gIH1cblxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBfY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBMYWJlbERpcmVjdGl2ZSkgc3RlcExhYmVsOiBUZFN0ZXBMYWJlbERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBBY3Rpb25zRGlyZWN0aXZlKSBzdGVwQWN0aW9uczogVGRTdGVwQWN0aW9uc0RpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChUZFN0ZXBTdW1tYXJ5RGlyZWN0aXZlKSBzdGVwU3VtbWFyeTogVGRTdGVwU3VtbWFyeURpcmVjdGl2ZTtcblxuICAvKipcbiAgICogbGFiZWw/OiBzdHJpbmdcbiAgICogU2V0cyBsYWJlbCBvZiBbVGRTdGVwQ29tcG9uZW50XSBoZWFkZXIuXG4gICAqIERlZmF1bHRzIHRvICdTdGVwICMnXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzdWJsYWJlbD86IHN0cmluZ1xuICAgKiBTZXRzIHN1YmxhYmVsIG9mIFtUZFN0ZXBDb21wb25lbnRdIGhlYWRlci5cbiAgICovXG4gIEBJbnB1dCgpIHN1YmxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZT86IGJvb2xlYW5cbiAgICogVG9nZ2xlcyBbVGRTdGVwQ29tcG9uZW50XSBiZXR3ZWVuIGFjdGl2ZS9kZWFjdGl2ZS5cbiAgICovXG4gIEBJbnB1dCgnYWN0aXZlJylcbiAgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZXRBY3RpdmUoY29lcmNlQm9vbGVhblByb3BlcnR5KGFjdGl2ZSkpO1xuICB9XG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGF0ZT86IFN0ZXBTdGF0ZSBvciBbJ25vbmUnIHwgJ3JlcXVpcmVkJyB8ICdjb21wbGV0ZSddXG4gICAqIFNldHMgc3RhdGUgb2YgW1RkU3RlcENvbXBvbmVudF0gZGVwZW5kaW5nIG9uIHZhbHVlLlxuICAgKiBEZWZhdWx0cyB0byBbU3RlcFN0YXRlLk5vbmUgfCAnbm9uZSddLlxuICAgKi9cbiAgQElucHV0KCdzdGF0ZScpXG4gIHNldCBzdGF0ZShzdGF0ZTogU3RlcFN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSBTdGVwU3RhdGUuQ29tcGxldGU6XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU3RlcFN0YXRlLkNvbXBsZXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RlcFN0YXRlLlJlcXVpcmVkOlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5SZXF1aXJlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zdGF0ZSA9IFN0ZXBTdGF0ZS5Ob25lO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZ2V0IHN0YXRlKCk6IFN0ZXBTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIGFjdGl2YXRlZD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBbVGRTdGVwQ29tcG9uZW50XSBpcyBhY3RpdmF0ZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgYWN0aXZhdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIGRlYWN0aXZhdGVkPzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIFtUZFN0ZXBDb21wb25lbnRdIGlzIGRlYWN0aXZhdGVkLlxuICAgKi9cbiAgQE91dHB1dCgpIGRlYWN0aXZhdGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2NvbnRlbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhY3RpdmUgc3RhdGUgb2YgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICB0b2dnbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZSghdGhpcy5fYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBbVGRTdGVwQ29tcG9uZW50XVxuICAgKiByZXR1bnMgJ3RydWUnIGlmIHN1Y2Nlc3NmdWwsIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIG9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgW1RkU3RlcENvbXBvbmVudF1cbiAgICogcmV0dW5zICd0cnVlJyBpZiBzdWNjZXNzZnVsLCBlbHNlICdmYWxzZScuXG4gICAqL1xuICBjbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0QWN0aXZlKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zICd0cnVlJyBpZiBbc3RhdGVdIGVxdWFscyB0byBbU3RlcFN0YXRlLkNvbXBsZXRlIHwgJ2NvbXBsZXRlJ10sIGVsc2UgJ2ZhbHNlJy5cbiAgICovXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID09PSBTdGVwU3RhdGUuQ29tcGxldGU7XG4gIH1cblxuICAvKiogTWV0aG9kIGV4ZWN1dGVkIHdoZW4gdGhlIGRpc2FibGVkIHZhbHVlIGNoYW5nZXMgKi9cbiAgb25EaXNhYmxlZENoYW5nZSh2OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHYgJiYgdGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX29uRGVhY3RpdmF0ZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIGNoYW5nZSBhY3RpdmUgc3RhdGUgaW50ZXJuYWxseSBhbmQgZW1pdCB0aGUgW2FjdGl2YXRlZF0gZXZlbnQgaWYgJ3RydWUnIG9yIFtkZWFjdGl2YXRlZF1cbiAgICogZXZlbnQgaWYgJ2ZhbHNlJy4gKEJsb2NrZWQgaWYgW2Rpc2FibGVkXSBpcyAndHJ1ZScpXG4gICAqIHJldHVybnMgdHJ1ZSBpZiBzdWNjZXNzZnVsbHkgY2hhbmdlZCBzdGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlKG5ld0FjdGl2ZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hY3RpdmUgIT09IG5ld0FjdGl2ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gbmV3QWN0aXZlO1xuICAgICAgaWYgKG5ld0FjdGl2ZSkge1xuICAgICAgICB0aGlzLl9vbkFjdGl2YXRlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb25EZWFjdGl2YXRlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQWN0aXZhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRGVhY3RpdmF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5kZWFjdGl2YXRlZC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==