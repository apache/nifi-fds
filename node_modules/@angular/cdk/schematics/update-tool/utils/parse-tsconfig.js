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
function parseTsconfigFile(tsconfigPath, basePath) {
    const { config } = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
    const parseConfigHost = {
        useCaseSensitiveFileNames: ts.sys.useCaseSensitiveFileNames,
        fileExists: ts.sys.fileExists,
        readDirectory: ts.sys.readDirectory,
        readFile: ts.sys.readFile,
    };
    return ts.parseJsonConfigFileContent(config, parseConfigHost, basePath, {});
}
exports.parseTsconfigFile = parseTsconfigFile;
//# sourceMappingURL=parse-tsconfig.js.map