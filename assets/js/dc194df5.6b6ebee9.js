"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1005],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return o?r.createElement(y,i(i({ref:t},d),{},{components:o})):r.createElement(y,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8165:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={title:"Deployment Options",hide_title:!0,sidebar_position:1},i="Cado Platform Deployment Options",l={unversionedId:"cado-response/deploy/intro",id:"cado-response/deploy/intro",title:"Deployment Options",description:"The Cado platform can be deployed in either AWS or Azure.",source:"@site/docs/cado-response/deploy/intro.md",sourceDirName:"cado-response/deploy",slug:"/cado-response/deploy/intro",permalink:"/cado-response/deploy/intro",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/intro.md",tags:[],version:"current",lastUpdatedAt:1700160375,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:1,frontMatter:{title:"Deployment Options",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Key Concepts",permalink:"/cado-response/key-concepts"},next:{title:"Overview",permalink:"/cado-response/deploy/aws/overview"}},p={},s=[{value:"Cross Cloud Collection",id:"cross-cloud-collection",level:2},{value:"Tagging Cado Resources",id:"tagging-cado-resources",level:2},{value:"Terraform",id:"terraform",level:4},{value:"CloudFormation",id:"cloudformation",level:4}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cado-platform-deployment-options"},"Cado Platform Deployment Options"),(0,n.kt)("p",null,"The Cado platform can be deployed in either AWS or Azure."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/deploy/aws/overview"},"Learn how in AWS >"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/deploy/azure/azure-deploy"},"Learn how in Azure >"))),(0,n.kt)("h2",{id:"cross-cloud-collection"},"Cross Cloud Collection"),(0,n.kt)("p",null,'When you deploy Cado in AWS you can import data "cross-cloud" from Azure or GCP. ',(0,n.kt)("strong",{parentName:"p"},"Cross cloud")," means that Cado is deployed in one cloud environment, but imports data from another."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cross Cloud Collection",src:o(4548).Z,width:"1082",height:"583"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions"},"Learn how to set up cross cloud collection from Azure >"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/cado-response/deploy/gcp/gcp-settings"},"Learn how to set up cross cloud collection from GCP>"))),(0,n.kt)("h2",{id:"tagging-cado-resources"},"Tagging Cado Resources"),(0,n.kt)("p",null,"You also have the option to have workers tagged when they are launched.  This can be done by specifying the ",(0,n.kt)("strong",{parentName:"p"},"Tag Key")," and ",(0,n.kt)("strong",{parentName:"p"},"Tag Value")," which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options."),(0,n.kt)("h4",{id:"terraform"},"Terraform"),(0,n.kt)("p",null,'If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform. If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.\nOr, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.\nPlease also note that you will have to run terraform apply again after saving these changes.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'variable "tags" {\n    type = map(string)\n    default = {}\n}\n')),(0,n.kt)("h4",{id:"cloudformation"},"CloudFormation"),(0,n.kt)("p",null,'If you deployed via CloudFormation Template you can apply multiple tags to workers by adding them to the "UserData" section of the CloudFormation Template. Please note that deploying via CloudFormation requires you to specify tags prior to deployment. To add a worker tag add the below to the "UserData" field. '),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"echo CUSTOM_TAG_FOO = BAR  >> /home/admin/processor/first_run.cfg",\n"\\n",\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"CUSTOM_TAG_"),' prefix is required. If you would like to apply a tag with key "FOO" and value "BAR" then your line should appear as it does in the above example.')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},'The last line of the "UserData" field must contain'),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},'"sudo /home/admin/processor/release/finalize.sh --main"\n'))))}c.isMDXComponent=!0},4548:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cross-cloud-d567d021d7d7207ba606f160cfd3bf05.png"}}]);