---
title: EKS
hide_title: true
sidebar_position: 5
---

# AWS EKS

The Cado platform will collect key logs and forensic artifacts from AWS EKS containers.

## EKS RBAC Configuration
You'll need to add the appropriate configued Cado IAM role to your EKS RBAC configuration. Without 
this you will see an error message saying that `This role is not configured to authorize with this EKS cluster`.

See [the following AWS guide](https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/)
on how to add your role to the EKS RBAC, or if you have eksctl configured, you can use the following command:

`eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn <iam_role> --group <group>`

You can configure groups by configuring your Kubernetes `rolebinding` or `clusterrolebinding` ConfigMaps. See [the following AWS guide](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html) for instructions of manipulating the role maps.

You must also make sure the following IAM permissions are attached to your IAM role:
```
	"eks:ListClusters",
	"eks:DescribeCluster",
	"eks:UpdateClusterConfig"
````

### Which IAM role should I use?
Depending on where your EKS cluster is deployed, you'll need to choose a different IAM role to configure with the RBAC configuration.

#### The cluster resides in the same account as Cado:
For a single account import you should  choose the configured role inside `Settings > Cloud > AWS`.

#### The cluster is deployed in a seperate account from Cado:
All roles in a chain must be configured with the EKS RBAC. If you're using a different role, then the Cado roles need to also be
included in the RBAC, not just the cross account created in [AWS Cross Account Creation](../../../deploy/aws/iam/cross-account-creation.md).

## Import Steps

:::info
Please note that communication with EKS can take upwards to 30 seconds or more.
:::

1) Go to **Import > AWS EKS**

![Cado Import Screen showing the AWS EKS options](/img/import.png)

2) Go through the steps to choose your **Cluster**, **Pod** and **Container**:

:::tip
When selecting the role in the UI, select the role configured for the account where your EKS cluster resides
:::

![Cado Import Screen showing the available AWS EKS Clusters](/img/eks2.png)

3) Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.
For a typical acquisition, import and processing will take a few minutes to complete.

![Cado showing the confirmation screen of a successful AWS EKS container capture](/img/eks3.png)




