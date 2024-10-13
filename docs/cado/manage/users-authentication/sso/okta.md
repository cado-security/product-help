---
title: Okta OAuth
hide_title: true
sidebar_position: 2
---

# How to Set Up the Okta OAuth Integration

:::warning
If you encounter issues, please contact support@cadosecurity.com and provide detailed information about your configuration.
:::

You can enable the Okta OAuth Integration beta in the Cado platform by navigating to `Settings > SSO > Okta OAuth`.

### Setting up Okta SSO

1. Open the Okta admin dashboard and go to `Applications > Applications`.
2. Click **Create App Integration**.
3. Select:
   - **OIDC - OpenID Connect**
   - **Web Application**
4. Click **Next**.
5. Name the Cado OAuth app.
6. Add a **Sign-in Redirect URI**. This should be the URL you use to access Cado, followed by `/login` (e.g., https://my.cado.instance/login).
7. Select who will have access to the application:
   - In **Assignments**, choose **Limit access to selected groups**.
   - Add a user group. You can assign users later if needed.
   - In this example, the admin group is named `CadoAdmin`, but you can use any name. Keep note of it for later steps.

   ![Okta Assignments](/img/okta-assignments.png)

:::tip
To assign non-admin users within Cado, create a group with a different name (e.g., `CadoNonAdmin`), and users in that group will be Normal Users in the Cado platform.
:::

8. To adjust access control later, go to the **Assignments** tab of the OAuth application, where you can add individuals or groups. Only users in the `CadoAdmin` group will have admin status in Cado.
9. Add a **Groups Claim** for the application:
   - Go to the **Sign On** tab of the OAuth application.
   - Click **Edit** in the **OpenID Connect ID Token** section.
   - In the **Issuer** field, specify the **Okta URL**.
   - For **Groups claim type**, select **Filter**.
   - Set **Groups claim filter** to **groups** and enter **Matches regex** `.*`.
   - Click **Save**.

   ![Okta Groups Claim](/img/okta-groups-claim.png)

10. In the **General Settings** tab of the OAuth application, note down the `Client ID`, `Client Secret`, and `Okta Domain`.
11. Configure SSO in Cado:
    - Log in to your Cado instance as an admin.
    - Go to `Settings > SSO > Okta OAuth`.
    - Enter the details from the previous step and click **Update**. For the domain, add `https://` at the beginning and `/oauth2` at the end. The complete domain should look like this: `https://<Your Okta Domain>/oauth2`.
    - Enter the `Admin Group Name` value from step 7.
12. Log out and log in using Okta OAuth.