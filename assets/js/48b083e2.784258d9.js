"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5177],{3160:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=o(5893),n=o(1151);const r={title:"Adding AWS and Azure to GCP",hide_title:!0,sidebar_position:5},i="Adding AWS and Azure to GCP",a={id:"cado-response/deploy/gcp/adding-azure-gcp",title:"Adding AWS and Azure to GCP",description:"Adding Azure subscriptions",source:"@site/docs/cado-response/deploy/gcp/adding-azure-gcp.md",sourceDirName:"cado-response/deploy/gcp",slug:"/cado-response/deploy/gcp/adding-azure-gcp",permalink:"/cado-response/deploy/gcp/adding-azure-gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/gcp/adding-azure-gcp.md",tags:[],version:"current",lastUpdatedAt:1722935768,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:5,frontMatter:{title:"Adding AWS and Azure to GCP",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Automated Setup",permalink:"/cado-response/deploy/gcp/gcp-auto-setup"},next:{title:"Platform Encryption",permalink:"/cado-response/deploy/gcp/data-encryption-overview"}},c={},d=[{value:"Adding Azure subscriptions",id:"adding-azure-subscriptions",level:2},{value:"Setting up AWS accounts",id:"setting-up-aws-accounts",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"adding-aws-and-azure-to-gcp",children:"Adding AWS and Azure to GCP"}),"\n",(0,s.jsx)(t.h2,{id:"adding-azure-subscriptions",children:"Adding Azure subscriptions"}),"\n",(0,s.jsx)(t.p,{children:"Cross-subscription Azure access is performed using an application registered into the target subscription. The following steps should be performed in each Azure subscription that you want to allow Cado to collect data from. Note: you will need permission to register applications and create IAM roles."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Log into the target Azure subscription that you want Cado to collect evidence from"}),"\n",(0,s.jsxs)(t.li,{children:["Follow the Microsoft instructions to start registering a ",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app",children:"new application"})]}),"\n",(0,s.jsxs)(t.li,{children:["Follow the Cado documentation to ",(0,s.jsx)(t.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#setting-up-an-app-registration-for-cross-tenancysubcription-acquisitions",children:"configure the application"})]}),"\n",(0,s.jsxs)(t.li,{children:["Once the application is set up, add the details to the Cado Response platform by following the ",(0,s.jsx)(t.a,{href:"https://docs.cadosecurity.com/cado-response/deploy/azure/azure-cross-tenancy-subscriptions#registering-credentials-within-cado",children:"documentation"})]}),"\n",(0,s.jsx)(t.li,{children:"In Cado Response, confirm that you can see resources for import by going into a project and selecting Import -> Cloud -> Choose your new Azure role -> confirm you can see resources available for import"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-aws-accounts",children:"Setting up AWS accounts"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Cross-cloud access of AWS from Azure is performed by setting up an IAM role in the target AWS account. The following steps should be performed in each AWS account you would like Cado to collect data from. Note: you will need permission to create IAM roles."}),"\n",(0,s.jsx)(t.li,{children:"Log into target AWS account"}),"\n",(0,s.jsxs)(t.li,{children:["Follow these AWS instructions to create an ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html",children:"IAM group"})]}),"\n",(0,s.jsxs)(t.li,{children:["Create a new IAM role with a new policy containing the ",(0,s.jsx)(t.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml",children:"permissions listed here"})]}),"\n",(0,s.jsxs)(t.li,{children:["Guides for creating new roles and policies can be found ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html",children:"here"})," and ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html",children:"here"})]}),"\n",(0,s.jsxs)(t.li,{children:["Add your new IAM user to the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/adduserstogroups.html",children:"group"})]}),"\n",(0,s.jsxs)(t.li,{children:["Generate access keys for the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",children:"IAM user"}),". These keys provide access to the account and should be kept secret."]}),"\n",(0,s.jsx)(t.li,{children:"In Cado Response, add the keys to the platform by going to Settings -> Cloud -> Create Role -> Choose AWS tab -> Add a name for the role and enter the access token and secret"}),"\n",(0,s.jsx)(t.li,{children:"In Cado Response, confirm that you can see resources for import by going into a project and selecting Import -> Cloud -> Choose your new AWS role -> confirm you can see resources."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var s=o(7294);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);