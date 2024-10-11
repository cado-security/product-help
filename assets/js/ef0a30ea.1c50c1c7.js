"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7297],{1865:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=r(5893),t=r(1151);const s={title:"Deploy with Terraform",hide_title:!0,sidebar_position:2},o="How to deploy with Terraform",d={id:"cado/deploy/aws/terraform",title:"Deploy with Terraform",description:"Follow the steps below to deploy the Cado platform using Terraform.",source:"@site/docs/cado/deploy/aws/terraform.md",sourceDirName:"cado/deploy/aws",slug:"/cado/deploy/aws/terraform",permalink:"/cado/deploy/aws/terraform",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/terraform.md",tags:[],version:"current",lastUpdatedAt:1728675589,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:2,frontMatter:{title:"Deploy with Terraform",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deploy with Cloudformation",permalink:"/cado/deploy/aws/cloudformation"},next:{title:"Cado architecture in AWS",permalink:"/cado/deploy/aws/architecture"}},l={},c=[{value:"Step-by-Step Guide",id:"step-by-step-guide",level:2},{value:"Key Parameters",id:"key-parameters",level:2},{value:"Deploying into Custom Networking",id:"deploying-into-custom-networking",level:2},{value:"Final Steps",id:"final-steps",level:2},{value:"Identifying the AMI ID",id:"identifying-the-ami-id",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-deploy-with-terraform",children:"How to deploy with Terraform"}),"\n",(0,i.jsx)(n.p,{children:"Follow the steps below to deploy the Cado platform using Terraform."}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step-guide",children:"Step-by-Step Guide"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Clone the Repository:"}),(0,i.jsx)(n.br,{}),"\n","Clone the Cado Security Deployment Templates from GitHub:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/cado-security/Deployment-Templates/tree/main",children:"GitHub Repo"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Navigate to the Deployment Directory:"}),(0,i.jsx)(n.br,{}),"\n","Go to the root ",(0,i.jsx)(n.strong,{children:"aws_v2"})," folder within the cloned repository."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Configure Deployment Settings:"}),(0,i.jsx)(n.br,{}),"\n","Modify the ",(0,i.jsx)(n.code,{children:"awsVars.tfvars"})," file to match your deployment needs. This file contains key variables for your deployment configuration."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialize Terraform:"}),(0,i.jsx)(n.br,{}),"\n","Run the following command to initialize the Terraform working directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"terraform init\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Preview the Deployment Plan:"}),(0,i.jsx)(n.br,{}),"\n","To review the configuration and ensure everything is set up correctly, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'terraform plan -var-file="awsVars.tfvars"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deploy the Infrastructure:"}),(0,i.jsx)(n.br,{}),"\n","When ready to deploy, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'terraform apply -var-file="awsVars.tfvars"\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If you're using Windows, avoid running this command in PowerShell as it may not handle quotes properly. Use the Command Prompt instead."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-parameters",children:"Key Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter Name"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"region"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(AWS region)"})}),(0,i.jsxs)(n.td,{children:["AWS region for deploying Cado, e.g., ",(0,i.jsx)(n.code,{children:"us-east-1"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"key_name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(key pair name)"})}),(0,i.jsx)(n.td,{children:"SSH key pair for accessing the Cado instance (optional, but useful for troubleshooting)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ami_id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(AMI ID)"})}),(0,i.jsx)(n.td,{children:"Contact Cado Sales to get the appropriate AMI ID for your region. Provide your AWS Account Number."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"public_deployment"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"True"})," or ",(0,i.jsx)(n.code,{children:"False"})]}),(0,i.jsxs)(n.td,{children:["Set to ",(0,i.jsx)(n.code,{children:"True"})," for public IP access. Set to ",(0,i.jsx)(n.code,{children:"False"})," to deploy behind an ALB with a DNS URL."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"certificate_arn"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(ARN)"})}),(0,i.jsxs)(n.td,{children:["ARN of the certificate to assign to the ALB (required if ",(0,i.jsx)(n.code,{children:"public_deployment"})," is ",(0,i.jsx)(n.code,{children:"False"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"tags"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(key-value map)"})}),(0,i.jsx)(n.td,{children:"Tags for organizing and identifying your AWS resources."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vm_size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"m5.4xlarge"})}),(0,i.jsxs)(n.td,{children:["Choose your instance type (default: ",(0,i.jsx)(n.code,{children:"m5.4xlarge"}),")."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"vol_size"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(disk size in GB)"})}),(0,i.jsx)(n.td,{children:"The disk size for the instance (default: 100 GB)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ssh_location"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(CIDR range)"})}),(0,i.jsx)(n.td,{children:"IP address or range allowed for SSH access (recommended to restrict to specific IPs)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http_location"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(CIDR range)"})}),(0,i.jsx)(n.td,{children:"IP address or range allowed for HTTPS access (recommended to restrict to specific IPs)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"custom_networking"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(optional)"})}),(0,i.jsx)(n.td,{children:"For custom VPC deployments. Specify VPC and subnet IDs if deploying in an existing network setup."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"proxy"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(proxy URL)"})}),(0,i.jsx)(n.td,{children:"Optional: URL of the proxy server to use for outbound connections."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"proxy_cert_url"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"(certificate URL)"})}),(0,i.jsx)(n.td,{children:"Optional: URL to download the proxy certificate, if needed."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-into-custom-networking",children:"Deploying into Custom Networking"}),"\n",(0,i.jsx)(n.p,{children:"For custom networking configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Public deployments"}),", supply ",(0,i.jsx)(n.code,{children:"vpc_id"})," and ",(0,i.jsx)(n.code,{children:"public_subnet_id"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.strong,{children:"Private deployments"}),", supply ",(0,i.jsx)(n.code,{children:"vpc_id"}),", ",(0,i.jsx)(n.code,{children:"public_subnet_id"}),", ",(0,i.jsx)(n.code,{children:"public_subnet_b_id"}),", and ",(0,i.jsx)(n.code,{children:"private_subnet_id"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"final-steps",children:"Final Steps"}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialize the Platform:"}),(0,i.jsx)(n.br,{}),"\n","Once the infrastructure is deployed, a one-time initialization process will begin. The entire deployment and initialization process typically takes 10-15 minutes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Log into Cado:"}),(0,i.jsx)(n.br,{}),"\n","After deployment, log into the Cado platform. The initial username is ",(0,i.jsx)(n.code,{children:"admin"}),", and the password is the instance ID of your deployed Cado platform. You\u2019ll be prompted to change your password upon first login.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/cado/deploy/logging-in",children:"Log into Cado"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Import a License:"}),(0,i.jsx)(n.br,{}),"\n","You will also need to import a license file (in JSON format) after logging in."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"identifying-the-ami-id",children:"Identifying the AMI ID"}),"\n",(0,i.jsxs)(n.p,{children:["To find the latest AMI ID for the Cado platform, visit the following link:",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://cado-public.s3.amazonaws.com/cado_updates_json_v2.json",children:"View Latest AMIs"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>o});var i=r(7294);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);