<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/header';

    export default {
        components: {
            'app-header': Header
        }
    }
</script>

<style>
</style>
