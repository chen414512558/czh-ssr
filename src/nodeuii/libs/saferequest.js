import rq from 'request-promise';
import config from '../configs/urlConfig';
export default class SafeRquest {
    constructor(ctx, url, data) {
        this.ctx = ctx;
        this.url = url;
        this.data = data;
    }

    request() {
        const rpOptions = {
            method: 'POST',
            uri: config.apiUrl + this.url,
            form: {
                params: JSON.stringify(this.data)
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                // Set automatically
            },
            // json: true // Automatically stringifies the body to JSON
        };
        return new Promise(async (resolve, reject)=>{
             rq(rpOptions).then(result=>{
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
            }).catch(function(err) {
                 reject({
                     error_code: 1,
                     result: err
                 });
             });
        })

    }
}