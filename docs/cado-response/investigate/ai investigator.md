---
title: AI Investigator
hide_title: true
sidebar_position: 10
---

## Cado AI Investigator

Cado AI Investigator currently performs two key tasks:

Investigation Summarization: It provides a concise and informative overview of your investigation, presented directly on the project overview tab. This summary highlights key findings:
![File Details 1](/img/ai_image1.png)



Malicious File Analysis: It analyses malicious files, such as scripts, executables, or documents, and tells you what they do.
For example, it can tell you if a script downloads and executes a payload, modifies registry keys, or creates persistence mechanisms:
![File Details 1](/img/ai_image2.png)


Cado AI Investigator is available now for customers running version v2.107.0 or later.
This is a beta feature, and can be enabled under Settings > Experiments.
It will run on all new imports.

## Privacy
Cado AI Investigator uses a Local LLM that runs on the platform in your environment.
No data is sent to external APIs, or back to Cado Security for training.
