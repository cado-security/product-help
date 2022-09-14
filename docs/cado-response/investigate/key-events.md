---
title: Key Events, Alarms & Suspicious
hide_title: true
sidebar_position: 4
---

# Key Events
Cado Response parses events from evidence items. These events may have times associated with them. They may also be tagged as `Alarm`, which indicates a high likelihood of malicious activity, or `Suspicious`, which indicates a lower likelihood of malicious activity.

The **Key Events** tab (in Cado Response v2.1.0 and prior) contains all timeline events tagged as `Alarm` or `Suspicious`, whereas the **Alarms** and **Suspicous** tabs contains only events tagged as `Alarm` and `Suspicious` respectively

The **Automated Investigation** tab (in Cado Response v2.1.1 and above) displays up to 50 events. Events are more likely to be included if they are malicious, tagged by a user, happened in rapid succession, etc.

Each key timeline event shows why Cado Response has tagged that event as an `Alarm` or `Suspicious`

![Key Event](/img/key-event.png)