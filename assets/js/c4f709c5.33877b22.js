"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2159],{5029:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(5893),t=n(1151);const r={title:"KMS Support",hide_title:!0,sidebar_position:2},i="AWS KMS Support",a={id:"cado-response/deploy/aws/data-encryption/aws-kms",title:"KMS Support",description:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.",source:"@site/docs/cado-response/deploy/aws/data-encryption/aws-kms.md",sourceDirName:"cado-response/deploy/aws/data-encryption",slug:"/cado-response/deploy/aws/data-encryption/aws-kms",permalink:"/cado-response/deploy/aws/data-encryption/aws-kms",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/data-encryption/aws-kms.md",tags:[],version:"current",lastUpdatedAt:1703623587,formattedLastUpdatedAt:"Dec 26, 2023",sidebarPosition:2,frontMatter:{title:"KMS Support",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/aws/data-encryption/data-encryption-overview"},next:{title:"Logging",permalink:"/cado-response/deploy/aws/logging"}},c={},l=[{value:"Custom Keys",id:"custom-keys",level:3},{value:"Cross Region",id:"cross-region",level:3},{value:"Cross Account",id:"cross-account",level:3},{value:"Cross Account using AWS default keys",id:"cross-account-using-aws-default-keys",level:3},{value:"Resolving Issues with KMS Support",id:"resolving-issues-with-kms-support",level:3},{value:"Using Cado Host to bypass KMS",id:"using-cado-host-to-bypass-kms",level:4},{value:"Bypassing KMS by creating an Unencrypted Volume",id:"bypassing-kms-by-creating-an-unencrypted-volume",level:3},{value:"Debugging IAM Permissions for KMS",id:"debugging-iam-permissions-for-kms",level:4}];function d(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"aws-kms-support",children:"AWS KMS Support"}),"\n",(0,o.jsx)(s.p,{children:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole."}),"\n",(0,o.jsxs)(s.p,{children:["AWS provides default keys in your account. These provide default access with the statement below, and this default is supported by the platform out of the box.  For more information on KMS, you can visit the ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.a,{href:"https://aws.amazon.com/kms/",children:"AWS Key Management Service (KMS)"})})," page."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "*"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*",\n        "kms:CreateGrant",\n        "kms:DescribeKey"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "StringEquals": {\n            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",\n            "kms:CallerAccount": "012345678910"\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["As the Sid suggests: all ",(0,o.jsx)(s.code,{children:"Principals"})," (users/roles etc) in the account and region specified in ",(0,o.jsx)(s.code,{children:"Condition"})," have permission to perform the given actions."]}),"\n",(0,o.jsx)(s.h3,{id:"custom-keys",children:"Custom Keys"}),"\n",(0,o.jsx)(s.p,{children:"When using custom keys the required actions to CadoResponseRole are:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n'})}),"\n",(0,o.jsx)(s.p,{children:"There are a number of options available - but recommended approaches are below:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["You may choose to forgo giving all the permissions and only provide ",(0,o.jsx)(s.code,{children:"kms:CreateGrant"})," to CadoResponseRole"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"This is recommended if the goal is simplicity, especially when there are cross account or cross region considerations (see below)"}),"\n",(0,o.jsx)(s.li,{children:"Grants will be created and retired as required by the platform"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:"Give required permissions to CadoResponseRole directly and withhold CreateGrant for resources only"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["You may not wish to give kms",":CreateGrant"," permission to CadoResponseRole itself"]}),"\n",(0,o.jsx)(s.li,{children:"Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)"}),"\n",(0,o.jsx)(s.li,{children:"You may then tighten the policy to only allow CreateGrant permission to AWS resources"}),"\n",(0,o.jsxs)(s.li,{children:["Example (be sure to adjust ",(0,o.jsx)(s.code,{children:"Principal"})," and add ",(0,o.jsx)(s.code,{children:"Condition"})," according to your needs)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'[\n  {\n    "Sid": "Allow required KMS permissions",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n          "kms:Encrypt",\n          "kms:Decrypt",\n          "kms:ReEncrypt*",\n          "kms:GenerateDataKey*"\n      ],\n    "Resource": "*"\n  },\n  {\n    "Sid": "Allow attachment of persistent resources",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:CreateGrant"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "Bool": {\n            "kms:GrantIsForAWSResource": true\n        }\n      }\n  }\n]\n'})}),"\n",(0,o.jsxs)(s.ol,{start:"3",children:["\n",(0,o.jsx)(s.li,{children:"Alternatively you may use grants to give out the equivalent KMS access for the above options"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"cross-region",children:"Cross Region"}),"\n",(0,o.jsxs)(s.p,{children:["It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy ",(0,o.jsx)(s.code,{children:"Conditions"})," don't preclude the platform's access)."]}),"\n",(0,o.jsx)(s.h3,{id:"cross-account",children:"Cross Account"}),"\n",(0,o.jsxs)(s.p,{children:["The simplest approach is to give ",(0,o.jsx)(s.code,{children:"kms:CreateGrant"})," permissions to the role being assumed ",(0,o.jsx)(s.strong,{children:"in the target account being acquired from"}),". See the ",(0,o.jsx)(s.strong,{children:(0,o.jsx)(s.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"Cross Account Acquisition"})})," instructions for more details on cross account permissions."]}),"\n",(0,o.jsxs)(s.p,{children:["Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to ",(0,o.jsx)(s.code,{children:'"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"'})]}),"\n",(0,o.jsx)(s.h3,{id:"cross-account-using-aws-default-keys",children:"Cross Account using AWS default keys"}),"\n",(0,o.jsxs)(s.p,{children:["To import EC2s across accounts that are encrypted with AWS default keys, you will require the following permissions in the myCadoResponseRole in the ",(0,o.jsx)(s.strong,{children:"account where the Cado Response platform has been deployed"}),".  You will not need to alter your cross-account role.  These permissions are also located in the supplied terraform and cloudformation configurations."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForCrossAccountDefaultKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:CreateKey",\n\t\t"kms:ScheduleKeyDeletion",\n\t\t"kms:DescribeKey",\n\t\t"kms:ListAliases",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*"\n\t],\n\t"Resource": "*"\n},\n'})}),"\n",(0,o.jsx)(s.h3,{id:"resolving-issues-with-kms-support",children:"Resolving Issues with KMS Support"}),"\n",(0,o.jsx)(s.p,{children:"Getting the right KMS policies can prove difficult, particularly for cross-account Default KMS acquisitions and custom configurations."}),"\n",(0,o.jsx)(s.h4,{id:"using-cado-host-to-bypass-kms",children:"Using Cado Host to bypass KMS"}),"\n",(0,o.jsx)(s.p,{children:"If you are unable to obtain a full disk capture, you can bypass KMS by acquiring a system using Cado Host:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'If the system has SSM enabled, select "Use Alternate Triage Acquisition" when acquiring the system'}),"\n",(0,o.jsx)(s.li,{children:"Conect to the system via SSH or RDP, and perform a collection of Forensic Artifacts by going to Import > Forensic Artifacts"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"bypassing-kms-by-creating-an-unencrypted-volume",children:"Bypassing KMS by creating an Unencrypted Volume"}),"\n",(0,o.jsxs)(s.p,{children:["You can remove KMS from a volume by following the steps at ",(0,o.jsx)(s.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/",children:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/"})]}),"\n",(0,o.jsx)(s.h4,{id:"debugging-iam-permissions-for-kms",children:"Debugging IAM Permissions for KMS"}),"\n",(0,o.jsxs)(s.p,{children:["You can debug any IAM permissions using the AWS Policy Simulator at ",(0,o.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html",children:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var o=n(7294);const t={},r=o.createContext(t);function i(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);