"use strict";(self.webpackChunkwebsite_editor=self.webpackChunkwebsite_editor||[]).push([[111],{111:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var s=l(950),a=l(300),d=l(726),i=l(414);const n=(0,s.memo)((e=>{let{noFdCrt:t}=e;const[l,n]=(0,s.useState)(!1),[o,r]=(0,s.useState)(0),c=0==t,{selectedTheme:m,Personalization:u,postData:w}=(0,a.d4)((e=>e.themeReducer),a.bN),v=m.wallId?m.wallId:null,h=e=>{e&&e.data&&"reloadWebsite"===e.data.type&&n(!0)};return(0,s.useEffect)((()=>(window.addEventListener("message",h),()=>{window.removeEventListener("message",h)})),[]),(0,s.useEffect)((()=>{c&&v&&o!=v&&r(v),l&&!c&&(()=>{let e=setTimeout((()=>{var t;const l=document.getElementById("themePreviewWebsite"),s={widgetTheme:null===m||void 0===m?void 0:m.themeId},a={data:{wall:{Wall:{id:0,name:""},Personalization:Object.keys(u).length>0?{...u,...s}:{...s},ThemeRule:m},postData:w},type:"reloadTheme"};null===l||void 0===l||null===(t=l.contentWindow)||void 0===t||t.postMessage(a,"*"),clearTimeout(e)}),100)})()}),[t,m,l]),(0,i.jsxs)("div",{className:"mi-preview",style:{width:`calc(100% - ${c?350:422}px)`},children:[0!=o?(0,i.jsx)("iframe",{src:`${d.Rt}/${o}`,style:{display:c?"block":"none"},title:"preview-default"}):null,(0,i.jsx)("iframe",{id:"themePreviewWebsite",src:`${d.QF}?addfeedload=load`,style:{display:c?"none":"block"},title:"preview-user"})]})}))}}]);