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
 * Unwraps a given expression TypeScript node. Expressions can be wrapped within multiple
 * parentheses. e.g. "(((({exp}))))()". The function should return the TypeScript node
 * referring to the inner expression. e.g "exp".
 */
function unwrapExpression(node) {
    return ts.isParenthesizedExpression(node) ? unwrapExpression(node.expression) : node;
}
exports.unwrapExpression = unwrapExpression;
//# sourceMappingURL=functions.js.map