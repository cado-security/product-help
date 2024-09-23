---
title: Investigate
hide_title: true
sidebar_position: 1
---

# Investigating

Evidence is processed into Investigations and investigation starts by analyzing the investigation evidence.  The investigation view provides an overview of the key information for all evidence items in a given investigation.

The tabs available on the Investigations Overview page are:

| Tab Name | Description |
| -------- | ----------- |
| [Timeline](timeline-search.md) | A timeline of key events. |
| [Alarms](key-events.md) | Malicious events. |
| [Suspicious](key-events.md) | Possibly malicious events. |
| [Network](network.md) | Network connections. |

### System View
By clicking on an individual Evidence item, you bring up the System View.  The System View provides the same details as the Investigation View, but limited to a single evidence item.

### Browsing Files
You can browse the filesystem of certain evidence items. When browsing a **Disk** folders with a red dot  indicate the presence of a known malicious file.  You can browse the folder structure of a disk by clicking on individual folders.

### Searching
The search interface allows you to search both file and event contents.

Click **Investigate** then **Search** to open the search interface. Cado uses specialized indexing to provide fast searches across files and events. Due to the way this indexing works, you may get fewer results than if you performed a traditional slow byte by byte search of each file.

For more information on searching, see [Timeline Search](/cado-response/investigate/timeline-search.md).



### Indicators / Detections
The Indicators or Detections page provides a summary of indicators of compromise detected within a investigation, and which systems they matched.

Click **Investigate** then **Indicators**.
