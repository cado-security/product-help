---
title: Monitoring for Snapshots and Volumes
hide_title: true
sidebar_position: 9
---

# Monitoring for Snapshots and Volumes

You can monitor for Snapshots and Volumes created within an account.

By enabling the Tag Key and Tag Value setting at Settings > Advanced, any snapshots or volumes created with the specified tag in any region in the AWS account that the Cado platform is deployed into will be automatically imported:

![Monitoring](/img/tag_monitor.png)

Cado will check for new resources every 5 minutes.

This is useful for importing AWS resources into a dedicated forensics account from other accounts in the same organization, following detections or suspicious activity.