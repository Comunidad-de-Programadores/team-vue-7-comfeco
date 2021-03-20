<template lang="HTML">
  <div class="block">
    <div class="is-flex is-justify-content-space-between">
        <h4 class="title is-4">
          Eventos de tu interes
        </h4>
          <a href="" class="">
            Ver más
          </a>
    </div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image" alt="Placeholder image">
          <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"> -->
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">Community fest and code</p>
        <div class="content is-inline-flex ">
          <a href="#" class="button ">Abandonar</a>
          <a href="#" class="button ml-3">Mas Informacion</a>
        </div>
  </div>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ProfileTabEvents extends Vue {
  // @Prop();
  image = 'http://via.placeholder.com/640x360'
}
</script>
<style lang=""></style>
