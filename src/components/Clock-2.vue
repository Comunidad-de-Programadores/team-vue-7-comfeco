<template>
  <div class="flex flex-col min-h-screen justify-center">
    <Timer deadline="05/01/2021"> </Timer>
  </div>
</template>

<script>

    
Vue.component("Timer", {
  template: "#timer",
  props: {
    deadline: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      currentTime: null
    };
  },
  mounted() {
    setTimeout(this.countdown, 1);
  },
  methods: {
    countdown() {
      let t = Date.parse(this.deadline) - Date.parse(new Date());
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (t > 0) {
        this.currentTime = {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    }
  }
});

const app = new Vue({
  el: "#app"
});

</script>