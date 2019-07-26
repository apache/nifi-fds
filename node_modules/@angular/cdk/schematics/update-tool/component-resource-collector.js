"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const ts = require("typescript");
const decorators_1 = require("./utils/decorators");
const functions_1 = require("./utils/functions");
const line_mappings_1 = require("./utils/line-mappings");
const property_name_1 = require("./utils/property-name");
/**
 * Collector that can be used to find Angular templates and stylesheets referenced within
 * given TypeScript source files (inline or external referenced files)
 */
class ComponentResourceCollector {
    constructor(typeChecker) {
        this.typeChecker = typeChecker;
        this.resolvedTemplates = [];
        this.resolvedStylesheets = [];
    }
    visitNode(node) {
        if (node.kind === ts.SyntaxKind.ClassDeclaration) {
            this._visitClassDeclaration(node);
        }
    }
    _visitClassDeclaration(node) {
        if (!node.decorators || !node.decorators.length) {
            return;
        }
        const ngDecorators = decorators_1.getAngularDecorators(this.typeChecker, node.decorators);
        const componentDecorator = ngDecorators.find(dec => dec.name === 'Component');
        // In case no "@Component" decorator could be found on the current class, skip.
        if (!componentDecorator) {
            return;
        }
        const decoratorCall = componentDecorator.node.expression;
        // In case the component decorator call is not valid, skip this class declaration.
        if (decoratorCall.arguments.length !== 1) {
            return;
        }
        const componentMetadata = functions_1.unwrapExpression(decoratorCall.arguments[0]);
        // Ensure that the component metadata is an object literal expression.
        if (!ts.isObjectLiteralExpression(componentMetadata)) {
            return;
        }
        const sourceFile = node.getSourceFile();
        const sourceFileName = sourceFile.fileName;
        // Walk through all component metadata properties and determine the referenced
        // HTML templates (either external or inline)
        componentMetadata.properties.forEach(property => {
            if (!ts.isPropertyAssignment(property)) {
                return;
            }
            const propertyName = property_name_1.getPropertyNameText(property.name);
            const filePath = path_1.resolve(sourceFileName);
            if (propertyName === 'styles' && ts.isArrayLiteralExpression(property.initializer)) {
                property.initializer.elements.forEach(el => {
                    if (ts.isStringLiteralLike(el)) {
                        // Need to add an offset of one to the start because the template quotes are
                        // not part of the template content.
                        const templateStartIdx = el.getStart() + 1;
                        this.resolvedStylesheets.push({
                            filePath: filePath,
                            container: node,
                            content: el.text,
                            inline: true,
                            start: templateStartIdx,
                            getCharacterAndLineOfPosition: pos => ts.getLineAndCharacterOfPosition(sourceFile, pos + templateStartIdx),
                        });
                    }
                });
            }
            // In case there is an inline template specified, ensure that the value is statically
            // analyzable by checking if the initializer is a string literal-like node.
            if (propertyName === 'template' && ts.isStringLiteralLike(property.initializer)) {
                // Need to add an offset of one to the start because the template quotes are
                // not part of the template content.
                const templateStartIdx = property.initializer.getStart() + 1;
                this.resolvedTemplates.push({
                    filePath: filePath,
                    container: node,
                    content: property.initializer.text,
                    inline: true,
                    start: templateStartIdx,
                    getCharacterAndLineOfPosition: pos => ts.getLineAndCharacterOfPosition(sourceFile, pos + templateStartIdx)
                });
            }
            if (propertyName === 'styleUrls' && ts.isArrayLiteralExpression(property.initializer)) {
                property.initializer.elements.forEach(el => {
                    if (ts.isStringLiteralLike(el)) {
                        const stylesheetPath = path_1.resolve(path_1.dirname(sourceFileName), el.text);
                        // In case the stylesheet does not exist in the file system, skip it gracefully.
                        if (!fs_1.existsSync(stylesheetPath)) {
                            return;
                        }
                        this.resolvedStylesheets.push(this.resolveExternalStylesheet(stylesheetPath, node));
                    }
                });
            }
            if (propertyName === 'templateUrl' && ts.isStringLiteralLike(property.initializer)) {
                const templatePath = path_1.resolve(path_1.dirname(sourceFileName), property.initializer.text);
                // In case the template does not exist in the file system, skip this
                // external template.
                if (!fs_1.existsSync(templatePath)) {
                    return;
                }
                const fileContent = fs_1.readFileSync(templatePath, 'utf8');
                const lineStartsMap = line_mappings_1.computeLineStartsMap(fileContent);
                this.resolvedTemplates.push({
                    filePath: templatePath,
                    container: node,
                    content: fileContent,
                    inline: false,
                    start: 0,
                    getCharacterAndLineOfPosition: pos => line_mappings_1.getLineAndCharacterFromPosition(lineStartsMap, pos),
                });
            }
        });
    }
    /** Resolves an external stylesheet by reading its content and computing line mappings. */
    resolveExternalStylesheet(filePath, container) {
        const fileContent = fs_1.readFileSync(filePath, 'utf8');
        const lineStartsMap = line_mappings_1.computeLineStartsMap(fileContent);
        return {
            filePath: filePath,
            container: container,
            content: fileContent,
            inline: false,
            start: 0,
            getCharacterAndLineOfPosition: pos => line_mappings_1.getLineAndCharacterFromPosition(lineStartsMap, pos),
        };
    }
}
exports.ComponentResourceCollector = ComponentResourceCollector;
//# sourceMappingURL=component-resource-collector.js.map