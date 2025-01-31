"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3027],{80051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(74848),o=n(28453);const r={title:"Workers",hide_title:!0,sidebar_position:11},i="Workers",c={id:"cado/deploy/gcp/gcp-workers",title:"Workers",description:"The initial minimal deployment runs everything on a single Compute instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in GCS. We also limit how many pieces of evidence can be processed at once.",source:"@site/docs/cado/deploy/gcp/gcp-workers.md",sourceDirName:"cado/deploy/gcp",slug:"/cado/deploy/gcp/gcp-workers",permalink:"/cado/deploy/gcp/gcp-workers",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/gcp/gcp-workers.md",tags:[],version:"current",lastUpdatedAt:1738330901,formattedLastUpdatedAt:"Jan 31, 2025",sidebarPosition:11,frontMatter:{title:"Workers",hide_title:!0,sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Bucket",permalink:"/cado/deploy/gcp/gcp-bucket"},next:{title:"GCP Logging Best Practices",permalink:"/cado/deploy/gcp/logs"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Steps",id:"steps",level:3}];function a(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"workers",children:"Workers"}),"\n",(0,s.jsx)(t.p,{children:"The initial minimal deployment runs everything on a single Compute instance. In order to limit load on this instance and ensure the platform remains stable we limit types of imports that can be run to those based around Cado Host captures and small artefacts stored in GCS. We also limit how many pieces of evidence can be processed at once."}),"\n",(0,s.jsx)(t.p,{children:"To enable processing data from all sources or to process many items of evidence at once, Cado must be configured to allow it to run imports on additional Compute instances."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"vCPU capacity in your region: we recommend requesting 128"}),"\n",(0,s.jsx)(t.li,{children:"The IAM instance role used in the initial deployment, and permission to edit it"}),"\n",(0,s.jsx)(t.li,{children:"The firewall you used in the initial deployment, and permission to edit it"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Add the necessary permissions by adding the following to your IAM role:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// Worker Permissions\n"compute.disks.create"\n"compute.instances.create"\n"compute.instances.setMetadata"\n"compute.instances.setServiceAccount"\n"compute.addresses.use"\n"compute.instances.addAccessConfig"\n"compute.instances.delete"\n"compute.instances.setLabels"\n"compute.subnetworks.use"\n"compute.networks.get"\n"compute.networks.list"\n"compute.instances.setTags"\n"compute.instances.get"\n\n// Adjusting Worker Settings\n"compute.machineTypes.get"\n"compute.machineTypes.list"\n"compute.regions.get"\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Add the following inbound rules to your firewall"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Port"}),(0,s.jsx)(t.th,{children:"Protocol"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5432"}),(0,s.jsx)(t.td,{children:"TCP"}),(0,s.jsx)(t.td,{children:"Data Storage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9200"}),(0,s.jsx)(t.td,{children:"TCP"}),(0,s.jsx)(t.td,{children:"Data Storage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"6379"}),(0,s.jsx)(t.td,{children:"TCP"}),(0,s.jsx)(t.td,{children:"Data Storage"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"24224"}),(0,s.jsx)(t.td,{children:"TCP"}),(0,s.jsx)(t.td,{children:"Log Handling"})]})]})]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Enable in the UI: ",(0,s.jsx)(t.strong,{children:"Settings"})," > ",(0,s.jsx)(t.strong,{children:"Advanced"})," > ",(0,s.jsx)(t.strong,{children:"Deployed Workers"})," > Enable Deployed Workers"]}),"\n",(0,s.jsxs)(t.li,{children:["Got to ",(0,s.jsx)(t.strong,{children:"Platform"})," > ",(0,s.jsx)(t.strong,{children:"Run a Platform Check"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);