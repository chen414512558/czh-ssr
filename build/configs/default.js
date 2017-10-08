'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
    port: process.env.PORT || 3000,
    controllerConf: _path2.default.join(__dirname, '../controllers/'),
    assetsConf: _path2.default.join(__dirname, '../assets'),
    viewsConf: _path2.default.join(__dirname, '../views'),
    log: {
        appenders: [{
            type: "console"
        }, {
            type: "clustered",
            appenders: [{
                type: "dateFile",
                filename: "http.log",
                pattern: "-yyyy-MM-dd",
                category: "http"
            }, {
                type: "file",
                filename: "app.log",
                maxLogSize: 10485760,
                numBackups: 5
            }, {
                type: "logLevelFilter",
                level: "ERROR",
                appender: {
                    type: "file",
                    filename: "errors.log"
                }
            }]
        }]
    }
};

exports.default = config;