<template lang="">
  <div class="columns pt-6">
    <div class="column is-3 pt-0">
      <div class="box">
        <!--PROFILE OVERVIEW GOES HERE-->
        Perfil
        <!--END OF PROFILE OVERVIEW-->
      </div>
    </div>
    <div class="column is-6 ">
      <!--RECENT ACTIVITY  GOES HERE-->
      <Badges />
      <RecentActivities />
      <!--END OF RECENT ACTIVITY-->
    </div>
    <div class="column is-3 pt-0">
      <div class="box">
        <!--EVENTS  GOES HERE-->
        <ProfileTabEvents />
        <!--END OF EVENTS-->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Badges from './Badges.vue'
import ProfileTabEvents from './ProfileTabEvents.vue'
import RecentActivities from './RecentActivities.vue'
@Component({
  components: {
    Badges,
    ProfileTabEvents,
    RecentActivities
  }
})
export default class ProfileTab extends Vue {}
</script>
<style lang=""></style>
