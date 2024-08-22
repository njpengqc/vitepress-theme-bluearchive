import { defineConfigWithTheme } from 'vitepress'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  name: string
  welcomeText: string
  motto: string
  social: { icon: string; url: string }[]

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
  ],
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://www.luckypqc.buzz/',
  },
  title: "luckypqc's Blog",
  description: "luckypqc's Blog",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    name: "luckypqc's Blog",
    welcomeText: 'Hello!',
    motto: '何気ない日常で、ほんの少しの奇跡を見つける物語。',
    social: [
      { icon: 'github', url: 'https://github.com/njpengqc' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/28800005' },
    ],

    //footer配置
    footerName: 'luckypqc',
    poweredList: [
      { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
      { name: 'Cloudflare', url: 'https://cloudflare.com' },
    ],

    //gitalk配置
    clientID: 'Ov23ligaoWrTZqAGZIc3',
    clientSecret: 'bb5f0b877c77bf054d6ce97c5770a6297a6c28e2',
    repo: 'vitepress-theme-bluearchive',
    owner: 'luckypqc',
    admin: ['luckypqc'],
  },
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    math: true,
  },
})
