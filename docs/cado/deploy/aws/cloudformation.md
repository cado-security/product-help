---
title: Deploy with Cloudformation
hide_title: true
sidebar_position: 1
---

# How to deploy with Cloudformation

# Quick start

Click [here](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml) to deploy the Cado platform via AWS Cloudformation with default options.

## AWS CloudFormation template

<iframe width="100%" height="628" src="https://www.youtube.com/embed/aMQOitmPLeE" title="Deploying with Cloudformation" frameborder="0" allowfullscreen></iframe>

To set up Cado in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack.

1. If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado CloudFormation Template in order to get started. If you have not, reach out to sales@cadosecurity.com for more details.

A number of CloudFormation templates are available to deploy Cado into your AWS environment. These include:
- [DeployCloudFormationPublic.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml) - This template creates an Amazon EC2 Instance with an associated IAM Role with required access. This deployment includes a public IP address and can be accessed directly.
- [DeployCloudFormationPrivate.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPrivate.yaml) - This template includes an Amazon Load Balancer. The instance won't have a public IP and will be accessed via the ALB.
- [DeployCloudFormationCustomVPC.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationCustomVPC.yaml) - This template deploys into an existing VPC. The associated template [DeployCloudFormationCustomVPCNetworking.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationCustomVPCNetworking.yaml) can be used to create the required networking within this VPC.
- [DeployCloudFormationGovCloud.yaml](https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationGovCloud.yaml) - For deployment into AWS GovCloud. This template includes an Amazon Load Balancer. The instance won't have a public IP and will be accessed via the ALB.

Additionally, a High Availability (HA) CloudFormation template is available for deployment (below).

2. Once you receive the link to the Cado CloudFormation Template, click the link to open the AWS CloudFormation Management Console.

3. On Step 1 (Specify template), do not change the default **Template is ready** and **Amazon S3 URL** settings.   Click **Next**

4. On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: `CadoResponse` and enter the parameters as outlined below:

    ### Parameters

    | Parameter Name | Value | Description |
    | -------------- | ----- | ----------- |
    | Instance type for Cado EC2 Server | `t3a.xlarge` | For enterprise use we recommend at minimum a t3a.xlarge as the instance type. |
    | Key pair for Cado EC2 Server | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs. |
    | Allowed source IP addresses for connection to SSH | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing SSH access |
    | Allowed source IP addresses for connection to HTTPS | *(enter ip range)* |Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing HTTPS access |
    | VPC CIDR | *(enter ip range)* | The Subnet the Cado VPC will use. Specify the IPv4 address range as a Classless Inter-Domain Routing (CIDR) block. |
    | EFSArchive | `AFTER_30_DAYS` | EFS - move data to infrequent storage after X days. |
    | InstanceVolumeSize | `1000`| EC2 instance volume required in GBit. |
    | S3ArchiveTime | `30` | Move S3 data to s3 glacier storage if not used after X days |
    | S3GlacierDelete | `365` | Delete S3 glacier storage data after X days. |
    | AvailabilityZoneA | *(choose your AZ)* | The Availability Zone used by the primary subnet. |
    | AvailabilityZoneB | *(choose your AZ)* | The Availability Zone used by the secondary subnet. |
    | FeatureFlagPlatformUpgrade | `True` | Enables the platform to perform native upgrades. |
    | CertificateARN | *(enter certificate arn)* | The ARN of the Certificate that will be assigned to the Application Load Balancer. Not used unless FeatureFlagDeployWithALB is True |
    | Proxy | *(https://user:pass@1.2.3.4:1234)* | Optional Proxy URL to use for outbound connections in format |
    | ProxyCertUrl | *(url)* | URL to download optional Proxy Certificate from. |


:::tip
  We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Investigations can always be deleted to recover space.
:::

6. Click **Next**

7. On Step 3 (Configure stack options), click **Next** again (unless you require custom settings). If you require custom settings, please contact Cado Security

    ![Step 3](/img/cft-step3.png)

    :::info
    For more information on available stack options, see [AWS Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html).
    :::

8. Click **Next**

9. Review the details that have been applied and click **Create Stack**

    :::info
    The Cado IAM policy defines which resources are accessible and which actions are allowed by the Cado software. If an IAM role has not been applied in *Step 3 (Configure stack options)* tick the check box for `I acknowledge that AWS CloudFormation might create IAM resources`.  The default IAM policy created by the Cloudformation template follows the principles of least privilege and only allows those actions needed by the Cado platform and, when able, are restricted based on tagging.  The exact IAM permissions used within Cado, can be found within the Cloudformation Template.
    :::


### Deployment Time

Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process.

When the CFT stack has a status of `CREATE_COMPLETE`, CloudFormation has finished creating the infrastructure for Cado.

![Creation Complete](/img/create-complete.png)

You can then **[Log into Cado](/cado/deploy/logging-in)** 

:::tip
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::

