"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(h,l(l({ref:t},s),{},{components:r})):o.createElement(h,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"Google Cloud Credentials",hide_title:!0,sidebar_position:5},l="Creating Google Cloud Credentials",i={unversionedId:"cado-host/google-credentials",id:"cado-host/google-credentials",title:"Google Cloud Credentials",description:"To create secure credentials for Google Cloud Storage, perform the following.  You can also watch the embedded video, which walks through the process.\u200b",source:"@site/docs/cado-host/google-credentials.md",sourceDirName:"cado-host",slug:"/cado-host/google-credentials",permalink:"/cado-host/google-credentials",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/google-credentials.md",tags:[],version:"current",lastUpdatedAt:1629989395,formattedLastUpdatedAt:"Aug 26, 2021",sidebarPosition:5,frontMatter:{title:"Google Cloud Credentials",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Azure Credentials",permalink:"/cado-host/azure-credentials"},next:{title:"FAQs",permalink:"/troubleshooting/faq"}},c={},u=[{value:"Creating a Bucket",id:"creating-a-bucket",level:2},{value:"Creating Credentials",id:"creating-credentials",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-google-cloud-credentials"},"Creating Google Cloud Credentials"),(0,n.kt)("p",null,"To create secure credentials for Google Cloud Storage, perform the following.  You can also watch the embedded video, which walks through the process.\u200b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a Bucket"),(0,n.kt)("li",{parentName:"ul"},"Create credentials for write-only access to the bucket")),(0,n.kt)("iframe",{width:"100%",height:"536",src:"https://www.youtube.com/embed/VQxzJ1V8ArE",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),(0,n.kt)("h2",{id:"creating-a-bucket"},"Creating a Bucket"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Storage Browser."),(0,n.kt)("li",{parentName:"ul"},"Click Create Bucket."),(0,n.kt)("li",{parentName:"ul"},"Create the bucket using your desired settings.")),(0,n.kt)("h2",{id:"creating-credentials"},"Creating Credentials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to Storage Settings."),(0,n.kt)("li",{parentName:"ul"},"Select your project, then select Interoperability."),(0,n.kt)("li",{parentName:"ul"},"Click Create a Key for a service Account."),(0,n.kt)("li",{parentName:"ul"},"Click Create a New Account."),(0,n.kt)("li",{parentName:"ul"},"Type the name of the account, then grant the Storage Object Creator permission."),(0,n.kt)("li",{parentName:"ul"},"This grants permission to write objects to a storage bucket, but not list or download objects."),(0,n.kt)("li",{parentName:"ul"},"Click through to create the account, and copy the Secret Key and Access Key.")),(0,n.kt)("p",null,"In the end, you are ready to go when you have:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Access Key"),(0,n.kt)("li",{parentName:"ol"},"The Secret Key"),(0,n.kt)("li",{parentName:"ol"},"The Bucket Name")))}d.isMDXComponent=!0}}]);