---
title: EKS
hide_title: true
sidebar_position: 5
---

# How to Import Data from AWS EKS

The Cado platform enables the collection of key logs and forensic artifacts from containers running in an AWS EKS cluster. There are three main options when acquiring data from EKS:

![EKS Options](/img/eks-options.png)

## Import Steps

1. Go to **Import > Cloud**.

   ![Cado Import Screen showing the AWS EKS options](/img/import-cloud-focus.png)

2. Follow the prompts to select your **Cluster**, **Pod**, and **Container**.

   :::tip
   When choosing the role in the UI, make sure to select the role configured for the account where your EKS cluster resides.
   :::

   ![Cado Import Screen showing the available AWS EKS Clusters](/img/eks2.png)

3. Cado will automatically collect key logs and forensic artifacts from the selected container to facilitate your investigation. The import and processing typically take a few minutes to complete.

   ![Cado showing the confirmation screen of a successful AWS EKS container capture](/img/eks3.png)

## Known Limitations

- Cado can acquire artifacts from containers built with **distroless containers** and **private clusters** using Cado Host only. Containers with the `gcr.io/distroless` image tag will be hidden. For more details, see [Kubernetes Deployments].
- Cado will hide pods running under the following namespaces, which are generally system-level namespaces running a distroless environment:
  - `kube-system`, `kube-public`, `kube-node-lease`
  - `gke-gmp-system`, `aks-command`
  - `gmp-system`, `calico-system`, `tigera-operator`

## Configuring the Cluster RBAC for Use with Cado

To acquire artifacts from a container, the following Kubernetes permissions must be enabled for each cluster:

- `pods` - `get`, `list`
- `pods/exec` - `create`, `get`

### RBAC ClusterRole and ClusterRoleBinding

We recommend adding the following ClusterRole and ClusterRoleBinding to your cluster’s RBAC configuration with the permissions listed above.

For instructions on managing role maps, refer to [this AWS guide](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html).

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

## Linking AWS IAM to Your Cluster RBAC

:::info
Use the role ARN added in the [Cross Account Creation](/cado/deploy/cross/cross-account-creation.md#step-2-add-target-aws-role-arn-to-the-cado-platform) that corresponds to the AWS Account ID where the cluster resides.
:::

You need to add the appropriate Cado IAM role to your EKS RBAC configuration. Without this, you will encounter an error stating: `This role is not configured to authorize with this EKS cluster`.

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

### Data Flow Diagram

Below is a diagram illustrating how EKS acquisitions operate:

![EKS Data Flow](/img/eks-collection.png)