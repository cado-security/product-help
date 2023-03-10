"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(r),h=a,u=l["".concat(p,".").concat(h)]||l[h]||m[h]||n;return r?o.createElement(u,s(s({ref:t},d),{},{components:r})):o.createElement(u,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},2576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={title:"AMI and EBS Snapshot",hide_title:!0,sidebar_position:3},s="AWS AMI and EBS Snapshot support",i={unversionedId:"cado-response/discovery-import/import/aws/aws-ami",id:"cado-response/discovery-import/import/aws/aws-ami",title:"AMI and EBS Snapshot",description:"The Cado platform supports acquiring AMIs or EBS Snapshots of machines, either by using a cross account role, or directly sharing the image/snapshot with the Cado AWS account.  Whether importing an AMI or an EBS Snapshot, the AMI and snapshot need to be in the same AWS Region as the Cado instance.  Also note that you can not share AMIs that are backed by snapshots that are encrypted with the default AWS managed key. For more information, see Share an Amazon EBS snapshot.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-ami.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-ami",permalink:"/cado-response/discovery-import/import/aws/aws-ami",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-ami.md",tags:[],version:"current",lastUpdatedAt:1667941408,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:3,frontMatter:{title:"AMI and EBS Snapshot",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"S3",permalink:"/cado-response/discovery-import/import/aws/aws-s3"},next:{title:"ECS",permalink:"/cado-response/discovery-import/import/aws/aws-ecs"}},p={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-ami-and-ebs-snapshot-support"},"AWS AMI and EBS Snapshot support"),(0,a.kt)("p",null,"The Cado platform supports acquiring AMIs or EBS Snapshots of machines, either by using a cross account role, or directly sharing the image/snapshot with the Cado AWS account.  Whether importing an AMI or an EBS Snapshot, the AMI and snapshot need to be in the same AWS Region as the Cado instance.  Also note that you can not share AMIs that are backed by snapshots that are encrypted with the default AWS managed key. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html"},"Share an Amazon EBS snapshot"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS AMI",src:r(3637).Z,width:"1536",height:"623"})))}m.isMDXComponent=!0},3637:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/aws-ami-001d85902fd9d54021d092f850d31158.png"}}]);