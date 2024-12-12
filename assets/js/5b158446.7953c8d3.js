"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[8870],{2321:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(4848),r=t(8453);const i={title:"Kubernetes",hide_title:!0,sidebar_position:9},o="How to Import Data from Kubernetes",c={id:"cado/discovery-import/kubernetes",title:"Kubernetes",description:"How Does Cado Import Data from EKS, ECS, AKS, and GKE?",source:"@site/docs/cado/discovery-import/kubernetes.md",sourceDirName:"cado/discovery-import",slug:"/cado/discovery-import/kubernetes",permalink:"/cado/discovery-import/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado/discovery-import/kubernetes.md",tags:[],version:"current",lastUpdatedAt:1734011942,formattedLastUpdatedAt:"Dec 12, 2024",sidebarPosition:9,frontMatter:{title:"Kubernetes",hide_title:!0,sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"RedHat Openshift",permalink:"/cado/discovery-import/openshift"},next:{title:"Google Workspace logs",permalink:"/cado/discovery-import/google-workspace-logs"}},a={},l=[{value:"How Does Cado Import Data from EKS, ECS, AKS, and GKE?",id:"how-does-cado-import-data-from-eks-ecs-aks-and-gke",level:2},{value:"Alternate Collection by Acquiring the Volume of the Node",id:"alternate-collection-by-acquiring-the-volume-of-the-node",level:2},{value:"Alternate Collection by Using Cado Host with a Sidecar Container",id:"alternate-collection-by-using-cado-host-with-a-sidecar-container",level:2},{value:"Kubernetes RBAC Requirements",id:"kubernetes-rbac-requirements",level:3},{value:"Using a Custom Image",id:"using-a-custom-image",level:3},{value:"Root Access",id:"root-access",level:3},{value:"Private Clusters with No Network Access",id:"private-clusters-with-no-network-access",level:2},{value:"Private AKS Clusters",id:"private-aks-clusters",level:3},{value:"Private GKE Clusters",id:"private-gke-clusters",level:3},{value:"Private EKS Clusters",id:"private-eks-clusters",level:3},{value:"Alternate Private EKS Cluster Access",id:"alternate-private-eks-cluster-access",level:4},{value:"Methods for Executing Kubernetes API Commands Inside a Private Cluster VPC",id:"methods-for-executing-kubernetes-api-commands-inside-a-private-cluster-vpc",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"how-to-import-data-from-kubernetes",children:"How to Import Data from Kubernetes"}),"\n",(0,n.jsx)(s.h2,{id:"how-does-cado-import-data-from-eks-ecs-aks-and-gke",children:"How Does Cado Import Data from EKS, ECS, AKS, and GKE?"}),"\n",(0,n.jsx)(s.p,{children:"When acquiring data from Kubernetes containers, Cado follows these steps by default:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Executes a shell script to download the Cado Host binary."}),"\n",(0,n.jsx)(s.li,{children:"Runs the binary to collect forensic artifacts."}),"\n",(0,n.jsx)(s.li,{children:"Uploads the collected files to cloud storage for processing."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The method used to execute the script depends on the environment. For example, ECS uses ECS execute, while EKS, AKS, and GKE use the Kubernetes control plane API, as explained ",(0,n.jsx)(s.a,{href:"https://www.cadosecurity.com/how-we-sped-up-acquiring-forensic-data-from-aws-kubernetes-and-azure-kubernetes-services-by-10-times/",children:"here"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Authentication to the Kubernetes API may require both IAM and Kubernetes RBAC permissions, which are described in service-specific documentation."}),"\n",(0,n.jsx)(s.h2,{id:"alternate-collection-by-acquiring-the-volume-of-the-node",children:"Alternate Collection by Acquiring the Volume of the Node"}),"\n",(0,n.jsx)(s.p,{children:"If executing code inside the container or connecting over the network is not possible, you can acquire the volume of the node running the container. For example, this approach works for EKS running on EC2 nodes."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If using the Docker container runtime, container file systems are usually available at ",(0,n.jsx)(s.code,{children:"/var/lib/docker/overlay2"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"If using the Containerd runtime (which is now the default for EKS), the container file system is not immediately visible. Cado is working on supporting containerd-based volume acquisitions."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"alternate-collection-by-using-cado-host-with-a-sidecar-container",children:"Alternate Collection by Using Cado Host with a Sidecar Container"}),"\n",(0,n.jsxs)(s.p,{children:["Cado supports collecting from private clusters and distroless containers by using a ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/kubectl/generated/kubectl_debug/",children:"debug container"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"To acquire data:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Import > Cado Host"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"Kubernetes"})," and follow the prompts."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cado Host K8s UI",src:t(3584).A+"",width:"479",height:"569"})}),"\n",(0,n.jsx)(s.p,{children:"This will use a command such as the following to start a debug container and execute Cado Host:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl debug -it pod-name --image=debian:latest --target=target-container -n pod-namespace -- sh -c\n"})}),"\n",(0,n.jsx)(s.p,{children:"The diagram below provides a high-level overview of how this works:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cado Host K8s Flow",src:t(124).A+"",width:"1600",height:"861"})}),"\n",(0,n.jsx)(s.h3,{id:"kubernetes-rbac-requirements",children:"Kubernetes RBAC Requirements"}),"\n",(0,n.jsxs)(s.p,{children:["Cado requires write and execute access to containers to download and run the Cado Host binary. Specifically, Cado requires ",(0,n.jsx)(s.code,{children:"get"})," and ",(0,n.jsx)(s.code,{children:"list"})," permissions for the ",(0,n.jsx)(s.code,{children:"pods"})," resource, and ",(0,n.jsx)(s.code,{children:"get"})," and ",(0,n.jsx)(s.code,{children:"create"})," permissions for the ",(0,n.jsx)(s.code,{children:"pods/exec"})," resource."]}),"\n",(0,n.jsx)(s.h3,{id:"using-a-custom-image",children:"Using a Custom Image"}),"\n",(0,n.jsxs)(s.p,{children:["In environments where the default ",(0,n.jsx)(s.code,{children:"debian:latest"})," image is not supported, you can use a custom image. The custom image must have the latest Cado Host Linux binary located at ",(0,n.jsx)(s.code,{children:"/tmp/cado-host-static/cado-host"}),". However, Cado recommends using the default ",(0,n.jsx)(s.code,{children:"debian:latest"})," image for supportability."]}),"\n",(0,n.jsx)(s.h3,{id:"root-access",children:"Root Access"}),"\n",(0,n.jsxs)(s.p,{children:["By default, Cado Host requires root access to access the underlying container file system (usually under ",(0,n.jsx)(s.code,{children:"/proc/{PID}/root"}),"). The ",(0,n.jsx)(s.code,{children:"runuser"})," command with the root user is also required to give the Cado Host process the appropriate UID and GID."]}),"\n",(0,n.jsxs)(s.p,{children:['For Kubernetes v1.30 or later, you can optionally use the "Run as non-root user" option, which leverages the ',(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",children:"sysadmin"})," profile to access the container file system."]}),"\n",(0,n.jsx)(s.h2,{id:"private-clusters-with-no-network-access",children:"Private Clusters with No Network Access"}),"\n",(0,n.jsx)(s.p,{children:"Cado requires access to the Kubernetes control plane API to acquire containers via the user interface. If network access to the Kubernetes API is not available, alternate options for acquiring data are needed."}),"\n",(0,n.jsx)(s.h3,{id:"private-aks-clusters",children:"Private AKS Clusters"}),"\n",(0,n.jsx)(s.p,{children:'Cado can acquire private AKS clusters using the normal user interface, thanks to Azure\'s "command invoke" feature for private clusters.'}),"\n",(0,n.jsx)(s.h3,{id:"private-gke-clusters",children:"Private GKE Clusters"}),"\n",(0,n.jsx)(s.p,{children:"Cado is exploring support for private GKE clusters through public endpoints on private clusters."}),"\n",(0,n.jsx)(s.h3,{id:"private-eks-clusters",children:"Private EKS Clusters"}),"\n",(0,n.jsx)(s.p,{children:'Private EKS clusters can be configured to be accessible only from within the VPC they reside in or connected networks (e.g., peered VPCs). If the cluster is configured with "Private endpoint only," you will need to use a method like VPC peering or another connection option to access the API.'}),"\n",(0,n.jsxs)(s.p,{children:["If Cado cannot access the cluster endpoint, you can use the ",(0,n.jsx)(s.strong,{children:"Alternate Private EKS Cluster Access"})," method described below."]}),"\n",(0,n.jsx)(s.h4,{id:"alternate-private-eks-cluster-access",children:"Alternate Private EKS Cluster Access"}),"\n",(0,n.jsx)(s.p,{children:"If the Cado platform does not have access to the cluster endpoint, you can acquire data by deploying the Cado Host acquisition script."}),"\n",(0,n.jsx)(s.p,{children:"To do this, connect to your EKS cluster using a command like:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"aws eks update-kubeconfig --region $Region --name $ClusterName\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Follow AWS\u2019s instructions ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html",children:"here"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Then execute the ",(0,n.jsx)(s.code,{children:"kubectl"})," script generated at ",(0,n.jsx)(s.strong,{children:"Import > Cado Host > Kubernetes"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"methods-for-executing-kubernetes-api-commands-inside-a-private-cluster-vpc",children:"Methods for Executing Kubernetes API Commands Inside a Private Cluster VPC"}),"\n",(0,n.jsx)(s.p,{children:"Various methods can be used to access the Kubernetes API in a private VPC, including:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Bastion Hosts"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SSM"})," (AWS Systems Manager)"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"AWS PrivateLink"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"AWS Cloud9"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"VPN/Direct Connect"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For details on these methods, refer to the following resources:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Bastion Hosts"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://cloudtipss.com/Create-Private-EKS-With-Bastion/",children:"How to connect using a Bastion Host"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://medium.com/@muppedaanvesh/jump-box-setup-on-eks-cluster-383ca92f51ef",children:"Terraform setup for a Bastion Host"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"SSM"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://awstip.com/securely-connect-to-a-private-eks-cluster-using-aws-ssm-session-forwarding-systems-manager-5d0767edea61",children:"Securely connect to a private EKS cluster using AWS SSM"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"VPN/Direct Connect"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html",children:"AWS VPC Connectivity Options"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://hodovi.cc/blog/private-eks-api-endpoint-behind-openvpn/",children:"OpenVPN setup for private EKS API endpoint"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"PrivateLink"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docs.zeet.co/guides/advanced/eks-privatelink/",children:"Using PrivateLink with EKS"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html",children:"EKS VPC Interface Endpoints"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Cloud9"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://stackoverflow.com/questions/65049271/how-to-connect-to-eks-cluster-from-cloud-9-instance-using-kubectl",children:"Connecting to an EKS Cluster from Cloud9"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3584:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/cado-host-k8s-9104fa210ad3e4b85816262656d9ace6.png"},124:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/kubernetes-flow-351ca536095a264300f480d80c086329.png"},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var n=t(6540);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);