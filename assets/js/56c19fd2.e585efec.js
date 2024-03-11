"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5339],{5576:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=t(5893),s=t(1151);const a={title:"FAQs",hide_title:!0,sidebar_position:1},i="Frequently Asked Questions",r={id:"troubleshooting/faq",title:"FAQs",description:"Solutions to some common questions can be found here.  If you can't find your answer, please reach out to support@cadosecurity.com and let us know.",source:"@site/docs/troubleshooting/faq.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/faq",permalink:"/troubleshooting/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/troubleshooting/faq.md",tags:[],version:"current",lastUpdatedAt:1710172621,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{title:"FAQs",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Manual Uploads",permalink:"/cado-host/manual-upload"},next:{title:"Commercial EULA",permalink:"/eula/commercial-eula"}},l={},d=[{value:"Which cloud providers does Cado support?",id:"which-cloud-providers-does-cado-support",level:3},{value:"Does Cado support memory capture?",id:"does-cado-support-memory-capture",level:3},{value:"Why do I see &quot;Installing Cado Response&quot; instead of the login page?",id:"why-do-i-see-installing-cado-response-instead-of-the-login-page",level:3},{value:"I deployed the Cado platform. How do I log in?",id:"i-deployed-the-cado-platform-how-do-i-log-in",level:3},{value:"Can I allow or restrict IP ranges from accessing my Cado instance?",id:"can-i-allow-or-restrict-ip-ranges-from-accessing-my-cado-instance",level:3},{value:"How can I control the lifecycle of data stored by the Cado platform?",id:"how-can-i-control-the-lifecycle-of-data-stored-by-the-cado-platform",level:3},{value:"Does the Cado platform store sensitive customer data?",id:"does-the-cado-platform-store-sensitive-customer-data",level:3},{value:"Can I monitor the health and proper function of the Cado platform?",id:"can-i-monitor-the-health-and-proper-function-of-the-cado-platform",level:3},{value:"Can I estimate the costs for running the Cado platform in AWS?",id:"can-i-estimate-the-costs-for-running-the-cado-platform-in-aws",level:3},{value:"How can I capture Logs or a Support Bundle from the Cado platform?",id:"how-can-i-capture-logs-or-a-support-bundle-from-the-cado-platform",level:3},{value:"How do I contact Support?",id:"how-do-i-contact-support",level:3},{value:"What are the Cado Service Level Agreements?",id:"what-are-the-cado-service-level-agreements",level:3},{value:"Does the Cado platform support processing of EC2s or AMIs with EBS Encryption?",id:"does-the-cado-platform-support-processing-of-ec2s-or-amis-with-ebs-encryption",level:3},{value:"If vulnerabilities are discovered within your software, are customers notified?",id:"if-vulnerabilities-are-discovered-within-your-software-are-customers-notified",level:3},{value:"How do I expand my available data storage within the Cado platform in AWS?",id:"how-do-i-expand-my-available-data-storage-within-the-cado-platform-in-aws",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,n.jsxs)(o.p,{children:["Solutions to some common questions can be found here.  If you can't find your answer, please reach out to ",(0,n.jsx)(o.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," and let us know."]}),"\n",(0,n.jsx)(o.h3,{id:"which-cloud-providers-does-cado-support",children:"Which cloud providers does Cado support?"}),"\n",(0,n.jsx)(o.p,{children:"Cado supports native deployments in AWS and Azure.  If deployed in AWS, Cado supports AWS as well as cross-cloud acquisitions from GCP and Azure."}),"\n",(0,n.jsx)(o.h3,{id:"does-cado-support-memory-capture",children:"Does Cado support memory capture?"}),"\n",(0,n.jsxs)(o.p,{children:["Yes.  See ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/cado-response/discovery-import/import/data-types/memory",children:"Memory"})})," for more details."]}),"\n",(0,n.jsx)(o.h3,{id:"why-do-i-see-installing-cado-response-instead-of-the-login-page",children:'Why do I see "Installing Cado Response" instead of the login page?'}),"\n",(0,n.jsx)(o.p,{children:'On first boot, the platform will take about 10 minutes to install.  During that time, you will see "Installing Cado Response".  After the one-time installation process completes, you will be presented with a login screen.  During an upgrade, you will also see "Installing Cado Response" until the upgrade is complete.'}),"\n",(0,n.jsx)(o.h3,{id:"i-deployed-the-cado-platform-how-do-i-log-in",children:"I deployed the Cado platform. How do I log in?"}),"\n",(0,n.jsxs)(o.p,{children:["Navigate to the Cado instance IP ",(0,n.jsx)(o.code,{children:"https://<Cado_IP>"}),". You can initially login with the username ",(0,n.jsx)(o.code,{children:"admin"})," and the password ",(0,n.jsx)(o.code,{children:"i-xxx"})," where ",(0,n.jsx)(o.code,{children:"i-xxx"})," is the ID of your instance.  After first login, you will be asked to change your password.  Note that for Azure, the password is the very long Resource ID.  The Resource ID can be found within your Azure Portal by navigating to ",(0,n.jsx)(o.code,{children:"Home > Virtual Machines"}),", clicking on the Cado VM name, then clicking ",(0,n.jsx)(o.code,{children:"Properties"})," on the left navigation bar.  Scroll down to find the ",(0,n.jsx)(o.code,{children:"Resource ID"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"can-i-allow-or-restrict-ip-ranges-from-accessing-my-cado-instance",children:"Can I allow or restrict IP ranges from accessing my Cado instance?"}),"\n",(0,n.jsxs)(o.p,{children:["Yes, and it is strongly recommended to follow the principle of least privilege and restrict access to only those IPs which require access.  In AWS, navigate to your ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://console.aws.amazon.com/ec2",children:"AWS EC2 Console"})}),', click on your Cado Instance ID, navigate to the Security tab, then click on the "Security Group" link, then "Edit Inbound Rules". Here you can add and remove access rules for the Cado instance.  Note that you can also restrict access to HTTPS and SSH during the deployment process via the CloudFormation Template. In Azure, navigate to your ',(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://portal.azure.com/",children:"Azure Portal"})}),' and find the Network Security Group where your Cado VM is deployed.  From there, click "Inbound security rules" and you can Add and Delete access rules. If you have deployed with an ALB then you\'ll need to update the inbound rules for the ALB secuirty group intead. Please note that the ALB will only allow HTTP/HTTPS access - SSH rules will need to be configured in the EC2 security group.']}),"\n",(0,n.jsx)(o.h3,{id:"how-can-i-control-the-lifecycle-of-data-stored-by-the-cado-platform",children:"How can I control the lifecycle of data stored by the Cado platform?"}),"\n",(0,n.jsxs)(o.p,{children:["AWS supports this through ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",children:"Object Locks"})})," and ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/console/s3/lifecyclerules",children:"Lifecycle Rules"})})," associated with your S3 bucket.  Please see the AWS documentation for more details."]}),"\n",(0,n.jsxs)(o.p,{children:["Azure supports this through ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview",children:"Life Cycle Management Policies"})})," for your blob storage.  Please see the Azure documentation for more details."]}),"\n",(0,n.jsx)(o.h3,{id:"does-the-cado-platform-store-sensitive-customer-data",children:"Does the Cado platform store sensitive customer data?"}),"\n",(0,n.jsx)(o.p,{children:"Whether sensitive customer data is stored within the Cado platform is completely dependent on what data sources and evidence is imported into the software.  In all cases, data is either stored within the database on the main Cado instance, within EFS, within a customers' S3 bucket or  Azure storage.  Since the Cado platform is deployed within the customers' cloud environment, the customer has control over the life cycle management of the data (example: using Life Cycle management policies) as well as who has access to potential sensitive data via VPC and Subnet rules."}),"\n",(0,n.jsx)(o.h3,{id:"can-i-monitor-the-health-and-proper-function-of-the-cado-platform",children:"Can I monitor the health and proper function of the Cado platform?"}),"\n",(0,n.jsx)(o.p,{children:'Yes. Within Cado, you can see the platform health and statistics by navigating to the "Platform" tab.'}),"\n",(0,n.jsxs)(o.p,{children:["This lists Free Disk Space, Available Memory, Total Memory, CPU Usage and pipeline processing details.  In addition, roundtrip response latency for the API ",(0,n.jsx)(o.code,{children:"/api/v2/system/status"})," endpoint should be less than or equal to 200ms."]}),"\n",(0,n.jsx)(o.h3,{id:"can-i-estimate-the-costs-for-running-the-cado-platform-in-aws",children:"Can I estimate the costs for running the Cado platform in AWS?"}),"\n",(0,n.jsxs)(o.p,{children:["Yes. You can view the AWS Cost Calculator for a typical Cado installation at ",(0,n.jsx)(o.a,{href:"https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-bca484373bcb2d07322fd6716a197d1cdc629534&v=ver20210903uJ",children:"https://calculator.s3.amazonaws.com/index.html#r=IAD&key=files/calc-bca484373bcb2d07322fd6716a197d1cdc629534&v=ver20210903uJ"})]}),"\n",(0,n.jsx)(o.p,{children:"This includes:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"A central platform server running permanently with 500 GB of space for hot data access"}),"\n",(0,n.jsx)(o.li,{children:"36.5 hours (5% of the time) worker usage to process data"}),"\n",(0,n.jsx)(o.li,{children:"500 GB of permanent S3 Storage used for forensic images"}),"\n",(0,n.jsx)(o.li,{children:"50 GB of Elastic File System Storage used for file transfer downloads"}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"how-can-i-capture-logs-or-a-support-bundle-from-the-cado-platform",children:"How can I capture Logs or a Support Bundle from the Cado platform?"}),"\n",(0,n.jsx)(o.p,{children:"The following methods for getting Logs to Cado are available, in order of ease:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Try sending logs to Cado automatically through the UI by navigating to the Help screen. Click on ",(0,n.jsx)(o.code,{children:"Send Logs to Cado"})," and this will automatically package up a bundle of logs and send them directly to Cado over HTTPS"]}),"\n",(0,n.jsxs)(o.li,{children:["If that fails, click on ",(0,n.jsx)(o.code,{children:"Download Logs"})," and upload the zip file to the Customer Portal"]}),"\n",(0,n.jsxs)(o.li,{children:["If 1 and 2 fail, or you cannot log into the platform then open an SSH session to the Cado Platform (you'll need the key you used during deployment) and execute the command ",(0,n.jsx)(o.code,{children:"sudo tar -cvzf /var/log/cado_logs.tar.gz /var/log"})," then upload the zip file to the Customer Portal."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"how-do-i-contact-support",children:"How do I contact Support?"}),"\n",(0,n.jsxs)(o.p,{children:["You can contact Cado Support via email at ",(0,n.jsx)(o.a,{href:"mailto:support@cadosecurity.com",children:"support@cadosecurity.com"})," or reach out to your account manager for more details."]}),"\n",(0,n.jsx)(o.h3,{id:"what-are-the-cado-service-level-agreements",children:"What are the Cado Service Level Agreements?"}),"\n",(0,n.jsx)(o.p,{children:"The Cado Service Level Agreements (SLAs) are part of customers' end-user license agreement.  Please refer to your EULA for more details."}),"\n",(0,n.jsx)(o.h3,{id:"does-the-cado-platform-support-processing-of-ec2s-or-amis-with-ebs-encryption",children:"Does the Cado platform support processing of EC2s or AMIs with EBS Encryption?"}),"\n",(0,n.jsxs)(o.p,{children:["Yes. As of build 0.9.2.4, the ",(0,n.jsx)(o.code,{children:"kms:CreateGrant"})," and ",(0,n.jsx)(o.code,{children:"kms:Decrypt"})," permissions are enabled within the Cado role by default. If you upgraded from a build earlier than 0.9.2.4, you may need to add these permissions manually."]}),"\n",(0,n.jsx)(o.h3,{id:"if-vulnerabilities-are-discovered-within-your-software-are-customers-notified",children:"If vulnerabilities are discovered within your software, are customers notified?"}),"\n",(0,n.jsx)(o.p,{children:"Yes. Updates and notifications are provided to customers if vulnerablities or vulnerable packages are identified within our software."}),"\n",(0,n.jsx)(o.h3,{id:"how-do-i-expand-my-available-data-storage-within-the-cado-platform-in-aws",children:"How do I expand my available data storage within the Cado platform in AWS?"}),"\n",(0,n.jsxs)(o.p,{children:["Below are the steps for expanding the Cado platform data storage volume after deployment.  This follows the steps as outline by AWS' documentation: ",(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html",children:"Extend a Linux file system after resizing a volume"})})]}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsxs)(o.p,{children:["Before continuing, create a snapshot of the ",(0,n.jsx)(o.code,{children:"CadoResponseDataVolume"})," volume which has the device name ",(0,n.jsx)(o.code,{children:"/dev/sdh"}),".  This will ensure you have a backup of the data volume to restore, in case you encounter an issue. ",(0,n.jsx)(o.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html",children:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"})]})}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Extend the ",(0,n.jsx)(o.code,{children:"/dev/sdh"})," storage volume via the AWS Console by:","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Navigating to your Cado instance"}),"\n",(0,n.jsxs)(o.li,{children:["Click the ",(0,n.jsx)(o.strong,{children:"Storage"})," tab"]}),"\n",(0,n.jsxs)(o.li,{children:["Click on the volume instance ID for Device Name ",(0,n.jsx)(o.code,{children:"/dev/sdh"})]}),"\n",(0,n.jsxs)(o.li,{children:["Select the ",(0,n.jsx)(o.code,{children:"CadoResponseDataVolume"})]}),"\n",(0,n.jsxs)(o.li,{children:["Click ",(0,n.jsx)(o.strong,{children:"Actions"})]}),"\n",(0,n.jsxs)(o.li,{children:["Select ",(0,n.jsx)(o.strong,{children:"Modify Volume"})]}),"\n",(0,n.jsx)(o.li,{children:"Enter the new volume size"}),"\n",(0,n.jsxs)(o.li,{children:["Click ",(0,n.jsx)(o.strong,{children:"Modify"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["SSH into the Cado instance. example: ",(0,n.jsx)(o.code,{children:'ssh -i "us-east-2.pem" admin@ec2-55-234-10-9.compute-1.amazonaws.com'})]}),"\n",(0,n.jsxs)(o.li,{children:["Run ",(0,n.jsx)(o.code,{children:"df -hT"}),". Note the Avail space for the ",(0,n.jsx)(o.code,{children:"/dev/nvme1n1"})," filesystem mounted on ",(0,n.jsx)(o.code,{children:"/home/admin/data"}),". This should display the old volume size."]}),"\n",(0,n.jsxs)(o.li,{children:["Run ",(0,n.jsx)(o.code,{children:"lsblk"})," and note the ",(0,n.jsx)(o.code,{children:"nvme1n1"})," volume SIZE mounted on ",(0,n.jsx)(o.code,{children:"/home/admin/data"}),". This should display the new volume size."]}),"\n",(0,n.jsxs)(o.li,{children:["To extend the volume and make it available to the OS, run ",(0,n.jsx)(o.code,{children:"sudo xfs_growfs -d /home/admin/data"})]}),"\n",(0,n.jsxs)(o.li,{children:["Run ",(0,n.jsx)(o.code,{children:"df -hT"})," again and note the Avail space for the ",(0,n.jsx)(o.code,{children:"/dev/nvme1n1"})," filesystem mounted on ",(0,n.jsx)(o.code,{children:"/home/admin/data"})," This should now display the new volume size."]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>i});var n=t(7294);const s={},a=n.createContext(s);function i(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);