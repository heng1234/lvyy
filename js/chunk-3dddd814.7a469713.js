(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dddd814"],{"0144":function(t,a,e){t.exports=e.p+"img/5.617fb669.jpg"},"0647":function(t,a,e){t.exports=e.p+"img/4.fc15cf76.jpg"},"0958":function(t,a,e){t.exports=e.p+"img/leaf1.11bd9e32.png"},"0a32":function(t,a,e){},2206:function(t,a,e){"use strict";var s=e("0a32"),i=e.n(s);i.a},"244d":function(t,a,e){t.exports=e.p+"img/7.d54640c2.jpg"},"35e1":function(t,a,e){t.exports=e.p+"img/6.bb9b4ae0.jpg"},4209:function(t,a,e){t.exports=e.p+"img/leaf4.9a1626ee.png"},"6e05":function(t,a,e){t.exports=e.p+"img/1.363502d4.jpg"},"77c6":function(t,a,e){t.exports=e.p+"img/leaf3.0a55fcf9.png"},"7a01":function(t,a,e){t.exports=e.p+"img/leaf5.fd6d038a.png"},"7b4a":function(t,a,e){t.exports=e.p+"img/heart.14508066.png"},9109:function(t,a,e){t.exports=e.p+"img/3.6f1fd639.jpg"},"998a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.show?s("div",{staticClass:"loveVue"},[s("div",{staticClass:"love"},[s("div",{staticClass:"bg",class:{runCircle:t.runCircleSign}},[s("div",{staticClass:"leafs"},[t._l(t.menuList,(function(a,e){return s("div",{key:a.name,staticClass:"leaf",class:"leaf"+(e+1),on:{click:function(s){return t.runCircle(a.name,e)}}},[s("img",{attrs:{src:a.url,alt:""}}),s("span",{staticClass:"nameSpain"},[s("i",{class:a.icon}),t._v(" "+t._s(a.name))])])})),s("div",{staticClass:"heart",class:{heartScale:t.heartScaleSign},on:{click:t.heartScale}},[s("img",{staticStyle:{height:"190px"},attrs:{src:e("7b4a"),alt:""}})])],2)])]),t.showCard?s("div",{staticClass:"cardPosition",class:{cardMiss:t.cardMiss}},[s("el-card",{staticClass:"box-card",style:{background:t.cardGround}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"cardName"},[s("i",{class:t.menuList[t.menuIndex].icon}),t._v("\n                    "+t._s(t.cardName)+"\n                ")]),s("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:t.backSign}},[s("i",{staticClass:"el-icon-close delBG"})])],1),s("div",{staticClass:"cardBody"},[0===t.cardType?s("div",{staticClass:"basicShow"},[s("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.swiperList,(function(t){return s("el-carousel-item",{key:t.url},[s("img",{attrs:{src:t.url,alt:"",width:"150"}})])})),1)],1):1===t.cardType?s("div",{staticClass:"foot"},[s("el-tabs",{attrs:{"tab-position":"left"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{staticClass:"mg5",attrs:{label:"长沙",name:"second"}},[s("el-tag",{attrs:{type:"warning"}},[t._v("嫣嫣家")]),s("el-tag",{attrs:{type:"success"}},[t._v("各种好玩的地方")]),s("el-tag",{attrs:{type:"danger"}},[t._v("商场")]),s("el-tag",{attrs:{type:"info"}},[t._v("各种好吃的地方")]),s("el-tag",[t._v("美食广场")])],1),s("el-tab-pane",{staticClass:"mg5",attrs:{label:"上海",name:"first"}},[s("el-tag",[t._v("美食广场")]),s("el-tag",{attrs:{type:"success"}},[t._v("人民广场")]),s("el-tag",{attrs:{type:"info"}},[t._v("南京西路")]),s("el-tag",{attrs:{type:"warning"}},[t._v("果果和嫣嫣爱的小屋")]),s("el-tag",{attrs:{type:"danger"}},[t._v("外滩")])],1)],1)],1):t._e(),2===t.cardType?s("div",{staticClass:"say"},[s("el-table",{staticStyle:{width:"100%"},attrs:{height:"200",data:t.tableData,"show-header":!1,stripe:!0}},[s("el-table-column",{attrs:{prop:"words",label:"日期"}})],1)],1):3===t.cardType?s("div",{staticStyle:{height:"300px","overflow-y":"scroll"}},[s("el-steps",{attrs:{direction:"vertical",active:9,"finish-status":"success"}},[s("el-step",{attrs:{title:"一起逛街",description:"一起逛街"}}),s("el-step",{attrs:{title:"一起做饭",description:"一起做饭"}}),s("el-step",{attrs:{title:"每天都说早安宝贝",description:"每天都说早安宝贝"}}),s("el-step",{attrs:{title:"一起打游戏",description:"一起打游戏"}}),s("el-step",{attrs:{title:"一起坐高铁回家",description:"一起坐高铁回家"}}),s("el-step",{attrs:{title:"去嫣嫣家",description:"去嫣嫣家 "}})],1)],1):4===t.cardType?s("div",{staticClass:"haveWords"},[s("div",{staticClass:"cont"},t._l(t.ku,(function(a){return s("el-tag",{key:a.id,staticClass:"fly",style:{top:a.top+"px"},attrs:{type:a.type}},[t._v("\n                            "+t._s(a.msg)+"\n                        ")])})),1),s("div",{staticClass:"dealBox"},[s("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入留言",size:"small"},model:{value:t.msg,callback:function(a){t.msg="string"===typeof a?a.trim():a},expression:"msg"}}),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.sendData}},[t._v("Biu~")])],1)]):5===t.cardType?s("div",{staticClass:"movie"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-caret-right"},on:{click:t.watchMV}})],1):t._e()])])],1):t._e(),t._m(0)]):t._e()},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"music"},[e("audio",{attrs:{preload:"auto",loop:"loop",autoplay:"autoplay"}},[e("source",{attrs:{src:"https://i.iandun.com:8085/group1/M00/02/10/rBHgNlzeKgiEFNI5AAAAAAnE4Fk269.mp3",type:"audio/mp3"}})])])}],r={data:function(){return{show:!1,runCircleSign:!1,heartScaleSign:!1,cardMiss:!1,showCard:!1,cardName:"",cardChange:-1,cardGround:"",menuList:[{url:e("0958"),icon:"el-icon-picture-outline",name:"相册"},{url:e("c277"),icon:"el-icon-location",name:"足迹"},{url:e("77c6"),icon:"el-icon-edit",name:"说说"},{url:e("4209"),icon:"el-icon-date",name:"时刻"},{url:e("7a01"),icon:"el-icon-news",name:"留言"},{url:e("9f37"),icon:"el-icon-printer",name:"影集"}],swiperList:[{url:e("6e05")},{url:e("e8d6")},{url:e("9109")},{url:e("0647")},{url:e("0144")},{url:e("35e1")},{url:e("244d")}],cardType:0,menuIndex:-1,activeName:"first",tableData:[{words:"我爱你我的嫣嫣"},{words:"I love you my YanYan"},{words:"嫣嫣我会永远守护你的"},{words:"I will always guard you My YanYan"},{words:"今夕何夕，见此良人"},{words:"Lovers never meet. They're in each other all along"},{words:"南风知我意，吹梦到商都"},{words:"I love three things in the world / The sun,The moon and You / Sun for morning,Moon for night,and you forever"},{words:"大抵心有庭树，亭亭一如你风致"},{words:"既见君子，云胡不喜"},{words:"得其以偏爱，倾尽平生慷慨"},{words:"山水一程，三生有幸"},{words:"愿此生终老温柔，白云不羡仙乡"},{words:"青青子衿，悠悠我心"}],msg:null,ku:JSON.parse(localStorage.kuArr),msgKu:[]}},methods:{runCircle:function(t,a){var e=this;switch(this.runCircleSign=!this.runCircleSign,this.menuIndex=a,this.cardName=t,this.showCard=!0,a){case 0:e.cardGround="rgba(129,15,175,0.4)",e.cardType=0;break;case 1:e.cardGround="rgba(12,136,145,0.6)",e.cardType=1;break;case 2:e.cardGround="rgba(255,235,45,0.6)",e.cardType=2;break;case 3:e.cardGround="rgba(196,0,83,0.6)",e.cardType=3;break;case 4:e.cardGround="rgba(87,174,157,0.6)",e.cardType=4;break;case 5:e.cardGround="rgba(255,125,0,0.6)",e.cardType=5;break}},heartScale:function(){this.heartScaleSign=!this.heartScaleSign},backSign:function(){var t=this;t.cardMiss=!0,t.runCircleSign=!t.runCircleSign,setTimeout((function(){t.showCard=!1,t.cardMiss=!1}),3e3)},handleClick:function(t,a){console.log(t,a)},watchMV:function(){window.open(e("ed47"))},sendData:function(){var t=["","success","info","warning","danger"],a=this.ku;if(""!==this.msg&&null!==this.msg){var e=500*Math.random(),s=5*Math.random(),i=Math.floor(s),r=Math.floor(e),n={msg:this.msg,top:r,type:t[i]};a.push(n),localStorage.kuArr=JSON.stringify(a),this.msg=""}else this.$message.warning("要先输入哦~")}},created:function(){var t=this,a=document.body.clientWidth;a>450?t.$message("请用移动端设备访问"):t.show=!0},mounted:function(){var t=[{msg:"永远守护你",top:-180,type:""},{msg:"我爱你",top:552,type:"warning"},{msg:"HengGuoGUo Love U My YanYan",top:12,type:"success"}],a=JSON.stringify(t);localStorage.setItem("kuArr",a)}},n=r,c=(e("2206"),e("6691")),o=Object(c["a"])(n,s,i,!1,null,"7ad0a845",null);a["default"]=o.exports},"9f37":function(t,a,e){t.exports=e.p+"img/leaf6.b4f35452.png"},c277:function(t,a,e){t.exports=e.p+"img/leaf2.fdf48584.png"},e8d6:function(t,a,e){t.exports=e.p+"img/2.bc96b881.jpg"},ed47:function(t,a,e){t.exports=e.p+"media/99.b2de9c65.mp4"}}]);