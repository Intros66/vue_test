<template>
  <div>
    <Count/>
    <Person/>
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";
import axios from "axios";

export default {
  name: "App",
  components: { Count,Person },
  methods: {}
};
</script>

<style scoped>

</style>
