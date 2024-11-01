"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5546],{1019:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var n=o(5893),i=o(1151);const c={title:"Set-up GCP for collection of data",hide_title:!0,sidebar_position:2},s="How to set up GCP for collection of data by Cado",r={id:"cado/deploy/gcp/gcp-settings",title:"Set-up GCP for collection of data",description:"You can acquire compute and storage resources from GCP with the Cado platform by",source:"@site/docs/cado/deploy/gcp/gcp-settings.md",sourceDirName:"cado/deploy/gcp",slug:"/cado/deploy/gcp/gcp-settings",permalink:"/cado/deploy/gcp/gcp-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/deploy/gcp/gcp-settings.md",tags:[],version:"current",lastUpdatedAt:1730460513,formattedLastUpdatedAt:"Nov 1, 2024",sidebarPosition:2,frontMatter:{title:"Set-up GCP for collection of data",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GCP Terraform deployment",permalink:"/cado/deploy/gcp/gcp-deploy"},next:{title:"Endpoint access",permalink:"/cado/deploy/gcp/endpoints"}},a={},l=[{value:"Setting up the Primary Google Project for Cado collection",id:"setting-up-the-primary-google-project-for-cado-collection",level:2},{value:"The Cado Role",id:"the-cado-role",level:3},{value:"Enabling the Cloud Build API for the project",id:"enabling-the-cloud-build-api-for-the-project",level:3},{value:"Defining a bucket for the Primary GCP Project",id:"defining-a-bucket-for-the-primary-gcp-project",level:3},{value:"Setting up a Service Account in Primary GCP Project",id:"setting-up-a-service-account-in-primary-gcp-project",level:2},{value:"Required Access",id:"required-access",level:3},{value:"Getting GCP Credentials",id:"getting-gcp-credentials",level:3},{value:"Service Account Credentials",id:"service-account-credentials",level:4},{value:"Workload Identity Federation",id:"workload-identity-federation",level:4},{value:"Entering Settings",id:"entering-settings",level:2},{value:"Collecting from multiple GCP Projects",id:"collecting-from-multiple-gcp-projects",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-set-up-gcp-for-collection-of-data-by-cado",children:"How to set up GCP for collection of data by Cado"}),"\n",(0,n.jsx)(t.p,{children:"You can acquire compute and storage resources from GCP with the Cado platform by"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Setting up the primary GCP project for Cado collection"}),"\n",(0,n.jsx)(t.li,{children:"Setting up a Service Account in GCP"}),"\n",(0,n.jsx)(t.li,{children:"Entering credentials into Cado"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The below guide walks through this process."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["This setup can be automated using our ",(0,n.jsx)(t.a,{href:"/cado/deploy/gcp/gcp-auto-setup",children:"GCP Automated Setup"})]})}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-the-primary-google-project-for-cado-collection",children:"Setting up the Primary Google Project for Cado collection"}),"\n",(0,n.jsx)(t.p,{children:"In order to set up the project for Cado collection you need to"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Enable the Cloud Build API for the project"}),"\n",(0,n.jsx)(t.li,{children:"Define a bucket for the Primary GCP Project where images will be stored and imported into Cado."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsxs)(t.strong,{children:["Note - if you are importing from more than one Google project you will need to designate one of those projects as the Primary GCP Project and ",(0,n.jsx)(t.a,{href:"/cado/deploy/gcp/gcp-settings#defining-a-bucket-for-the-primary-gcp-project",children:"create a bucket in that project"})," to enable collection across the multiple Google projects"]})})}),"\n",(0,n.jsx)(t.h3,{id:"the-cado-role",children:"The Cado Role"}),"\n",(0,n.jsxs)(t.p,{children:["To appropriately scope a service account for Cado to operate, creating a custom GCP role allows specifying individual permissions. To achieve this, navigate to the ",(0,n.jsx)(t.strong,{children:"Role"})," section under the ",(0,n.jsx)(t.strong,{children:"IAM and Admin"})," tab. Create a custom role and add the following permissions:"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If you're deploying into GCP, the Terraform script provided by Cado should have already created this role for you, prefixed with ",(0,n.jsx)(t.strong,{children:"myCadoResponseRole"}),"."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'    // Instance Acquisition\n    "cloudbuild.builds.get",\n    "cloudbuild.builds.create",\n    "compute.disks.get",\n    "compute.disks.use",\n    "compute.disks.list",\n    "compute.disks.useReadOnly",\n    "compute.globalOperations.get",\n    "compute.images.create",\n    "compute.instances.get",\n    "compute.instances.list",\n    "compute.images.delete",\n    "compute.images.get",\n    "compute.instances.getSerialPortOutput",\n\n    // Compute Management\n    "compute.disks.create",\n    "compute.disks.setLabels",\n    "compute.images.useReadOnly",\n    "compute.instances.attachDisk",\n    "compute.instances.create",\n    "compute.instances.delete",\n    "compute.instances.setLabels",\n    "compute.instances.setMetadata",\n    "compute.instances.setServiceAccount",\n    "compute.machineTypes.list",\n    "compute.machineTypes.get",\n    "compute.regions.get",\n    "compute.subnetworks.use",\n    "compute.subnetworks.useExternalIp",\n    "compute.networks.get",\n    "compute.networks.list",\n    "compute.zones.list",\n    "compute.zoneOperations.get",\n\n\n    // Platform Update\n    "compute.addresses.use",\n    "compute.instances.addAccessConfig",\n    "compute.instances.detachDisk",\n    "compute.instances.deleteAccessConfig",\n\n    // GKE Acquisition\n    "container.clusters.get",\n    "container.clusters.list",\n    "container.pods.exec",\n    "container.pods.get",\n    "container.pods.list",\n\n    // IAM & Authentication\n    "iam.serviceAccounts.actAs",\n    "iam.serviceAccounts.create",\n    "iam.serviceAccounts.enable",\n    "iam.serviceAccounts.get",\n    "iam.serviceAccounts.getAccessToken",\n    "iam.serviceAccounts.getIamPolicy",\n    "iam.serviceAccounts.implicitDelegation",\n    "iam.serviceAccounts.list",\n    "iam.serviceAccounts.signBlob",\n\n    // Project Management\n    "resourcemanager.projects.get",\n    "compute.projects.get",\n\n    // Secret Management\n    "secretmanager.versions.access",\n    "secretmanager.versions.add",\n    "secretmanager.secrets.create",\n\n    // Bucket Acquisition\n    "storage.buckets.get",\n    "storage.buckets.list",\n    "storage.objects.create",\n    "storage.objects.delete",\n    "storage.objects.get",\n    "storage.objects.list",\n'})}),"\n",(0,n.jsx)(t.p,{children:"If you'll be wanting to use this Role across multiple projects, you can create it at the Organization level- this is required if you'll be wanting to acquire assets from multiple projects under one service account."}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"If deploying into GCP, this can be done easily if the Terraform-created role already exists by using the command:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud iam roles describe CUSTOM_ROLE_ID --project=YOUR_PROJECT_ID --format=yaml > cado-organization-role.yaml\n"})}),(0,n.jsx)(t.p,{children:"This will output the role to a yaml file, which can be edited to serve as a template for the new organization role. To edit the template for org use delete the 'name' and 'etag' sections, as these will be project specific, then use the command:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gcloud iam roles create CUSTOM_ORG_ROLE_ID --organization=YOUR_ORG_ID --file=cado-organization-role.yaml\n"})})]}),"\n",(0,n.jsx)(t.h3,{id:"enabling-the-cloud-build-api-for-the-project",children:"Enabling the Cloud Build API for the project"}),"\n",(0,n.jsxs)(t.p,{children:["To enable Cloud Build API for a Google project, see the documentation at ",(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/cloud-build/",children:"https://console.cloud.google.com/cloud-build/"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Once Cloud Build is enabled, a principal for Compute Engine will have been created in ",(0,n.jsx)(t.strong,{children:"'IAM and Admin > IAM'"})," called ",(0,n.jsx)(t.code,{children:"xxxxxxxxxxxx-compute@developer.gserviceaccount.com"}),", we also need this principal to have the custom role we created in the previous step ",(0,n.jsx)(t.strong,{children:"'Customer -> <role_name>'"}),". Do this by editing the principal with the pen icon on the right and selecting the appropriate role."]}),"\n",(0,n.jsx)(t.h3,{id:"defining-a-bucket-for-the-primary-gcp-project",children:"Defining a bucket for the Primary GCP Project"}),"\n",(0,n.jsxs)(t.p,{children:["Create a bucket in the project that will store the captured raw data from across all GCP projects. For more information ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"https://cloud.google.com/storage/docs/creating-buckets"})]}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-a-service-account-in-primary-gcp-project",children:"Setting up a Service Account in Primary GCP Project"}),"\n",(0,n.jsx)(t.p,{children:"Next, you need to set up a Service Account in GCP. For information on how to do this more see:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",children:"https://console.cloud.google.com/iam-admin/serviceaccounts"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/service-accounts",children:"https://cloud.google.com/iam/docs/service-accounts"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"required-access",children:"Required Access"}),"\n",(0,n.jsx)(t.p,{children:"Both the Cado service account and the service account for the Cloud API need the custom role's permissions 'Custom -> <role_name>' role:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Custom Role",src:o(6486).Z+"",width:"1440",height:"958"})}),"\n",(0,n.jsxs)(t.p,{children:["To import GKE containers, the Cado service account also needs the ",(0,n.jsx)(t.code,{children:"iam.serviceAccounts.implicitDelegation"})," IAM permission."]}),"\n",(0,n.jsx)(t.h3,{id:"getting-gcp-credentials",children:"Getting GCP Credentials"}),"\n",(0,n.jsx)(t.p,{children:"When you add credentials to Cado you are creating a mapping from a set of credentials (in GCP json format) to a project name."}),"\n",(0,n.jsx)(t.p,{children:"Any time a user then attempts to access that particular GCP project name, the credentials that you registered in settings will be used. This keeps non-admin users from having to managing credentials themselves, while also allowing access to as many different GCP projects as you want."}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to achieve this:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Service Account Credentials"})," - this is a simpler but less secure approach. ",(0,n.jsx)(t.em,{children:"Note - Cado running in Azure only supports the use of Service Account Credentials"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Workload Identity Federation"})," - This requires more expertise but is the recommended, more secure approach."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"service-account-credentials",children:"Service Account Credentials"}),"\n",(0,n.jsx)(t.p,{children:"The simplest method to add GCP credentials to Cado is to use a service account, which will give you a permanent key. These are very sensitive credentials but they are easy to manage and simple to set up. Adding GCP credentials for service accounts is supported by Cado when deployed in both AWS and Azure."}),"\n",(0,n.jsx)(t.p,{children:"GCP credentials come in a json format that wraps around a \u2018regular\u2019 credential. It can be treated as functionally no different to how you would handle any type of password or key."}),"\n",(0,n.jsxs)(t.p,{children:["For example, a service account key would come in a structure such as the below. The \u2018credential\u2019 is a literal RSA key as a string in the ",(0,n.jsx)(t.code,{children:"private_key"})," field, all other fields are metadata for the benefit of the application that uses it:"]}),"\n",(0,n.jsxs)(t.p,{children:['{\n"type": "service_account",\n"project_id": "cool-project",\n"private_key_id": "22c14ac5b63...",\n"private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKg...wggSkA.\\n-----END PRIVATE KEY-----\\n",\n"client_email": "cool-project.iam.gserviceaccount.com",\n"client_id": "...",\n"auth_uri": "',(0,n.jsx)(t.a,{href:"https://accounts.google.com/o/oauth2/auth",children:"https://accounts.google.com/o/oauth2/auth"}),'",\n"token_uri": "',(0,n.jsx)(t.a,{href:"https://oauth2.googleapis.com/token",children:"https://oauth2.googleapis.com/token"}),'",\n"auth_provider_x509_cert_url": "',(0,n.jsx)(t.a,{href:"https://www.googleapis.com/oauth2/v1/certs",children:"https://www.googleapis.com/oauth2/v1/certs"}),'",\n"client_x509_cert_url": "..."\n}']}),"\n",(0,n.jsx)(t.h4,{id:"workload-identity-federation",children:"Workload Identity Federation"}),"\n",(0,n.jsxs)(t.p,{children:["The GCP recommended best practice, is to use Workload Identity Federation, which allows credentials from another app to impersonate a GCP account. ",(0,n.jsx)(t.em,{children:"Note: Cado running in Azure does not support Workload Identity Federation credentials to import from GCP"})]}),"\n",(0,n.jsx)(t.p,{children:"Workload Identity Federation is more secure since the credentials are nothing but metadata telling the app where to go, while the validation is handled on the server side. Adding GCP credentials via Workload Identity Federation is currently only supported for Cado when deployed in AWS."}),"\n",(0,n.jsxs)(t.p,{children:["Rather than give out the key to a service account, you instead register the permission with GCP to allow AWS credentials for account ",(0,n.jsx)(t.code,{children:"123"})," to act as if they were the given GCP service account."]}),"\n",(0,n.jsxs)(t.p,{children:["You can download existing credentials by clicking the display name of the ",(0,n.jsx)(t.strong,{children:"Identity Pool > Connected Service Accounts > Download"}),", which will then ask you which identity\u2019s credentials you would like to download."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsxs)(t.p,{children:['{\n"type": "external_account",\n"audience": "//iam.googleapis.com/projects/...",\n"subject_token_type": "urn:ietf:params:aws:token-type',":aws4_request",'",\n"service_account_impersonation_url": "',(0,n.jsx)(t.a,{href:"https://...ount.comgenerateAccessToken",children:"https://...ount.comgenerateAccessToken"}),'",','\n"token_url": "',(0,n.jsx)(t.a,{href:"https://sts.googleapis.com/v1/token",children:"https://sts.googleapis.com/v1/token"}),'",\n"credential_source": {\n"environment_id": "...",\n"region_url": "',(0,n.jsx)(t.a,{href:"http://169.254.169.254/latest/meta-data/placement/availability-zone",children:"http://169.254.169.254/latest/meta-data/placement/availability-zone"}),'",\n"url": "',(0,n.jsx)(t.a,{href:"http://169.254.169.254/latest/meta-data/iam/security-credentials",children:"http://169.254.169.254/latest/meta-data/iam/security-credentials"}),'",\n"regional_cred_verification_url": "',(0,n.jsx)(t.a,{href:"https://sts.%7Bregion%7D.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15",children:"https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"}),'"\n}\n}']}),"\n",(0,n.jsx)(t.p,{children:"For more information about GCP Workload Identity Federation see:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://console.cloud.google.com/iam-admin/workload-identity-pools",children:"https://console.cloud.google.com/iam-admin/workload-identity-pools"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cloud.google.com/iam/docs/workload-identity-federation",children:"https://cloud.google.com/iam/docs/workload-identity-federation"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"entering-settings",children:"Entering Settings"}),"\n",(0,n.jsxs)(t.p,{children:["You can add GCP Credentials to Cado in the ",(0,n.jsx)(t.strong,{children:"Settings > Cloud > GCP"}),' page.\nYou will be asked for a "GCP Project Name" and the "GCP Credentials". These credentials will be a JSON either directly containing the service account credentials, or the Workload Identity Federation credentials']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"GCP Credentials",src:o(345).Z+"",width:"537",height:"305"})}),"\n",(0,n.jsx)(t.h2,{id:"collecting-from-multiple-gcp-projects",children:"Collecting from multiple GCP Projects"}),"\n",(0,n.jsxs)(t.p,{children:["After setting up your Primary GCP Project, to collect from multiple GCP projects follow the instructions in ",(0,n.jsx)(t.a,{href:"/cado/deploy/gcp/gcp-cross-project",children:"GCP Cross-Project Setup"})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},345:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gcp-credentials-816d3bf0d3bb101ce25c109263ae445e.png"},6486:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gcp-custom-role-f3f82ab1a1055d898f01c12abf8efcc9.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var n=o(7294);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);