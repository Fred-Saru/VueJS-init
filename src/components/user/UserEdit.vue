<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px;"></div>
        <p id="data">Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data Data </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        };
    },
    beforeRouteLeave(to, from, next) {
        next(this.confirmed);
    }
};
</script>
