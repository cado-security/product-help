"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5271],{927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(5893),a=n(1151);const i={title:"Automating collection from detections",hide_title:!0,sidebar_position:3},r="How to automate collection from detections",s={id:"cado/discovery-import/automation",title:"Automating collection from detections",description:"The 'Detections' area of the platform (/detections/integrations) enables customers to dramatically streamline the effectiveness of their SOC using end-to-end workflow investigation automation capabilities.",source:"@site/docs/cado/discovery-import/automation.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/automation",permalink:"/cado/discovery-import/automation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/automation.md",tags:[],version:"current",lastUpdatedAt:1728552962,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:3,frontMatter:{title:"Automating collection from detections",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Import from Cloud",permalink:"/cado/discovery-import/import-from-cloud"},next:{title:"EC2 and EBS",permalink:"/cado/discovery-import/aws/aws-ec2"}},c={},l=[{value:"Collecting data after Crowdstrike and Defender alerts",id:"collecting-data-after-crowdstrike-and-defender-alerts",level:2},{value:"Collecting data after alerts from other XDR platforms",id:"collecting-data-after-alerts-from-other-xdr-platforms",level:2},{value:"Collecting data after AWS GuardDuty alerts",id:"collecting-data-after-aws-guardduty-alerts",level:2},{value:"Collecting data after Wiz alerts",id:"collecting-data-after-wiz-alerts",level:2},{value:"Managing Rules",id:"managing-rules",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"how-to-automate-collection-from-detections",children:"How to automate collection from detections"}),"\n",(0,o.jsx)(t.p,{children:"The 'Detections' area of the platform (/detections/integrations) enables customers to dramatically streamline the effectiveness of their SOC using end-to-end workflow investigation automation capabilities."}),"\n",(0,o.jsx)(t.p,{children:"Customers are able to easily connect different alert sources across cloud and on-prem systems, respond faster by automatically collecting and processing key data, as well as integrate actionable results to SIEMs, task managers, and other productivity tools."}),"\n",(0,o.jsx)(t.h2,{id:"collecting-data-after-crowdstrike-and-defender-alerts",children:"Collecting data after Crowdstrike and Defender alerts"}),"\n",(0,o.jsx)(t.p,{children:"To get started, watch the video below which shows how to ingest alerts from Microsoft Defender. The same process also applies to CrowdStrike. In summary:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Create an XDR Connection. To do this, navigate to \u2018Settings\u2019 > \u2018Integrations\u2019 > \u2018XDR\u2019 (/settings/integrations/xdr). For information on the API permissions required, see ",(0,o.jsx)(t.a,{href:"/cado/integrations/xdr/crowdstrike",children:"CrowdStrike"})," and ",(0,o.jsx)(t.a,{href:"/cado/integrations/xdr/defender",children:"Defender"})," documentation."]}),"\n",(0,o.jsx)(t.li,{children:"Create a detection rule in 'Detections' by selecting one of the threat detection provider sources in /detections/integrations."}),"\n"]}),"\n",(0,o.jsx)("video",{src:"/img/detections-set-up.mp4",controls:!0,width:"90%"}),"\n",(0,o.jsx)(t.h2,{id:"collecting-data-after-alerts-from-other-xdr-platforms",children:"Collecting data after alerts from other XDR platforms"}),"\n",(0,o.jsxs)(t.p,{children:["You can trigger an import from the Cado platform by creating a webhook from the XDR platform then calling the ",(0,o.jsx)(t.a,{href:"/cado/integrations/api-overview",children:"Cado API"})," to trigger the import via a SOAR platform or your own API integration."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["SentinelOne: Go the SentinelOne ",(0,o.jsx)(t.a,{href:"https://www.sentinelone.com/partners/singularity-marketplace/",children:"Singularity Marketplace"})," and search for Webhook to create a webhook"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"collecting-data-after-aws-guardduty-alerts",children:"Collecting data after AWS GuardDuty alerts"}),"\n",(0,o.jsx)(t.p,{children:"To get started, create an Environment. Navigate to 'Environments' (/environments) and select the 'Create environment' button. Give the environment a name, and choose the scopes to add to the environment by selecting 'Add group'. In the example below, we have created a scope which encompasses all EC2s across all accounts. You can optionally filter by regions and tags."}),"\n",(0,o.jsx)(t.p,{children:"Hit 'Save' to create the environment."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Create Environments",src:n(2544).Z+"",width:"2614",height:"1934"})}),"\n",(0,o.jsx)(t.p,{children:"Next, create a detection rule for GuardDuty by selecting the 'GuardDuty' source in /detections/integrations. The configuration is very similar to that of creating a rule for one of the XDR platforms (see video above), with the following differences:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"On page 2 of the wizard, instead of being prompted to select an XDR Connection, you are prompted to select an Environment (see previous step)."}),"\n",(0,o.jsx)(t.li,{children:"On page 3 of the wizard, you are able to select response actions if Cado detects a malicious or suspicious alarm. Cado currently supports shutting down EC2 instances, isolating the IAM roles of that the EC2 instance assumes and isolate security group attached to the EC2. Each action requires different permissions and is controlled using IAM roles. The table below details a description of each action and the permissions required. Add these permissions to your Cado role, and ensure it has scope to cover the resource you wish to invoke an action on."}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Action"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Required Permissions"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Stop Instance"}),(0,o.jsx)(t.td,{children:"Stops an EC2 instance using the AWS API"}),(0,o.jsxs)(t.td,{children:["ec2",":StopInstances"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Isolate Role"}),(0,o.jsx)(t.td,{children:"Isolates the IAM role attached to an EC2 instance. Isolated by adding a deny all inline policy to the given IAM role."}),(0,o.jsxs)(t.td,{children:["iam",":GetInstanceProfile"," iam",":PutRolePolicy"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Isolate Security Group"}),(0,o.jsx)(t.td,{children:"Isolates the security group attached to and EC2 instance. Isolated by creating a security group, blanking it and replacing it on the EC2."}),(0,o.jsxs)(t.td,{children:["ec2",":CreateSecurityGroup"," ec2",":RevokeSecurityGroupEgress"," ec2",":ModifyInstanceAttribute"]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"collecting-data-after-wiz-alerts",children:"Collecting data after Wiz alerts"}),"\n",(0,o.jsxs)(t.p,{children:["For details on how to automatically process systems detected by Wiz, see ",(0,o.jsx)(t.a,{href:"/cado/integrations/cnapp/wiz",children:"Wiz Forensics Integration\n"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"managing-rules",children:"Managing Rules"}),"\n",(0,o.jsx)(t.p,{children:"Detection rules can be managed in /detections/rules, where you are able to easy create, enable/disable, edit and delete rules."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Manage Rules",src:n(7018).Z+"",width:"5106",height:"1156"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7018:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/detections-rules-4d57f6ca8dcc5f62e707a99f59c1b1ee.png"},2544:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/environments-create-4f43b997cbbbc8d089e6e7688101fac5.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(7294);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);