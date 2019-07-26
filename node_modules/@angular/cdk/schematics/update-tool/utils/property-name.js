"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
/**
 * Gets the text of the given property name. Returns null if the property
 * name couldn't be determined statically.
 */
function getPropertyNameText(node) {
    if (ts.isIdentifier(node) || ts.isStringLiteralLike(node)) {
        return node.text;
    }
    return null;
}
exports.getPropertyNameText = getPropertyNameText;
/** Checks whether the given property name has a text. */
function hasPropertyNameText(node) {
    return ts.isStringLiteral(node) || ts.isNumericLiteral(node) || ts.isIdentifier(node);
}
exports.hasPropertyNameText = hasPropertyNameText;
//# sourceMappingURL=property-name.js.map