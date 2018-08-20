<template>
  <div>
    <div class="form-group">
      <label for="firstname">First name</label>
      <input
              type="text"
              id="firstname"
              class="form-control" 
              v-model="value.firstname"
              v-on:input="onChangeFullname"></div>
    <div class="form-group">
      <label for="lastname">Last name</label>
      <input
              type="text"
              id="lastname"
              class="form-control" 
              v-model="value.lastname"
              v-on:input="onChangeFullname"></div>
  </div>
</template>

<script>
export default {
  props: ["value"],

  methods: {
    onChangeFullname() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<style scoped>
</style>