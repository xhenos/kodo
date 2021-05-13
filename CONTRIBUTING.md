# Tachiyomi Website Contributing Guide

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](../CODE_OF_CONDUCT.md)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)

## Development Setup

You will need [Node.js](http://nodejs.org) **version 12+**, and [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) **version 7+**.

After cloning the repo, run:

``` bash
# Installs any dependencies needed.
$ npm install
```

To run the project now, run:

``` bash
# This command start a local server you can access and edit live.
$ npm run develop
```

### Commonly used NPM scripts

``` bash
# This command will generate a static site inside a dist directory in your project.
$ npm run build

# Run this command to start GraphQL Playground and explore your schema or data.
$ npm run explore

# This command will run all three linting scripts.
$ npm run lint

# This command will lint your Vue/JS code.
$ npm run lint:code

# This command will lint your CSS style.
$ npm run lint:style

# This command will lint your Markdown content.
$ npm run lint:markdown
```

 **Please make sure to have `npm run build` pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally.

It is also recommended you lint your files before the PR.

## Project Structure

- **`content`**: contains all the markdown files used for the website.
- **[`dist`](https://gridsome.org/docs/gridsome-cli/#build)**: contains built files for distribution. Note this directory is only updated when a release happens or when you run the build command. Changes to this folder will not carry over with Git.
- **[`src`](https://gridsome.org/docs/directory-structure/#the-src-directory)**: contains the main code files.

  - `constants.js`: all reused variables/constants is stored here.

  - [`main.js`](https://gridsome.org/docs/directory-structure/#mainjs): this file is the place to install Vue plugins, register components and directives, etc.

  - **[`assets`](https://gridsome.org/docs/directory-structure/#assets)**: contains dynamic files that can only be accessed by some Gridsome features.

  - **[`cms`](https://www.netlifycms.org/docs/gridsome/)**: contains our basic CMS files.

    - [`config.yml`](https://www.netlifycms.org/docs/configuration-options/): this contains the configuration for our CMS.

    - [`index.js`](https://www.netlifycms.org/docs/custom-widgets/): this is the file where we register our CMS components.

  - **[`components`](https://gridsome.org/docs/directory-structure/#shared-or-global-components)**: this contains all the `.vue` components used on the website.

  - **[`layouts`](https://gridsome.org/docs/directory-structure/#layouts-directory)**: this contains the `.vue` files we use to get finer control over the layout for specific pages.

  - **[`pages`](https://gridsome.org/docs/directory-structure/#pages-directory)**: this contains the `.vue` files for completely overriding a pages content for absolute control.

  - **`scripts`**: this contains the data store files used to connect features like downloads to main app and its forks.

  - **[`templates`](https://gridsome.org/docs/directory-structure/#templates-directory)**: this contains the basic template `MarkdownPage.vue` file used for the Markdown pages.
- **[`static`](https://gridsome.org/docs/directory-structure/#the-static-directory)**: contains files you want to access at a static url.

  - **`assets`**: contains the static images/videos you'll want to use for the website.
- `.env`: this file you'll need to create yourself by editing and renaming `.env.example`.
- `.env.example`: to make certain features work you'll need to add it's value here and rename it to `.env`.
- [`gridsome.config.js`](https://gridsome.org/docs/directory-structure/#gridsomeconfigjs): this file contains configuration and options for installed plugins.
- [`gridsome.server.js`](https://gridsome.org/docs/directory-structure/#gridsomeserverjs): this file is optional and is used to hook into various parts of the Gridsome server.
- [`package.json`](https://gridsome.org/docs/directory-structure/#packagejson): contains information about which plugins are installed in the project.

## Images and Videos guidelines

### Common

- Use the Android Emulator

- Use the white theme

- Preferably use local source or a self-hosted extension
  - If you are going to show a manga

- Resize to have a width of 648px

### Images

- Use `.png` format

### Videos

- Use `.webm` format
  - Encode it with our [HandBreak profile](../.github/tachiyomi-handbrake-profile.json)

- Remove audio track

## Credits

Thank you to all the people who have already contributed!

<a href="https://github.com/tachiyomiorg/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tachiyomiorg/website" />
</a>

