# Bug

跟着教程 [Learn Next.js 中文教程 (qufei1993.github.io)](https://qufei1993.github.io/nextjs-learn-cn/) 一章章的看完写代码， [Chapter 12：Mutating 数据 - Learn Next.js 中文教程 (qufei1993.github.io)](https://qufei1993.github.io/nextjs-learn-cn/chapter12)的代码 Microsoft Edge 浏览器下一直没效果，把课程的完整代码 clone 下来，运行也是不起作用，不过课程的代码部署在vercel下访问是没问题的，所以怀疑是配置环境的问题，是不是缺少某个 package 导致的，搜索，问AI，都没找到 需要特别的package需要安装，或者nextConfig 需要开启什么配置。

被这个问题困扰了四五天了，一直想可能得原因，今天去 Next.js GitHub 的 issue里面翻找Server action的问题，看到有提到运行环境是Chrome的，就想着自己也在Chrome浏览器下试试，就OK了，就OK了，😱

想不到竟然是浏览器的问题，贴下 Microsoft Edge 版本

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21a3a1faaad84aa497f5dd1f1ef5dada~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=638&h=686&s=78892&e=png&b=f8f8f8)

可是部署版本没问题啊，那最根本的原因是什么呢？
