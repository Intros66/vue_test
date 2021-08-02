<template>
  <div id="app">
      <h2 v-text="msg" ref="title"></h2>
      <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
      <School ref="sch"></School>
  </div>
</template>

<script>
//引入School组件
import School from './components/School'

export default {
    name: 'App',
     components: {
        School
    },
    data() {
        return {
            msg: '欢迎'
        }
    },
    methods: {
        showDOM(){
            console.log(this.$refs.title); //真实DOM
            console.log(this.$refs.btn);    //真实DOM
            console.log(this.$refs.sch);    //School组件的实例对象(vc)
        }
    },
}
</script>

<style>

</style>