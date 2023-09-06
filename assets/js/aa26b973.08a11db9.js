"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7214],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7046:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const r={title:"Deploying",hide_title:!0,sidebar_position:2},i="Deploying Cado Host",s={unversionedId:"cado-host/deploy",id:"cado-host/deploy",title:"Deploying",description:"You can execute Cado Host individually on a device or you can deploy it to a number of machines that may be compromised, for example through Group Policy or other systems management software.",source:"@site/docs/cado-host/deploy.md",sourceDirName:"cado-host",slug:"/cado-host/deploy",permalink:"/cado-host/deploy",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-host/deploy.md",tags:[],version:"current",lastUpdatedAt:1694035850,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:2,frontMatter:{title:"Deploying",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/cado-host/intro"},next:{title:"Collected Artifacts",permalink:"/cado-host/artifacts"}},l={},d=[{value:"Deploy through Cado Response Platform",id:"deploy-through-cado-response-platform",level:2},{value:"Using Script Builder",id:"using-script-builder",level:3},{value:"Using Direct Download",id:"using-direct-download",level:3},{value:"Considerations",id:"considerations",level:2},{value:"Creating Secure Cloud Storage Credentials",id:"creating-secure-cloud-storage-credentials",level:2},{value:"Using Local Storage",id:"using-local-storage",level:2},{value:"Command Line Parameters",id:"command-line-parameters",level:3},{value:"Example Command Line",id:"example-command-line",level:3},{value:"Using the config.cfg File",id:"using-the-configcfg-file",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-cado-host"},"Deploying Cado Host"),(0,a.kt)("p",null,"You can execute Cado Host individually on a device or you can deploy it to a number of machines that may be compromised, for example through ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://support.microsoft.com/en-gb/help/816102/how-to-use-group-policy-to-remotely-install-software-in-windows-server"},"Group Policy"))," or other systems management software."),(0,a.kt)("h2",{id:"deploy-through-cado-response-platform"},"Deploy through Cado Response Platform"),(0,a.kt)("p",null,"In order to deploy Cado Host, you can choose from one of the following deployment methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("strong",{parentName:"li"},"Script Builder")," from within the Cado Response Platform.  This allows you to build a script which can be run on any supported device, upload the triage artifacts to cloud storage and automatically process the data into Cado Response."),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("strong",{parentName:"li"},"Direct Download")," method.  This allows customers to download and run Cado Host independent of running Cado Response.")),(0,a.kt)("h3",{id:"using-script-builder"},"Using Script Builder"),(0,a.kt)("p",null,"In order to deploy Cado Host via the Script Builder in the Cado Response platform, follow the instructions below.  Note that when using the Script Builder, the pre-signed URLs and API keys expire 2 hours after being generated and AWS enforces a limit of 5GB total upload size."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Ensure that the devices on which the scripts will be run have HTTPS access to the AWS S3 endpoint.  For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<BUCKET_NAME>.s3.amazonaws.com/"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the Cado Host deployment options on the platform under ",(0,a.kt)("inlineCode",{parentName:"p"},"Project > Import > Forensic Artifacts > Cado Host"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Import Evidence",src:o(263).Z,width:"1059",height:"726"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select either ",(0,a.kt)("strong",{parentName:"p"},"Direct Download")," or ",(0,a.kt)("strong",{parentName:"p"},"Script Builder"),".  ",(0,a.kt)("strong",{parentName:"p"},"Direct Download")," can be used if you are downloading the Cado Host binary to your endpoints directly, via Group Policy or via a MDM tool.  ",(0,a.kt)("strong",{parentName:"p"},"Script Builder")," will generate a script that can be run directly on a device via a terminal window, cmd window or remote script execution tool."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Select OS, storage, etc",src:o(3653).Z,width:"1162",height:"836"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose the ",(0,a.kt)("strong",{parentName:"p"},"Script Builder")," tab, select your OS, cloud storage (where the Cado Host ZIP will be uploaded to) and then the Cado Host binary deployment method.  "),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you select ",(0,a.kt)("strong",{parentName:"p"},"Manual")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Cado Host Binary deployment"),", download the Cado Host binary to your devices, then copy and paste the command generated for you, into your terminal."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Copy the pre-generated command to the device and run it, or click the "Download Script" button and run that script on the device.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Download Script",src:o(288).Z,width:"1088",height:"514"})))),(0,a.kt)("h3",{id:"using-direct-download"},"Using Direct Download"),(0,a.kt)("p",null,"If you choose the ",(0,a.kt)("strong",{parentName:"p"},"Direct Download")," tab, select your OS, click ",(0,a.kt)("strong",{parentName:"p"},"Download")," and then follow the instructions to run Cado Host locally."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Direct Download",src:o(5782).Z,width:"460",height:"272"})),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"\u200bCado Host is designed to be executed through the commandline. If you do not execute the application with administrative privileges there are some files you will not be able to acquire."),(0,a.kt)("p",null," Cado Host can take parameters from a file (named ",(0,a.kt)("inlineCode",{parentName:"p"},"config.cfg"),") or on the command line.  On Microsoft Windows, if you execute it without the use of the command line, you may be prompted by the Windows SmartScreen. If you wish to run cado-host.exe by manually clicking it, you will have to select Properties and Untick this box:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Properties",src:o(142).Z,width:"388",height:"175"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When running on Linux or OSX, you may need to set the binary as executable:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-console"},"chmod +x ./cado-host\n./cado-host\n"))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Version 1.4.0 and later of Cado Host (deployed by 2.5.0 and later of Cado Response) default to a ARM (M1/M2) build of Cado Host when deployed to a MacOS system.\nTo execute on an older x86 system, append -x86 to the end of the Cado Host URL in the deployment.\nI.e. ",(0,a.kt)("a",{parentName:"p",href:"https://cado-public.s3.amazonaws.com/cado-host/v1.4.1/osx/cado-host"},"https://cado-public.s3.amazonaws.com/cado-host/v1.4.1/osx/cado-host")," becomes ",(0,a.kt)("a",{parentName:"p",href:"https://cado-public.s3.amazonaws.com/cado-host/v1.4.1/osx/cado-host-x86"},"https://cado-public.s3.amazonaws.com/cado-host/v1.4.1/osx/cado-host-x86"),"\nWe will be automating the selection of x86 vs ARM in a future release so this will no longer be required.")),(0,a.kt)("h2",{id:"creating-secure-cloud-storage-credentials"},"Creating Secure Cloud Storage Credentials"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We now recommend using the automatically created temporary credentials generated by Cado Response.")),(0,a.kt)("p",null,"If you are not using Cado Response, yet still want to automatically store the Cado Host collected data to the cloud, you'll need to create credentials with limited write access to your cloud storage.  "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is very important to generate write-only cloud credentials if you will be entering credentials (access and secret keys) on the command line. Ensure that the devices on which the scripts will be run have HTTPS access to the cloud storage URLs as defined below.")),(0,a.kt)("p",null,"To create secure credentials to upload the Cado Host collected data to the cloud, follow the instructions below based on your cloud provider of choice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"azure-credentials"},"Creating Secure Credentials for Azure"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"aws-credentials"},"Creating Secure Credentials for AWS"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"google-credentials"},"Creating Secure Credentials for Google Cloud Storage")))),(0,a.kt)("h2",{id:"using-local-storage"},"Using Local Storage"),(0,a.kt)("p",null,"\u200bIf you do not set a cloud storage option, files will be saved to the same folder that Cado Host is run from. You can not set a different storage location at this time."),(0,a.kt)("p",null,"You can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.cfg")," file in the same directory as the Cado Host execuatable which will be used during execution.  If the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.cfg")," file exists, commandline arguments will be ignored.  See ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#using-the-configcfg-file"},"Using the config.cfg File"))," for more details."),(0,a.kt)("h3",{id:"command-line-parameters"},"Command Line Parameters"),(0,a.kt)("p",null,"Below are the commandline parameters suppoted by Cado Host."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cado-host:\n  Cado Host\n\nUsage:\n    usage: cado-host.exe [-h] [--presigned_url PRESIGNED_URL] [--storage {google,azure,aws,local}] [--bucket BUCKET]\n                     [--access_key ACCESS_KEY] [--secret_key SECRET_KEY] [--region REGION] [-l]\n                     [-o OUTPUT_PATH] [--response_url RESPONSE_URL] [--response_apikey RESPONSE_APIKEY]\n                     [--response_project_id RESPONSE_PROJECT_ID] [--presigned_data PRESIGNED_DATA]\n                     [-a ADDITIONAL_FILES [ADDITIONAL_FILES ...]]\n\n    optional arguments:\n      -h, --help                        Show help message and exit\n      --presigned_url <url>             Specify the presigned url you wish to upload files to\n      --storage <storage>               Options: google,azure,aws,local\n      --bucket <bucket>                 Bucket to upload files to\n      --access_key <key>                Access key of your AWS credentials\n      --secret_key <key>                Secret Key of your AWS credentials\n      --region <region>                 AWS region\n      -l, --light_mode                  Enable light_mode where we only retrieve 100mb worth of files\n      -o, --output_path <path>          Output path if running for local storage\n      --response_url <url>              URL for Cado Response platform to trigger processing action after host collection. response_apikey must also be provided\n      --response_apikey <key>           API Key for Cado Response platform to trigger processing action after host collection. response_url must also be provided\n      --response_project_id <id>        Project id in the Cado Response to import the evidence to, default is 1\n      --presigned_data <data>           Presigned data used to upload data to the cloud provider\n      -a, --additional_files <paths>    ADDITIONAL_FILES [ADDITIONAL_FILES ...]\n      --only_additional_files           Collects only those files specified in the -a or --additional files options. No default files will be collected\n      --get_windows_memory              Enable windows memory collection - this will cause processing delays\n      \n")),(0,a.kt)("h3",{id:"example-command-line"},"Example Command Line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'cado-host.exe --additional_files "C:\\tools\\secretfile.txt" "C:\\SuperSecretFolder"\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note that folders should NOT have trailing slashes.  Files and folder paths should be delimted by a space and be enclosed in double quotes.")),(0,a.kt)("h3",{id:"using-the-configcfg-file"},"Using the config.cfg File"),(0,a.kt)("p",null,"\u200bThe file ",(0,a.kt)("inlineCode",{parentName:"p"},"config.cfg")," should be in the same current working directory as the cado-host binary.  An example file is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[CORE]\nstorage = google\nlight = true\n\n[AWS]\naccess_key = xxx\nsecret_key = xxx\nbucket = xxx\n\n[GOOGLE]\ngcp_access_key = xxx\ngcp_secret_key = xxx\ngcp_bucket = xxx\n\n[AZURE]\naccess_signature= xxx\naccount_name = xxx\ncontainer_name = xxx\n\n[LOCAL]\ndestination_folder = /tmp/ or c:\\windows\\tmp\\\n")))}p.isMDXComponent=!0},5782:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cado-direct-download-d110334f50f7736d0958945a66201f71.png"},288:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/cado-host-script-621624bc3f1dd77f5fd7f22a830a9dff.png"},142:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/import-security-856f56febba6db2d8b739dc366096cd4.png"},3653:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/import-step2-f6daa84fd01353ebb44f20dc61f0e1a0.png"},263:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/import-9f5b10aa0afc6890d56788315308e01b.png"}}]);