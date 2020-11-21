module.exports = {
  title: 'Joson',
  description: `半个前端`,
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      ['/guide/npm/started', 'npm概览'],
      ['/guide/module/module', 'module概览'],
      // ['/guide/react/docs/安装/开始', 'react概览'],
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