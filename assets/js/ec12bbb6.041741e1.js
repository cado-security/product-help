"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3710],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(o),u=n,f=l["".concat(p,".").concat(u)]||l[u]||d[u]||i;return o?r.createElement(f,a(a({ref:t},m),{},{components:o})):r.createElement(f,a({ref:t},m))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}l.displayName="MDXCreateElement"},2128:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={title:"Overview",hide_title:!0,sidebar_position:1},a="Importing Data",s={unversionedId:"cado-response/discovery-import/import/intro",id:"cado-response/discovery-import/import/intro",title:"Overview",description:"There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on Processing Settings for more details.",source:"@site/docs/cado-response/discovery-import/import/intro.md",sourceDirName:"cado-response/discovery-import/import",slug:"/cado-response/discovery-import/import/intro",permalink:"/cado-response/discovery-import/import/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/intro.md",tags:[],version:"current",lastUpdatedAt:1699527990,formattedLastUpdatedAt:"Nov 9, 2023",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Readiness (Beta)",permalink:"/cado-response/discovery-import/readiness"},next:{title:"Import from Cloud",permalink:"/cado-response/discovery-import/import/import-from-cloud"}},p={},c=[{value:"Importing from Cloud Services",id:"importing-from-cloud-services",level:3},{value:"Importing from XDR",id:"importing-from-xdr",level:3},{value:"Importing from Cado Host",id:"importing-from-cado-host",level:3},{value:"Importing from URL",id:"importing-from-url",level:3}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"importing-data"},"Importing Data"),(0,n.kt)("p",null,"There are a number of options for importing data into the Cado platform. Once you select the data you would like to import, the Cado platform begins processing the data based on the platforms Processing Settings.  Check out our help section on ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/manage/workers#processing"},"Processing Settings"))," for more details."),(0,n.kt)("p",null,"Cado supports a wide range of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/discovery-import/import/data-types/filetypes"},"file types"))," across a number of  ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/discovery-import/import/data-types/import-types"},"cloud services"))," which can be imported.  To begin importing data, you simply select a Project and click the ",(0,n.kt)("strong",{parentName:"p"},"Import")," button "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import Button",src:o(6848).Z,width:"351",height:"138"})),(0,n.kt)("p",null,"Based on the evidence you would like to import, follow the on-screen instructions and select your source."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import Data",src:o(263).Z,width:"842",height:"242"})),(0,n.kt)("h3",{id:"importing-from-cloud-services"},"Importing from Cloud Services"),(0,n.kt)("p",null,"You can import evidence from cloud services across AWS, Azure and GCP, provided you have the correct credentials entered into the system, and your role has been assigned access to those credentials. ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/discovery-import/import/import-from-cloud"},"Learn more"))),(0,n.kt)("h3",{id:"importing-from-xdr"},"Importing from XDR"),(0,n.kt)("p",null,"You can import data into the Cado platform via an eXtended Detection and Response (XDR) system. Currently Cado supports importing from SentinelOne. For more infomation about setting up this integration see the ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/manage/integrations/xdr/sentinelone"},"SentinelOne Integration Setup page")),(0,n.kt)("p",null,"Once the integration is set up, from within a project click ",(0,n.kt)("strong",{parentName:"p"},"Import from XDR")),(0,n.kt)("p",null,"Then choose the XDR Platform you have set up, and click ",(0,n.kt)("em",{parentName:"p"},"Continue")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Choose XDR Platform",src:o(8061).Z,width:"957",height:"197"})),(0,n.kt)("p",null,"Then search for or select the endpoint from which you want to collect, and click ",(0,n.kt)("em",{parentName:"p"},"Continue")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import XDR Endpoints",src:o(953).Z,width:"1847",height:"408"})),(0,n.kt)("p",null,"Finally, confirm your selections and click ",(0,n.kt)("em",{parentName:"p"},"Start Import")),(0,n.kt)("h3",{id:"importing-from-cado-host"},"Importing from Cado Host"),(0,n.kt)("p",null,"The Cado platform can use Cado Host to acquire forensic artifacts from on-premises system for analysis in the cloud.\nIt can also generate credentials for Cado Host to upload evidence, such as a previously collected disk image."),(0,n.kt)("p",null,"For more information see the ",(0,n.kt)("a",{parentName:"p",href:"/cado-host/intro"},"Cado Host Documentation")),(0,n.kt)("h3",{id:"importing-from-url"},"Importing from URL"),(0,n.kt)("p",null,"You can import supported ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/discovery-import/import/data-types/filetypes"},"file types")," from a URL where you are storing forensic artifacts collected from on-premises systems."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"On-Premises URL",src:o(8731).Z,width:"953",height:"181"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"During the EC2 Import process, an i3.4xlarge worker instance is deployed to allow for proper disk acquisition. During the Azure Instance Import process, a Standard_D8ds_v4 worker instance is deployed to allow for proper disk acquisition. You can configure the size of the worker instance in the Cado platform under ",(0,n.kt)("strong",{parentName:"p"},"Settings/Processing"),". This worker is spun down once the target disk is acquired.")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"By default when processing archive files Cado processes two layers of recursion and twenty folder branches. This provides faster processing but there is a slight risk that some malicious files or activites may be missed."),(0,n.kt)("p",{parentName:"admonition"},"You can configure this at ",(0,n.kt)("strong",{parentName:"p"},"Settings/Processing Speed")," but increasing these numbers will increase the time taken to process disk images with archives."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"Processing Speed",src:o(9247).Z,width:"1256",height:"547"}))))}d.isMDXComponent=!0},6848:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/import-button-798e13611cef2958b7fd5bbfc5c3ff91.png"},263:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},8731:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/on-premises-url-5f43b688a1a7f0eb65001e51adb5744c.png"},9247:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/settings-processing-speed-b108aef674310ab3f0119abaf88f8c92.png"},8061:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/xdr-import-2-5b5410836dbf05bb46ef55a7674385a2.png"},953:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/xdr-import-3-94a70eb2c01cb4fad976f534c453edb3.png"}}]);