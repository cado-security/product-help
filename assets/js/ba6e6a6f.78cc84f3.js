"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Sep 23 2022 - AWS Role Update",hide_title:!0,sidebar_position:1},i="AWS Role Update",l={unversionedId:"support-bulletins/role-update",id:"support-bulletins/role-update",title:"Sep 23 2022 - AWS Role Update",description:"On Sep 21st, 2022 AWS announced a change with immediate effect to AWS roles that affects the operation of the Cado platform. These new changes mean that any Cado installation deployed after June 30th will no longer operate correctly, including not being able to initialize new workers for data acquisition or processing.",source:"@site/docs/support-bulletins/092322-role-update.md",sourceDirName:"support-bulletins",slug:"/support-bulletins/role-update",permalink:"/support-bulletins/role-update",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/support-bulletins/092322-role-update.md",tags:[],version:"current",lastUpdatedAt:1688634381,formattedLastUpdatedAt:"Jul 6, 2023",sidebarPosition:1,frontMatter:{title:"Sep 23 2022 - AWS Role Update",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Community Edition EULA",permalink:"/eula/community-eula"},next:{title:"Release Notes",permalink:"/release-notes/"}},s={},p=[{value:"Instructions for manually updating your system",id:"instructions-for-manually-updating-your-system",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-role-update"},"AWS Role Update"),(0,o.kt)("p",null,"On Sep 21st, 2022 ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/announcing-an-update-to-iam-role-trust-policy-behavior/"},"AWS announced a change with immediate effect to AWS roles")," that affects the operation of the Cado platform. These new changes mean that ",(0,o.kt)("strong",{parentName:"p"},"any Cado installation deployed after June 30th will no longer operate correctly"),", including not being able to initialize new workers for data acquisition or processing."),(0,o.kt)("p",null,"Installations deployed prior to June 30th will continue to function, and Cado plans to issue an update during the week commencing Sep 26th, 2022 that will fix the issue. In the meantime - if needed - there are manual steps you can take in order to ensure that your Cado platform continues to function properly. These are detailed below."),(0,o.kt)("p",null,"We are working with AWS to prevent the recurrence of unexpected changes."),(0,o.kt)("h2",{id:"instructions-for-manually-updating-your-system"},"Instructions for manually updating your system"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Cado Response instance, navigate to ",(0,o.kt)("em",{parentName:"li"},"Settings > Cloud"),' and copy the value in the "AWS Role" box:')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Role",src:n(6531).Z,width:"937",height:"160"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the AWS IAM console, navigate to your Cado Response role"),(0,o.kt)("li",{parentName:"ol"},'Select the "Trust relationships" tab'),(0,o.kt)("li",{parentName:"ol"},'Select "Edit trust policy". Yours should currently look like this:')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Role",src:n(6600).Z,width:"1590",height:"499"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Add a new line inside the "Principal" block with the text ',(0,o.kt)("inlineCode",{parentName:"li"},'\u201cAWS\u201d:"<ARN of your Cado Response role>\u201d')," ( you can paste in your Cado Response role here ).")),(0,o.kt)("p",null,"Your new Trust Policy will look like this, with your ARN in the designated place"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Role",src:n(3992).Z,width:"1651",height:"540"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'Select "Update Policy"')))}c.isMDXComponent=!0},6531:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aws-role-cd08b26ec325b76b21b6474cebd655ce.png"},3992:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/trust-policy-after-fc5070acc2b0cc2517b173411012c544.png"},6600:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/trust-policy-before-40a6bce9fb9a90bb0aa8630168ef6b91.png"}}]);