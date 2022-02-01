import { Directive, Input, Component, ViewEncapsulation, ContentChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

/**
 * @fileoverview added by tsickle
 * Generated from: sidesheet.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    TdSidesheetActionsDirective.prototype.align;
}
class TdSidesheetHeaderComponent {
}
TdSidesheetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet-header',
                template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>\n"
            }] }
];
class TdSidesheetComponent {
}
TdSidesheetComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-sidesheet',
                template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>\n",
                // tslint:disable-next-line:use-component-view-encapsulation
                encapsulation: ViewEncapsulation.None,
                styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{box-sizing:border-box;display:-ms-flexbox;display:flex}td-sidesheet{-ms-flex-direction:column;flex-direction:column}td-sidesheet td-sidesheet-header{-ms-flex-direction:row;flex-direction:row}td-sidesheet{height:100%;margin:0;min-height:100%;width:100%}td-sidesheet td-sidesheet-header{-ms-flex-align:center;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;justify-content:flex-start;max-width:100%}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header{font-size:18px;padding:20px 16px;width:100%}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:rgba(0,0,0,0)!important}td-sidesheet td-sidesheet-header .mat-icon-button{height:24px;line-height:21px;width:24px}td-sidesheet td-sidesheet-actions{display:block;padding:8px}td-sidesheet .td-sidesheet-content-wrapper{-ms-flex:1;flex:1;overflow-y:auto;position:relative}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
            }] }
];
TdSidesheetComponent.propDecorators = {
    headerExists: [{ type: ContentChild, args: [TdSidesheetHeaderComponent,] }],
    actionsExist: [{ type: ContentChild, args: [TdSidesheetActionsDirective,] }]
};
if (false) {
    /** @type {?} */
    TdSidesheetComponent.prototype.headerExists;
    /** @type {?} */
    TdSidesheetComponent.prototype.actionsExist;
}

/**
 * @fileoverview added by tsickle
 * Generated from: sidesheet.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                imports: [CommonModule, MatDividerModule],
                declarations: [TD_SIDESHEET],
                exports: [TD_SIDESHEET],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-core-sidesheet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentSidesheetModule, TdSidesheetActionsDirective, TdSidesheetComponent, TdSidesheetContentDirective, TdSidesheetHeaderComponent, TdSidesheetTitleDirective };
//# sourceMappingURL=covalent-core-sidesheet.js.map
