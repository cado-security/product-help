"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3142],{5604:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=t(5893),s=t(1151);const i={title:"AWS Memory Analysis",hide_title:!0,sidebar_position:7},n="AWS Memory Analysis",a={id:"cado-response/discovery-import/import/aws/memory",title:"AWS Memory Analysis",description:'You can acquire memory of Linux systems in EC2 by using the "Triage Acquisition" option under Import > EC2:',source:"@site/docs/cado-response/discovery-import/import/aws/memory.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/memory",permalink:"/cado-response/discovery-import/import/aws/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/memory.md",tags:[],version:"current",lastUpdatedAt:1719936428,formattedLastUpdatedAt:"Jul 2, 2024",sidebarPosition:7,frontMatter:{title:"AWS Memory Analysis",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Lambda",permalink:"/cado-response/discovery-import/import/aws/aws-lambda"},next:{title:"Lightsail",permalink:"/cado-response/discovery-import/import/aws/aws-lightsail"}},c={},m=[{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function d(e){const o={a:"a",h1:"h1",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"aws-memory-analysis",children:"AWS Memory Analysis"}),"\n",(0,r.jsx)(o.p,{children:'You can acquire memory of Linux systems in EC2 by using the "Triage Acquisition" option under Import > EC2:'}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"AWS Memory",src:t(877).Z+"",width:"1648",height:"284"})}),"\n",(0,r.jsx)(o.p,{children:"This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager. If it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from Import > Forensic Artifacts. You can also use this method to acquire from Windows systems."}),"\n",(0,r.jsx)(o.p,{children:"Any acquisition from ECS and EKS will attempt to collect memory by default."}),"\n",(0,r.jsxs)(o.p,{children:["For more information, see the ",(0,r.jsx)(o.a,{href:"/cado-response/discovery-import/import/data-types/memory",children:"Memory Analysis"})," page."]}),"\n",(0,r.jsx)(o.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,r.jsxs)(o.p,{children:["For a diagram of how our EC2 SSM acquisitions operate, please see our ",(0,r.jsx)(o.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23259323166225-How-do-EC2-collections-over-SSM-work",children:"Knowledge Base"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},877:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/alternate-ec2-1d44379783163049a09c15fbf9a92565.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>n});var r=t(7294);const s={},i=r.createContext(s);function n(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);