<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTodo="addTodo"></Top>
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></List>
        <Bottom :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></Bottom>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import Top from "./components/Top";
import List from "./components/List";
import Bottom from "./components/Bottom";

export default {
  name: "App",
  components: {
    Top,
    List,
    Bottom
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    //添加一个todo
    addTodo(todo){
      this.todos.unshift(todo)
    },
    //勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.completed = !todo.completed
      })
    },
    //删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选or取消全选
    checkAllTodo(completed){
      this.todos.forEach((todo)=>{
        todo.completed = completed
      })
    },
    //清除所有已经完成的todo
    clearAllTodo(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.completed
      })
    }
  },
  watch: {
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
      
    }
  }
  
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>