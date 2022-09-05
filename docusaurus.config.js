// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LLazyEmail Documentation',
  tagline: 'Documentation for LLazyEmail',
  url: 'https://llazyemail.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LLazyEmail', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/LLazyEmail/documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/LLazyEmail/documentation/tree/main/',
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
      navbar: {
        title: 'LLazyEmail Documentation',
        logo: {
          alt: 'LLazyEmail Documentation',
          src: 'img/llazyemail.jpeg',
        },
        items: [
          
          {
            to: '/blog', 
            //type: 'doc',
            //docId: 'intro',
            position: 'left',
            label: 'Documentation Archive',
          },
          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LLazyEmail/documentation',
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
//               {
//                 label: 'Intro',
//                 to: '/docs/intro',
//               },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LLazyEmail/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LLazyEmail, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
