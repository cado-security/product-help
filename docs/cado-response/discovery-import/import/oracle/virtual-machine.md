---
title: Oracle Cloud Virtual Machines
hide_title: true
sidebar_position: 1
---

# Oracle Cloud Virtual Machines

First, you need to take a clone of the instance boot volume. Note that this will affect the instance as it performs a shutdown task and will restart the instance on completion.


Open the Oracle Cloud Infrastructure (“OCI”) console, and browse to Compute -> Instances:

![Oracle](/img/oracle/image12.png)



Select the instance you want to acquire:


![Oracle](/img/oracle/image18.png)


From the Resources section, select Boot volume and then click on the Boot volume that is attached to the instance:
![Oracle](/img/oracle/image13.png)


This will take you to the Boot volume's details page -> select Boot Volume Clones from the Resources menu on the left:
![Oracle](/img/oracle/image17.png)

   

Click `Create Clone` button -> Give the clone volume an appropriate name -> then click the `Create Clone` button at the bottom of the page:

![Oracle](/img/oracle/image3.png)



Deploy your pre-built forensics instance, in this case example Kali Linux:


![Oracle](/img/oracle/image7.png)


For `Kali Linux`, the `SSH` daemon is not installed by default and connections to the instance are made using Cloud Shell. Select Console connection from the Resources list on the left of the screen.


Click on Launch Cloud Shell connection:

![Oracle](/img/oracle/image15.png)



Attach the cloned disk to the forensic instance, selecting Paravirtualized as the attachment type. As this is a Boot volume we are not able to select Read only - shareable as the Access type:

![Oracle](/img/oracle/image5.png)



Once the volume is attached you can switch over to your Cloud Shell session to acquire an image. We have used the command `lsblk` to identify the device identified for the attached disk, in this case it is sdb:


![Oracle](/img/oracle/image21.png)


To create the disk image, you can use dc3dd:

![Oracle](/img/oracle/image2.png)



Looking at the size of the image file test-clone.dd, 47GB, it's going to take time to transfer the image out of OCI:

![Oracle](/img/oracle/image16.png)



To make the process easier, you can use gzip to compress it:
![Oracle](/img/oracle/image19.png)


As the dd.gz file is less than 5GB in size, you can use our cado-host binary to upload the file directly to an S3 bucket and it will be automatically imported into an investigation for processing and analysis.


The first step is to create an investigation in the Cado platform, from there we will use the Cado Host import capability:

![Oracle](/img/oracle/image10.png)



When you select Cado Host, you are presented with a series of options and in this case as we are using Kali Linux we will select Linux as the Target Operating System. We are not going to using any additional Runtime Options so we can skip that step and you can see that we automatically generate a command block, to be used to transfer the image:

![Oracle](/img/oracle/image4.png)



The cado-host binary is available from our public s3 bucket so you can  use curl to download it onto the Kali instance:

![Oracle](/img/oracle/image20.png)



One of the switches for cado-host is –single_file_unzipped, which will upload a single file to the Cado response bucket using the presigned_data details from the command that’s generated from the import page:

![Oracle](/img/oracle/image11.png)


Switching over to our Cado platform, you can see that the file has been successfully imported and processing tasks have been started:


![Oracle](/img/oracle/image6.png)


Once the processing has been completed, you can move onto analysing the captured image:

![Oracle](/img/oracle/image1.png)
![Oracle](/img/oracle/image9.png)
![Oracle](/img/oracle/image8.png)






