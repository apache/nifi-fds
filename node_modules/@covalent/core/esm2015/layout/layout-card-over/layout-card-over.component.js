/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
export class TdLayoutCardOverComponent {
    constructor() {
        /**
         * cardWidth?: string
         *
         * Card flex width in %.
         * Defaults to 70%.
         */
        this.cardWidth = 70;
        /**
         * color?: string
         *
         * toolbar color option: primary | accent | warn.
         * If [color] is not set, primary is used.
         */
        this.color = 'primary';
    }
}
TdLayoutCardOverComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-layout-card-over',
                template: "<mat-toolbar [color]=\"color\">\n</mat-toolbar>\n<div class=\"td-layout-card-over-wrapper\">\n  <div class=\"td-layout-card-over\"\n        [style.max-width.%]=\"cardWidth\"\n        [style.flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-ms-flex]=\"'1 1 ' + cardWidth + '%'\"\n        [style.-webkit-box-flex]=\"1\">\n    <mat-card>\n      <mat-card-title *ngIf=\"cardTitle\">{{cardTitle}}</mat-card-title>\n      <mat-card-subtitle *ngIf=\"cardSubtitle\">{{cardSubtitle}}</mat-card-subtitle>\n      <mat-divider *ngIf=\"cardTitle || cardSubtitle\"></mat-divider>\n      <ng-content></ng-content>\n    </mat-card>\n    <ng-content select=\"[td-after-card]\"></ng-content>\n  </div>\n</div>\n",
                styles: [":host{position:relative;display:block;z-index:2;width:100%;min-height:100%;height:100%}:host [td-after-card]{display:block}.td-layout-card-over-wrapper{margin:-64px 0;width:100%;min-height:100%;height:100%}@media (min-width:600px){.td-layout-card-over-wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.td-layout-card-over-wrapper .td-layout-card-over{max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}}@media (max-width:599px){.td-layout-card-over-wrapper .td-layout-card-over{max-width:100%!important}}"]
            }] }
];
TdLayoutCardOverComponent.propDecorators = {
    cardTitle: [{ type: Input, args: ['cardTitle',] }],
    cardSubtitle: [{ type: Input, args: ['cardSubtitle',] }],
    cardWidth: [{ type: Input, args: ['cardWidth',] }],
    color: [{ type: Input, args: ['color',] }]
};
if (false) {
    /**
     * cardTitle?: string
     *
     * Title set in card.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.cardTitle;
    /**
     * cardSubtitle?: string
     *
     * Subtitle set in card.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.cardSubtitle;
    /**
     * cardWidth?: string
     *
     * Card flex width in %.
     * Defaults to 70%.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.cardWidth;
    /**
     * color?: string
     *
     * toolbar color option: primary | accent | warn.
     * If [color] is not set, primary is used.
     * @type {?}
     */
    TdLayoutCardOverComponent.prototype.color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvY29yZS9sYXlvdXQvIiwic291cmNlcyI6WyJsYXlvdXQtY2FyZC1vdmVyL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEMsTUFBTSxPQUFPLHlCQUF5QjtJQUx0Qzs7Ozs7OztRQTJCc0IsY0FBUyxHQUFXLEVBQUUsQ0FBQzs7Ozs7OztRQVEzQixVQUFLLEdBQVcsU0FBUyxDQUFDO0lBRTVDLENBQUM7OztZQXJDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFFL0IsbXNCQUFnRDs7YUFDakQ7Ozt3QkFRRSxLQUFLLFNBQUMsV0FBVzsyQkFPakIsS0FBSyxTQUFDLGNBQWM7d0JBUXBCLEtBQUssU0FBQyxXQUFXO29CQVFqQixLQUFLLFNBQUMsT0FBTzs7Ozs7Ozs7O0lBdkJkLDhDQUFzQzs7Ozs7OztJQU90QyxpREFBNEM7Ozs7Ozs7O0lBUTVDLDhDQUEyQzs7Ozs7Ozs7SUFRM0MsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1sYXlvdXQtY2FyZC1vdmVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWNhcmQtb3Zlci5jb21wb25lbnQuc2NzcycgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1jYXJkLW92ZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUZExheW91dENhcmRPdmVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogY2FyZFRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFRpdGxlIHNldCBpbiBjYXJkLlxuICAgKi9cbiAgQElucHV0KCdjYXJkVGl0bGUnKSBjYXJkVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogY2FyZFN1YnRpdGxlPzogc3RyaW5nXG4gICAqXG4gICAqIFN1YnRpdGxlIHNldCBpbiBjYXJkLlxuICAgKi9cbiAgQElucHV0KCdjYXJkU3VidGl0bGUnKSBjYXJkU3VidGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogY2FyZFdpZHRoPzogc3RyaW5nXG4gICAqXG4gICAqIENhcmQgZmxleCB3aWR0aCBpbiAlLlxuICAgKiBEZWZhdWx0cyB0byA3MCUuXG4gICAqL1xuICBASW5wdXQoJ2NhcmRXaWR0aCcpIGNhcmRXaWR0aDogbnVtYmVyID0gNzA7XG5cbiAgLyoqXG4gICAqIGNvbG9yPzogc3RyaW5nXG4gICAqXG4gICAqIHRvb2xiYXIgY29sb3Igb3B0aW9uOiBwcmltYXJ5IHwgYWNjZW50IHwgd2Fybi5cbiAgICogSWYgW2NvbG9yXSBpcyBub3Qgc2V0LCBwcmltYXJ5IGlzIHVzZWQuXG4gICAqL1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcblxufVxuIl19