webpackJsonp([14],{"6rOG":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("9gqo"),r=n("mgDn"),s=n("VU/8")(i.a,r.a,!1,null,null,null);s.options.__file="pages\\detailedsearch.vue",t.default=s.exports},"9gqo":function(e,t,n){"use strict";var i=n("//Fk"),r=n.n(i),s=n("gRE1"),a=n.n(s),o=n("woOf"),l=n.n(o),c=n("fZjL"),u=n.n(c),d=n("Dd8w"),h=n.n(d),m=n("NYxO");t.a={data:function(){return{stringLimit:200,entries:[],isLoading:!1,model:null,search:null}},computed:h()({},Object(m.mapState)(["users"]),Object(m.mapGetters)(["smAndDown"]),{fields:function(){var e=this;return this.model?u()(this.model).map(function(t){return{key:t,value:e.model[t]||"n/a"}}):[]},items:function(){var e=this;return this.entries.map(function(t){return u()(t).forEach(function(n){if("string"==typeof t[n]){var i=t[n].length>e.stringLimit?t[n].slice(0,e.stringLimit)+"...":t[n];t=l()({},t,{newVal:i})}}),t})},generated:function(){return a()(this.users)}}),watch:{search:function(e){var t=this;this.items.length>0||(this.isLoading=!0,new r.a(function(n){n(t.generated.filter(function(t){return t.username.toLowerCase().includes(e)||t.displayName.toLowerCase().includes(e)}))}).then(function(e){t.count=e.length,t.entries=e}).catch(function(e){console.log(e)}).finally(function(){return t.isLoading=!1}))}}}},mgDn:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":"","align-center":"","justify-center":""}},[n("v-card",{attrs:{color:"primary",width:e.smAndDown?400:900}},[n("v-card-title",{staticClass:"headline secondary"},[e._v("\n      Search for this App users\n    ")]),n("v-card-title",[e._v("\n      Explore this Agile Management Prototype's data\n      "),n("v-spacer"),e._v("\n      check here \n      "),n("a",{staticClass:"success--text subheading pl-2",attrs:{href:"https://github.com/guidemy",target:"_blank"}},[e._v("The project's repo")]),e._v(".\n    ")],1),n("v-card-text",[n("v-autocomplete",{attrs:{items:e.items,loading:e.isLoading,"search-input":e.search,color:"info","hide-no-data":"","hide-selected":"","item-text":"displayName","item-value":"id",label:"Search for users details",placeholder:"Start typing to Search","prepend-icon":"group","return-object":""},on:{"update:searchInput":function(t){e.search=t}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),n("v-divider"),n("v-expand-transition",[e.model?n("v-list",{staticClass:"primary darken-2"},e._l(e.fields,function(t,i){return n("v-list-tile",{key:i},[n("v-list-tile-content",[n("v-list-tile-sub-title",{domProps:{textContent:e._s(t.key)}}),n("v-list-tile-title",{domProps:{textContent:e._s(t.value)}})],1)],1)})):e._e()],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{disabled:!e.model,color:"grey darken-3"},on:{click:function(t){e.model=null}}},[e._v("\n        Clear\n        "),n("v-icon",{attrs:{right:""}},[e._v("mdi-close-circle")])],1)],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r}});