!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@angular/core")):"function"==typeof define&&define.amd?define("@angular/cdk/coercion",["exports","@angular/core"],r):r(((e=e||self).ng=e.ng||{},e.ng.cdk=e.ng.cdk||{},e.ng.cdk.coercion={}),e.ng.core)}(this,(function(e,r){"use strict";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function n(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
e._isNumberValue=n,e.coerceArray=function t(e){return Array.isArray(e)?e:[e]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,e.coerceBooleanProperty=function o(e){return null!=e&&""+e!="false"}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,e.coerceCssPixelValue=function i(e){return null==e?"":"string"==typeof e?e:e+"px"}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,e.coerceElement=function u(e){return e instanceof r.ElementRef?e.nativeElement:e}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */,e.coerceNumberProperty=function c(e,r){return void 0===r&&(r=0),n(e)?Number(e):r},e.coerceStringArray=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function a(e,r){var n,t;void 0===r&&(r=/\s+/);var o=[];if(null!=e){var i=Array.isArray(e)?e:(""+e).split(r);try{for(var u=function c(e){var r="function"==typeof Symbol&&Symbol.iterator,n=r&&e[r],t=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}(i),a=u.next();!a.done;a=u.next()){var l=(""+a.value).trim();l&&o.push(l)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(n)throw n.error}}}return o},Object.defineProperty(e,"__esModule",{value:!0})}));