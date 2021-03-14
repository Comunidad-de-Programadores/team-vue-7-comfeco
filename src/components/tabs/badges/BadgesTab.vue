<template lang="">
  <div class="columns pt-6">
    <div class="column is-4 pt-0 " v-for="badge  in badges" :key="badge.id" >
       <ElementBadge :badge="badge" :completed="badgeCompleted(badge)"  />
    </div>
  </div>
</template>
<script lang="ts">
import { Badge } from '@/models/Badge'
import { HasUserInfo } from '@/models/HasUserInfo'
import { Component } from 'vue-property-decorator'
import ElementBadge from './ElementBadge.vue'
@Component({
  components: {
    ElementBadge
  }
})
export default class BadgesTab extends HasUserInfo {
  badges = [{
    id: 1,
    name: 'badge 1',
    complete: false
  }]

  badgeCompleted (badge:Badge): boolean {
    return this.currentUserInfo.badges ? this.currentUserInfo.badges.includes(badge.name) : false
  }
}
</script>
<style lang=""></style>
