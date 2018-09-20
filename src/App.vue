<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-header></app-header>
                <transition name="slide" v-bind:appear="true" mode="out-in">
                    <router-view></router-view>
                </transition>
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

.slide-enter {
    opacity: 0;
}

.slide-enter-active {
    transition: opacity 0.5s ease-out;
    animation: slide-in 0.5s ease-out forwards;
}

.slide-leave {
    opacity: 1;
    transform: translateY(0);
}

.slide-leave-active {
    transition: opacity 0.5s ease-in;
    opacity: 0;
    animation: slide-out 0.5s ease-in forwards;
}

@keyframes slide-in {
    from {
        transform: translateX(-30px);
    }
    to {
        transform: translateX(0px);
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(30px);
    }
}
</style>
