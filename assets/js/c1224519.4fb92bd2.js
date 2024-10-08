"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5357],{8826:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=t(5893),a=t(1151);const i={title:"Import large EC2 instances",hide_title:!0,sidebar_position:5},o="How to import large AWS EC2 instances",r={id:"cado-response/deploy/aws/performance-resiliency/large-aws-imports",title:"Import large EC2 instances",description:"Importing AWS EC2 instances with disks over 500GB can start to reach limitations in AWS which results in potentially very long acquisition times. You will receive a warning such as this during the Acquisition of a system:",source:"@site/docs/cado-response/deploy/aws/performance-resiliency/large-aws-imports.md",sourceDirName:"cado-response/deploy/aws/performance-resiliency",slug:"/cado-response/deploy/aws/performance-resiliency/large-aws-imports",permalink:"/cado-response/deploy/aws/performance-resiliency/large-aws-imports",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/aws/performance-resiliency/large-aws-imports.md",tags:[],version:"current",lastUpdatedAt:1728398127,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:5,frontMatter:{title:"Import large EC2 instances",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"High availability",permalink:"/cado-response/deploy/aws/performance-resiliency/high-availability"},next:{title:"Azure Overview",permalink:"/cado-response/deploy/azure/azure-deploy"}},c={},l=[];function h(e){const s={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"how-to-import-large-aws-ec2-instances",children:"How to import large AWS EC2 instances"}),"\n",(0,n.jsx)(s.p,{children:"Importing AWS EC2 instances with disks over 500GB can start to reach limitations in AWS which results in potentially very long acquisition times. You will receive a warning such as this during the Acquisition of a system:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Large EC2 Import Warning",src:t(227).Z+"",width:"2062",height:"256"})}),"\n",(0,n.jsx)(s.h1,{id:"alternate-acquisition-via-triage-of-a-live-system",children:"Alternate Acquisition via Triage of a Live System"}),"\n",(0,n.jsx)(s.p,{children:'If possible, acquire these systems using the "Triage" option if SSM is enabled.'}),"\n",(0,n.jsxs)(s.p,{children:["Alternatively, you can use another option such as ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html",children:"SSH"})," or ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-connect-methods.html",children:"AWS EC2 Instance Connect"}),' where available (select the instance in the AWS console, then select "Actions" > "Connect") to acquire with Cado Host (via the Cado UI at \u201cImport\u201d > \u201cCado Host\u201d). Additional files to be collected can be set using the ',(0,n.jsx)(s.a,{href:"https://docs.cadosecurity.com/cado-host/cli",children:"command line"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"If a system is turned off, it may be possible to isolate at the network and IAM level then turn it on in order to capture data."}),"\n",(0,n.jsx)(s.h1,{id:"alternate-manual-acquisition-of-a-live-system",children:"Alternate Manual Acquisition of a Live System"}),"\n",(0,n.jsx)(s.p,{children:"It is also possible to copy off individual files, or perform a live image by connecting to a system and running a command such as:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"dd if=/dev/source of=/path/to/image.dd bs=block_size count=total_blocks"})}),"\n",(0,n.jsx)(s.p,{children:"To create a disk image on a mounted Volume to hold the image.\nOr if you have restricted access to S3:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"aws s3 cp /dev/[disk] s3://bucket/image.dd.gz --expected-size [size in bytes]"})}),"\n",(0,n.jsx)(s.h1,{id:"how-cado-acquires-ec2-instances",children:"How Cado acquires EC2 Instances"}),"\n",(0,n.jsx)(s.p,{children:"When acquiring an EC2 instance, the Cado platform will:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Create a snapshot of a volume attached to an instance; then"}),"\n",(0,n.jsx)(s.li,{children:"Create a Volume from this snapshot; then"}),"\n",(0,n.jsx)(s.li,{children:"Then Create an Image of the volume for processing."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Below we outline possible optimizations to this process:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cado EC2 Acquisition Process",src:t(2598).Z+"",width:"1800",height:"554"})}),"\n",(0,n.jsx)(s.h1,{id:"speeding-up-the-1-create-snapshot-step",children:"Speeding up the 1. Create Snapshot Step"}),"\n",(0,n.jsxs)(s.p,{children:["The first step of Creating a Snapshot will be faster if there is an earlier snapshot of the same volume, as AWS uses ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html#how_snapshots_work",children:"incremental snapshots"}),". If not, creating the snapshot can take a number of hours for a large Volume. AWS ",(0,n.jsx)(s.a,{href:"https://repost.aws/knowledge-center/ebs-incremental-snapshot-creation-slow",children:"recommend"})," creating regular snapshots to speed up the process, however this is often not possible when responding to an incident."]}),"\n",(0,n.jsx)(s.p,{children:"AWS does not provide estimates of how long Creating a Snapshot will take as it can vary on a number of factors. A Snapshot of a Volume larger than 500GB will typically take a number of hours, if earlier Snapshots do not exist."}),"\n",(0,n.jsx)(s.h1,{id:"speeding-up-the-2-create-volume-step-with-fast-restore",children:"Speeding up the 2. Create Volume Step with Fast Restore"}),"\n",(0,n.jsxs)(s.p,{children:["You can speed up the second step of Creating a Volume by using ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html",children:"Fast Snapshot Restore"}),". Note this will not speed up the first step of creating a snapshot, and the second stage of creating a volume will still take some time."]}),"\n",(0,n.jsx)(s.p,{children:"To create a Snapshot and enable Fast Snapshot Restore:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-creating-snapshot.html",children:"Creating a Snapshot"})," of the disk in the AWS Console:\n",(0,n.jsx)(s.img,{alt:"Create Snapshot",src:t(9378).Z+"",width:"674",height:"210"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Or using the AWS CLI with:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'aws ec2 create-snapshot --volume-id vol-12345678  --description "My EBS volume snapshot"'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Enabling Fast Snapshot Restore on the snapshot:\n",(0,n.jsx)(s.img,{alt:"Enable Fast Snapshot Restore",src:t(3274).Z+"",width:"922",height:"192"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Or with the AWS CLI:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"aws ec2 enable-fast-snapshot-restores --availability-zones us-east-2a us-east-2b  --source-snapshot-ids snap-1234567890abcdef0"})}),"\n",(0,n.jsxs)(s.p,{children:["You will need to wait for the Fast Snapshot Restore to be enabled, then you can import the Snapshot (snap-xxx). AWS estimates this will take ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html#:~:text=View%20the%20fast%20snapshot%20restore%20state%20for%20a%20snapshot,-Fast%20snapshot%20restore&text=optimizing%20%E2%80%94%20Fast%20snapshot%20restore%20is,performance%20benefit%20when%20restoring%20volumes.",children:"60 minutes"})," per Terabyte of data."]}),"\n",(0,n.jsx)(s.p,{children:"This will show in the AWS console as follows:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Fast Snapshot Restore",src:t(2166).Z+"",width:"314",height:"100"})}),"\n",(0,n.jsx)(s.h1,{id:"increasing-the-size-of-the-target-instance-with-ec2-acquisition",children:"Increasing the Size of the Target Instance with EC2 Acquisition"}),"\n",(0,n.jsx)(s.p,{children:"When acquiring an instance, Cado matches the instance type of the target system for compatibility. This can be a requirement for AWS Marketplace images, but larger instances can have higher disk, network and CPU limits."}),"\n",(0,n.jsx)(s.p,{children:"If you have the option to change the instance type of the target system to a larger system, it can speed up the 3. Create an Image step. It will not increase the speed of Creating a Snapshot, or Creating a Volume."}),"\n",(0,n.jsx)(s.h1,{id:"alternative-collection-using-the-aws-ebs-direct-api",children:"Alternative Collection using the AWS EBS Direct API"}),"\n",(0,n.jsx)(s.p,{children:"We have released a new method to acquire EC2/EBS Volumes using the EBS Direct API.\nThis can be enabled set Settings > Experiments > EBS Direct Acquisitions"}),"\n",(0,n.jsx)(s.p,{children:"This works in a similar method to coldsnap:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/awslabs/coldsnap",children:"https://github.com/awslabs/coldsnap"}),"\nWhich is executed using a command such as:"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"coldsnap  --region us-east-1 download snap-0001 disk.dd"})})]})}function d(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9378:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/createsnap-958ff21bc524a59a1bda567ca005901b.png"},2166:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/fast-restore-enabled-5e2d4de3c637e9229e9a7ebbe010e55c.png"},3274:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/fast-restore-899313d06cc63884c10891f9c54ccef6.png"},227:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/large-disk-warning-ab5758b63f23a68c4b6ec2bb45f3150a.png"},2598:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/snapshot-steps-3ca5d009a15de216583f5f121f7d8ae0.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(7294);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);