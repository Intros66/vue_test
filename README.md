# 笔记

## 脚手架文件结构：
![](src\assets\tree.png)

## 关于不同版本的Vue:
- 1.vue.js与vue.runtime.xxx.js的区别：
         1).vue.js时完整版的Vue，包含：核心功能+模板解析器。
         2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。

- 2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
         render函数接收到的createElement函数去指定具体内容。

## vue.config.js配置文件
> 使用vue inspect > output.js可以查看Vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://https://cli.vuejs.org/zh/