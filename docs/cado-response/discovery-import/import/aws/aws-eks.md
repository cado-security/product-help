---
title: EKS
hide_title: true
sidebar_position: 5
---

# AWS EKS

The Cado platform will collect key logs and forensic artifacts containers running in an AWS EKS cluster.
There are three core options when acquiring EKS:

![EKS Options](/img/eks-options.png)


## Known Limitations

* The Cado platform can acquire artifacts from a container built with distroless containers, and private clusters, via Cado Host only. The platform will hide containers with the `gcr.io/distroless` image tag. For more information, please see [Kubernetes Deployments](/discovery-import/import/kubernetes.md).

* The Cado platform will hide pods running under the following namespaces: `kube-system`, `kube-public`, `kube-node-lease`, `gke-gmp-system`, `aks-command`, `gmp-system`, `calico-system`, and `tigera-operator`. These are system level namespaces, which are often running a distroless environment, which the platform does not support.

## Configuring the Cluster RBAC for use with Cado

In order for the Cado platform to acquire artifacts from a container, the following Kubernetes permissions are required:

- `pods` - `get, list`
- `pods/exec` - `create, get`

These permissions are required for every cluster you intend to acquire through the platform.

### RBAC ClusterRole and ClusterRoleBinding

We recommend adding the following ClusterRole and ClusterRoleBinding to your Cluster RBAC with the permissions mentioned above.

See [the following AWS guide](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html) for instructions of manipulating the role maps.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cado-eks-cluster-role
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list"]
- apiGroups: [""]
  resources: ["pods/exec"]
  verbs: ["create", "get"]
```

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: cado-eks-cluster-role-binding
subjects:
- kind: Group
  name: cado
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: cado-eks-cluster-role
  apiGroup: rbac.authorization.k8s.io
```

### Linking AWS IAM to your Cluster RBAC

:::info
You should use the role ARN added in the [Cross Account Creation](../../../deploy/aws/iam/cross-account-creation.md#step-2-add-target-aws-role-arn-to-the-cado-platform) that relates to the AWS Account ID where the cluster resides.
:::

You'll need to add the appropriately configued Cado IAM role to your EKS RBAC configuration. Without 
this you will see an error message saying that `This role is not configured to authorize with this EKS cluster`.

See [the following AWS guide](https://aws.amazon.com/premiumsupport/knowledge-center/eks-api-server-unauthorized-error/)
on how to add your role to the EKS RBAC, or if you have eksctl configured, you can use the following command:

`eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=<group>`

If you added the ClusterRole and ClusterRoleBindings above, the group would be `cado`:

`eksctl create iamidentitymapping --cluster=<cluster_name> --region=<region> --arn=<iam_role> --group=cado`

You must also make sure the following IAM permissions are attached to your IAM role:
```
	"eks:ListClusters",
	"eks:DescribeCluster",
```

## Import Steps
1) Go to **Import > Cloud**

![Cado Import Screen showing the AWS EKS options](/img/import-cloud-focus.png)

2) Go through the steps to choose your **Cluster**, **Pod** and **Container**:

:::tip
When selecting the role in the UI, select the role configured for the account where your EKS cluster resides
:::

![Cado Import Screen showing the available AWS EKS Clusters](/img/eks2.png)

3) Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.
For a typical acquisition, import and processing will take a few minutes to complete.

![Cado showing the confirmation screen of a successful AWS EKS container capture](/img/eks3.png)


### Data Flow Diagram
For a diagram of how our ECS acquisitions operate, please see our [Knowledge Base](https://cadosecurity.zendesk.com/hc/en-gb/articles/23258925265809-How-do-EKS-acquisitions-work).

