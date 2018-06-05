/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ModuleWithProviders } from '@angular/core';
import { BreakPoint, BreakPointProviderOptions } from '@angular/flex-layout/core';
/**
 * Since the equivalent results are easily achieved with a css class attached to each
 * layout child, these have been deprecated and removed from the API.
 *
 *  import {LayoutPaddingDirective} from './api/flexbox/layout-padding';
 *  import {LayoutMarginDirective} from './api/flexbox/layout-margin';
 */
/**
 *
 */
export declare class FlexLayoutModule {
    constructor(serverModuleLoaded: boolean, platformId: Object);
    /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * @deletion-target v6.0.0-beta.15
     */
    static provideBreakPoints(breakpoints: BreakPoint[], options?: BreakPointProviderOptions): ModuleWithProviders;
}
