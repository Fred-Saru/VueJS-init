<template>
<div class="col-sm-6 col-md-4 col-lg-3">
  <div class="panel panel-default">
    <div class="panel-body quote" v-on:click="deleteQuote">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
import { EventBus } from "../main";

export default {
  props: ["index"],
  methods: {
    deleteQuote() {
      EventBus.$emit("quotedeleted", this.index);
    }
  }
};
</script>

<style scoped>
.panel-body {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  color: #6e6e6e;
}

.quote {
  cursor: pointer;
}

.quote:hover {
  background-color: #ffe2e2;
}
</style>