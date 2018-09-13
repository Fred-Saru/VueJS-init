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
                <transition :css="false"
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @after-enter="afterEnter"
                            @enter-cancelled="enterCancelled"
                            
                            @before-leave="beforeLeave"
                            @leave="leave"
                            @after-leave="afterLeave"
                            @leave-cancelled="leaveCancelled">
                        <div class="alert alert-info" v-if="show">This is some info.</div>
                </transition>
                <hr>
                <button class="btn btn-primary" v-on:click="toggleComponent">Toggle Components</button>
                <br><br>
                <transition name="slide" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" v-on:click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item" v-for="(number, index) in numbers" v-bind:key="number" v-on:click="removeItem(index)">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import DangerAlert from "./components/DangerAlert";
import SuccesAlert from "./components/SuccessAlert";

export default {
  components: {
    "danger-alert": DangerAlert,
    "success-alert": SuccesAlert
  },
  data() {
    return {
      show: false,
      elementWidth: 100,
      selectedComponent: "success-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    toggleComponent() {
      if (this.selectedComponent === "success-alert") {
        this.selectedComponent = "danger-alert";
      } else {
        this.selectedComponent = "success-alert";
      }
    },
    beforeEnter(el) {
      this.elementWidth = 100;
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 40) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {},
    enterCancelled(el) {},
    beforeLeave(el) {
      this.elementWidth = 500;
    },
    leave(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 40) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {},
    leaveCancelled(el) {}
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
  position: absolute;
}

.slide-move {
    transition: transform 1s;
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

.list-group-item {
    cursor: pointer;
}
</style>
