"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1168],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],i={title:"AWS KMS Support",hide_title:!0,sidebar_position:4},p="AWS KMS Support",l={unversionedId:"cado-response/importing-data/aws-kms",id:"cado-response/importing-data/aws-kms",title:"AWS KMS Support",description:"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole.",source:"@site/docs/cado-response/importing-data/aws-kms.md",sourceDirName:"cado-response/importing-data",slug:"/cado-response/importing-data/aws-kms",permalink:"/cado-response/importing-data/aws-kms",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/importing-data/aws-kms.md",tags:[],version:"current",lastUpdatedAt:1651007715,formattedLastUpdatedAt:"Apr 26, 2022",sidebarPosition:4,frontMatter:{title:"AWS KMS Support",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Memory Analysis",permalink:"/cado-response/importing-data/memory"},next:{title:"AWS Lambda Support",permalink:"/cado-response/importing-data/aws-lambda"}},c={},u=[{value:"Custom Keys",id:"custom-keys",level:3},{value:"Cross Region",id:"cross-region",level:3},{value:"Cross Account",id:"cross-account",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-kms-support"},"AWS KMS Support"),(0,a.kt)("p",null,"The Cado platform will import EC2 instances with encrypted volumes, provided that the appropriate permissions are given to the CadoResponseRole. "),(0,a.kt)("p",null,"AWS provides default keys in your account. These provide default access with the statement below, and this default is supported by the platform out of the box.  For more information on KMS, you can visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://aws.amazon.com/kms/"},"AWS Key Management Service (KMS)"))," page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Sid": "Allow access through EBS for all principals in the account that are authorized to use EBS",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "*"\n    },\n    "Action": [\n        "kms:Encrypt",\n        "kms:Decrypt",\n        "kms:ReEncrypt*",\n        "kms:GenerateDataKey*",\n        "kms:CreateGrant",\n        "kms:DescribeKey"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "StringEquals": {\n            "kms:ViaService": "ec2.eu-west-3.amazonaws.com",\n            "kms:CallerAccount": "012345678910"\n        }\n    }\n}\n')),(0,a.kt)("p",null,"As the Sid suggests: all ",(0,a.kt)("inlineCode",{parentName:"p"},"Principals")," (users/roles etc) in the account and region specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"Condition")," have permission to perform the given actions."),(0,a.kt)("h3",{id:"custom-keys"},"Custom Keys"),(0,a.kt)("p",null,"When using custom keys the required actions to CadoResponseRole are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"kms:Encrypt",\n"kms:Decrypt",\n"kms:ReEncrypt*",\n"kms:GenerateDataKey*",\n"kms:CreateGrant"\n')),(0,a.kt)("p",null,"There are a number of options available - but recommended approaches are below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You may choose to forgo giving all the permissions and only provide ",(0,a.kt)("inlineCode",{parentName:"p"},"kms:CreateGrant")," to CadoResponseRole"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is recommended if the goal is simplicity, especially when there are cross account or cross region considerations (see below)"),(0,a.kt)("li",{parentName:"ul"},"Grants will be created and retired as required by the platform"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Give required permissions to CadoResponseRole directly and withhold CreateGrant for resources only "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You may not wish to give kms:CreateGrant permission to CadoResponseRole itself"),(0,a.kt)("li",{parentName:"ul"},"Your policy must feature a statement which provides access to CadoResponseRole with the above permissions (except CreateGrant)"),(0,a.kt)("li",{parentName:"ul"},"You may then tighten the policy to only allow CreateGrant permission to AWS resources"),(0,a.kt)("li",{parentName:"ul"},"Example (be sure to adjust ",(0,a.kt)("inlineCode",{parentName:"li"},"Principal")," and add ",(0,a.kt)("inlineCode",{parentName:"li"},"Condition")," according to your needs)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Sid": "Allow required KMS permissions",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n          "kms:Encrypt",\n          "kms:Decrypt",\n          "kms:ReEncrypt*",\n          "kms:GenerateDataKey*"\n      ],\n    "Resource": "*"\n  },\n  {\n    "Sid": "Allow attachment of persistent resources",\n    "Effect": "Allow",\n    "Principal": {\n        "AWS": "arn:aws:iam::012345678910:role/myCadoResponseRole"\n    },\n    "Action": [\n        "kms:CreateGrant"\n    ],\n    "Resource": "*",\n    "Condition": {\n        "Bool": {\n            "kms:GrantIsForAWSResource": true\n        }\n      }\n  }\n]\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Alternatively you may use grants to give out the equivalent KMS access for the above options")),(0,a.kt)("h3",{id:"cross-region"},"Cross Region"),(0,a.kt)("p",null,"It is important to ensure that if you are acquiring cross region that your relevant policy statements still apply to the region of your Cado platform (e.g. that policy ",(0,a.kt)("inlineCode",{parentName:"p"},"Conditions")," don't preclude the platform's access)."),(0,a.kt)("h3",{id:"cross-account"},"Cross Account"),(0,a.kt)("p",null,"The simplest approach is to give ",(0,a.kt)("inlineCode",{parentName:"p"},"kms:CreateGrant")," permissions to the role being assumed ",(0,a.kt)("strong",{parentName:"p"},"in the target account being acquired from"),". See the ",(0,a.kt)("strong",{parentName:"p"},"Cross Account Acquisition](/docs/cado-response/guides/cross-account-creation)")," instructions for more details on cross account permissions."),(0,a.kt)("p",null,"Alternatively the permissions in Custom Keys section are still valid, however both the primary and secondary account roles need to be accessible principals to ",(0,a.kt)("inlineCode",{parentName:"p"},'"kms:Encrypt", "kms:Decrypt", "kms:ReEncrypt*", kms:GenerateDataKey*"')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Cross account acquisition of volumes encrypted with the AWS default key are currently not supported.")))}d.isMDXComponent=!0}}]);