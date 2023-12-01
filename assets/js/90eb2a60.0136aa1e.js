"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={title:"Summary",hide_title:!0,sidebar_position:1},i="Cado Host",s={unversionedId:"cado-host/intro",id:"cado-host/intro",title:"Summary",description:"Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.",source:"@site/docs/cado-host/intro.md",sourceDirName:"cado-host",slug:"/cado-host/intro",permalink:"/cado-host/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/intro.md",tags:[],version:"current",lastUpdatedAt:1701461172,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{title:"Summary",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/cado-response/community-edition/community-intro"},next:{title:"Deploying",permalink:"/cado-host/deploy"}},c={},l=[],p={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cado-host"},"Cado Host"),(0,n.kt)("p",null,"Cado Host is a solution to acquire forensic artifacts from systems and place them into cloud storage, enabling you to perform a quick triage investigation of a target system.\nData is collected and stored in a zip file that can be automatically uploaded to Amazon AWS, Microsoft Azure or Google Cloud Storage. It also supports storing captured files locally.\nOnce collected, these artifacts can be imported, processed and analysed in the Cado Response platform."),(0,n.kt)("p",null,"You can also use Cado Host with the --single_file_unzipped parameter - this may be a good option if you do not have direct access to Azure as Cado Response will generate the credentials at Import > Forensic Artifacts."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Host Single File",src:r(8503).Z,width:"1179",height:"661"})),(0,n.kt)("p",null,"Cado Host binaries are available for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microsoft Windows: 7, 8.1, 10 (1607+) and Microsoft Windows Server Server 2012 R2+"),(0,n.kt)("li",{parentName:"ul"},"Linux: Debian: 9+, Ubuntu: 16.04+, Fedora: 29+, RHEL: 6+, openSUSE: 15+, SUSE Enterprise (SLES): 12 SP2+, Alpine: 3.10+"),(0,n.kt)("li",{parentName:"ul"},"MacOS (Intel based only): 10.13+")),(0,n.kt)("p",null,"For older Operating systems we recommend instead acquiring with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tclahr/uac"},"UAC")," for Linux"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cado-security/Cado-Batch"},"Cado Batch")," for Windows")))}u.isMDXComponent=!0},8503:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/cado-host-single-file-5b0898f9ce1f4a6d05662bb36c5d3ba2.png"}}]);