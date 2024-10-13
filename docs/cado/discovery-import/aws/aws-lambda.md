---
title: Lambda
hide_title: true
sidebar_position: 6
---

# How to Import Data from AWS Lambda

The Cado platform allows you to acquire AWS Lambda functions, which are serverless computing services.

### Steps to Import

1. **Select the Region** where the Lambda function is located.
2. You will see a table of available functions. Select the function you wish to acquire.
3. Confirm the details and click **Start Import**.

![Import Lambda Function](/img/import-lambda.png)

## Output

Once processing is complete, the Lambda function’s events will be added to the timeline. You can view the Lambda function’s code in the **Browse Disk** tab.

![Lambda Function Code](/img/aws-lambda-code.png)

### CloudWatch Logs Integration

Lambda automatically sends logs from your code to a CloudWatch Logs group associated with the function. Cado captures these logs and adds them to your timeline, enabling you to view any logging statements made by the function.

![Cloudwatch Logs](/img/aws-lambda-cloudwatch.png)

*Note:* Cado imports the image of container-based Lambda functions from the Amazon Elastic Container Registry.

### Data Flow Diagram

The following diagram illustrates how Lambda acquisitions operate:

![Lambda Data Flow](/img/lambda-collection.png)