---
title: EKS
hide_title: true
sidebar_position: 5
---

# How to Import Data from AWS EKS

The / Forensic Acquisition and Investigation platform enables the collection of key logs and forensic artifacts from containers running in an AWS EKS cluster. There are three main options when acquiring data from EKS:

![EKS Options](/img/eks-options.png)

## Import Steps

1. Go to **Import > Cloud**.

   ![Cado Import Screen showing the AWS EKS options](/img/import-cloud-focus.png)

2. Follow the prompts to select your **Cluster**, **Pod**, and **Container**.

   :::tip
   When choosing the role in the UI, make sure to select the role configured for the account where your EKS cluster resides.
   :::

   ![Cado Import Screen showing the available AWS EKS Clusters](/img/eks2.png)

3. / Forensic Acquisition and Investigation will automatically collect key logs and forensic artifacts from the selected container to facilitate your investigation. The import and processing typically take a few minutes to complete.

   ![Cado showing the confirmation screen of a successful AWS EKS container capture](/img/eks3.png)

## Known Limitations

- / Forensic Acquisition and Investigation can acquire artifacts from containers built with **distroless containers** and **private clusters** using / Forensic Acquisition and Investigation Host only. Containers with the `gcr.io/distroless` image tag will be hidden. For more details, see [Kubernetes Deployments](/cado/discovery-import/kubernetes#alternate-collection-by-using-cado-host-with-a-sidecar-container).
- / Forensic Acquisition and Investigation will hide pods running under the following namespaces, which are generally system-level namespaces running a distroless environment:
  - `kube-system`, `kube-public`, `kube-node-lease`
  - `gke-gmp-system`, `aks-command`
  - `gmp-system`, `calico-system`, `tigera-operator`

## Linking AWS IAM to Your Cluster RBAC

:::info
Use the role ARN added in the [Cross Account Creation](/cado/deploy/cross/cross-account-creation.md#step-2-add-target-aws-role-arn-to-the-cado-platform) that corresponds to the AWS Account ID where the cluster resides.
:::

You need to add the appropriate / Forensic Acquisition and Investigation IAM role to your EKS RBAC configuration. Without this, you will encounter an error stating: `This role is not configured to authorize with this EKS cluster`.

Refer to [this AWS guide](https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/) for instructions on adding your role to the EKS RBAC. If you have `eksctl` configured, you can run the following command:

```bash
eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=<group>
```

If you added the ClusterRole and ClusterRoleBindings as shown above, the group will be `cado`:

```bash
eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=cado
```

Ensure the following IAM permissions are attached to your IAM role:
```
	"eks:ListClusters",
	"eks:DescribeCluster",
```

## Data Flow Diagram

Below is a diagram illustrating how EKS acquisitions operate:

![EKS Data Flow](/img/eks-collection.png)
