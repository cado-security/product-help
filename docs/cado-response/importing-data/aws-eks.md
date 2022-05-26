---
title: AWS EKS Support
hide_title: true
sidebar_position: 5
---

# AWS EKS

Cado Response will collect key logs and forensic artifacts from AWS EKS containers.

## EKS Import Requirements

### RBAC Configuration
You'll need to add your Cado Response IAM role from `Settings > Cloud > AWS` to your EKS RBAC configuration. Without 
this you will see an error message saying that `This role is not configured to authorize with this EKS cluster`.

See [the following AWS guide](https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/)
on how to add your role to the EKS RBAC, or if you have eksctl configured, you can use the following command:

`eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn <iam_role> --group system:masters`

### IAM Permissions
You'll also make sure the following IAM permissions are attached to your IAM role:
```
	"eks:ListClusters",
	"eks:DescribeCluster",
	"eks:UpdateClusterConfig"
````

## Import Steps

:::info
Please note that communication with EKS can upwards to 30 seconds or more.
:::

1) Go to **Import > AWS EKS**

![Cado Response Import Screen showing the AWS EKS options](/img/eks1.png)

2) Go through the steps to choose your **Cluster**, **Pod** and **Container**:

![Cado Response Import Screen showing the available AWS EKS Clusters](/img/eks2.png)

3) Cado Response will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.
For a typical acquisition, import and processing will take a few minutes to complete.

![Cado Response showing the confirmation screen of a successful AWS EKS container capture](/img/eks3.png)




