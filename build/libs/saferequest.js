'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _urlConfig = require('../configs/urlConfig');

var _urlConfig2 = _interopRequireDefault(_urlConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SafeRquest {
    constructor(ctx, url, data) {
        this.ctx = ctx;
        this.url = url;
        this.data = data;
    }

    request() {
        const rpOptions = {
            method: 'POST',
            uri: _urlConfig2.default.apiUrl + this.url,
            form: {
                params: JSON.stringify(this.data)
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                // Set automatically
            }
            // json: true // Automatically stringifies the body to JSON
        };
        return new Promise(async (resolve, reject) => {
            (0, _requestPromise2.default)(rpOptions).then(result => {
                console.log(result);
                const resp = JSON.parse(result);
                if (resp) {
                    if (resp.error_code == 0) {
                        resolve({
                            error_code: 0,
                            result: resp.result
                        });
                    } else {
                        resolve({
                            error_code: 1,
                            result: resp.msg
                        });
                    }
                } else {
                    resolve({
                        error_code: 1,
                        result: 'Fail to parse http response'
                    });
                }
            }).catch(function (err) {
                reject({
                    error_code: 1,
                    result: err
                });
            });
        });
    }
}
exports.default = SafeRquest;