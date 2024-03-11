"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8913],{1747:(e,t,o)=>{o.r(t),o.d(t,{Highlight:()=>d,assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=o(5893),n=o(1151);const s={title:"Cross Account Creation",hide_title:!0,sidebar_position:3},c="Cross-account Access Creation",i={id:"cado-response/deploy/aws/iam/cross-account-creation",title:"Cross Account Creation",description:"The Cado platform can access resources across multiple AWS accounts. For instance, if you manage 100 AWS accounts, you can deploy Cado in a single AWS account and then grant the Cado platform access to all other AWS accounts, enabling the platform to acquire, process, and analyze evidence from all AWS accounts seamlessly. Support for AWS Organizations will be added in an upcoming release.",source:"@site/docs/cado-response/deploy/aws/iam/cross-account-creation.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/cross-account-creation",permalink:"/cado-response/deploy/aws/iam/cross-account-creation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/cross-account-creation.md",tags:[],version:"current",lastUpdatedAt:1710186001,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:3,frontMatter:{title:"Cross Account Creation",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Removing and Tightening IAM Permissions",permalink:"/cado-response/deploy/aws/iam/tightening-iam"},next:{title:"Cross Cloud",permalink:"/cado-response/deploy/aws/iam/cross-cloud"}},r={},l=[{value:"Summary",id:"summary",level:2},{value:"STEP 1: Create IAM Policy and IAM Role in Target AWS Account",id:"step-1-create-iam-policy-and-iam-role-in-target-aws-account",level:3},{value:"STEP 2: Add Target AWS Role ARN to the Cado Platform",id:"step-2-add-target-aws-role-arn-to-the-cado-platform",level:3},{value:"Automating AWS IAM Role and Policy Deployment",id:"automating-aws-iam-role-and-policy-deployment",level:2},{value:"Using CloudFormation StackSets",id:"using-cloudformation-stacksets",level:3},{value:"Automating Cado Cross-account Creation",id:"automating-cado-cross-account-creation",level:2}],d=({children:e,color:t})=>{const o={span:"span",...(0,n.a)()};return(0,a.jsx)(o.span,{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:e})};function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"cross-account-access-creation",children:"Cross-account Access Creation"}),"\n",(0,a.jsx)(t.p,{children:"The Cado platform can access resources across multiple AWS accounts. For instance, if you manage 100 AWS accounts, you can deploy Cado in a single AWS account and then grant the Cado platform access to all other AWS accounts, enabling the platform to acquire, process, and analyze evidence from all AWS accounts seamlessly. Support for AWS Organizations will be added in an upcoming release."}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"The instructions below outline how to grant permissions for the Cado platform to access a target AWS account (outside of the AWS account in which Cado was deployed). This same process can be repeated for all AWS accounts needing cross-account access."}),"\n",(0,a.jsx)(t.p,{children:"Setup for cross-account acquisitions within the Cado platform is a 2 step process:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'Create a cross-account IAM Policy and IAM Role in the target AWS account from which you would like the Cado platform to be able to acquire data. This allows the Cado platform to "assume" that cross-account role and perform acquisitions.'}),"\n",(0,a.jsx)(t.li,{children:"Add the newly created cross-account IAM Role ARN to the Cado platform. This enables the new AWS account within the Cado platform."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["Creation of the cross-account IAM Policy and IAM Role within each AWS account can be automated via AWS Stacksets and other programmatic methods. See the ",(0,a.jsx)(t.a,{href:"#automating-aws-iam-role-and-policy-deployment",children:"Automating AWS IAM Role and Policy Deployment"})," section below for more details."]}),(0,a.jsxs)(t.p,{children:["Adding the cross-account ARN to the Cado platform can be automated via the Cado APIs. See the ",(0,a.jsx)(t.a,{href:"#automating-cado-cross-account-creation",children:"Automating Cado Cross-account Creation"})," section below for more details."]})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The examples below reference a primary AWS account which represents the AWS account in which the Cado platform is deployed and running (referred to as AWS account number ",(0,a.jsx)(t.code,{children:"111111111111"}),") and a target AWS account which represents the AWS account from which you wish to enable cross-account acquisitions from (referred to as AWS account number ",(0,a.jsx)(t.code,{children:"222222222222"}),") ."]})}),"\n",(0,a.jsx)(t.h3,{id:"step-1-create-iam-policy-and-iam-role-in-target-aws-account",children:"STEP 1: Create IAM Policy and IAM Role in Target AWS Account"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the target AWS account (the account from which you would like to acquire data from), navigate to ",(0,a.jsx)(t.strong,{children:"IAM > Policies"})," and click ",(0,a.jsx)(t.strong,{children:"Create Policy"}),". In the Permissions Wizard, attach or paste the Cado Cross-account Policy ",(0,a.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/policy-in-cross-account.json",children:"located here"}),", then click ",(0,a.jsx)(t.strong,{children:"Next"}),". Give the Policy a name (like ",(0,a.jsx)(t.code,{children:"CadoResponseCrossAccountPolicy"}),"), then click ",(0,a.jsx)(t.strong,{children:"Create Policy"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["After the Cado Cross-account Policy is created, navigate to ",(0,a.jsx)(t.strong,{children:"IAM > Roles"})," and click ",(0,a.jsx)(t.strong,{children:"Create Role"}),'. Under "Select type of trusted entity", click ',(0,a.jsx)(t.strong,{children:"Another AWS Account"})," and enter the account ID of your primary account (the account in which the Cado platform is deployed and running. ",(0,a.jsx)(t.code,{children:"111111111111"})," in this example)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create Role",src:o(7358).Z+"",width:"761",height:"323"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Add the policy you recently created in the steps above, then click ",(0,a.jsx)(t.strong,{children:"Next"})," give the Role a name. The role name ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.em,{children:"must"})})," include the text ",(0,a.jsx)(t.code,{children:"CadoResponse"})," (case sensitive, like ",(0,a.jsx)(t.code,{children:"CadoResponseCrossAccountRole"}),"). If the secondary account role name does not contain the text ",(0,a.jsx)(t.code,{children:"CadoResponse"}),", cross-account acquisition will not work properly."]}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"The Cado Cross-account Policy includes permissions to acquire a variety of AWS resources. You can remove permissions that are not needed for your use case."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The EC2 permissions are required are acquire EC2 systems."}),"\n",(0,a.jsx)(t.li,{children:"The KMS permissions are required to acquire KMS encrypted volumes."}),"\n",(0,a.jsx)(t.li,{children:"The SSM permissions are required for Triage captures."}),"\n",(0,a.jsx)(t.li,{children:"The S3 Permissions are required to import from S3 buckets in other accounts."}),"\n",(0,a.jsx)(t.li,{children:"The CloudTrail permissions are required to import CloudTrail logs in other accounts."}),"\n",(0,a.jsx)(t.li,{children:"The ECS permissions are required to import ECS containers in other accounts."}),"\n",(0,a.jsx)(t.li,{children:"The EC2 de-register permission is required to import AMI images cross-account."}),"\n"]}),(0,a.jsxs)(t.p,{children:["Also note that if you choose to change ",(0,a.jsx)(t.strong,{children:"Maximum session duration"}),", the minimum currently supported by Cado is 1 hour."]}),(0,a.jsxs)(t.p,{children:["Lastly, the above steps walk through how to create a new role; however, if you already have an IAM Role with appropriate EC2 access, you can instead edit the trust relationship to include the below AWS ",(0,a.jsx)(t.strong,{children:"Principal"})," (replacing the ",(0,a.jsx)(t.code,{children:"111111111111"})," account number with your own primary AWS account, in which the Cado platform is deployed)."]}),(0,a.jsx)(t.p,{children:"The below JSON is only required if you choose to use an existing role and you didn't create a new role as recommended earlier."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n   "Version": "2012-10-17",\n   "Statement": [\n       {\n           "Effect": "Allow",\n           "Principal": {\n               "AWS": "111111111111"\n           },\n           "Action": "sts:AssumeRole",\n           "Condition": {}\n       }\n   ]\n}\n'})}),(0,a.jsxs)(t.p,{children:["You may choose to limit this further and trust only your specific Cado role rather than the entire primary account.  See AWS JSON policy elements: ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html",children:"Principal - AWS Identity and Access Management"})})," for more information."]})]}),"\n",(0,a.jsx)(t.h3,{id:"step-2-add-target-aws-role-arn-to-the-cado-platform",children:"STEP 2: Add Target AWS Role ARN to the Cado Platform"}),"\n",(0,a.jsxs)(t.p,{children:["After the target AWS Role is set up in the target AWS account (",(0,a.jsx)(t.code,{children:"222222222222"}),"), you will need to add the Role ARN to the Cado platform. To do this, log into your Cado platform, navigate to ",(0,a.jsx)(t.code,{children:"Settings > Cloud"})," and click on the ",(0,a.jsx)(t.strong,{children:"Create Role"})," button. When prompted, enter the IAM Role ARN created in Step 1 and provide an ",(0,a.jsx)(t.code,{children:"Account Alias (Cloud ID)"})," for the role. The ",(0,a.jsx)(t.code,{children:"Alias"})," is what will appear in the Cado platform UI, so we typically recommended that it includes the AWS account number in the text."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Role",src:o(5132).Z+"",width:"2134",height:"1248"})}),"\n",(0,a.jsx)(t.p,{children:"Upon submission, the Cado platform will attempt to validate the role, ensuring it is assumable. Once validated, you will see the Alias in the list of available AWS accounts."}),"\n",(0,a.jsx)(t.h2,{id:"automating-aws-iam-role-and-policy-deployment",children:"Automating AWS IAM Role and Policy Deployment"}),"\n",(0,a.jsx)(t.h3,{id:"using-cloudformation-stacksets",children:"Using CloudFormation StackSets"}),"\n",(0,a.jsxs)(t.p,{children:["To automate the creation of the IAM Policy and Role in each target AWS Account via CloudFormation StackSets across your AWS Organisation, you can follow the steps below. More details about CloudFormation StackSets can be found here: ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html",children:"Working with AWS CloudFormation StackSets"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Stacks1",src:o(4413).Z+"",width:"614",height:"345"})}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'Go to "StackSets" from your master StackSet account that is enabled to deploy into other accounts.'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"StackSets Role",src:o(231).Z+"",width:"245",height:"82"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(d,{color:"#F78631",children:"Create StackSet"})})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Enter the S3 URL as ",(0,a.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cloudformation/template-organization-stackset-iam-only.json",children:"https://cado-public.s3.amazonaws.com/cloudformation/template-organization-stackset-iam-only.json"})," then click ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(d,{color:"#F78631",children:"Next"})}),":"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Stacks3",src:o(5138).Z+"",width:"592",height:"234"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsxs)(t.li,{children:["Click ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(d,{color:"#F78631",children:"Next"})}),' through the next two dialogues, and under "Create StackSet" select any region (this works as IAM is global):']}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Stacks4",src:o(1713).Z+"",width:"582",height:"169"})}),"\n",(0,a.jsxs)(t.ol,{start:"5",children:["\n",(0,a.jsx)(t.li,{children:"Once deployed, this will then create a IAM Policy and IAM Role in each target AWS account, that you can view in IAM:"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Stacks5",src:o(3823).Z+"",width:"434",height:"115"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You will then need to add the newly created cross-account IAM Role ARN to the Cado platform, using the steps outlined ",(0,a.jsx)(t.a,{href:"#step-2-add-the-target-aws-role-arn-to-the-cado-platform",children:"here"})," or if you choose to automate the process, the steps outlined ",(0,a.jsx)(t.a,{href:"#automating-cado-cross-account-creation",children:"here"})]})}),"\n",(0,a.jsx)(t.h2,{id:"automating-cado-cross-account-creation",children:"Automating Cado Cross-account Creation"}),"\n",(0,a.jsxs)(t.p,{children:["As mentioned previously, the second step to adding cross-account access is to add the newly created cross-account IAM Role ARN to the Cado platform. This enables the new AWS account within the Cado platform. To automate this process via the Cado APIs, please see the example Cado API for adding AWS credentials ",(0,a.jsx)(t.a,{href:"https://github.com/cado-security/cado-api-examples/blob/main/examples/saving_credentials.py",children:"here"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5132:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/add-role-cf34be238a0b5ac245ac1c0ddf70fcb6.png"},7358:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/create-role-fa83b0fb86d9d71fcea59dc0f7103a94.png"},4413:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/stacks1-ccd441458e148ad57f8c89f48c540f90.png"},231:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/png;base64,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"},5138:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/stacks3-f7fad534fd7186ff5e760dae641666bf.png"},1713:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/stacks4-cf49641e0dcf69bcf71c4388cd810900.png"},3823:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/stacks5-f70b7cbaade6620d157c90ee895402ce.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>c});var a=o(7294);const n={},s=a.createContext(n);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);