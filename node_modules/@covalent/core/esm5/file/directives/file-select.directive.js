/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, Host, Optional } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgModel } from '@angular/forms';
var TdFileSelectDirective = /** @class */ (function () {
    function TdFileSelectDirective(model) {
        this.model = model;
        this._multiple = false;
        /**
         * fileSelect?: function
         * Event emitted when a file or files are selected in host [HTMLInputElement].
         * Emits a [FileList | File] object.
         * Alternative to not use [(ngModel)].
         */
        this.onFileSelect = new EventEmitter();
    }
    Object.defineProperty(TdFileSelectDirective.prototype, "multiple", {
        /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         */
        set: /**
         * multiple?: boolean
         * Sets whether multiple files can be selected at once in host element, or just a single file.
         * Can also be 'multiple' native attribute.
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileSelectDirective.prototype, "multipleBinding", {
        /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         */
        get: /**
         * Binds native 'multiple' attribute if [multiple] property is 'true'.
         * @return {?}
         */
        function () {
            return this._multiple ? '' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     */
    /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    TdFileSelectDirective.prototype.onChange = /**
     * Listens to 'change' host event to get [HTMLInputElement] files.
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target instanceof HTMLInputElement) {
            /** @type {?} */
            var fileInputEl = ((/** @type {?} */ (event.target)));
            /** @type {?} */
            var files = fileInputEl.files;
            if (files.length) {
                /** @type {?} */
                var value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
            }
        }
    };
    TdFileSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tdFileSelect]',
                },] }
    ];
    /** @nocollapse */
    TdFileSelectDirective.ctorParameters = function () { return [
        { type: NgModel, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    TdFileSelectDirective.propDecorators = {
        multiple: [{ type: Input, args: ['multiple',] }],
        onFileSelect: [{ type: Output, args: ['fileSelect',] }],
        multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
        onChange: [{ type: HostListener, args: ['change', ['$event'],] }]
    };
    return TdFileSelectDirective;
}());
export { TdFileSelectDirective };
if (false) {
    /** @type {?} */
    TdFileSelectDirective.prototype._multiple;
    /**
     * fileSelect?: function
     * Event emitted when a file or files are selected in host [HTMLInputElement].
     * Emits a [FileList | File] object.
     * Alternative to not use [(ngModel)].
     * @type {?}
     */
    TdFileSelectDirective.prototype.onFileSelect;
    /** @type {?} */
    TdFileSelectDirective.prototype.model;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDO0lBaUNFLCtCQUF3QyxLQUFjO1FBQWQsVUFBSyxHQUFMLEtBQUssQ0FBUztRQTVCOUMsY0FBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQWtCYixpQkFBWSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQVd4RyxDQUFDO0lBdEJELHNCQUNJLDJDQUFRO1FBTlo7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNhLFFBQWlCO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFhRCxzQkFDSSxrREFBZTtRQUpuQjs7V0FFRzs7Ozs7UUFDSDtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFLRDs7OztPQUlHOzs7Ozs7OztJQUVILHdDQUFROzs7Ozs7O0lBRFIsVUFDUyxLQUFZO1FBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sWUFBWSxnQkFBZ0IsRUFBRTs7Z0JBQ3hDLFdBQVcsR0FBcUIsQ0FBQyxtQkFBa0IsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDOztnQkFDaEUsS0FBSyxHQUFhLFdBQVcsQ0FBQyxLQUFLO1lBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7b0JBQ1osS0FBSyxHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVFO1NBQ0Y7SUFDSCxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQUpRLE9BQU8sdUJBbUNELFFBQVEsWUFBSSxJQUFJOzs7MkJBckI1QixLQUFLLFNBQUMsVUFBVTsrQkFXaEIsTUFBTSxTQUFDLFlBQVk7a0NBS25CLFdBQVcsU0FBQyxlQUFlOzJCQWEzQixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQVdwQyw0QkFBQztDQUFBLEFBcERELElBb0RDO1NBakRZLHFCQUFxQjs7O0lBRWhDLDBDQUFtQzs7Ozs7Ozs7SUFrQm5DLDZDQUF3Rzs7SUFVNUYsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEhvc3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmlsZVNlbGVjdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVTZWxlY3REaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX211bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIHdoZXRoZXIgbXVsdGlwbGUgZmlsZXMgY2FuIGJlIHNlbGVjdGVkIGF0IG9uY2UgaW4gaG9zdCBlbGVtZW50LCBvciBqdXN0IGEgc2luZ2xlIGZpbGUuXG4gICAqIENhbiBhbHNvIGJlICdtdWx0aXBsZScgbmF0aXZlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogZmlsZVNlbGVjdD86IGZ1bmN0aW9uXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGZpbGUgb3IgZmlsZXMgYXJlIHNlbGVjdGVkIGluIGhvc3QgW0hUTUxJbnB1dEVsZW1lbnRdLlxuICAgKiBFbWl0cyBhIFtGaWxlTGlzdCB8IEZpbGVdIG9iamVjdC5cbiAgICogQWx0ZXJuYXRpdmUgdG8gbm90IHVzZSBbKG5nTW9kZWwpXS5cbiAgICovXG4gIEBPdXRwdXQoJ2ZpbGVTZWxlY3QnKSBvbkZpbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdCB8IEZpbGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlTGlzdCB8IEZpbGU+KCk7XG5cbiAgLyoqXG4gICAqIEJpbmRzIG5hdGl2ZSAnbXVsdGlwbGUnIGF0dHJpYnV0ZSBpZiBbbXVsdGlwbGVdIHByb3BlcnR5IGlzICd0cnVlJy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tdWx0aXBsZScpXG4gIGdldCBtdWx0aXBsZUJpbmRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGUgPyAnJyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBtb2RlbDogTmdNb2RlbCkge1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbnMgdG8gJ2NoYW5nZScgaG9zdCBldmVudCB0byBnZXQgW0hUTUxJbnB1dEVsZW1lbnRdIGZpbGVzLlxuICAgKiBFbWl0cyB0aGUgJ29uRmlsZVNlbGVjdCcgZXZlbnQgd2l0aCBhIFtGaWxlTGlzdF0gb3IgW0ZpbGVdIGRlcGVuZGluZyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QuXG4gICAqIFVzZXMgWyhuZ01vZGVsKV0gaWYgZGVjbGFyZWQsIGluc3RlYWQgb2YgZW1pdHRpbmcgJ29uRmlsZVNlbGVjdCcgZXZlbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudCddKVxuICBvbkNoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgbGV0IGZpbGVJbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50ID0gKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gZmlsZUlucHV0RWwuZmlsZXM7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWx1ZTogRmlsZUxpc3QgfCBGaWxlID0gdGhpcy5fbXVsdGlwbGUgPyAoZmlsZXMubGVuZ3RoID4gMSA/IGZpbGVzIDogZmlsZXNbMF0pIDogZmlsZXNbMF07XG4gICAgICAgIHRoaXMubW9kZWwgPyB0aGlzLm1vZGVsLnVwZGF0ZS5lbWl0KHZhbHVlKSA6IHRoaXMub25GaWxlU2VsZWN0LmVtaXQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19