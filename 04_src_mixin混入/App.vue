<template>
  <div id="app">
      <Student></Student>
      <hr/>
      <School></School>
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
            msg: '欢迎'
        }
    },
     components: {
        Student,
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