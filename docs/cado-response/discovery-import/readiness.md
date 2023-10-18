---
title: Readiness (Beta)
hide_title: true
sidebar_position: 3
---

# Readiness (Beta)

Readiness is a powerful tool designed to help you identify and address issues related to the acquisition of workloads within your environments. It provides a centralised platform for tracking these issues and assigns a readiness score to each environment, giving you a quick overview of the health of your workload acquisition process.

## Readiness Dashboard 
The Readiness Dashboard gives a summary view of your readiness, relative to the cloud environments that have been configured within the Cado Platform

![Readiness Dashboard](/img/readiness-dashboard.png)

### Readiness Score
The Readiness score is a numerical value that represents the health of your EC2 acquisition process for a specific environment. The higher the score, the higher the likelihood you will be able to succesfully investigate an incident in that environment. The score is based on a variety of factors, including:
* EC2 instance provisioning time.
* Resource availability within your environment.
* Compliance with best practices.

The Readiness score is a composite score calculated from the readiness of each of the cloud environments configured within the platform. Environments with lower scores might need attention in order to increase the likelihood of a successful investigation. Cado measures and displays changes of the readiness score over time to show the impacts of any changes you have made.

## Environment Readiness
With Cado you can assess the readiness of a given cloud environment. To see the details of the readiness of a given a given environment, click on the envrionment in the list.

At installation Cado creates a default environment for the account in which Cado is installed called 'Cado Platform Environment'. To configure additional environments see [Creating an Environment](./automation.md#creating-an-environment)

To check the readiness of an environment and get updated status click "Run Check", and Cado will test acquiring an image from a randomly selected workload in that environment

![Environment Dashboard](/img/environment-dashboard.png)


### Issues
Cado outlines any issues it has encountered in assessing the readiness for a given environment. This allows you to make changes in that environment that will increase the likelihood that you will be able to perform an investigation in the event of an incident. Each issue shows:
* The category of the issue
* The resource type
* The ID of the workload
* The full error message associated with the issue

### Checks
Cado outlines a full list of all the checks it has performed on that environment, when they check occurred, the workload against which the check was performed and the result of that check.