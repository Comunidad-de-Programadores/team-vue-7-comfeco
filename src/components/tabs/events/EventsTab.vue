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
      <EventsTabCard :event="event"/>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EventsTabCard from './EventsTabCard.vue'
@Component({
  components: {
    EventsTabCard
  }
})
export default class EventsTab extends Vue {
  events = [
    {
      name: 'Evento 1',
      description: 'Loremp ipsum etc blablab'
    }
  ]
}
</script>
<style lang=""></style>
