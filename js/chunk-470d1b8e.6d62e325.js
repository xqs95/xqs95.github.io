(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-470d1b8e"],{"0af8":function(t,e,s){t.exports=s.p+"img/advertise.05284a7c.png"},"0c84":function(t,e,s){"use strict";var i=s("1663")(!0);s("120f")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,s=this._i;return s>=e.length?{value:void 0,done:!0}:(t=i(e,s),this._i+=t.length,{value:t,done:!1})}))},"171f":function(t,e,s){t.exports=s.p+"img/no-more-comment.819cfe65.png"},"35f6":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bread-crumbs"},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("div",{staticClass:"current-position"},[t._v("当前位置：")]),"/exam-book"==t.$route.query.from?s("el-breadcrumb-item",[s("router-link",{attrs:{target:"_blank",to:{path:"/exam-book"}}},[t._v("考试用书")])],1):t._l(t.providerList,(function(e,i){return t._t("default",(function(){return[t.$route.query.from=="/book-provider?uuid="+e.uuid+"&courseType="+e.companyUuid||t.$route.query.from=="/provider?uuid="+e.uuid+"&companyUuid="+e.companyUuid||t.$route.query.from=="/chinese-textbook?uuid="+e.uuid||t.$route.query.from=="/course-details/series-courses?courseUuid="+e.uuid||t.$route.query.from=="/course-details/series-courses?courseUuid="+e.uuid?s("el-breadcrumb-item",[s("router-link",{attrs:{target:"_blank",to:{path:t.$route.query.from}}},[t._v(t._s(e.name))])],1):0==i&&"/my-chinese-school"==t.$route.query.from?s("el-breadcrumb-item",[s("router-link",{attrs:{target:"_blank",to:{path:t.$route.query.from}}},[t._v("我的华校")])],1):0==i&&!t.$route.query.from||0==i&&!t.noHomeList.some((function(e){return-1!=t.$route.query.from.indexOf(e)}))||0==i&&-1!=t.$route.query.from.indexOf("from")?s("el-breadcrumb-item",[s("router-link",{attrs:{target:"_blank",to:{path:"/"}}},[t._v("首页")])],1):t._e()]}))})),t.courseDetail?s("el-breadcrumb-item",[s("router-link",{attrs:{target:"_blank",to:{path:"/search?courseType="+t.courseType+"&courseFirstCategoryUuid="+t.courseDetail.courseFirstCategoryUuid+"&courseCategoryUuid="+t.courseDetail.courseCategoryUuid}}},[t._v("\n\t\t\t\t"+t._s(t.courseDetail.courseCategoryName)+"\n\t\t\t")])],1):t._e(),t.courseDetail?s("el-breadcrumb-item",[t._v(t._s(t.courseDetail.courseName))]):s("el-breadcrumb-item",[t._v("全部")])],2)],1)},o=[],r=(s("e680"),s("c276")),a={name:"breadCrumbs",props:{courseDetail:{type:Object},courseType:{type:Number}},data:function(){return{noHomeList:["book-provider","provider","chinese-textbook","my-chinese-school","0fc20c24-5599-4e0c-8b53-3e85f4ddddf2","94f698b3-54b4-4b9c-a507-598d02919d5f"]}},created:function(){var t=this,e=r["a"].cookies.get("headLineMenuList");e?this.providerList=JSON.parse(e):this.$bus.$on("headLine",(function(e){t.providerList=e})),this.providerList.push({name:"犇爸讲寓言",uuid:"0fc20c24-5599-4e0c-8b53-3e85f4ddddf2"},{name:"精灵鸭",uuid:"94f698b3-54b4-4b9c-a507-598d02919d5f"})},methods:{}},n=a,c=(s("5356"),s("cba8")),u=Object(c["a"])(n,i,o,!1,null,"5c94e6d4",null);e["a"]=u.exports},"4fce":function(t,e,s){},5356:function(t,e,s){"use strict";s("4fce")},bdcd:function(t,e){t.exports="data:image/png;base64,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"},c762:function(t,e,s){"use strict";s.d(e,"i",(function(){return o})),s.d(e,"h",(function(){return r})),s.d(e,"j",(function(){return a})),s.d(e,"m",(function(){return n})),s.d(e,"f",(function(){return c})),s.d(e,"o",(function(){return u})),s.d(e,"q",(function(){return l})),s.d(e,"k",(function(){return d})),s.d(e,"u",(function(){return m})),s.d(e,"l",(function(){return p})),s.d(e,"b",(function(){return v})),s.d(e,"s",(function(){return f})),s.d(e,"y",(function(){return h})),s.d(e,"t",(function(){return b})),s.d(e,"n",(function(){return g})),s.d(e,"x",(function(){return C})),s.d(e,"a",(function(){return y})),s.d(e,"c",(function(){return k})),s.d(e,"v",(function(){return D})),s.d(e,"r",(function(){return w})),s.d(e,"p",(function(){return x})),s.d(e,"g",(function(){return O})),s.d(e,"d",(function(){return L})),s.d(e,"w",(function(){return _})),s.d(e,"e",(function(){return T}));var i=s("b6bd");function o(t){return Object(i["a"])({url:"/meilanopenapi/frontCourse/getCourseDetailFront",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/meilanopenapi/frontCourse/getCourseDetailForViewCourse",method:"post",data:t})}function a(t){return Object(i["a"])({url:"/meilanopenapi/courseDiscuss/getCourseDiscussList",method:"post",data:t})}function n(t){return Object(i["a"])({url:"/meilanopenapi/frontCourse/getCourseRecommendFront",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/meilanopenapi/company/getCompanyDetailFront",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/meilanopenapi/seriescourse/getSeriesCourseByCourse",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/meilanopenapi/seriescourse/getSeriesSubCourseCatalogBySeriesCourse",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/meilanopenapi/courseLearnRecommend/getCourseLearnRecommendList",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/meilanfrontapi/courseDiscuss/saveCourseDiscuss",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/meilanfrontapi/frontCourse/getCourseRecommendFront",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/meilanblock/courseOrder/generateCourseOrder",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/meilanblock/courseOrder/payCourseOrder",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/meilanfrontapi/courseLearning/startLearn",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/meilanfrontapi/classLearning/saveClassLearningTime",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/meilanfrontapi/frontCourse/getPeriodDetailForViewCourse",method:"post",data:t})}function C(t){return Object(i["a"])({url:"/meilanfrontapi/classSchedule/scheduleDetail",method:"post",data:t})}function y(t){return Object(i["a"])({url:"/meilanfrontapi/classLearning/startLearn",method:"post",data:t})}function k(t){return Object(i["a"])({url:"/meilanfrontapi/aliyunVOD/getAliyunVodStsNoToken",method:"post",data:t})}function D(t){return Object(i["a"])({url:"/meilanfrontapi/courseLearningStatistics/saveCourseLearningTime",method:"post",data:t})}function w(t){return Object(i["a"])({url:"/meilanopenapi/seriescourse/getSeriescourseDetail",method:"post",data:t})}function x(t){return Object(i["a"])({url:"/meilanopenapi/seriescourselearnrecommend/getSeriesCourseLearnRecommendList",method:"post",data:t})}function O(t){return Object(i["a"])({url:"/meilanopenapi/company/getCompanyDetailFrontByUuid",method:"post",data:t})}function L(t){return Object(i["a"])({url:"/meilanopenapi/hskyctbook/getBookDetail",method:"post",data:t})}function _(t){return Object(i["a"])({url:"/meilanfrontapi/hskyctbookorder/saveOrder",method:"post",data:t})}function T(t){return Object(i["a"])({url:"/meilanopenapi/hskyctbook/getBookList",method:"post",data:t})}},decf:function(t,e,s){},e076:function(t,e,s){"use strict";s("decf")},e7ad:function(t,e,s){t.exports=s.p+"img/advertise-vip.c74cb7e5.png"},f7c9:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-detail"},[i("div",{staticClass:"placeholder"}),i("div",{staticClass:"basic-information"},[i("div",{staticClass:"information-content"},[i("breadCrumbs",{attrs:{courseDetail:t.courseData,courseType:10}}),i("div",{staticClass:"information-flex"},[i("img",{staticClass:"ebook-image lazy",attrs:{src:s("bdcd"),"data-src":t.courseData.photoUrl,alt:""}}),i("div",{staticClass:"ebook-details"},[i("div",{staticClass:"name-rating"},[i("div",{staticClass:"ebook-name-pc"},[i("div",{directives:[{name:"line-clamp",rawName:"v-line-clamp",value:1,expression:"1"}],staticClass:"ebook-name"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.courseData.courseName)+"\n\t\t\t\t\t\t\t")])]),i("div",{staticClass:"ebook-name-ipad"},[i("div",{directives:[{name:"line-clamp",rawName:"v-line-clamp",value:2,expression:"2"}],staticClass:"ebook-name"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.courseData.courseName)+"\n\t\t\t\t\t\t\t")])])]),i("div",{staticClass:"author-rating"},[i("div",{staticClass:"ebook-author"},[t._v("讲师："+t._s(t.courseData.teacherName))]),i("div",{staticClass:"ebook-rating-box"},[i("div",{staticClass:"ebook-rating"},[i("el-rate",{attrs:{disabled:!0,"disabled-void-color":"#DDDDDD"},model:{value:t.courseData.starsLevelRate,callback:function(e){t.$set(t.courseData,"starsLevelRate",e)},expression:"courseData.starsLevelRate"}}),i("div",{staticClass:"rating-number"},[t.courseData.starsLevel?i("span",[t._v(t._s(t.courseData.starsLevel.toFixed(1)))]):t._e()])],1)])]),i("div",{staticClass:"ebook-types"},[i("div",{staticClass:"types firstrow"},[t._v("课程类型："+t._s(t.courseData.courseCategoryName?t.courseData.courseCategoryName:"------"))]),t.courseData.courseDifficulty?i("div",{staticClass:"types firstrow"},[t._v("\n\t\t\t\t\t\t\t课程难度："+t._s(t.difficultyList[t.courseData.courseDifficulty].name))]):i("div",{staticClass:"types firstrow"},[t._v("课程难度：初级学习")]),i("div",{staticClass:"types"},[t._v("观看次数："+t._s(t.numberToK(t.courseData.viewNum))+"已学")]),i("div",{staticClass:"types",staticStyle:{"margin-right":"0"}},[t._v(t._s(t.commentTotal)+"人评价")])]),t.courseData.isAdd?i("div",{staticClass:"read-now",on:{click:t.toQueryOrder}},[t._v("立即学习")]):i("div",{staticClass:"buy-now-box"},[i("div",{staticClass:"buy-now",on:{click:t.toQueryOrder}},[t._v("立即购买")]),i("div",{staticClass:"buy-price"},[t._v("¥ "+t._s(t.courseData.price))])])])])],1)]),i("div",{staticClass:"details-box"},[i("div",{staticClass:"details-central",attrs:{id:"introduction"}},[i("div",{staticClass:"details-left"},[i("div",{staticClass:"book-introduction"},[i("div",{staticClass:"tab-box"},[i("div",{staticClass:"tab",on:{click:function(e){return t.switchTab("#introduction")}}},[i("div",[t._v("课程介绍")]),i("div",{staticClass:"line"})]),i("div",{staticClass:"tab-hover",on:{click:function(e){return t.switchTab("#comment")}}},[i("div",[t._v("课程评论（"+t._s(t.commentTotal)+"）")])])]),t._m(0),i("div",{staticClass:"overview-box"},[i("div",{staticClass:"overview-top"},[i("div",{staticClass:"overview-image-box",on:{click:t.toRenewVip}},[t.info.isActive?i("img",{staticClass:"overview-image",attrs:{src:s("e7ad")}}):i("img",{staticClass:"overview-image",attrs:{src:s("0af8")}})]),i("div",{staticClass:"title"},[t._v("内容概述")]),i("div",{staticClass:"message"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.courseData.courseIntro)+"\n\t\t\t\t\t\t\t")]),t.courseData.coursePictureList&&t.courseData.coursePictureList.length>0?i("div",{staticClass:"title"},[t._v("概要图片")]):t._e(),t._l(t.courseData.coursePictureList,(function(e){return t.courseData.coursePictureList&&t.courseData.coursePictureList.length>0?i("img",{staticClass:"message",attrs:{src:e.pictureUrl,width:"100%"}}):t._e()}))],2)]),i("div",{staticClass:"details-left-line"}),i("div",{staticClass:"same-books"},[i("div",{staticClass:"same-books-title"},[t._v("继续学习与本视频标签相同的课程：")]),i("div",{staticClass:"same-books-box"},[i("a",{staticClass:"same-books-text",on:{click:function(e){return t.goSearch(t.courseData.courseFirstCategoryUuid)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.courseData.courseFirstCategoryName)+"\n\t\t\t\t\t\t\t")]),t.courseData.courseDifficulty?i("a",{staticClass:"same-books-text",on:{click:function(e){return t.goSearch("","",t.courseData.courseDifficulty)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.difficultyList[t.courseData.courseDifficulty].name)+"\n\t\t\t\t\t\t\t")]):t._e(),i("a",{staticClass:"same-books-text",on:{click:function(e){return t.goSearch(t.courseData.courseFirstCategoryUuid,t.courseData.courseCategoryUuid)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.courseData.courseCategoryName)+"\n\t\t\t\t\t\t\t")])])])]),i("div",{staticClass:"recommend-ipad-box"},[t._m(1),i("div",{staticClass:"recommend-ipad-video-list"},[i("swiper",{ref:"partnerMySwiper",staticClass:"swiper-box",attrs:{options:t.partnerSwiperOptions}},t._l(t.recommendedVideo,(function(e,s){return i("swiper-slide",[i("a",{staticClass:"recommend-ipad-video-row-box",on:{click:function(s){return t.goPath(e.uuid)}}},[i("div",{staticClass:"recommend-ipad-row"},[i("img",{staticClass:"cover-image",attrs:{src:e.courseCover}}),e.multimediaMillisecondTotal?i("span",[t._v(t._s(t.formatDuring(e.multimediaMillisecondTotal)))]):t._e()]),i("div",{directives:[{name:"line-clamp",rawName:"v-line-clamp",value:2,expression:"2"}],staticClass:"recommend-ipad-row-name"},[t._v(t._s(e.courseName))])])])})),1)],1)]),i("div",{staticClass:"post-comment",attrs:{id:"comment"}},[i("div",{staticClass:"post-comment-top",style:{paddingTop:t.courseData.isAdd?"44px":"36px"}},[i("div",{staticClass:"post-comment-title",style:{top:t.courseData.isAdd?"44px":"36px"}},[t._v("发表评论\n\t\t\t\t\t\t")]),t.info&&t.info.uuid&&t.courseData.isAdd?i("div",{staticClass:"posts-number"},[t._v("已经发布评论\n\t\t\t\t\t\t\t"),i("span",[t._v(t._s(t.commentTotal))]),t._v("条")]):t._e(),t.info&&t.info.uuid&&!t.courseData.isAdd?i("div",{staticClass:"not-learning-box"},[i("div",{staticClass:"not-learning"},[t._v("您需要学习后才可以评价，")]),i("div",{staticClass:"to-learning",on:{click:t.learnNow}},[t._v("去学习")])]):t._e(),t.info&&t.info.uuid?t._e():i("div",{staticClass:"not-learning-box"},[i("div",{staticClass:"not-learning"},[t._v("您需要登录后才可以评价，")]),i("div",{staticClass:"to-learning",on:{click:t.login}},[t._v("去登录")])])]),i("div",{staticClass:"post-comment-line"}),t.courseData.isAdd?i("div",{staticClass:"submit-comments-box"},[i("div",{staticClass:"scoring"},[i("div",{staticClass:"scoring-title"},[t._v("打分")]),i("div",{staticClass:"choose-scoring"},[i("el-rate",{model:{value:t.score,callback:function(e){t.score=e},expression:"score"}})],1)]),i("div",{staticClass:"comment"},[i("div",{staticClass:"comment-title"},[t._v("评论")]),i("div",{staticClass:"comment-text"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"autoExpand",attrs:{rows:"1","data-min-rows":"1",placeholder:"您的评论全平台可见，请文明发言，字数100字以内。",maxlength:"100"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})])]),i("div",{staticClass:"submit-comments-button",on:{click:t.submit}},[t._v("提交评论")])]):t._e(),0==t.allCommentList.length?i("div",{staticClass:"no-more-comment"},[i("img",{staticClass:"no-more-image",attrs:{src:s("171f")}}),i("div",{staticClass:"no-more-text"},[t._v("暂无评论")]),i("div",{staticStyle:{height:"80px"}})]):i("div",{staticClass:"post-comment-body"},[t._l(t.allCommentList,(function(e,s){return i("div",{key:s,staticClass:"post-comment-content"},[i("img",{staticClass:"comment-image",attrs:{src:e.userHeadUrl}}),i("div",{staticClass:"comment-right"},[i("div",{staticClass:"comment-content-box"},[i("div",{staticClass:"content-one"},[i("div",{staticClass:"content-name"},[t._v(t._s(e.userNickName))]),i("div",{staticClass:"star-box"},[i("el-rate",{attrs:{disabled:!0,"disabled-void-color":"#DDDDDD"},model:{value:e.level,callback:function(s){t.$set(e,"level",s)},expression:"item.level"}})],1)]),i("div",{staticClass:"content-two"},[t._v(t._s(e.content))])]),i("div",{staticClass:"comment-time"},[t._v(t._s(t.getDateDiff(e.gmtCreate)))])])])})),t.allCommentList.length==t.commentTotal?i("div",{staticClass:"no-more"},[i("div",{staticClass:"no-more-left"}),i("div",{staticClass:"no-more-text"},[t._v("没有更多评论了")]),i("div",{staticClass:"no-more-right"})]):i("div",{staticClass:"see-more-comment",on:{click:t.nexePage}},[t._v("加载更多评论")]),t.allCommentList.length==t.commentTotal?i("div",{staticClass:"post-comment-line"}):i("div",{staticClass:"see-more-line"}),i("div",{staticClass:"personal-opinion"},[t._v("以上评论仅代表用户个人观点，不代表梅蘭書院平台立场")])],2)])]),i("div",{staticClass:"details-right"},[i("div",{staticClass:"school-introduction"},[i("img",{staticClass:"lazy school-image",attrs:{src:s("bdcd"),"data-src":t.institution.logoUrl,"lazy-src":s("bdcd")},on:{click:t.goSupplier}}),i("div",{staticClass:"school-line"}),i("div",{staticClass:"school-text"},[t._v("\n\t\t\t\t\t\t"+t._s(t.institution.companyIntro)+"\n\t\t\t\t\t")])]),i("div",{staticClass:"recommended-books"},[i("div",{staticClass:"recommended-title"},[t._v("学完该课程的人还在学…")]),t._l(t.recommendedVideo.slice(0,3),(function(e,s){return i("a",{staticClass:"recommended-course-box",style:{marginTop:0==s?"26px":"40px"},on:{click:function(s){return t.toCourseDetail(e)}}},[i("img",{attrs:{src:e.courseCover}}),i("span",{directives:[{name:"line-clamp",rawName:"v-line-clamp",value:1,expression:"1"}]},[t._v(t._s(e.courseName))])])}))],2)])]),i("div",{staticStyle:{height:"54px"}})]),i("el-dialog",{staticClass:"login-bounc",attrs:{"lock-scroll":!1,visible:t.isLoginBounc,"close-on-click-modal":!1,width:"520px","show-close":!1},on:{"update:visible":function(e){t.isLoginBounc=e},close:t.close}},[i("div",{staticClass:"message-box"},[i("div",{staticClass:"title"},[t._v("课程支付提醒")]),i("div",{staticClass:"msg"},[t._v("此课程已存在未支付订单，请移步订单中心完成支付")]),i("div",{staticClass:"btn-group"},[i("div",{staticClass:"cancle",on:{click:function(e){t.isLoginBounc=!1}}},[t._v("取消")]),i("div",{staticClass:"btn",on:{click:t.toOrderList}},[t._v("确定")])])])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-line-box"},[s("div",{staticClass:"details-line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend-ipad-title"},[s("span",[t._v("学完该课程的人还在学…")])])}],r=(s("1084"),s("159a"),s("ac67"),s("246f"),s("4890"),s("32ea"),s("085b"),s("3c7d")),a=(s("e186"),s("799e")),n=s("80ee"),c=(s("1bc7"),s("0c84"),s("c276")),u=s("7736"),l=s("c762"),d=s("35f6"),m=s("6fe8");s("664d");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function v(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={components:{swiper:m["swiper"],swiperSlide:m["swiperSlide"],breadCrumbs:d["a"]},data:function(){return{allCommentList:[],commentTotal:0,page:1,comment:"",score:0,textarea:"",commenTotalData:{},courseData:{},isLoginBounc:!1,institution:{},recommendedVideo:[],partnerSwiperOptions:{smartSpeed:750,slidesPerView:"auto",spaceBetween:22,loop:!1,init:!1},difficultyList:[{name:"无"},{name:"初级学习"},{name:"中级拔高"},{name:"高级挑战"}],scrollToptimer:null}},mounted:function(){var t=this;Promise.all([this.getCourseDiscussList(),this.getCompanyDetailFront(),this.getCourseDetailFront(),this.getCourseRecommendFrontOpen(),this.partnerSwiper.init(),this.registerAutosize()]).then((function(e){setTimeout((function(){t.$bus.$emit("onloadLazyImg",!0)}),300)}))},computed:v(v({},Object(u["d"])("admin/user",["info"])),{},{partnerSwiper:function(){return this.$refs.partnerMySwiper.swiper}}),methods:{goSupplier:function(){var t=this.$router.resolve({path:"/supplier",query:{companyUuid:this.institution.uuid}});window.open(t.href,"_blank")},goSearch:function(t,e,s){var i=this.$router.resolve({path:"/search",query:{courseType:10,courseFirstCategoryUuid:t,courseCategoryUuid:e,courseDifficulty:s}});window.open(i.href,"_blank")},toRenewVip:function(){if(this.info.uuid){var t=this.$router.resolve("/personal-center/vip-recharge");window.open(t.href,"_blank")}else this.$bus.$emit("requestErrorCode","40005")},getCourseDetailFront:function(){var t=this;return new Promise((function(e,s){var i={courseUuid:t.$route.query.courseUuid};Object(l["i"])(i).then((function(s){"true"==s.success&&(t.courseData=s.data,t.courseData.starsLevelRate=t.courseData.starsLevel?parseInt((t.courseData.starsLevel/2).toFixed(1)):0,e())}))}))},submit:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.score){t.next=3;break}return this.$message.error("请选择评分"),t.abrupt("return");case 3:if(!(this.comment.length<=0)){t.next=6;break}return this.$message.error("请输入评论"),t.abrupt("return");case 6:if(1==this.courseData.isAdd){t.next=9;break}return this.$message.error("您需要学习后才可以评价！"),t.abrupt("return");case 9:e={objectUuid:this.$route.query.courseUuid,content:this.comment,level:this.score},Object(l["u"])(e).then((function(t){"20001"!=t.msg?"true"==t.success?(s.page=1,s.comment="",s.score=0,s.getCourseDiscussList(),Object(l["i"])({courseUuid:s.$route.query.courseUuid}).then((function(t){"true"==t.success&&(s.courseData.starsLevel=t.data.starsLevel,s.courseData.starsLevelRate=t.data.starsLevel?parseInt((s.courseData.starsLevel/2).toFixed(1)):0)}))):s.$message.error("评论失败"):s.$message.error("操作频繁，请稍后重试！")}));case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCourseDiscussList:function(){var t=this,e={page:this.page,rows:20,objectUuid:this.$route.query.courseUuid};Object(l["j"])(e).then((function(e){if("true"==e.success){var s=Object(r["a"])(t.allCommentList);1==t.page&&(s=[]),t.allCommentList=s.concat(e.discussList.data),t.commentTotal=e.discussList.total,t.commenTotalData=e.starLevelMap}}))},nexePage:function(){this.page=Math.ceil(this.allCommentList.length/20)+1,this.getCourseDiscussList()},toQueryOrder:function(){var t=this;if(!this.info||!this.info.uuid)return this.$message({message:"请登录！",type:"warning"}),void this.$bus.$emit("requestErrorCode","40005");0==this.courseData.isAdd?Object(l["b"])({courseUuid:this.$route.query.courseUuid}).then((function(e){3003!=e.msg&&2043!=e.msg?-1==e.msg.indexOf("已存在该课程订单")&&74003!=e.msg?"true"==e.success&&t.$router.push({path:"/personal-center/confirm-order",query:{courseUuid:t.$route.query.courseUuid,orderUuid:e.data.uuid}}):t.isLoginBounc=!0:t.$message({message:"课程不存在",type:"error"})})):this.$router.push({path:"/course-details/video-course-details",query:{courseUuid:this.$route.query.courseUuid,from:this.$route}})},toOrderList:function(){this.isLoginBounc=!1,this.$router.push({path:"/personal-center/order-center"})},getCompanyDetailFront:function(){var t=this;return new Promise((function(e,s){Object(l["f"])({courseUuid:t.$route.query.courseUuid}).then((function(s){t.institution=s.data,e()}))}))},getCourseRecommendFrontOpen:function(){var t=this;return new Promise((function(e,s){var i={courseUuid:t.$route.query.courseUuid,page:1,rows:6};Object(l["m"])(i).then((function(s){"true"==s.success&&(t.recommendedVideo=s.data.data,e())}))}))},close:function(){this.isLoginBounc=!1},login:function(){this.$bus.$emit("requestErrorCode","40005")},learnNow:function(){this.backToTop()},backToTop:function(){var t=this;this.scrollToptimer=setInterval((function(){var e=document.body.scrollTop||document.documentElement.scrollTop,s=e/4;0!=document.body.scrollTop?document.body.scrollTop-=s:document.documentElement.scrollTop-=s,0==e&&clearInterval(t.scrollToptimer)}),30)},goPath:function(t){var e=this.$router.resolve({path:"/course-details/video-course-details",query:{courseUuid:t,from:this.$route}});window.open(e.href,"_blank")},goSeach:function(){var t=this.$router.resolve({path:"/search"});window.open(t.href,"_blank")},toCourseDetail:function(t){var e="";"10"==t.courseType&&t.price>0?e="/course-details/pay-for-courses":"10"==t.courseType?e="/course-details/video-course-details":"20"==t.courseType?e="/course-details/audio-detail":"110"==t.courseType?e="/course-details/ebook-detail":"150"==t.courseType&&(e="/course-details/picture-book-detail");var s=this.$router.resolve({path:e,query:{courseUuid:t.uuid}});window.open(s.href,"_blank")},registerAutosize:function(){function t(t){var e=t.value;t.value="",t._baseScrollHeight=t.scrollHeight,t.value=e}function e(e){var s=e.target;if(s.classList.contains("autoExpand")&&"TEXTAREA"!=!s.nodeName){var i,o=0|s.getAttribute("data-min-rows");!s._baseScrollHeight&&t(s),s.rows=o,i=Math.ceil((s.scrollHeight-s._baseScrollHeight)/30),s.rows=o+i}}document.addEventListener("input",e)},switchTab:function(t){this.goAuchor(t)},goAuchor:function(t){var e=this.$el.querySelector(t);document.body.scrollTop=e.offsetTop-53,document.documentElement.scrollTop=e.offsetTop-43},getDateDiff:function(t){return c["a"].getDateDiff(t)},formatDuring:function(t){return c["a"].formatDuring(t)},numberToK:function(t){return c["a"].numberToK(t)}}},h=f,b=(s("e076"),s("cba8")),g=Object(b["a"])(h,i,o,!1,null,"57237d64",null);e["default"]=g.exports}}]);