"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5357],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Large EC2 Imports",hide_title:!0,sidebar_position:5},i="Importing Large AWS EC2 Instances",s={unversionedId:"cado-response/deploy/aws/performance-resiliency/large-aws-imports",id:"cado-response/deploy/aws/performance-resiliency/large-aws-imports",title:"Large EC2 Imports",description:"Importing AWS EC2 instances with disks over 500GB can start to reach limitations in AWS.",source:"@site/docs/cado-response/deploy/aws/performance-resiliency/large-aws-imports.md",sourceDirName:"cado-response/deploy/aws/performance-resiliency",slug:"/cado-response/deploy/aws/performance-resiliency/large-aws-imports",permalink:"/cado-response/deploy/aws/performance-resiliency/large-aws-imports",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/performance-resiliency/large-aws-imports.md",tags:[],version:"current",lastUpdatedAt:1662134394,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:5,frontMatter:{title:"Large EC2 Imports",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Backups and Recovery",permalink:"/cado-response/deploy/aws/performance-resiliency/aws-backups"},next:{title:"High Availability",permalink:"/cado-response/deploy/aws/performance-resiliency/high-availability"}},p={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"importing-large-aws-ec2-instances"},"Importing Large AWS EC2 Instances"),(0,a.kt)("p",null,"Importing AWS EC2 instances with disks over 500GB can start to reach limitations in AWS.\nTo speed up the importing of very large instances, we recommend:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating a Snapshot of the disk, then enabling ",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html"},"Fast Snapshot Restore")," on it. You will need to wait for up to an hour for the Fast Snapshot Restore to be enabled, then you can import the Snapshot (snap-xxx)."),(0,a.kt)("li",{parentName:"ul"},"Another option is to change the instance type of the target system to a larger system. When acquiring, we match the instance type of the target system for compatability. Larger instances can have higher disk, network and CPU limits.")))}m.isMDXComponent=!0}}]);