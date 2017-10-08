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
        var _logo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./images/logo.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        var _greentree = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./images/greentree.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        document.getElementById('logo').src = _logo;
        document.getElementById('js-greentree').src = _greentree;
    }
};
exports.default = header;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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