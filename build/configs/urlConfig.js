"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const url = {
    apiUrl: 'http://101.200.216.170:8080/',
    //获取公告接口信息那天
    getTgetLastNotice: "StudyCenterService/NoticeREST/getLastNotice",
    //获取学员分数已遍通关
    getStudentScoreList: "StudyCenterService/ExaminationREST/getStudentScoreList"
};

exports.default = url;