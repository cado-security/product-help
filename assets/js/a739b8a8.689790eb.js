"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Cross Subscription and Tenancy",hide_title:!0,sidebar_position:2},o="Azure Cross Subscription Creation",s={unversionedId:"cado-response/deploy/azure/azure-cross-tenancy-subscriptions",id:"cado-response/deploy/azure/azure-cross-tenancy-subscriptions",title:"Cross Subscription and Tenancy",description:"Setting up an app registration for cross tenancy/subcription acquisitions",source:"@site/docs/cado-response/deploy/azure/azure-cross-tenancy-subscriptions.md",sourceDirName:"cado-response/deploy/azure",slug:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions",permalink:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/azure/azure-cross-tenancy-subscriptions.md",tags:[],version:"current",lastUpdatedAt:1695843388,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:2,frontMatter:{title:"Cross Subscription and Tenancy",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/cado-response/deploy/azure/azure-deploy"},next:{title:"GCP Deployment (Beta)",permalink:"/cado-response/deploy/gcp/gcp-deploy"}},p={},c=[{value:"Setting up an app registration for cross tenancy/subcription acquisitions",id:"setting-up-an-app-registration-for-cross-tenancysubcription-acquisitions",level:3},{value:"Required role-asignments",id:"required-role-asignments",level:4},{value:"Registering credentials within Cado",id:"registering-credentials-within-cado",level:3}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure-cross-subscription-creation"},"Azure Cross Subscription Creation"),(0,i.kt)("h3",{id:"setting-up-an-app-registration-for-cross-tenancysubcription-acquisitions"},"Setting up an app registration for cross tenancy/subcription acquisitions"),(0,i.kt)("p",null,"To leverage cross Azure acquisitions, you need to create an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"},"Azure app registration"))," in the Azure tenancy you want to acquire resources from.  Follow the contents of this guide, and select the option for ",(0,i.kt)("inlineCode",{parentName:"p"},"Accounts in any organizational directory (Any Azure AD directory - Multitenant)"),". ",(0,i.kt)("img",{alt:"Azure App Registration",src:n(6160).Z,width:"1048",height:"516"}),"  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are only importing from a seperate subscription within the same tenancy as your Cado deployment, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Accounts in this organizational directory only")," as your app registration account type.")),(0,i.kt)("p",null,"You can then generate a client secret associated with this app registration using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-credentials"},"this guide")),", be sure to keep a note of it as you will need it to register the app with the Cado platform. ",(0,i.kt)("img",{alt:"Creating a client secret",src:n(8142).Z,width:"1606",height:"595"}),"\nBy default, when you create an app registration, Azure will also create an enterprise application alongside it with the same name.  You have to navigate to this, and under the ",(0,i.kt)("strong",{parentName:"p"},"properties")," sidebar, allow the option for ",(0,i.kt)("inlineCode",{parentName:"p"},"Enabled for users to sign-in"),".  Without enabling this option, cross tenancy/subscrition acquisitions will not work.\n",(0,i.kt)("img",{alt:"Azure Enterprise App Registration Permission",src:n(9614).Z,width:"1273",height:"443"})),(0,i.kt)("h4",{id:"required-role-asignments"},"Required role-asignments"),(0,i.kt)("p",null,"Once you have created your app registration, you will need to give it the required Azure role-assignments to allow it to access your Azure resources."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Azure management group you want to acquire from, this could be within the same, or a different Azure tenancy."),(0,i.kt)("li",{parentName:"ol"},"Select your management group and go to the Access control (IAM) permissions for it. ",(0,i.kt)("img",{alt:"Adding IAM permissions",src:n(6395).Z,width:"1357",height:"687"})),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Add role assignment")," and add the following role-assignments for your app registration: ",(0,i.kt)("img",{alt:"Adding IAM permissions to app registration",src:n(5342).Z,width:"1900",height:"802"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Storage Account Contributor"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Disk Snapshot Contributor"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Virtual Machine Contributor"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Monitoring Contributor"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Azure Kubernetes Service Cluster Admin Role"),".")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Search for your app registration name under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select members")," prompt.")),(0,i.kt)("p",null,"With these credentials in place, you are able to register the app with Cado."),(0,i.kt)("h3",{id:"registering-credentials-within-cado"},"Registering credentials within Cado"),(0,i.kt)("p",null,"Once you have created the app registration, you will be able to register the credentials within Cado using the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the to the settings page and choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"Cloud")," option."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Azure")," tab and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Azure Credentials"),". ",(0,i.kt)("img",{alt:"Azure Credentials Page",src:n(5755).Z,width:"1916",height:"871"})),(0,i.kt)("li",{parentName:"ol"},"Using the information generated during the the app registration setup, fill-in the required fields with the appropriate information and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Submit"),".  ",(0,i.kt)("strong",{parentName:"li"},"Use the subscription ID you assigned app-registration permissions for"),". ",(0,i.kt)("img",{alt:"Azure Credentials Insertion Page",src:n(7542).Z,width:"826",height:"737"}),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Cloud ID")," is only used to assign a name to the added credentials, it can be any memorable name of your choosing.")),"Some of the information you will need is on the Azure app registration page, shown below: ",(0,i.kt)("img",{alt:"Azure App Registration Page",src:n(6417).Z,width:"1008",height:"552"}))),(0,i.kt)("p",null,'Set the Cloud ID as a name you will recognize, e.g. "AzureCrossAccount".\nYou can find the Tenant ID under Azure Active Directory.\nThe Subscription ID is on the Overview Tab of your Subscription.\nThe Client ID is the Client ID of the application, found on the Properties tab of the Enterprise Application you created earlier.\nThe Client Secret is from the the first step above.'),(0,i.kt)("p",null,"The credentials are now ready to use within Cado.  Go to an Azure import and select the credential you wish to use from the dropdown in the top left of the import page. ",(0,i.kt)("img",{alt:"Using Custom Azure Credentials",src:n(7194).Z,width:"1890",height:"467"}),"  You are now able to import resources managed by other tenants and or subscriptions as normal."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you encounter an error when attempting to acquire a resource across Azure accounts or subscriptions, verify that a typo has not been made during addition, or if the wrong information has been entered in the wrong field.")))}u.isMDXComponent=!0},5342:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-adding-permissions-to-app-registration-91d7323c8ba189612ae5ea3fbabbd66d.png"},6395:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-adding-subscription-permissions-e2146bdc5ec4876758142af7a70bbe9f.png"},6417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-app-registration-info-14372ffdbbc2f89883de3e5abc64801b.png"},8142:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-creating-client-secret-03828e236f7cf994e5a59b1679a09140.png"},5755:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-creds-page-ab360a7783dc13e30b64649ce80ad5fe.png"},9614:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-enterprise-app-permission-6a7d1aeb3be81574d65c00d1a9ff6e49.png"},7542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-insert-custom-creds-ac198c8ff6e0477c840d19eb85e21380.png"},6160:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-registering-app-2dd0987baae6d76b0eb998ec283da27e.png"},7194:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/azure-using-custom-credentials-4b431d8630ae3b3a3945aab6f0fa028c.png"}}]);