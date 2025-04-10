"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[664],{23659:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=s(74848),i=s(28453);const o={},a="How to Tighten IAM Permissions for SSM in AWS",r={id:"cado/deploy/aws/iam/ssm",title:"How to Tighten IAM Permissions for SSM in AWS",description:"The Cado platform leverages AWS Systems Manager (SSM) to perform live captures of AWS EC2 systems. This provides a faster alternative to full disk acquisitions and allows the collection of process memory. Additionally, Cado uses SSM for executing commands on SSM-enabled systems during investigations. However, the default IAM permissions might be too broad for environments with stricter security requirements, as it grants the platform permission to execute any command on all SSM-enabled systems.",source:"@site/docs/cado/deploy/aws/iam/ssm.md",sourceDirName:"cado/deploy/aws/iam",slug:"/cado/deploy/aws/iam/ssm",permalink:"/cado/deploy/aws/iam/ssm",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/iam/ssm.md",tags:[],version:"current",lastUpdatedAt:1744284627,formattedLastUpdatedAt:"Apr 10, 2025",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Required Role Scoping",permalink:"/cado/deploy/aws/iam/required-role-scoping"},next:{title:"Add a load balancer and HTTPS",permalink:"/cado/deploy/aws/networking/aws-load-balancer"}},d={},c=[{value:"Default Permissions",id:"default-permissions",level:2},{value:"Restricting SSM Permissions",id:"restricting-ssm-permissions",level:2},{value:"Example Policy with Tag Conditions",id:"example-policy-with-tag-conditions",level:3},{value:"Adding Tags to EC2 Instances",id:"adding-tags-to-ec2-instances",level:3},{value:"Error Handling",id:"error-handling",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-tighten-iam-permissions-for-ssm-in-aws",children:"How to Tighten IAM Permissions for SSM in AWS"}),"\n",(0,t.jsx)(n.p,{children:"The Cado platform leverages AWS Systems Manager (SSM) to perform live captures of AWS EC2 systems. This provides a faster alternative to full disk acquisitions and allows the collection of process memory. Additionally, Cado uses SSM for executing commands on SSM-enabled systems during investigations. However, the default IAM permissions might be too broad for environments with stricter security requirements, as it grants the platform permission to execute any command on all SSM-enabled systems."}),"\n",(0,t.jsx)(n.h2,{id:"default-permissions",children:"Default Permissions"}),"\n",(0,t.jsx)(n.p,{children:"The default permissions grant wide access to execute commands on any EC2 instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "Sid": "RequiredForTriageAndRunCommand",\n    "Effect": "Allow",\n    "Action": [\n        "ssm:SendCommand",\n        "ssm:DescribeInstanceInformation",\n        "ssm:StartSession",\n        "ssm:TerminateSession"\n    ],\n    "Resource": [\n        "arn:aws:ec2:*:*:instance/*",\n        "arn:aws:ssm:*::document/AWS-RunShellScript",\n        "arn:aws:ssm:*::document/AWS-RunPowerShellScript"\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"restricting-ssm-permissions",children:"Restricting SSM Permissions"}),"\n",(0,t.jsxs)(n.p,{children:["To tighten these permissions, you can restrict SSM commands to only target specific EC2 instances by using ",(0,t.jsx)(n.strong,{children:"Tag Conditions"}),". This method ensures that only instances with a designated tag can be accessed via SSM."]}),"\n",(0,t.jsx)(n.h3,{id:"example-policy-with-tag-conditions",children:"Example Policy with Tag Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["Here\u2019s an example IAM policy that limits SSM commands to EC2 instances tagged with ",(0,t.jsx)(n.code,{children:"CadoResponseSSMEnabled: True"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "Sid": "RequiredForTriageAndRunCommandTagged",\n    "Effect": "Allow",\n    "Action": [\n        "ssm:SendCommand",\n        "ssm:DescribeInstanceInformation",\n        "ssm:StartSession",\n        "ssm:TerminateSession"\n    ],\n    "Resource": [\n        "arn:aws:ec2:*:*:instance/*"\n    ],\n    "Condition": {\n        "StringLike": {\n            "ssm:resourceTag/CadoResponseSSMEnabled": [\n                "True"\n            ]\n        }\n    }\n},\n{\n    "Sid": "RequiredForTriageAndRunCommandRun",\n    "Effect": "Allow",\n    "Action": [\n        "ssm:SendCommand",\n        "ssm:DescribeInstanceInformation",\n        "ssm:StartSession",\n        "ssm:TerminateSession"\n    ],\n    "Resource": [\n        "arn:aws:ssm:*::document/AWS-RunShellScript",\n        "arn:aws:ssm:*::document/AWS-RunPowerShellScript"\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"adding-tags-to-ec2-instances",children:"Adding Tags to EC2 Instances"}),"\n",(0,t.jsxs)(n.p,{children:["To implement this, add the tag ",(0,t.jsx)(n.code,{children:"CadoResponseSSMEnabled: True"})," to the EC2 instances you want to allow access via SSM. You can manage tags in the AWS Management Console:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"IAM Tagging",src:s(21139).A+"",width:"1662",height:"822"})}),"\n",(0,t.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,t.jsx)(n.p,{children:"If an EC2 instance you are trying to access via SSM does not have the required tag, you will encounter the following error:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"An error occurred (AccessDeniedException) when calling the SendCommand operation: User: xxx is not authorized to perform: ssm:SendCommand on resource: i-xxx because no identity-based policy allows the ssm:SendCommand action.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This error indicates that the required tag (",(0,t.jsx)(n.code,{children:"CadoResponseSSMEnabled: True"}),") is missing from the instance."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},21139:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ssm_tag-dc33a08e7afa2c85a1ba6b9cb4c8492b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);