---
title: Kubernetes Deployments
hide_title: true
sidebar_position: 5
---
# Kubernetes Deployments Considerations

## Fundamental Principles
There is a balance between access to data during responding to breaches, and restricting data access in order to limit the likelihood of a breach.
The notes below intend to help make these trade-off decisions when granting access to the Cado platform to your Kubernetes environments to respond to incidents and achieve defense in depth.
Please view the service specific pages for more detail on how to deploy and import data from specific Kubernetes implementations.

## Overview of Normal Execution and Authentication to Acquire Data
When acquiring data from Kubernetes containers:
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

## Private Clusters with No Network Access
As the Cado platform requires access to the Kubernetes control plane API for normal acquisition methods, acquiring containers via the user interface requires a valid route at the network level from the Cado instance to the Kubernetes API.
See below for alternate options for acquiring data where the Cado platform cannot access the Kubernetes API.

The Cado platform now supports collections from private cluster and distroless containers. We are keen for customer feedback on how to improve this support. To acquire:
- Navigate to ‘Import’ then ‘Cado Host’.
- Select ‘Kubernetes’ and follow the prompts to acquire.
Please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23696755178769-Private-Cluster-and-Distroless-Collections) for more details on how to acquire from private clusters and distroless containers and how the implementation works.

![Private clusters](/img/private.png)

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

Please see our [Knowledge Base](https://cadosecurity.zendesk.com/) for more details.

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

## Kubernetes RBAC Requirements
Cado requires both write and execute access to containers, in order to download and execute the Cado Host binary to collect forensic artifacts from side containers. 
In particular, Cado requires ‘get’ and ‘list’ for the ‘pods’ resource, and ‘get’ and ‘create’ for the ‘pods/exec’ resource.
Cado Host can run as a normal user, not sudo, although less data may be acquired.

## Distroless / No Shell Containers
The Cado platform cannot acquire artifacts from a container built with a [distroless](https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images) image.
This is due to the way the platform interacts with a container, which requires a shell environment. A future update may allow for the collection of data from distroless containers.
Additionally, the platform will hide containers with the gcr.io/distroless image tag.
You may be able to still collect data for the container via the “Alternative Collection Methods via the Node Volume” method below.
We are currently working on additional support for distroless containers, by acquiring the files from the Node instead over SSM or other execution functionality.

## On-Premise Clusters
If you are using an on-premise or otherwise custom implementation of Kubernetes, you may be able to collect data by executing the Cado Host shell script inside the container. See for example, the documentation for OpenShift. You may also be able to process the Volume of the node, if you have access to it (see “Collecting the Node Volume” below for more).

## Alternative Collection Methods via other Agents or Sidecars
If you are using an agent in your containers that has the ability to execute code, you may be able to collect data by manually deploying Cado Host inside the container for collection.
A similar approach may be possible using a [sidecar](https://spacelift.io/blog/kubernetes-sidecar-container) container with access to the target container's data, manually deployed.
