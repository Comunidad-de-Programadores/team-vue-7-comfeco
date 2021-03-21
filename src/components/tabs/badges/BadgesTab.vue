<template lang="">
  <div class="columns pt-6">
    <div class="column is-3 pt-0 " v-for="badge  in badgesCompleted" :key="badge.id" >
       <ElementBadge :badge="badge"     />
    </div>
  </div>
</template>
<script lang="ts">
import { Badge } from '@/models/Badge'
import HasUserInfo from '@/models/HasUserInfo'
import { Component } from 'vue-property-decorator'
import ElementBadge from './ElementBadge.vue'
import { BADGES } from '@/config/fields'

@Component({
  components: {
    ElementBadge
  }
})
export default class BadgesTab extends HasUserInfo {
  badgeCompleted (badge:Badge): boolean {
    return this.currentUserInfo && this.currentUserInfo.badges ? this.currentUserInfo.badges.includes(badge.name) : false
  }

  get badgesCompleted (): any[] {
    return BADGES.map(badge => {
      badge.completed = this.currentUserInfo.badges ? this.currentUserInfo.badges.includes(badge.name) : false
      return badge
    })
  }
}
</script>
<style lang=""></style>
