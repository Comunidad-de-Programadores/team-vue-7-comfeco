<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="event.imageUrl" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ event.name }}</p>
      <div class="content is-inline-flex ">
        <a @click="sendingEventImage" class="button ">Abandonar</a>
        <a
          @click="selected(event)"
          href="#"
          class="button ml-3"
          >Unirme</a
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component
export default class EventsTabCard extends Vue {
  selectedEvent: Event | null = null;
  @Prop() event: any;
  sendingEventImage (event: any): void {
    const eventUrlImage: string = event
    console.log('The "Unirme" button was pressed', eventUrlImage)
  }

  @Emit()
  selected (event: any): void {
    return event
  }
}
</script>
<style lang="scss"></style>
