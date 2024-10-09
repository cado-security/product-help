---
title: Lambda
hide_title: true
sidebar_position: 6
---


# How to import data from AWS Lambda

The Cado platform can acquire AWS Lambda functions which are serverless computing services.

Select the region the desired function is located in, and you should see a table of functions. Select the function you wisk to acquire, confirm the details and hit "Start Import"

![Import Lambda Function](/img/import-lambda.png)

## Output

Once processing has finished the events will be added to the timeline and the Lambda function code will be available to view in the **Browse Disk** tab.

![Lambda Function Code](/img/aws-lambda-code.png)

Lambda automatically integrates with CloudWatch Logs and pushes all logs from your code to a CloudWatch Logs group associated with a Lambda function. Cado  captures these logs and adds them to your timeline, so you can view any logging statements made by the function.

![Cloudwatch Logs](/img/aws-lambda-cloudwatch.png)

*Note:* Cado imports the image of container-based Lambda functions from the Amazon Elastic Container Registry


### Data Flow Diagram
For a diagram of how our Lambda acquisitions operate, please see below:

![Lambda Data Flow](/img/lambda-collection.png)