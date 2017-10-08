import config from '../configs/urlConfig';
import safeRequest from '../libs/saferequest';

import mock from 'mockjs';
mock.mock(
    config.apiUrl + config.getStudentScoreList,
    {"data":{"title":"一灯学堂 学员学习系统","userinfo":{"avatar":"http://www.yidengxuetang.com/head/5.png","description":"","mobile_number":"18380462338","nick":"xiaochen","role":1,"uid":715,"username":"yd_18380462338"},"result":{"one":{"score":100,"paperid":"http://www.101test.com/cand/index?paperId=QDE4SW","index":1,"idurl":"/taskmore/1"},"two":{"score":0,"paperid":"http://www.101test.com/cand/index?paperId=62SZ1T","index":2},"three":{"score":0,"index":3},"four":{"score":0,"index":4},"five":{"score":0,"index":5},"six":{"score":0,"index":6},"seven":{"score":0,"index":7},"eight":{"score":0,"index":8},"nine":{"score":0,"index":9},"ten":{"score":0,"index":10}},"course":[{"videourl":"/video/oneonline","classourl":"/video/oneoffline","imgsrc":"js"},{"imgsrc":"node","videourl":"/video/twoonline","classourl":"/video/twooffline"},{"videourl":"","classourl":"","imgsrc":"engineering"},{"videourl":"","classourl":"","imgsrc":"performance"},{"videourl":"","classourl":"","imgsrc":"css"},{"videourl":"","classourl":"","imgsrc":"mvvm"},{"videourl":"","classourl":"","imgsrc":"circuit"},{"videourl":"","classourl":"","imgsrc":"algorithm"},{"videourl":"","classourl":"","imgsrc":"graphics"},{"videourl":"","classourl":"","imgsrc":"safe"}]}}
);

export
default class examModel {
    constructor(ctx) {
        this.ctx = ctx;
    }
    getNotice() {
        const safeRequestIns = new safeRequest(this.ctx, config.getTgetLastNotice, {});
        return safeRequestIns.request();
    }
    getScoreList() {
        const data = {
            // uid: this.ctx.session.userInfo.uid
        };
        const safeRequestIns = new safeRequest(this.ctx, config.getStudentScoreList, data);
        return safeRequestIns.request();
    }
};