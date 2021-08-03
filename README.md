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

## ref属性
- 1.被用来给元素或子组件注册引用信息 (id的替代者)
- 2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象 (vc)
- 3.使用方式：
    打标识：
    ```html
    <h1 ref="xxx">...</h1>  
    或 
    <School ref="xxx"></School>
    获取：this.$refs.xxx
    ```

## 配置项props
- 功能：让组件接收外部传过来的数据
  - 传递数据
    - <Demo name="xxx"/>
  - 接收数据
    - 第一种方式（只接收）
      - props:['name']
    - 第二种方式（限制类型）
      - props:{name:String}
    - 第三种方式（限制类型、限制必要性、指定默认值）
      - props:{name:{type:String,required:true,defalut:'老王'}}
- **props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。**