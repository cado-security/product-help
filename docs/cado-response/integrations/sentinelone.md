---
title: SentinelOne
hide_title: true
sidebar_position: 3
---

# SentinelOne Integration
SentinelOne Singularity provides comprehensive visibility across your environment - giving you the breadth you need to detect malicious activity as soon as it occurs. Cado Response streamlines forensic analysis to quickly deliver essential historical context and depth to your investigation allowing you to quickly identify the root cause. Combined, the SentinelOne and Cado Response integration empowers organizations to detect, investigate, and remediate breaches with unmatched speed. 

:::tip
To leverage the integration between SentinelOne and Cado Response, you must have the SentinelOne Remote Script Orchestration feature (RSO) enabled in addition to access to the Cado Response platform. To get access to the Cado Response platform contact the Cado Security team **[here](http://offers.cadosecurity.com/cado-s1-integration-get-in-touch)**. 
:::

## Leveraging Cado Response & SentinelOne Integration 

### Step 1: Build the Acquisition Script

1. In the Cado Response platform, create a new project or click into an existing one. Within the project, select **Import**:

	![Import](/img/s1-cado-reponse-project.png)

2. And then select **Forensic Artifacts**:

	![Artifacts](/img/s1-cado-response-forensic-artifacts.png)

3. Under **Cado Host**, select **Script Builder**, you will need to select the relevant settings based on your investigation needs and environment: 

	![Script](/img/s1-cado-response-script.png)

4. Select the Operating System (Linux, Windows, or OSX) of the system(s) you wish to run the script across. Please note that Windows 32 bit is not supported for this integration.

5. Click **Download Script**. Notice that the downloaded script will have a unique file name. A unique file name is required for successful upload (see step 2 for more details.


### Step 2: Load the Cado Script into SentinelOne 

1. Login to the SentinelOne console and select **Automation**:

	![Automation](/img/s1-run-script.png)

2. Select **Script Library**, then **Upload New Script**:
	
	![Automation](/img/s1-upload-script.png)

3. Enter a **Script Name**. Please note that every time you upload a script, the script name must be unique. If the script name is not unique, the upload will fail. 

4. Next, choose the compatible **OS type** (to match the settings you chose when building the script in Cado Response). 

5. Then, select **Script Type**. While Script Type is a required field, this selection does not impact functionality whatsoever (you can choose either action, artifact collection, or data collection, according to your preference). 

6. Lastly, upload the script. 

	![Upload](/img/s1-upload-new-script.png)

7. Once uploaded, you will be able to see the script available in your library:

	![Library](/img/s1-script-library.png)


### Step 3: Execute the Remote Script

1. In SentinelOne, click **Sentinels** to browse your hosts:
	
2. Select the system(s) you would like to forensically analyse, then click **Actions**, then **Run Script**:

	![Actions](/img/s1-actions.png)

:::note
The chosen hosts must have access to the AWS servers to be able to upload the forensics data.
:::

3. Select the Cado script within your script library, then choose **Output**. 

4. Next, the task description and timeout are preconfigued, but can be adjusted as you wish (otherwise click **Next**). 

5. Click **Submit**. 
The Cado script will run on the target machine and will collect the forensic data from it. The captured data will automatically be processed and analyzed by the Cado Response platform.
	
6. You can now perform your forensic investigation in Cado Response

	![Investigation](/img/s1-cado-response-investigate.png)
