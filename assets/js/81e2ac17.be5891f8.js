"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[3707],{7674:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=s(74848),r=s(28453);const o={title:"EKS",hide_title:!0,sidebar_position:5},t="How to Import Data from AWS EKS",a={id:"cado/discovery-import/aws/aws-eks",title:"EKS",description:"The Cado platform enables the collection of key logs and forensic artifacts from containers running in an AWS EKS cluster. There are three main options when acquiring data from EKS:",source:"@site/docs/cado/discovery-import/aws/aws-eks.md",sourceDirName:"cado/discovery-import/aws",slug:"/cado/discovery-import/aws/aws-eks",permalink:"/cado/discovery-import/aws/aws-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/aws/aws-eks.md",tags:[],version:"current",lastUpdatedAt:1741200188,formattedLastUpdatedAt:"Mar 5, 2025",sidebarPosition:5,frontMatter:{title:"EKS",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ECS",permalink:"/cado/discovery-import/aws/aws-ecs"},next:{title:"Lambda",permalink:"/cado/discovery-import/aws/aws-lambda"}},l={},c=[{value:"Import Steps",id:"import-steps",level:2},{value:"Known Limitations",id:"known-limitations",level:2},{value:"Configuring the Cluster RBAC for Use with Cado",id:"configuring-the-cluster-rbac-for-use-with-cado",level:2},{value:"RBAC ClusterRole and ClusterRoleBinding",id:"rbac-clusterrole-and-clusterrolebinding",level:3},{value:"Linking AWS IAM to Your Cluster RBAC",id:"linking-aws-iam-to-your-cluster-rbac",level:2},{value:"Data Flow Diagram",id:"data-flow-diagram",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"how-to-import-data-from-aws-eks",children:"How to Import Data from AWS EKS"}),"\n",(0,i.jsx)(n.p,{children:"The Cado platform enables the collection of key logs and forensic artifacts from containers running in an AWS EKS cluster. There are three main options when acquiring data from EKS:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"EKS Options",src:s(74679).A+"",width:"1674",height:"732"})}),"\n",(0,i.jsx)(n.h2,{id:"import-steps",children:"Import Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Import > Cloud"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cado Import Screen showing the AWS EKS options",src:s(43913).A+"",width:"1522",height:"363"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Follow the prompts to select your ",(0,i.jsx)(n.strong,{children:"Cluster"}),", ",(0,i.jsx)(n.strong,{children:"Pod"}),", and ",(0,i.jsx)(n.strong,{children:"Container"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"When choosing the role in the UI, make sure to select the role configured for the account where your EKS cluster resides."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cado Import Screen showing the available AWS EKS Clusters",src:s(21930).A+"",width:"1842",height:"563"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cado will automatically collect key logs and forensic artifacts from the selected container to facilitate your investigation. The import and processing typically take a few minutes to complete."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cado showing the confirmation screen of a successful AWS EKS container capture",src:s(60787).A+"",width:"2684",height:"340"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cado can acquire artifacts from containers built with ",(0,i.jsx)(n.strong,{children:"distroless containers"})," and ",(0,i.jsx)(n.strong,{children:"private clusters"})," using Cado Host only. Containers with the ",(0,i.jsx)(n.code,{children:"gcr.io/distroless"})," image tag will be hidden. For more details, see [Kubernetes Deployments]."]}),"\n",(0,i.jsxs)(n.li,{children:["Cado will hide pods running under the following namespaces, which are generally system-level namespaces running a distroless environment:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"kube-system"}),", ",(0,i.jsx)(n.code,{children:"kube-public"}),", ",(0,i.jsx)(n.code,{children:"kube-node-lease"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gke-gmp-system"}),", ",(0,i.jsx)(n.code,{children:"aks-command"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gmp-system"}),", ",(0,i.jsx)(n.code,{children:"calico-system"}),", ",(0,i.jsx)(n.code,{children:"tigera-operator"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-cluster-rbac-for-use-with-cado",children:"Configuring the Cluster RBAC for Use with Cado"}),"\n",(0,i.jsx)(n.p,{children:"To acquire artifacts from a container, the following Kubernetes permissions must be enabled for each cluster:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pods"})," - ",(0,i.jsx)(n.code,{children:"get"}),", ",(0,i.jsx)(n.code,{children:"list"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pods/exec"})," - ",(0,i.jsx)(n.code,{children:"create"}),", ",(0,i.jsx)(n.code,{children:"get"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rbac-clusterrole-and-clusterrolebinding",children:"RBAC ClusterRole and ClusterRoleBinding"}),"\n",(0,i.jsx)(n.p,{children:"We recommend adding the following ClusterRole and ClusterRoleBinding to your cluster\u2019s RBAC configuration with the permissions listed above."}),"\n",(0,i.jsxs)(n.p,{children:["For instructions on managing role maps, refer to ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html",children:"this AWS guide"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: cado-eks-cluster-role\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "list"]\n- apiGroups: [""]\n  resources: ["pods/exec"]\n  verbs: ["create", "get"]\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: cado-eks-cluster-role-binding\nsubjects:\n- kind: Group\n  name: cado\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: cado-eks-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n"})}),"\n",(0,i.jsx)(n.h2,{id:"linking-aws-iam-to-your-cluster-rbac",children:"Linking AWS IAM to Your Cluster RBAC"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Use the role ARN added in the ",(0,i.jsx)(n.a,{href:"/cado/deploy/cross/cross-account-creation#step-2-add-target-aws-role-arn-to-the-cado-platform",children:"Cross Account Creation"})," that corresponds to the AWS Account ID where the cluster resides."]})}),"\n",(0,i.jsxs)(n.p,{children:["You need to add the appropriate Cado IAM role to your EKS RBAC configuration. Without this, you will encounter an error stating: ",(0,i.jsx)(n.code,{children:"This role is not configured to authorize with this EKS cluster"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/",children:"this AWS guide"})," for instructions on adding your role to the EKS RBAC. If you have ",(0,i.jsx)(n.code,{children:"eksctl"})," configured, you can run the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=<group>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you added the ClusterRole and ClusterRoleBindings as shown above, the group will be ",(0,i.jsx)(n.code,{children:"cado"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=cado\n"})}),"\n",(0,i.jsx)(n.p,{children:"Ensure the following IAM permissions are attached to your IAM role:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\t"eks:ListClusters",\n\t"eks:DescribeCluster",\n'})}),"\n",(0,i.jsx)(n.h3,{id:"data-flow-diagram",children:"Data Flow Diagram"}),"\n",(0,i.jsx)(n.p,{children:"Below is a diagram illustrating how EKS acquisitions operate:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"EKS Data Flow",src:s(19733).A+"",width:"1858",height:"1108"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19733:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/eks-collection-bea8d7a273645ff8b0db0648f377f4df.png"},74679:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/eks-options-c8ae61eb3df024a44ad4155fdcc299b3.png"},21930:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/eks2-61bad122854ee7bda7589ab4d9c32e68.png"},60787:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/eks3-1d4a0615141570987cd405548b7ab73e.png"},43913:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/import-cloud-focus-2430bd09657ad2f5e88391377ba1dc53.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);