---
title: Investigate
hide_title: true
sidebar_position: 1
---

# Investigating a Project

Evidence is processed into Projects and investigation starts by analyzing the project evidence.  The project view provides an overview of the key information for all evidence items in a given project.

The tabs available on the Project Overview page are:

| Tab Name | Description |
| -------- | ----------- |
| [Timeline](timeline-search.md) | A timeline of key events. |
| [Alarms](key-events.md) | Malicious events. |
| [Suspicious](key-events.md) | Possibly malicious events. |
| [Network](network.md) | Network connections. |

### System View
By clicking on an individual Evidence item, you bring up the System View.  The System View provides the same details as the Project View, but limited to a single evidence item.

### Browsing Files
You can browse the filesystem of certain evidence items. When browsing a **Disk** folders with a red dot  indicate the presence of a known malicious file.  You can browse the folder structure of a disk by clicking on individual folders.

### Searching
The search interface allows you to search both file and event contents.

Click **Investigate** then **Search** to open the search interface. Cado uses specialized indexing to provide fast searches across files and events. Due to the way this indexing works, you may get fewer results than if you performed a traditional slow byte by byte search of each file.

### Indicators / Detections
The Indicators or Detections page provides a summary of indicators of compromise detected within a project, and which systems they matched.

Click **Investigate** then **Indicators**.
