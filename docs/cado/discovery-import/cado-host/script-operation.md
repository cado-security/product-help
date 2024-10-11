---
title: Script operation
hide_title: true
sidebar_position: 8
---

Here is the requested knowledge base article in markdown format:

---

# How does the Cado Host deployment script operate?

The Cado Host script is used to download, execute, and clean up the Cado Host binary from a system.
Below is a breakdown of how the script works for Linux - the script is similiar in function for Windows and MacOS.

### Summary of Key Steps:
1. **Directory creation**: A temporary directory is created for storing the Cado Host binary.
2. **Download handling**: The script checks if either `curl` or `wget` is installed and uses one to download the Cado Host binary.
3. **Download verification**: After downloading, the script verifies that the binary exists.
4. **Execution of Cado Host**: The binary is given executable permissions and run with specific options.
5. **Clean-up**: After running, the script removes the temporary directory to clean up.
6. **Error handling**: Throughout the process, appropriate error messages are shown if any step fails, ensuring transparency.


### Script Breakdown

```bash
mkdir -p /tmp/cado-host-67c03a16
```
- **Creates a temporary directory**:  
The script starts by creating a directory named `/tmp/cado-host-67c03a16`. This directory is used to store the downloaded Cado Host binary. The `-p` option ensures no error is thrown if the directory already exists.
The end of the directory is a random identifier to avoid conflicts.

```bash
if command -v curl > /dev/null
```
- **Checks for `curl` availability**:  
The script checks whether the `curl` command is available on the system by verifying if it can return a version without error. This is done by checking if the command exists (`command -v curl`), and if it does, the script proceeds to use `curl` for downloading.

```bash
then sudo curl -s https://cado-public.s3-accelerate.amazonaws.com/cado-host/$version/linux/cado-host --output /tmp/cado-host-67c03a16/cado-host
```
- **Downloads Cado Host using `curl`**:  
If `curl` is available, it silently (`-s`) downloads the Cado Host binary from the provided URL and stores it in the newly created directory. The file is saved as `/tmp/cado-host-67c03a16/cado-host`.

```bash
elif command -v wget > /dev/null
```
- **Checks for `wget` availability**:  
If `curl` is not found, the script checks if `wget` is installed on the system.

```bash
then sudo wget -q --output-document /tmp/cado-host-67c03a16/cado-host https://cado-public.s3-accelerate.amazonaws.com/cado-host/$version/linux/cado-host
```
- **Downloads Cado Host using `wget`**:  
If `wget` is available, it silently (`-q`) downloads the Cado Host binary from the same URL, storing it in the `/tmp/cado-host-67c03a16/` directory.

```bash
else echo "Cado Host requires curl or wget for unattended mode."; exit 1;
```
- **Handles missing `curl` and `wget`**:  
If neither `curl` nor `wget` is available on the system, the script outputs an error message, and the script exits with a status code of `1`, indicating failure.

```bash
fi
```
- **End of conditional block**:  
This marks the end of the block that checks for `curl` or `wget`.

```bash
if [ ! -f /tmp/cado-host-67c03a16/cado-host ]; then
  echo "Cado Host failed to download, check if the machine has an active network connection."; exit 1;
fi
```
- **Validates the download**:  
This step checks if the Cado Host binary was successfully downloaded. If the binary is not found in the `/tmp/cado-host-67c03a16/` directory, the script prints an error message about network issues and exits.

```bash
cd /tmp/cado-host-67c03a16/
```
- **Changes the working directory**:  
The script changes the current working directory to `/tmp/cado-host-67c03a16/`, where the downloaded binary resides.

```bash
sudo chmod +x ./cado-host
```
- **Makes the binary executable**:  
The script changes the permissions of the `cado-host` binary to make it executable using the `chmod +x` command.

```bash
sudo ./cado-host --presigned_data $pre-signed-data --skip_linux_memory || echo "Cado Host has failed. For troubleshooting steps, pass the --verbose and --no_cleanup flags, or visit https://docs.cadosecurity.com/cado-host/deploy#considerations, or contact support@cadosecurity.com."
```
- **Runs the Cado Host binary and removes the collected archive**:  
The script executes the `cado-host` binary with two options: `--presigned_data` and `--skip_linux_memory`, which skips memory data collection on Linux.  
If the execution fails, it displays an error message with troubleshooting instructions.

Note the --no_cleanup flag is not passed, so the script will clean up after the binary has run by deleting the collected archive.
If this flag is passed, or pre-signed data is not given to Cado Host, the script will not delete the collected archive.

The pre-signed data is a JSON object that contains information required to upload data to a cloud storage provider. An example of this JSON object is as follows:

```json
{
  "url": "https://s3.us-west-2.amazonaws.com/my-cado-bucket",
  "fields": {
    "key": "cado-collector/project-401/cado-host/2024/10/11/${filename}",
    "x-amz-algorithm": "AWS4-HMAC-SHA256",
    "x-amz-credential": "AAA/us-west-2/s3/aws4_request",
    "x-amz-date": "20241011T163440Z",
    "x-amz-security-token": "AAA"
  },
  "policy": "AAA"
  },
  "bucket": "my-cado-bucket",
  "folder": "cado-collector/project-401/cado-host/2024/10/11",
  "provider": "aws"
}
```

### Description of the Encoded JSON Object:
1. **URL**: This points to an Amazon S3 URL where data might be uploaded or stored.
2. **Fields**:
   - `key`: Represents the path or key where the file will be stored, with a placeholder for `${filename}`.
   - `x-amz-algorithm`: Specifies the AWS signature algorithm being used, `AWS4-HMAC-SHA256`.
   - `x-amz-credential`: Contains the AWS credential used to sign the request, including the access key and date information.
   - `x-amz-date`: The timestamp of when the request was made, formatted as `20241011T163440Z`.
   - `x-amz-security-token`: This is a temporary security token used for authentication.
3. **Policy**: The `policy` field contains a base64-encoded policy document such as this, to securely scope the upload operation:

```
{"expiration": "2024-10-12T16:34:40Z", "conditions": [["starts-with", "$key", "cado-collector/project-401/cado-host/2024/10/11"], {"bucket": "my-cado-bucket"}, ["starts-with", "$key", "cado-collector/project-401/cado-host/2024/10/11/"], {"x-amz-algorithm": "AWS4-HMAC-SHA256"}, {"x-amz-credential": "AAA"}, {"x-amz-date": "20241011T163440Z"}, {"x-amz-security-token": "AAA"}]}
```

4. **Bucket**: Specifies the S3 bucket name, `my-cado-bucket`.
5. **Folder**: The folder path within the bucket where the file is being stored.
6. **Provider**: The cloud provider for this storage operation, which is `AWS` in this case.

This JSON is part of a typical AWS S3 presigned URL setup, often used to allow file uploads to S3 with specified credentials and conditions.

```bash
sudo rm -r /tmp/cado-host-67c03a16
```
- **Cleans up temporary files**:  
Once the binary has run, the script removes the temporary directory `/tmp/cado-host-67c03a16` and its contents to clean up any residual files.

```bash
exit 0
```
- **Exits the script**:  
Finally, the script exits with a status code of `0`, indicating successful completion.
