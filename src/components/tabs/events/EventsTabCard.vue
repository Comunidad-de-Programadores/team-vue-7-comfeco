<template>
     <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              >
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-4">Community fest and code</p>
            <div class="content is-inline-flex ">
              <a
                href="#"
                class="button "
              >Abandonar</a>
              <a
                href="#"
                class="button ml-3"
              >Mas Informacion</a>
            </div>
          </div>
        </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class EventsTabCard extends Vue {
@Prop() event:any;
}
</script>
<style lang="scss">

</style>
