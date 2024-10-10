---
title: Getting started example
hide_title: true
sidebar_position: 1
---

# Getting started with the CTF investigation
Cado provides a short Capture the Flag data set to help you get familiar with the Cado platform.

## Create an investigation
1. Create a new [investigation](/cado-response/discovery-import/investigations) in the Cado platform.

![Create investigation](/img/tutorial1.png)

2. Normally we would now import data from a variety of sources, by clicking the "Import" button within the project:

![Import data](/img/tutorial2.png)

For this CTF, we have already imported the data for you.
Navigate to the Help page and click “Import CTF data”. Import will take a few minutes.

![Import CTF](/img/ctf.png)

3. Click the Platform button on the left menu to view the processing status. Once the processing is complete, you will see the data in the investigation.

![Platform button](/img/platformbutton.png)
![Processing](/img/ctf-processing.png)

4. Open the investigation (by returning to the main dashboard and selecting the investigation) and we can start to explore the data.

![Investigation](/img/tutorial3.png)

## Scenario
AWS GuardDuty raised a notification that an instance in our AWS account was accessing a known BitCoin mining address. 

We imported the AWS GuardDuty logs, plus a disk image of the instance in question. The original image file was over 8GB in size. For the purposes of this capture the flag though, we reduced it down to around 30MB

## Investigate
The insights page will show you the key findings from the data:

![Insights](/img/tutorial4.png)

We can get a quick idea of what an attacker might have done by looking at the timeline, either by selecting the "Automated Investigation" tab to view events ranked by a machine learning algorithm:

![Timeline](/img/tutorial5.png)

Or selecting the "Search" then selecting Malicious and Suspicious events:

![Search](/img/tutorial6.png)

In either view, click the filename "a.sh" to view the contents of the file. This is the script that was used to install a crypto miner on the instance:

![File](/img/tutorial7.png)

Click the "uploads" folder in the file tree to view the contents of the folder. This is where the script was uploaded to:

![Folder](/img/tutorial8.png)

Returning to the a.sh file, we can see the script that was executed:

![Script](/img/tutorial9.png)

Clicking the highlighted filepath "/etc/crontab" will take you to the search:

![Crontab](/img/tutorial10.png)

## Conclusion
This is a simple example of how you can use the Cado platform to investigate an incident. The Cado platform can help you quickly identify key events and artifacts in an investigation, and provide you with the tools to dig deeper into the data.
