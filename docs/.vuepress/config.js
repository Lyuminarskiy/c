module.exports = {
  base: '/C-course-website/',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.css',
      integrity: 'sha384-9tPv11A+glH/on/wEu99NVwDPwkMQESOocs/ZGXPoIiLE8MU/qkqUcZ3zzL+6DuH',
      crossorigin: 'anonymous'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.js',
      integrity: 'sha384-U8Vrjwb8fuHMt6ewaCy8uqeUXv4oitYACKdB0VziCerzt011iQ/0TqlSlv8MReCm',
      crossorigin: 'anonymous'
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
    editLinks: true
  },
  markdown: {
    config(md) {
      md.use(require('markdown-it-katex'));
    }
  },
  serviceWorker: true
}