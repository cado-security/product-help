---
title: Upload single file
hide_title: true
sidebar_position: 7
---

# How to Upload a Single File to Cado

You can upload a single file, such as a disk image or a previously collected Cado Host zip file, using Cado Host with the `upload` command. This method is useful when you do not have direct access to AWS, Azure, or GCP, as Cado will generate the required credentials during the import process.

### Steps to Upload a Single File:

1. **Generate Upload Credentials**  
   In the Cado Platform, go to **Import > Cado Host** to generate the credentials for the upload.

2. **Copy Presigned Data**  
   In the investigator system, copy the `--presigned_data` portion of the script to your clipboard.

3. **Execute the Command**  
   Run the following command on the investigator system:
   ```bash
   ./cado-host upload $file <paste clipboard presigned_data>
   ```
   Replace `$file` with the path to the file you wish to upload.

4. **Automatic Processing**  
   Cado Host will upload the specified file, and Cado will automatically begin the import and processing of the file.


Here’s the full **Markdown section** ready to paste into your documentation:


# **Manual Upload: Example Workflow**

This example demonstrates how to extract files from a macOS disk image and upload the resulting collection to Cado for processing.

## **1. Attach the Disk Image**

Use `hdiutil` to mount the disk image in read-only mode:

```bash
hdiutil attach -readonly /path/to/disk-image.dmg
```

**Example output:**
```
/dev/disk6s1        	41504600-0000-00AA-AA11-0030654	/Volumes/DISK
/dev/disk6s2        	41504600-0000-00AA-AA11-0030654	
/dev/disk6s3        	41504600-0000-00AA-AA11-0030654	
/dev/disk6s4        	41504600-0000-00AA-AA11-0030654	
```

Take note of the mount point (e.g., `/Volumes/DISK`).

## **2. Download and Extract UAC**

Download the [UAC tool](https://github.com/tclahr/uac) and extract it.  
Open the extracted directory in a terminal window.

## **3. Run UAC to Collect Data**

Run UAC with the `offline` and `ir_triage` profiles, specifying the mounted disk and an output destination:

```bash
sudo ./uac -p ir_triage -p offline -m /Volumes/DISK /path/to/output
```

Replace `/path/to/output` with the folder where you want the collection saved.

## **4. Prepare the Collection for Upload**

1. Download the `cado-host` binary from your Cado platform.
2. Generate the upload script using the **Script Builder** page.
3. Rename the UAC output file to match the expected `cado-host` capture filename:

```bash
mv uac-unknown-macos-20250902203343.tar.gz cado-host-capture-1756842200.tar.lz4
```

Note that you can upload with the existing filename, however you will then need to manually import the file from S3.
Any files named cado-host-capture-*.tar.lz4 are automatically imported once uploaded.

## **5. Upload the Collection to Cado**

Run the `cado-host` upload command provided in your script:

```bash
./cado-host upload /path/to/cado-host-capture-1756842200.tar.lz4 --presigned_data <presigned_data_token>
```

Replace `<presigned_data_token>` with the token from your generated script.
