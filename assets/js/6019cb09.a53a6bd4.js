"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3361],{70197:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=i(74848),o=i(28453);const n={title:"Cado architecture in AWS",hide_title:!0,sidebar_position:3},a="What is the Cado architecture in AWS?",s={id:"cado/deploy/aws/architecture",title:"Cado architecture in AWS",description:"The Cado platform is deployed directly into your AWS environment using either a CloudFormation Template, a Terraform script, or via the AWS Marketplace. Once deployed, the platform creates an isolated VPC (Virtual Private Cloud) where you can control access and permissions. This allows for secure and customized deployment within your AWS infrastructure. The entire process typically takes less than 25 minutes from start to finish.",source:"@site/docs/cado/deploy/aws/architecture.md",sourceDirName:"cado/deploy/aws",slug:"/cado/deploy/aws/architecture",permalink:"/cado/deploy/aws/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/aws/architecture.md",tags:[],version:"current",lastUpdatedAt:1741200188,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:3,frontMatter:{title:"Cado architecture in AWS",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploy with Terraform",permalink:"/cado/deploy/aws/terraform"},next:{title:"Supported regions and GovCloud",permalink:"/cado/deploy/aws/regions"}},c={},d=[{value:"CPU Limits and Recommendations",id:"cpu-limits-and-recommendations",level:2},{value:"Cado Platform Components",id:"cado-platform-components",level:2},{value:"Security Features",id:"security-features",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"what-is-the-cado-architecture-in-aws",children:"What is the Cado architecture in AWS?"}),"\n",(0,r.jsx)(t.p,{children:"The Cado platform is deployed directly into your AWS environment using either a CloudFormation Template, a Terraform script, or via the AWS Marketplace. Once deployed, the platform creates an isolated VPC (Virtual Private Cloud) where you can control access and permissions. This allows for secure and customized deployment within your AWS infrastructure. The entire process typically takes less than 25 minutes from start to finish."}),"\n",(0,r.jsx)(t.h2,{id:"cpu-limits-and-recommendations",children:"CPU Limits and Recommendations"}),"\n",(0,r.jsxs)(t.p,{children:["By default, AWS limits the number of vCPUs you can run in a region to 32. For optimal performance, we recommend increasing this limit to 128 vCPUs, especially for faster processing. You can request this increase by filling out ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#vcpu-limits-request-increase",children:"this form"}),' and asking for 128 vCPUs under "Running On-Demand All Standard Instances."']}),"\n",(0,r.jsx)(t.h2,{id:"cado-platform-components",children:"Cado Platform Components"}),"\n",(0,r.jsx)(t.p,{children:"The Cado platform consists of several key components that work together to deliver its capabilities. The platform is designed to be flexible and secure, supporting both internet-connected and private deployments. For environments with strict security requirements, the platform supports private deployments with no internet access and proxy inspection."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Cado AWS Architecture",src:i(82532).A+"",width:"960",height:"540"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note: The diagram above provides a simplified overview of the Cado architecture in AWS."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"security-features",children:"Security Features"}),"\n",(0,r.jsx)(t.p,{children:"Cado\u2019s architecture supports environments with stringent security needs, offering private deployments with no internet access and the ability to utilize proxy inspection, ensuring compliance with security policies."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},82532:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/aws-architecture-a6303ba92ca40461c3a1e0d2d3dcad63.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var r=i(96540);const o={},n=r.createContext(o);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);