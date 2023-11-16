"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6909],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1964:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"EKS",hide_title:!0,sidebar_position:5},i="AWS EKS",s={unversionedId:"cado-response/discovery-import/import/aws/aws-eks",id:"cado-response/discovery-import/import/aws/aws-eks",title:"EKS",description:"The Cado platform will collect key logs and forensic artifacts from AWS EKS containers.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-eks.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-eks",permalink:"/cado-response/discovery-import/import/aws/aws-eks",draft:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-eks.md",tags:[],version:"current",lastUpdatedAt:1700160375,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:5,frontMatter:{title:"EKS",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ECS",permalink:"/cado-response/discovery-import/import/aws/aws-ecs"},next:{title:"Lambda",permalink:"/cado-response/discovery-import/import/aws/aws-lambda"}},l={},c=[{value:"Import Steps",id:"import-steps",level:2},{value:"EKS RBAC Configuration",id:"eks-rbac-configuration",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-eks"},"AWS EKS"),(0,n.kt)("p",null,"The Cado platform will collect key logs and forensic artifacts from AWS EKS containers."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Due to the way the Cado platform interacts with Kubernetes, it is not possible to import containers built from a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images"},"distroless")," image.")),(0,n.kt)("h2",{id:"import-steps"},"Import Steps"),(0,n.kt)("p",null,"1) Go to ",(0,n.kt)("strong",{parentName:"p"},"Import > Cloud")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Import Screen showing the AWS EKS options",src:o(263).Z,width:"842",height:"242"})),(0,n.kt)("p",null,"2) Go through the steps to choose your ",(0,n.kt)("strong",{parentName:"p"},"Cluster"),", ",(0,n.kt)("strong",{parentName:"p"},"Pod")," and ",(0,n.kt)("strong",{parentName:"p"},"Container"),":"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When selecting the role in the UI, select the role configured for the account where your EKS cluster resides")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado Import Screen showing the available AWS EKS Clusters",src:o(6599).Z,width:"1842",height:"563"})),(0,n.kt)("p",null,"3) Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Cado showing the confirmation screen of a successful AWS EKS container capture",src:o(1574).Z,width:"1795",height:"698"})),(0,n.kt)("h2",{id:"eks-rbac-configuration"},"EKS RBAC Configuration"),(0,n.kt)("p",null,"You'll need to add the appropriate configued Cado IAM role to your EKS RBAC configuration. Without\nthis you will see an error message saying that ",(0,n.kt)("inlineCode",{parentName:"p"},"This role is not configured to authorize with this EKS cluster"),"."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/"},"the following AWS guide"),"\non how to add your role to the EKS RBAC, or if you have eksctl configured, you can use the following command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn <iam_role> --group <group>")),(0,n.kt)("p",null,"You can configure groups by configuring your Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"rolebinding")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrolebinding")," ConfigMaps. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html"},"the following AWS guide")," for instructions of manipulating the role maps."),(0,n.kt)("p",null,"You must also make sure the following IAM permissions are attached to your IAM role:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    "eks:ListClusters",\n    "eks:DescribeCluster",\n    "eks:UpdateClusterConfig"\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("h3",{parentName:"admonition",id:"which-iam-role-should-i-use"},"Which IAM role should I use?"),(0,n.kt)("p",{parentName:"admonition"},"Depending on where your EKS cluster is deployed, you'll need to choose a different IAM role to configure with the RBAC configuration."),(0,n.kt)("h4",{parentName:"admonition",id:"the-cluster-resides-in-the-same-account-as-cado"},"The cluster resides in the same account as Cado:"),(0,n.kt)("p",{parentName:"admonition"},"For a single account import you should  choose the configured role inside ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings > Cloud > AWS"),"."),(0,n.kt)("h4",{parentName:"admonition",id:"the-cluster-is-deployed-in-a-seperate-account-from-cado"},"The cluster is deployed in a seperate account from Cado:"),(0,n.kt)("p",{parentName:"admonition"},"All roles in a chain must be configured with the EKS RBAC. If you're using a different role, then the Cado roles need to also be\nincluded in the RBAC, not just the cross account created in ",(0,n.kt)("a",{parentName:"p",href:"/cado-response/deploy/aws/iam/cross-account-creation"},"AWS Cross Account Creation"),".")))}d.isMDXComponent=!0},6599:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/eks2-61bad122854ee7bda7589ab4d9c32e68.png"},1574:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},263:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"}}]);