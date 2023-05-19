"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4442],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),h=n,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return o?a.createElement(u,i(i({ref:t},c),{},{components:o})):a.createElement(u,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9276:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={title:"Webhooks",hide_title:!0,sidebar_position:5},i="Webhook Integration",s={unversionedId:"cado-response/manage/integrations/webhooks",id:"cado-response/manage/integrations/webhooks",title:"Webhooks",description:"A webhook integration allows you to automatically send information from the Cado platform to another application using a unique URL.",source:"@site/docs/cado-response/manage/integrations/webhooks.md",sourceDirName:"cado-response/manage/integrations",slug:"/cado-response/manage/integrations/webhooks",permalink:"/cado-response/manage/integrations/webhooks",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/webhooks.md",tags:[],version:"current",lastUpdatedAt:1684492820,formattedLastUpdatedAt:"May 19, 2023",sidebarPosition:5,frontMatter:{title:"Webhooks",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cortex XSOAR",permalink:"/cado-response/manage/integrations/soar/cortex-xsoar"},next:{title:"SophosLabs Intelix",permalink:"/cado-response/manage/integrations/sandbox/intelix"}},l={},p=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Add or Modify a Webhook",id:"add-or-modify-a-webhook",level:2},{value:"Delete an Existing Webhook",id:"delete-an-existing-webhook",level:2},{value:"Custom Payloads",id:"custom-payloads",level:2},{value:"Slack Integration",id:"slack-integration",level:2},{value:"Teams Integration",id:"teams-integration",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webhook-integration"},"Webhook Integration"),(0,n.kt)("p",null,"A webhook integration allows you to automatically send information from the Cado platform to another application using a unique URL."),(0,n.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,n.kt)("p",null,"To add the webhook integration from Cado, you will need to generate a webhook URL from your desired application. Most applications that can receive a post request can be supported."),(0,n.kt)("p",null,"To view and manage your webhooks settings navigate to ",(0,n.kt)("strong",{parentName:"p"},"Settings")," > ",(0,n.kt)("strong",{parentName:"p"},"Integrations")," > ",(0,n.kt)("strong",{parentName:"p"},"Webhooks"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Webhooks settings page",src:o(8136).Z,width:"1485",height:"883"})),(0,n.kt)("h2",{id:"add-or-modify-a-webhook"},"Add or Modify a Webhook"),(0,n.kt)("p",null,"To add a new webhook click the ",(0,n.kt)("strong",{parentName:"p"},"New webhook")," button at the bottom of the settings page."),(0,n.kt)("p",null,"You can modify an existing webhook by simply clicking the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button. Any new events will be sent to the updated URL or modified payload."),(0,n.kt)("p",null,"You will then see a form where you must enter all the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name"),": The name of the webhook to describe what it is."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"URL"),": The webhook URL generated by the application you wish to integrate with."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Events to send"),": Tick the events you wish to send from Cado to your webhook URL. Only high severity alarms are supported currently."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payload"),": This is a JSON object that refers to how the webhook URL will receive the data. A webhook must be in the correct format, more information can be found ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#custom-payloads"},"here")),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adding a new webhook",src:o(8176).Z,width:"924",height:"1177"})),(0,n.kt)("h2",{id:"delete-an-existing-webhook"},"Delete an Existing Webhook"),(0,n.kt)("p",null,"Delete an existing webhook by clicking the associated ",(0,n.kt)("strong",{parentName:"p"},"Delete")," button. Any new webhooks will not be sent to the entered URL."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deleting a webhook",src:o(6082).Z,width:"920",height:"313"})),(0,n.kt)("h2",{id:"custom-payloads"},"Custom Payloads"),(0,n.kt)("p",null,"When entering a webhook you must specify a payload. This is how the webhook URL receives the data from Cado. The payload must be a valid JSON object and have both ",(0,n.kt)("strong",{parentName:"p"},"\\$Title")," and ",(0,n.kt)("strong",{parentName:"p"},"\\$Event")," as values somewhere in the JSON object. These values tell Cado where to enter the data about the event."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When entering the payload refer to the documentation of the application you wish to integration to understand the format the payload must be in. If the payload is not in the correct format for the destination application the event may not be received.")),(0,n.kt)("p",null,"An example of a valid payload:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "$Title",\n    "message": "$Event"\n}\n')),(0,n.kt)("h2",{id:"slack-integration"},"Slack Integration"),(0,n.kt)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/izHu3gpSaS0",title:"How to Integrate Slack with Cado Response",frameborder:"0",allowfullscreen:!0}),(0,n.kt)("p",null,"You can use webhooks to send notifications to a Slack channel from Cado Response."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks#create_a_webhook"},"Slack documentation")," on creating incoming webhooks for Slack. Once you have created an app with incoming webhooks copy the Webhook URL to your clipbard."),(0,n.kt)("li",{parentName:"ol"},"In the Cado platform under ",(0,n.kt)("strong",{parentName:"li"},"Settings > Integrations > Webhooks")," select ",(0,n.kt)("strong",{parentName:"li"},"New webhook"),"."),(0,n.kt)("li",{parentName:"ol"},'Name your webhook and paste the URL from Slack. Then check "High Severity Alarms" under events to send. '),(0,n.kt)("li",{parentName:"ol"},"Cado requires the ",(0,n.kt)("inlineCode",{parentName:"li"},"$Title")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"$Event")," values to be specified in the payload and Slack requires a JSON key of ",(0,n.kt)("inlineCode",{parentName:"li"},"text"),". You can read more about Slack message payloads ",(0,n.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/messaging/payload"},"here")," and Slack message formatting with Markdown ",(0,n.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/composing"},"here"),". ")),(0,n.kt)("p",null,"We include an example payload and the Slack message it creates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "text": "*$Title*\\nDetails: $Event"\n}\n')),(0,n.kt)("h2",{id:"teams-integration"},"Teams Integration"),(0,n.kt)("p",null,"You can use webhooks to send notifications to a Microsoft Teams channel from the Cado platform."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Microsoft Teams documentation")," on creating incoming webhooks for Teams. Once you have created a connector with incoming webhooks copy the Webhook URL to your clipboard."),(0,n.kt)("li",{parentName:"ol"},"In the Cado platform under ",(0,n.kt)("strong",{parentName:"li"},"Settings > Integrations > Webhooks")," select ",(0,n.kt)("strong",{parentName:"li"},"New webhook"),"."),(0,n.kt)("li",{parentName:"ol"},'Name your webhook and paste the URL from Teams. Then check "High Severity Alarms" under events to send. '),(0,n.kt)("li",{parentName:"ol"},"Cado requires the ",(0,n.kt)("inlineCode",{parentName:"li"},"$Title")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"$Event")," values to be specified in the payload and Teams requires a JSON key of ",(0,n.kt)("inlineCode",{parentName:"li"},"text"),". You can read more about Teams message payloads ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL"},"here")," and Teams message formatting with Markdown ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cconnector-html"},"here"),". ")),(0,n.kt)("p",null,"We include an example payload and the Teams message it creates (note that the newline character most be preceded by three spaces)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "text": "**$Title**  \\nDetails: $Event"\n}\n')))}d.isMDXComponent=!0},6082:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/webhooks-delete-e73ce8e4db982a74a10d53e9e40b11c4.png"},8176:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/webhooks-new-05cc091a15fe3d2a1f0c8d9c380d1ac6.png"},8136:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/webhooks-settings-abfae41425cf9807abee570032a368eb.png"}}]);