"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4442],{1297:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=o(5893),i=o(1151);const s={title:"Webhooks",hide_title:!0,sidebar_position:5},a="Webhook Integration",r={id:"cado-response/manage/integrations/webhooks",title:"Webhooks",description:"A webhook integration allows you to automatically send information from the Cado platform to another application using a unique URL.",source:"@site/docs/cado-response/manage/integrations/webhooks.md",sourceDirName:"cado-response/manage/integrations",slug:"/cado-response/manage/integrations/webhooks",permalink:"/cado-response/manage/integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/manage/integrations/webhooks.md",tags:[],version:"current",lastUpdatedAt:1723453534,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:5,frontMatter:{title:"Webhooks",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cortex XSOAR",permalink:"/cado-response/manage/integrations/soar/cortex-xsoar"},next:{title:"Wiz",permalink:"/cado-response/manage/integrations/cnapp/wiz"}},c={},l=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Add or Modify a Webhook",id:"add-or-modify-a-webhook",level:2},{value:"Delete an Existing Webhook",id:"delete-an-existing-webhook",level:2},{value:"Custom Payloads",id:"custom-payloads",level:2},{value:"Slack Integration",id:"slack-integration",level:2},{value:"Teams Integration",id:"teams-integration",level:2},{value:"Jira Integration",id:"jira-integration",level:2},{value:"Service Now Integration",id:"service-now-integration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"webhook-integration",children:"Webhook Integration"}),"\n",(0,t.jsx)(n.p,{children:"A webhook integration allows you to automatically send information from the Cado platform to another application using a unique URL."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,t.jsx)(n.p,{children:"To add the webhook integration from Cado, you will need to generate a webhook URL from your desired application. Most applications that can receive a post request can be supported."}),"\n",(0,t.jsxs)(n.p,{children:["To view and manage your webhooks settings navigate to ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Integrations"})," > ",(0,t.jsx)(n.strong,{children:"Webhooks"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Webhooks settings page",src:o(8136).Z+"",width:"1485",height:"706"})}),"\n",(0,t.jsx)(n.h2,{id:"add-or-modify-a-webhook",children:"Add or Modify a Webhook"}),"\n",(0,t.jsxs)(n.p,{children:["To add a new webhook click the ",(0,t.jsx)(n.strong,{children:"New webhook"})," button at the bottom of the settings page."]}),"\n",(0,t.jsxs)(n.p,{children:["You can modify an existing webhook by simply clicking the ",(0,t.jsx)(n.strong,{children:"Edit"})," button. Any new events will be sent to the updated URL or modified payload."]}),"\n",(0,t.jsx)(n.p,{children:"You will then see a form where you must enter all the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": The name of the webhook to describe what it is."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": The webhook URL generated by the application you wish to integrate with."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Events to send"}),": Tick the events you wish to send from Cado to your webhook URL. Cado supports the ability to send the following events:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"High Severity Alarm"}),"\n",(0,t.jsx)(n.li,{children:"Suspicious Severity Event"}),"\n",(0,t.jsx)(n.li,{children:"Processing with Alarms"}),"\n",(0,t.jsx)(n.li,{children:"Processing Finished"}),"\n",(0,t.jsx)(n.li,{children:"Processing Failed"}),"\n",(0,t.jsx)(n.li,{children:"Admin Login"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Create"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Update"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Delete"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Login"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Logout"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Download"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Reboot"}),"\n",(0,t.jsx)(n.li,{children:"Audit Event Upgrade"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Payload"}),": This is a JSON object that refers to how the webhook URL will receive the data. A webhook must be in the correct format, more information can be found ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#custom-payloads",children:"here"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Adding a new webhook",src:o(8176).Z+"",width:"924",height:"1177"})}),"\n",(0,t.jsx)(n.h2,{id:"delete-an-existing-webhook",children:"Delete an Existing Webhook"}),"\n",(0,t.jsxs)(n.p,{children:["Delete an existing webhook by clicking the associated ",(0,t.jsx)(n.strong,{children:"Delete"})," button. Any new webhooks will not be sent to the entered URL."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deleting a webhook",src:o(6082).Z+"",width:"884",height:"264"})}),"\n",(0,t.jsx)(n.h2,{id:"custom-payloads",children:"Custom Payloads"}),"\n",(0,t.jsxs)(n.p,{children:["When entering a webhook you must specify a payload. This is how the webhook URL receives the data from Cado. The payload must be a valid JSON object and have both ",(0,t.jsx)(n.strong,{children:"$Title"})," and ",(0,t.jsx)(n.strong,{children:"$Event"})," as values somewhere in the JSON object. These values tell Cado where to enter the data about the event."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"When entering the payload refer to the documentation of the application you wish to integration to understand the format the payload must be in. If the payload is not in the correct format for the destination application the event may not be received."})}),"\n",(0,t.jsx)(n.p,{children:"An example of a valid payload:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "title": "$Title",\n    "message": "$Event"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"slack-integration",children:"Slack Integration"}),"\n",(0,t.jsx)("iframe",{width:"100%",height:"628",src:"https://www.youtube.com/embed/izHu3gpSaS0",title:"How to Integrate Slack with Cado Response",frameborder:"0",allowfullscreen:!0}),"\n",(0,t.jsx)(n.p,{children:"You can use webhooks to send notifications to a Slack channel from Cado Response."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://api.slack.com/messaging/webhooks#create_a_webhook",children:"Slack documentation"})," on creating incoming webhooks for Slack. Once you have created an app with incoming webhooks copy the Webhook URL to your clipbard."]}),"\n",(0,t.jsxs)(n.li,{children:["In the Cado platform under ",(0,t.jsx)(n.strong,{children:"Settings > Integrations > Webhooks"})," select ",(0,t.jsx)(n.strong,{children:"New webhook"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Name your webhook and paste the URL from Slack. Then check "High Severity Alarms" under events to send.'}),"\n",(0,t.jsxs)(n.li,{children:["Cado requires the ",(0,t.jsx)(n.code,{children:"$Title"})," and ",(0,t.jsx)(n.code,{children:"$Event"})," values to be specified in the payload and Slack requires a JSON key of ",(0,t.jsx)(n.code,{children:"text"}),". You can read more about Slack message payloads ",(0,t.jsx)(n.a,{href:"https://api.slack.com/reference/messaging/payload",children:"here"})," and Slack message formatting with Markdown ",(0,t.jsx)(n.a,{href:"https://api.slack.com/messaging/composing",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We include an example payload and the Slack message it creates."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "text": "*$Title*\\nDetails: $Event"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"teams-integration",children:"Teams Integration"}),"\n",(0,t.jsx)(n.p,{children:"You can use webhooks to send notifications to a Microsoft Teams channel from the Cado platform."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook",children:"Microsoft Teams documentation"})," on creating incoming webhooks for Teams. Once you have created a connector with incoming webhooks copy the Webhook URL to your clipboard."]}),"\n",(0,t.jsxs)(n.li,{children:["In the Cado platform under ",(0,t.jsx)(n.strong,{children:"Settings > Integrations > Webhooks"})," select ",(0,t.jsx)(n.strong,{children:"New webhook"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Name your webhook and paste the URL from Teams. Then check "High Severity Alarms" under events to send.'}),"\n",(0,t.jsxs)(n.li,{children:["Cado requires the ",(0,t.jsx)(n.code,{children:"$Title"})," and ",(0,t.jsx)(n.code,{children:"$Event"})," values to be specified in the payload and Teams requires a JSON key of ",(0,t.jsx)(n.code,{children:"text"}),". You can read more about Teams message payloads ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL",children:"here"})," and Teams message formatting with Markdown ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cconnector-html",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We include an example payload and the Teams message it creates (note that the newline character most be preceded by three spaces)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "text": "**$Title**  \\nDetails: $Event"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"jira-integration",children:"Jira Integration"}),"\n",(0,t.jsx)(n.p,{children:"You can use webhooks to send notifications to create a ticket in Jira from the Cado platform."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://confluence.atlassian.com/jirakb/working-with-incoming-webhook-data-in-automation-for-jira-1125878776.html",children:"Jira documentation"})," on creating incoming webhooks for Jira."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a new webhook by selecting the Jira project you want to create tickets in, then select ",(0,t.jsx)(n.strong,{children:"Project settings"})," > ",(0,t.jsx)(n.strong,{children:"Automations"})," > ",(0,t.jsx)(n.strong,{children:"Create a Rule"})," > ",(0,t.jsx)(n.strong,{children:"Incoming Webhook"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Select "Then, Create a new Ticket" and enter the following as the Description:'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{{webhookData.title}}\n{{webhookData.message}}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["In the Cado platform under ",(0,t.jsx)(n.strong,{children:"Settings > Integrations > Webhooks"})," select ",(0,t.jsx)(n.strong,{children:"New webhook"}),"."]}),"\n",(0,t.jsx)(n.li,{children:'Name your webhook and paste the URL from Jira. Then check "High Severity Alarms" under events to send, as a first example.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Jira Webhook",src:o(9431).Z+"",width:"2300",height:"1324"})}),"\n",(0,t.jsx)(n.h2,{id:"service-now-integration",children:"Service Now Integration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["See the ",(0,t.jsx)(n.a,{href:"https://www.servicenow.com/community/in-other-news/how-to-integrate-webhooks-into-servicenow/ba-p/2271745",children:"ServiceNow documentation"})," on creating incoming webhooks for ServiceNow."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a new webhook by selecting the Jira project you want to create tickets in, then select ",(0,t.jsx)(n.strong,{children:"Project settings"})," > ",(0,t.jsx)(n.strong,{children:"Automations"})," > ",(0,t.jsx)(n.strong,{children:"Create a Rule"})," > ",(0,t.jsx)(n.strong,{children:"Incoming Webhook"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9431:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/jira_webhook-b435f786fe999ca9af8a0c09151e541b.png"},6082:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/webhooks-delete-09740d9658ce1f18e810770c50c862a3.png"},8176:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/webhooks-new-05cc091a15fe3d2a1f0c8d9c380d1ac6.png"},8136:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/webhooks-settings-e49a15a9d549ea017deb772d53c10dc7.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var t=o(7294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);