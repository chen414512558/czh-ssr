webpackJsonp([1],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _course = __webpack_require__(32);

var _course2 = _interopRequireDefault(_course);

var _tools = __webpack_require__(34);

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tools2.default.init();
_course2.default.init();

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(33);

var _store = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../store\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = Vuex.mapState;

var course = {
    init: function init() {
        var vm = new Vue({
            store: _store2.default,
            el: '#app',
            computed: mapState({
                datas: function datas(state) {
                    return state.database.data;
                },
                examine: function examine(state) {
                    return state.database.examine;
                }
            }),
            data: {
                course: true,
                results: true,
                isShow: false,
                msg: '课程大纲'
            },
            methods: {
                initpage: function initpage() {
                    var me = this;
                    this.$store.dispatch('addInfo', {
                        me: me
                    });
                }
            },
            mounted: function mounted() {
                console.log(this.datas);
                if (this.datas) {
                    this.course = false;
                }
                if (this.examine) {
                    this.results = false;
                }
                this.initpage();
            }
        });
    }
};
exports.default = course;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(35);

var tools = {
    init: function init() {
        // console.log('tools init');
    }
};
exports.default = tools;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[31]);