"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[170],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,g=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return o?r.createElement(g,c(c({ref:t},d),{},{components:o})):r.createElement(g,c({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=o[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},812:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={title:"Cross-Project Setup",hide_title:!0,sidebar_position:5},c="GCP Cross-Project Importing",i={unversionedId:"cado-response/deploy/gcp/gcp-cross-project",id:"cado-response/deploy/gcp/gcp-cross-project",title:"Cross-Project Setup",description:"After creating the service account, enabling Cloud Build and other relevant APIs, and setting up the Primary GCP Project as discussed in the Overview, we can use these principals to import from other GCP projects under the same service acount.",source:"@site/docs/cado-response/deploy/gcp/gcp-cross-project.md",sourceDirName:"cado-response/deploy/gcp",slug:"/cado-response/deploy/gcp/gcp-cross-project",permalink:"/cado-response/deploy/gcp/gcp-cross-project",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/gcp/gcp-cross-project.md",tags:[],version:"current",lastUpdatedAt:1700160375,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:5,frontMatter:{title:"Cross-Project Setup",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Automated Setup",permalink:"/cado-response/deploy/gcp/gcp-auto-setup"},next:{title:"Overview",permalink:"/cado-response/discovery-import/intro"}},s={},p=[{value:"Secondary Project Permissions",id:"secondary-project-permissions",level:2}],d={toc:p};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gcp-cross-project-importing"},"GCP Cross-Project Importing"),(0,n.kt)("p",null,"After creating the service account, enabling Cloud Build and other relevant APIs, and setting up the Primary GCP Project as discussed in the ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/gcp/gcp-settings"},"Overview"),", we can use these principals to import from other GCP projects under the same service acount."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This also allows cross-project importing, meaning images from an instance in ",(0,n.kt)("inlineCode",{parentName:"p"},"Project-A")," can be saved to a bucket in ",(0,n.kt)("inlineCode",{parentName:"p"},"Project-B"))),(0,n.kt)("p",null,"In this example we'll be using ",(0,n.kt)("inlineCode",{parentName:"p"},"cadoserviceaccount@my-project.iam.gserviceaccount.com")," as the service account we've already set up, and ",(0,n.kt)("inlineCode",{parentName:"p"},"01234567890@cloudbuild.gserviceaccount.com")," as the defualt Cloud Build principal for our primary project."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Cloud Build API needs to be enabled in every GCP project from which you want to collect")),(0,n.kt)("h2",{id:"secondary-project-permissions"},"Secondary Project Permissions"),(0,n.kt)("p",null,"In the secondary project, navigate to the ",(0,n.kt)("strong",{parentName:"p"},"IAM and Admin > IAM")," section and select ",(0,n.kt)("strong",{parentName:"p"},"Grant Access"),". Add both the created service account and cloud buid ",(0,n.kt)("inlineCode",{parentName:"p"},"gserviceaccount.com")," emails in the ",(0,n.kt)("strong",{parentName:"p"},"Add Principal")," section and assign them both the ",(0,n.kt)("strong",{parentName:"p"},"Basic -> Editor")," role."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GCP-Cross-Project-IAM",src:o(3415).Z,width:"586",height:"744"})),(0,n.kt)("p",null,"Once added they should both appear as principals in the ",(0,n.kt)("strong",{parentName:"p"},"IAM")," section of that project."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This approach also works for adding permissions to Folders or Organizations. Simply select whichever resource you wish to grant access to in the ",(0,n.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/cloud-resource-manager"},"Manage Resources")," section, and navigate to the ",(0,n.kt)("strong",{parentName:"p"},"IAM and Admin > IAM")," section for that resource.")),(0,n.kt)("h1",{id:"project-selection"},"Project Selection"),(0,n.kt)("p",null,"Now in Cado, if the credentials of the service account are already in the platform after following the ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/gcp/gcp-settings"},"Overview"),", when importing from GCP you will now have a selection of projects to choose from."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GCP-Cado-Cross-Project",src:o(3708).Z,width:"789",height:"403"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This configuration only allows us to import from our Secondary Project to our Primary Project. If we want to be able to import the other way as well, the Seconday Account's Cloud Build ",(0,n.kt)("inlineCode",{parentName:"p"},"gserviceaccount.com")," will need to be granted access to the Primary Account's IAM section and given the ",(0,n.kt)("strong",{parentName:"p"},"Editor")," role."),(0,n.kt)("p",{parentName:"admonition"},"Simply follow the same steps in the ",(0,n.kt)("strong",{parentName:"p"},"Secondary Project Permissions")," section, but using the Secondary Project's principal and adding it to the Primary Project.")))}l.isMDXComponent=!0},3708:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/gcp-cado-project-selection-2762ea12f2f1cc7d5b52ca71dafb1590.png"},3415:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/gcp-cross-project-iam-3349e5d4ad1b5bfbcab5285b531c9d06.png"}}]);