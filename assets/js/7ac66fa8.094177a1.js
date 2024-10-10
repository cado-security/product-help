"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2713],{5959:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var s=i(5893),a=i(1151);const n={title:"EC2 and EBS",hide_title:!0,sidebar_position:1},o="How to import AWS EC2 and EBS data into Cado",r={id:"cado/discovery-import/aws/aws-ec2",title:"EC2 and EBS",description:"Cado supports acquisition of EC2 instances. Select the region, and this will populate a list of EC2 instances available. You can filter the list of instances and buckets by instance ID, name, state or public IP address. Select the instance you wish to acquire.",source:"@site/docs/cado/discovery-import/aws/aws-ec2.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-ec2",permalink:"/cado/discovery-import/aws/aws-ec2",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-ec2.md",tags:[],version:"current",lastUpdatedAt:1728552962,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:1,frontMatter:{title:"EC2 and EBS",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automating collection from detections",permalink:"/cado/discovery-import/automation"},next:{title:"S3",permalink:"/cado/discovery-import/aws/aws-s3"}},c={},d=[{value:"Capture Options",id:"capture-options",level:2},{value:"Triage Capture",id:"triage-capture",level:3},{value:"Triage Capture using Use SSM Port Forwarding feature (Linux only)",id:"triage-capture-using-use-ssm-port-forwarding-feature-linux-only",level:4},{value:"Run Command",id:"run-command",level:3},{value:"Creating a saved script",id:"creating-a-saved-script",level:4},{value:"Executing the script using Run command",id:"executing-the-script-using-run-command",level:4},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-to-import-aws-ec2-and-ebs-data-into-cado",children:"How to import AWS EC2 and EBS data into Cado"}),"\n",(0,s.jsx)(t.p,{children:"Cado supports acquisition of EC2 instances. Select the region, and this will populate a list of EC2 instances available. You can filter the list of instances and buckets by instance ID, name, state or public IP address. Select the instance you wish to acquire."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS EC2 Import",src:i(120).Z+"",width:"1782",height:"682"})}),"\n",(0,s.jsx)(t.p,{children:'Click on "Continue" .'}),"\n",(0,s.jsx)(t.h2,{id:"capture-options",children:"Capture Options"}),"\n",(0,s.jsx)(t.p,{children:"For volume capture, set the options for what data you want to capture."}),"\n",(0,s.jsx)(t.h3,{id:"triage-capture",children:"Triage Capture"}),"\n",(0,s.jsx)(t.p,{children:"To perform a faster triage collection on an EC2 instance using Cado Host, select the button 'Triage Acquisition'. Please note that this requires that SSM be enabled on the target instance. This will also collect memory from Linux systems."}),"\n",(0,s.jsxs)(t.p,{children:["For more information about about what Cado Host collects see ",(0,s.jsx)(t.a,{href:"/cado/discovery-import/cado-host/intro",children:"Collected Artifacts"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS EC2 Triage Acquisition ",src:i(5615).Z+"",width:"5112",height:"1674"})}),"\n",(0,s.jsx)(t.p,{children:"Click 'Continue', review your selections and click 'Start Import'."}),"\n",(0,s.jsx)(t.h4,{id:"triage-capture-using-use-ssm-port-forwarding-feature-linux-only",children:"Triage Capture using Use SSM Port Forwarding feature (Linux only)"}),"\n",(0,s.jsx)(t.p,{children:"When selecting the \u2018Triage Acquisition\u2019 acquisition type for an EC2 instance, there is now an option to select \u2018Use SSM Port Forwarding\u2019. This is useful for EC2 instances (Linux only) that have restricted network access, meaning it\u2019s problematic for them to download the Cado Host binary and transfer the resulting triage capture to the Cado S3 bucket. Using the SSM Port Forwarding feature means Cado will facilitate the transfer of the Cado Host binary onto the target resource and the resulting triage capture off the resource."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS EC2 Triage Acquisition Port Forwarding",src:i(730).Z+"",width:"2557",height:"836"})}),"\n",(0,s.jsx)(t.h3,{id:"run-command",children:"Run Command"}),"\n",(0,s.jsxs)(t.p,{children:["The Cado platform allows you to execute a script on a target system using the \u2018Run command\u2019 action type in the import wizard. This functionality uses the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-ec2.html",children:"AWS Systems Manager Agent (SSM)"})," and requires admin privileges. A script must be created in /settings/scripts to use this feature."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Note: This feature is in Beta - to enable the feature go to Settings > Experiments > Run Action"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS EC2 Run Command",src:i(5027).Z+"",width:"3542",height:"1672"})}),"\n",(0,s.jsx)(t.h4,{id:"creating-a-saved-script",children:"Creating a saved script"}),"\n",(0,s.jsxs)(t.p,{children:["To create a saved script, navigate to /settings/scripts and select the \u2018Create script\u2019 button. You will be prompted to choose whether the script is to be executed against a Linux or Windows system. For the purpose of the following example, we will choose Linux. ",(0,s.jsx)(t.em,{children:"Note, there is reduced functionality for Windows scripts - more details can be found below."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Saved Script",src:i(3678).Z+"",width:"3260",height:"858"})}),"\n",(0,s.jsx)(t.p,{children:"In this example, we will:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Instruct Cado to download Volexity Surge from a predefined S3 location by specifying an \u201cInput\u201d file (Step 2)"}),"\n",(0,s.jsx)(t.li,{children:"Instruct Cado to upload the output of Volexity Surge to the Cado S3 bucket, by telling Cado where the \u201cOutput\u201d file resides on the target system (Step 3)"}),"\n",(0,s.jsx)(t.li,{children:"Run Volexity Surge with the appropriate command line arguments by specifying a \u201cScript\u201d (Step 4)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In Step 1, provide the script with a Name and Description."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Saved Script - Step 1",src:i(4903).Z+"",width:"3804",height:"1082"})}),"\n",(0,s.jsxs)(t.p,{children:["In Step 2, provide the location of the file (valid S3 URI) that is to be downloaded onto the target system. In this example, it is the Volexity Surge binary, which is required to run the script. Cado will transfer this file onto the target system and this file can be referenced in the script using the variable ",(0,s.jsx)(t.code,{children:"$INPUT"}),". ",(0,s.jsx)(t.em,{children:"Note, this step is not available for Windows scripts."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Saved Script - Step 2",src:i(9125).Z+"",width:"3768",height:"952"})}),"\n",(0,s.jsxs)(t.p,{children:["In Step 3, provide the location of a file which exists on the target system that is to be transferred to your Cado S3 bucket. In this example, it is the memory dump created by Volexity Surge. The file can be referenced in the script using the variable ",(0,s.jsx)(t.code,{children:"$OUTPUT"}),". Note, this step is not available for Windows scripts."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Saved Script - Step 3",src:i(4279).Z+"",width:"3782",height:"950"})}),"\n",(0,s.jsxs)(t.p,{children:["In Step 4, paste the script that is to be executed on the target system. The input and output files from Steps 2 and 3 can be referenced using ",(0,s.jsx)(t.code,{children:"${INPUT}"})," and ",(0,s.jsx)(t.code,{children:"${OUTPUT}"})," respectively. Given input and output file support is only available for Linux scripts, reference of these variables is not required for Windows scripts."]}),"\n",(0,s.jsx)(t.p,{children:"The script included in the below screenshot is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'mkdir -p /tmp/cado-volexity\ncp ${INPUT} /tmp/cado-volexity/surge-collect\nchmod 755 /tmp/cado-volexity/surge-collect\nmkdir -p /tmp/cado-volexity/out\n/tmp/cado-volexity/surge-collect example /tmp/cado-volexity/out\ntar -cvzf /tmp/cado-volexity/out.tar.gz /tmp/cado-volexity/out\ncp "/tmp/cado-volexity/out.tar.gz" ${OUTPUT}\nrm -rf /tmp/cado-volexity\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Saved Script - Step 4",src:i(5263).Z+"",width:"1571",height:"591"})}),"\n",(0,s.jsx)(t.p,{children:"Finally, select \u2018Continue\u2019 and you should see the newly created script in the scripts table."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Saved Script - Table",src:i(7296).Z+"",width:"3856",height:"704"})}),"\n",(0,s.jsx)(t.h4,{id:"executing-the-script-using-run-command",children:"Executing the script using Run command"}),"\n",(0,s.jsx)(t.p,{children:"Use the Import wizard to select an EC2 that has the SSM agent installed. Select the \u2018Run command\u2019 action type and you should now see the script that was created in the previous step. Continue with the import as normal."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AWS EC2 Run Command - Selecting Saved Script",src:i(5661).Z+"",width:"2557",height:"766"})}),"\n",(0,s.jsx)(t.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,s.jsx)(t.p,{children:"For a diagram of how our EC2 disk acquisitions operate, please see below:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC2 Disk Acquisition",src:i(1419).Z+"",width:"1962",height:"1044"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"EC2 Role Acquisition",src:i(4303).Z+"",width:"1910",height:"970"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5027:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand1-7764e292a16eb3d98940f9a32d65ca25.png"},3678:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand2-288f66be5d4fb261f6207c93743a543f.png"},4903:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand3-7257948f4bdb99d8aa66a885272d748e.png"},9125:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand4-fceb04cb187da005d1315bab4eaf3312.png"},4279:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand5-d2b458182764d522153cad1d21737b13.png"},5263:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand6-6639a15695b4a1c2c390bac386602bb0.png"},7296:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand7-a9f5882a4a8593e57c7cc2d7d573397d.png"},5661:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-runcommand8-086d386919e813238dd77de5830563d0.png"},730:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-triage-acquisition-ssm-port-forwarding-170c58d02a54ae9e2b41e8c1435e6abc.png"},5615:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-triage-acquisition-4000535f4a0f1d726d46d8e287a22bf0.png"},120:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/aws-ec2-90029871d7a092c458840a666b860193.png"},1419:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/import-aws-ec2-cross-758df5780c02d9c03b57e6c3daabd5a2.png"},4303:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/import-aws-ec2-role-cb06da4ab775408d7a98a21af1fe4da6.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var s=i(7294);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);