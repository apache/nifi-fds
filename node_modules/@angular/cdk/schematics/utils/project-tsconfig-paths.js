"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceConfigGracefully = exports.getTargetTsconfigPath = void 0;
const core_1 = require("@angular-devkit/core");
const reader_1 = require("@angular-devkit/core/src/workspace/json/reader");
/** Name of the default Angular CLI workspace configuration files. */
const defaultWorkspaceConfigPaths = ['/angular.json', '/.angular.json'];
/** Gets the tsconfig path from the given target within the specified project. */
function getTargetTsconfigPath(project, targetName) {
    var _a, _b, _c;
    const tsconfig = (_c = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(targetName)) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.tsConfig;
    return tsconfig ? core_1.normalize(tsconfig) : null;
}
exports.getTargetTsconfigPath = getTargetTsconfigPath;
/** Resolve the workspace configuration of the specified tree gracefully. */
function getWorkspaceConfigGracefully(tree) {
    return __awaiter(this, void 0, void 0, function* () {
        const path = defaultWorkspaceConfigPaths.find(filePath => tree.exists(filePath));
        const configBuffer = tree.read(path);
        if (!path || !configBuffer) {
            return null;
        }
        try {
            return yield reader_1.readJsonWorkspace(path, {
                readFile: (filePath) => __awaiter(this, void 0, void 0, function* () { return tree.read(filePath).toString(); })
            });
        }
        catch (e) {
            return null;
        }
    });
}
exports.getWorkspaceConfigGracefully = getWorkspaceConfigGracefully;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10c2NvbmZpZy1wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91dGlscy9wcm9qZWN0LXRzY29uZmlnLXBhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztBQUVILCtDQUErQztBQU0vQywyRUFBaUY7QUFJakYscUVBQXFFO0FBQ3JFLE1BQU0sMkJBQTJCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUV4RSxpRkFBaUY7QUFDakYsU0FBZ0IscUJBQXFCLENBQUMsT0FBMEIsRUFDMUIsVUFBa0I7O0lBQ3RELE1BQU0sUUFBUSxxQkFBRyxPQUFPLENBQUMsT0FBTywwQ0FBRSxHQUFHLENBQUMsVUFBVSwyQ0FBRyxPQUFPLDBDQUFFLFFBQVEsQ0FBQztJQUNyRSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQVMsQ0FBQyxRQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN6RCxDQUFDO0FBSkQsc0RBSUM7QUFFRCw0RUFBNEU7QUFDNUUsU0FBc0IsNEJBQTRCLENBQUMsSUFBVTs7UUFDM0QsTUFBTSxJQUFJLEdBQUcsMkJBQTJCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSTtZQUNGLE9BQU8sTUFBTSwwQkFBaUIsQ0FBQyxJQUFJLEVBQUU7Z0JBQ25DLFFBQVEsRUFBRSxDQUFNLFFBQVEsRUFBQyxFQUFFLGdEQUFDLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQSxHQUFBO2FBQzNDLENBQUMsQ0FBQztTQUNyQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FBQTtBQWZELG9FQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7bm9ybWFsaXplfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQge1xuICBQcm9qZWN0RGVmaW5pdGlvbixcbiAgV29ya3NwYWNlRGVmaW5pdGlvbixcbiAgV29ya3NwYWNlSG9zdCxcbn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUvc3JjL3dvcmtzcGFjZSc7XG5pbXBvcnQge3JlYWRKc29uV29ya3NwYWNlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9zcmMvd29ya3NwYWNlL2pzb24vcmVhZGVyJztcbmltcG9ydCB7VHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtXb3Jrc3BhY2VQYXRofSBmcm9tICcuLi91cGRhdGUtdG9vbC9maWxlLXN5c3RlbSc7XG5cbi8qKiBOYW1lIG9mIHRoZSBkZWZhdWx0IEFuZ3VsYXIgQ0xJIHdvcmtzcGFjZSBjb25maWd1cmF0aW9uIGZpbGVzLiAqL1xuY29uc3QgZGVmYXVsdFdvcmtzcGFjZUNvbmZpZ1BhdGhzID0gWycvYW5ndWxhci5qc29uJywgJy8uYW5ndWxhci5qc29uJ107XG5cbi8qKiBHZXRzIHRoZSB0c2NvbmZpZyBwYXRoIGZyb20gdGhlIGdpdmVuIHRhcmdldCB3aXRoaW4gdGhlIHNwZWNpZmllZCBwcm9qZWN0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldFRzY29uZmlnUGF0aChwcm9qZWN0OiBQcm9qZWN0RGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TmFtZTogc3RyaW5nKTogV29ya3NwYWNlUGF0aHxudWxsIHtcbiAgY29uc3QgdHNjb25maWcgPSBwcm9qZWN0LnRhcmdldHM/LmdldCh0YXJnZXROYW1lKT8ub3B0aW9ucz8udHNDb25maWc7XG4gIHJldHVybiB0c2NvbmZpZyA/IG5vcm1hbGl6ZSh0c2NvbmZpZyBhcyBzdHJpbmcpIDogbnVsbDtcbn1cblxuLyoqIFJlc29sdmUgdGhlIHdvcmtzcGFjZSBjb25maWd1cmF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgdHJlZSBncmFjZWZ1bGx5LiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdvcmtzcGFjZUNvbmZpZ0dyYWNlZnVsbHkodHJlZTogVHJlZSk6IFByb21pc2U8V29ya3NwYWNlRGVmaW5pdGlvbnxudWxsPiB7XG4gIGNvbnN0IHBhdGggPSBkZWZhdWx0V29ya3NwYWNlQ29uZmlnUGF0aHMuZmluZChmaWxlUGF0aCA9PiB0cmVlLmV4aXN0cyhmaWxlUGF0aCkpO1xuICBjb25zdCBjb25maWdCdWZmZXIgPSB0cmVlLnJlYWQocGF0aCEpO1xuXG4gIGlmICghcGF0aCB8fCAhY29uZmlnQnVmZmVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCByZWFkSnNvbldvcmtzcGFjZShwYXRoLCB7XG4gICAgICByZWFkRmlsZTogYXN5bmMgZmlsZVBhdGggPT4gdHJlZS5yZWFkKGZpbGVQYXRoKSEudG9TdHJpbmcoKVxuICAgIH0gYXMgV29ya3NwYWNlSG9zdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19