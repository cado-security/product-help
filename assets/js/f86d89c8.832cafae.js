"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8335],{65938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(74848),r=n(28453);const o={title:"Automating collection from detections",hide_title:!0,sidebar_position:3},s="How to automate data collection from detections",a={id:"cado/discovery-import/automation",title:"Automating collection from detections",description:"The Detections area of the platform (/detections/integrations) helps streamline your Security Operations Center (SOC) by enabling end-to-end workflow automation for investigations. You can easily connect various alert sources, automatically collect and process critical data, and integrate results into tools like SIEMs, task managers, and other productivity systems.",source:"@site/docs/cado/discovery-import/automation.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/automation",permalink:"/cado/discovery-import/automation",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/automation.md",tags:[],version:"current",lastUpdatedAt:1736179895,formattedLastUpdatedAt:"Jan 6, 2025",sidebarPosition:3,frontMatter:{title:"Automating collection from detections",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Import from cloud",permalink:"/cado/discovery-import/import-from-cloud"},next:{title:"EC2 and EBS",permalink:"/cado/discovery-import/aws/aws-ec2"}},l={},c=[{value:"Collecting Data After CrowdStrike and Defender Alerts",id:"collecting-data-after-crowdstrike-and-defender-alerts",level:2},{value:"Collecting Data After Alerts from Other XDR Platforms",id:"collecting-data-after-alerts-from-other-xdr-platforms",level:2},{value:"SentinelOne",id:"sentinelone",level:3},{value:"Collecting Data After AWS GuardDuty Alerts",id:"collecting-data-after-aws-guardduty-alerts",level:2},{value:"Collecting Data After Wiz Alerts",id:"collecting-data-after-wiz-alerts",level:2},{value:"Managing Detection Rules",id:"managing-detection-rules",level:2},{value:"How to manually perform an acquisition for GuardDuty alerts",id:"how-to-manually-perform-an-acquisition-for-guardduty-alerts",level:2}];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-automate-data-collection-from-detections",children:"How to automate data collection from detections"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Detections"})," area of the platform (/detections/integrations) helps streamline your Security Operations Center (SOC) by enabling end-to-end workflow automation for investigations. You can easily connect various alert sources, automatically collect and process critical data, and integrate results into tools like SIEMs, task managers, and other productivity systems."]}),"\n",(0,i.jsx)(t.h2,{id:"collecting-data-after-crowdstrike-and-defender-alerts",children:"Collecting Data After CrowdStrike and Defender Alerts"}),"\n",(0,i.jsx)(t.p,{children:"To get started, watch the video below that demonstrates how to ingest alerts from Microsoft Defender. The same process applies to CrowdStrike. Here's a summary of the steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Create an XDR Connection"}),(0,i.jsx)(t.br,{}),"\n","Go to \u2018Settings\u2019 > \u2018Integrations\u2019 > \u2018XDR\u2019 (/settings/integrations/xdr). For details on required API permissions, see the ",(0,i.jsx)(t.a,{href:"/cado/integrations/xdr/crowdstrike",children:"CrowdStrike Integration Guide"})," and the ",(0,i.jsx)(t.a,{href:"/cado/integrations/xdr/defender",children:"Defender Integration Guide"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Set Up a Detection Rule"}),(0,i.jsx)(t.br,{}),"\n","In the ",(0,i.jsx)(t.strong,{children:"Detections"})," area, select one of the supported threat detection sources (/detections/integrations) to create a detection rule."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("video",{src:"/img/detections-set-up.mp4",controls:!0,width:"90%"}),"\n",(0,i.jsx)(t.h2,{id:"collecting-data-after-alerts-from-other-xdr-platforms",children:"Collecting Data After Alerts from Other XDR Platforms"}),"\n",(0,i.jsxs)(t.p,{children:["You can trigger an import from the Cado platform by creating a webhook from your XDR platform, then using the ",(0,i.jsx)(t.a,{href:"/cado/integrations/api-overview",children:"Cado API"})," to initiate the import via a SOAR platform or your own API integration."]}),"\n",(0,i.jsx)(t.h3,{id:"sentinelone",children:"SentinelOne"}),"\n",(0,i.jsx)(t.p,{children:"To create a webhook:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Visit the SentinelOne ",(0,i.jsx)(t.a,{href:"https://www.sentinelone.com/partners/singularity-marketplace/",children:"Singularity Marketplace"}),"."]}),"\n",(0,i.jsx)(t.li,{children:'Search for "Webhook" to create and configure the webhook.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"collecting-data-after-aws-guardduty-alerts",children:"Collecting Data After AWS GuardDuty Alerts"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Create an Environment"}),(0,i.jsx)(t.br,{}),"\n","Navigate to ",(0,i.jsx)(t.strong,{children:"Environments"})," (/environments) and click the ",(0,i.jsx)(t.strong,{children:"Create Environment"})," button. Name the environment and define the scopes by selecting ",(0,i.jsx)(t.strong,{children:"Add Group"}),". For example, you can create a scope that covers all EC2 instances across all accounts, with optional filtering by region or tag."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create Environments",src:n(82738).A+"",width:"2614",height:"1934"})}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"})," to create the environment."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Set Up a Detection Rule for GuardDuty"}),(0,i.jsx)(t.br,{}),"\n","In the ",(0,i.jsx)(t.strong,{children:"Detections"})," area (/detections/integrations), select ",(0,i.jsx)(t.strong,{children:"GuardDuty"})," as the source to create a detection rule. The configuration process is similar to XDR platforms, with a few differences:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["On ",(0,i.jsx)(t.strong,{children:"Page 2"})," of the wizard, select the ",(0,i.jsx)(t.strong,{children:"Environment"})," instead of an XDR connection."]}),"\n",(0,i.jsxs)(t.li,{children:["On ",(0,i.jsx)(t.strong,{children:"Page 3"}),", specify response actions if a malicious or suspicious activity is detected by Cado. Under 'Acquisition Type' you can also configure Cado to perform a full acquisition which will acquire the full EBS volume. This is in addition to performing a triage collecion. Note that the full EBS volume will not be processed - processing can be triggered manually in the 'Evidence' tab within the appropriate investigation."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Currently, Cado supports the following response actions for EC2 instances:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Action"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required Permissions"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Stop Instance"}),(0,i.jsx)(t.td,{children:"Stops an EC2 instance using the AWS API"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ec2:StopInstances"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Isolate Role"}),(0,i.jsx)(t.td,{children:'Adds a "deny all" inline policy to isolate the IAM role attached to the EC2 instance'}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"iam:GetInstanceProfile"}),", ",(0,i.jsx)(t.code,{children:"iam:PutRolePolicy"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Isolate Security Group"}),(0,i.jsx)(t.td,{children:"Replaces the security group of an EC2 instance with a blank one"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"ec2:CreateSecurityGroup"}),", ",(0,i.jsx)(t.code,{children:"ec2:RevokeSecurityGroupEgress"}),", ",(0,i.jsx)(t.code,{children:"ec2:ModifyInstanceAttribute"})]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Ensure the appropriate IAM permissions are added to your Cado role and that the role has access to the resources on which you want to invoke actions."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Full Acquisition",src:n(53128).A+"",width:"2268",height:"1500"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"collecting-data-after-wiz-alerts",children:"Collecting Data After Wiz Alerts"}),"\n",(0,i.jsxs)(t.p,{children:["For instructions on automatically processing systems detected by Wiz, refer to the ",(0,i.jsx)(t.a,{href:"/cado/integrations/cnapp/wiz",children:"Wiz Forensics Integration Guide"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"managing-detection-rules",children:"Managing Detection Rules"}),"\n",(0,i.jsxs)(t.p,{children:["You can manage detection rules in the ",(0,i.jsx)(t.strong,{children:"Rules"})," area (/detections/rules). This interface allows you to easily create, enable/disable, edit, and delete rules as needed."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Manage Rules",src:n(61003).A+"",width:"3574",height:"809"})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-manually-perform-an-acquisition-for-guardduty-alerts",children:"How to manually perform an acquisition for GuardDuty alerts"}),"\n",(0,i.jsx)(t.p,{children:"If an acquisition fails or you wish to retry importing a capture, you can easily initiate one manually."}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Detections"})," > ",(0,i.jsx)(t.strong,{children:"Alert tab"}),", select the ",(0,i.jsx)(t.strong,{children:"GuardDuty alert"}),", and click ",(0,i.jsx)(t.strong,{children:"Actions"})," > ",(0,i.jsx)(t.strong,{children:"Triage"})," or ",(0,i.jsx)(t.strong,{children:"Full Acquisition"})," to begin the process."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Retry Logic",src:n(79370).A+"",width:"3348",height:"824"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},61003:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/detections-rules-760a9711548b55c15038bff71b46791f.png"},82738:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/environments-create-441942bdd5871532daf772ba48b11583.png"},53128:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/guardduty-full-acquisition-79fa134fbefe3af0d7032d4b17422839.png"},79370:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/retry-logic-5e5aec019c8046515d2e5d06308ba687.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);