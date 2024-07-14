"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8987],{4407:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(5893),o=n(1151);const i={title:"KMS Support",hide_title:!0,sidebar_position:2},r="AWS KMS Support",a={id:"cado-response/deploy/aws/iam/aws-kms",title:"KMS Support",description:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.",source:"@site/docs/cado-response/deploy/aws/iam/aws-kms.md",sourceDirName:"cado-response/deploy/aws/iam",slug:"/cado-response/deploy/aws/iam/aws-kms",permalink:"/cado-response/deploy/aws/iam/aws-kms",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/iam/aws-kms.md",tags:[],version:"current",lastUpdatedAt:1720952854,formattedLastUpdatedAt:"Jul 14, 2024",sidebarPosition:2,frontMatter:{title:"KMS Support",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/aws/iam/deployment-iam-considerations"},next:{title:"Removing and Tightening IAM Permissions",permalink:"/cado-response/deploy/aws/iam/tightening-iam"}},c={},l=[{value:"Custom Keys",id:"custom-keys",level:3},{value:"Cross Region",id:"cross-region",level:3},{value:"Cross Account using Customer Managed Keys",id:"cross-account-using-customer-managed-keys",level:3},{value:"Cross Account using AWS default keys",id:"cross-account-using-aws-default-keys",level:3},{value:"Resolving Issues with KMS Support",id:"resolving-issues-with-kms-support",level:3},{value:"How KMS Encrypted EBS Volumes are Processed",id:"how-kms-encrypted-ebs-volumes-are-processed",level:4},{value:"Using Cado Host to bypass KMS",id:"using-cado-host-to-bypass-kms",level:4},{value:"Bypassing KMS by creating an Unencrypted Volume",id:"bypassing-kms-by-creating-an-unencrypted-volume",level:4},{value:"Debugging IAM Permissions for KMS",id:"debugging-iam-permissions-for-kms",level:4}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"aws-kms-support",children:"AWS KMS Support"}),"\n",(0,t.jsx)(s.p,{children:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole."}),"\n",(0,t.jsxs)(s.p,{children:["AWS provides default keys in your account. These provide default access with the statement below, and this default is supported by the platform out of the box.  For more information on KMS, you can visit the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://aws.amazon.com/kms/",children:"AWS Key Management Service (KMS)"})})," page."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "*"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*",\n        "kms:CreateGrant",\n        "kms:DescribeKey"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "StringEquals": {\n            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",\n            "kms:CallerAccount": "012345678910"\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["As the Sid suggests: all ",(0,t.jsx)(s.code,{children:"Principals"})," (users/roles etc) in the account and region specified in ",(0,t.jsx)(s.code,{children:"Condition"})," have permission to perform the given actions."]}),"\n",(0,t.jsx)(s.h3,{id:"custom-keys",children:"Custom Keys"}),"\n",(0,t.jsx)(s.p,{children:"When using custom keys the required actions to CadoResponseRole are:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["There are a number of options available - but the recommended approach is adding required permisisons to ",(0,t.jsx)(s.code,{children:"myCadoResponseRole"})," directly and witholding ",(0,t.jsx)(s.code,{children:'"CreateGrant"'})," for resources only:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You may not wish to give kms",":CreateGrant"," permission to CadoResponseRole itself."]}),"\n",(0,t.jsx)(s.li,{children:"Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)."}),"\n",(0,t.jsx)(s.li,{children:"You may then tighten the policy to only allow CreateGrant permission to AWS resources."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["An sample policy is shown below (be sure to adjust ",(0,t.jsx)(s.code,{children:"Principal"})," and add ",(0,t.jsx)(s.code,{children:"Condition"})," according to your needs):"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'[\n  {\n    "Sid": "Allow required KMS permissions",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n          "kms:Encrypt",\n          "kms:Decrypt",\n          "kms:ReEncrypt*",\n          "kms:GenerateDataKey*"\n      ],\n    "Resource": "*"\n  },\n  {\n    "Sid": "Allow attachment of persistent resources",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:CreateGrant"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "Bool": {\n            "kms:GrantIsForAWSResource": true\n        }\n      }\n  }\n]\n'})}),"\n",(0,t.jsx)(s.h3,{id:"cross-region",children:"Cross Region"}),"\n",(0,t.jsxs)(s.p,{children:["It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy ",(0,t.jsx)(s.code,{children:"Conditions"})," don't preclude the platform's access)."]}),"\n",(0,t.jsx)(s.h3,{id:"cross-account-using-customer-managed-keys",children:"Cross Account using Customer Managed Keys"}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"During both of the following, be sure to reference the specific KMS key your EC2 is encrypted with to ensure minimal scoping."})}),"\n",(0,t.jsxs)(s.p,{children:["The simplest approach is to give ",(0,t.jsx)(s.code,{children:"kms:CreateGrant"})," permissions to the role being assumed ",(0,t.jsx)(s.strong,{children:"in the target account EC2s are being acquired from"}),". See the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"Cross Account Acquisition"})})," instructions for more details on cross account permissions."]}),"\n",(0,t.jsxs)(s.p,{children:["Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to ",(0,t.jsx)(s.code,{children:'"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"'}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"cross-account-using-aws-default-keys",children:"Cross Account using AWS default keys"}),"\n",(0,t.jsxs)(s.admonition,{type:"warning",children:[(0,t.jsxs)(s.p,{children:["When importing a Default KMS encrypted EC2 for the first time, it is recommended that you include the following permission for ",(0,t.jsx)(s.code,{children:'"iam:CreateServiceLinkedRole"'})," in the myCadoResponseRole in the ",(0,t.jsx)(s.strong,{children:"account where the Cado platform has been deployed"}),".  Failure to do so may result in IAM errors until the permission has been added.  Once added, and a default encrypted EC2 import has suceeded, the permission can be removed.  While this permission is present in the supplied Terraform and CloudFormation templates, it is reproduced here for your convenience.  ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/using-service-linked-roles.html#slr-permissions-multi-region",children:"More information can be found in the AWS KMS documentation."})})]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"iam:CreateServiceLinkedRole"\n\t],\n\t"Resource": "arn:aws:iam::*:role/aws-service-role/mrk.kms.amazonaws.com/AWSServiceRoleForKeyManagementServiceMultiRegionKeys",\n\t"Condition": {\n\t\t"StringLike": {\n\t\t\t"iam:AWSServiceName": "mrk.kms.amazonaws.com"\n\t\t}\n\t}\n}\n'})})]}),"\n",(0,t.jsxs)(s.p,{children:["To import EC2s across accounts that are encrypted with AWS default keys, you will require the following permissions in the ",(0,t.jsx)(s.code,{children:"myCadoResponseRole"})," in the ",(0,t.jsx)(s.strong,{children:"account where the Cado Response platform has been deployed"}),".  You will not need to alter your cross-account role.  These permissions are also located in the supplied terraform and cloudformation configurations."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:Encrypt",\n\t\t"kms:Decrypt",\n\t\t"kms:ReEncrypt*",\n\t\t"kms:GenerateDataKey*",\n\t\t"kms:CreateGrant"\n\t],\n\t"Resource": "*"\n},\n{\n\t"Sid": "RequiredForCrossAccountDefaultKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:CreateKey",\n\t\t"kms:CreateAlias",\n\t\t"kms:DescribeKey",\n\t\t"kms:ListAliases"\n\t],\n\t"Resource": "*"\n},\n{\n\t"Sid": "RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:DeleteAlias",\n\t\t"kms:ReplicateKey",\n\t\t"kms:ScheduleKeyDeletion"\n\t],\n\t"Resource": "*",\n\t"Condition": {\n\t\t "ForAllValues:StringLike": {\n\t\t   "kms:ResourceAliases": [\n\t\t     "alias/CadoResponse-KMS-Alias*"\n\t\t   ]\n\t\t },\n\t\t "ForAnyValue:StringLike": {\n\t\t   "kms:ResourceAliases": [\n\t\t     "alias/CadoResponse-KMS-Alias*"\n\t\t   ]\n\t\t }\n\t}\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"resolving-issues-with-kms-support",children:"Resolving Issues with KMS Support"}),"\n",(0,t.jsx)(s.p,{children:"Getting the right KMS policies can prove difficult, particularly for cross-account Default KMS acquisitions and custom configurations."}),"\n",(0,t.jsx)(s.h4,{id:"how-kms-encrypted-ebs-volumes-are-processed",children:"How KMS Encrypted EBS Volumes are Processed"}),"\n",(0,t.jsxs)(s.p,{children:["If a volume is encrypted with a KMS key, the platform will attempt to access a snapshot of the volume if it's role has IAM permissions to do so.\nIf not, it will attempt to generate a temporary key to re-encrypt a snapshot of the volume, and then create a new volume from that snapshot for processing.\nThe exact details will depend upon your KMS key policy and IAM role permissions, with error handling to advise during processing if the role does not have the necessary permissions.\nFor more details, please refer to the ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html",children:"AWS documentation"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"using-cado-host-to-bypass-kms",children:"Using Cado Host to bypass KMS"}),"\n",(0,t.jsx)(s.p,{children:"If you are unable to obtain a full disk capture, you can bypass KMS by acquiring a system using Cado Host:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'If the system has SSM enabled, select "Use Alternate Triage Acquisition" when acquiring the system'}),"\n",(0,t.jsx)(s.li,{children:"Conect to the system via SSH or RDP, and perform a collection of Forensic Artifacts by going to Import > Cado Host"}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"bypassing-kms-by-creating-an-unencrypted-volume",children:"Bypassing KMS by creating an Unencrypted Volume"}),"\n",(0,t.jsxs)(s.p,{children:["You can remove KMS from a volume by following the steps at ",(0,t.jsx)(s.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/",children:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/"})]}),"\n",(0,t.jsx)(s.h4,{id:"debugging-iam-permissions-for-kms",children:"Debugging IAM Permissions for KMS"}),"\n",(0,t.jsxs)(s.p,{children:["Simple issues can be identified by the automated healthchecks present in Cado Response.  Alternatively (Or when more granular output is required), you can debug any IAM permissions using the AWS Policy Simulator at ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html",children:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var t=n(7294);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);