<template>
  <div style="display: flex; justify-content: center">
    <div style="display: flex; flex-direction: column">
      <div style="display: flex; flex-direction: row">
        <input v-model="job" id="text-box" />
        <button id="add-button" @click="addToDo">Bir seyler ekle</button>
      </div>
      <div>
        <ul>
          <li v-for="item in ToDoList" :key="item.id">{{ item.task }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",

  data() {
    return {
      job: "",
    };
  },
  computed: {
    ...mapState({
      ToDoList: "ToDoList",
    }),
  },
  created() {
    this.$store.dispatch("TodoList");
  },
  methods: {
    addToDo: function () {
      this.$store.dispatch("SaveToDo", { task: this.job });
    },
  },
};
</script>

<style scoped>
</style>