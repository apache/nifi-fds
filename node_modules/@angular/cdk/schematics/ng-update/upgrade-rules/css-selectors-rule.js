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
const literal_1 = require("../typescript/literal");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Rule that walks through every string literal, template and stylesheet in
 * order to migrate outdated CSS selectors to the new selector.
 */
class CssSelectorsRule extends migration_rule_1.MigrationRule {
    constructor() {
        super(...arguments);
        /** Change data that upgrades to the specified target version. */
        this.data = upgrade_data_1.getVersionUpgradeData(this, 'cssSelectors');
        // Only enable the migration rule if there is upgrade data.
        this.ruleEnabled = this.data.length !== 0;
    }
    visitNode(node) {
        if (ts.isStringLiteralLike(node)) {
            this._visitStringLiteralLike(node);
        }
    }
    visitTemplate(template) {
        this.data.forEach(data => {
            if (data.whitelist && !data.whitelist.html) {
                return;
            }
            literal_1.findAllSubstringIndices(template.content, data.replace)
                .map(offset => template.start + offset)
                .forEach(start => this._replaceSelector(template.filePath, start, data));
        });
    }
    visitStylesheet(stylesheet) {
        this.data.forEach(data => {
            if (data.whitelist && !data.whitelist.stylesheet) {
                return;
            }
            literal_1.findAllSubstringIndices(stylesheet.content, data.replace)
                .map(offset => stylesheet.start + offset)
                .forEach(start => this._replaceSelector(stylesheet.filePath, start, data));
        });
    }
    _visitStringLiteralLike(node) {
        if (node.parent && node.parent.kind !== ts.SyntaxKind.CallExpression) {
            return;
        }
        const textContent = node.getText();
        const filePath = node.getSourceFile().fileName;
        this.data.forEach(data => {
            if (data.whitelist && !data.whitelist.strings) {
                return;
            }
            literal_1.findAllSubstringIndices(textContent, data.replace)
                .map(offset => node.getStart() + offset)
                .forEach(start => this._replaceSelector(filePath, start, data));
        });
    }
    _replaceSelector(filePath, start, data) {
        const updateRecorder = this.getUpdateRecorder(filePath);
        updateRecorder.remove(start, data.replace.length);
        updateRecorder.insertRight(start, data.replaceWith);
    }
}
exports.CssSelectorsRule = CssSelectorsRule;
//# sourceMappingURL=css-selectors-rule.js.map