"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8913],{1747:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=t(5893),a=t(1151);const s={title:"Manually create a cross-account role",hide_title:!0,sidebar_position:1},c="How to manually create a cross-account IAM role in AWS",r={id:"cado-response/deploy/aws/iam/cross-account-creation",title:"Manually create a cross-account role",description:"The Cado platform can access resources across multiple AWS accounts. For instance, if you manage 100 AWS accounts, you can deploy Cado in a single AWS account and then grant the Cado platform access to all other AWS accounts, enabling the platform to acquire, process, and analyze evidence from all AWS accounts seamlessly. Alternatively, if you use AWS Control Tower, you can deploy using AWS Organizations",source:"@site/docs/cado-response/deploy/aws/iam/cross-account-creation.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/cross-account-creation",permalink:"/cado-response/deploy/aws/iam/cross-account-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/cross-account-creation.md",tags:[],version:"current",lastUpdatedAt:1728398127,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:1,frontMatter:{title:"Manually create a cross-account role",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Supported regions and GovCloud",permalink:"/cado-response/deploy/aws/regions"},next:{title:"Automatically create a cross-account role",permalink:"/cado-response/deploy/aws/iam/cross-account-creation-auto"}},i={},l=[{value:"Summary",id:"summary",level:2},{value:"STEP 1: Create IAM Policy and IAM Role in Target AWS Account",id:"step-1-create-iam-policy-and-iam-role-in-target-aws-account",level:3},{value:"STEP 2: Add Target AWS Role ARN to the Cado Platform",id:"step-2-add-target-aws-role-arn-to-the-cado-platform",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"how-to-manually-create-a-cross-account-iam-role-in-aws",children:"How to manually create a cross-account IAM role in AWS"}),"\n",(0,n.jsxs)(o.p,{children:["The Cado platform can access resources across multiple AWS accounts. For instance, if you manage 100 AWS accounts, you can deploy Cado in a single AWS account and then grant the Cado platform access to all other AWS accounts, enabling the platform to acquire, process, and analyze evidence from all AWS accounts seamlessly. Alternatively, if you use AWS Control Tower, you can deploy using ",(0,n.jsx)(o.a,{href:"/cado-response/deploy/aws/iam/aws-organizations",children:"AWS Organizations"})]}),"\n",(0,n.jsxs)(o.p,{children:["You can view the cross-account role ",(0,n.jsx)(o.a,{href:"https://github.com/cado-security/Deployment-Templates/blob/main/cross-account/CrossAccountPolicy.yaml",children:"here"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(o.p,{children:"The instructions below outline how to grant permissions for the Cado platform to access a target AWS account (outside of the AWS account in which Cado was deployed). This same process can be repeated for all AWS accounts needing cross-account access."}),"\n",(0,n.jsx)(o.p,{children:"Setup for cross-account acquisitions within the Cado platform is a 2 step process:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:'Create a cross-account IAM Policy and IAM Role in the target AWS account from which you would like the Cado platform to be able to acquire data. This allows the Cado platform to "assume" that cross-account role and perform acquisitions.'}),"\n",(0,n.jsx)(o.li,{children:"Add the newly created cross-account IAM Role ARN to the Cado platform. This enables the new AWS account within the Cado platform."}),"\n"]}),"\n",(0,n.jsxs)(o.admonition,{type:"tip",children:[(0,n.jsxs)(o.p,{children:["Creation of the cross-account IAM Policy and IAM Role within each AWS account can be automated via AWS Stacksets and other programmatic methods. See the ",(0,n.jsx)(o.a,{href:"#automating-aws-iam-role-and-policy-deployment",children:"Automating AWS IAM Role and Policy Deployment"})," section below for more details."]}),(0,n.jsxs)(o.p,{children:["Adding the cross-account ARN to the Cado platform can be automated via the Cado APIs. See the ",(0,n.jsx)(o.a,{href:"#automating-cado-cross-account-creation",children:"Automating Cado Cross-account Creation"})," section below for more details."]})]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["The examples below reference a primary AWS account which represents the AWS account in which the Cado platform is deployed and running (referred to as AWS account number ",(0,n.jsx)(o.code,{children:"111111111111"}),") and a target AWS account which represents the AWS account from which you wish to enable cross-account acquisitions from (referred to as AWS account number ",(0,n.jsx)(o.code,{children:"222222222222"}),") ."]})}),"\n",(0,n.jsx)(o.h3,{id:"step-1-create-iam-policy-and-iam-role-in-target-aws-account",children:"STEP 1: Create IAM Policy and IAM Role in Target AWS Account"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["In the target AWS account (the account from which you would like to acquire data from), navigate to ",(0,n.jsx)(o.strong,{children:"IAM > Policies"})," and click ",(0,n.jsx)(o.strong,{children:"Create Policy"}),". In the Permissions Wizard, attach or paste the Cado Cross-account Policy ",(0,n.jsx)(o.a,{href:"https://raw.githubusercontent.com/cado-security/Deployment-Templates/main/cross-account/CrossAccountPolicy.yaml",children:"located here"}),", then click ",(0,n.jsx)(o.strong,{children:"Next"}),". Give the Policy a name (like ",(0,n.jsx)(o.code,{children:"CadoResponseCrossAccountPolicy"}),"), then click ",(0,n.jsx)(o.strong,{children:"Create Policy"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["After the Cado Cross-account Policy is created, navigate to ",(0,n.jsx)(o.strong,{children:"IAM > Roles"})," and click ",(0,n.jsx)(o.strong,{children:"Create Role"}),'. Under "Select type of trusted entity", click ',(0,n.jsx)(o.strong,{children:"Another AWS Account"})," and enter the account ID of your primary account (the account in which the Cado platform is deployed and running. ",(0,n.jsx)(o.code,{children:"111111111111"})," in this example)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Create Role",src:t(7358).Z+"",width:"761",height:"323"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Add the policy you recently created in the steps above, then click ",(0,n.jsx)(o.strong,{children:"Next"})," give the Role a name. The role name ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.em,{children:"must"})})," include the text ",(0,n.jsx)(o.code,{children:"CadoResponse"})," (case sensitive, like ",(0,n.jsx)(o.code,{children:"CadoResponseCrossAccountRole"}),"). If the secondary account role name does not contain the text ",(0,n.jsx)(o.code,{children:"CadoResponse"}),", cross-account acquisition will not work properly."]}),"\n"]}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsx)(o.p,{children:"The Cado Cross-account Policy includes permissions to acquire a variety of AWS resources. You can remove permissions that are not needed for your use case."}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"The EC2 permissions are required are acquire EC2 systems."}),"\n",(0,n.jsx)(o.li,{children:"The KMS permissions are required to acquire KMS encrypted volumes."}),"\n",(0,n.jsx)(o.li,{children:"The SSM permissions are required for Triage captures."}),"\n",(0,n.jsx)(o.li,{children:"The S3 Permissions are required to import from S3 buckets in other accounts."}),"\n",(0,n.jsx)(o.li,{children:"The CloudTrail permissions are required to import CloudTrail logs in other accounts."}),"\n",(0,n.jsx)(o.li,{children:"The ECS permissions are required to import ECS containers in other accounts."}),"\n",(0,n.jsx)(o.li,{children:"The EC2 de-register permission is required to import AMI images cross-account."}),"\n"]}),(0,n.jsxs)(o.p,{children:["Also note that if you choose to change ",(0,n.jsx)(o.strong,{children:"Maximum session duration"}),", the minimum currently supported by Cado is 1 hour."]}),(0,n.jsxs)(o.p,{children:["Lastly, the above steps walk through how to create a new role; however, if you already have an IAM Role with appropriate EC2 access, you can instead edit the trust relationship to include the below AWS ",(0,n.jsx)(o.strong,{children:"Principal"})," (replacing the ",(0,n.jsx)(o.code,{children:"111111111111"})," account number with your own primary AWS account, in which the Cado platform is deployed)."]}),(0,n.jsx)(o.p,{children:"The below JSON is only required if you choose to use an existing role and you didn't create a new role as recommended earlier."}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n   "Version": "2012-10-17",\n   "Statement": [\n       {\n           "Effect": "Allow",\n           "Principal": {\n               "AWS": "111111111111"\n           },\n           "Action": "sts:AssumeRole",\n           "Condition": {}\n       }\n   ]\n}\n'})}),(0,n.jsxs)(o.p,{children:["You may choose to limit this further and trust only your specific Cado role rather than the entire primary account.  See AWS JSON policy elements: ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html",children:"Principal - AWS Identity and Access Management"})})," for more information."]})]}),"\n",(0,n.jsx)(o.h3,{id:"step-2-add-target-aws-role-arn-to-the-cado-platform",children:"STEP 2: Add Target AWS Role ARN to the Cado Platform"}),"\n",(0,n.jsxs)(o.p,{children:["After the target AWS Role is set up in the target AWS account (",(0,n.jsx)(o.code,{children:"222222222222"}),"), you will need to add the Role ARN to the Cado platform. To do this, log into your Cado platform, navigate to ",(0,n.jsx)(o.code,{children:"Settings > Cloud"})," and click on the ",(0,n.jsx)(o.strong,{children:"Create Role"})," button. When prompted, enter the IAM Role ARN created in Step 1 and provide an ",(0,n.jsx)(o.code,{children:"Account Alias (Cloud ID)"})," for the role. The ",(0,n.jsx)(o.code,{children:"Alias"})," is what will appear in the Cado platform UI, so we typically recommended that it includes the AWS account number in the text."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Add Role",src:t(5132).Z+"",width:"2134",height:"1248"})}),"\n",(0,n.jsx)(o.p,{children:"Upon submission, the Cado platform will attempt to validate the role, ensuring it is assumable. Once validated, you will see the Alias in the list of available AWS accounts."})]})}function h(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5132:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/add-role-cf34be238a0b5ac245ac1c0ddf70fcb6.png"},7358:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/create-role-fa83b0fb86d9d71fcea59dc0f7103a94.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>c});var n=t(7294);const a={},s=n.createContext(a);function c(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);