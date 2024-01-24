"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[6909],{2009:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=s(5893),r=s(1151);const t={title:"EKS",hide_title:!0,sidebar_position:5},i="AWS EKS",a={id:"cado-response/discovery-import/import/aws/aws-eks",title:"EKS",description:"The Cado platform will collect key logs and forensic artifacts containers running in an AWS EKS cluster.",source:"@site/docs/cado-response/discovery-import/import/aws/aws-eks.md",sourceDirName:"cado-response/discovery-import/import/aws",slug:"/cado-response/discovery-import/import/aws/aws-eks",permalink:"/cado-response/discovery-import/import/aws/aws-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/discovery-import/import/aws/aws-eks.md",tags:[],version:"current",lastUpdatedAt:1706098469,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:5,frontMatter:{title:"EKS",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ECS",permalink:"/cado-response/discovery-import/import/aws/aws-ecs"},next:{title:"Lambda",permalink:"/cado-response/discovery-import/import/aws/aws-lambda"}},l={},c=[{value:"Known Limitations",id:"known-limitations",level:2},{value:"Configuring the Cluster RBAC for use with Cado",id:"configuring-the-cluster-rbac-for-use-with-cado",level:2},{value:"RBAC ClusterRole and ClusterRoleBinding",id:"rbac-clusterrole-and-clusterrolebinding",level:3},{value:"Linking AWS IAM to your Cluster RBAC",id:"linking-aws-iam-to-your-cluster-rbac",level:3},{value:"Import Steps",id:"import-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"aws-eks",children:"AWS EKS"}),"\n",(0,o.jsx)(n.p,{children:"The Cado platform will collect key logs and forensic artifacts containers running in an AWS EKS cluster."}),"\n",(0,o.jsx)(n.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The Cado platform cannot acquire artifacts from a container built with a ",(0,o.jsx)(n.a,{href:"https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images",children:"distroless"})," image. This is due to the way the platform interacts with a container, which requires a shell environment, you can learn more about the command we run ",(0,o.jsx)(n.a,{href:"../../../../cado-host/deploy#using-script-builder",children:"here"}),". Additionally, the platform will hide containers with the ",(0,o.jsx)(n.code,{children:"gcr.io/distroless"})," image tag."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The Cado platform will hide pods running under the following namespaces: ",(0,o.jsx)(n.code,{children:"kube-system"}),", ",(0,o.jsx)(n.code,{children:"kube-public"}),", ",(0,o.jsx)(n.code,{children:"kube-node-lease"}),", ",(0,o.jsx)(n.code,{children:"gke-gmp-system"}),", ",(0,o.jsx)(n.code,{children:"aks-command"}),", ",(0,o.jsx)(n.code,{children:"gmp-system"}),", ",(0,o.jsx)(n.code,{children:"calico-system"}),", and ",(0,o.jsx)(n.code,{children:"tigera-operator"}),". These are system level namespaces, which are often running a distroless environment, which the platform does not support."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-cluster-rbac-for-use-with-cado",children:"Configuring the Cluster RBAC for use with Cado"}),"\n",(0,o.jsx)(n.p,{children:"In order for the Cado platform to acquire artifacts from a container, the following Kubernetes permissions are required:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pods"})," - ",(0,o.jsx)(n.code,{children:"get, list"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pods/exec"})," - ",(0,o.jsx)(n.code,{children:"create, get"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"These permissions are required for every cluster you intend to acquire through the platform."}),"\n",(0,o.jsx)(n.h3,{id:"rbac-clusterrole-and-clusterrolebinding",children:"RBAC ClusterRole and ClusterRoleBinding"}),"\n",(0,o.jsx)(n.p,{children:"We recommend adding the following ClusterRole and ClusterRoleBinding to your Cluster RBAC with the permissions mentioned above."}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html",children:"the following AWS guide"})," for instructions of manipulating the role maps."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cado-eks-cluster-role\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "list"]\n- apiGroups: [""]\n  resources: ["pods/exec"]\n  verbs: ["create", "get"]\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: cado-eks-cluster-role-binding\nsubjects:\n- kind: Group\n  name: cado\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: cado-eks-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n"})}),"\n",(0,o.jsx)(n.h3,{id:"linking-aws-iam-to-your-cluster-rbac",children:"Linking AWS IAM to your Cluster RBAC"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You should use the role ARN added in the ",(0,o.jsx)(n.a,{href:"/cado-response/deploy/aws/iam/cross-account-creation#step-2-add-target-aws-role-arn-to-the-cado-platform",children:"Cross Account Creation"})," that relates to the AWS Account ID where the cluster resides."]})}),"\n",(0,o.jsxs)(n.p,{children:["You'll need to add the appropriately configued Cado IAM role to your EKS RBAC configuration. Without\nthis you will see an error message saying that ",(0,o.jsx)(n.code,{children:"This role is not configured to authorize with this EKS cluster"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/",children:"the following AWS guide"}),"\non how to add your role to the EKS RBAC, or if you have eksctl configured, you can use the following command:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=<group>"})}),"\n",(0,o.jsxs)(n.p,{children:["If you added the ClusterRole and ClusterRoleBindings above, the group would be ",(0,o.jsx)(n.code,{children:"cado"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=cado"})}),"\n",(0,o.jsx)(n.p,{children:"You must also make sure the following IAM permissions are attached to your IAM role:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'\t"eks:ListClusters",\n\t"eks:DescribeCluster",\n'})}),"\n",(0,o.jsx)(n.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Go to ",(0,o.jsx)(n.strong,{children:"Import > Cloud"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Cado Import Screen showing the AWS EKS options",src:s(263).Z+"",width:"842",height:"242"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Go through the steps to choose your ",(0,o.jsx)(n.strong,{children:"Cluster"}),", ",(0,o.jsx)(n.strong,{children:"Pod"})," and ",(0,o.jsx)(n.strong,{children:"Container"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"When selecting the role in the UI, select the role configured for the account where your EKS cluster resides"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Cado Import Screen showing the available AWS EKS Clusters",src:s(6599).Z+"",width:"1842",height:"563"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.\nFor a typical acquisition, import and processing will take a few minutes to complete."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Cado showing the confirmation screen of a successful AWS EKS container capture",src:s(1574).Z+"",width:"1795",height:"698"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6599:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/eks2-61bad122854ee7bda7589ab4d9c32e68.png"},1574:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/eks3-fc961c2189e29adc6a2571cacf950e28.png"},263:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/import-c255e755b777d62c8e12f8b312b4f9ea.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var o=s(7294);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);