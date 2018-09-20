<template>
    <div>
        <h1>The User Page</h1>
        <br><br>
        <p>Welcome user!</p>
        <button class="btn btn-default" type="button" v-on:click="navigateToHome">Go to Home</button>
        <button class="btn btn-default" type="button" v-on:click="navigateBack">Go Back</button>
        <hr>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/');
        },
        navigateBack() {
            this.$router.back();
        }
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
