<template lang="html">
  <b-navbar :fixed-top="true">
    <template #brand>
      <b-navbar-item
        class="is-size-4 has-text-link has-text-weight-bold"
        tag="router-link"
        :to="{ path: '/' }"
      >
        Eventer
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link class="button is-primary" :to="{path:'/login'}">
            <strong>Login </strong>
          </router-link>

           <router-link class="button is-primary" :to="{path:'/register'}">
            <strong>Register </strong>
          </router-link>

        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TheHeader extends Vue {}
</script>
<style lang="scss"></style>
