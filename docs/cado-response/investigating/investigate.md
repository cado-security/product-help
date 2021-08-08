---
title: Investigate
hide_title: true
sidebar_position: 3
---

# Investigating a Project

Evidence is processed into Projects and investigating evidence starts by analyzing the project evidence.  The project view provides an overview of the key information for all evidence items in a given project.

![Project Overview](/img/project-view.png)

The tabs available on the Project Overview page are:

| Tab Name | Description |
| -------- | ----------- |
| Overview | Shows all the evidence items, and an interactive timeline of key events. |
| Timeline | A timeline of key events. |
| Alarms | Malicious events. |
| Suspicious | Possibly malicious events. |
| Users | A unique list of users on the system. |
| Processes | Processes execution. |
| Network | Network connections. |
| Files | File Access. |

### System View
By clicking on an individual Evidence item, you bring up the System View.  The System View provides the same details as the Project View, but limited to a single evidence item.

### Browsing Files
You can browse the filesystem of certain evidence items. When browsing a **Disk** folders with a red dot indicate that there is a known malicious file underneath.  You can browse the folder structure of a disk by clicking on individual folders.

### Searching
The search interface allows you to search both file and event contents.

Click **Investigate** then **Search** to open the search interface. Cado Response uses n-gram indexing to provide fast searches across files and events. Due to the way indexing works, you may get less results than if you performed a traditional slow byte by byte search of each file.

### Indicators
The Indicators page provides a summary of indicators of compromise for the project, and which systems they matched.

Click **Investigate** then **Indicators**.

### Usernames
The Usernames page provides a summary of usernames identified in the project.

Click **Investigate** then **Usernames**.
