<template>

    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class=" is-max-wide-screen  has-text-centered">
          <div class="columns is-flex-wrap-wrap">
            <div class="column is-12-mobile is-3-tablet">
            <Comunities />

            </div>
              <div class=" column is-12-mobile is-6-tablet">

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
              <Clock :deadline="'May 15, 2021'" :speed="1000"/>
            </div>
          <!--### END Clock ### -->
        </div>

            </div>

          </div>
      </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContentCreatorsCarrousel from '@/components/home/ContentCreatorsCarrousel.vue'
import SponsorCarrousel from '@/components/home/SponsorCarrousel.vue'
import Clock from '@/components/home/Clock.vue'
import PerfilHome from '@/components/home/PerfilHome.vue'
import Comunities from '@/components/home/Comunities.vue'

@Component({
  components: {
    Clock,
    ContentCreatorsCarrousel,
    SponsorCarrousel,
    PerfilHome,
    Comunities
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
