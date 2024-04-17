import{_ as s,c as a,o as n,D as l}from"./chunks/framework.-xSKdwrn.js";const e="/assets/preview.CWb7Y8uT.webp",h=JSON.parse('{"title":"vitepress-theme-bluearchive","description":"","frontmatter":{},"headers":[],"relativePath":"readme.md","filePath":"readme.md"}'),p={name:"readme.md"},r=l('<h1 id="vitepress-theme-bluearchive" tabindex="-1">vitepress-theme-bluearchive <a class="header-anchor" href="#vitepress-theme-bluearchive" aria-label="Permalink to &quot;vitepress-theme-bluearchive&quot;">​</a></h1><p>BA主题博客，基于VitePress，绝赞画饼中</p><p><a href="https://alittfre.github.io/" target="_blank" rel="noreferrer">在线预览</a></p><p><img src="'+e+`" alt="preview"></p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><ul><li>[x] 首页横幅</li><li>[x] 文章列表</li><li>[x] 标签页面</li><li>[x] 搜索</li><li>[x] gitalk 评论</li><li>[x] 代码高亮</li><li>[x] 手机端适配</li></ul><h2 id="画饼" tabindex="-1">画饼 <a class="header-anchor" href="#画饼" aria-label="Permalink to &quot;画饼&quot;">​</a></h2><ul><li>[ ] latex 公式</li><li>[ ] RSS</li><li>[ ] more...</li></ul><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><p>安装依赖，这里是<code>yarn</code>，你也可以选你喜欢的包管理器。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code"><code><span class="line"><span>yarn install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>运行项目</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code"><code><span class="line"><span>yarn run dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打包项目</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code"><code><span class="line"><span>yarn run build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="主题配置" tabindex="-1">主题配置 <a class="header-anchor" href="#主题配置" aria-label="Permalink to &quot;主题配置&quot;">​</a></h2><p>配置文件在<code>.vitepress/config.mts</code></p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#D73A49;"> interface</span><span style="color:#6F42C1;"> ThemeConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  //banner</span></span>
<span class="line"><span style="color:#E36209;">  name</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页名字</span></span>
<span class="line"><span style="color:#E36209;">  banner</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页头图</span></span>
<span class="line"><span style="color:#E36209;">  welcomeText</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页问候语</span></span>
<span class="line"><span style="color:#E36209;">  avatar</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页头像</span></span>
<span class="line"><span style="color:#E36209;">  motto</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 首页签名</span></span>
<span class="line"><span style="color:#E36209;">  social</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">icon</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;"> }[] </span><span style="color:#6A737D;">// 首页联系方式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  //gitalk配置</span></span>
<span class="line"><span style="color:#E36209;">  clientID</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">  clientSecret</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">  repo</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">  owner</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#E36209;">  admin</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;"> string</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="文章配置" tabindex="-1">文章配置 <a class="header-anchor" href="#文章配置" aria-label="Permalink to &quot;文章配置&quot;">​</a></h2><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-light vp-code"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">标题</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#032F62;">日期</span></span>
<span class="line"><span style="color:#22863A;">tags</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">标签1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">标签2</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">文章摘要，会在文章列表中显示</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">文章主体内容</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="感谢" tabindex="-1">感谢 <a class="header-anchor" href="#感谢" aria-label="Permalink to &quot;感谢&quot;">​</a></h2><ul><li><a href="https://github.com/flaribbit/vitepress-theme-sakura" target="_blank" rel="noreferrer">vitepress-theme-sakura</a> 提供参考</li></ul>`,22),o=[r];function t(c,i,b,d,u,y){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
