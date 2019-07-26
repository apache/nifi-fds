/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
export declare type Import = {
    name: string;
    importModule: string;
    node: ts.ImportDeclaration;
};
/** Gets import information about the specified identifier by using the type checker. */
export declare function getImportOfIdentifier(typeChecker: ts.TypeChecker, node: ts.Identifier): Import | null;
