// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tachiyomi',
  tagline: 'Free and open source manga reader for Android',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kodo.moe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xhenos', // Usually your GitHub org/user name.
  projectName: 'kodo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/xhenos/kodo/tree/v3-docusaurus/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/xhenos/kodo/tree/v3-docusaurus/packages/create-docusaurus/templates/shared/',
          routeBasePath: "news",
          path: "./news",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tachiyomi-social-card.jpg',
      navbar: {
        title: 'Tachiyomi',
        logo: {
          alt: 'Tachiyomi Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/news', label: 'News', position: 'left'},
          {
            href: 'https://github.com/tachiyomiorg/tachiyomi',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Frequently Asked Questions',
                to: '/docs/category/frequently-asked-questions',
              },
              {
                label: 'Guides',
                to: '/docs/category/guides',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/tachiyomi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tachiyomiorg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tachiyomiorg/tachiyomi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tachiyomi. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
