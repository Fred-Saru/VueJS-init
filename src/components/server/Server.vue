<template>
    <li class="list-group-item"
        v-bind:class="{ selected: selected }"
        v-on:click="selectServer">
        Server #{{ server.id }}: {{ server.status }}
    </li>    
</template>

<script>
import { EventBus } from "../../main";

export default {
  props: ["server"],
  data() {
    return {
      selected: false
    };
  },
  methods: {
    selectServer() {
      this.selected = true;
      EventBus.$emit("selectServer", this.server);
    }
  },
  created() {
    EventBus.$on("selectServer", server => {
      if (server.id !== this.server.id) {
        this.selected = false;
      }
    });
  }
};
</script>

<style scoped>
.selected {
  border: 1px solid blue;
}

.list-group-item {
  margin: 0;
  cursor: pointer;
}
</style>

