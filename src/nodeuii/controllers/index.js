import Router from 'koa-router';
import config from '../configs/urlConfig';
import examModel from '../models/exammodel';
const router = new Router();

// 首页
router.get('/', async (ctx, next)=>{
    await ctx.render('index/pages/index', {title: '书屋'});
    // ctx.body = '200';
});

// 获取首页上面的数据
router.get('/index/getdata', async (ctx, next)=>{
    // const examModelApp = new examModel(ctx);
    // const examResult = await examModelApp.getScoreList();
    // console.log(examResult);
    // let levelNumber = 10;
    // //英文数字
    // let sarr = config.alphaNumeric;
    // //阿利伯数字
    // let idArr = config.aliberDigital;
    // //课程icon
    // let imgsrc = [];
    // //考试ids
    // let paperids = [];
    // const userrole = 1; //ctx.session.userInfo['user_info']['role'] - 0;
    // //小白班
    // switch (userrole) {
    //     case 1:
    //         levelNumber = config.advancedNumber;
    //         imgsrc = config.advancedClassIcon;
    //         paperids = config.advancedPaperids;
    //         break;
    //     case 2:
    //         levelNumber = config.basicsNumber;
    //         imgsrc = config.basicsClassIcon;
    //         paperids = config.basicsPaperids;
    //         break;
    // }
    //
    // //考试信息
    // let examinfo = {};
    // //课程信息
    // let course = [];
    // //获取考试分数
    // let _scores = examResult.result.scores;
    //
    // console.log("_scores", _scores)
    // //考试结果长度
    // const scoresLen = _scores.length;
    // for (let i = 0; i < scoresLen; i++) {
    //     const _currscore = parseInt(_scores[i].score, 10);
    //     const _key = sarr[i];
    //     const _nextkey = sarr[i + 1];
    //     examinfo[_key] = {};
    //     if (_currscore || _currscore == 0) {
    //         examinfo[_key].score = _currscore;
    //         examinfo[_key].paperid = "http://www.101test.com/cand/index?paperId=" + paperids[i];
    //     }
    //     examinfo[_key].index = i + 1;
    //     let tempdata = {};
    //     tempdata.videourl = '/video/' + _key + "online"; //预习课地址
    //     tempdata.classourl = '/video/' + _key + "offline"; //预习课地址
    //     tempdata.imgsrc = imgsrc[i];
    //     if (_currscore >= 10) {
    //         //  实战项目地址
    //         examinfo[_key].idurl = '/taskmore/' + idArr[i];
    //     }
    //     //检查尾部边界值&&处理下一章内容
    //     if (_currscore >= 80 && i < levelNumber - 1) {
    //         examinfo[_nextkey] = {};
    //         if (_currscore || _currscore == 0) {
    //             examinfo[_nextkey].score = 0;
    //             examinfo[_nextkey].paperid = "http://www.101test.com/cand/index?paperId=" + paperids[i + 1];
    //         }
    //         let stempdata = {};
    //         stempdata.imgsrc = imgsrc[i + 1];
    //         stempdata.videourl = '/video/' + _nextkey + "online"; //预习课地址
    //         stempdata.classourl = '/video/' + _nextkey + "offline"; //预习课地址
    //         course[i + 1] = stempdata;
    //     } else {
    //         break;
    //     }
    //     course[i] = tempdata;
    // }
    // //补充剩余的置灰数据
    // if (scoresLen < levelNumber) {
    //     for (let w = scoresLen; w < levelNumber; w++) {
    //         const _key2 = sarr[w];
    //         if (!examinfo[_key2]) {
    //             examinfo[_key2] = {};
    //             examinfo[_key2].score = 0;
    //             examinfo[_key2].index = w + 1;
    //         } else {
    //             examinfo[_key2].index = w + 1;
    //         }
    //         let innercourse = {};
    //         innercourse.videourl = ""; //预习课地址
    //         innercourse.classourl = ""; //预习课地址
    //         if (w == 0) {
    //             innercourse.videourl = "/video/oneonline"; //预习课地址
    //             innercourse.classourl = "/video/oneoffline"; //预习课地址
    //         }
    //         innercourse.imgsrc = imgsrc[w];
    //         if (!course[w]) {
    //             course[w] = innercourse;
    //         }
    //     }
    // }
    // //检查头部边界值
    // if (examinfo.one.paperid == undefined) {
    //     examinfo.one.paperid = "http://www.101test.com/cand/index?paperId=" + paperids[0];
    // }
    // if (course[0] == undefined) {
    //     const _key = sarr[0];
    //     let firstLession = {};
    //     firstLession.imgsrc = imgsrc[0];
    //     firstLession.videourl = '/video/' + _key + "online"; //预习课地址
    //     firstLession.classourl = '/video/' + _key + "offline"; //预习课地址
    //     firstLession.index = 1;
    //     course[0] = firstLession;
    // }
    // let _data = {
    //     title: "一灯学堂 学员学习系统",
    //     userinfo: ctx.session.userInfo.user_info,
    //     result: examinfo,
    //     course: course
    // };
    ctx.body = {
        data: {"data":{"title":"一灯学堂 学员学习系统","userinfo":{"avatar":"http://www.yidengxuetang.com/head/5.png","description":"","mobile_number":"18380462338","nick":"xiaochen","role":1,"uid":715,"username":"yd_18380462338"},"result":{"one":{"score":100,"paperid":"http://www.101test.com/cand/index?paperId=QDE4SW","index":1,"idurl":"/taskmore/1"},"two":{"score":0,"paperid":"http://www.101test.com/cand/index?paperId=62SZ1T","index":2},"three":{"score":0,"index":3},"four":{"score":0,"index":4},"five":{"score":0,"index":5},"six":{"score":0,"index":6},"seven":{"score":0,"index":7},"eight":{"score":0,"index":8},"nine":{"score":0,"index":9},"ten":{"score":0,"index":10}},"course":[{"videourl":"/video/oneonline","classourl":"/video/oneoffline","imgsrc":"js"},{"imgsrc":"node","videourl":"/video/twoonline","classourl":"/video/twooffline"},{"videourl":"","classourl":"","imgsrc":"engineering"},{"videourl":"","classourl":"","imgsrc":"performance"},{"videourl":"","classourl":"","imgsrc":"css"},{"videourl":"","classourl":"","imgsrc":"mvvm"},{"videourl":"","classourl":"","imgsrc":"circuit"},{"videourl":"","classourl":"","imgsrc":"algorithm"},{"videourl":"","classourl":"","imgsrc":"graphics"},{"videourl":"","classourl":"","imgsrc":"safe"}]}}
    };
});

export default router;
