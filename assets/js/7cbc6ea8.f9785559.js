"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5655],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?a.createElement(f,i(i({ref:e},u),{},{components:n})):a.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1829:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],c={title:"AWS Lambda Support",hide_title:!0,sidebar_position:4},s="AWS Lambda",p={unversionedId:"cado-response/importing-data/aws-lambda",id:"cado-response/importing-data/aws-lambda",title:"AWS Lambda Support",description:"Cado Response can acquire AWS Lambda functions which are serverless computing services.",source:"@site/docs/cado-response/importing-data/aws-lambda.md",sourceDirName:"cado-response/importing-data",slug:"/cado-response/importing-data/aws-lambda",permalink:"/cado-response/importing-data/aws-lambda",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/importing-data/aws-lambda.md",tags:[],version:"current",lastUpdatedAt:1658421405,formattedLastUpdatedAt:"Jul 21, 2022",sidebarPosition:4,frontMatter:{title:"AWS Lambda Support",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AWS KMS Support",permalink:"/cado-response/importing-data/aws-kms"},next:{title:"AWS ECS Support",permalink:"/cado-response/importing-data/aws-ecs"}},u={},l=[{value:"Importing",id:"importing",level:2},{value:"Output",id:"output",level:2}],d={toc:l};function m(t){var e=t.components,c=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-lambda"},"AWS Lambda"),(0,o.kt)("p",null,"Cado Response can acquire AWS Lambda functions which are serverless computing services."),(0,o.kt)("h2",{id:"importing"},"Importing"),(0,o.kt)("p",null,"To import an AWS Lambda function, select or create a project and navigate to the import page by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Import")," button. The click the ",(0,o.kt)("strong",{parentName:"p"},"AWS Lambda Function")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import Data",src:n(7566).Z,width:"1312",height:"697"})),(0,o.kt)("p",null,"Select the region the desired function is located in, and you should see a table of functions. To acquire the function, click the ",(0,o.kt)("strong",{parentName:"p"},"Acquire function")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import Lambda Function",src:n(5938).Z,width:"2154",height:"1184"})),(0,o.kt)("p",null,"You will then be taken to the confirmation page where you can click the ",(0,o.kt)("strong",{parentName:"p"},"View Processing")," button to see the progress of the acquisition."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Once processing has finished the events will be added to the timeline and the Lambda function code will be available to view in the ",(0,o.kt)("strong",{parentName:"p"},"Browse Disk")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda Function Code",src:n(5954).Z,width:"2150",height:"1291"})),(0,o.kt)("p",null,"Lambda automatically integrates with CloudWatch Logs and pushes all logs from your code to a CloudWatch Logs group associated with a Lambda function. Cado Response captures these logs and adds them to your timeline, so you can view any logging statements made by the function."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloudwatch Logs",src:n(1429).Z,width:"2157",height:"1268"})))}m.isMDXComponent=!0},1429:function(t,e,n){e.Z=n.p+"assets/images/aws-lambda-cloudwatch-14b83ea4fb9a6898a0ceddbab3700544.png"},5954:function(t,e,n){e.Z=n.p+"assets/images/aws-lambda-code-5aa24cb45ec8976f2b96fb2349547767.png"},5938:function(t,e,n){e.Z=n.p+"assets/images/import-lambda-6e94a69b096d4d90af24909cca3d639b.png"},7566:function(t,e,n){e.Z=n.p+"assets/images/import-5251ddb6f786c9758a1d3cd2a17048f0.png"}}]);