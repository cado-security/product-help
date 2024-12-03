"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[9250],{3850:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(4848),i=o(8453);const s={title:"Webhooks",hide_title:!0,sidebar_position:3},a="How to Integrate with Platforms Using Webhooks",r={id:"cado/integrations/webhooks",title:"Webhooks",description:"Webhook integrations enable you to automatically send information from the Cado platform to other applications using a unique URL.",source:"@site/docs/cado/integrations/webhooks.md",sourceDirName:"cado/integrations",slug:"/cado/integrations/webhooks",permalink:"/cado/integrations/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/integrations/webhooks.md",tags:[],version:"current",lastUpdatedAt:1733228233,formattedLastUpdatedAt:"Dec 3, 2024",sidebarPosition:3,frontMatter:{title:"Webhooks",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to export to SIEM",permalink:"/cado/integrations/siem"},next:{title:"Tines",permalink:"/cado/integrations/soar/tines"}},l={},d=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Adding or Modifying a Webhook",id:"adding-or-modifying-a-webhook",level:2},{value:"Adding a New Webhook",id:"adding-a-new-webhook",level:3},{value:"Modifying an Existing Webhook",id:"modifying-an-existing-webhook",level:3},{value:"Deleting a Webhook",id:"deleting-a-webhook",level:2},{value:"Custom Payloads",id:"custom-payloads",level:2},{value:"Example of a Valid Payload",id:"example-of-a-valid-payload",level:3},{value:"Slack Integration",id:"slack-integration",level:2},{value:"Teams Integration",id:"teams-integration",level:2},{value:"Jira Integration",id:"jira-integration",level:2},{value:"ServiceNow Integration",id:"servicenow-integration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-integrate-with-platforms-using-webhooks",children:"How to Integrate with Platforms Using Webhooks"}),"\n",(0,t.jsx)(n.p,{children:"Webhook integrations enable you to automatically send information from the Cado platform to other applications using a unique URL."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,t.jsx)(n.p,{children:"To set up a webhook integration in Cado, you first need to generate a webhook URL from the application you wish to integrate with. Most applications that can receive POST requests are supported."}),"\n",(0,t.jsxs)(n.p,{children:["To manage your webhooks, navigate to ",(0,t.jsx)(n.strong,{children:"Settings"})," > ",(0,t.jsx)(n.strong,{children:"Integrations"})," > ",(0,t.jsx)(n.strong,{children:"Webhooks"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Webhooks settings page",src:o(3277).A+"",width:"1485",height:"706"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-or-modifying-a-webhook",children:"Adding or Modifying a Webhook"}),"\n",(0,t.jsx)(n.h3,{id:"adding-a-new-webhook",children:"Adding a New Webhook"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"New Webhook"})," button at the bottom of the settings page."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill out the following details in the form:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name"}),": A descriptive name for the webhook."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": The webhook URL generated by the application you are integrating with."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Events to Send"}),": Choose the types of events you want to send to the webhook URL. Cado supports the following events:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"High Severity Alarm"}),"\n",(0,t.jsx)(n.li,{children:"Suspicious Severity Event"}),"\n",(0,t.jsx)(n.li,{children:"Processing with Alarms"}),"\n",(0,t.jsx)(n.li,{children:"Processing Finished"}),"\n",(0,t.jsx)(n.li,{children:"Processing Failed"}),"\n",(0,t.jsx)(n.li,{children:"Admin Login"}),"\n",(0,t.jsx)(n.li,{children:"Audit Events (Create, Update, Delete, Login, Logout, Download, Reboot, Upgrade)"}),"\n",(0,t.jsx)(n.li,{children:"Detection (Created, Updated)"}),"\n",(0,t.jsx)(n.li,{children:"Detection Group (Created, Updated)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payload"}),": This is a JSON object that defines how the webhook URL will receive the data (see more details in the ",(0,t.jsx)(n.a,{href:"#custom-payloads",children:"Custom Payloads"})," section)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Event Formatting"}),": Choose the format for sending the ",(0,t.jsx)(n.code,{children:"$Event"})," data. Options include:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Default"}),": Sends the raw event as a string with details of the event."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Slack"}),": Only the ",(0,t.jsx)(n.code,{children:"$Title"}),' is sent, e.g., "HIGH SEVERITY ALARM DETECTED."']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Jira"}),": Only supported for Detection events. Formats the event with markdown to include metadata about the detection."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Adding a new webhook",src:o(6014).A+"",width:"1174",height:"1980"})}),"\n",(0,t.jsx)(n.h3,{id:"modifying-an-existing-webhook",children:"Modifying an Existing Webhook"}),"\n",(0,t.jsxs)(n.p,{children:["To modify a webhook, click the ",(0,t.jsx)(n.strong,{children:"Edit"})," button next to the webhook you wish to change. Any new events will be sent to the updated URL or modified payload."]}),"\n",(0,t.jsx)(n.h2,{id:"deleting-a-webhook",children:"Deleting a Webhook"}),"\n",(0,t.jsxs)(n.p,{children:["To delete a webhook, click the ",(0,t.jsx)(n.strong,{children:"Delete"})," button next to the webhook you want to remove. Once deleted, no further events will be sent to that URL."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deleting a webhook",src:o(2039).A+"",width:"884",height:"264"})}),"\n",(0,t.jsx)(n.h2,{id:"custom-payloads",children:"Custom Payloads"}),"\n",(0,t.jsxs)(n.p,{children:["When creating a webhook, you must specify a payload, which defines how the webhook URL receives data from Cado. The payload must be a valid JSON object and include both ",(0,t.jsx)(n.strong,{children:"$Title"})," and ",(0,t.jsx)(n.strong,{children:"$Event"})," values. These values tell Cado where to insert the data about the event."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Check the documentation of the application you are integrating with to ensure the payload format is correct. If the payload doesn't match the expected format, the event might not be received."})}),"\n",(0,t.jsx)(n.h3,{id:"example-of-a-valid-payload",children:"Example of a Valid Payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "title": "$Title",\n    "message": "$Event"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"slack-integration",children:"Slack Integration"}),"\n",(0,t.jsx)(n.p,{children:"You can send notifications to a Slack channel using webhooks."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://api.slack.com/messaging/webhooks#create_a_webhook",children:"Slack documentation"})," to create an incoming webhook for Slack, then copy the webhook URL."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Cado, navigate to ",(0,t.jsx)(n.strong,{children:"Settings > Integrations > Webhooks"})," and select ",(0,t.jsx)(n.strong,{children:"New Webhook"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Enter a name for your webhook and paste the Slack webhook URL. Check the "High Severity Alarms" option under events to send.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set up the payload in Cado to include ",(0,t.jsx)(n.code,{children:"$Title"})," and ",(0,t.jsx)(n.code,{children:"$Event"}),", and format it as required by Slack:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "text": "*$Title*\\nDetails: $Event"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details on Slack message payloads, see ",(0,t.jsx)(n.a,{href:"https://api.slack.com/reference/messaging/payload",children:"Slack messaging documentation"})," and ",(0,t.jsx)(n.a,{href:"https://api.slack.com/messaging/composing",children:"Slack message formatting with Markdown"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"teams-integration",children:"Teams Integration"}),"\n",(0,t.jsx)(n.p,{children:"You can send notifications to a Microsoft Teams channel using webhooks."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook",children:"Microsoft Teams documentation"})," to create an incoming webhook, then copy the webhook URL."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Cado, go to ",(0,t.jsx)(n.strong,{children:"Settings > Integrations > Webhooks"})," and select ",(0,t.jsx)(n.strong,{children:"New Webhook"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Name your webhook and paste the Teams webhook URL. Check the "High Severity Alarms" event.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the payload format to include ",(0,t.jsx)(n.code,{children:"$Title"})," and ",(0,t.jsx)(n.code,{children:"$Event"}),", with a JSON key of ",(0,t.jsx)(n.code,{children:"text"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "text": "**$Title**  \\nDetails: $Event"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL",children:"Teams message payload documentation"})," and ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cconnector-html",children:"Teams Markdown formatting"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"jira-integration",children:"Jira Integration"}),"\n",(0,t.jsx)(n.p,{children:"You can create Jira tickets using Cado webhooks."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://confluence.atlassian.com/jirakb/working-with-incoming-webhook-data-in-automation-for-jira-1125878776.html",children:"Jira documentation"})," to create an incoming webhook in Jira."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new webhook by selecting ",(0,t.jsx)(n.strong,{children:"Project settings"})," > ",(0,t.jsx)(n.strong,{children:"Automations"})," > ",(0,t.jsx)(n.strong,{children:"Create a Rule"})," > ",(0,t.jsx)(n.strong,{children:"Incoming Webhook"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Choose "Then, Create a New Ticket" and use the following description:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{{webhookData.title}}\n{{webhookData.message}}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In Cado, go to ",(0,t.jsx)(n.strong,{children:"Settings > Integrations > Webhooks"}),', and add a new webhook with the Jira webhook URL. Select the "High Severity Alarms" event as an example.']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Jira Webhook",src:o(8375).A+"",width:"2300",height:"1324"})}),"\n",(0,t.jsx)(n.p,{children:'More complex webhooks are available to the Detection webhooks, for example this can be set as the "Custom Payload" in Cado for the "Detection Updated" webhook:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "detection_id": "$detection_id",\n  "event_type": "$event_type",\n  "group_id": "$group_id",\n  "message": "$Event",\n  "title": "$Title"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"And correspondingly in Jira:"}),"\n",(0,t.jsx)(n.p,{children:"Summary:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[{{webhookData.event_type}}] - {{webhookData.title}}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Description:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"{{webhookData.message}}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Additional fields:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "update": {\n        "labels": [\n            {\n                "set": ["Cado_Group_{{webhookData.group_id}}"]\n            }\n        ]\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"servicenow-integration",children:"ServiceNow Integration"}),"\n",(0,t.jsx)(n.p,{children:"To integrate with ServiceNow:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://www.servicenow.com/community/in-other-news/how-to-integrate-webhooks-into-servicenow/ba-p/2271745",children:"ServiceNow documentation"})," to create incoming webhooks."]}),"\n",(0,t.jsx)(n.li,{children:"Create the webhook in the ServiceNow project, similar to the steps outlined for Jira."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8375:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/jira_webhook-fc08a7a79d2c9c2e5e2b61545960462b.png"},2039:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/webhooks-delete-09740d9658ce1f18e810770c50c862a3.png"},6014:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/webhooks-new-16a30bbe0cfde962ffb08045fee2902c.png"},3277:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/webhooks-settings-9eb14e87309649b9936e1fe52d0bac12.png"},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);