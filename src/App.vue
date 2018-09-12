<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button type="button" class="btn btn-primary" v-on:click="show = !show">Toggle show</button>
                <br><br>
                <transition name="slide">
                        <div class="alert alert-info" v-if="show">This is some info.</div>
                </transition>
                <transition 
                            enter-active-class="animated bounce"
                            leave-active-class="animated pulse">
                        <div class="alert alert-info" v-if="show">This is some info.</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>

.slide-enter {
    opacity: 0;
}

.slide-enter-active {
    transition: opacity 1s ease-in-out;
    animation: slide-in 1s ease-in-out;
}

.slide-leave {

}

.slide-leave-active {
    animation: slide-out 1s ease-in-out;
    transition: opacity 1s ease-in-out;
    opacity: 0;
}

@keyframes slide-in {
    from {
        transform: translateX(20px);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(20px);
    }
}
</style>
