"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"ECS",hide_title:!0,sidebar_position:4},s="AWS ECS Support",i={unversionedId:"cado-response/discovery-import/import/aws/aws-ecs",id:"cado-response/discovery-import/import/aws/aws-ecs",title:"ECS",description:"The Cado platform will collect key logs and forensic artifacts from AWS ECS systems.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-ecs.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-ecs",permalink:"/cado-response/discovery-import/import/aws/aws-ecs",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-ecs.md",tags:[],version:"current",lastUpdatedAt:1702323671,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:4,frontMatter:{title:"ECS",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AMI, EBS Snapshot and Volume",permalink:"/cado-response/discovery-import/import/aws/aws-ami"},next:{title:"EKS",permalink:"/cado-response/discovery-import/import/aws/aws-eks"}},c={},p=[],l={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-ecs-support"},"AWS ECS Support"),(0,n.kt)("p",null,"The Cado platform will collect key logs and forensic artifacts from AWS ECS systems."),(0,n.kt)("h1",{id:"how-to-import"},"How to Import"),(0,n.kt)("p",null,"1) Go to ",(0,n.kt)("strong",{parentName:"p"},"Import > Cloud"),"\n",(0,n.kt)("img",{alt:"Import ECS 1",src:r(263).Z,width:"842",height:"242"})),(0,n.kt)("p",null,"2) Then select the target Cluster and Task:\n",(0,n.kt)("img",{alt:"Import ECS 2",src:r(6384).Z,width:"1837",height:"500"})),(0,n.kt)("p",null,"3) Then click Acquire Container."),(0,n.kt)("p",null,"4) Confirm details and click ",(0,n.kt)("strong",{parentName:"p"},"Start Import")),(0,n.kt)("p",null,"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Import ECS 3",src:r(4257).Z,width:"1838",height:"397"})),(0,n.kt)("p",null,"For a typical acquisition, import and processing will take a few minutes to complete."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h2",{parentName:"admonition",id:"ecs-import-requirements"},"ECS Import Requirements"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"You\u2019ll need to enable ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html"},"enableExecuteCommand")," on your ECS task, there is no way to add this to an already existing task."),(0,n.kt)("li",{parentName:"ul"},"Currently ECS acquisitions are only available on Linux based containers.")),(0,n.kt)("p",{parentName:"admonition"},"You will receive an error such as this:\n",(0,n.kt)("img",{alt:"ECS Error",src:r(1472).Z,width:"1796",height:"476"})),(0,n.kt)("p",{parentName:"admonition"},"If either:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Your IAM role doesn't have the required ECS permissions for IAM: ")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},'    "ecs:ListClusters",\n    "ecs:DescribeClusters",\n    "ecs:ListServices",\n    "ecs:DescribeServices",\n    "ecs:ListTasks",\n    "ecs:DescribeTasks",\n    "ecs:ExecuteCommand"\n')),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Or the Cluster and Task do not have ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html"},"enableExecuteCommand")," enabled."))))}m.isMDXComponent=!0},6384:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/ecs_2-ddea443833f7163d0055ffe587d79e5c.png"},4257:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/ecs_3-1e10eeaa4f63181ff0cd5875d2e5b8f2.png"},1472:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/ecs_error-0f87edd56a3f111531fa1a915ee6e13b.png"},263:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"}}]);