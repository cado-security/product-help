---
title: Webhooks
hide_title: true
sidebar_position: 3
---

# How to Integrate with Platforms Using Webhooks

Webhook integrations enable you to automatically send information from the Cado platform to other applications using a unique URL.

## Before You Begin

To set up a webhook integration in Cado, you first need to generate a webhook URL from the application you wish to integrate with. Most applications that can receive POST requests are supported.

To manage your webhooks, navigate to **Settings** > **Integrations** > **Webhooks**.

![Webhooks settings page](/img/webhooks-settings.png)

## Adding or Modifying a Webhook

### Adding a New Webhook

1. Click the **New Webhook** button at the bottom of the settings page.
2. Fill out the following details in the form:
   - **Name**: A descriptive name for the webhook.
   - **URL**: The webhook URL generated by the application you are integrating with.
   - **Events to Send**: Choose the types of events you want to send to the webhook URL. Cado supports the following events:
     - High Severity Alarm
     - Suspicious Severity Event
     - Processing with Alarms
     - Processing Finished
     - Processing Failed
     - Admin Login
     - Audit Events (Create, Update, Delete, Login, Logout, Download, Reboot, Upgrade)
     - Detection (Created, Updated)
     - Detection Group (Created, Updated)
   - **Payload**: This is a JSON object that defines how the webhook URL will receive the data (see more details in the [Custom Payloads](#custom-payloads) section).
   - **Event Formatting**: Choose the format for sending the `$Event` data. Options include:
     - **Default**: Sends the raw event as a string with details of the event.
     - **Slack**: Only the `$Title` is sent, e.g., "HIGH SEVERITY ALARM DETECTED."
     - **Jira**: Only supported for Detection events. Formats the event with markdown to include metadata about the detection.

![Adding a new webhook](/img/webhooks-new.png)

### Modifying an Existing Webhook

To modify a webhook, click the **Edit** button next to the webhook you wish to change. Any new events will be sent to the updated URL or modified payload.

## Deleting a Webhook

To delete a webhook, click the **Delete** button next to the webhook you want to remove. Once deleted, no further events will be sent to that URL.

![Deleting a webhook](/img/webhooks-delete.png)

## Custom Payloads

When creating a webhook, you must specify a payload, which defines how the webhook URL receives data from Cado. The payload must be a valid JSON object and include both **\$Title** and **\$Event** values. These values tell Cado where to insert the data about the event.

:::note
Check the documentation of the application you are integrating with to ensure the payload format is correct. If the payload doesn't match the expected format, the event might not be received.
:::

### Example of a Valid Payload

```json
{
    "title": "$Title",
    "message": "$Event"
}
```

## Slack Integration

You can send notifications to a Slack channel using webhooks.

1. Follow the [Slack documentation](https://api.slack.com/messaging/webhooks#create_a_webhook) to create an incoming webhook for Slack, then copy the webhook URL.
2. In Cado, navigate to **Settings > Integrations > Webhooks** and select **New Webhook**.
3. Enter a name for your webhook and paste the Slack webhook URL. Check the "High Severity Alarms" option under events to send.
4. Set up the payload in Cado to include `$Title` and `$Event`, and format it as required by Slack:
   
   ```json
   {
       "text": "*$Title*\nDetails: $Event"
   }
   ```

For more details on Slack message payloads, see [Slack messaging documentation](https://api.slack.com/reference/messaging/payload) and [Slack message formatting with Markdown](https://api.slack.com/messaging/composing).

## Teams Integration

You can send notifications to a Microsoft Teams channel using webhooks.

1. Follow the [Microsoft Teams documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook) to create an incoming webhook, then copy the webhook URL.
2. In Cado, go to **Settings > Integrations > Webhooks** and select **New Webhook**.
3. Name your webhook and paste the Teams webhook URL. Check the "High Severity Alarms" event.
4. Set the payload format to include `$Title` and `$Event`, with a JSON key of `text`:

   ```json
   {
       "text": "**$Title**  \nDetails: $Event"
   }
   ```

Refer to the [Teams message payload documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using?tabs=cURL) and [Teams Markdown formatting](https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/cards/cards-format?tabs=adaptive-md%2Cconnector-html) for more details.

## Jira Integration

You can create Jira tickets using Cado webhooks.

1. Follow the [Jira documentation](https://confluence.atlassian.com/jirakb/working-with-incoming-webhook-data-in-automation-for-jira-1125878776.html) to create an incoming webhook in Jira.
2. Create a new webhook by selecting **Project settings** > **Automations** > **Create a Rule** > **Incoming Webhook**.
3. Choose "Then, Create a New Ticket" and use the following description:

   ```json
   {{webhookData.title}}
   {{webhookData.message}}
   ```

4. In Cado, go to **Settings > Integrations > Webhooks**, and add a new webhook with the Jira webhook URL. Select the "High Severity Alarms" event as an example.

![Jira Webhook](/img/jira_webhook.png)

More complex webhooks are available to the Detection webhooks, for example this can be set as the "Custom Payload" in Cado for the "Detection Updated" webhook:

```json
{
  "detection_id": "$detection_id",
  "event_type": "$event_type",
  "group_id": "$group_id",
  "message": "$Event",
  "title": "$Title"
}
```

And correspondingly in Jira:


Summary:
```
[{{webhookData.event_type}}] - {{webhookData.title}}
```

Description:
```
{{webhookData.message}}
```

Additional fields:
```json
{
    "update": {
        "labels": [
            {
                "set": ["Cado_Group_{{webhookData.group_id}}"]
            }
        ]
    }
}
```

## ServiceNow Integration

To integrate with ServiceNow:

1. Follow the [ServiceNow documentation](https://www.servicenow.com/community/in-other-news/how-to-integrate-webhooks-into-servicenow/ba-p/2271745) to create incoming webhooks.
2. Create the webhook in the ServiceNow project, similar to the steps outlined for Jira.