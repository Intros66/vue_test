<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    getUsers(){
      console.log(this);
      //请求前更新List的数据
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errorMsg:'',users:[]})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(res => {
        console.log('请求成功了',res.data.items);
        //请求成功后更新List数据
        this.$bus.$emit('updateListData',{isLoading:false,errorMsg:'',users:res.data.items})
      },err => {
        console.log('请求失败',err);
        //请求失败后更新List数据
        this.$bus.$emit('updateListData',{isLoading:false,errorMsg:err.message,users:[]})
      })
    }
  },
};
</script>

<style>
</style>