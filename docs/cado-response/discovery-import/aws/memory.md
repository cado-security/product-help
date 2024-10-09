---
title: AWS Memory Analysis
hide_title: true
sidebar_position: 7
---


# How to import memory from AWS EC2
You can acquire memory of Linux systems in EC2 by using the "Triage Acquisition" option under Import > EC2:

![AWS Memory](/img/alternate-ec2.png)

This requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager. If it is not, you can acquire memory by connecting to the machine over SSH or RDP and executing Cado Host from Import > Forensic Artifacts. You can also use this method to acquire from Windows systems.

Any acquisition from ECS and EKS will attempt to collect memory by default.

For more information, see the [Memory Analysis](/cado-response/discovery-import/import/data-types/memory) page.

### Data Flow Diagram
For a diagram of how our EC2 SSM acquisitions operate, please see below:

![EC2 SSM Data Flow](/img/ec2-ssm.png)