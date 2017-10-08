webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(14);
var toPrimitive = __webpack_require__(16);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(10);
var hide = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(11);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */
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

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _course = __webpack_require__(33);

var _course2 = _interopRequireDefault(_course);

var _tools = __webpack_require__(39);

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tools2.default.init();
_course2.default.init();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(34);

var _store = __webpack_require__(35);

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
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(36);

var actions = _interopRequireWildcard(_actions);

var _database = __webpack_require__(37);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBookDescList = exports.getTaskList = exports.getBookTotalPage = exports.studentdata = exports.getVideo = exports.addInfo = undefined;

var _mutationTypes = __webpack_require__(20);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addInfo = exports.addInfo = function addInfo(_ref, _ref2) {
    var commit = _ref.commit;
    var me = _ref2.me;

    me.$http.get('index/getdata').then(function (response) {
        var datas = response.body.data;
        console.log('-------------', datas);
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(38);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _mutationTypes = __webpack_require__(20);

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
    data: [],
    examine: {},
    bookTotalPage: {
        totalPage: "",
        lastPage: ""
    },
    taskData: {
        desc: "System missing parameters",
        explain_vid: "",
        standard_vid: ""
    },
    bookDescList: {
        booknamelist: ""
    },
    result: {},
    studentData: {}
    // mutations
    // 
};var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.GET_BOOK_TOTAL_PAGE, function (state, _ref) {
    var datas = _ref.datas;

    datas = parseInt(datas) - 2;
    state.bookTotalPage = {
        totalPage: "hard p" + datas,
        lastPage: "hard fixed back-side p" + (datas - 1)
    };
}), (0, _defineProperty3.default)(_mutations, types.STUDENTDATA, function (state, _ref2) {
    var studentData = _ref2.studentData;

    state.studentData = studentData;
    // console.log("    state.studentData", state.studentData)
}), (0, _defineProperty3.default)(_mutations, types.GET_BOOKDESC_INFO, function (state, _ref3) {
    var datas = _ref3.datas;

    state.bookDescList = {
        booknamelist: datas.booknamelist
    };
}), (0, _defineProperty3.default)(_mutations, types.ADD_INFO, function (state, _ref4) {
    var datas = _ref4.datas;

    state.data = datas.course;
    state.examine = datas.result;
}), (0, _defineProperty3.default)(_mutations, types.GET_TASK_INFO, function (state, _ref5) {
    var datas = _ref5.datas;

    // console.warn('接受到的变量',datas.explain_vid);
    state.taskData.desc = datas.desc;
    state.taskData.explain_vid = datas.explain_vid;
    state.taskData.standard_vid = datas.standard_vid;
}), (0, _defineProperty3.default)(_mutations, types.GET_VIDEO, function (state, _ref6) {
    var datas = _ref6.datas;

    // console.log("datas",datas)
    state.result = {
        list: datas.coursedata.courselist,
        title: datas.title
    };
}), _mutations);

exports.default = {
    state: state,
    mutations: mutations
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(6);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(40);

var tools = {
    init: function init() {
        // console.log('tools init');
    }
};
exports.default = tools;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[32]);