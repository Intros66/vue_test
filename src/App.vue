<template>
  <div id="app">
      <h1 v-text="msg" ref="hName"></h1>
      <button @click="showDOM">点我输出上方的DOM元素</button>
      <School ref="s"></School>
  </div>
</template>

<script>
//引入School组件
import School from './components/School'

export default {
    name: 'App',
    data() {
        return {
            msg: '欢迎'
        }
    },
     components: {
        School
    },
    methods: {
        showDOM(){
            console.log(this.$refs);
        }
    },
}
</script>

<style>

</style>