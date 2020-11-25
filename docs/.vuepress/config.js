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
    sidebar: {
      '/note/': [
        {
          title: 'CSS',
          collapsable: false,
          children: [
            '/note/css/grid',
            // '/note/css/grid-demo',
          ]
        },
        {
          title: 'npm',
          collapsable: false,
          children: [
            '/note/npm/started',
          ]
        },
        {
          title: 'module',
          collapsable: false,
          children: [
            '/note/module/module',
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [
            '/note/react/installation',
            '/note/react/main-concepts',
            '/note/react/advanced-guides',
            '/note/react/hook',
          ]
        },
        {
          title: 'react-router',
          collapsable: false,
          children: [
            '/note/react-router/guide',
            '/note/react-router/started',
          ]
        },
        {
          title: 'redux',
          collapsable: false,
          children: [
            '/note/redux/started',
            '/note/redux/action',
            '/note/redux/react-redux',
          ]
        },
      ],
      '/blog/': [
        {
          title: '博客',
          collapsable: false,
          children: [
            '/note/react/installation',
          ]
        },
      ]
    },
    // sidebar: [
    //   {
    //     title: 'react',
    //     collapsable: false,
    //     children: [
    //       '/note/react/started',
    //       '/note/react/composition-vs-inheritance',
    //       '/note/react/thinking-in-react',
    //     ]
    //   },
    // ],
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