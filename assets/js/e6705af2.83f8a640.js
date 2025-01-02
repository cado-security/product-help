"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[637],{65341:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=o(74848),s=o(28453);const t={title:"Cross-cloud vs individual deployments",hide_title:!0,sidebar_position:13},r="What are the considerations for Cross-Cloud vs Individual deployments",a={id:"cado/deploy/cross/cross_vs_individual",title:"Cross-cloud vs individual deployments",description:"Cado offers flexibility when deploying across multiple cloud environments.",source:"@site/docs/cado/deploy/cross/cross_vs_individual.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/cross_vs_individual",permalink:"/cado/deploy/cross/cross_vs_individual",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/cross_vs_individual.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:13,frontMatter:{title:"Cross-cloud vs individual deployments",hide_title:!0,sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Adding GCP Projects to Azure/AWS",permalink:"/cado/deploy/cross/adding-gcp"},next:{title:"Log in",permalink:"/cado/deploy/logging-in"}},d={},l=[{value:"Key Considerations",id:"key-considerations",level:2},{value:"Infrastructure Costs",id:"infrastructure-costs",level:3},{value:"Network Set-Up Complexity",id:"network-set-up-complexity",level:3},{value:"Proxy Support",id:"proxy-support",level:3},{value:"Proof of Value or Trial Deployments",id:"proof-of-value-or-trial-deployments",level:3},{value:"Data Transfer Costs and Speeds",id:"data-transfer-costs-and-speeds",level:3},{value:"Data Residency Requirements",id:"data-residency-requirements",level:3},{value:"Maintenance and Management",id:"maintenance-and-management",level:3},{value:"Licensing",id:"licensing",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"what-are-the-considerations-for-cross-cloud-vs-individual-deployments",children:"What are the considerations for Cross-Cloud vs Individual deployments"}),"\n",(0,i.jsx)(n.p,{children:"Cado offers flexibility when deploying across multiple cloud environments."}),"\n",(0,i.jsx)(n.p,{children:"There are two primary deployment models available:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Centralized Deployment in a Single Cloud (Cross-Cloud Access)"}),": Deploy Cado in one cloud environment (AWS, Azure, or GCP) and configure cross-cloud access to communicate with other cloud environments."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Individual Deployments in Each Cloud"}),": Deploy separate instances of Cado in AWS, Azure, and GCP."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This document outlines key considerations to help you choose between these two deployment strategies."}),"\n",(0,i.jsx)(n.h2,{id:"key-considerations",children:"Key Considerations"}),"\n",(0,i.jsx)(n.h3,{id:"infrastructure-costs",children:"Infrastructure Costs"}),"\n",(0,i.jsxs)(n.p,{children:["While deploying Cado in multiple cloud environments incurs additional infrastructure costs, these are relatively small. For more information on pricing, please refer to our ",(0,i.jsx)(n.a,{href:"/cado/manage/cost-management",children:"pricing documentation page"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"network-set-up-complexity",children:"Network Set-Up Complexity"}),"\n",(0,i.jsx)(n.p,{children:"The primary consideration when deciding between cross-cloud and individual deployments is the complexity of your network set-up. If you have a simple network configuration that enables seamless communication across all your cloud environments from a single location, a cross-cloud deployment is likely the best option."}),"\n",(0,i.jsx)(n.p,{children:"However, if your network is more complex, with strict security boundaries or multiple network zones, individual deployments in each cloud might be more appropriate to avoid complications in setting up cross-cloud access."}),"\n",(0,i.jsx)(n.h3,{id:"proxy-support",children:"Proxy Support"}),"\n",(0,i.jsxs)(n.p,{children:["We support various proxy configurations to facilitate communication with your cloud environments. Please see the ",(0,i.jsx)(n.a,{href:"/cado/deploy/networking-proxy",children:"proxy documentation page"})," for more details. However, if your network setup is highly complex or requires sophisticated routing, individual deployments may be more practical, as there are limits to the proxy configurations we support."]}),"\n",(0,i.jsx)(n.h3,{id:"proof-of-value-or-trial-deployments",children:"Proof of Value or Trial Deployments"}),"\n",(0,i.jsx)(n.p,{children:"If you are in a proof of value or trial phase, we recommend setting up a single deployment in the cloud environment you are most familiar with. This allows for quicker and easier initial setup. Once you decide to proceed with a full deployment of Cado, you can then expand to additional deployments in other cloud environments if necessary."}),"\n",(0,i.jsx)(n.h3,{id:"data-transfer-costs-and-speeds",children:"Data Transfer Costs and Speeds"}),"\n",(0,i.jsx)(n.p,{children:"There are some speed and cost considerations when copying data between cloud environments, such as egress fees and data transfer speeds. However, these generally are not significant concerns. For more details, consult your cloud provider's documentation regarding egress fees."}),"\n",(0,i.jsx)(n.h3,{id:"data-residency-requirements",children:"Data Residency Requirements"}),"\n",(0,i.jsx)(n.p,{children:"If you have data residency requirements mandating that certain data remain in a specific cloud environment or geographical location, you should set up individual deployments in each cloud environment to ensure compliance."}),"\n",(0,i.jsx)(n.h3,{id:"maintenance-and-management",children:"Maintenance and Management"}),"\n",(0,i.jsx)(n.p,{children:"Maintaining and updating individual Cado deployments across multiple clouds can be more time-consuming and resource-intensive compared to managing a single centralized deployment. Additionally, users will need to log into separate environments for each cloud."}),"\n",(0,i.jsx)(n.h3,{id:"licensing",children:"Licensing"}),"\n",(0,i.jsxs)(n.p,{children:["For specific licensing information, please refer to your contract or consult with your sales representative (",(0,i.jsx)(n.a,{href:"mailto:sales@cadosecurity.com",children:"sales@cadosecurity.com"}),") to confirm the requirements based on your use case."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var i=o(96540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);