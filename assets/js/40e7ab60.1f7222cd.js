"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[4692],{4474:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(5893),r=t(1151);const i={title:"ECS",hide_title:!0,sidebar_position:4},o="AWS ECS Support",a={id:"cado-response/discovery-import/import/aws/aws-ecs",title:"ECS",description:"The Cado platform will collect key logs and forensic artifacts from AWS ECS systems.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-ecs.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-ecs",permalink:"/cado-response/discovery-import/import/aws/aws-ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-ecs.md",tags:[],version:"current",lastUpdatedAt:1705665258,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:4,frontMatter:{title:"ECS",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AMI, EBS Snapshot and Volume",permalink:"/cado-response/discovery-import/import/aws/aws-ami"},next:{title:"EKS",permalink:"/cado-response/discovery-import/import/aws/aws-eks"}},c={},l=[{value:"ECS Import Requirements",id:"ecs-import-requirements",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"aws-ecs-support",children:"AWS ECS Support"}),"\n",(0,n.jsx)(s.p,{children:"The Cado platform will collect key logs and forensic artifacts from AWS ECS systems."}),"\n",(0,n.jsx)(s.h1,{id:"how-to-import",children:"How to Import"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Import > Cloud"}),"\n",(0,n.jsx)(s.img,{alt:"Import ECS 1",src:t(263).Z+"",width:"842",height:"242"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Then select the target Cluster and Task:\n",(0,n.jsx)(s.img,{alt:"Import ECS 2",src:t(6384).Z+"",width:"1837",height:"500"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Then click Acquire Container."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Confirm details and click ",(0,n.jsx)(s.strong,{children:"Start Import"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Import ECS 3",src:t(4257).Z+"",width:"1838",height:"397"})}),"\n",(0,n.jsx)(s.p,{children:"For a typical acquisition, import and processing will take a few minutes to complete."}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.h2,{id:"ecs-import-requirements",children:"ECS Import Requirements"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["You\u2019ll need to enable ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html",children:"enableExecuteCommand"})," on your ECS task, there is no way to add this to an already existing task."]}),"\n",(0,n.jsx)(s.li,{children:"Currently ECS acquisitions are only available on Linux based containers."}),"\n"]}),(0,n.jsxs)(s.p,{children:["You will receive an error such as this:\n",(0,n.jsx)(s.img,{alt:"ECS Error",src:t(1472).Z+"",width:"1796",height:"476"})]}),(0,n.jsx)(s.p,{children:"If either:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Your IAM role doesn't have the required ECS permissions for IAM:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'\t"ecs:ListClusters",\n\t"ecs:DescribeClusters",\n\t"ecs:ListServices",\n\t"ecs:DescribeServices",\n\t"ecs:ListTasks",\n\t"ecs:DescribeTasks",\n\t"ecs:ExecuteCommand"\n'})}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Or the Cluster and Task do not have ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html",children:"enableExecuteCommand"})," enabled."]}),"\n"]})]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6384:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ecs_2-ddea443833f7163d0055ffe587d79e5c.png"},4257:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ecs_3-1e10eeaa4f63181ff0cd5875d2e5b8f2.png"},1472:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/ecs_error-0f87edd56a3f111531fa1a915ee6e13b.png"},263:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>o});var n=t(7294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);