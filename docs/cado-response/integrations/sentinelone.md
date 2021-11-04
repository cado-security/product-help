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

5. Select the cloud provider platform where you have deployed Cado Response (at the moment, AWS is the only supported cloud platform for this integration).

6. Select **Auto-Download** as the Cado Host binary deployment download setting.
	
7. Choose whether you would like the captured data to be imported into the Cado Response platform for processing and analysis. **Yes** is the recommended setting. 

	- If you select **Yes**, captured data will automatically be processed and analyzed by the Cado Response platform post collection. Please note that this requires a connection from the systems you plan to run the Cado script across to the Cado Response server. For example, this will not function properly if you have a firewall blocking access to Cado Response.

	- If you select **No**, the captured data will only be uploaded to your cloud storage without being processed or analyzed. Please note, if you wish to take advantage of Cado's processing and analysis capabilities, you will need to manually import this data into the Cado Response platform. This can be achieved by logging into the Cado Response platform, creating a new project or clicking into an existing one, then selecting Import > AWS, and lastly importing the evidence from your AWS S3 Storage. 

8. Click **Download Script**. Notice that the downloaded script will have a unique file name. A unique file name is required for successful upload (see step 2 for more details.


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

3. Select the Cado script within your script library, then choose **Output**. 

4. Next, the task description and timeout are preconfigued, but can be adjusted as you wish (otherwise click **Next**). 

5. Click **Submit**. 

	:::tip
	If you selected **Yes - Import data into Response Platform** when you built the script (see below), the captured data will automatically be processed, analyzed, and available for forensic investigation within Cado Response.

	If you selected **No**, the captured data will not be automatically processed or analyzed. If you wish to take advantage of Cado's processing and analysis capabilities, you will need to manually import this data into the Cado Response platform. This can be achieved by logging into the Cado Response platform, creating a new project or clicking into an existing one, then selecting Import > AWS, and lastly importing the evidence from your AWS S3 Storage.
	:::

6. You can now perform your forensic investigation in Cado Response

	![Investigation](/img/s1-cado-response-investigate.png)
