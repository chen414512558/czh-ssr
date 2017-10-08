'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _urlConfig = require('../configs/urlConfig');

var _urlConfig2 = _interopRequireDefault(_urlConfig);

var _saferequest = require('../libs/saferequest');

var _saferequest2 = _interopRequireDefault(_saferequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class indexModel {
    constructor(ctx, next) {
        this.ctx = ctx;
    } //获取公告接口
    getNotice() {
        const safeRequestIns = new _saferequest2.default(this.ctx, _urlConfig2.default.getTgetLastNotice, {});
        return safeRequestIns.request();
    }
}exports.default = indexModel;
;