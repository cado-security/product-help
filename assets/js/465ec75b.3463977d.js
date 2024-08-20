"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4808],{1148:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=t(5893),r=t(1151);const n={title:"File Types",hide_title:!0,sidebar_position:1},o="File Types",l={id:"cado-response/discovery-import/import/data-types/filetypes",title:"File Types",description:"The Cado platform supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.",source:"@site/docs/cado-response/discovery-import/import/data-types/filetypes.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/filetypes",permalink:"/cado-response/discovery-import/import/data-types/filetypes",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/filetypes.md",tags:[],version:"current",lastUpdatedAt:1724189460,formattedLastUpdatedAt:"Aug 20, 2024",sidebarPosition:1,frontMatter:{title:"File Types",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Import from Cloud",permalink:"/cado-response/discovery-import/import/import-from-cloud"},next:{title:"Log & Artifact Types",permalink:"/cado-response/discovery-import/import/data-types/logs"}},a={},d=[{value:"AWS Capture Formats",id:"aws-capture-formats",level:3},{value:"Azure Capture Formats",id:"azure-capture-formats",level:3},{value:"GCP Capture Formats",id:"gcp-capture-formats",level:3},{value:"Storage Formats",id:"storage-formats",level:3},{value:"Storage Media",id:"storage-media",level:4},{value:"Limitations and Notes",id:"limitations-and-notes",level:3},{value:"Volume Systems",id:"volume-systems",level:4},{value:"File Systems",id:"file-systems",level:4}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"file-types",children:"File Types"}),"\n",(0,i.jsx)(s.p,{children:"The Cado platform supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform."}),"\n",(0,i.jsx)(s.h3,{id:"aws-capture-formats",children:"AWS Capture Formats"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"EC2 (Including AMI, EBS Snapshots and Volumes)"}),"\n",(0,i.jsx)(s.li,{children:"S3 Storage (normal and glacier)"}),"\n",(0,i.jsx)(s.li,{children:"AWS Kubernetes (ECS and EKS)"}),"\n",(0,i.jsx)(s.li,{children:"AWS Lambda"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"azure-capture-formats",children:"Azure Capture Formats"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Virtual Machines"}),"\n",(0,i.jsx)(s.li,{children:"Disks"}),"\n",(0,i.jsx)(s.li,{children:"Storage Containers"}),"\n",(0,i.jsx)(s.li,{children:"Container Blobs"}),"\n",(0,i.jsx)(s.li,{children:"Kubernetes (AKS)"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"gcp-capture-formats",children:"GCP Capture Formats"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Compute Engine"}),"\n",(0,i.jsx)(s.li,{children:"Disks"}),"\n",(0,i.jsx)(s.li,{children:"Storage Buckets"}),"\n",(0,i.jsx)(s.li,{children:"Kubernetes (GKE)"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"storage-formats",children:"Storage Formats"}),"\n",(0,i.jsx)(s.p,{children:"In addition to native capture support for machines and data running/stored in the cloud, Cado also supports processing of the following local evidence formats."}),"\n",(0,i.jsx)(s.h4,{id:"storage-media",children:"Storage Media"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:".E01, and split E01"}),"\n",(0,i.jsx)(s.li,{children:".VHD and .VHDX"}),"\n",(0,i.jsx)(s.li,{children:".DD (Optionally .GZ Compressed)"}),"\n",(0,i.jsx)(s.li,{children:".GZ / .Tar / .Zip"}),"\n",(0,i.jsx)(s.li,{children:".VMDK (Partial Support*)"}),"\n",(0,i.jsxs)(s.li,{children:["Other forensic triage artifacts collected by EDR Tools or ",(0,i.jsx)(s.a,{href:"/cado-host/intro",children:"Cado Host"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["To import a compressed dd image, compress with Gzip and add .gz to the extension. (example: ",(0,i.jsx)(s.code,{children:"disk.dd.gz"}),")"]}),"\n",(0,i.jsx)(s.h3,{id:"limitations-and-notes",children:"Limitations and Notes"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Currently, split E01 format disks are supported in AWS only. Importing zipped split E01s is not supported."}),"\n",(0,i.jsx)(s.li,{children:"VMDK's are partially supported as the file format contains many different sub-formats. If possible, we recommend converting to dd format before importing."}),"\n",(0,i.jsxs)(s.li,{children:["If you import a zip, it will be treated as a container of files ",(0,i.jsx)(s.strong,{children:"unless"})," it is a zip of a single file."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"volume-systems",children:"Volume Systems"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"GPT"}),"\n",(0,i.jsx)(s.li,{children:"LVM"}),"\n",(0,i.jsx)(s.li,{children:"MBR"}),"\n",(0,i.jsx)(s.li,{children:"Volume Shadow Snapshots (VSS)"}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"file-systems",children:"File Systems"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"ext version 2, 3, 4"}),"\n",(0,i.jsx)(s.li,{children:"FAT"}),"\n",(0,i.jsx)(s.li,{children:"NTFS version 3"}),"\n",(0,i.jsx)(s.li,{children:"XFS version 4, 5"}),"\n",(0,i.jsx)(s.li,{children:"Apple File System (APFS)"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Cado can also import a number of other disk image and file formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a filetype that you would like to see supported, please reach out to ",(0,i.jsx)(s.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," and let us know."]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var i=t(7294);const r={},n=i.createContext(r);function o(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);