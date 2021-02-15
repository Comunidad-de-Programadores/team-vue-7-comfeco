<template lang="html">
  <div class="hero is-fullheight-with-navbar">
    <div class="columns is-flex is-gapless is-flex-1 is-marginless">
        <div class="column is-flex is-flex-direction-column is-two-third has-background-primary">
          <div class="column is-flex-1">

          </div>
        </div>
        <div class="column is-centered is-vcenter is-flex is-flex-direction-column has-text-centered is-one-third">
          <h1 class="title has-text-weight-bold is-3">Login Goes Here</h1>
        </div>
      </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Auth from '@/auth/auth.ts'
@Component
export default class Login extends Vue {
  created () {
    console.log(Auth.getCurrentUser())
  }
}
</script>
<style lang=""></style>
