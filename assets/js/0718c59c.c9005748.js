"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[170],{2698:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(5893),r=t(1151);const s={title:"Cross-Project Setup",hide_title:!0,sidebar_position:5},c="GCP Cross-Project Importing",i={id:"cado-response/deploy/gcp/gcp-cross-project",title:"Cross-Project Setup",description:"After creating the service account, enabling Cloud Build and other relevant APIs, and setting up the Primary GCP Project as discussed in the Overview, we can use these principals to import from other GCP projects under the same service account.",source:"@site/docs/cado-response/deploy/gcp/gcp-cross-project.md",sourceDirName:"cado-response/deploy/gcp",slug:"/cado-response/deploy/gcp/gcp-cross-project",permalink:"/cado-response/deploy/gcp/gcp-cross-project",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/gcp/gcp-cross-project.md",tags:[],version:"current",lastUpdatedAt:1722935768,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:5,frontMatter:{title:"Cross-Project Setup",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Platform Encryption",permalink:"/cado-response/deploy/gcp/data-encryption-overview"},next:{title:"Kubernetes Deployments",permalink:"/cado-response/deploy/kubernetes"}},a={},d=[{value:"Secondary Project Permissions",id:"secondary-project-permissions",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"gcp-cross-project-importing",children:"GCP Cross-Project Importing"}),"\n",(0,n.jsxs)(o.p,{children:["After creating the service account, enabling Cloud Build and other relevant APIs, and setting up the Primary GCP Project as discussed in the ",(0,n.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings",children:"Overview"}),", we can use these principals to import from other GCP projects under the same service account."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["This also allows cross-project importing, meaning images from an instance in ",(0,n.jsx)(o.code,{children:"Project-A"})," can be saved to a bucket in ",(0,n.jsx)(o.code,{children:"Project-B"})]})}),"\n",(0,n.jsxs)(o.p,{children:["In this example we'll be using ",(0,n.jsx)(o.code,{children:"cadoserviceaccount@my-project.iam.gserviceaccount.com"})," as the service account we've already set up, and ",(0,n.jsx)(o.code,{children:"0123456789-compute0@developer.gserviceaccount.com"})," as the default Compute Engine principal for our primary project."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Cloud Build API needs to be enabled in every GCP project from which you want to collect"})}),"\n",(0,n.jsx)(o.h2,{id:"secondary-project-permissions",children:"Secondary Project Permissions"}),"\n",(0,n.jsxs)(o.p,{children:["In the secondary project, navigate to the ",(0,n.jsx)(o.strong,{children:"IAM and Admin > IAM"})," section and select ",(0,n.jsx)(o.strong,{children:"Grant Access"}),". Add both the created service account and Compute Engine ",(0,n.jsx)(o.code,{children:"gserviceaccount.com"})," emails in the ",(0,n.jsx)(o.strong,{children:"Add Principal"})," section and assign them both the ",(0,n.jsx)(o.strong,{children:"Custom -> Cado Role"})," role. More info on the ",(0,n.jsx)(o.strong,{children:"Cado Role"})," can be found ",(0,n.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings###The-Cado-Role",children:"here"})]}),"\n",(0,n.jsx)("img",{src:"/img/gcp-crossproject-granting.png",height:"800",width:"600"}),"\n",(0,n.jsxs)(o.p,{children:["Once added they should both appear as principals in the ",(0,n.jsx)(o.strong,{children:"IAM"})," section of that project."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["This approach also works for adding permissions to Folders or Organizations. Simply select whichever resource you wish to grant access to in the ",(0,n.jsx)(o.a,{href:"https://console.cloud.google.com/cloud-resource-manager",children:"Manage Resources"})," section, and navigate to the ",(0,n.jsx)(o.strong,{children:"IAM and Admin > IAM"})," section for that resource."]})}),"\n",(0,n.jsx)(o.h1,{id:"project-selection",children:"Project Selection"}),"\n",(0,n.jsxs)(o.p,{children:["Now in Cado, if the credentials of the service account are already in the platform after following the ",(0,n.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings",children:"Overview"}),", when importing from GCP you will now have a selection of projects to choose from."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"GCP-Cado-Cross-Project",src:t(3708).Z+"",width:"789",height:"403"})}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsxs)(o.p,{children:["This configuration only allows us to import from our Secondary Project to our Primary Project. If we want to be able to import the other way as well, the Secondary Account's Cloud Build ",(0,n.jsx)(o.code,{children:"gserviceaccount.com"})," will need to be granted access to the Primary Account's IAM section and given the ",(0,n.jsx)(o.strong,{children:"Cado Role"})," role."]}),(0,n.jsxs)(o.p,{children:["Simply follow the same steps in the ",(0,n.jsx)(o.strong,{children:"Secondary Project Permissions"})," section, but using the Secondary Project's principal and adding it to the Primary Project."]})]})]})}function l(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3708:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/gcp-cado-project-selection-2762ea12f2f1cc7d5b52ca71dafb1590.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>c});var n=t(7294);const r={},s=n.createContext(r);function c(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);