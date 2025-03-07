---
title: AWS EC2 Run Command
hide_title: true
sidebar_position: 11
---

# AWS EC2 Run Command

Cado allows you to execute scripts on target systems using the **Run Command** feature in the import wizard.

This requires the [AWS Systems Manager Agent (SSM)](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-ec2.html) to be installed on the instance and admin privileges within Cado.
To support transferring of files over the SSM port forwarding, we require Python 3.8+ to be installed on the instance.

To use this feature, you must create a script at Settings > Scripts.

For more information on the AWS IAM permissions for SSM required, please see [here](/cado/deploy/aws/iam/ssm).

*Note: This feature is in Beta. To enable it, go to Settings > Experiments > Run Action.*

![AWS EC2 Run Command](/img/aws-ec2-runcommand1.png)

## Creating a Saved Script

1. Go to **/settings/scripts** and click **Create Script**.
2. Choose whether the script will run on Linux or Windows (reduced functionality for Windows). For this example, we’ll choose Linux.

![Saved Script](/img/aws-ec2-runcommand2.png)

3. In Step 1, provide a **Name** and **Description** for the script.

![Saved Script - Step 1](/img/aws-ec2-runcommand3.png)

4. In Step 2, provide the location of the input file (valid S3 URI), which will be downloaded onto the target system. This step is not available for Windows scripts.

![Saved Script - Step 2](/img/aws-ec2-runcommand4.png)

5. In Step 3, specify the location of the output file on the target system that will be uploaded to your Cado S3 bucket. This step is not available for Windows scripts.

![Saved Script - Step 3](/img/aws-ec2-runcommand5.png)

6. In Step 4, paste the script that will run on the target system. The input and output files can be referenced as `${INPUT}` and `${OUTPUT}` respectively. Windows scripts do not require these variables.

Example script:

```bash
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

7. Click **Continue** and you’ll see your script listed in the scripts table.

![Saved Script - Table](/img/aws-ec2-runcommand7.png)

## Running the Script

Use the Import Wizard to select an EC2 instance with the SSM agent installed. Choose **Run Command** as the action type, and you’ll see the script created earlier. Complete the import as usual.

![AWS EC2 Run Command - Selecting Saved Script](/img/aws-ec2-runcommand8.png)

## How does the Run Command feature work?

When you execute a saved script via Run Command, Cado leverages AWS Systems Manager (SSM) to remotely execute your script on the target EC2. 

1. **Preparation and Validation**  
   - **Platform Verification:** The process begins by verifying that the target instance is a Linux system.
   - **Script Selection:** The command will either use a pre-saved script you have created from your Cado settings, or the script used to import through Cado Host.
   - **Port Selection:** A specific port (by default, the SSM port 9999) is used to establish the port forwarding session between your local worker and the target instance.

2. **Input File Handling**  
   - **Downloading the Input File:** If your script requires an input file (specified as an S3 URI or a designated Cado host URL), the file is first downloaded to a temporary location on the main Cado instance.  
   - **Transferring to the Instance:** Once the input file is available locally, it is transferred securely to the target EC2 instance over the SSM port forwarding session.

3. **Command Execution on the EC2 Instance**  
   - **File Path Substitution:** The command is automatically updated so that the placeholders for the input and output files (`${INPUT}` and `${OUTPUT}`) point to the temporary file locations on the target instance - as per the examples above.
   - **Remote Execution:** The command is then executed on the target instance via SSM. During execution, the script reads the transferred input file and writes its results to an output file on the instance.

4. **Retrieving the Output File**  
   - **Downloading the Output File:** After the command has executed successfully, the system retrieves the output file from the instance using the same SSM port forwarding mechanism.
   - **Uploading to S3:** Once the output file is securely transferred back to the controlling system, it is automatically uploaded to your designated Cado S3 bucket.

5. **Cleanup**  
   - **Instance Cleanup:** To maintain a clean environment, temporary files on the target instance (such as the transferred output file) are removed after the successful upload to S3. Any process running on the port forwarding session is also terminated, determined by the port number used.
