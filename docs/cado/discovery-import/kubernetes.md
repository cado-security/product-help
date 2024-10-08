---
title: Kubernetes
hide_title: true
sidebar_position: 9
---
# How to import data from Kubernetes

## How does Cado import data from EKS/ECS/AKS/GKE?
By default, when acquiring data from Kubernetes containers:
- Cado executes a shell script to download the Cado Host binary; then
- Runs it to collect forensic artifacts; then
- Uploads the collected files to cloud storage for processing.

How this shell script is executed will depend upon the environment.
For example ECS utilizes ECS execute, whereas EKS/AKS/GKE [utilize](https://www.cadosecurity.com/how-we-sped-up-acquiring-forensic-data-from-aws-kubernetes-and-azure-kubernetes-services-by-10-times/) the Kubernetes control plane API.

Depending upon the service, authenticating to the Kubernetes API may require both IAM and Kubernetes RBAC permissions.
These permissions are described on the service specific documentation pages.

## Alternate Collection by Acquiring the Volume of the Node
If you cannot execute code inside the container, or cannot connect over the network, you may be able to process the Volume of the node running the container.
For example, this approach is possible for EKS running on a cluster of EC2 nodes.
If using the Docker container runtime, the file system of containers will normally be available at /var/lib/docker/overlay2.
If using the Containerd runtime (which the latest versions of EKS now uses), the file system will not be immediately visible on the Volume.
We are currently working on a method to support containerd Volume acquisitions of containerd based Nodes.

## Alternate Collection by using Cado Host with a sidecar container
The Cado platform now supports collections from private cluster and distroless containers, by using a [debug container](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_debug/).

To acquire:
- Navigate to ‘Import’ then ‘Cado Host’.
- Select ‘Kubernetes’ and follow the prompts to acquire:

![Cado Host K8s UI](/img/cado-host-k8s.png)

Please see the diagram below for a high-level flow of how this works:

![Cado Host K8s Flow](/img/kubernetes-flow.png)

### Kubernetes RBAC Requirements
Cado requires both write and execute access to containers, in order to download and execute the Cado Host binary to collect forensic artifacts from side containers. 
In particular, Cado requires ‘get’ and ‘list’ for the ‘pods’ resource, and ‘get’ and ‘create’ for the ‘pods/exec’ resource.

### Using A Custom Image
In environments that don’t support using the default debian:latest container image, you can choose to use a custom image instead. This expects the latest Cado Host Linux binary to exist at /tmp/cado-host-static/cado-host.
We strongly recommend using the default debian:latest image as Cado can provide support if you encounter issues when acquiring using the default debian:latest image - we are unable to provide support for custom images.

### Root Access
By default, Cado Host requires root access in order to access the underlying container filesystem, usually under `/proc/{PID}/root`. The use of `runuser` with the root user is also required as to give the Cado Host process the appropriate UID and GID to access the container filesystem.

If you are running Kubernetes v1.30 or later, you can optionally use the "Run as non-root user" option to instead use the [sysadmin](https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/) profile, which has the necessary permissions to access the container filesystem.

## Private Clusters with No Network Access
As the Cado platform requires access to the Kubernetes control plane API for normal acquisition methods, acquiring containers via the user interface requires a valid route at the network level from the Cado instance to the Kubernetes API.
See below for alternate options for acquiring data where the Cado platform cannot access the Kubernetes API.


### Private AKS Clusters
Cado can acquire private AKS environments using the normal user interface, as Azure has created the “command invoke” command to execute commands against private AKS clusters.

### Private GKE Clusters
We are investigating support for private GKE clusters using the normal user interface, through public endpoints on private clusters.

### Private EKS Clusters
As of March 2019, you can now also configure your EKS cluster to be only accessible from private networks such as the VPC the cluster resides in or any peered VPCs.

If you create an EKS cluster with the “Private endpoint only” option (https://aws.amazon.com/blogs/containers/de-mystifying-cluster-networking-for-amazon-eks-worker-nodes/), all traffic to your cluster API server must come from within your cluster’s VPC or a connected network.
There is no public access to your API server from the internet.
Any kubectl commands must come from within the VPC or a connected network.

The default Cado EKS acquisition interface requires access to the Cluster endpoint from the Cado platform.
If the Cado platform doesn't have access to the Cluster endpoint via a public endpoint or another method such as peered VPCs (https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html), you can use the option "Alternate Private EKS Cluster Access" below.
Note that if you are running EKS on EC2 nodes, it may be easier to use the "Alternate Collection by Acquiring the Volume of the Node" option above.

#### Alternate Private EKS Cluster Access
If the Cado platform cannot access the Cluster endpoint, you can instead acquire via deploying the Cado Host acquisition script.

First connect to your EKS cluster with a command such as:
- aws eks update-kubeconfig --region $Region --name $ClusterName
To execute this command, please follow the instructions from AWS [here](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html).

Then, execute the kubectl script generated at Import > Cado Host > Kubernetes.

#### Methods for Executing Kubernetes API Commands Inside a Private Cluster VPC
Alternate options include Bastion Hosts, SSM, AWS Private link, AWS Cloud9, AWS VPN, AWS Direct Connect.
See the links below for options for accessin the Kubernetes API within the Private Cluster VPC.

How to connect using a Bastion Host:
- https://cloudtipss.com/Create-Private-EKS-With-Bastion/
- https://medium.com/@muppedaanvesh/jump-box-setup-on-eks-cluster-383ca92f51ef (Terraform)
- https://stackoverflow.com/questions/75207618/how-is-eks-cluster-accessible-when-deployed-in-a-private-subnet

How to connect using SSM, optionally via a Bastion host or direct to the Node:
- https://awstip.com/securely-connect-to-a-private-eks-cluster-using-aws-ssm-session-forwarding-systems-manager-5d0767edea61 
- https://stackoverflow.com/questions/70827578/how-do-we-access-the-kubernetes-api-server-with-kubectl-from-a-private-eks-clust
- https://help.gopaddle.io/manage-pre-existing-clusters/register-pre-existing-cluster/register-aws-eks-cluster/eks-cluster-with-private-access-endpoint-and-a-bastion-host

How to connect to the VPC using via VPN or similar:
- https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html
- https://hodovi.cc/blog/private-eks-api-endpoint-behind-openvpn/ (OpenVPN)
- https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect.html (DirectConnect)

How to connect using Private Link:
- https://docs.zeet.co/guides/advanced/eks-privatelink/
- https://docs.aws.amazon.com/eks/latest/userguide/vpc-interface-endpoints.html

How to connect using Cloud9:
- https://stackoverflow.com/questions/65049271/how-to-connect-to-eks-cluster-from-cloud-9-instance-using-kubectl

