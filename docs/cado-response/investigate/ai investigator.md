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

The Cado AI feature is a locally hosted LLM (large language model).
It solely runs on the Cado platform in customer environments.
The Cado AI feature does not send any data to any external APIs, nor back to Cado for training purposes.
It is an optional feature that is not enabled by default.
An overview it's operation is below:
![File Details 1](/img/llm.png)

The data sources for the Cado AI feature are data imported within the platform, and it consists of malicious events and the text contents of malicious files which have already been imported by a Cado administrator within the customer's organisation.

The feature process and security process is the same as any other feature in the product: We have a defined roadmap, test, release and bug process. We validate all outputs against a schema, with technical controls against vulnerabilities such as cross-site scripting for any output rendered.


