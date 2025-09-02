---
title: RedHat Openshift
hide_title: true
sidebar_position: 8
---

# How to Import Data from RedHat OpenShift

To import data from RedHat OpenShift, follow these steps:

1. **Generate a Collection Script**:  
   First, generate a Cado Host collection script by navigating to **Import > Cado Host** in the Cado platform.

2. **Execute the Script on the Target Container**:  
   Use the commands below to execute the script on the desired container within OpenShift:

```bash
oc login --token=sha256~... --server=https://api.system.openshiftapps.com:443
oc exec pod-name -c container-name -- mkdir -p /tmp/cado-host
oc exec pod-name -c container-name -- curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/v1.5.4/linux/cado-host --output /tmp/cado-host/cado-host
oc exec pod-name -c container-name -- chmod +x /tmp/cado-host/cado-host
oc exec pod-name -c container-name -- /tmp/cado-host/cado-host --presigned_data ...
```

Replace `pod-name`, `container-name`, and `--presigned_data` with the relevant values from your setup.

![OpenShift](/img/openshift.png)

## **OpenShift Permissions**

1. **Access to the Cluster via `oc login`**
   - You must have a valid token and access to the cluster API endpoint.
   - The token must be associated with a user who has permission to view and interact with the target namespace and pods.

2. **Permissions to Use `oc exec`**
   - You need permission to execute commands inside containers. This typically requires:
     - `pods/exec` verb on the target pod.
     - Access to the namespace where the pod resides.
   - If the container is **privileged**, only a **cluster-admin** can execute commands inside it [See Redhat](https://docs.redhat.com/en/documentation/openshift_container_platform/3.9/html/developer_guide/dev-guide-executing-remote-commands).

3. **Write Access Inside the Container**
   - The container must allow writing to `/tmp/cado-host` [See Post](https://stackoverflow.com/questions/58473832/how-do-i-change-the-permissions-in-openshift-container-platform).

### **Network Permissions**

1. **Outbound Internet Access**
   - The pod must be able to reach `https://cado-public.s3-accelerate.amazonaws.com` to download the binary.
   - This requires:
     - DNS resolution.
     - Egress access to the public internet (via NAT or proxy if applicable).

2. **Proxy Configuration (if applicable)**
   - If your cluster uses an HTTP proxy, ensure that the environment variables `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` are correctly set. The `oc` CLI respects these variables[See Openshift](https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/getting-started-cli.html).

## Red Hat OpenShift Service on AWS (ROSA)
Red Hat OpenShift Service on AWS (ROSA) runs on Amazon Elastic Compute Cloud (EC2) instances. ROSA is a managed service that uses EC2 to deploy, scale, and build containerized applications.

This means that you can import data from ROSA by importing EC2 instances as usual. For more information, see [How to Import Data from AWS EC2](/cado/discovery-import/aws/aws-ec2.md).
Most clusters run on containerd, which can limit the data from inside containers that can be collected vs Docker.

The Cado Host method above for OpenShift can work with ROSA as well, as "oc exec" commands can be used to execute the script on the desired container within ROSA after [logging in](https://docs.openshift.com/rosa/rosa_install_access_delete_clusters/rosa-sts-accessing-cluster.html).
