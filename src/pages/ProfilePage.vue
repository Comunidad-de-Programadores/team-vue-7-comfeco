<template lang="">
  <div class="profile-page">
      <div class="section">
        <b-tabs type="is-toggle" size="is-large" position="is-centered">
          <b-tab-item label="Profile" icon="account">
              <ProfileTab/>
          </b-tab-item>
          <b-tab-item label="Insignias" icon="octagram">

          </b-tab-item>
          <b-tab-item label="Grupos" icon="account-group"></b-tab-item>
          <b-tab-item label="Eventos" icon="calendar">
            <EventsTab/>
          </b-tab-item>
        </b-tabs>
      </div>

  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import ProfileTab from '@/components/tabs/profile/ProfileTab'
import EventsTab from '@/components/tabs/events/EventsTab'
@Component({
  components:
    {
      ProfileTab,
      EventsTab
    }
})
export default class ProfilePage extends Vue {

}
</script>
<style lang="scss" scoped>
  .profile-page{
    min-height: 100vh;

  }
</style>
