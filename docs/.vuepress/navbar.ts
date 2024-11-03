import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '笔记',
    items: [
      {text: '普通物理', link: '/Physics/'},
      {text: '分析力学', link: '/Mechanics/'},
      {text: '电动力学', link: '/Elecdys/'},
      {text: '统计物理', link: '/Statsanics/'},
      {text: '量子力学', link: '/Quantum/'},
      {text: '场论', link: 'Fieldt'},
      {text: '群论', link: '/Groupt'},
      {text: '微积分与矢量分析', link: 'Calvec'},
    ]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  { text: 'Notes',
    items: [{text: 'English Learning', link: '/English/'}]
  },
])

