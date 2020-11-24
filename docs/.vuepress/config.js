module.exports = {
  title: 'Joson',
  description: `半个前端`,
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/npm/started' },
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
    // sidebar: [
    //   {
    //     title: 'react',
    //     path: '/guide/react/',
    //     collapsable: true,
    //     sidebarDepth: 1,
    //     children: [
    //       {
    //         title: '安装',
    //         path: '/guide/react/docs/install/',
    //         collapsable: true,
    //         sidebarDepth: 1,
    //         children: [
    //           {
    //             title: '开始',
    //             path: '/guide/react/docs/install/started',
    //             collapsable: false,
    //             sidebarDepth: 1,
    //           }
    //         ]
    //       },
    //       {
    //         title: '核心',
    //         path: '/guide/react/docs/main-concepts/',
    //         collapsable: true,
    //         sidebarDepth: 1,
    //         children: [
    //           {
    //             title: '组合VS继承',
    //             path: '/guide/react/docs/main-concepts/composition-vs-inheritance',
    //             collapsable: false,
    //             sidebarDepth: 1,
    //           },
    //           {
    //             title: 'react哲学',
    //             path: '/guide/react/docs/main-concepts/thinking-in-react',
    //             collapsable: false,
    //             sidebarDepth: 1,
    //           },
    //         ]
    //       }
    //     ]
    //   },
    // ],
    sidebar: {
      '/guide/react/': [
        '/guide/react/docs/install/started',
        '/guide/react/docs/main-concepts/composition-vs-inheritance',
        '/guide/react/docs/main-concepts/thinking-in-react'
      ],

      '/guide/npm/': [
        '/guide/npm/started',
      ],

      '/guide/module/': [
        '/guide/module/module',
      ]
    },
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