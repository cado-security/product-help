"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[2090],{5009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(5893),i=n(1151);const s={title:"Sep 23 2022 - AWS Role Update",hide_title:!0,sidebar_position:1},a="AWS Role Update",r={id:"support-bulletins/role-update",title:"Sep 23 2022 - AWS Role Update",description:"On Sep 21st, 2022 AWS announced a change with immediate effect to AWS roles that affects the operation of the Cado platform. These new changes mean that any Cado installation deployed after June 30th will no longer operate correctly, including not being able to initialize new workers for data acquisition or processing.",source:"@site/docs/support-bulletins/092322-role-update.md",sourceDirName:"support-bulletins",slug:"/support-bulletins/role-update",permalink:"/support-bulletins/role-update",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/support-bulletins/092322-role-update.md",tags:[],version:"current",lastUpdatedAt:1727886201,formattedLastUpdatedAt:"Oct 2, 2024",sidebarPosition:1,frontMatter:{title:"Sep 23 2022 - AWS Role Update",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Community Edition EULA",permalink:"/eula/community-eula"},next:{title:"Release Notes",permalink:"/release-notes/"}},l={},c=[{value:"Instructions for manually updating your system",id:"instructions-for-manually-updating-your-system",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"aws-role-update",children:"AWS Role Update"}),"\n",(0,o.jsxs)(t.p,{children:["On Sep 21st, 2022 ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/blogs/security/announcing-an-update-to-iam-role-trust-policy-behavior/",children:"AWS announced a change with immediate effect to AWS roles"})," that affects the operation of the Cado platform. These new changes mean that ",(0,o.jsx)(t.strong,{children:"any Cado installation deployed after June 30th will no longer operate correctly"}),", including not being able to initialize new workers for data acquisition or processing."]}),"\n",(0,o.jsx)(t.p,{children:"Installations deployed prior to June 30th will continue to function, and Cado plans to issue an update during the week commencing Sep 26th, 2022 that will fix the issue. In the meantime - if needed - there are manual steps you can take in order to ensure that your Cado platform continues to function properly. These are detailed below."}),"\n",(0,o.jsx)(t.p,{children:"We are working with AWS to prevent the recurrence of unexpected changes."}),"\n",(0,o.jsx)(t.h2,{id:"instructions-for-manually-updating-your-system",children:"Instructions for manually updating your system"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Cado Response instance, navigate to ",(0,o.jsx)(t.em,{children:"Settings > Cloud"}),' and copy the value in the "AWS Role" box:']}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AWS Role",src:n(6531).Z+"",width:"937",height:"160"})}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsx)(t.li,{children:"In the AWS IAM console, navigate to your Cado Response role"}),"\n",(0,o.jsx)(t.li,{children:'Select the "Trust relationships" tab'}),"\n",(0,o.jsx)(t.li,{children:'Select "Edit trust policy". Yours should currently look like this:'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AWS Role",src:n(6600).Z+"",width:"1590",height:"499"})}),"\n",(0,o.jsxs)(t.ol,{start:"5",children:["\n",(0,o.jsxs)(t.li,{children:['Add a new line inside the "Principal" block with the text ',(0,o.jsx)(t.code,{children:'\u201cAWS\u201d:"<ARN of your Cado Response role>\u201d'})," ( you can paste in your Cado Response role here )."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Your new Trust Policy will look like this, with your ARN in the designated place"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AWS Role",src:n(3992).Z+"",width:"1651",height:"540"})}),"\n",(0,o.jsxs)(t.ol,{start:"6",children:["\n",(0,o.jsx)(t.li,{children:'Select "Update Policy"'}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6531:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/aws-role-cd08b26ec325b76b21b6474cebd655ce.png"},3992:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/trust-policy-after-fc5070acc2b0cc2517b173411012c544.png"},6600:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/trust-policy-before-40a6bce9fb9a90bb0aa8630168ef6b91.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);