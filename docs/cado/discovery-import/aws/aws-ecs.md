---
title: ECS
hide_title: true
sidebar_position: 4
---

# How to import ECS from AWS

The Cado platform will collect key logs and forensic artifacts from AWS ECS systems.


1) Go to **Import > Cloud**
![Import ECS 1](/img/import-cloud-focus.png)

2) Then select the target Cluster and Task:
![Import ECS 2](/img/ecs_2.png)

3) Then click Acquire Container.

4) Confirm details and click **Start Import**

Cado will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.

![Import ECS 3](/img/ecs_3.png)

For a typical acquisition, import and processing will take a few minutes to complete.


:::info
## ECS Import Requirements

* You’ll need to enable [enableExecuteCommand](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html) on your ECS task, there is no way to add this to an already existing task. This is a hard requirement from AWS that cannot be changed from Cado's perspective or the Cado product itself. 
* Currently ECS acquisitions are only available on Linux based containers.

You will receive an error such as this:
![ECS Error](/img/ecs_error.png)

If either:
* Your IAM role doesn't have the required ECS permissions for IAM: 
```
	"ecs:ListClusters",
	"ecs:DescribeClusters",
	"ecs:ListServices",
	"ecs:DescribeServices",
	"ecs:ListTasks",
	"ecs:DescribeTasks",
	"ecs:ExecuteCommand"
```
* Or the Cluster and Task do not have [enableExecuteCommand](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html) enabled.
:::

### Debugging ECS Exec Permissions
AWS provide a useful tool to help debug ECS Exec issues at [on GitHub](https://github.com/aws-containers/amazon-ecs-exec-checker).

### Data Flow Diagram
For a diagram of how our ECS acquisitions operate, please see below:

![ECS Data Flow](/img/ecs-collection.png)

