<template lang="HTML">
<div class="columns  is-flex-wrap-wrap">
  <div class="column is-12">
    <p class="title is-4 mb-1 has-text-weight-bold">Actividad Reciente </p>
  </div>
  <div class="column is-12 mb-3"  v-for="item in activities" >
      <div class="box is-flex is-justify-content-space-between is-align-items-center">
        <p class="subtitle is-5 mb-0">
          {{item.evento}}
        </p>
        <figure class="image is-64x64">
          <img src='https://bulma.io/images/placeholders/128x128.png' alt="Image">
        </figure>
      </div>
  </div>
</div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class RecentActivities extends Vue {
  activities = [{ evento: 'evento1' }, { evento: 'Charla' }];
}
</script>
<style lang=""></style>
