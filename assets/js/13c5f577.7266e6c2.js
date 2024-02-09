"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8403],{9014:(A,e,g)=>{g.r(e),g.d(e,{assets:()=>Q,contentTitle:()=>s,default:()=>n,frontMatter:()=>C,metadata:()=>E,toc:()=>I});var t=g(5893),B=g(1151);const C={title:"Oracle Cloud Virtual Machines",hide_title:!0,sidebar_position:1},s="Oracle Cloud Virtual Machines",E={id:"cado-response/discovery-import/import/oracle/virtual-machine",title:"Oracle Cloud Virtual Machines",description:"First, you need to take a clone of the instance boot volume. Note that this will affect the instance as it performs a shutdown task and will restart the instance on completion.",source:"@site/docs/cado-response/discovery-import/import/oracle/virtual-machine.md",sourceDirName:"cado-response/discovery-import/import/oracle",slug:"/cado-response/discovery-import/import/oracle/virtual-machine",permalink:"/cado-response/discovery-import/import/oracle/virtual-machine",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/oracle/virtual-machine.md",tags:[],version:"current",lastUpdatedAt:1707485e3,formattedLastUpdatedAt:"Feb 9, 2024",sidebarPosition:1,frontMatter:{title:"Oracle Cloud Virtual Machines",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Kubernetes Engine",permalink:"/cado-response/discovery-import/import/gcp/kubernetes-engine"},next:{title:"RedHat Openshift",permalink:"/cado-response/discovery-import/import/openshift/"}},Q={},I=[];function a(A){const e={code:"code",h1:"h1",img:"img",p:"p",...(0,B.a)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"oracle-cloud-virtual-machines",children:"Oracle Cloud Virtual Machines"}),"\n",(0,t.jsx)(e.p,{children:"First, you need to take a clone of the instance boot volume. Note that this will affect the instance as it performs a shutdown task and will restart the instance on completion."}),"\n",(0,t.jsx)(e.p,{children:"Open the Oracle Cloud Infrastructure (\u201cOCI\u201d) console, and browse to Compute -> Instances:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(9983).Z+"",width:"1919",height:"675"})}),"\n",(0,t.jsx)(e.p,{children:"Select the instance you want to acquire:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(5358).Z+"",width:"1908",height:"142"})}),"\n",(0,t.jsxs)(e.p,{children:["From the Resources section, select Boot volume and then click on the Boot volume that is attached to the instance:\n",(0,t.jsx)(e.img,{alt:"Oracle",src:g(3628).Z+"",width:"1893",height:"266"})]}),"\n",(0,t.jsxs)(e.p,{children:["This will take you to the Boot volume's details page -> select Boot Volume Clones from the Resources menu on the left:\n",(0,t.jsx)(e.img,{alt:"Oracle",src:g(7205).Z+"",width:"1908",height:"273"})]}),"\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.code,{children:"Create Clone"})," button -> Give the clone volume an appropriate name -> then click the ",(0,t.jsx)(e.code,{children:"Create Clone"})," button at the bottom of the page:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(6162).Z+"",width:"1917",height:"791"})}),"\n",(0,t.jsx)(e.p,{children:"Deploy your pre-built forensics instance, in this case example Kali Linux:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(7154).Z+"",width:"1496",height:"885"})}),"\n",(0,t.jsxs)(e.p,{children:["For ",(0,t.jsx)(e.code,{children:"Kali Linux"}),", the ",(0,t.jsx)(e.code,{children:"SSH"})," daemon is not installed by default and connections to the instance are made using Cloud Shell. Select Console connection from the Resources list on the left of the screen."]}),"\n",(0,t.jsx)(e.p,{children:"Click on Launch Cloud Shell connection:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(7994).Z+"",width:"1912",height:"668"})}),"\n",(0,t.jsx)(e.p,{children:"Attach the cloned disk to the forensic instance, selecting Paravirtualized as the attachment type. As this is a Boot volume we are not able to select Read only - shareable as the Access type:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(8566).Z+"",width:"1918",height:"916"})}),"\n",(0,t.jsxs)(e.p,{children:["Once the volume is attached you can switch over to your Cloud Shell session to acquire an image. We have used the command ",(0,t.jsx)(e.code,{children:"lsblk"})," to identify the device identified for the attached disk, in this case it is sdb:"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(3984).Z+"",width:"1186",height:"330"})}),"\n",(0,t.jsx)(e.p,{children:"To create the disk image, you can use dc3dd:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(3693).Z+"",width:"1163",height:"362"})}),"\n",(0,t.jsx)(e.p,{children:"Looking at the size of the image file test-clone.dd, 47GB, it's going to take time to transfer the image out of OCI:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(9426).Z+"",width:"740",height:"298"})}),"\n",(0,t.jsxs)(e.p,{children:["To make the process easier, you can use gzip to compress it:\n",(0,t.jsx)(e.img,{alt:"Oracle",src:g(8230).Z+"",width:"985",height:"496"})]}),"\n",(0,t.jsx)(e.p,{children:"As the dd.gz file is less than 5GB in size, you can use our cado-host binary to upload the file directly to an S3 bucket and it will be automatically imported into a project for processing and analysis."}),"\n",(0,t.jsx)(e.p,{children:"The first step is to create a project in the Cado platform, from there we will use the Cado Host import capability:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(2323).Z+"",width:"1912",height:"695"})}),"\n",(0,t.jsx)(e.p,{children:"When you select Cado Host, you are presented with a series of options and in this case as we are using Kali Linux we will select Linux as the Target Operating System. We are not going to using any additional Runtime Options so we can skip that step and you can see that we automatically generate a command block, to be used to transfer the image:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(3890).Z+"",width:"1908",height:"883"})}),"\n",(0,t.jsx)(e.p,{children:"The cado-host binary is available from our public s3 bucket so you can  use curl to download it onto the Kali instance:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(7738).Z+"",width:"1166",height:"173"})}),"\n",(0,t.jsx)(e.p,{children:"One of the switches for cado-host is \u2013single_file_unzipped, which will upload a single file to the Cado response bucket using the presigned_data details from the command that\u2019s generated from the import page:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(6595).Z+"",width:"1233",height:"271"})}),"\n",(0,t.jsx)(e.p,{children:"Switching over to our Cado platform, you can see that the file has been successfully imported and processing tasks have been started:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Oracle",src:g(6072).Z+"",width:"1867",height:"512"})}),"\n",(0,t.jsx)(e.p,{children:"Once the processing has been completed, you can move onto analysing the captured image:"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Oracle",src:g(1860).Z+"",width:"1917",height:"862"}),"\n",(0,t.jsx)(e.img,{alt:"Oracle",src:g(6911).Z+"",width:"1918",height:"917"}),"\n",(0,t.jsx)(e.img,{alt:"Oracle",src:g(1739).Z+"",width:"1915",height:"895"})]})]})}function n(A={}){const{wrapper:e}={...(0,B.a)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(a,{...A})}):a(A)}},1860:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image1-db1670c8e122124bca18b626f5f38984.png"},2323:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image10-e97bebe4cbf37cd54c2b8e8c4cd1877b.png"},6595:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image11-b4225041547dfbba2826cf50bf93c798.png"},9983:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image12-a7451fd2351f561b35bc1e9d22f39915.png"},3628:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image13-b6dad8e699a0d29db609a041ba78c8f4.png"},7994:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image15-582caeb37debd8d31aa21d045111335b.png"},9426:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image16-c10b46229d70ec1c76088fd9b313ab8e.png"},7205:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image17-a86044dd99972223452a3e92f03615fa.png"},5358:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image18-aae8d90695693ee3975e24f3082d34ae.png"},8230:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image19-40b7785b583e3678b731b5f2e9c5224d.png"},3693:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image2-3c15f313aa86fe6541c5ed99123907f8.png"},7738:(A,e,g)=>{g.d(e,{Z:()=>t});const t="data:image/png;base64,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hc77o9rrs9g8MRRs5hwDpq010kH/nOaX+LE43X451vvHgLELIMNBzvgxNS8A2n859vD32v16/8cY0uvW2DnC2HlATjtMW+vrg63Xh3g59iHLTt8hcJDAhODooO0f/KXhq6gHb84XL1pg9KrNBVZoTnU5dLefhX04dN99r3KB4avBR+1UajxUM1bO4HIUqi8TIDAqUM38Mronp/3As+BSyz7UUs/T9rDRrbnjaJTIBwgcLTDb4KjZs/YL7GI/r360gA0QIECAwBkFBCTDuFzO2OlsmgABAgQukYDg6BI1tl0tJjDr4KiYioIJECBAgAABAgQIECBAYPYCTXAU+/fhhx/Ovv4qSKAGAcFRDa2kjgQIECBAgAABAgQIECBAgACBAgKCowLoiiRAgAABAgQIECBAgAABAgQI1CAgOKqhldSRAAECBAgQIECAAAECBAgQIFBAQHBUAF2RBAgQIECAAAECBAgQIECAAIEaBARHNbSSOhIgQIAAAQIECBAgQIAAAQIECggIjgqgK5IAAQIECBAgQIAAAQIECBAgUIOA4KiGVlJHAgQIECBAgAABAgQIECBAgEABAcFRAXRFEiBAgAABAgQIECBAgAABAgRqEBAc1dBK6kiAAAECBAgQIECAAAECBAgQKCAgOCqArkgCBAgQIECAAAECBAgQIECAQA0CgqMaWkkdCRAgQIAAAQIECBAgQIAAAQIFBARHBdAVSYAAAQIECBAgQIAAAQIECBCoQUBwVEMrqSMBAgQIECBAgAABAgQIECBAoICA4KgAuiIJECBAgAABAgQIECBAgAABAjUICI5qaCV1JECAAAECBAgQIECAAAECBAgUEBAcFUBXJAECBAgQIECAAAECBAgQIECgBgHBUQ2tpI4ECBAgQIAAAQIECBAgQIAAgQICgqMC6IokQIAAAQIECBAgQIAAAQIECNQgIDiqoZXUkQABAgQIECBAgAABAgQIECBQQEBwVABdkQQIECBAgAABAgQIECBAgACBGgQERzW0kjoSIECAAAECBAgQIECAAAECBAoICI4KoCuSAAECBAgQIECAAAECBAgQIFCDgOCohlZSRwIECBAgQIAAAQIECBAgQIBAAQHBUQF0RRIgQIAAAQIECBAgQIAAAQIEahAQHNXQSupIgAABAgQIECBAgAABAgQIECggIDgqgK5IAgQIECBAgAABAgQIECBAgEANAoKjGlpJHQkQIECAAAECBAgQIECAAAECBQQERwXQFUmAAAECBAgQIECAAAECBAgQqEFAcFRDK6kjAQIECBAgQIAAAQIECBAgQKCAgOCoALoiCRAgQIAAAQIECBAgQIAAAQI1CAiOamgldSRAgAABAgQIECBAgAABAgQIFBAQHBVAVyQBAgQIECBAgAABAgQIECBAoAYBwVENraSOBAgQIECAAAECBAgQIECAAIECAoKjAuiKJECAAAECBAgQIECAAAECBAjUICA4qqGV1JEAAQIECBAgQIAAAQIECBAgUEBAcFQAXZEECBAgQIAAAQIECBAgQIAAgRoEBEc1tJI6EiBAgAABAgQIECBAgAABAgQKCAiOCqArkgABAgQIECBAgAABAgQIECBQg4DgqIZWUkcCBAgQIECAAAECBAgQIECAQAEBwVEBdEUSIECAAAECBAgQIECAAAECBGoQEBzV0ErqSIAAAQIECBAgQIAAAQIECBAoICA4KoCuSAIECBAgQIAAAQIECBAgQIBADQKCoxpaSR0JECBAgAABAgQIECBAgAABAgUEBEcF0BVJgAABAgQIECBAgAABAgQIEKhBQHBUQyupIwECBAgQIECAAAECBAgQIECggIDgqAC6IgkQIECAAAECBAgQIECAAAECNQgIjmpoJXUkQIAAAQIECBAgQIAAAQIECBQQEBwVQFckAQIECBAgQIAAAQIECBAgQKAGAcFRDa2kjgQIECBAgAABAgQIECBAgACBAgKCowLoiiRAgAABAgQIECBAgAABAgQI1CAgOKqhldSRAAECBAgQIECAAAECBAgQIFBAQHBUAF2RBAgQIECAAAECBAgQIECAAIEaBARHNbSSOhIgQIAAAQIECBAgQIAAAQIECggIjgqgK5IAAQIECBAgQIAAAQIECBAgUIOA4KiGVlJHAgQIECBAgAABAgQIECBAgEABAcFRAXRFEiBAgAABAgQIECBAgAABAgRqEBAc1dBK6kiAAAECBAgQIECAAAECBAgQKCAgOCqArkgCBAgQIECAAAECBAgQIECAQA0CgqMaWkkdCRAgQIAAAQIECBAgQIAAAQIFBARHBdAVSYAAAQIECBAgQIAAAQIECBCoQUBwVEMrqSMBAgQIECBAgAABAgQIECBAoICA4KgAuiIJECBAgAABAgQIECBAgAABAjUICI5qaCV1JECAAAECBAgQIECAAAECBAgUEBAcFUBXJAECBAgQIECAAAECBAgQIECgBgHBUQ2tpI4ECBAgQIAAAQIECBAgQIAAgQICgqMC6IokQIAAAQIECBAgQIAAAQIECNQgIDiqoZXUkQABAgQIECBAgAABAgQIECBQQEBwVABdkQQIECBAgAABAgQIECBAgACBGgQERzW0kjoSIECAAAECBAgQIECAAAECBAoICI4KoCuSAAECBAgQIECAAAECBAgQIFCDgOCohlZSRwIECBAgQIAAAQIECBAgQIBAAQHBUQF0RRIgQIAAAQIECBAgQIAAAQIEahAQHNXQSupIgAABAgQIECBAgAABAgQIECggIDgqgK5IAgQIECBAgAABAgQIECBAgEANAoKjGlpJHQkQIECAAAECBAgQIECAAAECBQQERwXQFUmAAAECBAgQIECAAAECBAgQqEFAcFRDK6kjAQIECBAgQIAAAQIECBAgQKCAgOCoALoiCRAgQIAAAQIECBAgQIAAAQI1CAiOamgldSRAgAABAgQIECBAgAABAgQIFBAQHBVAVyQBAgQIECBAgAABAgQIECBAoAYBwVENraSOBAgQIECAAAECBAgQIECAAIECAoKjAuiKJECAAAECBAgQIECAAAECBAjUICA4qqGV1JEAAQIECBAgQIAAAQIECBAgUEBAcFQAXZEECBAgQIAAAQIECBAgQIAAgRoEBEc1tJI6EiBAgAABAgQIECBAgAABAgQKCAiOCqArkgABAgQIECBAgAABAgQIECBQg4DgqIZWUkcCBAgQIECAAAECBAgQIECAQAEBwVEBdEUSIECAAAECBAgQIECAAAECBGoQEBzV0ErqSIAAAQIECBAgQIAAAQIECBAoICA4KoCuSAIECBAgQIAAAQIECBAgQIBADQKCoxpaSR0JECBAgAABAgQIECBAgAABAgUEBEcF0BVJgAABAgQIECBAgAABAgQIEKhBQHBUQyupIwECBAgQIECAAAECBAgQIECggIDgqAC6IgkQIECAAAECBAgQIECAAAECNQgIjmpoJXUkQIAAAQIECBAgQIAAAQIECBQQEBwVQFckAQIECBAgQIAAAQIECBAgQKAGAcFRDa2kjgQIECBAgAABAgQIECBAgACBAgKCowLoiiRAgAABAgQIECBAgAABAgQI1CAgOKqhldSRAAECBAgQIECAAAECBAgQIFBAQHBUAF2RBAgQIECAAAECBAgQIECAAIEaBARHNbSSOhIgQIAAAQIECBAgQIAAAQIECggIjgqgK5IAAQIECBAgQIAAAQIECBAgUIOA4KiGVlJHAgQIECBAgAABAgQIECBAgEABAcFRAXRFEiBAgAABAi/1Ew4AAABdSURBVAQIECBAgAABAgRqEBAc1dBK6kiAAAECBAgQIECAAAECBAgQKCAgOCqArkgCBAgQIECAAAECBAgQIECAQA0CgqMaWkkdCRAgQIAAAQIECBAgQIAAAQIFBP4ftTNCjYAUPqAAAAAASUVORK5CYII="},3984:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image21-3749f63b9af49921d7d969c8ce65de5e.png"},6162:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image3-986d5308b0c11e779bddb07c50e838f3.png"},3890:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image4-0a491ff6ce4726e65d7d8a47d9e276c5.png"},8566:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image5-e0fe3ad4d1c07e0650d288e996910446.png"},6072:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image6-e186bec7ca1a0004681a31020c922531.png"},7154:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image7-167d970e81932cb727a06c6d365b70aa.png"},1739:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image8-0074a10f3660d9e1853f6bf6c6c10914.png"},6911:(A,e,g)=>{g.d(e,{Z:()=>t});const t=g.p+"assets/images/image9-efadd6865de74c3c8cec1b9a54390930.png"},1151:(A,e,g)=>{g.d(e,{Z:()=>E,a:()=>s});var t=g(7294);const B={},C=t.createContext(B);function s(A){const e=t.useContext(C);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function E(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(B):A.components||B:s(A.components),t.createElement(C.Provider,{value:e},A.children)}}}]);