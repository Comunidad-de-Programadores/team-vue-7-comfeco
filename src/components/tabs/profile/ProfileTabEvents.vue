<template lang="HTML">
  <div class="events-container">
    <div class="is-flex  p-4 is-justify-content-space-between has-background-white" style="position:sticky;left:0;z-index:300; top:0;">
        <h4 class="title is-4">
          Eventos de tu interes
        </h4>
          <a href="" class="">
            Ver más
          </a>
    </div>
    <div class="card mb-4" v-for="event in events" :key="`event${event.id}`">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="event.imageUrl" alt="Placeholder image">
          <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"> -->
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{{event.name}}</p>
      </div>
      <div class="card-footer p-4 has-flex-wrap-wrap">
        <button class="button " @click="deleteEvent(event)">Abandonar</button>
        <a href="#" class="button ml-3">Mas Informacion</a>
      </div>
    </div>
</div>
</template>
<script lang="ts">
import Events from '@/api/events'
import Event from '@/models/Event'
import HasUserInfo from '@/models/HasUserInfo'
import { Component, Vue } from 'vue-property-decorator'
@Component({

})
export default class ProfileTabEvents extends HasUserInfo {
  // @Prop();
  image = 'http://via.placeholder.com/640x360';
  events:Event[] = []
  /**
  * Create method
  */
  async created ():Promise<void> {
    await this.fetchCurrentUser()
    this.fetchUserEvents()
  }

  /**
   * Fetch events that belongs to an user
   */
  fetchUserEvents () {
    Events.getEventsForUser(this.currentUserInfo.id).then(events => {
      this.events = events
    })
  }

  deleteEvent (event:any) {
    Events.delete(this.currentUserInfo.id.toString(), event.id.toString()).then(() => {
      this.fetchUserEvents()
    })
  }
}
</script>
<style lang="scss">

@media (min-width: 769px) {
  .events-container{
    border-radius: 6px;
    max-height: 60vh;
    overflow-y: auto;
    background: white;
    box-shadow:  0 0.5em 1em -0.125em rgba(10, 10, 10,  10%), 0 0 0 0px rgba(10, 10 ,10,  2%);
  }

}
</style>
