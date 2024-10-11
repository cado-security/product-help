"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4745],{4354:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var t=s(5893),i=s(1151);const d={title:"IAM permissions description",hide_title:!0,sidebar_position:4},n="What IAM permissions does Cado use?",o={id:"cado/deploy/aws/iam/iam-description",title:"IAM permissions description",description:"The Cado platform requires specific IAM permissions to operate effectively, depending on the tasks you need it to perform. Below is a clear breakdown of the different permission groups and their purposes:",source:"@site/docs/cado/deploy/aws/iam/iam-description.md",sourceDirName:"cado/deploy/aws/iam",slug:"/cado/deploy/aws/iam/iam-description",permalink:"/cado/deploy/aws/iam/iam-description",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/iam/iam-description.md",tags:[],version:"current",lastUpdatedAt:1728675589,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:4,frontMatter:{title:"IAM permissions description",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Automatically add cross-account access with AWS Organizations (recommended)",permalink:"/cado/deploy/aws/iam/aws-organizations"},next:{title:"KMS support",permalink:"/cado/deploy/aws/iam/aws-kms"}},c={},a=[];function l(e){const r={h1:"h1",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"what-iam-permissions-does-cado-use",children:"What IAM permissions does Cado use?"}),"\n",(0,t.jsx)(r.p,{children:"The Cado platform requires specific IAM permissions to operate effectively, depending on the tasks you need it to perform. Below is a clear breakdown of the different permission groups and their purposes:"}),"\n",(0,t.jsx)(r.p,{children:"Here\u2019s the rewritten information in a table format for clarity:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Permission Group"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Purpose"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Core Platform and Worker Operations"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForStartup"}),(0,t.jsx)(r.td,{children:"Essential for core platform operation and starting/stopping workers."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForStartup2"}),(0,t.jsx)(r.td,{children:"Additional permissions for core platform and worker management."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"EC2 and Core Platform Permissions"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForEC2ImportAndCorePlatform"}),(0,t.jsx)(r.td,{children:"Required to start/stop workers and acquire EC2 volumes."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Health Checks"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredToCheckPolicy"}),(0,t.jsx)(r.td,{children:"Needed for health checks to ensure safe operation of the core platform."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Cross-Account Operations"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForCrossAccountAccess"}),(0,t.jsx)(r.td,{children:"Required for cross-account operations between AWS accounts."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Accessing Cado S3 Bucket"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredToAccessCadoS3Bucket"}),(0,t.jsx)(r.td,{children:"Allows access to the Cado S3 bucket for storing and retrieving forensic data."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"S3 Bucket and Forensic Preservation"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForAcquireToS3"}),(0,t.jsx)(r.td,{children:'Permissions for forensic preservation to S3 buckets and maintaining the chain of custody (can be scoped to "CadoS3BucketAlt").'})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"S3 Readiness Checks"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForS3Readiness"}),(0,t.jsx)(r.td,{children:"Ensures the platform is ready by verifying safe S3 operations."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Memory Forensics via SSM"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForMemoryForensics"}),(0,t.jsx)(r.td,{children:"Enables triage acquisitions that include memory acquisition using SSM."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"KMS Encrypted EC2 Imports"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForKmsEncryptedEc2Import"}),(0,t.jsx)(r.td,{children:"Allows acquisition of KMS-encrypted EBS volumes for EC2 systems."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForCrossAccountDefaultKmsEncryptedEc2Import"}),(0,t.jsx)(r.td,{children:"Needed to acquire KMS-encrypted EBS volumes from other AWS accounts."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Temporary KMS Resource Operations"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import"}),(0,t.jsx)(r.td,{children:"Required to handle temporary KMS resources by generating keys for re-encryption during encrypted EC2 volume acquisitions."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Lambda Function Imports"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForLambdaImport"}),(0,t.jsx)(r.td,{children:"Permissions for importing Lambda functions, CloudWatch logs, and container images if applicable."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"ECS Imports"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForEcsImport"}),(0,t.jsxs)(r.td,{children:["Allows importing ECS clusters, services, and tasks. ",(0,t.jsx)(r.strong,{children:"ExecuteCommand"})," is needed to run commands on ECS tasks."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"EKS Imports"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForEKSImport"}),(0,t.jsx)(r.td,{children:"Required for acquiring EKS clusters."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"EC2 and AMI Imports"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForEc2ImportAndAmiImport"}),(0,t.jsx)(r.td,{children:"Permissions for acquiring EC2 instances, volumes, snapshots, CloudTrail logs, IAM roles, policies, and SSM documents."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForEc2ImportAndAmiImport2"}),(0,t.jsx)(r.td,{children:"Scoped permissions for handling copied volumes created by Cado during EC2 and AMI imports."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"EC2 Isolation"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForResponseActionIsolateEc2"}),(0,t.jsx)(r.td,{children:"Required to isolate EC2 instances (optional if isolation is not needed)."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"AMI Imports"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForAmiImports"}),(0,t.jsx)(r.td,{children:"Permissions scoped to the Cado copy of the AMI during import."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Health Check Operations"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForHealthChecks"}),(0,t.jsx)(r.td,{children:"Needed for performing health checks to ensure core platform safety."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Native Updates with ALB"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForNativeUpdatesWithALB"}),(0,t.jsx)(r.td,{children:"Required for performing native updates using an Application Load Balancer (ALB), optional if ALB is not used."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"GuardDuty Monitoring"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForGuardDutyMonitoring"}),(0,t.jsx)(r.td,{children:"Needed for GuardDuty monitoring, optional if not using GuardDuty automation."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Automated Error Reporting"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForAutomatedErrorReporting"}),(0,t.jsx)(r.td,{children:"Allows automated error logs to be sent to Cado (optional if logs are shared manually)."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"One-Time KMS Key Creation"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter"}),(0,t.jsx)(r.td,{children:"Used once to create a Cado-specific KMS key for default encrypted EBS volumes, can be deleted afterward."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"AWS Organizations Account Discovery"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RequiredForAWSOrganizationsDiscoverAccounts"}),(0,t.jsx)(r.td,{children:"Required to discover accounts in AWS Organizations, optional if AWS Organizations is not being used."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>n});var t=s(7294);const i={},d=t.createContext(i);function n(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);