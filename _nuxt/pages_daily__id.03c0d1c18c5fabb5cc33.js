webpackJsonp([7],{"6W4V":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.v-expansion-panel__header[data-v-473f9ec1]{padding-left:0!important;padding-right:0!important}.connected-left[data-v-473f9ec1]{position:relative}.connected-left[data-v-473f9ec1]:after,.connected-left[data-v-473f9ec1]:before{content:" ";width:1px;position:absolute;background-color:#555}.connected-left[data-v-473f9ec1]:before{margin:2.5px 20px 20px 0;top:0;bottom:50%;right:0}.connected-left[data-v-473f9ec1]:after{margin:35px 20px 5px 0;top:50%;bottom:0;right:0}.action-middle-1[data-v-473f9ec1]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-35%);transform:translateX(-50%) translateY(-35%)}.action-middle-2[data-v-473f9ec1]{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(70%);transform:translateX(-50%) translateY(70%)}',""])},"MkN+":function(t,a,e){"use strict";var s=e("woOf"),n=e.n(s);a.a={validate:function(t){var a=t.store,e=t.params;return console.log("daily",a.state.dailyMeetings[e.id],e),!!a.state.dailyMeetings[e.id]},data:function(){return{questions:["What did you do yesterday?","What will you do today?","Are there any impediments in the way?"],icons:["alarm_on","alarm_add","alarm_off"],open:!0,newDaily:void 0}},create:function(){console.log(this.$route.params),0===this.daily.status&new Date(this.daily.end).getDate()===(new Date).getDate()&&(this.newDaily=n()({},this.daily))},computed:{daily:function(){return this.dailyMeetings[this.$route.params.id]},dailyProject:function(){var t=this.projects[this.daily.project];return console.log(t,"dailyproject"),t},isManager:function(){return this.loggedUser===this.dailyProject.manager}},methods:{onAnswerDaily:function(){this.answerDaily(this.newDaily),this.newDaily=void 0},dailyColor:function(t){return-1===t.status?"error":0===t.status?"warning":"success"}}}},Ptwm:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"new-daily-container",attrs:{fluid:""}},[e("h2",{staticClass:"headline text-xs-center"},[t._v("\n    Project: "),e("nuxt-link",{attrs:{to:{name:"project",params:{id:t.dailyProject.id}}}},[t._v("\n      "+t._s(t.dailyProject.title)+"\n    ")])],1),e("v-layout",{attrs:{row:"","justify-center":"","align-content-start":""}},[t.newDaily?e("v-flex",[e("v-layout",{attrs:{row:"","align-center":""}},[e("v-avatar",{attrs:{size:"48px",color:"grey lighten-4 mb-2"}},[e("img",{attrs:{src:t.loggedUserObj.picture,alt:"avatar"}})]),e("div",{staticClass:"ml-2"},[e("a",{staticClass:"primary--text subheading"},[t._v(t._s(t.loggedUserObj.username))]),e("br"),t._v("\n          "+t._s(t._f("locale")(t.newDaily.created))+" "),e("span",{staticClass:"body-2 ml-2"},[t._v("TODAY!")])]),e("v-spacer"),e("v-icon",{on:{click:function(a){t.open=!t.open}}},[t._v(t._s(t.open?"unfold_less":"unfold_more"))]),e("v-btn",{attrs:{flat:"",small:"",disabled:!t.open,color:"warning"},on:{click:function(a){return a.stopPropagation(),t.onAnswerDaily(a)}}},[t._v(" responder "),e("v-icon",{staticClass:"pl-2"},[t._v("send")])],1)],1),e("v-layout",{staticClass:"px-2 pt-2",attrs:{row:"",wrap:"","align-start":""}},t._l(3,function(a){return t.open?e("v-flex",{key:a,staticClass:"pa-0 ma-0",attrs:{xs12:""}},[e("v-textarea",{staticClass:"text-xs-right",attrs:{color:"black",box:"",placeholder:"Question was not responded",rows:"2","row-height":"16","background-color":t.dailyColor(t.newDaily)+" darken-1","append-icon":t.icons[a-1],hint:"Answer for question r"+a,"persistent-hint":"",label:t.questions[a-1],"auto-grow":""},model:{value:t.newDaily["r"+a],callback:function(e){t.$set(t.newDaily,"r"+a,e)},expression:"newDaily['r'+(n)]"}})],1):t._e()}))],1):e("v-flex",[e("div",[e("v-layout",{attrs:{row:""}},[e("v-avatar",{attrs:{size:"48px",color:"grey lighten-4 mb-2"}},[e("img",{attrs:{src:t.useravatar(t.daily.assigned),alt:"avatar"}})]),e("div",{staticClass:"ml-2"},[e("a",{staticClass:"primary--text subheading"},[t._v(t._s(t.username(t.daily.assigned)))]),e("br"),t.daily.finished?e("div",{staticClass:"caption grey--text mr-2"},[t._v("\n              responded: "+t._s(t._f("postFormat")(t.daily.finished))+"\n            ")]):t._e()]),e("v-spacer")],1)],1),e("v-layout",{staticClass:"pa-2",attrs:{row:"",wrap:"","align-start":""}},t._l(3,function(a){return e("v-flex",{key:a,staticClass:"pa-0 ma-0",attrs:{xs12:""}},[e("div",[e("span",{staticClass:"caption primary--text"},[t._v(t._s(t.questions[a-1]))]),-1===t.daily.status?e("span",{staticClass:"error--text pl-2",staticStyle:{"font-size":"10px"}},[t._v("(Question was not accepted)")]):t._e()]),e("p",{class:t.dailyColor(t.daily)+"--text"},[t._v("\n            "+t._s(t.daily["r"+a]||"Question was not responded")+"\n          ")])])}))],1)],1)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[]};a.a=n},eVHR:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("MkN+"),n=e("Ptwm"),i=!1;var r=function(t){i||e("s4FS")},o=e("VU/8")(s.a,n.a,!1,r,"data-v-473f9ec1",null);o.options.__file="pages\\daily\\_id.vue",a.default=o.exports},s4FS:function(t,a,e){var s=e("6W4V");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("65fd843a",s,!1,{sourceMap:!1})}});