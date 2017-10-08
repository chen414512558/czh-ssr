import config from '../configs/urlConfig';
import safeRequest from '../libs/saferequest';

export default class indexModel {
    constructor(ctx, next) {
        this.ctx = ctx;
    } //获取公告接口
    getNotice() {
        const safeRequestIns = new safeRequest(this.ctx, config.getTgetLastNotice, {});
        return safeRequestIns.request();
    }
};