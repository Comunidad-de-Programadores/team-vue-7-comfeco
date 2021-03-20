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
    <div class="column is-4" v-for="(event,index) in eventsArray" :key="index">
      <EventsTabCard  @selected="setEventsToUser($event)" :event="event"/>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventsTabCard from './EventsTabCard.vue'
import { EVENTS } from '@/config/events'
import EventsAPI from '@/api/events'
import Event from '@/models/Event'
import { HasUserInfo } from '@/models/HasUserInfo'
@Component({
  components: {
    EventsTabCard
  }
})
export default class EventsTab extends HasUserInfo {
  eventsArray = EVENTS
  loding = 0
  setEventsToUser (event:Event):void {
    EventsAPI.saveEventsToUser(this.currentUserInfo.id, event).then((event) => {
      console.log('Event Saved', event)
    }).catch(e => { console.error(e) })
  }
}
</script>
<style lang=""></style>
