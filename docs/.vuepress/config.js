module.exports = {
  title: 'Joson',
  description: `半个前端`,
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/react/' },
    ],
    // sidebar: [
    //   ['/guide/npm/started', 'npm概览'],
    //   ['/guide/module/module', 'module概览'],
    //   // ['/guide/react/docs/安装/开始', 'react概览'],
    //   // ['/guide/react/', 'react'],
    //   ['/guide/react/docs/install/started', '开始'],
    //   ['/guide/react/docs/main-concepts/composition-vs-inheritance', '组合VS继承'],
    //   ['/guide/react/docs/main-concepts/thinking-in-react', 'react哲学'],
    // ],
    sidebar: [
      {
        title: 'react',
        collapsable: false,
        children: [
          '/guide/react/docs/install/started',
          '/guide/react/docs/main-concepts/composition-vs-inheritance',
          '/guide/react/docs/main-concepts/thinking-in-react',
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