---
title: Importing Data
hide_title: true
sidebar_position: 1
---

# Importing Data
There are a number of options for importing data into Cado Response. Once you select the data you would like to import, the Cado Response platform begins processing the data based on the platforms Processing Settings.  Check out our help section on **[General Settings](/docs/cado-response/settings/general-settings#processing-settings)** for more details.

### Evidence Types
Cado Response supports a wide range of **[File Types](/docs/cado-response/importing-data/filetypes)** which can be imported.  To begin importing data, you simply select a Project and click the **Import** button 

![Import Button](/img/import-button.png)

Based on the evidence you would like to import, follow the on-screen instructions and select your source.

![Import Data](/img/import.png)

### Importing Local Evidence
The preferred method of importing local evidence is from cloud storage such as S3, however you can import evidence that is stored locally on the Cado Response server (under the local `/process/uploads` folder).  This is useful if you have transferred files to the server, for example over sFTP.

To import evidence stored locally on the Cado Response server, log in and perform the following:
- Choose an existing **Project** or create a new project.
- Click **Import** then **Local Evidence**.
- Click the **Filename** column to browse to the correct file or folder.
- Click **Import File** or **Import Folder Contents** to add evidence to your project.

:::info
This import is locked to files under the folder `/process/uploads`
:::

### Importing from Cloud Storage
You can import evidence from cloud storage such as Amazon S3. This is useful if you have captured evidence to cloud storage, or have transferred on-premises evidence into cloud storage using a tool such as CyberDuck or the S3 Console.

To import evidence stored within cloud storage, log in and perform the following:
- Choose an existing **Project** or create a new project.
- Click **Import**
- Depending on where you deployed Cado Repsonse, click **AWS** or **Azure**
- Click **S3 Buckets** or Azure storage

### Import Cloud Instance
Cado Reponse provides a way to forensically collect copies of cloud computing instances such as AWS EC2 or AMIs. A log of the acquisition is stored in cloud storage, along with a copy of the disk. The acquisition will also include screenshots and console logs if the instance is running.  This allows you to capture a forensic copy of a running (or stopped) cloud instance without agents and without impacting production systems.

To import from a cloud instance, log in and perform the following:
- Choose an existing **Project** or create a new project.
- Click **Import**
- Depending on where you deployed Cado Response, click **AWS** or **Azure**
- Click **EC2 Instance** or **Azure Instance**
- Follow the on-screen prompts to select the instance to import.

:::info
During the EC2 Import process, a worker EC2 instance of the same size as the target EC2 is deployed to allow for proper disk acquisition.  This worker is spun down once the target disk is acquired.
:::

