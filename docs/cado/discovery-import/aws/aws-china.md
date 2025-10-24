---
title: AWS China
hide_title: true
sidebar_position: 10
---

# How to Import from AWS China

The / Forensic Acquisition and Investigation platform does not currently support direct deployment into AWS China regions. The following guidance should be considered in accordance with your organization’s policies and local regulations regarding cross-border data transfers.

### Collecting Data Using / Forensic Acquisition and Investigation Host

You can use **/ Forensic Acquisition and Investigation Host** to collect data from any system in AWS China, as long as it has an outgoing internet connection. This data can then be transferred to your primary / Forensic Acquisition and Investigation instance in a supported global AWS region.

### Manually Acquiring Data from AWS China

To manually transfer data from AWS China regions, you can use the AWS CLI to copy the data to a / Forensic Acquisition and Investigation supported region. For assistance with transferring data between AWS partitions, contact AWS Support.

### Syncing Data Using External Tools

Several AWS and third-party tools can help sync data between regions. However, these tools are not officially supported or endorsed by / Forensic Acquisition and Investigation. Examples include:
- [s3sync on GitHub](https://github.com/issacg/s3sync)
- [AWS Guide on AMI Store and Restore](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html)
