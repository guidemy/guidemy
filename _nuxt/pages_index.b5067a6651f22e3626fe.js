webpackJsonp([12],{"/TYz":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("2wNP"),a=r("iA8U"),i=r("VU/8")(s.a,a.a,!1,null,null,null);i.options.__file="pages\\index.vue",t.default=i.exports},"2wNP":function(e,t,r){"use strict";var s=r("Dd8w"),a=r.n(s),i=r("NYxO"),n=r("M2pF");t.a={layout:"login",mixins:[n.b],data:function(){return{valid:!1,newUser:{emailOrUsername:"",password:""},isLoading:!1}},computed:Object(i.mapState)(["appLoading","appError"]),methods:a()({},Object(i.mapMutations)(["setError","clearError"]),{signin:function(){var e=this;if(this.isLoading=!0,this.valid){var t=this.newUser.emailOrUsername.toLowerCase(),r={username:t,email:t+".dummy@guidemy.io",displayName:t.toUpperCase()};this.$store.dispatch("signup",r).then(function(e){if(!e)throw Error("Request failed!!");if(!e.username)throw new Error("Invalid E-mail or Username!!");console.warn("User "+e.username+" - "+e.email+": logged On sucessfully")}).then(function(){return e.$store.dispatch("fetchAppData")}).then(function(t){e.$router.push("/dashboard")}).catch(function(t){console.warn(t),e.setError(t.message||t)})}this.isLoading=!1}})}},"7nMV":function(e,t,r){e.exports=r.p+"img/logo1-alpha.6b1edc8.png"},iA8U:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"elevation-10",attrs:{tile:""}},[s("v-card-text",{staticClass:"layout column justify-center"},[s("div",{staticClass:"text-xs-center hidden-md-and-up"},[s("img",{attrs:{src:r("7nMV"),alt:"Guideme",height:"60px"}}),s("h1",{staticClass:"headline primary--text"},[e._v(e._s(e.apptitle))]),s("div",{staticClass:"body-2 grey--text"},[e._v("Agile Tracker.")])]),s("div",{staticClass:"display-1 primary--text text-xs-center"},[e._v("Sign "),s("u",[e._v("in")])])]),s("v-divider"),s("v-card-text",{staticClass:"layout justify-center"},[s("div",{staticClass:"caption text-xs-center"},[s("b",[e._v("Sign In")]),e._v(" below to continue managing your projects.\n      "),s("hr",{staticClass:"primary my-1"})]),e.appError?s("v-alert",{attrs:{value:!!e.appError,type:"error",dismissible:""},on:{input:e.clearError}},[e._v("\n      "+e._s(e.appError.message)+"\n    ")]):e._e()],1),s("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[s("v-form",{on:{submit:function(t){return t.preventDefault(),e.signin(t)},keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{staticClass:"my-0",attrs:{label:"Email or User Name",name:"emailOrUsername",type:"text",required:"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.newUser.emailOrUsername,callback:function(t){e.$set(e.newUser,"emailOrUsername",t)},expression:"newUser.emailOrUsername"}}),s("v-text-field",{staticClass:"my-0",attrs:{label:"Password",name:"password",type:"password",required:"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.newUser.password,callback:function(t){e.$set(e.newUser,"password",t)},expression:"newUser.password"}}),s("v-btn",{attrs:{color:"success",block:"",type:"submit",disabled:!e.valid}},[e._v("Sign in")])],1)],1),s("hr",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"primary my-1"}),s("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:!!e.isLoading,expression:"!!isLoading"}],attrs:{color:"info",height:"2",indeterminate:!0}}),s("v-card-actions",[s("em",[e._v("Not Registered yet?")]),s("v-spacer"),s("v-btn",{attrs:{color:"primary",small:"",flat:"",nuxt:"",to:"/signup"}},[e._v("Sign up")])],1)],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a}});