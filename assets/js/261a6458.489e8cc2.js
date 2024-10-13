"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[5573],{4762:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var n=i(5893),A=i(1151);const s={title:"Getting started example",hide_title:!0,sidebar_position:1},a="Getting Started with the CTF Investigation",o={id:"cado/investigate/ctf-tutorial",title:"Getting started example",description:"Cado provides a Capture the Flag (CTF) data set to help you get familiar with the Cado platform.",source:"@site/docs/cado/investigate/ctf-tutorial.md",sourceDirName:"cado/investigate",slug:"/cado/investigate/ctf-tutorial",permalink:"/cado/investigate/ctf-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/investigate/ctf-tutorial.md",tags:[],version:"current",lastUpdatedAt:1728823122,formattedLastUpdatedAt:"Oct 13, 2024",sidebarPosition:1,frontMatter:{title:"Getting started example",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tanium",permalink:"/cado/integrations/xdr/tanium"},next:{title:"Evidence",permalink:"/cado/investigate/evidence"}},c={},r=[{value:"Create an Investigation",id:"create-an-investigation",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Investigate",id:"investigate",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,A.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started-with-the-ctf-investigation",children:"Getting Started with the CTF Investigation"}),"\n",(0,n.jsx)(t.p,{children:"Cado provides a Capture the Flag (CTF) data set to help you get familiar with the Cado platform."}),"\n",(0,n.jsx)(t.h2,{id:"create-an-investigation",children:"Create an Investigation"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Begin by creating a new ",(0,n.jsx)(t.a,{href:"/cado/discovery-import/investigations",children:"investigation"})," in the Cado platform."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create investigation",src:i(1357).Z+"",width:"2556",height:"1212"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Normally, you would import data from various sources by clicking the ",(0,n.jsx)(t.strong,{children:'"Import"'})," button within the project:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Import data",src:i(4412).Z+"",width:"672",height:"102"})}),"\n",(0,n.jsxs)(t.p,{children:["For this CTF, the data has already been imported for you. Navigate to the ",(0,n.jsx)(t.strong,{children:"Help"})," page and click ",(0,n.jsx)(t.strong,{children:"\u201cImport CTF data\u201d"}),". The import process will take a few minutes."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Import CTF",src:i(351).Z+"",width:"1370",height:"186"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Platform"})," button on the left menu to monitor the processing status. Once processing is complete, you will see the data in your investigation."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Platform button",src:i(6220).Z+"",width:"364",height:"90"}),"\n",(0,n.jsx)(t.img,{alt:"Processing",src:i(4142).Z+"",width:"3306",height:"1222"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open the investigation by returning to the main dashboard and selecting the investigation. You can now start exploring the data."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Investigation",src:i(6762).Z+"",width:"3456",height:"1624"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"scenario",children:"Scenario"}),"\n",(0,n.jsx)(t.p,{children:"AWS GuardDuty raised an alert about an instance in our AWS account accessing a known Bitcoin mining address. We imported AWS GuardDuty logs and a disk image of the instance in question. The original image file was over 8GB, but for this CTF, we reduced it to around 30MB."}),"\n",(0,n.jsx)(t.h2,{id:"investigate",children:"Investigate"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Insights"})," page will display key findings from the data:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Insights",src:i(6632).Z+"",width:"3456",height:"1684"})}),"\n",(0,n.jsx)(t.p,{children:"You can quickly assess what an attacker might have done by reviewing the timeline. There are two main ways to do this:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.strong,{children:"Automated Investigation"})," tab to view events ranked by a machine learning algorithm:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Timeline",src:i(9700).Z+"",width:"3352",height:"1078"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"Search"})," and filter for ",(0,n.jsx)(t.strong,{children:"Malicious"})," and ",(0,n.jsx)(t.strong,{children:"Suspicious"})," events:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Search",src:i(4912).Z+"",width:"3358",height:"880"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In either view, click on the filename ",(0,n.jsx)(t.strong,{children:'"a.sh"'})," to examine the file contents. This is the script that installed a crypto miner on the instance:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"File",src:i(5557).Z+"",width:"3246",height:"732"})}),"\n",(0,n.jsxs)(t.p,{children:["Next, click the ",(0,n.jsx)(t.strong,{children:"uploads"})," folder in the file tree to explore its contents. This is where the script was uploaded:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Folder",src:i(227).Z+"",width:"3252",height:"766"})}),"\n",(0,n.jsxs)(t.p,{children:["Returning to the ",(0,n.jsx)(t.strong,{children:"a.sh"})," file, you can see the script that was executed:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Script",src:i(2830).Z+"",width:"3148",height:"622"})}),"\n",(0,n.jsxs)(t.p,{children:["Click the highlighted filepath ",(0,n.jsx)(t.strong,{children:'"/etc/crontab"'})," to investigate further using the search function:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Crontab",src:i(7839).Z+"",width:"3340",height:"1630"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"This is a simple example of how you can use the Cado platform to investigate an incident. The platform enables you to quickly identify key events and artifacts, while providing powerful tools to dive deeper into the data."})]})}function d(e={}){const{wrapper:t}={...(0,A.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4142:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ctf-processing-dadf07be6fb45468c6058f8ef5887942.png"},351:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/ctf-fd7540731400cc26e41720f98e135317.png"},6220:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},1357:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial1-7a6faeaaafb5eecf9b2881126a3229c0.png"},7839:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial10-6d6c466667c76e844314d35df8b0e7fc.png"},4412:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial2-ff964e064255de5320fa65c81dd5be5d.png"},6762:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial3-e06772243b090abe39169f7bca860ab5.png"},6632:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial4-bb4ae491d6b88fa254481eff5842ad14.png"},9700:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial5-fc823b694101ccc2223a46f420ca9c60.png"},4912:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial6-08eecf561fc4386abb8bf105943c8496.png"},5557:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial7-0b2cbe504534b9802c7e89d0882838c6.png"},227:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial8-19324dc97c9047937ceddf7b00f2ea29.png"},2830:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tutorial9-7b16dde64f2973e86aa06f2992a637c6.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(7294);const A={},s=n.createContext(A);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);