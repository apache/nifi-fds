/**
 * @fileoverview added by tsickle
 * Generated from: dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Directive, ContentChildren, QueryList } from '@angular/core';
export class TdDialogTitleDirective {
}
TdDialogTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-title' },] }
];
export class TdDialogContentDirective {
}
TdDialogContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-content' },] }
];
export class TdDialogActionsDirective {
}
TdDialogActionsDirective.decorators = [
    { type: Directive, args: [{ selector: 'td-dialog-actions' },] }
];
export class TdDialogComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.dialogTitle.length > 1) {
            throw new Error('Duplicate td-dialog-title component at in td-dialog.');
        }
        if (this.dialogContent.length > 1) {
            throw new Error('Duplicate td-dialog-content component at in td-dialog.');
        }
        if (this.dialogActions.length > 1) {
            throw new Error('Duplicate td-dialog-actions component at in td-dialog.');
        }
    }
}
TdDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-dialog',
                template: "<div class=\"td-dialog-wrapper\">\n  <h3 class=\"td-dialog-title\" *ngIf=\"dialogTitle.length > 0\">\n    <ng-content select=\"td-dialog-title\"></ng-content>\n  </h3>\n  <div class=\"td-dialog-content\" *ngIf=\"dialogContent.length > 0\">\n    <ng-content select=\"td-dialog-content\"></ng-content>\n  </div>\n  <div class=\"td-dialog-actions\" *ngIf=\"dialogActions.length > 0\">\n    <span class=\"td-dialog-spacer\"></span>\n    <ng-content select=\"td-dialog-actions\"></ng-content>\n  </div>\n</div>\n",
                styles: [".td-dialog-title{margin-bottom:20px;margin-top:0}.td-dialog-content{margin-bottom:16px}.td-dialog-actions{left:16px;position:relative;top:16px}::ng-deep [dir=rtl] .td-dialog-actions{left:auto;right:16px}:host{display:block}:host .td-dialog-actions{-ms-flex-direction:row;box-sizing:border-box;display:-ms-flexbox;display:flex;flex-direction:row}:host .td-dialog-actions .td-dialog-spacer{-ms-flex:1;flex:1}:host .td-dialog-actions ::ng-deep button{margin-left:8px;min-width:64px;padding-left:8px;padding-right:8px;text-transform:uppercase}[dir=rtl] :host .td-dialog-actions ::ng-deep button{margin-left:inherit;margin-right:8px}"]
            }] }
];
TdDialogComponent.propDecorators = {
    dialogTitle: [{ type: ContentChildren, args: [TdDialogTitleDirective, { descendants: true },] }],
    dialogContent: [{ type: ContentChildren, args: [TdDialogContentDirective, { descendants: true },] }],
    dialogActions: [{ type: ContentChildren, args: [TdDialogActionsDirective, { descendants: true },] }]
};
if (false) {
    /** @type {?} */
    TdDialogComponent.prototype.dialogTitle;
    /** @type {?} */
    TdDialogComponent.prototype.dialogContent;
    /** @type {?} */
    TdDialogComponent.prototype.dialogActions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vY29yZS9kaWFsb2dzLyIsInNvdXJjZXMiOlsiZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBR25HLE1BQU0sT0FBTyxzQkFBc0I7OztZQURsQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7O0FBSTFDLE1BQU0sT0FBTyx3QkFBd0I7OztZQURwQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7O0FBSTVDLE1BQU0sT0FBTyx3QkFBd0I7OztZQURwQyxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7O0FBUTVDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFLNUIsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtJQUNILENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVnQkFBc0M7O2FBRXZDOzs7MEJBRUUsZUFBZSxTQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs0QkFDN0QsZUFBZSxTQUFDLHdCQUF3QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs0QkFDL0QsZUFBZSxTQUFDLHdCQUF3QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7OztJQUZoRSx3Q0FBK0c7O0lBQy9HLDBDQUFxSDs7SUFDckgsMENBQXFIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RkLWRpYWxvZy10aXRsZScgfSlcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ1RpdGxlRGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ3RkLWRpYWxvZy1jb250ZW50JyB9KVxuZXhwb3J0IGNsYXNzIFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0ZC1kaWFsb2ctYWN0aW9ucycgfSlcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKFRkRGlhbG9nVGl0bGVEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgZGlhbG9nVGl0bGU6IFF1ZXJ5TGlzdDxUZERpYWxvZ1RpdGxlRGlyZWN0aXZlPjtcbiAgQENvbnRlbnRDaGlsZHJlbihUZERpYWxvZ0NvbnRlbnREaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgZGlhbG9nQ29udGVudDogUXVlcnlMaXN0PFRkRGlhbG9nQ29udGVudERpcmVjdGl2ZT47XG4gIEBDb250ZW50Q2hpbGRyZW4oVGREaWFsb2dBY3Rpb25zRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGRpYWxvZ0FjdGlvbnM6IFF1ZXJ5TGlzdDxUZERpYWxvZ0FjdGlvbnNEaXJlY3RpdmU+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2dUaXRsZS5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctdGl0bGUgY29tcG9uZW50IGF0IGluIHRkLWRpYWxvZy4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlhbG9nQ29udGVudC5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0ZC1kaWFsb2ctY29udGVudCBjb21wb25lbnQgYXQgaW4gdGQtZGlhbG9nLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaWFsb2dBY3Rpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIHRkLWRpYWxvZy1hY3Rpb25zIGNvbXBvbmVudCBhdCBpbiB0ZC1kaWFsb2cuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=