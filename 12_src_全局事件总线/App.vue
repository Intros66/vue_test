<template>
  <div id="app">
      <h1>{{msg}}</h1>
      <School></School>
      <Student></Student>
      
  </div>
</template>

<script>
//引入School组件
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    data() {
        return {
             msg: '你好啊',
             studentName: ''
        }
    },
     components: {
        Student,
        School
    },
    methods: {
     
    }

}
</script>

<style scoped>
    #app {
        background-color: gray;
    }
</style>