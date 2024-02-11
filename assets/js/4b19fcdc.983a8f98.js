"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5971],{5337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(5893),a=r(1151);const s={title:"Azure Credentials",hide_title:!0,sidebar_position:4},i="Creating Secure Azure Credentials",o={id:"cado-host/azure-credentials",title:"Azure Credentials",description:"We now recommend using the automatically created temporary credentials generated by Cado Response. See our documentation here for more details.",source:"@site/docs/cado-host/azure-credentials.md",sourceDirName:"cado-host",slug:"/cado-host/azure-credentials",permalink:"/cado-host/azure-credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/azure-credentials.md",tags:[],version:"current",lastUpdatedAt:1707618697,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:4,frontMatter:{title:"Azure Credentials",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AWS Credentials",permalink:"/cado-host/aws-credentials"},next:{title:"Google Cloud Credentials",permalink:"/cado-host/google-credentials"}},c={},l=[{value:"Creating Blog Storage",id:"creating-blog-storage",level:2},{value:"Generating a Shared Access Signature",id:"generating-a-shared-access-signature",level:2},{value:"Generating a Shared Access Signature with Azure Storage Explorer",id:"generating-a-shared-access-signature-with-azure-storage-explorer",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["We now recommend using the automatically created temporary credentials generated by Cado Response. See our documentation ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"deploy#deploy-through-cado-response-platform",children:"here"})})," for more details."]})}),"\n",(0,n.jsx)(t.h1,{id:"creating-secure-azure-credentials",children:"Creating Secure Azure Credentials"}),"\n",(0,n.jsx)(t.p,{children:"In order to securely write to Azure, you'll need to create a limited access key called a Shared Access Signature."}),"\n",(0,n.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/FQoAnYVPRLo",title:"YouTube video player",frameborder:"0",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h2,{id:"creating-blog-storage",children:"Creating Blog Storage"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you haven't already, ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal",children:"Create a Blob storage container"})})," for your data in Azure."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"generating-a-shared-access-signature",children:"Generating a Shared Access Signature"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Browse to your Storage Account, and click Shared Access Signature to generate credentials to write to the Storage Containers in the Storage Account."}),"\n",(0,n.jsx)(t.li,{children:"Remove the ability to Read, List or Delete files, and click Generate SAS."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"generating-a-shared-access-signature-with-azure-storage-explorer",children:"Generating a Shared Access Signature with Azure Storage Explorer"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Alternatively you can create a Shared Access Signature with the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/features/storage-explorer/",children:"Azure Storage Explorer"})}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Right click the blob container you wish to use, and select Get Shared Access Signature."}),"\n",(0,n.jsx)(t.li,{children:"Select the time period you will be using these credentials for, and untick all permissions except for Write."}),"\n",(0,n.jsx)(t.li,{children:"Click Next, then Copy the Query string. This will be used for authentication"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When you are ready for the imaging process you will have:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'The account name (the account name that owns the new or existing container and that the access signature was generated, under "storage accounts")'}),"\n",(0,n.jsx)(t.li,{children:"The container name (set up to store the data)"}),"\n",(0,n.jsx)(t.li,{children:"And the generated long access signature (the query string, similar to the above diagram)"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"We recommend that you keep this information safe. Treat this information just as you would for a sensitive password or similar.  Once access is no longer required, we recommend removing access."})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Where possible with containers, we recommend setting up IP whitelisting as an extra layer of security.  Please ensure that read and list access are never granted. This prevents unauthorised access to the data uploaded in the case your access signature has been lost or exposed."})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(7294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);