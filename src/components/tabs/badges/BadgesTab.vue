<template lang="">
  <div class="columns pt-6">
    <div class="column is-3 pt-0 " v-for="badge  in badgesCompleted" :key="badge.id" >
       <ElementBadge :badge="badge"     />
    </div>
  </div>
</template>
<script lang="ts">
import BadgesMixin from '@/models/mixins/badges'
import { Component } from 'vue-property-decorator'
import ElementBadge from './ElementBadge.vue'

@Component({
  components: {
    ElementBadge
  }
})
export default class BadgesTab extends BadgesMixin {

}
</script>
<style lang=""></style>
