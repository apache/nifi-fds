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
const imports_1 = require("./imports");
/**
 * Gets all decorators which are imported from an Angular package
 * (e.g. "@angular/core") from a list of decorators.
 */
function getAngularDecorators(typeChecker, decorators) {
    return decorators.map(node => ({ node, importData: getCallDecoratorImport(typeChecker, node) }))
        .filter(({ importData }) => importData && importData.importModule.startsWith('@angular/'))
        .map(({ node, importData }) => ({
        node: node,
        name: importData.name,
        importNode: importData.node
    }));
}
exports.getAngularDecorators = getAngularDecorators;
function getCallDecoratorImport(typeChecker, decorator) {
    // Note that this does not cover the edge case where decorators are called from
    // a namespace import: e.g. "@core.Component()". This is not handled by Ngtsc either.
    if (!ts.isCallExpression(decorator.expression) ||
        !ts.isIdentifier(decorator.expression.expression)) {
        return null;
    }
    const identifier = decorator.expression.expression;
    return imports_1.getImportOfIdentifier(typeChecker, identifier);
}
exports.getCallDecoratorImport = getCallDecoratorImport;
//# sourceMappingURL=decorators.js.map