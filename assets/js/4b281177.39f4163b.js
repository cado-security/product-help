"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Logging",hide_title:!0,sidebar_position:4},l="AWS Logging Best Practices",i={unversionedId:"cado-response/deploy/aws/logging",id:"cado-response/deploy/aws/logging",title:"Logging",description:"We recommend customers follow AWS best practices regarding logging (https",source:"@site/docs/cado-response/deploy/aws/logging.md",sourceDirName:"cado-response/deploy/aws",slug:"/cado-response/deploy/aws/logging",permalink:"/cado-response/deploy/aws/logging",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/logging.md",tags:[],version:"current",lastUpdatedAt:1662134394,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:4,frontMatter:{title:"Logging",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"KMS Support",permalink:"/cado-response/deploy/aws/data-encryption/aws-kms"},next:{title:"Load Balancer",permalink:"/cado-response/deploy/aws/networking/aws-load-balancer"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-logging-best-practices"},"AWS Logging Best Practices"),(0,o.kt)("p",null,"We recommend customers follow AWS best practices regarding logging (",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html"},"https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html"),") which includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure CloudTrail is enabled in all regions"),(0,o.kt)("li",{parentName:"ul"},"Ensure CloudTrail log file validation is enabled"),(0,o.kt)("li",{parentName:"ul"},"Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible"),(0,o.kt)("li",{parentName:"ul"},"Ensure CloudTrail trails are integrated with CloudWatch Logs"),(0,o.kt)("li",{parentName:"ul"},"Ensure AWS Config is enabled in all regions"),(0,o.kt)("li",{parentName:"ul"},"Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket"),(0,o.kt)("li",{parentName:"ul"},"Ensure CloudTrail logs are encrypted at rest using KMS CMKs"),(0,o.kt)("li",{parentName:"ul"},"Ensure rotation for customer created CMKs is enabled"),(0,o.kt)("li",{parentName:"ul"},"Ensure VPC flow logging is enabled in all VPCs")))}u.isMDXComponent=!0}}]);