"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _os = _interopRequireDefault(require("os"));

var _cacache = _interopRequireDefault(require("cacache"));

var _findCacheDir = _interopRequireDefault(require("find-cache-dir"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Webpack4Cache {
  constructor(compilation, options, weakCache) {
    this.cache = options.cache === true ? Webpack4Cache.getCacheDirectory() : options.cache;
    this.weakCache = weakCache;
  }

  static getCacheDirectory() {
    return (0, _findCacheDir.default)({
      name: "compression-webpack-plugin"
    }) || _os.default.tmpdir();
  }

  async get(cacheData, {
    RawSource
  }) {
    if (!this.cache) {
      // eslint-disable-next-line no-undefined
      return undefined;
    }

    const weakOutput = this.weakCache.get(cacheData.inputSource);

    if (weakOutput) {
      return weakOutput;
    } // eslint-disable-next-line no-param-reassign


    cacheData.cacheIdent = cacheData.cacheIdent || (0, _serializeJavascript.default)(cacheData.cacheKeys);
    let cachedResult;

    try {
      cachedResult = await _cacache.default.get(this.cache, cacheData.cacheIdent);
    } catch (ignoreError) {
      // eslint-disable-next-line no-undefined
      return undefined;
    }

    return new RawSource(Buffer.from(JSON.parse(cachedResult.data).data));
  }

  async store(cacheData) {
    if (!this.cache) {
      // eslint-disable-next-line no-undefined
      return undefined;
    }

    if (!this.weakCache.has(cacheData.inputSource)) {
      this.weakCache.set(cacheData.inputSource, cacheData.output);
    }

    const {
      cacheIdent,
      output
    } = cacheData;
    return _cacache.default.put(this.cache, cacheIdent, JSON.stringify(output.source()));
  }

}

exports.default = Webpack4Cache;