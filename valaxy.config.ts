import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

/**
 * User Config
 * do not use export const
 */
export default defineValaxyConfig<UserThemeConfig> ({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '月光小镇',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2022,
      beian: {
        enable: true,
        icp: '苏ICP备11451400号',
      },
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },

  addons: [
    addonAlgolia({
      appId: '0JYDGFJT6N',
      apiKey: 'f884cb95e5fc3708c1c1eac9c0fa0568',
      indexName: 'hexo',
    }),
    addonWaline({
      serverURL: 'https://waline.off.cx',
      // pageview: true,
      comment: true,
    }),
  ],
})