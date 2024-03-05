"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9280],{7493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(5893),s=n(1151);const o={title:"Overview",hide_title:!0,sidebar_position:1},r="Data Encryption and Security",i={id:"cado-response/deploy/aws/data-encryption/data-encryption-overview",title:"Overview",description:"General",source:"@site/docs/cado-response/deploy/aws/data-encryption/data-encryption-overview.md",sourceDirName:"cado-response/deploy/aws/data-encryption",slug:"/cado-response/deploy/aws/data-encryption/data-encryption-overview",permalink:"/cado-response/deploy/aws/data-encryption/data-encryption-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/data-encryption/data-encryption-overview.md",tags:[],version:"current",lastUpdatedAt:1709677142,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cross Account Creation",permalink:"/cado-response/deploy/aws/iam/cross-account-creation"},next:{title:"KMS Support",permalink:"/cado-response/deploy/aws/data-encryption/aws-kms"}},c={},d=[{value:"General",id:"general",level:2},{value:"AWS",id:"aws",level:2},{value:"Azure",id:"azure",level:2},{value:"Google Cloud Platform",id:"google-cloud-platform",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"data-encryption-and-security",children:"Data Encryption and Security"}),"\n",(0,a.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,a.jsx)(t.p,{children:"The default VPC and Subnet create an isolated environment to which customers can control access rights.\nWhen processing data, the Cado worker instances are launched within the same VPC as the main Cado instance.\nWorker instances are started using the same AMI as the main Cado instance as well.\nCommunication between workers and the main Cado instance is performed over TLS."}),"\n",(0,a.jsx)(t.h2,{id:"aws",children:"AWS"}),"\n",(0,a.jsx)(t.p,{children:"During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado solution."}),"\n",(0,a.jsxs)(t.p,{children:["During deployment, a default S3 bucket for collections is created. This can be customised, including to use an existing bucket, but by default the created S3 Bucket is encrypted with server-side encryption using AES256 (SSE-AES256 - See ",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html",children:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html"}),")).\nAttached EBS volumes are encrypted using KMS (",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",children:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html"}),").\nAccess to EFS/NFS is over TLS (",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html",children:"https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html"}),").\nSecrets are stored using AWS Secrets Manager (",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["Some settings can be customized, and you may wish to enable key rotation as well (",(0,a.jsx)(t.a,{href:"https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html",children:"https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html"}),")."]}),"\n",(0,a.jsx)(t.h2,{id:"azure",children:"Azure"}),"\n",(0,a.jsxs)(t.p,{children:["Azure disks and blob storage are server side encrypted by default (see ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption",children:"https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption"})," and ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption",children:"https://learn.microsoft.com/en-us/azure/virtual-machines/disk-encryption"}),")."]}),"\n",(0,a.jsx)(t.h2,{id:"google-cloud-platform",children:"Google Cloud Platform"}),"\n",(0,a.jsx)(t.p,{children:"The Cloud Storage Bucket is configured to encrypt data at rest using GCP KMS and if using Cado Host to upload triage captures then data is encrypted using TLS by the GCP API client.\nSecrets are stored using Google Cloud Secrets Manager."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(7294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);