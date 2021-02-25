<template>
  <div class="flex flex-col min-h-screen justify-center">
    <Timer deadline="05/01/2021"> </Timer>
  </div>
</template>

<script lang="js">
export default {
  template: '#timer',
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
  data () {
    return {
      currentTime: null
    }
  },
  mounted () {
    setTimeout(this.countdown, 1)
  },
  methods: {
    countdown () {
      const t = Date.parse(this.deadline) - Date.parse(new Date())
      const seconds = Math.floor((t / 1000) % 60)
      const minutes = Math.floor((t / 1000 / 60) % 60)
      const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
      const days = Math.floor(t / (1000 * 60 * 60 * 24))
      if (t > 0) {
        this.currentTime = {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        }
        setTimeout(this.countdown, this.speed)
      } else {
        this.currentTime = null
      }
    }
  }
}

</script>
