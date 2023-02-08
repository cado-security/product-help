"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},s="Google Cloud Kubernetes Engine",a={unversionedId:"cado-response/discovery-import/import/gcp/kubernetes-engine",id:"cado-response/discovery-import/import/gcp/kubernetes-engine",title:"Google Cloud Kubernetes Engine",description:"The Cado platform will collect key logs and forensic artifacts from Google Cloud Kubernetes Engine containers.",source:"@site/docs/cado-response/discovery-import/import/gcp/kubernetes-engine.md",sourceDirName:"cado-response/discovery-import/import/gcp",slug:"/cado-response/discovery-import/import/gcp/kubernetes-engine",permalink:"/cado-response/discovery-import/import/gcp/kubernetes-engine",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/gcp/kubernetes-engine.md",tags:[],version:"current",lastUpdatedAt:1675867867,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:5,frontMatter:{title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/cado-response/discovery-import/import/gcp/storage"},next:{title:"Import from XDR",permalink:"/cado-response/discovery-import/import/on-prem/xdr-import"}},p={},c=[{value:"Import Steps",id:"import-steps",level:2}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud-kubernetes-engine"},"Google Cloud Kubernetes Engine"),(0,o.kt)("p",null,"The Cado platform will collect key logs and forensic artifacts from Google Cloud Kubernetes Engine containers."),(0,o.kt)("h2",{id:"import-steps"},"Import Steps"),(0,o.kt)("p",null,"1) Go to ",(0,o.kt)("strong",{parentName:"p"},"Import > Kubernetes Engine")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cado Import Screen showing the Kubernetes Engine options",src:r(7566).Z,width:"1059",height:"726"})),(0,o.kt)("p",null,"2) Go through the steps to choose your ",(0,o.kt)("strong",{parentName:"p"},"Cluster"),", ",(0,o.kt)("strong",{parentName:"p"},"Pod")," and ",(0,o.kt)("strong",{parentName:"p"},"Container"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cado Import Screen showing the available Kubernetes Engine Clusters",src:r(6477).Z,width:"1908",height:"977"})),(0,o.kt)("p",null,"3) Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cado showing the confirmation screen of a successful Kubernetes Engine container capture",src:r(3252).Z,width:"1920",height:"961"})))}u.isMDXComponent=!0},3252:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/eks3-f52b10739d3c561495c2ba6de22de901.png"},6477:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gke-70741f6b9e5214de567e273d07da87c8.png"},7566:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/import-9f5b10aa0afc6890d56788315308e01b.png"}}]);