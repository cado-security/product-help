"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7267],{5065:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=a(5893),s=a(1151);const i={title:"Lambda",hide_title:!0,sidebar_position:6},n="How to import data from AWS Lambda",d={id:"cado/discovery-import/aws/aws-lambda",title:"Lambda",description:"The Cado platform can acquire AWS Lambda functions which are serverless computing services.",source:"@site/docs/cado/discovery-import/aws/aws-lambda.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-lambda",permalink:"/cado/discovery-import/aws/aws-lambda",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-lambda.md",tags:[],version:"current",lastUpdatedAt:1728552962,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:6,frontMatter:{title:"Lambda",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"EKS",permalink:"/cado/discovery-import/aws/aws-eks"},next:{title:"AWS Memory Analysis",permalink:"/cado/discovery-import/aws/memory"}},r={},c=[{value:"Output",id:"output",level:2},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function l(e){const t={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-import-data-from-aws-lambda",children:"How to import data from AWS Lambda"}),"\n",(0,o.jsx)(t.p,{children:"The Cado platform can acquire AWS Lambda functions which are serverless computing services."}),"\n",(0,o.jsx)(t.p,{children:'Select the region the desired function is located in, and you should see a table of functions. Select the function you wisk to acquire, confirm the details and hit "Start Import"'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Import Lambda Function",src:a(920).Z+"",width:"1820",height:"626"})}),"\n",(0,o.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,o.jsxs)(t.p,{children:["Once processing has finished the events will be added to the timeline and the Lambda function code will be available to view in the ",(0,o.jsx)(t.strong,{children:"Browse Disk"})," tab."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Lambda Function Code",src:a(9064).Z+"",width:"2150",height:"1291"})}),"\n",(0,o.jsx)(t.p,{children:"Lambda automatically integrates with CloudWatch Logs and pushes all logs from your code to a CloudWatch Logs group associated with a Lambda function. Cado  captures these logs and adds them to your timeline, so you can view any logging statements made by the function."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Cloudwatch Logs",src:a(4826).Z+"",width:"2157",height:"1268"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Note:"})," Cado imports the image of container-based Lambda functions from the Amazon Elastic Container Registry"]}),"\n",(0,o.jsx)(t.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,o.jsx)(t.p,{children:"For a diagram of how our Lambda acquisitions operate, please see below:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Lambda Data Flow",src:a(5414).Z+"",width:"1912",height:"1062"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4826:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/aws-lambda-cloudwatch-14b83ea4fb9a6898a0ceddbab3700544.png"},9064:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/aws-lambda-code-5aa24cb45ec8976f2b96fb2349547767.png"},920:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/import-lambda-362ec6f3fd1bd776b42653b365f199d6.png"},5414:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/lambda-collection-d989079e75bd275f4dfec2092d81b20d.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>n});var o=a(7294);const s={},i=o.createContext(s);function n(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);