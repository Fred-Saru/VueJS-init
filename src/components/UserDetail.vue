<template>
    <div class="component detail-container">
        <h3>You may view the User Details here</h3>
        <p>My name is {{this.name}}.</p>
        <button v-on:click="changeName">Change my name</button>
        <button v-on:click="resetFn()">Reset my name</button>  
        <p>Many Details</p>
    </div>
</template>

<script>
import { EventBus } from "../main";

export default {
  props: ["name", "resetFn"],
  methods: {
    changeName() {
      this.name = "Naruto";
      EventBus.$emit("changename", this.name);
    }
  }
};
</script>

<style>
.detail-container {
  background-color: lightcoral;
}
</style>
