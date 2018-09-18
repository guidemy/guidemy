webpackJsonp([6],{"/Luz":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-space-between":""}},[s("v-flex",{staticClass:"px-2 py-0",attrs:{xs12:""}},[s("v-divider")],1),s("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[s("v-subheader",{staticClass:"subheading"},[e._v("Project Score Weights %")]),s("v-card-text",{staticClass:"pa-0"},[s("v-slider",{attrs:{label:"Task Delivery",color:e.color1,"track-color":e.color2,"hide-details":"","persistent-hint":"","thumb-size":"2","thumb-label":"always"},model:{value:e.deliveryWeight,callback:function(t){e.deliveryWeight=t},expression:"deliveryWeight"}})],1),s("v-card-text",{staticClass:"pa-0"},[s("v-slider",{attrs:{label:"Participation",color:e.color2,"track-color":e.color1,"hide-details":"","thumb-size":"2","thumb-label":"always"},model:{value:e.dailyWeight,callback:function(t){e.dailyWeight=t},expression:"dailyWeight"}})],1)],1),s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{staticClass:"pa-0",attrs:{label:"Team search","persistent-hint":"",hint:"Filter your team by username or Displayname",box:""},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}})],1)],1),s("v-data-iterator",{attrs:{items:e.team,"rows-per-page-items":e.rowsPerPageItems,pagination:e.pagination,"content-tag":"v-layout",row:"",wrap:"","align-center":"","justify-center":""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"item",fn:function(t){return[s("memberResult",{attrs:{member:t.item,project:e.resultProject,weight:e.weight}})]}}])},[s("v-divider",{staticClass:"my-2",attrs:{slot:"header"},slot:"header"}),s("v-divider",{staticClass:"my-2",attrs:{slot:"footer"},slot:"footer"})],1)],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};t.a=a},"N/Km":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("h57I"),a=s("/Luz"),i=!1;var o=function(e){i||s("bgQi")},n=s("VU/8")(r.a,a.a,!1,o,null,null);n.options.__file="pages\\project\\_id\\results.vue",t.default=n.exports},SlJS:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},T3Yu:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"pa-4 mx-2 mt-5 text-xs-center",attrs:{width:"360px"}},[s("v-layout",{staticStyle:{"margin-top":"-64px"},attrs:{column:"","align-center":"","justify-center":""}},[s("nuxt-link",{attrs:{to:{name:"user",params:{user:e.member.username}}}},[s("v-avatar",{class:"elevation-"+e.hover,attrs:{size:"80px"},on:{mouseover:function(t){e.hover=15},mouseout:function(t){e.hover=0}}},[s("img",{attrs:{src:e.useravatar(e.member.id),alt:e.member.username}})])],1),s("div",{staticClass:"subheading"},[e._v(e._s(e.member.username))]),s("div",{staticStyle:{width:"110px"}},[s("div",{class:"headline "+e.temperColor(100,e.assignedResult)+"--text"},[e._v("\n      "+e._s(e.assignedResult)+"%\n      ")]),s("hr"),e._v("\n      Assigned score\n    ")])],1),s("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[s("v-flex",{staticClass:"layout justify-center text-xs-center py-0",attrs:{xs12:""}},[s("v-progress-linear",{attrs:{color:e.taskTemper,height:"15",value:e.percentAssignedScore}})],1)],1),s("v-layout",{staticClass:"caption px-3",attrs:{row:"","justify-space-between":"","align-content-end":""}},[s("div",{staticClass:"py-2"},[s("span",{class:e.taskTemper+"--text title"},[e._v(e._s(e.percentAssignedScore)+"%")]),s("br"),e._v("Tasks Score"),s("br"),s("hr"),e._v("\n      "+e._s(e.scoreForTasks.score)+" credits\n    ")]),s("div",{staticClass:"py-2"},[s("span",{class:e.taskTemper+"--text body-2"},[e._v(e._s(e.scoreForTasks.antecipatedCredits))]),s("br"),e._v("Anticipation"),s("br"),s("hr"),e._v("\n      "+e._s(e.scoreForTasks.antecipatedTasks)+" tasks\n    ")]),s("div",{staticClass:"py-2"},[s("span",{class:e.taskTemper+"--text body-2"},[e._v(e._s(e.scoreForTasks.overduedCredits))]),s("br"),e._v("Overdue"),s("br"),s("hr"),e._v("\n      "+e._s(e.scoreForTasks.overduedTasks)+" tasks\n    ")]),s("div",{staticClass:"py-2"},[s("span",{class:e.taskTemper+"--text body-2"},[e._v(e._s(e.scoreForTasks.credits))]),s("br"),e._v("Credits"),s("br"),s("hr"),e._v("\n      "+e._s(e.scoreForTasks.total)+" tasks\n    ")])]),s("v-divider"),s("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[s("v-flex",{staticClass:"layout justify-center text-xs-center pb-0",attrs:{xs12:""}},[s("v-progress-linear",{attrs:{color:e.dailyTemper,height:"15",value:e.scoreForDailies.participation}})],1)],1),s("v-layout",{staticClass:"caption px-3",attrs:{row:"","justify-space-between":"","align-content-end":""}},[s("div",{staticClass:"py-2"},[s("span",{class:e.dailyTemper+"--text title"},[e._v(" "+e._s(e.scoreForDailies.participation)+"%")]),s("br"),e._v("\n      Participation\n    ")]),s("div",{staticClass:"py-2"},[s("span",{class:e.dailyTemper+"--text body-2"},[e._v(" "+e._s(e.scoreForDailies.attended))]),s("br"),e._v("\n      Attended\n    ")]),s("div",{staticClass:"py-2"},[s("span",{class:e.dailyTemper+"--text body-2"},[e._v(" "+e._s(e.scoreForDailies.missed))]),s("br"),e._v(" \n      Missed\n    ")]),s("div",{staticClass:"py-2"},[s("span",{class:e.dailyTemper+"--text body-2"},[e._v(" "+e._s(e.scoreForDailies.total))]),s("br"),e._v(" \n      Total\n    ")])])],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};t.a=a},"U+6Q":function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},YPT9:function(e,t,s){"use strict";var r=s("n3Ix"),a=s("T3Yu"),i=!1;var o=function(e){i||s("juDx")},n=s("VU/8")(r.a,a.a,!1,o,null,null);n.options.__file="components\\memberResult.vue",t.a=n.exports},bgQi:function(e,t,s){var r=s("U+6Q");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("rjj0")("29e685fd",r,!1,{sourceMap:!1})},h57I:function(e,t,s){"use strict";var r=s("Dd8w"),a=s.n(r),i=s("NYxO"),o=s("YPT9");t.a={components:{memberResult:o.a},validate:function(e){var t=e.params;return!!e.store.state.projects[t.id]},data:function(){return{deliveryWeight:50,rowsPerPageItems:[2,4,6,8],pagination:{rowsPerPage:4},searchTerm:""}},computed:a()({},Object(i.mapState)(["loggedUser","users","projects","dailyMeetings"]),Object(i.mapGetters)(["temperColor"]),{dailyWeight:{get:function(){return 100-this.deliveryWeight},set:function(e){this.deliveryWeight=100-e}},resultProject:function(){return this.projects[this.$route.params.id]},isManager:function(){return this.loggedUser===this.resultProject.manager},team:function(){var e=this;return this.resultProject.team.map(function(t){return e.users[t]}).filter(this.teamfilter)},color1:function(){return this.temperColor(100,this.deliveryWeight)},color2:function(){return this.temperColor(100,this.dailyWeight)},weight:function(){return{delivery:this.deliveryWeight,daily:this.dailyWeight}}}),methods:{teamfilter:function(e){return e.username.trim().toLowerCase().includes(this.searchTerm.trim().toLowerCase())||e.displayName.trim().toLowerCase().includes(this.searchTerm.trim().toLowerCase())}}}},juDx:function(e,t,s){var r=s("SlJS");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("rjj0")("b1bc1c7e",r,!1,{sourceMap:!1})},n3Ix:function(e,t,s){"use strict";var r=s("Dd8w"),a=s.n(r),i=s("NYxO");t.a={props:{member:{type:Object,required:!0},project:{type:Object,required:!0},weight:{type:[Object,Array],required:!0}},data:function(){return{hover:0}},computed:a()({},Object(i.mapGetters)(["memberScoreForTasks","memberScoreForDailies","username","useravatar","temperColor"]),{scoreForTasks:function(){return this.memberScoreForTasks(this.member.id,this.project.id)},percentAssignedScore:function(){return this.scoreForTasks.score?Math.max(Math.min((100*this.scoreForTasks.score/this.scoreForTasks.credits).toFixed(2),100),0):0},scoreForDailies:function(){return this.memberScoreForDailies(this.member.id,this.project.id)},taskTemper:function(){return this.temperColor(this.scoreForTasks.credits,this.scoreForTasks.score)},dailyTemper:function(){return this.temperColor(this.scoreForDailies.total,this.scoreForDailies.attended)},assignedResult:function(){return(this.percentAssignedScore*this.weight.delivery/100+this.scoreForDailies.participation*this.weight.daily/100).toFixed(2)}})}}});