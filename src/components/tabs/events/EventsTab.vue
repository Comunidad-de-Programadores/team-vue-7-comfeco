<template >
  <div class="columns is-flex-wrap-wrap">
    <div class="column is-12">
        <div class="is-flex is-justify-content-space-between">
          <h4 class="title is-4">
            Eventos de tu interes
          </h4>
          <a
            href=""
            class=""
          >
            Ver más
          </a>
        </div>

    </div>
    <div class="column is-4" v-for="(event,index) in events" :key="index">
      <EventsTabCard  @selected="setEventsToUser($event)" :event="event"/>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventsTabCard from './EventsTabCard.vue'
import { EVENTS } from '@/config/events'
@Component({
  components: {
    EventsTabCard
  }
})
export default class EventsTab extends Vue {
  events:any = EVENTS

  setEventsToUser (event:Event):void {
    console.log(event)
  }
}
</script>
<style lang=""></style>
