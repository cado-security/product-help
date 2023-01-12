"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var s=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,i=function(e,t){if(null==e)return{};var r,s,i={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?s.createElement(b,n(n({ref:t},p),{},{components:r})):s.createElement(b,n({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var c=2;c<a;c++)n[c]=r[c];return s.createElement.apply(null,n)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=r(7462),i=(r(7294),r(3905));const a={title:"Browse Disk",hide_title:!0,sidebar_position:4},n="Browse Disk",o={unversionedId:"cado-response/investigate/browse-disk",id:"cado-response/investigate/browse-disk",title:"Browse Disk",description:"When you select a piece of disk evidence in the Project Overview tab, a Browse Disk Tab will appear.",source:"@site/docs/cado-response/investigate/browse-disk.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/browse-disk",permalink:"/cado-response/investigate/browse-disk",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/browse-disk.md",tags:[],version:"current",lastUpdatedAt:1667941408,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:4,frontMatter:{title:"Browse Disk",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Automated Investigation",permalink:"/cado-response/investigate/automated-investigation"},next:{title:"Key Events, Alarms & Suspicious",permalink:"/cado-response/investigate/key-events"}},l={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"browse-disk"},"Browse Disk"),(0,i.kt)("p",null,"When you select a piece of disk evidence in the Project Overview tab, a Browse Disk Tab will appear."),(0,i.kt)("p",null,"Browse Disk shows a hierarchical view of the file system. Cado marks directory structures where Cado has found Alarms or Suspicions with red or yellow dots respectively. Clicking on a folder allows you to drill down into that structure. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Browse Disk",src:r(1329).Z,width:"1573",height:"736"})),(0,i.kt)("p",null,"Clicking on a file takes you to the details for that file, inlcuding links to search Open Threat Exchange (OTX) and VirusTotal if you have those ",(0,i.kt)("a",{parentName:"p",href:"/cado-response/investigate/detections"},"set up"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"File Details 1",src:r(6302).Z,width:"1577",height:"762"})),(0,i.kt)("p",null,"This tab also shows any key events (alarms, suspicions) associated with this file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"File Details 2",src:r(6294).Z,width:"1460",height:"592"})),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/cado-host/artifacts#volatile-data"},"running processes collected by Cado Host")," This tab also shows a diagram of information about running processes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Process Data",src:r(492).Z,width:"1590",height:"762"})),(0,i.kt)("p",null,"This data is also available in tabular form"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Process Table",src:r(3574).Z,width:"1478",height:"661"})))}d.isMDXComponent=!0},1329:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/browse-disk-e630f76dcfd6c298a60d26e93725b03f.png"},6302:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/file-details-1-294ebd883c535190d1a2eb48b1bbf255.png"},6294:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/file-details-2-772b231ff2af57cea372b7753928903b.png"},492:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/process-diagram-2780595810b9c5b42785c6aa921509dc.png"},3574:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/processes-table-59cb61f8d3998b5b33aff27aacdd3ce6.png"}}]);