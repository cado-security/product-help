"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5776],{4750:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var i=o(5893),s=o(1151);const n={title:"Deploy with Cloudformation",hide_title:!0,sidebar_position:1},a="How to deploy with Cloudformation",r={id:"cado/deploy/aws/cloudformation",title:"Deploy with Cloudformation",description:"Click here to deploy the Cado platform via AWS Cloudformation with default options.",source:"@site/docs/cado/deploy/aws/cloudformation.md",sourceDirName:"cado/deploy/aws",slug:"/cado/deploy/aws/cloudformation",permalink:"/cado/deploy/aws/cloudformation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/cloudformation.md",tags:[],version:"current",lastUpdatedAt:1728665709,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:1,frontMatter:{title:"Deploy with Cloudformation",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is Cado",permalink:"/cado/intro"},next:{title:"Deploy with Terraform",permalink:"/cado/deploy/aws/terraform"}},d={},l=[{value:"AWS CloudFormation template",id:"aws-cloudformation-template",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Deployment Time",id:"deployment-time",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-deploy-with-cloudformation",children:"How to deploy with Cloudformation"}),"\n",(0,i.jsx)(t.h1,{id:"quick-start",children:"Quick start"}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.a,{href:"https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml",children:"here"})," to deploy the Cado platform via AWS Cloudformation with default options."]}),"\n",(0,i.jsx)(t.h2,{id:"aws-cloudformation-template",children:"AWS CloudFormation template"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/aMQOitmPLeE",title:"Deploying with Cloudformation",frameborder:"0",allowfullscreen:!0}),"\n",(0,i.jsx)(t.p,{children:"To set up Cado in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado CloudFormation Template in order to get started. If you have not, reach out to ",(0,i.jsx)(t.a,{href:"mailto:sales@cadosecurity.com",children:"sales@cadosecurity.com"})," for more details."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A number of CloudFormation templates are available to deploy Cado into your AWS environment. These include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml",children:"DeployCloudFormationPublic.yaml"})," - This template creates an Amazon EC2 Instance with an associated IAM Role with required access. This deployment includes a public IP address and can be accessed directly."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPrivate.yaml",children:"DeployCloudFormationPrivate.yaml"})," - This template includes an Amazon Load Balancer. The instance won't have a public IP and will be accessed via the ALB."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationCustomVPC.yaml",children:"DeployCloudFormationCustomVPC.yaml"})," - This template deploys into an existing VPC. The associated template ",(0,i.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationCustomVPCNetworking.yaml",children:"DeployCloudFormationCustomVPCNetworking.yaml"})," can be used to create the required networking within this VPC."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationGovCloud.yaml",children:"DeployCloudFormationGovCloud.yaml"})," - For deployment into AWS GovCloud. This template includes an Amazon Load Balancer. The instance won't have a public IP and will be accessed via the ALB."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, a High Availability (HA) CloudFormation template is available for deployment (below)."}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Once you receive the link to the Cado CloudFormation Template, click the link to open the AWS CloudFormation Management Console."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On Step 1 (Specify template), do not change the default ",(0,i.jsx)(t.strong,{children:"Template is ready"})," and ",(0,i.jsx)(t.strong,{children:"Amazon S3 URL"})," settings.   Click ",(0,i.jsx)(t.strong,{children:"Next"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: ",(0,i.jsx)(t.code,{children:"CadoResponse"})," and enter the parameters as outlined below:"]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter Name"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Instance type for Cado EC2 Server"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"t3a.xlarge"})}),(0,i.jsx)(t.td,{children:"For enterprise use we recommend at minimum a t3a.xlarge as the instance type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Key pair for Cado EC2 Server"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(choose your keypair)"})}),(0,i.jsx)(t.td,{children:"This key pair is used to enable SSH access to the Cado instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Allowed source IP addresses for connection to SSH"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(enter ip range)"})}),(0,i.jsx)(t.td,{children:"Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing SSH access"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Allowed source IP addresses for connection to HTTPS"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(enter ip range)"})}),(0,i.jsx)(t.td,{children:"Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing HTTPS access"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VPC CIDR"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(enter ip range)"})}),(0,i.jsx)(t.td,{children:"The Subnet the Cado VPC will use. Specify the IPv4 address range as a Classless Inter-Domain Routing (CIDR) block."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"EFSArchive"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"AFTER_30_DAYS"})}),(0,i.jsx)(t.td,{children:"EFS - move data to infrequent storage after X days."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InstanceVolumeSize"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"1000"})}),(0,i.jsx)(t.td,{children:"EC2 instance volume required in GBit."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"S3ArchiveTime"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"30"})}),(0,i.jsx)(t.td,{children:"Move S3 data to s3 glacier storage if not used after X days"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"S3GlacierDelete"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"365"})}),(0,i.jsx)(t.td,{children:"Delete S3 glacier storage data after X days."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AvailabilityZoneA"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(choose your AZ)"})}),(0,i.jsx)(t.td,{children:"The Availability Zone used by the primary subnet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AvailabilityZoneB"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(choose your AZ)"})}),(0,i.jsx)(t.td,{children:"The Availability Zone used by the secondary subnet."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FeatureFlagPlatformUpgrade"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"True"})}),(0,i.jsx)(t.td,{children:"Enables the platform to perform native upgrades."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"CertificateARN"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(enter certificate arn)"})}),(0,i.jsx)(t.td,{children:"The ARN of the Certificate that will be assigned to the Application Load Balancer. Not used unless FeatureFlagDeployWithALB is True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Proxy"}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.em,{children:["(",(0,i.jsx)(t.a,{href:"https://user:pass@1.2.3.4:1234",children:"https://user:pass@1.2.3.4:1234"}),")"]})}),(0,i.jsx)(t.td,{children:"Optional Proxy URL to use for outbound connections in format"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ProxyCertUrl"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"(url)"})}),(0,i.jsx)(t.td,{children:"URL to download optional Proxy Certificate from."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Investigations can always be deleted to recover space."})}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Next"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["On Step 3 (Configure stack options), click ",(0,i.jsx)(t.strong,{children:"Next"})," again (unless you require custom settings). If you require custom settings, please contact Cado Security"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Step 3",src:o(517).Z+"",width:"242",height:"315"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["For more information on available stack options, see ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"AWS Documentation"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Next"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Review the details that have been applied and click ",(0,i.jsx)(t.strong,{children:"Create Stack"})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["The Cado IAM policy defines which resources are accessible and which actions are allowed by the Cado software. If an IAM role has not been applied in ",(0,i.jsx)(t.em,{children:"Step 3 (Configure stack options)"})," tick the check box for ",(0,i.jsx)(t.code,{children:"I acknowledge that AWS CloudFormation might create IAM resources"}),".  The default IAM policy created by the Cloudformation template follows the principles of least privilege and only allows those actions needed by the Cado platform and, when able, are restricted based on tagging.  The exact IAM permissions used within Cado, can be found within the Cloudformation Template."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"deployment-time",children:"Deployment Time"}),"\n",(0,i.jsx)(t.p,{children:"Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process."}),"\n",(0,i.jsxs)(t.p,{children:["When the CFT stack has a status of ",(0,i.jsx)(t.code,{children:"CREATE_COMPLETE"}),", CloudFormation has finished creating the infrastructure for Cado."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Creation Complete",src:o(754).Z+"",width:"449",height:"92"})}),"\n",(0,i.jsxs)(t.p,{children:["You can then ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/cado/deploy/logging-in",children:"Log into Cado"})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["After deployment, you can import Test Data from the ",(0,i.jsx)(t.code,{children:"Help"})," menu to confirm that the deployment was successful."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},517:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/cft-step3-54b4069a1b5f8a55273902a48d5ebca5.png"},754:(e,t,o)=>{o.d(t,{Z:()=>i});const i="data:image/png;base64,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"},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var i=o(7294);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);