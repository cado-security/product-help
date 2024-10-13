---
title: Google Cloud credentials
hide_title: true
sidebar_position: 3
---

# How to Create Secure Google Cloud Credentials

To create secure credentials for Google Cloud Storage, follow these steps. You can also watch the embedded video for a walkthrough.

- Create a Google Cloud Storage bucket.
- Create credentials with write-only access to the bucket.

<iframe width="100%" height="536" src="https://www.youtube.com/embed/VQxzJ1V8ArE" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

## Step 1: Creating a Bucket

1. Open the **Storage Browser** in Google Cloud.
2. Click **Create Bucket**.
3. Set up the bucket with your desired settings.

## Step 2: Creating Credentials

1. Go to **Storage Settings**.
2. Select your project, then go to **Interoperability**.
3. Click **Create a Key** for a service account.
4. Click **Create a New Account**.
5. Enter a name for the account, then grant it the **Storage Object Creator** permission.  
   - This permission allows writing objects to the bucket but prevents listing or downloading objects.
6. Complete the account creation process, and copy the **Access Key** and **Secret Key**.

## Ready to Go

Once complete, you'll have:
1. The **Access Key**.
2. The **Secret Key**.
3. The **Bucket Name**.

These credentials will enable secure write-only access to your Google Cloud Storage bucket.