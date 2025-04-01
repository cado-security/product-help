"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8047],{58606:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var t=o(74848),s=o(28453);const n={title:"Azure Storage",hide_title:!0,sidebar_position:2},a="How to Import Azure Storage",i={id:"cado/discovery-import/azure/azure-storage",title:"Azure Storage",description:"The Cado platform supports acquiring data from Azure Blob Storage. The two main use cases for Azure Storage acquisition are:",source:"@site/docs/cado/discovery-import/azure/azure-storage.md",sourceDirName:"cado/discovery-import/azure",slug:"/cado/discovery-import/azure/azure-storage",permalink:"/cado/discovery-import/azure/azure-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/azure/azure-storage.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:2,frontMatter:{title:"Azure Storage",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure Compute",permalink:"/cado/discovery-import/azure/azure-compute"},next:{title:"Azure Kubernetes Service",permalink:"/cado/discovery-import/azure/azure-aks"}},c={},d=[{value:"Steps to Import Data from Azure Blob Storage",id:"steps-to-import-data-from-azure-blob-storage",level:3},{value:"Uploading On-Premise Evidence to Azure Storage for Import",id:"uploading-on-premise-evidence-to-azure-storage-for-import",level:2}];function l(e){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"how-to-import-azure-storage",children:"How to Import Azure Storage"}),"\n",(0,t.jsx)(r.p,{children:"The Cado platform supports acquiring data from Azure Blob Storage. The two main use cases for Azure Storage acquisition are:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Analyzing disk images or zip files"})," uploaded to an Azure Blob Storage container as part of an investigation."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Analyzing the contents of an Azure Blob Storage container"})," for any uploaded content that could be part of an incident."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"steps-to-import-data-from-azure-blob-storage",children:"Steps to Import Data from Azure Blob Storage"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Select an Azure Subscription"}),(0,t.jsx)(r.br,{}),"\n","Choose the Azure subscription linked to your investigation."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Select the Storage Account"}),(0,t.jsx)(r.br,{}),"\n","Pick the appropriate storage account and then select the container containing the data you wish to analyze."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Download the Blob"}),(0,t.jsx)(r.br,{}),"\n","Click the download icon next to the relevant blob to start the acquisition process."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Import Azure Storage",src:o(99016).A+"",width:"1777",height:"721"})}),"\n",(0,t.jsx)(r.h2,{id:"uploading-on-premise-evidence-to-azure-storage-for-import",children:"Uploading On-Premise Evidence to Azure Storage for Import"}),"\n",(0,t.jsxs)(r.p,{children:["If you have access to the ",(0,t.jsx)(r.a,{href:"https://portal.azure.com/",children:"Azure Console"}),", you can upload data directly from your web browser."]}),"\n",(0,t.jsxs)(r.p,{children:["Alternatively, you can use a ",(0,t.jsx)(r.strong,{children:"SAS Token"})," or ",(0,t.jsx)(r.strong,{children:"Access Key"})," with a desktop tool like ",(0,t.jsx)(r.a,{href:"https://cyberduck.io/azure/",children:"Cyberduck"})," to upload files easily. Tools like Cyberduck support useful features such as resuming failed uploads."]}),"\n",(0,t.jsxs)(r.p,{children:["We recommend scoping the access permissions by giving ",(0,t.jsx)(r.strong,{children:"write-only"})," access to Azure Storage. More information on setting write-only permissions can be found ",(0,t.jsx)(r.a,{href:"https://stackoverflow.com/questions/50864068/write-only-access-no-read-no-list-no-delete-to-azure-storage",children:"here"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["You can also use ",(0,t.jsx)(r.strong,{children:"Cado Host"})," with the ",(0,t.jsx)(r.code,{children:"--single_file_unzipped"})," parameter to upload evidence. This is particularly useful if you do not have direct access to Azure, as Cado will generate the necessary credentials under ",(0,t.jsx)(r.strong,{children:"Import > Cado Host"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},99016:(e,r,o)=>{o.d(r,{A:()=>t});const t=o.p+"assets/images/azure-storage-0814ca3c04c4e6ae93c1d365601b1b3d.png"},28453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>i});var t=o(96540);const s={},n=t.createContext(s);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);