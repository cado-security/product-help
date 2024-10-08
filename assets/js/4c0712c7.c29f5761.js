"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6450],{8782:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(5893),t=n(1151);const i={title:"Tighten SSM IAM permissions",hide_title:!0,sidebar_position:6},r=void 0,a={id:"cado-response/deploy/aws/iam/ssm",title:"Tighten SSM IAM permissions",description:"How to tighten IAM permissions for SSM",source:"@site/docs/cado-response/deploy/aws/iam/ssm.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/ssm",permalink:"/cado-response/deploy/aws/iam/ssm",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/ssm.md",tags:[],version:"current",lastUpdatedAt:1728398127,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:6,frontMatter:{title:"Tighten SSM IAM permissions",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"KMS support",permalink:"/cado-response/deploy/aws/iam/aws-kms"},next:{title:"Reduce KMS permissions",permalink:"/cado-response/deploy/aws/iam/tighten-kms"}},d={},c=[{value:"How to tighten IAM permissions for SSM",id:"how-to-tighten-iam-permissions-for-ssm",level:2}];function m(e){const s={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"how-to-tighten-iam-permissions-for-ssm",children:"How to tighten IAM permissions for SSM"}),"\n",(0,o.jsxs)(s.p,{children:["The Cado platform uses AWS SSM to perform live captures of AWS EC2 systems - this provides for a faster mechanism than a full disk acquisition and can also collect process memory. The Cado platform also uses AWS SSM for ",(0,o.jsx)(s.a,{href:"/cado-response/discovery-import/import/aws/aws-ec2#run-command",children:"running commands"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"However, the default IAM permissions will be too wide for many environments, as this provides the Cado platform with permission to execute any command on SSM enabled systems:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'{\n    "Sid": "RequiredForTriageAndRunCommand",\n    "Effect": "Allow",\n    "Action": [\n        "ssm:SendCommand",\n        "ssm:DescribeInstanceInformation",\n        "ssm:StartSession",\n        "ssm:TerminateSession"\n    ],\n    "Resource": [\n        "arn:aws:ec2:*:*:instance/*",\n        "arn:aws:ssm:*::document/AWS-RunShellScript",\n        "arn:aws:ssm:*::document/AWS-RunPowerShellScript"\n    ]\n}\n'})}),"\n",(0,o.jsx)(s.p,{children:"You may wish to scope these permissions down, so SSM commands can only be run against specific Instances. The easiest way to do this, is by adding a Tag Condition to the targeted EC2 resources:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'{\n        "Sid": "RequiredForTriageAndRunCommandTagged",\n        "Effect": "Allow",\n        "Action": [\n            "ssm:SendCommand",\n            "ssm:DescribeInstanceInformation",\n            "ssm:StartSession",\n            "ssm:TerminateSession"\n        ],\n        "Resource": [\n            "arn:aws:ec2:*:*:instance/*"\n        ],\n        "Condition": {\n            "StringLike": {\n                "ssm:resourceTag/CadoResponseSSMEnabled": [\n                    "True"\n                ]\n            }\n        }\n    },\n    {\n        "Sid": "RequiredForTriageAndRunCommandRun",\n        "Effect": "Allow",\n        "Action": [\n            "ssm:SendCommand",\n            "ssm:DescribeInstanceInformation",\n            "ssm:StartSession",\n            "ssm:TerminateSession"\n        ],\n        "Resource": [\n            "arn:aws:ssm:*::document/AWS-RunShellScript",\n            "arn:aws:ssm:*::document/AWS-RunPowerShellScript"\n        ]\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["Then adding the tag to the specific EC2 you wish to access with SSM:\n",(0,o.jsx)(s.img,{alt:"IAM",src:n(8248).Z+"",width:"1662",height:"822"})]}),"\n",(0,o.jsxs)(s.p,{children:["If an EC2 you are acquiring with SSM does not have the required Tag, you will receive an error such as:\nAn error occurred (AccessDeniedException) when calling the SendCommand operation: User: xxx is not authorized to perform: ssm",":SendCommand"," on resource: i-xxx because no identity-based policy allows the ssm",":SendCommand"," action"]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8248:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/ssm_tag-2de7a9a0e47b507498f19f3d125fdf16.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var o=n(7294);const t={},i=o.createContext(t);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);