import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Code Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "http://code-fragments.edevhindi.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "heera9331", // Usually your GitHub org/user name.
  projectName: "code-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/heera9331/code-docs/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/heera9331/code-docs/tree/main/blogs",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: ["./src/css/custom.css",  "./src/css/tailwind.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "https://edevhindi.com/wp-content/uploads/2024/05/e-dev-hindi.png",
    navbar: {
      title: "Code Docs",
      logo: {
        alt: "Code Docs Logo",
        src: "https://edevhindi.com/wp-content/uploads/2024/05/e-dev-hindi.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "ReactJS",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "NextJS",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "TypeScript",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "ReactJS",
              to: "/docs/category/reactjs",
            },
            {
              label: "WordPress",
              to: "/docs/category/wordpress",
            },
            {
              label: "CSS",
              to: "/docs/category/css",
            },
            {
              label: "JavaScript",
              to: "#",
            },
          ],
        },
        {
          title: "Important Links",
          items: [
            {
              label: "Privacy Policy",
              href: "/privacy-policy",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Edevhindi",
              to: "http://edevhindi.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/heera9331",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Code Fragments, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "XWMJJTP70B",
      apiKey: "035a057022d069f5f4bee8dd7c7d6513",
      contextualSearch: true,
      searchPagePath: "search",
      indexName: "code-docs",
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
