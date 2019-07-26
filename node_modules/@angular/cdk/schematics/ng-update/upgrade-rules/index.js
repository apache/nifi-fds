"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const update_tool_1 = require("../../update-tool");
const project_tsconfig_paths_1 = require("../../utils/project-tsconfig-paths");
const attribute_selectors_rule_1 = require("./attribute-selectors-rule");
const class_inheritance_rule_1 = require("./class-inheritance-rule");
const class_names_rule_1 = require("./class-names-rule");
const constructor_signature_rule_1 = require("./constructor-signature-rule");
const css_selectors_rule_1 = require("./css-selectors-rule");
const element_selectors_rule_1 = require("./element-selectors-rule");
const input_names_rule_1 = require("./input-names-rule");
const method_call_arguments_rule_1 = require("./method-call-arguments-rule");
const misc_template_rule_1 = require("./misc-template-rule");
const output_names_rule_1 = require("./output-names-rule");
const property_names_rule_1 = require("./property-names-rule");
/** List of migration rules which run for the CDK update. */
exports.cdkMigrationRules = [
    attribute_selectors_rule_1.AttributeSelectorsRule,
    class_inheritance_rule_1.ClassInheritanceRule,
    class_names_rule_1.ClassNamesRule,
    constructor_signature_rule_1.ConstructorSignatureRule,
    css_selectors_rule_1.CssSelectorsRule,
    element_selectors_rule_1.ElementSelectorsRule,
    input_names_rule_1.InputNamesRule,
    method_call_arguments_rule_1.MethodCallArgumentsRule,
    misc_template_rule_1.MiscTemplateRule,
    output_names_rule_1.OutputNamesRule,
    property_names_rule_1.PropertyNamesRule,
];
/**
 * Creates a Angular schematic rule that runs the upgrade for the
 * specified target version.
 */
function createUpgradeRule(targetVersion, extraRules, upgradeData, onMigrationCompleteFn) {
    return (tree, context) => {
        const logger = context.logger;
        const { buildPaths, testPaths } = project_tsconfig_paths_1.getProjectTsConfigPaths(tree);
        if (!buildPaths.length && !testPaths.length) {
            // We don't want to throw here because it would mean that other migrations in the
            // pipeline don't run either. Rather print an error message.
            logger.error('Could not find any TypeScript project in the CLI workspace configuration.');
            return;
        }
        // Keep track of all project source files which have been checked/migrated. This is
        // necessary because multiple TypeScript projects can contain the same source file and
        // we don't want to check these again, as this would result in duplicated failure messages.
        const analyzedFiles = new Set();
        let hasRuleFailures = false;
        for (const tsconfigPath of [...buildPaths, ...testPaths]) {
            hasRuleFailures = hasRuleFailures || update_tool_1.runMigrationRules(tree, context.logger, tsconfigPath, targetVersion, [...exports.cdkMigrationRules, ...extraRules], upgradeData, analyzedFiles);
        }
        if (onMigrationCompleteFn) {
            onMigrationCompleteFn(targetVersion, hasRuleFailures);
        }
    };
}
exports.createUpgradeRule = createUpgradeRule;
//# sourceMappingURL=index.js.map