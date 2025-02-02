"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1509],{46892:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(74848),l=s(28453);const o={title:"GCP Logging Best Practices",hide_title:!0,sidebar_position:12},t="GCP Logging Best Practices",r={id:"cado/deploy/gcp/logs",title:"GCP Logging Best Practices",description:"Google Cloud Platform (GCP) centralizes logs with Cloud Logging. Properly enabling, storing, and analyzing logs helps secure your environment and streamline incident response (IR). Below are key practices:",source:"@site/docs/cado/deploy/gcp/logs.md",sourceDirName:"cado/deploy/gcp",slug:"/cado/deploy/gcp/logs",permalink:"/cado/deploy/gcp/logs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/gcp/logs.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:12,frontMatter:{title:"GCP Logging Best Practices",hide_title:!0,sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Workers",permalink:"/cado/deploy/gcp/gcp-workers"},next:{title:"Cross cloud",permalink:"/cado/deploy/cross/intro"}},c={},d=[{value:"1. Use Cloud Audit Logs",id:"1-use-cloud-audit-logs",level:2},{value:"2. Configure Buckets and Retention",id:"2-configure-buckets-and-retention",level:2},{value:"3. Protect and Control Access",id:"3-protect-and-control-access",level:2},{value:"4. Monitor with Alerts",id:"4-monitor-with-alerts",level:2},{value:"5. VPC Flow Logs",id:"5-vpc-flow-logs",level:2},{value:"6. Logging Highlights by Service",id:"6-logging-highlights-by-service",level:2},{value:"References",id:"references",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"gcp-logging-best-practices",children:"GCP Logging Best Practices"}),"\n",(0,i.jsxs)(n.p,{children:["Google Cloud Platform (GCP) centralizes logs with ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/logging/",children:"Cloud Logging"}),". Properly enabling, storing, and analyzing logs helps secure your environment and streamline incident response (IR). Below are key practices:"]}),"\n",(0,i.jsx)(n.h2,{id:"1-use-cloud-audit-logs",children:"1. Use Cloud Audit Logs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Admin Activity Logs"})," (always on) track configuration changes (e.g., creating or deleting resources)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Access Logs"})," (disabled by default) capture data read/write operations\u2014be sure to enable them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"System Event Logs"})," (always on) note Google system-driven changes (e.g., maintenance events)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Policy Denied Logs"})," (enabled by default) record security policy violations."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-configure-buckets-and-retention",children:"2. Configure Buckets and Retention"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_Required Bucket"}),": Retains critical logs (Admin Activity, System Event) for 400 days (not adjustable)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"_Default Bucket"}),": Retains other logs (e.g., Data Access) for 30 days (can adjust)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User-Defined Buckets"}),": Route logs here using sinks. Customize retention and apply ",(0,i.jsx)(n.strong,{children:"Bucket Lock"})," if needed."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-protect-and-control-access",children:"3. Protect and Control Access"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Customer-Managed Encryption Keys (CMEK)"})," for tighter encryption control."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"IAM Roles"}),": Use least privilege (e.g., ",(0,i.jsx)(n.code,{children:"logging.viewer"}),", ",(0,i.jsx)(n.code,{children:"logging.privateLogViewer"}),", ",(0,i.jsx)(n.code,{children:"logging.admin"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log Views"})," to segment access for different teams."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Field-Level Access Controls"})," to redact sensitive data (incompatible with Log Analytics)."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-monitor-with-alerts",children:"4. Monitor with Alerts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log-Based Metrics"})," detect critical events (e.g., changes to audit configurations or firewall rules)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cloud Monitoring"})," generates alerts for suspicious logs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security Command Center (SCC)"})," surfaces potential threats in near-real time."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-vpc-flow-logs",children:"5. VPC Flow Logs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enable ",(0,i.jsx)(n.a,{href:"https://cloud.google.com/vpc/docs/using-flow-logs",children:"VPC Flow Logs"})," for network visibility."]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust ",(0,i.jsx)(n.strong,{children:"aggregation interval"})," and ",(0,i.jsx)(n.strong,{children:"sample rate"})," to balance detail vs. cost."]}),"\n",(0,i.jsx)(n.li,{children:"Export to BigQuery or Cloud Storage if you need long-term retention."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"6-logging-highlights-by-service",children:"6. Logging Highlights by Service"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Compute Engine (GCE)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Admin logs: creation, deletion, modification (on by default)."}),"\n",(0,i.jsx)(n.li,{children:"Data logs: must be manually enabled for reads/lists."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kubernetes Engine (GKE)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Admin logs: cannot be disabled."}),"\n",(0,i.jsx)(n.li,{children:"Control Plane logs: optionally enabled."}),"\n",(0,i.jsx)(n.li,{children:"Container logs: ephemeral by default\u2014use the GKE logging agent."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cloud Storage (GCS)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Admin logs: always on (e.g., bucket creation)."}),"\n",(0,i.jsx)(n.li,{children:"Data logs: enable for object access/read/write."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Virtual Private Cloud (VPC)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Admin logs: track subnets, firewalls, routes."}),"\n",(0,i.jsx)(n.li,{children:"Data logs: enable for listing networks, subnets, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cadosecurity.com/blog/how-to-be-ir-prepared-in-google-cloud-platform-gcp",children:"How to be IR Prepared in GCP"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.cadosecurity.com/blog/decoding-logs-in-the-cloud-gcp-admin-activity-logs",children:"Decoding GCP Logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cloud.google.com/logging/docs/audit/best-practices",children:"Cloud Audit Logs Best Practices"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var i=s(96540);const l={},o=i.createContext(l);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);