<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- <div class="form-group">
                        <label for="fullname">Full name</label>
                        <input
                                type="text"
                                id="fullname"
                                class="form-control" 
                                v-model="userData.fullname">
                      </div> -->
                    <app-fullname v-model="userData.fullname"></app-fullname>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input
                                type="mail"
                                id="mail"
                                class="form-control" 
                                v-model="userData.mail">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control" 
                                v-model="userData.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <app-switch v-model="userData.isStored"></app-switch>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button 
                            class="btn btn-primary"
                            v-on:click.prevent="submit">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullname }}</p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.isStored }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from "./components/Switch";
import Fullname from "./components/Fullname";

export default {
  components: {
    "app-switch": Switch,
    "app-fullname": Fullname
  },
  data() {
    return {
      userData: {
        fullname: {
          firstname: "",
          lastname: ""
        },
        mail: "",
        password: "",
        isStored: false
      },
      isSubmitted: false
    };
  },
  methods: {
    submit() {
      this.isSubmitted = true;
    }
  },
  computed: {
    fullname() {
      return `${this.userData.fullname.firstname} ${
        this.userData.fullname.lastname
      }`;
    }
  }
};
</script>

<style>
</style>
