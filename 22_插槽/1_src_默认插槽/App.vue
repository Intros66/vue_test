<template>
  <div class="container">
    <Category title="美食">
      <img src="https://w.wallhaven.cc/full/rd/wallhaven-rddgwm.jpg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
import axios from "axios";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods:['火锅','烧烤','龙虾'],
      games:['红警','CS','超级玛丽'],
      films:['《教父》','《悬崖之上》','《热带往事》'],
    }
  },
  methods: {}
};
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;
  }
 
</style>
