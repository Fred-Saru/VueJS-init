<template>
  <div>
    <div 
          id="on"
          v-on:click="switched(true)"
          v-bind:class="{active : value}">On</div>
    <div 
          id="off"
          v-on:click="switched(false)"
          v-bind:class="{active : !value}">Off</div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    switched(newValue) {
      this.value = newValue;

      this.$emit("input", this.value);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>