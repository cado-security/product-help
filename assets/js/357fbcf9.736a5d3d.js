"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2979],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"GCP Import Settings",hide_title:!0,sidebar_position:2},c=void 0,l={unversionedId:"cado-response/settings/gcp-settings",id:"cado-response/settings/gcp-settings",title:"GCP Import Settings",description:"GCP Import Setings",source:"@site/docs/cado-response/settings/gcp-settings.md",sourceDirName:"cado-response/settings",slug:"/cado-response/settings/gcp-settings",permalink:"/cado-response/settings/gcp-settings",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/settings/gcp-settings.md",tags:[],version:"current",lastUpdatedAt:1659964927,formattedLastUpdatedAt:"Aug 8, 2022",sidebarPosition:2,frontMatter:{title:"GCP Import Settings",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General Settings",permalink:"/cado-response/settings/general-settings"},next:{title:"Overview & API",permalink:"/cado-response/integrations/api-overview"}},d={},p=[{value:"GCP Import Setings",id:"gcp-import-setings",level:2},{value:"Entering Settings",id:"entering-settings",level:2},{value:"Getting GCP Credentials",id:"getting-gcp-credentials",level:2},{value:"Types of Credentials",id:"types-of-credentials",level:3},{value:"Service Accounts",id:"service-accounts",level:4},{value:"Workload Identity Federation",id:"workload-identity-federation",level:4}],u={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gcp-import-setings"},"GCP Import Setings"),(0,a.kt)("p",null,"You can acquire compute and storage resources from GCP with Cado Response by configuring Cado Response with GCP credentials. The below guide walks through this process."),(0,a.kt)("h2",{id:"entering-settings"},"Entering Settings"),(0,a.kt)("p",null,"You can add GCP Credentials to Cado Response in the ",(0,a.kt)("strong",{parentName:"p"},"Settings > Cloud > GCP"),' page.\nYou will be asked for a "GCP Project Name" and the "GCP Credentials".'),(0,a.kt)("h2",{id:"getting-gcp-credentials"},"Getting GCP Credentials"),(0,a.kt)("p",null,"When you add credentials under Cado Response settings you are creating a mapping from a set of credentials (in GCP json format) to a project name."),(0,a.kt)("p",null,"Any time a user then attempts to access that particular GCP project name, the credentials that you registered in settings will be used. This keeps non-admin users from having to managing credentials themselves, while also alllowing access to as many different GCP projects as you want."),(0,a.kt)("p",null,"GCP credentials come in a json format that wraps around a \u2018regular\u2019 credential, for the benefit of the many different ways that a credential may be used on their end. It can be treated as functionally no different to how you would handle any type of password or key."),(0,a.kt)("p",null,"For example, a service account key might come in a structure such as the below. The \u2018credential\u2019 is a literal RSA key as a string in the ",(0,a.kt)("inlineCode",{parentName:"p"},"private_key")," field, all other fields are metadata for the benefit of the application that uses it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  {\n  "type": "service_account",\n  "project_id": "cool-project",\n  "private_key_id": "22c14ac5b63...",\n  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKg...wggSkA.\\n-----END PRIVATE KEY-----\\n",\n  "client_email": "cool-project.iam.gserviceaccount.com",\n  "client_id": "...",\n  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n  "token_uri": "https://oauth2.googleapis.com/token",\n  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n  "client_x509_cert_url": "..."\n}\n')),(0,a.kt)("h3",{id:"types-of-credentials"},"Types of Credentials"),(0,a.kt)("h4",{id:"service-accounts"},"Service Accounts"),(0,a.kt)("p",null,"The simplest method to add GCP credentials to Cado Response is to use a service account, which will give you a permanent key. Naturally these are very sensitive but they are easy to manage and simple to set up. Adding GCP credntials for service accounts is supported by Cado Response when deployed in both AWS and Azure."),(0,a.kt)("p",null,"For more see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"https://console.cloud.google.com/iam-admin/serviceaccounts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts"},"https://cloud.google.com/iam/docs/service-accounts"))),(0,a.kt)("h4",{id:"workload-identity-federation"},"Workload Identity Federation"),(0,a.kt)("p",null,"The GCP recommended best practice, however, is to use Workload Identity Federation, which allows credentials from another app to impersonate a GCP account. Workload Identity Federation is more secure since the credentials are nothing but metadata telling the app where to go, while the validation is handled on the server side. Adding GCP credentials via Workload Identity Federation is currently only supported for Cado Response when deployed in AWS."),(0,a.kt)("p",null,"Rather than give out the key to a service account, you instead register the permission with GCP to allow AWS credentials for account ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," to act as if they were the given GCP service account."),(0,a.kt)("p",null,"You can download existing credentials by clicking the display name of the ",(0,a.kt)("strong",{parentName:"p"},"Identity Pool > Connected Service Accounts > Download"),", which will then ask you which identity\u2019s credentials you would like to download."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "external_account",\n  "audience": "//iam.googleapis.com/projects/...",\n  "subject_token_type": "urn:ietf:params:aws:token-type:aws4_request",\n  "service_account_impersonation_url": "https://...ount.comgenerateAccessToken",\n  "token_url": "https://sts.googleapis.com/v1/token",\n  "credential_source": {\n    "environment_id": "...",\n    "region_url": "http://169.254.169.254/latest/meta-data/placement/availability-zone",\n    "url": "http://169.254.169.254/latest/meta-data/iam/security-credentials",\n    "regional_cred_verification_url": "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"\n  }\n}\n')),(0,a.kt)("p",null,"For more see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/workload-identity-pools"},"https://console.cloud.google.com/iam-admin/workload-identity-pools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/workload-identity-federation"},"https://cloud.google.com/iam/docs/workload-identity-federation"))))}g.isMDXComponent=!0}}]);