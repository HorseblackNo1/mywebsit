<template>
  <div>
    <h2 class="title">官方模板</h2>

    <div class="box">
      <div class="box_i" v-for="(item,index) in temList" :key="index" >
          <h2 class="box_i_t">{{item.title}}</h2>
          <div class="box_i_c">
                <p v-html="item.introduce"></p>
          </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "offtemplates",
  data() {
    return {
      temList: [
        {
          id: 0,
          title: "React",
          introduce: "React 是一个用于构建用户界面的 JAVASCRIPT 库。<br/>React 主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）<br/>  React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。<br/> React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。<a href='https://reactjs.org/'>https://reactjs.org/</a>",
          icon: ""
        },
        {
          id: 1,
          title: "Vanilla",
          introduce: "香草/Vanilla <br/> 高性能 Web 应用开发框架<br/> 香草/Vanilla是一个基于Openresty实现的高性能Web应用开发框架<br/>  <a href='https://vanilla.js.org/'>https://vanilla.js.org/</a>",
          icon: ""
        },
         {
          id: 2,
          title: "Vue",
          introduce: "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。<br/><a href='https://vanilla.js.org/'>https://vuejs.org/</a> ",
          icon: ""
        },

        {
          id: 3,
          title: "Vue 3",
          introduce: "Vue 3 中需要关注的一些新功能包括：<br/>组合式 API<br/>Teleport<br/>片段<br/>触发组件选项<br/>createRenderer API 来自 @vue/runtime-core 创建自定义渲染器<br/>单文件组件组合式 API 语法糖  <br/>单文件组件状态驱动的 CSS 变量  实验性 <br/>单文件组件  现在可以包含全局规则或只针对插槽内容的规则 <br/> <a href='https://v3.vuejs.org/guide/introduction.html'>https://v3.vuejs.org/guide/introduction.html</a> ",
          icon: ""
        },
        {
          id: 4,
          title: "Angular",
          introduce: "AngularJS 通过新的属性和表达式扩展了 HTML。<br/>AngularJS 可以构建一个单一页面应用程序（SPAs：Single Page Applications）<br/>MVC 模式<br/> <a href='https://angular.io/'>https://angular.io/</a> ",
          icon: ""
        },
         {
          id: 5,
          title: "quasar",
          introduce: " 基于Vue.js  开箱即用的提供给网站和应用程序的最先进的UI（遵循《Material指南》）开箱即用的对桌面和移动浏览器（包括iOS Safari！）的最佳支持通过与我们自己的CLI紧密集成，对每种构建模式（SPA、SSR、PWA、移动应用程序、桌面应用程序和浏览器扩展）提供了一流的支持，并提供了最佳的开发人员体验易于自定义（CSS）和可扩展（JS）这是最注重性能的框架自动tree shaking在我们的论坛和Discord聊天基础上的很棒的社区具有包括新功能在内的定期发布周期获得快速修复并听取社区的要求处理整个开发经验（甚至包括创建应用程序的图标和启动画面） Quasar（发音为/kweɪ.zɑɹ/)是MIT许可的基于Vue.js的开源框架，允许作为Web开发人员的您快速创建多种类型的responsive++网站/应用<br/> <a href='http://www.quasarchs.com/introduction-to-quasar/'>http://www.quasarchs.com/introduction-to-quasar</a> ",
          icon: ""
        },
        {
          id: 6,
          title: "static",
          introduce: "静态文件 css +  js",
          icon: ""
        },
        {
          id: 7,
          title: "Node HTTP Server",
          introduce: "引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。<br/>创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。<br/> 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。 <br/> <a href='https://www.runoob.com/nodejs/nodejs-http-server.html'>https://www.runoob.com/nodejs/nodejs-http-server.html</a> ",
          icon: ""
        },
        {
          id: 8,
          title: "Preact",
          introduce: "Preact 是 React 的轻量化替代方案，仅有 3KB。并且提供了相同的 ES6 API，还具有组件和 Virtual DOM。<br/>更接近于实质：Preact 在 DOM 上实现一个可能是最薄的一层虚拟 DOM 实现。web 是一个稳定的平台，我们是时候停止以安全的名义重新去实现它（一套新的 DOM 实现框架）。Preact也是web平台的一等公民，它将真实 dom 对应的 虚拟 dom 进行 diff，注册非虚拟的事件处理函数，并能很好地与其它库一起工作。<br/>小体积：大多数 UI 框架是相当大的，是应用程序 javascript 体积的大部份。Preact 不同：它足够小， 你的代码是你的应用程序最大的部分。这将意味可以下载更少的 javascript 代码，解析和执行 - 为您的代码节省更多的时间，所以你可以构建一个你定义的体验，而不需要受一个框架的控制。<br/>高性能：Preact 是快速的，不仅是因为它的体积，因为一个简单和可预测的 diff 实现，使它成为最快的虚拟 DOM 框架之一。它甚至包含额外的性能特性，如 批量自定义更新，可选的 异步渲染，DOM 回收和通过。<br/>轻量 & 可嵌入：Preact 是轻量的意味着你可以把一个强大的虚拟 DOM 组件范例带到一个新的地方。使用 Preact 构建应用程序的各个部分，而无需复杂的集成。将 Preact 嵌入到窗口小部件中并应用相同的工具或技术，你将可以构建一个完整的应用程序。轻量可以让你在不需要牺牲生产力的前提下得到更多的乐趣。<br/>生态系统兼容：虚拟 DOM 组件使得易于共享可重用的事物 —— 从按钮到数据提供程序。Preact 的设计意味着您可以无缝使用 React 生态系统中可用的数千个组件。增加一个简单的兼容层 preact-compat 到你的绑定库中，你甚至可以在你的系统中使用非常复杂的 React 组件。<br/><a href='https://www.htmltrip.com/sites/1636.html'>https://www.htmltrip.com/sites/1636.html</a>",
          icon: ""
        },
        {
          id: 9,
          title: "React Typescript",
          introduce: "React 是一个 “用于构建用户界面的 JavaScript 库” <br/>而 TypeScript 是一个 “可编译为普通 JavaScript 的 JavaScript类型化超集”<br/>通过同时使用它们，我们实际上是使用 JavaScript 的类型化版本来构建 UI",
          icon: ""
        },
        {
          id: 10,
          title: "Vanilla Typescript",
          introduce: "<a href='https://www.npmjs.com/package/vanilla-typescript'>https://www.npmjs.com/package/vanilla-typescript</a>",
          icon: ""
        },
        {
          id: 11,
          title: "Next.js",
          introduce: "面向生产使用的 React 框架(废话)。提供了好些开箱即用的特性，支持静态渲染/服务端渲染混用、支持 TypeScript、支持打包优化、支持按路由预加载<br/>其中，完善的静态渲染/服务端渲染支持让 Next.js 在 React 生态中独树一帜<br/>如果说 Next.js 只做了一件事，那就是预渲染(Pre-rendering)：<br/>具体的，预渲染分为两种方式：<br/>SSG(Static Site Generation)：也叫 Static Generation，在编译时生成静态 HTML<br/>SSR(Server-Side Rendering)：也叫 Server Rendering，用户请求到来时动态生成 HTML<br/> 与 SSR 相比，Next.js 更推崇的是 SSG，因为其性能优势更大(静态内容可托管至 CDN，性能提升立竿见影)。因此建议优先考虑 SSG，只在 SSG 无法满足的情况下(比如一些无法在编译时静态生成的个性化内容)才考虑 SSR、CSR",
          icon: ""
        },
        {
          id: 12,
          title: "codesandbox-nuxt",
          introduce: "nuxt.js:2016 年 10 月 25 日，zeit.co 背后的团队对外发布了 Next.js，一个 React 的服务端渲染应用框架。几小时后，与 Next.js 异曲同工，一个基于 Vue.js 的服务端渲染应用框架应运而生，我们称之为：Nuxt.js。<br/> Nuxt.js 是一个基于 Vue.js 的通用应用框架。<br/> 通过对客户端/服务端基础架构的抽象组织，Nuxt.js 主要关注的是应用的 UI 渲染。 <br/> Nuxt.js 预设了利用 Vue.js 开发服务端渲染的应用所需要的各种配置<br/> codesandbox:JavaScript线上沙箱环境 <br/>任何地方都能写代码：一个完备的线上web开发 IDE <br/> codesandbox拥有所有流行框架的模板，方便你快速创建项目 <br/>基于 React 的在线代码沙盒平台",
          icon: ""
        },
        {
          id: 13,
          title: "gatsby-starter-default",
          introduce: "Gatsby 是一个基于 React 的、免费开源的、用于搭建静态站点的框架。<br/>Gatsby 主要的应用的技术是 React 和 GraphQL，利用 Gatsby 搭建一个简单的静态站点<br/> <a herf='https://juejin.cn/post/6844903999024398343'>https://juejin.cn/post/6844903999024398343</a>",
          icon: ""
        },
        {
          id: 14,
          title: "blitz-js",
          introduce: "React 全栈框架<br/>Blitz 是一个基于 Next.js、功能齐备，并提供一个能消除 REST/GraphQL 依赖的零 API 数据抽象层的框架，受到了 Ruby on Rails 的启发。<br/> <a href='https://www.blitzjs.cn/'>https://www.blitzjs.cn/</a>",
          icon: ""
        },
        {
          id: 15,
          title: "docusaurus",
          introduce: "Docusaurus 是基于 React 构建的站点生成器。Docusaurus 帮助您快速推进和编写内容。Docusaurus 可用于构建文档网站、博客、营销页面等<br/> <a href=' https://www.docusaurus.cn/'> https://www.docusaurus.cn/</a>",
          icon: ""
        },
        {
          id: 16,
          title: "CxJS",
          introduce: "CxJS，或简称为Cx，是功能丰富JavaScript框架，用于构建复杂的Web前端，例如BI工具，仪表板和管理应用程序。 诸如React和Angular之类的现代框架为构建UI组件提供了极好的基础，但是，组件实现和许多其他应用程序方面留给开发人员去弄清楚。 CxJS试图填补这一空白，并提供现代Web应用程序所需的所有必要成分。特征CxJS使用React（或类似于Preact的React兼容库）进行DOM操作，并在其之上提供许多与UI相关的高级功能。<br/><a href='https://bbs.csdn.net/topics/399087647'> https://bbs.csdn.net/topics/399087647</a> ",
          icon: ""
        },
        {
          id: 17,
          title: "dojo-codesandbox-template",
          introduce: "Dojo 是使用 TypeScript 构建的现代 Web 应用程序的渐进式框架。<br/>为了确保 Dojo 是一组可靠的 JavaScript 工具和库，Dojo 建立在TypeScript之上。这为我们提供了结构化设计时输入以及传达 Dojo API 意图的有效方式。它还为我们提供了采用 ES6+ 语法特性的能力，但使可分发文件向后兼容 Dojo 的目标浏览器。<br/><a href='https://github.com/dojo/framework'> https://github.com/dojo/framework</a>  ",
          icon: ""
        },
        {
          id: 18,
          title: "Reason",
          introduce: "Reason是在Ocaml语言的基础上修改而来，专门提供给前端开发者使用。<br/>Reason是函数式编程语言，使用Bucklescript编译器编译成javascript语言。<br/> 在我看来，至少有两大优点：<br/>1.编译后的javascript优化得非常好，让我们能够高性能地使用函数式编程。<br/>2.强类型和类型推导，让我们既不用向Typescript那样定义很多类型（Reason会帮我们推导类型），又可以享受强类型约束的好处（编译时能检查更多的错误）。<br/><a href='https://www.cnblogs.com/chaogex/p/10528737.html'> https://www.cnblogs.com/chaogex/p/10528737.html</a>  ",
          icon: ""
        },
        {
          id: 19,
          title: "Svelte",
          introduce: "Svelte 是一种全新的构建用户界面的方法。传统框架如 React 和 Vue 在浏览器中需要做大量的工作，而 Svelte 将这些工作放到构建应用程序的编译阶段来处理。<br/>与使用虚拟（virtual）DOM 差异对比不同。Svelte 编写的代码在应用程序的状态更改时就能像做外科手术一样更新 DOM。<br/><a href='https://www.sveltejs.cn/'> https://www.sveltejs.cn/</a>  ",
          icon: " "
        },
        {
          id: 20,
          title: "Adonis",
          introduce: "是一个 Node.js Web 框架，专注于易用性与速度。它甚至是一个全栈 Web 框架，解决了许多 Web 开发难题，提供了一个干净稳定的 API，用于构建 Web 应用和微服务，或者用于 TDD（测试驱动开发）。适用于Node.js的全栈MVC框架 <br/><a href='https://adonisjs.com/'>https://adonisjs.com//</a>",
          icon: ""
        },
        {
          id: 21,
          title: "Apollo Server",
          introduce: "apollo-server是GraphQL的服务器端中间件， 也是appllo-client（GraphQL clients）的后端,建立在Node.js HTTP server上， 既有深度又有广度，同时支持react.js; vue.js; anglar.js; android, ios； 用于进一步将前后端分离，提高大型物联网项目或者拥有海量不同深度节点的大型状态树的项目的开发效率和维护效率。<br/><a href='https://zhuanlan.zhihu.com/p/58572354'>https://zhuanlan.zhihu.com/p/58572354</a>",
          icon: ""
        },
        {
          id: 22,
          title: "Ember",
          introduce: "Ember.js 是一个高效、久经考验的 JavaScript 框架，用于构建现代 Web 应用程序。它包括构建可在任何设备上运行的丰富 UI 所需的一切。<br/><a href='https://emberjs.com/'>https://emberjs.com/</a>",
          icon: ""
        },
        {
          id: 23,
          title: "SaraVieira/gridsome-starter-codesandbox",
          introduce: "",
          icon: ""
        },
        {
          id: 24,
          title: "@mdx-deck/basic-template",
          introduce: "spades: MDX-based presentation decks <br/><a href='https://www.worldlink.com.cn/en/osdir/mdx-deck.html'>https://www.worldlink.com.cn/en/osdir/mdx-deck.html</a>",
          icon: ""
        },
        {
          id: 25,
          title: "MarkoJS",
          introduce: "Marko 是将 HTML重新构想为一种用于构建动态和响应式用户界面的语言。几乎任何有效的 HTML 都是有效的 Marko，但 Marko 扩展了 HTML 语言以允许以声明方式构建现代应用程序。这些扩展包括条件、列表、状态和组件。Marko 支持单文件组件和分解成单独文件的组件。<br/><a href='https://www.npmjs.com/package/marko'>https://www.npmjs.com/package/marko</a>",
          icon: ""
        },
        {
          id: 26,
          title: "nest-typescript-starter",
          introduce: "Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。它利用 JavaScript 的渐进增强的能力，使用并完全支持 TypeScript （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP （面向对象编程）、FP （函数式编程）和 FRP （函数响应式编程）。在底层，Nest 构建在强大的 HTTP 服务器框架上，例如 Express （默认），并且还可以通过配置从而使用 Fastify ！Nest 在这些常见的 Node.js 框架 (Express/Fastify) 之上提高了一个抽象级别，但仍然向开发者直接暴露了底层框架的 API。这使得开发者可以自由地使用适用于底层平台的无数的第三方模块。 <br/><a href='https://nestjs.bootcss.com/'>https://nestjs.bootcss.com/</a>",
          icon: ""
        },
        {
          id: 27,
          title: "styleguidist/example",
          introduce: "一次专注于一个组件，查看其所有变体并通过热重载更快地工作支持 JavaScript、TypeScript 和 Flow开箱即用的 Create React App <br/><a href='https://react-styleguidist.js.org/'>https://react-styleguidist.js.org/</a> ",
          icon: ""
        },

        {
          id: 28,
          title: "universal",
          introduce: "",
          icon: ""
        },
        {
          id: 29,
          title: "VuePress",
          introduce: "VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。<br/><a href='https://www.vuepress.cn/guide/'>https://www.vuepress.cn/guide/</a>",
          icon: ""
        },
        {
          id: 30,
          title: "fastify-starter",
          introduce: "astify 是一个高度专注于以最少的开销和强大的插件架构为开发人员提供最佳开发体验的 Web 框架。 Fastify 受到 Hapi 和 Express 框架的启发。据我们所知，Fastify 是我们村最快的 web 框架之一，<br/><a href='https://www.fastify.cn/'>https://www.fastify.cn/</a>",
          icon: ""
        },
        {
          id: 31,
          title: "p5.js ",
          introduce: "p5.js 是个 JavaScript 创意编程程式库，其专注在让编程更易于使用及更加广泛的包容艺术家、设计师、教育家、初学者以及任何其他人！p5.js 是个免费及开源的软件因为我们相信所有人都应该能自由使用软件及用于学习软件的工具。p5.js 使用绘图的比喻并有一副完整的绘画功能。除此之外，您也不单限于您的绘图画布。您可以将您整个浏览器页面当作您的绘图，这包括了 HTML5 物件如文字、输入框、视屏、摄像头及音频。  <br/><a href='https://p5js.org/'>https://p5js.org/</a>",
          icon: ""
        },
        {
          id: 32,
          title: "p5.js React ",
          introduce: " React 画图 npm 插件 <br/><a href='https://www.npmjs.com/package/react-p5'>https://www.npmjs.com/package/react-p5/</a>",
          icon: ""
        },
        {
          id: 33,
          title: "algolia ",
          introduce: "站内搜索",
          icon: ""
        }
      ]
    };
  }
};
</script>
<style stcoped>
.title {
  padding-top: 20px;
  text-align: center;
}
.note {
  padding: 20px;
  font-size: 16px;
}
.box {
  padding:0 20px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 100px;
}
.box_i {
  width: 22%;
  height: 300px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  background: #f8f8f8;
  border-radius: 5px;
  transition: all 0.3s;
  border: 1px solid #f8f8f8 ;
}
.box_i:hover{
    transform:scale(1.1);
    background: #d0e69c;
    border: 1px solid #d0e69c ;
}
.box_i_t{
    text-align: center;
}
.box_i_c{
    height: 230px;
    overflow: hidden;
    overflow-y: auto;
}
</style>