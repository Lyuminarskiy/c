module.exports = {
  evergreen: true,
  plugins: {
    "@vuepress/back-to-top": {},
    "@vuepress/google-analytics": {
      ga: "UA-138493396-4"
    },
    "@vuepress/medium-zoom": {
      selector: ".theme-default-content img",
      options: {
        scrollOffset: 0
      }
    },
    "@vuepress/pwa": {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    mathjax: {
      target: "svg"
    }
  },
  head: [
    ["meta", {
      name: "author",
      content: "Vladislav Lyuminarskiy"
    }],
    ["meta", {
      name: "theme-color",
      content: "#5d6cbf"
    }],
    ["link", {
      rel: "icon",
      href: "/icons/icon512.png"
    }],
    ["link", {
      rel: "manifest",
      href: "/manifest.webmanifest"
    }],
    ["link", {
      rel: "license",
      href: "/LICENSE"
    }],
    ["link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"
    }]
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "The C Programming Language Course",
      description: 'Educational materials for course "The C Programming Language".'
    }
  },
  themeConfig: {
    docsDir: 'docs',
    repo: "C-course/C-course",
    editLinks: true,
    logo: "/icons/icon512.png",
    lastUpdated: "Last updated",
    editLinkText: "Edit this page",
    algolia: {
      apiKey: "892ad2d8c056e1eb225c126678ef1c09",
      indexName: "c_vladislav",
      algoliaOptions: {
        facetFilters: [
          "lang:en-US",
          "tags:c-course"
        ]
      }
    },
    sidebar: [
      "/",
      {
        title: "Lessons",
        collapsable: false,
        children: [
          "/lessons/01",
          "/lessons/02",
          "/lessons/03",
          "/lessons/04",
          "/lessons/05",
          "/lessons/06",
          "/lessons/07",
          "/lessons/08",
          "/lessons/09",
          "/lessons/10",
        ]
      },
    ]
  }
};