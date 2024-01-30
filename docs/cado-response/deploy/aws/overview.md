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


## AWS Deployment Overview

:::note
**Intended Audience and Operating Environment Requirements:**
*This information is written for proficient AWS cloud administrators who are familiar with AWS technology and cloud operations. This manual assumes you already have an AWS account and are familiar with Amazon Web Services capabilites and terminology, including Cloudformation Templates, EC2s, Security Groups, VPCs, IAM roles and S3.  For a list of supported AWS regions, please see our Markteplace listing: https://aws.amazon.com/marketplace/pp/prodview-2ol4yojhc5vpa?ref_=srh_res_product_title *
:::

Deployment of the Cado platform is performed within your AWS cloud environment either via a CloudFormation Template, a Terraform Script or via the AWS Marketplace. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

By default AWS will limit the number of CPUs that can run in a region to 32. We recommend raising this limit to 128 CPU's to enable fast processing. You can do so by filling out [this form](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#vcpu-limits-request-increase) and requesting 128 vCPU for "Running On-Demand All Standard" instances.

Cado consists of a few key components that interact with each other in order to provide the capabilities within the platform.   
![AWS architecture](/img/aws-architecture.png)


## AWS CloudFormation Template

<iframe width="100%" height="628" src="https://www.youtube.com/embed/aMQOitmPLeE" title="Deploying with Cloudformation" frameborder="0" allowfullscreen></iframe>

To set up Cado in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack.

1. If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado CloudFormation Template in order to get started. If you have not, reach out to sales@cadosecurity.com for more details.  Once you receive the link to the Cado CloudFormation Template, click the link to open the AWS CloudFormation Management Console.

2. On Step 1 (Specify template), do not change the default **Template is ready** and **Amazon S3 URL** settings.   Click **<Highlight color="#F78631">Next</Highlight>**

3. On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: `CadoResponse` and enter the parameters as outlined below:

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
    | FeatureFlagDeployWithALB | `False` | Deploys the platform with an Application Load Balancer. If set to True CertificateARN MUST be populated |
    | CertificateARN | *(enter certificate arn)* | The ARN of the Certificate that will be assigned to the Application Load Balancer. Not used unless FeatureFlagDeployWithALB is True |

    
    :::tip
     We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can always be deleted to recover space.
    :::

4. Click **<Highlight color="#F78631">Next</Highlight>**

5. On Step 3 (Configure stack options), click **<Highlight color="#F78631">Next</Highlight>** again (unless you require custom settings). If you require custom settings, please contact Cado Security

    ![Step 3](/img/cft-step3.png)

    :::info
    For more information on available stack options, see [AWS Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html).
    :::

6. Click **<Highlight color="#F78631">Next</Highlight>**

7. Review the details that have been applied and click **<Highlight color="#F78631">Create Stack</Highlight>**

    :::info
    The Cado IAM policy defines which resources are accessible and which actions are allowed by the Cado software. If an IAM role has not been applied in *Step 3 (Configure stack options)* tick the check box for `I acknowledge that AWS CloudFormation might create IAM resources`.  The default IAM policy created by the Cloudformation template follows the principles of least privilege and only allows those actions needed by the Cado platform and, when able, are restricted based on tagging.  The exact IAM permissions used within Cado, can be found within the Cloudformation Template json file.
    :::

## AWS CloudFormation High Availability

The Cado platform can be deployed in a High Availability (HA) configuration allowing a multi-AZ deployment using managed services and an auto-scaling group with a load balancer. To deploy with HA, please contact the Cado Sales team at sales@cadosecurity.com.

## AWS GovCloud
The Cado platform can be deployed in to AWS GovCloud using CloudFormation.
We support both us-gov-west-1 and us-gov-east-1 regions.
To deploy into GovCloud, please contact the Cado Sales team at sales@cadosecurity.com.


### Deployment Time

Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process.

When the CFT stack has a status of `CREATE_COMPLETE`, CloudFormation has finished creating the infrastructure for Cado.

![Creation Complete](/img/create-complete.png)

You can then **[Log into Cado](../../manage/logging-in.md)** 

:::tip
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::

### AWS Terraform Deployment

If you have not already, please contact the Cado Sales team at sales@cadosecurity.com for a copy of the AWS Terraform code and the AMI for the region which you will deploy into.

1. Download and unzip **aws.zip**.
2. Navigate to the **aws_combined** folder.
3. Run `terraform init`
4. Run `terraform apply`. Note that the Terraform script will ask you for a number of variables which you can also pass in via the command line if you choose.  Example: `terraform apply -var="region=us-west-2" -var="key_name=second_oregon.pem" -var="ami_id=ami-08f75cb3e680edc28" -var="ssh_location=[\"8.8.8.8/32\"]" -var="http_location=[\"8.8.8.8/32\"]" -var="certificate_arn=" -var="feature_flag_deploy_with_alb=false"`
    1. PowerShell on Windows cannot correctly pass literal quotes to external programs, so we do not recommend using Terraform with PowerShell when you are on Windows. Use Windows Command Prompt instead.

### Parameters

  | Parameter Name | Value | Description |
  | -------------- | ----- | ----------- |
  | region | *(choose AWS region)* | AWS Region to deploy the Cado platform in, e.g. `us-east-1` |
  | key_name | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs. |
  | ami_id | *(contact Cado Sales)* | Please contact your Cado Sales team for the appropriate AMI ID. When contacting Sales, please provide your AWS Account Number and your AWS region where you will be deploying Cado. |
  | ssh_location | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing SSH access |
  | http_location | *(enter ip range)* |Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing HTTPS access |
  | feature_flag_deploy_with_alb | `False` | Deploys the platform with an Application Load Balancer. If set to True CertificateARN MUST be populated |
  | certificate_arn | *(enter certificate arn)* | The ARN of the Certificate that will be assigned to the Application Load Balancer. Not used unless FeatureFlagDeployWithALB is True |

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

