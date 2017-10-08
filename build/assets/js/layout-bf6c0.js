webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(25);

var header = {
    init: function init() {
        // console.log('header init');
        var _logo = __webpack_require__(26);
        var _greentree = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./img/greentree.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        document.getElementById('logo').src = _logo;
        document.getElementById('js-greentree').src = _greentree;
    }
};
exports.default = header;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve './images/sysfont.otf' in '/Users/zihuichen/temp/czh-ssr/src/web/widget/header'\n    at factoryCallback (/Users/zihuichen/temp/czh-ssr/node_modules/webpack/lib/Compilation.js:269:40)\n    at factory (/Users/zihuichen/temp/czh-ssr/node_modules/webpack/lib/NormalModuleFactory.js:235:20)\n    at resolver (/Users/zihuichen/temp/czh-ssr/node_modules/webpack/lib/NormalModuleFactory.js:60:20)\n    at asyncLib.parallel (/Users/zihuichen/temp/czh-ssr/node_modules/webpack/lib/NormalModuleFactory.js:127:20)\n    at /Users/zihuichen/temp/czh-ssr/node_modules/async/dist/async.js:3861:9\n    at /Users/zihuichen/temp/czh-ssr/node_modules/async/dist/async.js:421:16\n    at iteratorCallback (/Users/zihuichen/temp/czh-ssr/node_modules/async/dist/async.js:996:13)\n    at /Users/zihuichen/temp/czh-ssr/node_modules/async/dist/async.js:906:16\n    at /Users/zihuichen/temp/czh-ssr/node_modules/async/dist/async.js:3858:13\n    at resolvers.normal.resolve (/Users/zihuichen/temp/czh-ssr/node_modules/webpack/lib/NormalModuleFactory.js:119:22)\n    at onError (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:65:10)\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/zihuichen/temp/czh-ssr/node_modules/tapable/lib/Tapable.js:252:11)\n    at /Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:40:4\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at runAfter (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:158:4)\n    at innerCallback (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:146:3)\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/zihuichen/temp/czh-ssr/node_modules/tapable/lib/Tapable.js:252:11)\n    at innerCallback (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:144:11)\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/zihuichen/temp/czh-ssr/node_modules/tapable/lib/Tapable.js:249:35)\n    at resolver.doResolve.createInnerCallback (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/Resolver.js:168:10)\n    at loggingCallbackWrapper (/Users/zihuichen/temp/czh-ssr/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/zihuichen/temp/czh-ssr/node_modules/tapable/lib/Tapable.js:252:11)");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(28);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(10);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(27);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = new _header2.default();

/***/ })

},[9]);