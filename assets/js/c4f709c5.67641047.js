"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),s=(n(7294),n(3905));const r={title:"KMS Support",hide_title:!0,sidebar_position:2},a="AWS KMS Support",i={unversionedId:"cado-response/deploy/aws/data-encryption/aws-kms",id:"cado-response/deploy/aws/data-encryption/aws-kms",title:"KMS Support",description:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.",source:"@site/docs/cado-response/deploy/aws/data-encryption/aws-kms.md",sourceDirName:"cado-response/deploy/aws/data-encryption",slug:"/cado-response/deploy/aws/data-encryption/aws-kms",permalink:"/cado-response/deploy/aws/data-encryption/aws-kms",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/data-encryption/aws-kms.md",tags:[],version:"current",lastUpdatedAt:1701461172,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:2,frontMatter:{title:"KMS Support",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/aws/data-encryption/data-encryption-overview"},next:{title:"Logging",permalink:"/cado-response/deploy/aws/logging"}},l={},p=[{value:"Custom Keys",id:"custom-keys",level:3},{value:"Cross Region",id:"cross-region",level:3},{value:"Cross Account",id:"cross-account",level:3},{value:"Cross Account using AWS default keys",id:"cross-account-using-aws-default-keys",level:3},{value:"Resolving Issues with KMS Support",id:"resolving-issues-with-kms-support",level:3},{value:"Using Cado Host to bypass KMS",id:"using-cado-host-to-bypass-kms",level:4},{value:"Bypassing KMS by creating an Unencrypted Volume",id:"bypassing-kms-by-creating-an-unencrypted-volume",level:3},{value:"Debugging IAM Permissions for KMS",id:"debugging-iam-permissions-for-kms",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"aws-kms-support"},"AWS KMS Support"),(0,s.kt)("p",null,"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole. "),(0,s.kt)("p",null,"AWS provides default keys in your account. These provide default access with the statement below, and this default is supported by the platform out of the box.  For more information on KMS, you can visit the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/kms/"},"AWS Key Management Service (KMS)"))," page."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "*"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*",\n        "kms:CreateGrant",\n        "kms:DescribeKey"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "StringEquals": {\n            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",\n            "kms:CallerAccount": "012345678910"\n        }\n    }\n}\n')),(0,s.kt)("p",null,"As the Sid suggests: all ",(0,s.kt)("inlineCode",{parentName:"p"},"Principals")," (users/roles etc) in the account and region specified in ",(0,s.kt)("inlineCode",{parentName:"p"},"Condition")," have permission to perform the given actions."),(0,s.kt)("h3",{id:"custom-keys"},"Custom Keys"),(0,s.kt)("p",null,"When using custom keys the required actions to CadoResponseRole are:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n')),(0,s.kt)("p",null,"There are a number of options available - but recommended approaches are below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You may choose to forgo giving all the permissions and only provide ",(0,s.kt)("inlineCode",{parentName:"p"},"kms:CreateGrant")," to CadoResponseRole"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"This is recommended if the goal is simplicity, especially when there are cross account or cross region considerations (see below)"),(0,s.kt)("li",{parentName:"ul"},"Grants will be created and retired as required by the platform"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Give required permissions to CadoResponseRole directly and withhold CreateGrant for resources only "),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"You may not wish to give kms:CreateGrant permission to CadoResponseRole itself"),(0,s.kt)("li",{parentName:"ul"},"Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)"),(0,s.kt)("li",{parentName:"ul"},"You may then tighten the policy to only allow CreateGrant permission to AWS resources"),(0,s.kt)("li",{parentName:"ul"},"Example (be sure to adjust ",(0,s.kt)("inlineCode",{parentName:"li"},"Principal")," and add ",(0,s.kt)("inlineCode",{parentName:"li"},"Condition")," according to your needs)")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Sid": "Allow required KMS permissions",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n          "kms:Encrypt",\n          "kms:Decrypt",\n          "kms:ReEncrypt*",\n          "kms:GenerateDataKey*"\n      ],\n    "Resource": "*"\n  },\n  {\n    "Sid": "Allow attachment of persistent resources",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:CreateGrant"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "Bool": {\n            "kms:GrantIsForAWSResource": true\n        }\n      }\n  }\n]\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Alternatively you may use grants to give out the equivalent KMS access for the above options")),(0,s.kt)("h3",{id:"cross-region"},"Cross Region"),(0,s.kt)("p",null,"It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy ",(0,s.kt)("inlineCode",{parentName:"p"},"Conditions")," don't preclude the platform's access)."),(0,s.kt)("h3",{id:"cross-account"},"Cross Account"),(0,s.kt)("p",null,"The simplest approach is to give ",(0,s.kt)("inlineCode",{parentName:"p"},"kms:CreateGrant")," permissions to the role being assumed ",(0,s.kt)("strong",{parentName:"p"},"in the target account being acquired from"),". See the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"/cado-response/deploy/aws/iam/cross-account-creation"},"Cross Account Acquisition"))," instructions for more details on cross account permissions."),(0,s.kt)("p",null,"Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to ",(0,s.kt)("inlineCode",{parentName:"p"},'"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"')),(0,s.kt)("h3",{id:"cross-account-using-aws-default-keys"},"Cross Account using AWS default keys"),(0,s.kt)("p",null,"To import EC2s across accounts that are encrypted with AWS default keys, you will require the following permissions in the myCadoResponseRole in the ",(0,s.kt)("strong",{parentName:"p"},"account where the Cado Response platform has been deployed"),".  You will not need to alter your cross-account role.  These permissions are also located in the supplied terraform and cloudformation configurations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Sid": "RequiredForCrossAccountDefaultKmsEncryptedEc2Import",\n    "Effect": "Allow",\n    "Action": [\n        "kms:CreateKey",\n        "kms:ScheduleKeyDeletion",\n        "kms:DescribeKey",\n        "kms:ListAliases",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*"\n    ],\n    "Resource": "*"\n},\n')),(0,s.kt)("h3",{id:"resolving-issues-with-kms-support"},"Resolving Issues with KMS Support"),(0,s.kt)("p",null,"Getting the right KMS policies can prove difficult, particularly for cross-account Default KMS acquisitions and custom configurations."),(0,s.kt)("h4",{id:"using-cado-host-to-bypass-kms"},"Using Cado Host to bypass KMS"),(0,s.kt)("p",null,"If you are unable to obtain a full disk capture, you can bypass KMS by acquiring a system using Cado Host:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'If the system has SSM enabled, select "Use Alternate Triage Acquisition" when acquiring the system'),(0,s.kt)("li",{parentName:"ul"},"Conect to the system via SSH or RDP, and perform a collection of Forensic Artifacts by going to Import > Forensic Artifacts")),(0,s.kt)("h3",{id:"bypassing-kms-by-creating-an-unencrypted-volume"},"Bypassing KMS by creating an Unencrypted Volume"),(0,s.kt)("p",null,"You can remove KMS from a volume by following the steps at ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/"},"https://aws.amazon.com/premiumsupport/knowledge-center/create-unencrypted-volume-kms-key/")),(0,s.kt)("h4",{id:"debugging-iam-permissions-for-kms"},"Debugging IAM Permissions for KMS"),(0,s.kt)("p",null,"You can debug any IAM permissions using the AWS Policy Simulator at ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html"},"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html")))}u.isMDXComponent=!0}}]);