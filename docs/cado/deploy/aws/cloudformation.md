---
title: Deploy with Cloudformation
hide_title: true
sidebar_position: 1
---

# How to deploy with Cloudformation

## Prerequisites

Before deploying, make sure you review the required IAM permissions.

[View Required IAM Permissions](#required-iam-permissions)

## Quick Start

To quickly deploy the platform via AWS CloudFormation with default options, click [here](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml).

## AWS CloudFormation Template Overview

<iframe width="100%" height="628" src="https://www.youtube.com/embed/aMQOitmPLeE" title="Deploying with Cloudformation" frameborder="0" allowfullscreen></iframe>

Deploying / Forensic Acquisition and Investigation in AWS is simple using our CloudFormation Template (CFT), which walks you through configuring the platform stack. 

If you're working with the Sales team or using a free trial, you will receive a link to the CloudFormation Template to begin deployment. If you haven't received it yet, contact sales@cadosecurity.com.

### Available CloudFormation Templates

Several CloudFormation templates are available, depending on your deployment requirements:

- **[DeployCloudFormationPublic.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml):** Creates an EC2 instance with an IAM role. This template deploys with a public IP address for direct access.
- **[DeployCloudFormationPrivate.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPrivate.yaml):** Deploys an EC2 instance behind a load balancer without a public IP. Access is via the ALB.
- **[DeployCloudFormationCustomVPC.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationCustomVPC.yaml):** Deploys into an existing VPC. Use [DeployCloudFormationCustomVPCNetworking.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationCustomVPCNetworking.yaml) for creating the necessary networking within this VPC.
- **[DeployCloudFormationGovCloud.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationGovCloud.yaml):** For deploying into AWS GovCloud. Like the private template, it includes a load balancer and no public IP.

### Steps for Deployment

1. After receiving the CloudFormation template link, click it to open the AWS CloudFormation Management Console.

2. In **Step 1 (Specify template)**, leave the default settings (**Template is ready** and **Amazon S3 URL**) unchanged. Click **Next**.

3. In **Step 2 (Specify stack details)**, name your stack (e.g., `CadoResponse`) and enter the following parameters:

    #### Parameters Overview:

    | Parameter Name | Value | Description |
    | -------------- | ----- | ----------- |
    | Instance type for / Forensic Acquisition and Investigation EC2 Server | `m5.4xlarge` | Recommended minimum instance size for enterprise use. |
    | Key pair for / Forensic Acquisition and Investigation EC2 Server | *(choose your keypair)* | Used for SSH access. Not required for standard use, but useful for support if needed. |
    | Allowed source IP for SSH | *(enter IP range)* | Specify IP addresses or ranges for SSH access (CIDR format). Follow the least privilege principle. |
    | Allowed source IP for HTTPS | *(enter IP range)* | Specify IP addresses or ranges for HTTPS access (CIDR format). |
    | VPC CIDR | *(enter IP range)* | Define the CIDR block for the VPC Subnet. |
    | EFSArchive | `AFTER_30_DAYS` | Move data to infrequent access storage after 30 days. |
    | InstanceVolumeSize | `1000` | Specify required EC2 volume size in GB. |
    | S3ArchiveTime | `30` | Move S3 data to Glacier after 30 days of inactivity. |
    | S3GlacierDelete | `365` | Delete Glacier storage data after 365 days. |
    | AvailabilityZoneA | *(choose your AZ)* | The primary subnet's availability zone. |
    | AvailabilityZoneB | *(choose your AZ)* | The secondary subnet's availability zone. |
    | FeatureFlagPlatformUpgrade | `True` | Enables automatic platform upgrades. |
    | CertificateARN | *(enter ARN)* | The ARN of the certificate for the Application Load Balancer (if FeatureFlagDeployWithALB is `True`). |
    | Proxy | *(URL format)* | Optional proxy URL for outbound connections. |
    | ProxyCertUrl | *(URL)* | Optional URL to download the proxy certificate. |

    :::tip
    We recommend setting **InstanceVolumeSize** to at least 500GB. The instance should be sized to about 20% of the data you plan to store. For example, for 5TB of data, allocate 1000GB of disk space. You can delete old investigations to free up space.
    :::

4. Click **Next**.

5. In **Step 3 (Configure stack options)**, unless you need custom settings, click **Next**. For custom settings, contact / Forensic Acquisition and Investigation.

    ![Step 3](/img/cft-step3.png)

    :::info
    For more information on stack options, refer to the [AWS Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html).
    :::

6. Review your configuration and click **Create Stack**.

    :::info
    Ensure to check the box for "I acknowledge that AWS CloudFormation might create IAM resources" if an IAM role was not applied in Step 3. The IAM policy created by the CloudFormation template follows the principle of least privilege, restricting access to only the necessary resources and actions.
    :::

### Deployment Time

Deployment takes approximately 15 minutes, with an additional 10 minutes for the stack to complete installation and updates.

Once the stack status shows `CREATE_COMPLETE`, the deployment is finished, and you can **[log into / Forensic Acquisition and Investigation](/cado/deploy/logging-in)**.

![Creation Complete](/img/create-complete.png)

After deployment, you can import test data from the "Help" menu to verify that everything is functioning correctly.

## Required IAM Permissions

This section outlines the IAM permissions required for users to deploy a Cado platform environment. Each permission listed is essential for enabling Cado to provision the necessary platform components.

<details>
<summary>IAM Permissions</summary>

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CloudFormation",
      "Effect": "Allow",
      "Action": [
        "cloudformation:CreateStack",
        "cloudformation:CreateUploadBucket",
        "cloudformation:DescribeStackEvents",
        "cloudformation:DescribeStacks",
        "cloudformation:GetTemplate",
        "cloudformation:GetTemplateSummary",
        "cloudformation:ListStackResources"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CreateCadoEC2Resources",
      "Effect": "Allow",
      "Action": [
        "ec2:AllocateAddress",
        "ec2:AssociateAddress",
        "ec2:AssociateRouteTable",
        "ec2:AttachInternetGateway",
        "ec2:AttachVolume",
        "ec2:AuthorizeSecurityGroupEgress",
        "ec2:AuthorizeSecurityGroupIngress",
        "ec2:CreateInternetGateway",
        "ec2:CreateLaunchTemplate",
        "ec2:CreateRoute",
        "ec2:CreateRouteTable",
        "ec2:CreateSecurityGroup",
        "ec2:CreateSubnet",
        "ec2:CreateVolume",
        "ec2:CreateVpc",
        "ec2:ModifyVpcAttribute",
        "ec2:RevokeSecurityGroupEgress",
        "ec2:RunInstances"
      ],
      "Resource": "*"
    },
    {
      "Sid": "DescribeEC2Resources",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeVpcs",
        "ec2:DescribeSubnets",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeRouteTables",
        "ec2:DescribeInternetGateways",
        "ec2:DescribeVolumes",
        "ec2:DescribeAddresses",
        "ec2:DescribeLaunchTemplates",
        "ec2:DescribeImages",
        "ec2:DescribeAvailabilityZones",
        "ec2:DescribeKeyPairs",
        "ec2:DescribeNetworkAcls"
      ],
      "Resource": "*"
    },
    {
      "Sid": "TagCadoEC2ResourcesOnCreation",
      "Effect": "Allow",
      "Action": "ec2:CreateTags",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "ec2:CreateAction": [
            "AllocateAddress",
            "CreateInternetGateway",
            "CreateLaunchTemplate",
            "CreateRouteTable",
            "CreateSecurityGroup",
            "CreateSubnet",
            "CreateVolume",
            "CreateVpc",
            "RunInstances"
          ]
        }
      }
    },
    {
      "Sid": "ManageCadoEFSResources",
      "Effect": "Allow",
      "Action": [
        "elasticfilesystem:CreateAccessPoint",
        "elasticfilesystem:CreateFileSystem",
        "elasticfilesystem:CreateMountTarget",
        "elasticfilesystem:DescribeAccessPoints",
        "elasticfilesystem:DescribeFileSystems",
        "elasticfilesystem:DescribeMountTargets",
        "elasticfilesystem:PutLifecycleConfiguration",
        "elasticfilesystem:TagResource"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ManageCadoResponseIAMResources",
      "Effect": "Allow",
      "Action": [
        "iam:AddRoleToInstanceProfile",
        "iam:AttachRolePolicy",
        "iam:CreateInstanceProfile",
        "iam:CreatePolicy",
        "iam:CreateRole",
        "iam:GetInstanceProfile",
        "iam:GetRole",
        "iam:GetRolePolicy",
        "iam:PutRolePolicy"
      ],
      "Resource": [
        "arn:aws:iam::*:instance-profile/*-myCadoInstanceProfile-*",
        "arn:aws:iam::*:policy/*-myCadoResponse*",
        "arn:aws:iam::*:role/*-myCadoResponse*"
      ]
    },
    {
      "Sid": "IAMPassCadoRolesToEc2AndCloudFormation",
      "Effect": "Allow",
      "Action": "iam:PassRole",
      "Resource": "arn:aws:iam::*:role/*-myCadoResponse*",
      "Condition": {
        "StringEquals": {
          "iam:PassedToService": [
            "ec2.amazonaws.com",
            "cloudformation.amazonaws.com"
          ]
        }
      }
    },
    {
      "Sid": "ManageCadoLogGroups",
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:DescribeLogGroups"
      ],
      "Resource": [
        "arn:aws:logs:*:*:log-group:/var/logs/cado",
```
</details>

To provide full transparency into how the deployment process works, this document includes a table explaining why each permission is required and how it is used when creating a Cado deployment. This helps administrators understand the scope of access granted and make informed decisions when defining IAM policies.

<!-- CloudFormation Permissions -->
<details>
<summary><strong>CloudFormation Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| cloudformation:CreateStack | Deploy the FAI CloudFormation stack |
| cloudformation:CreateUploadBucket | Create a CloudFormation bucket for the large template |
| cloudformation:DescribeStackEvents | Get stack deployment status |
| cloudformation:DescribeStacks | Get stack description |
| cloudformation:GetTemplate | Retrieve the template body |
| cloudformation:GetTemplateSummary | Retrieve the template summary |
| cloudformation:ListStackResources | List all resources created in the stack |

### Scope  
| Resource | Description |
|---------|-------------|
| * | Stack names are user‑provided or AWS‑generated |

</details>

---

<!-- CreateCadoEC2Resources Permissions -->
<details>
<summary><strong>CreateCadoEC2Resources Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| ec2:AllocateAddress | Create an elastic IP for FAI |
| ec2:AssociateAddress | Attach the elastic IP |
| ec2:AssociateRouteTable | Link route table to subnets |
| ec2:AttachInternetGateway | Attach IGW to VPC |
| ec2:AttachVolume | Attach EBS volume |
| ec2:AuthorizeSecurityGroupEgress | Outbound SG rules |
| ec2:AuthorizeSecurityGroupIngress | Inbound SG rules |
| ec2:CreateInternetGateway | Create IGW |
| ec2:CreateLaunchTemplate | Create launch template |
| ec2:CreateRoute | Add a route |
| ec2:CreateRouteTable | Create a route table |
| ec2:CreateSecurityGroup | Create a security group |
| ec2:CreateSubnet | Create subnet |
| ec2:CreateVolume | Create EBS volume |
| ec2:CreateVpc | Create VPC |
| ec2:ModifyVpcAttribute | Modify VPC attributes |
| ec2:RevokeSecurityGroupEgress | Remove default egress |
| ec2:RunInstances | Launch the EC2 instance |

### Scoping  
| Resource | Description |
|---------|-------------|
| * | Applies to all resources |

</details>

---

<!-- DescribeEC2Resources Permissions -->
<details>
<summary><strong>DescribeEC2Resources Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| ec2:DescribeAddresses | Validate resource creation |
| ec2:DescribeAvailabilityZones | Validate AZ status |
| ec2:DescribeImages | Validate AMI |
| ec2:DescribeInstances | Validate EC2 |
| ec2:DescribeInternetGateways | Validate IGW |
| ec2:DescribeKeyPairs | Validate keypairs |
| ec2:DescribeLaunchTemplates | Validate templates |
| ec2:DescribeRouteTables | Validate routing |
| ec2:DescribeSecurityGroups | Validate SGs |
| ec2:DescribeSubnets | Validate subnets |
| ec2:DescribeVolumes | Validate volumes |
| ec2:DescribeVpcs | Validate VPC |
| ec2:DescribeNetworkAcls | Validate ACLs |

### Scoping  
| Resource | Description |
|---------|-------------|
| * | Applies across all resources |

</details>

---

<!-- TagCadoEc2ResourcesOnCreation Permissions -->
<details>
<summary><strong>TagCadoEc2ResourcesOnCreation Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| ec2:CreateTags | Tag resources created during deployment |

### Scoping  
| Condition | Description |
|----------|-------------|
| Tagging allowed only during EC2 resource creation | This includes creation of actions such as AllocateAddress, CreateInternetGateway, CreateLaunchTemplate, CreateRouteTable, CreateSecurityGroup, CreateSubnet, CreateVolume, CreateVpc, and RunInstances |

</details>

---

<!-- ManageCadoEFSResources Permissions -->
<details>
<summary><strong>ManageCadoEFSResources Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| elasticfilesystem:CreateAccessPoint | Create EFS access points |
| elasticfilesystem:CreateFileSystem | Create EFS filesystem |
| elasticfilesystem:CreateMountTarget | Create mount targets |
| elasticfilesystem:DescribeAccessPoints | Validate creation |
| elasticfilesystem:DescribeFileSystems | Validate creation |
| elasticfilesystem:DescribeMountTargets | Validate mount targets |
| elasticfilesystem:PutLifecycleConfiguration | Apply lifecycle policies |
| elasticfilesystem:TagResource | Tag EFS resources |

### Scoping  
| Resource | Description |
|---------|-------------|
| * | Applies to all EFS resources |

</details>

---

<!-- ManageCadoResponseIAMResources Permissions -->
<details>
<summary><strong>ManageCadoResponseIAMResources Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| iam:AddRoleToInstanceProfile | Attach role to profile |
| iam:AttachRolePolicy | Attach policies |
| iam:CreateInstanceProfile | Create instance profile |
| iam:CreatePolicy | Create custom policies |
| iam:CreateRole | Create roles |
| iam:GetInstanceProfile | Validate creation |
| iam:GetRole | Validate role |
| iam:GetRolePolicy | Retrieve inline policies |
| iam:PutRolePolicy | Add inline policies |

### Scoping  
| Resource | Description |
|---------|-------------|
| arn:aws:iam::*:instance-profile/* | Allowed instance profiles |
| arn:aws:iam::*:policy/* | Allowed IAM policies |
| arn:aws:iam::*:role/* | Allowed roles |
| Cado platform roles/policies | Restricted to Cado‑created IAM resources |

</details>

---

<!-- IAMPassCadoRolesToEc2AndCloudFormation Permissions -->
<details>
<summary><strong>IAMPassCadoRolesToEc2AndCloudFormation Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| iam:PassRole | Allow EC2/CloudFormation to assume roles |

### Scoping  
| Condition | Description |
|----------|-------------|
| Restricted services | Only EC2 and CloudFormation may assume the role |

</details>

---

<!-- ManageCadoLogGroups Permissions -->
<details>
<summary><strong>ManageCadoLogGroups Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| logs:CreateLogGroup | Create required log group |
| logs:CreateLogStream | Create log streams |
| logs:DescribeLogGroups | Validate log group existence |

### Scoping  
| Resource | Description |
|---------|-------------|
| arn:aws:logs:*:*:log-group:/var/logs/cado | Allowed Cado log groups |
| arn:aws:logs:*:*:log-group:/var/logs/cado:* | Allowed Cado log streams |

</details>

---

<!-- S3 CloudFormation Permissions -->
<details>
<summary><strong>S3 CloudFormation Permissions</strong></summary>

| Permission | Description |
|-----------|-------------|
| s3:CreateBucket | Create deployment bucket |
| s3:GetObject | Read CloudFormation template |
| s3:PutObject | Upload template objects |

### Scoping  
| Resource | Description |
|---------|-------------|
| arn:aws:s3:::cf-templates-* | CFN internal bucket |
| arn:aws:s3:::cf-templates-*/* | CFN internal objects |

</details>
