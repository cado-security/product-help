## Initial Setup
The below is based on the instructions outlined here https://docusaurus.io/docs/installation which outlines how to install Docusaurus.  

1. Make sure you install Node.js version >= 14 prior to installing Docusaurus.
2. Open a command window and run `npx create-docusaurus@latest default-site classic` which will scaffold a skeleton Docusaurus website. This command also creates a sub-folder called `default-site` in whatever directory you run the npx command in.
3. Change directories into the default-site folder (example: `cd default-site`) and run `npm start` to test whether the scaffold Docusaurus development server runs locally without issues.
4. Clone this repo (https://github.com/cado-security/product-help) into your local source folder (wherever you'll be maintaining the product-help code).
5. Copy the following folders from the Docusaurus "default-site" folder, created during step #2, to your local source "product-help" folder:
	- `.docusaurus`
	- `node_modules`
6. Run `npm install @cmfcmf/docusaurus-search-local` to install local search (https://github.com/cmfcmf/docusaurus-search-local)
7. Change directories into your "product-help" source folder and run `npm start`.  This should now open the Cado product-help site locally.

## Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment to Github Pages

```console
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

## Folder Structure

General guidance on how the Cado Documentation should be organized:

```
/docs 
-- /cado-response
-- -- intro
-- -- /getting-started
-- -- -- key-concepts
-- -- -- deploy
-- -- /project-and-user-management
-- -- -- projects
-- -- -- user
-- -- /importing-data
-- -- -- import
-- -- -- file-types
-- -- -- memory
-- -- /investigating
-- -- -- investigate
-- -- /settings
-- -- -- general-settings
-- -- /guides 
-- -- -- cross-account-access
-- -- -- updating
-- -- -- licensing
-- -- /integrations
-- -- /faq
-- -- -- frequently-asked-questions
-- -- /api
-- -- /release-notes
-- /cado-host
-- -- intro
-- -- run
-- -- aws-credentials
-- -- azure-credentials
-- -- google-credentials
```

## Generating PDF

After the build and deploy process, you can run the following command to generate a PDF copy of the site. Note that the site needs to be live to acquire and save the site as a PDF.  The PDF will be stored in the `/build/` folder as `guide.pdf`  Also ensure you update URL in the command below.

```console
npx mr-pdf --initialDocURLs="http://**baseurl**/docs/intro" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a" --coverTitle="Cado Response User Guide" --outputPDFFilename="build/guide.pdf"
```