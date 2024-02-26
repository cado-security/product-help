---
title: Kubernetes Deployments
hide_title: true
sidebar_position: 5
---
# Kubernetes Deployments Considerations

## Fundamental Principles
There is a balance between access to data during responding to breaches, and restricting data access in order to limit the likelihood of a breach. The notes below intend to help make these trade-off decisions when granting access to the Cado platform to your Kubernetes environments to respond to incidents and achieve defense in depth.
Please view the service specific pages for more detail on how to deploy and import data from specific Kubernetes implementations.

## Overview of Execution and Authentication
When acquiring data from Kubernetes containers, Cado executes a shell script to download the Cado Host binary, run it to collect forensic artifacts, and uploads the collected files to cloud storage for processing.

How this shell script is executed will depend upon the environment. For example ECS utilizes ECS execute, whereas EKS/AKS/GKE [utilize](https://www.cadosecurity.com/how-we-sped-up-acquiring-forensic-data-from-aws-kubernetes-and-azure-kubernetes-services-by-10-times/) the Kubernetes control plane API.

Depending upon the service, authenticating to the Kubernetes API may require both IAM and Kubernetes RBAC permissions. These permissions are described on the service specific documentation pages.

## Private Clusters
As the Cado platform requires access to the Kubernetes control plane API, these requires a valid route at the network level from the Cado instance to the Kubernetes API.
* This is possible in AKS environments as Azure has created the “command invoke” command to execute commands against private AKS clusters.
* We are investigating support for private GKE clusters through public endpoints on private clusters.
* It is not currently possible to acquire from private EKS clusters, as AWS have not yet created an equivalent method of access to Azure’s “command invoke”. Work-arounds may be possible depending upon your implementation using alternate access methods (https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html#private-access).

## Kubernetes RBAC Requirements
Cado requires both write and execute access to containers, in order to download and execute the Cado Host binary to collect forensic artifacts from side containers. 
In particular, Cado requires ‘get’ and ‘list’ for the ‘pods’ resource, and ‘get’ and ‘create’ for the ‘pods/exec’ resource.
Cado Host can run as a normal user, not sudo, although less data may be acquired.

## Distroless / No Shell Containers
The Cado platform cannot acquire artifacts from a container built with a [distroless](https://github.com/GoogleContainerTools/distroless#why-should-i-use-distroless-images) image. This is due to the way the platform interacts with a container, which requires a shell environment. Additionally, the platform will hide containers with the gcr.io/distroless image tag. You may be able to still collect data for the container via the “Alternative Collection Methods via the Node Volume” method below.

## On-Premise Clusters
If you are using an on-premise or otherwise custom implementation of Kubernetes, you may be able to collect data by executing the Cado Host shell script inside the container. See for example, the documentation for OpenShift. You may also be able to process the Volume of the node, if you have access to it (see “Collecting the Node Volume” below for more).

## Alternative Collection Methods via other Agents or Sidecars
If you are using an agent in your containers that has the ability to execute code,you may be able to collect data by manually deploying Cado Host inside the container for collection.
A similar approach may be possible using a [sidecar](https://spacelift.io/blog/kubernetes-sidecar-container) container with access to the target container's data, manually deployed.

## Alternative Collection Methods via the Node Volume
If you cannot execute code inside the container, you may be able to process the Volume of the node running the container. For example, this approach is possible for EKS running on a cluster of EC2 nodes.
If using the Docker container runtime, the file system of containers will normally be available at /var/lib/docker/overlay2.
If using the Containerd runtime (which the latest versions of EKS now uses), the file system will not be immediately visible on the Volume. We are currently working on a method to support containerd volume level acquisitions.


