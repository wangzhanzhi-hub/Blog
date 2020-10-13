module.exports = {
    title: 'zhanzhi\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/blog/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [{text: "主页", link: "/"      },//导航栏配置

        { text: "node", link: "/node/" },
        { text: "前端", 
          items: [ 
            { text: "html", link:"/web/html/"},
            { text: "css", link:"/web/css/"},
            ]
        },
        { text: "数据库", link: "/database/"   },
        { text: "android", link: "/android/"   },
        { text: "面试问题", link: "/interview/" }
      ],
      sidebar:{
        "/node/":[
          ["", "node目录"],
          ["path", "作为前端也需要知道的路径知识"],
          ["stream", "node核心模块-stream"]
        ],
        "/web/":[
          ["", "前端"],
          {
            title: "css",
            name: "css",
            collabsable: false,
            children: [
              ["css/", "目录"],
              ['css/1', "css常考面试题"]
            ]
          }
        ]
      }, // 侧边栏配置
     // sidebarDepth: 2, // 侧边栏显示2级
    },
    plugins:[
        {
          name:"page-plugin",
          globalUIComponents:["fixed"], 
        }
      ]
  };