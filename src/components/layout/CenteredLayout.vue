<template lang="html">
    <div class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns ">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class CenteredLayout extends Vue {}
</script>
<style lang=""></style>
