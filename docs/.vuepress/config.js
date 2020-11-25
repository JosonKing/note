module.exports = {
  title: 'Joson',
  description: `半个前端`,
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '笔记', link: '/note/' },
      { text: '前端', link: '/front-end/' },
      { text: '博客', link: '/blog/' },
    ],
    sidebar: [
      {
        title: 'react',
        collapsable: false,
        children: [
          '/note/react/started',
          '/note/react/composition-vs-inheritance',
          '/note/react/thinking-in-react',
        ]
      },
    ],
    // sidebar: {
    //   '/guide/react/': [
    //     '/guide/react/docs/install/started',
    //     '/guide/react/docs/main-concepts/composition-vs-inheritance',
    //     '/guide/react/docs/main-concepts/thinking-in-react'
    //   ],

    //   '/guide/npm/': [
    //     '/guide/npm/started',
    //   ],

    //   '/guide/module/': [
    //     '/guide/module/module',
    //   ]
    // },
    lastUpdated: 'Last Updated', // string | boolean
    repo: 'JosonKing/josonking.github.io',
    repoLabel: 'Github',
    docsRepo: 'vuejs/vuepress',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page'
  }
}