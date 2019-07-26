/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Version, Inject, NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { SERVER_TOKEN, LAYOUT_CONFIG, DEFAULT_CONFIG, BREAKPOINT } from '@angular/flex-layout/core';
export { ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook } from '@angular/flex-layout/core';
import { ExtendedModule } from '@angular/flex-layout/extended';
export { ExtendedModule, ClassDirective, LayoutNgClassImplProvider, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, LayoutNgStyleImplProvider, DefaultStyleDirective } from '@angular/flex-layout/extended';
import { FlexModule } from '@angular/flex-layout/flex';
export { FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';
export { ɵf2, ɵe2, ɵd2, ɵi2, ɵh2, ɵg2, ɵl2, ɵk2, ɵj2, ɵo2, ɵn2, ɵm2, ɵr2, ɵq2, ɵp2, ɵu2, ɵt2, ɵs2, ɵx2, ɵw2, ɵv2, ɵba2, ɵz2, ɵy2, ɵc2, ɵb2, ɵa2, ɵbd2, ɵbc2, ɵbb2, ɵbg2, ɵbf2, ɵbe2, GridModule } from '@angular/flex-layout/grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 * @type {?}
 */
const VERSION = new Version('8.0.0-beta.26');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
class FlexLayoutModule {
    /**
     * @param {?} serverModuleLoaded
     * @param {?} platformId
     */
    constructor(serverModuleLoaded, platformId) {
        if (isPlatformServer(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    static withConfig(configOptions, breakpoints = []) {
        return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ?
                [
                    { provide: LAYOUT_CONFIG, useValue: Object.assign({}, DEFAULT_CONFIG, configOptions) },
                    { provide: BREAKPOINT, useValue: breakpoints, multi: true },
                    { provide: SERVER_TOKEN, useValue: true },
                ] : [
                { provide: LAYOUT_CONFIG, useValue: Object.assign({}, DEFAULT_CONFIG, configOptions) },
                { provide: BREAKPOINT, useValue: breakpoints, multi: true },
            ]
        };
    }
}
FlexLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [FlexModule, ExtendedModule, GridModule],
                exports: [FlexModule, ExtendedModule, GridModule]
            },] },
];
/** @nocollapse */
FlexLayoutModule.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_TOKEN,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { VERSION, FlexLayoutModule };
//# sourceMappingURL=flex-layout.js.map
