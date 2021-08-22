---
title: AWS Credentials
hide_title: true
sidebar_position: 3
---

# Creating Secure Credentials for AWS
Below we will create credentials with write-only access to AWS S3.

<iframe width="100%" height="628" src="https://www.youtube.com/embed/OW6fwaUNVXU" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

## Creating an S3 Bucket
If you haven't already, **[Create a new S3 bucket](https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html)**. Make sure that you do not enable public access to the bucket.

## Creating an AWS User with Limited Access
First we need to create a policy with write-only access to the bucket

## Creating The Policy
It is important to use a user that has limited access, so if an attacker steals the credentials you use with Cado Live Imager they cannot abuse them.
- First access the **[Access Management Policies](https://console.aws.amazon.com/iam/home#/policies)** page.
- Click Create Policy.
- Select Service as S3 and Actions as Write->PutObject
- Click Specific Resources then under bucket, click Add ARN
- Enter the name of your bucket, then click Add
- Then Click through to create the policy.

## Creating a User
- First access the **[IAM User Page](https://console.aws.amazon.com/iam/home#/users)** and select Add User.
- Create a new user with Programmatic access.
- Next select the permissions policy you just created.
- Then Click through to Create the User and retrieve the Access Key and Secret Key.

In the end, you are ready to go when you have:
1. The Access Key
2. The Secret Key
3. The Bucket Name