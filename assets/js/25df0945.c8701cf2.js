"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7714],{38357:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=o(74848),i=o(28453);const s={title:"Deploy",hide_title:!0,sidebar_position:2},r="How to Deploy Cado Host",d={id:"cado/discovery-import/cado-host/deploy",title:"Deploy",description:"Deploy Through Cado Platform",source:"@site/docs/cado/discovery-import/cado-host/deploy.md",sourceDirName:"cado/discovery-import/cado-host",slug:"/cado/discovery-import/cado-host/deploy",permalink:"/cado/discovery-import/cado-host/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/cado-host/deploy.md",tags:[],version:"current",lastUpdatedAt:1738670774,formattedLastUpdatedAt:"Feb 4, 2025",sidebarPosition:2,frontMatter:{title:"Deploy",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Cado Host",permalink:"/cado/discovery-import/cado-host/intro"},next:{title:"Deploy via API",permalink:"/cado/discovery-import/cado-host/api-deploy"}},l={},a=[{value:"Deploy Through Cado Platform",id:"deploy-through-cado-platform",level:2},{value:"Using Script Builder",id:"using-script-builder",level:3},{value:"Using Direct Download",id:"using-direct-download",level:3},{value:"Running as Non-Administrator",id:"running-as-non-administrator",level:2},{value:"Windows SmartScreen",id:"windows-smartscreen",level:2},{value:"Setting the Binary as Executable on Linux and macOS",id:"setting-the-binary-as-executable-on-linux-and-macos",level:2},{value:"Using Local Storage",id:"using-local-storage",level:2},{value:"Deploying Cado Host to Multiple Devices",id:"deploying-cado-host-to-multiple-devices",level:2},{value:"Deployment from XDR Integrations",id:"deployment-from-xdr-integrations",level:2},{value:"Proxy and Network Access",id:"proxy-and-network-access",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-deploy-cado-host",children:"How to Deploy Cado Host"}),"\n",(0,t.jsx)(n.h2,{id:"deploy-through-cado-platform",children:"Deploy Through Cado Platform"}),"\n",(0,t.jsx)(n.p,{children:"You have two main options to deploy Cado Host:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Script Builder"}),": Build a custom script in the Cado Platform that can be run on any supported device. The script will collect triage artifacts, upload them to cloud storage, and automatically process the data in Cado."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direct Download"}),": Download and run Cado Host independently without interacting with the Cado Platform."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-script-builder",children:"Using Script Builder"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to deploy Cado Host via the Script Builder:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Pre-signed URLs and API keys generated in AWS expire 2 hours after creation, and AWS limits the total upload size to 5GB."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Make sure that devices running the scripts have HTTPS access to the AWS S3 endpoint, for example: ",(0,t.jsx)(n.code,{children:"https://<BUCKET_NAME>.s3.amazonaws.com/"}),"."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Cado Platform, go to ",(0,t.jsx)(n.strong,{children:"Investigation > Import > Cado Host"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Import Evidence",src:o(51822).A+"",width:"842",height:"242"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select either ",(0,t.jsx)(n.strong,{children:"Direct Download"})," or ",(0,t.jsx)(n.strong,{children:"Script Builder"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direct Download"})," is suitable for manually downloading the Cado Host binary to endpoints via Group Policy or an MDM tool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Script Builder"})," generates a script that can be run directly on a device via terminal, command prompt, or a remote execution tool."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Select OS, storage, etc",src:o(19946).A+"",width:"1137",height:"794"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Script Builder"})," tab, select:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Your ",(0,t.jsx)(n.strong,{children:"Operating System"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Your ",(0,t.jsx)(n.strong,{children:"Cloud Storage"})," (where Cado Host will upload the collected data)."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.strong,{children:"Cado Host Binary Deployment Method"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you choose ",(0,t.jsx)(n.strong,{children:"Manual"})," under ",(0,t.jsx)(n.code,{children:"Select Cado Host Binary Deployment"}),", download the Cado Host binary separately and then copy/paste the generated command into your terminal."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the pre-generated command and run it on the target device, or click ",(0,t.jsx)(n.strong,{children:"Download Script"})," and run the downloaded script."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Download Script",src:o(72783).A+"",width:"1860",height:"144"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-direct-download",children:"Using Direct Download"}),"\n",(0,t.jsx)(n.p,{children:"To manually download and deploy the Cado Host binary:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select your ",(0,t.jsx)(n.strong,{children:"Operating System"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Download"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Follow the instructions to run Cado Host locally on the device."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Direct Download",src:o(80069).A+"",width:"690",height:"180"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-as-non-administrator",children:"Running as Non-Administrator"}),"\n",(0,t.jsx)(n.p,{children:"Cado Host is designed to be run through the command line. Without administrative privileges, some artifacts (e.g., memory or locked files) cannot be acquired."}),"\n",(0,t.jsx)(n.h2,{id:"windows-smartscreen",children:"Windows SmartScreen"}),"\n",(0,t.jsxs)(n.p,{children:["On Windows, running Cado Host outside of the command line may trigger Windows SmartScreen. If you run ",(0,t.jsx)(n.code,{children:"cado-host.exe"})," by manually clicking it, you will need to adjust the security settings:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Right-click the executable."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Properties"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Untick the "Blocked" box in the Security section.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Properties",src:o(64091).A+"",width:"388",height:"175"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setting-the-binary-as-executable-on-linux-and-macos",children:"Setting the Binary as Executable on Linux and macOS"}),"\n",(0,t.jsx)(n.p,{children:"For Linux and macOS, you may need to make the binary executable before running it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"chmod +x ./cado-host\n./cado-host\n"})}),"\n",(0,t.jsx)(n.h2,{id:"using-local-storage",children:"Using Local Storage"}),"\n",(0,t.jsx)(n.p,{children:"If no cloud storage option is set, files will be saved to the same folder where Cado Host is run. Currently, changing the storage location is not supported."}),"\n",(0,t.jsx)(n.h2,{id:"deploying-cado-host-to-multiple-devices",children:"Deploying Cado Host to Multiple Devices"}),"\n",(0,t.jsxs)(n.p,{children:["Cado Host can be deployed to multiple devices at once, such as through ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://support.microsoft.com/en-gb/help/816102/how-to-use-group-policy-to-remotely-install-software-in-windows-server",children:"Group Policy"})})," or other systems management tools."]}),"\n",(0,t.jsx)(n.h2,{id:"deployment-from-xdr-integrations",children:"Deployment from XDR Integrations"}),"\n",(0,t.jsxs)(n.p,{children:["Cado Host can also be deployed to compromised machines via XDR systems such as CrowdStrike and SentinelOne. For more information, refer to the integrations with ",(0,t.jsx)(n.a,{href:"/cado/integrations/xdr/sentinelone",children:"SentinelOne"})," and ",(0,t.jsx)(n.a,{href:"/cado/integrations/xdr/crowdstrike",children:"CrowdStrike"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"proxy-and-network-access",children:"Proxy and Network Access"}),"\n",(0,t.jsx)(n.p,{children:"Cado Host will use the operating system defaults to connect to cloud storage.\nThis means you may need to configure a proxy or network access for Cado Host to connect to the internet and upload data."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},80069:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cado-direct-download-4fb508eb151e7d52584e2de053180172.png"},72783:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/cado-host-script-7823fe12dadde563d74559181f6d5fb5.png"},19946:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/configure-runtime-f5a48741d361c5f16b7b0b6cf6e9a72e.png"},64091:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/import-security-856f56febba6db2d8b739dc366096cd4.png"},51822:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);