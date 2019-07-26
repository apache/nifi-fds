/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled } from '@covalent/core/common';
export class TdFileDropBase {
}
/* tslint:disable-next-line */
/** @type {?} */
export const _TdFileDropMixinBase = mixinDisabled(TdFileDropBase);
export class TdFileDropDirective extends _TdFileDropMixinBase {
    /**
     * @param {?} _renderer
     * @param {?} _element
     */
    constructor(_renderer, _element) {
        super();
        this._renderer = _renderer;
        this._element = _element;
        this._multiple = false;
        /**
         * fileDrop?: function
         * Event emitted when a file or files are dropped in host element after being validated.
         * Emits a [FileList | File] object.
         */
        this.onFileDrop = new EventEmitter();
    }
    /**
     * multiple?: boolean
     * Sets whether multiple files can be dropped at once in host element, or just a single file.
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
     * Binds native 'disabled' attribute if [disabled] property is 'true'.
     * @return {?}
     */
    get disabledBinding() {
        return this.disabled ? '' : undefined;
    }
    /**
     * Listens to 'drop' host event to get validated transfer items.
     * Emits the 'onFileDrop' event with a [FileList] or [File] depending if 'multiple' attr exists in host.
     * Stops event propagation and default action from browser for 'drop' event.
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (!this.disabled) {
            /** @type {?} */
            let transfer = ((/** @type {?} */ (event))).dataTransfer;
            /** @type {?} */
            let files = transfer.files;
            if (files.length) {
                /** @type {?} */
                let value = this._multiple ? (files.length > 1 ? files : files[0]) : files[0];
                this.onFileDrop.emit(value);
            }
        }
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragover' host event to validate transfer items.
     * Checks if 'multiple' attr exists in host to allow multiple file drops.
     * Stops event propagation and default action from browser for 'dragover' event.
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        /** @type {?} */
        let transfer = ((/** @type {?} */ (event))).dataTransfer;
        transfer.dropEffect = this._typeCheck(transfer.types);
        if (this.disabled || (!this._multiple &&
            ((transfer.items && transfer.items.length > 1) || ((/** @type {?} */ (transfer))).mozItemCount > 1))) {
            transfer.dropEffect = 'none';
        }
        else {
            transfer.dropEffect = 'copy';
        }
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragenter' host event to add animation class 'drop-zone' which can be overriden in host.
     * Stops event propagation and default action from browser for 'dragenter' event.
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        if (!this.disabled) {
            this._renderer.addClass(this._element.nativeElement, 'drop-zone');
        }
        this._stopEvent(event);
    }
    /**
     * Listens to 'dragleave' host event to remove animation class 'drop-zone'.
     * Stops event propagation and default action from browser for 'dragleave' event.
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this._renderer.removeClass(this._element.nativeElement, 'drop-zone');
        this._stopEvent(event);
    }
    /**
     * Validates if the transfer item types are 'Files'.
     * @param {?} types
     * @return {?}
     */
    _typeCheck(types) {
        /** @type {?} */
        let dropEffect = 'none';
        if (types) {
            if ((((/** @type {?} */ (types))).contains && ((/** @type {?} */ (types))).contains('Files'))
                || (((/** @type {?} */ (types))).indexOf && ((/** @type {?} */ (types))).indexOf('Files') !== -1)) {
                dropEffect = 'copy';
            }
        }
        return dropEffect;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
TdFileDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tdFileDrop]',
                inputs: ['disabled'],
            },] }
];
/** @nocollapse */
TdFileDropDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
TdFileDropDirective.propDecorators = {
    multiple: [{ type: Input, args: ['multiple',] }],
    onFileDrop: [{ type: Output, args: ['fileDrop',] }],
    multipleBinding: [{ type: HostBinding, args: ['attr.multiple',] }],
    disabledBinding: [{ type: HostBinding, args: ['attr.disabled',] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TdFileDropDirective.prototype._multiple;
    /**
     * fileDrop?: function
     * Event emitted when a file or files are dropped in host element after being validated.
     * Emits a [FileList | File] object.
     * @type {?}
     */
    TdFileDropDirective.prototype.onFileDrop;
    /** @type {?} */
    TdFileDropDirective.prototype._renderer;
    /** @type {?} */
    TdFileDropDirective.prototype._element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9jb3JlL2ZpbGUvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2ZpbGUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkUsTUFBTSxPQUFPLGNBQWM7Q0FBRzs7O0FBRzlCLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBTWpFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxvQkFBb0I7Ozs7O0lBcUMzRCxZQUFvQixTQUFvQixFQUFVLFFBQW9CO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBRFUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVk7UUFuQzlELGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7OztRQWlCZixlQUFVLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBb0JwRyxDQUFDOzs7Ozs7OztJQTlCRCxJQUNJLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBWUQsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFLRCxJQUNJ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RSxVQUFVLEdBQUcsTUFBTSxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFVBQVUsQ0FBQyxLQUFZO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBekhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3JCOzs7O1lBYitDLFNBQVM7WUFBckIsVUFBVTs7O3VCQXVCM0MsS0FBSyxTQUFDLFVBQVU7eUJBVWhCLE1BQU0sU0FBQyxVQUFVOzhCQUtqQixXQUFXLFNBQUMsZUFBZTs4QkFRM0IsV0FBVyxTQUFDLGVBQWU7cUJBYzNCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBbUIvQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQWlCbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFZcEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQTVGckMsd0NBQW1DOzs7Ozs7O0lBaUJuQyx5Q0FBb0c7O0lBa0J4Rix3Q0FBNEI7O0lBQUUsdUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgSUNhbkRpc2FibGUsIG1peGluRGlzYWJsZWQgfSBmcm9tICdAY292YWxlbnQvY29yZS9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVGRGaWxlRHJvcEJhc2Uge31cblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgX1RkRmlsZURyb3BNaXhpbkJhc2UgPSBtaXhpbkRpc2FibGVkKFRkRmlsZURyb3BCYXNlKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RkRmlsZURyb3BdJyxcbiAgaW5wdXRzOiBbJ2Rpc2FibGVkJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRkRmlsZURyb3BEaXJlY3RpdmUgZXh0ZW5kcyBfVGRGaWxlRHJvcE1peGluQmFzZSBpbXBsZW1lbnRzIElDYW5EaXNhYmxlIHtcblxuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBtdWx0aXBsZT86IGJvb2xlYW5cbiAgICogU2V0cyB3aGV0aGVyIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkIGF0IG9uY2UgaW4gaG9zdCBlbGVtZW50LCBvciBqdXN0IGEgc2luZ2xlIGZpbGUuXG4gICAqIENhbiBhbHNvIGJlICdtdWx0aXBsZScgbmF0aXZlIGF0dHJpYnV0ZS5cbiAgICovXG4gIEBJbnB1dCgnbXVsdGlwbGUnKVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cblxuICAvKipcbiAgICogZmlsZURyb3A/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIG9yIGZpbGVzIGFyZSBkcm9wcGVkIGluIGhvc3QgZWxlbWVudCBhZnRlciBiZWluZyB2YWxpZGF0ZWQuXG4gICAqIEVtaXRzIGEgW0ZpbGVMaXN0IHwgRmlsZV0gb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgnZmlsZURyb3AnKSBvbkZpbGVEcm9wOiBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3QgfCBGaWxlPigpO1xuXG4gIC8qKlxuICAgKiBCaW5kcyBuYXRpdmUgJ211bHRpcGxlJyBhdHRyaWJ1dGUgaWYgW211bHRpcGxlXSBwcm9wZXJ0eSBpcyAndHJ1ZScuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIubXVsdGlwbGUnKVxuICBnZXQgbXVsdGlwbGVCaW5kaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlID8gJycgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZHMgbmF0aXZlICdkaXNhYmxlZCcgYXR0cmlidXRlIGlmIFtkaXNhYmxlZF0gcHJvcGVydHkgaXMgJ3RydWUnLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJylcbiAgZ2V0IGRpc2FibGVkQmluZGluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcm9wJyBob3N0IGV2ZW50IHRvIGdldCB2YWxpZGF0ZWQgdHJhbnNmZXIgaXRlbXMuXG4gICAqIEVtaXRzIHRoZSAnb25GaWxlRHJvcCcgZXZlbnQgd2l0aCBhIFtGaWxlTGlzdF0gb3IgW0ZpbGVdIGRlcGVuZGluZyBpZiAnbXVsdGlwbGUnIGF0dHIgZXhpc3RzIGluIGhvc3QuXG4gICAqIFN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIGFuZCBkZWZhdWx0IGFjdGlvbiBmcm9tIGJyb3dzZXIgZm9yICdkcm9wJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBvbkRyb3AoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBsZXQgdHJhbnNmZXI6IERhdGFUcmFuc2ZlciA9ICg8RHJhZ0V2ZW50PmV2ZW50KS5kYXRhVHJhbnNmZXI7XG4gICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gdHJhbnNmZXIuZmlsZXM7XG4gICAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWx1ZTogRmlsZUxpc3QgfCBGaWxlID0gdGhpcy5fbXVsdGlwbGUgPyAoZmlsZXMubGVuZ3RoID4gMSA/IGZpbGVzIDogZmlsZXNbMF0pIDogZmlsZXNbMF07XG4gICAgICAgIHRoaXMub25GaWxlRHJvcC5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvICdkcmFnb3ZlcicgaG9zdCBldmVudCB0byB2YWxpZGF0ZSB0cmFuc2ZlciBpdGVtcy5cbiAgICogQ2hlY2tzIGlmICdtdWx0aXBsZScgYXR0ciBleGlzdHMgaW4gaG9zdCB0byBhbGxvdyBtdWx0aXBsZSBmaWxlIGRyb3BzLlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ292ZXInIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCB0cmFuc2ZlcjogRGF0YVRyYW5zZmVyID0gKDxEcmFnRXZlbnQ+ZXZlbnQpLmRhdGFUcmFuc2ZlcjtcbiAgICB0cmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5fdHlwZUNoZWNrKHRyYW5zZmVyLnR5cGVzKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoIXRoaXMuX211bHRpcGxlICYmXG4gICAgICAoKHRyYW5zZmVyLml0ZW1zICYmIHRyYW5zZmVyLml0ZW1zLmxlbmd0aCA+IDEpIHx8ICg8YW55PnRyYW5zZmVyKS5tb3pJdGVtQ291bnQgPiAxKSkpIHtcbiAgICAgIHRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgfVxuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJhZ2VudGVyJyBob3N0IGV2ZW50IHRvIGFkZCBhbmltYXRpb24gY2xhc3MgJ2Ryb3Atem9uZScgd2hpY2ggY2FuIGJlIG92ZXJyaWRlbiBpbiBob3N0LlxuICAgKiBTdG9wcyBldmVudCBwcm9wYWdhdGlvbiBhbmQgZGVmYXVsdCBhY3Rpb24gZnJvbSBicm93c2VyIGZvciAnZHJhZ2VudGVyJyBldmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbnRlcicsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0VudGVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgfVxuICAgIHRoaXMuX3N0b3BFdmVudChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byAnZHJhZ2xlYXZlJyBob3N0IGV2ZW50IHRvIHJlbW92ZSBhbmltYXRpb24gY2xhc3MgJ2Ryb3Atem9uZScuXG4gICAqIFN0b3BzIGV2ZW50IHByb3BhZ2F0aW9uIGFuZCBkZWZhdWx0IGFjdGlvbiBmcm9tIGJyb3dzZXIgZm9yICdkcmFnbGVhdmUnIGV2ZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZHJvcC16b25lJyk7XG4gICAgdGhpcy5fc3RvcEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgaWYgdGhlIHRyYW5zZmVyIGl0ZW0gdHlwZXMgYXJlICdGaWxlcycuXG4gICAqL1xuICBwcml2YXRlIF90eXBlQ2hlY2sodHlwZXM6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IERPTVN0cmluZ0xpc3QpOiBzdHJpbmcge1xuICAgIGxldCBkcm9wRWZmZWN0OiBzdHJpbmcgPSAnbm9uZSc7XG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICBpZiAoKCg8YW55PnR5cGVzKS5jb250YWlucyAmJiAoPGFueT50eXBlcykuY29udGFpbnMoJ0ZpbGVzJykpXG4gICAgICB8fCAoKDxhbnk+dHlwZXMpLmluZGV4T2YgJiYgKDxhbnk+dHlwZXMpLmluZGV4T2YoJ0ZpbGVzJykgIT09IC0xKSkge1xuICAgICAgICBkcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHJvcEVmZmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgX3N0b3BFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=