<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://w.wallhaven.cc/full/rd/wallhaven-rddgwm.jpg" alt="">
      <a slot="footer" href="www.baidu.com">美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a  href="#">单机</a>
        <a  href="#">网络</a>
      </div>
     
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot" slot="footer">
          <a  href="#">经典</a>
          <a  href="#">热门</a>
          <a  href="#">推荐</a>
        </div>
        <h4 slot="footer">欢迎观影</h4>
      </template>
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
  .container, .foot {
    display: flex;
    justify-content: space-around;
  }
  
  h4 {
    text-align: center;
  }
</style>
