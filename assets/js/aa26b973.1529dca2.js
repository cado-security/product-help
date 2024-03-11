"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7214],{2092:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=t(5893),i=t(1151);const s={title:"Deploying",hide_title:!0,sidebar_position:2},r="Deploying Cado Host",d={id:"cado-host/deploy",title:"Deploying",description:"Deploy through Cado Response Platform",source:"@site/docs/cado-host/deploy.md",sourceDirName:"cado-host",slug:"/cado-host/deploy",permalink:"/cado-host/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/deploy.md",tags:[],version:"current",lastUpdatedAt:1710174357,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:2,frontMatter:{title:"Deploying",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/cado-host/intro"},next:{title:"Collected Artifacts",permalink:"/cado-host/artifacts"}},a={},l=[{value:"Deploy through Cado Response Platform",id:"deploy-through-cado-response-platform",level:2},{value:"Using Script Builder",id:"using-script-builder",level:3},{value:"Using Direct Download",id:"using-direct-download",level:3},{value:"Running as non-administrator",id:"running-as-non-administrator",level:2},{value:"Windows SmartScreen",id:"windows-smartscreen",level:2},{value:"Setting the Binary as Executable on Linux and OSX",id:"setting-the-binary-as-executable-on-linux-and-osx",level:2},{value:"Creating Secure Cloud Storage Credentials",id:"creating-secure-cloud-storage-credentials",level:2},{value:"Using Local Storage",id:"using-local-storage",level:2},{value:"Deploying Cado Host to Multiple Devices",id:"deploying-cado-host-to-multiple-devices",level:2},{value:"Deployment from XDR Integrations",id:"deployment-from-xdr-integrations",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"deploying-cado-host",children:"Deploying Cado Host"}),"\n",(0,n.jsx)(o.h2,{id:"deploy-through-cado-response-platform",children:"Deploy through Cado Response Platform"}),"\n",(0,n.jsx)(o.p,{children:"In order to deploy Cado Host, you can choose from one of the following deployment methods:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Use the ",(0,n.jsx)(o.strong,{children:"Script Builder"})," from within the Cado Response Platform.  This allows you to build a script which can be run on any supported device, upload the triage artifacts to cloud storage and automatically process the data into Cado Response."]}),"\n",(0,n.jsxs)(o.li,{children:["Use the ",(0,n.jsx)(o.strong,{children:"Direct Download"})," method.  This allows customers to download and run Cado Host independent of running Cado Response."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"using-script-builder",children:"Using Script Builder"}),"\n",(0,n.jsx)(o.p,{children:"In order to deploy Cado Host via the Script Builder in the Cado Response platform, follow the instructions below.  Note that when using the Script Builder in AWS, the pre-signed URLs and API keys expire 2 hours after being generated and AWS enforces a limit of 5GB total upload size."}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:["Ensure that the devices on which the scripts will be run have HTTPS access to the AWS S3 endpoint.  For example: ",(0,n.jsx)(o.code,{children:"https://<BUCKET_NAME>.s3.amazonaws.com/"})]})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Find the Cado Host deployment options on the platform under ",(0,n.jsx)(o.code,{children:"Project > Import > Cado Host"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Import Evidence",src:t(263).Z+"",width:"842",height:"242"})}),"\n",(0,n.jsxs)(o.ol,{start:"2",children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Select either ",(0,n.jsx)(o.strong,{children:"Direct Download"})," or ",(0,n.jsx)(o.strong,{children:"Script Builder"}),".  ",(0,n.jsx)(o.strong,{children:"Direct Download"})," can be used if you are downloading the Cado Host binary to your endpoints directly, via Group Policy or via a MDM tool.  ",(0,n.jsx)(o.strong,{children:"Script Builder"})," will generate a script that can be run directly on a device via a terminal window, cmd window or remote script execution tool."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Select OS, storage, etc",src:t(3653).Z+"",width:"3288",height:"916"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["If you choose the ",(0,n.jsx)(o.strong,{children:"Script Builder"})," tab, select your OS, cloud storage (where the Cado Host ZIP will be uploaded to) and then the Cado Host binary deployment method."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["If you select ",(0,n.jsx)(o.strong,{children:"Manual"})," under ",(0,n.jsx)(o.code,{children:"Select Cado Host Binary deployment"}),", download the Cado Host binary to your devices, then copy and paste the command generated for you, into your terminal."]})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:'Copy the pre-generated command to the device and run it, or click the "Download Script" button and run that script on the device.'}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Download Script",src:t(288).Z+"",width:"1860",height:"144"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"using-direct-download",children:"Using Direct Download"}),"\n",(0,n.jsxs)(o.p,{children:["If wish to download the Cado Host binary for manual deployment, select your OS, click ",(0,n.jsx)(o.strong,{children:"Download"})," and then follow the instructions to run Cado Host locally."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Direct Download",src:t(5782).Z+"",width:"690",height:"180"})}),"\n",(0,n.jsx)(o.h2,{id:"running-as-non-administrator",children:"Running as non-administrator"}),"\n",(0,n.jsx)(o.p,{children:"\u200bCado Host is designed to be executed through the commandline.\nIf you do not execute the application with administrative privileges there are some artifacts you will not be able to acquire, such as memory and other files that are locked by the operating system."}),"\n",(0,n.jsx)(o.h2,{id:"windows-smartscreen",children:"Windows SmartScreen"}),"\n",(0,n.jsx)(o.p,{children:"On Microsoft Windows, if you execute it without the use of the command line, you may be prompted by the Windows SmartScreen. If you wish to run cado-host.exe by manually clicking it, you will have to select Properties and Untick this box:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Properties",src:t(142).Z+"",width:"388",height:"175"})}),"\n",(0,n.jsx)(o.h2,{id:"setting-the-binary-as-executable-on-linux-and-osx",children:"Setting the Binary as Executable on Linux and OSX"}),"\n",(0,n.jsx)(o.p,{children:"When running on Linux or OSX, you may need to set the binary as executable:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-console",children:"chmod +x ./cado-host\n./cado-host\n"})}),"\n",(0,n.jsx)(o.h2,{id:"creating-secure-cloud-storage-credentials",children:"Creating Secure Cloud Storage Credentials"}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsx)(o.p,{children:"We now recommend using the automatically created temporary credentials generated by Cado Response."})}),"\n",(0,n.jsx)(o.p,{children:"If you are not using Cado Response, yet still want to automatically store the Cado Host collected data to the cloud, you'll need to create credentials with limited write access to your cloud storage."}),"\n",(0,n.jsx)(o.p,{children:"To create secure credentials to upload the Cado Host collected data to the cloud, follow the instructions below based on your cloud provider of choice:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"azure-credentials",children:"Creating Secure Credentials for Azure"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"aws-credentials",children:"Creating Secure Credentials for AWS"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"google-credentials",children:"Creating Secure Credentials for Google Cloud Storage"})})}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"using-local-storage",children:"Using Local Storage"}),"\n",(0,n.jsx)(o.p,{children:"\u200bIf you do not set a cloud storage option, files will be saved to the same folder that Cado Host is run from. You can not set a different storage location at this time."}),"\n",(0,n.jsx)(o.h2,{id:"deploying-cado-host-to-multiple-devices",children:"Deploying Cado Host to Multiple Devices"}),"\n",(0,n.jsxs)(o.p,{children:["You can execute Cado Host individually on a device or you can deploy it to a number of machines that may be compromised, for example through ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://support.microsoft.com/en-gb/help/816102/how-to-use-group-policy-to-remotely-install-software-in-windows-server",children:"Group Policy"})})," or other systems management software."]}),"\n",(0,n.jsx)(o.h2,{id:"deployment-from-xdr-integrations",children:"Deployment from XDR Integrations"}),"\n",(0,n.jsxs)(o.p,{children:["You can deploy Cado Host to machines that may be compromised, for example through XDR systems such as Crowdstrike and SentinelOne.\nFor more, see ",(0,n.jsx)(o.a,{href:"/cado-response/manage/integrations/xdr/sentinelone",children:"SentinelOne"})," and ",(0,n.jsx)(o.a,{href:"/cado-response/manage/integrations/xdr/crowdstrike",children:"Crowdstrike"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5782:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/cado-direct-download-4fb508eb151e7d52584e2de053180172.png"},288:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/cado-host-script-8511e81e43e72b6151b821e01bec9990.png"},142:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/import-security-856f56febba6db2d8b739dc366096cd4.png"},3653:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/import-step2-da41241053f636bdb49b0933bb8cbbd9.png"},263:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>d,a:()=>r});var n=t(7294);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);