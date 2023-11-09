"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8399],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Worker Management",hide_title:!0,sidebar_position:6},s="Worker Management",i={unversionedId:"cado-response/manage/workers",id:"cado-response/manage/workers",title:"Worker Management",description:"This section covers the options available for managing workers spun up during processing jobs. These settings can be accessed under Settings > General Settings",source:"@site/docs/cado-response/manage/workers.md",sourceDirName:"cado-response/manage",slug:"/cado-response/manage/workers",permalink:"/cado-response/manage/workers",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/workers.md",tags:[],version:"current",lastUpdatedAt:1699527990,formattedLastUpdatedAt:"Nov 9, 2023",sidebarPosition:6,frontMatter:{title:"Worker Management",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CrowdStrike",permalink:"/cado-response/manage/integrations/xdr/crowdstrike"},next:{title:"Data Management",permalink:"/cado-response/manage/data"}},p={},c=[{value:"Processing",id:"processing",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"worker-management"},"Worker Management"),(0,o.kt)("p",null,"This section covers the options available for managing workers spun up during processing jobs. These settings can be accessed under ",(0,o.kt)("strong",{parentName:"p"},"Settings > General Settings")),(0,o.kt)("h2",{id:"processing"},"Processing"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Maximum Workers")," sets the maximum number of workers (AWS EC2 Instances) the system will start for processing. The platform will wait to launch new workers if this limit is exceeded. The default value is 20.  The platform will also back off and wait if the AWS limits for the maximum number of VCPUs in a region have been exceeded."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Worker Instance Size")," limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space.  "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In AWS, for most use cases, you should keep the Worker Instance Size set to a Storage Optimized instance, like an ",(0,o.kt)("inlineCode",{parentName:"p"},"i3.4xlarge"))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Worker Shutdown Wait")," is the number of seconds after a worker finishes processing a pipeline before it should shutdown. If nothing is set, the default is 5 minutes (300 seconds)."))}u.isMDXComponent=!0}}]);