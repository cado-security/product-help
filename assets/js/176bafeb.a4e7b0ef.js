"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4442],{1297:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var t=n(5893),s=n(1151);const a={title:"Webhooks",hide_title:!0,sidebar_position:5},i="Webhook Integration",r={id:"cado-response/manage/integrations/webhooks",title:"Webhooks",description:"A webhook integration allows you to automatically send information from the Cado platform to another application using a unique URL.",source:"@site/docs/cado-response/manage/integrations/webhooks.md",sourceDirName:"cado-response/manage/integrations",slug:"/cado-response/manage/integrations/webhooks",permalink:"/cado-response/manage/integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/webhooks.md",tags:[],version:"current",lastUpdatedAt:1707509698,formattedLastUpdatedAt:"Feb 9, 2024",sidebarPosition:5,frontMatter:{title:"Webhooks",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cortex XSOAR",permalink:"/cado-response/manage/integrations/soar/cortex-xsoar"},next:{title:"Wiz",permalink:"/cado-response/manage/integrations/cnapp/wiz"}},d={},h=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Add or Modify a Webhook",id:"add-or-modify-a-webhook",level:2},{value:"Delete an Existing Webhook",id:"delete-an-existing-webhook",level:2},{value:"Custom Payloads",id:"custom-payloads",level:2},{value:"Slack Integration",id:"slack-integration",level:2},{value:"Teams Integration",id:"teams-integration",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"webhook-integration",children:"Webhook Integration"}),"\n",(0,t.jsx)(o.p,{children:"A webhook integration allows you to automatically send information from the Cado platform to another application using a unique URL."}),"\n",(0,t.jsx)(o.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,t.jsx)(o.p,{children:"To add the webhook integration from Cado, you will need to generate a webhook URL from your desired application. Most applications that can receive a post request can be supported."}),"\n",(0,t.jsxs)(o.p,{children:["To view and manage your webhooks settings navigate to ",(0,t.jsx)(o.strong,{children:"Settings"})," > ",(0,t.jsx)(o.strong,{children:"Integrations"})," > ",(0,t.jsx)(o.strong,{children:"Webhooks"}),"."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Webhooks settings page",src:n(8136).Z+"",width:"1485",height:"883"})}),"\n",(0,t.jsx)(o.h2,{id:"add-or-modify-a-webhook",children:"Add or Modify a Webhook"}),"\n",(0,t.jsxs)(o.p,{children:["To add a new webhook click the ",(0,t.jsx)(o.strong,{children:"New webhook"})," button at the bottom of the settings page."]}),"\n",(0,t.jsxs)(o.p,{children:["You can modify an existing webhook by simply clicking the ",(0,t.jsx)(o.strong,{children:"Edit"})," button. Any new events will be sent to the updated URL or modified payload."]}),"\n",(0,t.jsx)(o.p,{children:"You will then see a form where you must enter all the following:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Name"}),": The name of the webhook to describe what it is."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"URL"}),": The webhook URL generated by the application you wish to integrate with."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Events to send"}),": Tick the events you wish to send from Cado to your webhook URL. Only high severity alarms are supported currently."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Payload"}),": This is a JSON object that refers to how the webhook URL will receive the data. A webhook must be in the correct format, more information can be found ",(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.a,{href:"#custom-payloads",children:"here"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Adding a new webhook",src:n(8176).Z+"",width:"924",height:"1177"})}),"\n",(0,t.jsx)(o.h2,{id:"delete-an-existing-webhook",children:"Delete an Existing Webhook"}),"\n",(0,t.jsxs)(o.p,{children:["Delete an existing webhook by clicking the associated ",(0,t.jsx)(o.strong,{children:"Delete"})," button. Any new webhooks will not be sent to the entered URL."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Deleting a webhook",src:n(6082).Z+"",width:"920",height:"313"})}),"\n",(0,t.jsx)(o.h2,{id:"custom-payloads",children:"Custom Payloads"}),"\n",(0,t.jsxs)(o.p,{children:["When entering a webhook you must specify a payload. This is how the webhook URL receives the data from Cado. The payload must be a valid JSON object and have both ",(0,t.jsx)(o.strong,{children:"$Title"})," and ",(0,t.jsx)(o.strong,{children:"$Event"})," as values somewhere in the JSON object. These values tell Cado where to enter the data about the event."]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"When entering the payload refer to the documentation of the application you wish to integration to understand the format the payload must be in. If the payload is not in the correct format for the destination application the event may not be received."})}),"\n",(0,t.jsx)(o.p,{children:"An example of a valid payload:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n    "title": "$Title",\n    "message": "$Event"\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"slack-integration",children:"Slack Integration"}),"\n",(0,t.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/izHu3gpSaS0",title:"How to Integrate Slack with Cado Response",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(o.p,{children:"You can use webhooks to send notifications to a Slack channel from Cado Response."}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["See the ",(0,t.jsx)(o.a,{href:"https://api.slack.com/messaging/webhooks#create_a_webhook",children:"Slack documentation"})," on creating incoming webhooks for Slack. Once you have created an app with incoming webhooks copy the Webhook URL to your clipbard."]}),"\n",(0,t.jsxs)(o.li,{children:["In the Cado platform under ",(0,t.jsx)(o.strong,{children:"Settings > Integrations > Webhooks"})," select ",(0,t.jsx)(o.strong,{children:"New webhook"}),"."]}),"\n",(0,t.jsx)(o.li,{children:'Name your webhook and paste the URL from Slack. Then check "High Severity Alarms" under events to send.'}),"\n",(0,t.jsxs)(o.li,{children:["Cado requires the ",(0,t.jsx)(o.code,{children:"$Title"})," and ",(0,t.jsx)(o.code,{children:"$Event"})," values to be specified in the payload and Slack requires a JSON key of ",(0,t.jsx)(o.code,{children:"text"}),". You can read more about Slack message payloads ",(0,t.jsx)(o.a,{href:"https://api.slack.com/reference/messaging/payload",children:"here"})," and Slack message formatting with Markdown ",(0,t.jsx)(o.a,{href:"https://api.slack.com/messaging/composing",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"We include an example payload and the Slack message it creates."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n    "text": "*$Title*\\nDetails: $Event"\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"teams-integration",children:"Teams Integration"}),"\n",(0,t.jsx)(o.p,{children:"You can use webhooks to send notifications to a Microsoft Teams channel from the Cado platform."}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["See the ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook",children:"Microsoft Teams documentation"})," on creating incoming webhooks for Teams. Once you have created a connector with incoming webhooks copy the Webhook URL to your clipboard."]}),"\n",(0,t.jsxs)(o.li,{children:["In the Cado platform under ",(0,t.jsx)(o.strong,{children:"Settings > Integrations > Webhooks"})," select ",(0,t.jsx)(o.strong,{children:"New webhook"}),"."]}),"\n",(0,t.jsx)(o.li,{children:'Name your webhook and paste the URL from Teams. Then check "High Severity Alarms" under events to send.'}),"\n",(0,t.jsxs)(o.li,{children:["Cado requires the ",(0,t.jsx)(o.code,{children:"$Title"})," and ",(0,t.jsx)(o.code,{children:"$Event"})," values to be specified in the payload and Teams requires a JSON key of ",(0,t.jsx)(o.code,{children:"text"}),". You can read more about Teams message payloads ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL",children:"here"})," and Teams message formatting with Markdown ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cconnector-html",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"We include an example payload and the Teams message it creates (note that the newline character most be preceded by three spaces)."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n    "text": "**$Title**  \\nDetails: $Event"\n}\n'})})]})}function l(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6082:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/webhooks-delete-e73ce8e4db982a74a10d53e9e40b11c4.png"},8176:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/webhooks-new-05cc091a15fe3d2a1f0c8d9c380d1ac6.png"},8136:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/webhooks-settings-abfae41425cf9807abee570032a368eb.png"},1151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>i});var t=n(7294);const s={},a=t.createContext(s);function i(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);