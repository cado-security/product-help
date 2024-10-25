---
title: EC2 and EBS
hide_title: true
sidebar_position: 1
---

# How to Import AWS EC2 and EBS Data into Cado

Cado supports acquiring data from EC2 instances. Start by selecting the region, which will populate a list of available EC2 instances. You can filter this list by instance ID, name, state, or public IP address. Once you’ve found the instance you want to acquire, select it.

![AWS EC2 Import](/img/aws-ec2.png)

Click **Continue** to proceed.

## Capture Options

### Volume Capture

Set your options for what data to capture from the selected instance.

### Triage Capture

For a faster triage collection on an EC2 instance, use **Triage Acquisition** via Cado Host. This requires that AWS Systems Manager (SSM) be enabled on the target instance and also supports memory collection on Linux systems.

For more details about what Cado Host collects, refer to the [Collected Artifacts Documentation](/cado/discovery-import/cado-host/intro).

![AWS EC2 Triage Acquisition](/img/aws-ec2-triage-acquisition.png)

Click **Continue**, review your selections, and click **Start Import**.

#### Triage Capture with SSM Port Forwarding (Linux Only)

When using **Triage Acquisition** for a Linux EC2 instance, you can enable the **SSM Port Forwarding** option. This is useful for instances with restricted network access, where downloading the Cado Host binary directly is not possible. The SSM Port Forwarding feature transfers the binary to the instance and retrieves the triage capture. To support transfering of files over the SSM port forwarding, we require Python 3.8+ to be installed on the instance.

![AWS EC2 Triage Acquisition Port Forwarding](/img/aws-ec2-triage-acquisition-ssm-port-forwarding.png)

### Run Command

Cado allows you to execute scripts on target systems using the **Run Command** feature in the import wizard. This requires the [AWS Systems Manager Agent (SSM)](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up-ec2.html) to be installed on the instance and admin privileges. To support transfering of files over the SSM port forwarding, we require Python 3.8+ to be installed on the instance.

To use this feature, you must create a script in **/settings/scripts**. 

*Note: This feature is in Beta. To enable it, go to Settings > Experiments > Run Action.*

![AWS EC2 Run Command](/img/aws-ec2-runcommand1.png)

#### Creating a Saved Script

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

#### Running the Script

Use the Import Wizard to select an EC2 instance with the SSM agent installed. Choose **Run Command** as the action type, and you’ll see the script created earlier. Complete the import as usual.

![AWS EC2 Run Command - Selecting Saved Script](/img/aws-ec2-runcommand8.png)

### Data Flow Diagram

Below are diagrams illustrating how EC2 disk acquisitions work:

![EC2 Disk Acquisition](/img/import-aws-ec2-cross.png)

![EC2 Role Acquisition](/img/import-aws-ec2-role.png)

![EBS Direct Acquisition](/img/ebs-direct.png)

![EC2 SSM Acquisition](/img/ec2-ssm.png)

![EC2 Tunnel Acquisition](/img/ec2-tunnel.png)
