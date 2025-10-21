---
title: Add cross-account roles in AWS to / Forensic Acquisition and Investigation with the API
hide_title: true
sidebar_position: 5
---

# How to add cross-account roles in AWS to / Forensic Acquisition and Investigation with the API

This Python script automates the process of adding AWS roles to the platform. Roles are added via the / Forensic Acquisition and Investigation API, and the script reads the roles from a CSV file, saving them with an alias in the platform. This is useful for managing AWS access credentials across multiple roles in your AWS environment.

Alternatively you can use [AWS Organizations](/cado/deploy/cross/aws-organizations) to automatically add cross-account roles to / Forensic Acquisition and Investigation.

## Prerequisites

1. **Python 3.x**: Make sure you have Python 3.x installed on your system.
2. **Platform API Access**: You will need an API key and the platform URL to interact with the / Forensic Acquisition and Investigation API.
3. **CSV File of Roles**: The roles you wish to add should be stored in a CSV file (explained below).
4. **Clone the / Forensic Acquisition and Investigation API Examples Repository**: Clone the [Cado API Examples repository](https://github.com/cado-security/cado-api-examples/tree/main) to access the script examples/saving_credentials.py .

## Steps to Use the Script

### 1. Configure API URL and Secret Key

First, you need to set the `API_URL` and `API_KEY` in the `config.py` file. Create this file if it doesn't already exist and ensure it includes the following variables:

```python
# config.py
API_URL = "https://<your-cado-instance-url>"  # Replace with your Cado platform URL
API_KEY = "<your-api-key>"  # Replace with your Cado platform API key
```

See the [Cado API documentation](/cado/integrations/api-overview#creating-and-storing-an-api-access-key) for more information on how to obtain your API key.

### 2. Prepare the CSV File

The script reads AWS roles from a CSV file named `roles.csv`. This file should be formatted as follows:

```
arn:aws:iam::000000000001:role/CadoResponseRole1,MyRoleAlias1
arn:aws:iam::000000000002:role/CadoResponseRole2,MyRoleAlias2
```

- **Role**: This should be the full ARN of the AWS role.
- **Alias**: This is the name that will appear in the / Forensic Acquisition and Investigation UI to represent the role.

Ensure your CSV file is in the same directory as the script.

### 3. Run the Script

To add AWS roles to the / Forensic Acquisition and Investigation platform:

1. Navigate to the directory where the script is saved.
2. Run the script from your terminal using the following command:

```bash
python saving_credentials.py
```

The script will read the `roles.csv` file and add each role to the platform.

### 4. Example Script Output

As the script runs, it will output the status of each role being added, including the HTTP status code and the API response. Example output:

```
Add Role: [arn:aws:iam::000000000001:role/CadoResponseRole1] with Alias [MyRoleAlias1], Status: 200, Response: {"message": "Role added successfully"}
Add Role: [arn:aws:iam::000000000002:role/CadoResponseRole2] with Alias [MyRoleAlias2], Status: 200, Response: {"message": "Role added successfully"}
```
