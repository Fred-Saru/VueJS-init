<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quizz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <transition name="flip" mode="out-in">
                    <component :is="mode" v-on:answered="answered($event)" v-on:confirmed="confirmed"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question';
    import Answer from './components/Answer';

    export default {
        components: {
            'app-question': Question,
            'app-answer': Answer,
        },
        data() {
            return {
                mode: 'app-question'
            }
        },
        methods: {
            answered(isCorrect) {
                if(isCorrect) {
                    this.mode = 'app-answer';
                } else {
                    this.mode = 'app-question';
                }
            },
            confirmed() {
                this.mode = 'app-question';
            }
        }
    }
</script>

<style>
.flip-enter-active {
    animation: flip-in 0.8s ease-out forwards;
}

.flip-leave-active {
    animation: flip-out 0.8s ease-out forwards;
}

@keyframes flip-out {
    from {
        transform: rotateY(0deg);
    }
    to  {
        transform: rotateY(90deg);
    }
}

@keyframes flip-in {
    from {
        transform: rotateY(90deg);
    }
    to  {
        transform: rotateY(0deg);
    }
}



</style>
