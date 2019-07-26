/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ContentChild, ChangeDetectorRef, forwardRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { mixinDisabled, mixinControlValueAccessor } from '@covalent/core/common';
import { TdFileInputComponent, TdFileInputLabelDirective } from '../file-input/file-input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var TdFileUploadBase = /** @class */ (function () {
    function TdFileUploadBase(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
    }
    return TdFileUploadBase;
}());
export { TdFileUploadBase };
if (false) {
    /** @type {?} */
    TdFileUploadBase.prototype._changeDetectorRef;
}
/* tslint:disable-next-line */
/** @type {?} */
export var _TdFileUploadMixinBase = mixinControlValueAccessor(mixinDisabled(TdFileUploadBase));
var TdFileUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdFileUploadComponent, _super);
    function TdFileUploadComponent(_changeDetectorRef) {
        var _this = _super.call(this, _changeDetectorRef) || this;
        _this._multiple = false;
        _this._required = false;
        /**
         * defaultColor?: string
         * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
         */
        _this.defaultColor = 'primary';
        /**
         * activeColor?: string
         * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
         */
        _this.activeColor = 'accent';
        /**
         * cancelColor?: string
         * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
         */
        _this.cancelColor = 'warn';
        /**
         * select?: function
         * Event emitted when a file is selected.
         * Emits a [File | FileList] object.
         */
        _this.onSelect = new EventEmitter();
        /**
         * upload?: function
         * Event emitted when upload button is clicked.
         * Emits a [File | FileList] object.
         */
        _this.onUpload = new EventEmitter();
        /**
         * cancel?: function
         * Event emitted when cancel button is clicked.
         */
        _this.onCancel = new EventEmitter();
        return _this;
    }
    Object.defineProperty(TdFileUploadComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         */
        set: /**
         * multiple?: boolean
         * Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
         * @param {?} multiple
         * @return {?}
         */
        function (multiple) {
            this._multiple = coerceBooleanProperty(multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdFileUploadComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         */
        set: /**
         * required?: boolean
         * Forces at least one file upload.
         * Defaults to 'false'
         * @param {?} required
         * @return {?}
         */
        function (required) {
            this._required = coerceBooleanProperty(required);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method executed when upload button is clicked.
     */
    /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    TdFileUploadComponent.prototype.uploadPressed = /**
     * Method executed when upload button is clicked.
     * @return {?}
     */
    function () {
        if (this.value) {
            this.onUpload.emit(this.value);
        }
    };
    /**
     * Method executed when a file is selected.
     */
    /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    TdFileUploadComponent.prototype.handleSelect = /**
     * Method executed when a file is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.onSelect.emit(value);
    };
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     */
    /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    TdFileUploadComponent.prototype.cancel = /**
     * Methods executed when cancel button is clicked.
     * Clears files.
     * @return {?}
     */
    function () {
        this.value = undefined;
        this.onCancel.emit(undefined);
        // check if the file input is rendered before clearing it
        if (this.fileInput) {
            this.fileInput.clear();
        }
    };
    /** Method executed when the disabled value changes */
    /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    TdFileUploadComponent.prototype.onDisabledChange = /**
     * Method executed when the disabled value changes
     * @param {?} v
     * @return {?}
     */
    function (v) {
        if (v) {
            this.cancel();
        }
    };
    TdFileUploadComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return TdFileUploadComponent; }),
                            multi: true,
                        }],
                    selector: 'td-file-upload',
                    inputs: ['disabled', 'value'],
                    template: "<td-file-input *ngIf=\"!value\"\n               [(ngModel)]=\"value\"\n               [multiple]=\"multiple\"\n               [disabled]=\"disabled\"\n               [accept]=\"accept\"\n               [color]=\"defaultColor\"\n               (select)=\"handleSelect($event)\">\n  <ng-template [cdkPortalOutlet]=\"inputLabel\" [ngIf]=\"true\"></ng-template>\n</td-file-input>\n<div *ngIf=\"value\">\n  <button #fileUpload\n          class=\"td-file-upload\"\n          mat-raised-button\n          type=\"button\"\n          [color]=\"activeColor\"\n          (keyup.delete)=\"cancel()\"\n          (keyup.backspace)=\"cancel()\"\n          (keyup.escape)=\"cancel()\"\n          (click)=\"uploadPressed()\"> \n    <ng-content></ng-content>\n  </button>\n  <button mat-icon-button\n          type=\"button\"\n          class=\"td-file-upload-cancel\"\n          [color]=\"cancelColor\"            \n          (click)=\"cancel()\">\n    <mat-icon>cancel</mat-icon>\n  </button>\n</div>",
                    styles: [".td-file-upload{padding-left:8px;padding-right:8px}.td-file-upload-cancel{height:24px;width:24px;position:relative;top:24px;left:-12px}::ng-deep [dir=rtl] .td-file-upload-cancel{right:-12px;left:0}.td-file-upload-cancel mat-icon{border-radius:12px;vertical-align:baseline}.drop-zone{border-radius:3px}.drop-zone *{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    TdFileUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TdFileUploadComponent.propDecorators = {
        fileInput: [{ type: ViewChild, args: [TdFileInputComponent,] }],
        inputLabel: [{ type: ContentChild, args: [TdFileInputLabelDirective,] }],
        defaultColor: [{ type: Input, args: ['defaultColor',] }],
        activeColor: [{ type: Input, args: ['activeColor',] }],
        cancelColor: [{ type: Input, args: ['cancelColor',] }],
        multiple: [{ type: Input, args: ['multiple',] }],
        required: [{ type: Input, args: ['required',] }],
        accept: [{ type: Input, args: ['accept',] }],
        onSelect: [{ type: Output, args: ['select',] }],
        onUpload: [{ type: Output, args: ['upload',] }],
        onCancel: [{ type: Output, args: ['cancel',] }]
    };
    return TdFileUploadComponent;
}(_TdFileUploadMixinBase));
export { TdFileUploadComponent };
if (false) {
    /** @type {?} */
    TdFileUploadComponent.prototype._multiple;
    /** @type {?} */
    TdFileUploadComponent.prototype._required;
    /** @type {?} */
    TdFileUploadComponent.prototype.fileInput;
    /** @type {?} */
    TdFileUploadComponent.prototype.inputLabel;
    /**
     * defaultColor?: string
     * Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.defaultColor;
    /**
     * activeColor?: string
     * Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.activeColor;
    /**
     * cancelColor?: string
     * Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
     * @type {?}
     */
    TdFileUploadComponent.prototype.cancelColor;
    /**
     * accept?: string
     * Sets files accepted when opening the file browser dialog.
     * Same as 'accept' attribute in <input/> element.
     * @type {?}
     */
    TdFileUploadComponent.prototype.accept;
    /**
     * select?: function
     * Event emitted when a file is selected.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onSelect;
    /**
     * upload?: function
     * Event emitted when upload button is clicked.
     * Emits a [File | FileList] object.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onUpload;
    /**
     * cancel?: function
     * Event emitted when cancel button is clicked.
     * @type {?}
     */
    TdFileUploadComponent.prototype.onCancel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2NvcmUvZmlsZS8iLCJzb3VyY2VzIjpbImZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFDbEgsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBZSxhQUFhLEVBQXlCLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDckcsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFO0lBQ0UsMEJBQW1CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQUcsQ0FBQztJQUM5RCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsOENBQTRDOzs7O0FBSTFELE1BQU0sS0FBTyxzQkFBc0IsR0FBRyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUVoRztJQVkyQyxpREFBc0I7SUErRS9ELCtCQUFZLGtCQUFxQztRQUFqRCxZQUNFLGtCQUFNLGtCQUFrQixDQUFDLFNBQzFCO1FBL0VPLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBUyxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFVWixrQkFBWSxHQUFXLFNBQVMsQ0FBQzs7Ozs7UUFNbEMsaUJBQVcsR0FBVyxRQUFRLENBQUM7Ozs7O1FBTS9CLGlCQUFXLEdBQVcsTUFBTSxDQUFDOzs7Ozs7UUF1Q2pDLGNBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7Ozs7OztRQU85RSxjQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7OztRQU05RSxjQUFRLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7O0lBSTFFLENBQUM7SUFsREQsc0JBQ0ksMkNBQVE7Ozs7UUFHWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBVkQ7OztXQUdHOzs7Ozs7O1FBQ0gsVUFDYSxRQUFpQjtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBVUQsc0JBQ0ksMkNBQVE7Ozs7UUFHWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBWEQ7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNhLFFBQWlCO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFvQ0Q7O09BRUc7Ozs7O0lBQ0gsNkNBQWE7Ozs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsNENBQVk7Ozs7O0lBQVosVUFBYSxLQUFzQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxzQ0FBTTs7Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLHlEQUF5RDtRQUN6RCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxzREFBc0Q7Ozs7OztJQUN0RCxnREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLENBQVU7UUFDekIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7O2dCQWxJRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixDQUFDOzRCQUNwRCxLQUFLLEVBQUUsSUFBSTt5QkFDWixDQUFDO29CQUNGLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7b0JBRTdCLG8rQkFBMkM7O2lCQUM1Qzs7OztnQkF6QmtHLGlCQUFpQjs7OzRCQStCakgsU0FBUyxTQUFDLG9CQUFvQjs2QkFFOUIsWUFBWSxTQUFDLHlCQUF5QjsrQkFNdEMsS0FBSyxTQUFDLGNBQWM7OEJBTXBCLEtBQUssU0FBQyxhQUFhOzhCQU1uQixLQUFLLFNBQUMsYUFBYTsyQkFNbkIsS0FBSyxTQUFDLFVBQVU7MkJBYWhCLEtBQUssU0FBQyxVQUFVO3lCQWFoQixLQUFLLFNBQUMsUUFBUTsyQkFPZCxNQUFNLFNBQUMsUUFBUTsyQkFPZixNQUFNLFNBQUMsUUFBUTsyQkFNZixNQUFNLFNBQUMsUUFBUTs7SUEwQ2xCLDRCQUFDO0NBQUEsQUFuSUQsQ0FZMkMsc0JBQXNCLEdBdUhoRTtTQXZIWSxxQkFBcUI7OztJQUVoQywwQ0FBbUM7O0lBQ25DLDBDQUFtQzs7SUFFbkMsMENBQWlFOztJQUVqRSwyQ0FBK0U7Ozs7OztJQU0vRSw2Q0FBd0Q7Ozs7OztJQU14RCw0Q0FBcUQ7Ozs7OztJQU1yRCw0Q0FBbUQ7Ozs7Ozs7SUFnQ25ELHVDQUFnQzs7Ozs7OztJQU9oQyx5Q0FBZ0c7Ozs7Ozs7SUFPaEcseUNBQWdHOzs7Ozs7SUFNaEcseUNBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3Q2hpbGQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBJQ2FuRGlzYWJsZSwgbWl4aW5EaXNhYmxlZCwgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGNvdmFsZW50L2NvcmUvY29tbW9uJztcbmltcG9ydCB7IFRkRmlsZUlucHV0Q29tcG9uZW50LCBUZEZpbGVJbnB1dExhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi4vZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBUZEZpbGVVcGxvYWRCYXNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGNvbnN0IF9UZEZpbGVVcGxvYWRNaXhpbkJhc2UgPSBtaXhpbkNvbnRyb2xWYWx1ZUFjY2Vzc29yKG1peGluRGlzYWJsZWQoVGRGaWxlVXBsb2FkQmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZEZpbGVVcGxvYWRDb21wb25lbnQpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbiAgc2VsZWN0b3I6ICd0ZC1maWxlLXVwbG9hZCcsXG4gIGlucHV0czogWydkaXNhYmxlZCcsICd2YWx1ZSddLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZEZpbGVVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBfVGRGaWxlVXBsb2FkTWl4aW5CYXNlIGltcGxlbWVudHMgSUNvbnRyb2xWYWx1ZUFjY2Vzc29yLCBJQ2FuRGlzYWJsZSB7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFRkRmlsZUlucHV0Q29tcG9uZW50KSBmaWxlSW5wdXQ6IFRkRmlsZUlucHV0Q29tcG9uZW50O1xuXG4gIEBDb250ZW50Q2hpbGQoVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZSkgaW5wdXRMYWJlbDogVGRGaWxlSW5wdXRMYWJlbERpcmVjdGl2ZTtcblxuICAvKipcbiAgICogZGVmYXVsdENvbG9yPzogc3RyaW5nXG4gICAqIFNldHMgYnJvd3NlIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICdwcmltYXJ5Jy5cbiAgICovXG4gIEBJbnB1dCgnZGVmYXVsdENvbG9yJykgZGVmYXVsdENvbG9yOiBzdHJpbmcgPSAncHJpbWFyeSc7XG5cbiAgLyoqXG4gICAqIGFjdGl2ZUNvbG9yPzogc3RyaW5nXG4gICAqIFNldHMgdXBsb2FkIGJ1dHRvbiBjb2xvci4gVXNlcyBzYW1lIGNvbG9yIHBhbGV0dGUgYWNjZXB0ZWQgYXMgW01hdEJ1dHRvbl0gYW5kIGRlZmF1bHRzIHRvICdhY2NlbnQnLlxuICAgKi9cbiAgQElucHV0KCdhY3RpdmVDb2xvcicpIGFjdGl2ZUNvbG9yOiBzdHJpbmcgPSAnYWNjZW50JztcblxuICAvKipcbiAgICogY2FuY2VsQ29sb3I/OiBzdHJpbmdcbiAgICogU2V0cyBjYW5jZWwgYnV0dG9uIGNvbG9yLiBVc2VzIHNhbWUgY29sb3IgcGFsZXR0ZSBhY2NlcHRlZCBhcyBbTWF0QnV0dG9uXSBhbmQgZGVmYXVsdHMgdG8gJ3dhcm4nLlxuICAgKi9cbiAgQElucHV0KCdjYW5jZWxDb2xvcicpIGNhbmNlbENvbG9yOiBzdHJpbmcgPSAnd2Fybic7XG5cbiAgLyoqXG4gICAqIG11bHRpcGxlPzogYm9vbGVhblxuICAgKiBTZXRzIGlmIG11bHRpcGxlIGZpbGVzIGNhbiBiZSBkcm9wcGVkL3NlbGVjdGVkIGF0IG9uY2UgaW4gW1RkRmlsZVVwbG9hZENvbXBvbmVudF0uXG4gICAqL1xuICBASW5wdXQoJ211bHRpcGxlJylcbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKipcbiAgICogcmVxdWlyZWQ/OiBib29sZWFuXG4gICAqIEZvcmNlcyBhdCBsZWFzdCBvbmUgZmlsZSB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvICdmYWxzZSdcbiAgICovXG4gIEBJbnB1dCgncmVxdWlyZWQnKVxuICBzZXQgcmVxdWlyZWQocmVxdWlyZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShyZXF1aXJlZCk7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBhY2NlcHQ/OiBzdHJpbmdcbiAgICogU2V0cyBmaWxlcyBhY2NlcHRlZCB3aGVuIG9wZW5pbmcgdGhlIGZpbGUgYnJvd3NlciBkaWFsb2cuXG4gICAqIFNhbWUgYXMgJ2FjY2VwdCcgYXR0cmlidXRlIGluIDxpbnB1dC8+IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoJ2FjY2VwdCcpIGFjY2VwdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZWxlY3Q/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3NlbGVjdCcpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiB1cGxvYWQ/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdXBsb2FkIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKiBFbWl0cyBhIFtGaWxlIHwgRmlsZUxpc3RdIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoJ3VwbG9hZCcpIG9uVXBsb2FkOiBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZSB8IEZpbGVMaXN0PigpO1xuXG4gIC8qKlxuICAgKiBjYW5jZWw/OiBmdW5jdGlvblxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgnY2FuY2VsJykgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoX2NoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB1cGxvYWQgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICB1cGxvYWRQcmVzc2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLm9uVXBsb2FkLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBleGVjdXRlZCB3aGVuIGEgZmlsZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGhhbmRsZVNlbGVjdCh2YWx1ZTogRmlsZSB8IEZpbGVMaXN0KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25TZWxlY3QuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kcyBleGVjdXRlZCB3aGVuIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICogQ2xlYXJzIGZpbGVzLlxuICAgKi9cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkNhbmNlbC5lbWl0KHVuZGVmaW5lZCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGZpbGUgaW5wdXQgaXMgcmVuZGVyZWQgYmVmb3JlIGNsZWFyaW5nIGl0XG4gICAgaWYgKHRoaXMuZmlsZUlucHV0KSB7XG4gICAgICB0aGlzLmZpbGVJbnB1dC5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiB0aGUgZGlzYWJsZWQgdmFsdWUgY2hhbmdlcyAqL1xuICBvbkRpc2FibGVkQ2hhbmdlKHY6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==