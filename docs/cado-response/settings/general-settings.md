---
title: General Settings
hide_title: true
sidebar_position: 1
---

# General Settings
You can access the settings by clicking **Settings** on the left menu

## Processing

The **Maximum Workers** sets the maximum number of workers (AWS EC2 Instances) the system will start for processing. The platform will wait to launch new workers if this limit is exceeded. The default value is 20.  The platform will also back off and wait if the AWS limits for the maximum number of VCPUs in a region have been exceeded.

The **Worker Instance Size** limits the size of data that can be imported. The default setting in AWS (i3.4xlarge) has 1.9 TB of disk space, allowing the processing of disks up to approximately 1.5 TB in size. The default Azure setting allows the processing of disks up to approximately 800 GB in size. Please set a large instance size (see for AWS or Azure) to increase the working space.  

:::tip
In AWS, for most use cases, you should keep the Worker Instance Size set to a Storage Optimized instance, like an `i3.4xlarge`
:::

The **Worker Shutdown Wait** is the number of seconds after a worker finishes processing a pipeline before it should shutdown. If nothing is set, the default is 5 minutes (300 seconds).

The **Elastic Search Hostname** sets where the data is stored. By default Cado Response connects to a database that is only accessible locally to the server, and for security purposes it is highly recommended you do not change this value.


## Cloud
These settings are used to authenticate against cloud providers.

An AWS Role is created at installation to authenticate against AWS. This is the recommended method of authentication. Optionally, you can set an **AWS Access Key** and **AWS Secret Key** to authenticate against AWS.

### Tagging Cado Response Resources
You also have the option to have workers tagged when they are launched.  This can be done by specifying the **Tag Key** and **Tag Value** which will be assigned when workers are launched. If you wish to apply more than one tag to workers, please see the below options.

#### Terraform
If you have deployed via Terraform - You can apply multiple tags to workers in both AWS and Azure by updating the "tags" variable in Terraform. If you deployed via Terraform into Azure add the below snippet into the cado_deploy_azure/azure_transient/main.tf script.
Or, if you deployed via Terraform into AWS add the below snippet into the cado_deploy_aws/aws/main.tf script.
Please also note that you will have to run terraform apply again after saving these changes.

```
variable "tags" {
    type = map(string)
    default = {}
}
```

#### CloudFormation

If you deployed via CloudFormation Template you can apply multiple tags to workers by adding them to the "UserData" section of the CloudFormation Template. Please note that deploying via CloudFormation requires you to specify tags prior to deployment. To add a worker tag add the below to the "UserData" field. 

```
"echo CUSTOM_TAG_FOO = BAR  >> /home/admin/processor/first_run.cfg",
"\n",
```

:::info
The `CUSTOM_TAG_` prefix is required. If you would like to apply a tag with key "FOO" and value "BAR" then your line should appear as it does in the above example.
:::

:::info
The last line of the "UserData" field must contain
```
"sudo /home/admin/processor/release/finalize.sh --main"
```
:::

## Licensing
In order to use Cado Response, you must upload a valid license.  

If you have received a license file from your Sales representative, you can upload it by:
- Logging into your Cado Response instance
- Navigate to **Settings**
- Click **Licensing**
- Click **Select file**, choose the license (json) file 
- Click **Upload**

If you do not have a license, please contact sales@cadosecurity.com 

## Detections
The **VirusTotal API Key** is used to enhance the analysis of already detected files by checking their file-hash against the VirusTotal database. It is not used to detect files. 

The **Yara Rules** text-box allows you to run your own set of Yara rules against files. These are run in addition to a set built-in to Cado Response. Rules that match will trigger a `Malicious` detection, unless the yara rule name starts with the keyword suspicious - in which case it will create a `Suspicious` detection.

The **Indicators of Compromise** are matched against the contents of files and events, for example connections from network logs. Enter one indicator on each line. You can enter any keyword such as a filename, IP address or Domain name. If you enter a SHA256 filehash, it will be matched against files too. You can optionally enter a title for an indicator, preceded by the ';' character. For example "Domain.com;A bad domain"

## Updates
These settings display and allow you to trigger an update of the Cado Response platfrom. 

For AWS, the default update mechanism requires the ability for the Cado Response instance to connect outbound to an AMI in the same region in which Cado Response is deployed.  For Azure, the default update mechanism requires the ability to connect outbound to a VHD URL. 

Alternatively, you can specify an AMI ID in AWS or a VHD URL in Azure using the Alternative Update Method.  In all cases, upgrades to Cado Response are user-initiated and will not be initiated automatically by Cado.

## Advanced
:::warning
Memory Capture support is currently in beta. 
:::

Once enabled, there are two options for acquiring memory. To acquire memory from a running AWS EC2 instance, browse to `Import -> AWS -> EC2 -> Acquire` you will see an **Acquire Memory** button.  It will take approximately 30 minutes for a small system to process - more for those with large amounts of memory.  Alternatively, you can perform a memory acquisition of a running on-premises Windows device by clicking `Import > Memory Collection` and running the pre-generated script on the host device.

Enabling **Private IP Addresses for Workers** will force workers in AWS to only have a Private IP Address, and no Public IP Address. If you do so, you will need to add [VPC endpoints](https://tomgregory.com/when-to-use-an-aws-s3-vpc-endpoint/) or add proper VPC routing to ensure the workers can still access the AWS STS, S3 and EC2 services. 

## API
The Cado API enables third party tools and automation scripts to integrate with the Cado Response platform.  Here, you can Create and Revoke API access tokens.

You can use the **API Tokens** and many pre-made out-of-the-box integrations to trigger operations in the platform (e.g. acquire instances from your cloud environments), retrieve data that our system captured (e.g. suspicious events), manage and control investigation projects, and more.  

## OAuth

:::warning
OAuth support is currently in beta. 
:::


Cado Response supports SSO integration with Azure AD and Okta.  The **Microsoft OAuth** and **Okta OAuth** sections allow for the configuration of each of these options.  For more information on how to setup OAuth with Cado Response, please see [Azure AD Integration](../sso/azure-ad) or [Okta Integration](../sso/okta)
