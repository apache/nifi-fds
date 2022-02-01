/**
 * @fileoverview added by tsickle
 * Generated from: directives/file-select.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, Host, Optional } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel } from '@angular/forms';
export class TdFileSelectDirective {
    /**
     * @param {?} model
     */
    constructor(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.fileSelect = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets whether multiple files can be selected at once in host element, or just a single file.
     * Can also be 'multiple' native attribute.
     * @param {?} multiple
     * @return {?}
     */
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    /**
     * Binds native 'multiple' attribute if [multiple] property is 'true'.
     * @return {?}
     */
    get multipleBinding() {
        return this._multiple ? '' : undefined;
    }
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'fileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'fileSelect' event.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        if (event.target instanceof HTMLInputElement) {
            /** @type {?} */
            const fileInputEl = event.target;
            /** @type {?} */
            const files = fileInputEl.files;
            if (files.length) {
                /** @type {?} */
                const value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.fileSelect.emit(value);
            }
        }
    }
}
TdFileSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFileSelect]',
            },] }
];
/** @nocollapse */
TdFileSelectDirective.ctorParameters = () => [
    { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
];
TdFileSelectDirective.propDecorators = {
    multiple: [{ type: Input, args: ['multiple',] }],
    fileSelect: [{ type: Output }],
    multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
    onChange: [{ type: HostListener, args: ['change', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdFileSelectDirective.prototype._multiple;
    /**
     * fileSelect?: function
     * Event emitted when a file or files are selected in host [HTMLInputElement].
     * Emits a [FileList | File] object.
     * Alternative to not use [(ngModel)].
     * @type {?}
     */
    TdFileSelectDirective.prototype.fileSelect;
    /**
     * @type {?}
     * @private
     */
    TdFileSelectDirective.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9jb3JlL2ZpbGUvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2ZpbGUtc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLekMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQTZCaEMsWUFBd0MsS0FBYztRQUFkLFVBQUssR0FBTCxLQUFLLENBQVM7UUE1QjlDLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUFrQnpCLGVBQVUsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFVakMsQ0FBQzs7Ozs7Ozs7SUFyQjFELElBQ0ksUUFBUSxDQUFDLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFhRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7OztJQVVELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sWUFBWSxnQkFBZ0IsRUFBRTs7a0JBQ3RDLFdBQVcsR0FBcUIsS0FBSyxDQUFDLE1BQU07O2tCQUM1QyxLQUFLLEdBQWEsV0FBVyxDQUFDLEtBQUs7WUFDekMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFOztzQkFDVixLQUFLLEdBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUU7U0FDRjtJQUNILENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQUpRLE9BQU8sdUJBa0NELFFBQVEsWUFBSSxJQUFJOzs7dUJBckI1QixLQUFLLFNBQUMsVUFBVTt5QkFXaEIsTUFBTTs4QkFLTixXQUFXLFNBQUMsZUFBZTt1QkFZM0IsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQW5DbEMsMENBQW1DOzs7Ozs7OztJQWtCbkMsMkNBQTBGOzs7OztJQVU5RSxzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRGaWxlU2VsZWN0XScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZVNlbGVjdERpcmVjdGl2ZSB7XG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIHNlbGVjdGVkIGF0IG9uY2UgaW4gaG9zdCBlbGVtZW50LCBvciBqdXN0IGEgc2luZ2xlIGZpbGUuXG4gICAqIENhbiBhbHNvIGJlICdtdWx0aXBsZScgbmF0aXZlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogZmlsZVNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGZpbGUgb3IgZmlsZXMgYXJlIHNlbGVjdGVkIGluIGhvc3QgW0hUTUxJbnB1dEVsZW1lbnRdLlxuICAgKiBFbWl0cyBhIFtGaWxlTGlzdCB8IEZpbGVdIG9iamVjdC5cbiAgICogQWx0ZXJuYXRpdmUgdG8gbm90IHVzZSBbKG5nTW9kZWwpXS5cbiAgICovXG4gIEBPdXRwdXQoKSBmaWxlU2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPigpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ211bHRpcGxlJyBhdHRyaWJ1dGUgaWYgW211bHRpcGxlXSBwcm9wZXJ0eSBpcyAndHJ1ZScuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubXVsdGlwbGUnKVxuICBnZXQgbXVsdGlwbGVCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlID8gJycgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbW9kZWw6IE5nTW9kZWwpIHt9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2NoYW5nZScgaG9zdCBldmVudCB0byBnZXQgW0hUTUxJbnB1dEVsZW1lbnRdIGZpbGVzLlxuICAgKiBFbWl0cyB0aGUgJ2ZpbGVTZWxlY3QnIGV2ZW50IHdpdGggYSBbRmlsZUxpc3RdIG9yIFtGaWxlXSBkZXBlbmRpbmcgaWYgJ211bHRpcGxlJyBhdHRyIGV4aXN0cyBpbiBob3N0LlxuICAgKiBVc2VzIFsobmdNb2RlbCldIGlmIGRlY2xhcmVkLCBpbnN0ZWFkIG9mIGVtaXR0aW5nICdmaWxlU2VsZWN0JyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBjb25zdCBmaWxlSW5wdXRFbDogSFRNTElucHV0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IGZpbGVzOiBGaWxlTGlzdCA9IGZpbGVJbnB1dEVsLmZpbGVzO1xuICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB2YWx1ZTogRmlsZUxpc3QgfCBGaWxlID0gdGhpcy5fbXVsdGlwbGUgPyAoZmlsZXMubGVuZ3RoID4gMSA/IGZpbGVzIDogZmlsZXNbMF0pIDogZmlsZXNbMF07XG4gICAgICAgIHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLnVwZGF0ZS5lbWl0KHZhbHVlKSA6IHRoaXMuZmlsZVNlbGVjdC5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==