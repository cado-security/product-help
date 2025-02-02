"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[220],{99305:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(74848),o=n(28453);const s={sidebar_position:7,id:"community-intro",title:"Community edition"},a="What is Cado Community Edition?",r={id:"cado/community-intro",title:"Community edition",description:"The Cado platform leverages the cloud's scale, speed, and automation to accelerate investigations and incident response. Cado Community Edition is a free version of the Cado platform that allows you to analyze:",source:"@site/docs/cado/community.md",sourceDirName:"cado",slug:"/cado/community-intro",permalink:"/cado/community-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/community.md",tags:[],version:"current",lastUpdatedAt:1738502359,formattedLastUpdatedAt:"Feb 2, 2025",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"community-intro",title:"Community edition"},sidebar:"tutorialSidebar",previous:{title:"AI Investigator",permalink:"/cado/investigate/ai investigator"},next:{title:"Manage users",permalink:"/cado/manage/users-authentication/users"}},d={},l=[{value:"Benefits",id:"benefits",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Signing Up for Cado Community Edition",id:"signing-up-for-cado-community-edition",level:3},{value:"Deploying in Your Cloud Environment",id:"deploying-in-your-cloud-environment",level:3},{value:"Processing Data",id:"processing-data",level:3},{value:"Analyzing Evidence",id:"analyzing-evidence",level:3},{value:"How Does Cado Community Edition Differ From the Full Cado Platform?",id:"how-does-cado-community-edition-differ-from-the-full-cado-platform",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"what-is-cado-community-edition",children:"What is Cado Community Edition?"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"/cado/intro",children:"Cado platform"})," leverages the cloud's scale, speed, and automation to accelerate investigations and incident response. ",(0,t.jsx)(i.strong,{children:"Cado Community Edition"})," is a free version of the Cado platform that allows you to analyze:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Disk images in DD format"}),"\n",(0,t.jsxs)(i.li,{children:["Exports of triaged items from open-source forensics tools such as ",(0,t.jsx)(i.a,{href:"https://www.kroll.com/en/insights/publications/cyber/kroll-artifact-parser-extractor-kape",children:"KAPE"})," and ",(0,t.jsx)(i.a,{href:"https://www.rapid7.com/products/velociraptor/",children:"Velociraptor"})]}),"\n",(0,t.jsx)(i.li,{children:"Sample data published by Cado to demonstrate different incident scenarios in server-based, container-based, and serverless systems in the cloud."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"With Cado Community Edition, you can:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Navigate files and folders"}),"\n",(0,t.jsx)(i.li,{children:"View a timeline of system activities"}),"\n",(0,t.jsx)(i.li,{children:"Analyze captured artifacts for threats and indicators of compromise"}),"\n",(0,t.jsx)(i.li,{children:"Easily pivot and search across artifacts"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"benefits",children:"Benefits"}),"\n",(0,t.jsx)(i.p,{children:"Cado Community Edition provides:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Cloud Scale and Speed"}),": Adds the speed and scalability of cloud-native analysis to your existing data capture processes."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Automated Analysis"}),": Conducts automated system analysis using built-in detections from Cado Labs experts."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Easier Sharing"}),": Facilitates sharing of artifacts and findings using a cloud-based platform."]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(i.p,{children:"Interested in using Cado Community Edition? Here are key steps to get started:"}),"\n",(0,t.jsx)(i.h3,{id:"signing-up-for-cado-community-edition",children:"Signing Up for Cado Community Edition"}),"\n",(0,t.jsxs)(i.p,{children:["Visit the ",(0,t.jsx)(i.a,{href:"https://www.cadosecurity.com/cado-community-edition/#get-access",children:"Cado Community Edition website"})," to sign up. After signing up, a Cado representative will send you a license and a link to the CloudFormation template."]}),"\n",(0,t.jsx)(i.h3,{id:"deploying-in-your-cloud-environment",children:"Deploying in Your Cloud Environment"}),"\n",(0,t.jsx)(i.p,{children:"You can deploy Cado Community Edition in AWS using CloudFormation. Although many settings can be configured, the default values work well for most cases. You will need a key pair if you plan to access the system via SSH, although it\u2019s usually unnecessary for the Community Edition. We recommend using IP address restrictions to enhance security."}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["Using Cado Community Edition will incur AWS charges. To minimize costs, shut down the main instance once processing is complete and you no longer need access. You can also adjust worker size in ",(0,t.jsx)(i.code,{children:"Processing > Settings"}),". The default ",(0,t.jsx)(i.code,{children:"i3"})," series workers offer more disk space for larger disks, but the ",(0,t.jsx)(i.code,{children:"t3"})," series offers lower costs. If cost is a concern, consider using a ",(0,t.jsx)(i.code,{children:"t3.large"})," worker size."]})}),"\n",(0,t.jsx)(i.h3,{id:"processing-data",children:"Processing Data"}),"\n",(0,t.jsxs)(i.p,{children:["After deploying Cado Community Edition, you can import data from the S3 bucket created by the CloudFormation template. You can find the S3 bucket identifier under ",(0,t.jsx)(i.strong,{children:"CloudFormation > Stacks > [stack name] > Outputs > S3Bucket"}),". Please note that Cado Community Edition only supports .dd, dd.gz, and .zip files."]}),"\n",(0,t.jsx)(i.h3,{id:"analyzing-evidence",children:"Analyzing Evidence"}),"\n",(0,t.jsx)(i.p,{children:"Imported data is automatically processed, analyzed, and added to the platform. You will have access to automatic detections, a timeline of events, and more for investigation."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"how-does-cado-community-edition-differ-from-the-full-cado-platform",children:"How Does Cado Community Edition Differ From the Full Cado Platform?"}),"\n",(0,t.jsx)(i.p,{children:"Cado Community Edition offers a subset of features compared to the enterprise version of the Cado platform. In addition to the Community Edition features, the enterprise version also includes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Automated capture and processing of cloud-based data across AWS, Azure, and Google Cloud Platform"}),"\n",(0,t.jsx)(i.li,{children:"Analysis of container-based, serverless, and infrastructure-as-code artifacts"}),"\n",(0,t.jsx)(i.li,{children:"Integration of threat feeds and YARA rules for automated analysis"}),"\n",(0,t.jsx)(i.li,{children:"API support for automated data capture and processing"}),"\n",(0,t.jsx)(i.li,{children:"Support for multiple concurrent users with role-based access control"}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var t=n(96540);const o={},s=t.createContext(o);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);