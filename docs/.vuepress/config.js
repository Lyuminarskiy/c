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
      '/practice/lesson01',
      '/practice/lesson02',
      '/practice/lesson03',
      '/practice/lesson04',
      '/practice/lesson05',
      '/practice/lesson06',
      '/practice/lesson07',
      '/practice/lesson08',
      '/practice/lesson09',
      '/practice/lesson10',
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      listType: "ol"
    },
    config(md) {
      md.use(require('markdown-it-katex'));
    }
  },
  serviceWorker: true
}