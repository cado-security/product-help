"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4228],{8145:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(74848),i=o(28453);const s={title:"Automated Setup of GCP for data collection",hide_title:!0,sidebar_position:3},r="How to automatically set up GCP for data collection",c={id:"cado/deploy/gcp/gcp-auto-setup",title:"Automated Setup of GCP for data collection",description:"To streamline the process of configuring your GCP environment ready for Cado, this page details how to use our GCP Setup Scripts.",source:"@site/docs/cado/deploy/gcp/gcp-auto-setup.md",sourceDirName:"cado/deploy/gcp",slug:"/cado/deploy/gcp/gcp-auto-setup",permalink:"/cado/deploy/gcp/gcp-auto-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/gcp/gcp-auto-setup.md",tags:[],version:"current",lastUpdatedAt:1739185771,formattedLastUpdatedAt:"Feb 10, 2025",sidebarPosition:3,frontMatter:{title:"Automated Setup of GCP for data collection",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Endpoint access",permalink:"/cado/deploy/gcp/endpoints"},next:{title:"Platform Encryption in GCP",permalink:"/cado/deploy/gcp/data-encryption-overview"}},a={},l=[{value:"Uploading and Running the Scripts",id:"uploading-and-running-the-scripts",level:3},{value:"Scripts",id:"scripts",level:2},{value:"Role Creation",id:"role-creation",level:3},{value:"Service Account Creation",id:"service-account-creation",level:3},{value:"Workload Identity Federation",id:"workload-identity-federation",level:3},{value:"Cross-project Access",id:"cross-project-access",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-automatically-set-up-gcp-for-data-collection",children:"How to automatically set up GCP for data collection"}),"\n",(0,n.jsx)(t.p,{children:"To streamline the process of configuring your GCP environment ready for Cado, this page details how to use our GCP Setup Scripts."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The actions in these scripts can take a few minutes to take effect, as such, it's best not to run them in quick succession."})}),"\n",(0,n.jsx)(t.h3,{id:"uploading-and-running-the-scripts",children:"Uploading and Running the Scripts"}),"\n",(0,n.jsx)(t.p,{children:"To make use of these scripts, it's best to upload them using the gcloud terminal. To do this, navigate to the GCP console and click the 'Activate Cloud Shell' button in the top-right corner."}),"\n",(0,n.jsxs)(t.p,{children:["The scripts can be found in our ",(0,n.jsx)(t.strong,{children:"Cado GCP Scripts github"}),":\n",(0,n.jsx)(t.a,{href:"https://github.com/cado-security/gcp-setup",children:"https://github.com/cado-security/gcp-setup"})]}),"\n",(0,n.jsx)("img",{src:"/img/gcp-shell.png",alt:"Cloud Shell",width:"350"}),"\n",(0,n.jsx)(t.p,{children:"Once they've been uploaded to your user area in the gcloud terminal, you can run them with bash."}),"\n",(0,n.jsx)("img",{src:"/img/gcp-scripts.png",alt:"Cloud Shell",width:"800"}),"\n",(0,n.jsx)(t.h2,{id:"scripts",children:"Scripts"}),"\n",(0,n.jsx)(t.h3,{id:"role-creation",children:"Role Creation"}),"\n",(0,n.jsxs)(t.p,{children:["The first script in the series '",(0,n.jsx)(t.strong,{children:"gcp_setup_1_role.sh"}),"' will create a 'CadoGCPRole' role within the active project with scoped permissions for Cado to operate. If you want to create the role at the organization level for use across multiple projects, add the organization ID as a parameter.\nWhen the script finishes you should see the role ID printed, we will use this role ID in other scripts so it's best to save it somewhere."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"bash gcp_setup_1_role.sh <optional_organization_id>\nSave this role ID to be used in the next script: organizations/0123456789/roles/CadoGCPRole\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"service-account-creation",children:"Service Account Creation"}),"\n",(0,n.jsxs)(t.p,{children:["The second script '",(0,n.jsx)(t.strong,{children:"gcp_setup_2_service_account.sh"}),"' will create a 'CadoServiceAccount' service account within the active project, using the CadoGCPRole role's permissions. You need to specify the role ID from the previous script as a parameter when executing."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"bash gcp_setup_2_service_account.sh <cado_role_id>\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"workload-identity-federation",children:"Workload Identity Federation"}),"\n",(0,n.jsxs)(t.p,{children:["The third script '",(0,n.jsx)(t.strong,{children:"gcp_setup_3_WIF.sh"}),"' will create a 'cado-aws-pool' workload identity pool with a 'Cado-AWS-Provider' identity provider and will also connect the previously created 'CadoServiceAccount' service account. This script needs the AWS account ID you will be authenticating with passed as a parameter. Once executing finishes, you can navigate to the 'Connected Service Accounts' tab in the pool and download the credentials ready to use in the platform."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"bash gcp_setup_3_WIF.sh <aws_account_id>\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"cross-project-access",children:"Cross-project Access"}),"\n",(0,n.jsxs)(t.p,{children:["The last script '",(0,n.jsx)(t.strong,{children:"gcp_setup_4_cross_project.sh"}),"' is optional and will setup a target project ready for acquisition using the original 'CadoServiceAccount', meaning you won't need separate credentials to access assets in the target project. This script will only work if the original 'CadoGCPRole' was created at the organization level and will need that role ID along with the target project's ID passed as parameters."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"bash gcp_setup_4_cross_project.sh <target_project_id> <cado_role_id>\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>c});var n=o(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);