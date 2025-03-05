"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[588],{35577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(74848),s=o(28453);const i={title:"RedHat Openshift",hide_title:!0,sidebar_position:8},a="How to Import Data from RedHat OpenShift",r={id:"cado/discovery-import/openshift",title:"RedHat Openshift",description:"To import data from RedHat OpenShift, follow these steps:",source:"@site/docs/cado/discovery-import/openshift.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/openshift",permalink:"/cado/discovery-import/openshift",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/openshift.md",tags:[],version:"current",lastUpdatedAt:1741200188,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:8,frontMatter:{title:"RedHat Openshift",hide_title:!0,sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"XDR platforms",permalink:"/cado/discovery-import/xdr"},next:{title:"Kubernetes",permalink:"/cado/discovery-import/kubernetes"}},c={},d=[{value:"Red Hat OpenShift Service on AWS (ROSA)",id:"red-hat-openshift-service-on-aws-rosa",level:2}];function p(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-import-data-from-redhat-openshift",children:"How to Import Data from RedHat OpenShift"}),"\n",(0,n.jsx)(t.p,{children:"To import data from RedHat OpenShift, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Generate a Collection Script"}),":",(0,n.jsx)(t.br,{}),"\n","First, generate a Cado Host collection script by navigating to ",(0,n.jsx)(t.strong,{children:"Import > Cado Host"})," in the Cado platform."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Execute the Script on the Target Container"}),":",(0,n.jsx)(t.br,{}),"\n","Use the commands below to execute the script on the desired container within OpenShift:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"oc login --token=sha256~... --server=https://api.system.openshiftapps.com:443\noc exec pod-name -c container-name -- mkdir -p /tmp/cado-host\noc exec pod-name -c container-name -- curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host --output /tmp/cado-host/cado-host\noc exec pod-name -c container-name -- chmod +x /tmp/cado-host/cado-host\noc exec pod-name -c container-name -- /tmp/cado-host/cado-host --presigned_data ...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"pod-name"}),", ",(0,n.jsx)(t.code,{children:"container-name"}),", and ",(0,n.jsx)(t.code,{children:"--presigned_data"})," with the relevant values from your setup."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"OpenShift",src:o(6829).A+"",width:"1728",height:"482"})}),"\n",(0,n.jsx)(t.h2,{id:"red-hat-openshift-service-on-aws-rosa",children:"Red Hat OpenShift Service on AWS (ROSA)"}),"\n",(0,n.jsx)(t.p,{children:"Red Hat OpenShift Service on AWS (ROSA) runs on Amazon Elastic Compute Cloud (EC2) instances. ROSA is a managed service that uses EC2 to deploy, scale, and build containerized applications."}),"\n",(0,n.jsxs)(t.p,{children:["This means that you can import data from ROSA by importing EC2 instances as usual. For more information, see ",(0,n.jsx)(t.a,{href:"/cado/discovery-import/aws/aws-ec2",children:"How to Import Data from AWS EC2"}),".\nMost clusters run on containerd, which can limit the data from inside containers that can be collected vs Docker."]}),"\n",(0,n.jsxs)(t.p,{children:['The Cado Host method above for OpenShift can work with ROSA as well, as "oc exec" commands can be used to execute the script on the desired container within ROSA after ',(0,n.jsx)(t.a,{href:"https://docs.openshift.com/rosa/rosa_install_access_delete_clusters/rosa-sts-accessing-cluster.html",children:"logging in"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},6829:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/openshift-a16dfd025c2c2fbe34cf31afc1523e2e.png"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);