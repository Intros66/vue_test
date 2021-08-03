# 笔记

## 脚手架文件结构：
![](01_src_分析脚手架\assets\tree.png)

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


## mixin(混入)
- 功能：可以把多个组件共用的配置提取成一个混入对象

**使用方式：**
- 第一步定义混合，例如：
```script
{
  data(){...},
  methods:{...}
  ...
}
```
- 第二步使用混入，例如：
  - 全局混入：Vue.mixin(xxx)
  - 局部混入：mixins:['xxx']

## 插件

- 功能：用于增强Vue
- 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
- 定义插件：
```script
对象.install = function(Vue, options){
// 1.添加全局过滤器
Vue.filter(...)

// 2.添加全局指令
Vue.directive(...)

// 3.配合全局混入
Vue.mixin(...)

// 4.添加实例方法
Vue.prototype.$myMethod = function(){...}
Vue.prototype.$myProperty = xxx

使用插件：Vue.use(plugins)
```

## 总结TodoList案例

1. 组件化编码流程：
   + 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
   + 实现动态组件：考虑好数据的存放位置，数据是一个组件再用，还是一些组件再用：
     + 一个组件在用：放在组件自身即可。
     + 一些组件在用：放在他们共同的父组件上（**状态提示**）
   + 实现交互：从绑定事件开始。
2. props适用于：
   + 父组件 ===> 子组件 通信
   + 子组件 ===> 父组件 通信（要求父先给子一个函数）
3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时，Vue不会报错，但不推荐这样做。



























