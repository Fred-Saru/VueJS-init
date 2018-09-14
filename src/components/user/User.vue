<template>
    <div>
        <h1>The User Page</h1>
        <br><br>
        <p>Welcome user {{user.id}}!</p>
        <button class="btn btn-default" type="button" v-on:click="navigateToHome">Go to Home</button>
        <button class="btn btn-default" type="button" v-on:click="navigateBack">Go Back</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                id: this.$route.params.id || 0
            }
        };
    },
    methods: {
        navigateToHome() {
            this.$router.push('/');
        },
        navigateBack() {
            this.$router.back();
        }
    },
    watch: {
        '$route'(to, from) {
            this.user.id = to.params.id
        }
    }
}
</script>
