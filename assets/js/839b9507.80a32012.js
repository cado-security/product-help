"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4940],{3952:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(5893),r=t(1151);const a={title:"Tagging Cado resources",hide_title:!0,sidebar_position:7},s="How to tag Cado resources",i={id:"cado-response/deploy/tag",title:"Tagging Cado resources",description:"You also have the option to have workers tagged when they are launched.  This can be done by specifying the Tag Key and Tag Value which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options.",source:"@site/docs/cado-response/deploy/tag.md",sourceDirName:"cado-response/deploy",slug:"/cado-response/deploy/tag",permalink:"/cado-response/deploy/tag",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/tag.md",tags:[],version:"current",lastUpdatedAt:1728398127,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:7,frontMatter:{title:"Tagging Cado resources",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Deployments",permalink:"/cado-response/deploy/kubernetes"},next:{title:"Import Overview",permalink:"/cado-response/discovery-import/intro"}},d={},l=[{value:"Terraform",id:"terraform",level:4},{value:"CloudFormation",id:"cloudformation",level:4}];function p(e){const o={admonition:"admonition",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"how-to-tag-cado-resources",children:"How to tag Cado resources"}),"\n",(0,n.jsxs)(o.p,{children:["You also have the option to have workers tagged when they are launched.  This can be done by specifying the ",(0,n.jsx)(o.strong,{children:"Tag Key"})," and ",(0,n.jsx)(o.strong,{children:"Tag Value"})," which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options."]}),"\n",(0,n.jsx)(o.h4,{id:"terraform",children:"Terraform"}),"\n",(0,n.jsx)(o.p,{children:'If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform. If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.\nOr, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.\nPlease also note that you will have to run terraform apply again after saving these changes.'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'variable "tags" {\n    type = map(string)\n    default = {}\n}\n'})}),"\n",(0,n.jsx)(o.h4,{id:"cloudformation",children:"CloudFormation"}),"\n",(0,n.jsx)(o.p,{children:'If you deployed via CloudFormation Template you can apply multiple tags to workers by adding them to the "UserData" section of the CloudFormation Template. Please note that deploying via CloudFormation requires you to specify tags prior to deployment. To add a worker tag add the below to the "UserData" field.'}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'"echo CUSTOM_TAG_FOO = BAR  >> /home/admin/processor/first_run.cfg",\n"\\n",\n'})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"CUSTOM_TAG_"}),' prefix is required. If you would like to apply a tag with key "FOO" and value "BAR" then your line should appear as it does in the above example.']})}),"\n",(0,n.jsxs)(o.admonition,{type:"info",children:[(0,n.jsx)(o.p,{children:'The last line of the "UserData" field must contain'}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'"sudo /home/admin/processor/release/finalize.sh --main"\n'})})]})]})}function c(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>s});var n=t(7294);const r={},a=n.createContext(r);function s(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);