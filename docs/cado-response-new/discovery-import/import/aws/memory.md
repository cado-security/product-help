---
title: AWS Memory Analysis
hide_title: true
sidebar_position: 5
---

# AWS Memory Analysis
Memory analysis support is currently in beta. You can enable it under the **Advanced** tab of the **Settings** page:

To acquire memory from a running AWS EC2 instance, browse to `Import > AWS EC2 Instance` find the EC2 you wish to acquire memory from and click the  **Import Memory** button.  If you do not see the **Import Memory** button, please enable Memory Capture under 'Settings > Advanced > Memory Capture'.

:::info 
Note that importing memory via `Import > AWS EC2 Instance` requires the AWS SSM agent to be running on the EC2 and registered within the AWS Systems Manager.
:::

