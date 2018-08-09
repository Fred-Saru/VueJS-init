new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertClick() {
            alert("Click !");
        },
        saveInput(event) {
            this.value = event.target.value;
        }
    }
});
