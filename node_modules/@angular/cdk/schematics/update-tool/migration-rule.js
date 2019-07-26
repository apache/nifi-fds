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
class MigrationRule {
    constructor(program, typeChecker, targetVersion, upgradeData) {
        this.program = program;
        this.typeChecker = typeChecker;
        this.targetVersion = targetVersion;
        this.upgradeData = upgradeData;
        /** List of migration failures that need to be reported. */
        this.failures = [];
        /** Whether the migration rule is enabled or not. */
        this.ruleEnabled = true;
    }
    /** Method can be used to perform global analysis of the program. */
    init() { }
    /**
     * Method that will be called for each node in a given source file. Unlike tslint, this
     * function will only retrieve TypeScript nodes that need to be casted manually. This
     * allows us to only walk the program source files once per program and not per
     * migration rule (significant performance boost).
     */
    visitNode(node) { }
    /** Method that will be called for each Angular template in the program. */
    visitTemplate(template) { }
    /** Method that will be called for each stylesheet in the program. */
    visitStylesheet(stylesheet) { }
    /** Gets the update recorder for a given source file or resolved template. */
    getUpdateRecorder(filePath) {
        throw new Error('MigrationRule#getUpdateRecorder is not implemented.');
    }
    /** Creates a failure with a specified message at the given node location. */
    createFailureAtNode(node, message) {
        const sourceFile = node.getSourceFile();
        this.failures.push({
            filePath: sourceFile.fileName,
            position: ts.getLineAndCharacterOfPosition(sourceFile, node.getStart()),
            message: message,
        });
    }
}
exports.MigrationRule = MigrationRule;
//# sourceMappingURL=migration-rule.js.map