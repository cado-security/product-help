"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[968],{1930:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=r(5893),i=r(1151);const n={title:"Memory Analysis",hide_title:!0,sidebar_position:3},t="Memory Analysis",a={id:"cado-response/discovery-import/import/data-types/memory",title:"Memory Analysis",description:"You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking Import > Cado Host and running the pre-generated script on the host device. Process memory collection is not currently supported on OSX.",source:"@site/docs/cado-response/discovery-import/import/data-types/memory.md",sourceDirName:"cado-response/discovery-import/import/data-types",slug:"/cado-response/discovery-import/import/data-types/memory",permalink:"/cado-response/discovery-import/import/data-types/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/data-types/memory.md",tags:[],version:"current",lastUpdatedAt:1719936428,formattedLastUpdatedAt:"Jul 2, 2024",sidebarPosition:3,frontMatter:{title:"Memory Analysis",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Log Types",permalink:"/cado-response/discovery-import/import/data-types/logs"},next:{title:"Supported Import Types",permalink:"/cado-response/discovery-import/import/data-types/import-types"}},c={},d=[{value:"Processing Previously Acquired Memory Images",id:"processing-previously-acquired-memory-images",level:2},{value:"Acquiring Memory from AWS EC2",id:"acquiring-memory-from-aws-ec2",level:2},{value:"Containers",id:"containers",level:2},{value:"Processed Memory",id:"processed-memory",level:2},{value:"File and Log Carving",id:"file-and-log-carving",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"memory-analysis",children:"Memory Analysis"}),"\n",(0,s.jsxs)(o.p,{children:["You can perform a memory acquisition of a Windows or Linux system using Cado Host by clicking ",(0,s.jsx)(o.code,{children:"Import > Cado Host"})," and running the pre-generated script on the host device. Process memory collection is not currently supported on OSX."]}),"\n",(0,s.jsxs)(o.p,{children:["Enable the options to collect memory, and optionally collect larger process memory files:\n",(0,s.jsx)(o.img,{alt:"Enable Memory",src:r(2205).Z+"",width:"2120",height:"644"}),"\nWindows systems can have particularly large process memory files which can result in a slow collection process, so we recommend only enabling the ",(0,s.jsx)(o.strong,{children:"Enable Extended Memory Collection"})," option on Windows systems where required."]}),"\n",(0,s.jsxs)(o.p,{children:['We collect memory from individual processes as .mem files, viewable under the "process_dumps" folder.\nWe find this allows for more reliable analysis than our previous version which collected a single capture of memory, and utilises our open source tool ',(0,s.jsx)(o.a,{href:"https://github.com/cado-security/varc",children:"varc"})]}),"\n",(0,s.jsx)(o.h2,{id:"processing-previously-acquired-memory-images",children:"Processing Previously Acquired Memory Images"}),"\n",(0,s.jsxs)(o.p,{children:["The Cado Platform can also perform limited processing of full memory images (or dumps), acquiring using third party tools.\nThe memory image is carved to extract logs and other artifacts, using our open source tool ",(0,s.jsx)(o.a,{href:"https://github.com/cado-security/rip_raw",children:"ripraw"}),". This approach does not perform a structured analysis of the memory image, but can be useful for extracting logs and other artifacts from a memory image."]}),"\n",(0,s.jsxs)(o.p,{children:["To import externally acquired memory, ensure the memory image is named with a ",(0,s.jsx)(o.code,{children:".mem"})," file extension so it is recognized as a memory file.\nUpload file to a cloud storage location (AWS S3, Azure Storage, or Google Cloud Storage) that Cado has access to.\nThen click ",(0,s.jsx)(o.code,{children:"Import > (Cloud) > (Storage)"})," within Cado, navigate to the location where the .mem file resides, and import it."]}),"\n",(0,s.jsx)(o.h2,{id:"acquiring-memory-from-aws-ec2",children:"Acquiring Memory from AWS EC2"}),"\n",(0,s.jsx)(o.p,{children:'You can acquire memory of Linux systems in EC2 by using the "Alternate Acquisition" option under Import > EC2:'}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"AWS Memory",src:r(877).Z+"",width:"1648",height:"284"})}),"\n",(0,s.jsxs)(o.p,{children:["This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager.\nIf it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from ",(0,s.jsx)(o.strong,{children:"Import"})," > ",(0,s.jsx)(o.strong,{children:"Cado Host"}),".\nYou can also use this method to acquire from Windows systems."]}),"\n",(0,s.jsx)(o.h2,{id:"containers",children:"Containers"}),"\n",(0,s.jsxs)(o.p,{children:["Any acquisition from a container (e.g. ECS/EKS/AKS) will attempt to collect memory by default.\nIn our ",(0,s.jsx)(o.a,{href:"https://github.com/cado-security/varc",children:"testing"}),":"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"AWS Lambda successfully dumped process memory by default, however requires manual execution within the Lambda function."}),"\n",(0,s.jsx)(o.li,{children:"EKS on EC2 successfully dumped process memory by default."}),"\n",(0,s.jsx)(o.li,{children:"ECS on Fargate required us to enable CAP_SYS_PTRACE in our task definition."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"processed-memory",children:"Processed Memory"}),"\n",(0,s.jsx)(o.p,{children:"Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections."}),"\n",(0,s.jsxs)(o.p,{children:['Collected memory files are under the "process_dumps" folder:\n',(0,s.jsx)(o.img,{alt:"Import Evidence",src:r(615).Z+"",width:"1138",height:"1028"})]}),"\n",(0,s.jsx)(o.p,{children:"And running process information is recorded in processes.json:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Process Info",src:r(5870).Z+"",width:"3144",height:"936"})}),"\n",(0,s.jsx)(o.p,{children:"Information on network connections is recorded in network.json, open files in open_files.json, and open files are collected in the collected_files folder."}),"\n",(0,s.jsx)(o.h2,{id:"file-and-log-carving",children:"File and Log Carving"}),"\n",(0,s.jsxs)(o.p,{children:['Any file that is imported with the extension ".mem" will be processed using our open-source tool ',(0,s.jsx)(o.a,{href:"https://github.com/cado-security/rip_raw",children:"RipRaw"})," for file and log carving."]})]})}function m(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},877:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/alternate-ec2-1d44379783163049a09c15fbf9a92565.png"},615:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/collected-memory-ac9e487a30fdc244204f920483edb251.png"},2205:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/enable-memory-09ab82739929f71230a6cbd5bb0d337e.png"},5870:(e,o,r)=>{r.d(o,{Z:()=>s});const s=r.p+"assets/images/proccess-info-54e66b0e418d23146cc12b46fcbe6ee2.png"},1151:(e,o,r)=>{r.d(o,{Z:()=>a,a:()=>t});var s=r(7294);const i={},n=s.createContext(i);function t(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);