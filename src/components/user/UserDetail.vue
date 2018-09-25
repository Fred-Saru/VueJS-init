<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            v-bind:to="{name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en' }, hash: '#data'}"
            class="btn btn-primary">Edit user</router-link>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        console.log('inside not loaded component.');
        next();
    }
}
</script>
