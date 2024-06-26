---
title: Overview
hide_title: true
sidebar_position: 1
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


## Quick Start

Click [here](https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/create/review?templateURL=https://cado-public.s3.amazonaws.com/cloudformation_v2/DeployCloudFormationPublic.yaml) to deploy the Cado platform via AWS Cloudformation with default options.

Please reach out to sales@cadosecurity.com for a full license, or get a free limited community license [here](https://www.cadosecurity.com/cado-community-edition)

## AWS Deployment Overview



:::note
**Intended Audience and Operating Environment Requirements:**
This information is written for proficient AWS cloud administrators who are familiar with AWS technology and cloud operations. This manual assumes you already have an AWS account and are familiar with Amazon Web Services capabilities and terminology, including Cloudformation Templates, EC2s, Security Groups, VPCs, IAM roles and S3.
:::

Deployment of the Cado platform is performed within your AWS cloud environment either via a CloudFormation Template, a Terraform Script or via the AWS Marketplace. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

By default AWS will limit the number of CPUs that can run in a region to 32. We recommend raising this limit to 128 CPU's to enable fast processing. You can do so by filling out [this form](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#vcpu-limits-request-increase) and requesting 128 vCPU for "Running On-Demand All Standard" instances.

Cado consists of a few key components that interact with each other in order to provide the capabilities within the platform.   
![AWS architecture](/img/aws-architecture.png)

This diagram is a simplified architecture.
We support private deployments with no internet and proxy inspection to support environments with strict security requirements such as those under PCI and HIPAA (below).

## AWS CloudFormation Template

<iframe width="100%" height="628" src="https://www.youtube.com/embed/aMQOitmPLeE" title="Deploying with Cloudformation" frameborder="0" allowfullscreen></iframe>

To set up Cado in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack.

1. If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado CloudFormation Template in order to get started. If you have not, reach out to sales@cadosecurity.com for more details.

A number of CloudFormation templates are available to deploy Cado into your AWS environment. These include:
- DeployCloudFormationPublic.yaml - This template creates an Amazon EC2 Instance with an associated IAM Role with required access. This deployment includes a public IP address and can be accessed directly.
- DeployCloudFormationPrivate.yaml - This template includes an Amazon Load Balancer. The instance won't have a public IP and will be accessed via the ALB.
- DeployCloudFormationCustomVPC.yaml - This template deploys into an existing VPC. The associated template DeployCloudFormationCustomVPCNetworking.yaml can be used to create the required networking within this VPC.
- DeployCloudFormationGovCloud.yaml - For deployment into AWS GovCloud. This template includes an Amazon Load Balancer. The instance won't have a public IP and will be accessed via the ALB.

Additionally, a High Availability (HA) CloudFormation template is available for deployment (below).

2. Once you receive the link to the Cado CloudFormation Template, click the link to open the AWS CloudFormation Management Console.

3. On Step 1 (Specify template), do not change the default **Template is ready** and **Amazon S3 URL** settings.   Click **<Highlight color="#F78631">Next</Highlight>**

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
     We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space.
    :::

6. Click **<Highlight color="#F78631">Next</Highlight>**

7. On Step 3 (Configure stack options), click **<Highlight color="#F78631">Next</Highlight>** again (unless you require custom settings). If you require custom settings, please contact Cado Security

    ![Step 3](/img/cft-step3.png)

    :::info
    For more information on available stack options, see [AWS Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html).
    :::

8. Click **<Highlight color="#F78631">Next</Highlight>**

9. Review the details that have been applied and click **<Highlight color="#F78631">Create Stack</Highlight>**

    :::info
    The Cado IAM policy defines which resources are accessible and which actions are allowed by the Cado software. If an IAM role has not been applied in *Step 3 (Configure stack options)* tick the check box for `I acknowledge that AWS CloudFormation might create IAM resources`.  The default IAM policy created by the Cloudformation template follows the principles of least privilege and only allows those actions needed by the Cado platform and, when able, are restricted based on tagging.  The exact IAM permissions used within Cado, can be found within the Cloudformation Template.
    :::

## AWS CloudFormation High Availability

The Cado platform can be deployed in a High Availability (HA) configuration allowing a multi-AZ deployment using managed services and an auto-scaling group with a load balancer.
This deployment adds complexity, but may be required in some environments that require high availability due to regulatory or operational requirements.
Currently HA is only officially supported through CloudFormation.
To deploy with HA, please contact the Cado Sales team at sales@cadosecurity.com.

### Deployment Time

Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process.

When the CFT stack has a status of `CREATE_COMPLETE`, CloudFormation has finished creating the infrastructure for Cado.

![Creation Complete](/img/create-complete.png)

You can then **[Log into Cado](../../manage/logging-in.md)** 

:::tip
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::

## AWS Terraform Deployment

If you have not already, please contact the Cado Sales team at sales@cadosecurity.com for a copy of the AWS Terraform code and the AMI for the region which you will deploy into.

1. Clone the repo from https://github.com/cado-security/Deployment-Templates/tree/main/aws_v2.
2. Navigate to the root **aws_v2** folder.
3. Adjust the provided `awsVars.tfvars` file, with your deployment configuration.
4. Run `terraform init`
5. Confirm configuration and view deployment plan run `terraform plan -var-file="awsVars.tfvars"`
4. To deploy run `terraform apply -var-file="awsVars.tfvars"`
    1. PowerShell on Windows cannot correctly pass literal quotes to external programs, so we do not recommend using Terraform with PowerShell when you are on Windows. Use Windows Command Prompt instead.

### Parameters

  | Parameter Name | Value | Description |
  | -------------- | ----- | ----------- |
  | region | *(choose AWS region)* | AWS Region to deploy the Cado platform in, e.g. `us-east-1` |
  | key_name | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs. |
  | ami_id | *(contact Cado Sales)* | Please contact your Cado Sales team for the appropriate AMI ID. When contacting Sales, please provide your AWS Account Number and your AWS region where you will be deploying Cado. |
  | public_deployment | *(IP vs ALB url)* | False by default. Set True if you want the instance to have a public IP address. False hides the Instance behind an ALB with a DNS record to connect to. |
  | certificate_arn | *(HTTPS certificate ARN)* | *Only* needed if `public_deployment` is False. The ARN of the certificate to use on the ALB. |
  | tags | *(Tag resources)* | Map of strings. Tag all deployed resources with information to make them easily identifiable. |
  | vm_size | *(choose vm size)* | m5.4xlarge by default. |
  | vol_size | *(choose disk size)* | 100 GB by default. |
  | ssh_location | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing SSH access |
  | http_location | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing HTTPS access |
  | custom_networking | *(optional custom networking)* | If you want to deploy into already provisioned networking configuration. Cado will not deploy. For *Public* deployments `vpc_id` and `public_subnet_id` must be supplied. For *Private* deployments `vpc_id`, `public_subnet_id`, `public_subnet_b_id` and `private_subnet_id` must be provided. |
  | proxy | *(URL)* | Proxy URL to use for outbound connections in format / User Pass - https://user:pass@1.2.3.4:1234 | IP Auth - https://1.2.3.4:1234 |
  | proxy_cert_url | *(URL)* | URL to download proxy certificate from, leave blank to use proxy without a cert. |


5. After the infrastructure is built out, there is a one-time initialization that is performed.  In total, the deploy and initialization process should take about 10-15 minutes with Terraform.
6. You can then **[Log into Cado](../../manage/logging-in.md)**. Note that the initial username is admin and the password is the instance id for the Cado platform.  You'll be asked to change your password after first login.
7. Lastly, you will need to import a license JSON file.

### Supported Regions
Cado makes AWS AMI's available for the regions below.  As a customer, if you require deployment to a region that isn't listed, we can deploy our release AMIs to additional regions.  You can deploy to all 20+ default AWS regions via our AWS marketplace listing. 
- us-east-1
- us-east-2
- us-west-1
- us-west-2
- eu-west-1
- eu-west-2
- eu-west-3
- ap-southeast-2
- eu-central-1
- ca-central-1
- ap-south-1

## AWS GovCloud
The Cado platform can be deployed in to AWS GovCloud using CloudFormation.
We support both us-gov-west-1 and us-gov-east-1 regions.
To deploy into GovCloud, please contact the Cado Sales team at sales@cadosecurity.com

 