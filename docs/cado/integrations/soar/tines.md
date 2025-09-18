---
title: Tines
hide_title: true
sidebar_position: 4
---

# How to integrate with Tines


Tines is a no-code automation platform that enables security teams to automate repetitive tasks and orchestrate workflows. By integrating Tines with the Cado platform, you can automate incident response and streamline evidence acquisition for investigations.

## **Overview**

Cado provides a REST API that allows third-party tools like Tines to interact with the platform. This integration enables you to:

* Trigger evidence acquisition from cloud environments.  
* Create and manage investigations.  
* Retrieve investigation details and pipeline statuses.

**Note:** The legacy `/api/v2` endpoints have been deprecated. Please use the latest API documented here: [Cado API Reference](https://cado-security.github.io/api-reference/).

## **Prerequisites**

Before integrating Tines with Cado:

1. **Generate an API Key**  
   * In the Cado platform, navigate to **Settings \> API** and create an API key.  
   * Store the **Secret Key** securely; it will be used for authentication in Tines.  
2. **Identify Your Platform Base URL**  
   * This is the URL where your Cado platform is hosted (e.g., `https://your-cado-instance.com`).

## **Setting Up Tines**

You can **create your own [HTTP Request actions](https://www.tines.com/docs/actions/types/http-request/)** in Tines using the Cado API.

### **1\. Add Credentials in Tines**

* Go to [**Tines Dashboard \> Credentials**](https://www.tines.com/docs/credentials/).  
* Create a new [**Text Credential**](https://www.tines.com/docs/credentials/text/) for your Cado API key (e.g., `Cado_APIKey`).

### **2\. Add Your Cado Platform URL as a Resource**

* Go to [**Tines Dashboard \> Resources**](https://www.tines.com/docs/resources/).  
* Create a new resource (e.g., `Cado_Base_URL`) and set its value to your Cado platform base URL.

## **Creating Actions in Tines**

You can create [HTTP Request actions](https://www.tines.com/docs/actions/types/http-request/) in Tines to call the Cado API. Below are some common examples using the **latest API endpoints**:

### **Example: List Projects**

**Method:** `GET` **URL:**

```
{{ .RESOURCE.Cado_Base_URL }}/api/v3/projects
```

**Headers:**

```
Authorization: Bearer {{ .CREDENTIAL.Cado_APIKey }}
Content-Type: application/json
```

### **Example: Create a Project**

**Method:** `POST` **URL:**

```
{{ .RESOURCE.Cado_Base_URL }}/api/v3/projects
```

**Headers:**

```
Authorization: Bearer {{ .CREDENTIAL.Cado_APIKey }}
Content-Type: application/json
```

**Body:**

```
{
  "caseName": "Incident_123",
  "description": "Investigation for alert XYZ"
}
```

### **Example: Trigger EC2 Acquisition**

**Method:** `POST` **URL:**

```
{{ .RESOURCE.Cado_Base_URL }}/api/v3/import/aws/ec2
```

**Body:**

```
{
  "instance_id": "i-1234567890abcdef",
  "region": "us-east-1",
  "project": "your-project"
}
```

## **Tips for Building Your Actions**

* Refer to the [Cado API Reference](https://cado-security.github.io/api-reference/) for the full list of endpoints and payloads.  
* Use [**Event Transforms**](https://www.tines.com/docs/actions/types/event-transformation/) in Tines to extract IDs (e.g., `project_id`, `pipeline_id`) from API responses for use in subsequent actions.  
* Test each action individually before chaining them into a story.
