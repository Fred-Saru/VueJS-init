<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <template v-for="server in servers">
                <app-server 
                  v-bind:key="server.id" 
                  v-bind:server="server"
                  ></app-server>    
            </template>  
        </ul>
    </div>
</template>

<script>
import { EventBus } from "../../main";
import Server from "./Server";

export default {
  components: {
    "app-server": Server
  },
  data() {
    return {
      servers: [
        {
          id: 1,
          status: "Stopped"
        },
        {
          id: 2,
          status: "Stopped"
        },
        {
          id: 3,
          status: "Stopped"
        },
        {
          id: 4,
          status: "Stopped"
        },
        {
          id: 5,
          status: "Missing"
        }
      ]
    };
  },
  created() {
    EventBus.$on("changeStatus", (id, status) => {
      const idx = this.servers.findIndex(server => server.id === id);
      if (idx !== -1) {
        this.servers[idx].status = status;
      }
    });
  }
};
</script>

<style>
</style>
