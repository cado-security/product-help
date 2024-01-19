"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2159],{5029:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(5893),o=s(1151);const i={title:"KMS Support",hide_title:!0,sidebar_position:2},r="AWS KMS Support",a={id:"cado-response/deploy/aws/data-encryption/aws-kms",title:"KMS Support",description:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.",source:"@site/docs/cado-response/deploy/aws/data-encryption/aws-kms.md",sourceDirName:"cado-response/deploy/aws/data-encryption",slug:"/cado-response/deploy/aws/data-encryption/aws-kms",permalink:"/cado-response/deploy/aws/data-encryption/aws-kms",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/data-encryption/aws-kms.md",tags:[],version:"current",lastUpdatedAt:1705665258,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:2,frontMatter:{title:"KMS Support",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/aws/data-encryption/data-encryption-overview"},next:{title:"Logging",permalink:"/cado-response/deploy/aws/logging"}},c={},l=[{value:"Custom Keys",id:"custom-keys",level:3},{value:"Cross Region",id:"cross-region",level:3},{value:"Cross Account using Customer Managed Keys",id:"cross-account-using-customer-managed-keys",level:3},{value:"Cross Account using AWS default keys",id:"cross-account-using-aws-default-keys",level:3},{value:"Resolving Issues with KMS Support",id:"resolving-issues-with-kms-support",level:3},{value:"Using Cado Host to bypass KMS",id:"using-cado-host-to-bypass-kms",level:4},{value:"Bypassing KMS by creating an Unencrypted Volume",id:"bypassing-kms-by-creating-an-unencrypted-volume",level:4},{value:"Debugging IAM Permissions for KMS",id:"debugging-iam-permissions-for-kms",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aws-kms-support",children:"AWS KMS Support"}),"\n",(0,t.jsx)(n.p,{children:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole."}),"\n",(0,t.jsxs)(n.p,{children:["AWS provides default keys in your account. These provide default access with the statement below, and this default is supported by the platform out of the box.  For more information on KMS, you can visit the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/kms/",children:"AWS Key Management Service (KMS)"})})," page."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "*"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*",\n        "kms:CreateGrant",\n        "kms:DescribeKey"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "StringEquals": {\n            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",\n            "kms:CallerAccount": "012345678910"\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As the Sid suggests: all ",(0,t.jsx)(n.code,{children:"Principals"})," (users/roles etc) in the account and region specified in ",(0,t.jsx)(n.code,{children:"Condition"})," have permission to perform the given actions."]}),"\n",(0,t.jsx)(n.h3,{id:"custom-keys",children:"Custom Keys"}),"\n",(0,t.jsx)(n.p,{children:"When using custom keys the required actions to CadoResponseRole are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["There are a number of options available - but the recommended approach is adding required permisisons to ",(0,t.jsx)(n.code,{children:"myCadoResponseRole"})," directly and witholding ",(0,t.jsx)(n.code,{children:'"CreateGrant"'})," for resources only:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You may not wish to give kms",":CreateGrant"," permission to CadoResponseRole itself"]}),"\n",(0,t.jsx)(n.li,{children:"Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)"}),"\n",(0,t.jsx)(n.li,{children:"You may then tighten the policy to only allow CreateGrant permission to AWS resources"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["An sample policy is shown below (be sure to adjust ",(0,t.jsx)(n.code,{children:"Principal"})," and add ",(0,t.jsx)(n.code,{children:"Condition"})," according to your needs):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "Sid": "Allow required KMS permissions",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n          "kms:Encrypt",\n          "kms:Decrypt",\n          "kms:ReEncrypt*",\n          "kms:GenerateDataKey*"\n      ],\n    "Resource": "*"\n  },\n  {\n    "Sid": "Allow attachment of persistent resources",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:CreateGrant"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "Bool": {\n            "kms:GrantIsForAWSResource": true\n        }\n      }\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"cross-region",children:"Cross Region"}),"\n",(0,t.jsxs)(n.p,{children:["It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy ",(0,t.jsx)(n.code,{children:"Conditions"})," don't preclude the platform's access)."]}),"\n",(0,t.jsx)(n.h3,{id:"cross-account-using-customer-managed-keys",children:"Cross Account using Customer Managed Keys"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"During both of the following, be sure to reference the specific KMS key your EC2 is encrypted with to ensure minimal scoping."})}),"\n",(0,t.jsxs)(n.p,{children:["The simplest approach is to give ",(0,t.jsx)(n.code,{children:"kms:CreateGrant"})," permissions to the role being assumed ",(0,t.jsx)(n.strong,{children:"in the target account EC2s are being acquired from"}),". See the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"Cross Account Acquisition"})})," instructions for more details on cross account permissions."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to ",(0,t.jsx)(n.code,{children:'"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"'}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"cross-account-using-aws-default-keys",children:"Cross Account using AWS default keys"}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["When importing a Default KMS encrypted EC2 for the first time, it is recommended that you include the following permission for ",(0,t.jsx)(n.code,{children:'"iam:CreateServiceLinkedRole"'})," in the myCadoResponseRole in the ",(0,t.jsx)(n.strong,{children:"account where the Cado platform has been deployed"}),".  Failure to do so may result in IAM errors until the permission has been added.  Once added, and a default encrypted EC2 import has suceeded, the permission can be removed.  While this permission is present in the supplied Terraform and CloudFormation templates, it is reproduced here for your convenience."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"iam:CreateServiceLinkedRole"\n\t],\n\t"Resource": "arn:aws:iam::*:role/aws-service-role/kms.amazonaws.com/*CadoResponse*",\n\t"Condition": {\n\t\t"StringLike": {\n\t\t\t"iam:AWSServiceName": "kms.amazonaws.com"\n\t\t}\n\t}\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["To import EC2s across accounts that are encrypted with AWS default keys, you will require the following permissions in the ",(0,t.jsx)(n.code,{children:"myCadoResponseRole"})," in the ",(0,t.jsx)(n.strong,{children:"account where the Cado Response platform has been deployed"}),".  You will not need to alter your cross-account role.  These permissions are also located in the supplied terraform and cloudformation configurations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:Encrypt",\n\t\t"kms:Decrypt",\n\t\t"kms:ReEncrypt*",\n\t\t"kms:GenerateDataKey*",\n\t\t"kms:CreateGrant"\n\t],\n\t"Resource": "*"\n},\n{\n\t"Sid": "RequiredForCrossAccountDefaultKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:CreateKey",\n\t\t"kms:CreateAlias",\n\t\t"kms:DescribeKey",\n\t\t"kms:ListAliases"\n\t],\n\t"Resource": "*"\n},\n{\n\t"Sid": "RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:DeleteAlias",\n\t\t"kms:ReplicateKey",\n\t\t"kms:ScheduleKeyDeletion"\n\t],\n\t"Resource": "*",\n\t"Condition": {\n\t\t "ForAllValues:StringLike": {\n\t\t   "kms:ResourceAliases": [\n\t\t     "alias/CadoResponse-KMS-Alias*"\n\t\t   ]\n\t\t },\n\t\t "ForAnyValue:StringLike": {\n\t\t   "kms:ResourceAliases": [\n\t\t     "alias/CadoResponse-KMS-Alias*"\n\t\t   ]\n\t\t }\n\t}\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"resolving-issues-with-kms-support",children:"Resolving Issues with KMS Support"}),"\n",(0,t.jsx)(n.p,{children:"Getting the right KMS policies can prove difficult, particularly for cross-account Default KMS acquisitions and custom configurations."}),"\n",(0,t.jsx)(n.h4,{id:"using-cado-host-to-bypass-kms",children:"Using Cado Host to bypass KMS"}),"\n",(0,t.jsx)(n.p,{children:"If you are unable to obtain a full disk capture, you can bypass KMS by acquiring a system using Cado Host:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If the system has SSM enabled, select "Use Alternate Triage Acquisition" when acquiring the system'}),"\n",(0,t.jsx)(n.li,{children:"Conect to the system via SSH or RDP, and perform a collection of Forensic Artifacts by going to Import > Forensic Artifacts"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"bypassing-kms-by-creating-an-unencrypted-volume",children:"Bypassing KMS by creating an Unencrypted Volume"}),"\n",(0,t.jsxs)(n.p,{children:["You can remove KMS from a volume by following the steps at ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/",children:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/"})]}),"\n",(0,t.jsx)(n.h4,{id:"debugging-iam-permissions-for-kms",children:"Debugging IAM Permissions for KMS"}),"\n",(0,t.jsxs)(n.p,{children:["Simple issues can be identified by the automated healthchecks present in Cado Response.  Alternatively (Or when more granular output is required), you can debug any IAM permissions using the AWS Policy Simulator at ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html",children:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(7294);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);