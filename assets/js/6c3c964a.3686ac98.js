"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[7171],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return h}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return o?n.createElement(u,i(i({ref:t},p),{},{components:o})):n.createElement(u,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9649:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=o(3117),a=o(102),r=(o(7294),o(3905)),i=["components"],s={title:"Webhooks",hide_title:!0,sidebar_position:2},l="Webhook Integration",c={unversionedId:"cado-response/integrations/webhooks",id:"cado-response/integrations/webhooks",title:"Webhooks",description:"A webhook integration allows you to automatically send information from Cado Response to another application using a unique URL.",source:"@site/docs/cado-response/integrations/webhooks.md",sourceDirName:"cado-response/integrations",slug:"/cado-response/integrations/webhooks",permalink:"/cado-response/integrations/webhooks",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/integrations/webhooks.md",tags:[],version:"current",lastUpdatedAt:1649778979,formattedLastUpdatedAt:"Apr 12, 2022",sidebarPosition:2,frontMatter:{title:"Webhooks",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SIEM",permalink:"/cado-response/integrations/siem"},next:{title:"SentinelOne",permalink:"/cado-response/integrations/sentinelone"}},p={},d=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Add or Modify a Webhook",id:"add-or-modify-a-webhook",level:2},{value:"Delete an Existing Webhook",id:"delete-an-existing-webhook",level:2},{value:"Custom Payloads",id:"custom-payloads",level:2},{value:"Slack Integration",id:"slack-integration",level:2},{value:"Teams Integration",id:"teams-integration",level:2}],m={toc:d};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhook-integration"},"Webhook Integration"),(0,r.kt)("p",null,"A webhook integration allows you to automatically send information from Cado Response to another application using a unique URL."),(0,r.kt)("h2",{id:"before-you-begin"},"Before You Begin"),(0,r.kt)("p",null,"To add the webhook integration from Cado Response, you will need to generate a webhook URL from your desired application. Most applications that can receive a post request can be supported."),(0,r.kt)("p",null,"To view and manage your webhooks settings navigate to ",(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Integrations")," > ",(0,r.kt)("strong",{parentName:"p"},"Webhooks"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Webhooks settings page",src:o(7998).Z,width:"1485",height:"883"})),(0,r.kt)("h2",{id:"add-or-modify-a-webhook"},"Add or Modify a Webhook"),(0,r.kt)("p",null,"To add a new webhook click the ",(0,r.kt)("strong",{parentName:"p"},"New webhook")," button at the bottom of the settings page."),(0,r.kt)("p",null,"You can modify an existing webhook by simply clicking the ",(0,r.kt)("strong",{parentName:"p"},"Edit")," button. Any new events will be sent to the updated URL or modified payload."),(0,r.kt)("p",null,"You will then see a form where you must enter all the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": The name of the webhook to describe what it is."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL"),": The webhook URL generated by the application you wish to integrate with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Events to send"),": Tick the events you wish to send from Cado Response to your webhook URL. Only high severity alarms are supported currently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payload"),": This is a JSON object that refers to how the webhook URL will receive the data. A webhook must be in the correct format, more information can be found ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#custom-payloads"},"here")),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding a new webhook",src:o(7901).Z,width:"924",height:"1177"})),(0,r.kt)("h2",{id:"delete-an-existing-webhook"},"Delete an Existing Webhook"),(0,r.kt)("p",null,"Delete an existing webhook by clicking the associated ",(0,r.kt)("strong",{parentName:"p"},"Delete")," button. Any new webhooks will not be sent to the entered URL."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deleting a webhook",src:o(710).Z,width:"920",height:"313"})),(0,r.kt)("h2",{id:"custom-payloads"},"Custom Payloads"),(0,r.kt)("p",null,"When entering a webhook you must specify a payload. This is how the webhook URL receives the data from Cado Response. The payload must be a valid JSON object and have both ",(0,r.kt)("strong",{parentName:"p"},"\\$Title")," and ",(0,r.kt)("strong",{parentName:"p"},"\\$Event")," as values somewhere in the JSON object. These values tell Cado Response where to enter the data about the event."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When entering the payload refer to the documentation of the application you wish to integration to understand the format the payload must be in. If the payload is not in the correct format for the destination application the event may not be received.")),(0,r.kt)("p",null,"An example of a valid payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "$Title",\n    "message": "$Event"\n}\n')),(0,r.kt)("h2",{id:"slack-integration"},"Slack Integration"),(0,r.kt)("p",null,"You can use webhooks to send notifications to a Slack channel from Cado Response."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks#create_a_webhook"},"Slack documentation")," on creating incoming webhooks for Slack. Once you have created an app with incoming webhooks copy the Webhook URL to your clipbard."),(0,r.kt)("li",{parentName:"ol"},"In Cado Response under ",(0,r.kt)("strong",{parentName:"li"},"Settings > Integrations > Webhooks")," select ",(0,r.kt)("strong",{parentName:"li"},"New webhook"),"."),(0,r.kt)("li",{parentName:"ol"},'Name your webhook and paste the URL from Slack. Then check "High Severity Alarms" under events to send. '),(0,r.kt)("li",{parentName:"ol"},"Cado Response requires the ",(0,r.kt)("inlineCode",{parentName:"li"},"$Title")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"$Event")," values to be specified in the payload and Slack requires a JSON key of ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),". You can read more about Slack message payloads ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/messaging/payload"},"here")," and Slack message formatting with Markdown ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/composing"},"here"),". ")),(0,r.kt)("p",null,"We include an example payload and the Slack message it creates."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "text": "*$Title*\\nDetails: $Event"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Slack message",src:o(9663).Z,width:"645",height:"94"})),(0,r.kt)("h2",{id:"teams-integration"},"Teams Integration"),(0,r.kt)("p",null,"You can use webhooks to send notifications to a Microsoft Teams channel from Cado Response."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook"},"Microsoft Teams documentation")," on creating incoming webhooks for Teams. Once you have created a connector with incoming webhooks copy the Webhook URL to your clipboard."),(0,r.kt)("li",{parentName:"ol"},"In Cado Response under ",(0,r.kt)("strong",{parentName:"li"},"Settings > Integrations > Webhooks")," select ",(0,r.kt)("strong",{parentName:"li"},"New webhook"),"."),(0,r.kt)("li",{parentName:"ol"},'Name your webhook and paste the URL from Teams. Then check "High Severity Alarms" under events to send. '),(0,r.kt)("li",{parentName:"ol"},"Cado Response requires the ",(0,r.kt)("inlineCode",{parentName:"li"},"$Title")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"$Event")," values to be specified in the payload and Teams requires a JSON key of ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),". You can read more about Teams message payloads ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL"},"here")," and Teams message formatting with Markdown ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cconnector-html"},"here"),". ")),(0,r.kt)("p",null,"We include an example payload and the Teams message it creates (note that the newline character most be preceded by three spaces)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "text": "**$Title**  \\nDetails: $Event"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Teams message",src:o(7966).Z,width:"1150",height:"172"})))}h.isMDXComponent=!0},9663:function(e,t,o){t.Z=o.p+"assets/images/slack-message-93c156676ae21b508cc3ea3d0b844e60.png"},7966:function(e,t,o){t.Z=o.p+"assets/images/teams-message-638bb97c92fff82480c235e272d5612e.png"},710:function(e,t,o){t.Z=o.p+"assets/images/webhooks-delete-e73ce8e4db982a74a10d53e9e40b11c4.png"},7901:function(e,t,o){t.Z=o.p+"assets/images/webhooks-new-05cc091a15fe3d2a1f0c8d9c380d1ac6.png"},7998:function(e,t,o){t.Z=o.p+"assets/images/webhooks-settings-abfae41425cf9807abee570032a368eb.png"}}]);