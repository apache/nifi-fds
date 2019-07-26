/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        this.onFileSelect = new EventEmitter();
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
     * Emits the 'onFileSelect' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Uses [(ngModel)] if declared, instead of emitting 'onFileSelect' event.
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        if (event.target instanceof HTMLInputElement) {
            /** @type {?} */
            let fileInputEl = ((/** @type {?} */ (event.target)));
            /** @type {?} */
            let files = fileInputEl.files;
            if (files.length) {
                /** @type {?} */
                let value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.model ? this.model.update.emit(value) : this.onFileSelect.emit(value);
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
    onFileSelect: [{ type: Output, args: ['fileSelect',] }],
    multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
    onChange: [{ type: HostListener, args: ['change', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZmlsZS1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3pDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUE4QmhDLFlBQXdDLEtBQWM7UUFBZCxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBNUI5QyxjQUFTLEdBQVksS0FBSyxDQUFDOzs7Ozs7O1FBa0JiLGlCQUFZLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBV3hHLENBQUM7Ozs7Ozs7O0lBdEJELElBQ0ksUUFBUSxDQUFDLFFBQWlCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFhRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7OztJQVdELFFBQVEsQ0FBQyxLQUFZO1FBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sWUFBWSxnQkFBZ0IsRUFBRTs7Z0JBQ3hDLFdBQVcsR0FBcUIsQ0FBQyxtQkFBa0IsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDOztnQkFDaEUsS0FBSyxHQUFhLFdBQVcsQ0FBQyxLQUFLO1lBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7b0JBQ1osS0FBSyxHQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVFO1NBQ0Y7SUFDSCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFKUSxPQUFPLHVCQW1DRCxRQUFRLFlBQUksSUFBSTs7O3VCQXJCNUIsS0FBSyxTQUFDLFVBQVU7MkJBV2hCLE1BQU0sU0FBQyxZQUFZOzhCQUtuQixXQUFXLFNBQUMsZUFBZTt1QkFhM0IsWUFBWSxTQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXBDbEMsMENBQW1DOzs7Ozs7OztJQWtCbkMsNkNBQXdHOztJQVU1RixzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGRGaWxlU2VsZWN0XScsXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZVNlbGVjdERpcmVjdGl2ZSB7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogbXVsdGlwbGU/OiBib29sZWFuXG4gICAqIFNldHMgd2hldGhlciBtdWx0aXBsZSBmaWxlcyBjYW4gYmUgc2VsZWN0ZWQgYXQgb25jZSBpbiBob3N0IGVsZW1lbnQsIG9yIGp1c3QgYSBzaW5nbGUgZmlsZS5cbiAgICogQ2FuIGFsc28gYmUgJ211bHRpcGxlJyBuYXRpdmUgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KCdtdWx0aXBsZScpXG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaWxlU2VsZWN0PzogZnVuY3Rpb25cbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgZmlsZSBvciBmaWxlcyBhcmUgc2VsZWN0ZWQgaW4gaG9zdCBbSFRNTElucHV0RWxlbWVudF0uXG4gICAqIEVtaXRzIGEgW0ZpbGVMaXN0IHwgRmlsZV0gb2JqZWN0LlxuICAgKiBBbHRlcm5hdGl2ZSB0byBub3QgdXNlIFsobmdNb2RlbCldLlxuICAgKi9cbiAgQE91dHB1dCgnZmlsZVNlbGVjdCcpIG9uRmlsZVNlbGVjdDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0IHwgRmlsZT4oKTtcblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdtdWx0aXBsZScgYXR0cmlidXRlIGlmIFttdWx0aXBsZV0gcHJvcGVydHkgaXMgJ3RydWUnLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm11bHRpcGxlJylcbiAgZ2V0IG11bHRpcGxlQmluZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZSA/ICcnIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIG1vZGVsOiBOZ01vZGVsKSB7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnY2hhbmdlJyBob3N0IGV2ZW50IHRvIGdldCBbSFRNTElucHV0RWxlbWVudF0gZmlsZXMuXG4gICAqIEVtaXRzIHRoZSAnb25GaWxlU2VsZWN0JyBldmVudCB3aXRoIGEgW0ZpbGVMaXN0XSBvciBbRmlsZV0gZGVwZW5kaW5nIGlmICdtdWx0aXBsZScgYXR0ciBleGlzdHMgaW4gaG9zdC5cbiAgICogVXNlcyBbKG5nTW9kZWwpXSBpZiBkZWNsYXJlZCwgaW5zdGVhZCBvZiBlbWl0dGluZyAnb25GaWxlU2VsZWN0JyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBsZXQgZmlsZUlucHV0RWw6IEhUTUxJbnB1dEVsZW1lbnQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSBmaWxlSW5wdXRFbC5maWxlcztcbiAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IHZhbHVlOiBGaWxlTGlzdCB8IEZpbGUgPSB0aGlzLl9tdWx0aXBsZSA/IChmaWxlcy5sZW5ndGggPiAxID8gZmlsZXMgOiBmaWxlc1swXSkgOiBmaWxlc1swXTtcbiAgICAgICAgdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwudXBkYXRlLmVtaXQodmFsdWUpIDogdGhpcy5vbkZpbGVTZWxlY3QuZW1pdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=