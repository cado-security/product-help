---
title: Okta OAuth
hide_title: true
sidebar_position: 2
---

# How to set-up the Okta OAuth Integration

:::warning
If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.
:::

You can now enable the beta of Okta OAuth Integration in the Cado platform by going to `Settings > SSO > Okta OAuth`.

### Setting up Okta SSO
1. Open the Okta admin dashboard and navigate to `Applications > Applications`
2. Click **Create App Integration**
3. Select
	- OIDC - OpenID Connect
	- Web Application
4. Click **Next**
5. Give the Cado OAuth app a name
6. Add a Sign-in redirect URI. This should be the url you use to access cado in the web browser, with the `/login` path. E.g. https://my.cado.instance/login
7. Choose who is granted access to the application
	- In Assignments select **Limit access to selected groups**
	- Add a user group
	- This can also be done at a later stage
	- In this example the admin group will be called `CadoAdmin`, but you can name this as you like. Just make note of what you call this; you'll need it later

	![Okta Assignments](/img/okta-assignments.png)

:::tip
If you are looking to assign non-admin users within Cado, you can use a group name other than `CadoAdmin`.  For example: adding a group `CadoNonAdmin` and assigning users to it will result in those users being Normal Users within Cado.
:::

8. If you wish to edit access control at a later time then you can do so in the **Assignments** tab of the OAuth application where you can add individual people or groups. Only users in a group named `CadoAdmin` will be granted admin user status inside the Cado platform.
9. Add a groups claim for the application:
	- Go to the **Sign On** tab of the OAuth application
	- Click **Edit** in the OpenID Connect ID Token section
	- For the Issuer field specify “Okta URL”
	- In the `Groups claim type` field select **Filter**
	- In the `Groups claim filter` leave its name **groups** and enter **Matches regex** `.*`
	- Then click **Save**

	![Okta Groups Claim](/img/okta-groups-claim.png)

10. Go to the **General settings** tab of the OAuth application and note down the `Client ID`, `Client Secret` and `Okta Domain` settings.
11. Configure SSO in cado:
	- Open your cado instance and log in as an admin user
	- Go to `Settings > SSO > Okta OAuth`
	- Enter the details from step before and click update. For the domain field please add `https://` to the beginning and `/oauth2` to the end of the Okta domain setting. The complete Domain should be of this format: `https://<Your Okta Domain>/oauth2`
	- In the `Admin Group Name` enter in the value you configured in step 7
12. Log out with your existing user, and login with Okta OAuth
