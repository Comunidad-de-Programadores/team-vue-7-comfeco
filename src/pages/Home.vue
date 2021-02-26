<template>

  <default-layout>

    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="subtitle is-4">Bienvenido a </p>
          <p class="title is-1 has-text-weight-bold">
            Comunity Fest and code
          </p>
          <p class="subtitle is-3">
            ¡Conoce aprende y gana!
          </p>
          <p class="subtitle ">
            La próxima edición regresa en el 2022, en la cual se planea involucrar a todos los programadores independientmente del area de conocimiento que se encuentre, todo con un mismo proposito aprender en comunidad. </p>
          <!--### Content creators coroussel ### -->
          <ContentCreatorsCarrousel />
          <!--### END Content creators coroussel ### -->

          <!--### Websites coroussel ### -->
          <SponsorCarrousel />
          <!--### END Websites coroussel ### -->

      <!--### Clock ### -->
      <div class="py-6">
      <Clock :deadline="'Mar 15, 2021'" :speed="1000"/>

      </div>
      <!--### END Clock ### -->

        </div>
      </div>
    </section>
  </default-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import ContentCreatorsCarrousel from '@/components/home/ContentCreatorsCarrousel.vue'
import SponsorCarrousel from '@/components/home/SponsorCarrousel.vue'
import Clock from '@/components/home/Clock.vue'

@Component({
  components: {
    DefaultLayout,
    Clock,
    ContentCreatorsCarrousel,
    SponsorCarrousel
  }
})
export default class Home extends Vue {
  /**
   * Create method
   */
  created () {
    console.log(this.$route.params)
  }
}
</script>
