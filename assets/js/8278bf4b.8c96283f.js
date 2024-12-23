"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6750],{83701:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=t(74848),r=t(28453);const n={title:"Google Cloud Storage",hide_title:!0,sidebar_position:2},i="How to Import from Google Cloud Storage",c={id:"cado/discovery-import/gcp/storage",title:"Google Cloud Storage",description:"The Cado platform supports the acquisition of data from Google Cloud Platform (GCP) Storage Buckets. The two main use cases for this are:",source:"@site/docs/cado/discovery-import/gcp/storage.md",sourceDirName:"cado/discovery-import/gcp",slug:"/cado/discovery-import/gcp/storage",permalink:"/cado/discovery-import/gcp/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/gcp/storage.md",tags:[],version:"current",lastUpdatedAt:1734964901,formattedLastUpdatedAt:"Dec 23, 2024",sidebarPosition:2,frontMatter:{title:"Google Cloud Storage",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Compute Engine",permalink:"/cado/discovery-import/gcp/engine-instance"},next:{title:"Google Cloud Kubernetes Engine",permalink:"/cado/discovery-import/gcp/kubernetes-engine"}},a={},l=[{value:"Steps to Import Data",id:"steps-to-import-data",level:3},{value:"Uploading On-Premise Evidence to GCP Storage for Import",id:"uploading-on-premise-evidence-to-gcp-storage-for-import",level:2}];function d(e){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"how-to-import-from-google-cloud-storage",children:"How to Import from Google Cloud Storage"}),"\n",(0,s.jsx)(o.p,{children:"The Cado platform supports the acquisition of data from Google Cloud Platform (GCP) Storage Buckets. The two main use cases for this are:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Analyzing disk images or zip files"})," uploaded to a GCP Storage Bucket as part of an investigation."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Analyzing the contents of a GCP Storage Bucket"})," for any uploaded content that could be related to an incident."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"steps-to-import-data",children:"Steps to Import Data"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Select the Investigation"}),": Choose the investigation you are working on."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Select the Bucket"}),": Choose the GCP Storage Bucket you wish to analyze."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Select Objects to Import"}),": Select the specific files or objects from the bucket to import into Cado."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Import GCP Storage",src:t(15656).A+"",width:"1796",height:"758"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"uploading-on-premise-evidence-to-gcp-storage-for-import",children:"Uploading On-Premise Evidence to GCP Storage for Import"}),"\n",(0,s.jsx)(o.p,{children:"You can upload data to GCP Storage using the following methods:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"GCP Console"}),": If you have access to the ",(0,s.jsx)(o.a,{href:"https://console.cloud.google.com/",children:"GCP Console"}),", you can upload data directly from your web browser."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Desktop GUI Tools"}),": Alternatively, you can use a tool like ",(0,s.jsx)(o.a,{href:"https://cyberduck.io/",children:"Cyberduck"})," with ",(0,s.jsx)(o.a,{href:"https://docs.duck.sh/protocols/googlecloudstorage/",children:"oAuth 2.0 Access"})," to upload files from your desktop. Cyberduck supports features such as resuming failed uploads."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["We recommend scoping access by assigning the associated role ",(0,s.jsx)(o.strong,{children:(0,s.jsx)(o.a,{href:"https://stackoverflow.com/questions/57147765/gcp-write-only-access-to-bucket-gcs",children:"write-only"})})," permissions for enhanced security."]}),"\n",(0,s.jsx)(o.h1,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"GCS Import",src:t(20370).A+"",width:"960",height:"540"})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},20370:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/gcs_import-b5028366bc7b1c444c99d6509016f4ef.png"},15656:(e,o,t)=>{t.d(o,{A:()=>s});const s=t.p+"assets/images/google-cloud-storage-4e82160612df4ceacb5b5934df3de5ba.png"},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>c});var s=t(96540);const r={},n=s.createContext(r);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);