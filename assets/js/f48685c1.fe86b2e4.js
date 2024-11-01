"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7745],{9568:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=o(5893),s=o(1151);const n={title:"Automatically deploy a cross-account role with StackSets in AWS",hide_title:!0,sidebar_position:3},c="How to automatically deploy a cross-account IAM Role in AWS",i={id:"cado/deploy/cross/cross-account-creation-auto",title:"Automatically deploy a cross-account role with StackSets in AWS",description:"To automate the deployment of the IAM Policy and Role in multiple AWS accounts within your organization, you can use AWS CloudFormation StackSets. This method allows you to deploy the necessary IAM roles and policies across all target accounts in your organization.",source:"@site/docs/cado/deploy/cross/cross-account-creation-auto.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/cross-account-creation-auto",permalink:"/cado/deploy/cross/cross-account-creation-auto",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/cross-account-creation-auto.md",tags:[],version:"current",lastUpdatedAt:1730460513,formattedLastUpdatedAt:"Nov 1, 2024",sidebarPosition:3,frontMatter:{title:"Automatically deploy a cross-account role with StackSets in AWS",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manually deploy a cross-account role in AWS",permalink:"/cado/deploy/cross/cross-account-creation"},next:{title:"Manually add a cross-account role to Cado in AWS",permalink:"/cado/deploy/cross/add-cross-account-manual"}},r={},d=[{value:"Steps to Deploy the IAM Policy and Role using CloudFormation StackSets",id:"steps-to-deploy-the-iam-policy-and-role-using-cloudformation-stacksets",level:3},{value:"Automating Cross-Account Addition in Cado",id:"automating-cross-account-addition-in-cado",level:2}];function l(t){const e={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-automatically-deploy-a-cross-account-iam-role-in-aws",children:"How to automatically deploy a cross-account IAM Role in AWS"}),"\n",(0,a.jsx)(e.p,{children:"To automate the deployment of the IAM Policy and Role in multiple AWS accounts within your organization, you can use AWS CloudFormation StackSets. This method allows you to deploy the necessary IAM roles and policies across all target accounts in your organization."}),"\n",(0,a.jsxs)(e.p,{children:["More information on CloudFormation StackSets can be found here: ",(0,a.jsx)(e.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",children:"Working with AWS CloudFormation StackSets"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"steps-to-deploy-the-iam-policy-and-role-using-cloudformation-stacksets",children:"Steps to Deploy the IAM Policy and Role using CloudFormation StackSets"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Open StackSets"}),(0,a.jsx)(e.br,{}),"\n",'From your master StackSet account (the account enabled to deploy resources into other AWS accounts), navigate to "StackSets."']}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"StackSets Role",src:o(231).Z+"",width:"245",height:"82"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Create a New StackSet"}),(0,a.jsx)(e.br,{}),"\n","Click ",(0,a.jsx)(e.strong,{children:"Create StackSet"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Enter the CloudFormation Template URL"}),(0,a.jsx)(e.br,{}),"\n","Enter the S3 URL for the CloudFormation template:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"https://cado-public.s3.amazonaws.com/cloudformation_v2/StacksetCrossIAM.yaml\n"})}),"\n",(0,a.jsxs)(e.p,{children:["Then, click ",(0,a.jsx)(e.strong,{children:"Next"}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Stacks3",src:o(5138).Z+"",width:"592",height:"234"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Proceed Through the Setup"}),(0,a.jsx)(e.br,{}),"\n","Click ",(0,a.jsx)(e.strong,{children:"Next"})," through the following configuration steps."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Select Region"}),(0,a.jsx)(e.br,{}),"\n",'Under "Create StackSet," select any region (IAM roles are global, so this can be any region).']}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Stacks4",src:o(1713).Z+"",width:"582",height:"169"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Deploy the StackSet"}),(0,a.jsx)(e.br,{}),"\n","Once deployed, this will create the required IAM Policy and IAM Role in each target AWS account. You can verify the role and policy by navigating to ",(0,a.jsx)(e.strong,{children:"IAM > Roles"})," in the target AWS accounts."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Stacks5",src:o(3823).Z+"",width:"434",height:"115"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["After deploying the cross-account IAM roles, you will need to add the newly created Role ARN to the Cado platform. Follow the steps outlined ",(0,a.jsx)(e.a,{href:"#step-2-add-the-target-aws-role-arn-to-the-cado-platform",children:"here"}),", or to automate this process, refer to ",(0,a.jsx)(e.a,{href:"#automating-cado-cross-account-creation",children:"Automating Cado Cross-Account Creation"}),"."]})}),"\n",(0,a.jsx)(e.h2,{id:"automating-cross-account-addition-in-cado",children:"Automating Cross-Account Addition in Cado"}),"\n",(0,a.jsx)(e.p,{children:"Once the cross-account IAM role is created, the next step is to add the IAM Role ARN to the Cado platform. This enables access to the target AWS accounts within Cado."}),"\n",(0,a.jsxs)(e.p,{children:["To automate this process via the Cado API, see the example script for adding AWS credentials in the Cado platform:",(0,a.jsx)(e.br,{}),"\n",(0,a.jsx)(e.a,{href:"https://github.com/cado-security/cado-api-examples/blob/main/examples/saving_credentials.py",children:"Example API Script for Adding AWS Credentials"}),"."]})]})}function h(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},231:(t,e,o)=>{o.d(e,{Z:()=>a});const a="data:image/png;base64,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"},5138:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/stacks3-f7fad534fd7186ff5e760dae641666bf.png"},1713:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/stacks4-cf49641e0dcf69bcf71c4388cd810900.png"},3823:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/stacks5-f70b7cbaade6620d157c90ee895402ce.png"},1151:(t,e,o)=>{o.d(e,{Z:()=>i,a:()=>c});var a=o(7294);const s={},n=a.createContext(s);function c(t){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),a.createElement(n.Provider,{value:e},t.children)}}}]);