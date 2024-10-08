"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6909],{2009:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=n(5893),r=n(1151);const t={title:"EKS",hide_title:!0,sidebar_position:5},i="AWS EKS",a={id:"cado-response/discovery-import/import/aws/aws-eks",title:"EKS",description:"The Cado platform will collect key logs and forensic artifacts containers running in an AWS EKS cluster.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-eks.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-eks",permalink:"/cado-response/discovery-import/import/aws/aws-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-eks.md",tags:[],version:"current",lastUpdatedAt:1728403518,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:5,frontMatter:{title:"EKS",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ECS",permalink:"/cado-response/discovery-import/import/aws/aws-ecs"},next:{title:"Lambda",permalink:"/cado-response/discovery-import/import/aws/aws-lambda"}},l={},c=[{value:"Known Limitations",id:"known-limitations",level:2},{value:"Configuring the Cluster RBAC for use with Cado",id:"configuring-the-cluster-rbac-for-use-with-cado",level:2},{value:"RBAC ClusterRole and ClusterRoleBinding",id:"rbac-clusterrole-and-clusterrolebinding",level:3},{value:"Linking AWS IAM to your Cluster RBAC",id:"linking-aws-iam-to-your-cluster-rbac",level:3},{value:"Import Steps",id:"import-steps",level:2},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"aws-eks",children:"AWS EKS"}),"\n",(0,o.jsx)(s.p,{children:"The Cado platform will collect key logs and forensic artifacts containers running in an AWS EKS cluster.\nThere are three core options when acquiring EKS:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"EKS Options",src:n(9825).Z+"",width:"1674",height:"732"})}),"\n",(0,o.jsx)(s.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["The Cado platform can acquire artifacts from a container built with distroless containers, and private clusters, via Cado Host only. The platform will hide containers with the ",(0,o.jsx)(s.code,{children:"gcr.io/distroless"})," image tag. For more information, please see [Kubernetes Deployments]."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["The Cado platform will hide pods running under the following namespaces: ",(0,o.jsx)(s.code,{children:"kube-system"}),", ",(0,o.jsx)(s.code,{children:"kube-public"}),", ",(0,o.jsx)(s.code,{children:"kube-node-lease"}),", ",(0,o.jsx)(s.code,{children:"gke-gmp-system"}),", ",(0,o.jsx)(s.code,{children:"aks-command"}),", ",(0,o.jsx)(s.code,{children:"gmp-system"}),", ",(0,o.jsx)(s.code,{children:"calico-system"}),", and ",(0,o.jsx)(s.code,{children:"tigera-operator"}),". These are system level namespaces, which are often running a distroless environment, which the platform does not support."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"configuring-the-cluster-rbac-for-use-with-cado",children:"Configuring the Cluster RBAC for use with Cado"}),"\n",(0,o.jsx)(s.p,{children:"In order for the Cado platform to acquire artifacts from a container, the following Kubernetes permissions are required:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"pods"})," - ",(0,o.jsx)(s.code,{children:"get, list"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"pods/exec"})," - ",(0,o.jsx)(s.code,{children:"create, get"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"These permissions are required for every cluster you intend to acquire through the platform."}),"\n",(0,o.jsx)(s.h3,{id:"rbac-clusterrole-and-clusterrolebinding",children:"RBAC ClusterRole and ClusterRoleBinding"}),"\n",(0,o.jsx)(s.p,{children:"We recommend adding the following ClusterRole and ClusterRoleBinding to your Cluster RBAC with the permissions mentioned above."}),"\n",(0,o.jsxs)(s.p,{children:["See ",(0,o.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html",children:"the following AWS guide"})," for instructions of manipulating the role maps."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cado-eks-cluster-role\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "list"]\n- apiGroups: [""]\n  resources: ["pods/exec"]\n  verbs: ["create", "get"]\n'})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: cado-eks-cluster-role-binding\nsubjects:\n- kind: Group\n  name: cado\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: cado-eks-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n"})}),"\n",(0,o.jsx)(s.h3,{id:"linking-aws-iam-to-your-cluster-rbac",children:"Linking AWS IAM to your Cluster RBAC"}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["You should use the role ARN added in the ",(0,o.jsx)(s.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation#step-2-add-target-aws-role-arn-to-the-cado-platform",children:"Cross Account Creation"})," that relates to the AWS Account ID where the cluster resides."]})}),"\n",(0,o.jsxs)(s.p,{children:["You'll need to add the appropriately configued Cado IAM role to your EKS RBAC configuration. Without\nthis you will see an error message saying that ",(0,o.jsx)(s.code,{children:"This role is not configured to authorize with this EKS cluster"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["See ",(0,o.jsx)(s.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/",children:"the following AWS guide"}),"\non how to add your role to the EKS RBAC, or if you have eksctl configured, you can use the following command:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=<group>"})}),"\n",(0,o.jsxs)(s.p,{children:["If you added the ClusterRole and ClusterRoleBindings above, the group would be ",(0,o.jsx)(s.code,{children:"cado"}),":"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=cado"})}),"\n",(0,o.jsx)(s.p,{children:"You must also make sure the following IAM permissions are attached to your IAM role:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'\t"eks:ListClusters",\n\t"eks:DescribeCluster",\n'})}),"\n",(0,o.jsx)(s.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Go to ",(0,o.jsx)(s.strong,{children:"Import > Cloud"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Cado Import Screen showing the AWS EKS options",src:n(2415).Z+"",width:"1522",height:"363"})}),"\n",(0,o.jsxs)(s.ol,{start:"2",children:["\n",(0,o.jsxs)(s.li,{children:["Go through the steps to choose your ",(0,o.jsx)(s.strong,{children:"Cluster"}),", ",(0,o.jsx)(s.strong,{children:"Pod"})," and ",(0,o.jsx)(s.strong,{children:"Container"}),":"]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsx)(s.p,{children:"When selecting the role in the UI, select the role configured for the account where your EKS cluster resides"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Cado Import Screen showing the available AWS EKS Clusters",src:n(6599).Z+"",width:"1842",height:"563"})}),"\n",(0,o.jsxs)(s.ol,{start:"3",children:["\n",(0,o.jsx)(s.li,{children:"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Cado showing the confirmation screen of a successful AWS EKS container capture",src:n(1574).Z+"",width:"1795",height:"698"})}),"\n",(0,o.jsx)(s.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,o.jsxs)(s.p,{children:["For a diagram of how our ECS acquisitions operate, please see our ",(0,o.jsx)(s.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23258925265809-How-do-EKS-acquisitions-work",children:"Knowledge Base"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9825:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/eks-options-7c1b6fabacf997f39cbe1027da11d464.png"},6599:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/eks2-61bad122854ee7bda7589ab4d9c32e68.png"},1574:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},2415:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/import-cloud-focus-2430bd09657ad2f5e88391377ba1dc53.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var o=n(7294);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);