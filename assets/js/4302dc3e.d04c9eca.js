"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},i="Azure Kubernetes Service",s={unversionedId:"cado-response/discovery-import/import/azure/azure-aks",id:"cado-response/discovery-import/import/azure/azure-aks",title:"Azure Kubernetes Service",description:"The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers.",source:"@site/docs/cado-response/discovery-import/import/azure/azure-aks.md",sourceDirName:"cado-response/discovery-import/import/azure",slug:"/cado-response/discovery-import/import/azure/azure-aks",permalink:"/cado-response/discovery-import/import/azure/azure-aks",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/azure/azure-aks.md",tags:[],version:"current",lastUpdatedAt:1702323671,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:3,frontMatter:{title:"Azure Kubernetes Service",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure Storage",permalink:"/cado-response/discovery-import/import/azure/azure-storage"},next:{title:"Google Compute Engine",permalink:"/cado-response/discovery-import/import/gcp/engine-instance"}},p={},c=[{value:"Import Steps",id:"import-steps",level:2}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"azure-kubernetes-service"},"Azure Kubernetes Service"),(0,n.kt)("p",null,"The Cado platform will collect key logs and forensic artifacts from Azure Kubernetes Service containers."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images"},"distroless")," image.")),(0,n.kt)("h2",{id:"import-steps"},"Import Steps"),(0,n.kt)("p",null,"1) Go to ",(0,n.kt)("strong",{parentName:"p"},"Import > Cloud")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Import Screen showing the AKS options",src:r(263).Z,width:"842",height:"242"})),(0,n.kt)("p",null,"2) Choose the Azure Credenitals configured in ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions"},"Azure > Cross Subscription and Tenancy")),(0,n.kt)("p",null,"3) Choose the resource group the AKS cluster is attached to."),(0,n.kt)("p",null,"4) Go through the steps to choose your ",(0,n.kt)("strong",{parentName:"p"},"Cluster"),", ",(0,n.kt)("strong",{parentName:"p"},"Pod")," and ",(0,n.kt)("strong",{parentName:"p"},"Container"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Import Screen showing the available AKS Clusters",src:r(2693).Z,width:"1837",height:"497"})),(0,n.kt)("p",null,"5) Confirm the details and click ",(0,n.kt)("strong",{parentName:"p"},"Start Import")),(0,n.kt)("p",null,"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado showing the confirmation screen of a successful AKS container capture",src:r(1574).Z,width:"1795",height:"698"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h3",{parentName:"admonition",id:"private-cluster-support"},"Private Cluster Support"),(0,n.kt)("p",{parentName:"admonition"},"As of release v2.31.0, the Cado platform now supports capture of AKS Private Clusters. It should be noted that the Cado platform\nuses the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/aks/command-invoke"},"Azure Command Invoke APIs")," to achieve this functionality."),(0,n.kt)("p",{parentName:"admonition"},"There are two main caveats to this method:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"The process is consideribly slower than capturing a Public Cluster"),(0,n.kt)("li",{parentName:"ol"},"The Azure API will spin up a pod inside the cluster to execute Cado Host, make sure that there are enough nodes and resources in your cluster to schedule this command pod.")),(0,n.kt)("p",{parentName:"admonition"},"The newly created pod will shutdown and remove itself after 1 hour.")))}u.isMDXComponent=!0},2693:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/aks-a8db98692b9b481c6fc41df7f42005c1.png"},1574:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},263:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"}}]);