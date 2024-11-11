"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7055],{4768:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(5893),t=n(1151);const i={title:"KMS support",hide_title:!0,sidebar_position:5},r="How does Cado support KMS in AWS?",a={id:"cado/deploy/aws/iam/aws-kms",title:"KMS support",description:"The Cado platform supports importing EC2 instances with encrypted volumes, provided the appropriate permissions are granted to the CadoResponseRole.",source:"@site/docs/cado/deploy/aws/iam/aws-kms.md",sourceDirName:"cado/deploy/aws/iam",slug:"/cado/deploy/aws/iam/aws-kms",permalink:"/cado/deploy/aws/iam/aws-kms",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/iam/aws-kms.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:5,frontMatter:{title:"KMS support",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"IAM permissions description",permalink:"/cado/deploy/aws/iam/iam-description"},next:{title:"Reduce KMS permissions",permalink:"/cado/deploy/aws/iam/tighten-kms"}},c={},l=[{value:"Using Custom Keys",id:"using-custom-keys",level:2},{value:"Recommended Permissions Configuration",id:"recommended-permissions-configuration",level:3},{value:"Cross-Region Support",id:"cross-region-support",level:2},{value:"Cross-Account Using Customer Managed Keys",id:"cross-account-using-customer-managed-keys",level:2},{value:"Cross-Account Using AWS Default Keys",id:"cross-account-using-aws-default-keys",level:2},{value:"Resolving KMS Support Issues",id:"resolving-kms-support-issues",level:2},{value:"How KMS-Encypted EBS Volumes Are Processed",id:"how-kms-encypted-ebs-volumes-are-processed",level:3},{value:"Using Cado Host to Bypass KMS",id:"using-cado-host-to-bypass-kms",level:3},{value:"Creating an Unencrypted Volume to Bypass KMS",id:"creating-an-unencrypted-volume-to-bypass-kms",level:3},{value:"Debugging KMS IAM Permissions",id:"debugging-kms-iam-permissions",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"how-does-cado-support-kms-in-aws",children:"How does Cado support KMS in AWS?"}),"\n",(0,o.jsxs)(s.p,{children:["The Cado platform supports importing EC2 instances with encrypted volumes, provided the appropriate permissions are granted to the ",(0,o.jsx)(s.code,{children:"CadoResponseRole"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["By default, AWS provides keys in your account, which allow access based on the default policy below. This setup is supported by the Cado platform out of the box. For more information on KMS, refer to the ",(0,o.jsx)(s.a,{href:"https://aws.amazon.com/kms/",children:"AWS Key Management Service (KMS)"})," documentation."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "*"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*",\n        "kms:CreateGrant",\n        "kms:DescribeKey"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "StringEquals": {\n            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",\n            "kms:CallerAccount": "012345678910"\n        }\n    }\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["This policy allows all ",(0,o.jsx)(s.code,{children:"Principals"})," (users, roles, etc.) in the account and region specified in the ",(0,o.jsx)(s.code,{children:"Condition"})," to perform the listed actions."]}),"\n",(0,o.jsx)(s.h2,{id:"using-custom-keys",children:"Using Custom Keys"}),"\n",(0,o.jsxs)(s.p,{children:["When using custom KMS keys, the following actions must be granted to ",(0,o.jsx)(s.code,{children:"CadoResponseRole"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n'})}),"\n",(0,o.jsx)(s.h3,{id:"recommended-permissions-configuration",children:"Recommended Permissions Configuration"}),"\n",(0,o.jsxs)(s.p,{children:["The recommended approach is to grant permissions to ",(0,o.jsx)(s.code,{children:"myCadoResponseRole"})," directly while withholding ",(0,o.jsx)(s.code,{children:'"CreateGrant"'})," for specific resources:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["You may choose not to grant ",(0,o.jsx)(s.code,{children:"kms:CreateGrant"})," to ",(0,o.jsx)(s.code,{children:"CadoResponseRole"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Your policy should provide access to ",(0,o.jsx)(s.code,{children:"CadoResponseRole"})," for the necessary permissions (excluding ",(0,o.jsx)(s.code,{children:"CreateGrant"}),")."]}),"\n",(0,o.jsxs)(s.li,{children:["Limit the policy to allow ",(0,o.jsx)(s.code,{children:"CreateGrant"})," permission only for AWS resources."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["A sample policy is shown below (adjust the ",(0,o.jsx)(s.code,{children:"Principal"})," and add ",(0,o.jsx)(s.code,{children:"Condition"})," as needed):"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'[\n  {\n    "Sid": "Allow required KMS permissions",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*"\n    ],\n    "Resource": "*"\n  },\n  {\n    "Sid": "Allow attachment of persistent resources",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:CreateGrant"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "Bool": {\n            "kms:GrantIsForAWSResource": true\n        }\n      }\n  }\n]\n'})}),"\n",(0,o.jsx)(s.h2,{id:"cross-region-support",children:"Cross-Region Support"}),"\n",(0,o.jsxs)(s.p,{children:["When performing cross-region acquisitions, ensure that the relevant policy statements apply to the region where your Cado platform is located. Check that the policy ",(0,o.jsx)(s.code,{children:"Conditions"})," do not block the platform's access."]}),"\n",(0,o.jsx)(s.h2,{id:"cross-account-using-customer-managed-keys",children:"Cross-Account Using Customer Managed Keys"}),"\n",(0,o.jsx)(s.p,{children:"When acquiring cross-account resources, follow these guidelines:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Grant ",(0,o.jsx)(s.code,{children:"kms:CreateGrant"})," permissions to the role being assumed in the ",(0,o.jsx)(s.strong,{children:"target account"})," from which EC2 instances are being acquired. For more details, refer to the ",(0,o.jsx)(s.a,{href:"/cado/deploy/cross/cross-account-creation",children:"Cross-Account Acquisition"})," documentation."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:['Alternatively, you can use the permissions in the "Custom Keys" section. Ensure that both the primary and secondary account roles are allowed principals for the required actions: ',(0,o.jsx)(s.code,{children:"kms:Encrypt"}),", ",(0,o.jsx)(s.code,{children:"kms:Decrypt"}),", ",(0,o.jsx)(s.code,{children:"kms:ReEncrypt*"}),", and ",(0,o.jsx)(s.code,{children:"kms:GenerateDataKey*"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"cross-account-using-aws-default-keys",children:"Cross-Account Using AWS Default Keys"}),"\n",(0,o.jsxs)(s.p,{children:["When importing EC2 instances with default KMS-encrypted volumes for the first time, it is recommended to include the following permission in the ",(0,o.jsx)(s.code,{children:"myCadoResponseRole"})," in the ",(0,o.jsx)(s.strong,{children:"account where the Cado platform is deployed"}),". Failure to do so may result in IAM errors until this permission is added. Once the import is successful, the permission can be removed."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"iam:CreateServiceLinkedRole"\n\t],\n\t"Resource": "arn:aws:iam::*:role/aws-service-role/mrk.kms.amazonaws.com/AWSServiceRoleForKeyManagementServiceMultiRegionKeys",\n\t"Condition": {\n\t\t"StringLike": {\n\t\t\t"iam:AWSServiceName": "mrk.kms.amazonaws.com"\n\t\t}\n\t}\n}\n'})}),"\n",(0,o.jsxs)(s.p,{children:["More information can be found in the ",(0,o.jsx)(s.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/using-service-linked-roles.html#slr-permissions-multi-region",children:"AWS KMS documentation"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["To import KMS-encrypted EC2 instances across accounts, the following permissions are required in ",(0,o.jsx)(s.code,{children:"myCadoResponseRole"})," in the ",(0,o.jsx)(s.strong,{children:"account where the Cado platform is deployed"}),". There is no need to modify the cross-account role."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",children:'{\n\t"Sid": "RequiredForKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:Encrypt",\n\t\t"kms:Decrypt",\n\t\t"kms:ReEncrypt*",\n\t\t"kms:GenerateDataKey*",\n\t\t"kms:CreateGrant"\n\t],\n\t"Resource": "*"\n},\n{\n\t"Sid": "RequiredForCrossAccountDefaultKmsEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:CreateKey",\n\t\t"kms:CreateAlias",\n\t\t"kms:DescribeKey",\n\t\t"kms:ListAliases"\n\t],\n\t"Resource": "*"\n},\n{\n\t"Sid": "RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import",\n\t"Effect": "Allow",\n\t"Action": [\n\t\t"kms:DeleteAlias",\n\t\t"kms:ReplicateKey",\n\t\t"kms:ScheduleKeyDeletion"\n\t],\n\t"Resource": "*",\n\t"Condition": {\n\t\t "ForAllValues:StringLike": {\n\t\t   "kms:ResourceAliases": [\n\t\t     "alias/CadoResponse-KMS-Alias*"\n\t\t   ]\n\t\t },\n\t\t "ForAnyValue:StringLike": {\n\t\t   "kms:ResourceAliases": [\n\t\t     "alias/CadoResponse-KMS-Alias*"\n\t\t   ]\n\t\t }\n\t}\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"resolving-kms-support-issues",children:"Resolving KMS Support Issues"}),"\n",(0,o.jsx)(s.p,{children:"Configuring KMS policies can be challenging, especially for cross-account acquisitions or custom setups."}),"\n",(0,o.jsx)(s.h3,{id:"how-kms-encypted-ebs-volumes-are-processed",children:"How KMS-Encypted EBS Volumes Are Processed"}),"\n",(0,o.jsxs)(s.p,{children:["When acquiring KMS-encrypted volumes, the platform attempts to access a snapshot of the volume using its IAM permissions. If access fails, the platform generates a temporary key to re-encrypt the snapshot and create a new volume for processing. The exact steps depend on your KMS key policy and IAM role permissions. Errors will be displayed if the necessary permissions are missing. For more information, refer to the ",(0,o.jsx)(s.a,{href:"https://docs.aws.amazon.com/kms/latest/APIReference/API_ReEncrypt.html",children:"AWS documentation on ReEncryption"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"using-cado-host-to-bypass-kms",children:"Using Cado Host to Bypass KMS"}),"\n",(0,o.jsx)(s.p,{children:"If you cannot obtain a full disk capture, you can bypass KMS encryption by using Cado Host:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'If SSM is enabled on the system, choose "Use Alternate Triage Acquisition" when acquiring the system.'}),"\n",(0,o.jsx)(s.li,{children:'Alternatively, connect via SSH or RDP and collect forensic artifacts by selecting "Import > Cado Host."'}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"creating-an-unencrypted-volume-to-bypass-kms",children:"Creating an Unencrypted Volume to Bypass KMS"}),"\n",(0,o.jsxs)(s.p,{children:["You can remove KMS encryption from a volume by following the steps in this ",(0,o.jsx)(s.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/",children:"AWS guide"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"debugging-kms-iam-permissions",children:"Debugging KMS IAM Permissions"}),"\n",(0,o.jsxs)(s.p,{children:["You can identify simple permission issues using Cado\u2019s automated health checks. For more detailed debugging, use the ",(0,o.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html",children:"AWS Policy Simulator"})," to test policies and identify permission issues."]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>r});var o=n(7294);const t={},i=o.createContext(t);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);