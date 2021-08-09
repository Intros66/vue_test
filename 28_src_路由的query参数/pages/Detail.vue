<template>
  <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
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
    }

}
</script>

<style>

</style>