---
title: Azure AD
hide_title: true
sidebar_position: 1
---

# How to Set Up the Azure AD OAuth Integration

If you encounter any issues during the setup process, please contact support at support@cadosecurity.com and provide detailed information about your configuration.

You can enable the beta version of Azure AD OAuth Integration in Cado by navigating to **Settings > SSO > Microsoft OAuth**.

### Setting Up Azure AD SSO

1. Open the **Azure portal** and go to **Enterprise Applications**.
2. Click **New Application**.
3. Select **Create your own application**:
   - Enter a name (e.g., Cado).
   - Choose **Integrate any other application you don't find in the gallery (Non-gallery)**.
4. Make a note of the **Application ID**.

:::tip
*Optional:* Create a role to allow Azure AD users to be assigned admin privileges:

1. From the home page, go to **Azure Active Directory** and select the **App Registrations** blade.
2. Select your application (you may need to switch to the **All Applications** tab if you're not the owner).
3. Go to **App roles** and click **Create app role**.
4. Define a role value (e.g., `admin`), but you can name this role as you prefer. Make a note of the role name for later use.

   ![Azure AD Role](/img/azure-create-role.png)
:::

5. **Configure Access Control**:
   - Go to **Enterprise Applications** and open the **Properties** blade. Ensure that **User assignment required?** is set to `Yes`, meaning only assigned users can log in to Cado.
     ![Azure Properties](/img/azure-properties.png)
   - Navigate to **Users and Groups**.
   - Click **Add User/Group** to assign users who will have access to the application. If you created an admin role, you can assign users to this role to give them admin access within Cado.

6. **Create a Client Secret**:
   - From the home page, go to **Azure Active Directory** and select the **App Registrations** blade.
   - Select your application (you may need to switch to the **All Applications** tab if you're not the owner).
   - Go to the **Certificates & Secrets** blade and click **New Client Secret**.
   - Make a note of the **Value**; you will need this in Cado.

7. **Collect Required Information**:
   - In the **Overview** blade, note down the following values:
     - `Application (Client) ID`
     - `Directory (Tenant) ID`
     - `Client Secret` (from the previous step).

8. **Whitelist the Redirect URL**:
   - Go to the **Authentication** blade.
     ![Azure Authentication](/img/azure-authentication.png)
   - Click **Add a Platform**.
   - Select **Web** and input your redirect URL. This should be the URL you use to access Cado in your browser, including the `/login` path. Example: `https://my.cado.instance/login`.

9. **Add API Permissions**:
   - Go to the **API Permissions** blade.
     ![Azure API Permissions page](/img/azure-api-permissions-1.png)
   - Click **Add a permission**.
   - Select **Microsoft Graph**.
   - Choose **Delegated Permissions**.
   - Under **OpenId permissions**, select **email** and **openid**.
     ![Azure API Permissions](/img/azure-api-permissions-2.png)
   - Click **Add permissions**.

10. **Configure SSO in the Cado Platform**:
    - Log in to your Cado instance as an admin user.
    - Go to **Settings > SSO > Microsoft OAuth**.
    - Enter the Microsoft OAuth details you noted earlier.
    - In the `Admin Group Name` field, enter the value you configured in Step 4.
:::caution
Use `Admin Group Name` to configure the role (Administrator or Analyst) for first login only. Any changes to a users roles from then onwards should be managed in the platform.
:::
    
    - Click **Update**.