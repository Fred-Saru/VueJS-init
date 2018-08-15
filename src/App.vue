<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" v-on:click="selectedTemplate = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" v-on:click="selectedTemplate = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" v-on:click="selectedTemplate = 'appRed'">Load Red Template</button>
                <hr>
                <component v-bind:is="selectedTemplate">
                  <h3>I am the Blue zone !</h3>
                </component>  
            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/assignment_8/Blue.vue";
import Green from "./components/assignment_8/Green.vue";
import Red from "./components/assignment_8/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data() {
    return {
      selectedTemplate: "appBlue"
    };
  }
};
</script>

<style>
</style>
