---
title: Getting started example
hide_title: true
sidebar_position: 1
---


# Getting Started with the CTF Investigation

/ Forensic Acquisition and Investigation provides a Capture the Flag (CTF) data set to help you get familiar with the / Forensic Acquisition and Investigation platform.

## Create an Investigation

1. Begin by creating a new [investigation](/cado/discovery-import/investigations) in the / Forensic Acquisition and Investigation platform.

   ![Create investigation](/img/tutorial1.png)

2. Normally, you would import data from various sources by clicking the **"Import"** button within the project:

   ![Import data](/img/tutorial2.png)

   For this CTF, the data has already been imported for you. Navigate to the **Help** page and click **“Import CTF data”**. The import process will take a few minutes.

   ![Import CTF](/img/ctf.png)

3. Click the **Platform** button on the left menu to monitor the processing status. Once processing is complete, you will see the data in your investigation.

   ![Platform button](/img/platformbutton.png)
   ![Processing](/img/ctf-processing.png)

4. Open the investigation by returning to the main dashboard and selecting the investigation. You can now start exploring the data.

   ![Investigation](/img/tutorial3.png)

## Scenario

AWS GuardDuty raised an alert about an instance in our AWS account accessing a known Bitcoin mining address. We imported AWS GuardDuty logs and a disk image of the instance in question. The original image file was over 8GB, but for this CTF, we reduced it to around 30MB.

## Investigate

The **Insights** page will display key findings from the data:

   ![Insights](/img/tutorial4.png)

You can quickly assess what an attacker might have done by reviewing the timeline. There are two main ways to do this:

- Select the **Automated Investigation** tab to view events ranked by a machine learning algorithm:

   ![Timeline](/img/tutorial5.png)

- Select **Search** and filter for **Malicious** and **Suspicious** events:

   ![Search](/img/tutorial6.png)

In either view, click on the filename **"a.sh"** to examine the file contents. This is the script that installed a crypto miner on the instance:

   ![File](/img/tutorial7.png)

Next, click the **uploads** folder in the file tree to explore its contents. This is where the script was uploaded:

   ![Folder](/img/tutorial8.png)

Returning to the **a.sh** file, you can see the script that was executed:

   ![Script](/img/tutorial9.png)

Click the highlighted filepath **"/etc/crontab"** to investigate further using the search function:

   ![Crontab](/img/tutorial10.png)

## Conclusion

This is a simple example of how you can use the / Forensic Acquisition and Investigation platform to investigate an incident. The platform enables you to quickly identify key events and artifacts, while providing powerful tools to dive deeper into the data.
