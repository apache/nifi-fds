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
const migration_rule_1 = require("../../update-tool/migration-rule");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Rule that walks through every property access expression and updates
 * accessed properties that have been updated to a new name.
 */
class PropertyNamesRule extends migration_rule_1.MigrationRule {
    constructor() {
        super(...arguments);
        /** Change data that upgrades to the specified target version. */
        this.data = upgrade_data_1.getVersionUpgradeData(this, 'propertyNames');
        // Only enable the migration rule if there is upgrade data.
        this.ruleEnabled = this.data.length !== 0;
    }
    visitNode(node) {
        if (ts.isPropertyAccessExpression(node)) {
            this._visitPropertyAccessExpression(node);
        }
    }
    _visitPropertyAccessExpression(node) {
        const hostType = this.typeChecker.getTypeAtLocation(node.expression);
        const typeName = hostType && hostType.symbol && hostType.symbol.getName();
        this.data.forEach(data => {
            if (node.name.text !== data.replace) {
                return;
            }
            if (!data.whitelist || data.whitelist.classes.includes(typeName)) {
                const recorder = this.getUpdateRecorder(node.getSourceFile().fileName);
                recorder.remove(node.name.getStart(), node.name.getWidth());
                recorder.insertRight(node.name.getStart(), data.replaceWith);
            }
        });
    }
}
exports.PropertyNamesRule = PropertyNamesRule;
//# sourceMappingURL=property-names-rule.js.map