(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/divider')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/sidesheet', ['exports', '@angular/core', '@angular/common', '@angular/material/divider'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.sidesheet = {}), global.ng.core, global.ng.common, global.ng.material.divider));
}(this, (function (exports, core, common, divider) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: sidesheet.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdSidesheetContentDirective = /** @class */ (function () {
        function TdSidesheetContentDirective() {
        }
        return TdSidesheetContentDirective;
    }());
    TdSidesheetContentDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'td-sidesheet-content',
                },] }
    ];
    var TdSidesheetTitleDirective = /** @class */ (function () {
        function TdSidesheetTitleDirective() {
        }
        return TdSidesheetTitleDirective;
    }());
    TdSidesheetTitleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'td-sidesheet-title',
                },] }
    ];
    var TdSidesheetActionsDirective = /** @class */ (function () {
        function TdSidesheetActionsDirective() {
            this.align = 'start';
        }
        return TdSidesheetActionsDirective;
    }());
    TdSidesheetActionsDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'td-sidesheet-actions',
                    /* tslint:disable-next-line */
                    host: {
                        '[class.align-end]': 'align === "end"',
                        '[class.align-start]': 'align === "start"',
                    },
                },] }
    ];
    TdSidesheetActionsDirective.propDecorators = {
        align: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        TdSidesheetActionsDirective.prototype.align;
    }
    var TdSidesheetHeaderComponent = /** @class */ (function () {
        function TdSidesheetHeaderComponent() {
        }
        return TdSidesheetHeaderComponent;
    }());
    TdSidesheetHeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-sidesheet-header',
                    template: "<ng-content select=\"td-sidesheet-title\"></ng-content>\n<ng-content select=\"[mat-icon-button][td-sidesheet-header-action]\"></ng-content>\n"
                }] }
    ];
    var TdSidesheetComponent = /** @class */ (function () {
        function TdSidesheetComponent() {
        }
        return TdSidesheetComponent;
    }());
    TdSidesheetComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-sidesheet',
                    template: "<ng-content select=\"td-sidesheet-header\"></ng-content>\n<ng-template [ngIf]=\"headerExists\">\n  <mat-divider></mat-divider>\n</ng-template>\n<div class=\"td-sidesheet-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<ng-template [ngIf]=\"actionsExist\">\n  <mat-divider></mat-divider>\n</ng-template>\n<ng-content select=\"td-sidesheet-actions\"></ng-content>\n",
                    // tslint:disable-next-line:use-component-view-encapsulation
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["td-sidesheet,td-sidesheet td-sidesheet-header{box-sizing:border-box;display:-ms-flexbox;display:flex}td-sidesheet{-ms-flex-direction:column;flex-direction:column}td-sidesheet td-sidesheet-header{-ms-flex-direction:row;flex-direction:row}td-sidesheet{height:100%;margin:0;min-height:100%;width:100%}td-sidesheet td-sidesheet-header{-ms-flex-align:center;-ms-flex-line-pack:center;-ms-flex-pack:start;align-content:center;align-items:center;justify-content:flex-start;max-width:100%}td-sidesheet .mat-divider-horizontal{position:static!important}td-sidesheet td-sidesheet-title{-ms-flex:1;flex:1}td-sidesheet td-sidesheet-header{font-size:18px;padding:20px 16px;width:100%}td-sidesheet td-sidesheet-header .mat-button-focus-overlay{background-color:rgba(0,0,0,0)!important}td-sidesheet td-sidesheet-header .mat-icon-button{height:24px;line-height:21px;width:24px}td-sidesheet td-sidesheet-actions{display:block;padding:8px}td-sidesheet .td-sidesheet-content-wrapper{-ms-flex:1;flex:1;overflow-y:auto;position:relative}td-sidesheet td-sidesheet-content{display:block;padding:16px}td-sidesheet-content>:first-child,td-sidesheet>:first-child{margin-top:0}td-sidesheet-content>:last-child,td-sidesheet>:last-child{margin-bottom:0}"]
                }] }
    ];
    TdSidesheetComponent.propDecorators = {
        headerExists: [{ type: core.ContentChild, args: [TdSidesheetHeaderComponent,] }],
        actionsExist: [{ type: core.ContentChild, args: [TdSidesheetActionsDirective,] }]
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
    var TD_SIDESHEET = [
        TdSidesheetComponent,
        TdSidesheetHeaderComponent,
        TdSidesheetContentDirective,
        TdSidesheetTitleDirective,
        TdSidesheetActionsDirective,
    ];
    var CovalentSidesheetModule = /** @class */ (function () {
        function CovalentSidesheetModule() {
        }
        return CovalentSidesheetModule;
    }());
    CovalentSidesheetModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, divider.MatDividerModule],
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

    exports.CovalentSidesheetModule = CovalentSidesheetModule;
    exports.TdSidesheetActionsDirective = TdSidesheetActionsDirective;
    exports.TdSidesheetComponent = TdSidesheetComponent;
    exports.TdSidesheetContentDirective = TdSidesheetContentDirective;
    exports.TdSidesheetHeaderComponent = TdSidesheetHeaderComponent;
    exports.TdSidesheetTitleDirective = TdSidesheetTitleDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-sidesheet.umd.js.map
