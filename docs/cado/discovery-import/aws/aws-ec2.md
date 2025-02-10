---
title: EC2 and EBS
hide_title: true
sidebar_position: 1
---

# How to Import AWS EC2 and EBS Data into Cado

Cado supports acquiring data from EC2 instances.

Start by selecting the region, which will populate a list of available EC2 instances. You can filter this list by instance ID, name, state, or public IP address.
Once you’ve found the instance you want to acquire, select it:

![AWS EC2 Import](/img/aws-ec2.png)

Click **Continue** to proceed.

## Capture Options

![Skip Processing](/img/ec2-import-skip-processing.png)

### Acquisition vs Run Command
You can acquire data (below), or use the [Run Command](/cado/discovery-import/aws/run-command) feature to execute scripts on the target system.

### Full Volume/Disk Capture
To acquire the full EBS volume, select **Full Acquisition** under **Acquisition Type**. 
This will be performed using either the [EBS Direct Acquisition](/cado/discovery-import/aws/ebs-direct-acquisition) or [EBS Create Volume Acquisition](/cado/discovery-import/aws/ebs-create-volume) method depending on your settings.

### Triage Capture
For a faster triage collection on an EC2 instance, use **Triage Acquisition** via Cado Host. This requires that AWS Systems Manager (SSM) be enabled on the target instance and also supports memory collection on Linux systems.

For more details about what Cado Host collects, refer to the [Collected Artifacts Documentation](/cado/discovery-import/cado-host/intro).

![AWS EC2 Triage Acquisition](/img/aws-ec2-triage-acquisition.png)

Flow Diagram for EC2 SSM Acquisition:

![EC2 SSM Acquisition](/img/ec2-ssm.png)

Click **Continue**, review your selections, and click **Start Import**.

#### Triage Capture with SSM Port Forwarding (Linux Only)

When using **Triage Acquisition** for a Linux EC2 instance, you can enable the **SSM Port Forwarding** option. This is useful for instances with restricted network access, where downloading the Cado Host binary directly is not possible. The SSM Port Forwarding feature transfers the binary to the instance and retrieves the triage capture. To support transferring of files over the SSM port forwarding, we require Python 3.8+ to be installed on the instance.

![AWS EC2 Triage Acquisition Port Forwarding](/img/aws-ec2-triage-acquisition-ssm-port-forwarding.png)

Flow Diagram for EC2 Tunnel Acquisition:

![EC2 Tunnel Acquisition](/img/ec2-tunnel.png)

The Triage Acquisition with SSM Port Forwarding option utilizes the Cado [Run Command](/cado/discovery-import/aws/run-command) feature to execute the Cado Host binary on the target system - for more details on how this works, refer to the [Run Command](/cado/discovery-import/aws/run-command) documentation.

### Skip Processing
The Cado platform supports the option to skip processing of the EBS volume. Select **Skip Processing** under **Processing Options** to activate this option. If you decide you want to process the volume at a later date, this can be achieved by selecting **Process Evidence** on the relevant evidence item in the Evidence tab.
