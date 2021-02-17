<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="subtitle is-4">Bienvenido a </p>
        <p class="title is-1 has-text-weight-bold">
          Eventer
        </p>
        <p class="subtitle is-3">
          Una web para manejo de eventos
        </p>
        <div class="buttons  is-justify-content-center are-large">
          <router-link class="button is-primary" :to="{ path: './Register.vue'}">
            <!-- <a href="" class="button  is-primary"> -->
              Crear cuenta
            <!-- </a> -->
          </router-link>
           <a href="" class="button is-primary is-inverted ">
            Iniciar sesión
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class Home extends Vue {
  /**
   * Create method
   */
  created () {
    console.log(this.$route.params)
  }
}
</script>
