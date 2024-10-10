---
title: EC2 and EBS
hide_title: true
sidebar_position: 1
---
# How to import AWS EC2 and EBS data into Cado

Cado supports acquisition of EC2 instances. Select the region, and this will populate a list of EC2 instances available. You can filter the list of instances and buckets by instance ID, name, state or public IP address. Select the instance you wish to acquire.

![AWS EC2 Import](/img/aws-ec2.png)

Click on "Continue" .

## Capture Options

For volume capture, set the options for what data you want to capture.

### Triage Capture
To perform a faster triage collection on an EC2 instance using Cado Host, select the button 'Triage Acquisition'. Please note that this requires that SSM be enabled on the target instance. This will also collect memory from Linux systems.

For more information about about what Cado Host collects see [Collected Artifacts](/cado-response/discovery-import/cado-host/intro)

![AWS EC2 Triage Acquisition ](/img/aws-ec2-triage-acquisition.png)

Click 'Continue', review your selections and click 'Start Import'.

#### Triage Capture using Use SSM Port Forwarding feature (Linux only)

When selecting the ‘Triage Acquisition’ acquisition type for an EC2 instance, there is now an option to select ‘Use SSM Port Forwarding’. This is useful for EC2 instances (Linux only) that have restricted network access, meaning it’s problematic for them to download the Cado Host binary and transfer the resulting triage capture to the Cado S3 bucket. Using the SSM Port Forwarding feature means Cado will facilitate the transfer of the Cado Host binary onto the target resource and the resulting triage capture off the resource. 

![AWS EC2 Triage Acquisition Port Forwarding](/img/aws-ec2-triage-acquisition-ssm-port-forwarding.png)

### Run Command

The Cado platform allows you to execute a script on a target system using the ‘Run command’ action type in the import wizard. This functionality uses the [AWS Systems Manager Agent (SSM)](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-ec2.html) and requires admin privileges. A script must be created in /settings/scripts to use this feature. 

*Note: This feature is in Beta - to enable the feature go to Settings > Experiments > Run Action*

![AWS EC2 Run Command](/img/aws-ec2-runcommand1.png)

#### Creating a saved script

To create a saved script, navigate to /settings/scripts and select the ‘Create script’ button. You will be prompted to choose whether the script is to be executed against a Linux or Windows system. For the purpose of the following example, we will choose Linux. *Note, there is reduced functionality for Windows scripts - more details can be found below.*

![Saved Script](/img/aws-ec2-runcommand2.png)

In this example, we will:

* Instruct Cado to download Volexity Surge from a predefined S3 location by specifying an “Input” file (Step 2)
* Instruct Cado to upload the output of Volexity Surge to the Cado S3 bucket, by telling Cado where the “Output” file resides on the target system (Step 3)
* Run Volexity Surge with the appropriate command line arguments by specifying a “Script” (Step 4)

In Step 1, provide the script with a Name and Description.

![Saved Script - Step 1](/img/aws-ec2-runcommand3.png)

In Step 2, provide the location of the file (valid S3 URI) that is to be downloaded onto the target system. In this example, it is the Volexity Surge binary, which is required to run the script. Cado will transfer this file onto the target system and this file can be referenced in the script using the variable `$INPUT`. *Note, this step is not available for Windows scripts.*

![Saved Script - Step 2](/img/aws-ec2-runcommand4.png)

In Step 3, provide the location of a file which exists on the target system that is to be transferred to your Cado S3 bucket. In this example, it is the memory dump created by Volexity Surge. The file can be referenced in the script using the variable `$OUTPUT`. Note, this step is not available for Windows scripts.

![Saved Script - Step 3](/img/aws-ec2-runcommand5.png)

In Step 4, paste the script that is to be executed on the target system. The input and output files from Steps 2 and 3 can be referenced using `${INPUT}` and `${OUTPUT}` respectively. Given input and output file support is only available for Linux scripts, reference of these variables is not required for Windows scripts.

The script included in the below screenshot is as follows:

```
mkdir -p /tmp/cado-volexity
cp ${INPUT} /tmp/cado-volexity/surge-collect
chmod 755 /tmp/cado-volexity/surge-collect
mkdir -p /tmp/cado-volexity/out
/tmp/cado-volexity/surge-collect example /tmp/cado-volexity/out
tar -cvzf /tmp/cado-volexity/out.tar.gz /tmp/cado-volexity/out
cp "/tmp/cado-volexity/out.tar.gz" ${OUTPUT}
rm -rf /tmp/cado-volexity
```

![Saved Script - Step 4](/img/aws-ec2-runcommand6.png)

Finally, select ‘Continue’ and you should see the newly created script in the scripts table.

![Saved Script - Table](/img/aws-ec2-runcommand7.png)

#### Executing the script using Run command

Use the Import wizard to select an EC2 that has the SSM agent installed. Select the ‘Run command’ action type and you should now see the script that was created in the previous step. Continue with the import as normal.

![AWS EC2 Run Command - Selecting Saved Script](/img/aws-ec2-runcommand8.png)

### Data Flow Diagram
For a diagram of how our EC2 disk acquisitions operate, please see below:

![EC2 Disk Acquisition](/img/import-aws-ec2-cross.png)

![EC2 Role Acquisition](/img/import-aws-ec2-role.png)