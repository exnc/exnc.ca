import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  // Site head configuration (<head> html tag)
  head: [
    // Configuring favicons and web manifest for the site
    // See : https://favicon.io/favicon-converter/#install-your-favicon
    ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

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
