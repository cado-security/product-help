"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[852],{62790:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(74848),o=i(28453);const s={title:"Monitor platform health",hide_title:!0,sidebar_position:11},a="How to Monitor the Platform Health",c={id:"cado/manage/monitoring",title:"Monitor platform health",description:"Cado provides two types of checks to help users monitor the platform's health and proper functioning: Platform Check and Account Check.",source:"@site/docs/cado/manage/monitoring.md",sourceDirName:"cado/manage",slug:"/cado/manage/monitoring",permalink:"/cado/manage/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/manage/monitoring.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:11,frontMatter:{title:"Monitor platform health",hide_title:!0,sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Cost estimates",permalink:"/cado/manage/cost-management"},next:{title:"Platform security",permalink:"/cado/manage/platform-security"}},r={},l=[{value:"Platform Check",id:"platform-check",level:2},{value:"Account Check",id:"account-check",level:2},{value:"Account Check Permissions",id:"account-check-permissions",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-monitor-the-platform-health",children:"How to Monitor the Platform Health"}),"\n",(0,n.jsxs)(t.p,{children:["Cado provides two types of checks to help users monitor the platform's health and proper functioning: ",(0,n.jsx)(t.a,{href:"/cado/manage/monitoring#platform-check",children:"Platform Check"})," and ",(0,n.jsx)(t.a,{href:"/cado/manage/monitoring#account-check",children:"Account Check"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, you can view the overall platform health and statistics by navigating to the ",(0,n.jsx)(t.strong,{children:"Platform"})," tab. This section displays information such as Free Disk Space, Available Memory, Total Memory, CPU Usage, and pipeline processing details. The roundtrip response time for the API ",(0,n.jsx)(t.code,{children:"/api/v2/system/status"})," should be less than or equal to 200ms for optimal performance."]}),"\n",(0,n.jsx)(t.p,{children:"For best results, maintaining maximum uptime of the Cado platform is recommended. Frequently shutting down the platform can cause database issues, so avoid doing this whenever possible."}),"\n",(0,n.jsx)(t.h2,{id:"platform-check",children:"Platform Check"}),"\n",(0,n.jsxs)(t.p,{children:["For a more in-depth assessment, you can run a Platform Check by navigating to ",(0,n.jsx)(t.strong,{children:"/platform"})," and clicking the ",(0,n.jsx)(t.strong,{children:"Run a Platform Check"})," button. This initiates a health check pipeline, which performs several tasks, including:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Testing outbound connectivity."}),"\n",(0,n.jsx)(t.li,{children:"Validating the Cado Host download location."}),"\n",(0,n.jsx)(t.li,{children:"Verifying worker spin-up and shutdown."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Platform Check",src:i(33585).A+"",width:"1908",height:"628"})}),"\n",(0,n.jsx)(t.p,{children:"You can expand the pipeline to view the status of each task, allowing you to diagnose any issues. For example, if the Policy Simulation check task fails, you can expand it to view detailed error messages."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Platform Check Result",src:i(98051).A+"",width:"1831",height:"805"})}),"\n",(0,n.jsx)(t.h2,{id:"account-check",children:"Account Check"}),"\n",(0,n.jsxs)(t.p,{children:["To verify account-based settings, navigate to ",(0,n.jsx)(t.strong,{children:"/settings/cloud"}),", select an account, and click the ",(0,n.jsx)(t.strong,{children:"Run Account Check"})," button. This will perform a permissions and policy simulation check, ensuring that the correct permissions are in place for successful data acquisition. Account Checks can be run on both the account where Cado is deployed and any cross-accounts. For cloud accounts, the account check feature is supported for AWS, Azure, and GCP."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Account Check",src:i(89829).A+"",width:"1567",height:"874"})}),"\n",(0,n.jsx)(t.p,{children:"Like the Platform Check, the Account Check will create a pipeline where tasks can be inspected to diagnose any issues that arise during the process."}),"\n",(0,n.jsx)(t.h3,{id:"account-check-permissions",children:"Account Check Permissions"}),"\n",(0,n.jsx)(t.p,{children:"These require:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n\t\t\t"Effect": "Allow",\n\t\t\t"Resource": "*",\n\t\t\t"Action": [\n\t\t\t"iam:ListRolePolicies",\n\t\t\t"iam:GetPolicy",\n\t\t\t"iam:GetRolePolicy",\n\t\t\t"iam:GetPolicyVersion",\n\t\t\t"iam:SimulatePrincipalPolicy"\n\t\t\t],\n\t\t\t"Sid": "RequiredToCheckPolicy"\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"Or in Yaml format:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'- Effect: Allow\n  Resource: "*"\n  Action:\n    - iam:ListRolePolicies\n    - iam:GetPolicy\n    - iam:GetRolePolicy\n    - iam:GetPolicyVersion\n    - iam:SimulatePrincipalPolicy\n  Sid: RequiredToCheckPolicy\n'})}),"\n",(0,n.jsx)(t.p,{children:"The permissions are required to run the Account Check. The permissions are used as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["iam",":ListRolePolicies"," is used to get all the policies associated with your cross-account role."]}),"\n",(0,n.jsxs)(t.li,{children:["iam",":GetRolePolicy"," is used to get the permissions associated with the policies retrieved above.  These permissions are used for a permission check that determines if the policies required by Cado Response match those specified in our template.  We check against the permissions that are specified in our cross-account template."]}),"\n",(0,n.jsxs)(t.li,{children:["iam",":SimulatePrincipalPolicy"," is used to run an AWS policy simulation against your role, for the permissions required by Cado Response.  These are run against the permissions specified in our cross account template."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If the above permissions aren\u2019t added to your Cross-Account role, the Cross-Account checks, if run - will fail."}),"\n",(0,n.jsx)(t.p,{children:"Adding these permissions, however, it is optional - if you do not intend to run Cross-Account checks, this will not impact your Cado instance."}),"\n",(0,n.jsx)(t.p,{children:"If you decide to run the checks without updating the permissions, then they will fail, but this should not affect the platform functionality."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},89829:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/manage-account-check-3fa1557f4fe9813821907a388487dbac.png"},98051:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/manage-platform-check-result-ebc5572096453d669a8a839dfe45cee1.png"},33585:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/manage-platform-check-d0b9464363fdee0f88167da7822fe052.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>c});var n=i(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);