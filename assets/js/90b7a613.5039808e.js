"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8804],{23198:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(74848),r=t(28453);const i={title:"Adding Azure subscriptions to Azure/AWS/GCP",hide_title:!0,sidebar_position:7},n="How to add Azure Subscriptions to Azure, AWS, or GCP",a={id:"cado/deploy/cross/adding-azure",title:"Adding Azure subscriptions to Azure/AWS/GCP",description:"To allow Cado to access data from an Azure subscription, you must register an application within the target subscription. Follow the steps below to set up cross-subscription access. Ensure you have permission to register applications and create IAM roles.",source:"@site/docs/cado/deploy/cross/adding-azure.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/adding-azure",permalink:"/cado/deploy/cross/adding-azure",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/adding-azure.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:7,frontMatter:{title:"Adding Azure subscriptions to Azure/AWS/GCP",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Access an AWS account with via AMI Import",permalink:"/cado/deploy/cross/skip-role"},next:{title:"Import from subscriptions and tenants in Azure",permalink:"/cado/deploy/cross/azure-cross-tenancy-subscriptions"}},c={},d=[{value:"Steps to Add an Azure Subscription",id:"steps-to-add-an-azure-subscription",level:3},{value:"Cross-Cloud Import Diagram",id:"cross-cloud-import-diagram",level:3}];function l(e){const s={a:"a",br:"br",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-to-add-azure-subscriptions-to-azure-aws-or-gcp",children:"How to add Azure Subscriptions to Azure, AWS, or GCP"}),"\n",(0,o.jsx)(s.p,{children:"To allow Cado to access data from an Azure subscription, you must register an application within the target subscription. Follow the steps below to set up cross-subscription access. Ensure you have permission to register applications and create IAM roles."}),"\n",(0,o.jsx)(s.h3,{id:"steps-to-add-an-azure-subscription",children:"Steps to Add an Azure Subscription"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Log in to the Target Azure Subscription"}),(0,o.jsx)(s.br,{}),"\n","Start by logging into the Azure subscription where you want Cado to collect evidence."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Register a New Application"}),(0,o.jsx)(s.br,{}),"\n","Follow ",(0,o.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app",children:"Microsoft's instructions"})," to begin the process of registering a new application in the Azure subscription."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Configure the Application for Cado"}),(0,o.jsx)(s.br,{}),"\n","Once the application is registered, configure it for Cado by following the ",(0,o.jsx)(s.a,{href:"/cado/deploy/cross/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions",children:"Cado documentation on setting up cross-tenancy/subscription acquisitions"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Add Application Details to Cado"}),(0,o.jsx)(s.br,{}),"\n","After configuring the application, add the required details to the Cado platform by following the instructions in the ",(0,o.jsx)(s.a,{href:"/cado/deploy/cross/azure-cross-tenancy-subscriptions#registering-credentials-within-cado",children:"Cado documentation"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Verify Access in Cado"}),(0,o.jsx)(s.br,{}),"\n","To ensure that Cado can access resources in the Azure subscription:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Open an investigation in Cado."}),"\n",(0,o.jsxs)(s.li,{children:["Select ",(0,o.jsx)(s.strong,{children:"Import"})," > ",(0,o.jsx)(s.strong,{children:"Cloud"}),"."]}),"\n",(0,o.jsx)(s.li,{children:"Choose the Azure role you created."}),"\n",(0,o.jsx)(s.li,{children:"Confirm that the resources available for import are visible."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"cross-cloud-import-diagram",children:"Cross-Cloud Import Diagram"}),"\n",(0,o.jsx)(s.p,{children:"For a visual representation of how cross-cloud imports from AWS into Azure work, refer to the diagram below:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Azure Cross",src:t(63755).A+"",width:"1896",height:"1056"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},63755:(e,s,t)=>{t.d(s,{A:()=>o});const o=t.p+"assets/images/azure-cross-6f16704f6890ab992de046ba5ff6b986.png"},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function n(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);