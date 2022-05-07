"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[146],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"General Settings",hide_title:!0,sidebar_position:5},l="General Settings",p={unversionedId:"cado-response/settings/general-settings",id:"cado-response/settings/general-settings",title:"General Settings",description:"You can access the settings by clicking Settings on the left menu",source:"@site/docs/cado-response/settings/general-settings.md",sourceDirName:"cado-response/settings",slug:"/cado-response/settings/general-settings",permalink:"/cado-response/settings/general-settings",editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/settings/general-settings.md",tags:[],version:"current",lastUpdatedAt:1651940240,formattedLastUpdatedAt:"5/7/2022",sidebarPosition:5,frontMatter:{title:"General Settings",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced Search",permalink:"/cado-response/investigating/search"},next:{title:"Overview & API",permalink:"/cado-response/integrations/api-overview"}},c={},d=[{value:"Processing",id:"processing",level:3},{value:"Cloud",id:"cloud",level:3},{value:"Tagging Cado Response Resources",id:"tagging-cado-response-resources",level:4},{value:"Licensing",id:"licensing",level:3},{value:"Detections",id:"detections",level:3},{value:"Updates",id:"updates",level:3},{value:"Advanced",id:"advanced",level:3},{value:"API",id:"api",level:3},{value:"OAuth",id:"oauth",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-settings"},"General Settings"),(0,r.kt)("p",null,"You can access the settings by clicking ",(0,r.kt)("strong",{parentName:"p"},"Settings")," on the left menu"),(0,r.kt)("h3",{id:"processing"},"Processing"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Maximum Workers")," sets the maximum number of workers (AWS EC2 Instances) the system will start for processing. The platform will wait to launch new workers if this limit is exceeded. The default value is 20.  The platform will also back off and wait if the AWS limits for the maximum number of VCPUs in a region have been exceeded."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Worker Instance Size")," limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space.  "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In AWS, for most use cases, you should keep the Worker Instance Size set to a Storage Optimized instance, like an ",(0,r.kt)("inlineCode",{parentName:"p"},"i3.4xlarge")))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Worker Shutdown Wait")," is the number of seconds after a worker finishes processing a pipeline before it should shutdown. If nothing is set, the default is 5 minutes (300 seconds)."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Elastic Search Hostname")," sets where the data is stored. By default Cado Response connects to a database that is only accessible locally to the server, and for security purposes it is highly recommended you do not change this value."),(0,r.kt)("h3",{id:"cloud"},"Cloud"),(0,r.kt)("p",null,"These settings are used to authenticate against cloud providers."),(0,r.kt)("p",null,"An AWS Role is created at installation to authenticate against AWS. This is the recommended method of authentication. Optionally, you can set an ",(0,r.kt)("strong",{parentName:"p"},"AWS Access Key")," and ",(0,r.kt)("strong",{parentName:"p"},"AWS Secret Key")," to authenticate against AWS."),(0,r.kt)("h4",{id:"tagging-cado-response-resources"},"Tagging Cado Response Resources"),(0,r.kt)("p",null,"You also have the option to have workers tagged when they are launched.  This can be done by specifying the ",(0,r.kt)("strong",{parentName:"p"},"Tag Key")," and ",(0,r.kt)("strong",{parentName:"p"},"Tag Value")," which will be assigned when workers are launched."),(0,r.kt)("p",null,'If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform.'),(0,r.kt)("p",null,"If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.\nOr, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.\nPlease also note that you will have to run terraform apply again after saving these changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'variable "tags" {\n    type = map(string)\n    default = {}\n}\n')),(0,r.kt)("h3",{id:"licensing"},"Licensing"),(0,r.kt)("p",null,"In order to use Cado Response, you must upload a valid license.  "),(0,r.kt)("p",null,"If you have received a license file from your Sales representative, you can upload it by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging into your Cado Response instance"),(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Settings")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Licensing")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Select file"),", choose the license (json) file "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Upload"))),(0,r.kt)("p",null,"If you do not have a license, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cadosecurity.com"},"sales@cadosecurity.com")," "),(0,r.kt)("h3",{id:"detections"},"Detections"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"VirusTotal API Key")," is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Yara Rules")," text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado Response. Rules that match will trigger a ",(0,r.kt)("inlineCode",{parentName:"p"},"Malicious")," detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspicious")," detection."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Indicators of Compromise")," are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example \"Domain.com;A bad domain\""),(0,r.kt)("h3",{id:"updates"},"Updates"),(0,r.kt)("p",null,"These settings display and allow you to trigger an update of the Cado Response platfrom. "),(0,r.kt)("p",null,"For AWS, the default update mechanism requires the ability for the Cado Response instance to connect outbound to an AMI in the same region in which Cado Response is deployed.  For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. "),(0,r.kt)("p",null,"Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to Cado Response are user-initiated and will not be initiated automatically by Cado."),(0,r.kt)("h3",{id:"advanced"},"Advanced"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Memory Capture support is currently in beta. "))),(0,r.kt)("p",null,"Once enabled, there are two options for acquiring memory. To acquire memory from a running AWS EC2 instance, browse to ",(0,r.kt)("inlineCode",{parentName:"p"},"Import -> AWS -> EC2 -> Acquire")," you will see an ",(0,r.kt)("strong",{parentName:"p"},"Acquire Memory")," button.  It will take approximately 30 minutes for a small system to process - more for those with large amounts of memory.  Alternatively, you can perform a memory acquisition of a running on-premises Windows device by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Import > Memory Collection")," and running the pre-generated script on the host device."),(0,r.kt)("p",null,"Enabling ",(0,r.kt)("strong",{parentName:"p"},"Private IP Addresses for Workers")," will force workers in AWS to only have a Private IP Address, and no Public IP Address. If you do so, you will need to add ",(0,r.kt)("a",{parentName:"p",href:"https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/"},"VPC endpoints")," or add proper VPC routing to ensure the workers can still access the AWS STS, S3 and EC2 services. "),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("p",null,"The Cado API enables third party tools and automation scripts to integrate with the Cado Response platform.  Here, you can Create and Revoke API access tokens."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"API Tokens")," and many pre-made out-of-the-box integrations to trigger operations in the platform (e.g. acquire instances from your cloud environments), retrieve data that our system captured (e.g. suspicious events), manage and control investigation projects, and more.  "),(0,r.kt)("h3",{id:"oauth"},"OAuth"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"OAuth support is currently in beta. "))),(0,r.kt)("p",null,"Cado Response supports SSO integration with Azure AD and Okta.  The ",(0,r.kt)("strong",{parentName:"p"},"Microsoft OAuth")," and ",(0,r.kt)("strong",{parentName:"p"},"Okta OAuth")," sections allow for the configuration of each of these options.  For more information on how to setup OAuth with Cado Response, please see ",(0,r.kt)("a",{parentName:"p",href:"../sso/azure-ad"},"Azure AD Integration")," or ",(0,r.kt)("a",{parentName:"p",href:"../sso/okta"},"Okta Integration")))}m.isMDXComponent=!0}}]);