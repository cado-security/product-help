"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[1799],{8736:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(5893),s=i(1151);const r={title:"Import from subscriptions and tenants in Azure",hide_title:!0,sidebar_position:7},o="How to import from other Azure subscriptions and tenants in Azure",a={id:"cado/deploy/cross/azure-cross-tenancy-subscriptions",title:"Import from subscriptions and tenants in Azure",description:"Setting up an app registration for cross tenancy/subscription acquisitions",source:"@site/docs/cado/deploy/cross/azure-cross-tenancy-subscriptions.md",sourceDirName:"cado/deploy/cross",slug:"/cado/deploy/cross/azure-cross-tenancy-subscriptions",permalink:"/cado/deploy/cross/azure-cross-tenancy-subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/cross/azure-cross-tenancy-subscriptions.md",tags:[],version:"current",lastUpdatedAt:1728745305,formattedLastUpdatedAt:"Oct 12, 2024",sidebarPosition:7,frontMatter:{title:"Import from subscriptions and tenants in Azure",hide_title:!0,sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Adding Azure subscriptions to Azure/AWS/GCP",permalink:"/cado/deploy/cross/adding-azure"},next:{title:"Adding Google Projects to Azure/AWS",permalink:"/cado/deploy/cross/adding-gcp"}},c={},d=[{value:"Setting up an app registration for cross tenancy/subscription acquisitions",id:"setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions",level:3},{value:"Required role-assignments",id:"required-role-assignments",level:4},{value:"Registering credentials within Cado",id:"registering-credentials-within-cado",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-import-from-other-azure-subscriptions-and-tenants-in-azure",children:"How to import from other Azure subscriptions and tenants in Azure"}),"\n",(0,n.jsx)(t.h3,{id:"setting-up-an-app-registration-for-cross-tenancysubscription-acquisitions",children:"Setting up an app registration for cross tenancy/subscription acquisitions"}),"\n",(0,n.jsxs)(t.p,{children:["To leverage cross Azure acquisitions, you need to create an ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app",children:"Azure app registration"})})," in the Azure tenancy you want to acquire resources from.  Follow the contents of this guide, and select the option for ",(0,n.jsx)(t.code,{children:"Accounts in any organizational directory (Any Azure AD directory - Multitenant)"}),". ",(0,n.jsx)(t.img,{alt:"Azure App Registration",src:i(6160).Z+"",width:"1048",height:"516"})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you are only importing from a separate subscription within the same tenancy as your Cado deployment, you can use ",(0,n.jsx)(t.code,{children:"Accounts in this organizational directory only"})," as your app registration account type."]})}),"\n",(0,n.jsxs)(t.p,{children:["You can then generate a client secret associated with this app registration using ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-credentials",children:"this guide"})}),", be sure to keep a note of it as you will need it to register the app with the Cado platform. ",(0,n.jsx)(t.img,{alt:"Creating a client secret",src:i(8142).Z+"",width:"1606",height:"595"}),"\nBy default, when you create an app registration, Azure will also create an enterprise application alongside it with the same name.\nNavigate to this in Microsoft Entra, and under the ",(0,n.jsx)(t.strong,{children:"properties"})," sidebar, allow the option for ",(0,n.jsx)(t.code,{children:"Enabled for users to sign-in"}),".  Without enabling this option, cross tenancy/subscription acquisitions will not work.\n",(0,n.jsx)(t.img,{alt:"Azure Enterprise App Registration Permission",src:i(9614).Z+"",width:"1273",height:"443"})]}),"\n",(0,n.jsx)(t.h4,{id:"required-role-assignments",children:"Required role-assignments"}),"\n",(0,n.jsx)(t.p,{children:"Once you have created your app registration, you will need to give it the required Azure role-assignments to allow it to access your Azure resources."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Go to the Azure management group you want to acquire from, this could be within the same, or a different Azure tenancy."}),"\n",(0,n.jsxs)(t.li,{children:["Select your management group and go to the Access control (IAM) permissions for it. ",(0,n.jsx)(t.img,{alt:"Adding IAM permissions",src:i(6395).Z+"",width:"1357",height:"687"})]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.code,{children:"Add role assignment"})," and add the following role-assignments for your app registration: ",(0,n.jsx)(t.img,{alt:"Adding IAM permissions to app registration",src:i(5342).Z+"",width:"1900",height:"802"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Storage Account Contributor"})}),"\n",(0,n.jsx)(t.li,{children:"Required for forensic preservation, chain of custody, storing and accessing forensic data and acquisition methods using Cado Host."}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Disk Snapshot Contributor"})}),"\n",(0,n.jsx)(t.li,{children:"Required to acquire Compute instances."}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Virtual Machine Contributor"})}),"\n",(0,n.jsx)(t.li,{children:"Required for core platform functionality including worker management and upgrades as well acquiring Compute instances."}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Monitoring Contributor"})}),"\n",(0,n.jsx)(t.li,{children:"Required for cross-tenant visibility."}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"Azure Kubernetes Service Cluster Admin Role"})}),"\n",(0,n.jsx)(t.li,{children:"Required for Kubernetes acquisition and listing cluster credentials."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Search for your app registration name under the ",(0,n.jsx)(t.code,{children:"Select members"})," prompt."]})}),"\n",(0,n.jsx)(t.p,{children:"With these credentials in place, you are able to register the app with Cado."}),"\n",(0,n.jsx)(t.h3,{id:"registering-credentials-within-cado",children:"Registering credentials within Cado"}),"\n",(0,n.jsx)(t.p,{children:"Once you have created the app registration, you will be able to register the credentials within Cado using the following steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate to the to the settings page and choose the ",(0,n.jsx)(t.code,{children:"Cloud"})," option."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the ",(0,n.jsx)(t.strong,{children:"Azure"})," tab and click ",(0,n.jsx)(t.code,{children:"Add Azure Credentials"}),". ",(0,n.jsx)(t.img,{alt:"Azure Credentials Page",src:i(5755).Z+"",width:"1908",height:"872"})]}),"\n",(0,n.jsxs)(t.li,{children:["Using the information generated during the the app registration setup, fill-in the required fields with the appropriate information and click ",(0,n.jsx)(t.code,{children:"Submit"}),".  ",(0,n.jsx)(t.strong,{children:"Use the subscription ID you assigned app-registration permissions for"}),". ",(0,n.jsx)(t.img,{alt:"Azure Credentials Insertion Page",src:i(7542).Z+"",width:"826",height:"737"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Cloud ID"})," is only used to assign a name to the added credentials, it can be any memorable name of your choosing."]})}),"\n",(0,n.jsxs)(t.p,{children:["Some of the information you will need is on the Azure app registration page, shown below: ",(0,n.jsx)(t.img,{alt:"Azure App Registration Page",src:i(6417).Z+"",width:"1008",height:"552"})]}),"\n",(0,n.jsx)(t.p,{children:'Set the Cloud ID as a name you will recognize, e.g. "AzureCrossAccount".\nYou can find the Tenant ID under Azure Active Directory.\nThe Subscription ID is on the Overview Tab of your Subscription.\nThe Client ID is the Client ID of the application, found on the Properties tab of the Enterprise Application you created earlier.\nThe Client Secret is from the the first step above.'}),"\n",(0,n.jsxs)(t.p,{children:["The credentials are now ready to use within Cado.  Go to an Azure import and select the credential you wish to use from the dropdown in the top left of the import page. ",(0,n.jsx)(t.img,{alt:"Using Custom Azure Credentials",src:i(7194).Z+"",width:"1890",height:"467"}),"  You are now able to import resources managed by other tenants and or subscriptions as normal."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"If you encounter an error when attempting to acquire a resource across Azure accounts or subscriptions, verify that a typo has not been made during addition, or if the wrong information has been entered in the wrong field."})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5342:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-adding-permissions-to-app-registration-91d7323c8ba189612ae5ea3fbabbd66d.png"},6395:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-adding-subscription-permissions-e2146bdc5ec4876758142af7a70bbe9f.png"},6417:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-app-registration-info-14372ffdbbc2f89883de3e5abc64801b.png"},8142:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-creating-client-secret-03828e236f7cf994e5a59b1679a09140.png"},5755:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-creds-page-bdefcb9f68f08bf069307313b5a22e3b.png"},9614:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-enterprise-app-permission-6a7d1aeb3be81574d65c00d1a9ff6e49.png"},7542:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-insert-custom-creds-ac198c8ff6e0477c840d19eb85e21380.png"},6160:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-registering-app-2dd0987baae6d76b0eb998ec283da27e.png"},7194:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/azure-using-custom-credentials-4b431d8630ae3b3a3945aab6f0fa028c.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var n=i(7294);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);