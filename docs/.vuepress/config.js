module.exports = {
  base: '/C-course-website/',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
    }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'The C Programming Language Course',
      description: 'Educational materials for course "The C Programming Language".'
    }
  },
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Lessons',
        collapsable: false,
        children: [
          '/lessons/01',
          '/lessons/02',
          '/lessons/03',
          '/lessons/04',
          '/lessons/05',
          '/lessons/06',
          '/lessons/07',
          '/lessons/08',
          '/lessons/09',
          '/lessons/10',
        ]
      },
    ],
    lastUpdated: true,
    repo: 'Vladislav-Lyuminarskiy/C-course',
    docsDir: 'docs',
    editLinks: true,
    algolia: {
      apiKey: '892ad28dc056e1eb225c126678ef1c09',
      indexName: 'c_vladislav'
    }
  },
  markdown: {
    config(md) {
      md.use(require('markdown-it-katex'));
    }
  },
  serviceWorker: true
}