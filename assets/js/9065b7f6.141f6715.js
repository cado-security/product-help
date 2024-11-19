"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[18],{2592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),n=t(8453);const o={title:"Azure credentials",hide_title:!0,sidebar_position:4},i="How to Create Secure Azure Credentials",a={id:"cado/discovery-import/cado-host/azure-credentials",title:"Azure credentials",description:"We now recommend using the automatically generated temporary credentials from Cado. For more details, see our documentation here.",source:"@site/docs/cado/discovery-import/cado-host/azure-credentials.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/azure-credentials",permalink:"/cado/discovery-import/cado-host/azure-credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/azure-credentials.md",tags:[],version:"current",lastUpdatedAt:1732050345,formattedLastUpdatedAt:"Nov 19, 2024",sidebarPosition:4,frontMatter:{title:"Azure credentials",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Google Cloud credentials",permalink:"/cado/discovery-import/cado-host/google-credentials"},next:{title:"Custom location for Cado Host",permalink:"/cado/discovery-import/cado-host/custom-locations"}},c={},d=[{value:"Step 1: Create Blob Storage",id:"step-1-create-blob-storage",level:2},{value:"Step 2: Generate a Shared Access Signature (SAS)",id:"step-2-generate-a-shared-access-signature-sas",level:2},{value:"Step 3: Generate a Shared Access Signature Using Azure Storage Explorer",id:"step-3-generate-a-shared-access-signature-using-azure-storage-explorer",level:2},{value:"Ready to Go",id:"ready-to-go",level:2}];function l(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsxs)(r.p,{children:["We now recommend using the automatically generated temporary credentials from Cado. For more details, see our documentation ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"deploy#deploy-through-cado-response-platform",children:"here"})}),"."]})}),"\n",(0,s.jsx)(r.h1,{id:"how-to-create-secure-azure-credentials",children:"How to Create Secure Azure Credentials"}),"\n",(0,s.jsx)(r.p,{children:"To securely write to Azure, you will need to create a limited-access key called a Shared Access Signature (SAS)."}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/FQoAnYVPRLo",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),"\n",(0,s.jsx)(r.h2,{id:"step-1-create-blob-storage",children:"Step 1: Create Blob Storage"}),"\n",(0,s.jsxs)(r.p,{children:["If you haven\u2019t already, follow this guide to ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal",children:"Create a Blob storage container"})})," in Azure to store your data."]}),"\n",(0,s.jsx)(r.h2,{id:"step-2-generate-a-shared-access-signature-sas",children:"Step 2: Generate a Shared Access Signature (SAS)"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Go to your Azure ",(0,s.jsx)(r.strong,{children:"Storage Account"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Click on ",(0,s.jsx)(r.strong,{children:"Shared Access Signature"})," to generate credentials for writing to the storage containers."]}),"\n",(0,s.jsxs)(r.li,{children:["Uncheck permissions for ",(0,s.jsx)(r.strong,{children:"Read"}),", ",(0,s.jsx)(r.strong,{children:"List"}),", and ",(0,s.jsx)(r.strong,{children:"Delete"})," to restrict access, and then click ",(0,s.jsx)(r.strong,{children:"Generate SAS"}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"step-3-generate-a-shared-access-signature-using-azure-storage-explorer",children:"Step 3: Generate a Shared Access Signature Using Azure Storage Explorer"}),"\n",(0,s.jsxs)(r.p,{children:["You can also generate a Shared Access Signature using ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://azure.microsoft.com/en-us/features/storage-explorer/",children:"Azure Storage Explorer"})}),":"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Right-click the blob container you want to use and select ",(0,s.jsx)(r.strong,{children:"Get Shared Access Signature"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Specify the time period for which the credentials will be valid, and untick all permissions except for ",(0,s.jsx)(r.strong,{children:"Write"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Click ",(0,s.jsx)(r.strong,{children:"Next"})," and copy the ",(0,s.jsx)(r.strong,{children:"Query String"}),", which will be used for authentication."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"ready-to-go",children:"Ready to Go"}),"\n",(0,s.jsx)(r.p,{children:"When you're ready for the imaging process, you should have:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.strong,{children:"Account Name"})," (the account that owns the container where the access signature was generated)."]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.strong,{children:"Container Name"})," (where the data will be stored)."]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.strong,{children:"Generated Access Signature"})," (the query string used for authentication)."]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"Keep this information safe, as you would with a sensitive password. Once access is no longer needed, we recommend revoking the credentials."})}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["For additional security, we recommend setting up ",(0,s.jsx)(r.strong,{children:"IP whitelisting"})," for containers where possible. Ensure that ",(0,s.jsx)(r.strong,{children:"read"})," and ",(0,s.jsx)(r.strong,{children:"list"})," permissions are never granted, which prevents unauthorized access if the SAS token is exposed."]})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var s=t(6540);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);