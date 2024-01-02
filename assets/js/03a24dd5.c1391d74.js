"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6683],{9333:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(5893),s=i(1151);const a={title:"Automated Investigation",hide_title:!0,sidebar_position:4},o="Automated Investigations",r={id:"cado-response/investigate/automated-investigation",title:"Automated Investigation",description:"The Automated Investigation tab provides a summary of what Cado has determined during its investigation.",source:"@site/docs/cado-response/investigate/automated-investigation.md",sourceDirName:"cado-response/investigate",slug:"/cado-response/investigate/automated-investigation",permalink:"/cado-response/investigate/automated-investigation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/investigate/automated-investigation.md",tags:[],version:"current",lastUpdatedAt:1704191405,formattedLastUpdatedAt:"Jan 2, 2024",sidebarPosition:4,frontMatter:{title:"Automated Investigation",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Timeline Search",permalink:"/cado-response/investigate/timeline-search"},next:{title:"Browse Disk",permalink:"/cado-response/investigate/browse-disk"}},d={},c=[{value:"View Asset",id:"view-asset",level:2},{value:"Response Actions (Beta)",id:"response-actions-beta",level:2},{value:"Permissions Required",id:"permissions-required",level:3},{value:"OpenAI Integration",id:"openai-integration",level:2}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"automated-investigations",children:"Automated Investigations"}),"\n",(0,n.jsx)(t.p,{children:"The Automated Investigation tab provides a summary of what Cado has determined during its investigation."}),"\n",(0,n.jsx)(t.p,{children:"The Automated Investigation includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A description of how the investgation was triggered"}),"\n",(0,n.jsx)(t.li,{children:"The verdict - a one line description of what Cado determined has happened"}),"\n",(0,n.jsx)(t.li,{children:"A set of suspected compromised assets"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The timeline displays up to 50 events. Events are more likely to be included if they are malicious, tagged by a user, happened in rapid succession, etc."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Automated Investigation",src:i(7586).Z+"",width:"1866",height:"853"})}),"\n",(0,n.jsx)(t.h2,{id:"view-asset",children:"View Asset"}),"\n",(0,n.jsx)(t.p,{children:'Clicking the three dots and "View Cloud Resource" on a suspected compromised asset opens up a sidebar containing metadata about the asset.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Metadata Sidebar",src:i(3090).Z+"",width:"340",height:"345"})}),"\n",(0,n.jsx)(t.h2,{id:"response-actions-beta",children:"Response Actions (Beta)"}),"\n",(0,n.jsxs)(t.p,{children:["Response Actions make it possible to perform remediation actions in response to malicious activity being identified on a virtual machine. You can also trigger response actions using ",(0,n.jsx)(t.a,{href:"/cado-response/discovery-import/automation",children:"Automation Rules"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Currently, Response Actions only supports ",(0,n.jsx)(t.a,{href:"/cado-response/discovery-import/import/aws/aws-ec2#triage-capture",children:"AWS EC2 instances acquired as a triage collection"}),'. To invoke an action, select the instance id from the "Suspected Compromised Assets" table']}),"\n",(0,n.jsxs)(t.p,{children:['Using the panel on the right - select the "Actions" tab, then the desired action and click "Invoke"\n',(0,n.jsx)(t.img,{alt:"Actions",src:i(2628).Z+"",width:"842",height:"418"})]}),"\n",(0,n.jsx)(t.h3,{id:"permissions-required",children:"Permissions Required"}),"\n",(0,n.jsx)(t.p,{children:"Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Action"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required Permissions"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stop Instance"}),(0,n.jsx)(t.td,{children:"Stops an EC2 instance using the AWS API"}),(0,n.jsxs)(t.td,{children:["ec2",":StopInstances"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Isolate Role"}),(0,n.jsx)(t.td,{children:"Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role."}),(0,n.jsxs)(t.td,{children:["iam",":PutRolePolicy"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Isolate Security Group"}),(0,n.jsx)(t.td,{children:"Isolates the security group attached to an EC2. Isolated by creating a blank security group and attaching to the EC2. Due to the behaviour of AWS security groups, existing connections will not be dropped."}),(0,n.jsxs)(t.td,{children:["ec2",":CreateSecurityGroup"," ec2",":RevokeSecurityGroupEgress"," ec2",":ModifyInstanceAttribute"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["NOTE: In order to perform an action on an asset in a different AWS account, you must have ",(0,n.jsx)(t.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"Cross Account roles"})," configured and have added the relevant permission to the role in the different account"]})}),"\n",(0,n.jsx)(t.h2,{id:"openai-integration",children:"OpenAI Integration"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.cadosecurity.com/cado-gpt-3-interactive-incident-response/",children:"GPT Interactive Incident Response feature"})," in the Cado platform automates incident analysis by leveraging OpenAI Completion API and semantic analysis. It provides a streamlined Q&A interface for investigating forensic evidence, enabling security teams to respond faster and smarter to incidents in the cloud."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://www.cadosecurity.com/wp-content/uploads/image6-19.png",alt:"Example"})}),"\n",(0,n.jsxs)(t.p,{children:["To enable the feature, go to ",(0,n.jsx)(t.strong,{children:"Settings > Advanced"})," and provide a valid OpenAI API Key while also enabling the GPT-Indexing checkbox."]}),"\n",(0,n.jsx)(t.p,{children:"Please note the following important information:"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"The feature only supports new evidence items and does not have backward compatibility."})}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsx)(t.p,{children:"Enabling this integration has implications:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"All processing pipelines will be indexed with OpenAI."}),"\n",(0,n.jsx)(t.li,{children:"Analysts will have the option to send incident summary findings to the OpenAI API service using a dedicated button for summarization.\nOpenAI will have access to the data sent to their APIs. Cado does not recommend enabling this for production implementations."}),"\n"]})]}),"\n",(0,n.jsx)(t.p,{children:"By leveraging the OpenAI Integration, security teams can enhance their incident analysis capabilities. However, it is crucial to carefully consider the implications and exercise caution before enabling this integration in a production environment."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2628:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/actions-tab-5585992eb81a41af00c49a1f502ff8e2.png"},7586:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/automated-investigation-e3cc11e53b29192f70a1de28ab872488.png"},3090:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/metadata-sidebar-d1263f81bf454d9ead1789d55d65fa88.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);