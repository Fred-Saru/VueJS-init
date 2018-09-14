<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" v-on:click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" v-on:click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" v-on:click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" v-on:click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
            </div>
        </div>
    </div>
</template>

<script>
const MODE_ADDITION = 1;
const MODE_SUBTRACTION = 2;
export default {
    data() {
        return {
            question: 'Oops, an error ocurred :/',
            btnData: [
                {correct: true, answer: 0},
                {correct: false, answer: 0},
                {correct: false, answer: 0},
                {correct: false, answer: 0}
            ]
        };
    },
    methods: {
        generateQuestion() {
            const firstNumber = this.generateRandomNumber(1, 100);
            const secondNumber = this.generateRandomNumber(1, 100);
            const modeNumber = this.generateRandomNumber(1, 2);

            let correctAnswer = 0;

            switch (modeNumber) {
                case MODE_ADDITION: 
                    correctAnswer = firstNumber + secondNumber;
                    this.question = `What is ${firstNumber} + ${secondNumber} ?`;
                    break;
                case MODE_SUBTRACTION: 
                    correctAnswer = firstNumber - secondNumber;
                    this.question = `What is ${firstNumber} - ${secondNumber} ?`;
                    break;
                default:
                    correctAnswer = 0;
                    this.question = 'Oops, an error ocurred :/';
                    break;
            }

            this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
            this.btnData[0].correct = false;
            this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
            this.btnData[1].correct = false;
            this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
            this.btnData[2].correct = false;
            this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
            this.btnData[3].correct = false;

            const correctButton = this.generateRandomNumber(0, 3);
            this.btnData[correctButton].correct = true;
            this.btnData[correctButton].answer = correctAnswer;

        },
        generateRandomNumber(a, b, c = 0) {
            const rnd = a + Math.round(Math.random() * (b - a));
            if (rnd == c) {
                this.generateRandomNumber(a, b, c);
            }
            return rnd;
        },
        onAnswer(isCorrect) {
            this.$emit('answered', isCorrect);
        }
    },
    created() {
        this.generateQuestion();
    }
}
</script>

<style scoped>
.btn {
    margin: 10px;
}
</style>


