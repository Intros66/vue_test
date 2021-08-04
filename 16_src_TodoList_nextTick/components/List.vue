<template>
  <ul class="todo-main">
    <Item 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
      >
    </Item>
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
</style>