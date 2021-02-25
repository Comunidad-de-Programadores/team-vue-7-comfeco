
<template>
  <div class="flex flex-col min-h-screen justify-center">
    <Clock deadline="05/01/2021"> </Clock>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component({
})
export default  class Clock extends Vue {
  @Prop({ type: String, default: false }) readonly deadline :string = "";

  template= "#timer";
  speed= 1000;
  myDate: any = new Date();
  currentTime= {};
        

        data() {
            return {
               currentTime: null
            }
        }
        mounted() {
            setTimeout(this.countdown, 1);
        }

        
        countdown() {
                let t = Date.parse(this.deadline) - Date.parse(this.myDate);
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
                    this.currentTime = {};
                }
            }
        
    }


</script>