<template lang="html">
  <default-layout>
    <div class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
          <slot></slot>
          <div>
        </div>
      </div>
    </div>
  </default-layout>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HomeLayout from './DefaultLayout.vue'
@Component({
  components: {
    HomeLayout
  }
})
export default class ForgotPassword extends Vue {}
</script>
<style lang="">
</style>
