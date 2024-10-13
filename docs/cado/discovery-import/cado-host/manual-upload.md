---
title: Upload single file
hide_title: true
sidebar_position: 7
---

# How to Upload a Single File to Cado

You can upload a single file, such as a disk image or a previously collected Cado Host zip file, using Cado Host with the `--single_file_unzipped` parameter. This method is useful when you do not have direct access to AWS, Azure, or GCP, as Cado will generate the required credentials during the import process.

### Steps to Upload a Single File:

1. **Generate Upload Credentials**  
   In the Cado Platform, go to **Import > Forensic Artifacts** to generate the credentials for the upload.

2. **Copy Presigned Data**  
   In the investigator system, copy the `--presigned_data` portion of the script to your clipboard.

3. **Execute the Command**  
   Run the following command on the investigator system:
   ```bash
   cado-host.exe --single_file_unzipped $file <paste clipboard presigned_data>
   ```
   Replace `$file` with the path to the file you wish to upload.

4. **Automatic Processing**  
   Cado Host will upload the specified file, and Cado will automatically begin the import and processing of the file.