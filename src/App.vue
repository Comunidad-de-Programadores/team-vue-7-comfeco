<template>
<div>
      <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
// import SecondaryCarousel from '@/components/layout/SecondaryCarousel.vue'

@Component(
  {
    components: {
      TheHeader,
      TheFooter,
      // SecondaryCarousel
    }
  }
)
export default class App extends Vue {

}
</script>
<style lang="scss">
@import '@/assets/style.scss';
</style>
