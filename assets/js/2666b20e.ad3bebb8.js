"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1126],{13520:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=t(74848),s=t(28453);const n={title:"Upload single file",hide_title:!0,sidebar_position:7},a="How to Upload a Single File to Cado",r={id:"cado/discovery-import/cado-host/manual-upload",title:"Upload single file",description:"You can upload a single file, such as a disk image or a previously collected Cado Host zip file, using Cado Host with the --singlefileunzipped parameter. This method is useful when you do not have direct access to AWS, Azure, or GCP, as Cado will generate the required credentials during the import process.",source:"@site/docs/cado/discovery-import/cado-host/manual-upload.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/manual-upload",permalink:"/cado/discovery-import/cado-host/manual-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/manual-upload.md",tags:[],version:"current",lastUpdatedAt:1739185771,formattedLastUpdatedAt:"Feb 10, 2025",sidebarPosition:7,frontMatter:{title:"Upload single file",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Command line parameters",permalink:"/cado/discovery-import/cado-host/cli"},next:{title:"Script operation",permalink:"/cado/discovery-import/cado-host/script-operation"}},l={},d=[{value:"Steps to Upload a Single File:",id:"steps-to-upload-a-single-file",level:3}];function c(e){const o={br:"br",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"how-to-upload-a-single-file-to-cado",children:"How to Upload a Single File to Cado"}),"\n",(0,i.jsxs)(o.p,{children:["You can upload a single file, such as a disk image or a previously collected Cado Host zip file, using Cado Host with the ",(0,i.jsx)(o.code,{children:"--single_file_unzipped"})," parameter. This method is useful when you do not have direct access to AWS, Azure, or GCP, as Cado will generate the required credentials during the import process."]}),"\n",(0,i.jsx)(o.h3,{id:"steps-to-upload-a-single-file",children:"Steps to Upload a Single File:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Generate Upload Credentials"}),(0,i.jsx)(o.br,{}),"\n","In the Cado Platform, go to ",(0,i.jsx)(o.strong,{children:"Import > Forensic Artifacts"})," to generate the credentials for the upload."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Copy Presigned Data"}),(0,i.jsx)(o.br,{}),"\n","In the investigator system, copy the ",(0,i.jsx)(o.code,{children:"--presigned_data"})," portion of the script to your clipboard."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Execute the Command"}),(0,i.jsx)(o.br,{}),"\n","Run the following command on the investigator system:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"cado-host.exe --single_file_unzipped $file <paste clipboard presigned_data>\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Replace ",(0,i.jsx)(o.code,{children:"$file"})," with the path to the file you wish to upload."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Automatic Processing"}),(0,i.jsx)(o.br,{}),"\n","Cado Host will upload the specified file, and Cado will automatically begin the import and processing of the file."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>r});var i=t(96540);const s={},n=i.createContext(s);function a(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);