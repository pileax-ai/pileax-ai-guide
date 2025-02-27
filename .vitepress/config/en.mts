import { defineConfig } from 'vitepress'
import { nav } from './theme/nav'
import { sidebarGuide, sidebarComponent, sidebarDeepSeek } from './theme/sidebar'
import { labels } from './theme/labels'
import { name, description, repo } from '../meta'

const locale = 'en';

export default defineConfig({
  title: name,
  description: description,
  themeConfig: {
    ...labels(locale),
    nav: nav(locale),
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide(locale) },
      '/component/': { base: '/component/', items: sidebarComponent(locale) },
      '/deepseek/': { base: '/deepseek/', items: sidebarDeepSeek(locale) },
    },
    editLink: {
      pattern: `${repo}/edit/main/src/:path`,
      text: "Edit this page",
    },
  },
  head: [
  ],
})