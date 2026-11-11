import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Exnc",
  description: "Website of exnc",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/exnc' }
    ],

  },
  lastUpdated: true
})
