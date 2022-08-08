"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8146],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"General Settings",hide_title:!0,sidebar_position:1},l="General Settings",p={unversionedId:"cado-response/settings/general-settings",id:"cado-response/settings/general-settings",title:"General Settings",description:"You can access the settings by clicking Settings on the left menu",source:"@site/docs/cado-response/settings/general-settings.md",sourceDirName:"cado-response/settings",slug:"/cado-response/settings/general-settings",permalink:"/cado-response/settings/general-settings",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/settings/general-settings.md",tags:[],version:"current",lastUpdatedAt:1659964927,formattedLastUpdatedAt:"Aug 8, 2022",sidebarPosition:1,frontMatter:{title:"General Settings",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Search",permalink:"/cado-response/investigating/search"},next:{title:"Overview & API",permalink:"/cado-response/integrations/api-overview"}},u={},d=[{value:"Processing",id:"processing",level:2},{value:"Cloud",id:"cloud",level:2},{value:"Tagging Cado Response Resources",id:"tagging-cado-response-resources",level:3},{value:"Terraform",id:"terraform",level:4},{value:"CloudFormation",id:"cloudformation",level:4},{value:"Licensing",id:"licensing",level:2},{value:"Detections",id:"detections",level:2},{value:"Updates",id:"updates",level:2},{value:"Advanced",id:"advanced",level:2},{value:"API",id:"api",level:2},{value:"OAuth",id:"oauth",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-settings"},"General Settings"),(0,r.kt)("p",null,"You can access the settings by clicking ",(0,r.kt)("strong",{parentName:"p"},"Settings")," on the left menu"),(0,r.kt)("h2",{id:"processing"},"Processing"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Maximum Workers")," sets the maximum number of workers (AWS EC2 Instances) the system will start for processing. The platform will wait to launch new workers if this limit is exceeded. The default value is 20.  The platform will also back off and wait if the AWS limits for the maximum number of VCPUs in a region have been exceeded."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Worker Instance Size")," limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space.  "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In AWS, for most use cases, you should keep the Worker Instance Size set to a Storage Optimized instance, like an ",(0,r.kt)("inlineCode",{parentName:"p"},"i3.4xlarge"))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Worker Shutdown Wait")," is the number of seconds after a worker finishes processing a pipeline before it should shutdown. If nothing is set, the default is 5 minutes (300 seconds)."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Elastic Search Hostname")," sets where the data is stored. By default Cado Response connects to a database that is only accessible locally to the server, and for security purposes it is highly recommended you do not change this value."),(0,r.kt)("h2",{id:"cloud"},"Cloud"),(0,r.kt)("p",null,"These settings are used to authenticate against cloud providers."),(0,r.kt)("p",null,"An AWS Role is created at installation to authenticate against AWS. This is the recommended method of authentication. Optionally, you can set an ",(0,r.kt)("strong",{parentName:"p"},"AWS Access Key")," and ",(0,r.kt)("strong",{parentName:"p"},"AWS Secret Key")," to authenticate against AWS."),(0,r.kt)("h3",{id:"tagging-cado-response-resources"},"Tagging Cado Response Resources"),(0,r.kt)("p",null,"You also have the option to have workers tagged when they are launched.  This can be done by specifying the ",(0,r.kt)("strong",{parentName:"p"},"Tag Key")," and ",(0,r.kt)("strong",{parentName:"p"},"Tag Value")," which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options."),(0,r.kt)("h4",{id:"terraform"},"Terraform"),(0,r.kt)("p",null,'If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform. If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.\nOr, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.\nPlease also note that you will have to run terraform apply again after saving these changes.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'variable "tags" {\n    type = map(string)\n    default = {}\n}\n')),(0,r.kt)("h4",{id:"cloudformation"},"CloudFormation"),(0,r.kt)("p",null,'If you deployed via CloudFormation Template you can apply multiple tags to workers by adding them to the "UserData" section of the CloudFormation Template. Please note that deploying via CloudFormation requires you to specify tags prior to deployment. To add a worker tag add the below to the "UserData" field. '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"echo CUSTOM_TAG_FOO = BAR  >> /home/admin/processor/first_run.cfg",\n"\\n",\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CUSTOM_TAG_"),' prefix is required. If you would like to apply a tag with key "FOO" and value "BAR" then your line should appear as it does in the above example.')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'The last line of the "UserData" field must contain'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'"sudo /home/admin/processor/release/finalize.sh --main"\n'))),(0,r.kt)("h2",{id:"licensing"},"Licensing"),(0,r.kt)("p",null,"In order to use Cado Response, you must upload a valid license.  "),(0,r.kt)("p",null,"If you have received a license file from your Sales representative, you can upload it by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logging into your Cado Response instance"),(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Settings")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Licensing")),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Select file"),", choose the license (json) file "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Upload"))),(0,r.kt)("p",null,"If you do not have a license, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@cadosecurity.com"},"sales@cadosecurity.com")," "),(0,r.kt)("h2",{id:"detections"},"Detections"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"VirusTotal API Key")," is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Yara Rules")," text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado Response. Rules that match will trigger a ",(0,r.kt)("inlineCode",{parentName:"p"},"Malicious")," detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Suspicious")," detection."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Indicators of Compromise")," are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example \"Domain.com;A bad domain\""),(0,r.kt)("h2",{id:"updates"},"Updates"),(0,r.kt)("p",null,"These settings display and allow you to trigger an update of the Cado Response platfrom. "),(0,r.kt)("p",null,"For AWS, the default update mechanism requires the ability for the Cado Response instance to connect outbound to an AMI in the same region in which Cado Response is deployed.  For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. "),(0,r.kt)("p",null,"Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to Cado Response are user-initiated and will not be initiated automatically by Cado."),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Memory Capture support is currently in beta. ")),(0,r.kt)("p",null,"Once enabled, there are two options for acquiring memory. To acquire memory from a running AWS EC2 instance, browse to ",(0,r.kt)("inlineCode",{parentName:"p"},"Import -> AWS -> EC2 -> Acquire")," you will see an ",(0,r.kt)("strong",{parentName:"p"},"Acquire Memory")," button.  It will take approximately 30 minutes for a small system to process - more for those with large amounts of memory.  Alternatively, you can perform a memory acquisition of a running on-premises Windows device by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Import > Memory Collection")," and running the pre-generated script on the host device."),(0,r.kt)("p",null,"Enabling ",(0,r.kt)("strong",{parentName:"p"},"Private IP Addresses for Workers")," will force workers in AWS to only have a Private IP Address, and no Public IP Address. If you do so, you will need to add ",(0,r.kt)("a",{parentName:"p",href:"https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/"},"VPC endpoints")," or add proper VPC routing to ensure the workers can still access the AWS STS, S3 and EC2 services. "),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The Cado API enables third party tools and automation scripts to integrate with the Cado Response platform.  Here, you can Create and Revoke API access tokens."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"API Tokens")," and many pre-made out-of-the-box integrations to trigger operations in the platform (e.g. acquire instances from your cloud environments), retrieve data that our system captured (e.g. suspicious events), manage and control investigation projects, and more.  "),(0,r.kt)("h2",{id:"oauth"},"OAuth"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"OAuth support is currently in beta. ")),(0,r.kt)("p",null,"Cado Response supports SSO integration with Azure AD and Okta.  The ",(0,r.kt)("strong",{parentName:"p"},"Microsoft OAuth")," and ",(0,r.kt)("strong",{parentName:"p"},"Okta OAuth")," sections allow for the configuration of each of these options.  For more information on how to setup OAuth with Cado Response, please see ",(0,r.kt)("a",{parentName:"p",href:"../sso/azure-ad"},"Azure AD Integration")," or ",(0,r.kt)("a",{parentName:"p",href:"../sso/okta"},"Okta Integration")))}m.isMDXComponent=!0}}]);