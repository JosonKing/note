module.exports = {
  title: 'Joson',
  description: `半个前端`,
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/npm/started' },
    ],
    sidebar: [
      ['/guide/npm/started', 'npm概览'],
      ['/guide/module/module', 'module概览'],
      // ['/guide/react/docs/安装/开始', 'react概览'],
      // ['/guide/react/', 'react'],
      ['/guide/react/docs/install/started', '开始'],
      ['/guide/react/docs/main-concepts/thinking-in-react', 'react哲学'],
    ],
    // sidebar: 'auto',
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