new Vue({
    el: '#exercise',
    data: {
        name: 'Fred',
        age: 25,
        image: 'https://i.pinimg.com/736x/09/c0/b4/09c0b4f760c987b3ed2c4d186abec13a.jpg'
    },
    methods: {
        random() {
            return Math.random();
        }
    }
});