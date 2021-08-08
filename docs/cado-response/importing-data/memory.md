---
title: Memory Forensics
hide_title: true
sidebar_position: 3
---

# Memory Forensics
Memory forensics support is currently in beta. You can enable it under the **Advanced** tab of the **Settings** page:

![Advanced Settings](/img/advanced-settings.png)

Once enabled, if you browse to `Import -> AWS -> EC2 -> Acquire` you will see an  **Acquire Memory** button.

It will take approximately 30 minutes for a small system to process - more for those with large amounts of memory. Once processed, you will be able to browse the file system including the contents of files (if they were in memory at the time) and view information from running processes and network connections.

:::info
Currently we only support Amazon Linux, Amazon Ubuntu and Windows Systems. Also, your Cado Role will need permissions to access SSM. This is enabled by default if you deployed Cado Response via the CFT in May 2021 or later.
:::
