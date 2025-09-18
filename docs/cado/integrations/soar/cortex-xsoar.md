---
title: Cortex XSOAR
hide_title: true
sidebar_position: 6
---

# How to integrate with XSOAR

**What You’ll Build**

You will use [XSOAR’s **Generic API Call**](https://xsoar.pan.dev/docs/reference/integrations/generic-api-call) integration to call Cado REST endpoints directly from playbooks. This approach requires no custom Python coding and is the fastest way to integrate.

## **Prerequisites**

* **Cado Platform** deployed and reachable from XSOAR.  
* **Cado API Key** (generated in *Settings → API*). Use the **Secret Key** as a Bearer token in the `Authorization` header.  
* **Cado API Reference:**  
  * [API Documentation](https://cado-security.github.io/api-reference/)  
  * [API Examples (GitHub)](https://github.com/cado-security/cado-api-examples)  
* **Cortex XSOAR** tenant with permissions to install content packs and create playbooks.

## **Configure Generic API Call Integration**

1. In XSOAR, open **Marketplace** and install the [**Generic API Call** content pack](https://cortex.marketplace.pan.dev/marketplace/details/GenericAPICall/).  
2. Go to **Settings → Integrations → Instances**, add **GenericAPICall**, and configure:  
   * **Base Server URL:**  
     `https://<your-cado-host>/api/v3`  
   * **API call is authenticated:** ✓  
   * **API key supplied in header:** ✓  
   * **Authentication Header:**  
     `{ "Authorization": "Bearer <Cado_Secret_Key>" }`  
   * Enable proxy or certificate options as needed.  
3. Test the instance.

## **Using Generic API Call in Playbooks**

You can call Cado endpoints [like this](https://github.com/demisto/content/tree/7fa14e9301f84b9f4e9bf48b400a6fb2000b1514/Packs/GenericAPICall/Integrations/GenericAPICall):

```
!generic-api-call method=POST urlpath=/projects parse_response_as=json body={"case_name"IR-2025-09-18","description":"XSOAR-created project"}
```

Then, for subsequent steps, call the relevant endpoints documented in the **Cado API Reference**. Common examples:

* **Create or list projects:** `POST /projects`, `GET /projects`  
* **Trigger acquisition:** `POST /import/...` (e.g., EC2, S3, GCP, Azure)  
* **Poll pipeline status:** `GET /pipelines/{id}`

## **Troubleshooting**

* **401/403 Unauthorized:** Verify you’re using the **Secret Key** and the `Authorization` header is correct.  
* **404/400 Errors:** Confirm the endpoint and payload match the API Reference.  
* **Connectivity/SSL Issues:** Use XSOAR’s proxy and certificate options, confirm you have network access to the Cado instance.

