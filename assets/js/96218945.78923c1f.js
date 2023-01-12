"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Exporting Data",hide_title:!0,sidebar_position:1},s=void 0,i={unversionedId:"cado-response/export/intro",id:"cado-response/export/intro",title:"Exporting Data",description:"Exporting Data from Cado Response",source:"@site/docs/cado-response/export/intro.md",sourceDirName:"cado-response/export",slug:"/cado-response/export/intro",permalink:"/cado-response/export/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/export/intro.md",tags:[],version:"current",lastUpdatedAt:1670231882,formattedLastUpdatedAt:"Dec 5, 2022",sidebarPosition:1,frontMatter:{title:"Exporting Data",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/cado-response/discovery-import/import/on-prem/on-prem-memory"},next:{title:"Investigate",permalink:"/cado-response/investigate/intro"}},p={},c=[{value:"Exporting Data from Cado Response",id:"exporting-data-from-cado-response",level:2},{value:"Exporting Collected Disk Images and Raw Data to Forensic Tools",id:"exporting-collected-disk-images-and-raw-data-to-forensic-tools",level:4},{value:"Exporting Processed Data to SIEM Platforms",id:"exporting-processed-data-to-siem-platforms",level:4}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"exporting-data-from-cado-response"},"Exporting Data from Cado Response"),(0,n.kt)("p",null,"Cado Response is designed to be an open platform to import and export data from."),(0,n.kt)("h4",{id:"exporting-collected-disk-images-and-raw-data-to-forensic-tools"},"Exporting Collected Disk Images and Raw Data to Forensic Tools"),(0,n.kt)("p",null,"We collect:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS EC2 systems in DD format"),(0,n.kt)("li",{parentName:"ul"},"Azure Virtual Machines in VHD format"),(0,n.kt)("li",{parentName:"ul"},"GCP Instances in VMDK format"),(0,n.kt)("li",{parentName:"ul"},"Cado Host Triage captures (and captures from Containers) in a Zip format\nIn to storage (S3 in AWS, Storage in Azure).")),(0,n.kt)("p",null,"These formats can be downloaded from the relevant cloud console and imported into desktop forensic tools such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.magnetforensics.com/products/magnet-axiom/"},"https://www.magnetforensics.com/products/magnet-axiom/")," (See also ",(0,n.kt)("a",{parentName:"li",href:"https://www.magnetforensics.com/docs/axiom/html/Content/en-us/acquire-cloud/acquire-amazon-s3.htm"},"How to import from S3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.x-ways.net/forensics/"},"https://www.x-ways.net/forensics/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.opentext.com/products/encase-forensic"},"https://www.opentext.com/products/encase-forensic"))),(0,n.kt)("h4",{id:"exporting-processed-data-to-siem-platforms"},"Exporting Processed Data to SIEM Platforms"),(0,n.kt)("p",null,"Please see ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/manage/integrations/siem"},"SIEM Integrations >"))))}d.isMDXComponent=!0}}]);