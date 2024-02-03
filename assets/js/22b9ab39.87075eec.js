"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[10],{8086:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(5893),s=o(1151);const i={title:"RedHat Openshift",hide_title:!0,sidebar_position:1},r="RedHat Openshift",c={id:"cado-response/discovery-import/import/openshift/openshift",title:"RedHat Openshift",description:"First, generate a collection script using Cado Host under Import > Cado Host.",source:"@site/docs/cado-response/discovery-import/import/openshift/openshift.md",sourceDirName:"cado-response/discovery-import/import/openshift",slug:"/cado-response/discovery-import/import/openshift/",permalink:"/cado-response/discovery-import/import/openshift/",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/openshift/openshift.md",tags:[],version:"current",lastUpdatedAt:1706971504,formattedLastUpdatedAt:"Feb 3, 2024",sidebarPosition:1,frontMatter:{title:"RedHat Openshift",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Oracle Cloud Virtual Machines",permalink:"/cado-response/discovery-import/import/oracle/virtual-machine"},next:{title:"Exporting Data",permalink:"/cado-response/export/intro"}},a={},p=[];function d(e){const t={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"redhat-openshift",children:"RedHat Openshift"}),"\n",(0,n.jsx)(t.p,{children:"First, generate a collection script using Cado Host under Import > Cado Host."}),"\n",(0,n.jsx)(t.p,{children:"Then, you will need to execute the script on the target container, as such:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"oc login --token=sha256~... --server=https://api.system.openshiftapps.com:443\noc exec container-name -c container -- mkdir -p /tmp/cado-host\noc exec container-name -c container -- curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host --output /tmp/cado-host/cado-host\noc exec container-name -c container -- chmod +x /tmp/cado-host/cado-host\noc exec container-name -c container -- ./tmp/cado-host/cado-host --presigned_data ...\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Openshift",src:o(989).Z+"",width:"1728",height:"482"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},989:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/openshift-5e5a73931173ee987518a94be8fb729b.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>r});var n=o(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);