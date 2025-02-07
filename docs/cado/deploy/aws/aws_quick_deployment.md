---
title: Minimal Deployment Guide
hide_title: true
sidebar_position: 2
---

# Minimal Deployment Guide

This guide provides step-by-step instructions for deploying a Cado instance from the AWS console, aimed at helping you get up and running with the platform as quickly as possible

The initial deployment offers a basic working environment; however, certain functionalities are not included. Refer to the ‘Extensions’ section for details on missing features and instructions on how to add them.

## Initial Deployment

### Prerequisites

Before starting, make sure you have all the following:

- The Cado version number you want to deploy. We recommend using our [updates page](https://cado-public.s3.amazonaws.com/cado_updates_newest_v2.json) to retrieve the latest version.
- An S3 bucket for Cado to use. This should be for use exclusively by Cado - do not attempt to reuse/share an existing bucket
- A Cado Instance IAM policy containing the following (**IAM** > **Policies** > **Create policy** > **JSON**)

![Create Policy](/img/aws-create-policy.png)

```json
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Sid": "RequiredForCadoHostAndPreservation",
     "Effect": "Allow",
     "Action": [
           "s3:PutObject",
               "s3:GetObject",
               "s3:RestoreObject",
               "s3:PutObjectTagging",
               "s3:GetObjectTagging"
     ],
     "Resource": "arn:aws:s3:::MY_CADO_BUCKET/*" // Replace MY_CADO_BUCKET with your bucket name and delete this comment
   },
   {
       "Sid": "RequiredForCadoHostAndPreservation2",
     "Effect": "Allow",
     "Action": [
           "s3:ListAllMyBuckets",
               "s3:ListBucket",
               "s3:GetBucketLocation"
     ],
     "Resource": "arn:aws:s3:::MY_CADO_BUCKET" // Replace MY_CADO_BUCKET with your bucket name and delete this comment
   }
 ]
}
```
- A Role (“a Cado Instance Profile Role”), with your Cado Instance Policy attached.
  - To create an instance profile go to **IAM** > **Roles** > **Create Role**. Select ‘AWS Service’ for trusted entity type and EC2 for Use case. Click Next then select your policy and create.
 
![Trusted Entity](/img/aws-trusted-entity.png)

- A VPC to deploy into which has:
  - Outbound route to the public internet
  - Subnet
  - DNS hostnames enabled
  - DNS resolution enabled

- An SSH key pair in the region you are deploying in

## Instructions

1. Visit the **Launch an instance** page in the AWS console

![Launch Instance](/img/aws-launch-instance.png)

2. Enter a name and any tags required by your organization

![Name and Tag](/img/aws-name-tag.png)

3. Configure AMI:
   
   a. Click **Browse more AMIs**

![AMI](/img/aws-ami.png)

   b. Select **Community AMIs** tab
   
   c. Paste the Cado AMI for your region (see prerequisites) into the search bar
   
   d. Select the returned AMI. If you don’t get results here double check you have the AMI id from the region you are trying to deploy into

![Cado AMI](/img/aws-cado-ami.png)

4. Configure Instance type: select t3.2xlarge (other Nitro based instance types may be supported)

![Instance Type](/img/aws-instance-type.png)

5. Select SSH Key pair

![Key Pair](/img/aws-key-pair.png)

6. Configure Network settings:

   a. Click **Edit**

   b. Select VPC from the prerequisites (which may be your default VPC)
   
   c. Select Subnet from prerequisites, or ‘No Preference’ If you don’t mind which subnet in the VPC is used and they all meet the requirements.

   d. Set Auto-assign public IP to ‘Enable’.

   e. Select ‘Create security group’

   f. Add an inbound security rule with Type ‘SSH’ and Source Type ‘My IP’.

   g. Add an inbound security rule with Type ‘HTTPS’ and Source Type ‘My IP’

   - **Note:** this allows access to the Cado Instance from your IP only! If you want to allow other IPs you can configure additional IPs here.
  
![Network Settings](/img/aws-network-settings.png)

7. Configure “Storage (volumes)”

   a. Select Advanced

   ![EBS Volume](/img/aws-ebs-volume.png)

   b. Select “Add new volume”

   ![Add Volume](/img/aws-add-volume.png)

   c. Set ‘Size’ to 100GB

   ![Set Disk Size](/img/aws-volume-set-size.png)

8. Configure “Advanced details”

   a. Select your role in the “IAM instance profile” dropdown

   ![IAM Instance Role](/img/aws-instance-profile.png)

   b. Replace MY_CADO_BUCKET in the text below, and paste into the “User data” block:

```bash
#!/bin/bash -x
echo "[FIRST_RUN]" > /home/admin/processor/first_run.cfg
echo "bucket = MY_CADO_BUCKET" >> /home/admin/processor/first_run.cfg
```

![User Data](/img/aws-user-data.png)

9. Click **Launch instance**

![Summary](/img/aws-summary.png)

10. After launching it will take a few minutes for Cado to start.

![Success](/img/aws-success.png)
