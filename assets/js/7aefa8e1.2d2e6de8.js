"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4084],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(o),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3762:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={title:"Overview",hide_title:!0,sidebar_position:1},i="Setting up Import from GCP",c={unversionedId:"cado-response/deploy/gcp/gcp-settings",id:"cado-response/deploy/gcp/gcp-settings",title:"Overview",description:"You can acquire compute and storage resources from GCP with the Cado platform by",source:"@site/docs/cado-response/deploy/gcp/gcp-settings.md",sourceDirName:"cado-response/deploy/gcp",slug:"/cado-response/deploy/gcp/gcp-settings",permalink:"/cado-response/deploy/gcp/gcp-settings",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/gcp/gcp-settings.md",tags:[],version:"current",lastUpdatedAt:1686747959,formattedLastUpdatedAt:"Jun 14, 2023",sidebarPosition:1,frontMatter:{title:"Overview",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cross Subscription and Tenancy",permalink:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions"},next:{title:"Cross-Project Setup",permalink:"/cado-response/deploy/gcp/gcp-cross-project"}},l={},s=[{value:"Setting up the Primary Google Project for Cado collection",id:"setting-up-the-primary-google-project-for-cado-collection",level:2},{value:"Creating a Cado Role",id:"creating-a-cado-role",level:3},{value:"Enabling the Cloud Build API for the project",id:"enabling-the-cloud-build-api-for-the-project",level:3},{value:"Defining a bucket for the Primary GCP Project",id:"defining-a-bucket-for-the-primary-gcp-project",level:3},{value:"Setting up a Service Account in Primary GCP Project",id:"setting-up-a-service-account-in-primary-gcp-project",level:2},{value:"Required Access",id:"required-access",level:3},{value:"Getting GCP Credentials",id:"getting-gcp-credentials",level:3},{value:"Service Account Credentials",id:"service-account-credentials",level:4},{value:"Workload Identity Federation",id:"workload-identity-federation",level:4},{value:"Entering Settings",id:"entering-settings",level:2},{value:"Collecting from multiple GCP Projects",id:"collecting-from-multiple-gcp-projects",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-import-from-gcp"},"Setting up Import from GCP"),(0,r.kt)("p",null,"You can acquire compute and storage resources from GCP with the Cado platform by "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Setting up the primary GCP project for Cado collection"),(0,r.kt)("li",{parentName:"ol"},"Setting up a Service Account in GCP"),(0,r.kt)("li",{parentName:"ol"},"Entering credentials into Cado")),(0,r.kt)("p",null,"The below guide walks through this process."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This setup can be automated using our ",(0,r.kt)("a",{parentName:"p",href:"/cado-response/deploy/gcp/gcp-auto-setup"},"GCP Automated Setup"))),(0,r.kt)("h2",{id:"setting-up-the-primary-google-project-for-cado-collection"},"Setting up the Primary Google Project for Cado collection"),(0,r.kt)("p",null,"In order to set up the project for Cado collection you need to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable the Cloud Build API for the project "),(0,r.kt)("li",{parentName:"ul"},"Define a bucket for the Primary GCP Project where images will be stored and imported into Cado.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note - if you are importing from more than one Google project you will need to designate one of those projects as the Primary GCP Project and ",(0,r.kt)("a",{parentName:"em",href:"/cado-response/deploy/gcp/gcp-settings#defining-a-bucket-for-the-primary-gcp-project"},"create a bucket in that project")," to enable collection across the multiple Google projects"))),(0,r.kt)("h3",{id:"creating-a-cado-role"},"Creating a Cado Role"),(0,r.kt)("p",null,"To appriopriatly scope a service account for Cado to operate, creating a custom GCP role allows specifying individual permissions. To achieve this, navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Role")," section un the ",(0,r.kt)("strong",{parentName:"p"},"IAM and Admin")," tab. Create a custom role and add the following permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  cloudbuild.builds.create\n  cloudbuild.builds.get\n  compute.disks.get\n  compute.disks.useReadOnly\n  compute.globalOperations.get\n  compute.images.create\n  compute.instances.get\n  compute.instances.list\n  container.clusters.get\n  container.clusters.list\n  container.pods.exec\n  container.pods.get\n  container.pods.list\n  iam.serviceAccounts.getAccessToken\n  iam.serviceAccounts.implicitDelegation\n  resourcemanager.projects.get\n  storage.buckets.get\n  storage.buckets.list\n  storage.objects.get\n  storage.objects.list\n")),(0,r.kt)("p",null,"If you'll be wanting to use this Role across multiple projects, you can create it at the Organization level- this is required if you'll be wanting to acquire assets from multiple projects under one service account."),(0,r.kt)("h3",{id:"enabling-the-cloud-build-api-for-the-project"},"Enabling the Cloud Build API for the project"),(0,r.kt)("p",null,"To enable Cloud Build API for a Google project, see the documentation at ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/cloud-build/"},"https://console.cloud.google.com/cloud-build/"),"."),(0,r.kt)("p",null,"Once Cloud Build is enabled, a principal will have been created in ",(0,r.kt)("strong",{parentName:"p"},"'IAM and Admin > IAM'")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"xxxxxxxxxxxx@cloudbuild.gserviceaccount.com"),", we also need this principal to have the custom role we created in the previous step ",(0,r.kt)("strong",{parentName:"p"},"'Customer -> <role_name>'"),". Do this by editing the principal with the pen icon on the right and selecting the appropriate role."),(0,r.kt)("h3",{id:"defining-a-bucket-for-the-primary-gcp-project"},"Defining a bucket for the Primary GCP Project"),(0,r.kt)("p",null,"Create a bucket in the project that will store the captured raw data from across all GCP projects. For more information ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"https://cloud.google.com/storage/docs/creating-buckets")),(0,r.kt)("h2",{id:"setting-up-a-service-account-in-primary-gcp-project"},"Setting up a Service Account in Primary GCP Project"),(0,r.kt)("p",null,"Next, you need to set up a Service Account in GCP. For information on how to do this more see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"https://console.cloud.google.com/iam-admin/serviceaccounts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts"},"https://cloud.google.com/iam/docs/service-accounts"))),(0,r.kt)("h3",{id:"required-access"},"Required Access"),(0,r.kt)("p",null,"Both the Cado service account and the service account for the Cloud API need the custom role's permissions 'Custom -> <role_name>' role:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom Role",src:o(6486).Z,width:"1440",height:"958"})),(0,r.kt)("p",null,"To import GKE containers, the Cado service account also needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"iam.serviceAccounts.implicitDelegation")," IAM permission."),(0,r.kt)("h3",{id:"getting-gcp-credentials"},"Getting GCP Credentials"),(0,r.kt)("p",null,"When you add credentials to Cado you are creating a mapping from a set of credentials (in GCP json format) to a project name."),(0,r.kt)("p",null,"Any time a user then attempts to access that particular GCP project name, the credentials that you registered in settings will be used. This keeps non-admin users from having to managing credentials themselves, while also alllowing access to as many different GCP projects as you want."),(0,r.kt)("p",null,"There are two ways to achieve this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Service Account Credentials")," - this is a simpler but less secure approach. ",(0,r.kt)("em",{parentName:"li"},"Note - Cado running in Azure only supports the use of Service Account Credentials")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Workload Identity Federation")," - This requires more expertise but is the recommended, more secure approach.")),(0,r.kt)("h4",{id:"service-account-credentials"},"Service Account Credentials"),(0,r.kt)("p",null,"The simplest method to add GCP credentials to Cado is to use a service account, which will give you a permanent key. These are very sensitive credentials but they are easy to manage and simple to set up. Adding GCP credentials for service accounts is supported by Cado when deployed in both AWS and Azure."),(0,r.kt)("p",null,"GCP credentials come in a json format that wraps around a \u2018regular\u2019 credential. It can be treated as functionally no different to how you would handle any type of password or key."),(0,r.kt)("p",null,"For example, a service account key would come in a structure such as the below. The \u2018credential\u2019 is a literal RSA key as a string in the ",(0,r.kt)("inlineCode",{parentName:"p"},"private_key")," field, all other fields are metadata for the benefit of the application that uses it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  {\n  "type": "service_account",\n  "project_id": "cool-project",\n  "private_key_id": "22c14ac5b63...",\n  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKg...wggSkA.\\n-----END PRIVATE KEY-----\\n",\n  "client_email": "cool-project.iam.gserviceaccount.com",\n  "client_id": "...",\n  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n  "token_uri": "https://oauth2.googleapis.com/token",\n  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n  "client_x509_cert_url": "..."\n}\n')),(0,r.kt)("h4",{id:"workload-identity-federation"},"Workload Identity Federation"),(0,r.kt)("p",null,"The GCP recommended best practice, is to use Workload Identity Federation, which allows credentials from another app to impersonate a GCP account. ",(0,r.kt)("em",{parentName:"p"},"Note: Cado running in Azure does not support Workload Identity Federation credentials to import from GCP")),(0,r.kt)("p",null,"Workload Identity Federation is more secure since the credentials are nothing but metadata telling the app where to go, while the validation is handled on the server side. Adding GCP credentials via Workload Identity Federation is currently only supported for Cado when deployed in AWS."),(0,r.kt)("p",null,"Rather than give out the key to a service account, you instead register the permission with GCP to allow AWS credentials for account ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," to act as if they were the given GCP service account."),(0,r.kt)("p",null,"You can download existing credentials by clicking the display name of the ",(0,r.kt)("strong",{parentName:"p"},"Identity Pool > Connected Service Accounts > Download"),", which will then ask you which identity\u2019s credentials you would like to download."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "external_account",\n  "audience": "//iam.googleapis.com/projects/...",\n  "subject_token_type": "urn:ietf:params:aws:token-type:aws4_request",\n  "service_account_impersonation_url": "https://...ount.comgenerateAccessToken",\n  "token_url": "https://sts.googleapis.com/v1/token",\n  "credential_source": {\n    "environment_id": "...",\n    "region_url": "http://169.254.169.254/latest/meta-data/placement/availability-zone",\n    "url": "http://169.254.169.254/latest/meta-data/iam/security-credentials",\n    "regional_cred_verification_url": "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"\n  }\n}\n')),(0,r.kt)("p",null,"For more information about GCP Workload Identity Federation see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/workload-identity-pools"},"https://console.cloud.google.com/iam-admin/workload-identity-pools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/workload-identity-federation"},"https://cloud.google.com/iam/docs/workload-identity-federation"))),(0,r.kt)("h2",{id:"entering-settings"},"Entering Settings"),(0,r.kt)("p",null,"You can add GCP Credentials to Cado in the ",(0,r.kt)("strong",{parentName:"p"},"Settings > Cloud > GCP"),' page.\nYou will be asked for a "GCP Project Name" and the "GCP Credentials". These credentials will be a JSON either directly containing the service account credentials, or the Workload Identity Federation credentials '),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GCP Credentials",src:o(345).Z,width:"537",height:"305"})),(0,r.kt)("h2",{id:"collecting-from-multiple-gcp-projects"},"Collecting from multiple GCP Projects"),(0,r.kt)("p",null,"After setting up your Primary GCP Project, to collect from multiple GCP projects follow the instructions in ",(0,r.kt)("a",{parentName:"p",href:"/cado-response/deploy/gcp/gcp-cross-project"},"GCP Cross-Project Setup")))}d.isMDXComponent=!0},345:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gcp-credentials-816d3bf0d3bb101ce25c109263ae445e.png"},6486:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gcp-custom-role-f3f82ab1a1055d898f01c12abf8efcc9.png"}}]);