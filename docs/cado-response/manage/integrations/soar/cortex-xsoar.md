---
title: Cortex XSOAR
hide_title: true
sidebar_position: 6
---

# XSOAR

Cortex XSOAR is a powerful Security Orchestration, Automation, and Response (SOAR) system. XSOAR allows SoC teams to organize cases, incidents and automate investigation rapidly using a central War Room for collaboration. By integrating Cado with XSOAR, you're going to increase efficiency and productive by automating Cado's powerful data acquisition and processing.

For more information, see the [Cortex XSOAR documentation for the Cado Response Pack.](https://xsoar.pan.dev/docs/reference/integrations/cado-response).

:::tip
If you're confused by the terminology mentioned here, or have never used XSOAR before, please consider checking out the [XSOAR documentation](https://docs.paloaltonetworks.com/cortex/cortex-xsoar/6-2/cortex-xsoar-tutorials.html).
:::

## Getting Started with XSOAR

Before properly getting started please see the following for general instructions on setting up the Cado platform for integrating with third-party tools:

**[Integrations Overview >](../api-overview.md)**

### Contents

1. **[Downloading from Marketplace](#downloading-from-marketplace)**
2. **[Setup](#setup)**
3. **[Testing your Settings](#testing-your-settings)**

### Downloading from Marketplace

In your Cortex XSOAR instance, click on the **Marketplace** section in the left-hand sidebar and search for `Cado Response` in the search bar.

![Cado in the XSOAR marketplace](/img/xsoar-market.png)

### Setup

When configuring the Cado integration (which should open up when you install the application), you'll see the following screen to configure the XSOAR application:

![Cado XSOAR Setup Wizard](/img/xsoar-wizard.png)

In this screen, you'll need to setup the following:

- **Application Instance Name**:
  
  This will be the name of the Application as it shows in XSOAR. If you're unsure, it's best to leave as default.

- **The URL of your Cado instance**:

  This will the URL of your deployed Cado instance, if you're unsure, please see **[Integrations Overview >](../api-overview.md)**

- **The API key you retrieved from your platform**:

  This will the generated private API key you retrieved earlier, if you're unsure, please see **[Integrations Overview >](../api-overview.md)**

- **The default Project ID**

  Provides a fallback Project ID from Cado if you forget to add an ID to a command. If you're not sure, don't change! _Defaults to 1_.

- **The default AWS Region**

  Provides a default AWS region to fallback on if you forget to add it to a command. _Defaults to us-east-1_.

- **The default AWS S3 bucket**

  Provides a default AWS bucket to fallback on if you forget to add it to a command. _Defaults to cado-default-bucket_.

### Testing your Settings

To test your settings, click the `Test` button in the setup screen. Ensure the result of the test is green and says `result ok`.

## List of Commands

### Contents

1. **[List EC2 Instances](#list-ec2-instances)**
2. **[List S3 Buckets](#list-s3-buckets)**
3. **[List Projects](#list-projects)**
4. **[List Project Pipelines](#list-project-pipelines)**
5. **[Create a Project](#create-a-project)**
6. **[Retrieve a Pipeline](#retrieve-a-pipeline)**
7. **[Acquire a Disk Image From EC2](#acquire-a-disk-image-from-ec2)**
8. **[Acquire a Disk Image From S3](#acquire-a-disk-image-from-s3)**


### List EC2 Instances

- Command: `cado-list-ec2`
- Description: This command will allow you to list all the EC2 instances in an AWS region.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| `project_id` | The ID of the project you wish to attach the acquisition to. | The value of the pre-configured default. | 
| `region` | The AWS region to list instances from. This is a required parameter. | The value of the pre-configured default. |
| `limit` | Integer value to limit the amount of data retrieved from Response. | 100 |

#### XSOAR Context Output

| Path | Type | Description |
| -------- | -------- | ---- |
| CadoResponse.EC2Instances.id | Number | AWS ID of the EC2 Instance | 
| CadoResponse.EC2Instances.instance_name | String | Name of the EC2 Instance | 
| CadoResponse.EC2Instances.instance_type | String | AWS Type of the EC2 instance | 
| CadoResponse.EC2Instances.region | String | AWS region of the EC2 instance | 

#### Command example
```!cado-list-ec2 project_id=1 region="us-east-1" limit=100```

#### Context Example
```json
{
    "CadoResponse": {
        "EC2Instances": [
            {
                "_placement": "us-east-1c",
                "_state": "stopped",
                "celery_worker_name": null,
                "deployment_id": null,
                "evidence_id": null,
                "id": "i-00000000000",
                "instance_name": "Instance",
                "instance_type": "t3a.2xlarge",
                "ip_address": null,
                "launch_time": "Thu, 25 Mar 2021 18:38:13 GMT",
                "processing_type": null,
                "project_id": null,
                "queue_name": null,
                "region": {
                    "name": "us-east-1"
                },
                "worker_used": null
            }
        ]
    }
}
```

#### XSOAR Artifact Output
|_placement|_state|id|instance_name|instance_type|launch_time|region|
|---|---|---|---|---|---|---|
| us-east-1c | stopped | i-00000000000 | Instance | t3a.2xlarge | Thu, 25 Mar 2021 18:38:13 GMT | name: us-east-1 |


### List S3 Buckets

- Command: `cado-list-s3`
- Description: This command will allow you to list all the S3 buckets in an AWS account.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| `project_id` | The ID of the project you wish to attach the acquisition to. | The value of the pre-configured default. | 
| `limit` | Integer value to limit the amount of data retrieved from Response. | 100 |

#### XSOAR Context Output

| Path | Type | Description |
| -------- | -------- | ---- |
| CadoResponse.S3Buckets.buckets | Array | An array of S3 buckets available to the project | 

#### Command Example
```!cado-list-s3 project_id=1 limit=100```

#### Context Example
```json
{
    "CadoResponse": {
        "S3Buckets": {
            "buckets": [
                "bucket",
            ]
        }
    }
}
```

#### XSOAR Artifact Output
|buckets|
|---|
| bucket |


### List Projects

- Command: `cado-list-project`
- Description: This command will allow you to list all the projects, or a single project, in Cado Response.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| `project_id` | The ID of the project you want to retrieve. | The value of the pre-configured default. | 
| `limit` | Integer value to limit the amount of data retrieved from Response. | 100 |

#### XSOAR Context Output

| Path | Type | Description |
| -------- | -------- | ---- |
| CadoResponse.Projects.id | Number | ID of the retrieved project | 
| CadoResponse.Projects.caseName | String | Name of the retrieved project | 
| CadoResponse.Projects.description | String | Description of the retrieved project | 
| CadoResponse.Projects.users | Array | Array of users assigned to the retrieved project | 
| CadoResponse.Projects.created | Date | Creation date of the project | 

#### Command Example
```!cado-list-project limit=100```

#### Context Example
```json
{
    "CadoResponse": {
        "Projects": {
            "caseName": "Project Name_XSOAR",
            "created": "2022-01-17T12:21:46.613814",
            "deleted": false,
            "description": "This is a project in Cado Response created through Cortex XSOAR!",
            "id": 1,
            "status": "Pending",
            "users": [
                {
                    "display_name": "admin",
                    "id": 1,
                    "is_admin": true,
                    "login_type": 0,
                    "username": "admin"
                }
            ]
        }
    }
}
```

#### XSOAR Artifact Output
|caseName|created|deleted|description|id|status|users|
|---|---|---|---|---|---|---|
| Project Name_XSOAR | 2022-01-17T12:21:46.613814 | false | This is a project in Cado Response created through Cortex XSOAR! | 1 | Pending | \{'display_name': 'admin', 'id': 1, 'is_admin': True, 'login_type': 0, 'username': 'admin'\} |

### List Project Pipelines

- Command: `cado-get-pipeline`
- Description: This command will allow you to list all the pipelines, or a single pipeline, for a given project in Cado.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| pipeline_id | The id of the pipeline to retrieve. | None | 
| project_id | The id of the project the pipeline belongs to. | The value of the pre-configured default. | 
| limit | Limit results to retrieve. | 100 | 


#### XSOAR Context Output

| Path | Type | Description |
| --- | --- | --- |
| CadoResponse.Pipeline.pipeline_id | Number | The ID of the retrieved pipeline | 
| CadoResponse.Pipeline.pipeline_type | String | The type of pipeline that was retrieved | 
| CadoResponse.Pipeline.created | Date | The date at which the retrieved pipeline was started | 
| CadoResponse.Pipeline.evidence_id | Number | The evidence ID linked to the retrieved pipeline | 
| CadoResponse.Pipeline.project_id | Number | The ID of the project the pipeline belongs to | 
| CadoResponse.Pipeline.is_terminated | Boolean | A boolean which says if the retrieved pipeline has been finished/terminated | 
| CadoResponse.Pipeline.summary | Array | An array of values containing the cancelled, failed, pending, running and successful pipeline subtasks | 
| CadoResponse.Pipeline.subtask | Array | An array of tasks in the retrieved pipeline | 

#### Command Example
```!cado-get-pipeline project_id=1 pipeline_id=1```
#### Context Example

```json
{
    "CadoResponse": {
        "Pipeline": {
           	"pipeline_id": 1,
			"pipeline_type": "processing",
    		"created": "2022-01-17T12:22:00.843869",
    		"evidence_id": 1,
    		"project_id": 1,
    		"is_terminated": false,
			"subtasks": [
      			{
					"execution_duration": 0,
					"finish_time": 0,
					"name": "Triage: Attaching disk for local data storage.",
					"name_key": "infrastructure.check_ssd",
					"notification_level": "Info",
					"progress_text": [],
					"start_time": 0,
					"state": "PENDING",
					"task_id": "3699827f-63c4-4408-88a4-0ae899187ed3",
					"total_stages": null
				  }
			],
			"summary": {
			  "cancelled": 0,
			  "failure": 0,
			  "pending": 14,
			  "running": 0,
			  "success": 0,
			  "total": 14
			}
        }
    }

}
```

#### XSOAR Artifact Output
|pipeline_id|pipeline_type|created|evidence_id|project_id|is_terminated|summary|subtask|
|---|---|---|---|---|---|---|---|
| 1 | processing | 2022-01-17T12:22:00.843869 | 1 | 1 | false |"execution_duration": 0,<br />"finish_time": 0,<br />"name": "Triage: attaching disk for local data storage.",<br />"name_key": infrastructure.check_ssd",<br />"notification_level": "Info",<br />"progress_text": [],<br />"start_time": 0,<br />"state": "PENDING",<br />"task_id": "3699827f-63c4-4408-88a4-0ae899187ed3",<br />"total_stages": null<br />|"cancelled": 0,<br />"failure": 0,<br />"pending": 14,<br />"running": 0,<br />"success": 0,<br />"total": 14<br />|


### Create a Project

- Command: `cado-create-project`
- Description: This command will allow you to create a new project in Cado.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| project_name | Name of the project. |  | 
| project_description | Description for the project. |  | 

#### XSOAR Context Output

| Path | Type | Description |
| -------- | -------- | ---- |
| CadoResponse.Project.id | Number | The Project ID of the newly created project | 

#### Command Example
```!cado-create-project project_name="Project Name" description="Project Description"```

#### Context Example
```json
{
    "CadoResponse": {
        "Project": {
            "id": 1,
            "msg": "Created"
        }
    }
}
```

#### XSOAR Artifact Output
|id|msg|
|---|---|
| 1 | Created |


### Acquire a Disk Image From EC2

- Command: `cado-trigger-ec2`
- Description: This command will trigger a disk image acquisition task in Cado for a specified EC2 instance.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| project_id | The ID of the project you wish to attach the acquisition to. | The value of the pre-configured default. | 
| instance_id | ID of the EC2 instance to acquire. | Required | 
| region | AWS region in which the EC2 instance is located. | The value of the pre-configured default. | 
| bucket | S3 bucket where the uploaded disk image resides. | The value of the pre-configured default. | 
| compress | Flag indicating if disk compression is enabled. |  | 
| include_disks | Flag indicating if we include disk images in the acquisition. |  | 
| include_hash | Flag indicating if we calculate the hash of the disk. |  | 
| include_logs | Flag indicating if we include system logs in the acquisition. |  | 
| include_screenshot | Flag indicating if we include a screenshot of the system in the acquisition. |  | 

#### XSOAR Context Output

| Path | Type | Description |
| -------- | -------- | ---- |
| CadoResponse.EC2Acquisition.pipeline_id | Number | ID of the created pipeline | 

#### Command Example
```!cado-trigger-ec2 project_id=1 instance_id="i-00000000000" region="us-east-1" bucket="bucket" compress=true include_disks=true include_hash=true include_logs=true include_screenshot=true```

#### Context Example
```json
{
    "CadoResponse": {
        "EC2acquisition": {
            "created": "2022-01-17T12:21:59.084282",
            "evidence_id": 0,
            "name": "Acquiring i-00000000000",
            "pipeline_id": 1,
            "pipeline_type": "acquisition",
            "project_id": 1,
            "subtasks": [
                {
                    "id": "1587a9c9-c02c-464b-a6f7-d4b7e720bd93"
                },
                {
                    "id": "4f798bf8-c7d3-427c-9498-10a85cfe3978"
                },
                {
                    "id": "c5fa26f1-e282-47a6-8335-1160766e089b"
                },
                {
                    "id": "82ec9a7e-47ac-4539-9623-166a44a59d0f"
                },
                {
                    "id": "88151005-a999-422e-b4cb-9e76699d6e42"
                }
            ],
            "user_id": 1
        }
    }
}
```

#### XSOAR Artifact Output
|created|evidence_id|name|pipeline_id|pipeline_type|project_id|subtasks|user_id|
|---|---|---|---|---|---|---|---|
| 2022-01-17T12:21:59.084282 | 0 | Acquiring i-00000000000 | 1 | acquisition | 1 | \{'id': '1587a9c9-c02c-464b-a6f7-d4b7e720bd93'\},<br/>\{'id': '4f798bf8-c7d3-427c-9498-10a85cfe3978'\},<br/>\{'id': 'c5fa26f1-e282-47a6-8335-1160766e089b'\},<br/>\{'id': '82ec9a7e-47ac-4539-9623-166a44a59d0f'\},<br/>\{'id': '88151005-a999-422e-b4cb-9e76699d6e42'\} | 1 |


### Acquire a Disk Image From S3

- Command: `cado-trigger-s3`
- Description: This command will trigger a disk image acquisition task in Cado from a file in a S3 Bucket.

#### Arguments

| Argument Name | Description | Default Value |
| -------- | -------- | ---- |
| project_id | The ID of the project you wish to attach the acquisition to. | The value of the pre-configured default. | 
| bucket | The S3 bucket name containing the file. | The value of the pre-configured default. | 
| file_name | The name of the file to process. |  | 


#### XSOAR Context Output

| Path | Type | Description |
| -------- | -------- | ---- |
| CadoResponse.S3Acquisition.pipeline_id | Number | ID of the created pipeline | 

#### Command Example
```!cado-trigger-s3 project_id=1 bucket="bucket" file_name="file"```
#### Context Example
```json
{
    "CadoResponse": {
        "S3Acquisition": {
            "created": "2022-01-17T12:22:00.843869",
            "evidence_id": 1,
            "name": "",
            "pipeline_id": 2,
            "pipeline_type": "processing",
            "project_id": 1,
            "subtasks": [
                {
                    "id": "3699827f-63c4-4408-88a4-0ae899187ed3"
                },
                {
                    "id": "727e2072-8bf7-4847-89ea-9447f5fd8fd0"
                },
                {
                    "id": "857d48b8-abaf-4ea6-b159-d25c9784b837"
                },
                {
                    "id": "533f7deb-74bc-4ffb-b81f-788ed714bead"
                },
                {
                    "id": "3f1defde-3986-4292-a423-1bef62d4c52b"
                },
                {
                    "id": "e41a0934-266b-4868-9a7d-5f083b1efcc1"
                },
                {
                    "id": "75411e10-46e9-41dd-8bf7-9b5fbdc8df71"
                },
                {
                    "id": "0afbf2f4-fbf3-4305-ad9f-b19d30f4b17c"
                },
                {
                    "id": "ca063c7b-1135-4922-8542-49f40ce71449"
                },
                {
                    "id": "67fdb0ea-dcee-4f65-a003-4f40fcd567fb"
                },
                {
                    "id": "1437ec33-6af2-4eb8-9c43-e071dcb7e0ac"
                },
                {
                    "id": "06db4dcc-57fd-48bc-bb34-5bd8f2da0a0d"
                },
                {
                    "id": "e3cc930e-9a60-46c3-97a1-611824c24437"
                },
                {
                    "id": "ad2c8877-39e7-4bff-9756-81278802ee76"
                }
            ],
            "user_id": 1
        }
    }
}
```


#### XSOAR Artifact Output
|created|evidence_id|name|pipeline_id|pipeline_type|project_id|subtasks|user_id|
|---|---|---|---|---|---|---|---|
| 2022-01-17T12:22:00.843869 | 1 |  | 2 | processing | 1 | \{'id': '3699827f-63c4-4408-88a4-0ae899187ed3'\},<br/>\{'id': '727e2072-8bf7-4847-89ea-9447f5fd8fd0'\},<br/>\{'id': '857d48b8-abaf-4ea6-b159-d25c9784b837'},<br/>\{'id': '533f7deb-74bc-4ffb-b81f-788ed714bead'},<br/>\{'id': '3f1defde-3986-4292-a423-1bef62d4c52b'\},<br/>\{'id': 'e41a0934-266b-4868-9a7d-5f083b1efcc1'},<br/>\{'id': '75411e10-46e9-41dd-8bf7-9b5fbdc8df71'},<br/>\{'id': '0afbf2f4-fbf3-4305-ad9f-b19d30f4b17c'\},<br/>\{'id': 'ca063c7b-1135-4922-8542-49f40ce71449'},<br/>\{'id': '67fdb0ea-dcee-4f65-a003-4f40fcd567fb'},<br/>\{'id': '1437ec33-6af2-4eb8-9c43-e071dcb7e0ac'\},<br/>\{'id': '06db4dcc-57fd-48bc-bb34-5bd8f2da0a0d'},<br/>\{'id': 'e3cc930e-9a60-46c3-97a1-611824c24437'},<br/>\{'id': 'ad2c8877-39e7-4bff-9756-81278802ee76'\} | 1 |
