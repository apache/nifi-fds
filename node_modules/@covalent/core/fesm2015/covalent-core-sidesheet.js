import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { Component, ContentChild, Directive, Input, ViewEncapsulation, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdSidesheetContentDirective {
}
TdSidesheetContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-content',
            },] }
];
class TdSidesheetTitleDirective {
}
TdSidesheetTitleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-title',
            },] }
];
class TdSidesheetActionsDirective {
    constructor() {
        this.align = 'start';
    }
}
TdSidesheetActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'td-sidesheet-actions',
                /* tslint:disable-next-line */
                host: {
                    '[class.align-end]': 'align === "end"',
                    '[class.align-start]': 'align === "start"',
                },
            },] }
];
TdSidesheetActionsDirective.propDecorators = {
    align: [{ type: Input }]
};
class TdSidesheetHeaderComponent {
}
TdSidesheetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet-header',
                template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>"
            }] }
];
class TdSidesheetComponent {
}
TdSidesheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet',
                template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>",
                encapsulation: ViewEncapsulation.None,
                styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex}td-sidesheet{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0;width:100%;min-height:100%;height:100%}td-sidesheet td-sidesheet-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;max-width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;padding:20px 16px;font-size:18px}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-webkit-box-flex:1;-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:transparent!important}td-sidesheet td-sidesheet-header .mat-icon-button{width:24px;height:24px;line-height:21px}td-sidesheet td-sidesheet-actions{padding:8px;display:block}td-sidesheet .td-sidesheet-content-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
            }] }
];
TdSidesheetComponent.propDecorators = {
    headerExists: [{ type: ContentChild, args: [TdSidesheetHeaderComponent,] }],
    actionsExist: [{ type: ContentChild, args: [TdSidesheetActionsDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TD_SIDESHEET = [
    TdSidesheetComponent,
    TdSidesheetHeaderComponent,
    TdSidesheetContentDirective,
    TdSidesheetTitleDirective,
    TdSidesheetActionsDirective,
];
class CovalentSidesheetModule {
}
CovalentSidesheetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatDividerModule,
                ],
                declarations: [
                    TD_SIDESHEET,
                ],
                exports: [
                    TD_SIDESHEET,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { CovalentSidesheetModule, TdSidesheetContentDirective, TdSidesheetTitleDirective, TdSidesheetActionsDirective, TdSidesheetHeaderComponent, TdSidesheetComponent };

//# sourceMappingURL=covalent-core-sidesheet.js.map