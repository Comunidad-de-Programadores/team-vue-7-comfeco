<template lang="html">
  <div>
    <p v-if="currentTime.total" class="title is-1">
      {{ `${currentTime.days} dias ${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}` }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface Time{
  total?:number,
  days?:number,
  hours?:number,
  minutes?:number,
  seconds?:number,

}

@Component({

})
export default class ForgotPassword extends Vue {
currentTime:Time = {
  total: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

@Prop({ type: String, required: true }) readonly deadline!: string;
@Prop({ type: Number, required: true }) readonly speed!: number;

mounted ():void {
  console.log('CLOCK COMPONENT MOUNTED')
  setTimeout(this.countdown, 1000)
}

countdown ():void {
  const t = Date.parse(this.deadline) - new Date().getTime()
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
    this.currentTime = {}
  }
}
}
</script>
<style lang="">

</style>
