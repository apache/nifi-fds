/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
var TdPromptDialogComponent = /** @class */ (function () {
    function TdPromptDialogComponent(_dialogRef) {
        this._dialogRef = _dialogRef;
        this.cancelButton = 'CANCEL';
        this.acceptButton = 'ACCEPT';
    }
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // focus input once everything is rendered and good to go
        Promise.resolve().then(function () {
            ((/** @type {?} */ (_this._input.nativeElement))).focus();
        });
    };
    /**
     * Method executed when input is focused
     * Selects all text
     */
    /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    TdPromptDialogComponent.prototype.handleInputFocus = /**
     * Method executed when input is focused
     * Selects all text
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this._input.nativeElement))).select();
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(undefined);
    };
    /**
     * @return {?}
     */
    TdPromptDialogComponent.prototype.accept = /**
     * @return {?}
     */
    function () {
        this._dialogRef.close(this.value);
    };
    TdPromptDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-prompt-dialog',
                    template: "<td-dialog>\n  <td-dialog-title *ngIf=\"title\">\n    {{title}}\n  </td-dialog-title>\n  <td-dialog-content>\n    <span class=\"td-dialog-message\">{{message}}</span>\n    <form #form=\"ngForm\" novalidate>\n      <div class=\"td-dialog-input-wrapper\">\n        <mat-form-field class=\"td-dialog-input\">\n          <input matInput\n                #input\n                (focus)=\"handleInputFocus()\"\n                (keydown.enter)=\"$event.preventDefault(); form.valid && accept()\"\n                [(ngModel)]=\"value\"\n                name=\"value\"\n                required/>\n        </mat-form-field>\n      </div>\n    </form>\n  </td-dialog-content>\n  <td-dialog-actions>\n    <button mat-button\n            #closeBtn \n            (keydown.arrowright)=\"acceptBtn.focus()\"\n            (click)=\"cancel()\">{{cancelButton}}</button>\n    <button mat-button\n            color=\"accent\"\n            #acceptBtn\n            (keydown.arrowleft)=\"closeBtn.focus()\"\n            [disabled]=\"!form.valid\"\n            (click)=\"accept()\">{{acceptButton}}</button>\n  </td-dialog-actions>\n</td-dialog>",
                    styles: [".td-dialog-input-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}.td-dialog-input-wrapper .td-dialog-input{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box}.td-dialog-message{word-break:break-word}"]
                }] }
    ];
    /** @nocollapse */
    TdPromptDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef }
    ]; };
    TdPromptDialogComponent.propDecorators = {
        _input: [{ type: ViewChild, args: ['input',] }]
    };
    return TdPromptDialogComponent;
}());
export { TdPromptDialogComponent };
if (false) {
    /** @type {?} */
    TdPromptDialogComponent.prototype.title;
    /** @type {?} */
    TdPromptDialogComponent.prototype.message;
    /** @type {?} */
    TdPromptDialogComponent.prototype.value;
    /** @type {?} */
    TdPromptDialogComponent.prototype.cancelButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype.acceptButton;
    /** @type {?} */
    TdPromptDialogComponent.prototype._input;
    /** @type {?} */
    TdPromptDialogComponent.prototype._dialogRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbXB0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS8iLCJzb3VyY2VzIjpbImRpYWxvZ3MvcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQ7SUFjRSxpQ0FBb0IsVUFBaUQ7UUFBakQsZUFBVSxHQUFWLFVBQVUsQ0FBdUM7UUFMckUsaUJBQVksR0FBVyxRQUFRLENBQUM7UUFDaEMsaUJBQVksR0FBVyxRQUFRLENBQUM7SUFJd0MsQ0FBQzs7OztJQUV6RSxpREFBZTs7O0lBQWY7UUFBQSxpQkFLQztRQUpDLHlEQUF5RDtRQUN6RCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsbUJBQWtCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGtEQUFnQjs7Ozs7SUFBaEI7UUFDRSxDQUFDLG1CQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7OztJQUVELHdDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx3Q0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QiwrbUNBQTZDOztpQkFFOUM7Ozs7Z0JBTlEsWUFBWTs7O3lCQWNsQixTQUFTLFNBQUMsT0FBTzs7SUEwQnBCLDhCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FqQ1ksdUJBQXVCOzs7SUFDbEMsd0NBQWM7O0lBQ2QsMENBQWdCOztJQUNoQix3Q0FBYzs7SUFDZCwrQ0FBZ0M7O0lBQ2hDLCtDQUFnQzs7SUFFaEMseUNBQXVDOztJQUUzQiw2Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtcHJvbXB0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvbXB0LWRpYWxvZy5jb21wb25lbnQuc2NzcycgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRQcm9tcHREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICdDQU5DRUwnO1xuICBhY2NlcHRCdXR0b246IHN0cmluZyA9ICdBQ0NFUFQnO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgX2lucHV0OiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFRkUHJvbXB0RGlhbG9nQ29tcG9uZW50Pikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gZm9jdXMgaW5wdXQgb25jZSBldmVyeXRoaW5nIGlzIHJlbmRlcmVkIGFuZCBnb29kIHRvIGdvXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5faW5wdXQubmF0aXZlRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZXhlY3V0ZWQgd2hlbiBpbnB1dCBpcyBmb2N1c2VkXG4gICAqIFNlbGVjdHMgYWxsIHRleHRcbiAgICovXG4gIGhhbmRsZUlucHV0Rm9jdXMoKTogdm9pZCB7XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuX2lucHV0Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdCgpO1xuICB9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh1bmRlZmluZWQpO1xuICB9XG5cbiAgYWNjZXB0KCk6IHZvaWQge1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19