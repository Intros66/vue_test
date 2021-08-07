<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games" msg="hello">我是默认内容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
  data() {
    return {
      games: ["红警", "CS", "超级玛丽"]
    };
  }
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}

img,
video {
  width: 100%;
}
</style>