---
title: Overview
hide_title: true
sidebar_position: 1
---

# Importing Data
There are a number of options for importing data into Cado Response. Once you select the data you would like to import, the Cado Response platform begins processing the data based on the platforms Processing Settings.  Check out our help section on **[Processing Settings](../../manage/workers.md#processing)** for more details.

### Evidence Types
Cado Response supports a wide range of **[File Types](data-types/filetypes.md)** which can be imported.  To begin importing data, you simply select a Project and click the **Import** button 

![Import Button](/img/import-button.png)

Based on the evidence you would like to import, follow the on-screen instructions and select your source.

![Import Data](/img/import.png)

### Importing from Cloud Storage
You can import evidence from cloud storage such as Amazon S3. This is useful if you have captured evidence to cloud storage, or have transferred on-premises evidence into cloud storage using a tool such as CyberDuck or the S3 Console.

To import evidence stored within cloud storage, log in and perform the following:
- Choose an existing **Project** or create a new project.
- Click **Import**
- Depending on where you deployed Cado Response, click **AWS** or **Azure**
- Click **S3 Buckets** or **Azure storage**

### Import Cloud Instance
Cado Response provides a way to forensically collect copies of cloud computing instances such as AWS EC2 or AMIs. A log of the acquisition is stored in cloud storage, along with a copy of the disk. The acquisition will also include screenshots and console logs if the instance is running.  This allows you to capture a forensic copy of a running (or stopped) cloud instance without agents and without impacting production systems.

To import from a cloud instance, log in and perform the following:
- Choose an existing **Project** or create a new project.
- Click **Import**
- Depending on where you deployed Cado Response, click **AWS** or **Azure**
- Click **EC2 Instance** or **Azure VM**
- Follow the on-screen prompts to select the instance to import.

:::info
During the EC2 Import process, an i3.4xlarge worker instance is deployed to allow for proper disk acquisition. During the Azure Instance Import process, a Standard_D8ds_v4 worker instance is deployed to allow for proper disk acquisition. You can configure the size of the worker instance in the Cado Response platform under **Settings/Processing**. This worker is spun down once the target disk is acquired.
:::

:::warning
By default when processing archive files Cado Response processes two layers of recursion and twenty folder branches. This provides faster processing but there is a slight risk that some malicious files or activites may be missed.

You can configure this at **Settings/Processing Speed** but increasing these numbers will increase the time taken to process disk images with archives.

![Processing Speed](/img/settings-processing-speed.png)
:::
