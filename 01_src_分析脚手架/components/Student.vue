<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>年龄：{{ address }}</h2>
  </div>
</template>

<script>
    /* 
        export xxx
        export {xxx}
        export default xxx
    */
    // 组件交互的代码（数据、方法等等）
    export default {
    name: "student",
    data() {
        return {
        name: "张三",
        address: 18
        };
    },

    };
</script>
