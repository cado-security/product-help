---
title: Okta Integration (beta)
hide_title: true
sidebar_position: 2
---

# Okta OAuth Integration

:::warning
Okta OAuth integration is currently in beta.  If you encounter issues, please contact support@cadosecurity.com describing your issue and providing as much detail about your configuration as possible.
:::

You can now enable the beta of Okta OAuth Integration in Cado Response by going to `Settings > OAuth`.

### Setting up Okta SSO
1. Open the Okta admin dashboard and navigate to `Applications > Applications`
2. Click **Create App Integration**
3. Select
	- OIDC - OpenID Connect
	- Web Application
4. Click **Next**
5. Give the Cado OAuth app a name
6. Add a Sign-in redirect URI. This should be the url you use to access cado in the web browser, with the `/login` path. E.g. https://my.cado.instance/login
7. Optional: Choose who is granted access to the application
	- In Assignments select **Limit access to selected groups**
	- Add a user group
	- This can also be done at a later stage
	- If you name a group `CadoAdmin`, then any users in that group will become admin users of Cado Response when logging in

	![Okta Assignments](/img/okta-assignments.png)

8. If you wish to edit access control at a later time then you can do so in the **Assignments** tab of the OAuth application where you can add individual people or groups. Only users in a group named `CadoAdmin` will be granted admin user status inside Cado Response.
9. Add a groups claim for the application:
	- Go to the **Sign On** tab of the OAuth application
	- Click **Edit** in the OpenID Connect ID Token section
	- In the `Groups claim type` field select **Filter**
	- In the `Groups claim filter` leave its name **groups** and enter **Matches regex** `.*`
	- Then click **Save**

	![Okta Groups Claim](/img/okta-groups-claim.png)

10. Go to the **General settings** tab of the OAuth application and note down the `Client ID`, `Client Secret` and `Okta Domain` settings.
11. Configure SSO in cado:
	- Open your cado instance and log in as an admin user
	- Go to `Settings > OAuth`
	- Enter the details from step before and click update. For the domain field please add `https://` to the beginning and `/oauth2` to the end of the Okta domain setting. The complete Domain should be of this format: `https://<Your Okta Domain>/oauth2`
12. Log out with your existing user, and login with Okta OAuth
