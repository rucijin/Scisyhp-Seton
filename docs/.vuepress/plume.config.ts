import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: 'https://github.com/rucijin/Scisyhp-Seton',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://rucijin.github.io/' },
  ],

  blog: {pagination: false},

  locales: {
    '/': {
      profile: {
        avatar: 'https://getwallpapers.com/wallpaper/full/4/b/8/12828.jpg',
        name: 'Scisyhp Seton',
        // description: 'Dirty work',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://getwallpapers.com/wallpaper/full/4/b/8/12828.jpg',
        name: 'Scisyhp Seton',
        // description: 'Dirty work',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
