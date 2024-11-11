"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1994],{8924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(5893),s=n(1151);const o={title:"Platform encryption in AWS",hide_title:!0,sidebar_position:3},r="What encryption does the Cado platform use in AWS?",i={id:"cado/deploy/aws/security/data-encryption-overview",title:"Platform encryption in AWS",description:"General",source:"@site/docs/cado/deploy/aws/security/data-encryption-overview.md",sourceDirName:"cado/deploy/aws/security",slug:"/cado/deploy/aws/security/data-encryption-overview",permalink:"/cado/deploy/aws/security/data-encryption-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/security/data-encryption-overview.md",tags:[],version:"current",lastUpdatedAt:1731344277,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:3,frontMatter:{title:"Platform encryption in AWS",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Logging best practices",permalink:"/cado/deploy/aws/security/logging"},next:{title:"Dedicated forensics account",permalink:"/cado/deploy/aws/security/forensics-account"}},c={},d=[{value:"General",id:"general",level:2},{value:"AWS",id:"aws",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"what-encryption-does-the-cado-platform-use-in-aws",children:"What encryption does the Cado platform use in AWS?"}),"\n",(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsx)(t.p,{children:"The default VPC and Subnet create an isolated environment to which customers can control access rights.\nWhen processing data, the Cado worker instances are launched within the same VPC as the main Cado instance.\nWorker instances are started using the same AMI as the main Cado instance as well."}),"\n",(0,a.jsx)(t.h2,{id:"aws",children:"AWS"}),"\n",(0,a.jsx)(t.p,{children:"During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado solution."}),"\n",(0,a.jsxs)(t.p,{children:["During deployment, a default S3 bucket for collections is created. This can be customized, including to use an existing bucket, but by default the created S3 Bucket is encrypted with server-side encryption using AES256 (SSE-AES256 - See ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html",children:"Protecting data with server-side encryption"}),".\nAttached EBS volumes are encrypted using ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",children:"KMS"}),".\nAccess to EFS/NFS ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html",children:"is over TLS "}),".\nSecrets are stored using ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"AWS Secrets Manager"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Some settings can be customized, and you may wish to ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",children:"enable key rotation"})," as well ."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);