module.exports = {
  base: '/C-course-website/',
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
    editLinks: true
  },
  markdown: {
    toc: {
      listType: "ol"
    },
    config(md) {
      md.use(require('markdown-it-katex'));
    }
  },
  serviceWorker: true
}