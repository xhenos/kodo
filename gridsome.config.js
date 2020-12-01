// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Tachiyomi',
  siteDescription: 'Free and open source manga reader for Android',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://tachiyomi.org'),
  settings: {
    web: process.env.URL_WEB || false,
	twitter: process.env.URL_TWITTER || false,
    discord: process.env.URL_DISCORD || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/help/', title: 'Help' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/installation/',
              '/docs/writing-content/',
              '/docs/deploying/',
            ]
          },
          {
            title: 'Configuration',
            items: [
              '/docs/settings/',
              '/docs/sidebar/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    // This seems to be replace by @gridsome/vue-remark
    // { 
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     baseDir: './content',
    //     path: '**/*.md',
    //     typeName: 'MarkdownPage',
    //     remark: {
    //       externalLinksTarget: '_blank',
    //       externalLinksRel: ['noopener', 'noreferrer'],
    //       plugins: [
    //         '@gridsome/remark-prismjs'
    //       ]
    //     }
    //   }
    // },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkdownPage',
        baseDir: './content',
        template: './src/templates/MarkdownPage.vue'
      }
    }

  ]
}
