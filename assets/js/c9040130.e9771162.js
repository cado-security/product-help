"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4983],{5475:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=t(5893),n=t(1151);const r={title:"Adding AWS accounts to Azure/AWS/GCP",hide_title:!0,sidebar_position:1},c="How to add AWS accounts to Azure/AWS/GCP",a={id:"cado-response/deploy/cross/adding-aws",title:"Adding AWS accounts to Azure/AWS/GCP",description:"* Cross-cloud and account access of AWS is performed by setting up an IAM role in the target AWS account. The following steps should be performed in each AWS account you would like Cado to collect data from. Note: you will need permission to create IAM roles.",source:"@site/docs/cado-response/deploy/cross/adding-aws.md",sourceDirName:"cado-response/deploy/cross",slug:"/cado-response/deploy/cross/adding-aws",permalink:"/cado-response/deploy/cross/adding-aws",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/cross/adding-aws.md",tags:[],version:"current",lastUpdatedAt:1728384111,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:1,frontMatter:{title:"Adding AWS accounts to Azure/AWS/GCP",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cross-Project Setup",permalink:"/cado-response/deploy/gcp/gcp-cross-project"},next:{title:"Adding Azure subscriptions to Azure/AWS/GCP",permalink:"/cado-response/deploy/cross/adding-azure"}},d={},i=[{value:"Adding to the Cado UI",id:"adding-to-the-cado-ui",level:2}];function l(e){const o={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"how-to-add-aws-accounts-to-azureawsgcp",children:"How to add AWS accounts to Azure/AWS/GCP"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Cross-cloud and account access of AWS is performed by setting up an IAM role in the target AWS account. The following steps should be performed in each AWS account you would like Cado to collect data from. Note: you will need permission to create IAM roles."}),"\n",(0,s.jsx)(o.li,{children:"Log into target AWS account"}),"\n",(0,s.jsxs)(o.li,{children:["Follow these AWS instructions to create an ",(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html",children:"IAM group"})]}),"\n",(0,s.jsxs)(o.li,{children:["Create a new IAM role with a new policy containing the ",(0,s.jsx)(o.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml",children:"permissions listed here"})]}),"\n",(0,s.jsxs)(o.li,{children:["Guides for creating new roles and policies can be found ",(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html",children:"here"})," and ",(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html",children:"here"})]}),"\n",(0,s.jsxs)(o.li,{children:["Add your new IAM user to the ",(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/adduserstogroups.html",children:"group"})]}),"\n",(0,s.jsxs)(o.li,{children:["Generate access keys for the ",(0,s.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",children:"IAM user"}),". These keys provide access to the account and should be kept secret."]}),"\n",(0,s.jsx)(o.li,{children:"In Cado Response, add the keys to the platform by going to Settings -> Cloud -> Create Role -> Choose AWS tab -> Add a name for the role and enter the access token and secret"}),"\n",(0,s.jsx)(o.li,{children:"In Cado Response, confirm that you can see resources for import by going into an investigation and selecting Import -> Cloud -> Choose your new AWS role -> confirm you can see resources."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"adding-to-the-cado-ui",children:"Adding to the Cado UI"}),"\n",(0,s.jsxs)(o.p,{children:["AWS accounts can be imported into Cado Response from Azure or GCP deployments.\nTo do so, add the AWS account under Settings > Cloud Accounts:\n",(0,s.jsx)(o.img,{alt:"Add Role",src:t(5132).Z+"",width:"2134",height:"1248"})]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5132:(e,o,t)=>{t.d(o,{Z:()=>s});const s=t.p+"assets/images/add-role-cf34be238a0b5ac245ac1c0ddf70fcb6.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>c});var s=t(7294);const n={},r=s.createContext(n);function c(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);