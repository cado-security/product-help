"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2744],{49697:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=i(74848),n=i(28453);const r={title:"File Types",hide_title:!0,sidebar_position:1},o="What Filetypes Can Cado Process?",l={id:"cado/discovery-import/data-types/filetypes",title:"File Types",description:"The Cado platform supports a wide variety of evidence types for processing, with some differences depending on your cloud platform.",source:"@site/docs/cado/discovery-import/data-types/filetypes.md",sourceDirName:"cado/discovery-import/data-types",slug:"/cado/discovery-import/data-types/filetypes",permalink:"/cado/discovery-import/data-types/filetypes",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/data-types/filetypes.md",tags:[],version:"current",lastUpdatedAt:1743513009,formattedLastUpdatedAt:"Apr 1, 2025",sidebarPosition:1,frontMatter:{title:"File Types",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chain of custody",permalink:"/cado/discovery-import/chain_of_custody"},next:{title:"Log & artifact types",permalink:"/cado/discovery-import/data-types/logs"}},d={},a=[{value:"AWS Capture Formats",id:"aws-capture-formats",level:3},{value:"Azure Capture Formats",id:"azure-capture-formats",level:3},{value:"GCP Capture Formats",id:"gcp-capture-formats",level:3},{value:"Storage Formats",id:"storage-formats",level:3},{value:"Storage Media",id:"storage-media",level:4},{value:"Limitations and Notes",id:"limitations-and-notes",level:3},{value:"Volume Systems",id:"volume-systems",level:4},{value:"File Systems",id:"file-systems",level:4}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"what-filetypes-can-cado-process",children:"What Filetypes Can Cado Process?"}),"\n",(0,t.jsx)(s.p,{children:"The Cado platform supports a wide variety of evidence types for processing, with some differences depending on your cloud platform."}),"\n",(0,t.jsx)(s.h3,{id:"aws-capture-formats",children:"AWS Capture Formats"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"EC2 (Including AMIs, EBS Snapshots, and Volumes)"}),"\n",(0,t.jsx)(s.li,{children:"S3 Storage (both standard and Glacier)"}),"\n",(0,t.jsx)(s.li,{children:"AWS Kubernetes (ECS and EKS)"}),"\n",(0,t.jsx)(s.li,{children:"AWS Lambda"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"azure-capture-formats",children:"Azure Capture Formats"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Virtual Machines"}),"\n",(0,t.jsx)(s.li,{children:"Disks"}),"\n",(0,t.jsx)(s.li,{children:"Storage Containers"}),"\n",(0,t.jsx)(s.li,{children:"Container Blobs"}),"\n",(0,t.jsx)(s.li,{children:"Kubernetes (AKS)"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"gcp-capture-formats",children:"GCP Capture Formats"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Compute Engine"}),"\n",(0,t.jsx)(s.li,{children:"Disks"}),"\n",(0,t.jsx)(s.li,{children:"Storage Buckets"}),"\n",(0,t.jsx)(s.li,{children:"Kubernetes (GKE)"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"storage-formats",children:"Storage Formats"}),"\n",(0,t.jsx)(s.p,{children:"In addition to native support for cloud-based machines and data, Cado can process the following local evidence formats:"}),"\n",(0,t.jsx)(s.h4,{id:"storage-media",children:"Storage Media"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".E01"})," and split ",(0,t.jsx)(s.code,{children:".E01"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".VHD"})," and ",(0,t.jsx)(s.code,{children:".VHDX"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".DD"})," (Optionally ",(0,t.jsx)(s.code,{children:".GZ"})," Compressed)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".GZ"}),", ",(0,t.jsx)(s.code,{children:".TAR"}),", ",(0,t.jsx)(s.code,{children:".ZIP"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:".VMDK"})," (Partial Support*)"]}),"\n",(0,t.jsxs)(s.li,{children:["Other forensic artifacts collected by EDR tools or ",(0,t.jsx)(s.a,{href:"/cado/discovery-import/cado-host/intro",children:"Cado Host"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To import a compressed dd image, use Gzip and add the ",(0,t.jsx)(s.code,{children:".gz"})," extension (e.g., ",(0,t.jsx)(s.code,{children:"disk.dd.gz"}),")."]}),"\n",(0,t.jsx)(s.h3,{id:"limitations-and-notes",children:"Limitations and Notes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Split E01 disks"})," are currently supported only in AWS. Importing zipped split E01 files is not supported."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"VMDK"})," files are partially supported, as the format has various sub-formats. For better compatibility, it's recommended to convert VMDK files to ",(0,t.jsx)(s.code,{children:".dd"})," format before importing."]}),"\n",(0,t.jsx)(s.li,{children:"If you import a ZIP file, it will be treated as a container of files unless it contains a single file."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"volume-systems",children:"Volume Systems"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"GPT"}),"\n",(0,t.jsx)(s.li,{children:"LVM"}),"\n",(0,t.jsx)(s.li,{children:"MBR"}),"\n",(0,t.jsx)(s.li,{children:"Volume Shadow Snapshots (VSS)"}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"file-systems",children:"File Systems"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"ext2, ext3, ext4"}),"\n",(0,t.jsx)(s.li,{children:"FAT"}),"\n",(0,t.jsx)(s.li,{children:"NTFS (version 3)"}),"\n",(0,t.jsx)(s.li,{children:"XFS (version 4, 5)"}),"\n",(0,t.jsx)(s.li,{children:"Apple File System (APFS)"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Cado can also handle a variety of other disk images and file formats not listed here, though they may not be officially supported. If you have a specific file type you'd like to see supported, feel free to contact us at ",(0,t.jsx)(s.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>l});var t=i(96540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);