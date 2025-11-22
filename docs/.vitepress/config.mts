import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import socialLink from './socialLink.mts'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  head:[["link",{rel:"icon",href:"./vitepress-logo-mini.svgs"}]],
  description: "My Vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: './vitepress-logo-mini.svgs',

    nav:nav,

    sidebar: sidebar,

    socialLinks: socialLink,

    
    


  },
},

  
)
