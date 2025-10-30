---
title: Automated Investigation
hide_title: true
sidebar_position: 4
---

# What is the Automated Investigation Tab?

The Automated Investigation tab offers a summary of the findings from / Forensic Acquisition and Investigation’s investigation. It provides key insights into what was discovered during the analysis.

The Automated Investigation includes:
- **Investigation Trigger**: A description of how the investigation was initiated.
- **Verdict**: A concise, one-line summary of / Forensic Acquisition and Investigation's assessment of what occurred.
- **Suspected Compromised Assets**: A list of assets that may have been compromised during the event.

The timeline highlights up to 50 events, prioritizing those that are most significant. Events are more likely to be shown if they are flagged as malicious, tagged by a user, or occurred in rapid succession.

![Automated Investigation](/img/tutorial5.png)

# Automated Investigation Scoring Feature

This displays a **scored and prioritized view** of timeline events. Each event is assigned a score between `0.0` (likely uninteresting) and `1.0` (likely interesting), based on:

- Real-world compromise data
- ML algorithms
- Expert knowledge from Cado’s incident response team

This view helps analysts quickly identify suspicious activity without sifting through hundreds of thousands of events.

### Timeline Search

For deeper investigations, analysts can use:

- **Query Language**: Filter events using score-based clauses.  
  Example:
  ```text
  auto_investigate_score: [0.9 TO 1.0]
  ```
- **Faceted Search**: Build queries interactively via the UI, with visual insights into score distributions.

### How to Enable

1. Go to **Settings** in your / Forensic Acquisition and Investigation platform instance.
2. Navigate to **Experiments**.
3. Toggle **Next-Gen Automated Investigations**.

If this is not enabled - a simpler (but faster) fall back heuristic is used to rank events within tbe timeline.

