<template>
  <div id="app">
      <img src="./assets/logo.png" alt="vue-logo">
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
    //引入组件
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name: 'App',
        components: {
            School,
            Student
        }
    }
</script>

<style>

</style>

