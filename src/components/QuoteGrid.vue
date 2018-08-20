<template>
  <div class="row">
    <template v-for="(quote, index) in quotes">
      <app-quote v-bind:key="index" v-bind:index="index">
        <span>{{quote}}</span>
      </app-quote>
    </template>
  </div>
</template>

<script>
import Quote from "./Quote";

export default {
  components: {
    "app-quote": Quote
  },
  props: ["quotes"]
};
</script>

<style>
</style>