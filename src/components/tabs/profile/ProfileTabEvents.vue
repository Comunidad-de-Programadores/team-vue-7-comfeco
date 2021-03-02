<template lang="HTML">
  <div class="hero-head py-1 has-text-centered">
    <nav class="navbar">
      <div class="navbar-menu is-justify-content-space-between">
          <a href="" class="navbar-item is-active has-text-left">
            Eventos de tu interes
          </a>
          <a href="" class="navbar-item is-active  ml-6 pl-3 has-text-right">
            Apoyar Iniciativa
          </a>
      </div>
    </nav>
    <div class="container py-6 ">
      <figure class="image is-3by1">
        <img src="https://bulma.io/images/placeholders/128x128.png">
      </figure>
    </div>
    <div class="card">
  <div class="card-content">
    <p class="py-3 has-text-left">Community fest and code</p>
    <div class="content is-inline-flex ">
      <a href="#" class="button is-rounded">Abandonar</a>
      <a href="#" class="button is-rounded ml-3">Mas Informacion</a>
    </div>
  </div>
</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ProfileTabEvents extends Vue {}
</script>
<style lang=""></style>
