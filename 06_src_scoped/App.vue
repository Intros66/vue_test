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
            
        }
    },
     components: {
        Student,
        School
    },

}
</script>

<style>

</style>