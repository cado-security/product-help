"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||o;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"GCP Deployment (Beta)",hide_title:!0,sidebar_position:1},l=void 0,i={unversionedId:"cado-response/deploy/gcp/gcp-deploy",id:"cado-response/deploy/gcp/gcp-deploy",title:"GCP Deployment (Beta)",description:"GCP Deployment Overview",source:"@site/docs/cado-response/deploy/gcp/gcp-deploy.md",sourceDirName:"cado-response/deploy/gcp",slug:"/cado-response/deploy/gcp/gcp-deploy",permalink:"/cado-response/deploy/gcp/gcp-deploy",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/gcp/gcp-deploy.md",tags:[],version:"current",lastUpdatedAt:1697122741,formattedLastUpdatedAt:"Oct 12, 2023",sidebarPosition:1,frontMatter:{title:"GCP Deployment (Beta)",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cross Subscription and Tenancy",permalink:"/cado-response/deploy/azure/azure-cross-tenancy-subscriptions"},next:{title:"GCP Settings",permalink:"/cado-response/deploy/gcp/gcp-settings"}},p={},c=[{value:"GCP Deployment Overview",id:"gcp-deployment-overview",level:2},{value:"GCP Terraform Script",id:"gcp-terraform-script",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gcp-deployment-overview"},"GCP Deployment Overview"),(0,r.kt)("p",null,"You can deploy the Cado platform within your GCP cloud environment via a Terraform Script. When you deploy the platform, it creates its own isolated network in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes."),(0,r.kt)("h2",{id:"gcp-terraform-script"},"GCP Terraform Script"),(0,r.kt)("p",null,"To set up Cado in GCP you can deploy via our Terraform script.  The Terraform script automates the process of configuring the platform stack.\nIf you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive the following pieces of information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- a link to the Cado GCP image\n- the latest Cado Terraform module (gcp.zip) for deploying into GCP\n")),(0,r.kt)("p",null,"If you have not received the above items, reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cadosecurity.com"},"sales@cadosecurity.com")," for more details.  Once you receive them, continue on to the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"Install Terraform")),", if you have not already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://cloud.google.com/sdk/docs/install"},"Install GCloud CLI")),", if you have not already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a project and generate some service account credentials for the project, exporting the credentials.json. The service account will need to have the following permissions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"roles/compute.admin"),(0,r.kt)("li",{parentName:"ul"},"roles/iam.serviceAccountAdmin"),(0,r.kt)("li",{parentName:"ul"},"roles/storage.admin"),(0,r.kt)("li",{parentName:"ul"},"roles/file.editor"),(0,r.kt)("li",{parentName:"ul"},"roles/iam.roleAdmin"),(0,r.kt)("li",{parentName:"ul"},"roles/iam.securityAdmin"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the following ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/apis/library"},"APIs"))," are enabled in the project:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/compute.googleapis.com"},"Compute Engine"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/cloudbuild.googleapis.com"},"Cloud Build"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/file.googleapis.com"},"Cloud Filestore"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/secretmanager.googleapis.com"},"Secret Manager"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com"},"Cloud Resource Manager"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/iamcredentials.googleapis.com"},"IAM Service Account Credentials"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/marketplace/product/google/storage.googleapis.com"},"Cloud Storage"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud auth activate-service-account --key-file <key_file>")," where key_file is the path to your GCP service account credentials.json. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"gcloud config set project <project_id>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract gcp.zip This is the ZIP that was provided by Cado Sales.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change directories into gcp/ which was extracted in the previous step.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Customize the file ",(0,r.kt)("inlineCode",{parentName:"p"},"gcpVars.tfvars")," by filling in values:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unique_name")),(0,r.kt)("td",{parentName:"tr",align:null},"A string to ensure that resources created by Cado are unique"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cado"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credentials_file")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to your GCP service account credentials json"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"../credentials.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project_id")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the project Cado will be deployed into"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cado-12839"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:null},"The region which Cado will be deployed to"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"us-east1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"The link of the image provided by Cado"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://www.googleapis.com/compute/v1/projects/cado-public/global/images/cadoresponse-2-8-0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:null},"Tags to be applied to your Cado instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{tag1 = "cado-test"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vm_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of main instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n2d-standard-8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vol_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of main instance local disk in GB"),(0,r.kt)("td",{parentName:"tr",align:null},"This value is dependent on the amount of data you will be processing into the Cado platform. Please speak with the sales or support team for proper sizing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allowed_ips")),(0,r.kt)("td",{parentName:"tr",align:null},"List of incoming IPs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[\u201c1.2.3.6/32\u201d]"))))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," We recommend a minimum setting of 500GB for ",(0,r.kt)("inlineCode",{parentName:"p"},"vol_size"),". The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy by running the following commands in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"gcp/"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform plan"),".  Once you confirm the plan looks correct, you can then run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply -var-file=gcpVars.tfvars"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find your Cado instance in the Compute Engine portal, navigate to its public IP address in the browser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login with:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username: admin"),(0,r.kt)("li",{parentName:"ul"},"Password: <instance_id> (found in the Compute Engine console for your instance e.g. 8784481508256766876)")))))}d.isMDXComponent=!0}}]);