<template>
  <div>
    <default-layout>
      <router-view/>
    </default-layout>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import DefaultLayout from './components/layout/DefaultLayout.vue'
@Component({
  components: {
    TheHeader,
    TheFooter,
    DefaultLayout
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import '@/assets/style.scss';
</style>
