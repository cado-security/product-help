---
title: Browse Disk
hide_title: true
sidebar_position: 4
---

# Browse Disk

When you select a piece of disk evidence in the Project Overview tab, a Browse Disk Tab will appear.

Browse Disk shows a hierarchical view of the file system. Cado marks directory structures where Cado has found Alarms or Suspicions with red or yellow dots respectively. Clicking on a folder allows you to drill down into that structure. 

![Browse Disk](/img/browse-disk.png)

Clicking on a file takes you to the details for that file, including links to search Open Threat Exchange (OTX) and VirusTotal if you have those [set up](detections.md). Cado will index and show a preview of the text in a file, up to the first 1000 lines. You can download the full contents of the file.

![File Details 1](/img/file-details-1.png)

This tab also shows any key events (alarms, suspicions) associated with this file.

![File Details 2](/img/file-details-2.png)

For [running processes collected by Cado Host](/cado-host/artifacts.md#volatile-data) This tab also shows a diagram of information about running processes.

![Process Data](/img/process-diagram.png)

This data is also available in tabular form

![Process Table](/img/processes-table.png)
