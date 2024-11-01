"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5263],{2217:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=t(5893),a=t(1151);const i={title:"Import large EC2 instances",hide_title:!0,sidebar_position:10},o="How to Import Large AWS EC2 Instances",r={id:"cado/discovery-import/aws/large-aws-imports",title:"Import large EC2 instances",description:"When importing AWS EC2 instances with disks over 500GB, you may encounter limitations in AWS that result in extended acquisition times. During the acquisition process, you might receive a warning, as shown below:",source:"@site/docs/cado/discovery-import/aws/large-aws-imports.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/large-aws-imports",permalink:"/cado/discovery-import/aws/large-aws-imports",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/large-aws-imports.md",tags:[],version:"current",lastUpdatedAt:1730460513,formattedLastUpdatedAt:"Nov 1, 2024",sidebarPosition:10,frontMatter:{title:"Import large EC2 instances",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"AWS China",permalink:"/cado/discovery-import/aws/aws-china"},next:{title:"Azure Compute",permalink:"/cado/discovery-import/azure/azure-compute"}},c={},l=[{value:"Alternate Acquisition via Triage of a Live System",id:"alternate-acquisition-via-triage-of-a-live-system",level:2},{value:"Alternate Manual Acquisition of a Live System",id:"alternate-manual-acquisition-of-a-live-system",level:2},{value:"How Cado Acquires EC2 Instances",id:"how-cado-acquires-ec2-instances",level:2},{value:"Speeding Up Step 1: Create Snapshot",id:"speeding-up-step-1-create-snapshot",level:3},{value:"Speeding Up Step 2: Create Volume with Fast Snapshot Restore",id:"speeding-up-step-2-create-volume-with-fast-snapshot-restore",level:3},{value:"Increasing the Size of the Target Instance for EC2 Acquisition",id:"increasing-the-size-of-the-target-instance-for-ec2-acquisition",level:3},{value:"Alternative Collection Using the AWS EBS Direct API",id:"alternative-collection-using-the-aws-ebs-direct-api",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"how-to-import-large-aws-ec2-instances",children:"How to Import Large AWS EC2 Instances"}),"\n",(0,n.jsx)(s.p,{children:"When importing AWS EC2 instances with disks over 500GB, you may encounter limitations in AWS that result in extended acquisition times. During the acquisition process, you might receive a warning, as shown below:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Large EC2 Import Warning",src:t(3009).Z+"",width:"2062",height:"256"})}),"\n",(0,n.jsx)(s.h2,{id:"alternate-acquisition-via-triage-of-a-live-system",children:"Alternate Acquisition via Triage of a Live System"}),"\n",(0,n.jsxs)(s.p,{children:["If possible, use the ",(0,n.jsx)(s.strong,{children:"Triage"})," option if AWS Systems Manager (SSM) is enabled. This can speed up the acquisition process."]}),"\n",(0,n.jsxs)(s.p,{children:["Alternatively, you can acquire the system using ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html",children:"SSH"})," or ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-connect-methods.html",children:"AWS EC2 Instance Connect"}),". In the AWS console, select the instance, then choose ",(0,n.jsx)(s.strong,{children:"Actions > Connect"}),". From there, you can use ",(0,n.jsx)(s.strong,{children:"Cado Host"})," via the Cado UI at ",(0,n.jsx)(s.strong,{children:"Import > Cado Host"}),". You can also collect additional files by using the ",(0,n.jsx)(s.a,{href:"https://docs.cadosecurity.com/cado-host/cli",children:"command line"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"If the system is powered off, consider isolating it at the network and IAM level, then turn it on to capture the necessary data."}),"\n",(0,n.jsx)(s.h2,{id:"alternate-manual-acquisition-of-a-live-system",children:"Alternate Manual Acquisition of a Live System"}),"\n",(0,n.jsx)(s.p,{children:"You can also manually copy individual files or perform a live image by connecting to the system and running a command such as:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"dd if=/dev/source of=/path/to/image.dd bs=block_size count=total_blocks\n"})}),"\n",(0,n.jsx)(s.p,{children:"Alternatively, to upload the disk image directly to S3:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"aws s3 cp /dev/[disk] s3://bucket/image.dd.gz --expected-size [size in bytes]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"how-cado-acquires-ec2-instances",children:"How Cado Acquires EC2 Instances"}),"\n",(0,n.jsx)(s.p,{children:"When acquiring an EC2 instance, the Cado platform follows these steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Create a snapshot"})," of the volume attached to the instance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Create a volume"})," from the snapshot."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Create an image"})," of the volume for processing."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Below is a diagram showing possible optimizations in this process:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cado EC2 Acquisition Process",src:t(2598).Z+"",width:"1800",height:"554"})}),"\n",(0,n.jsx)(s.h3,{id:"speeding-up-step-1-create-snapshot",children:"Speeding Up Step 1: Create Snapshot"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"snapshot creation"})," process will be faster if there\u2019s an earlier snapshot of the volume, as AWS uses ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html#how_snapshots_work",children:"incremental snapshots"}),". However, creating a snapshot for large volumes can take several hours if no earlier snapshots exist. AWS recommends creating regular snapshots to speed up this process, though this may not be feasible during incident response."]}),"\n",(0,n.jsx)(s.p,{children:"AWS does not provide exact estimates for how long creating a snapshot will take, but volumes larger than 500GB typically require several hours if there are no prior snapshots."}),"\n",(0,n.jsx)(s.h3,{id:"speeding-up-step-2-create-volume-with-fast-snapshot-restore",children:"Speeding Up Step 2: Create Volume with Fast Snapshot Restore"}),"\n",(0,n.jsxs)(s.p,{children:["You can speed up the ",(0,n.jsx)(s.strong,{children:"Create Volume"})," step by using ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html",children:"Fast Snapshot Restore"}),". Note that this does not affect the time it takes to create a snapshot, and creating a volume still takes time."]}),"\n",(0,n.jsx)(s.p,{children:"To create a snapshot and enable Fast Snapshot Restore:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Create a Snapshot"}),":\n",(0,n.jsx)(s.img,{alt:"Create Snapshot",src:t(446).Z+"",width:"674",height:"210"})]}),"\n",(0,n.jsx)(s.p,{children:"Using the AWS CLI:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'aws ec2 create-snapshot --volume-id vol-12345678 --description "My EBS volume snapshot"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Enable Fast Snapshot Restore"}),":\n",(0,n.jsx)(s.img,{alt:"Enable Fast Snapshot Restore",src:t(3274).Z+"",width:"922",height:"192"})]}),"\n",(0,n.jsx)(s.p,{children:"Using the AWS CLI:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"aws ec2 enable-fast-snapshot-restores --availability-zones us-east-2a us-east-2b --source-snapshot-ids snap-1234567890abcdef0\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["AWS estimates that enabling Fast Snapshot Restore will take around ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html#:~:text=View%20the%20fast%20snapshot%20restore%20state%20for%20a%20snapshot,-Fast%20snapshot%20restore&text=optimizing%20%E2%80%94%20Fast%20snapshot%20restore%20is,performance%20benefit%20when%20restoring%20volumes.",children:"60 minutes per terabyte"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"You\u2019ll see the status of Fast Snapshot Restore in the AWS Console as follows:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Fast Snapshot Restore Enabled",src:t(2166).Z+"",width:"314",height:"100"})}),"\n",(0,n.jsx)(s.h3,{id:"increasing-the-size-of-the-target-instance-for-ec2-acquisition",children:"Increasing the Size of the Target Instance for EC2 Acquisition"}),"\n",(0,n.jsxs)(s.p,{children:["Cado matches the instance type of the target system for compatibility when acquiring an instance. However, larger instances offer higher disk, network, and CPU limits, which can speed up the ",(0,n.jsx)(s.strong,{children:"Create Image"})," step."]}),"\n",(0,n.jsx)(s.p,{children:"If possible, changing the target instance to a larger type can speed up acquisition, though this does not affect the time taken for creating a snapshot or volume."}),"\n",(0,n.jsx)(s.h2,{id:"alternative-collection-using-the-aws-ebs-direct-api",children:"Alternative Collection Using the AWS EBS Direct API"}),"\n",(0,n.jsxs)(s.p,{children:["Cado now offers a faster acquisition method using the ",(0,n.jsx)(s.strong,{children:"EBS Direct API"}),". You can enable this feature under ",(0,n.jsx)(s.strong,{children:"Settings > Experiments > EBS Direct Acquisitions"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["This method is similar to using ",(0,n.jsx)(s.strong,{children:"Coldsnap"}),", which can be executed with a command like:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"coldsnap --region us-east-1 download snap-0001 disk.dd\n"})})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},446:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/createsnap-958ff21bc524a59a1bda567ca005901b.png"},2166:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/fast-restore-enabled-5e2d4de3c637e9229e9a7ebbe010e55c.png"},3274:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/fast-restore-899313d06cc63884c10891f9c54ccef6.png"},3009:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/large-disk-warning-ab5758b63f23a68c4b6ec2bb45f3150a.png"},2598:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/snapshot-steps-3ca5d009a15de216583f5f121f7d8ae0.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(7294);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);