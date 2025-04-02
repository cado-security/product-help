---
title: API overview
hide_title: true
sidebar_position: 1
---

# How to Use the Cado API

The Cado API allows third-party tools and automation scripts to interact seamlessly with the Cado platform. You can use the API, along with pre-built integrations, to perform tasks like:

- Triggering platform operations (e.g., acquiring instances from your cloud environments)
- Retrieving captured data (e.g., suspicious events)
- Managing and controlling investigations
- And more

This guide will walk you through the essential steps to onboard and integrate with the Cado API.

### Creating and Storing an API Access Key

To access the Cado API, you’ll need to authenticate with a valid API Key. Follow these steps to generate an API Key within the Cado platform:

1. Navigate to **Settings** in the bottom-left corner, then click on the **API** tab.

![API Settings Page](/img/api.png)

2. Under the **API Keys** section, click the **Create API key** button.
3. Enter an optional key name
4. Select a role from the dropdown and click **Create**

![API Key Role](/img/apikeyroles.png)
   
5. Copy the **Public Key**. This key serves as the identifier for the API Key, which can be used later to revoke access if needed.
6. Copy the **Secret Key** and store it in a secure location (e.g., a password manager). You will not be able to view the Secret Key again after closing the dialog. This key is required when integrating with third-party providers.

![Get API Key](/img/api-key.png)

The Secret Key functions as the Access Token for authenticating your requests.

:::tip
The Secret Key is shown only once. Be sure to save it securely, such as in a password manager.
:::

### Platform Base URL

In the following tutorials, the term "Platform Base URL" refers to the IP address or domain name where your Cado platform is deployed. For example:

```
https://ec2example.compute.amazonaws.com
```

### Full API Documentation

You can find detailed API references and examples for versions V2 and V3 in the **API** settings page. Additional API examples are available on GitHub: https://github.com/cado-security/cado-api-examples

