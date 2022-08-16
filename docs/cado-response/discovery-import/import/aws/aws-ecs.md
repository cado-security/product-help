---
title: AWS ECS Support
hide_title: true
sidebar_position: 3
---

Cado Response will collect key logs and forensic artifacts from AWS ECS systems.

# ECS Import Requirements

* You’ll need to enable [enableExecuteCommand](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html) on your ECS task, there is no way to add this to an already existing task.
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

# How to Import

First, select Import ECS:
![Import ECS 1](/img/import.png)

Then select the target Cluster and Task:
![Import ECS 2](/img/ecs_2.png)

Then click Acquire Container.

Cado Response will now automatically collect all the key logs and forensic artifacts from the container to enable an investigation.

![Import ECS 3](/img/ecs_3.png)

For a typical acquisition, import and processing will take a few minutes to complete:
![Import ECS 4](/img/ecs_4.png)


