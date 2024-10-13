---
title: AWS Memory Analysis
hide_title: true
sidebar_position: 7
---

# How to Import Memory from AWS EC2

To acquire memory from Linux systems running in EC2, use the **Triage Acquisition** option under **Import > EC2**:

![AWS Memory](/img/alternate-ec2.png)

This method requires the AWS Systems Manager (SSM) agent to be installed and running on the EC2 instance. The instance must also be registered with AWS Systems Manager. If the SSM agent is not available, you can still acquire memory by connecting to the machine via SSH (for Linux) or RDP (for Windows) and running **Cado Host** from **Import > Forensic Artifacts**.

This method can also be used to acquire memory from Windows systems.

For ECS and EKS acquisitions, memory will be collected automatically by default.

For additional details, see the [Memory Analysis](/cado/discovery-import/data-types/memory.md) page.

### Data Flow Diagram

The following diagram illustrates how EC2 SSM memory acquisitions work:

![EC2 SSM Data Flow](/img/ec2-ssm.png)