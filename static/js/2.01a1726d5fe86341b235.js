webpackJsonp([2],{FwI8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"Ysxy",data:function(){return{src:"http://chapter.smaoxs.com/agreement/agree/kdxs.html"}},created:function(){var t=this;this.$bridge.registerhandlerAndroid("td_native_function_callback",function(a,e){"td_native_type_backpressed"===(a=JSON.parse(a)).type&&t.back()})},mounted:function(){"com_abifong_mfxssc"==this.$route.params.appPackage&&(this.src="http://chapter.smaoxs.com/agreement/agree/mfxssc.html"),"com_shunmao_xsssydq"==this.$route.params.appPackage&&(this.src="http://chapter.smaoxs.com/agreement/agree/mfxsydq.html"),"com_shunmao_zymfxs"==this.$route.params.appPackage&&(this.src="http://chapter.smaoxs.com/agreement/agree/zymfxs.html"),"com_kdmfxs_kxsydq"==this.$route.params.appPackage&&(this.src="http://chapter.smaoxs.com/agreement/agree/kdxsydq.html"),"com_wanshan_xssc"==this.$route.params.appPackage&&(this.src="http://chapter.smaoxs.com/agreement/agree/kdxs.html"),"com_wanshan_xsreader"==this.$route.params.appPackage&&(this.src="http://chapter.smaoxs.com/agreement/agree/zyxsdq.html")},methods:{back:function(){this.$router.go(-1)}}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"ysxy"},[a("div",{staticClass:"header"},[a("p",{staticClass:"title"},[a("md-icon",{staticStyle:{float:"left","font-weight":"600"},attrs:{name:"arrow-left"},on:{click:this.back}}),this._v("用户服务协议\n    ")],1)]),this._v(" "),a("iframe",{attrs:{src:this.src,id:"iframe"}})])},staticRenderFns:[]};var c=e("VU/8")(s,r,!1,function(t){e("l2is")},"data-v-7cab3e9e",null);a.default=c.exports},l2is:function(t,a){}});