"use strict";(self.webpackChunkproduct_help=self.webpackChunkproduct_help||[]).push([[266],{9257:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(5893),o=s(1151);const i={title:"Kubernetes Deployments",hide_title:!0,sidebar_position:6},r="Kubernetes Deployments Considerations",a={id:"cado-response/deploy/kubernetes",title:"Kubernetes Deployments",description:"Fundamental Principles",source:"@site/docs/cado-response/deploy/kubernetes.md",sourceDirName:"cado-response/deploy",slug:"/cado-response/deploy/kubernetes",permalink:"/cado-response/deploy/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/cado-security/product-help/tree/master/docs/cado-response/deploy/kubernetes.md",tags:[],version:"current",lastUpdatedAt:1728378119,formattedLastUpdatedAt:"Oct 8, 2024",sidebarPosition:6,frontMatter:{title:"Kubernetes Deployments",hide_title:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Adding AWS accounts to Azure/AWS/GCP",permalink:"/cado-response/deploy/cross/adding-aws"},next:{title:"Import Overview",permalink:"/cado-response/discovery-import/intro"}},c={},l=[{value:"Fundamental Principles",id:"fundamental-principles",level:2},{value:"Overview of Normal Execution and Authentication to Acquire Data",id:"overview-of-normal-execution-and-authentication-to-acquire-data",level:2},{value:"Alternate Collection by Acquiring the Volume of the Node",id:"alternate-collection-by-acquiring-the-volume-of-the-node",level:2},{value:"Alternate Collection by using Cado Host",id:"alternate-collection-by-using-cado-host",level:2},{value:"Using A Custom Image",id:"using-a-custom-image",level:3},{value:"Root Access",id:"root-access",level:3},{value:"Private Clusters with No Network Access",id:"private-clusters-with-no-network-access",level:2},{value:"Private AKS Clusters",id:"private-aks-clusters",level:3},{value:"Private GKE Clusters",id:"private-gke-clusters",level:3},{value:"Private EKS Clusters",id:"private-eks-clusters",level:3},{value:"Alternate Private EKS Cluster Access",id:"alternate-private-eks-cluster-access",level:4},{value:"Methods for Executing Kubernetes API Commands Inside a Private Cluster VPC",id:"methods-for-executing-kubernetes-api-commands-inside-a-private-cluster-vpc",level:4},{value:"Kubernetes RBAC Requirements",id:"kubernetes-rbac-requirements",level:2},{value:"Distroless / No Shell Containers",id:"distroless--no-shell-containers",level:2},{value:"On-Premise Clusters",id:"on-premise-clusters",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"kubernetes-deployments-considerations",children:"Kubernetes Deployments Considerations"}),"\n",(0,n.jsx)(t.h2,{id:"fundamental-principles",children:"Fundamental Principles"}),"\n",(0,n.jsx)(t.p,{children:"There is a balance between access to data during responding to breaches, and restricting data access in order to limit the likelihood of a breach.\nThe notes below intend to help make these trade-off decisions when granting access to the Cado platform to your Kubernetes environments to respond to incidents and achieve defense in depth.\nPlease view the service specific pages for more detail on how to deploy and import data from specific Kubernetes implementations."}),"\n",(0,n.jsx)(t.h2,{id:"overview-of-normal-execution-and-authentication-to-acquire-data",children:"Overview of Normal Execution and Authentication to Acquire Data"}),"\n",(0,n.jsx)(t.p,{children:"When acquiring data from Kubernetes containers:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Cado executes a shell script to download the Cado Host binary; then"}),"\n",(0,n.jsx)(t.li,{children:"Runs it to collect forensic artifacts; then"}),"\n",(0,n.jsx)(t.li,{children:"Uploads the collected files to cloud storage for processing."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["How this shell script is executed will depend upon the environment.\nFor example ECS utilizes ECS execute, whereas EKS/AKS/GKE ",(0,n.jsx)(t.a,{href:"https://www.cadosecurity.com/how-we-sped-up-acquiring-forensic-data-from-aws-kubernetes-and-azure-kubernetes-services-by-10-times/",children:"utilize"})," the Kubernetes control plane API."]}),"\n",(0,n.jsx)(t.p,{children:"Depending upon the service, authenticating to the Kubernetes API may require both IAM and Kubernetes RBAC permissions.\nThese permissions are described on the service specific documentation pages."}),"\n",(0,n.jsx)(t.h2,{id:"alternate-collection-by-acquiring-the-volume-of-the-node",children:"Alternate Collection by Acquiring the Volume of the Node"}),"\n",(0,n.jsx)(t.p,{children:"If you cannot execute code inside the container, or cannot connect over the network, you may be able to process the Volume of the node running the container.\nFor example, this approach is possible for EKS running on a cluster of EC2 nodes.\nIf using the Docker container runtime, the file system of containers will normally be available at /var/lib/docker/overlay2.\nIf using the Containerd runtime (which the latest versions of EKS now uses), the file system will not be immediately visible on the Volume.\nWe are currently working on a method to support containerd Volume acquisitions of containerd based Nodes."}),"\n",(0,n.jsx)(t.h2,{id:"alternate-collection-by-using-cado-host",children:"Alternate Collection by using Cado Host"}),"\n",(0,n.jsxs)(t.p,{children:["The Cado platform now supports collections from private cluster and distroless containers, by using a ",(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/kubectl/generated/kubectl_debug/",children:"debug container"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"To acquire:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to \u2018Import\u2019 then \u2018Cado Host\u2019."}),"\n",(0,n.jsx)(t.li,{children:"Select \u2018Kubernetes\u2019 and follow the prompts to acquire:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Cado Host K8s UI",src:s(8726).Z+"",width:"479",height:"569"})}),"\n",(0,n.jsxs)(t.p,{children:["Please see our ",(0,n.jsx)(t.a,{href:"https://cadosecurity.zendesk.com/hc/en-gb/articles/23696755178769-Private-Cluster-and-Distroless-Collections",children:"Knowledge Base"})," for more details on how to acquire from private clusters and distroless containers and how the implementation works."]}),"\n",(0,n.jsx)(t.h3,{id:"using-a-custom-image",children:"Using A Custom Image"}),"\n",(0,n.jsxs)(t.p,{children:["In environments that don\u2019t support using the default debian",":latest"," container image, you can choose to use a custom image instead. This expects the latest Cado Host Linux binary to exist at /tmp/cado-host-static/cado-host.\nWe strongly recommend using the default debian",":latest"," image as Cado can provide support if you encounter issues when acquiring using the default debian",":latest"," image - we are unable to provide support for custom images."]}),"\n",(0,n.jsx)(t.h3,{id:"root-access",children:"Root Access"}),"\n",(0,n.jsxs)(t.p,{children:["By default, Cado Host requires root access in order to access the underlying container filesystem, usually under ",(0,n.jsx)(t.code,{children:"/proc/{PID}/root"}),". The use of ",(0,n.jsx)(t.code,{children:"runuser"})," with the root user is also required as to give the Cado Host process the appropriate UID and GID to access the container filesystem."]}),"\n",(0,n.jsxs)(t.p,{children:['If you are running Kubernetes v1.30 or later, you can optionally use the "Run as non-root user" option to instead use the ',(0,n.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/",children:"sysadmin"})," profile, which has the necessary permissions to access the container filesystem."]}),"\n",(0,n.jsx)(t.h2,{id:"private-clusters-with-no-network-access",children:"Private Clusters with No Network Access"}),"\n",(0,n.jsx)(t.p,{children:"As the Cado platform requires access to the Kubernetes control plane API for normal acquisition methods, acquiring containers via the user interface requires a valid route at the network level from the Cado instance to the Kubernetes API.\nSee below for alternate options for acquiring data where the Cado platform cannot access the Kubernetes API."}),"\n",(0,n.jsx)(t.h3,{id:"private-aks-clusters",children:"Private AKS Clusters"}),"\n",(0,n.jsx)(t.p,{children:"Cado can acquire private AKS environments using the normal user interface, as Azure has created the \u201ccommand invoke\u201d command to execute commands against private AKS clusters."}),"\n",(0,n.jsx)(t.h3,{id:"private-gke-clusters",children:"Private GKE Clusters"}),"\n",(0,n.jsx)(t.p,{children:"We are investigating support for private GKE clusters using the normal user interface, through public endpoints on private clusters."}),"\n",(0,n.jsx)(t.h3,{id:"private-eks-clusters",children:"Private EKS Clusters"}),"\n",(0,n.jsx)(t.p,{children:"As of March 2019, you can\xa0now\xa0also configure your EKS cluster to be only accessible from private networks such as the VPC the cluster resides in or any peered VPCs."}),"\n",(0,n.jsxs)(t.p,{children:["If you create an EKS cluster with the \u201cPrivate endpoint only\u201d option (",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/blogs/containers/de-mystifying-cluster-networking-for-amazon-eks-worker-nodes/",children:"https://aws.amazon.com/blogs/containers/de-mystifying-cluster-networking-for-amazon-eks-worker-nodes/"}),"), all traffic to your cluster API server must come from within your cluster\u2019s VPC or a connected network.\nThere is no public access to your API server from the internet.\nAny kubectl commands must come from within the VPC or a connected network."]}),"\n",(0,n.jsxs)(t.p,{children:["The default Cado EKS acquisition interface requires access to the Cluster endpoint from the Cado platform.\nIf the Cado platform doesn't have access to the Cluster endpoint via a public endpoint or another method such as peered VPCs (",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html",children:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html"}),'), you can use the option "Alternate Private EKS Cluster Access" below.\nNote that if you are running EKS on EC2 nodes, it may be easier to use the "Alternate Collection by Acquiring the Volume of the Node" option above.']}),"\n",(0,n.jsx)(t.h4,{id:"alternate-private-eks-cluster-access",children:"Alternate Private EKS Cluster Access"}),"\n",(0,n.jsx)(t.p,{children:"If the Cado platform cannot access the Cluster endpoint, you can instead acquire via deploying the Cado Host acquisition script."}),"\n",(0,n.jsx)(t.p,{children:"First connect to your EKS cluster with a command such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["aws eks update-kubeconfig --region $Region --name $ClusterName\nTo execute this command, please follow the instructions from AWS ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Then, execute the kubectl script generated at Import > Cado Host > Kubernetes."}),"\n",(0,n.jsxs)(t.p,{children:["Please see our ",(0,n.jsx)(t.a,{href:"https://cadosecurity.zendesk.com/",children:"Knowledge Base"})," for more details."]}),"\n",(0,n.jsx)(t.h4,{id:"methods-for-executing-kubernetes-api-commands-inside-a-private-cluster-vpc",children:"Methods for Executing Kubernetes API Commands Inside a Private Cluster VPC"}),"\n",(0,n.jsx)(t.p,{children:"Alternate options include Bastion Hosts, SSM, AWS Private link, AWS Cloud9, AWS VPN, AWS Direct Connect.\nSee the links below for options for accessin the Kubernetes API within the Private Cluster VPC."}),"\n",(0,n.jsx)(t.p,{children:"How to connect using a Bastion Host:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://cloudtipss.com/Create-Private-EKS-With-Bastion/",children:"https://cloudtipss.com/Create-Private-EKS-With-Bastion/"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/@muppedaanvesh/jump-box-setup-on-eks-cluster-383ca92f51ef",children:"https://medium.com/@muppedaanvesh/jump-box-setup-on-eks-cluster-383ca92f51ef"})," (Terraform)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/75207618/how-is-eks-cluster-accessible-when-deployed-in-a-private-subnet",children:"https://stackoverflow.com/questions/75207618/how-is-eks-cluster-accessible-when-deployed-in-a-private-subnet"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"How to connect using SSM, optionally via a Bastion host or direct to the Node:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://awstip.com/securely-connect-to-a-private-eks-cluster-using-aws-ssm-session-forwarding-systems-manager-5d0767edea61",children:"https://awstip.com/securely-connect-to-a-private-eks-cluster-using-aws-ssm-session-forwarding-systems-manager-5d0767edea61"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/70827578/how-do-we-access-the-kubernetes-api-server-with-kubectl-from-a-private-eks-clust",children:"https://stackoverflow.com/questions/70827578/how-do-we-access-the-kubernetes-api-server-with-kubectl-from-a-private-eks-clust"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://help.gopaddle.io/manage-pre-existing-clusters/register-pre-existing-cluster/register-aws-eks-cluster/eks-cluster-with-private-access-endpoint-and-a-bastion-host",children:"https://help.gopaddle.io/manage-pre-existing-clusters/register-pre-existing-cluster/register-aws-eks-cluster/eks-cluster-with-private-access-endpoint-and-a-bastion-host"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"How to connect to the VPC using via VPN or similar:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html",children:"https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://hodovi.cc/blog/private-eks-api-endpoint-behind-openvpn/",children:"https://hodovi.cc/blog/private-eks-api-endpoint-behind-openvpn/"})," (OpenVPN)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html",children:"https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html"})," (DirectConnect)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"How to connect using Private Link:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.zeet.co/guides/advanced/eks-privatelink/",children:"https://docs.zeet.co/guides/advanced/eks-privatelink/"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html",children:"https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"How to connect using Cloud9:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/65049271/how-to-connect-to-eks-cluster-from-cloud-9-instance-using-kubectl",children:"https://stackoverflow.com/questions/65049271/how-to-connect-to-eks-cluster-from-cloud-9-instance-using-kubectl"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"kubernetes-rbac-requirements",children:"Kubernetes RBAC Requirements"}),"\n",(0,n.jsx)(t.p,{children:"Cado requires both write and execute access to containers, in order to download and execute the Cado Host binary to collect forensic artifacts from side containers.\nIn particular, Cado requires \u2018get\u2019 and \u2018list\u2019 for the \u2018pods\u2019 resource, and \u2018get\u2019 and \u2018create\u2019 for the \u2018pods/exec\u2019 resource."}),"\n",(0,n.jsx)(t.h2,{id:"distroless--no-shell-containers",children:"Distroless / No Shell Containers"}),"\n",(0,n.jsx)(t.p,{children:"Please use Cado Host to acquire distroless Containers."}),"\n",(0,n.jsx)(t.h2,{id:"on-premise-clusters",children:"On-Premise Clusters"}),"\n",(0,n.jsx)(t.p,{children:"If you are using an on-premise or otherwise custom implementation of Kubernetes, you may be able to collect data by executing the Cado Host shell script inside the container. See for example, the documentation for OpenShift. You may also be able to process the Volume of the node, if you have access to it (see \u201cCollecting the Node Volume\u201d below for more)."})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8726:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/cado-host-k8s-23084060a6831b74364501915fb14261.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);