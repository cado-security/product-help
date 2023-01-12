"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={title:"EC2 and EBS",hide_title:!0,sidebar_position:1},i="AWS EC2 and EBS Support",s={unversionedId:"cado-response/discovery-import/import/aws/aws-ec2",id:"cado-response/discovery-import/import/aws/aws-ec2",title:"EC2 and EBS",description:"Cado supports acquisition of EC2 instances. While the project is open, select Import - AWS EC2 Instance. Select the region from which you want to acquire an instance and select the appropriate role. This will populate a list of available instances.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-ec2.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-ec2",permalink:"/cado-response/discovery-import/import/aws/aws-ec2",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-ec2.md",tags:[],version:"current",lastUpdatedAt:1669374622,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:1,frontMatter:{title:"EC2 and EBS",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Memory Analysis",permalink:"/cado-response/discovery-import/import/data-types/memory"},next:{title:"S3",permalink:"/cado-response/discovery-import/import/aws/aws-s3"}},c={},p=[{value:"Capture Options",id:"capture-options",level:2},{value:"Triage Capture",id:"triage-capture",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-ec2-and-ebs-support"},"AWS EC2 and EBS Support"),(0,a.kt)("p",null,"Cado supports acquisition of EC2 instances. While the project is open, select ",(0,a.kt)("em",{parentName:"p"},"Import - AWS EC2 Instance"),". Select the region from which you want to acquire an instance and select the appropriate role. This will populate a list of available instances."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS EC2 Import",src:r(4794).Z,width:"1466",height:"528"})),(0,a.kt)("p",null,"You can filter the list of instances and buckets by instance ID, name, state or public IP address."),(0,a.kt)("p",null,'Click on "Acquire Volume" .'),(0,a.kt)("h2",{id:"capture-options"},"Capture Options"),(0,a.kt)("p",null,'For volume capture, set the options for what data you want to capture, plus any optional labels for chain of custody and hit "Acquire Instance".'),(0,a.kt)("h3",{id:"triage-capture"},"Triage Capture"),(0,a.kt)("p",null,'To perform a faster triage collection on an EC2 instance using Cado Host, select the button "Use Alternate Triage Acquisition". Please note that this requires that SSM be enabled on the target instance. This will also collect memory from Linux systems.'),(0,a.kt)("p",null,"For more information about about what Cado Host collects see ",(0,a.kt)("a",{parentName:"p",href:"/cado-host/artifacts"},"Collected Artifacts")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS EC2 details",src:r(8027).Z,width:"1391",height:"945"})))}u.isMDXComponent=!0},8027:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/aws-ec2-options-a9f65bf8fce0707b794e2cb5ea737413.png"},4794:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/aws-ec2-f83795014e0829fbfa113876e573214a.png"}}]);