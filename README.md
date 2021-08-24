## Setup

clone the repo and make sure you can run locally
```console
yarn install
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
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