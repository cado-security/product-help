"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9316],{51780:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=a(74848),s=a(28453);const i={title:"Lambda",hide_title:!0,sidebar_position:6},n="How to Import Data from AWS Lambda",d={id:"cado/discovery-import/aws/aws-lambda",title:"Lambda",description:"The Cado platform allows you to acquire AWS Lambda functions, which are serverless computing services.",source:"@site/docs/cado/discovery-import/aws/aws-lambda.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-lambda",permalink:"/cado/discovery-import/aws/aws-lambda",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-lambda.md",tags:[],version:"current",lastUpdatedAt:1735813116,formattedLastUpdatedAt:"Jan 2, 2025",sidebarPosition:6,frontMatter:{title:"Lambda",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"EKS",permalink:"/cado/discovery-import/aws/aws-eks"},next:{title:"AWS Memory Analysis",permalink:"/cado/discovery-import/aws/memory"}},r={},c=[{value:"Steps to Import",id:"steps-to-import",level:3},{value:"Output",id:"output",level:2},{value:"CloudWatch Logs Integration",id:"cloudwatch-logs-integration",level:3},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function l(t){const e={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"how-to-import-data-from-aws-lambda",children:"How to Import Data from AWS Lambda"}),"\n",(0,o.jsx)(e.p,{children:"The Cado platform allows you to acquire AWS Lambda functions, which are serverless computing services."}),"\n",(0,o.jsx)(e.h3,{id:"steps-to-import",children:"Steps to Import"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Select the Region"})," where the Lambda function is located."]}),"\n",(0,o.jsx)(e.li,{children:"You will see a table of available functions. Select the function you wish to acquire."}),"\n",(0,o.jsxs)(e.li,{children:["Confirm the details and click ",(0,o.jsx)(e.strong,{children:"Start Import"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Import Lambda Function",src:a(42516).A+"",width:"1820",height:"626"})}),"\n",(0,o.jsx)(e.h2,{id:"output",children:"Output"}),"\n",(0,o.jsxs)(e.p,{children:["Once processing is complete, the Lambda function\u2019s events will be added to the timeline. You can view the Lambda function\u2019s code in the ",(0,o.jsx)(e.strong,{children:"Browse Disk"})," tab."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Lambda Function Code",src:a(54344).A+"",width:"2150",height:"1291"})}),"\n",(0,o.jsx)(e.h3,{id:"cloudwatch-logs-integration",children:"CloudWatch Logs Integration"}),"\n",(0,o.jsx)(e.p,{children:"Lambda automatically sends logs from your code to a CloudWatch Logs group associated with the function. Cado captures these logs and adds them to your timeline, enabling you to view any logging statements made by the function."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Cloudwatch Logs",src:a(24915).A+"",width:"2157",height:"1268"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.em,{children:"Note:"})," Cado imports the image of container-based Lambda functions from the Amazon Elastic Container Registry."]}),"\n",(0,o.jsx)(e.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,o.jsx)(e.p,{children:"The following diagram illustrates how Lambda acquisitions operate:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Lambda Data Flow",src:a(41667).A+"",width:"1912",height:"1062"})})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},24915:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/aws-lambda-cloudwatch-626d30a04a944d662dd2f07e49a2e377.png"},54344:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/aws-lambda-code-94ebd04039523e0161ddd9ae0b5364a8.png"},42516:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/import-lambda-362ec6f3fd1bd776b42653b365f199d6.png"},41667:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/lambda-collection-ea8401f8421f3431af85289755ee71f6.png"},28453:(t,e,a)=>{a.d(e,{R:()=>n,x:()=>d});var o=a(96540);const s={},i=o.createContext(s);function n(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:n(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);