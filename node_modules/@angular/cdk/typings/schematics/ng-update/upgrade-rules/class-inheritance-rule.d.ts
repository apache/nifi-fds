/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { MigrationRule } from '../../update-tool/migration-rule';
import { PropertyNameUpgradeData } from '../data/property-names';
import { RuleUpgradeData } from '../upgrade-data';
/**
 * Rule that identifies class declarations that extend CDK or Material classes
 * which had a public property change.
 */
export declare class ClassInheritanceRule extends MigrationRule<RuleUpgradeData> {
    /**
     * Map of classes that have been updated. Each class name maps to the according property
     * change data.
     */
    propertyNames: Map<string, PropertyNameUpgradeData>;
    ruleEnabled: boolean;
    init(): void;
    visitNode(node: ts.Node): void;
    private _visitClassDeclaration;
}
