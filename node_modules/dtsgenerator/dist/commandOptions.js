"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commander_1 = tslib_1.__importDefault(require("commander"));
var pkg = require('../package.json');
var CommandOptions = (function () {
    function CommandOptions() {
        this.files = [];
        this.urls = [];
    }
    CommandOptions.prototype.isReadFromStdin = function () {
        return this.stdin || this.files.length === 0 && this.urls.length === 0;
    };
    return CommandOptions;
}());
exports.CommandOptions = CommandOptions;
var opts = new CommandOptions();
clear();
exports.default = opts;
function initialize(argv) {
    return parse(opts, argv);
}
exports.initialize = initialize;
function clear() {
    opts.files = [];
    opts.urls = [];
    opts.stdin = undefined;
    opts.out = undefined;
    opts.namespace = undefined;
}
exports.clear = clear;
function parse(o, argv) {
    var command = new commander_1.default.Command();
    function collectUrl(val, memo) {
        memo.push(val);
        return memo;
    }
    command
        .version(pkg.version)
        .usage('[options] <file ... | file patterns using node-glob>')
        .option('--url <url>', 'input json schema from the url.', collectUrl, [])
        .option('--stdin', 'read stdin with other files or urls.')
        .option('-o, --out <file>', 'output d.ts filename.')
        .option('-n, --namespace <namespace>', 'use root namespace instead of definitions or components.schema from OpenAPI, or -n "" to suppress namespaces.')
        .on('--help', function () {
        console.log('');
        console.log('  Examples:');
        console.log('');
        console.log('    $ dtsgen --help');
        console.log('    $ dtsgen --out types.d.ts schema/**/*.schema.json');
        console.log('    $ cat schema1.json | dtsgen');
        console.log('    $ dtsgen -o swaggerSchema.d.ts --url https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/schemas/v2.0/schema.json');
        console.log('    $ dtsgen -o petstore.d.ts -n PetStore --url https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/petstore.yaml');
    })
        .parse(argv);
    var res = command;
    o.files = command.args;
    o.urls = res.url;
    o.stdin = res.stdin;
    o.out = res.out;
    o.namespace = res.namespace;
    return command;
}
//# sourceMappingURL=commandOptions.js.map