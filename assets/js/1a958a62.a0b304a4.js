"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7017],{1978:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(5893),t=n(1151);const o={title:"Readiness (Beta)",hide_title:!0,sidebar_position:3},a="Readiness (Beta)",r={id:"cado-response/discovery-import/readiness",title:"Readiness (Beta)",description:"Readiness is a powerful tool designed to help you identify and address issues related to the acquisition of workloads within your environments. It provides a centralised platform for tracking these issues and assigns a readiness score to each environment, giving you a quick overview of the health of your workload acquisition process.",source:"@site/docs/cado-response/discovery-import/readiness.md",sourceDirName:"cado-response/discovery-import",slug:"/cado-response/discovery-import/readiness",permalink:"/cado-response/discovery-import/readiness",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/readiness.md",tags:[],version:"current",lastUpdatedAt:1710075333,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:3,frontMatter:{title:"Readiness (Beta)",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Automation Rules (Beta)",permalink:"/cado-response/discovery-import/automation"},next:{title:"Overview",permalink:"/cado-response/discovery-import/import/intro"}},d={},c=[{value:"Readiness Dashboard",id:"readiness-dashboard",level:2},{value:"Readiness Score",id:"readiness-score",level:3},{value:"Environment Readiness",id:"environment-readiness",level:2},{value:"Issues",id:"issues",level:3},{value:"Checks",id:"checks",level:3}];function h(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"readiness-beta",children:"Readiness (Beta)"}),"\n",(0,i.jsx)(s.p,{children:"Readiness is a powerful tool designed to help you identify and address issues related to the acquisition of workloads within your environments. It provides a centralised platform for tracking these issues and assigns a readiness score to each environment, giving you a quick overview of the health of your workload acquisition process."}),"\n",(0,i.jsx)(s.h2,{id:"readiness-dashboard",children:"Readiness Dashboard"}),"\n",(0,i.jsx)(s.p,{children:"The Readiness Dashboard gives a summary view of your readiness, relative to the cloud environments that have been configured within the Cado Platform"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Readiness Dashboard",src:n(1760).Z+"",width:"1632",height:"777"})}),"\n",(0,i.jsx)(s.h3,{id:"readiness-score",children:"Readiness Score"}),"\n",(0,i.jsx)(s.p,{children:"The Readiness score is a numerical value that represents the health of your EC2 acquisition process for a specific environment. The higher the score, the higher the likelihood you will be able to succesfully investigate an incident in that environment. The score is based on a variety of factors, including:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"EC2 instance provisioning time."}),"\n",(0,i.jsx)(s.li,{children:"Resource availability within your environment."}),"\n",(0,i.jsx)(s.li,{children:"Compliance with best practices."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The Readiness score is a composite score calculated from the readiness of each of the cloud environments configured within the platform. Environments with lower scores might need attention in order to increase the likelihood of a successful investigation. Cado measures and displays changes of the readiness score over time to show the impacts of any changes you have made."}),"\n",(0,i.jsx)(s.h2,{id:"environment-readiness",children:"Environment Readiness"}),"\n",(0,i.jsx)(s.p,{children:"With Cado you can assess the readiness of a given cloud environment. To see the details of the readiness of a given a given environment, click on the envrionment in the list."}),"\n",(0,i.jsxs)(s.p,{children:["At installation Cado creates a default environment for the account in which Cado is installed called 'Cado Platform Environment'. To configure additional environments see ",(0,i.jsx)(s.a,{href:"/cado-response/discovery-import/automation#creating-an-environment",children:"Creating an Environment"})]}),"\n",(0,i.jsx)(s.p,{children:'To check the readiness of an environment and get updated status click "Run Check", and Cado will test acquiring an image from a randomly selected workload in that environment'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Environment Dashboard",src:n(1087).Z+"",width:"1420",height:"811"})}),"\n",(0,i.jsx)(s.h3,{id:"issues",children:"Issues"}),"\n",(0,i.jsx)(s.p,{children:"Cado outlines any issues it has encountered in assessing the readiness for a given environment. This allows you to make changes in that environment that will increase the likelihood that you will be able to perform an investigation in the event of an incident. Each issue shows:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The category of the issue"}),"\n",(0,i.jsx)(s.li,{children:"The resource type"}),"\n",(0,i.jsx)(s.li,{children:"The ID of the workload"}),"\n",(0,i.jsx)(s.li,{children:"The full error message associated with the issue"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"checks",children:"Checks"}),"\n",(0,i.jsx)(s.p,{children:"Cado outlines a full list of all the checks it has performed on that environment, when they check occurred, the workload against which the check was performed and the result of that check."})]})}function l(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1087:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/environment-dashboard-4b0939cdc4b7ecc5f7b6e26a713ff394.png"},1760:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/readiness-dashboard-f456392620e7e46f0468aaea51e58d54.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>a});var i=n(7294);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);