import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.off.cx',
  lang: 'zh-CN',
  title: '月光小镇',
  author: {
    name: 'Niute Fony',
	avatar: './avatar.jpg',
  },
  /**
   * 站点图标
   */
  favicon: './favicon.ico',
  /**
   * 副标题
   */
  subtitle: '一个一个恶臭的小镇.',
  description: '月光小镇，一个破破的小镇.',
  /**
   * 图片预览（Medium Zoom）
   */
  mediumZoom: {
	enable: true
	},
  social: [
    {
      name: 'RSS',
      link: './atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ群 791486694',
      link: 'https://jq.qq.com/?_wv=1027&k=1wvcCBGh',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/NiuFuyu855',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/7752885949',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=2122329713',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/526873978',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/NiuFuyu_CN',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
	  {
	    name: 'Instagram',
	    link: 'https://www.instagram.com/niufuyu_cn/',
	    icon: 'i-ri-instagram-line',
	    color: '#FF8EB3',
  	},
  	{
  	  name: 'FaceBook',
	    link: 'https://www.facebook.com/niufuyu',
	    icon: 'i-ri-facebook-circle-line',
	    color: 'blue',
	  },
	  {
	    name: 'Reddit',
	    link: 'https://www.reddit.com/user/NiuFuyu',
	    icon: 'i-ri-reddit-line',
	    color: 'red',
	  },
  	{
	    name: 'Twitch',
	    link: 'https://www.twitch.tv/nameflying_cn',
	    icon: 'i-ri-twitch-line',
  	  color: 'purple',
  	},
  	{
	    name: 'NameMC',
	    link: 'https://zh-cn.namemc.com/profile/NameFlying.1',
	    icon: 'i-ri-gamepad-line',
	    color: 'green',
	  },
  	{
	    name: 'Telegram',
	    link: 'https://t.me/NIUTECHAT_CN',
	    icon: 'i-ri-telegram-line',
	    color: '#0088CC',
  	},
    {
      name: 'Telegram Channel',
      link: 'https://t.me/NIUTE_CN',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
  	{
	    name: 'Discord',
	    link: 'https://discord.gg/8nNJaBJc5G',
	    icon: 'i-ri-discord-line',
	    color: '#5A6DE2',
	  },
    {
      name: 'E-Mail',
      link: 'mailto:me@off.cx',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱qwq！',
    methods: [
      {
        name: '支付宝',
        url: 'https://off.cx/img/zfb.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://off.cx/img/qq.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://off.cx/img/wx.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
