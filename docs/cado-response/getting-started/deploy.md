---
title: Deployment
hide_title: true
sidebar_position: 2
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

# Deployment

Deployment of Cado Response is performed within *your* cloud environment either via a CloudFormation Template or a Terraform Script. When the platform is deployed, it creates its own isolated VPC in which you can control who has access.  From start to finish, you can be up and running in under 25 minutes.

:::info
Deployment differs slightly based on your preferred cloud provider. Links below will take you to the respective AWS and Azure deployment guides.
- **[AWS - CloudFormation Template](#aws-cloudformation-template)** 
- **[Azure - Terraform Script](#azure-terraform-script)** 
:::

## AWS CloudFormation Template

To set up Cado Response in AWS you simply deploy our CloudFormation Template (CFT).  The CFT steps you through the process of configuring the platform stack.

1. Click **[here](https://console.aws.amazon.com/cloudformation/home?#/stacks/create/template?templateURL=https://cado-public.s3.amazonaws.com/DeployCloudFormation.json)** to open the AWS CloudFormation Management Console, with the Cado Response CloudFormation template pre-loaded.

2. On Step 1 (Specify template), do not change the default **Template is ready** and **Amazon S3 URL** settings.   Click **<Highlight color="#F78631">Next</Highlight>**

3. On Step 2 (Specify stack details), give your stack an appropriate Stack Name, for example: `CadoResponse` and enter the parameters as outlined below:

    | Parameter Name | Value | Description |
    | -------------- | ----- | ----------- |
    | Instance type for Cado Response EC2 Server | `t3a.xlarge` | You can leave this as the default `t3a.xlarge` or adjust depending on your needs. |
    | Key pair for Cado Response EC2 Server | *(choose your keypair)* | This key pair is used to enable SSH access to the Cado Response instance. |
    | CadoAMI | *(contact Cado Support support@cadosecurity.com for the AMI ID)* | Contact Cado Support for the appropriate API ID.  When contacting support, please provide the AWS region where you will be deploying Cado Response. |
    | Allowed source IP addresses for connection to SSH | *(enter ip range)* | Enter details of your IP address/ IP address ranges that will be used to connect to SSH services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. Default is `0.0.0.0/0` but it is recommneded that these settings are restricted to your corporate network range. |
    | Allowed source IP addresses for connection to HTTPS | *(enter ip range)* |Enter details of your IP address/ IP address ranges that will be used to connect to HTTPS services. The IPv4 address range is specified in the CIDR notation e.g. 192.168.0.1/24. Default is `0.0.0.0/0` but it is recommneded that these settings are restricted to your corporate network range. |
    | VPC CIDR | *(enter ip range)* | The Subnet the Cado VPC will use. Specify the IPv4 address range as a Classless Inter-Domain Routing (CIDR) block. |
    | EFSArchive | `AFTER_30_DAYS` | EFS - move data to infrequent storage after X days. |
    | InstanceVolumeSize | `1000`| EC2 instance volume required in GBit. |
    | S3ArchiveTime | `30` | Move S3 data to s3 glacier storage if not used after X days |
    | S3GlacierDelete | `365` | Delete S3 glacier storage data after X days. |
    
    :::tip
     We recommend a minimum setting of 500GB for InstanceVolumeSize. The instance will roughly need to be sized to be 20% of the amount of data you intend to be on the platform at once. For example, to have 5TB of disk images imported you will need approximately 1000GB of disk space. Projects can be deleted to recover space.
    :::

4. Click **<Highlight color="#F78631">Next</Highlight>**

5. On Step 3 (Configure stack options), click **<Highlight color="#F78631">Next</Highlight>** again, unless you require custom settings, which you can discuss with Cado Security.

    :::info
    For more information on available stack options, see [AWS Documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html).
    :::

6. Click **<Highlight color="#F78631">Next</Highlight>**

7. Review the details that have been applied and click **<Highlight color="#F78631">Create Stack</Highlight>**

    :::info
    If no IAM role has been applied in *Step 3 (Configure stack options)*, tick the check box for `I acknowledge that AWS CloudFormation might create IAM resources`
    :::

### Deployment Time

Deploying the CloudFormation stack will take approximately fifteen minutes, followed by another ten minutes for the completed stack to run an installation and update process.

When the CFT stack has a status of `CREATE_COMPLETE`, CloudFormation has finished creating the infrastructure for Cado Response.

![Create Complete](/img/create-complete.png)

### Logging In

Navigate to your AWS **[EC2 Console]( https://console.aws.amazon.com/ec2)** and find the Public IPv4 address of the Cado Response EC2 instance named `CadoResponse`.  Open a browser and navigate to https://*<Cado_Response_IP>* where *<Cado_Response_IP>* is the IPv4 of the CadoResponse EC2 instance.  You will see a browser notification stating that "Your connection is not private", we do not automatically generate a certificate. If you require a valid SSL certificate, the easiest way to create one for the encrypted HTTPS connection is to create your own ELB

:::tip
As a reminder, when the platform is deployed, it creates its own isolated VPC in which you can control who has access.  You can customize which IP addresses have access to your instance by clicking the Security tab of the Cado Response EC2 instance from within your AWS EC2 console. Cado Response is accessed via port 443.
:::

When the installation is complete, you will see the login page.

![Login Page](/img/login.png)

You can now login with the username "admin" and the password "i-xxx", where "i-xxx" is the Instance ID of your Cado Response EC2 instance

On first boot, the platform will take about 10 minutes to install, during which time, you will see a messeage indicating that the system is "Installing Cado Response ..."

## Azure Terraform Script

Coming soon ...