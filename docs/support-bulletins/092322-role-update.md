---
title: Sep 23 2022 - AWS Role Update
hide_title: true
sidebar_position: 1
---

# AWS Role Update

On Sep 21st, 2022 [AWS announced a change with immediate effect to AWS roles](https://aws.amazon.com/blogs/security/announcing-an-update-to-iam-role-trust-policy-behavior/) that affects the operation of the Cado platform. These new changes mean that **any Cado installation deployed after June 30th will no longer operate correctly**, including not being able to initialize new workers for data acquisition or processing.
 
Installations deployed prior to June 30th will continue to function, and Cado plans to issue an update during the week commencing Sep 26th, 2022 that will fix the issue. In the meantime - if needed - there are manual steps you can take in order to ensure that your Cado platform continues to function properly. These are detailed below.
 
We are working with AWS to prevent the recurrence of unexpected changes.

## Instructions for manually updating your system

1. Cado Response instance, navigate to *Settings > Cloud* and copy the value in the "AWS Role" box:

![AWS Role](/img/aws-role.png)

2.  In the AWS IAM console, navigate to your Cado Response role
3. Select the "Trust relationships" tab
4. Select "Edit trust policy". Yours should currently look like this:

![AWS Role](/img/trust-policy-before.png)

5. Add a new line inside the "Principal" block with the text `“AWS”:"<ARN of your Cado Response role>”` ( you can paste in your Cado Response role here ).

Your new Trust Policy will look like this, with your ARN in the designated place

![AWS Role](/img/trust-policy-after.png)

6. Select "Update Policy"