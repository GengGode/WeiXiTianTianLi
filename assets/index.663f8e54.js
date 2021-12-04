import{c as b,a as y,d as m,E,b as x,e as k,f as C,o as f,g as v,w as i,h as c,u as I,p as L,i as F,j as l,k as u,l as M,r as S,m as G,n as A,q as B}from"./vendor.1e07bc4e.js";const O=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};O();const T="modulepreload",g={},H="/WeiXiTianTianLi/",w=function(a,s){return!s||s.length===0?a():Promise.all(s.map(n=>{if(n=`${H}${n}`,n in g)return;g[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":T,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((d,p)=>{o.addEventListener("load",d),o.addEventListener("error",p)})})).then(()=>a())},N=[{path:"/",name:"home",component:()=>w(()=>import("./Home.9d0a0ecb.js"),["assets/Home.9d0a0ecb.js","assets/Home.512f5987.css","assets/el-button.f9f3c78b.css","assets/vendor.1e07bc4e.js","assets/vendor.b3836bd4.css"]),meta:{title:"\u9996\u9875 | \u5929\u7406\u5730\u56FE"}},{path:"/readme",name:"readme",component:()=>w(()=>import("./Readme.d0a4b676.js"),["assets/Readme.d0a4b676.js","assets/el-button.f9f3c78b.css","assets/vendor.1e07bc4e.js","assets/vendor.b3836bd4.css"]),meta:{title:"\u4F7F\u7528\u8BF4\u660E | \u5929\u7406\u5730\u56FE"}}],h=b({history:y(),routes:N});var P=(r,a)=>{const s=r.__vccOpts||r;for(const[n,e]of a)s[n]=e;return s};const _=r=>(L("data-v-37be690e"),r=r(),F(),r),z=_(()=>l("span",{class:"title"},"\u5929\u7406\u5730\u56FE",-1)),R=_(()=>l("span",null,"\u4F7F\u7528\u8BF4\u660E",-1)),V=u("\u4E0B\u8F7D"),$=u("Gitee"),j=u("Github"),q=u(" Github "),D=_(()=>l("svg",{class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15","data-v-b8818f8c":""},[l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})],-1)),W=u(" Gitee "),X=_(()=>l("svg",{class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15","data-v-b8818f8c":""},[l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})],-1)),Y=m({setup(r){const a=window.location.host,s=(n,e)=>{switch(e[0]){case"1":h.push({path:"/readme"});break;case"2":switch(e[1]){case"2-1":window.open("https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap/attach_files/861886/download/GenshinImpact_AutoMap.zip");case"2-2":window.open("/download/GenshinImpact_AutoMap.zip")}break}};return(n,e)=>{const t=E,o=x,d=k,p=C;return f(),v(p,{mode:"horizontal",onSelect:s},{default:i(()=>[c(t,{href:I(a),target:"_blank",underline:!1},{default:i(()=>[z]),_:1},8,["href"]),c(o,{index:"1",style:{"margin-left":"auto"}},{default:i(()=>[R]),_:1}),c(d,{"show-timeout":"50","hide-timeout":"50",index:"2"},{title:i(()=>[V]),default:i(()=>[c(o,{index:"2-1"},{default:i(()=>[$]),_:1}),c(o,{index:"2-2"},{default:i(()=>[j]),_:1})]),_:1}),c(t,{href:"https://github.com/GengGode/TianLi_Map",underline:!1,target:"_blank"},{default:i(()=>[q,D]),_:1}),c(t,{href:"https://gitee.com/Yu_Sui_Xian/GenshinImpact_AutoMap",underline:!1,target:"_blank"},{default:i(()=>[W,X]),_:1})]),_:1})}}});var K=P(Y,[["__scopeId","data-v-37be690e"]]);const J=m({setup(r){return(a,s)=>{const n=M,e=S("router-view"),t=G,o=A;return f(),v(o,null,{default:i(()=>[c(n,null,{default:i(()=>[c(K)]),_:1}),c(t,null,{default:i(()=>[c(e)]),_:1})]),_:1})}}});B(J).use(h).mount("#app");h.beforeEach((r,a,s)=>{r.meta.title&&(document.title=r.meta.title),s()});export{P as _,h as r};
