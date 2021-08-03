<template>
  <div class="demo">
    <h2>学校名称：{{ name}}</h2>
    <h2 class="addr">学校地址：{{ address }}</h2>
  </div>
</template>

<script>

    export default {
    name: "School",
    data() {
        return {
        name: "尚kuangstudy",
        address: "北京"
        };
    },
    methods: {
      
    },
  
  };
</script>

<style lang="less" scoped>
  .demo {
    background-color: skyblue;
    .addr {
      font-size: 40px;
    }
  }
</style>
