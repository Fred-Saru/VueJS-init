<template>
    <div class="component user-container">
        <h1>The User Component</h1>
        <p>I'm {{this.name}}, and I am Awesome !</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    v-bind:name="name" 
                    v-bind:resetFn="resetName"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from "../main";
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data() {
    return {
      name: "User"
    };
  },
  methods: {
    resetName() {
      this.name = "User";
    }
  },
  created() {
    EventBus.$on("changename", data => {
      this.name = data;
    });
  }
};
</script>

<style>
.user-container {
  background-color: lightblue;
}
</style>
