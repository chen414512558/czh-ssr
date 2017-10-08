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

var _store = __webpack_require__(80);

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

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(81);

var actions = _interopRequireWildcard(_actions);

var _database = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./modules/database\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = new Vuex.Store({
    actions: actions,
    modules: {
        database: _database2.default
    }
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBookDescList = exports.getTaskList = exports.getBookTotalPage = exports.studentdata = exports.getVideo = exports.addInfo = undefined;

var _mutationTypes = __webpack_require__(82);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addInfo = exports.addInfo = function addInfo(_ref, _ref2) {
    var commit = _ref.commit;
    var me = _ref2.me;

    me.$http.get('index/getdata').then(function (response) {
        var datas = response.body.data;
        commit(types.ADD_INFO, {
            datas: datas
        });
    }, function (response) {
        console.error(response);
    });
};

var getVideo = exports.getVideo = function getVideo(_ref3, _ref4) {
    var commit = _ref3.commit;
    var me = _ref4.me,
        targetUrl = _ref4.targetUrl;

    var apiUrl = '/videoplayer/' + targetUrl;
    me.$http.get(apiUrl).then(function (response) {
        var datas = response.body;
        commit(types.GET_VIDEO, {
            datas: datas
        });
    }, function (response) {
        console.error(response);
    });
};
//学生简历
//studentData
var studentdata = exports.studentdata = function studentdata(_ref5, _ref6) {
    var commit = _ref5.commit;
    var me = _ref6.me;

    me.$http.get('/student/getData').then(function (response) {

        var studentData = {
            city: response.body.city,
            result: response.body.result,
            scalay: response.body.scalay,
            score: response.body.score
        };

        commit(types.STUDENTDATA, {
            studentData: studentData
        });
    }, function (response) {
        console.error(response);
    });
};

var getBookTotalPage = exports.getBookTotalPage = function getBookTotalPage(_ref7, _ref8) {
    var commit = _ref7.commit;
    var me = _ref8.me,
        bookdata = _ref8.bookdata;

    console.log(bookdata);
    me.$http.get("" + bookdata + "").then(function (response) {
        var datas = response.body.data;
        commit(types.GET_BOOK_TOTAL_PAGE, {
            datas: datas
        });

        me.booklength = datas - 2;
        me.bookSidePage = me.booklength - 1; //倒数第二页
        me.init(me);
    }, function (response) {
        console.error(response);
    });
};

var getTaskList = exports.getTaskList = function getTaskList(_ref9, _ref10) {
    var commit = _ref9.commit;
    var me = _ref10.me,
        id = _ref10.id;

    // console.warn('系统id',id);
    me.$http.get('/taskMore/getData/' + id).then(function (response) {
        var datas = response.body.taskdata;
        commit(types.GET_TASK_INFO, {
            datas: datas
        });
    }, function (response) {
        console.error(response);
    });
};

var getBookDescList = exports.getBookDescList = function getBookDescList(_ref11, _ref12) {
    var commit = _ref11.commit;
    var me = _ref12.me;

    me.$http.get("/bookDesK/getData").then(function (response) {
        var datas = response.body;
        // console.log(datas);
        // console.log("*********************************");
        commit(types.GET_BOOKDESC_INFO, {
            datas: datas
        });
    }, function (response) {
        console.error(response);
        console.error("书籍列表模块");
    });
};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_INFO = exports.ADD_INFO = 'ADD_INFO';
var GET_BOOKDESC_INFO = exports.GET_BOOKDESC_INFO = "GET_BOOKDESC_INFO";
var CHECKOUT_REQUEST = exports.CHECKOUT_REQUEST = "CHECKOUT_REQUEST";
var GET_TASK_INFO = exports.GET_TASK_INFO = 'GET_TASK_INFO';
var GET_VIDEO = exports.GET_VIDEO = "GET_VIDEO";
var GET_BOOK_TOTAL_PAGE = exports.GET_BOOK_TOTAL_PAGE = "GET_BOOK_TOTAL_PAGE";
var STUDENTDATA = exports.STUDENTDATA = "STUDENTDATA";

/***/ })

},[31]);