<template>
  <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            id: this.$route.query.id,
            title: this.$route.query.title
        }
    },
    mounted() {
        console.log(this.$route);
    },

}
</script>

<style>

</style>