"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _path = _interopRequireDefault(require("path"));

var _webpack = _interopRequireWildcard(require("webpack"));

var _schemaUtils = require("schema-utils");

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _options = _interopRequireDefault(require("./options.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
const {
  RawSource
} = // eslint-disable-next-line global-require
_webpack.default.sources || require("webpack-sources");

class CompressionPlugin {
  constructor(options = {}) {
    (0, _schemaUtils.validate)(_options.default, options, {
      name: "Compression Plugin",
      baseDataPath: "options"
    });
    const {
      test,
      include,
      exclude,
      cache = true,
      algorithm = "gzip",
      compressionOptions = {},
      filename = "[path][base].gz",
      threshold = 0,
      minRatio = 0.8,
      deleteOriginalAssets = false
    } = options;
    this.options = {
      test,
      include,
      exclude,
      cache,
      algorithm,
      compressionOptions,
      filename,
      threshold,
      minRatio,
      deleteOriginalAssets
    };
    this.algorithm = this.options.algorithm;

    if (typeof this.algorithm === "string") {
      // eslint-disable-next-line global-require
      const zlib = require("zlib");

      this.algorithm = zlib[this.algorithm];

      if (!this.algorithm) {
        throw new Error(`Algorithm "${this.options.algorithm}" is not found in "zlib"`);
      }

      const defaultCompressionOptions = {
        gzip: {
          level: zlib.constants.Z_BEST_COMPRESSION
        },
        deflate: {
          level: zlib.constants.Z_BEST_COMPRESSION
        },
        deflateRaw: {
          level: zlib.constants.Z_BEST_COMPRESSION
        },
        brotliCompress: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY
          }
        }
      }[algorithm] || {};
      this.options.compressionOptions = { ...defaultCompressionOptions,
        ...this.options.compressionOptions
      };
    }
  } // eslint-disable-next-line consistent-return


  static getAsset(compilation, name) {
    // New API
    if (compilation.getAsset) {
      return compilation.getAsset(name);
    }

    if (compilation.assets[name]) {
      return {
        name,
        source: compilation.assets[name],
        info: {}
      };
    }
  }

  static emitAsset(compilation, name, source, assetInfo) {
    // New API
    if (compilation.emitAsset) {
      compilation.emitAsset(name, source, assetInfo);
    } // eslint-disable-next-line no-param-reassign


    compilation.assets[name] = source;
  }

  static updateAsset(compilation, name, newSource, assetInfo) {
    // New API
    if (compilation.updateAsset) {
      compilation.updateAsset(name, newSource, assetInfo);
    } // eslint-disable-next-line no-param-reassign


    compilation.assets[name] = newSource;
  }

  static deleteAsset(compilation, name) {
    // New API
    if (compilation.deleteAsset) {
      compilation.deleteAsset(name);
    } // eslint-disable-next-line no-param-reassign


    delete compilation.assets[name];
  }

  runCompressionAlgorithm(input) {
    return new Promise((resolve, reject) => {
      this.algorithm(input, this.options.compressionOptions, (error, result) => {
        if (error) {
          return reject(error);
        }

        if (!Buffer.isBuffer(result)) {
          // eslint-disable-next-line no-param-reassign
          result = Buffer.from(result);
        }

        return resolve(result);
      });
    });
  }

  async compress(compilation, assets, CacheEngine, weakCache) {
    const assetNames = Object.keys(typeof assets === "undefined" ? compilation.assets : assets).filter(assetName => // eslint-disable-next-line no-undefined
    _webpack.ModuleFilenameHelpers.matchObject.bind(undefined, this.options)(assetName));

    if (assetNames.length === 0) {
      return Promise.resolve();
    }

    const scheduledTasks = [];
    const cache = new CacheEngine(compilation, {
      cache: this.options.cache
    }, weakCache);

    for (const name of assetNames) {
      scheduledTasks.push((async () => {
        const {
          source: inputSource,
          info
        } = CompressionPlugin.getAsset(compilation, name);

        if (info.compressed) {
          return;
        }

        let relatedName;

        if (typeof this.options.algorithm === "function") {
          let filenameForRelatedName = this.options.filename;
          const index = filenameForRelatedName.lastIndexOf("?");

          if (index >= 0) {
            filenameForRelatedName = filenameForRelatedName.substr(0, index);
          }

          relatedName = `${_path.default.extname(filenameForRelatedName).slice(1)}ed`;
        } else if (this.options.algorithm === "gzip") {
          relatedName = "gzipped";
        } else {
          relatedName = `${this.options.algorithm}ed`;
        }

        if (info.related && info.related[relatedName]) {
          return;
        }

        let input = inputSource.source();

        if (!Buffer.isBuffer(input)) {
          input = Buffer.from(input);
        }

        if (input.length < this.options.threshold) {
          return;
        }

        const cacheData = {
          inputSource
        };

        if (CompressionPlugin.isWebpack4()) {
          cacheData.cacheKeys = {
            nodeVersion: process.version,
            // eslint-disable-next-line global-require
            "compression-webpack-plugin": require("../package.json").version,
            algorithm: this.algorithm,
            originalAlgorithm: this.options.algorithm,
            compressionOptions: this.options.compressionOptions,
            name,
            contentHash: _crypto.default.createHash("md4").update(input).digest("hex")
          };
        } else {
          cacheData.name = (0, _serializeJavascript.default)({
            name,
            algorithm: this.options.algorithm,
            compressionOptions: this.options.compressionOptions
          });
        }

        let output = await cache.get(cacheData, {
          RawSource
        });

        if (!output) {
          try {
            output = new RawSource(await this.runCompressionAlgorithm(input));
          } catch (error) {
            compilation.errors.push(error);
            return;
          }

          cacheData.output = output;
          await cache.store(cacheData);
        }

        if (output.source().length / input.length > this.options.minRatio) {
          return;
        }

        const match = /^([^?#]*)(\?[^#]*)?(#.*)?$/.exec(name);
        const [, replacerFile] = match;
        const replacerQuery = match[2] || "";
        const replacerFragment = match[3] || "";

        const replacerExt = _path.default.extname(replacerFile);

        const replacerBase = _path.default.basename(replacerFile);

        const replacerName = replacerBase.slice(0, replacerBase.length - replacerExt.length);
        const replacerPath = replacerFile.slice(0, replacerFile.length - replacerBase.length);
        const pathData = {
          file: replacerFile,
          query: replacerQuery,
          fragment: replacerFragment,
          path: replacerPath,
          base: replacerBase,
          name: replacerName,
          ext: replacerExt || ""
        };
        let newFilename = this.options.filename;

        if (typeof newFilename === "function") {
          newFilename = newFilename(pathData);
        }

        const newName = newFilename.replace(/\[(file|query|fragment|path|base|name|ext)]/g, (p0, p1) => pathData[p1]);
        const newInfo = {
          compressed: true
        };

        if (info.immutable && /(\[name]|\[base]|\[file])/.test(newFilename)) {
          newInfo.immutable = true;
        }

        if (this.options.deleteOriginalAssets) {
          if (this.options.deleteOriginalAssets === "keep-source-map") {
            // TODO `...` required only for webpack@4
            const updatedAssetInfo = { ...info,
              related: { ...info.related,
                sourceMap: null
              }
            };
            CompressionPlugin.updateAsset(compilation, name, inputSource, updatedAssetInfo);
          }

          CompressionPlugin.deleteAsset(compilation, name);
        } else {
          // TODO `...` required only for webpack@4
          const newOriginalInfo = { ...info,
            related: {
              [relatedName]: newName,
              ...info.related
            }
          };
          CompressionPlugin.updateAsset(compilation, name, inputSource, newOriginalInfo);
        }

        CompressionPlugin.emitAsset(compilation, newName, output, newInfo);
      })());
    }

    return Promise.all(scheduledTasks);
  }

  static isWebpack4() {
    return _webpack.version[0] === "4";
  }

  apply(compiler) {
    const pluginName = this.constructor.name;

    if (CompressionPlugin.isWebpack4()) {
      // eslint-disable-next-line global-require
      const CacheEngine = require("./Webpack4Cache").default;

      const weakCache = new WeakMap();
      compiler.hooks.emit.tapPromise({
        name: pluginName
      }, compilation => // eslint-disable-next-line no-undefined
      this.compress(compilation, undefined, CacheEngine, weakCache));
    } else {
      // eslint-disable-next-line global-require
      const CacheEngine = require("./Webpack5Cache").default;

      compiler.hooks.thisCompilation.tap(pluginName, compilation => {
        // eslint-disable-next-line global-require
        const Compilation = require("webpack/lib/Compilation");

        compilation.hooks.processAssets.tapPromise({
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER
        }, assets => this.compress(compilation, assets, CacheEngine));
        compilation.hooks.statsPrinter.tap(pluginName, stats => {
          stats.hooks.print.for("asset.info.compressed").tap("compression-webpack-plugin", (compressed, {
            green,
            formatFlag
          }) => // eslint-disable-next-line no-undefined
          compressed ? green(formatFlag("compressed")) : undefined);
        });
      });
    }
  }

}

var _default = CompressionPlugin;
exports.default = _default;