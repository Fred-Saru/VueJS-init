<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/shared/Header";
import Servers from "./components/server/Servers";
import ServerDetails from "./components/server/ServerDetails";
import Footer from "./components/shared/Footer";

export default {
  components: {
    "app-header": Header,
    servers: Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
