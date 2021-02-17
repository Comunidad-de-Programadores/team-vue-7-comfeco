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
          <router-link class="button is-primary" :to="{ path: '/auth/login' }">
            <strong>Login </strong>
          </router-link>

          <router-link class="button" :to="{ path: '/auth/register' }">
            <strong>Register </strong>
          </router-link>
            <div class="is-divider-vertical" data-content=""></div>
          <b-navbar-dropdown :label="'Lang: ' + $i18n.locale.toLocaleUpperCase()">
            <b-navbar-item @click="$i18n.locale = 'es'">
              Español
            </b-navbar-item>
            <b-navbar-item href="#" @click="$i18n.locale = 'en'">
              English
            </b-navbar-item>
          </b-navbar-dropdown>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TheHeader extends Vue {}
</script>
<style lang="scss"></style>
