"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4690],{252:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var i=r(4848),t=r(8453);const n={title:"IAM permissions description",hide_title:!0,sidebar_position:4},o="What IAM permissions does Cado use?",d={id:"cado/deploy/aws/iam/iam-description",title:"IAM permissions description",description:"The Cado platform requires specific IAM permissions to operate effectively, depending on the tasks you need it to perform. Below is a clear breakdown of the different permission groups and their purposes:",source:"@site/docs/cado/deploy/aws/iam/iam-description.md",sourceDirName:"cado/deploy/aws/iam",slug:"/cado/deploy/aws/iam/iam-description",permalink:"/cado/deploy/aws/iam/iam-description",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/iam/iam-description.md",tags:[],version:"current",lastUpdatedAt:1733228233,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:4,frontMatter:{title:"IAM permissions description",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Supported regions and GovCloud",permalink:"/cado/deploy/aws/regions"},next:{title:"KMS support",permalink:"/cado/deploy/aws/iam/aws-kms"}},c={},l=[{value:"Customizing the Cado Cross-Account Policy",id:"customizing-the-cado-cross-account-policy",level:2},{value:"Using an Existing IAM Role",id:"using-an-existing-iam-role",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"what-iam-permissions-does-cado-use",children:"What IAM permissions does Cado use?"}),"\n",(0,i.jsx)(s.p,{children:"The Cado platform requires specific IAM permissions to operate effectively, depending on the tasks you need it to perform. Below is a clear breakdown of the different permission groups and their purposes:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Permission Group"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Purpose"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Core Platform and Worker Operations"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForStartup"}),(0,i.jsx)(s.td,{children:"Essential for core platform operation and starting/stopping workers."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForStartup2"}),(0,i.jsx)(s.td,{children:"Additional permissions for core platform and worker management."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"EC2 and Core Platform Permissions"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForEC2ImportAndCorePlatform"}),(0,i.jsx)(s.td,{children:"Required to start/stop workers and acquire EC2 volumes."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Health Checks"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredToCheckPolicy"}),(0,i.jsx)(s.td,{children:"Needed for health checks to ensure safe operation of the core platform."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Health Check Operations"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForHealthChecks"}),(0,i.jsx)(s.td,{children:"Needed for performing health checks to ensure core platform safety."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Native Updates with ALB"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Cross-Account Operations"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForCrossAccountAccess"}),(0,i.jsx)(s.td,{children:"Required for cross-account operations between AWS accounts."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Accessing Cado S3 Bucket"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredToAccessCadoS3Bucket"}),(0,i.jsx)(s.td,{children:"Allows access to the Cado S3 bucket for storing and retrieving forensic data."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"S3 Bucket and Forensic Preservation"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForAcquireToS3"}),(0,i.jsx)(s.td,{children:'Permissions for forensic preservation to S3 buckets and maintaining the chain of custody (can be scoped to "CadoS3BucketAlt").'})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"S3 Readiness Checks"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForS3Readiness"}),(0,i.jsx)(s.td,{children:"Ensures the platform is ready by verifying safe S3 operations."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Memory Forensics via SSM"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForMemoryForensics"}),(0,i.jsx)(s.td,{children:"Enables triage acquisitions that include memory acquisition using SSM."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"KMS Encrypted EC2 Imports"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForKmsEncryptedEc2Import"}),(0,i.jsx)(s.td,{children:"Allows acquisition of KMS-encrypted EBS volumes for EC2 systems."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForCrossAccountDefaultKmsEncryptedEc2Import"}),(0,i.jsx)(s.td,{children:"Needed to acquire KMS-encrypted EBS volumes from other AWS accounts."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Temporary KMS Resource Operations"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForOperationsOnTemporaryKMSResourcesduringDefaultEncryptedEc2Import"}),(0,i.jsx)(s.td,{children:"Required to handle temporary KMS resources by generating keys for re-encryption during encrypted EC2 volume acquisitions."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Lambda Function Imports"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForLambdaImport"}),(0,i.jsx)(s.td,{children:"Permissions for importing Lambda functions, CloudWatch logs, and container images if applicable."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"ECS Imports"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForEcsImport"}),(0,i.jsxs)(s.td,{children:["Allows importing ECS clusters, services, and tasks. ",(0,i.jsx)(s.strong,{children:"ExecuteCommand"})," is needed to run commands on ECS tasks."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"EKS Imports"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForEKSImport"}),(0,i.jsx)(s.td,{children:"Required for acquiring EKS clusters."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"EC2 and AMI Imports"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForEc2ImportAndAmiImport"}),(0,i.jsx)(s.td,{children:"Permissions for acquiring EC2 instances, volumes, snapshots, CloudTrail logs, IAM roles, policies, and SSM documents."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForEc2ImportAndAmiImport2"}),(0,i.jsx)(s.td,{children:"Scoped permissions for handling copied volumes created by Cado during EC2 and AMI imports."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"EC2 Isolation"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForResponseActionIsolateEc2"}),(0,i.jsx)(s.td,{children:"Required to isolate EC2 instances (optional if isolation is not needed)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"AMI Imports"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForAmiImports"}),(0,i.jsx)(s.td,{children:"Permissions scoped to the Cado copy of the AMI during import."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForNativeUpdatesWithALB"}),(0,i.jsx)(s.td,{children:"Required for performing native updates using an Application Load Balancer (ALB), optional if ALB is not used."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"GuardDuty Monitoring"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForGuardDutyMonitoring"}),(0,i.jsx)(s.td,{children:"Needed for GuardDuty monitoring, optional if not using GuardDuty automation."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Automated Error Reporting"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForAutomatedErrorReporting"}),(0,i.jsx)(s.td,{children:"Allows automated error logs to be sent to Cado (optional if logs are shared manually)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"One-Time KMS Key Creation"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForFirstTimeKMSDefaultencryptedImportCanBeDeletedAfter"}),(0,i.jsx)(s.td,{children:"Used once to create a Cado-specific KMS key for default encrypted EBS volumes, can be deleted afterward."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"AWS Organizations Account Discovery"})}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"RequiredForAWSOrganizationsDiscoverAccounts"}),(0,i.jsx)(s.td,{children:"Required to discover accounts in AWS Organizations, optional if AWS Organizations is not being used."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"customizing-the-cado-cross-account-policy",children:"Customizing the Cado Cross-Account Policy"}),"\n",(0,i.jsx)(s.p,{children:"The Cado Cross-Account Policy includes permissions to acquire various AWS resources. You can customize it by removing permissions that are not needed for your use case:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"EC2 permissions"})," are required to acquire EC2 systems."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"KMS permissions"})," are needed for acquiring KMS-encrypted volumes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"SSM permissions"})," are necessary for triage captures."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"S3 permissions"})," allow importing from S3 buckets in other accounts."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"CloudTrail permissions"})," enable importing CloudTrail logs from other accounts."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"ECS permissions"})," are required to import ECS containers."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"EC2 de-register permissions"})," are needed for importing AMI images cross-account."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["If you modify the ",(0,i.jsx)(s.strong,{children:"Maximum session duration"}),", note that the minimum currently supported by Cado is 1 hour."]}),"\n",(0,i.jsx)(s.h2,{id:"using-an-existing-iam-role",children:"Using an Existing IAM Role"}),"\n",(0,i.jsxs)(s.p,{children:["If you prefer using an existing IAM role with proper resource access, update the trust relationship with the following JSON, replacing ",(0,i.jsx)(s.code,{children:"111111111111"})," with the ID of your primary AWS account:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n   "Version": "2012-10-17",\n   "Statement": [\n       {\n           "Effect": "Allow",\n           "Principal": {\n               "AWS": "111111111111"\n           },\n           "Action": "sts:AssumeRole",\n           "Condition": {}\n       }\n   ]\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["You can further restrict this by specifying a specific Cado role rather than trusting the entire account. For more details, see the AWS documentation on ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html",children:"IAM policy elements"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>d});var i=r(6540);const t={},n=i.createContext(t);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);