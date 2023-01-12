"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=o,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(f,n(n({ref:t},d),{},{components:r})):a.createElement(f,n({ref:t},d))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const i={title:"File Types",hide_title:!0,sidebar_position:1},n="File Types",s={unversionedId:"cado-response/discovery-import/import/data-types/filetypes",id:"cado-response/discovery-import/import/data-types/filetypes",title:"File Types",description:"The Cado platform supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform.",source:"@site/docs/cado-response/discovery-import/import/data-types/filetypes.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/filetypes",permalink:"/cado-response/discovery-import/import/data-types/filetypes",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/filetypes.md",tags:[],version:"current",lastUpdatedAt:1667941408,formattedLastUpdatedAt:"Nov 8, 2022",sidebarPosition:1,frontMatter:{title:"File Types",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/discovery-import/import/intro"},next:{title:"Log Types",permalink:"/cado-response/discovery-import/import/data-types/logs"}},l={},p=[{value:"AWS Capture Formats",id:"aws-capture-formats",level:3},{value:"Azure Capture Formats",id:"azure-capture-formats",level:3},{value:"Storage Formats",id:"storage-formats",level:3},{value:"Storage Media",id:"storage-media",level:4},{value:"Volume Systems",id:"volume-systems",level:4},{value:"File Systems",id:"file-systems",level:4}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-types"},"File Types"),(0,o.kt)("p",null,"The Cado platform supports the processing of a wide range of evidence types.  These may differ slightly based on your cloud platform."),(0,o.kt)("h3",{id:"aws-capture-formats"},"AWS Capture Formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"EC2"),(0,o.kt)("li",{parentName:"ul"},"S3 Storage (normal and glacier)"),(0,o.kt)("li",{parentName:"ul"},"AWS Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"AWS Lambda")),(0,o.kt)("h3",{id:"azure-capture-formats"},"Azure Capture Formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Virtual Machines "),(0,o.kt)("li",{parentName:"ul"},"Disks"),(0,o.kt)("li",{parentName:"ul"},"Storage Containers"),(0,o.kt)("li",{parentName:"ul"},"Container Blobs"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes Disks")),(0,o.kt)("h3",{id:"storage-formats"},"Storage Formats"),(0,o.kt)("p",null,"In addition to native capture support for machines and data running/stored in the cloud, Cado also supports processing of the following local evidence formats.  "),(0,o.kt)("h4",{id:"storage-media"},"Storage Media"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".E01, and split E01"),(0,o.kt)("li",{parentName:"ul"},".VHD and .VHDX"),(0,o.kt)("li",{parentName:"ul"},".DD (Optionally .GZ Compressed)"),(0,o.kt)("li",{parentName:"ul"},".GZ / .Tar / .Zip"),(0,o.kt)("li",{parentName:"ul"},".VMDK (Partial Support*)"),(0,o.kt)("li",{parentName:"ul"},"Other forensic triage artifacts collected by EDR Tools or ",(0,o.kt)("a",{parentName:"li",href:"https://docs.cadosecurity.com/cado-host/intro"},"Cado Host"))),(0,o.kt)("p",null,"To import a compressed dd image, compress with Gzip and add .gz to the extension. (example: ",(0,o.kt)("inlineCode",{parentName:"p"},"disk.dd.gz"),")"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, split E01 format disks are supported in AWS only.\n*VMDK's are partially supported as the file format contains many different sub-formats.  If possible, we recommend converting to dd format before importing.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you import a zip, it will be treated as a container of files ",(0,o.kt)("strong",{parentName:"p"},"unless")," it is a zip of a single file. Importing zipped split E01s is not supported.")),(0,o.kt)("h4",{id:"volume-systems"},"Volume Systems"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GPT"),(0,o.kt)("li",{parentName:"ul"},"LVM"),(0,o.kt)("li",{parentName:"ul"},"MBR"),(0,o.kt)("li",{parentName:"ul"},"Volume Shadow Snapshots (VSS)")),(0,o.kt)("h4",{id:"file-systems"},"File Systems"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ext version 2, 3, 4"),(0,o.kt)("li",{parentName:"ul"},"FAT"),(0,o.kt)("li",{parentName:"ul"},"NTFS version 3"),(0,o.kt)("li",{parentName:"ul"},"XFS version 4, 5"),(0,o.kt)("li",{parentName:"ul"},"Apple File System (APFS) ")),(0,o.kt)("p",null,"Cado can also import a number of other disk image and file formats that are not listed here; however, these evidence types and file formats are not officially supported.  If you have a filetype that you would like to see supported, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@cadosecurity.com"},"support@cadosecurity.com")," and let us know."))}u.isMDXComponent=!0}}]);