"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5682],{4398:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=n(5893),o=n(1151);const r={title:"Adding AWS accounts to Azure/AWS/GCP via Keys",hide_title:!0,sidebar_position:6},c="Adding AWS accounts to Azure, AWS, or GCP via Keys",i={id:"cado/deploy/cross/adding-aws",title:"Adding AWS accounts to Azure/AWS/GCP via Keys",description:"To enable cross-cloud access for AWS accounts, you need to set up an IAM role in each AWS account from which you want Cado to collect data. Follow the steps below to add AWS accounts. Ensure you have the required permissions to create IAM roles.",source:"@site/docs/cado/deploy/cross/adding-aws.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/adding-aws",permalink:"/cado/deploy/cross/adding-aws",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/adding-aws.md",tags:[],version:"current",lastUpdatedAt:1728739490,formattedLastUpdatedAt:"Oct 12, 2024",sidebarPosition:6,frontMatter:{title:"Adding AWS accounts to Azure/AWS/GCP via Keys",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Automatically add cross-account roles to Cado with AWS Organizations",permalink:"/cado/deploy/cross/aws-organizations"},next:{title:"Adding Azure subscriptions to Azure/AWS/GCP",permalink:"/cado/deploy/cross/adding-azure"}},a={},d=[{value:"Steps to Add an AWS Account",id:"steps-to-add-an-aws-account",level:3},{value:"Adding AWS Accounts to Cado from Azure or GCP Deployments",id:"adding-aws-accounts-to-cado-from-azure-or-gcp-deployments",level:2},{value:"Importing AWS EC2 Data",id:"importing-aws-ec2-data",level:3}];function l(e){const s={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"adding-aws-accounts-to-azure-aws-or-gcp-via-keys",children:"Adding AWS accounts to Azure, AWS, or GCP via Keys"}),"\n",(0,t.jsx)(s.p,{children:"To enable cross-cloud access for AWS accounts, you need to set up an IAM role in each AWS account from which you want Cado to collect data. Follow the steps below to add AWS accounts. Ensure you have the required permissions to create IAM roles."}),"\n",(0,t.jsx)(s.h3,{id:"steps-to-add-an-aws-account",children:"Steps to Add an AWS Account"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Log in to the Target AWS Account"}),(0,t.jsx)(s.br,{}),"\n","Start by logging into the AWS account where you want to grant access."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Create an IAM Group"}),(0,t.jsx)(s.br,{}),"\n","Follow ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_create.html",children:"these AWS instructions"})," to create an IAM group in the target account."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Create an IAM Role"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Create a new IAM role."}),"\n",(0,t.jsxs)(s.li,{children:["Attach a policy with the necessary permissions. You can find the policy ",(0,t.jsx)(s.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml",children:"here"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["For step-by-step instructions on creating roles and policies, refer to AWS documentation on ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html",children:"creating policies"})," and ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html",children:"creating roles"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Add the IAM User to the Group"}),(0,t.jsx)(s.br,{}),"\n","Once the IAM role is created, add your IAM user to the newly created group by following ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/singlesignon/latest/userguide/adduserstogroups.html",children:"this guide"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Generate Access Keys"}),(0,t.jsx)(s.br,{}),"\n","Generate access keys for the IAM user. These keys are needed to access the AWS account. Follow the ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",children:"AWS instructions"})," to create and securely store the access keys."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Add the IAM Role to Cado"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In the Cado platform, go to ",(0,t.jsx)(s.strong,{children:"Settings"})," > ",(0,t.jsx)(s.strong,{children:"Cloud"})," > ",(0,t.jsx)(s.strong,{children:"Create Role"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Select the ",(0,t.jsx)(s.strong,{children:"AWS"})," tab, then provide a name for the role."]}),"\n",(0,t.jsx)(s.li,{children:"Enter the access key and secret key you generated earlier."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Verify Access in Cado"}),(0,t.jsx)(s.br,{}),"\n","To verify that Cado can access the AWS account:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Open an investigation in Cado."}),"\n",(0,t.jsxs)(s.li,{children:["Select ",(0,t.jsx)(s.strong,{children:"Import"})," > ",(0,t.jsx)(s.strong,{children:"Cloud"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Choose the AWS role you created."}),"\n",(0,t.jsx)(s.li,{children:"Confirm that resources from the target AWS account are visible."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"adding-aws-accounts-to-cado-from-azure-or-gcp-deployments",children:"Adding AWS Accounts to Cado from Azure or GCP Deployments"}),"\n",(0,t.jsxs)(s.p,{children:["You can import AWS accounts into Cado from deployments on Azure or GCP. To do this, go to ",(0,t.jsx)(s.strong,{children:"Settings"})," > ",(0,t.jsx)(s.strong,{children:"Cloud Accounts"}),", and add the AWS account."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Add Role",src:n(5132).Z+"",width:"1553",height:"877"})}),"\n",(0,t.jsx)(s.h3,{id:"importing-aws-ec2-data",children:"Importing AWS EC2 Data"}),"\n",(0,t.jsx)(s.p,{children:"AWS EC2 instances can currently only be imported across clouds using one of the following methods:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.strong,{children:"SSM Triage Acquisition"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"EBS Direct Acquisition"}),": Available through ",(0,t.jsx)(s.strong,{children:"Settings"})," > ",(0,t.jsx)(s.strong,{children:"Experiments"})," > ",(0,t.jsx)(s.strong,{children:"EBS Direct API"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"This limitation exists due to the way data is collected from EC2 instances."})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5132:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/add-role-cf6ac843887d6e645ef7c3c54b0fbe65.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>c});var t=n(7294);const o={},r=t.createContext(o);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);