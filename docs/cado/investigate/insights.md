---
title: Insights Tab
hide_title: true
sidebar_position: 3
---

# What is the Insights Tab?

The **Insights** tab provides a high-level overview of the data in your investigation.

![Insights tab](/img/Insights.png)

## Key Events
Displays detections of malicious and suspicious activity. Click **"View More"** to see additional events.

## Potentially Compromised Users and Assets
This section identifies users and assets that may be compromised. It's similar to the **Search** tab when you filter by "Users" or "Hostnames" on the left.

## OS Distribution
Shows the distribution of operating systems present in the investigation.

## Acquisition Source
Displays the source of the data acquired during the investigation.

## MITRE ATT&CK Categories Observed
Shows which MITRE ATT&CK categories were detected during the investigation. Click on a bar to view related events.

## Data Sources
Represents the types of events in the investigation (e.g., Windows Event logs, Linux audit logs). Click to search for events from that source. A more detailed view is available under the **Search** tab by selecting "Datasource" on the left.

## Event Types
Displays the types of events found in the investigation, such as logon events or process creation events. Click to search for events by type.

## Indicator Matches
Shows the number of indicator matches in the investigation. You can add more indicators under **Settings > Detections**.

## Extracted Indicators
If a file triggers a detection, its file hash is extracted and displayed here.

## Evidence Items by Unique Indicator Matches
Shows the number of evidence items associated with unique indicator matches.

