---
title: ECS
hide_title: true
sidebar_position: 4
---

# How to Import ECS from AWS

The / Forensic Acquisition and Investigation platform enables the collection of key logs and forensic artifacts from AWS ECS systems.

### Steps to Import ECS Data

1. Navigate to **Import > Cloud**.
   ![Import ECS 1](/img/import-cloud-focus.png)

2. Select the target **Cluster** and **Task**.
   ![Import ECS 2](/img/ecs_2.png)

3. Click **Acquire Container**.

4. Review the details and click **Start Import**.

Cado will automatically collect key logs and forensic artifacts from the container to facilitate your investigation.

![Import ECS 3](/img/ecs_3.png)

For a typical acquisition, the import and processing will complete within a few minutes.

---

### ECS Import Requirements

- **enableExecuteCommand** must be enabled on your ECS task. This is a requirement from AWS, and there is no way to modify this for existing tasks. 
- Currently, ECS acquisitions are supported only for **Linux-based containers**.

If you encounter an error like this:
![ECS Error](/img/ecs_error.png)

It may be due to one of the following:
- Your IAM role lacks the necessary ECS permissions, which include:
   ```
   "ecs:ListClusters",
   "ecs:DescribeClusters",
   "ecs:ListServices",
   "ecs:DescribeServices",
   "ecs:ListTasks",
   "ecs:DescribeTasks",
   "ecs:ExecuteCommand"
   ```
- The ECS **Cluster** and **Task** do not have [enableExecuteCommand](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html) enabled.

---

### Debugging ECS Exec Permissions

AWS provides a helpful tool for debugging ECS Exec issues, available on [GitHub](https://github.com/aws-containers/amazon-ecs-exec-checker).

### Data Flow Diagram

The following diagram illustrates how ECS acquisitions operate:

![ECS Data Flow](/img/ecs-collection.png)
