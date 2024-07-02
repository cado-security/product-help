"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6683],{9333:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(5893),n=s(1151);const o={title:"Automated Investigation",hide_title:!0,sidebar_position:4},a="Automated Investigations",r={id:"cado-response/investigate/automated-investigation",title:"Automated Investigation",description:"The Automated Investigation tab provides a summary of what Cado has determined during its investigation.",source:"@site/docs/cado-response/investigate/automated-investigation.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/automated-investigation",permalink:"/cado-response/investigate/automated-investigation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/automated-investigation.md",tags:[],version:"current",lastUpdatedAt:1719936428,formattedLastUpdatedAt:"Jul 2, 2024",sidebarPosition:4,frontMatter:{title:"Automated Investigation",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Timeline Search",permalink:"/cado-response/investigate/timeline-search"},next:{title:"Browse Disk",permalink:"/cado-response/investigate/browse-disk"}},d={},c=[{value:"View Asset",id:"view-asset",level:2},{value:"Response Actions (Beta)",id:"response-actions-beta",level:2},{value:"Permissions Required",id:"permissions-required",level:3}];function l(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"automated-investigations",children:"Automated Investigations"}),"\n",(0,i.jsx)(t.p,{children:"The Automated Investigation tab provides a summary of what Cado has determined during its investigation."}),"\n",(0,i.jsx)(t.p,{children:"The Automated Investigation includes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A description of how the investgation was triggered"}),"\n",(0,i.jsx)(t.li,{children:"The verdict - a one line description of what Cado determined has happened"}),"\n",(0,i.jsx)(t.li,{children:"A set of suspected compromised assets"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The timeline displays up to 50 events. Events are more likely to be included if they are malicious, tagged by a user, happened in rapid succession, etc."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Automated Investigation",src:s(7586).Z+"",width:"1866",height:"853"})}),"\n",(0,i.jsx)(t.h2,{id:"view-asset",children:"View Asset"}),"\n",(0,i.jsx)(t.p,{children:'Clicking the three dots and "View Cloud Resource" on a suspected compromised asset opens up a sidebar containing metadata about the asset.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Metadata Sidebar",src:s(3090).Z+"",width:"340",height:"345"})}),"\n",(0,i.jsx)(t.h2,{id:"response-actions-beta",children:"Response Actions (Beta)"}),"\n",(0,i.jsxs)(t.p,{children:["Response Actions make it possible to perform remediation actions in response to malicious activity being identified on a virtual machine. You can also trigger response actions using ",(0,i.jsx)(t.a,{href:"/cado-response/discovery-import/automation",children:"Automation Rules"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Currently, Response Actions only supports ",(0,i.jsx)(t.a,{href:"/cado-response/discovery-import/import/aws/aws-ec2#triage-capture",children:"AWS EC2 instances acquired as a triage collection"}),'. To invoke an action, select the instance id from the "Suspected Compromised Assets" table']}),"\n",(0,i.jsxs)(t.p,{children:['Using the panel on the right - select the "Actions" tab, then the desired action and click "Invoke"\n',(0,i.jsx)(t.img,{alt:"Actions",src:s(2628).Z+"",width:"842",height:"418"})]}),"\n",(0,i.jsx)(t.h3,{id:"permissions-required",children:"Permissions Required"}),"\n",(0,i.jsx)(t.p,{children:"Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Action"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required Permissions"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Stop Instance"}),(0,i.jsx)(t.td,{children:"Stops an EC2 instance using the AWS API"}),(0,i.jsxs)(t.td,{children:["ec2",":StopInstances"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Isolate Role"}),(0,i.jsx)(t.td,{children:"Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role."}),(0,i.jsxs)(t.td,{children:["iam",":PutRolePolicy"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Isolate Security Group"}),(0,i.jsx)(t.td,{children:"Isolates the security group attached to an EC2. Isolated by creating a blank security group and attaching to the EC2. Due to the behaviour of AWS security groups, existing connections will not be dropped."}),(0,i.jsxs)(t.td,{children:["ec2",":CreateSecurityGroup"," ec2",":RevokeSecurityGroupEgress"," ec2",":ModifyInstanceAttribute"]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:["NOTE: In order to perform an action on an asset in a different AWS account, you must have ",(0,i.jsx)(t.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"Cross Account roles"})," configured and have added the relevant permission to the role in the different account"]})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2628:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/actions-tab-5585992eb81a41af00c49a1f502ff8e2.png"},7586:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/automated-investigation-e3cc11e53b29192f70a1de28ab872488.png"},3090:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/metadata-sidebar-d1263f81bf454d9ead1789d55d65fa88.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var i=s(7294);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);