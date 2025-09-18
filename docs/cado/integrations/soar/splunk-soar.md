---
title: Splunk SOAR
hide_title: true
sidebar_position: 5
---

# How to integrate with Splunk SOAR


## **Before you begin**

1. **Have a running Cado platform** (know its URL or IP).  
2. **Create a [Cado API key](https://docs.cadosecurity.com/cado/integrations/api-overview)** (Settings → API → *Create API key*). Save the **Secret Key** securely; you’ll use it as the bearer token.  
3. **Know where to find endpoint details.** The full, versioned Cado API reference is available [online](https://cado-security.github.io/api-reference/). You can also review [public examples](https://github.com/cado-security/cado-api-examples) and headers usage in the Cado API example repositories.  
4. **Ensure network reachability** from Splunk SOAR to your Cado platform over HTTPS.

### **Use Splunk SOAR’s HTTP (Generic REST) connector**

This is the fastest way to call the Cado API from playbooks—no code packaging required.

**1\) Install / locate the [HTTP connector](https://github.com/splunk-soar-connectors/http)** Splunk maintains an **HTTP** connector (a.k.a. Generic REST) that exposes actions like **get/post/put/patch/delete** and supports bearer tokens.

**2\) Create an [HTTP asset](https://help.splunk.com/en/splunk-soar/soar-cloud/rest-api-reference/asset-endpoints/rest-asset) for Cado** ([Apps → **HTTP** → *Configure Asset*](https://help.splunk.com/en/splunk-soar/soar-on-premises/administer-soar-on-premises/6.4.1/manage-your-splunk-soar-on-premises-apps-and-assets/add-and-configure-apps-and-assets-to-provide-actions-in-splunk-soar-on-premises)) and set:

* **Base URL:** `https://<your-cado-host>/api/v3/`  
* **Authentication:**  
  * **Type:** `Authorization` (or supply header name via *auth\_token\_name*)  
  * **Value:** `Bearer <Cado Secret Key>` (paste the Secret Key you generated in Cado).

**3\) Create re-usable actions with the HTTP connector** Use “**get data**”, “**post data**”, etc., and parameterize the path, querystring, and JSON body per the [Cado API reference](https://cado-security.github.io/api-reference/). Example patterns you’ll likely implement (see “Common workflows” below):

* **List projects** → HTTP **GET** to a Cado projects endpoint  
* **Create a project** → HTTP **POST** with name/description JSON  
* **List AWS EC2 instances** (by region/cloud) → HTTP **GET**  
* **Trigger EC2 acquisition** → HTTP **POST** with project/instance/bucket/region  
* **Get pipeline** / **Poll until finished** → HTTP **GET** to pipeline endpoint
