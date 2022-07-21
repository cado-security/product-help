---
title: AWS Lambda Support
hide_title: true
sidebar_position: 4
---


# AWS Lambda

Cado Response can acquire AWS Lambda functions which are serverless computing services.

## Importing

To import an AWS Lambda function, select or create a project and navigate to the import page by clicking the **Import** button. The click the **AWS Lambda Function** button.

![Import Data](/img/import.png)

Select the region the desired function is located in, and you should see a table of functions. To acquire the function, click the **Acquire function** button.

![Import Lambda Function](/img/import-lambda.png)

You will then be taken to the confirmation page where you can click the **View Processing** button to see the progress of the acquisition.

## Output

Once processing has finished the events will be added to the timeline and the Lambda function code will be available to view in the **Browse Disk** tab.

![Lambda Function Code](/img/aws-lambda-code.png)

Lambda automatically integrates with CloudWatch Logs and pushes all logs from your code to a CloudWatch Logs group associated with a Lambda function. Cado Response captures these logs and adds them to your timeline, so you can view any logging statements made by the function.

![Cloudwatch Logs](/img/aws-lambda-cloudwatch.png)