<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="server">
            <h3>Server Details</h3>
            <label>ID:</label><span>{{ server.id }}</span>
            <br/>
            <label>Status:</label><span>{{ server.status }}</span>
            <hr>
            <button v-on:click="startServer">Start server</button>
        </template>
        <template v-else>
            <h3>Server Details</h3>
            <p>Please select a server in the list on the left.</p>
        </template>
    </div>

</template>

<script>
import { EventBus } from "../../main";

export default {
  data() {
    return {
      server: null
    };
  },
  created() {
    EventBus.$on("selectServer", server => {
      this.server = server;
    });
  },
  methods: {
    startServer() {
      EventBus.$emit("changeStatus", this.server.id, "Running");
    }
  }
};
</script>

<style>
</style>
