"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3002],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Lambda",hide_title:!0,sidebar_position:6},c="AWS Lambda",p={unversionedId:"cado-response/discovery-import/import/aws/aws-lambda",id:"cado-response/discovery-import/import/aws/aws-lambda",title:"Lambda",description:"Cado Response can acquire AWS Lambda functions which are serverless computing services.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-lambda.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-lambda",permalink:"/cado-response/discovery-import/import/aws/aws-lambda",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-lambda.md",tags:[],version:"current",lastUpdatedAt:1662134394,formattedLastUpdatedAt:"Sep 2, 2022",sidebarPosition:6,frontMatter:{title:"Lambda",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"EKS",permalink:"/cado-response/discovery-import/import/aws/aws-eks"},next:{title:"AWS Memory Analysis",permalink:"/cado-response/discovery-import/import/aws/memory"}},u={},l=[{value:"Importing",id:"importing",level:2},{value:"Output",id:"output",level:2}],d={toc:l};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-lambda"},"AWS Lambda"),(0,o.kt)("p",null,"Cado Response can acquire AWS Lambda functions which are serverless computing services."),(0,o.kt)("h2",{id:"importing"},"Importing"),(0,o.kt)("p",null,"To import an AWS Lambda function, select or create a project and navigate to the import page by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Import")," button. The click the ",(0,o.kt)("strong",{parentName:"p"},"AWS Lambda Function")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import Data",src:n(7566).Z,width:"1312",height:"697"})),(0,o.kt)("p",null,"Select the region the desired function is located in, and you should see a table of functions. To acquire the function, click the ",(0,o.kt)("strong",{parentName:"p"},"Acquire function")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import Lambda Function",src:n(5938).Z,width:"2154",height:"1184"})),(0,o.kt)("p",null,"You will then be taken to the confirmation page where you can click the ",(0,o.kt)("strong",{parentName:"p"},"View Processing")," button to see the progress of the acquisition."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Once processing has finished the events will be added to the timeline and the Lambda function code will be available to view in the ",(0,o.kt)("strong",{parentName:"p"},"Browse Disk")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda Function Code",src:n(5954).Z,width:"2150",height:"1291"})),(0,o.kt)("p",null,"Lambda automatically integrates with CloudWatch Logs and pushes all logs from your code to a CloudWatch Logs group associated with a Lambda function. Cado Response captures these logs and adds them to your timeline, so you can view any logging statements made by the function."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cloudwatch Logs",src:n(1429).Z,width:"2157",height:"1268"})))}m.isMDXComponent=!0},1429:function(e,t,n){t.Z=n.p+"assets/images/aws-lambda-cloudwatch-14b83ea4fb9a6898a0ceddbab3700544.png"},5954:function(e,t,n){t.Z=n.p+"assets/images/aws-lambda-code-5aa24cb45ec8976f2b96fb2349547767.png"},5938:function(e,t,n){t.Z=n.p+"assets/images/import-lambda-6e94a69b096d4d90af24909cca3d639b.png"},7566:function(e,t,n){t.Z=n.p+"assets/images/import-5251ddb6f786c9758a1d3cd2a17048f0.png"}}]);