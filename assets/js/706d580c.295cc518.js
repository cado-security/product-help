"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(h,i(i({ref:t},l),{},{components:r})):o.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Lightsail",hide_title:!0,sidebar_position:8},i="AWS Lightsail",s={unversionedId:"cado-response/discovery-import/import/aws/aws-lightsail",id:"cado-response/discovery-import/import/aws/aws-lightsail",title:"Lightsail",description:"First create a snapshot of the Lightsail instance you want to import:",source:"@site/docs/cado-response/discovery-import/import/aws/aws-lightsail.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-lightsail",permalink:"/cado-response/discovery-import/import/aws/aws-lightsail",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-lightsail.md",tags:[],version:"current",lastUpdatedAt:1685005558,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:8,frontMatter:{title:"Lightsail",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"AWS Memory Analysis",permalink:"/cado-response/discovery-import/import/aws/memory"},next:{title:"Azure Compute",permalink:"/cado-response/discovery-import/import/azure/azure-compute"}},p={},c=[],l={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-lightsail"},"AWS Lightsail"),(0,n.kt)("p",null,"First create a snapshot of the Lightsail instance you want to import:\n",(0,n.kt)("img",{alt:"Make Lightsail Snapshot",src:r(277).Z,width:"1726",height:"754"})),(0,n.kt)("p",null,"Then select \u201cExport to Amazon EC2\u201d:\n",(0,n.kt)("img",{alt:"Export to EC2",src:r(2938).Z,width:"792",height:"400"})),(0,n.kt)("p",null,"You can then import the EC2 EBS Snapshot as usual in Cado Response, by going to Import > Snapshot.\nIf you need to import the Instance cross-account, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@iggyblob/how-to-transfer-an-amazon-lightsail-instance-to-another-aws-account-56136c407f8a"},"tutorial")," here."))}m.isMDXComponent=!0},2938:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/export-to-ec2-28bf4e19122563214af45e4db3a70dd7.png"},277:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/make-lightsail-snapshot-c1d3631f217aea655bd89c2e7afe23ab.png"}}]);