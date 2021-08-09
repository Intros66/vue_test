<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About即将被销毁");
  },
  /* mounted() {
        console.log('About挂载完毕',this);
        window.aboutRoute = this.$route
        window.aboutRouter = this.$router
    }, */

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About---beforeRouteEnter");
    if (to.meta.isAuth) {
      // 判断是否需要鉴权
      if (localStorage.getItem("school") === "尚") {
        next();
      } else {
        alert("无权限");
      }
    } else {
      next();
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
     console.log("About---beforeRouteLeave");
     next()
  }
};
</script>
