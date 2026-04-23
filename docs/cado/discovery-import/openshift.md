---
title: RedHat Openshift
hide_title: true
sidebar_position: 8
---

# How to Import Data from RedHat OpenShift

## To import data from RedHat OpenShift, follow these steps: 

1. Generate a Collection Script: 

2. Frst, generate a / Forensic Acquisition and Investigation Host collection script by navigating to Import > Cado Host in the / Forensic Acquisition and Investigation platform. 

3. When presented with options to choose an operating system or platform, choose OpenShift
   
![Openshift Target](/img/openshifttarget.png)

4. When asked, fill in the details around the container you wish to import data from

![Pod Details](/img/poddetails.png)

5. Click Generate Command and execute the Script on the Target Container

### OpenShift Permissions 

1. **Access to the Cluster via oc login**  
   a. You must have a valid token and access to the cluster API endpoint.  
   b. The token must be associated with a user who has permission to view and interact with the target namespace and pods.

2. **Permissions to Use oc debug**  
   a. You need permission to execute commands inside containers. This typically requires:  
      i. pods/exec verb on the target pod.  
      ii. Access to the namespace where the pod resides.  
   b. If the container is privileged, only a cluster-admin can execute commands inside it. See Redhat.

3. **Write Access Inside the Container**  
   a. The container must allow writing to /tmp/cado-host. See how to do that here.
``

### Network Permissions 

1. **Outbound Internet Access**  
   a. The pod must be able to reach https://cado-public.s3-accelerate.amazonaws.com to download the binary.  
   b. This requires:  
      i. DNS resolution.  
      ii. Egress access to the public internet (via NAT or proxy if applicable).

2. **Proxy Configuration (if applicable)**  
   a. If your cluster uses an HTTP proxy, ensure that the environment variables HTTP_PROXY, HTTPS_PROXY, and NO_PROXY are correctly set. The oc CLI respects these variables See how to do this here.

## Red Hat OpenShift Service on AWS (ROSA)
Red Hat OpenShift Service on AWS (ROSA) runs on Amazon Elastic Compute Cloud (EC2) instances. ROSA is a managed service that uses EC2 to deploy, scale, and build containerized applications.

This means that you can import data from ROSA by importing EC2 instances as usual. For more information, see [How to Import Data from AWS EC2](/cado/discovery-import/aws/aws-ec2.md).
Most clusters run on containerd, which can limit the data from inside containers that can be collected vs Docker.

The / Forensic Acquisition and Investigation Host method above for OpenShift can work with ROSA as well, as "oc exec" commands can be used to execute the script on the desired container within ROSA after [logging in](https://docs.openshift.com/rosa/rosa_install_access_delete_clusters/rosa-sts-accessing-cluster.html).
