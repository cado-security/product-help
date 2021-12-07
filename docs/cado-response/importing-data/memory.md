---
title: Memory Forensics
hide_title: true
sidebar_position: 3
---

# Memory Forensics
Memory forensics support is currently in beta. You can enable it under the **Advanced** tab of the **Settings** page:

Once enabled, there are two options for acquiring memory. To acquire memory from a running AWS EC2 instance, browse to `Import -> AWS -> EC2 -> Acquire` and click the  **Acquire Memory** button.  It will take approximately 30 minutes for a small system to process - more for those with large amounts of memory. Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections.  Alternatively, you can perform a memory acquisition of a running on-premises Windows device by clicking `Import > Memory Collection` and running the pre-generated script on the host device.

:::info
Currently we only support Amazon Linux, Amazon Ubuntu and Windows Systems for AWS memory collection.  Also, your Cado Role will need permissions to access SSM. This is enabled by default if you deployed Cado Response via the CFT in May 2021 or later.
:::
