<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">HTTP</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" v-on:click="submit">Submit</button>
                <hr>
                <input class="form-control" type="text" v-model="node">
                <br><br>
                <button class="btn btn-primary" v-on:click="fetchData">Get data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, index) in users" v-bind:key="index">
                        {{u.username}}: {{u.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users:[],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                if(!this.user.username || !this.user.email) {
                    return;
                }

                // this.$http.post('data.json', this.user)
                // .then((response) => {
                //     console.log(response);
                // })
                // .catch((error) => {
                //     console.error(error);
                // });

                this.resource.save({node: this.node}, this.user);

                //this.resource.saveAlt(this.user);
            },
            fetchData() {
                this.resource.getData({node: this.node})
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                        this.users = Object.keys(data).reduce((acc, key) => {
                            acc.push(data[key]);
                            return acc;
                        }, []);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        },
        created() {
            const customAction = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };

            this.resource = this.$resource('{node}.json', {}, customAction);
        }
    }
</script>

<style>
</style>
