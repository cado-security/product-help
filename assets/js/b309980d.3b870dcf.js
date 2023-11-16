"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3622],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return o?r.createElement(g,a(a({ref:t},l),{},{components:o})):r.createElement(g,a({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2382:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},a="Google Cloud Kubernetes Engine",s={unversionedId:"cado-response/discovery-import/import/gcp/kubernetes-engine",id:"cado-response/discovery-import/import/gcp/kubernetes-engine",title:"Google Cloud Kubernetes Engine",description:"The Cado platform will collect key logs and forensic artifacts from Google Cloud Kubernetes Engine containers.",source:"@site/docs/cado-response/discovery-import/import/gcp/kubernetes-engine.md",sourceDirName:"cado-response/discovery-import/import/gcp",slug:"/cado-response/discovery-import/import/gcp/kubernetes-engine",permalink:"/cado-response/discovery-import/import/gcp/kubernetes-engine",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/gcp/kubernetes-engine.md",tags:[],version:"current",lastUpdatedAt:1700160375,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:5,frontMatter:{title:"Google Cloud Kubernetes Engine",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/cado-response/discovery-import/import/gcp/storage"},next:{title:"Oracle Cloud Virtual Machines",permalink:"/cado-response/discovery-import/import/oracle/virtual-machine"}},p={},c=[{value:"Import Steps",id:"import-steps",level:2}],l={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-cloud-kubernetes-engine"},"Google Cloud Kubernetes Engine"),(0,n.kt)("p",null,"The Cado platform will collect key logs and forensic artifacts from Google Cloud Kubernetes Engine containers."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images"},"distroless")," image.")),(0,n.kt)("h2",{id:"import-steps"},"Import Steps"),(0,n.kt)("p",null,"1) Go to ",(0,n.kt)("strong",{parentName:"p"},"Import > Cloud")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Import Screen showing the Kubernetes Engine options",src:o(263).Z,width:"842",height:"242"})),(0,n.kt)("p",null,"2) Go through the steps to choose your ",(0,n.kt)("strong",{parentName:"p"},"Cluster"),", ",(0,n.kt)("strong",{parentName:"p"},"Pod")," and ",(0,n.kt)("strong",{parentName:"p"},"Container"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Import Screen showing the available Kubernetes Engine Clusters",src:o(3633).Z,width:"1837",height:"477"})),(0,n.kt)("p",null,"3) Confirm the details and click ",(0,n.kt)("strong",{parentName:"p"},"Start Import")),(0,n.kt)("p",null,"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado showing the confirmation screen of a successful Kubernetes Engine container capture",src:o(1574).Z,width:"1795",height:"698"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To import GKE containers with Cado Response, the ",(0,n.kt)("inlineCode",{parentName:"p"},"iam.serviceAccounts.implicitDelegation")," IAM permission added to the Service Account."),(0,n.kt)("p",{parentName:"admonition"},"Currently, for GKE import Cado only suports GCP accounts configured using Workload Identity Federation. See more in the ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/gcp/gcp-settings#workload-identity-federation"},"GCP Import Settings")," page.")))}d.isMDXComponent=!0},1574:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},3633:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/gke-8354716bca9bc18f39cbf9caa850c641.png"},263:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"}}]);