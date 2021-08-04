<template>
  <ul class="todo-main">
    <transition-group name="todo" appear="">
        <Item 
          v-for="todoObj in todos" 
          :key="todoObj.id" 
          :todo="todoObj" 
        >
        </Item>
    </transition-group>
  
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  props:['todos'],
  components: {
    Item
  },
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todo-enter-active {
      animation: atguigu 0.5s linear;
  }

.todo-leave-active {
    animation: aiguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from {
      transform: translateX(-100%);
  } 
  to {
        transform: translateX(0)
  }
}
</style>