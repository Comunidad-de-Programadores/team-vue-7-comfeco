<template >
  <div>
      <h1 class="is-title">
        Filling bd
      </h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GroupsAPI from '@/api/Groups'

@Component
export default class FillGroupPage extends Vue {
  created () {
    /* GroupsAPI.getGroups().then((groups) => {
      groups.forEach(async (group) => {
        console.log('addin group', group)
        await GroupsAPI.getUsersGroups(group.id.toString()).then(users => {
          GroupsAPI.addGroup(group, users)
        })
      })
    }) */
  }
}
</script>
<style lang="">

</style>
