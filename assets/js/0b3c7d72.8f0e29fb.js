"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[990],{958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(5893),o=n(1151);const a={sidebar_position:1,id:"community-intro",title:"Summary"},s="Cado Community Edition",r={id:"cado-response/community-edition/community-intro",title:"Summary",description:"The Cado platform platform leverages the scale, speed and automation of the cloud to expedite investigation and response. Cado Community Edition is a free version of the Cado platform that lets you analyze:",source:"@site/docs/cado-response/community-edition/intro.md",sourceDirName:"cado-response/community-edition",slug:"/cado-response/community-edition/community-intro",permalink:"/cado-response/community-edition/community-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/community-edition/intro.md",tags:[],version:"current",lastUpdatedAt:1725958191,formattedLastUpdatedAt:"Sep 10, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"community-intro",title:"Summary"},sidebar:"tutorialSidebar",previous:{title:"Platform Security",permalink:"/cado-response/manage/platform-security"},next:{title:"Summary",permalink:"/cado-host/intro"}},d={},l=[{value:"Benefits",id:"benefits",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Signing up for Cado Community Edition",id:"signing-up-for-cado-community-edition",level:3},{value:"Deploying in your cloud environment",id:"deploying-in-your-cloud-environment",level:3},{value:"Processing Data",id:"processing-data",level:3},{value:"Analyzing Evidence",id:"analyzing-evidence",level:3},{value:"How does Cado Community Edition differ from the full Cado platform?",id:"how-does-cado-community-edition-differ-from-the-full-cado-platform",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cado-community-edition",children:"Cado Community Edition"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/cado-response/intro",children:"Cado platform"})," platform leverages the scale, speed and automation of the cloud to expedite investigation and response. Cado Community Edition is a free version of the Cado platform that lets you analyze:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Disk images captured in DD format"}),"\n",(0,i.jsxs)(t.li,{children:["Exports of triaged items from open source forensics tools like ",(0,i.jsx)(t.a,{href:"https://www.kroll.com/en/insights/publications/cyber/kroll-artifact-parser-extractor-kape",children:"KAPE"})," and ",(0,i.jsx)(t.a,{href:"https://www.rapid7.com/products/velociraptor/",children:"Velociraptor"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Sample data - e.g data published by Cado that illustrates different types of issues incident responders might encounter across server-based, container-based and serverless systems in the cloud.\nWith Cado Community Edition, users can:\nNavigate files and folders\nView a  timeline of activities performed on the system\nAnalyze captured artifacts for threats and indicators of compromise\nEasily pivot and search across artifacts"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"benefits",children:"Benefits"}),"\n",(0,i.jsx)(t.p,{children:"Cado Community Edition gives you:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cloud Scale and Speed"})," - Adding the speed of cloud-native analysis to their existing data capture processes"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Automated Analysis"})," - Performing automated analysis of systems using built-in detections provided by experts in the Cado Labs team"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Easier Sharing"})," - Easier sharing of artifacts and findings using a cloud-based system"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.p,{children:"Interested in getting started?  Here are some of the most frequently accessed help topics."}),"\n",(0,i.jsx)(t.h3,{id:"signing-up-for-cado-community-edition",children:"Signing up for Cado Community Edition"}),"\n",(0,i.jsxs)(t.p,{children:["Visit the ",(0,i.jsx)(t.a,{href:"https://www.cadosecurity.com/cado-community-edition/#get-access",children:"Cado Community Edition website"})," page to sign up. Once signed up, a Cado representative will send you a license and link to our CloudFormation template."]}),"\n",(0,i.jsx)(t.h3,{id:"deploying-in-your-cloud-environment",children:"Deploying in your cloud environment"}),"\n",(0,i.jsx)(t.p,{children:"How to deploy Cado Community Edition in your cloud environment in AWS. Please note that Cado Community Edition only supports CloudFormation deployment in AWS. Also, although there are many configurable deployment settings accepting the default values will work well for Cado Community Edition. You\u2019ll need a key pair in case you want to access the SSH port of the system (however, for the Community Edition this probably won\u2019t be necessary). Lastly, we recommend that you take advantage of the IP address restrictions available."}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["Please note that by deploying and running Cado Community Edition you will incur AWS charges. In order to keep charges to a minimum, you can shut down the main instance that serves the web interface when all processing is finished and you are no longer using it. You can also adjust the worker size under ",(0,i.jsx)(t.code,{children:"Processing > Settings"}),". The ",(0,i.jsx)(t.code,{children:"i3"})," series of worker instances (used by default) provide more disk space to enable processing of larger disks, however, the ",(0,i.jsx)(t.code,{children:"t3"})," series operate at a lower cost. If you are concerned about cost, you may want to select e.g. a ",(0,i.jsx)(t.code,{children:"t3.large"})," worker size in settings."]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/cado-response/deploy/aws/overview",children:"Learn how >"})})}),"\n",(0,i.jsx)(t.h3,{id:"processing-data",children:"Processing Data"}),"\n",(0,i.jsxs)(t.p,{children:["After deploying Cado Community Edition,  you can import data from the S3 bucket created by the CloudFormation template (you can find the identifier under CloudFormation - Stacks - ",(0,i.jsx)(t.em,{children:"stack name"})," - Outputs - S3Bucket). Please note that all other options will be unavailable. Also, please note that Cado Community Edition will only analyze .dd, dd.gz, and .zip files"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/cado-response/discovery-import/intro",children:"Learn how >"})})}),"\n",(0,i.jsx)(t.h3,{id:"analyzing-evidence",children:"Analyzing Evidence"}),"\n",(0,i.jsx)(t.p,{children:"Data which is imported is automatically processed, analyzed and added to the platform.  Automatic detections, timeline of events and more are available for investigation."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"/cado-response/investigate/intro",children:"Learn how >"})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"how-does-cado-community-edition-differ-from-the-full-cado-platform",children:"How does Cado Community Edition differ from the full Cado platform?"}),"\n",(0,i.jsx)(t.p,{children:"The Cado Community Edition provides only a subset of the features that are available in the enterprise version of the Cado platform.\nIn addition to the features available in the Cado Community Edition, The enterprise version of the Cado Platform also supports:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Automated capture and processing of data cloud based systems across AWS, Azure and Google Cloud Platform"}),"\n",(0,i.jsx)(t.li,{children:"Analysis of container based, serverless and infrastructure as code artifacts"}),"\n",(0,i.jsx)(t.li,{children:"Automated integration of threat feeds and YARA rules"}),"\n",(0,i.jsx)(t.li,{children:"API and automated capture and processing of data"}),"\n",(0,i.jsx)(t.li,{children:"Multiple concurrent users with role-based access"}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);