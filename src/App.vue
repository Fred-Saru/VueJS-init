<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control" v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control" v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="userData.message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="userData.sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="userData.sendMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="userData.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="userData.priority">
                        <option value="C">Critical</option>
                        <option value="E">Error</option>
                        <option value="W">Warning</option>
                        <option value="I">Information</option>
                    </select>
                </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <app-switch v-model="isSwitch"></app-switch>
              </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            v-on:click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <template v-if="isSubmitted">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre-line;">Message: {{ userData.message }} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li 
                                v-for="(mail, index) in userData.sendMail"
                                v-bind:key="index">{{ mail }}</li>
                        </ul>
                        <p>Gender: {{ userData.gender }}</p>
                        <p>Priority: {{ userData.priority }}</p>
                        <p>Switched: {{ isSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
        </template>
    </div>
</template>

<script>
import Switch from "./components/Switch";

export default {
  components: {
    "app-switch": Switch
  },
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 21,
        message: "",
        sendMail: [],
        gender: "Male",
        priority: ""
      },
      isSwitch: false,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
