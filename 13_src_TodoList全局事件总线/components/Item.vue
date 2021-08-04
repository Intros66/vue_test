<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
        <!-- 如下代码也能实现功能，不过不推荐，因为违反原则，修改了props数据，
              Vue只能监测到对象的变化，对象中的数据变化不监测
        -->
        <!-- <input type="checkbox" v-model="todo.completed"/> -->
        <span>{{todo.name}}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Item",
  //声明接收todo对象
  props:['todo',],
  data() {
    return {
      
    }
  },
  methods: {
    //勾选or取消勾选
    handleCheck(id){
      //通知App组件将对应的todo对象的completed值取反
      // console.log(id);
      this.$bus.$emit('checkTodo',id)
    },
    //删除
    handleDelete(id){
      if(confirm('确定删除么？')){
       this.$bus.$emit('deleteTodo',id)
      }
      
    }
  },
 

};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>