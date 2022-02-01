/**
 * @fileoverview added by tsickle
 * Generated from: file-input/file-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, TemplateRef, ViewContainerRef, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
export class TdFileInputLabelDirective extends TemplatePortalDirective {
    /**
     * @param {?} templateRef
     * @param {?} viewContainerRef
     */
    constructor(templateRef, viewContainerRef) {
        super(templateRef, viewContainerRef);
    }
}
TdFileInputLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[td-file-input-label]ng-template',
            },] }
];
/** @nocollapse */
TdFileInputLabelDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
export class TdFileInputBase {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
}
if (false) {
    /** @type {?} */
    TdFileInputBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdFileInputMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileInputBase));
export class TdFileInputComponent extends _TdFileInputMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _changeDetectorRef
     */
    constructor(_renderer, _changeDetectorRef) {
        super(_changeDetectorRef);
        this._renderer = _renderer;
        this._multiple = false;
        /**
         * select?: function
         * Event emitted a file is selected
         * Emits a [File | FileList] object.
         */
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get inputElement() {
        return this._inputElement.nativeElement;
    }
    /**
     * multiple?: boolean
     * Sets if multiple files can be dropped/selected at once in [TdFileInputComponent].
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this._multiple;
    }
    /**
     * Method executed when a file is selected.
     * @param {?} files
     * @return {?}
     */
    handleSelect(files) {
        this.writeValue(files);
        this.select.emit(files);
    }
    /**
     * Used to clear the selected files from the [TdFileInputComponent].
     * @return {?}
     */
    clear() {
        this.writeValue(undefined);
        this._renderer.setProperty(this.inputElement, 'value', '');
    }
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    onDisabledChange(v) {
        if (v) {
            this.clear();
        }
    }
    /**
     * Sets disable to the component. Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
TdFileInputComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdFileInputComponent)),
                        multi: true,
                    },
                ],
                selector: 'td-file-input',
                inputs: ['disabled', 'value'],
                template: "<div>\n  <button\n    mat-raised-button\n    class=\"td-file-input\"\n    type=\"button\"\n    [color]=\"color\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    (keyup.enter)=\"fileInput.click()\"\n    (click)=\"fileInput.click()\"\n    (fileDrop)=\"handleSelect($event)\"\n    tdFileDrop\n  >\n    <ng-content></ng-content>\n  </button>\n  <input\n    #fileInput\n    class=\"td-file-input-hidden\"\n    type=\"file\"\n    [attr.accept]=\"accept\"\n    (fileSelect)=\"handleSelect($event)\"\n    [multiple]=\"multiple\"\n    [disabled]=\"disabled\"\n    tdFileSelect\n  />\n</div>\n",
                styles: [":host .td-file-input{padding-left:8px;padding-right:8px}:host input.td-file-input-hidden{display:none}:host .drop-zone{border-radius:3px}:host .drop-zone *{pointer-events:none}"]
            }] }
];
/** @nocollapse */
TdFileInputComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
TdFileInputComponent.propDecorators = {
    _inputElement: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
    color: [{ type: Input }],
    multiple: [{ type: Input, args: ['multiple',] }],
    accept: [{ type: Input }],
    select: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileInputComponent.prototype._multiple;
    /**
     * The native `<input type="file"> element
     * @type {?}
     */
    TdFileInputComponent.prototype._inputElement;
    /**
     * color?: 'accent' | 'primary' | 'warn'
     * Sets button color. Uses same color palette accepted as [MatButton].
     * @type {?}
     */
    TdFileInputComponent.prototype.color;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     * @type {?}
     */
    TdFileInputComponent.prototype.accept;
    /**
     * select?: function
     * Event emitted a file is selected
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileInputComponent.prototype.select;
    /**
     * @type {?}
     * @private
     */
    TdFileInputComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbImZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixpQkFBaUIsRUFDakIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQWUsYUFBYSxFQUF5Qix5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBS3JILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx1QkFBdUI7Ozs7O0lBQ3BFLFlBQVksV0FBNkIsRUFBRSxnQkFBa0M7UUFDM0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2FBQzdDOzs7O1lBYkMsV0FBVztZQUNYLGdCQUFnQjs7QUFtQmxCLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQztDQUM3RDs7O0lBRGEsNkNBQTRDOzs7O0FBSTFELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFnQjlGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxxQkFBcUI7Ozs7O0lBeUM3RCxZQUFvQixTQUFvQixFQUFFLGtCQUFxQztRQUM3RSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQURSLGNBQVMsR0FBVCxTQUFTLENBQVc7UUF4Q2hDLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7OztRQXNDekIsV0FBTSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQUl0RixDQUFDOzs7O0lBdENELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7SUFDMUMsQ0FBQzs7Ozs7OztJQVlELElBQ0ksUUFBUSxDQUFDLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUF1QkQsWUFBWSxDQUFDLEtBQXNCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFLRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxDQUFVO1FBQ3pCLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7Ozs7SUFJRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7WUF0RkYsU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQzt3QkFDbkQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7Z0JBRTdCLGttQkFBMEM7O2FBQzNDOzs7O1lBekNDLFNBQVM7WUFHVCxpQkFBaUI7Ozs0QkEyQ2hCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQVN2QyxLQUFLO3VCQU1MLEtBQUssU0FBQyxVQUFVO3FCQWFoQixLQUFLO3FCQU9MLE1BQU07Ozs7Ozs7SUF0Q1AseUNBQW1DOzs7OztJQUduQyw2Q0FBb0U7Ozs7OztJQVNwRSxxQ0FBOEM7Ozs7Ozs7SUFtQjlDLHNDQUF3Qjs7Ozs7OztJQU94QixzQ0FBc0Y7Ozs7O0lBRTFFLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkLWZpbGUtaW5wdXQtbGFiZWxdbmctdGVtcGxhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHN1cGVyKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGRGaWxlSW5wdXRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVJbnB1dE1peGluQmFzZSA9IG1peGluQ29udHJvbFZhbHVlQWNjZXNzb3IobWl4aW5EaXNhYmxlZChUZEZpbGVJbnB1dEJhc2UpKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkRmlsZUlucHV0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHNlbGVjdG9yOiAndGQtZmlsZS1pbnB1dCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRGaWxlSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBfVGRGaWxlSW5wdXRNaXhpbkJhc2UgaW1wbGVtZW50cyBJQ29udHJvbFZhbHVlQWNjZXNzb3IsIElDYW5EaXNhYmxlIHtcbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVGhlIG5hdGl2ZSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+IGVsZW1lbnQgKi9cbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgX2lucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgZ2V0IGlucHV0RWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogY29sb3I/OiAnYWNjZW50JyB8ICdwcmltYXJ5JyB8ICd3YXJuJ1xuICAgKiBTZXRzIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0uXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcjogJ2FjY2VudCcgfCAncHJpbWFyeScgfCAnd2Fybic7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkL3NlbGVjdGVkIGF0IG9uY2UgaW4gW1RkRmlsZUlucHV0Q29tcG9uZW50XS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhY2NlcHQ/OiBzdHJpbmdcbiAgICogU2V0cyBmaWxlcyBhY2NlcHRlZCB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgYnJvd3NlciBkaWFsb2cuXG4gICAqIFNhbWUgYXMgJ2FjY2VwdCcgYXR0cmlidXRlIGluIDxpbnB1dC8+IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBhY2NlcHQ6IHN0cmluZztcblxuICAvKipcbiAgICogc2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCBhIGZpbGUgaXMgc2VsZWN0ZWRcbiAgICogRW1pdHMgYSBbRmlsZSB8IEZpbGVMaXN0XSBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihfY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIGEgZmlsZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGhhbmRsZVNlbGVjdChmaWxlczogRmlsZSB8IEZpbGVMaXN0KTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KGZpbGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNsZWFyIHRoZSBzZWxlY3RlZCBmaWxlcyBmcm9tIHRoZSBbVGRGaWxlSW5wdXRDb21wb25lbnRdLlxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5pbnB1dEVsZW1lbnQsICd2YWx1ZScsICcnKTtcbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0cyBkaXNhYmxlIHRvIHRoZSBjb21wb25lbnQuIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXG4gICAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19