const hljs = require('highlight.js')

module.exports = {
  title: 'v-ui',
  description: '行你所行',

  markdown: {
    extendMarkdown: md => {
      md.set({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                     hljs.highlight(lang, str, true).value +
                     '</code></pre>';
            } catch (__) {}
          }
      
          return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
      })
    }
  },

  themeConfig: {
    nav: [
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '组件',
        link: '/components/'
      }
    ],

    sidebar: {
      '/components/': [
        {
          title: '基本组件',
          collapsable: false,
          children: [
            {
              title: 'button',
              path: '/components/button'
            },
            {
              title: 'tag',
              path: '/components/tag'
            }
          ]
        },
        {
          title: '表单组件',
          collapsable: false,
          children: [
            {
              title: 'input',
              path: '/components/input'
            }
          ]
        }
      ]
    }
  }
}