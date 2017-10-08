'use strict';
// 引用koa

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _default = require('./configs/default');

var _default2 = _interopRequireDefault(_default);

var _koaLog = require('koa-log4');

var _koaLog2 = _interopRequireDefault(_koaLog);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaErrorhandler = require('koa-errorhandler');

var _koaErrorhandler2 = _interopRequireDefault(_koaErrorhandler);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
const logDir = _path2.default.join(__dirname, 'logs'); //配置目标路径 logs
const logger = _koaLog2.default.getLogger('app');
_koaLog2.default.configure(_default2.default.log, {
    cwd: logDir
});
app.use(_koaLog2.default.koaLogger(_koaLog2.default.getLogger('http'), {
    level: 'auto'
}));
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _default2.default.viewsConf,
    autoescape: true,
    cache: false,
    ext: 'html',
    varControls: ['[[', ']]']
}));
// 错误
app.use((0, _koaErrorhandler2.default)());
// app.use(logger(configs.log, log4js));
// 设置静态文件
app.use((0, _koaStatic2.default)(_default2.default.assetsConf));
// 设置路由
app.use(_controllers2.default.routes());

app.listen(_default2.default.port);
// module.exports = app;