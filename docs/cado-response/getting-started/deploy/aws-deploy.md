---
title: AWS
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

Deployment of Cado Response is performed within your AWS cloud environment either via a CloudFormation Template, a Terraform Script or via the AWS Marketplace. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.  

Cado Response consists of a few key components that interact with each other in order to provide the capabilities within the platform.   
![AWS architecture](/img/aws-architecture.png)


## AWS CloudFormation Template

To set up Cado Response in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack.

1. If you have signed up for a Free Trial or are working with the Cado Sales team already, you should receive a link to the Cado Response CloudFormation Template in order to get started. If you have not, reach out to sales@cadosecurity.com for more details.  Once you receive the link to the Cado Response CloudFormation Template, click the link to open the AWS CloudFormation Management Console.

2. On Step 1 (Specify template), do not change the default **Template is ready** and **Amazon S3 URL** settings.   Click **<Highlight color="#F78631">Next</Highlight>**

3. On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: `CadoResponse` and enter the parameters as outlined below:

    ### Parameters

    | Parameter Name | Value | Description |
    | -------------- | ----- | ----------- |
    | Instance type for Cado Response EC2 Server | `t3a.xlarge` | For enterprise use we recommend at minimum a t3a.xlarge as the instance type. |
    | Key pair for Cado Response EC2 Server | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado Response instance. This is not needed for normal operation, but is helpful should Cado Support ask for additional logs. |
    | CadoAMI | *(Please contact your Cado Sales team)* | Please contact your Cado Sales team for the appropriate AMI ID.  When contacting Sales, please provide your AWS Account Number and your AWS region where you will be deploying Cado Response. |
    | Allowed source IP addresses for connection to SSH | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing SSH access |
    | Allowed source IP addresses for connection to HTTPS | *(enter ip range)* |Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. It is strongly recommended following the principle of least privilege and restrict this to only those IPs needing HTTPS access |
    | VPC CIDR | *(enter ip range)* | The Subnet the Cado VPC will use. Specify the IPv4 address range as a Classless Inter-Domain Routing (CIDR) block. |
    | EFSArchive | `AFTER_30_DAYS` | EFS - move data to infrequent storage after X days. |
    | InstanceVolumeSize | `1000`| EC2 instance volume required in GBit. |
    | S3ArchiveTime | `30` | Move S3 data to s3 glacier storage if not used after X days |
    | S3GlacierDelete | `365` | Delete S3 glacier storage data after X days. |
    
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
    The Cado Response IAM policy defines which resources are accessible and which actions are allowed by the Cado Response software. If an IAM role has not been applied in *Step 3 (Configure stack options)* tick the check box for `I acknowledge that AWS CloudFormation might create IAM resources`.  The default IAM policy created by the Cloudformation template follows the principles of least privilege and only allows those actions needed by the Cado Response platform and, when able, are restricted based on tagging.  The exact IAM permissions used within Cado Response, can be found within the Cloudformation Template json file.
    :::

### Deployment Time

Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process.

When the CFT stack has a status of `CREATE_COMPLETE`, CloudFormation has finished creating the infrastructure for Cado Response.

![Creation Complete](/img/create-complete.png)

You can then **[Log into Cado Response](../logging-in)** 

:::tip
After deployment, you can import Test Data from the `Help` menu to confirm that the deployment was successful.
:::

### Supported Regions
Cado makes AWS AMI's available for the regions below.  As a customer, if you require deployment to a region that isn't listed, we can deploy our release AMIs to additional regions.  You can deploy to all 20+ default AWS regions via our AWS marketplace listing. 
- us-east-1
- us-east-2
- us-west-1
- us-west-2
- eu-west-1
- eu-west-2
- eu-west-3

### Data Encryption and Security
During deployment, by default, an S3 bucket, a VPC and a Subnet are created for use by the Cado Response solution.  From an access and security perspective, the S3 Bucket is encrypted with server-side encryption using AES256 and attached volumes are also encrypted using KMS.  We recommend you enable key rotation as well (https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html). The default VPC and Subnet create an isolated environment to which customers can control access rights.  When processing data, the Cado Response worker instances are launched within the same VPC as the main Cado Response instance.  Worker instances are started using the same AMI as the main Cado Response instance as well.

### AWS Logging Best Practices
We recommend customers follow AWS best practices regarding logging (https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-cis-controls.html) which includes the following:
- Ensure CloudTrail is enabled in all regions
- Ensure CloudTrail log file validation is enabled
- Ensure the S3 bucket used to store CloudTrail logs is not publicly accessible
- Ensure CloudTrail trails are integrated with CloudWatch Logs
- Ensure AWS Config is enabled in all regions
- Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket
- Ensure CloudTrail logs are encrypted at rest using KMS CMKs
- Ensure rotation for customer created CMKs is enabled
- Ensure VPC flow logging is enabled in all VPCs

### Backup and Recovery
This section explains how to recover or migrate Cado Response to a new instance.

Cado Response also backs up any imports to S3 which can then be re-imported later to a fresh instance, but you will need to restore the data volume if you want to recover user settings such as user logins.

If a Cado Response instance fails, you will need to recover and attach the data volume to a new instance. The data volume contains previously imported data as well as user settings.

You can also use this approach to migrate Cado Response to a new availability zone or region.

#### Scheduling Automated Backups of the Data Volume
Amazon EBS Snapshots are stored by AWS in Amazon S3, where it is stored redundantly in multiple Availability Zones.

You can create an **[EventBridge](https://us-west-2.console.aws.amazon.com/events/home)** rule that regularly (e.g. daily) backs up the CadoResponse EC2 instance:

![AWS Backup 1](/img/aws-backup-1.png)

![AWS Backup 2](/img/aws-backup-2.png)

For more, see **[this tutorial](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-snapshot.html)** from AWS.

#### Restoring the Data Volume 
To perform a migration or restoration to a new instance, deploy a Cado Response installation and Stop the Cado Response EC2 Installation.

The operating system volume will be smaller (typically 10 GB). Detach the larger Data Volume (`/dev/sdh` seen below):

![AWS Backup 3](/img/aws-backup-3.png)

![AWS Backup 4](/img/aws-backup-4.png)

Next, **[restore](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/restore.html)** the Snapshot backup of your old Cado Response installation to a Volume in the same availability zone as your new Cado EC2 Instance.

![AWS Backup 5](/img/aws-backup-5.png)

Then, simply **[attach](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html)** the restored Data Volume to your new Cado EC2 Instance and start it.
