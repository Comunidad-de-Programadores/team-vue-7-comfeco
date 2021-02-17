<template lang="html">
  <default-layout>
  <div class="hero is-fullheight-with-navbar">
    <div class="hero-body ">
      <div class="text-center is-flex is-flex-direction-column">
        <p class="title is-2">
          Error 404
        </p>
        <p class="subtitle is-4">
          Page not found
        </p>
      </div>
    </div>
  </div>
  </default-layout>

</template>
<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
    DefaultLayout,
  },
})
export default class NotFound extends Vue {}
</script>
<style lang=""></style>
