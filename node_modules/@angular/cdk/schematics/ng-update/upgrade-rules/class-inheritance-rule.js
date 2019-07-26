"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const ts = require("typescript");
const migration_rule_1 = require("../../update-tool/migration-rule");
const base_types_1 = require("../typescript/base-types");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Rule that identifies class declarations that extend CDK or Material classes
 * which had a public property change.
 */
class ClassInheritanceRule extends migration_rule_1.MigrationRule {
    constructor() {
        super(...arguments);
        /**
         * Map of classes that have been updated. Each class name maps to the according property
         * change data.
         */
        this.propertyNames = new Map();
        // Only enable the migration rule if there is upgrade data.
        this.ruleEnabled = this.propertyNames.size !== 0;
    }
    init() {
        upgrade_data_1.getVersionUpgradeData(this, 'propertyNames')
            .filter(data => data.whitelist && data.whitelist.classes)
            .forEach(data => data.whitelist.classes.forEach(name => this.propertyNames.set(name, data)));
    }
    visitNode(node) {
        if (ts.isClassDeclaration(node)) {
            this._visitClassDeclaration(node);
        }
    }
    _visitClassDeclaration(node) {
        const baseTypes = base_types_1.determineBaseTypes(node);
        const className = node.name ? node.name.text : '{unknown-name}';
        if (!baseTypes) {
            return;
        }
        baseTypes.forEach(typeName => {
            const data = this.propertyNames.get(typeName);
            if (data) {
                this.createFailureAtNode(node, `Found class "${chalk_1.bold(className)}" which extends class ` +
                    `"${chalk_1.bold(typeName)}". Please note that the base class property ` +
                    `"${chalk_1.red(data.replace)}" has changed to "${chalk_1.green(data.replaceWith)}". ` +
                    `You may need to update your class as well.`);
            }
        });
    }
}
exports.ClassInheritanceRule = ClassInheritanceRule;
//# sourceMappingURL=class-inheritance-rule.js.map