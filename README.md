## Setup

clone the repo and make sure you can run locally
```console
yarn start

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
cmd /C "set "GIT_USER=<git username>" && set "USE_SSH=true" && yarn deploy"
```

## Folder Structure

General guidance on how the Cado Documentation should be organized:

```
/docs 
-- /cado-response
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

```