---
title: AI Investigator
hide_title: true
sidebar_position: 10
---

# What is Cado AI Investigator?

### Malicious File Analysis
It analyzes malicious files—such as scripts, executables, or documents—and explains their behavior. For example, it can identify if a script downloads and executes a payload, modifies registry keys, or establishes persistence mechanisms:

![File Details 2](/img/ai_image2.png)

### Availability
Cado AI Investigator is available for customers using version v2.107.0 or later. This feature is currently in beta and can be enabled under **Settings > Experiments >> AI Investigator**. It will be applied to all new data imports.

## Privacy

The Cado AI feature is powered by a locally hosted large language model (LLM) that runs exclusively within your Cado platform in your environment. It does not send any data to external APIs or back to Cado for training purposes.

This feature is optional and disabled by default. 

### How It Works:
The Cado AI feature processes data that has already been imported into the platform, such as malicious events and the contents of malicious files, all managed by your Cado administrator.

Like other features in the product, Cado AI follows strict processes for testing, release, and security. We validate all outputs against predefined schemas and apply technical controls to mitigate risks such as cross-site scripting for any rendered output.

![File Details 3](/img/llm.png)
