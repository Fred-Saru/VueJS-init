<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>New quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" v-on:click.prevent="createNew">
          Add quote
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { EventBus } from "../main";

export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      EventBus.$emit("quotecreated", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style scoped>
</style>