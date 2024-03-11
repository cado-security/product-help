"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1005],{6810:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(5893),t=r(1151);const s={title:"Deployment Options",hide_title:!0,sidebar_position:1},a="Cado Platform Deployment Options",i={id:"cado-response/deploy/intro",title:"Deployment Options",description:"The Cado platform can be deployed in either AWS, Azure or Google Cloud.",source:"@site/docs/cado-response/deploy/intro.md",sourceDirName:"cado-response/deploy",slug:"/cado-response/deploy/intro",permalink:"/cado-response/deploy/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/intro.md",tags:[],version:"current",lastUpdatedAt:1710186152,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{title:"Deployment Options",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Key Concepts",permalink:"/cado-response/key-concepts"},next:{title:"Overview",permalink:"/cado-response/deploy/aws/overview"}},d={},l=[{value:"Cross Cloud Collection",id:"cross-cloud-collection",level:2},{value:"Tagging Cado Resources",id:"tagging-cado-resources",level:2},{value:"Terraform",id:"terraform",level:4},{value:"CloudFormation",id:"cloudformation",level:4}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"cado-platform-deployment-options",children:"Cado Platform Deployment Options"}),"\n",(0,n.jsx)(o.p,{children:"The Cado platform can be deployed in either AWS, Azure or Google Cloud."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/cado-response/deploy/aws/overview",children:"Learn how in AWS >"})})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/cado-response/deploy/azure/azure-deploy",children:"Learn how in Azure >"})})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"gcp/gcp-deploy",children:"Learn how in GCP >"})})}),"\n",(0,n.jsx)(o.h2,{id:"cross-cloud-collection",children:"Cross Cloud Collection"}),"\n",(0,n.jsxs)(o.p,{children:['When you deploy Cado in AWS you can import data "cross-cloud" from Azure or GCP. ',(0,n.jsx)(o.strong,{children:"Cross cloud"})," means that Cado is deployed in one cloud environment, but imports data from another."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Cross Cloud Collection",src:r(4548).Z+"",width:"1082",height:"583"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions",children:"Learn how to set up cross cloud collection from Azure >"})})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/cado-response/deploy/gcp/gcp-settings",children:"Learn how to set up cross cloud collection from GCP>"})})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation",children:"Learn how to set up cross cloud collection from AWS>"})})}),"\n",(0,n.jsxs)(o.p,{children:["Diagrams of how cross-cloud imports from ",(0,n.jsx)(o.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23259971240465-How-do-cross-cloud-imports-from-Azure-into-AWS-work",children:"Azure"})," and ",(0,n.jsx)(o.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23259790277649-How-do-Cross-Cloud-imports-from-GCP-into-AWS-work",children:"Google Cloud"})," operate, and ",(0,n.jsx)(o.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23260946428689-What-network-access-is-required-to-operate-cross-cloud-from-AWS",children:"networking"}),", are available from our Knowledge Base."]}),"\n",(0,n.jsx)(o.h2,{id:"tagging-cado-resources",children:"Tagging Cado Resources"}),"\n",(0,n.jsxs)(o.p,{children:["You also have the option to have workers tagged when they are launched.  This can be done by specifying the ",(0,n.jsx)(o.strong,{children:"Tag Key"})," and ",(0,n.jsx)(o.strong,{children:"Tag Value"})," which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options."]}),"\n",(0,n.jsx)(o.h4,{id:"terraform",children:"Terraform"}),"\n",(0,n.jsx)(o.p,{children:'If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform. If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.\nOr, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.\nPlease also note that you will have to run terraform apply again after saving these changes.'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'variable "tags" {\n    type = map(string)\n    default = {}\n}\n'})}),"\n",(0,n.jsx)(o.h4,{id:"cloudformation",children:"CloudFormation"}),"\n",(0,n.jsx)(o.p,{children:'If you deployed via CloudFormation Template you can apply multiple tags to workers by adding them to the "UserData" section of the CloudFormation Template. Please note that deploying via CloudFormation requires you to specify tags prior to deployment. To add a worker tag add the below to the "UserData" field.'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'"echo CUSTOM_TAG_FOO = BAR  >> /home/admin/processor/first_run.cfg",\n"\\n",\n'})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"CUSTOM_TAG_"}),' prefix is required. If you would like to apply a tag with key "FOO" and value "BAR" then your line should appear as it does in the above example.']})}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsx)(o.p,{children:'The last line of the "UserData" field must contain'}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'"sudo /home/admin/processor/release/finalize.sh --main"\n'})})]})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4548:(e,o,r)=>{r.d(o,{Z:()=>n});const n=r.p+"assets/images/cross-cloud-d567d021d7d7207ba606f160cfd3bf05.png"},1151:(e,o,r)=>{r.d(o,{Z:()=>i,a:()=>a});var n=r(7294);const t={},s=n.createContext(t);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);