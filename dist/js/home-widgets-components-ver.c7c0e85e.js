(window.webpackJsonp=window.webpackJsonp||[]).push([["home-widgets-components-ver"],{"959a":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={style:{height:"210px","text-align":"center"}},c=Object(o.createElementVNode)("img",{src:"img/ver.svg",style:{height:"140px"}},null,-1),i={style:{"margin-top":"15px"}},a={style:{"margin-top":"5px"}},l={style:{"margin-top":"20px"}},d=Object(o.createTextVNode)("更新日志"),s=Object(o.createTextVNode)("gitee");var u=n("1da1"),p=(n("96cf"),{title:"版本信息",icon:"el-icon-monitor",description:"当前项目版本信息",data:function(){return{ver:"loading..."}},mounted:function(){this.getVer()},methods:{getVer:function(){var e=this;return Object(u.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$API.demo.ver.get();case 2:n=t.sent,e.ver=n.data;case 4:case"end":return t.stop()}}),t)})))()},golog:function(){window.open("https://gitee.com/lolicode/scui/releases")},gogit:function(){window.open("https://gitee.com/lolicode/scui")}}}),g=n("6b0d");const m=n.n(g)()(p,[["render",function(e,t,n,u,p,g){var m=Object(o.resolveComponent)("el-button"),b=Object(o.resolveComponent)("el-card");return Object(o.openBlock)(),Object(o.createBlock)(b,{shadow:"hover",header:"版本信息"},{default:Object(o.withCtx)((function(){return[Object(o.createElementVNode)("div",r,[c,Object(o.createElementVNode)("h2",i,"SCUI "+Object(o.toDisplayString)(e.$CONFIG.CORE_VER),1),Object(o.createElementVNode)("p",a,"最新版本 "+Object(o.toDisplayString)(p.ver),1)]),Object(o.createElementVNode)("div",l,[Object(o.createVNode)(m,{type:"primary",plain:"",round:"",onClick:g.golog},{default:Object(o.withCtx)((function(){return[d]})),_:1},8,["onClick"]),Object(o.createVNode)(m,{type:"primary",plain:"",round:"",onClick:g.gogit},{default:Object(o.withCtx)((function(){return[s]})),_:1},8,["onClick"])])]})),_:1})}]]);t.default=m}}]);