"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7267],{5065:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=a(5893),s=a(1151);const i={title:"Lambda",hide_title:!0,sidebar_position:6},n="How to Import Data from AWS Lambda",d={id:"cado/discovery-import/aws/aws-lambda",title:"Lambda",description:"The Cado platform allows you to acquire AWS Lambda functions, which are serverless computing services.",source:"@site/docs/cado/discovery-import/aws/aws-lambda.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-lambda",permalink:"/cado/discovery-import/aws/aws-lambda",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-lambda.md",tags:[],version:"current",lastUpdatedAt:1730885743,formattedLastUpdatedAt:"Nov 6, 2024",sidebarPosition:6,frontMatter:{title:"Lambda",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"EKS",permalink:"/cado/discovery-import/aws/aws-eks"},next:{title:"AWS Memory Analysis",permalink:"/cado/discovery-import/aws/memory"}},r={},c=[{value:"Steps to Import",id:"steps-to-import",level:3},{value:"Output",id:"output",level:2},{value:"CloudWatch Logs Integration",id:"cloudwatch-logs-integration",level:3},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function l(t){const e={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"how-to-import-data-from-aws-lambda",children:"How to Import Data from AWS Lambda"}),"\n",(0,o.jsx)(e.p,{children:"The Cado platform allows you to acquire AWS Lambda functions, which are serverless computing services."}),"\n",(0,o.jsx)(e.h3,{id:"steps-to-import",children:"Steps to Import"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Select the Region"})," where the Lambda function is located."]}),"\n",(0,o.jsx)(e.li,{children:"You will see a table of available functions. Select the function you wish to acquire."}),"\n",(0,o.jsxs)(e.li,{children:["Confirm the details and click ",(0,o.jsx)(e.strong,{children:"Start Import"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Import Lambda Function",src:a(920).Z+"",width:"1820",height:"626"})}),"\n",(0,o.jsx)(e.h2,{id:"output",children:"Output"}),"\n",(0,o.jsxs)(e.p,{children:["Once processing is complete, the Lambda function\u2019s events will be added to the timeline. You can view the Lambda function\u2019s code in the ",(0,o.jsx)(e.strong,{children:"Browse Disk"})," tab."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Lambda Function Code",src:a(9064).Z+"",width:"2150",height:"1291"})}),"\n",(0,o.jsx)(e.h3,{id:"cloudwatch-logs-integration",children:"CloudWatch Logs Integration"}),"\n",(0,o.jsx)(e.p,{children:"Lambda automatically sends logs from your code to a CloudWatch Logs group associated with the function. Cado captures these logs and adds them to your timeline, enabling you to view any logging statements made by the function."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Cloudwatch Logs",src:a(4826).Z+"",width:"2157",height:"1268"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.em,{children:"Note:"})," Cado imports the image of container-based Lambda functions from the Amazon Elastic Container Registry."]}),"\n",(0,o.jsx)(e.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,o.jsx)(e.p,{children:"The following diagram illustrates how Lambda acquisitions operate:"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Lambda Data Flow",src:a(5414).Z+"",width:"1912",height:"1062"})})]})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},4826:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/aws-lambda-cloudwatch-14b83ea4fb9a6898a0ceddbab3700544.png"},9064:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/aws-lambda-code-5aa24cb45ec8976f2b96fb2349547767.png"},920:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/import-lambda-362ec6f3fd1bd776b42653b365f199d6.png"},5414:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lambda-collection-d989079e75bd275f4dfec2092d81b20d.png"},1151:(t,e,a)=>{a.d(e,{Z:()=>d,a:()=>n});var o=a(7294);const s={},i=o.createContext(s);function n(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:n(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);