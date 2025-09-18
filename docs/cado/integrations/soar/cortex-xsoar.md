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



#### XSOAR Artifact Output
|created|evidence_id|name|pipeline_id|pipeline_type|project_id|subtasks|user_id|
|---|---|---|---|---|---|---|---|
| 2022-01-17T12:22:00.843869 | 1 |  | 2 | processing | 1 | \{'id': '3699827f-63c4-4408-88a4-0ae899187ed3'\},<br/>\{'id': '727e2072-8bf7-4847-89ea-9447f5fd8fd0'\},<br/>\{'id': '857d48b8-abaf-4ea6-b159-d25c9784b837'},<br/>\{'id': '533f7deb-74bc-4ffb-b81f-788ed714bead'},<br/>\{'id': '3f1defde-3986-4292-a423-1bef62d4c52b'\},<br/>\{'id': 'e41a0934-266b-4868-9a7d-5f083b1efcc1'},<br/>\{'id': '75411e10-46e9-41dd-8bf7-9b5fbdc8df71'},<br/>\{'id': '0afbf2f4-fbf3-4305-ad9f-b19d30f4b17c'\},<br/>\{'id': 'ca063c7b-1135-4922-8542-49f40ce71449'},<br/>\{'id': '67fdb0ea-dcee-4f65-a003-4f40fcd567fb'},<br/>\{'id': '1437ec33-6af2-4eb8-9c43-e071dcb7e0ac'\},<br/>\{'id': '06db4dcc-57fd-48bc-bb34-5bd8f2da0a0d'},<br/>\{'id': 'e3cc930e-9a60-46c3-97a1-611824c24437'},<br/>\{'id': 'ad2c8877-39e7-4bff-9756-81278802ee76'\} | 1 |
